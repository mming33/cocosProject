import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {
    /**游戏是否暂停 */
    public static isGameStop: boolean = false;
}
