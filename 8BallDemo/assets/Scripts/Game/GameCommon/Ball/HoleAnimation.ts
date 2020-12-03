import { _decorator, Component, Node, SphereCollider, tween, effects, Vec3, MeshRenderer, Collider, AnimationComponent } from 'cc';
import { GameSceneManager } from '../GameSceneManager';
const { ccclass, property } = _decorator;

@ccclass('HoleAnimation')
export class HoleAnimation extends Component {
    @property(Node)
    eff: Node = null;
    effanimation: AnimationComponent = null;
    start() {
        this.node.getComponent(Collider).on("onTriggerEnter", this.onTriggerEnter, this);
        this.effanimation = this.eff.getComponent(AnimationComponent);
    }

    protected onTriggerEnter(obj) {
        if (GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsFreeBall) {
            return;
        }
        console.log(obj);
        this.eff.active = true;
        this.effanimation.play();
    }
  
}
