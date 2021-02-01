import { _decorator, Component, Node } from 'cc';
import { PopupManager } from './PopupManager';
const { ccclass, property } = _decorator;

@ccclass('Popup')
export class Popup extends Component {

    isLevel2Popup: boolean = false;
    Init(arg?: any) {

    }
    close() {
        PopupManager.ClosePopup(this.isLevel2Popup);
    }
}
