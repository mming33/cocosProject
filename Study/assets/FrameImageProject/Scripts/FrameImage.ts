// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import FrameImageManager from "./FrameImageManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FrameImage extends cc.Component {
    @property(cc.Float)
    sizeX = 0.41;
    @property(cc.Float)
    sizeY = 0.41;

    @property(cc.Node)
    icon: cc.Node = null;
    InitFrameImage(uid: number) {
        if (FrameImageManager.GetDataErr) return;
        let userData = FrameImageManager.GetDataForUid(uid);
        let sprite = this.node.getComponent(cc.Sprite);
        sprite.spriteFrame = null;
        
        console.log(userData.frame_image_sprite);
        console.log("+++++++++++++++++++++++++++");
        if (!userData.frame_image_sprite) {
            let url = FrameImageManager.UsersInfoData[uid].frame_image;
            if (url) {
                FrameImageManager.LoadImage(url, uid, (res) => {
                    let image = new cc.SpriteFrame(res);
                    userData.frame_image_sprite = image;
                    sprite.spriteFrame = userData.frame_image_sprite;
                    sprite.sizeMode = cc.Sprite.SizeMode.RAW;
                    sprite.trim = false;
                    sprite.node.scaleX = this.sizeX;
                    sprite.node.scaleY = this.sizeY;
                    if (this.icon) {
                        this.node.position = this.icon.position;
                    }
                })
            }
        } else {
            sprite.spriteFrame = userData.frame_image_sprite;
            sprite.sizeMode = cc.Sprite.SizeMode.RAW;
            sprite.trim = false;
            sprite.node.scaleX = this.sizeX;
            sprite.node.scaleY = this.sizeY;
            if (this.icon) {
                this.node.position = this.icon.position;
            }
        }
    }
}
