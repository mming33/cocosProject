export interface IState {

    /**状态名 */
    stateName: string;
    /**可以转到的状态名 */
    canToStateName: string[];
    /**可以被转到的状态名 */
    canFromStateName: string[];
    /**状态开始 */
    Start(arg?: any): void;
    /**状态结束 */
    End(arg?: any): void;
    /**将自己的实例添加到StateMap中 */
    addSelf2StateMap(): void;
}
