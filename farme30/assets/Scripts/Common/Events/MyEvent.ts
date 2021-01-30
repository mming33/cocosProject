export class EventType {
    public static readonly TestEvent: string = "TestEvent";
    /**加载资源结束 */
    public static readonly LoadResOver: string = "LoadResOver";
    /**加载状态 */
    public static readonly LoadStates: string = "LoadStates";
}

import { _decorator, Node, EventHandler, Event, isValid, animation } from 'cc';
const { ccclass, property } = _decorator;


/**事件机制 注册 -> 派发 -> 注册时回调执行 */
@ccclass('MyEvent')
export class MyEvent {
    /**存储 */
    list: any = {};
    /**
     *  注册消息
     * @param key key
     * @param func 回调
     * @param type 区别其他key值相同的注册
     */
    on(key: string, func: Function, type: string) {
        if (this.list[key] == null) {
            this.list[key] = [];
        }
        let d: any = {};
        d.func = func;
        d.type = type;
        (this.list[key]).push(d);
    }
    /**
     * 移除一个消息
     */
    remove(key: string, type: string) {
        if (this.list[key]) {
            let data = this.list[key];
            for (let i = 0; i < data.length; i++) {
                if (data[i].type == type) {
                    data.splice(i, 1);
                    --i;
                }
            }
        }
    }
    /**
     * 移除type相同的所有消息
     */
    removeByNode(type: string) {
        for (let p in this.list) {
            let data = this.list[p];
            for (let i = 0; i < data.length; i++) {
                if (data[i].type == type) {
                    data.splice(i, 1);
                    --i;
                }
            }
        }
    }
    /**
    * 移除key注册的所有消息
    */
    removeByKey(key: string) {
        delete this.list[key];
    }
    /**
     * 派发消息
     */
    emit(key: string, arg?: any) {
        if (this.list[key]) {
            let funcs = this.list[key].concat();
            for (let i = 0; i < funcs.length; i++) {
                if (funcs[i].type && isValid(funcs[i].type)) {
                    funcs[i].func(arg, funcs[i].type);
                }
            }
        }
    }

    private static singleton: MyEvent;
    public static get I(): MyEvent {
        if (!this.singleton) {
            this.singleton = new MyEvent();
        }
        return this.singleton;
    }
}