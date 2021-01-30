import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MyMath')
export class MyMath {
    static Merge(left: any[], right: any[]): any[] {
        var result = [];
        while (left.length > 0 && right.length > 0) {
            if (left[0] < right[0]) {
                /*shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。*/
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }
        return result.concat(left).concat(right);
    }
    static MergeSort(items: any[]): any[] {
        if (items.length == 1) {
            return items;
        }
        let middle = Math.floor(items.length / 2);
        let left = items.slice(0, middle);
        let right = items.slice(middle);
        return this.Merge(this.MergeSort(left), this.MergeSort(right));
    }
}
