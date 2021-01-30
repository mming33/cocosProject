import { _decorator, Component, Node, AudioSource, AudioClip, game, resources } from 'cc';
import { LoadManager } from '../Load/LoadManager';
import { MyListCommon } from '../MyMath/MyListCommon';
const { ccclass, property } = _decorator;

@ccclass('SoundManager')
export class SoundManager {

    private static singleton: SoundManager;
    public static get I(): SoundManager {
        if (!this.singleton) {
            this.singleton = new SoundManager();
        }
        return this.singleton;
    }

    static audios: AudioClip[] = [];

    static AudioSourceVolume: number = 1;
    static BGMVolume: number = 1;

    /**
       * 加载音效，并初始化SoundManager.I.audios
       */
    static LoadSound() {
        resources.loadDir("Sounds", function (err: any, assets: any) {
            if (err) {
                console.error(err);
                return;
            }
            for (let i = 0; i < assets.length; i++) {
                const element = assets[i];
                SoundManager.audios.push(element);
            }
            LoadManager.loadIndex++;
        });
    }
    static PlayBGMusic(name: string = "BGMusic") {
        for (let i = 0; i < this.audios.length; i++) {
            const element = this.audios[i];
            if (element.name == name) {
                element.play();
                element.setLoop(true);
            }
        }
    }
    static PlaySource(name: string) {
        for (let i = 0; i < this.audios.length; i++) {
            const element = this.audios[i];
            if (element.name == name) {
                element.playOneShot(this.AudioSourceVolume);
            }
        }
    }

    static SetSourceVolume(volume: number) {
        this.AudioSourceVolume = volume;
    }
    static SetBGMusicVolume(volume: number, BGMusicName: string = "BGMusic") {
        this.BGMVolume = volume;
        for (let i = 0; i < this.audios.length; i++) {
            const element = this.audios[i];
            if (element.name == BGMusicName) {
                element.setVolume(this.BGMVolume);
            }
        }
    }
}
