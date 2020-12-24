import { _decorator, Component, Node } from 'cc';
import { GameController } from '../../Common/Game/GameController';
import { MyComponent } from '../../Common/Game/MyComponent';
import { LoadState } from '../../Common/Load/LoadState';
import { IState } from '../../Common/StateMachine/IState';
import { StateMachine } from '../../Common/StateMachine/StateMachine';
import { StateType } from '../../Common/StateMachine/StateType';
import { FloorManager } from '../Game/Door/FloorMananger';
const { ccclass, property } = _decorator;
@ccclass('StartGameState')
export class StartGameState extends MyComponent implements IState {
    stateName: string = StateType.StartGameState;
    canFromStateName: string[] = [StateType.ChooseLevelState, StateType.ChooseEndlessModeState];
    canToStateName: string[] = [StateType.GamingState];

    gameType: string = "level";
    gameSceneData: any;
    onLoad() {
        this.addSelf2StateMap();
    }
    Start(arg?: any): void {
        console.log(this.stateName, "Start");
        console.log(arg);
        this.gameType = arg.type
        let self = this;
        if (this.gameType == "level") {
            console.log("arg.data", arg.data);
            this.schedule(function e() {
                if (FloorManager.I) {
                    FloorManager.I.type = self.gameType;
                    FloorManager.I.CreateFloorForJson(arg.data);
                    self.unschedule(e);
                }
            }, 0.1)
        } else {
            this.schedule(function e() {
                if (FloorManager.I) {
                    FloorManager.I.type = self.gameType;
                    for (let i = 0; i < 25; i++) {
                        FloorManager.I.CreateFloorForRandom();
                    }
                    self.unschedule(e);
                }
            }, 0.1)

        }
        this.scheduleOnce(() => {
            GameController.isGameStop = false;
            StateMachine.ChangeState(StateType.StartGameState, StateType.GamingState);
            FloorManager.I.startMove();
        }, 3);
    }
    End(arg?: any): void {
        console.log(this.stateName, "End");
    }
    addSelf2StateMap(): void {
        console.log("注册状态成功，name: ", this.stateName);
        StateMachine.AddState(this.stateName, this.node.getComponent(StartGameState) as StartGameState)
    }

}