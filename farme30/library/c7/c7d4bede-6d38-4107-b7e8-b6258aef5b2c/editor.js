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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vVXRpbHMvTUtNZXNzYWdlTWFuYWdlci50cyJdLCJuYW1lcyI6WyJNS01lc3NhZ2VNYW5hZ2VyIiwiTkRCIiwiTUtFdmVudERpc3BhdGNoIiwiR2xvYmFsIiwiZ2V0VXNlckluZm8iLCJjYWxsYmFjayIsInVzZXJJbmZvIiwiZ2V0Um9vbUluZm8iLCJyb29tSW5mbyIsInNob3dQbGF5ZXJJbmZvIiwidWlkIiwiY2xlYXJTdGFydENvbnRpbnVlIiwiY29udGludWVUaW1lT3V0IiwiY2xlYXJUaW1lb3V0Iiwic2hvd0Vtb2ppIiwicG9zIiwic2l6ZSIsIm1zZyIsImhyZWYiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhMZW4iLCJsZW5ndGgiLCJsYW5nIiwic2xpY2UiLCJwb3NYIiwiY29uc29sZSIsImxvZyIsIm5ld1BvcyIsInByb3BvcnRpb24iLCJkb2N1bWVudCIsImJvZHkiLCJjbGllbnRXaWR0aCIsImh0dHBSZXN1bHQiLCJtZXRob2QiLCJ1cmwiLCJzZW5kRGF0YSIsIm51bWJlciIsInNlbmRVcmwiLCJORVRfQ09OU1RfUEFUSCIsInJlc3VsdCIsInJlcXVlc3QiLCJlcnJfY29kZSIsIk51bWJlciIsImh0dHBVc2VyUmVzdWx0IiwiTkVUX1VTRVJfQ09OU1RfUEFUSCIsImh0dHBUZXN0VXNlclJlc3VsdCIsImh0dHBBUElSZXN1bHQiLCJORVRfQVBJX0NPTlNUX1BBVEgiLCJodHRwSUFQUmVzdWx0IiwiTkVUX0lBUF9DT05TVF9QQVRIIiwic29ja2V0U2VuZCIsIm1lc3NhZ2VUeXBlIiwicnVuIiwiZGF0YSIsImVtaXRTb2NrZXRNZXNzYWdlIiwibWVzc2FnZSIsIkkiLCJlbWl0IiwiaXNQdXNobWVzc2FnZSIsIm1lc3NhZ2VBcnIiLCJwdXNoIiwiZ2V0TGFzdE1lc3NhZ2UiLCJsZW4iLCJjbGVhck1lc3NhZ2UiLCJzaGFyZUdhbWVPckltYWdlIiwic2hhcmVUZXh0IiwiaW1nVXJsIiwicmVuZGVyVGV4dHVyZVNoYXJlIiwibmV3RGF0YSIsInNoYXJlVXJsIiwicmVzdWx0U2hhcmUiLCJleGl0R2FtZSIsImNsb3NlV2ViVmlldyIsImJ1eUdhbWVDaW9uIiwib3BlbkRlZXBMaW5rIiwiZ2V0VXJsUGFyYW1ldGVyVmFsdWUiLCJuYW1lIiwicmVnIiwiUmVnRXhwIiwiciIsInN1YnN0ciIsIm1hdGNoIiwiY29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7OzREQU9xQkEsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUhkQyxNQUFBQSxHOztBQUNBQyxNQUFBQSxlOztBQUNBQyxNQUFBQSxNOzs7Ozs7O3lCQUNjSCxnQixHQUFOLE1BQU1BLGdCQUFOLENBQXVCO0FBQ2xDO0FBQzRFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSTZFO0FBQ0E7QUFHN0U7QUFDQSxxQkFBb0JJLFdBQXBCLENBQWdDQyxRQUFoQyxFQUErQztBQUMzQyxjQUFJQyxRQUFRLEdBQUcsTUFBTTtBQUFBO0FBQUEsMEJBQUlGLFdBQUosRUFBckI7QUFDQUMsVUFBQUEsUUFBUSxJQUFJQSxRQUFRLENBQUNDLFFBQVEsQ0FBQyxRQUFELENBQVQsQ0FBcEI7QUFDSCxTQTFCaUMsQ0E0QmxDOzs7QUFDQSxxQkFBb0JDLFdBQXBCLENBQWdDRixRQUFoQyxFQUErQztBQUMzQyxjQUFJRyxRQUFRLEdBQUcsTUFBTTtBQUFBO0FBQUEsMEJBQUlELFdBQUosRUFBckI7QUFDQUYsVUFBQUEsUUFBUSxJQUFJQSxRQUFRLENBQUNHLFFBQUQsQ0FBcEI7QUFDSCxTQWhDaUMsQ0FrQ2xDOzs7QUFDQSxlQUFjQyxjQUFkLENBQTZCQyxHQUE3QixFQUF1QztBQUNuQztBQUFBO0FBQUEsMEJBQUlELGNBQUosQ0FBbUJDLEdBQW5CO0FBQ0gsU0FyQ2lDLENBd0NsQzs7O0FBQ0EsZUFBY0Msa0JBQWQsR0FBbUM7QUFDL0IsY0FBSSxL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LFlBQUosQ0FBaUIsOENBQWpCLEVBRHdCLENBRXhCO0FBQ0gsU0ExS2lDLENBNEtsQzs7O0FBQ0EsZUFBY0Msb0JBQWQsQ0FBbUNDLElBQW5DLEVBQXlDO0FBQ3JDLGNBQUkzRCxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkYsSUFBM0I7QUFDQSxjQUFJNEQsR0FBRyxHQUFHLElBQUlDLE1BQUosQ0FBVyxVQUFVRixJQUFWLEdBQWlCLGVBQTVCLEVBQTZDLEdBQTdDLENBQVY7QUFDQSxjQUFJRyxDQUFDLEdBQUc5RCxJQUFJLENBQUMrRCxNQUFMLENBQVksQ0FBWixFQUFlQyxLQUFmLENBQXFCSixHQUFyQixDQUFSLENBSHFDLENBR0Y7O0FBQ25DLGNBQUlLLE9BQU8sR0FBRyxFQUFkO0FBQ0EsY0FBSUgsQ0FBQyxJQUFJLElBQVQsRUFDSUcsT0FBTyxHQUFHSCxDQUFDLENBQUMsQ0FBRCxDQUFYO0FBQ0pGLFVBQUFBLEdBQUcsR0FBRyxJQUFOO0FBQ0FFLFVBQUFBLENBQUMsR0FBRyxJQUFKO0FBQ0EsaUJBQU9HLE9BQU8sSUFBSSxJQUFYLElBQW1CQSxPQUFPLElBQUksRUFBOUIsSUFBb0NBLE9BQU8sSUFBSSxXQUEvQyxHQUE2RCxFQUE3RCxHQUFrRUEsT0FBekU7QUFDSDs7QUF2TGlDLE87O3NCQUFqQm5GLGdCLG9CQUVPLCtCOztzQkFGUEEsZ0IseUJBR1ksK0I7O3NCQUhaQSxnQix3QkFJVyw4Qjs7c0JBSlhBLGdCLHdCQUtXLDhCOztzQkFMWEEsZ0IseUJBTVksbUM7O3NCQU5aQSxnQixnQkFpQlUsRTs7c0JBakJWQSxnQixxQkFrQmdCLENBQUMsQzs7c0JBbEJqQkEsZ0IscUJBbUJ3QixLOztzQkFuQnhCQSxnQixtQkFvQnNCLEsiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qXG4gICAg5raI5oGv566h55CGXG4qL1xuaW1wb3J0IE5EQiBmcm9tICcuLi9VdGlscy9OREJUUyc7XG5pbXBvcnQgTUtFdmVudERpc3BhdGNoIGZyb20gJy4uL1V0aWxzL01LRXZlbnREaXNwYXRjaCc7XG5pbXBvcnQgR2xvYmFsIGZyb20gJy4vR2xvYmFsR2FtZURhdGEnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTUtNZXNzYWdlTWFuYWdlciB7XG4gICAgLy8g5q2j5LqL546v5aKD77ybXG4gICAgc3RhdGljIE5FVF9DT05TVF9QQVRIID0gJ2h0dHBzOi8vZ2FtZS5mdW5zaGFyZWFwcC5jb20vJzsgICAgICAgICAgICAgICAgICAgIC8v5q2j5byP546v5aKDaHR0cOWcsOWdgO+8m1xuICAgIHN0YXRpYyBORVRfVVNFUl9DT05TVF9QQVRIID0gJ2h0dHBzOi8vdXNlci5mdW5zaGFyZWFwcC5jb20vJzsgICAgICAgICAgICAgICAvL+S4quS6uuS/oeaBr+ivt+axgu+8m1xuICAgIHN0YXRpYyBORVRfQVBJX0NPTlNUX1BBVEggPSAnaHR0cHM6Ly9hcGkuZnVuc2hhcmVhcHAuY29tLyc7ICAgICAgICAgICAgICAgICAvL+aIquWbvuetieWKn+iDveivt+axgu+8m1xuICAgIHN0YXRpYyBORVRfSUFQX0NPTlNUX1BBVEggPSAnaHR0cHM6Ly9pYXAuZnVuc2hhcmVhcHAuY29tLyc7ICAgICAgICAgICAgICAgICAvL+mHkeW4geebuOWFs+aOpeWPo++8m1xuICAgIHN0YXRpYyBDSEFUX0FQSV9DT05TVF9QQVRIID0gJ2h0dHBzOi8vY2hhdHJvb20uZnVuc2hhcmVhcHAuY29tLyc7ICAgICAgICAgICAvL+iBiuWkqeWupOeahOivt+axgu+8m1xuXG5cbiAgICAvL+a1i+ivleeOr+Wig++8m1xuICAgIC8vIHN0YXRpYyBORVRfQ09OU1RfUEFUSCA9ICdodHRwOi8vdGVzdF9nYW1lLWh0dHAtc2VydmVyLmdhdGV3YXkuZnVuc2hhcmVhcHAuY29tLyc7ICAgICAgICAgICAgICAgIC8v5rWL6K+V546v5aKDaHR0cOWcsOWdgDtcbiAgICAvLyBzdGF0aWMgTkVUX1VTRVJfQ09OU1RfUEFUSCA9ICdodHRwOi8vdXNlci5mdW5zaGFyZWFwcC5jb20vJzsgICAgICAgICAgICAgICAvL+S4quS6uuS/oeaBr+ivt+axgu+8m1xuICAgIC8vIHN0YXRpYyBORVRfQVBJX0NPTlNUX1BBVEggPSAnaHR0cDovL2FwaS5mdW5zaGFyZWFwcC5jb20vJzsgICAgICAgICAgICAgICAgIC8v5oiq5Zu+562J5Yqf6IO96K+35rGC77ybXG4gICAgLy8gc3RhdGljIE5FVF9JQVBfQ09OU1RfUEFUSCA9ICdodHRwOi8vaWFwLmZ1bnNoYXJlYXBwLmNvbS8nOyAgICAgICAgICAgICAgICAgLy/ph5HluIHnm7jlhbPmjqXlj6PvvJtcbiAgICAvLyBzdGF0aWMgQ0hBVF9BUElfQ09OU1RfUEFUSCA9ICdodHRwOi8vY2hhdHJvb20uZnVuc2hhcmVhcHAuY29tLyc7ICAgICAgICAgICAvL+iBiuWkqeWupOeahOivt+axgu+8m1xuXG5cbiAgICBwdWJsaWMgc3RhdGljIG1lc3NhZ2VBcnIgPSBbXTtcbiAgICBzdGF0aWMgY29udGludWVUaW1lT3V0OiBudW1iZXIgPSAtMTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v57un57ut5ri45oiP5a6a5pe25ZmoOyAgICBcbiAgICBwdWJsaWMgc3RhdGljIGlzU3RhcnRDb250aW51ZTogYm9vbGVhbiA9IGZhbHNlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5piv5ZCm5byA5ZCv6YeN5paw6K+35rGCOyBcbiAgICBwdWJsaWMgc3RhdGljIGlzUHVzaG1lc3NhZ2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8v6I635Y+W5oi/6Ze05L+h5oGvO1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0VXNlckluZm8oY2FsbGJhY2s6IGFueSkge1xuICAgICAgICBsZXQgdXNlckluZm8gPSBhd2FpdCBOREIuZ2V0VXNlckluZm8oKTtcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sodXNlckluZm9bJ3Jlc3VsdCddKTtcbiAgICB9XG5cbiAgICAvL+iOt+WPluaIv+mXtOS/oeaBrztcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldFJvb21JbmZvKGNhbGxiYWNrOiBhbnkpIHtcbiAgICAgICAgbGV0IHJvb21JbmZvID0gYXdhaXQgTkRCLmdldFJvb21JbmZvKCk7XG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHJvb21JbmZvKTtcbiAgICB9XG5cbiAgICAvL+mAmuefpUFQUOaYvuekuueUqOaIt+WktOWDj++8m1xuICAgIHB1YmxpYyBzdGF0aWMgc2hvd1BsYXllckluZm8odWlkOiBhbnkpIHtcbiAgICAgICAgTkRCLnNob3dQbGF5ZXJJbmZvKHVpZCk7XG4gICAgfVxuXG5cbiAgICAvL+a4hemZpOenr+WOi+a2iOaBr++8m1xuICAgIHB1YmxpYyBzdGF0aWMgY2xlYXJTdGFydENvbnRpbnVlKCkge1xuICAgICAgICBpZiAodGhpcy5jb250aW51ZVRpbWVPdXQgPj0gMCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY29udGludWVUaW1lT3V0KTtcbiAgICAgICAgICAgIHRoaXMuY29udGludWVUaW1lT3V0ID0gLTE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+aYvuekuuihqOaDhTtcbiAgICBwdWJsaWMgc3RhdGljIHNob3dFbW9qaShwb3M6IGFueSwgc2l6ZTogYW55LCBtc2c6IGFueSkge1xuICAgICAgICBsZXQgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICBsZXQgaExlbiA9IGhyZWYubGVuZ3RoO1xuICAgICAgICBsZXQgbGFuZyA9IGhyZWYuc2xpY2UoaExlbiAtIDIsIGhMZW4pO1xuICAgICAgICBsZXQgcG9zWCA9IDA7XG4gICAgICAgIGlmIChsYW5nID09ICdhcicpIHtcbiAgICAgICAgICAgIHBvc1ggPSAtcG9zWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zWCA9IHBvc1swXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygncG9zOicgKyBwb3NbMF0gKyAnPT09PT09JyArIHBvc1sxXSk7XG4gICAgICAgIGxldCBuZXdQb3MgPSBbKHBvc1ggKyAzNzUpICsgMiwgKDM3NSAtIHBvc1sxXSkgKyAyICsgMjBdO1xuICAgICAgICBsZXQgcHJvcG9ydGlvbiA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gICAgICAgIHNpemUgPSBbc2l6ZVswXSAvIDc1MCAqIHByb3BvcnRpb24sIHNpemVbMV0gLyA3NTAgKiBwcm9wb3J0aW9uXTtcbiAgICAgICAgbmV3UG9zID0gW25ld1Bvc1swXSAvIDc1MCAqIHByb3BvcnRpb24gLSBzaXplWzBdIC8gMiwgbmV3UG9zWzFdIC8gNzUwICogcHJvcG9ydGlvbiAtIHNpemVbMV0gLyAyXTtcbiAgICAgICAgTkRCLnNob3dFbW9qaShuZXdQb3MsIHNpemUsIG1zZyk7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAgICAq6YCa6L+HaHR0cOiOt+WPluaVsOaNru+8m1xuICAgICAgICAqIEBtZXRob2Qge1N0cmluZ30gZ2V0LHBvc3QscHV0LGRlbFxuICAgICAgICAqIEB1cmwge1N0cmluZ30g6K+35rGCdXJsXG4gICAgICAgICpAcGFyYW1zIHtzZW5kRGF0YX0g5Y+R6YCB5Y+C5pWwXG4gICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGh0dHBSZXN1bHQobWV0aG9kOiBhbnksIHVybDogYW55LCBzZW5kRGF0YSA9IHt9LCBjYWxsYmFjazogYW55LCBudW1iZXIgPSAyKSB7XG4gICAgICAgIGxldCBzZW5kVXJsID0gYCR7dGhpcy5ORVRfQ09OU1RfUEFUSH0ke3VybH1gO1xuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgTkRCLnJlcXVlc3QobWV0aG9kLCBzZW5kVXJsLCBzZW5kRGF0YSk7XG5cbiAgICAgICAgaWYgKHJlc3VsdC5lcnJfY29kZSAmJiBOdW1iZXIocmVzdWx0LmVycl9jb2RlKSA9PSA1MDAgJiYgbnVtYmVyID4gMCkge1xuICAgICAgICAgICAgLy/ov5Tlm541MDDvvIzlho3mrKHor7fmsYI7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCfov5Tlm541MDDvvIzlho3mrKHor7fmsYInKTtcbiAgICAgICAgICAgIG51bWJlciA9IG51bWJlciAtIDE7XG4gICAgICAgICAgICB0aGlzLmh0dHBSZXN1bHQobWV0aG9kLCB1cmwsIHNlbmREYXRhLCBjYWxsYmFjaywgbnVtYmVyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXN1bHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgaHR0cFVzZXJSZXN1bHQobWV0aG9kOiBhbnksIHVybDogYW55LCBzZW5kRGF0YSA9IHt9LCBjYWxsYmFjazogYW55KSB7XG4gICAgICAgIGxldCBzZW5kVXJsID0gYCR7dGhpcy5ORVRfVVNFUl9DT05TVF9QQVRIfSR7dXJsfWA7XG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBOREIucmVxdWVzdChtZXRob2QsIHNlbmRVcmwsIHNlbmREYXRhKTtcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2socmVzdWx0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGh0dHBUZXN0VXNlclJlc3VsdChtZXRob2Q6IGFueSwgdXJsOiBhbnksIHNlbmREYXRhID0ge30sIGNhbGxiYWNrOiBhbnkpIHtcbiAgICAgICAgbGV0IHNlbmRVcmwgPSB1cmw7XG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBOREIucmVxdWVzdChtZXRob2QsIHNlbmRVcmwsIHNlbmREYXRhKTtcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2socmVzdWx0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGh0dHBBUElSZXN1bHQobWV0aG9kOiBhbnksIHVybDogYW55LCBzZW5kRGF0YSA9IHt9LCBjYWxsYmFjazogYW55KSB7XG4gICAgICAgIGxldCBzZW5kVXJsID0gYCR7dGhpcy5ORVRfQVBJX0NPTlNUX1BBVEh9JHt1cmx9YDtcbiAgICAgICAgY29uc29sZS5sb2coc2VuZFVybCk7XG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBOREIucmVxdWVzdChtZXRob2QsIHNlbmRVcmwsIHNlbmREYXRhKTtcbiAgICAgICAgLy8gcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2socmVzdWx0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGh0dHBJQVBSZXN1bHQobWV0aG9kOiBhbnksIHVybDogYW55LCBzZW5kRGF0YSA9IHt9LCBjYWxsYmFjazogYW55KSB7XG4gICAgICAgIGxldCBzZW5kVXJsID0gYCR7dGhpcy5ORVRfSUFQX0NPTlNUX1BBVEh9JHt1cmx9YDtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IE5EQi5yZXF1ZXN0KG1ldGhvZCwgc2VuZFVybCwgc2VuZERhdGEpO1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXN1bHQpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIOWPkemAgXNvY2tldOaVsOaNrlxuICAgICAgICBAcGFyYW0gbWVzc2FnZVR5cGUg5raI5oGv5Y+3XG4gICAgICAgIEBwYXJhbSBzZW5kRGF0YSDpnIDopoHlj5HpgIHmlbDmja5cbiAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgc29ja2V0U2VuZChtZXNzYWdlVHlwZTogYW55LCBzZW5kRGF0YSA9IHt9KSB7XG4gICAgICAgIE5EQi5ydW4oJ29uU29ja2V0U2VuZCcsIHsgbWV0aG9kOiBtZXNzYWdlVHlwZSwgZGF0YTogc2VuZERhdGEgfSk7XG4gICAgfVxuXG4gICAgLy/mtL7lj5HmlLbliLDnmoRzb2NrZXTmtojmga87XG4gICAgcHVibGljIHN0YXRpYyBlbWl0U29ja2V0TWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICAgIE1LRXZlbnREaXNwYXRjaC5JLmVtaXQoJ2VtaXRfbWVzc2FnZScsIHsgZGF0YTogbWVzc2FnZSB9KTtcbiAgICAgICAgaWYgKHRoaXMuaXNQdXNobWVzc2FnZSkge1xuICAgICAgICAgICAgbGV0IG1ldGhvZCA9IG1lc3NhZ2UuZGF0YS5tZXRob2Q7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbWV0aG9kOicgKyBtZXRob2QpO1xuICAgICAgICAgICAgaWYgKG1ldGhvZCA9PSAnbHVkb19wbGF5aW5nJyB8fCBtZXRob2QgPT0gJ2x1ZG9fY29tcGxldGVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUFyci5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/ojrflj5bmnIDlkI7nmoTmtojmga87XG4gICAgcHVibGljIHN0YXRpYyBnZXRMYXN0TWVzc2FnZSgpIHtcbiAgICAgICAgbGV0IGxlbiA9IHRoaXMubWVzc2FnZUFyci5sZW5ndGg7XG4gICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VBcnJbbGVuIC0gMV07XG4gICAgfVxuXG4gICAgLy/muIXmpZrmtojmga87XG4gICAgcHVibGljIHN0YXRpYyBjbGVhck1lc3NhZ2UoKSB7XG4gICAgICAgIHRoaXMuaXNQdXNobWVzc2FnZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1lc3NhZ2VBcnIgPSBbXTtcbiAgICB9XG5cbiAgICAvL+WIhuS6q+a4uOaIj++8m1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgc2hhcmVHYW1lT3JJbWFnZShzaGFyZVRleHQsIGltZ1VybCwgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IE5EQi5zaGFyZUdhbWVPckltYWdlKHNoYXJlVGV4dCwgaW1nVXJsKTtcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2socmVzdWx0KTtcbiAgICB9XG5cbiAgICAvL+aIquWbvuWKn+iDve+8m1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgcmVuZGVyVGV4dHVyZVNoYXJlKGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBOREIucmVuZGVyVGV4dHVyZVNoYXJlKCk7XG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHJlc3VsdCk7XG4gICAgICAgIGxldCBuZXdEYXRhID0gcmVzdWx0WydyZXN1bHQnXVsnZmlsZVBhdGgnXTtcbiAgICAgICAgbGV0IHNoYXJlVGV4dDogc3RyaW5nID0gJ0NvbWUgdG8gam9pbiB0aGlzIGNoYXRyb29tIGFuZCBwbGF5IGluY3JlZGlibGUgZ2FtZSEgICcgKyBHbG9iYWwuc2hhcmVVcmw7XG4gICAgICAgIGxldCByZXN1bHRTaGFyZSA9IGF3YWl0IE5EQi5zaGFyZUdhbWVPckltYWdlKHNoYXJlVGV4dCwgbmV3RGF0YSk7XG4gICAgfVxuXG4gICAgLyoqIOmAgOWHuua4uOaIjyovXG4gICAgcHVibGljIHN0YXRpYyBleGl0R2FtZSgpIHtcbiAgICAgICAgTkRCLmNsb3NlV2ViVmlldygpO1xuICAgIH1cblxuICAgIC8qKiDotK3kubDmuLjmiI/luIE7Ki9cbiAgICBwdWJsaWMgc3RhdGljIGJ1eUdhbWVDaW9uKCkge1xuICAgICAgICBOREIub3BlbkRlZXBMaW5rKCd5b3lvOi8vc3RhcnRfYWN0aXZpdHkvcmVjaGFyZ2U/dGFiPWdhbWVfY29pbicpO1xuICAgICAgICAvLyBOREIub3BlbkRlZXBMaW5rKCd5b3lvOi8vc3RhcnRfYWN0aXZpdHkvcmVjaGFyZ2UnKTtcbiAgICB9XG5cbiAgICAvL+iOt+WPlumhtemdouWPguaVsOWAvDtcbiAgICBwdWJsaWMgc3RhdGljIGdldFVybFBhcmFtZXRlclZhbHVlKG5hbWUpIHtcbiAgICAgICAgbGV0IGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoXCIoXnwmKVwiICsgbmFtZSArIFwiPShbXiZdKikoJnwkKVwiLCBcImlcIik7XG4gICAgICAgIHZhciByID0gaHJlZi5zdWJzdHIoMSkubWF0Y2gocmVnKTsgLy/ojrflj5Z1cmzkuK1cIj9cIuespuWQjueahOWtl+espuS4suW5tuato+WImeWMuemFjVxuICAgICAgICB2YXIgY29udGV4dCA9IFwiXCI7XG4gICAgICAgIGlmIChyICE9IG51bGwpXG4gICAgICAgICAgICBjb250ZXh0ID0gclsyXTtcbiAgICAgICAgcmVnID0gbnVsbDtcbiAgICAgICAgciA9IG51bGw7XG4gICAgICAgIHJldHVybiBjb250ZXh0ID09IG51bGwgfHwgY29udGV4dCA9PSBcIlwiIHx8IGNvbnRleHQgPT0gXCJ1bmRlZmluZWRcIiA/IFwiXCIgOiBjb250ZXh0O1xuICAgIH1cbn0iXX0=