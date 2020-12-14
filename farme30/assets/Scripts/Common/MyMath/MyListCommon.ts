import { _decorator, Component, Node, Vec3, IVec3Like } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MyListCommon')
export class MyListCommon {

    static Clone<T>(newArr: Array<T>, oldArr: Array<T>,): Array<T> {
        newArr = new Array<T>();
        for (let i = 0; i < oldArr.length; i++) {
            const element = oldArr[i];
            newArr.push(element);
        }
        return newArr;
    }
}
