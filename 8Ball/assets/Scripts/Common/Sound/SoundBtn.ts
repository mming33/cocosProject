import { _decorator, Component, Sprite, SpriteFrame, Button, ButtonComponent, EventHandler } from 'cc';
import { SoundManager } from './SoundManager';
const { ccclass, property } = _decorator;

@ccclass('SoundBtn')
export class SoundBtn extends Component {
    sp: Sprite;
    @property(SpriteFrame)
    OnSoundFrame: SpriteFrame = null;
    @property(SpriteFrame)
    OffSoundFrame: SpriteFrame = null;
    start() {
        this.sp = this.node.getComponent(Sprite);
        if (SoundManager.I.AudioSourceVolume == 1) {
            this.sp.spriteFrame = this.OnSoundFrame;
        }
        else if (SoundManager.I.AudioSourceVolume == 0) {
            this.sp.spriteFrame = this.OffSoundFrame;
        }
    }
    soundBtn(event, name) {
        if (SoundManager.I.AudioSourceVolume == 1) {
            SoundManager.I.SetSourceVolume(0);
            SoundManager.I.SetBGMusicVolume(0, name);
            this.sp.spriteFrame = this.OffSoundFrame;
        }
        else if (SoundManager.I.AudioSourceVolume == 0) {
            SoundManager.I.SetSourceVolume(1);
            SoundManager.I.SetBGMusicVolume(1, name);
            this.sp.spriteFrame = this.OnSoundFrame;
        }
    }
}
