import { CCClass, Enum, Node, Prefab, _decorator } from "cc";
import { MyComponent } from "../../../Common/Game/MyComponent";
import { DoorType } from "./DoorType";

const { ccclass, property } = _decorator;

@ccclass('Door')
export class Door extends MyComponent {
    @property({ readonly: true })
    readonly ID: number = 10001;
    @property({ type: Enum(DoorType) })
    doorType: DoorType = DoorType.ScaleDoor;
    @property({ slide: true, range: [0, 1, 0.001] })
    canPassMinScaleX: number = 0.2;
    @property({ slide: true, range: [0, 1, 0.001] })
    canPassMaxScaleX: number = 0.2;


    Init() {

    }

}