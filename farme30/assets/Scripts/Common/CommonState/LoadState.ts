import { _decorator, Component, Node, loader, director, computeRatioByType, find, Label, UITransformComponent, game, resources, JsonAsset, instantiate } from 'cc';
import { IState } from '../StateMachine/IState';
import { SMManger, SMName } from '../StateMachine/SMManger';
import { StateType } from '../StateMachine/StateType';
const { ccclass, property } = _decorator;
@ccclass('LoadState')
export class LoadState implements IState {

    stateName: string = StateType.LoadState;
    stateMachineName: string = SMName.GameStateMachine;
    canToStateName: string[] = [StateType.MainSceneStartState];
    canFromStateName: string[] = [];
    Start(arg?: any): void {

    }
    End(arg?: any): void {

    }
    addSelf2StateMap(instance: IState): void {
    }

}
