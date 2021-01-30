import { _decorator, Component, Script, TypeScript } from 'cc';
import { Child003 } from './Child003';
const { ccclass } = _decorator;

@ccclass('Test')
export class Test  {
    Button1() {
        // console.log((<any>test));

        // let father = new test.Father();
        // father.Func1();
        // let father2 = new (<any>test)['Child002']();
        // father2.Func1();
        console.log(Child003);
        console.log(typeof (Child003));
        importScripts('./Child003', './Child002');
        TypeScript.
    }
}
