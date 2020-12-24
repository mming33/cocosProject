import { CCClass, director, Enum, instantiate, math, Node, Prefab, Quat, System, systemEvent, v3, Vec3, _decorator } from "cc";
import { DEBUG, EDITOR } from "cce.env";
import { MyComponent } from "../../../Common/Game/MyComponent";
import { Door } from "./Door";
import { DoorType } from "./DoorType";
import { Floor } from "./Floor";
import { FloorType } from "./FloorType";

const { ccclass, property } = _decorator;

@ccclass('FloorManager')
export class FloorManager extends MyComponent {

    static I: FloorManager;
    @property(Prefab)
    floorPrefabs: Prefab[] = [];
    @property(Node)
    Camera: Node | null = null;
    @property(Node)
    Player: Node | null = null;
    /**所有的地板 */
    allFloors: Floor[] = [];
    /**游戏模式 */
    type: string = "level";
    /**随机地板个数模式 */
    randomIndex: number = 0;
    /**上一个地板 */
    lastNode: Node | null = null;
    /**上一个地板 方向类型*/
    lastFloorType = FloorType.FRONT;
    /**同方向类型的地板个数*/
    frontNumber: number = 0;
    /**移动速度*/
    movespeed: number = 5;
    /**x方向*/
    moveSpeedx: number = 0;
    /**z方向*/
    moveSpeedz: number = 0;
    /**当前地板索引*/
    nowFloorIndex: number = 0;
    /**摄像机角度*/
    cameraAngle: number = 0;

    onLoad() {
        FloorManager.I = this.node.getComponent(FloorManager) as FloorManager;
    }
    Init() {

        // this.CreateFloorForJson(this.data);
    }

    CreateFloor(FloorID: number): Node | null {
        for (let i = 0; i < this.floorPrefabs.length; i++) {
            const element = (this.floorPrefabs[i].data as Node).getComponent(Floor) as Floor;
            if (element.ID == FloorID) {
                let floor = instantiate(this.floorPrefabs[i]);
                this.allFloors.push(floor.getComponent(Floor) as Floor);
                return floor;
            }
        }
        console.error("创建地板失败,不存在ID为:", FloorID, "的地板,请检查后重试!");
        return null
    }
    CreateFloorForJson(json: any) {
        // json = this.data;
        let node = this.node;
        for (let i = 0; i < json.floorData.length; i++) {
            const element = json.floorData[i];
            const id = Number(element) + 10000;
            let floorNode = this.CreateFloor(id);
            if (floorNode) {
                let type = this.SetNewFloorTypeData(floorNode, json, i);
                if (i == 0) {
                    floorNode.setWorldPosition(0, 0, 0);
                    this.lastNode = floorNode;
                } else {
                    this.SetFloorNodePosition(type, floorNode);
                }
                node.addChild(floorNode);
            }

        }
    }

    CreateFloorForRandom() {
        // json = this.data;
        let node = this.node;
        let floorNode;
        let floor = { floorType: FloorType.FRONT };
        if (this.randomIndex <= 5) {
            const id = Number(1) + 10000;
            floorNode = this.CreateFloor(id);
            floor.floorType = FloorType.FRONT;
        } else {
            const id = Number(1) + 10000;
            floorNode = this.CreateFloor(id);
            if (this.lastFloorType == FloorType.FRONT) {
                if (this.frontNumber >= 5 && Math.random() < 0.2) {
                    this.frontNumber = 0;
                    if (Math.random() < 0.5)
                        floor.floorType = FloorType.LEFT;
                    else
                        floor.floorType = FloorType.RIGHT;
                } else {
                    this.frontNumber++;
                    floor.floorType = FloorType.FRONT;
                }
            } else if (this.lastFloorType == FloorType.LEFT || this.lastFloorType == FloorType.RIGHT) {
                if (this.frontNumber >= 5 && Math.random() < 0.2) {
                    this.frontNumber = 0;
                    floor.floorType = FloorType.FRONT;
                } else {
                    this.frontNumber++;
                    floor.floorType = this.lastFloorType;
                }
            }
        }

        if (floorNode) {
            let f = floorNode.getComponent(Floor) as Floor;
            f.floorType = floor.floorType;
            this.lastFloorType = floor.floorType;
            if (this.randomIndex == 0) {
                floorNode.setWorldPosition(0, 0, 0);
                this.lastNode = floorNode;
            } else {
                this.SetFloorNodePosition(floor.floorType, floorNode);
            }
            node.addChild(floorNode);
            this.randomIndex++;
        }

    }

