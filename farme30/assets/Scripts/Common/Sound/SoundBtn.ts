import { _decorator, Component, Sprite, SpriteFrame, Button, ButtonComponent, EventHandler } from 'cc';
import { SoundManager } from './SoundManager';
const { ccclass, property } = _decorator;

@ccclass('SoundBtn')
export class SoundBtn extends Component {
    sp: Sprite | null = null;
    @property(SpriteFrame)
    OnSoundFrame: SpriteFrame | null = null;
    @property(SpriteFrame)
    OffSoundFrame: SpriteFrame | null = null;
    start() {
        this.sp = this.node.getComponent(Sprite);
        if (!this.sp) {
            console.error("此结点没有Sprite组件");
            return
        }
        if (SoundManager.I.AudioSourceVolume == 1) {
            this.sp.spriteFrame = this.OnSoundFrame;
        }
        else if (SoundManager.I.AudioSourceVolume == 0) {
            this.sp.spriteFrame = this.OffSoundFrame;
        }
    }
    soundBtn(event: any, name: any) {
        if (SoundManager.I.AudioSourceVolume == 1) {
            SoundManager.I.SetSourceVolume(0);
            SoundManager.I.SetBGMusicVolume(0, name);
            if (this.sp)
                this.sp.spriteFrame = this.OffSoundFrame;
        }
        else if (SoundManager.I.AudioSourceVolume == 0) {
            SoundManager.I.SetSourceVolume(1);
            SoundManager.I.SetBGMusicVolume(1, name);
            if (this.sp)
                this.sp.spriteFrame = this.OnSoundFrame;
        }
    }

}
