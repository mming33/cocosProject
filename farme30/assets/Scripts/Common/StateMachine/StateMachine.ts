import { IState } from "./IState";

export class StateMachine {
    private stateMap: Map<string, IState> = new Map<string, IState>();
    private nowState!: IState;

    /** 初始化状态机 设置启动状态
     * @param name 启动状态名
     * @param arg 参数
     */
    Init(name: string, arg?: any): void {
        let state = this.stateMap.get(name);
        if (state) {
            state.Start(arg);
            this.nowState = state;
        } else {
            console.error("开启状态 ", name, " 失败");
        }
    }

    /**添加状态到状态机中 */
    AddState(stateName: string, state: IState): void {
        this.stateMap.set(stateName, state);
    }
    /**从状态机中移除状态 */
    RemoveState(stateName: string): void {
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
    ChangeState(from: string, to: string, arg1?: any, arg2?: any): boolean {
        let formState = this.stateMap.get(from);
        let toState = this.stateMap.get(to);
        if (formState && toState) {
            if (toState.canFromStateName.indexOf(from) != -1 && formState.canToStateName.indexOf(to) != -1) {
                formState.End(arg1);
                this.nowState = toState;
                toState.Start(arg2);
                console.warn("切换状态成功:", from, "-->", to);
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
    /**从当前状态强制转到某个状态
     * @param to 
     * @param arg1 
     * @param arg2 
     */
    ToState(to: string, arg1?: any, arg2?: any): boolean {
        let formState = this.nowState;
        let toState = this.stateMap.get(to);
        if (formState && toState) {
            formState.End(arg1);
            this.nowState = toState;
            toState.Start(arg2);
            console.log("切换状态成功");
            return true;
        } else {
            console.error("切换状态失败:", formState.stateName, "-->", to);
            return false;
        }
    }

}