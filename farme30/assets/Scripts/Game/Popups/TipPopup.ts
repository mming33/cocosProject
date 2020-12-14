import { _decorator, Component, Node, Label, find, LabelComponent, EventTouch, tween, Vec3 } from 'cc';
import { Popup } from '../../Common/Popup/Popup';
const { ccclass, property } = _decorator;

@ccclass('TipPopup')
export class TipPopup extends Popup {
    private TipString: LabelComponent | null = null;
    private YesBtnLabel: LabelComponent | null = null;
    private NoBtnLabel: LabelComponent | null = null;
    private YesBtn: Node | null = null;
    private NoBtn: Node | null = null;
    onEnable() {
        let tipBG = this.node.getChildByName("TipBG") as Node;
        tipBG.setPosition(0, - 1000, 0);
        tween(tipBG).to(0.8, { position: new Vec3(0, 0, 0) }, { easing: "backOut" }).start();
    }
    Init(arg: any) {
        let tipBG = this.node.getChildByName("TipBG") as Node;
        let TipStringNode = tipBG.getChildByName("TipString") as Node;
        this.TipString = TipStringNode.getComponent(LabelComponent) as LabelComponent;
        let YesBtnLabelNode = tipBG.getChildByName("YesLabel") as Node;
        this.YesBtnLabel = YesBtnLabelNode.getComponent(LabelComponent) as LabelComponent;
        let NoBtnLabelNode = tipBG.getChildByName("NoLabel") as Node;
        this.NoBtnLabel = NoBtnLabelNode.getComponent(LabelComponent) as LabelComponent;
        this.YesBtn = tipBG.getChildByName("YesBtn") as Node;
        this.NoBtn = tipBG.getChildByName("NoBtn") as Node;

        this.YesBtn.on(Node.EventType.TOUCH_END, arg.YesBtn);
        this.NoBtn.on(Node.EventType.TOUCH_END, arg.NoBtn);
        this.TipString.string = arg.TipString + "";
        this.YesBtnLabel.string = arg.YesBtnString + "";
        this.NoBtnLabel.string = arg.NoBtnString + "";

    }
    onDisable() {
        if (this.YesBtn)
            this.YesBtn.targetOff(Node.EventType.TOUCH_END);
        if (this.NoBtn)
            this.NoBtn.targetOff(Node.EventType.TOUCH_END);
    }


}
