import { _decorator, Component, Node } from 'cc';
import { MyComponent } from '../../Common/Game/MyComponent';
import { PopupManager } from '../../Common/Popup/PopupManager';
import { IState } from '../../Common/StateMachine/IState';
import { SMName } from '../../Common/StateMachine/SMManger';
import { StateMachine } from '../../Common/StateMachine/StateMachine';
import { StateType } from '../../Common/StateMachine/StateType';
const { ccclass, property } = _decorator;

@ccclass('ShopPopupState')
export class ShopPopupState  implements IState {
    stateMachineName: string = SMName.GameStateMachine;
    stateName: string = StateType.ShopPopupState;
    canFromStateName: string[] = [StateType.MainSceneStartState];
    canToStateName: string[] = [StateType.MainSceneStartState];
 

    Start(arg?: any): void {
        PopupManager.ShowPopup("ShopPopup");
    }
    
    End(arg?: any): void {
    }

}
