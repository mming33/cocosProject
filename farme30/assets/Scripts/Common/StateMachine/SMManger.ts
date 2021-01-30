
import { _decorator, Component, Node } from 'cc';
import { IState } from './IState';
import { StateMachine } from './StateMachine';
import { StateType } from './StateType';

export class SMName {
    public static readonly GameStateMachine = "GameStateMachine";
}

const { ccclass, property } = _decorator;

@ccclass('SMManger')
export class SMManger {
    private static smMap: Map<string, StateMachine> = new Map<string, StateMachine>();
    /**创建状态机 */
    static CreateStateMachine(name: string): void {
        let sm = this.smMap.get(name);
        if (sm) {
            console.error("要添加的StateMachine: " + name + "已存在");
        } else {
            let value = new StateMachine();
            value.AddState
            this.smMap.set(name, value);
        }
    }

    /**获取状态机 $$若获取不到，会自动创建一个同名状态机，并返回一个错误警告$$*/
    static GetStateMachine(name: string): StateMachine {
        let sm = this.smMap.get(name);
        if (sm) {
            return sm;
        } else {
            console.error("获取的StateMachine: " + name + "不存在");
            let value = new StateMachine();
            this.smMap.set(name, value);
            sm = value
            return sm;
        }
    }

    /**向状态机中添加状态 */
    static AddStateToStateMachine(state: IState): void {
        this.GetStateMachine(state.stateMachineName).AddState(state.stateName, state);
    }

    /**删除状态机中的状态 */
    static RemoveStateToStateMachine(stateName: string, state: IState, stateMachineName: string): void {
        this.GetStateMachine(stateMachineName).RemoveState(stateName);
    }
}
