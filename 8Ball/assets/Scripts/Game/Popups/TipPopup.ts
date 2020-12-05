import { _decorator, Component, Node, Label, find, LabelComponent, EventTouch, tween, Vec3 } from 'cc';
import { Popup } from '../../Common/Popup/Popup';
const { ccclass, property } = _decorator;

@ccclass('TipPopup')
export class TipPopup extends Popup {
    TipString: LabelComponent;
    YesBtnLabel: LabelComponent;
    NoBtnLabel: LabelComponent;
    YesBtn: Node;
    NoBtn: Node;
    onEnable() {
        let tipBG = this.node.getChildByName("TipBG")
        tipBG.setPosition(0, - 1000, 0);
        tween(tipBG).to(0.8,{position: new Vec3(0, 0, 0)}, { easing: "backOut" }).start();
    }
    arg: any;
    Init(arg: any) {
        this.arg = arg;
        let tipBG = this.node.getChildByName("TipBG")
        let TipStringNode = tipBG.getChildByName("TipString");
        this.TipString = TipStringNode.getComponent(LabelComponent);
        let YesBtnLabelNode = tipBG.getChildByName("YesLabel");
        this.YesBtnLabel = YesBtnLabelNode.getComponent(LabelComponent);
        let NoBtnLabelNode = tipBG.getChildByName("NoLabel");
        this.NoBtnLabel = NoBtnLabelNode.getComponent(LabelComponent);
        this.YesBtn = tipBG.getChildByName("YesBtn");
        this.NoBtn = tipBG.getChildByName("NoBtn");

        this.YesBtn.on(Node.EventType.TOUCH_END, this.arg.YesBtn);
        this.NoBtn.on(Node.EventType.TOUCH_END, this.arg.NoBtn);
        this.TipString.string = this.arg.TipString + "";
        this.YesBtnLabel.string = this.arg.YesBtnString + "";
        this.NoBtnLabel.string = this.arg.NoBtnString + "";

    }
    onDisable() {
        this.YesBtn.targetOff(Node.EventType.TOUCH_END);
        this.NoBtn.targetOff(Node.EventType.TOUCH_END);
    }


}
