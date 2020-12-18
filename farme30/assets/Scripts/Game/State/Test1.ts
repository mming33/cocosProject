// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Node } from 'cc';
import { MyComponent } from '../../Common/Game/MyComponent';
import { LoadState } from '../../Common/Load/LoadState';
import { IState } from '../../Common/StateMachine/IState';
import { StateMachine } from '../../Common/StateMachine/StateMachine';
const { ccclass, property } = _decorator;

@ccclass('Test1')
export class Test1 extends MyComponent  implements IState {
    stateName: string = "Test1State";
    canToStateName: string[]= ["Test2State"];
    canFromStateName: string[]=["Test2State","StartGameState"];
    onLoad() {
        this.addSelf2StateMap();
    }
    Start(arg?: any): void {
       console.log(this.stateName,"Start");
    }
    End(arg?: any): void {
       console.log(this.stateName,"End");
    }
    addSelf2StateMap(): void {
       console.log("注册状态成功，name: ", this.stateName);
       StateMachine.AddState(this.stateName, this.node.getComponent(Test1) as Test1)
    }
}
