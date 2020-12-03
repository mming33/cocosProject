import { _decorator, Component, Node, Tween, tween, Vec3, Sprite, Color, macro, Enum, v3 } from 'cc';
const { ccclass, property } = _decorator;
enum UIAnimationEnum {
    MatchingHeadImageBGAnimation,
    Alpha1to0,
}

@ccclass('Typescript')
export class UIAnimation extends Component {
    @property({ type: Enum(UIAnimationEnum) })
    thisUIAnimationEnum: UIAnimationEnum = UIAnimationEnum.MatchingHeadImageBGAnimation;
    start() {
        switch (this.thisUIAnimationEnum) {
            case UIAnimationEnum.MatchingHeadImageBGAnimation:
                this.MatchingHeadImageBGAnimation(this.node);
                break;
            case UIAnimationEnum.Alpha1to0:
                let nodeSprite = this.node.getComponent(Sprite);
                this.Alpha1to0(nodeSprite);
                break;
            default:
                break;
        }
    }
    /**匹配时头像背景放大缩小循环动画 */
    MatchingHeadImageBGAnimation(node: Node) {
        tween(node)
            .to(0.5, { scale: new Vec3(1.1, 1.1, 1.1) } /** { easing: "backInOut" }*/)
            .to(0.5, { scale: new Vec3(1, 1, 1) }).union().repeat(999).start();;
    }
    Alpha1to0(node: Sprite) {
        this.schedule(() => {
            if (node.color.a <= 0) {
                return;
            } 
            let index = node.color.a - 1;
            node.color = new Color(node.color.r, node.color.g, node.color.b, index);
        }, 0.01, macro.REPEAT_FOREVER, 0)
    }
}
