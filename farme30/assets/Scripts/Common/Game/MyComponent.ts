import { _decorator, Component, macro } from 'cc';
import { GameController } from './GameController';
const { ccclass, property } = _decorator;

@ccclass('MyComponent')
export class MyComponent extends Component {


    onEnable() {
        this.Init();
        this.schedule(this.gameUpdate, 0.02, macro.REPEAT_FOREVER)
        
    }
    private gameUpdate() {
        if (GameController.isGameStop) return;
        this.onUpDate(0.02)
    }
    onDisable() {
        this.unschedule(this.gameUpdate)
        this.myDisable();
    }

    protected Init() {

    }
    protected onUpDate(dt: number) {

    }
    protected myDisable() {

    }


}
