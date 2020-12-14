
/**
 * CopyRight:
 * 全局数据类
 */

export default class GlobalGameData {

    public static audioEngineOn: boolean = true;                         //声音开关;
    public static userId: number = -1;                                   //用户ID；
    public static socketStatus: boolean = false;                         //服务器链接情况;
    public static shareUrl: string = '';                                 //分享链接;
    public static roomId: number = 0;                                     //房间id;



    //执行Promise的队列动作;
    public static runPromiseArray(parray: any) {
        let p = Promise.resolve();
        for (let promise of parray) {
            p = p.then(promise).catch(() => {
                return p;
            });
        }
    }

    //设置名字长度；
    public static subNickName(nameStr: string) {
        if (nameStr.length > 8) {
            nameStr = nameStr.substring(0, 8) + '...';
        }
        return nameStr;
    }


}