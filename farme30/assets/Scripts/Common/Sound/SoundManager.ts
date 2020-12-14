import { _decorator, Component, Node, AudioSource, AudioClip, game } from 'cc';
import { LoadManager } from '../Load/LoadManager';
import { MyListCommon } from '../MyMath/MyListCommon';
const { ccclass, property } = _decorator;

@ccclass('SoundManager')
export class SoundManager extends Component {
    /**单例 */
    private static Instance: SoundManager;
    public static get I(): SoundManager { return this.Instance; }
    private static set i(v: SoundManager) { this.Instance = v; }

    audios: AudioClip[] = [];

    AudioSourceVolume: number = 1;
    BGMVolume: number = 1;

    onLoad() {
        game.addPersistRootNode(this.node);
        SoundManager.i = this.node.getComponent(SoundManager) as SoundManager;
    }

    PlayBGMusic(name: string = "BGMusic") {
        for (let i = 0; i < this.audios.length; i++) {
            const element = this.audios[i];
            if (element.name == name) {
                element.play();
                element.setLoop(true);
            }
        }
    }
    PlaySource(name: string) {
        for (let i = 0; i < this.audios.length; i++) {
            const element = this.audios[i];
            if (element.name == name) {
                element.playOneShot(this.AudioSourceVolume);
            }
        }
    }

    SetSourceVolume(volume: number) {
        this.AudioSourceVolume = volume;
    }
    SetBGMusicVolume(volume: number, BGMusicName: string = "BGMusic") {
        this.BGMVolume = volume;
        for (let i = 0; i < this.audios.length; i++) {
            const element = this.audios[i];
            if (element.name == BGMusicName) {
                element.setVolume(this.BGMVolume);
            }
        }
    }
}
