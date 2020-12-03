import { _decorator, Component, Node, loader, CanvasComponent, UITransformComponent, Scene, Layers, GFXClearFlag, director, Prefab, SpriteComponent, find } from 'cc';
import { PopupManager } from '../Popup/PopupManager';
import { SoundManager } from '../Sound/SoundManager';
const { ccclass, property } = _decorator;

@ccclass('LoadManager')
export class LoadManager extends Component {


    static loadIndex: number = 0;
    static allloadIndex: number = 4;
    sliderItem: SpriteComponent;
    onEnable() {
        LoadManager.loadIndex = 0;
        this.LoadPopupsPrefab();
        this.LoadSoundPrefab();
        this.LoadScenes();
        this.schedule(this.LoadSlider, 0.01)
        this.sliderItem = find("Canvas/Slider/Item").getComponent(SpriteComponent);
    }
    LoadSlider() {
        if (LoadManager.loadIndex >= LoadManager.allloadIndex) {
            director.loadScene("MainScene");
            this.unschedule(this.LoadSlider);
        } else {
            this.sliderItem.fillRange = LoadManager.loadIndex / LoadManager.allloadIndex;
            console.log(LoadManager.loadIndex);
        }
    }

    /**
     * 加载弹窗的预制体，并初始化PopupManager中的popups数组
     */
    LoadPopupsPrefab() {
        this.CreatePopupParent();
        loader.loadResDir("PopupsPrefab", function (err, assets) {
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
        loader.loadResDir("Sounds", function (err, assets) {
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
        let popup = new Node("Popup");
        popup.addChild(new Node("one"));
        popup.addChild(new Node("two"));
        let uiTransformComponent = popup.addComponent(UITransformComponent);
        let canvasComponent = popup.addComponent(CanvasComponent);
        let popupManager = popup.addComponent(PopupManager);
        canvasComponent.clearFlag = GFXClearFlag.DEPTH;
        canvasComponent.renderMode = 0;
        canvasComponent.priority = 10;
        this.node.parent.addChild(popup);
        console.log(popup);
    }
    private CreateSoundManager() {
        let soundManager = new Node("SoundManager");
        soundManager.addComponent(SoundManager);
        this.node.parent.addChild(soundManager);
        console.log(soundManager);
    }
}
