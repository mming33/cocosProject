import { _decorator, Component, Node, Vec3, Game, find, Canvas, SliderComponent, director, SpriteComponent, v3, Collider, Color, tween, easing } from 'cc';
import { ServerCommon } from '../../Common/ServerCommon';
import MKEventDispatch from '../../Utils/MKEventDispatch';
import { GameData } from '../GameData';
import { PopupManager } from '../Popup/PopupManager';
import { BallManager } from './Ball/BallManager';
import { BallType } from './Ball/BallType';
import { Player } from './Player';
import { RobotController } from './RobotController';
import { RoundType } from './RoundType';
import { GameSceneUI } from './UI/GameSceneUI';
import { PlayerController } from './UI/PlayerController';
const { ccclass, property } = _decorator;

@ccclass('GameSceneManager')
export class GameSceneManager extends Component {
    static I: GameSceneManager;
    /**玩家集合 */
    Players: Array<Player> = new Array<Player>(2);
    /**当前回合的玩家 */
    public nowPlayerType: RoundType = RoundType.Play1;
    /**当前客户端的玩家 */
    public thisPlayer: RoundType = RoundType.Play1;
    /**是否是第一回合 */
    IsFirstRound: boolean = true;

    inHoleBallNumber: number = 0;
    @property(SpriteComponent)
    combos: SpriteComponent[] = [];

    onEnable() {
        GameSceneManager.I = this.node.getComponent(GameSceneManager);
        this.Players[0] = new Player();
        this.Players[1] = new Player();
        this.Players[0].PlayerType = RoundType.Play1;
        this.Players[1].PlayerType = RoundType.Play2;
        this.nowPlayerType = GameData.I.loadData.nowPlayerType;
        this.thisPlayer = GameData.I.loadData.thisPlayer;
        RobotController.I.playerType = 1 - GameData.I.loadData.thisPlayer
        console.log(this.nowPlayerType == 0 ? "玩家1" : "玩家2", "开球");
        this.Players[this.nowPlayerType].IsFreeBall = true;
        //开始计时
        ServerCommon.gload(100, "bet");
        this.scheduleOnce(() => {
            GameSceneUI.I.StartReckonTime();
            if (this.nowPlayerType == this.thisPlayer)
                GameSceneUI.I.ShowTip2("Your Turn");
            else
                GameSceneUI.I.ShowTip2("The Opponent's Turn");
        }, 4)
        this.addEventDispatch()
    }

    addEventDispatch() {
        MKEventDispatch.I.on('androidGoback', this.androidGoback.bind(this), this);
        MKEventDispatch.I.on('onAndroidStop', this.onAndroidStop.bind(this), this);
        MKEventDispatch.I.on('onAndroidResume', this.onAndroidResume.bind(this), this);
    }
    //安卓返回；
    androidGoback() {
        if (!GameData.I.gameStop)
            this.ReturnMainScene();
        else {
            let popup = find("Canvas/ExitTipPopup")
            if (!popup) {
                PopupManager.I.ShowPopup(find("Canvas"), "ExitTipPopup", true);
            } else {
                PopupManager.I.ClosePopup(find("Canvas"), true, popup)
            }
        }
    }
    AndroidStopTime: number;
    AndroidResumeTime: number;
    //切后台；
    onAndroidStop() {
        console.log("切后台");
        this.AndroidStopTime = Date.now();
    }
    //恢复到前台；
    onAndroidResume() {
        console.log("回到前台");
        this.AndroidResumeTime = Date.now();
        if (!GameData.I.gameStop) {
            if ((this.AndroidResumeTime - this.AndroidStopTime) / 1000 > 120) {
                console.log("切后台时间大于2分钟 判定失败");
                GameData.I.gameStop = true;
                GameSceneManager.I.Players[GameSceneManager.I.thisPlayer].IsSeriousFoul = true;
                console.log("游戏结束", GameSceneManager.I.thisPlayer, "失败");
                GameData.I.Winer = 1 - GameSceneManager.I.thisPlayer;
                PopupManager.I.ShowPopup(find("Canvas"), "LosePopup");
            }
        }
    }

