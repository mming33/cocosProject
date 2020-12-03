import { _decorator, Component, Node, director, find, spriteAssembler, Sprite, Label, SpriteFrame } from 'cc';
import { ServerCommon } from '../../Common/ServerCommon';
import { SourceManager } from '../../Common/SourceManager';
import { RoundType } from '../GameCommon/RoundType';
import { GameData } from '../GameData';
import { Popup } from './Popup';
import { PopupManager } from './PopupManager';
const { ccclass, property } = _decorator;

@ccclass('MatchingPopup')
export class MatchingPopup extends Popup {
    top1: Node;
    top2: Node;

    Init() {
        SourceManager.I.StartGame();
        GameData.I.gameStop = true;

        this.top1 = this.node.getChildByName("Top1");
        this.top2 = this.node.getChildByName("Top2");
        //随机当前玩家是红色还是蓝色
        //红色方
        let player1
        let player2
        if (GameData.I.loadData.thisPlayer == RoundType.Play1) {
            this.top1.active = true;
            this.top2.active = false;
            player1 = this.top1.getChildByName("Player1");
            player2 = this.top1.getChildByName("Player2");
        }
        //蓝色方
        else {
            this.top1.active = false;
            this.top2.active = true;
            player1 = this.top2.getChildByName("Player2");
            player2 = this.top2.getChildByName("Player1");
        }

        let player1HeadImage = player1.getChildByName("Mask").getChildByName("HeadImage");
        let player1Name = player1.getChildByName("Name");
        let player2HeadImage = player2.getChildByName("Mask").getChildByName("HeadImage");
        let player2Name = player2.getChildByName("Name");

        // 需要数据 玩家头像信息,名字。对手头像,名字
        player1HeadImage.getComponent(Sprite).spriteFrame = GameData.I.thisplayerHeadImage;
        player1Name.getComponent(Label).string = GameData.I.thisPlayerName;
        player2HeadImage.getComponent(Sprite).spriteFrame = GameData.I.RobotHeadImage;
        player2Name.getComponent(Label).string = GameData.I.RobotName;

       // this.LoadGameScene();
        // PopupManager.I.nowPopup = null;
        // ServerCommon.gload(100,"bet");
    }

    LoadGameScene() {
        this.scheduleOnce(() => {
            console.log("信息展示3秒后跳转游戏场景");
            director.loadScene("GameScene");
        }, 3)
    }
}
