import { _decorator, Component, Node } from 'cc';
import { MyComponent } from '../../Common/Game/MyComponent';
import { IState } from '../../Common/StateMachine/IState';
import { SMName } from '../../Common/StateMachine/SMManger';
import { StateMachine } from '../../Common/StateMachine/StateMachine';
import { StateType } from '../../Common/StateMachine/StateType';
const { ccclass, property } = _decorator;

@ccclass('GameOverState')
export class GameOverState implements IState {
    stateMachineName: string = SMName.GameStateMachine;
    stateName: string = StateType.GameOverState;
    canFromStateName: string[] = [StateType.GamingState, StateType.DeathState, StateType.GamingStopState];
    canToStateName: string[] = [StateType.GameSettlementState];

    Start(arg?: any): void {
    }
    End(arg?: any): void {
    }

}
