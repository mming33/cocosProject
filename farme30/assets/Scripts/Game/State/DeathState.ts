import { _decorator, Component, Node } from 'cc';
import { MyComponent } from '../../Common/Game/MyComponent';
import { IState } from '../../Common/StateMachine/IState';
import { SMName } from '../../Common/StateMachine/SMManger';
import { StateMachine } from '../../Common/StateMachine/StateMachine';
import { StateType } from '../../Common/StateMachine/StateType';
const { ccclass, property } = _decorator;

@ccclass('DeathState')
export class DeathState implements IState {
    stateMachineName: string = SMName.GameStateMachine;
    stateName: string = StateType.DeathState;
    canFromStateName: string[] = [StateType.GamingState];
    canToStateName: string[] = [StateType.GameOverState, StateType.GamingState];


    Start(arg?: any): void {
    }
    End(arg?: any): void {
    }

}
