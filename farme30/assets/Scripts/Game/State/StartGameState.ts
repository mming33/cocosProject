import { _decorator, Component, Node } from 'cc';
import { GameController } from '../../Common/Game/GameController';
import { MyComponent } from '../../Common/Game/MyComponent';
import { LoadState } from '../../Common/Load/LoadState';
import { IState } from '../../Common/StateMachine/IState';
import { StateMachine } from '../../Common/StateMachine/StateMachine';
import { StateType } from '../../Common/StateMachine/StateType';
const { ccclass, property } = _decorator;
@ccclass('StartGameState')
export class StartGameState extends MyComponent implements IState {
    stateName: string = StateType.StartGameState;
    canToStateName: string[] = [];
    canFromStateName: string[] = [StateType.GameSceneStartState];
    onLoad() {
        this.addSelf2StateMap();
    }
    Start(arg?: any): void {
        console.log(this.stateName, "Start");
        this.scheduleOnce(() => { GameController.isGameStop = false; }, 3);
    }
    End(arg?: any): void {
        console.log(this.stateName, "End");
    }
    addSelf2StateMap(): void {
        console.log("注册状态成功，name: ", this.stateName);
        StateMachine.AddState(this.stateName, this.node.getComponent(StartGameState) as StartGameState)
    }

}