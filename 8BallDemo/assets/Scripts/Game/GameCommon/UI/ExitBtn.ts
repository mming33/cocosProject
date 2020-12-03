import { _decorator, Component, Node } from 'cc';
import MKMessageManager from '../../../Utils/MKMessageManager';
const { ccclass, property } = _decorator;

@ccclass('ExitBtn')
export class ExitBtn extends Component {
    ExitGame() {
        MKMessageManager.exitGame();
    }
}
