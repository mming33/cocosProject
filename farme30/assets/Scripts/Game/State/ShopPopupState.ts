import { _decorator, Component, Node } from 'cc';
import { MyComponent } from '../../Common/Game/MyComponent';
import { PopupManager } from '../../Common/Popup/PopupManager';
import { IState } from '../../Common/StateMachine/IState';
import { StateMachine } from '../../Common/StateMachine/StateMachine';
import { StateType } from '../../Common/StateMachine/StateType';
const { ccclass, property } = _decorator;

@ccclass('ShopPopupState')
export class ShopPopupState extends MyComponent implements IState {
    stateName: string = StateType.ShopPopupState;
    canFromStateName: string[] = [StateType.MainSceneStartState];
    canToStateName: string[] = [StateType.MainSceneStartState];
 
    onLoad() {
        this.addSelf2StateMap();
    }

    Start(arg?: any): void {
        PopupManager.I.ShowPopup("ShopPopup");
    }
    
    End(arg?: any): void {
        throw new Error('Method not implemented.');
    }
    addSelf2StateMap(): void {
        console.log("注册状态成功，name: ", this.stateName);
        StateMachine.AddState(this.stateName, this.node.getComponent(ShopPopupState) as ShopPopupState)
    }

}