    /**是否是当前操作人的回合 */
    IsOwnerRound(): boolean {
        return this.nowPlayerType == this.thisPlayer
            && this.Players[this.nowPlayerType].IsHitBall == false;
    }

    /**回合结束 判断是否换人 */
    RoundEndChangePlayer() {
        console.log("Player", this.nowPlayerType, "回合结束");
        if (GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsFreeBall) {
            PlayerController.I.FreeBall_Touch_End(null);
            find("Canvas/BallDrag").active = false;
            BallManager.I.CloseFreeBall();
            GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsFreeBall = false;
        }
        console.log(GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsFreeBall);
        console.log("Player", this.nowPlayerType, "判断是否有违规情况")
        this.JudgeFoul();
        this.JudgeIsGoalBall();
        if (this.IsFirstRound) {
            this.IsFirstRound = false;
        }
        /**判断如果所有球都打完了 将要打的目标球为8号球 */
        if (this.Players[this.nowPlayerType].TypeOfBallToBeHit != BallType.BLACKBALL && this.JudgePlayerTargetBallIsOver()) {
            this.Players[this.nowPlayerType].TypeOfBallToBeHit = BallType.BLACKBALL;
        }
        GameSceneUI.I.showBall();
        if (GameData.I.gameStop) return;
        this.CloseBallLight();
        PlayerController.I.slider.enabled = false;
        //切换回合
        this.nowPlayerType = this.JudgeWhoseurn(this.nowPlayerType);
        console.log(GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsFreeBall);
        find("Gun/Cylinder").active = true;
        find("Line").active = true;
        if (this.Players[this.nowPlayerType].TypeOfBallToBeHit != BallType.BLACKBALL && this.JudgePlayerTargetBallIsOver()) {
            this.Players[this.nowPlayerType].TypeOfBallToBeHit = BallType.BLACKBALL;
        }
        this.ShowBallLight();
        //开始计时
        GameSceneUI.I.StartReckonTime();
        if (this.nowPlayerType == this.thisPlayer) {
            find("Canvas/Slider").getComponent(SliderComponent).enabled = true;
            find("Canvas/GunDrag2").active = true;
        }
        BallManager.I.ResetBall();
        this.ResetFoul();
        console.log("Player", this.nowPlayerType, "回合开始");
        console.log("Player", this.nowPlayerType, "的球的类型是", this.Players[this.nowPlayerType].TypeOfBallToBeHit);

        this.Players[this.nowPlayerType].IsHitBall = false;
        //this.thisPlayer = this.nowPlayerType;
    }
    /** 重置违规情况*/
    ResetFoul() {
        console.log("重置违规情况", "当前是玩家", this.nowPlayerType, "的回合", "重置的是玩家", 1 - this.nowPlayerType, "的违规情况");
        this.Players[1 - this.nowPlayerType].IsFoul = false;
    }
    /**判断是否有违规情况 */
    JudgeFoul() {
        // this.Players[this.nowPlayerType]
        console.log(BallManager.I.whiteBallFirstTouchBallType);
        if (this.Players[this.nowPlayerType].IsSeriousFoul) {
            console.log("游戏结束", this.nowPlayerType, "失败");
            return
        }
        if (!GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsHitBall) {
            this.Players[this.nowPlayerType].IsFoul = true;
        }
        if (BallManager.I.whiteBallComponent.isGoal) {
            this.Players[this.nowPlayerType].IsFoul = true;
        }
        if (BallManager.I.BlackBallComponent.isGoal && BallManager.I.whiteBallComponent.isGoal) {
            // console.log("Player", this.nowPlayerType, "违规打进了白球")
            // console.log("Player", this.nowPlayerType, "违规！打进了黑球的同时打进了白球！严重违规！", "Player", this.nowPlayerType, "输");
            this.UpdateEndGameData(1 - this.nowPlayerType, this.nowPlayerType);
            this.Players[this.nowPlayerType].IsSeriousFoul = true;
            GameData.I.gameStop = true;
            return;
            // this.Players[this.nowPlayerType].IsFoul = true;
            // BallManager.I.ResetWhiteBallPos();
        }
        if (BallManager.I.whiteBallFirstTouchBallType == -1) {
            // console.log("Player", this.nowPlayerType, "没有碰到任何球")
            GameSceneUI.I.ShowTip("Didn't hit your object ball. ");
            this.Players[this.nowPlayerType].IsFoul = true;
            // BallManager.I.ResetWhiteBallPos();
        } else if (this.Players[this.nowPlayerType].TypeOfBallToBeHit != undefined && this.Players[this.nowPlayerType].TypeOfBallToBeHit != BallManager.I.whiteBallFirstTouchBallType) {
            // console.log("Player", this.nowPlayerType, "没有碰到目标球")
            GameSceneUI.I.ShowTip("Hit opponent's object ball first.")
            this.Players[this.nowPlayerType].IsFoul = true;
            // BallManager.I.ResetWhiteBallPos();
        } else if (this.Players[this.nowPlayerType].TypeOfBallToBeHit == undefined && !this.IsFirstRound && BallManager.I.whiteBallFirstTouchBallType == BallType.BLACKBALL) {
            // console.log("Player", this.nowPlayerType, "不是在开球时碰到了黑球");
            GameSceneUI.I.ShowTip("Didn't hit your object ball. ")
            this.Players[this.nowPlayerType].IsFoul = true;
            // BallManager.I.ResetWhiteBallPos();
        }

    }
    /**判断当前是谁的回合 并初始化*/
    JudgeWhoseurn(roundType: RoundType): RoundType {
        //判断当前是谁的回合 如果要换将要换成谁的回合
        let nowplayer = roundType == RoundType.Play1 ? RoundType.Play2 : RoundType.Play1;
        this.Players[roundType].RoundEnd();
        if (this.Players[roundType].IsSeriousFoul) {
            //更新游戏结束的数据 并显示弹窗
            this.UpdateEndGameData(nowplayer, 1 - nowplayer);
            // GameSceneUI.I.ShowTip("玩家" + roundType + "严重违规" + "玩家" + nowplayer + "赢得比赛");
            // console.log(roundType, "严重违规");
            // console.log("EndGame");
            // console.log("玩家", nowplayer, "赢得比赛");
            return roundType;
        } else if (this.Players[roundType].IsFoul) {
            // console.log("玩家", roundType, "违规");
            // GameSceneUI.I.ShowTip("玩家" + roundType + "违规,玩家" + (1 - roundType) + "的自由球")
            this.inHoleBallNumber = 0;
            BallManager.I.ResetWhiteBallPos();
            this.scheduleOnce(() => {
                if (nowplayer == this.thisPlayer)
                    GameSceneUI.I.ShowTip2("Your Turn");
                else
                    GameSceneUI.I.ShowTip2("The Opponent's Turn");
            }, 1)
            this.Players[nowplayer].IsStartFollow = true;
            this.Players[nowplayer].IsUnActiveGun = false;
            this.Players[nowplayer].IsFreeBall = true;
            this.Players[nowplayer].IsHaveBallRight = false;
            this.Players[nowplayer].IsRoundEnd = true;
            return nowplayer;
        } else if (this.Players[roundType].IsContinuousBatting) {
            // GameSceneUI.I.ShowTip("玩家" + roundType + "没有违规的情况下打进了目标球，有连续击球权")
            // console.log("玩家", roundType, "没有违规的情况下打进了目标球，有连续击球权");
            if (roundType == this.thisPlayer)
                GameSceneUI.I.ShowTip2("Your Turn");
            else
                GameSceneUI.I.ShowTip2("The Opponent's Turn");
            this.Players[roundType].IsHaveBallRight = true;
            return roundType;
        } else {
            if (nowplayer == this.thisPlayer)
                GameSceneUI.I.ShowTip2("Your Turn");
            else
                GameSceneUI.I.ShowTip2("The Opponent's Turn");
            this.Players[nowplayer].IsHaveBallRight = true;
            this.Players[nowplayer].IsStartFollow = true;
            this.Players[nowplayer].IsRoundEnd = true;
            return nowplayer;
        }
    }
    /**判断进球是否犯规，是否连续击球 */
    JudgeIsGoalBall() {
        let GoalBallNumberLerp = BallManager.I.GoalBalls.length - BallManager.I.GoalBallNumber;
        if (BallManager.I.blackBallIsGoal) {
            //如果是在开球是将黑八打进 不做处理，重置黑八位置
            if (this.IsFirstRound) {
                BallManager.I.ResetBlackBallPos();
                BallManager.I.blackBallIsGoal = false;
                BallManager.I.BlackBall.active = true;
                BallManager.I.BlackBallComponent.isGoal = false;
            }
            //否则 接下来需要判断当前玩家的球是否打完，若打完则胜利，若没有打完则输
            else {
                GameData.I.gameStop = true;
                if (this.JudgePlayerTargetBallIsOver() && !BallManager.I.whiteBallComponent.isGoal) {
                    this.UpdateEndGameData(this.nowPlayerType, 1 - this.nowPlayerType);
                    GameData.I.Winer = this.nowPlayerType;
                    console.log("玩家", this.nowPlayerType, "Win");
                    GameData.I.gameStop = true;
                    if (GameData.I.Winer == this.thisPlayer)
                        PopupManager.I.ShowPopup(find("Canvas"), "WinPopup");
                    else
                        PopupManager.I.ShowPopup(find("Canvas"), "LosePopup");
                } else {
                    this.UpdateEndGameData(1 - this.nowPlayerType, this.nowPlayerType);
                    console.log("玩家", this.nowPlayerType, "Lose");
                    GameData.I.Winer = 1 - this.nowPlayerType;
                    this.Players[this.nowPlayerType].IsSeriousFoul = true;
                    GameData.I.gameStop = true;
                    if (GameData.I.Winer == this.thisPlayer)
                        PopupManager.I.ShowPopup(find("Canvas"), "WinPopup");
                    else
                        PopupManager.I.ShowPopup(find("Canvas"), "LosePopup");
                }
            }
        }
        if (GoalBallNumberLerp == 0) {
            console.log("没有进球");
            this.inHoleBallNumber = 0;
            this.Players[this.nowPlayerType].IsContinuousBatting = false;
        } else if (GoalBallNumberLerp == 1) {
            console.log("进球了1个球");
            if (this.IsFirstRound) {
                this.Players[this.nowPlayerType].IsContinuousBatting = true;
                BallManager.I.GoalBallNumber = BallManager.I.GoalBalls.length;
                return;
            }
            if (this.Players[this.nowPlayerType].TypeOfBallToBeHit != 0 && this.Players[this.nowPlayerType].TypeOfBallToBeHit != 1 && this.Players[this.nowPlayerType].TypeOfBallToBeHit != 3) {
                console.log("这个进球是本局的第一个单独进球");
                this.Players[this.nowPlayerType].TypeOfBallToBeHit = BallManager.I.GoalBalls[BallManager.I.GoalBalls.length - 1].ballTpye
                this.Players[1 - this.nowPlayerType].TypeOfBallToBeHit = 1 - BallManager.I.GoalBalls[BallManager.I.GoalBalls.length - 1].ballTpye
                console.log("玩家", 1 - this.nowPlayerType, "的球的类型是", this.Players[1 - this.nowPlayerType].TypeOfBallToBeHit);
                console.log("玩家", this.nowPlayerType, "的球的类型是", this.Players[this.nowPlayerType].TypeOfBallToBeHit);
                BallManager.I.GoalBallNumber = BallManager.I.GoalBalls.length
                this.Players[this.nowPlayerType].IsContinuousBatting = true;
            }
            else if (this.Players[this.nowPlayerType].TypeOfBallToBeHit != BallManager.I.GoalBalls[BallManager.I.GoalBalls.length - 1].ballTpye) {
                console.log("打进的球不是目标球，不犯规，没有连续击球权");
                this.inHoleBallNumber = 0;
                this.Players[this.nowPlayerType].IsContinuousBatting = false;
                BallManager.I.GoalBallNumber = BallManager.I.GoalBalls.length;
                return;
            }
            console.log("打进的球的类型为", BallManager.I.GoalBalls[BallManager.I.GoalBalls.length - 1].ballTpye);
            console.log("目标类型为", this.Players[this.nowPlayerType].TypeOfBallToBeHit)

            BallManager.I.GoalBallNumber = BallManager.I.GoalBalls.length
            this.Players[this.nowPlayerType].IsContinuousBatting = true;
        } else if (GoalBallNumberLerp > 1) {
            if (this.IsFirstRound) {
                this.Players[this.nowPlayerType].IsContinuousBatting = true;
                BallManager.I.GoalBallNumber = BallManager.I.GoalBalls.length;
                return;
            }
            //"进球不止一个 判断所有的进球是否类型相同，若相同决定球的类型，不相同继续击球但不决定击球类型");
            if (this.Players[this.nowPlayerType].TypeOfBallToBeHit != 0 && this.Players[this.nowPlayerType].TypeOfBallToBeHit != 1 && this.Players[this.nowPlayerType].TypeOfBallToBeHit != 3 && !this.IsFirstRound) {
                if (this.JudgeGoalBallIsSameType()) {
                    console.log("这个进球是本局的第一个连续进同样类型的球的进球");
                    this.Players[this.nowPlayerType].TypeOfBallToBeHit = BallManager.I.GoalBalls[BallManager.I.GoalBalls.length - 1].ballTpye;
                    this.Players[1 - this.nowPlayerType].TypeOfBallToBeHit = 1 - BallManager.I.GoalBalls[BallManager.I.GoalBalls.length - 1].ballTpye
                    console.log("玩家", 1 - this.nowPlayerType, "的球的类型是", this.Players[1 - this.nowPlayerType].TypeOfBallToBeHit);
                    console.log("玩家", this.nowPlayerType, "的球的类型是", this.Players[this.nowPlayerType].TypeOfBallToBeHit);
                    BallManager.I.GoalBallNumber = BallManager.I.GoalBalls.length;
                    this.Players[this.nowPlayerType].IsContinuousBatting = true;
                } else {
                    BallManager.I.GoalBallNumber = BallManager.I.GoalBalls.length;
                    this.Players[this.nowPlayerType].IsContinuousBatting = true;
                    return;
                }
            } else if (this.JudgeGoalBallIsTargetType()) {
                this.Players[this.nowPlayerType].IsContinuousBatting = true;
                BallManager.I.GoalBallNumber = BallManager.I.GoalBalls.length;
                return;
            } else {
                BallManager.I.GoalBallNumber = BallManager.I.GoalBalls.length;
                this.Players[this.nowPlayerType].IsContinuousBatting = false;
                this.inHoleBallNumber = 0;
                return;
            }
            // BallManager.I.GoalBallNumber = BallManager.I.GoalBalls.length;
            // this.Players[this.nowPlayerType].IsContinuousBatting = true;
        }
    }
    /**判断所有进球中的类型是否相同 */
    JudgeGoalBallIsSameType() {
        for (let i = BallManager.I.GoalBallNumber; i < BallManager.I.GoalBalls.length; i++) {
            const element = BallManager.I.GoalBalls[i];
            if (BallManager.I.GoalBalls[BallManager.I.GoalBallNumber].ballTpye != element.ballTpye) {
                return false;
            }
        }
        return true;
    }
    /**判断进球中是否有目标类型 */
    JudgeGoalBallIsTargetType(): boolean {
        for (let i = BallManager.I.GoalBallNumber; i < BallManager.I.GoalBalls.length; i++) {
            const element = BallManager.I.GoalBalls[i];
            if (this.Players[this.nowPlayerType].TypeOfBallToBeHit == element.ballTpye) {
                return true;
            }
        }
        return false;
    }
    /**判断玩家的目标球是否已经打完了 */
    JudgePlayerTargetBallIsOver(): boolean {
        let sum = 0;
        if (this.Players[this.nowPlayerType].TypeOfBallToBeHit == 3) return true;
        for (let i = 0; i < BallManager.I.GoalBalls.length; i++) {
            const element = BallManager.I.GoalBalls[i];
            if (element.ballTpye == this.Players[this.nowPlayerType].TypeOfBallToBeHit) {
                sum++;
            }
        }
        console.log("判断玩家的目标球是否已经打完了", sum);
        console.log("判断玩家的目标球是否已经打完了", BallManager.I.GoalBalls);
        if (sum == 7) {
            return true;
        } else {
            return false;
        }
    }
    /**更新游戏结束的数据 并显示弹窗 */
    UpdateEndGameData(winPlayer, lostPlayer) {
        GameData.I.SettlementData.winPlayer = winPlayer;
        GameData.I.SettlementData.lostPlayer = lostPlayer;
    }
    ReturnMainScene() {
        // director.loadScene("MainScene");
        let popup = find("Canvas/TipPopup")
        if (!popup) {
            PopupManager.I.ShowPopup(find("Canvas"), "TipPopup", true);
        } else {
            PopupManager.I.ClosePopup(find("Canvas"), true, popup)
        }
    }

