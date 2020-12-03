import { _decorator, Component, Node, director, game, find, Label, Sprite, Game, view, macro, SpriteFrame, loader, Texture2D, ImageAsset, ResolutionPolicy, Scene, SpriteComponent, Graphics, GraphicsComponent, MaskComponent, Material, tween, Vec3 } from 'cc';
import { ServerCommon } from '../../../Common/ServerCommon';
import { SourceManager } from '../../../Common/SourceManager';
import MKEventDispatch from '../../../Utils/MKEventDispatch';
import MKMessageManager from '../../../Utils/MKMessageManager';
import MKMessageType from '../../../Utils/MKMessageType';
import NDB from '../../../Utils/NDBTS';
import { GameData } from '../../GameData';
import { PopupManager } from '../../Popup/PopupManager';
import { RoundType } from '../RoundType';
const { ccclass, property } = _decorator;

@ccclass('MainSceneUI')
export class MainSceneUI extends Component {

    __preload() {
        view.setDesignResolutionSize(1500, 750, ResolutionPolicy.SHOW_ALL);

        // view.setOrientation(macro.ORIENTATION_LANDSCAPE)


    }
    onLoad() {
    }
    LoadJoinDataOver: boolean = false;
    LoadSceneOver: boolean = false;
    isJump: boolean = false;
    onEnable() {

        MainSceneUI.I = this.node.getComponent(MainSceneUI);
        console.log("开始加载场景");
        director.preloadScene("GameScene", (res) => {
            this.LoadSceneOver = true;
            console.log("加载完毕");

        })
    }
    static I: MainSceneUI;
    @property(Node)
    PlayBtn: Node = null;
    TimeNumber: Label;
    gloadNumber: Label;
    timeindex = 0;

    start() {
        NDB.gameIsStart = true;
        // PopupManager.I.ShowPopup(find("Canvas"), "LosePopup");
        this.addEventDispatch();
        this.TimeNumber = find("Canvas/BG2/TimeNumber").getComponent(Label);
        game.addPersistRootNode(find("GameData"));
        game.addPersistRootNode(find("PopupManager"));
        game.addPersistRootNode(find("Sources"));
        this.gloadNumber = find("Canvas/GloadNumberBG/Number").getComponent(Label);
        //开始游戏
        ServerCommon.getUserinfo();
        ServerCommon.UpdataCoin();
        this.scheduleOnce(() => {
            ServerCommon.startGame()
        }, 3);
        //------------------------------------------------------------------------
        // this.SetPlayersData();
        // this.JumpSuccess();
        //------------------------------------------------------------------------
        SourceManager.I.BGMusic();
        this.timeindex = 0;
        this.TimeNumber.string == "FINDING PLAYER";
        this.isJump = false;
        this.scheduleOnce(() => {
            this.TimeNumber.string = 0 + "";
        }, 2.5)
        this.schedule(() => {
            this.timeindex++;
            if (this.TimeNumber.string == "start") return;
            if (GameData.I.allMoney < 100) {
                this.gloadNumber.string = GameData.I.allMoney + "";
                this.TimeNumber.string = "Insufficient game currency";
                return;
            } else {
                if (this.TimeNumber.string == "Insufficient game currency")
                    this.TimeNumber.string = "FINDING PLAYER";
            }
            if (this.TimeNumber.string == "FINDING PLAYER") return;
            if (this.LoadJoinDataOver && this.LoadSceneOver && !this.isJump) {
                console.log("设置机器人头像数据并跳转场景");
                this.TimeNumber.string = "start";
                this.isJump = true;
                this.setJoinData();
                return;
            }
            this.TimeNumber.string = this.timeindex + "";
        }, 1, 100, 3);
    }
    addEventDispatch() {
        MKEventDispatch.I.on('androidGoback', this.androidGoback.bind(this), this);
        MKEventDispatch.I.on('onAndroidResume', this.onAndroidResume.bind(this), this);
    }
    //安卓返回；
    androidGoback() {
        let popup = find("Canvas/ExitTipPopup")
        if (!popup) {
            PopupManager.I.ShowPopup(find("Canvas"), "ExitTipPopup", true);
        } else {
            PopupManager.I.ClosePopup(find("Canvas"), true, popup)
        }
    }
    //恢复到前台；
    onAndroidResume() {
        this.PlayBtn.active = true;
        console.log("回到前台");
        ServerCommon.UpdataCoin();

    }
    setJoinData() {
        MainSceneUI.I.TimeNumber.string = "start";
        let player2headImage = find("Canvas/BG2/Player2BG/Mask/HeadImage");
        // console.log("++++", player2headImage);
        player2headImage.getComponent(Sprite).spriteFrame = GameData.I.RobotHeadImage;
        tween(player2headImage).to(0.2, { postion: new Vec3(165, -160.786, 0) }).start();
        find("Canvas/BG2/Player2BG/Name").getComponent(Label).string = GameData.I.RobotName;
        SourceManager.I.Join();
        MainSceneUI.I.JumpSuccess();
    }

    Join() {
        this.PlayBtn.active = false;
        this.timeindex = 0;
        this.TimeNumber.string = this.timeindex + "";
        this.scheduleOnce(() => {
            ServerCommon.startGame();
        }, 3);
    }
    SetPlayersData() {
        let thisplayer = find("Canvas/thisPlayer");
        let player1 = find("Canvas/BG2/Player1BG");
        thisplayer.getChildByName("Mask").getChildByName("HeadImage").getComponent(Sprite).spriteFrame = GameData.I.thisplayerHeadImage;
        thisplayer.getChildByName("Name").getComponent(Label).string = GameData.I.thisPlayerName;
        player1.getChildByName("Mask").getChildByName("HeadImage").getComponent(Sprite).spriteFrame = GameData.I.thisplayerHeadImage;
        player1.getChildByName("Name").getComponent(Label).string = GameData.I.thisPlayerName;

    }
    JumpSuccess() {
        this.scheduleOnce(() => {
            this.CreateData();
            console.log("数据为", GameData.I.loadData);
            this.LoadGameScene();
            // PopupManager.I.ShowPopup(find("Canvas"), "MatchingPopup");
        }, 1.5);
    }
    CreateData() {
        //随机谁先开始
        GameData.I.loadData.nowPlayerType = RoundType.Play1;
        //随机当前玩家是红色还是蓝色
        GameData.I.loadData.thisPlayer = this.DecideWhoStartsFirst();//RoundType.Play1;
    }
    /**随机从一个人开始打球 （目前假设每次都是Player1开始）*/
    DecideWhoStartsFirst() {
        return Math.random() > 0.5 ? RoundType.Play1 : RoundType.Play2;
    }
    LoadGameScene() {
        // this.scheduleOnce(() => {
        director.loadScene("GameScene");
        // }, 3)
    }
    PlayGameButton() {
        ServerCommon.GetCoin();
    }
}