    private SetFloorNodePosition(type: FloorType, floorNode: Node) {
        if (!this.lastNode) return;
        switch (type) {
            case FloorType.FRONT:
                floorNode.setWorldPosition(this.lastNode.worldPosition.x, 0, this.lastNode.worldPosition.z - 3);
                break;
            case FloorType.BACK:
                floorNode.setWorldPosition(this.lastNode.worldPosition.x, 0, this.lastNode.worldPosition.z + 3);
                break;
            case FloorType.LEFT:
                floorNode.setWorldPosition(this.lastNode.worldPosition.x - 3, 0, this.lastNode.worldPosition.z);
                break;
            case FloorType.RIGHT:
                floorNode.setWorldPosition(this.lastNode.worldPosition.x + 3, 0, this.lastNode.worldPosition.z);
                break;
            default:
                break;
        }
        this.lastNode = floorNode;
    }

    /**创建时根据json数据设置新地板的方向属性 */
    private SetNewFloorTypeData(floorNode: Node, json: any, i: number): FloorType {
        let floor = floorNode.getComponent(Floor) as Floor;
        if (floor) {
            switch (json.floorDirectionData[i]) {
                case '1':
                    floor.floorType = FloorType.FRONT;
                    break;
                case '2':
                    floor.floorType = FloorType.BACK;
                    break;
                case '3':
                    floor.floorType = FloorType.LEFT;
                    break;
                case '4':
                    floor.floorType = FloorType.RIGHT;
                    break;
                default:
                    throw new Error("找不到类型:" + json.Level1.floorDirectionData[i])
            }
            return floor.floorType;
        }
        throw new Error("找不到类型:" + json.Level1.floorDirectionData[i])
    }
    onUpDate(dt: number) {
        this.MoveFloor(dt);
    }
    MoveFloor(dt: number) {
        if (!this.allFloors[this.nowFloorIndex]) return;
        if (!this.allFloors[this.nowFloorIndex].IsNowFloor()) {

            if (this.type == "endlessMode") {
                if (this.nowFloorIndex == 5)
                    this.RemoveFloor();
                else {
                    this.nowFloorIndex++;
                }
                // if (this.nowFloorIndex > 2) {
                // this.nowFloorIndex = 2;
                // }
                this.CreateFloorForRandom();
            } else {
                this.nowFloorIndex++;
            }
            // if (this.nowFloorIndex == 1)

            // this.nowFloorIndex--;
        }
        //若下个结点存在 并且与当前结点的类型不同
        if (this.allFloors[this.nowFloorIndex] && this.allFloors[this.nowFloorIndex + 1]) {
            if (this.nowFloorIndex + 1 < this.allFloors.length && this.allFloors[this.nowFloorIndex + 1].floorType != this.allFloors[this.nowFloorIndex].floorType) {
                //应该转向
                if (Vec3.distance(this.allFloors[this.nowFloorIndex].node.worldPosition, new Vec3(0, 0, 0)) < 0.1) {
                    switch (this.allFloors[this.nowFloorIndex + 1].floorType) {
                        case FloorType.FRONT:
                            this.MoveFront();
                            break;
                        case FloorType.BACK:
                            this.MoveBack();
                            break;
                        case FloorType.LEFT:
                            this.MoveLeft();
                            break;
                        case FloorType.RIGHT:
                            this.MoveRight();
                            break;
                        default:
                            this.MoveStop();
                            break;
                    }
                }
            }
            //转摄像头
            switch (this.allFloors[this.nowFloorIndex + 1].floorType) {
                case FloorType.FRONT:
                    this.cameraAngle = 0;
                    break;
                case FloorType.BACK:
                    this.cameraAngle = 180;
                    break;
                case FloorType.LEFT:
                    this.cameraAngle = 90;
                    break;
                case FloorType.RIGHT:
                    this.cameraAngle = -90;
                    break;
            }
        }
        let out = new Vec3(0, 0, 0);
        let angle = new Vec3(0, 0, 0);
        this.Camera?.getWorldRotation().getEulerAngles(angle)
        Vec3.lerp(out, angle, new Vec3(0, this.cameraAngle, 0), 0.1);
        this.Camera?.setRotationFromEuler(out.x, out.y, out.z);
        this.Player?.setRotationFromEuler(out.x, out.y, out.z);
        for (let i = 0; i < this.allFloors.length; i++) {
            const element = this.allFloors[i];
            element.node.setWorldPosition(element.node.worldPosition.x + (this.moveSpeedx * this.movespeed * dt), 0, element.node.worldPosition.z + (this.moveSpeedz * this.movespeed * dt));
        }
    }

    RemoveFloor() {
        this.allFloors[0].node.destroy();
        this.allFloors.splice(0, 1);
    }
    startMove() {
        this.moveSpeedx = 0;
        this.moveSpeedz = 1;
    }
    MoveFront() {
        this.moveSpeedx = 0;
        this.moveSpeedz = 1;
    }
    MoveBack() {
        this.moveSpeedx = 0;
        this.moveSpeedz = -1;
    }
    MoveLeft() {
        this.moveSpeedx = 1;
        this.moveSpeedz = 0;
    }
    MoveRight() {
        this.moveSpeedx = -1;
        this.moveSpeedz = 0;
    }
    MoveStop() {
        this.moveSpeedx = 0;
        this.moveSpeedz = 0;
    }
}