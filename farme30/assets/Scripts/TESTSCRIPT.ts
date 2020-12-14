import { _decorator, Component, Node } from 'cc';
import { EventTpye } from './Common/Events/EventTpye';
import { MyEvent } from './Common/Events/MyEvent';
import { MyListCommon } from './Common/MyMath/MyListCommon';
import { PopupManager } from './Common/Popup/PopupManager';
import { SoundManager } from './Common/Sound/SoundManager';
import { DataStorage } from './Common/Storage/DataStorage';
const { ccclass, property } = _decorator;

@ccclass('TESTSCRIPT')
export class TESTSCRIPT extends Component {

    onLoad() {
        SoundManager.I.PlayBGMusic();
    }
    bool = true;
    btn(res, res2) {
        console.log(res2);
        if (this.bool)
            PopupManager.I.ShowPopup("TestPrefab0");
        else {
            PopupManager.I.ClosePopup(false);
        }
        this.bool = !this.bool;
    }

}
