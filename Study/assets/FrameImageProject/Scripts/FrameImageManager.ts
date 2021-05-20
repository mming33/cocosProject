
import UserDataCard from "./UserDataCard";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FrameImageManager {


    public static readonly GAMENAME = "UNO";
    public static UserDataCardNode: cc.Node = null;



    public static GetDataOver = false;
    public static GetDataErr = false;
    public static readonly FRAMEURL = "v2/master/users/info";
    /**users的信息(不包含spriteframe) */
    public static UsersInfoData: {
        "0": {
            user_id: number,
            name: string,
            avatar: string,
            /**用户级别 */
            level: number,
            /**是否是vip */
            is_vip: boolean,
            /**VIP等级 */
            vip_level: number,
            /**家族标签 */
            family_tag: string,
            /**家族等级 */
            family_level: number,
            /**家族图标 */
            family_level_icon: string,
            /**头像框 */
            frame_image: string,
            /**好友关系 */
            follow: number[],
            /**玩游戏的次数 */
            play_count: number,
            /**胜利的次数 */
            win_count: number
        }
    };
    /**users的信息(包含spriteframe) */
    public static Datas: [
        {
            user_id: number,
            /**头像框贴图文件 */
            frame_image_sprite: cc.SpriteFrame,
            name: string,
            avatar: string,
            avatar_sprite: cc.SpriteFrame,
            /**用户级别 */
            level: number,
            /**是否是vip */
            is_vip: boolean,
            /**VIP等级 */
            vip_level: number,
            /**家族标签 */
            family_tag: string,
            /**家族等级 */
            family_level: number,
            /**家族图标 */
            family_level_icon: string,
            /**头像框 */
            frame_image: string,
            /**好友关系 */
            follow: number[],
            /**玩游戏的次数 */
            play_count: number,
            /**胜利的次数 */
            win_count: number
        }
    ] = [{
        user_id: 0,
        /**头像框贴图文件 */
        frame_image_sprite: null,
        name: "",
        avatar: "",
        avatar_sprite: null,
        /**用户级别 */
        level: 0,
        /**是否是vip */
        is_vip: false,
        /**VIP等级 */
        vip_level: 0,
        /**家族标签 */
        family_tag: "",
        /**家族等级 */
        family_level: 0,
        /**家族图标 */
        family_level_icon: "",
        /**头像框 */
        frame_image: "",
        /**好友关系 */
        follow: [],
        /**玩游戏的次数 */
        play_count: 0,
        /**胜利的次数 */
        win_count: 0,
    }];


    /**初始化信息
     * @param uids 用户id的数组
     * @param func 获取信息完成后的回调
     */
    public static Init(uids: Array<number>, func?: Function) {
        FrameImageManager.GetFrameData(uids, func);
        if (FrameImageManager.UserDataCardNode) {
            FrameImageManager.UserDataCardNode.destroy();
            FrameImageManager.UserDataCardNode = null;
        }
    }

    /** 获取资料卡信息
     * @param uids 用户id的数组
     * @param func 获取信息完成后的回调
     */
    private static GetFrameData(uids: Array<number>, func?: Function) {
        FrameImageManager.GetDataOver = false;
        FrameImageManager.SendMessage(uids, () => {
            FrameImageManager.GetDataErr = false;
            FrameImageManager.ResetFrameImageDataForUids(uids);
            FrameImageManager.GetDataOver = true;
            func && func();
        }, () => {
            FrameImageManager.GetDataErr = true;
        });
    }

    /**重置资料卡信息  */
    public static ResetFrameImageDataForUids(uids: number[]) {
        if (FrameImageManager.GetDataErr) return;
        FrameImageManager.Datas.splice(0, FrameImageManager.Datas.length);
        for (let i = 0; i < uids.length; i++) {
            const uid = uids[i];
            FrameImageManager.Datas.push({
                user_id: uid,
                frame_image_sprite: null,
                avatar_sprite: null,
                name: FrameImageManager.UsersInfoData[uid].name,
                avatar: FrameImageManager.UsersInfoData[uid].avatar,
                level: FrameImageManager.UsersInfoData[uid].level,
                is_vip: FrameImageManager.UsersInfoData[uid].is_vip,
                vip_level: FrameImageManager.UsersInfoData[uid].vip_level,
                family_tag: FrameImageManager.UsersInfoData[uid].family_tag,
                family_level: FrameImageManager.UsersInfoData[uid].family_level,
                family_level_icon: FrameImageManager.UsersInfoData[uid].family_level_icon,
                frame_image: FrameImageManager.UsersInfoData[uid].frame_image,
                follow: FrameImageManager.UsersInfoData[uid].follow,
                play_count: FrameImageManager.UsersInfoData[uid].play_count,
                win_count: FrameImageManager.UsersInfoData[uid].win_count,
            });
        }
    }

    /** 通过uid获取头像框相关数据
     * @param uid 用户id
     * @returns 
     */
    public static GetDataForUid(uid): { user_id: number, frame_image_sprite: cc.SpriteFrame, name: string, avatar: string, avatar_sprite: cc.SpriteFrame, level: number, is_vip: boolean, vip_level: number, family_tag: string, family_level: number, family_level_icon: string, frame_image: string, follow: number[], play_count: number, win_count: number } {
        if (FrameImageManager.GetDataErr) return;
        for (let i = 0; i < FrameImageManager.Datas.length; i++) {
            const element = FrameImageManager.Datas[i];
            if (element.user_id == uid) {
                return element;
            }
        }
        return null;
    }

    /**显示资料卡
     * @param parentNode 指定资料卡需要加载到的父物体
     * @param uid 需要显示资料的用户id
     * @param thisPlayerId 当前用户的id
     */
    public static ShowUserDataCard(parentNode: cc.Node, uid: number, thisPlayerId: number) {
        if (FrameImageManager.GetDataErr) return;
        FrameImageManager.CardPoint();
        if (FrameImageManager.UserDataCardNode) {
            FrameImageManager.UserDataCardNode.active = true;
            FrameImageManager.UserDataCardNode.getComponent(UserDataCard).Init(uid, thisPlayerId);
        } else {
            cc.loader.loadRes("UserDataCardPrefab/UserDataCard", function (err: any, prefab: cc.Prefab) {
                if (err) {
                    console.error(err);
                    return;
                }
                if (prefab) {
                    let card = cc.instantiate(prefab);
                    card.zIndex = 25;
                    parentNode.addChild(card);
                    card.getComponent(UserDataCard).Init(uid, thisPlayerId);
                    FrameImageManager.UserDataCardNode = card;
                }
            });
        }
    }

    /** http请求
     * @param success 获取成功
     * @param err 获取失败
     */
    private static SendMessage(uids_data: Array<number>, success: Function = null, err: Function = null): void {
        console.log("发送获取头像框的http请求");
        let data = {
            uids: uids_data,
            game_type: "uno"
        }
        MKMessageManager.httpResult('post', FrameImageManager.FRAMEURL, data, (res) => {
            console.log('---------> frame http 返回结果：', res);
            if (res && res.err_code) {
                err && err();
            } else {
                FrameImageManager.UsersInfoData = res;
                console.log(FrameImageManager.UsersInfoData);
                success && success(res);
            }
        });
    }

    /** 加载图片
     * @param success 获取成功
     * @param err 获取失败
     */
    public static LoadImage(url: string, uid: number, success: Function) {
        MKResourcesManager.loadHeadImag(url, uid, 3, (res: cc.Texture2D) => {
            success && success(res);
        });
    }

    //关注某个人；
    public static followedPlayer(pid, success?: Function, err?: Function) {
        MKMessageManager.httpAPIResult('post', `v1/users/mine/follow/${pid}/?source=user_page`, {}, (fData) => {
            if (fData.status == 'OK') {
                success && success(pid);
            } else {
                err && err(pid);
            }
        });
    }

    /**关注打点 */
    public static FollowPoint() {
        console.log('关注打点', 'game_click_user_follow');
        let obj = {
            eventName: "game_click_user_follow",
            type: FrameImageManager.GAMENAME,
            game_type: FrameImageManager.GAMENAME,
        }
        NDB.sendAutoJoinEvent(obj);
    }
    /**关注打点 */
    public static CardPoint() {
        console.log('资料卡打点', 'game_show_user_info');
        let obj = {
            eventName: "game_show_user_info",
            type: FrameImageManager.GAMENAME,
            game_type: FrameImageManager.GAMENAME,
        }
        NDB.sendAutoJoinEvent(obj);
    }
}
