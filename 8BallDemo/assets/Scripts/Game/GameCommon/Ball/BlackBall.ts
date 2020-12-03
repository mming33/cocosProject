import { _decorator, Component, Node, Collider } from 'cc';
import { GameSceneManager } from '../GameSceneManager';
import { Ball } from './Ball';
import { BallManager } from './BallManager';
import { RackManager } from './RackManager';
const { ccclass, property } = _decorator;

@ccclass('BlackBall')
export class BlackBall extends Ball {


    protected onTriggerEnter(obj) {
        let other: Collider = obj.otherCollider;
        if (other.node.name == "dong") {
            this.playSource(other);
            BallManager.I.blackBallIsGoal = true;
            this.isGoal = true;
            RackManager.I.GoalBallAnimation(8);
            this.rig.clearState();
            // this.node.active = false;
            this.owner.isStop = true;
            this.inHoleAnimation(other.node.worldPosition);
        }

    }
}
