import { _decorator, Component, Node } from 'cc';
import { MyComponent } from '../../Common/Game/MyComponent';
import { IState } from '../../Common/StateMachine/IState';
import { StateMachine } from '../../Common/StateMachine/StateMachine';
import { StateType } from '../../Common/StateMachine/StateType';
const { ccclass, property } = _decorator;

@ccclass('GamingState')
export class GamingState extends MyComponent implements IState {
    stateName: string = StateType.GamingState;
    canFromStateName: string[] = [StateType.StartGameState];
    canToStateName: string[] = [StateType.DeathState, StateType.GamingStopState, StateType.GameOverState];
   
    onLoad() {
        this.addSelf2StateMap();
    }

    Start(arg?: any): void {

    }
    End(arg?: any): void {
        
    }
    addSelf2StateMap(): void {
        console.log("注册状态成功，name: ", this.stateName);
        StateMachine.AddState(this.stateName, this.node.getComponent(GamingState) as GamingState)
    }

}
