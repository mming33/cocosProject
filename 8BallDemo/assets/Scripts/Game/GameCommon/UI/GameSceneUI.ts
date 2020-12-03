import { _decorator, Component, Node, Vec3, find, SpriteComponent, macro, Game, SpriteFrame, Sprite, Label, Vec4, Color, LabelComponent, tween, AnimationComponent } from 'cc';
import { SourceManager } from '../../../Common/SourceManager';
import NDB from '../../../Utils/NDBTS';
import { GameData } from '../../GameData';
import { PopupManager } from '../../Popup/PopupManager';
import { Ball } from '../Ball/Ball';
import { BallManager } from '../Ball/BallManager';
import { BallType } from '../Ball/BallType';
import { GameSceneManager } from '../GameSceneManager';
import { RoundType } from '../RoundType';
const { ccclass, property } = _decorator;

@ccclass('GameSceneUI')
export class GameSceneUI extends Component {
    static I: GameSceneUI;
    private GunDrag2ScaleNumber: Node;
    private GunDrag2ScaleNumberChilds: Array<Node> = new Array<Node>(3);
    private GunDrag2ScaleNumberChild02: Node;
    private GunDrag2ScaleNumberChild03: Node;
    public Player1TimeSlider: SpriteComponent;
    public Player1TimeFire: Node;
    public Player2TimeSlider: SpriteComponent;
    public Player2TimeFire: Node;
    private Player1Light: Node;
    private Player1HeadLight: Node;
    private Player2HeadLight: Node;
    private Player2Light: Node;
    @property(SpriteFrame)
    private balls: SpriteFrame[] = [];

    private Player1Balls: Node;
    private Player2Balls: Node;

    tipBG: SpriteComponent;
    tipLable: LabelComponent;

    toast: SpriteComponent = null;
    toastLable: LabelComponent = null;


    onLoad() {
        GameSceneUI.I = this.node.getComponent(GameSceneUI);
        let obj = {
            eventName: "game_start",
            name: "8ball",
        }
        NDB.sendAutoJoinEvent(obj);
    }

    onEnable() {
        SourceManager.I.BGMusic();
        this.InitPlayerData();
    }
    start() {
        PopupManager.I.ShowPopup(find("Canvas"), "MatchingPopup");
        this.tipBG = find("Canvas/GameSceneUI/TipBG").getComponent(SpriteComponent);
        this.tipLable = find("Canvas/GameSceneUI/TipBG/TipLable").getComponent(LabelComponent);

        this.toast = find("Canvas/toast").getComponent(SpriteComponent);
        this.toastLable = find("Canvas/toast/Text").getComponent(LabelComponent);

        this.GunDrag2ScaleNumber = find("Canvas/GunDrag2/mask/Node");
        this.GunDrag2ScaleNumberChilds[0] = this.GunDrag2ScaleNumber.getChildByName("Number1");
        this.GunDrag2ScaleNumberChilds[1] = this.GunDrag2ScaleNumber.getChildByName("Number2");
        this.GunDrag2ScaleNumberChilds[2] = this.GunDrag2ScaleNumber.getChildByName("Number3");
    }
    GunDrag2ScaleNumberMove(lerp) {
        this.GunDrag2ScaleNumber.position = new Vec3(0, this.GunDrag2ScaleNumber.position.y - lerp, 0);
        let index = this.GunDrag2ScaleNumber.position.y / 395 > 0 ? Math.floor(this.GunDrag2ScaleNumber.position.y / 395) : Math.ceil(this.GunDrag2ScaleNumber.position.y / 395);
        console.log(index);
        this.GunDrag2ScaleNumberChilds[0].position = new Vec3(0, -(index + 1) * 395, 0);
        this.GunDrag2ScaleNumberChilds[1].position = new Vec3(0, -(index) * 395, 0);
        this.GunDrag2ScaleNumberChilds[2].position = new Vec3(0, -(index - 1) * 395, 0);
    }
    time: number
    allTime: number = 30;
    PlayerTime() {
        if (GameData.I.gameStop) return;
        this.time -= 0.1;
        let num = 1;
        if (GameData.I.loadData.thisPlayer == RoundType.Play1) {
            num = 1;
            this.Player1TimeSlider.fillStart = 1;
            this.Player1TimeSlider.fillRange = -1;
            this.Player1TimeFire.setPosition(new Vec3(-300.33, 0, 0));
            this.Player2TimeFire.setPosition(new Vec3(300.33, 0, 0));
            this.Player2TimeSlider.fillStart = 0;
            this.Player2TimeSlider.fillRange = 1;
        } else {
            num = -1
            this.Player1TimeSlider.fillStart = 0;
            this.Player2TimeSlider.fillStart = 1;
            this.Player1TimeSlider.fillRange = 1;
            this.Player2TimeSlider.fillRange = -1;
            this.Player1TimeFire.setPosition(new Vec3(300.33, 0, 0));
            this.Player2TimeFire.setPosition(new Vec3(-300.33, 0, 0))
        }
        let lerp = this.time / this.allTime;

        if (GameSceneManager.I.nowPlayerType == RoundType.Play1) {
            this.Player1TimeSlider.fillRange = -num * lerp;
            this.Player1TimeFire.setPosition(new Vec3(-num * 300.33 * lerp, 0, 0));
            this.Player1TimeFire.active = true;
            this.Player2TimeFire.active = false;
            this.Player1Light.active = true;
            this.Player1HeadLight.active = true;
            this.Player2Light.active = false;
            this.Player2HeadLight.active = false;
            if (lerp <= 0) {
                GameSceneManager.I.RoundEndChangePlayer();
            }
        } else {
            this.Player2TimeSlider.fillRange = num * lerp;
            this.Player2TimeFire.active = true;
            this.Player2TimeFire.setPosition(new Vec3(num * 300.33 * lerp, 0, 0));
            this.Player1TimeFire.active = false;
            this.Player1Light.active = false;
            this.Player1HeadLight.active = false;
            this.Player2Light.active = true;
            this.Player2HeadLight.active = true;
            if (lerp <= 0) {
                GameSceneManager.I.RoundEndChangePlayer();
            }
        }

    }
    StartReckonTime() {
        this.time = 30;
        this.schedule(this.PlayerTime, 0.1, macro.REPEAT_FOREVER, 0);
    }
    EndReckonTime() {
        this.unschedule(this.PlayerTime);

    }

