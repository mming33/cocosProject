
import { _decorator, Component, Node } from 'cc';
import { MyComponent } from '../../Common/Game/MyComponent';
import { LoadState } from '../../Common/Load/LoadState';
import { IState } from '../../Common/StateMachine/IState';
import { StateMachine } from '../../Common/StateMachine/StateMachine';
const { ccclass, property } = _decorator;

@ccclass('StartGameState')
export class StartGameState extends MyComponent implements IState {
    stateName: string = "StartGameState";
    canToStateName: string[] = ["Test1State"];
    canFromStateName: string[] = ["LoadState"];
    onLoad() {
        this.addSelf2StateMap();
    }
    Start(arg?: any): void {
        console.log(this.stateName, "Start");
    }
    End(arg?: any): void {
        console.log(this.stateName, "End");
    }
    addSelf2StateMap(): void {
        console.log("注册状态成功，name: ", this.stateName);
        StateMachine.AddState(this.stateName, this.node.getComponent(StartGameState) as StartGameState)
    }

}
