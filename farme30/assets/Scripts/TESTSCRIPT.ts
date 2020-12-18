import { _decorator, Component, Node } from 'cc';
import { EventTpye } from './Common/Events/EventTpye';
import { MyEvent } from './Common/Events/MyEvent';
import { MyListCommon } from './Common/MyMath/MyListCommon';
import { PopupManager } from './Common/Popup/PopupManager';
import { SoundManager } from './Common/Sound/SoundManager';
import { StateMachine } from './Common/StateMachine/StateMachine';
import { DataStorage } from './Common/Storage/DataStorage';
const { ccclass, property } = _decorator;

@ccclass('TESTSCRIPT')
export class TESTSCRIPT extends Component {

    onLoad() {
        SoundManager.I.PlayBGMusic();
    }
    bool = true;
    btn() {
       StateMachine.ChangeState("StartGameState","Test1State");
    }

}
