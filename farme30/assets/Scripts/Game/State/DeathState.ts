import { _decorator, Component, Node } from 'cc';
import { MyComponent } from '../../Common/Game/MyComponent';
import { IState } from '../../Common/StateMachine/IState';
import { StateMachine } from '../../Common/StateMachine/StateMachine';
import { StateType } from '../../Common/StateMachine/StateType';
const { ccclass, property } = _decorator;

@ccclass('DeathState')
export class DeathState extends MyComponent implements IState {
    stateName: string = StateType.DeathState;
    canFromStateName: string[] = [StateType.GamingState];
    canToStateName: string[] = [StateType.GameOverState, StateType.GamingState];
    
    onLoad() {
        this.addSelf2StateMap();
    }

   Start(arg?: any): void {
        throw new Error('Method not implemented.');
    }
    End(arg?: any): void {
        throw new Error('Method not implemented.');
    }
    addSelf2StateMap(): void {
        console.log("注册状态成功，name: ", this.stateName);
        StateMachine.AddState(this.stateName, this.node.getComponent(DeathState) as DeathState)
    }

}
