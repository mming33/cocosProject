import { CanvasComponent, Node, director, find, GFXClearFlag, loader, SpriteComponent, UITransformComponent, _decorator, animation, Vec3 } from 'cc';
import { MyComponent } from '../Game/MyComponent';
import { PopupManager } from '../Popup/PopupManager';
import { SoundManager } from '../Sound/SoundManager';
const { ccclass, property } = _decorator;

@ccclass('LoadManager')
export class LoadManager extends MyComponent {
    static I: LoadManager;

    static loadIndex: number = 0;
    static allloadIndex: number = 4;
    sliderMask: UITransformComponent | undefined;
    canvas: Node | null = null;
    Init() {
        LoadManager.I = this.node.getComponent(LoadManager) as LoadManager;
        LoadManager.loadIndex = 0;
        this.LoadPopupsPrefab();
        this.LoadSoundPrefab();
        this.LoadScenes();
        this.schedule(this.LoadSlider, 0.01)
        this.sliderMask = (find("Canvas/Slider/Mask") as Node).getComponent(UITransformComponent) as UITransformComponent;
    }
    index = 0;
    LoadSlider() {
        if (this.sliderMask) {
            if (this.index <= LoadManager.loadIndex / LoadManager.allloadIndex)
                this.index += 0.01;
            this.sliderMask.width = 517 * this.index;
            console.log(this.index);

        }

        if (LoadManager.loadIndex >= LoadManager.allloadIndex) {
            //---------------------------
            LoadManager.loadIndex = LoadManager.allloadIndex
            if (this.index >= 1) {
                this.scheduleOnce(() => {
                    director.loadScene("MainScene");
                }, 0.5)
                this.unschedule(this.LoadSlider);
            }
            //---------------------------
        } else {
            console.log(LoadManager.loadIndex);
        }
    }

    /**
     * 加载弹窗的预制体，并初始化PopupManager中的popups数组
     */
    LoadPopupsPrefab() {
        // this.CreatePopupParent();
        loader.loadResDir("PopupsPrefab", function (err: any, assets: any) {
            if (err) {
                console.error(err);
                return;
            }
            for (let i = 0; i < assets.length; i++) {
                const element = assets[i];
                PopupManager.I.popups.push(element);
            }
            LoadManager.loadIndex++;
            console.log(PopupManager.I.popups);
        });
    }
    /**
     * 加载音效，并初始化SoundManager.I.audios
     */
    LoadSoundPrefab() {
        this.CreateSoundManager();
        loader.loadResDir("Sounds", function (err: any, assets: any) {
            if (err) {
                console.error(err);
                return;
            }
            for (let i = 0; i < assets.length; i++) {
                const element = assets[i];
                SoundManager.I.audios.push(element);
            }
            LoadManager.loadIndex++;
            console.log(SoundManager.I.audios);
        });
    }
    LoadScenes() {
        director.preloadScene("MainScene", () => {
            LoadManager.loadIndex++;
        });
        director.preloadScene("GameScene", () => {
            LoadManager.loadIndex++;
        });
    }

    private CreatePopupParent() {
        this.canvas = (find("Canvas") as Node)
        let popup = new Node("Popup");
        // if (this.canvas)
        //     popup.setPosition(new Vec3(-this.canvas.position.x, -this.canvas.position.y, 0))
        popup.addChild(new Node("one"));
        popup.addChild(new Node("two"));
        popup.addComponent(UITransformComponent);
        let canvasComponent = popup.addComponent(CanvasComponent);
        popup.addComponent(PopupManager);
        // canvasComponent.clearFlag = GFXClearFlag.DEPTH;
        // canvasComponent.renderMode = 0;
        canvasComponent.priority = 10;
        if (this.node.parent)
            this.node.parent.addChild(popup);

        console.log(popup);
    }
    private CreateSoundManager() {
        let soundManager = new Node("SoundManager");
        soundManager.addComponent(SoundManager);
        if (this.node.parent)
            this.node.parent.addChild(soundManager);
        console.log(soundManager);
    }
}
