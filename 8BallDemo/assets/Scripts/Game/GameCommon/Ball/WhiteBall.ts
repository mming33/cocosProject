import { _decorator, Component, Node, Collider, GFX_MAX_ATTACHMENTS } from 'cc';
import { SourceManager } from '../../../Common/SourceManager';
import { GameSceneManager } from '../GameSceneManager';
import { GameSceneUI } from '../UI/GameSceneUI';
import { Ball } from './Ball';
import { BallManager } from './BallManager';
const { ccclass, property } = _decorator;

@ccclass('WhiteBall')
export class WhiteBall extends Ball {

    
    protected onTriggerEnter(obj) {
        if (this.JudgingFreeBallTime()) return;
        let other: Collider = obj.otherCollider;
        if (other.node.name == "dong") {
            GameSceneUI.I.ShowTip("Cue Ball into Pocket");
            this.playSource(other);
            BallManager.I.wihteBallIsGoal = true;
            this.isGoal = true;
            this.rig.clearState();
            this.node.active = false;
            // this.inHoleAnimation(other.node.worldPosition);
            this.owner.isStop = true;
        }
    }
    protected onCollisionEnter(obj) {
        let other: Collider = obj.otherCollider;
        if (this.JudgingFreeBallTime()) return;
        this.playSource(other);
        this.JudgingTheFirstBallTouched(other);
    }

    /**判断碰到的第一个球的方法 */
    private JudgingTheFirstBallTouched(other: Collider) {
        let ball: Ball = other.node.getComponent(Ball);
        if (ball && BallManager.I.whiteBallFirstTouchBallType == -1) {
            BallManager.I.whiteBallFirstTouchBallType = ball.ballTpye;
            console.log("本回合第一个碰到的球为", ball.ballTpye);

        }
    }
    /**判断是否是自由球状态 */
    private JudgingFreeBallTime() {
        if (GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsFreeBall) {
            console.log("自由球状态 不检测碰撞");
            return true;
        }
        return false;
    }
}
