System.register(["cc", "code-quality:cr", "./MKMessageManager.js", "./MKSound.js", "./MKEventDispatch.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, MKMessageManager, MKSound, MKEventDispatch, _crd, AndroidBackEvent, NdogJsBridge, NDB, androidBackEvent;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _reportPossibleCrUseOfMKMessageManager(extras) {
    _reporterNs.report("MKMessageManager", "../Utils/MKMessageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMKSound(extras) {
    _reporterNs.report("MKSound", "../Utils/MKSound", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMKEventDispatch(extras) {
    _reporterNs.report("MKEventDispatch", "./MKEventDispatch", _context.meta, extras);
  }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_MKMessageManagerJs) {
      MKMessageManager = _MKMessageManagerJs.default;
    }, function (_MKSoundJs) {
      MKSound = _MKSoundJs.default;
    }, function (_MKEventDispatchJs) {
      MKEventDispatch = _MKEventDispatchJs.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "771b5aqmZNG+JhZeYTEmG0d", "NDBTS", _context.meta);

      _crd = true;

      AndroidBackEvent = /*#__PURE__*/function () {
        function AndroidBackEvent() {
          _classCallCheck(this, AndroidBackEvent);

          this.list = [];
        }

        _createClass(AndroidBackEvent, [{
          key: "addEventListener",
          value: function addEventListener(audience) {
            this.list.push(audience);
          }
        }, {
          key: "removeEventListener",
          value: function removeEventListener(audience) {
            // console.log(audience);
            // console.log(JSON.stringify(this.list));
            // this.list.forEach(fn=>{
            //   console.log(fn,audience,fn.toString() == audience.toString());
            // })
            this.list = this.list.filter(function (fn) {
              return fn.toString() != audience.toString();
            }); // console.log(this.list);
          }
        }, {
          key: "broadcast",
          value: function broadcast() {
            console.log(this.list);
            this.list.forEach(function (fn) {
              fn && fn();
            });
            return !!this.list.length;
          }
        }]);

        return AndroidBackEvent;
      }();

      NdogJsBridge = /*#__PURE__*/function () {
        function NdogJsBridge(alice, platform) {
          var _this = this;

          _classCallCheck(this, NdogJsBridge);

          this.gameIsStart = false;

          this.generateRequestObj = function (method) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var port = _this.sequenceId++;
            return {
              uri: "".concat(_this.PROTOCOL, "://").concat(_this.ALICE, ":").concat(port, "/").concat(method, "?").concat(JSON.stringify(params)),
              port: port
            };
          };

          this.run = function (nativeMethodName, params) {
            var _this$generateRequest = _this.generateRequestObj(nativeMethodName, params),
                uri = _this$generateRequest.uri,
                port = _this$generateRequest.port;

            console.log('%c >> request:' + port, 'color:blue', uri);
            return new Promise(function (resolve) {
              _this.pool[port] = resolve;

              if (_this.platform === 'android') {
                //通过prompt将消息传递给android；
                window.prompt(uri, '');
              } else if (_this.platform === 'ios') {
                _this.setupWKWebViewJavascriptBridge(function (bridge) {
                  bridge.callHandler('handleIOSJsBridge', {
                    url: uri
                  }, function (response) {
                    // IOS  端的回调函数
                    console.log('IOS back data: ', response);

                    var port = response.port,
                        res = _objectWithoutProperties(response, ["port"]);

                    _this.onFinish(port, res);
                  });
                });
              } else {
                throw new Error(JSON.stringify(_this.platform));
              }
            })["catch"](function (e) {
              console.error(e);
              console.error("jsbridge method fail: ".concat(JSON.stringify({
                uri: uri,
                port: port
              })));
              throw new Error("jsbridge method fail: ".concat(JSON.stringify({
                uri: uri,
                port: port
              })));
            });
          };

          this.setupWKWebViewJavascriptBridge = function (callback) {
            if (window.WKWebViewJavascriptBridge) {
              // eslint-disable-next-line
              return callback(window.WKWebViewJavascriptBridge);
            }

            if (window.WKWVJBCallbacks) {
              return window.WKWVJBCallbacks.push(callback);
            }

            window.WKWVJBCallbacks = [callback];
            window.webkit.messageHandlers.iOS_Native_InjectJavascript.postMessage(null);
          };

          this.onFinish = function (port, res) {
            console.log('%c << response:' + port, 'color:green', res);
            var resolve = _this.pool[port];
            resolve && resolve(res);
            delete _this.pool[port];
          };

          this.request = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(method, url, params) {
              var result;
              return regeneratorRuntime.wrap(function _callee$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.prev = 0;
                      _context2.next = 3;
                      return _this.run(method, {
                        url: url,
                        params: params
                      });

                    case 3:
                      result = _context2.sent;
                      console.log('-------->>>>>', result);

                      if (result.err_code || result.msg) {
                        console.log(result); // this.toast({msg: result.msg})
                        // return false
                      }

                      return _context2.abrupt("return", result);

                    case 9:
                      _context2.prev = 9;
                      _context2.t0 = _context2["catch"](0);
                      console.log('0000000', _context2.t0);

                    case 12:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee, null, [[0, 9]]);
            }));

            return function (_x, _x2, _x3) {
              return _ref.apply(this, arguments);
            };
          }();

          this.closeWebView = function () {
            _this.run('closeWebView');
          };

          this.shareGameOrImage = /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(shareText, imgurl) {
              var result;
              return regeneratorRuntime.wrap(function _callee2$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.prev = 0;
                      _context3.next = 3;
                      return _this.run('shareMediaText', {
                        shareText: shareText,
                        imgUrl: imgurl,
                        is_room: true
                      });

                    case 3:
                      result = _context3.sent;
                      console.log('-------->>>>>', result);

                      if (result.err_code || result.msg) {
                        console.log(result);
                      }

                      return _context3.abrupt("return", result);

                    case 9:
                      _context3.prev = 9;
                      _context3.t0 = _context3["catch"](0);
                      console.log('0000000', _context3.t0);

                    case 12:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee2, null, [[0, 9]]);
            }));

            return function (_x4, _x5) {
              return _ref2.apply(this, arguments);
            };
          }();

          this.getUserInfo = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var result;
            return regeneratorRuntime.wrap(function _callee3$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return _this.run('getUserInfo');

                  case 2:
                    result = _context4.sent;
                    console.log('-------->>>>>getUserInfo', result);

                    if (result.err_code || result.msg) {
                      console.log(result);
                    }

                    return _context4.abrupt("return", result);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee3);
          }));
          this.getRoomInfo = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var result;
            return regeneratorRuntime.wrap(function _callee4$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return _this.run('getRoomInfo');

                  case 2:
                    result = _context5.sent;
                    console.log('-------->>>>>getRoomInfo', result);

                    if (result.err_code || result.msg) {
                      console.log(result);
                    }

                    return _context5.abrupt("return", result);

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee4);
          }));

          this.showEmoji = function (pos, size, svga) {
            _this.run('playSvga', {
              x: pos[0],
              y: pos[1],
              w: size[0],
              h: size[1],
              url: svga
            });
          };

          this.setEngineSwitch = function (flag) {
            console.log('setEngineSwitch:' + flag);
            (_crd && MKSound === void 0 ? (_reportPossibleCrUseOfMKSound({
              error: Error()
            }), MKSound) : MKSound).audioEngineOn = flag;
            (_crd && MKSound === void 0 ? (_reportPossibleCrUseOfMKSound({
              error: Error()
            }), MKSound) : MKSound).updateMusic();
          };

          this.showPlayerInfo = function (playerId) {
            /*
            openProfile
            {
            "user_id","242424",       //用户id;
            "where", "",              //log；
            "in_room",true/false      //是否是在聊天室内；
            }
            */
            console.log('发送显示用户：' + playerId);

            _this.run('openProfile', {
              userId: playerId,
              where: 'Bull Fight',
              in_room: true
            });
          };

          this.renderTextureShare = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var wid, heig, result;
            return regeneratorRuntime.wrap(function _callee5$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.prev = 0;
                    wid = Math.floor(document.body.clientWidth) - 2;
                    heig = Math.floor(document.body.clientHeight) - 2;
                    _context6.next = 5;
                    return _this.run('takeScreenShot', {
                      image_coordinate: {
                        x: 0,
                        y: 0,
                        w: wid,
                        h: heig,
                        r: 0
                      }
                    });

                  case 5:
                    result = _context6.sent;
                    console.log('-------->>>>>', result);

                    if (result.err_code || result.msg) {
                      console.log(result);
                    }

                    return _context6.abrupt("return", result);

                  case 11:
                    _context6.prev = 11;
                    _context6.t0 = _context6["catch"](0);
                    console.log('0000000', _context6.t0);

                  case 14:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee5, null, [[0, 11]]);
          }));

          this.toast = function () {
            var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var defaultOpt = {
              msg: '弹出Toast',
              "long": true
            };
            return _this.run('toast', Object.assign(defaultOpt, opt));
          };

          this.openDeepLink = function (link) {
            _this.run('openDeepLink', {
              link: link
            });
          };

          this.sendEvent = function (sendObj) {
            _this.run('sendEvent', {
              eventName: sendObj.eventName,
              eventParams: {
                type: sendObj.type,
                from: sendObj.from,
                result: sendObj.result,
                way: sendObj.way
              }
            });
          };

          this.onAndroidStop = function () {
            (_crd && MKSound === void 0 ? (_reportPossibleCrUseOfMKSound({
              error: Error()
            }), MKSound) : MKSound).audioIsOn = (_crd && MKSound === void 0 ? (_reportPossibleCrUseOfMKSound({
              error: Error()
            }), MKSound) : MKSound).audioEngineOn;
            (_crd && MKSound === void 0 ? (_reportPossibleCrUseOfMKSound({
              error: Error()
            }), MKSound) : MKSound).audioEngineOn = false;
            (_crd && MKSound === void 0 ? (_reportPossibleCrUseOfMKSound({
              error: Error()
            }), MKSound) : MKSound).updateMusic();
            console.log("webview onAndroidStop: app \u8FDB\u5165\u540E\u53F0");
            (_crd && MKEventDispatch === void 0 ? (_reportPossibleCrUseOfMKEventDispatch({
              error: Error()
            }), MKEventDispatch) : MKEventDispatch).I.emit('onAndroidStop');
          };

          this.onAndroidResume = function () {
            if ((_crd && MKSound === void 0 ? (_reportPossibleCrUseOfMKSound({
              error: Error()
            }), MKSound) : MKSound).audioIsOn) {
              (_crd && MKSound === void 0 ? (_reportPossibleCrUseOfMKSound({
                error: Error()
              }), MKSound) : MKSound).audioEngineOn = true;
              (_crd && MKSound === void 0 ? (_reportPossibleCrUseOfMKSound({
                error: Error()
              }), MKSound) : MKSound).updateMusic();
            }

            console.log("webview resume: app \u56DE\u5230\u524D\u53F0");
            (_crd && MKEventDispatch === void 0 ? (_reportPossibleCrUseOfMKEventDispatch({
              error: Error()
            }), MKEventDispatch) : MKEventDispatch).I.emit('onAndroidResume');
          };

          this.onAndroidReload = function () {
            // window.location.reload();
            console.log("webview onAndroidReload");
          };

          this.onAndroidGoBack = function () {
            if (_this.gameIsStart) {
              _this.run('backEnsure');

              var hasAudience = androidBackEvent.broadcast();
              console.log('androidBackEvent.broadcast: ', !hasAudience);

              if (!hasAudience) {
                console.log('onAndroidGoBack  onAndroidGoBack  onAndroidGoBack');
                (_crd && MKEventDispatch === void 0 ? (_reportPossibleCrUseOfMKEventDispatch({
                  error: Error()
                }), MKEventDispatch) : MKEventDispatch).I.emit('androidGoback');
              }
            } //  MKEventDispatch.I.emit('androidGoback');

          };

          this.onSocketReceive = function (data) {
            // console.log('收到服务器下发消息-----------：');
            // console.log(data);
            //将消息发送给消息管理类;
            // setTimeout(()=>{
            (_crd && MKMessageManager === void 0 ? (_reportPossibleCrUseOfMKMessageManager({
              error: Error()
            }), MKMessageManager) : MKMessageManager).emitSocketMessage(data); // },300);
          };

          this.sendAutoJoinEvent = function (sendObj) {
            console.log('sendObj.eventName:' + sendObj.eventName);

            _this.run('sendEvent', {
              eventName: sendObj.eventName,
              eventParams: {
                type: sendObj.type,
                source: sendObj.source,
                is_match_auto: sendObj.is_match_auto,
                status: sendObj.status,
                messageType: sendObj.messageType,
                time: sendObj.time,
                name: sendObj.name,
                result: sendObj.result
              }
            });
          };

          this.ALICE = alice;
          this.platform = platform;
          this.PROTOCOL = 'NDB';
          this.pool = {};
          this.sequenceId = 0;

          this.report = function () {
            // if (process.env.NODE_ENV == 'production') {
            if (!window.gtag) return;
            window.gtag.apply(null, arguments);
            console.log('=======report=======');
            var galog = [];
            var len = arguments.length;

            for (var i = 0; i < len; i++) {
              galog.push(arguments[i]);
            }

            console.log(JSON.stringify(galog));
            console.log('=======report======='); // }
          };

          this.sleep = function (ms) {
            return new Promise(function (resolve, reject) {
              setTimeout(resolve, ms, 'done');
            });
          };

          if (this.platform == 'ios') {
            this.setupWKWebViewJavascriptBridge(function (bridge) {
              bridge.registerHandler('onSocketReceive', _this.onSocketReceive);
              bridge.registerHandler('onAndroidGoBack', _this.onAndroidGoBack);
              bridge.registerHandler('onAndroidReload', _this.onAndroidReload);
              bridge.registerHandler('onAndroidResume', _this.onAndroidResume);
              bridge.registerHandler('onAndroidStop', _this.onAndroidStop);
            });
          }
        }
        /**
         * 生成android解析协议
         */


        _createClass(NdogJsBridge, [{
          key: "socketSend",

          /*****************************************************end********************************************************/

          /***********************************************游戏发送数据*******************************************************/

          /*
            * @param MessageType 消息号
            * @parm sendData 发送的数据(有可能没有参数)
          */
          value: function socketSend(messageType, sendData) {
            console.log('socketSend', messageType, sendData);
            window.prompt(messageType, '');
          }
          /***********************************************end*****************************************************/

        }]);

        return NdogJsBridge;
      }();

      NDB = function () {
        var platform = 'unknown';
        var alice = 'unknown';

        try {
          // eslint-disable-next-line
          if (window.AndroidJsConnector) {
            platform = 'android'; // eslint-disable-next-line

            alice = window.AndroidJsConnector.getInjectName() || platform; // eslint-disable-next-line
          } else if (window.webkit && window.webkit.messageHandlers) {
            platform = 'ios';
            alice = 'messageHandlers';
          } // eslint-disable-next-line


          var webview = new NdogJsBridge(alice, platform);
          window.NDB = webview;
          window.webview = true;
          console.log('now is in webview');
          return webview;
        } catch (e) {
          console.log(e);

          var _webview = new NdogJsBridge(alice, platform);

          window.NDB = _webview;
          window.webview = false;
          console.log('now is not in webview');
          return _webview;
        }
      }();

      _export("default", NDB);

      _export("androidBackEvent", androidBackEvent = new AndroidBackEvent());

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvOEJhbGwvYXNzZXRzL1NjcmlwdHMvQ29tbW9uL1V0aWxzL05EQlRTLnRzIl0sIm5hbWVzIjpbIk1LTWVzc2FnZU1hbmFnZXIiLCJNS1NvdW5kIiwiTUtFdmVudERpc3BhdGNoIiwiQW5kcm9pZEJhY2tFdmVudCIsImxpc3QiLCJhdWRpZW5jZSIsInB1c2giLCJmaWx0ZXIiLCJmbiIsInRvU3RyaW5nIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJsZW5ndGgiLCJOZG9nSnNCcmlkZ2UiLCJhbGljZSIsInBsYXRmb3JtIiwiZ2FtZUlzU3RhcnQiLCJnZW5lcmF0ZVJlcXVlc3RPYmoiLCJtZXRob2QiLCJwYXJhbXMiLCJwb3J0Iiwic2VxdWVuY2VJZCIsInVyaSIsIlBST1RPQ09MIiwiQUxJQ0UiLCJKU09OIiwic3RyaW5naWZ5IiwicnVuIiwibmF0aXZlTWV0aG9kTmFtZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicG9vbCIsIndpbmRvdyIsInByb21wdCIsInNldHVwV0tXZWJWaWV3SmF2YXNjcmlwdEJyaWRnZSIsImJyaWRnZSIsImNhbGxIYW5kbGVyIiwidXJsIiwicmVzcG9uc2UiLCJyZXMiLCJvbkZpbmlzaCIsIkVycm9yIiwiZSIsImVycm9yIiwiY2FsbGJhY2siLCJXS1dlYlZpZXdKYXZhc2NyaXB0QnJpZGdlIiwiV0tXVkpCQ2FsbGJhY2tzIiwid2Via2l0IiwibWVzc2FnZUhhbmRsZXJzIiwiaU9TX05hdGl2ZV9JbmplY3RKYXZhc2NyaXB0IiwicG9zdE1lc3NhZ2UiLCJyZXF1ZXN0IiwicmVzdWx0IiwiZXJyX2NvZGUiLCJtc2ciLCJjbG9zZVdlYlZpZXciLCJzaGFyZUdhbWVPckltYWdlIiwic2hhcmVUZXh0IiwiaW1ndXJsIiwiaW1nVXJsIiwiaXNfcm9vbSIsImdldFVzZXJJbmZvIiwiZ2V0Um9vbUluZm8iLCJzaG93RW1vamkiLCJwb3MiLCJzaXplIiwic3ZnYSIsIngiLCJ5IiwidyIsImgiLCJzZXRFbmdpbmVTd2l0Y2giLCJmbGFnIiwiYXVkaW9FbmdpbmVPbiIsInVwZGF0ZU11c2ljIiwic2hvd1BsYXllckluZm8iLCJwbGF5ZXJJZCIsInVzZXJJZCIsIndoZXJlIiwiaW5fcm9vbSIsInJlbmRlclRleHR1cmVTaGFyZSIsIndpZCIsIk1hdGgiLCJmbG9vciIsImRvY3VtZW50IiwiYm9keSIsImNsaWVudFdpZHRoIiwiaGVpZyIsImNsaWVudEhlaWdodCIsImltYWdlX2Nvb3JkaW5hdGUiLCJyIiwidG9hc3QiLCJvcHQiLCJkZWZhdWx0T3B0IiwiT2JqZWN0IiwiYXNzaWduIiwib3BlbkRlZXBMaW5rIiwibGluayIsInNlbmRFdmVudCIsInNlbmRPYmoiLCJldmVudE5hbWUiLCJldmVudFBhcmFtcyIsInR5cGUiLCJmcm9tIiwid2F5Iiwib25BbmRyb2lkU3RvcCIsImF1ZGlvSXNPbiIsIkkiLCJlbWl0Iiwib25BbmRyb2lkUmVzdW1lIiwib25BbmRyb2lkUmVsb2FkIiwib25BbmRyb2lkR29CYWNrIiwiaGFzQXVkaWVuY2UiLCJhbmRyb2lkQmFja0V2ZW50IiwiYnJvYWRjYXN0Iiwib25Tb2NrZXRSZWNlaXZlIiwiZGF0YSIsImVtaXRTb2NrZXRNZXNzYWdlIiwic2VuZEF1dG9Kb2luRXZlbnQiLCJzb3VyY2UiLCJpc19tYXRjaF9hdXRvIiwic3RhdHVzIiwibWVzc2FnZVR5cGUiLCJ0aW1lIiwibmFtZSIsInJlcG9ydCIsImd0YWciLCJhcHBseSIsImFyZ3VtZW50cyIsImdhbG9nIiwibGVuIiwiaSIsInNsZWVwIiwibXMiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwicmVnaXN0ZXJIYW5kbGVyIiwic2VuZERhdGEiLCJOREIiLCJBbmRyb2lkSnNDb25uZWN0b3IiLCJnZXRJbmplY3ROYW1lIiwid2VidmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtET0EsTUFBQUEsZ0I7O0FBQ0FDLE1BQUFBLE87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QUEsTUFBTSxDQUFDNkcsT0FBUCxHQUFpQixJQUFqQjtBQUNBcEksVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDQSxpQkFBT21JLE9BQVA7QUFDRCxTQWpCRCxDQWlCRSxPQUFPbkcsQ0FBUCxFQUFVO0FBQ1ZqQyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWdDLENBQVo7O0FBQ0EsY0FBTW1HLFFBQU8sR0FBRyxJQUFJaEksWUFBSixDQUFpQkMsS0FBakIsRUFBd0JDLFFBQXhCLENBQWhCOztBQUNBaUIsVUFBQUEsTUFBTSxDQUFDMEcsR0FBUCxHQUFhRyxRQUFiO0FBQ0E3RyxVQUFBQSxNQUFNLENBQUM2RyxPQUFQLEdBQWlCLEtBQWpCO0FBQ0FwSSxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBLGlCQUFPbUksUUFBUDtBQUNEO0FBRUYsT0E3QlcsRTs7eUJBK0JHSCxHOztrQ0FFRnpCLGdCLEdBQW1CLElBQUkvRyxnQkFBSixFIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkpTQnJpZGdl5Yqf6IO95Y+C5pWwXG7lh73mlbDlkI0gIHwg5Y+C5pWwIHwg5Ye95pWw5o+P6L+wXG4tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLXwgLS0tLS0tLS0tLS0tLVxub3BlblByb2ZpbGUgIHwgdXNlcklkIHwg5omT5byA55So5oi36K+m5oOF6aG1XG5vcGVuVGFnRGV0YWlsICB8IHRhZ0lk77yMdGFnVGl0bGV8IOaJk+W8gHRhZ+ivpuaDhemhtVxub3BlbkZlZWQgIHwgZmVlZElkfCDmiZPlvIBmZWVkXG5vcGVuQ29tbWVudCAgfCBmZWVkSWR8IOaJk+W8gGZlZWTor4TorrrpobVcbnNob3dCYW5uZXIgIHwgc2xpZGUg5aSa5byg6Ziy5q2i6Lef6ZqP5ruR5YqoIHwg5pi+56S6YmFubmVyIChhbGFza2Hml6ApXG5oaWRlQmFubmVyICB8IHwg6ZqQ6JePYmFubmVyIChhbGFza2Hml6ApXG5zZW5kRXZlbnQgIHwgSlNPTk9iamVjdCBwYXJhbXN8IOWPkemAgeS6i+S7tlxuc2hhcmVBcGsgIHwgYXBrTmFtZXwg5YiG5LqrYXBrXG5zaGFyZVRleHQgIHwgc2hhcmVUZXh0fCDliIbkuqvmloflrZdcbnNoYXJlTWVkaWFUZXh0ICB8IHNoYXJlVGV4dCxpbWdVcmx8IOWIhuS6q+aWh+Wtl+WSjOWbvueJh1xuc2hhcmVGaWxlICB8IHNoYXJlVGV4dCwgZmlsZVBhdGgo5pys5Zyw5paH5Lu26Lev5b6E77yM5LiN6ZyA6KaB5YqgZmlsZTovLykgfCDliIbkuqvmlofku7Zcbm1lZGlhVG9Mb2NhbCAgfCBpbWFnZVVybCx2aWRlb1VybHwg5Zu+54mHL+inhumikSDnvZHnu5zlnLDlnYDovazmnKzlnLDlnLDlnYBcbmJhc2U2NFRvTG9jYWwgIHwgYmFzZTY0VXJsfCDlm77niYdCYXNlNjTovazmnKzlnLDlnLDlnYBcbnRha2VTY3JlZW5TaG90ICB8IOWQjG5ld3NEb2d8IOaIquWbviDvvIjlj5HpgIHlsY/luZXlnZDmoIflkozlrr3pq5jvvIzov5Tlm57lm77niYfmnKzlnLDlnLDlnYDvvIlcbmdldFVzZXJJbmZvICB8IGF2YXRhciwgdXNlck5hbWUgfCDnlKjmiLflkI3vvIzlpLTlg49cbmdldEdyb3VwSWQgIHwgdXNlcklkfCDnlKjmiLdJRO+8iE9iamVjdElk77yMc2VxX2lk77yJIChhbGFza2Hml6ApXG5nZXRVc2VyR3JvdXAgIHwgZ3JvdXAgfCDnlKjmiLdHcm91cCAoYWxhc2th5pegKVxuZ2V0VXNlckxhbmcgIHwgbGFuZ3wg6K+t6KiAXG5vcGVuV2ViVmlldyAgfCB1cmx8IOaJk+W8gOS4gOS4quaWsOeahOWFqOWxj1dlYlZpZXdcbmNsb3NlV2ViVmlldyAgfCB8IOWFs+mXreW9k+WJjVdlYlZpZXdcbmJhY2tQcmVzc2VkICB8IGZlZWRJZHwg5a6i5oi356uv5Li75Yqo5Y+R6YCB5ZCO6YCA5LqL5Lu2XG5jbGlja1Bvc3RCdG4gIHwgfCDngrnlh7vlj5HluIPmjInpkq4sdG9nb+S4k+aciVxuY2xpY2tQb3N0VGV4dCAgfCB8IOeCueWHu+WPkeW4g+aWh+Wtl+aMiemSrix0b2dv5LiT5pyJXG5jbGlja1Bvc3RJbWFnZSAgfCB8IOeCueWHu+WPkeW4g+WbvueJh+aMiemSrix0b2dv5LiT5pyJXG5jbGlja1Bvc3RQaG90byAgfCB8IOeCueWHu+WPkeW4g+aLjeeFp+aMiemSrix0b2dv5LiT5pyJXG5jbGlja1Bvc3RBdWRpbyB8IHwg54K55Ye75Y+R5biD6K+t6Z+z5oyJ6ZKuLHRvZ2/kuJPmnIlcblxuLz09PT1hbGFza2E9PT09L1xuY2xpY2tQb3N0U3RhdHVzTWFrZXIgfCB8IOeCueWHu+WPkeW4g+WItuS9nOW9sembhlxuY2xpY2tQb3N0VmlkZW8gfCB8IOeCueWHu+WPkeW4g+inhumikVxub3BlblRvcGljIHwgdG9waWNJZCB8IOaJk+W8gOS4u+mimOa0u+WKqOmhtemdolxuXG4vPT09PW5ld3Nkb2c9PT09L1xub3BlbkZlZWQgIHwgZmVlZElkLHR5cGUsbGFuZyB8IOi3s+i9rOWIsOafkOS4qmFydGljbGVcbm9wZW5DYXRlZ29yeSB8IGNhdGVfa2V5LHZpZGVvIHwg6Lez6L2s5Yiw5p+Q5Liq5YiG57G7XG5vcGVuVG9waWMgfCBmZWVkSWQsbGFuZyB8IOi3s+i9rOWIsOafkOS4qnRvcGljXG5vcGVuRGVlcExpbmsgfHtsaW5rOiduZXdzZG9nOi8vZGV0YWlsP2lkPTVhMTY1OTQ3MTIzMTNhMDBhMzQxMDlkMSZsYW5nPWVuJnR5cGU9YXJ0aWNsZSd9fOi3s+i9rOWIsOafkOS4qkRFRVBMSU5LXG5vcGVuSHR0cExpbmsgfHtsaW5rOiAnaHR0cDovL3h4eCd9fOS9v+eUqE5ld3NEb2fmiZPlvIDmn5DkuKrmlK/mjIHnmoRIVFRQ6ZO+5o6lXG5cbi89PT09d2FuZ2NhaT09PT0vXG5lbnRlckNoYXRSb29tIHwgcm9vbUlkLHdoZXJlIHwg5LuOd2hlcmXov5vlhaVyb29tSWTogYrlpKnlrqQsXG5vcGVuRGVlcExpbmsgfHtsaW5rOicnfXzot7PovazliLDmn5DkuKpERUVQTElOS1xub3BlblRhYiB8IHRhYiB8XG5cblxuKi9cbmltcG9ydCBNS01lc3NhZ2VNYW5hZ2VyIGZyb20gJy4uL1V0aWxzL01LTWVzc2FnZU1hbmFnZXInO1xuaW1wb3J0IE1LU291bmQgZnJvbSAnLi4vVXRpbHMvTUtTb3VuZCc7XG5pbXBvcnQgTUtFdmVudERpc3BhdGNoIGZyb20gJy4vTUtFdmVudERpc3BhdGNoJztcblxuaW50ZXJmYWNlIElBY3Rpb24ge1xuICBtZXRob2Q6IHN0cmluZztcbiAgcGFyYW1zPzoge1xuICAgIFtwOiBzdHJpbmddOiBhbnk7XG4gIH07XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgZ3RhZz86IChlOiBhbnkpID0+IHZvaWQ7XG4gICAgV0tXVkpCQ2FsbGJhY2tzPzogYW55W107XG4gICAgV0tXZWJWaWV3SmF2YXNjcmlwdEJyaWRnZT86IGFueTtcbiAgICB3ZWJraXQ/OiBhbnk7XG4gICAgTkRCPzogYW55O1xuICAgIHdlYnZpZXc/OiBhbnk7XG4gICAgQW5kcm9pZEpzQ29ubmVjdG9yPzogYW55O1xuICB9XG59XG5cbmNsYXNzIEFuZHJvaWRCYWNrRXZlbnQge1xuICBwcml2YXRlIGxpc3Q6IGFueVtdO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpc3QgPSBbXTtcbiAgfVxuICBhZGRFdmVudExpc3RlbmVyKGF1ZGllbmNlKSB7XG4gICAgdGhpcy5saXN0LnB1c2goYXVkaWVuY2UpO1xuICB9XG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIoYXVkaWVuY2UpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhhdWRpZW5jZSk7XG4gICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5saXN0KSk7XG4gICAgLy8gdGhpcy5saXN0LmZvckVhY2goZm49PntcbiAgICAvLyAgIGNvbnNvbGUubG9nKGZuLGF1ZGllbmNlLGZuLnRvU3RyaW5nKCkgPT0gYXVkaWVuY2UudG9TdHJpbmcoKSk7XG4gICAgLy8gfSlcbiAgICB0aGlzLmxpc3QgPSB0aGlzLmxpc3QuZmlsdGVyKGZuID0+IGZuLnRvU3RyaW5nKCkgIT0gYXVkaWVuY2UudG9TdHJpbmcoKSk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5saXN0KTtcbiAgfVxuICBicm9hZGNhc3QoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5saXN0KTtcbiAgICB0aGlzLmxpc3QuZm9yRWFjaChmbiA9PiB7XG4gICAgICBmbiAmJiBmbigpO1xuICAgIH0pO1xuICAgIHJldHVybiAhIXRoaXMubGlzdC5sZW5ndGg7XG4gIH1cbn1cblxuY2xhc3MgTmRvZ0pzQnJpZGdlIHtcbiAgQUxJQ0U6IHN0cmluZztcbiAgcGxhdGZvcm06IHN0cmluZztcbiAgUFJPVE9DT0w6IHN0cmluZztcbiAgcG9vbDogYW55O1xuICBzZXF1ZW5jZUlkOiBudW1iZXI7XG4gIGdhbWVJc1N0YXJ0OiBib29sZWFuID0gZmFsc2U7XG4gIHJlcG9ydDogKCkgPT4gdm9pZDtcbiAgc2xlZXA6IChtczogbnVtYmVyKSA9PiBQcm9taXNlPGFueT47XG5cbiAgY29uc3RydWN0b3IoYWxpY2UsIHBsYXRmb3JtKSB7XG4gICAgdGhpcy5BTElDRSA9IGFsaWNlO1xuICAgIHRoaXMucGxhdGZvcm0gPSBwbGF0Zm9ybTtcbiAgICB0aGlzLlBST1RPQ09MID0gJ05EQic7XG4gICAgdGhpcy5wb29sID0ge307XG4gICAgdGhpcy5zZXF1ZW5jZUlkID0gMDtcbiAgICB0aGlzLnJlcG9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghd2luZG93Lmd0YWcpIHJldHVybjtcbiAgICAgIHdpbmRvdy5ndGFnLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICBjb25zb2xlLmxvZygnPT09PT09PXJlcG9ydD09PT09PT0nKTtcbiAgICAgIGNvbnN0IGdhbG9nID0gW107XG4gICAgICBjb25zdCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBnYWxvZy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShnYWxvZykpO1xuICAgICAgY29uc29sZS5sb2coJz09PT09PT1yZXBvcnQ9PT09PT09Jyk7XG4gICAgICAvLyB9XG4gICAgfTtcbiAgICB0aGlzLnNsZWVwID0gbXMgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBtcywgJ2RvbmUnKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5wbGF0Zm9ybSA9PSAnaW9zJykge1xuICAgICAgdGhpcy5zZXR1cFdLV2ViVmlld0phdmFzY3JpcHRCcmlkZ2UoKGJyaWRnZSkgPT4ge1xuICAgICAgICBicmlkZ2UucmVnaXN0ZXJIYW5kbGVyKCdvblNvY2tldFJlY2VpdmUnLCB0aGlzLm9uU29ja2V0UmVjZWl2ZSk7XG4gICAgICAgIGJyaWRnZS5yZWdpc3RlckhhbmRsZXIoJ29uQW5kcm9pZEdvQmFjaycsIHRoaXMub25BbmRyb2lkR29CYWNrKTtcbiAgICAgICAgYnJpZGdlLnJlZ2lzdGVySGFuZGxlcignb25BbmRyb2lkUmVsb2FkJywgdGhpcy5vbkFuZHJvaWRSZWxvYWQpO1xuICAgICAgICBicmlkZ2UucmVnaXN0ZXJIYW5kbGVyKCdvbkFuZHJvaWRSZXN1bWUnLCB0aGlzLm9uQW5kcm9pZFJlc3VtZSk7XG4gICAgICAgIGJyaWRnZS5yZWdpc3RlckhhbmRsZXIoJ29uQW5kcm9pZFN0b3AnLCB0aGlzLm9uQW5kcm9pZFN0b3ApO1xuXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIOeUn+aIkGFuZHJvaWTop6PmnpDljY/orq5cbiAgICovXG4gIGdlbmVyYXRlUmVxdWVzdE9iaiA9IChtZXRob2QsIHBhcmFtcyA9IHt9KSA9PiB7XG4gICAgY29uc3QgcG9ydCA9IHRoaXMuc2VxdWVuY2VJZCsrO1xuICAgIHJldHVybiB7XG4gICAgICB1cmk6IGAke3RoaXMuUFJPVE9DT0x9Oi8vJHt0aGlzLkFMSUNFfToke3BvcnR9LyR7bWV0aG9kfT8ke0pTT04uc3RyaW5naWZ5KHBhcmFtcyl9YCxcbiAgICAgIHBvcnQsXG4gICAgfTtcbiAgfTtcbiAgLyoqXG4gICAqIOmAmui/h3dpbmRvdy5wcm9tcHTlsIblj4LmlbDkvKDpgJLnu5nlrqLmiLfnq68s5bm2562J5b6F5Zue6LCDXG4gICAqIEBuYXRpdmVNZXRob2ROYW1lIHtTdHJpbmd9IOWuouaIt+err+WTjeW6lOeahOWHveaVsOWQjSjmj5DliY3kurrlt6XnuqblrpopXG4gICAqIEBwYXJhbXMge09iamVjdH0g6ZyA6KaB5Lyg6YCS55qE5Y+C5pWwXG4gICAqL1xuICBydW46IChtOiBzdHJpbmcsIHA/OiBvYmplY3QpID0+IFByb21pc2U8eyBlcnJfY29kZT86IHN0cmluZzsgbXNnPzogc3RyaW5nIH0+ID0gKFxuICAgIG5hdGl2ZU1ldGhvZE5hbWUsXG4gICAgcGFyYW1zLFxuICApID0+IHtcbiAgICBjb25zdCB7IHVyaSwgcG9ydCB9ID0gdGhpcy5nZW5lcmF0ZVJlcXVlc3RPYmoobmF0aXZlTWV0aG9kTmFtZSwgcGFyYW1zKTtcbiAgICBjb25zb2xlLmxvZygnJWMgPj4gcmVxdWVzdDonICsgcG9ydCwgJ2NvbG9yOmJsdWUnLCB1cmkpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMucG9vbFtwb3J0XSA9IHJlc29sdmU7XG4gICAgICBpZiAodGhpcy5wbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnKSB7XG4gICAgICAgIC8v6YCa6L+HcHJvbXB05bCG5raI5oGv5Lyg6YCS57uZYW5kcm9pZO+8m1xuICAgICAgICB3aW5kb3cucHJvbXB0KHVyaSwgJycpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYXRmb3JtID09PSAnaW9zJykge1xuICAgICAgICB0aGlzLnNldHVwV0tXZWJWaWV3SmF2YXNjcmlwdEJyaWRnZShicmlkZ2UgPT4ge1xuICAgICAgICAgIGJyaWRnZS5jYWxsSGFuZGxlcignaGFuZGxlSU9TSnNCcmlkZ2UnLCB7IHVybDogdXJpIH0sIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIC8vIElPUyAg56uv55qE5Zue6LCD5Ye95pWwXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSU9TIGJhY2sgZGF0YTogJywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgY29uc3QgeyBwb3J0LCAuLi5yZXMgfSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgdGhpcy5vbkZpbmlzaChwb3J0LCByZXMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihKU09OLnN0cmluZ2lmeSh0aGlzLnBsYXRmb3JtKSk7XG4gICAgICB9XG4gICAgfSkuY2F0Y2goZSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgY29uc29sZS5lcnJvcihganNicmlkZ2UgbWV0aG9kIGZhaWw6ICR7SlNPTi5zdHJpbmdpZnkoeyB1cmksIHBvcnQgfSl9YCk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYGpzYnJpZGdlIG1ldGhvZCBmYWlsOiAke0pTT04uc3RyaW5naWZ5KHsgdXJpLCBwb3J0IH0pfWApO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBqc2JyaWRnZSDosIPnlKhpb3NcbiAgICogQG1lbWJlcm9mIE5kb2dKc0JyaWRnZVxuICAgKi9cbiAgc2V0dXBXS1dlYlZpZXdKYXZhc2NyaXB0QnJpZGdlID0gY2FsbGJhY2sgPT4ge1xuICAgIGlmICh3aW5kb3cuV0tXZWJWaWV3SmF2YXNjcmlwdEJyaWRnZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICByZXR1cm4gY2FsbGJhY2sod2luZG93LldLV2ViVmlld0phdmFzY3JpcHRCcmlkZ2UpO1xuICAgIH1cbiAgICBpZiAod2luZG93LldLV1ZKQkNhbGxiYWNrcykge1xuICAgICAgcmV0dXJuIHdpbmRvdy5XS1dWSkJDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgfVxuICAgIHdpbmRvdy5XS1dWSkJDYWxsYmFja3MgPSBbY2FsbGJhY2tdO1xuICAgIHdpbmRvdy53ZWJraXQubWVzc2FnZUhhbmRsZXJzLmlPU19OYXRpdmVfSW5qZWN0SmF2YXNjcmlwdC5wb3N0TWVzc2FnZShudWxsKTtcbiAgfTtcbiAgLyoqXG4gICAqIOS+m+WuouaIt+err+Wbnuiwg1xuICAgKiBAcG9ydCB7TnVtYmVyfSDlvZPliY3lm57osIPmsaDkuK3nmoRrZXksIOWvueW6lOS4gOS4quWbnuiwg+WHveaVsFxuICAgKiBAcmVzIHtPYmplY3R9IOWuouaIt+err+eahOWkhOeQhue7k+aenCwg5LiA6Iis5pivanNvbuagvOW8j1xuICAgKi9cbiAgb25GaW5pc2ggPSAocG9ydCwgcmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2coJyVjIDw8IHJlc3BvbnNlOicgKyBwb3J0LCAnY29sb3I6Z3JlZW4nLCByZXMpO1xuICAgIGNvbnN0IHJlc29sdmUgPSB0aGlzLnBvb2xbcG9ydF07XG4gICAgcmVzb2x2ZSAmJiByZXNvbHZlKHJlcyk7XG4gICAgZGVsZXRlIHRoaXMucG9vbFtwb3J0XTtcbiAgfTtcbiAgLyoqXG4gICAqIOWPkemAgee9kee7nOivt+axglxuICAgKiBAbWV0aG9kIHtTdHJpbmd9IGdldCxwb3N0LHB1dCxkZWxcbiAgICogQHVybCB7U3RyaW5nfSDor7fmsYJ1cmxzZXRFbmdpbmVTd2l0Y2gxXG4gICAqIEBwYXJhbXMge09iamVjdH0g5Y+R6YCB5Y+C5pWwXG4gICAqL1xuICByZXF1ZXN0ID0gYXN5bmMgKG1ldGhvZCwgdXJsLCBwYXJhbXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5ydW4obWV0aG9kLCB7IHVybCwgcGFyYW1zIH0pO1xuICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tPj4+Pj4nLCByZXN1bHQpO1xuICAgICAgaWYgKHJlc3VsdC5lcnJfY29kZSB8fCByZXN1bHQubXNnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIC8vIHRoaXMudG9hc3Qoe21zZzogcmVzdWx0Lm1zZ30pXG4gICAgICAgIC8vIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZygnMDAwMDAwMCcsIGUpO1xuICAgIH1cbiAgfTtcblxuICBjbG9zZVdlYlZpZXcgPSAoKSA9PiB7XG4gICAgdGhpcy5ydW4oJ2Nsb3NlV2ViVmlldycpO1xuICB9XG5cbiAgLy/liIbkuqvlm77niYc7XG4gIHNoYXJlR2FtZU9ySW1hZ2UgPSBhc3luYyAoc2hhcmVUZXh0LCBpbWd1cmwpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5ydW4oJ3NoYXJlTWVkaWFUZXh0JywgeyBzaGFyZVRleHQ6IHNoYXJlVGV4dCwgaW1nVXJsOiBpbWd1cmwsIGlzX3Jvb206IHRydWUgfSk7XG4gICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0+Pj4+PicsIHJlc3VsdCk7XG4gICAgICBpZiAocmVzdWx0LmVycl9jb2RlIHx8IHJlc3VsdC5tc2cpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coJzAwMDAwMDAnLCBlKTtcbiAgICB9XG4gIH1cblxuXG4gIGdldFVzZXJJbmZvID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucnVuKCdnZXRVc2VySW5mbycpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLT4+Pj4+Z2V0VXNlckluZm8nLCByZXN1bHQpO1xuICAgIGlmIChyZXN1bHQuZXJyX2NvZGUgfHwgcmVzdWx0Lm1zZykge1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG5cbiAgZ2V0Um9vbUluZm8gPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5ydW4oJ2dldFJvb21JbmZvJyk7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tPj4+Pj5nZXRSb29tSW5mbycsIHJlc3VsdCk7XG4gICAgaWYgKHJlc3VsdC5lcnJfY29kZSB8fCByZXN1bHQubXNnKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy/mmL7npLrooajmg4XvvJtcbiAgc2hvd0Vtb2ppID0gKHBvcywgc2l6ZSwgc3ZnYSkgPT4ge1xuICAgIHRoaXMucnVuKCdwbGF5U3ZnYScsIHsgeDogcG9zWzBdLCB5OiBwb3NbMV0sIHc6IHNpemVbMF0sIGg6IHNpemVbMV0sIHVybDogc3ZnYSB9KTtcbiAgfVxuXG4gIC8v6K6+572u6Z+z5pWI5byA5YWzO1xuICBzZXRFbmdpbmVTd2l0Y2ggPSAoZmxhZykgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdzZXRFbmdpbmVTd2l0Y2g6JyArIGZsYWcpO1xuICAgIE1LU291bmQuYXVkaW9FbmdpbmVPbiA9IGZsYWc7XG4gICAgTUtTb3VuZC51cGRhdGVNdXNpYygpO1xuICB9XG5cbiAgc2hvd1BsYXllckluZm8gPSAocGxheWVySWQpID0+IHtcbiAgICAvKlxuICAgIG9wZW5Qcm9maWxlXG4gICAge1xuICAgIFwidXNlcl9pZFwiLFwiMjQyNDI0XCIsICAgICAgIC8v55So5oi3aWQ7XG4gICAgXCJ3aGVyZVwiLCBcIlwiLCAgICAgICAgICAgICAgLy9sb2fvvJtcbiAgICBcImluX3Jvb21cIix0cnVlL2ZhbHNlICAgICAgLy/mmK/lkKbmmK/lnKjogYrlpKnlrqTlhoXvvJtcbiAgICB9XG4gICAgKi9cbiAgICBjb25zb2xlLmxvZygn5Y+R6YCB5pi+56S655So5oi377yaJyArIHBsYXllcklkKTtcbiAgICB0aGlzLnJ1bignb3BlblByb2ZpbGUnLCB7IHVzZXJJZDogcGxheWVySWQsIHdoZXJlOiAnQnVsbCBGaWdodCcsIGluX3Jvb206IHRydWUgfSk7XG4gIH1cblxuICAvL+aIquWbvuWIhuS6qztcbiAgcmVuZGVyVGV4dHVyZVNoYXJlID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBsZXQgd2lkID0gTWF0aC5mbG9vcihkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoKSAtIDI7XG4gICAgICBsZXQgaGVpZyA9IE1hdGguZmxvb3IoZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpIC0gMjtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucnVuKCd0YWtlU2NyZWVuU2hvdCcsIHsgaW1hZ2VfY29vcmRpbmF0ZTogeyB4OiAwLCB5OiAwLCB3OiB3aWQsIGg6IGhlaWcsIHI6IDAgfSB9KTtcbiAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLT4+Pj4+JywgcmVzdWx0KTtcbiAgICAgIGlmIChyZXN1bHQuZXJyX2NvZGUgfHwgcmVzdWx0Lm1zZykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZygnMDAwMDAwMCcsIGUpO1xuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIOW8ueWHuuWOn+eUn3RvYXN0XG4gICAqL1xuICB0b2FzdCA9IChvcHQgPSB7fSkgPT4ge1xuICAgIGNvbnN0IGRlZmF1bHRPcHQgPSB7XG4gICAgICBtc2c6ICflvLnlh7pUb2FzdCcsXG4gICAgICBsb25nOiB0cnVlLFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMucnVuKCd0b2FzdCcsIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdCwgb3B0KSk7XG4gIH07XG5cbiAgb3BlbkRlZXBMaW5rID0gbGluayA9PiB7XG4gICAgdGhpcy5ydW4oJ29wZW5EZWVwTGluaycsIHsgbGluazogbGluayB9KTtcbiAgfTtcblxuICBzZW5kRXZlbnQgPSBzZW5kT2JqID0+IHtcbiAgICB0aGlzLnJ1bignc2VuZEV2ZW50JywgeyBldmVudE5hbWU6IHNlbmRPYmouZXZlbnROYW1lLCBldmVudFBhcmFtczogeyB0eXBlOiBzZW5kT2JqLnR5cGUsIGZyb206IHNlbmRPYmouZnJvbSwgcmVzdWx0OiBzZW5kT2JqLnJlc3VsdCwgd2F5OiBzZW5kT2JqLndheSB9IH0pO1xuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqQVBQ6LCD55So5ri45oiP5o6l5Y+jKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgLyoqXG4gICAqIGFwcOi/m+WFpeWQjuWPsFxuICAgKi9cbiAgb25BbmRyb2lkU3RvcCA9ICgpID0+IHtcbiAgICBNS1NvdW5kLmF1ZGlvSXNPbiA9IE1LU291bmQuYXVkaW9FbmdpbmVPbjtcbiAgICBNS1NvdW5kLmF1ZGlvRW5naW5lT24gPSBmYWxzZTtcbiAgICBNS1NvdW5kLnVwZGF0ZU11c2ljKCk7XG4gICAgY29uc29sZS5sb2coYHdlYnZpZXcgb25BbmRyb2lkU3RvcDogYXBwIOi/m+WFpeWQjuWPsGApO1xuICAgIE1LRXZlbnREaXNwYXRjaC5JLmVtaXQoJ29uQW5kcm9pZFN0b3AnKTtcbiAgfTtcbiAgLyoqXG4gICAqIGFwcOmHjeaWsOi/m+WFpeWJjeWPsFxuICAgKi9cbiAgb25BbmRyb2lkUmVzdW1lID0gKCkgPT4ge1xuICAgIGlmIChNS1NvdW5kLmF1ZGlvSXNPbikge1xuICAgICAgTUtTb3VuZC5hdWRpb0VuZ2luZU9uID0gdHJ1ZTtcbiAgICAgIE1LU291bmQudXBkYXRlTXVzaWMoKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYHdlYnZpZXcgcmVzdW1lOiBhcHAg5Zue5Yiw5YmN5Y+wYCk7XG4gICAgTUtFdmVudERpc3BhdGNoLkkuZW1pdCgnb25BbmRyb2lkUmVzdW1lJyk7XG4gIH07XG4gIC8qXG4gICAgKiDliLfmlrB3ZWJ2aWV3XG4gICAqL1xuICBvbkFuZHJvaWRSZWxvYWQgPSAoKSA9PiB7XG4gICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIGNvbnNvbGUubG9nKGB3ZWJ2aWV3IG9uQW5kcm9pZFJlbG9hZGApO1xuICB9O1xuXG4gIC8qXG4gICAgICDlk43lupRhbmRyb2lk5Zue6YCA5LqL5Lu2XG4gICAgICAxLiDlpoLlvZPliY3pobXpnaLmnInlvLnnqpcsIOWFiOWFs+W8ueeql1xuICAgICAgMi4g5aaCIGhpc3RvcnkubGVuZ3RoID4gMSwg5YiZ5Zue6YCA5Yiw5LiK5LiA6aG1XG4gICAgICAzLiDlpoLmnpzpgIDml6Dlj6/pgIAsIOWwseebtOaOpeWFs+mXrXdlYnZpZXdcbiAgICAgIOavj+asoeWTjeW6lOmcgOimgee7meWuouaIt+err+mAmuefpSwg5aaC5p6cNTAwbXPlhoXkuI3lm57osIPlrqLmiLfnq68sIOWuouaIt+err+S8muiupOS4uue9kemhteWHuueOsOW8guW4uOaIluiAheaJk+W8gOS6huesrOS4ieaWuee9kemhtSwg5a6i5oi356uv5Lya5YWz6Zet5b2T5YmNd2Vidmlld1xuICAqL1xuICBvbkFuZHJvaWRHb0JhY2sgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZ2FtZUlzU3RhcnQpIHtcbiAgICAgIHRoaXMucnVuKCdiYWNrRW5zdXJlJyk7XG4gICAgICBjb25zdCBoYXNBdWRpZW5jZSA9IGFuZHJvaWRCYWNrRXZlbnQuYnJvYWRjYXN0KCk7XG4gICAgICBjb25zb2xlLmxvZygnYW5kcm9pZEJhY2tFdmVudC5icm9hZGNhc3Q6ICcsICFoYXNBdWRpZW5jZSk7XG4gICAgICBpZiAoIWhhc0F1ZGllbmNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbkFuZHJvaWRHb0JhY2sgIG9uQW5kcm9pZEdvQmFjayAgb25BbmRyb2lkR29CYWNrJyk7XG4gICAgICAgIE1LRXZlbnREaXNwYXRjaC5JLmVtaXQoJ2FuZHJvaWRHb2JhY2snKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gIE1LRXZlbnREaXNwYXRjaC5JLmVtaXQoJ2FuZHJvaWRHb2JhY2snKTtcbiAgfTtcblxuICAvKlxuICAgICogQXBw5pS25Yiw5pyN5Yqh5Zmoc29ja2V05pWw5o2u5Lul5ZCO77yM6L2s5Y+R57uZ5ri45oiPO1xuICAgIHN0YXJ0OuWMuemFjeWIsOW8gOWni++8m1xuICAgIHJvbGzvvJrmjrflrozpqrDlrZBcbiAgICBtb3ZlOuenu+WKqOmqsOWtkFxuICAgIHNraXDvvJror6XmjrfpqrDlrZDkuoZcbiAgICBsZWF2Ze+8muacieS6uuemu+W8gFxuICAgIGpvaW7vvJrmnInkurrliqDlhaXvvIjmlq3nur/ph43ov57kuobvvIlcbiAgKi9cbiAgb25Tb2NrZXRSZWNlaXZlID0gKGRhdGEpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygn5pS25Yiw5pyN5Yqh5Zmo5LiL5Y+R5raI5oGvLS0tLS0tLS0tLS3vvJonKTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAvL+Wwhua2iOaBr+WPkemAgee7mea2iOaBr+euoeeQhuexuztcbiAgICAvLyBzZXRUaW1lb3V0KCgpPT57XG4gICAgTUtNZXNzYWdlTWFuYWdlci5lbWl0U29ja2V0TWVzc2FnZShkYXRhKTtcbiAgICAvLyB9LDMwMCk7XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiplbmQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKirmuLjmiI/lj5HpgIHmlbDmja4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qXG4gICAgKiBAcGFyYW0gTWVzc2FnZVR5cGUg5raI5oGv5Y+3XG4gICAgKiBAcGFybSBzZW5kRGF0YSDlj5HpgIHnmoTmlbDmja4o5pyJ5Y+v6IO95rKh5pyJ5Y+C5pWwKVxuICAqL1xuICBzb2NrZXRTZW5kKG1lc3NhZ2VUeXBlOiBzdHJpbmcsIHNlbmREYXRhPzogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ3NvY2tldFNlbmQnLCBtZXNzYWdlVHlwZSwgc2VuZERhdGEpO1xuICAgIHdpbmRvdy5wcm9tcHQobWVzc2FnZVR5cGUsICcnKTtcblxuICB9XG4gIHNlbmRBdXRvSm9pbkV2ZW50ID0gc2VuZE9iaiA9PiB7XG4gICAgY29uc29sZS5sb2coJ3NlbmRPYmouZXZlbnROYW1lOicrc2VuZE9iai5ldmVudE5hbWUpO1xuICAgIHRoaXMucnVuKCdzZW5kRXZlbnQnLCB7XG4gICAgICBldmVudE5hbWU6IHNlbmRPYmouZXZlbnROYW1lLFxuICAgICAgZXZlbnRQYXJhbXM6IHtcbiAgICAgICAgdHlwZTogc2VuZE9iai50eXBlLCBzb3VyY2U6IHNlbmRPYmouc291cmNlLCBpc19tYXRjaF9hdXRvOiBzZW5kT2JqLmlzX21hdGNoX2F1dG8sXG4gICAgICAgIHN0YXR1czogc2VuZE9iai5zdGF0dXMsIG1lc3NhZ2VUeXBlOiBzZW5kT2JqLm1lc3NhZ2VUeXBlLCB0aW1lOiBzZW5kT2JqLnRpbWUsbmFtZTpzZW5kT2JqLm5hbWUscmVzdWx0OnNlbmRPYmoucmVzdWx0XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqZW5kKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxufVxuXG5jb25zdCBOREIgPSAoKCkgPT4ge1xuICBsZXQgcGxhdGZvcm0gPSAndW5rbm93bic7XG4gIGxldCBhbGljZSA9ICd1bmtub3duJztcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBpZiAod2luZG93LkFuZHJvaWRKc0Nvbm5lY3Rvcikge1xuICAgICAgcGxhdGZvcm0gPSAnYW5kcm9pZCc7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGFsaWNlID0gd2luZG93LkFuZHJvaWRKc0Nvbm5lY3Rvci5nZXRJbmplY3ROYW1lKCkgfHwgcGxhdGZvcm07XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy53ZWJraXQgJiYgd2luZG93LndlYmtpdC5tZXNzYWdlSGFuZGxlcnMpIHtcbiAgICAgIHBsYXRmb3JtID0gJ2lvcyc7XG4gICAgICBhbGljZSA9ICdtZXNzYWdlSGFuZGxlcnMnO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBjb25zdCB3ZWJ2aWV3ID0gbmV3IE5kb2dKc0JyaWRnZShhbGljZSwgcGxhdGZvcm0pO1xuICAgIHdpbmRvdy5OREIgPSB3ZWJ2aWV3O1xuICAgIHdpbmRvdy53ZWJ2aWV3ID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZygnbm93IGlzIGluIHdlYnZpZXcnKTtcbiAgICByZXR1cm4gd2VidmlldztcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIGNvbnN0IHdlYnZpZXcgPSBuZXcgTmRvZ0pzQnJpZGdlKGFsaWNlLCBwbGF0Zm9ybSk7XG4gICAgd2luZG93Lk5EQiA9IHdlYnZpZXc7XG4gICAgd2luZG93LndlYnZpZXcgPSBmYWxzZTtcbiAgICBjb25zb2xlLmxvZygnbm93IGlzIG5vdCBpbiB3ZWJ2aWV3Jyk7XG4gICAgcmV0dXJuIHdlYnZpZXc7XG4gIH1cbiAgXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBOREI7XG5cbmV4cG9ydCBjb25zdCBhbmRyb2lkQmFja0V2ZW50ID0gbmV3IEFuZHJvaWRCYWNrRXZlbnQoKTtcbiJdfQ==