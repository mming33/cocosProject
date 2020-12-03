import { _decorator, Component, Node, Collider } from 'cc';
import { GameSceneUI } from '../UI/GameSceneUI';
import { Ball } from './Ball';
import { BallManager } from './BallManager';
const { ccclass, property } = _decorator;

@ccclass('OrdinaryBall')
export class OrdinaryBall extends Ball {

    protected onTriggerEnter(obj) {
        let other: Collider = obj.otherCollider;
        if (other.node.name == "dong") {
            this.playSource(other);
            this.isGoal = true;
            this.rig.isKinematic = true;
            this.rig.clearState();
            console.log(this.ballNumber, "号球进了");
            this.inHoleAnimation(other.node.worldPosition);
            BallManager.I.GoalBall(this.node);
            // this.node.active = false;
        }
    }
}
