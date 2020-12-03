import { _decorator, Component, Node, find } from 'cc';
import { ServerCommon } from '../../Common/ServerCommon';
import { SourceManager } from '../../Common/SourceManager';
import NDB from '../../Utils/NDBTS';
import { Popup } from './Popup';
import { PopupManager } from './PopupManager';
const { ccclass, property } = _decorator;

@ccclass('WinPopup')
export class WinPopup extends Popup {


    Init() {
        ServerCommon.gload(200, "win");
        let obj = {
            eventName: "game_end",
            name: "8ball",
            result:'win'
        }
        NDB.sendAutoJoinEvent(obj);
        SourceManager.I.Win();
        this.scheduleOnce(() => {
            PopupManager.I.ClosePopup(find("Canvas"));
            PopupManager.I.ShowPopup(find("Canvas"), "SettlemenyPopup");
        }, 5)
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
