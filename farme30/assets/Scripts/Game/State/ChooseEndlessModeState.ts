// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Node } from 'cc';
import { MyComponent } from '../../Common/Game/MyComponent';
import { PopupManager } from '../../Common/Popup/PopupManager';
import { IState } from '../../Common/StateMachine/IState';
import { StateMachine } from '../../Common/StateMachine/StateMachine';
import { StateType } from '../../Common/StateMachine/StateType';
import { StartGameState } from './StartGameState';

const { ccclass, property } = _decorator;

@ccclass('ChooseEndlessModeState')
export class ChooseEndlessModeState extends MyComponent implements IState {
    stateName: string = StateType.ChooseEndlessModeState;
    canFromStateName: string[] = [StateType.MainSceneStartState];
    canToStateName: string[] = [StateType.MainSceneStartState, StateType.StartGameState];

    onLoad() {
        this.addSelf2StateMap();
    }

    Start(arg?: any): void {
        PopupManager.I.ShowPopup("EndlessModePopup");
    }
    End(arg?: any): void {
        PopupManager.I.ClosePopup();
    }
    addSelf2StateMap(): void {
        console.log("注册状态成功，name: ", this.stateName);
        StateMachine.AddState(this.stateName, this.node.getComponent(ChooseEndlessModeState) as ChooseEndlessModeState)
    }


}
