import { _decorator, Component, Node, Label, Sprite, director, find } from 'cc';
import { SourceManager } from '../../Common/SourceManager';
import MKMessageManager from '../../Utils/MKMessageManager';
import NDB from '../../Utils/NDBTS';
import { GameSceneManager } from '../GameCommon/GameSceneManager';
import { RoundType } from '../GameCommon/RoundType';
import { GameData } from '../GameData';
import { Popup } from './Popup';
import { PopupManager } from './PopupManager';
const { ccclass, property } = _decorator;

@ccclass('SettlementPopup')
export class SettlemenyPopup extends Popup {


    Init() {
        SourceManager.I.Settlemeny();
     
        let player1 = this.node.getChildByName("Player1");
        let player2 = this.node.getChildByName("Player2");;
        let player1HeadImage = player1.getChildByName("Mask").getChildByName("HeadImage");
        let player1Name = player1.getChildByName("Name");
        let player2HeadImage = player2.getChildByName("Mask").getChildByName("HeadImage");
        let player2Name = player2.getChildByName("Name");

        // 需要数据 玩家头像信息,名字。对手头像,名字
        player1HeadImage.getComponent(Sprite).spriteFrame = GameData.I.thisplayerHeadImage;
        player1Name.getComponent(Label).string = GameData.I.thisPlayerName;
        player2HeadImage.getComponent(Sprite).spriteFrame = GameData.I.RobotHeadImage;
        player2Name.getComponent(Label).string = GameData.I.RobotName;

        let Player1WinTip = this.node.getChildByName("Player1WinTip");
        let Player1Gload = this.node.getChildByName("Player1Gload");
        let Player2WinTip = this.node.getChildByName("Player2WinTip");
        let Player2Gload = this.node.getChildByName("Player2Gload");
        if (GameSceneManager.I.thisPlayer == RoundType.Play1) {
            player1.getChildByName("RedBG").active = true;
            player1.getChildByName("BlueBG").active = false;
            player2.getChildByName("RedBG").active = false;
            player2.getChildByName("BlueBG").active = true;
            if (GameData.I.Winer == RoundType.Play1) {
                Player1WinTip.active = true;
                Player1Gload.active = true;
                Player2WinTip.active = false;
                Player2Gload.active = false;

            } else {
                Player1WinTip.active = false;
                Player1Gload.active = false;
                Player2WinTip.active = true;
                Player2Gload.active = true;
            }
        }
        if (GameSceneManager.I.thisPlayer == RoundType.Play2) {
            player1.getChildByName("RedBG").active = false;
            player1.getChildByName("BlueBG").active = true;
            player2.getChildByName("RedBG").active = true;
            player2.getChildByName("BlueBG").active = false;
            if (GameData.I.Winer == RoundType.Play2) {
                Player1WinTip.active = true;
                Player1Gload.active = true;
                Player2WinTip.active = false;
                Player2Gload.active = false;

            } else {
                Player1WinTip.active = false;
                Player1Gload.active = false;
                Player2WinTip.active = true;
                Player2Gload.active = true;
            }
        }
    }

    PlayAgain() {
        PopupManager.I.ClosePopup(find("Canvas"));
        director.loadScene("MainScene")
        GameData.I.gameStop = false;
        GameData.I.Winer = null;
        PopupManager.I.nowPopup = null;
        // GameSceneManager.I.
    }
    Exit() {
        PopupManager.I.ShowPopup(find("Canvas"), "ExitTipPopup", true);
    }
}
