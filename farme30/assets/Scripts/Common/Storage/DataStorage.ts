import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('DataStorage')
export class DataStorage {


    static SaveStr(key: string, value: string): string {
        localStorage.setItem(key, value);
        return value;
    }
    static GetStr(key: string): string | null {
        return localStorage.getItem(key);
    }

    static SaveJson(key: string, value: any): any {
        let data = JSON.stringify(value);
        localStorage.setItem(key, data);
        return data;
    }

    static GetJson(key: string): any {
        let value = localStorage.getItem(key);
        if (value) {
            let data = JSON.parse(value);
            return data;
        } else {
            console.error("找不到", key, "对应的数据");
            return null;
        }
    }

    static SaveArr<T>(key: string, value: Array<T>): Array<T> {
        let data = { arrdata: value };
        let str = JSON.stringify(data);
        localStorage.setItem(key, str);
        return value;
    }

    static GetArr<T>(key: string): Array<T> | null {
        let value = localStorage.getItem(key);
        if (value) {
            let data = JSON.parse(value);
            let arr = data.arrdata;
            return arr;
        } else {
            console.error("找不到", key, "对应的数据");
            return null;
        }
    }

}



// let data = { name: "hhh", id: 12341, isboy: true }
// console.log(data);
// let a = JSON.stringify(data)
// console.log(a);
// let b = JSON.parse(a);
// console.log(b);