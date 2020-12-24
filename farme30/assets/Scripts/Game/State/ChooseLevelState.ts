// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Node, director } from 'cc';
import { GameData } from '../../Common/Game/GameData';
import { MyComponent } from '../../Common/Game/MyComponent';
import { ListGenerator } from '../../Common/List/ListGenerator';
import { PopupManager } from '../../Common/Popup/PopupManager';
import { IState } from '../../Common/StateMachine/IState';
import { StateMachine } from '../../Common/StateMachine/StateMachine';
import { StateType } from '../../Common/StateMachine/StateType';
const { ccclass, property } = _decorator;

@ccclass('ChooseLevelState')
export class ChooseLevelState extends MyComponent implements IState {
    stateName: string = StateType.ChooseLevelState;
    canFromStateName: string[] = [StateType.MainSceneStartState];
    canToStateName: string[] = [StateType.MainSceneStartState, StateType.StartGameState];
    
    onLoad() {
        this.addSelf2StateMap();
    }

   Start(arg?: any): void {
        PopupManager.I.ShowPopup("LevelPopup");
    }
    End(arg?: any): void {
        PopupManager.I.ClosePopup();
    }
    addSelf2StateMap(): void {
        console.log("注册状态成功，name: ", this.stateName);
        StateMachine.AddState(this.stateName, this.node.getComponent(ChooseLevelState) as ChooseLevelState)
    }

}
