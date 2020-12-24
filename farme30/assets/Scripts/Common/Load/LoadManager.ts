import { CanvasComponent, Node, director, find, GFXClearFlag, loader, SpriteComponent, UITransformComponent, _decorator, animation, Vec3, Label } from 'cc';
import { MyComponent } from '../Game/MyComponent';
import { PopupManager } from '../Popup/PopupManager';
import { SoundManager } from '../Sound/SoundManager';
import { IState } from '../StateMachine/IState';
import { StateMachine } from '../StateMachine/StateMachine';
import { StateType } from '../StateMachine/StateType';
const { ccclass, property } = _decorator;

@ccclass('LoadManager')
export class LoadManager extends MyComponent {
    static I: LoadManager;

    static loadIndex: number = 0;
    static allloadIndex: number = 5;

    private sliderMask: UITransformComponent | undefined;
    private sliderText: Label | undefined;
    private index = 0;

    Init() {
        LoadManager.I = this.node.getComponent(LoadManager) as LoadManager;
        this.sliderMask = (find("Canvas/Slider/Mask") as Node).getComponent(UITransformComponent) as UITransformComponent;
        this.sliderText = (find("Canvas/Slider/Text") as Node).getComponent(Label) as Label;
        this.schedule(this.LoadSlider, 0.015);
    }

    LoadSlider() {
        if (this.LoadOver()) {
            this.scheduleOnce(() => {
                director.loadScene("MainScene");
            }, 0.5);
            this.unschedule(this.LoadSlider);
        }

    }

    LoadOver(): boolean {
        if (this.sliderMask) {
            if (this.index <= LoadManager.loadIndex / LoadManager.allloadIndex) {
                this.index += 0.01;
                if (this.sliderText) {
                    this.sliderText.string = Math.floor(this.index * 100) + "%";
                }
            }
            this.sliderMask.width = 517 * this.index;
        }
        if (LoadManager.loadIndex >= LoadManager.allloadIndex) {
            LoadManager.loadIndex = LoadManager.allloadIndex
        }

        if (this.index >= 1) {
            return true;
        } else {
            return false;
        }
    }
}
