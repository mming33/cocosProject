// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Node } from 'cc';
import { MyComponent } from '../../Common/Game/MyComponent';
import { PopupManager } from '../../Common/Popup/PopupManager';
import { IState } from '../../Common/StateMachine/IState';
import { SMName } from '../../Common/StateMachine/SMManger';
import { StateMachine } from '../../Common/StateMachine/StateMachine';
import { StateType } from '../../Common/StateMachine/StateType';
import { StartGameState } from './StartGameState';

const { ccclass, property } = _decorator;


@ccclass('ChooseEndlessModeState')
export class ChooseEndlessModeState implements IState {
    stateMachineName: string = SMName.GameStateMachine;
    stateName: string = StateType.ChooseEndlessModeState;
    canFromStateName: string[] = [StateType.MainSceneStartState];
    canToStateName: string[] = [StateType.MainSceneStartState, StateType.StartGameState];


    Start(arg?: any): void {
        PopupManager.ShowPopup("EndlessModePopup");
    }
    End(arg?: any): void {
        PopupManager.ClosePopup();
    }


}

