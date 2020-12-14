import { _decorator, ImageAsset, SpriteFrame } from 'cc';
import { DataStorage } from '../Storage/DataStorage';
import MKMessageManager from '../Utils/MKMessageManager';
import MKResourcesManager from '../Utils/MKResourcesManager';
import NDB from '../Utils/NDBTS';
const { ccclass, property } = _decorator;

@ccclass('GetServerData')
export class GetServerData {
    static UserId = -1;
    static UserName = "userName";
    static UserAvatar = "";
    static UserHeadImage: SpriteFrame | null = null;
    static UserMoney: number = 0;

    static OtherId = -1;
    static OtherName = "player2";
    static OtherAvatar = "";
    static OtherHeadImage: SpriteFrame | null = null;


    private static ASSETS = 'v1/ball8/mine/diamond/';                            //获取资产（金币、钻石、游戏币）；
    private static JOIN = 'v1/ball8/join/';                                      //加入游戏；
    public static LEAVE = 'v1/ball8/leave/';                                     //离开游戏；
    /** 获取用户个人信息
     * @param success 获取成功
     * @param err 获取失败
     */
    public static getUserinfo(success?: Function, err?: Function): void {
        let data = DataStorage.GetJson("userInfo");
        if (data && data.userId) {
            GetServerData.UserId = data.userId;
            GetServerData.UserName = data.userName;
            GetServerData.UserAvatar = data.avatar;
            MKResourcesManager.loadHeadImag(data.avatar, data.userId, 3, (res: ImageAsset) => {
                let HeadImage = new SpriteFrame();
                HeadImage = SpriteFrame.createWithImage(res);
                GetServerData.UserHeadImage = HeadImage;
            });
        }
        MKMessageManager.getUserInfo((userInfo: any) => {
            if (userInfo && userInfo.userId) {
                let userId = userInfo.userId;
                let userName = this.subNickName(userInfo.userName);
                let avatar = userInfo.avatar;
                //判断本地存储值与服务器端获取的数据是否相同，若不同则更新数据
                if (GetServerData.UserId != userId) {
                    GetServerData.UserId = userId;
                }
                if (GetServerData.UserName != userName) {
                    GetServerData.UserName = userName;
                }
                if (GetServerData.UserAvatar != avatar) {
                    GetServerData.UserAvatar = avatar;
                    MKResourcesManager.loadHeadImag(avatar, userId, 3, (res: ImageAsset) => {
                        let HeadImage = new SpriteFrame();
                        HeadImage = SpriteFrame.createWithImage(res);
                        GetServerData.UserHeadImage = HeadImage;
                        if (success) {
                            success();
                        }
                    });
                } else {
                    if (success) {
                        success();
                    }
                }
                let otherData = { userId: userId, userName: userName, avatar: avatar };
                DataStorage.SaveJson("userInfo", otherData);
            } else {
                console.error("错误，更新信息失败，当前展示数据为上次获取成功时的数据");
                if (err) {
                    err();
                }
            }
        })
    }
    /** 获取玩家金币
     * @param success 获取成功
     * @param err 获取失败
     */
    public static GetCoin(success?: Function, err?: Function): void {
        MKMessageManager.httpResult('get', GetServerData.ASSETS, {}, (data: any) => {
            if (data && data.diamond != null) {
                GetServerData.UserMoney = data.diamond;
                if (success) {
                    success();
                }
            } else {
                console.error("错误，更新信息失败");
                if (err) {
                    err();
                }
            }
        })
    }
    /** 加入游戏 获取对方玩家数据
     * @param success 获取成功
     * @param err 获取失败
     */
    public static join(success?: Function, err?: Function): void {
        MKMessageManager.httpResult('post', GetServerData.JOIN, {}, (data: any) => {
            if (data && data.id) {
                GetServerData.OtherId = data.id;
                GetServerData.OtherName = data.name;
                GetServerData.OtherAvatar = data.avatar;
                MKResourcesManager.loadHeadImag(GetServerData.OtherAvatar, GetServerData.OtherId, 3, (res: ImageAsset) => {
                    let spriteFrame = new SpriteFrame();
                    spriteFrame = SpriteFrame.createWithImage(res);
                    GetServerData.OtherHeadImage = spriteFrame;
                    if (success) {
                        success();
                    }
                });
            } else {
                console.error("错误，更新信息失败");
                if (err) {
                    err();
                }
            }
        });

    }
    /**离开游戏；*/
    public static LeaveGame(): void {
        MKMessageManager.httpResult('post', GetServerData.LEAVE, {}, (data: any) => {
            console.log(data);
            MKMessageManager.exitGame();
        });
    }
    /**游戏加载完成断点
     * @param gameName 游戏名称
     */
    public static GameLoadComplete(gameName: string): void {
        let obj = {
            eventName: "game_load_complete",
            name: gameName,
        }
        NDB.sendAutoJoinEvent(obj);
    }
    /**游戏开始断点
     * @param gameName 游戏名称
     */
    public static GameStartComplete(gameName: string): void {
        let obj = {
            eventName: "game_start",
            name: gameName,
        }
        NDB.sendAutoJoinEvent(obj);
    }
    /** 游戏结束断点
     * @param gameName 游戏名称
     * @param gameResult 设置返回结果 win(胜利)/lose(失败)/draw(平局)
     */
    public static GameEndComplete(gameName: string, gameResult: string): void {
        let obj = {
            eventName: "game_end",
            name: gameName,
            result: gameResult
        }
        NDB.sendAutoJoinEvent(obj);
    }



    private static subNickName(nameStr: string): string {
        if (nameStr.length > 8) {
            nameStr = nameStr.substring(0, 8) + '...';
        }
        return nameStr;
    }
}
