
/*
    * 资源加载管理
*/

import { instantiate, loader, Prefab, _decorator, } from 'cc';

export default class MKResourcesManager {

    public static userHeadMap = new Map();                  //将用户头像做一个缓存;

    //加载预制体;
    public static loadPrefab(url: any, callBack: any) {
        loader.loadRes(url, Prefab, (err, preb) => {
            if (err) {
                return;
            }
            let prebNode = instantiate(preb);
            callBack && callBack(prebNode);
        });
    }

    //加载网络图片 头像等;
    public static loadHeadImag(netUrl: any, userId: any, number: any, callback: any) {

        loader.load({ url: netUrl, type: 'png' }, (err: any, res: any) => {
            if (err) {
                if (number > 0) {
                    this.loadHeadImag(netUrl, userId, --number, callback);
                    console.error("loadHeadImageErr", number,err);

                }
                return;
            }
            this.userHeadMap[userId] = res;
            console.warn("loadHeadImageSuccerss", res);
            callback && callback(res);

        });
    }

}