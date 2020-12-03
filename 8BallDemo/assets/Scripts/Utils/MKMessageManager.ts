
/*
    消息管理
*/
import NDB from '../Utils/NDBTS';
import MKEventDispatch from '../Utils/MKEventDispatch';
import Global from './GlobalGameData';
export default class MKMessageManager {
    // 正事环境；
    static NET_CONST_PATH = 'https://game.funshareapp.com/';                    //正式环境http地址；
    static NET_USER_CONST_PATH = 'https://user.funshareapp.com/';               //个人信息请求；
    static NET_API_CONST_PATH = 'https://api.funshareapp.com/';                 //截图等功能请求；
    static NET_IAP_CONST_PATH = 'https://iap.funshareapp.com/';                 //金币相关接口；
    static CHAT_API_CONST_PATH = 'https://chatroom.funshareapp.com/';           //聊天室的请求；


    //测试环境；
    // static NET_CONST_PATH = 'http://test_game-http-server.gateway.funshareapp.com/';                //测试环境http地址;
    // static NET_USER_CONST_PATH = 'http://user.funshareapp.com/';               //个人信息请求；
    // static NET_API_CONST_PATH = 'http://api.funshareapp.com/';                 //截图等功能请求；
    // static NET_IAP_CONST_PATH = 'http://iap.funshareapp.com/';                 //金币相关接口；
    // static CHAT_API_CONST_PATH = 'http://chatroom.funshareapp.com/';           //聊天室的请求；


    public static messageArr = [];
    static continueTimeOut: number = -1;                                         //继续游戏定时器;    
    public static isStartContinue: boolean = false;                              //是否开启重新请求; 
    public static isPushmessage: boolean = false;

    //获取房间信息;
    public static async getUserInfo(callback) {
        let userInfo = await NDB.getUserInfo();
        callback && callback(userInfo['result']);
    }

    //获取房间信息;
    public static async getRoomInfo(callback) {
        let roomInfo = await NDB.getRoomInfo();
        callback && callback(roomInfo);
    }

    //通知APP显示用户头像；
    public static showPlayerInfo(uid) {
        NDB.showPlayerInfo(uid);
    }


    //清除积压消息；
    public static clearStartContinue() {
        if (this.continueTimeOut >= 0) {
            clearTimeout(this.continueTimeOut);
            this.continueTimeOut = -1;
        }
    }

    //显示表情;
    public static showEmoji(pos, size, msg) {
        let href = window.location.href;
        let hLen = href.length;
        let lang = href.slice(hLen - 2, hLen);
        let posX = 0;
        if (lang == 'ar') {
            posX = -pos[0];
        } else {
            posX = pos[0];
        }
        console.log('pos:' + pos[0] + '======' + pos[1]);
        let newPos = [(posX + 375) + 2, (375 - pos[1]) + 2 + 20];
        let proportion = document.body.clientWidth;
        size = [size[0] / 750 * proportion, size[1] / 750 * proportion];
        newPos = [newPos[0] / 750 * proportion - size[0] / 2, newPos[1] / 750 * proportion - size[1] / 2];
        NDB.showEmoji(newPos, size, msg);
    }

    /** 
        *通过http获取数据；
        * @method {String} get,post,put,del
        * @url {String} 请求url
        *@params {sendData} 发送参数
    */
    public static async httpResult(method, url, sendData = {}, callback, number = 2) {
        let sendUrl = `${this.NET_CONST_PATH}${url}`;
        let result = await NDB.request(method, sendUrl, sendData);

        if (result.err_code && Number(result.err_code) == 500 && number > 0) {
            //返回500，再次请求;
            //console.log('返回500，再次请求');
            number = number - 1;
            this.httpResult(method, url, sendData, callback, number);
            return;
        }
        callback && callback(result);
    }

    public static async httpUserResult(method, url, sendData = {}, callback) {
        let sendUrl = `${this.NET_USER_CONST_PATH}${url}`;
        let result = await NDB.request(method, sendUrl, sendData);
        callback && callback(result);
    }

    public static async httpTestUserResult(method, url, sendData = {}, callback) {
        let sendUrl = url;
        let result = await NDB.request(method, sendUrl, sendData);
        callback && callback(result);
    }

    public static async httpAPIResult(method, url, sendData = {}, callback) {
        let sendUrl = `${this.NET_API_CONST_PATH}${url}`;
        console.log(sendUrl);
        let result = await NDB.request(method, sendUrl, sendData);
        // return result;
        callback && callback(result);
    }

    public static async httpIAPResult(method, url, sendData = {}, callback) {
        let sendUrl = `${this.NET_IAP_CONST_PATH}${url}`;
        let result = await NDB.request(method, sendUrl, sendData);
        callback && callback(result);
    }

    /*
        发送socket数据
        @param messageType 消息号
        @param sendData 需要发送数据
    */
    public static socketSend(messageType, sendData = {}) {
        NDB.run('onSocketSend', { method: messageType, data: sendData });
    }

    //派发收到的socket消息;
    public static emitSocketMessage(message) {
        MKEventDispatch.I.emit('emit_message', { data: message });
        if (this.isPushmessage) {
            let method = message.data.method;
            console.log('method:' + method);
            if (method == 'ludo_playing' || method == 'ludo_completed') {
                this.messageArr.push(message);
            }
        }
    }

    //获取最后的消息;
    public static getLastMessage() {
        let len = this.messageArr.length;
        return this.messageArr[len - 1];
    }

    //清楚消息;
    public static clearMessage() {
        this.isPushmessage = false;
        this.messageArr = [];
    }

    //分享游戏；
    public static async shareGameOrImage(shareText, imgUrl, callback) {
        let result = await NDB.shareGameOrImage(shareText, imgUrl);
        callback && callback(result);
    }

    //截图功能；
    public static async renderTextureShare(callback) {
        let result = await NDB.renderTextureShare();
        callback && callback(result);
        let newData = result['result']['filePath'];
        let shareText: string = 'Come to join this chatroom and play incredible game!  ' + Global.shareUrl;
        let resultShare = await NDB.shareGameOrImage(shareText, newData);
    }

    /** 退出游戏*/
    public static exitGame() {
        NDB.closeWebView();
    }

    /** 购买游戏币;*/
    public static buyGameCion() {
        NDB.openDeepLink('yoyo://start_activity/recharge?tab=game_coin');
        // NDB.openDeepLink('yoyo://start_activity/recharge');
    }

    //获取页面参数值;
    public static getUrlParameterValue(name) {
        let href = window.location.href;
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = href.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
        var context = "";
        if (r != null)
            context = r[2];
        reg = null;
        r = null;
        return context == null || context == "" || context == "undefined" ? "" : context;
    }
}