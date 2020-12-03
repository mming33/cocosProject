
/*
    消息号管理
*/

export default class MKMessageType {
    public static REQUEST_WS_STATUS = 'request_ws_status';                      //获取app与服务器websocket状态;
    public static GETUSERINFO = 'v1/slots/user/mine/';                          //获取个人信息; 
    public static JOIN = 'v1/ball8/join/';                                     //加入游戏；
    public static LEAVE = 'v1/ball8/leave/';                                    //离开游戏；
    public static ASSETS = 'v1/ball8/mine/diamond/';              //获取资产（金币、钻石、游戏币）；
}