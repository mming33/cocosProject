import { _decorator, Component, Node, AudioSource, find, Sprite, SpriteFrame } from 'cc';
import { PopupManager } from '../Game/Popup/PopupManager';
import { SourceManager } from './SourceManager';
const { ccclass, property } = _decorator;

@ccclass('Silence')
export class Silence extends Component {

    sp: Sprite;
    @property(SpriteFrame)
    OnSoundFrame: SpriteFrame = null;
    @property(SpriteFrame)
    OffSoundFrame: SpriteFrame = null;
    start() {
        this.sp = this.node.getComponent(Sprite);
        if (SourceManager.I.volume == 1) {
            this.sp.spriteFrame = this.OnSoundFrame;
        }
        else if (SourceManager.I.volume == 0) {
            this.sp.spriteFrame = this.OffSoundFrame;
        }
    }
    soundBtn() {
        if (SourceManager.I.volume == 1) {
            SourceManager.I.volume = 0;
            SourceManager.I.audios[9].setVolume(0)
            this.sp.spriteFrame = this.OffSoundFrame;
        }
        else if (SourceManager.I.volume == 0) {
            SourceManager.I.volume = 1;
            SourceManager.I.audios[9].setVolume(1)
            this.sp.spriteFrame = this.OnSoundFrame;
        }
    }
    ExitBtn() {
        PopupManager.I.ShowPopup(find("Canvas"), "ExitTipPopup", true);
    }

}
