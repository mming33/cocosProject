import { _decorator, Component, Node } from 'cc';
import { MyComponent } from '../../Common/Game/MyComponent';
import { IState } from '../../Common/StateMachine/IState';
import { SMName } from '../../Common/StateMachine/SMManger';
import { StateMachine } from '../../Common/StateMachine/StateMachine';
import { StateType } from '../../Common/StateMachine/StateType';
const { ccclass, property } = _decorator;

@ccclass('GameSettlementState')
export class GameSettlementState implements IState {
    stateMachineName: string = SMName.GameStateMachine;
    stateName: string = StateType.GameSettlementState;
    canFromStateName: string[] = [StateType.GameOverState];
    canToStateName: string[] = [StateType.MainSceneStartState, StateType.StartGameState];


    Start(arg?: any): void {
    }
    End(arg?: any): void {
    }

}
