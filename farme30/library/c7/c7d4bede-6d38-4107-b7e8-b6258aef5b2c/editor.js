System.register(["cce.code-quality.cr", "cc", "./NDBTS.js", "./MKEventDispatch.js", "./GlobalGameData.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, NDB, MKEventDispatch, Global, MKMessageManager, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfNDB(extras) {
    _reporterNs.report("NDB", "../Utils/NDBTS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMKEventDispatch(extras) {
    _reporterNs.report("MKEventDispatch", "../Utils/MKEventDispatch", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobal(extras) {
    _reporterNs.report("Global", "./GlobalGameData", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_NDBTSJs) {
      NDB = _NDBTSJs.default;
    }, function (_MKEventDispatchJs) {
      MKEventDispatch = _MKEventDispatchJs.default;
    }, function (_GlobalGameDataJs) {
      Global = _GlobalGameDataJs.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c7d4b7ebThBB7fotiWK71ss", "MKMessageManager", _context.meta);

      _export("default", MKMessageManager = class MKMessageManager {
        // 正事环境；
        //正式环境http地址；
        //个人信息请求；
        //截图等功能请求；
        //金币相关接口；
        //聊天室的请求；
        //测试环境；
        // static NET_CONST_PATH = 'http://test_game-http-server.gateway.funshareapp.com/';                //测试环境http地址;
        // static NET_USER_CONST_PATH = 'http://user.funshareapp.com/';               //个人信息请求；
        // static NET_API_CONST_PATH = 'http://api.funshareapp.com/';                 //截图等功能请求；
        // static NET_IAP_CONST_PATH = 'http://iap.funshareapp.com/';                 //金币相关接口；
        // static CHAT_API_CONST_PATH = 'http://chatroom.funshareapp.com/';           //聊天室的请求；
        //继续游戏定时器;    
        //是否开启重新请求; 
        //获取房间信息;
        static async getUserInfo(callback) {
          let userInfo = await (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
            error: Error()
          }), NDB) : NDB).getUserInfo();
          callback && callback(userInfo['result']);
        } //获取房间信息;


        static async getRoomInfo(callback) {
          let roomInfo = await (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
            error: Error()
          }), NDB) : NDB).getRoomInfo();
          callback && callback(roomInfo);
        } //通知APP显示用户头像；


        static showPlayerInfo(uid) {
          (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
            error: Error()
          }), NDB) : NDB).showPlayerInfo(uid);
        } //清除积压消息；


        static clearStartContinue() {
          if (this.continueTimeOut >= 0) {
            clearTimeout(this.continueTimeOut);
            this.continueTimeOut = -1;
          }
        } //显示表情;


        static showEmoji(pos, size, msg) {
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
          let newPos = [posX + 375 + 2, 375 - pos[1] + 2 + 20];
          let proportion = document.body.clientWidth;
          size = [size[0] / 750 * proportion, size[1] / 750 * proportion];
          newPos = [newPos[0] / 750 * proportion - size[0] / 2, newPos[1] / 750 * proportion - size[1] / 2];
          (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
            error: Error()
          }), NDB) : NDB).showEmoji(newPos, size, msg);
        }
        /** 
            *通过http获取数据；
            * @method {String} get,post,put,del
            * @url {String} 请求url
            *@params {sendData} 发送参数
        */


        static async httpResult(method, url, sendData = {}, callback, number = 2) {
          let sendUrl = `${this.NET_CONST_PATH}${url}`;
          let result = await (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
            error: Error()
          }), NDB) : NDB).request(method, sendUrl, sendData);

          if (result.err_code && Number(result.err_code) == 500 && number > 0) {
            //返回500，再次请求;
            //console.log('返回500，再次请求');
            number = number - 1;
            this.httpResult(method, url, sendData, callback, number);
            return;
          }

          callback && callback(result);
        }

        static async httpUserResult(method, url, sendData = {}, callback) {
          let sendUrl = `${this.NET_USER_CONST_PATH}${url}`;
          let result = await (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
            error: Error()
          }), NDB) : NDB).request(method, sendUrl, sendData);
          callback && callback(result);
        }

        static async httpTestUserResult(method, url, sendData = {}, callback) {
          let sendUrl = url;
          let result = await (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
            error: Error()
          }), NDB) : NDB).request(method, sendUrl, sendData);
          callback && callback(result);
        }

        static async httpAPIResult(method, url, sendData = {}, callback) {
          let sendUrl = `${this.NET_API_CONST_PATH}${url}`;
          console.log(sendUrl);
          let result = await (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
            error: Error()
          }), NDB) : NDB).request(method, sendUrl, sendData); // return result;

          callback && callback(result);
        }

        static async httpIAPResult(method, url, sendData = {}, callback) {
          let sendUrl = `${this.NET_IAP_CONST_PATH}${url}`;
          let result = await (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
            error: Error()
          }), NDB) : NDB).request(method, sendUrl, sendData);
          callback && callback(result);
        }
        /*
            发送socket数据
            @param messageType 消息号
            @param sendData 需要发送数据
        */


        static socketSend(messageType, sendData = {}) {
          (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
            error: Error()
          }), NDB) : NDB).run('onSocketSend', {
            method: messageType,
            data: sendData
          });
        } //派发收到的socket消息;


        static emitSocketMessage(message) {
          (_crd && MKEventDispatch === void 0 ? (_reportPossibleCrUseOfMKEventDispatch({
            error: Error()
          }), MKEventDispatch) : MKEventDispatch).I.emit('emit_message', {
            data: message
          });

          if (this.isPushmessage) {
            let method = message.data.method;
            console.log('method:' + method);

            if (method == 'ludo_playing' || method == 'ludo_completed') {
              this.messageArr.push(message);
            }
          }
        } //获取最后的消息;


        static getLastMessage() {
          let len = this.messageArr.length;
          return this.messageArr[len - 1];
        } //清楚消息;


        static clearMessage() {
          this.isPushmessage = false;
          this.messageArr = [];
        } //分享游戏；


        static async shareGameOrImage(shareText, imgUrl, callback) {
          let result = await (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
            error: Error()
          }), NDB) : NDB).shareGameOrImage(shareText, imgUrl);
          callback && callback(result);
        } //截图功能；


        static async renderTextureShare(callback) {
          let result = await (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
            error: Error()
          }), NDB) : NDB).renderTextureShare();
          callback && callback(result);
          let newData = result['result']['filePath'];
          let shareText = 'Come to join this chatroom and play incredible game!  ' + (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).shareUrl;
          let resultShare = await (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
            error: Error()
          }), NDB) : NDB).shareGameOrImage(shareText, newData);
        }
        /** 退出游戏*/


        static exitGame() {
          (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
            error: Error()
          }), NDB) : NDB).closeWebView();
        }
        /** 购买游戏币;*/


        static buyGameCion() {
          (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
            error: Error()
          }), NDB) : NDB).openDeepLink('yoyo://start_activity/recharge?tab=game_coin'); // NDB.openDeepLink('yoyo://start_activity/recharge');
        } //获取页面参数值;


        static getUrlParameterValue(name) {
          let href = window.location.href;
          var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
          var r = href.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配

          var context = "";
          if (r != null) context = r[2];
          reg = null;
          r = null;
          return context == null || context == "" || context == "undefined" ? "" : context;
        }

      });

      _defineProperty(MKMessageManager, "NET_CONST_PATH", 'https://game.funshareapp.com/');

      _defineProperty(MKMessageManager, "NET_USER_CONST_PATH", 'https://user.funshareapp.com/');

      _defineProperty(MKMessageManager, "NET_API_CONST_PATH", 'https://api.funshareapp.com/');

      _defineProperty(MKMessageManager, "NET_IAP_CONST_PATH", 'https://iap.funshareapp.com/');

      _defineProperty(MKMessageManager, "CHAT_API_CONST_PATH", 'https://chatroom.funshareapp.com/');

      _defineProperty(MKMessageManager, "messageArr", []);

      _defineProperty(MKMessageManager, "continueTimeOut", -1);

      _defineProperty(MKMessageManager, "isStartContinue", false);

      _defineProperty(MKMessageManager, "isPushmessage", false);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9VdGlscy9NS01lc3NhZ2VNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIk1LTWVzc2FnZU1hbmFnZXIiLCJOREIiLCJNS0V2ZW50RGlzcGF0Y2giLCJHbG9iYWwiLCJnZXRVc2VySW5mbyIsImNhbGxiYWNrIiwidXNlckluZm8iLCJnZXRSb29tSW5mbyIsInJvb21JbmZvIiwic2hvd1BsYXllckluZm8iLCJ1aWQiLCJjbGVhclN0YXJ0Q29udGludWUiLCJjb250aW51ZVRpbWVPdXQiLCJjbGVhclRpbWVvdXQiLCJzaG93RW1vamkiLCJwb3MiLCJzaXplIiwibXNnIiwiaHJlZiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaExlbiIsImxlbmd0aCIsImxhbmciLCJzbGljZSIsInBvc1giLCJjb25zb2xlIiwibG9nIiwibmV3UG9zIiwicHJvcG9ydGlvbiIsImRvY3VtZW50IiwiYm9keSIsImNsaWVudFdpZHRoIiwiaHR0cFJlc3VsdCIsIm1ldGhvZCIsInVybCIsInNlbmREYXRhIiwibnVtYmVyIiwic2VuZFVybCIsIk5FVF9DT05TVF9QQVRIIiwicmVzdWx0IiwicmVxdWVzdCIsImVycl9jb2RlIiwiTnVtYmVyIiwiaHR0cFVzZXJSZXN1bHQiLCJORVRfVVNFUl9DT05TVF9QQVRIIiwiaHR0cFRlc3RVc2VyUmVzdWx0IiwiaHR0cEFQSVJlc3VsdCIsIk5FVF9BUElfQ09OU1RfUEFUSCIsImh0dHBJQVBSZXN1bHQiLCJORVRfSUFQX0NPTlNUX1BBVEgiLCJzb2NrZXRTZW5kIiwibWVzc2FnZVR5cGUiLCJydW4iLCJkYXRhIiwiZW1pdFNvY2tldE1lc3NhZ2UiLCJtZXNzYWdlIiwiSSIsImVtaXQiLCJpc1B1c2htZXNzYWdlIiwibWVzc2FnZUFyciIsInB1c2giLCJnZXRMYXN0TWVzc2FnZSIsImxlbiIsImNsZWFyTWVzc2FnZSIsInNoYXJlR2FtZU9ySW1hZ2UiLCJzaGFyZVRleHQiLCJpbWdVcmwiLCJyZW5kZXJUZXh0dXJlU2hhcmUiLCJuZXdEYXRhIiwic2hhcmVVcmwiLCJyZXN1bHRTaGFyZSIsImV4aXRHYW1lIiwiY2xvc2VXZWJWaWV3IiwiYnV5R2FtZUNpb24iLCJvcGVuRGVlcExpbmsiLCJnZXRVcmxQYXJhbWV0ZXJWYWx1ZSIsIm5hbWUiLCJyZWciLCJSZWdFeHAiLCJyIiwic3Vic3RyIiwibWF0Y2giLCJjb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7NERBT3FCQSxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSGRDLE1BQUFBLEc7O0FBQ0FDLE1BQUFBLGU7O0FBQ0FDLE1BQUFBLE07Ozs7Ozs7eUJBQ2NILGdCLEdBQU4sTUFBTUEsZ0JBQU4sQ0FBdUI7QUFDbEM7QUFDNEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUc1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJNkU7QUFDQTtBQUc3RTtBQUNBLHFCQUFvQkksV0FBcEIsQ0FBZ0NDLFFBQWhDLEVBQStDO0FBQzNDLGNBQUlDLFFBQVEsR0FBRyxNQUFNO0FBQUE7QUFBQSwwQkFBSUYsV0FBSixFQUFyQjtBQUNBQyxVQUFBQSxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDLFFBQUQsQ0FBVCxDQUFwQjtBQUNILFNBMUJpQyxDQTRCbEM7OztBQUNBLHFCQUFvQkMsV0FBcEIsQ0FBZ0NGLFFBQWhDLEVBQStDO0FBQzNDLGNBQUlHLFFBQVEsR0FBRyxNQUFNO0FBQUE7QUFBQSwwQkFBSUQsV0FBSixFQUFyQjtBQUNBRixVQUFBQSxRQUFRLElBQUlBLFFBQVEsQ0FBQ0csUUFBRCxDQUFwQjtBQUNILFNBaENpQyxDQWtDbEM7OztBQUNBLGVBQWNDLGNBQWQsQ0FBNkJDLEdBQTdCLEVBQXVDO0FBQ25DO0FBQUE7QUFBQSwwQkFBSUQsY0FBSixDQUFtQkMsR0FBbkI7QUFDSCxTQXJDaUMsQ0F3Q2xDOzs7QUFDQSxlQUFjQyxrQkFBZCxHQUFtQztBQUMvQixj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QkFBSUMsWUFBSixDQUFpQiw4Q0FBakIsRUFEd0IsQ0FFeEI7QUFDSCxTQTFLaUMsQ0E0S2xDOzs7QUFDQSxlQUFjQyxvQkFBZCxDQUFtQ0MsSUFBbkMsRUFBeUM7QUFDckMsY0FBSTNELElBQUksR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCRixJQUEzQjtBQUNBLGNBQUk0RCxHQUFHLEdBQUcsSUFBSUMsTUFBSixDQUFXLFVBQVVGLElBQVYsR0FBaUIsZUFBNUIsRUFBNkMsR0FBN0MsQ0FBVjtBQUNBLGNBQUlHLENBQUMsR0FBRzlELElBQUksQ0FBQytELE1BQUwsQ0FBWSxDQUFaLEVBQWVDLEtBQWYsQ0FBcUJKLEdBQXJCLENBQVIsQ0FIcUMsQ0FHRjs7QUFDbkMsY0FBSUssT0FBTyxHQUFHLEVBQWQ7QUFDQSxjQUFJSCxDQUFDLElBQUksSUFBVCxFQUNJRyxPQUFPLEdBQUdILENBQUMsQ0FBQyxDQUFELENBQVg7QUFDSkYsVUFBQUEsR0FBRyxHQUFHLElBQU47QUFDQUUsVUFBQUEsQ0FBQyxHQUFHLElBQUo7QUFDQSxpQkFBT0csT0FBTyxJQUFJLElBQVgsSUFBbUJBLE9BQU8sSUFBSSxFQUE5QixJQUFvQ0EsT0FBTyxJQUFJLFdBQS9DLEdBQTZELEVBQTdELEdBQWtFQSxPQUF6RTtBQUNIOztBQXZMaUMsTzs7c0JBQWpCbkYsZ0Isb0JBRU8sK0I7O3NCQUZQQSxnQix5QkFHWSwrQjs7c0JBSFpBLGdCLHdCQUlXLDhCOztzQkFKWEEsZ0Isd0JBS1csOEI7O3NCQUxYQSxnQix5QkFNWSxtQzs7c0JBTlpBLGdCLGdCQWlCVSxFOztzQkFqQlZBLGdCLHFCQWtCZ0IsQ0FBQyxDOztzQkFsQmpCQSxnQixxQkFtQndCLEs7O3NCQW5CeEJBLGdCLG1CQW9Cc0IsSyIsInNvdXJjZXNDb250ZW50IjpbIlxuLypcbiAgICDmtojmga/nrqHnkIZcbiovXG5pbXBvcnQgTkRCIGZyb20gJy4uL1V0aWxzL05EQlRTJztcbmltcG9ydCBNS0V2ZW50RGlzcGF0Y2ggZnJvbSAnLi4vVXRpbHMvTUtFdmVudERpc3BhdGNoJztcbmltcG9ydCBHbG9iYWwgZnJvbSAnLi9HbG9iYWxHYW1lRGF0YSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNS01lc3NhZ2VNYW5hZ2VyIHtcbiAgICAvLyDmraPkuovnjq/looPvvJtcbiAgICBzdGF0aWMgTkVUX0NPTlNUX1BBVEggPSAnaHR0cHM6Ly9nYW1lLmZ1bnNoYXJlYXBwLmNvbS8nOyAgICAgICAgICAgICAgICAgICAgLy/mraPlvI/njq/looNodHRw5Zyw5Z2A77ybXG4gICAgc3RhdGljIE5FVF9VU0VSX0NPTlNUX1BBVEggPSAnaHR0cHM6Ly91c2VyLmZ1bnNoYXJlYXBwLmNvbS8nOyAgICAgICAgICAgICAgIC8v5Liq5Lq65L+h5oGv6K+35rGC77ybXG4gICAgc3RhdGljIE5FVF9BUElfQ09OU1RfUEFUSCA9ICdodHRwczovL2FwaS5mdW5zaGFyZWFwcC5jb20vJzsgICAgICAgICAgICAgICAgIC8v5oiq5Zu+562J5Yqf6IO96K+35rGC77ybXG4gICAgc3RhdGljIE5FVF9JQVBfQ09OU1RfUEFUSCA9ICdodHRwczovL2lhcC5mdW5zaGFyZWFwcC5jb20vJzsgICAgICAgICAgICAgICAgIC8v6YeR5biB55u45YWz5o6l5Y+j77ybXG4gICAgc3RhdGljIENIQVRfQVBJX0NPTlNUX1BBVEggPSAnaHR0cHM6Ly9jaGF0cm9vbS5mdW5zaGFyZWFwcC5jb20vJzsgICAgICAgICAgIC8v6IGK5aSp5a6k55qE6K+35rGC77ybXG5cblxuICAgIC8v5rWL6K+V546v5aKD77ybXG4gICAgLy8gc3RhdGljIE5FVF9DT05TVF9QQVRIID0gJ2h0dHA6Ly90ZXN0X2dhbWUtaHR0cC1zZXJ2ZXIuZ2F0ZXdheS5mdW5zaGFyZWFwcC5jb20vJzsgICAgICAgICAgICAgICAgLy/mtYvor5Xnjq/looNodHRw5Zyw5Z2AO1xuICAgIC8vIHN0YXRpYyBORVRfVVNFUl9DT05TVF9QQVRIID0gJ2h0dHA6Ly91c2VyLmZ1bnNoYXJlYXBwLmNvbS8nOyAgICAgICAgICAgICAgIC8v5Liq5Lq65L+h5oGv6K+35rGC77ybXG4gICAgLy8gc3RhdGljIE5FVF9BUElfQ09OU1RfUEFUSCA9ICdodHRwOi8vYXBpLmZ1bnNoYXJlYXBwLmNvbS8nOyAgICAgICAgICAgICAgICAgLy/miKrlm77nrYnlip/og73or7fmsYLvvJtcbiAgICAvLyBzdGF0aWMgTkVUX0lBUF9DT05TVF9QQVRIID0gJ2h0dHA6Ly9pYXAuZnVuc2hhcmVhcHAuY29tLyc7ICAgICAgICAgICAgICAgICAvL+mHkeW4geebuOWFs+aOpeWPo++8m1xuICAgIC8vIHN0YXRpYyBDSEFUX0FQSV9DT05TVF9QQVRIID0gJ2h0dHA6Ly9jaGF0cm9vbS5mdW5zaGFyZWFwcC5jb20vJzsgICAgICAgICAgIC8v6IGK5aSp5a6k55qE6K+35rGC77ybXG5cblxuICAgIHB1YmxpYyBzdGF0aWMgbWVzc2FnZUFyciA9IFtdO1xuICAgIHN0YXRpYyBjb250aW51ZVRpbWVPdXQ6IG51bWJlciA9IC0xOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nu6fnu63muLjmiI/lrprml7blmag7ICAgIFxuICAgIHB1YmxpYyBzdGF0aWMgaXNTdGFydENvbnRpbnVlOiBib29sZWFuID0gZmFsc2U7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mmK/lkKblvIDlkK/ph43mlrDor7fmsYI7IFxuICAgIHB1YmxpYyBzdGF0aWMgaXNQdXNobWVzc2FnZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLy/ojrflj5bmiL/pl7Tkv6Hmga87XG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRVc2VySW5mbyhjYWxsYmFjazogYW55KSB7XG4gICAgICAgIGxldCB1c2VySW5mbyA9IGF3YWl0IE5EQi5nZXRVc2VySW5mbygpO1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayh1c2VySW5mb1sncmVzdWx0J10pO1xuICAgIH1cblxuICAgIC8v6I635Y+W5oi/6Ze05L+h5oGvO1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0Um9vbUluZm8oY2FsbGJhY2s6IGFueSkge1xuICAgICAgICBsZXQgcm9vbUluZm8gPSBhd2FpdCBOREIuZ2V0Um9vbUluZm8oKTtcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2socm9vbUluZm8pO1xuICAgIH1cblxuICAgIC8v6YCa55+lQVBQ5pi+56S655So5oi35aS05YOP77ybXG4gICAgcHVibGljIHN0YXRpYyBzaG93UGxheWVySW5mbyh1aWQ6IGFueSkge1xuICAgICAgICBOREIuc2hvd1BsYXllckluZm8odWlkKTtcbiAgICB9XG5cblxuICAgIC8v5riF6Zmk56ev5Y6L5raI5oGv77ybXG4gICAgcHVibGljIHN0YXRpYyBjbGVhclN0YXJ0Q29udGludWUoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRpbnVlVGltZU91dCA+PSAwKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jb250aW51ZVRpbWVPdXQpO1xuICAgICAgICAgICAgdGhpcy5jb250aW51ZVRpbWVPdXQgPSAtMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v5pi+56S66KGo5oOFO1xuICAgIHB1YmxpYyBzdGF0aWMgc2hvd0Vtb2ppKHBvczogYW55LCBzaXplOiBhbnksIG1zZzogYW55KSB7XG4gICAgICAgIGxldCBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIGxldCBoTGVuID0gaHJlZi5sZW5ndGg7XG4gICAgICAgIGxldCBsYW5nID0gaHJlZi5zbGljZShoTGVuIC0gMiwgaExlbik7XG4gICAgICAgIGxldCBwb3NYID0gMDtcbiAgICAgICAgaWYgKGxhbmcgPT0gJ2FyJykge1xuICAgICAgICAgICAgcG9zWCA9IC1wb3NbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3NYID0gcG9zWzBdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdwb3M6JyArIHBvc1swXSArICc9PT09PT0nICsgcG9zWzFdKTtcbiAgICAgICAgbGV0IG5ld1BvcyA9IFsocG9zWCArIDM3NSkgKyAyLCAoMzc1IC0gcG9zWzFdKSArIDIgKyAyMF07XG4gICAgICAgIGxldCBwcm9wb3J0aW9uID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbiAgICAgICAgc2l6ZSA9IFtzaXplWzBdIC8gNzUwICogcHJvcG9ydGlvbiwgc2l6ZVsxXSAvIDc1MCAqIHByb3BvcnRpb25dO1xuICAgICAgICBuZXdQb3MgPSBbbmV3UG9zWzBdIC8gNzUwICogcHJvcG9ydGlvbiAtIHNpemVbMF0gLyAyLCBuZXdQb3NbMV0gLyA3NTAgKiBwcm9wb3J0aW9uIC0gc2l6ZVsxXSAvIDJdO1xuICAgICAgICBOREIuc2hvd0Vtb2ppKG5ld1Bvcywgc2l6ZSwgbXNnKTtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICAgICrpgJrov4dodHRw6I635Y+W5pWw5o2u77ybXG4gICAgICAgICogQG1ldGhvZCB7U3RyaW5nfSBnZXQscG9zdCxwdXQsZGVsXG4gICAgICAgICogQHVybCB7U3RyaW5nfSDor7fmsYJ1cmxcbiAgICAgICAgKkBwYXJhbXMge3NlbmREYXRhfSDlj5HpgIHlj4LmlbBcbiAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgaHR0cFJlc3VsdChtZXRob2Q6IGFueSwgdXJsOiBhbnksIHNlbmREYXRhID0ge30sIGNhbGxiYWNrOiBhbnksIG51bWJlciA9IDIpIHtcbiAgICAgICAgbGV0IHNlbmRVcmwgPSBgJHt0aGlzLk5FVF9DT05TVF9QQVRIfSR7dXJsfWA7XG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBOREIucmVxdWVzdChtZXRob2QsIHNlbmRVcmwsIHNlbmREYXRhKTtcblxuICAgICAgICBpZiAocmVzdWx0LmVycl9jb2RlICYmIE51bWJlcihyZXN1bHQuZXJyX2NvZGUpID09IDUwMCAmJiBudW1iZXIgPiAwKSB7XG4gICAgICAgICAgICAvL+i/lOWbnjUwMO+8jOWGjeasoeivt+axgjtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ+i/lOWbnjUwMO+8jOWGjeasoeivt+axgicpO1xuICAgICAgICAgICAgbnVtYmVyID0gbnVtYmVyIC0gMTtcbiAgICAgICAgICAgIHRoaXMuaHR0cFJlc3VsdChtZXRob2QsIHVybCwgc2VuZERhdGEsIGNhbGxiYWNrLCBudW1iZXIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBodHRwVXNlclJlc3VsdChtZXRob2Q6IGFueSwgdXJsOiBhbnksIHNlbmREYXRhID0ge30sIGNhbGxiYWNrOiBhbnkpIHtcbiAgICAgICAgbGV0IHNlbmRVcmwgPSBgJHt0aGlzLk5FVF9VU0VSX0NPTlNUX1BBVEh9JHt1cmx9YDtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IE5EQi5yZXF1ZXN0KG1ldGhvZCwgc2VuZFVybCwgc2VuZERhdGEpO1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXN1bHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgaHR0cFRlc3RVc2VyUmVzdWx0KG1ldGhvZDogYW55LCB1cmw6IGFueSwgc2VuZERhdGEgPSB7fSwgY2FsbGJhY2s6IGFueSkge1xuICAgICAgICBsZXQgc2VuZFVybCA9IHVybDtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IE5EQi5yZXF1ZXN0KG1ldGhvZCwgc2VuZFVybCwgc2VuZERhdGEpO1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXN1bHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgaHR0cEFQSVJlc3VsdChtZXRob2Q6IGFueSwgdXJsOiBhbnksIHNlbmREYXRhID0ge30sIGNhbGxiYWNrOiBhbnkpIHtcbiAgICAgICAgbGV0IHNlbmRVcmwgPSBgJHt0aGlzLk5FVF9BUElfQ09OU1RfUEFUSH0ke3VybH1gO1xuICAgICAgICBjb25zb2xlLmxvZyhzZW5kVXJsKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IE5EQi5yZXF1ZXN0KG1ldGhvZCwgc2VuZFVybCwgc2VuZERhdGEpO1xuICAgICAgICAvLyByZXR1cm4gcmVzdWx0O1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXN1bHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgaHR0cElBUFJlc3VsdChtZXRob2Q6IGFueSwgdXJsOiBhbnksIHNlbmREYXRhID0ge30sIGNhbGxiYWNrOiBhbnkpIHtcbiAgICAgICAgbGV0IHNlbmRVcmwgPSBgJHt0aGlzLk5FVF9JQVBfQ09OU1RfUEFUSH0ke3VybH1gO1xuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgTkRCLnJlcXVlc3QobWV0aG9kLCBzZW5kVXJsLCBzZW5kRGF0YSk7XG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAg5Y+R6YCBc29ja2V05pWw5o2uXG4gICAgICAgIEBwYXJhbSBtZXNzYWdlVHlwZSDmtojmga/lj7dcbiAgICAgICAgQHBhcmFtIHNlbmREYXRhIOmcgOimgeWPkemAgeaVsOaNrlxuICAgICovXG4gICAgcHVibGljIHN0YXRpYyBzb2NrZXRTZW5kKG1lc3NhZ2VUeXBlOiBhbnksIHNlbmREYXRhID0ge30pIHtcbiAgICAgICAgTkRCLnJ1bignb25Tb2NrZXRTZW5kJywgeyBtZXRob2Q6IG1lc3NhZ2VUeXBlLCBkYXRhOiBzZW5kRGF0YSB9KTtcbiAgICB9XG5cbiAgICAvL+a0vuWPkeaUtuWIsOeahHNvY2tldOa2iOaBrztcbiAgICBwdWJsaWMgc3RhdGljIGVtaXRTb2NrZXRNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgICAgTUtFdmVudERpc3BhdGNoLkkuZW1pdCgnZW1pdF9tZXNzYWdlJywgeyBkYXRhOiBtZXNzYWdlIH0pO1xuICAgICAgICBpZiAodGhpcy5pc1B1c2htZXNzYWdlKSB7XG4gICAgICAgICAgICBsZXQgbWV0aG9kID0gbWVzc2FnZS5kYXRhLm1ldGhvZDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtZXRob2Q6JyArIG1ldGhvZCk7XG4gICAgICAgICAgICBpZiAobWV0aG9kID09ICdsdWRvX3BsYXlpbmcnIHx8IG1ldGhvZCA9PSAnbHVkb19jb21wbGV0ZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQXJyLnB1c2gobWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+iOt+WPluacgOWQjueahOa2iOaBrztcbiAgICBwdWJsaWMgc3RhdGljIGdldExhc3RNZXNzYWdlKCkge1xuICAgICAgICBsZXQgbGVuID0gdGhpcy5tZXNzYWdlQXJyLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZUFycltsZW4gLSAxXTtcbiAgICB9XG5cbiAgICAvL+a4healmua2iOaBrztcbiAgICBwdWJsaWMgc3RhdGljIGNsZWFyTWVzc2FnZSgpIHtcbiAgICAgICAgdGhpcy5pc1B1c2htZXNzYWdlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWVzc2FnZUFyciA9IFtdO1xuICAgIH1cblxuICAgIC8v5YiG5Lqr5ri45oiP77ybXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBzaGFyZUdhbWVPckltYWdlKHNoYXJlVGV4dCwgaW1nVXJsLCBjYWxsYmFjaykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgTkRCLnNoYXJlR2FtZU9ySW1hZ2Uoc2hhcmVUZXh0LCBpbWdVcmwpO1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXN1bHQpO1xuICAgIH1cblxuICAgIC8v5oiq5Zu+5Yqf6IO977ybXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyByZW5kZXJUZXh0dXJlU2hhcmUoY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IE5EQi5yZW5kZXJUZXh0dXJlU2hhcmUoKTtcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2socmVzdWx0KTtcbiAgICAgICAgbGV0IG5ld0RhdGEgPSByZXN1bHRbJ3Jlc3VsdCddWydmaWxlUGF0aCddO1xuICAgICAgICBsZXQgc2hhcmVUZXh0OiBzdHJpbmcgPSAnQ29tZSB0byBqb2luIHRoaXMgY2hhdHJvb20gYW5kIHBsYXkgaW5jcmVkaWJsZSBnYW1lISAgJyArIEdsb2JhbC5zaGFyZVVybDtcbiAgICAgICAgbGV0IHJlc3VsdFNoYXJlID0gYXdhaXQgTkRCLnNoYXJlR2FtZU9ySW1hZ2Uoc2hhcmVUZXh0LCBuZXdEYXRhKTtcbiAgICB9XG5cbiAgICAvKiog6YCA5Ye65ri45oiPKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4aXRHYW1lKCkge1xuICAgICAgICBOREIuY2xvc2VXZWJWaWV3KCk7XG4gICAgfVxuXG4gICAgLyoqIOi0reS5sOa4uOaIj+W4gTsqL1xuICAgIHB1YmxpYyBzdGF0aWMgYnV5R2FtZUNpb24oKSB7XG4gICAgICAgIE5EQi5vcGVuRGVlcExpbmsoJ3lveW86Ly9zdGFydF9hY3Rpdml0eS9yZWNoYXJnZT90YWI9Z2FtZV9jb2luJyk7XG4gICAgICAgIC8vIE5EQi5vcGVuRGVlcExpbmsoJ3lveW86Ly9zdGFydF9hY3Rpdml0eS9yZWNoYXJnZScpO1xuICAgIH1cblxuICAgIC8v6I635Y+W6aG16Z2i5Y+C5pWw5YC8O1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VXJsUGFyYW1ldGVyVmFsdWUobmFtZSkge1xuICAgICAgICBsZXQgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cChcIihefCYpXCIgKyBuYW1lICsgXCI9KFteJl0qKSgmfCQpXCIsIFwiaVwiKTtcbiAgICAgICAgdmFyIHIgPSBocmVmLnN1YnN0cigxKS5tYXRjaChyZWcpOyAvL+iOt+WPlnVybOS4rVwiP1wi56ym5ZCO55qE5a2X56ym5Liy5bm25q2j5YiZ5Yy56YWNXG4gICAgICAgIHZhciBjb250ZXh0ID0gXCJcIjtcbiAgICAgICAgaWYgKHIgIT0gbnVsbClcbiAgICAgICAgICAgIGNvbnRleHQgPSByWzJdO1xuICAgICAgICByZWcgPSBudWxsO1xuICAgICAgICByID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQgPT0gbnVsbCB8fCBjb250ZXh0ID09IFwiXCIgfHwgY29udGV4dCA9PSBcInVuZGVmaW5lZFwiID8gXCJcIiA6IGNvbnRleHQ7XG4gICAgfVxufSJdfQ==