import { _decorator, Component, Node, Prefab, instantiate, SphereCollider, RigidBody } from 'cc';
import { MathAlgorithm } from '../../Algorithm/MathAlgorithm';
import { Ball } from './Ball';
import { BallManager } from './BallManager';
import { BallPhysics } from './BallPhysics';
import { BlackBall } from './BlackBall';
import { OrdinaryBall } from './OrdinaryBall';
import { RackManager } from './RackManager';
const { ccclass, property } = _decorator;

@ccclass('CreateBall')
export class CreateBall extends Component {
    @property({ type: Prefab })
    private redBall: Prefab[] = [];
    @property(Prefab)
    private yellowBall: Prefab[] = [];
    @property(Prefab)
    private blackBall: Prefab = null;
    start() {
        this.PutBall();
        this.RackBall();
    }
    /**创建球并摆到相应的位置上（红黄两种颜色的球） */
    PutBall() {
        let posArr = MathAlgorithm.Ball_8_Permutation();
        let redBallNumbebr = 0;
        let yellowBallNumbebr = 0;
        for (let i = 0; i < posArr.length; i++) {
            let node: Node = null;
            if (i == 4) {
                node = (instantiate(this.blackBall) as Node);
                BallManager.I.BlackBall = node;
                BallManager.I.BlackBallComponent = node.getComponent(BlackBall);
            } else if (redBallNumbebr <= yellowBallNumbebr) {
                node = (instantiate(this.redBall[redBallNumbebr]) as Node)
                redBallNumbebr++;
                BallManager.I.RedBalls.push(node);
            } else {
                node = (instantiate(this.yellowBall[yellowBallNumbebr]) as Node)
                yellowBallNumbebr++;
                BallManager.I.YellowBalls.push(node);
            }
            node.position = posArr[i];
            this.node.parent.addChild(node);
            BallManager.I.AllBallsofNode.push(node);
            BallManager.I.AllBalls.push(node.getComponent(Ball));
        }
    }
    /**创建球 */
    RackBall() {
        for (let i = 0; i < this.redBall.length; i++) {
            let ball = instantiate(this.redBall[i]);
            ball.getComponent(RigidBody).enabled = false;
            ball.getComponent(SphereCollider).enabled = false;
            ball.getComponent(BallPhysics).enabled = false;
            ball.getComponent(Ball).enabled = false;
            RackManager.allBall.push(ball);
        }
        let ball2 = instantiate(this.blackBall);
        ball2.getComponent(RigidBody).enabled = false;
        ball2.getComponent(SphereCollider).enabled = false;
        ball2.getComponent(BallPhysics).enabled = false;
        ball2.getComponent(BlackBall).enabled = false;
        console.log(ball2.getComponent(SphereCollider).enabled);
        RackManager.allBall.push(ball2);
        for (let i = 0; i < this.yellowBall.length; i++) {
            let ball3 = instantiate(this.yellowBall[i]);
            ball3.getComponent(RigidBody).enabled = false;
            ball3.getComponent(SphereCollider).enabled = false;
            ball3.getComponent(BallPhysics).enabled = false;
            ball3.getComponent(Ball).enabled = false;
            console.log(ball3.getComponent(SphereCollider).enabled);
            RackManager.allBall.push(ball3);
        }
    }
}
