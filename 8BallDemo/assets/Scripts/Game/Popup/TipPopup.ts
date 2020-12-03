import { _decorator, Component, Node, find, tween, Vec3, v3 } from 'cc';
import MKMessageManager from '../../Utils/MKMessageManager';
import { GameSceneManager } from '../GameCommon/GameSceneManager';
import { MainSceneUI } from '../GameCommon/UI/MainSceneUI';
import { GameData } from '../GameData';
import { Popup } from './Popup';
import { PopupManager } from './PopupManager';
const { ccclass, property } = _decorator;

@ccclass('TipPopup')
export class TipPopup extends Popup {

    onEnable() {
        let tip = this.node.getChildByName("Tip");
        tip.position = new Vec3(0, -600, 0);
        tween(tip).to(0.5, { position: new Vec3(0, 0, 0) }, { easing: "backOut" }).start();
    }
    YesBtn() {
        GameData.I.gameStop = true;
        console.log("退出游戏");
        GameSceneManager.I.Players[GameSceneManager.I.thisPlayer].IsSeriousFoul = true;
        console.log("游戏结束", GameSceneManager.I.thisPlayer, "失败");
        GameData.I.Winer = 1 - GameSceneManager.I.thisPlayer;
        PopupManager.I.ClosePopup(find("Canvas"), true, find("Canvas/TipPopup"))
        PopupManager.I.ShowPopup(find("Canvas"), "LosePopup");

    }
    NoBtn() {
        PopupManager.I.ClosePopup(find("Canvas"), true, find("Canvas/TipPopup"))
    }
    NoAddCoinBtn() {
        MKMessageManager.buyGameCion();
        PopupManager.I.ClosePopup(find("Canvas"), true, find("Canvas/AddCoinTipPopup"))
    }
    NoExitBtn() {
        PopupManager.I.ClosePopup(find("Canvas"), true, find("Canvas/ExitTipPopup"))
    }
    Exit() {
        console.log("退出游戏");
        MKMessageManager.exitGame();
    }
    AddCoinBtn() {
        PopupManager.I.ClosePopup(find("Canvas"), true, find("Canvas/AddCoinTipPopup"))
    }
    ErrYes() {
        PopupManager.I.ClosePopup(find("Canvas"), true, find("Canvas/ErrTipPopup"));
        MainSceneUI.I.PlayBtn.active = true;
    }
    ErrNo() {
        PopupManager.I.ClosePopup(find("Canvas"), true, find("Canvas/ErrTipPopup"));
        MainSceneUI.I.Join();
    }
}
