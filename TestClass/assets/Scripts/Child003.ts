import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Child003')
export class Child003 {
    testName = 'Child003Name'
    Func1() {
        console.error('Child003=======', this.testName);
    }
}
