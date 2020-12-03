System.register(["cc", "code-quality:cr", "./NDBTS.js", "./MKEventDispatch.js", "./GlobalGameData.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, NDB, MKEventDispatch, Global, _crd, MKMessageManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_NDBTSJs) {
      NDB = _NDBTSJs.default;
    }, function (_MKEventDispatchJs) {
      MKEventDispatch = _MKEventDispatchJs.default;
    }, function (_GlobalGameDataJs) {
      Global = _GlobalGameDataJs.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "d42bbr0kMlHo5fD0sDEy5Dv", "MKMessageManager", _context.meta);

      _crd = true;

      _export("default", MKMessageManager = /*#__PURE__*/function () {
        function MKMessageManager() {
          _classCallCheck(this, MKMessageManager);
        }

        _createClass(MKMessageManager, null, [{
          key: "getUserInfo",
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
          value: function () {
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

        }, {
          key: "getRoomInfo",
          value: function () {
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

        }, {
          key: "showPlayerInfo",
          value: function showPlayerInfo(uid) {
            (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
              error: Error()
            }), NDB) : NDB).showPlayerInfo(uid);
          } //清除积压消息；

        }, {
          key: "clearStartContinue",
          value: function clearStartContinue() {
            if (this.continueTimeOut >= 0) {
              clearTimeout(this.continueTimeOut);
              this.continueTimeOut = -1;
            }
          } //显示表情;

        }, {
          key: "showEmoji",
          value: function showEmoji(pos, size, msg) {
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

        }, {
          key: "httpResult",
          value: function () {
            var _httpResult = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(method, url) {
              var sendData,
                  callback,
                  number,
                  sendUrl,
                  result,
                  _args3 = arguments;
              return regeneratorRuntime.wrap(function _callee3$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      sendData = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {};
                      callback = _args3.length > 3 ? _args3[3] : undefined;
                      number = _args3.length > 4 && _args3[4] !== undefined ? _args3[4] : 2;
                      sendUrl = "".concat(this.NET_CONST_PATH).concat(url);
                      _context4.next = 6;
                      return (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
                        error: Error()
                      }), NDB) : NDB).request(method, sendUrl, sendData);

                    case 6:
                      result = _context4.sent;

                      if (!(result.err_code && Number(result.err_code) == 500 && number > 0)) {
                        _context4.next = 11;
                        break;
                      }

                      //返回500，再次请求;
                      //console.log('返回500，再次请求');
                      number = number - 1;
                      this.httpResult(method, url, sendData, callback, number);
                      return _context4.abrupt("return");

                    case 11:
                      callback && callback(result);

                    case 12:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee3, this);
            }));

            function httpResult(_x3, _x4) {
              return _httpResult.apply(this, arguments);
            }

            return httpResult;
          }()
        }, {
          key: "httpUserResult",
          value: function () {
            var _httpUserResult = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(method, url) {
              var sendData,
                  callback,
                  sendUrl,
                  result,
                  _args4 = arguments;
              return regeneratorRuntime.wrap(function _callee4$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      sendData = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
                      callback = _args4.length > 3 ? _args4[3] : undefined;
                      sendUrl = "".concat(this.NET_USER_CONST_PATH).concat(url);
                      _context5.next = 5;
                      return (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
                        error: Error()
                      }), NDB) : NDB).request(method, sendUrl, sendData);

                    case 5:
                      result = _context5.sent;
                      callback && callback(result);

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee4, this);
            }));

            function httpUserResult(_x5, _x6) {
              return _httpUserResult.apply(this, arguments);
            }

            return httpUserResult;
          }()
        }, {
          key: "httpTestUserResult",
          value: function () {
            var _httpTestUserResult = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(method, url) {
              var sendData,
                  callback,
                  sendUrl,
                  result,
                  _args5 = arguments;
              return regeneratorRuntime.wrap(function _callee5$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      sendData = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : {};
                      callback = _args5.length > 3 ? _args5[3] : undefined;
                      sendUrl = url;
                      _context6.next = 5;
                      return (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
                        error: Error()
                      }), NDB) : NDB).request(method, sendUrl, sendData);

                    case 5:
                      result = _context6.sent;
                      callback && callback(result);

                    case 7:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee5);
            }));

            function httpTestUserResult(_x7, _x8) {
              return _httpTestUserResult.apply(this, arguments);
            }

            return httpTestUserResult;
          }()
        }, {
          key: "httpAPIResult",
          value: function () {
            var _httpAPIResult = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(method, url) {
              var sendData,
                  callback,
                  sendUrl,
                  result,
                  _args6 = arguments;
              return regeneratorRuntime.wrap(function _callee6$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      sendData = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : {};
                      callback = _args6.length > 3 ? _args6[3] : undefined;
                      sendUrl = "".concat(this.NET_API_CONST_PATH).concat(url);
                      console.log(sendUrl);
                      _context7.next = 6;
                      return (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
                        error: Error()
                      }), NDB) : NDB).request(method, sendUrl, sendData);

                    case 6:
                      result = _context7.sent;
                      // return result;
                      callback && callback(result);

                    case 8:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee6, this);
            }));

            function httpAPIResult(_x9, _x10) {
              return _httpAPIResult.apply(this, arguments);
            }

            return httpAPIResult;
          }()
        }, {
          key: "httpIAPResult",
          value: function () {
            var _httpIAPResult = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(method, url) {
              var sendData,
                  callback,
                  sendUrl,
                  result,
                  _args7 = arguments;
              return regeneratorRuntime.wrap(function _callee7$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      sendData = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : {};
                      callback = _args7.length > 3 ? _args7[3] : undefined;
                      sendUrl = "".concat(this.NET_IAP_CONST_PATH).concat(url);
                      _context8.next = 5;
                      return (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
                        error: Error()
                      }), NDB) : NDB).request(method, sendUrl, sendData);

                    case 5:
                      result = _context8.sent;
                      callback && callback(result);

                    case 7:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee7, this);
            }));

            function httpIAPResult(_x11, _x12) {
              return _httpIAPResult.apply(this, arguments);
            }

            return httpIAPResult;
          }()
          /*
              发送socket数据
              @param messageType 消息号
              @param sendData 需要发送数据
          */

        }, {
          key: "socketSend",
          value: function socketSend(messageType) {
            var sendData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
              error: Error()
            }), NDB) : NDB).run('onSocketSend', {
              method: messageType,
              data: sendData
            });
          } //派发收到的socket消息;

        }, {
          key: "emitSocketMessage",
          value: function emitSocketMessage(message) {
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

        }, {
          key: "getLastMessage",
          value: function getLastMessage() {
            var len = this.messageArr.length;
            return this.messageArr[len - 1];
          } //清楚消息;

        }, {
          key: "clearMessage",
          value: function clearMessage() {
            this.isPushmessage = false;
            this.messageArr = [];
          } //分享游戏；

        }, {
          key: "shareGameOrImage",
          value: function () {
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

            function shareGameOrImage(_x13, _x14, _x15) {
              return _shareGameOrImage.apply(this, arguments);
            }

            return shareGameOrImage;
          }() //截图功能；

        }, {
          key: "renderTextureShare",
          value: function () {
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

            function renderTextureShare(_x16) {
              return _renderTextureShare.apply(this, arguments);
            }

            return renderTextureShare;
          }()
          /** 退出游戏*/

        }, {
          key: "exitGame",
          value: function exitGame() {
            (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
              error: Error()
            }), NDB) : NDB).closeWebView();
          }
          /** 购买游戏币;*/

        }, {
          key: "buyGameCion",
          value: function buyGameCion() {
            (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
              error: Error()
            }), NDB) : NDB).openDeepLink('yoyo://start_activity/recharge?tab=game_coin'); // NDB.openDeepLink('yoyo://start_activity/recharge');
          } //获取页面参数值;

        }, {
          key: "getUrlParameterValue",
          value: function getUrlParameterValue(name) {
            var href = window.location.href;
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = href.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配

            var context = "";
            if (r != null) context = r[2];
            reg = null;
            r = null;
            return context == null || context == "" || context == "undefined" ? "" : context;
          }
        }]);

        return MKMessageManager;
      }());

      MKMessageManager.NET_CONST_PATH = 'https://game.funshareapp.com/';
      MKMessageManager.NET_USER_CONST_PATH = 'https://user.funshareapp.com/';
      MKMessageManager.NET_API_CONST_PATH = 'https://api.funshareapp.com/';
      MKMessageManager.NET_IAP_CONST_PATH = 'https://iap.funshareapp.com/';
      MKMessageManager.CHAT_API_CONST_PATH = 'https://chatroom.funshareapp.com/';
      MKMessageManager.messageArr = [];
      MKMessageManager.continueTimeOut = -1;
      MKMessageManager.isStartContinue = false;
      MKMessageManager.isPushmessage = false;
      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL1V0aWxzL01LTWVzc2FnZU1hbmFnZXIudHMiXSwibmFtZXMiOlsiTkRCIiwiTUtFdmVudERpc3BhdGNoIiwiR2xvYmFsIiwiTUtNZXNzYWdlTWFuYWdlciIsImNhbGxiYWNrIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsImdldFJvb21JbmZvIiwicm9vbUluZm8iLCJ1aWQiLCJzaG93UGxheWVySW5mbyIsImNvbnRpbnVlVGltZU91dCIsImNsZWFyVGltZW91dCIsInBvcyIsInNpemUiLCJtc2ciLCJocmVmIiwid2luZG93IiwibG9jYXRpb24iLCJoTGVuIiwibGVuZ3RoIiwibGFuZyIsInNsaWNlIiwicG9zWCIsImNvbnNvbGUiLCJsb2ciLCJuZXdQb3MiLCJwcm9wb3J0aW9uIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xpZW50V2lkdGgiLCJzaG93RW1vamkiLCJtZXRob2QiLCJ1cmwiLCJzZW5kRGF0YSIsIm51bWJlciIsInNlbmRVcmwiLCJORVRfQ09OU1RfUEFUSCIsInJlcXVlc3QiLCJyZXN1bHQiLCJlcnJfY29kZSIsIk51bWJlciIsImh0dHBSZXN1bHQiLCJORVRfVVNFUl9DT05TVF9QQVRIIiwiTkVUX0FQSV9DT05TVF9QQVRIIiwiTkVUX0lBUF9DT05TVF9QQVRIIiwibWVzc2FnZVR5cGUiLCJydW4iLCJkYXRhIiwibWVzc2FnZSIsIkkiLCJlbWl0IiwiaXNQdXNobWVzc2FnZSIsIm1lc3NhZ2VBcnIiLCJwdXNoIiwibGVuIiwic2hhcmVUZXh0IiwiaW1nVXJsIiwic2hhcmVHYW1lT3JJbWFnZSIsInJlbmRlclRleHR1cmVTaGFyZSIsIm5ld0RhdGEiLCJzaGFyZVVybCIsInJlc3VsdFNoYXJlIiwiY2xvc2VXZWJWaWV3Iiwib3BlbkRlZXBMaW5rIiwibmFtZSIsInJlZyIsIlJlZ0V4cCIsInIiLCJzdWJzdHIiLCJtYXRjaCIsImNvbnRleHQiLCJDSEFUX0FQSV9DT05TVF9QQVRIIiwiaXNTdGFydENvbnRpbnVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJT0EsTUFBQUEsRzs7QUFDQUMsTUFBQUEsZTs7QUFDQUMsTUFBQUEsTTs7Ozs7Ozt5QkFDY0MsZ0I7Ozs7Ozs7QUFDakI7QUFDNEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUc1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJNkU7QUFDQTtBQUc3RTs7d0dBQ2dDQyxROzs7Ozs7OzZCQUNQO0FBQUE7QUFBQSxzQ0FBSUMsV0FBSixFOzs7QUFBakJDLHNCQUFBQSxRO0FBQ0pGLHNCQUFBQSxRQUFRLElBQUlBLFFBQVEsQ0FBQ0UsUUFBUSxDQUFDLFFBQUQsQ0FBVCxDQUFwQjs7Ozs7Ozs7Ozs7Ozs7O2NBR0o7Ozs7O3lHQUNnQ0YsUTs7Ozs7Ozs2QkFDUDtBQUFBO0FBQUEsc0NBQUlHLFdBQUosRTs7O0FBQWpCQyxzQkFBQUEsUTtBQUNKSixzQkFBQUEsUUFBUSxJQUFJQSxRQUFRLENBQUNJLFFBQUQsQ0FBcEI7Ozs7Ozs7Ozs7Ozs7OztjQUdKOzs7O3lDQUM2QkMsRyxFQUFLO0FBQzlCO0FBQUE7QUFBQSw0QkFBSUMsY0FBSixDQUFtQkQsR0FBbkI7QUFDSCxXLENBR0Q7Ozs7K0NBQ21DO0FBQy9CLGdCQUFJLEtBQUtFLGVBQUwsSUFBd0IsQ0FBNUIsRUFBK0I7QUFDM0JDLGNBQUFBLFlBQVksQ0FBQyxLQUFLRCxlQUFOLENBQVo7QUFDQSxtQkFBS0EsZUFBTCxHQUF1QixDQUFDLENBQXhCO0FBQ0g7QUFDSixXLENBRUQ7Ozs7b0NBQ3dCRSxHLEVBQUtDLEksRUFBTUMsRyxFQUFLO0FBQ3BDLGdCQUFJQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkYsSUFBM0I7QUFDQSxnQkFBSUcsSUFBSSxHQUFHSCxJQUFJLENBQUNJLE1BQWhCO0FBQ0EsZ0JBQUlDLElBQUksR0FBR0wsSUFBSSxDQUFD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Q0FNVnFFLG1CLEdBQXNCLG1DO0FBTlpyRSxNQUFBQSxnQixDQWlCSGtELFUsR0FBYSxFO0FBakJWbEQsTUFBQUEsZ0IsQ0FrQlZRLGUsR0FBMEIsQ0FBQyxDO0FBbEJqQlIsTUFBQUEsZ0IsQ0FtQkhzRSxlLEdBQTJCLEs7QUFuQnhCdEUsTUFBQUEsZ0IsQ0FvQkhpRCxhLEdBQXlCLEsiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qXG4gICAg5raI5oGv566h55CGXG4qL1xuaW1wb3J0IE5EQiBmcm9tICcuLi9VdGlscy9OREJUUyc7XG5pbXBvcnQgTUtFdmVudERpc3BhdGNoIGZyb20gJy4uL1V0aWxzL01LRXZlbnREaXNwYXRjaCc7XG5pbXBvcnQgR2xvYmFsIGZyb20gJy4vR2xvYmFsR2FtZURhdGEnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTUtNZXNzYWdlTWFuYWdlciB7XG4gICAgLy8g5q2j5LqL546v5aKD77ybXG4gICAgc3RhdGljIE5FVF9DT05TVF9QQVRIID0gJ2h0dHBzOi8vZ2FtZS5mdW5zaGFyZWFwcC5jb20vJzsgICAgICAgICAgICAgICAgICAgIC8v5q2j5byP546v5aKDaHR0cOWcsOWdgO+8m1xuICAgIHN0YXRpYyBORVRfVVNFUl9DT05TVF9QQVRIID0gJ2h0dHBzOi8vdXNlci5mdW5zaGFyZWFwcC5jb20vJzsgICAgICAgICAgICAgICAvL+S4quS6uuS/oeaBr+ivt+axgu+8m1xuICAgIHN0YXRpYyBORVRfQVBJX0NPTlNUX1BBVEggPSAnaHR0cHM6Ly9hcGkuZnVuc2hhcmVhcHAuY29tLyc7ICAgICAgICAgICAgICAgICAvL+aIquWbvuetieWKn+iDveivt+axgu+8m1xuICAgIHN0YXRpYyBORVRfSUFQX0NPTlNUX1BBVEggPSAnaHR0cHM6Ly9pYXAuZnVuc2hhcmVhcHAuY29tLyc7ICAgICAgICAgICAgICAgICAvL+mHkeW4geebuOWFs+aOpeWPo++8m1xuICAgIHN0YXRpYyBDSEFUX0FQSV9DT05TVF9QQVRIID0gJ2h0dHBzOi8vY2hhdHJvb20uZnVuc2hhcmVhcHAuY29tLyc7ICAgICAgICAgICAvL+iBiuWkqeWupOeahOivt+axgu+8m1xuXG5cbiAgICAvL+a1i+ivleeOr+Wig++8m1xuICAgIC8vIHN0YXRpYyBORVRfQ09OU1RfUEFUSCA9ICdodHRwOi8vdGVzdF9nYW1lLWh0dHAtc2VydmVyLmdhdGV3YXkuZnVuc2hhcmVhcHAuY29tLyc7ICAgICAgICAgICAgICAgIC8v5rWL6K+V546v5aKDaHR0cOWcsOWdgDtcbiAgICAvLyBzdGF0aWMgTkVUX1VTRVJfQ09OU1RfUEFUSCA9ICdodHRwOi8vdXNlci5mdW5zaGFyZWFwcC5jb20vJzsgICAgICAgICAgICAgICAvL+S4quS6uuS/oeaBr+ivt+axgu+8m1xuICAgIC8vIHN0YXRpYyBORVRfQVBJX0NPTlNUX1BBVEggPSAnaHR0cDovL2FwaS5mdW5zaGFyZWFwcC5jb20vJzsgICAgICAgICAgICAgICAgIC8v5oiq5Zu+562J5Yqf6IO96K+35rGC77ybXG4gICAgLy8gc3RhdGljIE5FVF9JQVBfQ09OU1RfUEFUSCA9ICdodHRwOi8vaWFwLmZ1bnNoYXJlYXBwLmNvbS8nOyAgICAgICAgICAgICAgICAgLy/ph5HluIHnm7jlhbPmjqXlj6PvvJtcbiAgICAvLyBzdGF0aWMgQ0hBVF9BUElfQ09OU1RfUEFUSCA9ICdodHRwOi8vY2hhdHJvb20uZnVuc2hhcmVhcHAuY29tLyc7ICAgICAgICAgICAvL+iBiuWkqeWupOeahOivt+axgu+8m1xuXG5cbiAgICBwdWJsaWMgc3RhdGljIG1lc3NhZ2VBcnIgPSBbXTtcbiAgICBzdGF0aWMgY29udGludWVUaW1lT3V0OiBudW1iZXIgPSAtMTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v57un57ut5ri45oiP5a6a5pe25ZmoOyAgICBcbiAgICBwdWJsaWMgc3RhdGljIGlzU3RhcnRDb250aW51ZTogYm9vbGVhbiA9IGZhbHNlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5piv5ZCm5byA5ZCv6YeN5paw6K+35rGCOyBcbiAgICBwdWJsaWMgc3RhdGljIGlzUHVzaG1lc3NhZ2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8v6I635Y+W5oi/6Ze05L+h5oGvO1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0VXNlckluZm8oY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHVzZXJJbmZvID0gYXdhaXQgTkRCLmdldFVzZXJJbmZvKCk7XG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHVzZXJJbmZvWydyZXN1bHQnXSk7XG4gICAgfVxuXG4gICAgLy/ojrflj5bmiL/pl7Tkv6Hmga87XG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRSb29tSW5mbyhjYWxsYmFjaykge1xuICAgICAgICBsZXQgcm9vbUluZm8gPSBhd2FpdCBOREIuZ2V0Um9vbUluZm8oKTtcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2socm9vbUluZm8pO1xuICAgIH1cblxuICAgIC8v6YCa55+lQVBQ5pi+56S655So5oi35aS05YOP77ybXG4gICAgcHVibGljIHN0YXRpYyBzaG93UGxheWVySW5mbyh1aWQpIHtcbiAgICAgICAgTkRCLnNob3dQbGF5ZXJJbmZvKHVpZCk7XG4gICAgfVxuXG5cbiAgICAvL+a4hemZpOenr+WOi+a2iOaBr++8m1xuICAgIHB1YmxpYyBzdGF0aWMgY2xlYXJTdGFydENvbnRpbnVlKCkge1xuICAgICAgICBpZiAodGhpcy5jb250aW51ZVRpbWVPdXQgPj0gMCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY29udGludWVUaW1lT3V0KTtcbiAgICAgICAgICAgIHRoaXMuY29udGludWVUaW1lT3V0ID0gLTE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+aYvuekuuihqOaDhTtcbiAgICBwdWJsaWMgc3RhdGljIHNob3dFbW9qaShwb3MsIHNpemUsIG1zZykge1xuICAgICAgICBsZXQgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICBsZXQgaExlbiA9IGhyZWYubGVuZ3RoO1xuICAgICAgICBsZXQgbGFuZyA9IGhyZWYuc2xpY2UoaExlbiAtIDIsIGhMZW4pO1xuICAgICAgICBsZXQgcG9zWCA9IDA7XG4gICAgICAgIGlmIChsYW5nID09ICdhcicpIHtcbiAgICAgICAgICAgIHBvc1ggPSAtcG9zWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zWCA9IHBvc1swXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygncG9zOicgKyBwb3NbMF0gKyAnPT09PT09JyArIHBvc1sxXSk7XG4gICAgICAgIGxldCBuZXdQb3MgPSBbKHBvc1ggKyAzNzUpICsgMiwgKDM3NSAtIHBvc1sxXSkgKyAyICsgMjBdO1xuICAgICAgICBsZXQgcHJvcG9ydGlvbiA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gICAgICAgIHNpemUgPSBbc2l6ZVswXSAvIDc1MCAqIHByb3BvcnRpb24sIHNpemVbMV0gLyA3NTAgKiBwcm9wb3J0aW9uXTtcbiAgICAgICAgbmV3UG9zID0gW25ld1Bvc1swXSAvIDc1MCAqIHByb3BvcnRpb24gLSBzaXplWzBdIC8gMiwgbmV3UG9zWzFdIC8gNzUwICogcHJvcG9ydGlvbiAtIHNpemVbMV0gLyAyXTtcbiAgICAgICAgTkRCLnNob3dFbW9qaShuZXdQb3MsIHNpemUsIG1zZyk7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAgICAq6YCa6L+HaHR0cOiOt+WPluaVsOaNru+8m1xuICAgICAgICAqIEBtZXRob2Qge1N0cmluZ30gZ2V0LHBvc3QscHV0LGRlbFxuICAgICAgICAqIEB1cmwge1N0cmluZ30g6K+35rGCdXJsXG4gICAgICAgICpAcGFyYW1zIHtzZW5kRGF0YX0g5Y+R6YCB5Y+C5pWwXG4gICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGh0dHBSZXN1bHQobWV0aG9kLCB1cmwsIHNlbmREYXRhID0ge30sIGNhbGxiYWNrLCBudW1iZXIgPSAyKSB7XG4gICAgICAgIGxldCBzZW5kVXJsID0gYCR7dGhpcy5ORVRfQ09OU1RfUEFUSH0ke3VybH1gO1xuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgTkRCLnJlcXVlc3QobWV0aG9kLCBzZW5kVXJsLCBzZW5kRGF0YSk7XG5cbiAgICAgICAgaWYgKHJlc3VsdC5lcnJfY29kZSAmJiBOdW1iZXIocmVzdWx0LmVycl9jb2RlKSA9PSA1MDAgJiYgbnVtYmVyID4gMCkge1xuICAgICAgICAgICAgLy/ov5Tlm541MDDvvIzlho3mrKHor7fmsYI7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCfov5Tlm541MDDvvIzlho3mrKHor7fmsYInKTtcbiAgICAgICAgICAgIG51bWJlciA9IG51bWJlciAtIDE7XG4gICAgICAgICAgICB0aGlzLmh0dHBSZXN1bHQobWV0aG9kLCB1cmwsIHNlbmREYXRhLCBjYWxsYmFjaywgbnVtYmVyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXN1bHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgaHR0cFVzZXJSZXN1bHQobWV0aG9kLCB1cmwsIHNlbmREYXRhID0ge30sIGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBzZW5kVXJsID0gYCR7dGhpcy5ORVRfVVNFUl9DT05TVF9QQVRIfSR7dXJsfWA7XG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBOREIucmVxdWVzdChtZXRob2QsIHNlbmRVcmwsIHNlbmREYXRhKTtcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2socmVzdWx0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGh0dHBUZXN0VXNlclJlc3VsdChtZXRob2QsIHVybCwgc2VuZERhdGEgPSB7fSwgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHNlbmRVcmwgPSB1cmw7XG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBOREIucmVxdWVzdChtZXRob2QsIHNlbmRVcmwsIHNlbmREYXRhKTtcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2socmVzdWx0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGh0dHBBUElSZXN1bHQobWV0aG9kLCB1cmwsIHNlbmREYXRhID0ge30sIGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBzZW5kVXJsID0gYCR7dGhpcy5ORVRfQVBJX0NPTlNUX1BBVEh9JHt1cmx9YDtcbiAgICAgICAgY29uc29sZS5sb2coc2VuZFVybCk7XG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBOREIucmVxdWVzdChtZXRob2QsIHNlbmRVcmwsIHNlbmREYXRhKTtcbiAgICAgICAgLy8gcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2socmVzdWx0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGh0dHBJQVBSZXN1bHQobWV0aG9kLCB1cmwsIHNlbmREYXRhID0ge30sIGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBzZW5kVXJsID0gYCR7dGhpcy5ORVRfSUFQX0NPTlNUX1BBVEh9JHt1cmx9YDtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IE5EQi5yZXF1ZXN0KG1ldGhvZCwgc2VuZFVybCwgc2VuZERhdGEpO1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXN1bHQpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIOWPkemAgXNvY2tldOaVsOaNrlxuICAgICAgICBAcGFyYW0gbWVzc2FnZVR5cGUg5raI5oGv5Y+3XG4gICAgICAgIEBwYXJhbSBzZW5kRGF0YSDpnIDopoHlj5HpgIHmlbDmja5cbiAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgc29ja2V0U2VuZChtZXNzYWdlVHlwZSwgc2VuZERhdGEgPSB7fSkge1xuICAgICAgICBOREIucnVuKCdvblNvY2tldFNlbmQnLCB7IG1ldGhvZDogbWVzc2FnZVR5cGUsIGRhdGE6IHNlbmREYXRhIH0pO1xuICAgIH1cblxuICAgIC8v5rS+5Y+R5pS25Yiw55qEc29ja2V05raI5oGvO1xuICAgIHB1YmxpYyBzdGF0aWMgZW1pdFNvY2tldE1lc3NhZ2UobWVzc2FnZSkge1xuICAgICAgICBNS0V2ZW50RGlzcGF0Y2guSS5lbWl0KCdlbWl0X21lc3NhZ2UnLCB7IGRhdGE6IG1lc3NhZ2UgfSk7XG4gICAgICAgIGlmICh0aGlzLmlzUHVzaG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGxldCBtZXRob2QgPSBtZXNzYWdlLmRhdGEubWV0aG9kO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ21ldGhvZDonICsgbWV0aG9kKTtcbiAgICAgICAgICAgIGlmIChtZXRob2QgPT0gJ2x1ZG9fcGxheWluZycgfHwgbWV0aG9kID09ICdsdWRvX2NvbXBsZXRlZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VBcnIucHVzaChtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v6I635Y+W5pyA5ZCO55qE5raI5oGvO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TGFzdE1lc3NhZ2UoKSB7XG4gICAgICAgIGxldCBsZW4gPSB0aGlzLm1lc3NhZ2VBcnIubGVuZ3RoO1xuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlQXJyW2xlbiAtIDFdO1xuICAgIH1cblxuICAgIC8v5riF5qWa5raI5oGvO1xuICAgIHB1YmxpYyBzdGF0aWMgY2xlYXJNZXNzYWdlKCkge1xuICAgICAgICB0aGlzLmlzUHVzaG1lc3NhZ2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tZXNzYWdlQXJyID0gW107XG4gICAgfVxuXG4gICAgLy/liIbkuqvmuLjmiI/vvJtcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHNoYXJlR2FtZU9ySW1hZ2Uoc2hhcmVUZXh0LCBpbWdVcmwsIGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBOREIuc2hhcmVHYW1lT3JJbWFnZShzaGFyZVRleHQsIGltZ1VybCk7XG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgLy/miKrlm77lip/og73vvJtcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHJlbmRlclRleHR1cmVTaGFyZShjYWxsYmFjaykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgTkRCLnJlbmRlclRleHR1cmVTaGFyZSgpO1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXN1bHQpO1xuICAgICAgICBsZXQgbmV3RGF0YSA9IHJlc3VsdFsncmVzdWx0J11bJ2ZpbGVQYXRoJ107XG4gICAgICAgIGxldCBzaGFyZVRleHQ6IHN0cmluZyA9ICdDb21lIHRvIGpvaW4gdGhpcyBjaGF0cm9vbSBhbmQgcGxheSBpbmNyZWRpYmxlIGdhbWUhICAnICsgR2xvYmFsLnNoYXJlVXJsO1xuICAgICAgICBsZXQgcmVzdWx0U2hhcmUgPSBhd2FpdCBOREIuc2hhcmVHYW1lT3JJbWFnZShzaGFyZVRleHQsIG5ld0RhdGEpO1xuICAgIH1cblxuICAgIC8qKiDpgIDlh7rmuLjmiI8qL1xuICAgIHB1YmxpYyBzdGF0aWMgZXhpdEdhbWUoKSB7XG4gICAgICAgIE5EQi5jbG9zZVdlYlZpZXcoKTtcbiAgICB9XG5cbiAgICAvKiog6LSt5Lmw5ri45oiP5biBOyovXG4gICAgcHVibGljIHN0YXRpYyBidXlHYW1lQ2lvbigpIHtcbiAgICAgICAgTkRCLm9wZW5EZWVwTGluaygneW95bzovL3N0YXJ0X2FjdGl2aXR5L3JlY2hhcmdlP3RhYj1nYW1lX2NvaW4nKTtcbiAgICAgICAgLy8gTkRCLm9wZW5EZWVwTGluaygneW95bzovL3N0YXJ0X2FjdGl2aXR5L3JlY2hhcmdlJyk7XG4gICAgfVxuXG4gICAgLy/ojrflj5bpobXpnaLlj4LmlbDlgLw7XG4gICAgcHVibGljIHN0YXRpYyBnZXRVcmxQYXJhbWV0ZXJWYWx1ZShuYW1lKSB7XG4gICAgICAgIGxldCBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIHZhciByZWcgPSBuZXcgUmVnRXhwKFwiKF58JilcIiArIG5hbWUgKyBcIj0oW14mXSopKCZ8JClcIiwgXCJpXCIpO1xuICAgICAgICB2YXIgciA9IGhyZWYuc3Vic3RyKDEpLm1hdGNoKHJlZyk7IC8v6I635Y+WdXJs5LitXCI/XCLnrKblkI7nmoTlrZfnrKbkuLLlubbmraPliJnljLnphY1cbiAgICAgICAgdmFyIGNvbnRleHQgPSBcIlwiO1xuICAgICAgICBpZiAociAhPSBudWxsKVxuICAgICAgICAgICAgY29udGV4dCA9IHJbMl07XG4gICAgICAgIHJlZyA9IG51bGw7XG4gICAgICAgIHIgPSBudWxsO1xuICAgICAgICByZXR1cm4gY29udGV4dCA9PSBudWxsIHx8IGNvbnRleHQgPT0gXCJcIiB8fCBjb250ZXh0ID09IFwidW5kZWZpbmVkXCIgPyBcIlwiIDogY29udGV4dDtcbiAgICB9XG59Il19