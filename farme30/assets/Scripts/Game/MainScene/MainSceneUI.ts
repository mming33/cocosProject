import { _decorator, Component, Node, SpriteComponent, find, LabelComponent, EventTouch, director, tween, Color, CameraComponent } from 'cc';
import { MyComponent } from '../../Common/Game/MyComponent';
const { ccclass, property } = _decorator;

@ccclass('MainSceneUI')
export class MainSceneUI extends MyComponent {

    UI: SpriteComponent | null = null;
    bg: SpriteComponent | null = null;
    mainCamera: CameraComponent | null = null;

    Init() {

    }

    InitFindNode() {
        this.UI = (find("Canvas/UI") as Node).getComponent(SpriteComponent) as SpriteComponent;
        this.bg = (find("Canvas/bg") as Node).getComponent(SpriteComponent) as SpriteComponent;
        this.mainCamera = (find("Canvas/mainCamera") as Node).getComponent(CameraComponent) as CameraComponent;
    }

    ShowUI() {
        if (this.UI) {
            this.UI.color = new Color(255, 255, 255, 1);
            tween(this.UI.color).to(1, new Color(255, 255, 255, 255)).start();
        }
        if (this.bg) {
            tween(this.bg.color).to(1, new Color(255, 255, 255, 1)).start();
        }
    }





}
