import { _decorator, Component, Node, SpriteFrame } from 'cc';
import { DataStorage } from '../Storage/DataStorage';
const { ccclass, property } = _decorator;

@ccclass('GetLocalData')
export class GetLocalData {
    public static ThisUserData: string = "userData_42394jnerguhr89nskg3498u5hjn";
    static UserName: string = "userName";
    static UserAvatarID: number = 0;
    static UserMoney: number = 0;
    Save() {
        let data: any = {
            userName: GetLocalData.UserName,
            userAvatarID: GetLocalData.UserAvatarID,
            userMoney: GetLocalData.UserMoney
        };
        DataStorage.SaveJson(GetLocalData.ThisUserData, data);
    }
    /**
     * userName/userAvatarID/userMoney
     */
    Get(){
        let data = DataStorage.GetJson(GetLocalData.ThisUserData);
        if (data) {
            GetLocalData.UserName = data.userName;
            GetLocalData.UserAvatarID = data.userAvatarID
            GetLocalData.UserMoney = data.userMoney
        }
        let outdata = {
            userName: GetLocalData.UserName,
            userAvatarID: GetLocalData.UserAvatarID,
            userMoney: GetLocalData.UserMoney
        }
        return outdata;
    }
}
