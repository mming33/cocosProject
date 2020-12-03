import { _decorator, Component, Node, find } from 'cc';
import { ServerCommon } from '../../Common/ServerCommon';
import { SourceManager } from '../../Common/SourceManager';
import NDB from '../../Utils/NDBTS';
import { Popup } from './Popup';
import { PopupManager } from './PopupManager';
const { ccclass, property } = _decorator;

@ccclass('LosePopup')
export class LosePopup extends Popup {


    Init() {
        SourceManager.I.Lose();
        let obj = {
            eventName: "game_end",
            name: "8ball",
            result:'lose'
        }
        NDB.sendAutoJoinEvent(obj);
        this.scheduleOnce(() => {
            console.log("打开结算弹窗");
            PopupManager.I.ClosePopup(find("Canvas"));
            PopupManager.I.ShowPopup(find("Canvas"), "SettlemenyPopup");
        }, 5)
    }

}
