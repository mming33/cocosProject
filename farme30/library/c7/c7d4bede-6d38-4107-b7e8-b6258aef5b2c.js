System.register(["cce.code-quality.cr", "cc", "./NDBTS.js", "./MKEventDispatch.js", "./GlobalGameData.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, NDB, MKEventDispatch, Global, _crd, MKMessageManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

      _export("default", MKMessageManager = /*#__PURE__*/function () {
        function MKMessageManager() {}

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
        MKMessageManager.getUserInfo =
        /*#__PURE__*/
        function () {
          var _getUserInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(callback) {
            var userInfo;
            return regeneratorRuntime.wrap(function _callee$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
                      error: Error()
                    }), NDB) : NDB).getUserInfo();

                  case 2:
                    userInfo = _context2.sent;
                    callback && callback(userInfo['result']);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee);
          }));

          function getUserInfo(_x) {
            return _getUserInfo.apply(this, arguments);
          }

          return getUserInfo;
        }() //获取房间信息;
        ;

        MKMessageManager.getRoomInfo =
        /*#__PURE__*/
        function () {
          var _getRoomInfo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(callback) {
            var roomInfo;
            return regeneratorRuntime.wrap(function _callee2$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
                      error: Error()
                    }), NDB) : NDB).getRoomInfo();

                  case 2:
                    roomInfo = _context3.sent;
                    callback && callback(roomInfo);

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee2);
          }));

          function getRoomInfo(_x2) {
            return _getRoomInfo.apply(this, arguments);
          }

          return getRoomInfo;
        }() //通知APP显示用户头像；
        ;

        MKMessageManager.showPlayerInfo = function showPlayerInfo(uid) {
          (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
            error: Error()
          }), NDB) : NDB).showPlayerInfo(uid);
        } //清除积压消息；
        ;

        MKMessageManager.clearStartContinue = function clearStartContinue() {
          if (this.continueTimeOut >= 0) {
            clearTimeout(this.continueTimeOut);
            this.continueTimeOut = -1;
          }
        } //显示表情;
        ;

        MKMessageManager.showEmoji = function showEmoji(pos, size, msg) {
          var href = window.location.href;
          var hLen = href.length;
          var lang = href.slice(hLen - 2, hLen);
          var posX = 0;

          if (lang == 'ar') {
            posX = -pos[0];
          } else {
            posX = pos[0];
          }

          console.log('pos:' + pos[0] + '======' + pos[1]);
          var newPos = [posX + 375 + 2, 375 - pos[1] + 2 + 20];
          var proportion = document.body.clientWidth;
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
        ;

        MKMessageManager.httpResult =
        /*#__PURE__*/
        function () {
          var _httpResult = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(method, url, sendData, callback, number) {
            var sendUrl, result;
            return regeneratorRuntime.wrap(function _callee3$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (sendData === void 0) {
                      sendData = {};
                    }

                    if (number === void 0) {
                      number = 2;
                    }

                    sendUrl = "" + this.NET_CONST_PATH + url;
                    _context4.next = 5;
                    return (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
                      error: Error()
                    }), NDB) : NDB).request(method, sendUrl, sendData);

                  case 5:
                    result = _context4.sent;

                    if (!(result.err_code && Number(result.err_code) == 500 && number > 0)) {
                      _context4.next = 10;
                      break;
                    }

                    //返回500，再次请求;
                    //console.log('返回500，再次请求');
                    number = number - 1;
                    this.httpResult(method, url, sendData, callback, number);
                    return _context4.abrupt("return");

                  case 10:
                    callback && callback(result);

                  case 11:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee3, this);
          }));

          function httpResult(_x3, _x4, _x5, _x6, _x7) {
            return _httpResult.apply(this, arguments);
          }

          return httpResult;
        }();

        MKMessageManager.httpUserResult = /*#__PURE__*/function () {
          var _httpUserResult = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(method, url, sendData, callback) {
            var sendUrl, result;
            return regeneratorRuntime.wrap(function _callee4$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (sendData === void 0) {
                      sendData = {};
                    }

                    sendUrl = "" + this.NET_USER_CONST_PATH + url;
                    _context5.next = 4;
                    return (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
                      error: Error()
                    }), NDB) : NDB).request(method, sendUrl, sendData);

                  case 4:
                    result = _context5.sent;
                    callback && callback(result);

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee4, this);
          }));

          function httpUserResult(_x8, _x9, _x10, _x11) {
            return _httpUserResult.apply(this, arguments);
          }

          return httpUserResult;
        }();

        MKMessageManager.httpTestUserResult = /*#__PURE__*/function () {
          var _httpTestUserResult = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(method, url, sendData, callback) {
            var sendUrl, result;
            return regeneratorRuntime.wrap(function _callee5$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (sendData === void 0) {
                      sendData = {};
                    }

                    sendUrl = url;
                    _context6.next = 4;
                    return (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
                      error: Error()
                    }), NDB) : NDB).request(method, sendUrl, sendData);

                  case 4:
                    result = _context6.sent;
                    callback && callback(result);

                  case 6:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee5);
          }));

          function httpTestUserResult(_x12, _x13, _x14, _x15) {
            return _httpTestUserResult.apply(this, arguments);
          }

          return httpTestUserResult;
        }();

        MKMessageManager.httpAPIResult = /*#__PURE__*/function () {
          var _httpAPIResult = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(method, url, sendData, callback) {
            var sendUrl, result;
            return regeneratorRuntime.wrap(function _callee6$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    if (sendData === void 0) {
                      sendData = {};
                    }

                    sendUrl = "" + this.NET_API_CONST_PATH + url;
                    console.log(sendUrl);
                    _context7.next = 5;
                    return (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
                      error: Error()
                    }), NDB) : NDB).request(method, sendUrl, sendData);

                  case 5:
                    result = _context7.sent;
                    // return result;
                    callback && callback(result);

                  case 7:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee6, this);
          }));

          function httpAPIResult(_x16, _x17, _x18, _x19) {
            return _httpAPIResult.apply(this, arguments);
          }

          return httpAPIResult;
        }();

        MKMessageManager.httpIAPResult = /*#__PURE__*/function () {
          var _httpIAPResult = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(method, url, sendData, callback) {
            var sendUrl, result;
            return regeneratorRuntime.wrap(function _callee7$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (sendData === void 0) {
                      sendData = {};
                    }

                    sendUrl = "" + this.NET_IAP_CONST_PATH + url;
                    _context8.next = 4;
                    return (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
                      error: Error()
                    }), NDB) : NDB).request(method, sendUrl, sendData);

                  case 4:
                    result = _context8.sent;
                    callback && callback(result);

                  case 6:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee7, this);
          }));

          function httpIAPResult(_x20, _x21, _x22, _x23) {
            return _httpIAPResult.apply(this, arguments);
          }

          return httpIAPResult;
        }()
        /*
            发送socket数据
            @param messageType 消息号
            @param sendData 需要发送数据
        */
        ;

        MKMessageManager.socketSend = function socketSend(messageType, sendData) {
          if (sendData === void 0) {
            sendData = {};
          }

          (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
            error: Error()
          }), NDB) : NDB).run('onSocketSend', {
            method: messageType,
            data: sendData
          });
        } //派发收到的socket消息;
        ;

        MKMessageManager.emitSocketMessage = function emitSocketMessage(message) {
          (_crd && MKEventDispatch === void 0 ? (_reportPossibleCrUseOfMKEventDispatch({
            error: Error()
          }), MKEventDispatch) : MKEventDispatch).I.emit('emit_message', {
            data: message
          });

          if (this.isPushmessage) {
            var method = message.data.method;
            console.log('method:' + method);

            if (method == 'ludo_playing' || method == 'ludo_completed') {
              this.messageArr.push(message);
            }
          }
        } //获取最后的消息;
        ;

        MKMessageManager.getLastMessage = function getLastMessage() {
          var len = this.messageArr.length;
          return this.messageArr[len - 1];
        } //清楚消息;
        ;

        MKMessageManager.clearMessage = function clearMessage() {
          this.isPushmessage = false;
          this.messageArr = [];
        } //分享游戏；
        ;

        MKMessageManager.shareGameOrImage =
        /*#__PURE__*/
        function () {
          var _shareGameOrImage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(shareText, imgUrl, callback) {
            var result;
            return regeneratorRuntime.wrap(function _callee8$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
                      error: Error()
                    }), NDB) : NDB).shareGameOrImage(shareText, imgUrl);

                  case 2:
                    result = _context9.sent;
                    callback && callback(result);

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee8);
          }));

          function shareGameOrImage(_x24, _x25, _x26) {
            return _shareGameOrImage.apply(this, arguments);
          }

          return shareGameOrImage;
        }() //截图功能；
        ;

        MKMessageManager.renderTextureShare =
        /*#__PURE__*/
        function () {
          var _renderTextureShare = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(callback) {
            var result, newData, shareText, resultShare;
            return regeneratorRuntime.wrap(function _callee9$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
                      error: Error()
                    }), NDB) : NDB).renderTextureShare();

                  case 2:
                    result = _context10.sent;
                    callback && callback(result);
                    newData = result['result']['filePath'];
                    shareText = 'Come to join this chatroom and play incredible game!  ' + (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
                      error: Error()
                    }), Global) : Global).shareUrl;
                    _context10.next = 8;
                    return (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
                      error: Error()
                    }), NDB) : NDB).shareGameOrImage(shareText, newData);

                  case 8:
                    resultShare = _context10.sent;

                  case 9:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee9);
          }));

          function renderTextureShare(_x27) {
            return _renderTextureShare.apply(this, arguments);
          }

          return renderTextureShare;
        }()
        /** 退出游戏*/
        ;

        MKMessageManager.exitGame = function exitGame() {
          (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
            error: Error()
          }), NDB) : NDB).closeWebView();
        }
        /** 购买游戏币;*/
        ;

        MKMessageManager.buyGameCion = function buyGameCion() {
          (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
            error: Error()
          }), NDB) : NDB).openDeepLink('yoyo://start_activity/recharge?tab=game_coin'); // NDB.openDeepLink('yoyo://start_activity/recharge');
        } //获取页面参数值;
        ;

        MKMessageManager.getUrlParameterValue = function getUrlParameterValue(name) {
          var href = window.location.href;
          var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
          var r = href.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配

          var context = "";
          if (r != null) context = r[2];
          reg = null;
          r = null;
          return context == null || context == "" || context == "undefined" ? "" : context;
        };

        return MKMessageManager;
      }());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9VdGlscy9NS01lc3NhZ2VNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIk5EQiIsIk1LRXZlbnREaXNwYXRjaCIsIkdsb2JhbCIsIk1LTWVzc2FnZU1hbmFnZXIiLCJnZXRVc2VySW5mbyIsImNhbGxiYWNrIiwidXNlckluZm8iLCJnZXRSb29tSW5mbyIsInJvb21JbmZvIiwic2hvd1BsYXllckluZm8iLCJ1aWQiLCJjbGVhclN0YXJ0Q29udGludWUiLCJjb250aW51ZVRpbWVPdXQiLCJjbGVhclRpbWVvdXQiLCJzaG93RW1vamkiLCJwb3MiLCJzaXplIiwibXNnIiwiaHJlZiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaExlbiIsImxlbmd0aCIsImxhbmciLCJzbGljZSIsInBvc1giLCJjb25zb2xlIiwibG9nIiwibmV3UG9zIiwicHJvcG9ydGlvbiIsImRvY3VtZW50IiwiYm9keSIsImNsaWVudFdpZHRoIiwiaHR0cFJlc3VsdCIsIm1ldGhvZCIsInVybCIsInNlbmREYXRhIiwibnVtYmVyIiwic2VuZFVybCIsIk5FVF9DT05TVF9QQVRIIiwicmVxdWVzdCIsInJlc3VsdCIsImVycl9jb2RlIiwiTnVtYmVyIiwiaHR0cFVzZXJSZXN1bHQiLCJORVRfVVNFUl9DT05TVF9QQVRIIiwiaHR0cFRlc3RVc2VyUmVzdWx0IiwiaHR0cEFQSVJlc3VsdCIsIk5FVF9BUElfQ09OU1RfUEFUSCIsImh0dHBJQVBSZXN1bHQiLCJORVRfSUFQX0NPTlNUX1BBVEgiLCJzb2NrZXRTZW5kIiwibWVzc2FnZVR5cGUiLCJydW4iLCJkYXRhIiwiZW1pdFNvY2tldE1lc3NhZ2UiLCJtZXNzYWdlIiwiSSIsImVtaXQiLCJpc1B1c2htZXNzYWdlIiwibWVzc2FnZUFyciIsInB1c2giLCJnZXRMYXN0TWVzc2FnZSIsImxlbiIsImNsZWFyTWVzc2FnZSIsInNoYXJlR2FtZU9ySW1hZ2UiLCJzaGFyZVRleHQiLCJpbWdVcmwiLCJyZW5kZXJUZXh0dXJlU2hhcmUiLCJuZXdEYXRhIiwic2hhcmVVcmwiLCJyZXN1bHRTaGFyZSIsImV4aXRHYW1lIiwiY2xvc2VXZWJWaWV3IiwiYnV5R2FtZUNpb24iLCJvcGVuRGVlcExpbmsiLCJnZXRVcmxQYXJhbWV0ZXJWYWx1ZSIsIm5hbWUiLCJyZWciLCJSZWdFeHAiLCJyIiwic3Vic3RyIiwibWF0Y2giLCJjb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlPQSxNQUFBQSxHOztBQUNBQyxNQUFBQSxlOztBQUNBQyxNQUFBQSxNOzs7Ozs7O3lCQUNjQyxnQjs7O0FBQ2pCO0FBQzRFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSTZFO0FBQ0E7QUFHN0U7eUJBQ29CQyxXOzs7cUZBQXBCLGlCQUFnQ0MsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFDeUI7QUFBQTtBQUFBLG9DQUFJRCxXQUFKLEVBRHpCOztBQUFBO0FBQ1FFLG9CQUFBQSxRQURSO0FBRUlELG9CQUFBQSxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDLFFBQUQsQ0FBVCxDQUFwQjs7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXOzs7Ozs7O1lBS0E7Ozt5QkFDb0JDLFc7OztxRkFBcEIsa0JBQWdDRixRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUN5QjtBQUFBO0FBQUEsb0NBQUlFLFdBQUosRUFEekI7O0FBQUE7QUFDUUMsb0JBQUFBLFFBRFI7QUFFSUgsb0JBQUFBLFFBQVEsSUFBSUEsUUFBUSxDQUFDRyxRQUFELENBQXBCOztBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFc7Ozs7Ozs7WUFLQTs7O3lCQUNjQyxjLEdBQWQsd0JBQTZCQyxHQUE3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Qiw4Q0FBakIsRUFEd0IsQ0FFeEI7QUFDSCxTLENBRUQ7Ozt5QkFDY0Msb0IsR0FBZCw4QkFBbUNDLElBQW5DLEVBQXlDO0FBQ3JDLGNBQUkzRCxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkYsSUFBM0I7QUFDQSxjQUFJNEQsR0FBRyxHQUFHLElBQUlDLE1BQUosQ0FBVyxVQUFVRixJQUFWLEdBQWlCLGVBQTVCLEVBQTZDLEdBQTdDLENBQVY7QUFDQSxjQUFJRyxDQUFDLEdBQUc5RCxJQUFJLENBQUMrRCxNQUFMLENBQVksQ0FBWixFQUFlQyxLQUFmLENBQXFCSixHQUFyQixDQUFSLENBSHFDLENBR0Y7O0FBQ25DLGNBQUlLLE9BQU8sR0FBRyxFQUFkO0FBQ0EsY0FBSUgsQ0FBQyxJQUFJLElBQVQsRUFDSUcsT0FBTyxHQUFHSCxDQUFDLENBQUMsQ0FBRCxDQUFYO0FBQ0pGLFVBQUFBLEdBQUcsR0FBRyxJQUFOO0FBQ0FFLFVBQUFBLENBQUMsR0FBRyxJQUFKO0FBQ0EsaUJBQU9HLE9BQU8sSUFBSSxJQUFYLElBQW1CQSxPQUFPLElBQUksRUFBOUIsSUFBb0NBLE9BQU8sSUFBSSxXQUEvQyxHQUE2RCxFQUE3RCxHQUFrRUEsT0FBekU7QUFDSCxTOzs7OztzQkF2TGdCaEYsZ0Isb0JBRU8sK0I7O3NCQUZQQSxnQix5QkFHWSwrQjs7c0JBSFpBLGdCLHdCQUlXLDhCOztzQkFKWEEsZ0Isd0JBS1csOEI7O3NCQUxYQSxnQix5QkFNWSxtQzs7c0JBTlpBLGdCLGdCQWlCVSxFOztzQkFqQlZBLGdCLHFCQWtCZ0IsQ0FBQyxDOztzQkFsQmpCQSxnQixxQkFtQndCLEs7O3NCQW5CeEJBLGdCLG1CQW9Cc0IsSyIsInNvdXJjZXNDb250ZW50IjpbIlxuLypcbiAgICDmtojmga/nrqHnkIZcbiovXG5pbXBvcnQgTkRCIGZyb20gJy4uL1V0aWxzL05EQlRTJztcbmltcG9ydCBNS0V2ZW50RGlzcGF0Y2ggZnJvbSAnLi4vVXRpbHMvTUtFdmVudERpc3BhdGNoJztcbmltcG9ydCBHbG9iYWwgZnJvbSAnLi9HbG9iYWxHYW1lRGF0YSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNS01lc3NhZ2VNYW5hZ2VyIHtcbiAgICAvLyDmraPkuovnjq/looPvvJtcbiAgICBzdGF0aWMgTkVUX0NPTlNUX1BBVEggPSAnaHR0cHM6Ly9nYW1lLmZ1bnNoYXJlYXBwLmNvbS8nOyAgICAgICAgICAgICAgICAgICAgLy/mraPlvI/njq/looNodHRw5Zyw5Z2A77ybXG4gICAgc3RhdGljIE5FVF9VU0VSX0NPTlNUX1BBVEggPSAnaHR0cHM6Ly91c2VyLmZ1bnNoYXJlYXBwLmNvbS8nOyAgICAgICAgICAgICAgIC8v5Liq5Lq65L+h5oGv6K+35rGC77ybXG4gICAgc3RhdGljIE5FVF9BUElfQ09OU1RfUEFUSCA9ICdodHRwczovL2FwaS5mdW5zaGFyZWFwcC5jb20vJzsgICAgICAgICAgICAgICAgIC8v5oiq5Zu+562J5Yqf6IO96K+35rGC77ybXG4gICAgc3RhdGljIE5FVF9JQVBfQ09OU1RfUEFUSCA9ICdodHRwczovL2lhcC5mdW5zaGFyZWFwcC5jb20vJzsgICAgICAgICAgICAgICAgIC8v6YeR5biB55u45YWz5o6l5Y+j77ybXG4gICAgc3RhdGljIENIQVRfQVBJX0NPTlNUX1BBVEggPSAnaHR0cHM6Ly9jaGF0cm9vbS5mdW5zaGFyZWFwcC5jb20vJzsgICAgICAgICAgIC8v6IGK5aSp5a6k55qE6K+35rGC77ybXG5cblxuICAgIC8v5rWL6K+V546v5aKD77ybXG4gICAgLy8gc3RhdGljIE5FVF9DT05TVF9QQVRIID0gJ2h0dHA6Ly90ZXN0X2dhbWUtaHR0cC1zZXJ2ZXIuZ2F0ZXdheS5mdW5zaGFyZWFwcC5jb20vJzsgICAgICAgICAgICAgICAgLy/mtYvor5Xnjq/looNodHRw5Zyw5Z2AO1xuICAgIC8vIHN0YXRpYyBORVRfVVNFUl9DT05TVF9QQVRIID0gJ2h0dHA6Ly91c2VyLmZ1bnNoYXJlYXBwLmNvbS8nOyAgICAgICAgICAgICAgIC8v5Liq5Lq65L+h5oGv6K+35rGC77ybXG4gICAgLy8gc3RhdGljIE5FVF9BUElfQ09OU1RfUEFUSCA9ICdodHRwOi8vYXBpLmZ1bnNoYXJlYXBwLmNvbS8nOyAgICAgICAgICAgICAgICAgLy/miKrlm77nrYnlip/og73or7fmsYLvvJtcbiAgICAvLyBzdGF0aWMgTkVUX0lBUF9DT05TVF9QQVRIID0gJ2h0dHA6Ly9pYXAuZnVuc2hhcmVhcHAuY29tLyc7ICAgICAgICAgICAgICAgICAvL+mHkeW4geebuOWFs+aOpeWPo++8m1xuICAgIC8vIHN0YXRpYyBDSEFUX0FQSV9DT05TVF9QQVRIID0gJ2h0dHA6Ly9jaGF0cm9vbS5mdW5zaGFyZWFwcC5jb20vJzsgICAgICAgICAgIC8v6IGK5aSp5a6k55qE6K+35rGC77ybXG5cblxuICAgIHB1YmxpYyBzdGF0aWMgbWVzc2FnZUFyciA9IFtdO1xuICAgIHN0YXRpYyBjb250aW51ZVRpbWVPdXQ6IG51bWJlciA9IC0xOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nu6fnu63muLjmiI/lrprml7blmag7ICAgIFxuICAgIHB1YmxpYyBzdGF0aWMgaXNTdGFydENvbnRpbnVlOiBib29sZWFuID0gZmFsc2U7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mmK/lkKblvIDlkK/ph43mlrDor7fmsYI7IFxuICAgIHB1YmxpYyBzdGF0aWMgaXNQdXNobWVzc2FnZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLy/ojrflj5bmiL/pl7Tkv6Hmga87XG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRVc2VySW5mbyhjYWxsYmFjazogYW55KSB7XG4gICAgICAgIGxldCB1c2VySW5mbyA9IGF3YWl0IE5EQi5nZXRVc2VySW5mbygpO1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayh1c2VySW5mb1sncmVzdWx0J10pO1xuICAgIH1cblxuICAgIC8v6I635Y+W5oi/6Ze05L+h5oGvO1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0Um9vbUluZm8oY2FsbGJhY2s6IGFueSkge1xuICAgICAgICBsZXQgcm9vbUluZm8gPSBhd2FpdCBOREIuZ2V0Um9vbUluZm8oKTtcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2socm9vbUluZm8pO1xuICAgIH1cblxuICAgIC8v6YCa55+lQVBQ5pi+56S655So5oi35aS05YOP77ybXG4gICAgcHVibGljIHN0YXRpYyBzaG93UGxheWVySW5mbyh1aWQ6IGFueSkge1xuICAgICAgICBOREIuc2hvd1BsYXllckluZm8odWlkKTtcbiAgICB9XG5cblxuICAgIC8v5riF6Zmk56ev5Y6L5raI5oGv77ybXG4gICAgcHVibGljIHN0YXRpYyBjbGVhclN0YXJ0Q29udGludWUoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRpbnVlVGltZU91dCA+PSAwKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jb250aW51ZVRpbWVPdXQpO1xuICAgICAgICAgICAgdGhpcy5jb250aW51ZVRpbWVPdXQgPSAtMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v5pi+56S66KGo5oOFO1xuICAgIHB1YmxpYyBzdGF0aWMgc2hvd0Vtb2ppKHBvczogYW55LCBzaXplOiBhbnksIG1zZzogYW55KSB7XG4gICAgICAgIGxldCBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIGxldCBoTGVuID0gaHJlZi5sZW5ndGg7XG4gICAgICAgIGxldCBsYW5nID0gaHJlZi5zbGljZShoTGVuIC0gMiwgaExlbik7XG4gICAgICAgIGxldCBwb3NYID0gMDtcbiAgICAgICAgaWYgKGxhbmcgPT0gJ2FyJykge1xuICAgICAgICAgICAgcG9zWCA9IC1wb3NbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3NYID0gcG9zWzBdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdwb3M6JyArIHBvc1swXSArICc9PT09PT0nICsgcG9zWzFdKTtcbiAgICAgICAgbGV0IG5ld1BvcyA9IFsocG9zWCArIDM3NSkgKyAyLCAoMzc1IC0gcG9zWzFdKSArIDIgKyAyMF07XG4gICAgICAgIGxldCBwcm9wb3J0aW9uID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbiAgICAgICAgc2l6ZSA9IFtzaXplWzBdIC8gNzUwICogcHJvcG9ydGlvbiwgc2l6ZVsxXSAvIDc1MCAqIHByb3BvcnRpb25dO1xuICAgICAgICBuZXdQb3MgPSBbbmV3UG9zWzBdIC8gNzUwICogcHJvcG9ydGlvbiAtIHNpemVbMF0gLyAyLCBuZXdQb3NbMV0gLyA3NTAgKiBwcm9wb3J0aW9uIC0gc2l6ZVsxXSAvIDJdO1xuICAgICAgICBOREIuc2hvd0Vtb2ppKG5ld1Bvcywgc2l6ZSwgbXNnKTtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICAgICrpgJrov4dodHRw6I635Y+W5pWw5o2u77ybXG4gICAgICAgICogQG1ldGhvZCB7U3RyaW5nfSBnZXQscG9zdCxwdXQsZGVsXG4gICAgICAgICogQHVybCB7U3RyaW5nfSDor7fmsYJ1cmxcbiAgICAgICAgKkBwYXJhbXMge3NlbmREYXRhfSDlj5HpgIHlj4LmlbBcbiAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgaHR0cFJlc3VsdChtZXRob2Q6IGFueSwgdXJsOiBhbnksIHNlbmREYXRhID0ge30sIGNhbGxiYWNrOiBhbnksIG51bWJlciA9IDIpIHtcbiAgICAgICAgbGV0IHNlbmRVcmwgPSBgJHt0aGlzLk5FVF9DT05TVF9QQVRIfSR7dXJsfWA7XG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBOREIucmVxdWVzdChtZXRob2QsIHNlbmRVcmwsIHNlbmREYXRhKTtcblxuICAgICAgICBpZiAocmVzdWx0LmVycl9jb2RlICYmIE51bWJlcihyZXN1bHQuZXJyX2NvZGUpID09IDUwMCAmJiBudW1iZXIgPiAwKSB7XG4gICAgICAgICAgICAvL+i/lOWbnjUwMO+8jOWGjeasoeivt+axgjtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ+i/lOWbnjUwMO+8jOWGjeasoeivt+axgicpO1xuICAgICAgICAgICAgbnVtYmVyID0gbnVtYmVyIC0gMTtcbiAgICAgICAgICAgIHRoaXMuaHR0cFJlc3VsdChtZXRob2QsIHVybCwgc2VuZERhdGEsIGNhbGxiYWNrLCBudW1iZXIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBodHRwVXNlclJlc3VsdChtZXRob2Q6IGFueSwgdXJsOiBhbnksIHNlbmREYXRhID0ge30sIGNhbGxiYWNrOiBhbnkpIHtcbiAgICAgICAgbGV0IHNlbmRVcmwgPSBgJHt0aGlzLk5FVF9VU0VSX0NPTlNUX1BBVEh9JHt1cmx9YDtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IE5EQi5yZXF1ZXN0KG1ldGhvZCwgc2VuZFVybCwgc2VuZERhdGEpO1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXN1bHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgaHR0cFRlc3RVc2VyUmVzdWx0KG1ldGhvZDogYW55LCB1cmw6IGFueSwgc2VuZERhdGEgPSB7fSwgY2FsbGJhY2s6IGFueSkge1xuICAgICAgICBsZXQgc2VuZFVybCA9IHVybDtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IE5EQi5yZXF1ZXN0KG1ldGhvZCwgc2VuZFVybCwgc2VuZERhdGEpO1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXN1bHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgaHR0cEFQSVJlc3VsdChtZXRob2Q6IGFueSwgdXJsOiBhbnksIHNlbmREYXRhID0ge30sIGNhbGxiYWNrOiBhbnkpIHtcbiAgICAgICAgbGV0IHNlbmRVcmwgPSBgJHt0aGlzLk5FVF9BUElfQ09OU1RfUEFUSH0ke3VybH1gO1xuICAgICAgICBjb25zb2xlLmxvZyhzZW5kVXJsKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IE5EQi5yZXF1ZXN0KG1ldGhvZCwgc2VuZFVybCwgc2VuZERhdGEpO1xuICAgICAgICAvLyByZXR1cm4gcmVzdWx0O1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXN1bHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgaHR0cElBUFJlc3VsdChtZXRob2Q6IGFueSwgdXJsOiBhbnksIHNlbmREYXRhID0ge30sIGNhbGxiYWNrOiBhbnkpIHtcbiAgICAgICAgbGV0IHNlbmRVcmwgPSBgJHt0aGlzLk5FVF9JQVBfQ09OU1RfUEFUSH0ke3VybH1gO1xuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgTkRCLnJlcXVlc3QobWV0aG9kLCBzZW5kVXJsLCBzZW5kRGF0YSk7XG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAg5Y+R6YCBc29ja2V05pWw5o2uXG4gICAgICAgIEBwYXJhbSBtZXNzYWdlVHlwZSDmtojmga/lj7dcbiAgICAgICAgQHBhcmFtIHNlbmREYXRhIOmcgOimgeWPkemAgeaVsOaNrlxuICAgICovXG4gICAgcHVibGljIHN0YXRpYyBzb2NrZXRTZW5kKG1lc3NhZ2VUeXBlOiBhbnksIHNlbmREYXRhID0ge30pIHtcbiAgICAgICAgTkRCLnJ1bignb25Tb2NrZXRTZW5kJywgeyBtZXRob2Q6IG1lc3NhZ2VUeXBlLCBkYXRhOiBzZW5kRGF0YSB9KTtcbiAgICB9XG5cbiAgICAvL+a0vuWPkeaUtuWIsOeahHNvY2tldOa2iOaBrztcbiAgICBwdWJsaWMgc3RhdGljIGVtaXRTb2NrZXRNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgICAgTUtFdmVudERpc3BhdGNoLkkuZW1pdCgnZW1pdF9tZXNzYWdlJywgeyBkYXRhOiBtZXNzYWdlIH0pO1xuICAgICAgICBpZiAodGhpcy5pc1B1c2htZXNzYWdlKSB7XG4gICAgICAgICAgICBsZXQgbWV0aG9kID0gbWVzc2FnZS5kYXRhLm1ldGhvZDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtZXRob2Q6JyArIG1ldGhvZCk7XG4gICAgICAgICAgICBpZiAobWV0aG9kID09ICdsdWRvX3BsYXlpbmcnIHx8IG1ldGhvZCA9PSAnbHVkb19jb21wbGV0ZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQXJyLnB1c2gobWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+iOt+WPluacgOWQjueahOa2iOaBrztcbiAgICBwdWJsaWMgc3RhdGljIGdldExhc3RNZXNzYWdlKCkge1xuICAgICAgICBsZXQgbGVuID0gdGhpcy5tZXNzYWdlQXJyLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZUFycltsZW4gLSAxXTtcbiAgICB9XG5cbiAgICAvL+a4healmua2iOaBrztcbiAgICBwdWJsaWMgc3RhdGljIGNsZWFyTWVzc2FnZSgpIHtcbiAgICAgICAgdGhpcy5pc1B1c2htZXNzYWdlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWVzc2FnZUFyciA9IFtdO1xuICAgIH1cblxuICAgIC8v5YiG5Lqr5ri45oiP77ybXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBzaGFyZUdhbWVPckltYWdlKHNoYXJlVGV4dCwgaW1nVXJsLCBjYWxsYmFjaykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgTkRCLnNoYXJlR2FtZU9ySW1hZ2Uoc2hhcmVUZXh0LCBpbWdVcmwpO1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXN1bHQpO1xuICAgIH1cblxuICAgIC8v5oiq5Zu+5Yqf6IO977ybXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyByZW5kZXJUZXh0dXJlU2hhcmUoY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IE5EQi5yZW5kZXJUZXh0dXJlU2hhcmUoKTtcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2socmVzdWx0KTtcbiAgICAgICAgbGV0IG5ld0RhdGEgPSByZXN1bHRbJ3Jlc3VsdCddWydmaWxlUGF0aCddO1xuICAgICAgICBsZXQgc2hhcmVUZXh0OiBzdHJpbmcgPSAnQ29tZSB0byBqb2luIHRoaXMgY2hhdHJvb20gYW5kIHBsYXkgaW5jcmVkaWJsZSBnYW1lISAgJyArIEdsb2JhbC5zaGFyZVVybDtcbiAgICAgICAgbGV0IHJlc3VsdFNoYXJlID0gYXdhaXQgTkRCLnNoYXJlR2FtZU9ySW1hZ2Uoc2hhcmVUZXh0LCBuZXdEYXRhKTtcbiAgICB9XG5cbiAgICAvKiog6YCA5Ye65ri45oiPKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4aXRHYW1lKCkge1xuICAgICAgICBOREIuY2xvc2VXZWJWaWV3KCk7XG4gICAgfVxuXG4gICAgLyoqIOi0reS5sOa4uOaIj+W4gTsqL1xuICAgIHB1YmxpYyBzdGF0aWMgYnV5R2FtZUNpb24oKSB7XG4gICAgICAgIE5EQi5vcGVuRGVlcExpbmsoJ3lveW86Ly9zdGFydF9hY3Rpdml0eS9yZWNoYXJnZT90YWI9Z2FtZV9jb2luJyk7XG4gICAgICAgIC8vIE5EQi5vcGVuRGVlcExpbmsoJ3lveW86Ly9zdGFydF9hY3Rpdml0eS9yZWNoYXJnZScpO1xuICAgIH1cblxuICAgIC8v6I635Y+W6aG16Z2i5Y+C5pWw5YC8O1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VXJsUGFyYW1ldGVyVmFsdWUobmFtZSkge1xuICAgICAgICBsZXQgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cChcIihefCYpXCIgKyBuYW1lICsgXCI9KFteJl0qKSgmfCQpXCIsIFwiaVwiKTtcbiAgICAgICAgdmFyIHIgPSBocmVmLnN1YnN0cigxKS5tYXRjaChyZWcpOyAvL+iOt+WPlnVybOS4rVwiP1wi56ym5ZCO55qE5a2X56ym5Liy5bm25q2j5YiZ5Yy56YWNXG4gICAgICAgIHZhciBjb250ZXh0ID0gXCJcIjtcbiAgICAgICAgaWYgKHIgIT0gbnVsbClcbiAgICAgICAgICAgIGNvbnRleHQgPSByWzJdO1xuICAgICAgICByZWcgPSBudWxsO1xuICAgICAgICByID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQgPT0gbnVsbCB8fCBjb250ZXh0ID09IFwiXCIgfHwgY29udGV4dCA9PSBcInVuZGVmaW5lZFwiID8gXCJcIiA6IGNvbnRleHQ7XG4gICAgfVxufSJdfQ==