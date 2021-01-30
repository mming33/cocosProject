import { _decorator, Component, Node } from 'cc';
import { MyComponent } from '../../Common/Game/MyComponent';
import { IState } from '../../Common/StateMachine/IState';
import { SMName } from '../../Common/StateMachine/SMManger';
import { StateMachine } from '../../Common/StateMachine/StateMachine';
import { StateType } from '../../Common/StateMachine/StateType';
const { ccclass, property } = _decorator;

@ccclass('GamingState')
export class GamingState implements IState {
    stateMachineName: string = SMName.GameStateMachine;
    stateName: string = StateType.GamingState;
    canFromStateName: string[] = [StateType.StartGameState];
    canToStateName: string[] = [StateType.DeathState, StateType.GamingStopState, StateType.GameOverState];
   

    Start(arg?: any): void {

    }
    End(arg?: any): void {
        
    }

}
