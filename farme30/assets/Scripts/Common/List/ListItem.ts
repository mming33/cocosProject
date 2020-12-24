import { _decorator, Component, Node, director, Label } from 'cc';
import { PopupManager } from '../Popup/PopupManager';
import { StateMachine } from '../StateMachine/StateMachine';
import { StateType } from '../StateMachine/StateType';
const { ccclass, property } = _decorator;

@ccclass('ListItem')
export class ListItem extends Component {
    data: any = {};
    onEnable() {
        let label = this.node.getChildByName("Text")?.getComponent(Label);
        if (label)
            label.string = this.data.id + "";

        let self = this;
        this.node.on(Node.EventType.TOUCH_END, () => {
            director.loadScene("GameScene");
            // PopupManager.I.ClosePopup();
            let data = {
                data: self.data.data,
                type: self.data.type
            }
            StateMachine.ChangeState(StateType.ChooseLevelState, StateType.StartGameState, null, data);
        })
    }
}
