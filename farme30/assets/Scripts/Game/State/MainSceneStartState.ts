// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Node } from 'cc';
import { GameController } from '../../Common/Game/GameController';
import { MyComponent } from '../../Common/Game/MyComponent';
import { IState } from '../../Common/StateMachine/IState';
import { StateMachine } from '../../Common/StateMachine/StateMachine';
import { StateType } from '../../Common/StateMachine/StateType';
const { ccclass, property } = _decorator;

@ccclass('MainSceneStartState')
export class MainSceneStartState extends MyComponent implements IState {
    stateName: string = StateType.MainSceneStartState;
    canFromStateName: string[] = [StateType.LoadState, StateType.ChooseLevelState, StateType.ChooseEndlessModeState, StateType.ShopPopupState, StateType.GameSettlementState];
    canToStateName: string[] = [StateType.ChooseLevelState, StateType.ChooseEndlessModeState, StateType.ShopPopupState];
    onLoad() {
        this.addSelf2StateMap();
    }
    Start(arg?: any): void {
        console.log("回到Home场景");
    }
    End(arg?: any): void {
    }
    addSelf2StateMap(): void {
        console.log("注册状态成功，name: ", this.stateName);
        StateMachine.AddState(this.stateName, this.node.getComponent(MainSceneStartState) as MainSceneStartState);
    }

}
