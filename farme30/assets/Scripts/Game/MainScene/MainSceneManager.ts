import { _decorator, Component, Node, director } from 'cc';
import { MyComponent } from '../../Common/Game/MyComponent';
import { PopupManager } from '../../Common/Popup/PopupManager';
import { SMManger, SMName } from '../../Common/StateMachine/SMManger';
import { StateMachine } from '../../Common/StateMachine/StateMachine';
import { StateType } from '../../Common/StateMachine/StateType';
const { ccclass, property } = _decorator;

@ccclass('MainSceneManager')
export class MainSceneManager extends MyComponent {
    Init() {
        SMManger.GetStateMachine(SMName.GameStateMachine).ChangeState(StateType.LoadState, StateType.MainSceneStartState);
        // PopupManager.ShowPopup("TipPopup", {
        //     TipString: 'tip tip tip tip tip',
        //     YesBtnString: 'ok',
        //     NoBtnString: 'no',
        //     YesBtn: () => {
        //         console.log('yesbutton');
        //      },
        //     NoBtn: () => {
        //         console.log('nobutton');
        //      },
        // })
    }
}
