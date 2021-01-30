import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('Child002')
export class Child002 {
    testName = 'Child002Name'
    Func1() {
        console.error('Child002=======', this.testName);
    }
}