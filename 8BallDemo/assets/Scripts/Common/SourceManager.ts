import { _decorator, Component, Node, AudioClip, AudioSource, tween } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SourceManager')
export class SourceManager extends Component {
    static I: SourceManager;
    @property(AudioSource)
    audioSource: AudioSource = null
    @property(AudioClip)
    audios: AudioClip[] = [];

    volume: number = 1;
    onLoad() {
        SourceManager.I = this.node.getComponent(SourceManager);
    }
    Ball2Ball() {
        // if (Math.random() > 0.5) {
        this.audios[0].playOneShot(this.volume);
        // } else {
        //     this.audios[0].playOneShot(1);
        // }
    }
    Ball2Table() {
        this.audios[2].playOneShot(this.volume);
    }
    Gun2Ball() {
        this.audios[3].playOneShot(this.volume);
    }
    InHole() {
        this.audios[4].playOneShot(this.volume);
    }
    Win() {
        this.audios[5].playOneShot(this.volume);
    }
    Lose() {
        this.audios[6].playOneShot(this.volume);
    }
    Join() {
        this.audios[7].playOneShot(this.volume);
    }
    Settlemeny() {
        this.audios[8].playOneShot(this.volume);
    }
    StartGame() {
        this.audios[10].playOneShot(this.volume);
    }
    BGMusic() {
        this.audios[9].play();
        this.audios[9].setLoop(true);
    }
}
