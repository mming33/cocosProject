import { _decorator, Component, Node } from 'cc';
import { EventTpye } from './Common/Events/EventTpye';
import { MyEvent } from './Common/Events/MyEvent';
import { MyListCommon } from './Common/MyMath/MyListCommon';
import { PopupManager } from './Common/Popup/PopupManager';
import { SoundManager } from './Common/Sound/SoundManager';
import { StateMachine } from './Common/StateMachine/StateMachine';
import { StateType } from './Common/StateMachine/StateType';
import { DataStorage } from './Common/Storage/DataStorage';
const { ccclass, property } = _decorator;

@ccclass('TESTSCRIPT')
export class TESTSCRIPT extends Component {

    button1() {
        // PopupManager.I.ShowPopup("LevelPopup");
        StateMachine.ChangeState(StateType.MainSceneStartState,StateType.ChooseLevelState);
    }
    button2() {
        StateMachine.ChangeState(StateType.MainSceneStartState,StateType.ChooseEndlessModeState);
    }



}
