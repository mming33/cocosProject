import { CCClass, director, Enum, instantiate, Node, Prefab, Quat, System, systemEvent, v3, Vec3, _decorator } from "cc";
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
    allFloors: Floor[] = [];

    data = {
        Level1: {
            floorData: "111111111111111111111111",
            floorDirectionData: "111333222333111111111444",
            doorData: "000000000000000000000000"
        }
    }

    onLoad() {
        FloorManager.I = this.node.getComponent(FloorManager) as FloorManager;
    }
    Init() {
        // let door = this.CreateFloor(10001);
        // if (door) {
        //     this.node.addChild(door);
        //     door.position = new Vec3(0, 0, 0)
        // }
        this.CreateFloorForJson(this.data);
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
        let x = 0;
        let z = 0;
        for (let i = 0; i < json.Level1.floorData.length; i++) {
            const element = json.Level1.floorData[i];
            const id = Number(element) + 10000;
            let floorNode = this.CreateFloor(id);
            if (floorNode) {
                let type = this.SetNewFloorTypeData(floorNode, json, i);
                if (i == 0) {
                    floorNode.setWorldPosition(0, 0, 0);
                } else {
                    ({ z, x } = this.SetFloorNodePosition(type, z, floorNode, x));
                }
                node.addChild(floorNode);
            }

        }
    }

    private SetFloorNodePosition(type: FloorType, z: number, floorNode: Node, x: number) {
        switch (type) {
            case FloorType.FRONT:
                z = z - 3;
                floorNode.setWorldPosition(x, 0, z);
                break;
            case FloorType.BACK:
                z = z + 3;
                floorNode.setWorldPosition(x, 0, z);
                break;
            case FloorType.LEFT:
                x = x - 3;
                floorNode.setWorldPosition(x, 0, z);
                break;
            case FloorType.RIGHT:
                x = x + 3;
                floorNode.setWorldPosition(x, 0, z);
                break;
            default:
                break;
        }
        return { z, x };
    }

    /**创建时根据json数据设置新地板的方向属性 */
    private SetNewFloorTypeData(floorNode: Node, json: any, i: number): FloorType {
        let floor = floorNode.getComponent(Floor) as Floor;
        if (floor) {
            switch (json.Level1.floorDirectionData[i]) {
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

    RemoveFloor() {
        this.floorPrefabs.splice(0, 1);
    }
    movespeed: number = 3;
    moveSpeedx: number = 0;
    moveSpeedz: number = 0;
    nowFloorIndex: number = 0;
    cameraAngle: number = 0;

    onUpDate(dt: number) {
        this.MoveFloor(dt);
    }



    MoveFloor(dt: number) {
        if (!this.allFloors[this.nowFloorIndex]) return;
        if (!this.allFloors[this.nowFloorIndex].IsNowFloor()) {
            this.nowFloorIndex++;
        }
        //若下个结点存在 并且与当前结点的类型不同
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
        console.log(angle);
        Vec3.lerp(out, angle, new Vec3(0, this.cameraAngle, 0), 0.1);
        // console.log(angle);

        this.Camera?.setRotationFromEuler(out.x, out.y, out.z);
        this.Player?.setRotationFromEuler(out.x, out.y, out.z);
        for (let i = 0; i < this.allFloors.length; i++) {
            const element = this.allFloors[i];
            element.node.setWorldPosition(element.node.worldPosition.x + (this.moveSpeedx * this.movespeed * dt), 0, element.node.worldPosition.z + (this.moveSpeedz * this.movespeed * dt));
        }
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