    showBall() {
        if (GameSceneManager.I.Players[RoundType.Play1].TypeOfBallToBeHit != 0 && GameSceneManager.I.Players[RoundType.Play1].TypeOfBallToBeHit != 1 && GameSceneManager.I.Players[RoundType.Play1].TypeOfBallToBeHit != 3) {
            console.log("球类型还未指定");
            return;
        }
        let type = GameSceneManager.I.Players[RoundType.Play1].TypeOfBallToBeHit;
        let unGoalBall: Array<Ball> = new Array<Ball>();
        for (let i = 0; i < BallManager.I.AllBalls.length; i++) {
            const element = BallManager.I.AllBalls[i];
            if (!element.isGoal) {
                unGoalBall.push(element);
            }
        }
        let index1 = 0;
        let index2 = 0;
        for (let i = 0; i < unGoalBall.length; i++) {
            const element = unGoalBall[i];
            if (element.ballNumber == 8) continue;
            let ballspriteFrameNumber = element.ballNumber > 8 ? element.ballNumber - 2 : element.ballNumber - 1;
            if (element.ballTpye == type) {
                this.Player1Balls.children[index1].getComponent(Sprite).spriteFrame = this.balls[ballspriteFrameNumber];
                console.log("player1的", index1, "张图片是", element.ballNumber, "号球", "UI图片是", ballspriteFrameNumber);
                index1++;
            } else {
                this.Player2Balls.children[index2].getComponent(Sprite).spriteFrame = this.balls[ballspriteFrameNumber];
                index2++;
                console.log("player2的", index2, "张图片是", element.ballNumber, "号球", "UI图片是", ballspriteFrameNumber);
            }
        }

        for (let i = index1; i < this.Player1Balls.children.length; i++) {
            const element = this.Player1Balls.children[i];
            element.getComponent(Sprite).spriteFrame = null;
        }
        for (let i = index2; i < this.Player2Balls.children.length; i++) {
            const element = this.Player2Balls.children[i];
            element.getComponent(Sprite).spriteFrame = null;
        }

        if (index1 == 0) {
            this.Player1Balls.children[index1].getComponent(Sprite).spriteFrame = this.balls[14];
        }
        if (index2 == 0) {
            this.Player2Balls.children[index2].getComponent(Sprite).spriteFrame = this.balls[14];
        }
    }
    EndGame(winPlayer, lostPlayer) {
        PopupManager.I.ShowPopup(find("Canvas"), "SettlementPopup");
        GameData.I.SettlementData.winPlayer = winPlayer;
        GameData.I.SettlementData.lostPlayer = lostPlayer;
    }
    InitPlayerData() {
        let top1 = find("Canvas/GameSceneUI/Top1");
        let top2 = find("Canvas/GameSceneUI/Top2");
        //红色方
        let player1
        let player2
        if (GameData.I.loadData.thisPlayer == RoundType.Play1) {
            top1.active = true;
            top2.active = false;
            player1 = top1.getChildByName("Player1");
            player2 = top1.getChildByName("Player2");
            this.Player1TimeSlider = find("Canvas/GameSceneUI/Top1/Player1TimeSlider/Time").getComponent(SpriteComponent);
            this.Player2TimeSlider = find("Canvas/GameSceneUI/Top1/Player2TimeSlider/Time").getComponent(SpriteComponent);
            this.Player1TimeFire = this.Player1TimeSlider.node.getChildByName("Fire");
            this.Player2TimeFire = this.Player2TimeSlider.node.getChildByName("Fire");
            this.Player1Light = find("Canvas/GameSceneUI/Top1/Player1Light");
            this.Player2Light = find("Canvas/GameSceneUI/Top1/Player2Light");
            this.Player1HeadLight = find("Canvas/GameSceneUI/Top1/Player1HeadLight");
            this.Player2HeadLight = find("Canvas/GameSceneUI/Top1/Player2HeadLight");
            this.Player1Balls = find("Canvas/GameSceneUI/Top1/Player1Ball");
            this.Player2Balls = find("Canvas/GameSceneUI/Top1/Player2Ball");
        }
        //蓝色方
        else {
            top1.active = false;
            top2.active = true;
            player1 = top2.getChildByName("Player1");
            player2 = top2.getChildByName("Player2");
            this.Player1TimeSlider = find("Canvas/GameSceneUI/Top2/Player1TimeSlider/Time").getComponent(SpriteComponent);
            this.Player2TimeSlider = find("Canvas/GameSceneUI/Top2/Player2TimeSlider/Time").getComponent(SpriteComponent);
            this.Player1TimeFire = this.Player1TimeSlider.node.getChildByName("Fire");
            this.Player2TimeFire = this.Player2TimeSlider.node.getChildByName("Fire");
            this.Player1Light = find("Canvas/GameSceneUI/Top2/Player1Light");
            this.Player2Light = find("Canvas/GameSceneUI/Top2/Player2Light");
            this.Player1HeadLight = find("Canvas/GameSceneUI/Top2/Player1HeadLight");
            this.Player2HeadLight = find("Canvas/GameSceneUI/Top2/Player2HeadLight");
            this.Player1Balls = find("Canvas/GameSceneUI/Top2/Player1Ball");
            this.Player2Balls = find("Canvas/GameSceneUI/Top2/Player2Ball");
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

    }
    ShowTip(str: string) {
        this.tipBG.node.position = new Vec3(344, -430, 0)
        this.tipBG.color = new Color(255, 255, 255, 255);
        tween(this.tipBG.node).to(0.4, { position: new Vec3(344, -311, 0) }).start();
        this.tipLable.string = str;
    }
    ShowTip2(str: string) {
        this.toast.node.position = new Vec3(300, 110, 0)
        this.toast.color = new Color(255, 255, 255, 0);
        tween(this.toast.node)
            .to(0.3, { position: new Vec3(0, 110, 0) },{easing:"circOut"})
            .delay(0.8)
            .to(0.3, { position: new Vec3(-300, 110, 0) },{easing:"circOut"}).start();
        tween(this.toast.color)
            .to(0.3, new Color(255, 255, 255, 255),{easing:"circOut"})
            .delay(0.8)
            .to(0.3, new Color(255, 255, 255, 0),{easing:"circOut"}).start();
        this.toastLable.string = str;
    }
}
