import { CCClass, Enum, Node, Prefab, _decorator } from "cc";
import { MyComponent } from "../../../Common/Game/MyComponent";
import { FloorType } from "./FloorType";

const { ccclass, property } = _decorator;

@ccclass('Floor')
export class Floor extends MyComponent {
    @property({ tooltip: "地板ID,只读", readonly: true })
    readonly ID: number = 10001;
    @property({ tooltip: "地板前进方向枚举", type: Enum(FloorType) })
    floorType: FloorType = FloorType.FRONT;

    IsNowFloor(): boolean {
        if (this.node.worldPosition.x <= 1.5 && this.node.worldPosition.x >= -1.5 && this.node.worldPosition.z <= 1.5 && this.node.worldPosition.z >= -1.5) {
            return true;
        } else {
            return false;
        }
    }

}