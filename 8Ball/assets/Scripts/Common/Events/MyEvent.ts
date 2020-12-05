import { _decorator, Node, EventHandler, Event } from 'cc';
const { ccclass, property } = _decorator;

/**事件机制 注册 -> 派发 -> 注册时回调执行 */
@ccclass('MyEvent')
export class MyEvent {

    /**根据名称派发事件 */
    static event(node: Node, type: string, arg0?: any, arg1?: any, arg2?: any, arg3?: any, arg4?: any) {
        node.emit(type, arg0, arg1, arg2, arg3, arg4);
    }
    /**根据名称注册事件 */
    static on(node: Node, type: string, callback: Function, target?: Object, useCapture?: any) {
        node.on(type, callback, target, useCapture);
    }
    /**根据名称注册单次事件，相应过一次后销毁该事件 */
    static once(node: Node, type: string, callback: Function, target?: Object, useCapture?: any) {
        node.once(type, callback, target, useCapture);
    }
    /**删除之前与同类型，回调，目标或 useCapture 注册的回调。 */
    static off(node: Node, type: string, callback: Function, target?: Object, useCapture?: any) {
        node.off(type, callback, target, useCapture);
    }
    /** 移除目标上的所有注册事件。(目标类型的即type值相同的所有事件类型)*/
    static offAll(node: Node, type: string | Object,) {
        node.targetOff(type);
    }
}
