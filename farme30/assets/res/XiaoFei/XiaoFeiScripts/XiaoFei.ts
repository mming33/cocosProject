// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Node, AnimationComponent, AnimationClip } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('XiaoFei')
export class XiaoFei extends Component {

    animationComponent: AnimationComponent | null = null;

    clips: AnimationClip[] = [];
    onLoad() {
        this.animationComponent = this.node.getComponent(AnimationComponent);

    }
    start() {
        if (this.animationComponent) {
            this.animationComponent.play("XiaoFeiIdel001");
            console.log("播放了 XiaoFeiIdel001");
            this.scheduleOnce(() => {
                if (this.animationComponent)
                    this.animationComponent.crossFade('XiaoFeiTalk001', 0.3);
            }, 3)
        }
    }


}
