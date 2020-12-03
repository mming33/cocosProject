import { _decorator, Component, Node, macro, Vec3, RigidBody, find, PhysicsSystem, SphereCollider, RigidBodyComponent, SphereColliderComponent, v3 } from 'cc';
import { MathAlgorithm } from '../../Algorithm/MathAlgorithm';
import { GameSceneManager } from '../GameSceneManager';
import { Ball } from './Ball';
import { BallType } from './BallType';
import { BlackBall } from './BlackBall';
import { RackManager } from './RackManager';
import { WhiteBall } from './WhiteBall';
const { ccclass, property } = _decorator;

@ccclass('BallManager')
/**管理球数据 */
export class BallManager extends Component {
    static I: BallManager;
    /**白球 */
    @property(Node)
    WhiteBall: Node = null;
    @property(Node)
    whiteBallPos: Node = null;
    /**保存了所有球的结点的集合 */
    AllBallsofNode: Array<Node> = new Array<Node>();
    /**保存了所有红色（实色）球的结点的集合 */
    RedBalls: Array<Node> = new Array<Node>();
    /**保存了所有黄色（花色）球的结点的集合 */
    YellowBalls: Array<Node> = new Array<Node>();
    /**黑球 */
    BlackBall: Node = null;
    BlackBallComponent: BlackBall = null;
    whiteBallFirstTouchBallType: BallType;
    wihteBallIsGoal: boolean = false;
    blackBallIsGoal: boolean = false;

    GoalBalls: Array<Ball> = new Array<Ball>();
    UnGoalBalls: Array<Ball> = new Array<Ball>();

    /**保存了所有球的结点的集合 */
    AllBalls: Array<Ball> = new Array<Ball>();
    whiteBallComponent: WhiteBall = null;

    isAllBallStop: boolean = false;

    /**进球数 */
    GoalBallNumber: number = 0;
    start() {
        PhysicsSystem.instance.maxSubSteps = 8;
        PhysicsSystem.instance.fixedTimeStep = 1 / 150;
        this.Init();
        this.schedule(() => {
            //判断玩家是否击打过球  若没有 则不进行继续的判断
            if (!GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsHitBall) return;
            if (this.isAllBallStop) return;
            if (this.IsAllBallIsStop()) {
                this.isAllBallStop = true;
                GameSceneManager.I.RoundEndChangePlayer();
            }
        }, 0.2)
    }
    /**初始化 */
    Init() {
        BallManager.I = this.node.getComponent(BallManager);
        this.whiteBallComponent = this.WhiteBall.getComponent(WhiteBall);
        this.WhiteBall.setWorldPosition(new Vec3(-130 + (Math.random() < 0.5 ? 1 : -1) * (3 * Math.random()), 5.71, (Math.random() < 0.5 ? 1 : -1) * (3 * Math.random())))
        this.UnGoalBalls = this.AllBalls;
    }
    /**重置白球第一个碰到的球的信息 */
    ResetWhiteBallFirstTouchBallValue() {
        this.whiteBallFirstTouchBallType = -1;
    }
    /**重置白球进球状态 */
    ResetWhiteBallIsGoal() {
        this.wihteBallIsGoal = false;
    }
    /**判断是否所有的球都停止运动了 */
    IsAllBallIsStop(): boolean {
        if (!this.whiteBallComponent.isStop) return false;
        for (let i = 0; i < this.AllBalls.length; i++) {
            const element = this.AllBalls[i];
            if (!element.isStop) {
                return false;
            }
        }
        return true;
    }
    /**开启自由球 */
    OpenFreeBall() {
        for (let i = 0; i < this.AllBalls.length; i++) {
            const element = this.AllBalls[i];
            this.AllBalls[i].rig.isKinematic = true;
        }
        this.WhiteBall.getComponent(Ball).rig.linearDamping = 0.999999999;
    }
    /**关闭自由球 */
    CloseFreeBall() {
        for (let i = 0; i < this.AllBalls.length; i++) {
            const element = this.AllBalls[i];
            this.AllBalls[i].rig.isKinematic = false;
        }
        this.WhiteBall.getComponent(Ball).rig.linearDamping = 0.4;
    }
    /**进球的方法 */
    GoalBall(ball: Node) {
        let ballcomponent = ball.getComponent(Ball)
        this.GoalBalls.push(ballcomponent);
        ballcomponent.isStop = true;
        let number = ballcomponent.ballNumber;
        // if (GameSceneManager.I.thisPlayer == GameSceneManager.I.nowPlayerType) {
        if (GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].TypeOfBallToBeHit != 0 && GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].TypeOfBallToBeHit != 1 && GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].TypeOfBallToBeHit != 2) {
            GameSceneManager.I.ShowCombo();
        } else if (GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].TypeOfBallToBeHit == ballcomponent.ballTpye) {
            GameSceneManager.I.ShowCombo();
        }
        // }
        RackManager.I.GoalBallAnimation(number);
    }
    /**重置白球的位置 */
    ResetWhiteBallPos() {
        // this.scheduleOnce(() => {
        find("Canvas/BallDrag").active = true;
        find("Canvas/BallDrag/hand").active = true;
        console.log("重置白球位置");
        BallManager.I.WhiteBall.active = true;
        BallManager.I.WhiteBall.setWorldScale(new Vec3(11.42, 11.42, 11.42));
        BallManager.I.WhiteBall.getComponent(SphereColliderComponent).isTrigger = false;
        BallManager.I.WhiteBall.getComponent(RigidBodyComponent).isKinematic = false;
        BallManager.I.WhiteBall.worldPosition = MathAlgorithm.ResetBallPos(BallType.WHITEBALL);
        BallManager.I.WhiteBall.getComponent(RigidBody).clearState();
        // }, 1)
    }

    /**重置黑球的位置 */
    ResetBlackBallPos() {
        console.log("重置黑球位置");
        BallManager.I.BlackBall.worldPosition = MathAlgorithm.ResetBallPos(BallType.BLACKBALL);
        BallManager.I.BlackBall.getComponent(RigidBody).clearState();
    }
    /**重置球的状态 */
    ResetBall() {
        this.whiteBallComponent.isGoal = false;
        this.BlackBallComponent.isGoal = false;

    }
}