    /**显示球高亮 */
    ShowBallLight() {
        if (this.nowPlayerType == this.thisPlayer) {
            if (this.Players[this.thisPlayer].TypeOfBallToBeHit != 0 && this.Players[this.thisPlayer].TypeOfBallToBeHit != 1 && this.Players[this.thisPlayer].TypeOfBallToBeHit != 3) {
                for (let i = 0; i < BallManager.I.AllBalls.length; i++) {
                    const ball = BallManager.I.AllBalls[i];
                    const ballNode = ball.node.getChildByName("Light");
                    console.log(ballNode);

                    if (ball.ballTpye == 3) {
                        ballNode.active = false;
                    } else {
                        ballNode.active = true;
                    }
                }
                return;
            }
            for (let i = 0; i < BallManager.I.AllBalls.length; i++) {
                const ball = BallManager.I.AllBalls[i];
                const ballNode = ball.node.getChildByName("Light");
                console.log(ballNode);
                if (ball.ballTpye == this.Players[this.thisPlayer].TypeOfBallToBeHit) {
                    ballNode.active = true;
                } else {
                    ballNode.active = false;
                }
            }
        }
    }
    /**关闭球高亮 */
    CloseBallLight() {
        for (let i = 0; i < BallManager.I.AllBalls.length; i++) {
            const ball = BallManager.I.AllBalls[i];
            const ballNode = ball.node.getChildByName("Light")
            ballNode.active = false;
        }
    }
    ShowCombo() {
        this.inHoleBallNumber++;
        console.log("连续进球数为: ", this.inHoleBallNumber);
        if (this.inHoleBallNumber == 0 || this.inHoleBallNumber == 1) return;
        for (let i = 0; i < this.combos.length; i++) {
            let element = this.combos[i];
            if (this.inHoleBallNumber - 2 == i) {
                element.node.setPosition(new Vec3(0, 0, 0));
                element.color = new Color(255, 255, 255, 255);
                element.node.active = true;
                tween(element.node).to(1, { position: new Vec3(-170, 0, 0) }, { easing: "circOut" }).start();
                tween(element.color).to(0.5, new Color(255, 255, 255, 255), { easing: "circOut" }).start();
                tween(element.color).delay(1.3).to(0.5, new Color(255, 255, 255, 0), { easing: "circOut" }).start();
            }
        }
    }
}
