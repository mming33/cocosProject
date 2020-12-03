import { _decorator, Component, Node, Prefab, instantiate, RigidBody, Vec3, tween } from 'cc';
import { MathAlgorithm } from './Algorithm/MathAlgorithm';
const { ccclass, property } = _decorator;

@ccclass('Test')
export class Test extends Component {

    @property(Prefab)
    private ball: Prefab = null;
    start() {
        let poss = MathAlgorithm.Ball_8_Permutation();
        for (let i = 0; i < poss.length; i++) {
            let node = (instantiate(this.ball) as Node)
            node.position = poss[i];
            this.node.parent.addChild(node);

        }
        this.scheduleOnce(() => {
            this.node.parent.getChildByName("RedBall").getComponent(RigidBody).applyImpulse(new Vec3(30, 0, 0));
        }, 1);
    }

}
