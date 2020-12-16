
import { _decorator, Component, Node } from 'cc';
import { IState } from './IState';
const { ccclass, property } = _decorator;

@ccclass('StateMachineController')
export class StateMachineController {
    //游戏流程管理器
    StartGame() {

    }
    /**关卡开始 */
    CheckpointStart() {

    }
    /**状态机初始化 */
    StateMachineInit() {

    }
    /**状态机轮训 */
    StateMachineUpdata() {

    }
}


export class StateMachine {
    private static stateMap: Map<string, IState> = new Map<string, IState>();
    private static nowState: IState;

    /** 初始化状态机 设置启动状态
     * @param name 启动状态名
     * @param arg 参数
     */
    static Init(name: string, arg?: any) {
        this.OpenState(name, arg);
    }

    static AddState(stateName: string, state: IState): void {
        this.stateMap.set(stateName, state);
    }
    static RemoveState(stateName: string): void {
        if (this.stateMap.delete(stateName)) {
            console.log("状态", stateName, "移除成功");
        } else {
            console.warn("状态", stateName, "移除失败");
        }
    }
    /** 切换状态
     * @param from 从那个状态
     * @param to 切换到那个状态
     * @param arg1 from参数
     * @param arg2 to参数
     */
    static ChangeState(from: string, to: string, arg1?: any, arg2?: any): boolean {
        let formState = this.stateMap.get(from);
        let toState = this.stateMap.get(to);
        if (formState && toState) {
            if (toState.canFromStateName.indexOf(from) != -1 && formState.canToStateName.indexOf(to) != -1) {
                formState.End(arg1);
                toState.Start(arg2);
                this.nowState = toState;
                console.log("切换状态成功");
                return true;
            } else {
                console.error("切换状态失败:", from, "-->", to);
                return false;
            }

        } else {
            console.error("切换状态失败:", from, "-->", to);
            return false;
        }
    }

    /**从当前状态转到某个状态
     * @param to 
     * @param arg1 
     * @param arg2 
     */
    static ToState(to: string, arg1?: any, arg2?: any) {
        let formState = this.nowState;
        let toState = this.stateMap.get(to);
        if (formState && toState) {
            if (toState.canFromStateName.indexOf(this.nowState.stateName) != -1 && formState.canToStateName.indexOf(to) != -1) {
                formState.End(arg1);
                toState.Start(arg2);
                this.nowState = toState;
                console.log("切换状态成功");
                return true;
            } else {
                console.error("切换状态失败:", this.nowState.stateName, "-->", to);
                return false;
            }

        } else {
            console.error("切换状态失败:", this.nowState.stateName, "-->", to);
            return false;
        }
    }

    /**获取当前状态 */
    static GetNowState(): IState {
        return this.nowState;
    }

    /**开启状态
     * @param name 
     * @param arg 
     */
    static OpenState(name: string, arg?: any): IState | null {
        let state = this.stateMap.get(name);
        if (state) {
            state.Start(arg);
            this.nowState = state;
            return state;
        } else {
            console.error("开启状态 ", name, " 失败");
            return null;
        }
    }
    /**关闭当前状态 */
    static CloseState(arg?: any): void {
        let state = this.nowState;
        if (state) {
            state.End(arg);
        } else {
            console.error("开启状态 ", name, " 失败");
        }
    }
}
