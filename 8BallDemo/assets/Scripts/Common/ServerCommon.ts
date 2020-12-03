import { _decorator, Component, Node, Texture2D, SpriteFrame, ImageAsset, __private, loader, find, Label, Sprite, tween, Vec3 } from 'cc';
import { MainSceneUI } from '../Game/GameCommon/UI/MainSceneUI';
import { GameData } from '../Game/GameData';
import { PopupManager } from '../Game/Popup/PopupManager';
import MKMessageManager from '../Utils/MKMessageManager';
import MKMessageType from '../Utils/MKMessageType';
import MKResourcesManager from '../Utils/MKResourcesManager';
import { SourceManager } from './SourceManager';
const { ccclass, property } = _decorator;

@ccclass('ServerCommon')
export class ServerCommon {
    static userId: any;
    static robotId: any;


    public static startGame() {
        if (!ServerCommon.userId)
            this.getUserinfo(ServerCommon.GetCoin);
        else {
            console.log("+++++++++++", GameData.I.allMoney);
            if (GameData.I.allMoney >= 100) {
                ServerCommon.join();
            } else {
                ServerCommon.GetCoin();
            }
        }
    }
    public static JoinGame() {
        ServerCommon.GetCoin();
    }

    /**获取个人信息并且设置；
     * @param return data = {userId:0,userName:"",coin=0,HeadImage=null}
     */
    public static getUserinfo(func: Function = null): void {
        MKMessageManager.getUserInfo((userInfo) => {
            if (userInfo && userInfo.userId) {
                ServerCommon.userId = userInfo.userId;
                let userName = this.subNickName(userInfo.userName);
                GameData.I.thisPlayerName = userName;

                let avatar = userInfo.avatar;
                MKResourcesManager.loadHeadImag(avatar, ServerCommon.userId, 3, (res: ImageAsset) => {
                    let spriteFrame = new SpriteFrame();
                    spriteFrame = SpriteFrame.createWithImage(res);
                    GameData.I.thisplayerHeadImage = spriteFrame;
                    MainSceneUI.I.SetPlayersData();

                });
                if (func) {
                    func();
                }
            } else {
                PopupManager.I.ShowPopup(find("Canvas"), "ErrTipPopup", true);
                MainSceneUI.I.PlayBtn.active = true;
            }
        })
    }

    public static GetCoin() {
        console.log("=++++++++++游戏币============================");
        MKMessageManager.httpResult('get', MKMessageType.ASSETS, {}, (data) => {
            console.log("=====================游戏币============================");
            console.log(data);
            if (data && data.diamond != null) {
                GameData.I.allMoney = data.diamond;
                MainSceneUI.I.gloadNumber.string = data.diamond + "";
                if (data.diamond >= 100) {
                    this.join();
                } else {
                    PopupManager.I.ShowPopup(find("Canvas"), "AddCoinTipPopup", true);
                    MainSceneUI.I.PlayBtn.active = true;
                }
            } else {
                // MainSceneUI.I.gloadNumber.string = 0 + "";
                PopupManager.I.ShowPopup(find("Canvas"), "ErrTipPopup", true);
                MainSceneUI.I.PlayBtn.active = true;
            }
        })
    }
    public static UpdataCoin() {
        MKMessageManager.httpResult('get', MKMessageType.ASSETS, {}, (data) => {
            console.log("=====================游戏币============================");
            console.log(data);
            if (data && data.diamond != null) {
                GameData.I.allMoney = data.diamond;
                MainSceneUI.I.gloadNumber.string = data.diamond + "";
            }
        })
    }
    public static join() {
        MKMessageManager.httpResult('post', MKMessageType.JOIN, {}, (data) => {
            if (data && data.id) {
                ServerCommon.robotId = data.id;
                GameData.I.RobotName = data.name;
                MKResourcesManager.loadHeadImag(data.avatar, ServerCommon.robotId, 3, (res: ImageAsset) => {
                    let spriteFrame = new SpriteFrame();
                    spriteFrame = SpriteFrame.createWithImage(res);
                    GameData.I.RobotHeadImage = spriteFrame;
                    MainSceneUI.I.LoadJoinDataOver = true;
                });
            } else {
                PopupManager.I.ShowPopup(find("Canvas"), "ErrTipPopup", true);
                MainSceneUI.I.PlayBtn.active = true;
            }
        });

    }

    /**
     * 金币操作
     * @param number 100/200
     * @param type bet/win
     */
    public static gload(number, type) {
        let data: any = { "users": [Number(ServerCommon.userId)], "coin": number, "type": type }
        console.log("------------------------------------");
        console.log(data);

        MKMessageManager.httpResult('post', 'v1/ball8/coin/', data, (res) => {
            console.log("00000000000000", res);
        });
    }

    public static subNickName(nameStr: string) {
        if (nameStr.length > 8) {
            nameStr = nameStr.substring(0, 8) + '...';
        }
        return nameStr;
    }
    //离开游戏；
    leaveGame() {
        MKMessageManager.httpResult('post', MKMessageType.LEAVE, {}, (data) => {
            console.log(data);
        });
    }
}
