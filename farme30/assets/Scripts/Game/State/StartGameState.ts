import { _decorator, Component, Node } from 'cc';
import { GameController } from '../../Common/Game/GameController';
import { MyComponent } from '../../Common/Game/MyComponent';
import { IState } from '../../Common/StateMachine/IState';
import { SMName } from '../../Common/StateMachine/SMManger';
import { StateMachine } from '../../Common/StateMachine/StateMachine';
import { StateType } from '../../Common/StateMachine/StateType';
import { FloorManager } from '../Game/Door/FloorMananger';
const { ccclass, property } = _decorator;
@ccclass('StartGameState')
export class StartGameState implements IState {
    stateMachineName: string = SMName.GameStateMachine;
    stateName: string = StateType.StartGameState;
    canFromStateName: string[] = [StateType.ChooseLevelState, StateType.ChooseEndlessModeState];
    canToStateName: string[] = [StateType.GamingState];
    gameType: string = "level";
    gameSceneData: any;

    Start(arg?: any): void {
        console.log(this.stateName, "Start");
        console.log(arg);
        this.gameType = arg.type
        let self = this;
        if (this.gameType == "level") {
            console.log("arg.data", arg.data);
            if (FloorManager.I) {
                FloorManager.I.type = self.gameType;
                FloorManager.I.CreateFloorForJson(arg.data);
                clearTimeout();
            }
        } else {
            if (FloorManager.I) {
                FloorManager.I.type = self.gameType;
                for (let i = 0; i < 25; i++) {
                    FloorManager.I.CreateFloorForRandom();
                }
            }

        }
        GameController.isGameStop = false;
        //StateMachine.ChangeState(StateType.StartGameState, StateType.GamingState);
        FloorManager.I.startMove();
    }
    End(arg?: any): void {
        console.log(this.stateName, "End");
    }

}