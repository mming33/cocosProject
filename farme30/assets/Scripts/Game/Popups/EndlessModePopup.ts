import { _decorator, Component, Node, director } from 'cc';
import { Popup } from '../../Common/Popup/Popup';
import { StateMachine } from '../../Common/StateMachine/StateMachine';
import { StateType } from '../../Common/StateMachine/StateType';
const { ccclass, property } = _decorator;

@ccclass('EndlessModePopup')
export class EndlessModePopup extends Popup {
    close() {
        director.loadScene("GameScene");
        let data = {
            type: "endlessMode"
        }
        StateMachine.ChangeState(StateType.ChooseEndlessModeState, StateType.StartGameState, null, data)
    }
}
