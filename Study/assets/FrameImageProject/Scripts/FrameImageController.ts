
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import FrameImage from "./FrameImage";
import FrameImageManager from "./FrameImageManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FrameImageController extends cc.Component {
    static I: FrameImageController;
    @property(Boolean)
    isLoad: boolean = true;
    @property(cc.Node)
    frameImages: cc.Node[] = [];

    onLoad() {
        if (this.isLoad)
            FrameImageController.I = this.node.getComponent(FrameImageController);
    }

    Init(uids) {
        if (FrameImageManager.GetDataErr) return;
        FrameImageManager.Init(uids, () => {
            this.SetAllUsersFrame(uids);
        });
    }

    /** 设置所有玩家的头像框
     * @param uids 
     */
    SetAllUsersFrame(uids: Array<number>) {
        if (FrameImageManager.GetDataErr) return;
        for (let i = 0; i < this.frameImages.length; i++) {
            const element = this.frameImages[i].getComponent(FrameImage);
            element.InitFrameImage(uids[i]);
        }
    }
    /** 设置某个玩家的头像框 
    */
    SetOneUserFrame(userNode: cc.Node, uid: number) {
        if (FrameImageManager.GetDataErr) return;
        let userFrame = userNode.getComponent(FrameImage);
        userFrame.InitFrameImage(uid);
    }

}
