import { _decorator, Component, Node, director } from 'cc';
import { GameData } from '../../Common/Game/GameData';
import { ListGenerator } from '../../Common/List/ListGenerator';
import { Popup } from '../../Common/Popup/Popup';
import { StateMachine } from '../../Common/StateMachine/StateMachine';
import { StateType } from '../../Common/StateMachine/StateType';
const { ccclass, property } = _decorator;

@ccclass('LevelPopup')
export class LevelPopup extends Popup {
    Init(arg?: any) {
        let listGenerator = this.node.getChildByName("ScrollView")?.getComponent(ListGenerator);
        if (listGenerator) {
            listGenerator.Init();
            listGenerator.CreateItemByData(GameData.GameSceneData,'level')
        }
    }
    close() {
        StateMachine.ChangeState(StateType.ChooseLevelState, StateType.MainSceneStartState);
    }
}
