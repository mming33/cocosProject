System.register(["cce.code-quality.cr", "cc", "./MKMessageManager.js", "./MKSound.js", "./MKEventDispatch.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MKMessageManager, MKSound, MKEventDispatch, _crd, AndroidBackEvent, NdogJsBridge, NDB, androidBackEvent;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_MKMessageManagerJs) {
      MKMessageManager = _MKMessageManagerJs.default;
    }, function (_MKSoundJs) {
      MKSound = _MKSoundJs.default;
    }, function (_MKEventDispatchJs) {
      MKEventDispatch = _MKEventDispatchJs.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7d11cf0qA5PGaTyHTXnEGmk", "NDBTS", _context.meta);

      AndroidBackEvent = /*#__PURE__*/function () {
        function AndroidBackEvent() {
          _defineProperty(this, "list", void 0);

          this.list = [];
        }

        var _proto = AndroidBackEvent.prototype;

        _proto.addEventListener = function addEventListener(audience) {
          this.list.push(audience);
        };

        _proto.removeEventListener = function removeEventListener(audience) {
          // console.log(audience);
          // console.log(JSON.stringify(this.list));
          // this.list.forEach(fn=>{
          //   console.log(fn,audience,fn.toString() == audience.toString());
          // })
          this.list = this.list.filter(function (fn) {
            return fn.toString() != audience.toString();
          }); // console.log(this.list);
        };

        _proto.broadcast = function broadcast() {
          console.log(this.list);
          this.list.forEach(function (fn) {
            fn && fn();
          });
          return !!this.list.length;
        };

        return AndroidBackEvent;
      }();

      NdogJsBridge = /*#__PURE__*/function () {
        function NdogJsBridge(alice, platform) {
          var _this = this;

          _defineProperty(this, "ALICE", void 0);

          _defineProperty(this, "platform", void 0);

          _defineProperty(this, "PROTOCOL", void 0);

          _defineProperty(this, "pool", void 0);

          _defineProperty(this, "sequenceId", void 0);

          _defineProperty(this, "gameIsStart", false);

          _defineProperty(this, "report", void 0);

          _defineProperty(this, "sleep", void 0);

          _defineProperty(this, "generateRequestObj", function (method, params) {
            if (params === void 0) {
              params = {};
            }

            var port = _this.sequenceId++;
            return {
              uri: _this.PROTOCOL + "://" + _this.ALICE + ":" + port + "/" + method + "?" + JSON.stringify(params),
              port: port
            };
          });

          _defineProperty(this, "run", function (nativeMethodName, params) {
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
                        res = _objectWithoutPropertiesLoose(response, ["port"]);

                    _this.onFinish(port, res);
                  });
                });
              } else {
                throw new Error(JSON.stringify(_this.platform));
              }
            })["catch"](function (e) {
              console.error(e);
              console.error("jsbridge method fail: " + JSON.stringify({
                uri: uri,
                port: port
              }));
              throw new Error("jsbridge method fail: " + JSON.stringify({
                uri: uri,
                port: port
              }));
            });
          });

          _defineProperty(this, "setupWKWebViewJavascriptBridge", function (callback) {
            if (window.WKWebViewJavascriptBridge) {
              // eslint-disable-next-line
              return callback(window.WKWebViewJavascriptBridge);
            }

            if (window.WKWVJBCallbacks) {
              return window.WKWVJBCallbacks.push(callback);
            }

            window.WKWVJBCallbacks = [callback];
            window.webkit.messageHandlers.iOS_Native_InjectJavascript.postMessage(null);
          });

          _defineProperty(this, "onFinish", function (port, res) {
            console.log('%c << response:' + port, 'color:green', res);
            var resolve = _this.pool[port];
            resolve && resolve(res);
            delete _this.pool[port];
          });

          _defineProperty(this, "request", /*#__PURE__*/function () {
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
          }());

          _defineProperty(this, "closeWebView", function () {
            _this.run('closeWebView');
          });

          _defineProperty(this, "shareGameOrImage", /*#__PURE__*/function () {
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
          }());

          _defineProperty(this, "getUserInfo", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
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
          })));

          _defineProperty(this, "getRoomInfo", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
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
          })));

          _defineProperty(this, "showEmoji", function (pos, size, svga) {
            _this.run('playSvga', {
              x: pos[0],
              y: pos[1],
              w: size[0],
              h: size[1],
              url: svga
            });
          });

          _defineProperty(this, "setEngineSwitch", function (flag) {
            console.log('setEngineSwitch:' + flag);
            (_crd && MKSound === void 0 ? (_reportPossibleCrUseOfMKSound({
              error: Error()
            }), MKSound) : MKSound).audioEngineOn = flag;
            (_crd && MKSound === void 0 ? (_reportPossibleCrUseOfMKSound({
              error: Error()
            }), MKSound) : MKSound).updateMusic();
          });

          _defineProperty(this, "showPlayerInfo", function (playerId) {
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
          });

          _defineProperty(this, "renderTextureShare", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
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
          })));

          _defineProperty(this, "toast", function (opt) {
            if (opt === void 0) {
              opt = {};
            }

            var defaultOpt = {
              msg: '弹出Toast',
              "long": true
            };
            return _this.run('toast', Object.assign(defaultOpt, opt));
          });

          _defineProperty(this, "openDeepLink", function (link) {
            _this.run('openDeepLink', {
              link: link
            });
          });

          _defineProperty(this, "sendEvent", function (sendObj) {
            _this.run('sendEvent', {
              eventName: sendObj.eventName,
              eventParams: {
                type: sendObj.type,
                from: sendObj.from,
                result: sendObj.result,
                way: sendObj.way
              }
            });
          });

          _defineProperty(this, "onAndroidStop", function () {
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
          });

          _defineProperty(this, "onAndroidResume", function () {
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
          });

          _defineProperty(this, "onAndroidReload", function () {
            // window.location.reload();
            console.log("webview onAndroidReload");
          });

          _defineProperty(this, "onAndroidGoBack", function () {
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

          });

          _defineProperty(this, "onSocketReceive", function (data) {
            // console.log('收到服务器下发消息-----------：');
            // console.log(data);
            //将消息发送给消息管理类;
            // setTimeout(()=>{
            (_crd && MKMessageManager === void 0 ? (_reportPossibleCrUseOfMKMessageManager({
              error: Error()
            }), MKMessageManager) : MKMessageManager).emitSocketMessage(data); // },300);
          });

          _defineProperty(this, "sendAutoJoinEvent", function (sendObj) {
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
          });

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


        var _proto2 = NdogJsBridge.prototype;

        /*****************************************************end********************************************************/

        /***********************************************游戏发送数据*******************************************************/

        /*
          * @param MessageType 消息号
          * @parm sendData 发送的数据(有可能没有参数)
        */
        _proto2.socketSend = function socketSend(messageType, sendData) {
          console.log('socketSend', messageType, sendData);
          window.prompt(messageType, '');
        }
        /***********************************************end*****************************************************/
        ;

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

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9VdGlscy9OREJUUy50cyJdLCJuYW1lcyI6WyJNS01lc3NhZ2VNYW5hZ2VyIiwiTUtTb3VuZCIsIk1LRXZlbnREaXNwYXRjaCIsIkFuZHJvaWRCYWNrRXZlbnQiLCJsaXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImF1ZGllbmNlIiwicHVzaCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmaWx0ZXIiLCJmbiIsInRvU3RyaW5nIiwiYnJvYWRjYXN0IiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJsZW5ndGgiLCJOZG9nSnNCcmlkZ2UiLCJhbGljZSIsInBsYXRmb3JtIiwibWV0aG9kIiwicGFyYW1zIiwicG9ydCIsInNlcXVlbmNlSWQiLCJ1cmkiLCJQUk9UT0NPTCIsIkFMSUNFIiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hdGl2ZU1ldGhvZE5hbWUiLCJnZW5lcmF0ZVJlcXVlc3RPYmoiLCJQcm9taXNlIiwicmVzb2x2ZSIsInBvb2wiLCJ3aW5kb3ciLCJwcm9tcHQiLCJzZXR1cFdLV2ViVmlld0phdmFzY3JpcHRCcmlkZ2UiLCJicmlkZ2UiLCJjYWxsSGFuZGxlciIsInVybCIsInJlc3BvbnNlIiwicmVzIiwib25GaW5pc2giLCJFcnJvciIsImUiLCJlcnJvciIsImNhbGxiYWNrIiwiV0tXZWJWaWV3SmF2YXNjcmlwdEJyaWRnZSIsIldLV1ZKQkNhbGxiYWNrcyIsIndlYmtpdCIsIm1lc3NhZ2VIYW5kbGVycyIsImlPU19OYXRpdmVfSW5qZWN0SmF2YXNjcmlwdCIsInBvc3RNZXNzYWdlIiwicnVuIiwicmVzdWx0IiwiZXJyX2NvZGUiLCJtc2ciLCJzaGFyZVRleHQiLCJpbWd1cmwiLCJpbWdVcmwiLCJpc19yb29tIiwicG9zIiwic2l6ZSIsInN2Z2EiLCJ4IiwieSIsInciLCJoIiwiZmxhZyIsImF1ZGlvRW5naW5lT24iLCJ1cGRhdGVNdXNpYyIsInBsYXllcklkIiwidXNlcklkIiwid2hlcmUiLCJpbl9yb29tIiwid2lkIiwiTWF0aCIsImZsb29yIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xpZW50V2lkdGgiLCJoZWlnIiwiY2xpZW50SGVpZ2h0IiwiaW1hZ2VfY29vcmRpbmF0ZSIsInIiLCJvcHQiLCJkZWZhdWx0T3B0IiwiT2JqZWN0IiwiYXNzaWduIiwibGluayIsInNlbmRPYmoiLCJldmVudE5hbWUiLCJldmVudFBhcmFtcyIsInR5cGUiLCJmcm9tIiwid2F5IiwiYXVkaW9Jc09uIiwiSSIsImVtaXQiLCJnYW1lSXNTdGFydCIsImhhc0F1ZGllbmNlIiwiYW5kcm9pZEJhY2tFdmVudCIsImRhdGEiLCJlbWl0U29ja2V0TWVzc2FnZSIsInNvdXJjZSIsImlzX21hdGNoX2F1dG8iLCJzdGF0dXMiLCJtZXNzYWdlVHlwZSIsInRpbWUiLCJuYW1lIiwicmVwb3J0IiwiZ3RhZyIsImFwcGx5IiwiYXJndW1lbnRzIiwiZ2Fsb2ciLCJsZW4iLCJpIiwic2xlZXAiLCJtcyIsInJlamVjdCIsInNldFRpbWVvdXQiLCJyZWdpc3RlckhhbmRsZXIiLCJvblNvY2tldFJlY2VpdmUiLCJvbkFuZHJvaWRHb0JhY2siLCJvbkFuZHJvaWRSZWxvYWQiLCJvbkFuZHJvaWRSZXN1bWUiLCJvbkFuZHJvaWRTdG9wIiwic29ja2V0U2VuZCIsInNlbmREYXRhIiwiTkRCIiwiQW5kcm9pZEpzQ29ubmVjdG9yIiwiZ2V0SW5qZWN0TmFtZSIsIndlYnZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrRE9BLE1BQUFBLGdCOztBQUNBQyxNQUFBQSxPOztBQUNBQyxNQUFBQSxlOzs7Ozs7O0FBcUJEQyxNQUFBQSxnQjtBQUVKLG9DQUFjO0FBQUE7O0FBQ1osZUFBS0MsSUFBTCxHQUFZLEVBQVo7QUFDRDs7OztlQUNEQyxnQixHQUFBLDBCQUFpQkMsUUFBakIsRUFBZ0M7QUFDOUIsZUFBS0YsSUFBTCxD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K0YsR0FBUCxHQUFhRyxRQUFiO0FBQ0FsRyxVQUFBQSxNQUFNLENBQUNrRyxPQUFQLEdBQWlCLEtBQWpCO0FBQ0F2SCxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBLGlCQUFPc0gsUUFBUDtBQUNEO0FBRUYsT0E3QlcsRTs7eUJBK0JHSCxHOztrQ0FFRjVCLGdCLEdBQW1CLElBQUlsRyxnQkFBSixFIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkpTQnJpZGdl5Yqf6IO95Y+C5pWwXG7lh73mlbDlkI0gIHwg5Y+C5pWwIHwg5Ye95pWw5o+P6L+wXG4tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLXwgLS0tLS0tLS0tLS0tLVxub3BlblByb2ZpbGUgIHwgdXNlcklkIHwg5omT5byA55So5oi36K+m5oOF6aG1XG5vcGVuVGFnRGV0YWlsICB8IHRhZ0lk77yMdGFnVGl0bGV8IOaJk+W8gHRhZ+ivpuaDhemhtVxub3BlbkZlZWQgIHwgZmVlZElkfCDmiZPlvIBmZWVkXG5vcGVuQ29tbWVudCAgfCBmZWVkSWR8IOaJk+W8gGZlZWTor4TorrrpobVcbnNob3dCYW5uZXIgIHwgc2xpZGUg5aSa5byg6Ziy5q2i6Lef6ZqP5ruR5YqoIHwg5pi+56S6YmFubmVyIChhbGFza2Hml6ApXG5oaWRlQmFubmVyICB8IHwg6ZqQ6JePYmFubmVyIChhbGFza2Hml6ApXG5zZW5kRXZlbnQgIHwgSlNPTk9iamVjdCBwYXJhbXN8IOWPkemAgeS6i+S7tlxuc2hhcmVBcGsgIHwgYXBrTmFtZXwg5YiG5LqrYXBrXG5zaGFyZVRleHQgIHwgc2hhcmVUZXh0fCDliIbkuqvmloflrZdcbnNoYXJlTWVkaWFUZXh0ICB8IHNoYXJlVGV4dCxpbWdVcmx8IOWIhuS6q+aWh+Wtl+WSjOWbvueJh1xuc2hhcmVGaWxlICB8IHNoYXJlVGV4dCwgZmlsZVBhdGgo5pys5Zyw5paH5Lu26Lev5b6E77yM5LiN6ZyA6KaB5YqgZmlsZTovLykgfCDliIbkuqvmlofku7Zcbm1lZGlhVG9Mb2NhbCAgfCBpbWFnZVVybCx2aWRlb1VybHwg5Zu+54mHL+inhumikSDnvZHnu5zlnLDlnYDovazmnKzlnLDlnLDlnYBcbmJhc2U2NFRvTG9jYWwgIHwgYmFzZTY0VXJsfCDlm77niYdCYXNlNjTovazmnKzlnLDlnLDlnYBcbnRha2VTY3JlZW5TaG90ICB8IOWQjG5ld3NEb2d8IOaIquWbviDvvIjlj5HpgIHlsY/luZXlnZDmoIflkozlrr3pq5jvvIzov5Tlm57lm77niYfmnKzlnLDlnLDlnYDvvIlcbmdldFVzZXJJbmZvICB8IGF2YXRhciwgdXNlck5hbWUgfCDnlKjmiLflkI3vvIzlpLTlg49cbmdldEdyb3VwSWQgIHwgdXNlcklkfCDnlKjmiLdJRO+8iE9iamVjdElk77yMc2VxX2lk77yJIChhbGFza2Hml6ApXG5nZXRVc2VyR3JvdXAgIHwgZ3JvdXAgfCDnlKjmiLdHcm91cCAoYWxhc2th5pegKVxuZ2V0VXNlckxhbmcgIHwgbGFuZ3wg6K+t6KiAXG5vcGVuV2ViVmlldyAgfCB1cmx8IOaJk+W8gOS4gOS4quaWsOeahOWFqOWxj1dlYlZpZXdcbmNsb3NlV2ViVmlldyAgfCB8IOWFs+mXreW9k+WJjVdlYlZpZXdcbmJhY2tQcmVzc2VkICB8IGZlZWRJZHwg5a6i5oi356uv5Li75Yqo5Y+R6YCB5ZCO6YCA5LqL5Lu2XG5jbGlja1Bvc3RCdG4gIHwgfCDngrnlh7vlj5HluIPmjInpkq4sdG9nb+S4k+aciVxuY2xpY2tQb3N0VGV4dCAgfCB8IOeCueWHu+WPkeW4g+aWh+Wtl+aMiemSrix0b2dv5LiT5pyJXG5jbGlja1Bvc3RJbWFnZSAgfCB8IOeCueWHu+WPkeW4g+WbvueJh+aMiemSrix0b2dv5LiT5pyJXG5jbGlja1Bvc3RQaG90byAgfCB8IOeCueWHu+WPkeW4g+aLjeeFp+aMiemSrix0b2dv5LiT5pyJXG5jbGlja1Bvc3RBdWRpbyB8IHwg54K55Ye75Y+R5biD6K+t6Z+z5oyJ6ZKuLHRvZ2/kuJPmnIlcblxuLz09PT1hbGFza2E9PT09L1xuY2xpY2tQb3N0U3RhdHVzTWFrZXIgfCB8IOeCueWHu+WPkeW4g+WItuS9nOW9sembhlxuY2xpY2tQb3N0VmlkZW8gfCB8IOeCueWHu+WPkeW4g+inhumikVxub3BlblRvcGljIHwgdG9waWNJZCB8IOaJk+W8gOS4u+mimOa0u+WKqOmhtemdolxuXG4vPT09PW5ld3Nkb2c9PT09L1xub3BlbkZlZWQgIHwgZmVlZElkLHR5cGUsbGFuZyB8IOi3s+i9rOWIsOafkOS4qmFydGljbGVcbm9wZW5DYXRlZ29yeSB8IGNhdGVfa2V5LHZpZGVvIHwg6Lez6L2s5Yiw5p+Q5Liq5YiG57G7XG5vcGVuVG9waWMgfCBmZWVkSWQsbGFuZyB8IOi3s+i9rOWIsOafkOS4qnRvcGljXG5vcGVuRGVlcExpbmsgfHtsaW5rOiduZXdzZG9nOi8vZGV0YWlsP2lkPTVhMTY1OTQ3MTIzMTNhMDBhMzQxMDlkMSZsYW5nPWVuJnR5cGU9YXJ0aWNsZSd9fOi3s+i9rOWIsOafkOS4qkRFRVBMSU5LXG5vcGVuSHR0cExpbmsgfHtsaW5rOiAnaHR0cDovL3h4eCd9fOS9v+eUqE5ld3NEb2fmiZPlvIDmn5DkuKrmlK/mjIHnmoRIVFRQ6ZO+5o6lXG5cbi89PT09d2FuZ2NhaT09PT0vXG5lbnRlckNoYXRSb29tIHwgcm9vbUlkLHdoZXJlIHwg5LuOd2hlcmXov5vlhaVyb29tSWTogYrlpKnlrqQsXG5vcGVuRGVlcExpbmsgfHtsaW5rOicnfXzot7PovazliLDmn5DkuKpERUVQTElOS1xub3BlblRhYiB8IHRhYiB8XG5cblxuKi9cbmltcG9ydCBNS01lc3NhZ2VNYW5hZ2VyIGZyb20gJy4uL1V0aWxzL01LTWVzc2FnZU1hbmFnZXInO1xuaW1wb3J0IE1LU291bmQgZnJvbSAnLi4vVXRpbHMvTUtTb3VuZCc7XG5pbXBvcnQgTUtFdmVudERpc3BhdGNoIGZyb20gJy4vTUtFdmVudERpc3BhdGNoJztcblxuaW50ZXJmYWNlIElBY3Rpb24ge1xuICBtZXRob2Q6IHN0cmluZztcbiAgcGFyYW1zPzoge1xuICAgIFtwOiBzdHJpbmddOiBhbnk7XG4gIH07XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgZ3RhZz86IChlOiBhbnkpID0+IHZvaWQ7XG4gICAgV0tXVkpCQ2FsbGJhY2tzPzogYW55W107XG4gICAgV0tXZWJWaWV3SmF2YXNjcmlwdEJyaWRnZT86IGFueTtcbiAgICB3ZWJraXQ/OiBhbnk7XG4gICAgTkRCPzogYW55O1xuICAgIHdlYnZpZXc/OiBhbnk7XG4gICAgQW5kcm9pZEpzQ29ubmVjdG9yPzogYW55O1xuICB9XG59XG5cbmNsYXNzIEFuZHJvaWRCYWNrRXZlbnQge1xuICBwcml2YXRlIGxpc3Q6IGFueVtdO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpc3QgPSBbXTtcbiAgfVxuICBhZGRFdmVudExpc3RlbmVyKGF1ZGllbmNlOiBhbnkpIHtcbiAgICB0aGlzLmxpc3QucHVzaChhdWRpZW5jZSk7XG4gIH1cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihhdWRpZW5jZTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coYXVkaWVuY2UpO1xuICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMubGlzdCkpO1xuICAgIC8vIHRoaXMubGlzdC5mb3JFYWNoKGZuPT57XG4gICAgLy8gICBjb25zb2xlLmxvZyhmbixhdWRpZW5jZSxmbi50b1N0cmluZygpID09IGF1ZGllbmNlLnRvU3RyaW5nKCkpO1xuICAgIC8vIH0pXG4gICAgdGhpcy5saXN0ID0gdGhpcy5saXN0LmZpbHRlcihmbiA9PiBmbi50b1N0cmluZygpICE9IGF1ZGllbmNlLnRvU3RyaW5nKCkpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubGlzdCk7XG4gIH1cbiAgYnJvYWRjYXN0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdCk7XG4gICAgdGhpcy5saXN0LmZvckVhY2goZm4gPT4ge1xuICAgICAgZm4gJiYgZm4oKTtcbiAgICB9KTtcbiAgICByZXR1cm4gISF0aGlzLmxpc3QubGVuZ3RoO1xuICB9XG59XG5cbmNsYXNzIE5kb2dKc0JyaWRnZSB7XG4gIEFMSUNFOiBzdHJpbmc7XG4gIHBsYXRmb3JtOiBzdHJpbmc7XG4gIFBST1RPQ09MOiBzdHJpbmc7XG4gIHBvb2w6IGFueTtcbiAgc2VxdWVuY2VJZDogbnVtYmVyO1xuICBnYW1lSXNTdGFydDogYm9vbGVhbiA9IGZhbHNlO1xuICByZXBvcnQ6ICgpID0+IHZvaWQ7XG4gIHNsZWVwOiAobXM6IG51bWJlcikgPT4gUHJvbWlzZTxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKGFsaWNlOiBhbnksIHBsYXRmb3JtOiBhbnkpIHtcbiAgICB0aGlzLkFMSUNFID0gYWxpY2U7XG4gICAgdGhpcy5wbGF0Zm9ybSA9IHBsYXRmb3JtO1xuICAgIHRoaXMuUFJPVE9DT0wgPSAnTkRCJztcbiAgICB0aGlzLnBvb2wgPSB7fTtcbiAgICB0aGlzLnNlcXVlbmNlSWQgPSAwO1xuICAgIHRoaXMucmVwb3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCF3aW5kb3cuZ3RhZykgcmV0dXJuO1xuICAgICAgd2luZG93Lmd0YWcuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09cmVwb3J0PT09PT09PScpO1xuICAgICAgY29uc3QgZ2Fsb2cgPSBbXTtcbiAgICAgIGNvbnN0IGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGdhbG9nLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGdhbG9nKSk7XG4gICAgICBjb25zb2xlLmxvZygnPT09PT09PXJlcG9ydD09PT09PT0nKTtcbiAgICAgIC8vIH1cbiAgICB9O1xuICAgIHRoaXMuc2xlZXAgPSBtcyA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIG1zLCAnZG9uZScpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLnBsYXRmb3JtID09ICdpb3MnKSB7XG4gICAgICB0aGlzLnNldHVwV0tXZWJWaWV3SmF2YXNjcmlwdEJyaWRnZSgoYnJpZGdlOiBhbnkpID0+IHtcbiAgICAgICAgYnJpZGdlLnJlZ2lzdGVySGFuZGxlcignb25Tb2NrZXRSZWNlaXZlJywgdGhpcy5vblNvY2tldFJlY2VpdmUpO1xuICAgICAgICBicmlkZ2UucmVnaXN0ZXJIYW5kbGVyKCdvbkFuZHJvaWRHb0JhY2snLCB0aGlzLm9uQW5kcm9pZEdvQmFjayk7XG4gICAgICAgIGJyaWRnZS5yZWdpc3RlckhhbmRsZXIoJ29uQW5kcm9pZFJlbG9hZCcsIHRoaXMub25BbmRyb2lkUmVsb2FkKTtcbiAgICAgICAgYnJpZGdlLnJlZ2lzdGVySGFuZGxlcignb25BbmRyb2lkUmVzdW1lJywgdGhpcy5vbkFuZHJvaWRSZXN1bWUpO1xuICAgICAgICBicmlkZ2UucmVnaXN0ZXJIYW5kbGVyKCdvbkFuZHJvaWRTdG9wJywgdGhpcy5vbkFuZHJvaWRTdG9wKTtcblxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiDnlJ/miJBhbmRyb2lk6Kej5p6Q5Y2P6K6uXG4gICAqL1xuICBnZW5lcmF0ZVJlcXVlc3RPYmogPSAobWV0aG9kOiBhbnksIHBhcmFtcyA9IHt9KSA9PiB7XG4gICAgY29uc3QgcG9ydCA9IHRoaXMuc2VxdWVuY2VJZCsrO1xuICAgIHJldHVybiB7XG4gICAgICB1cmk6IGAke3RoaXMuUFJPVE9DT0x9Oi8vJHt0aGlzLkFMSUNFfToke3BvcnR9LyR7bWV0aG9kfT8ke0pTT04uc3RyaW5naWZ5KHBhcmFtcyl9YCxcbiAgICAgIHBvcnQsXG4gICAgfTtcbiAgfTtcbiAgLyoqXG4gICAqIOmAmui/h3dpbmRvdy5wcm9tcHTlsIblj4LmlbDkvKDpgJLnu5nlrqLmiLfnq68s5bm2562J5b6F5Zue6LCDXG4gICAqIEBuYXRpdmVNZXRob2ROYW1lIHtTdHJpbmd9IOWuouaIt+err+WTjeW6lOeahOWHveaVsOWQjSjmj5DliY3kurrlt6XnuqblrpopXG4gICAqIEBwYXJhbXMge09iamVjdH0g6ZyA6KaB5Lyg6YCS55qE5Y+C5pWwXG4gICAqL1xuICBydW46IChtOiBzdHJpbmcsIHA/OiBvYmplY3QpID0+IFByb21pc2U8eyBlcnJfY29kZT86IHN0cmluZzsgbXNnPzogc3RyaW5nIH0+ID0gKFxuICAgIG5hdGl2ZU1ldGhvZE5hbWUsXG4gICAgcGFyYW1zLFxuICApID0+IHtcbiAgICBjb25zdCB7IHVyaSwgcG9ydCB9ID0gdGhpcy5nZW5lcmF0ZVJlcXVlc3RPYmoobmF0aXZlTWV0aG9kTmFtZSwgcGFyYW1zKTtcbiAgICBjb25zb2xlLmxvZygnJWMgPj4gcmVxdWVzdDonICsgcG9ydCwgJ2NvbG9yOmJsdWUnLCB1cmkpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMucG9vbFtwb3J0XSA9IHJlc29sdmU7XG4gICAgICBpZiAodGhpcy5wbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnKSB7XG4gICAgICAgIC8v6YCa6L+HcHJvbXB05bCG5raI5oGv5Lyg6YCS57uZYW5kcm9pZO+8m1xuICAgICAgICB3aW5kb3cucHJvbXB0KHVyaSwgJycpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYXRmb3JtID09PSAnaW9zJykge1xuICAgICAgICB0aGlzLnNldHVwV0tXZWJWaWV3SmF2YXNjcmlwdEJyaWRnZSggYnJpZGdlID0+IHtcbiAgICAgICAgICBicmlkZ2UuY2FsbEhhbmRsZXIoJ2hhbmRsZUlPU0pzQnJpZGdlJywgeyB1cmw6IHVyaSB9LCByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAvLyBJT1MgIOerr+eahOWbnuiwg+WHveaVsFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0lPUyBiYWNrIGRhdGE6ICcsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcG9ydCwgLi4ucmVzIH0gPSByZXNwb25zZTtcbiAgICAgICAgICAgIHRoaXMub25GaW5pc2gocG9ydCwgcmVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSlNPTi5zdHJpbmdpZnkodGhpcy5wbGF0Zm9ybSkpO1xuICAgICAgfVxuICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYGpzYnJpZGdlIG1ldGhvZCBmYWlsOiAke0pTT04uc3RyaW5naWZ5KHsgdXJpLCBwb3J0IH0pfWApO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBqc2JyaWRnZSBtZXRob2QgZmFpbDogJHtKU09OLnN0cmluZ2lmeSh7IHVyaSwgcG9ydCB9KX1gKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICoganNicmlkZ2Ug6LCD55SoaW9zXG4gICAqIEBtZW1iZXJvZiBOZG9nSnNCcmlkZ2VcbiAgICovXG4gIHNldHVwV0tXZWJWaWV3SmF2YXNjcmlwdEJyaWRnZSA9IGNhbGxiYWNrID0+IHtcbiAgICBpZiAod2luZG93LldLV2ViVmlld0phdmFzY3JpcHRCcmlkZ2UpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgcmV0dXJuIGNhbGxiYWNrKHdpbmRvdy5XS1dlYlZpZXdKYXZhc2NyaXB0QnJpZGdlKTtcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5XS1dWSkJDYWxsYmFja3MpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuV0tXVkpCQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgIH1cbiAgICB3aW5kb3cuV0tXVkpCQ2FsbGJhY2tzID0gW2NhbGxiYWNrXTtcbiAgICB3aW5kb3cud2Via2l0Lm1lc3NhZ2VIYW5kbGVycy5pT1NfTmF0aXZlX0luamVjdEphdmFzY3JpcHQucG9zdE1lc3NhZ2UobnVsbCk7XG4gIH07XG4gIC8qKlxuICAgKiDkvpvlrqLmiLfnq6/lm57osINcbiAgICogQHBvcnQge051bWJlcn0g5b2T5YmN5Zue6LCD5rGg5Lit55qEa2V5LCDlr7nlupTkuIDkuKrlm57osIPlh73mlbBcbiAgICogQHJlcyB7T2JqZWN0fSDlrqLmiLfnq6/nmoTlpITnkIbnu5PmnpwsIOS4gOiIrOaYr2pzb27moLzlvI9cbiAgICovXG4gIG9uRmluaXNoID0gKHBvcnQsIHJlcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKCclYyA8PCByZXNwb25zZTonICsgcG9ydCwgJ2NvbG9yOmdyZWVuJywgcmVzKTtcbiAgICBjb25zdCByZXNvbHZlID0gdGhpcy5wb29sW3BvcnRdO1xuICAgIHJlc29sdmUgJiYgcmVzb2x2ZShyZXMpO1xuICAgIGRlbGV0ZSB0aGlzLnBvb2xbcG9ydF07XG4gIH07XG4gIC8qKlxuICAgKiDlj5HpgIHnvZHnu5zor7fmsYJcbiAgICogQG1ldGhvZCB7U3RyaW5nfSBnZXQscG9zdCxwdXQsZGVsXG4gICAqIEB1cmwge1N0cmluZ30g6K+35rGCdXJsc2V0RW5naW5lU3dpdGNoMVxuICAgKiBAcGFyYW1zIHtPYmplY3R9IOWPkemAgeWPguaVsFxuICAgKi9cbiAgcmVxdWVzdCA9IGFzeW5jIChtZXRob2QsIHVybCwgcGFyYW1zKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucnVuKG1ldGhvZCwgeyB1cmwsIHBhcmFtcyB9KTtcbiAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLT4+Pj4+JywgcmVzdWx0KTtcbiAgICAgIGlmIChyZXN1bHQuZXJyX2NvZGUgfHwgcmVzdWx0Lm1zZykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAvLyB0aGlzLnRvYXN0KHttc2c6IHJlc3VsdC5tc2d9KVxuICAgICAgICAvLyByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coJzAwMDAwMDAnLCBlKTtcbiAgICB9XG4gIH07XG5cbiAgY2xvc2VXZWJWaWV3ID0gKCkgPT4ge1xuICAgIHRoaXMucnVuKCdjbG9zZVdlYlZpZXcnKTtcbiAgfVxuXG4gIC8v5YiG5Lqr5Zu+54mHO1xuICBzaGFyZUdhbWVPckltYWdlID0gYXN5bmMgKHNoYXJlVGV4dCwgaW1ndXJsKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucnVuKCdzaGFyZU1lZGlhVGV4dCcsIHsgc2hhcmVUZXh0OiBzaGFyZVRleHQsIGltZ1VybDogaW1ndXJsLCBpc19yb29tOiB0cnVlIH0pO1xuICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tPj4+Pj4nLCByZXN1bHQpO1xuICAgICAgaWYgKHJlc3VsdC5lcnJfY29kZSB8fCByZXN1bHQubXNnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCcwMDAwMDAwJywgZSk7XG4gICAgfVxuICB9XG5cblxuICBnZXRVc2VySW5mbyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJ1bignZ2V0VXNlckluZm8nKTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0+Pj4+PmdldFVzZXJJbmZvJywgcmVzdWx0KTtcbiAgICBpZiAocmVzdWx0LmVycl9jb2RlIHx8IHJlc3VsdC5tc2cpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuXG4gIGdldFJvb21JbmZvID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucnVuKCdnZXRSb29tSW5mbycpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLT4+Pj4+Z2V0Um9vbUluZm8nLCByZXN1bHQpO1xuICAgIGlmIChyZXN1bHQuZXJyX2NvZGUgfHwgcmVzdWx0Lm1zZykge1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8v5pi+56S66KGo5oOF77ybXG4gIHNob3dFbW9qaSA9IChwb3MsIHNpemUsIHN2Z2EpID0+IHtcbiAgICB0aGlzLnJ1bigncGxheVN2Z2EnLCB7IHg6IHBvc1swXSwgeTogcG9zWzFdLCB3OiBzaXplWzBdLCBoOiBzaXplWzFdLCB1cmw6IHN2Z2EgfSk7XG4gIH1cblxuICAvL+iuvue9rumfs+aViOW8gOWFsztcbiAgc2V0RW5naW5lU3dpdGNoID0gKGZsYWcpID0+IHtcbiAgICBjb25zb2xlLmxvZygnc2V0RW5naW5lU3dpdGNoOicgKyBmbGFnKTtcbiAgICBNS1NvdW5kLmF1ZGlvRW5naW5lT24gPSBmbGFnO1xuICAgIE1LU291bmQudXBkYXRlTXVzaWMoKTtcbiAgfVxuXG4gIHNob3dQbGF5ZXJJbmZvID0gKHBsYXllcklkKSA9PiB7XG4gICAgLypcbiAgICBvcGVuUHJvZmlsZVxuICAgIHtcbiAgICBcInVzZXJfaWRcIixcIjI0MjQyNFwiLCAgICAgICAvL+eUqOaIt2lkO1xuICAgIFwid2hlcmVcIiwgXCJcIiwgICAgICAgICAgICAgIC8vbG9n77ybXG4gICAgXCJpbl9yb29tXCIsdHJ1ZS9mYWxzZSAgICAgIC8v5piv5ZCm5piv5Zyo6IGK5aSp5a6k5YaF77ybXG4gICAgfVxuICAgICovXG4gICAgY29uc29sZS5sb2coJ+WPkemAgeaYvuekuueUqOaIt++8micgKyBwbGF5ZXJJZCk7XG4gICAgdGhpcy5ydW4oJ29wZW5Qcm9maWxlJywgeyB1c2VySWQ6IHBsYXllcklkLCB3aGVyZTogJ0J1bGwgRmlnaHQnLCBpbl9yb29tOiB0cnVlIH0pO1xuICB9XG5cbiAgLy/miKrlm77liIbkuqs7XG4gIHJlbmRlclRleHR1cmVTaGFyZSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgbGV0IHdpZCA9IE1hdGguZmxvb3IoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCkgLSAyO1xuICAgICAgbGV0IGhlaWcgPSBNYXRoLmZsb29yKGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KSAtIDI7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJ1bigndGFrZVNjcmVlblNob3QnLCB7IGltYWdlX2Nvb3JkaW5hdGU6IHsgeDogMCwgeTogMCwgdzogd2lkLCBoOiBoZWlnLCByOiAwIH0gfSk7XG4gICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0+Pj4+PicsIHJlc3VsdCk7XG4gICAgICBpZiAocmVzdWx0LmVycl9jb2RlIHx8IHJlc3VsdC5tc2cpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coJzAwMDAwMDAnLCBlKTtcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiDlvLnlh7rljp/nlJ90b2FzdFxuICAgKi9cbiAgdG9hc3QgPSAob3B0ID0ge30pID0+IHtcbiAgICBjb25zdCBkZWZhdWx0T3B0ID0ge1xuICAgICAgbXNnOiAn5by55Ye6VG9hc3QnLFxuICAgICAgbG9uZzogdHJ1ZSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLnJ1bigndG9hc3QnLCBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHQsIG9wdCkpO1xuICB9O1xuXG4gIG9wZW5EZWVwTGluayA9IGxpbmsgPT4ge1xuICAgIHRoaXMucnVuKCdvcGVuRGVlcExpbmsnLCB7IGxpbms6IGxpbmsgfSk7XG4gIH07XG5cbiAgc2VuZEV2ZW50ID0gc2VuZE9iaiA9PiB7XG4gICAgdGhpcy5ydW4oJ3NlbmRFdmVudCcsIHsgZXZlbnROYW1lOiBzZW5kT2JqLmV2ZW50TmFtZSwgZXZlbnRQYXJhbXM6IHsgdHlwZTogc2VuZE9iai50eXBlLCBmcm9tOiBzZW5kT2JqLmZyb20sIHJlc3VsdDogc2VuZE9iai5yZXN1bHQsIHdheTogc2VuZE9iai53YXkgfSB9KTtcbiAgfVxuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKkFQUOiwg+eUqOa4uOaIj+aOpeWPoyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIC8qKlxuICAgKiBhcHDov5vlhaXlkI7lj7BcbiAgICovXG4gIG9uQW5kcm9pZFN0b3AgPSAoKSA9PiB7XG4gICAgTUtTb3VuZC5hdWRpb0lzT24gPSBNS1NvdW5kLmF1ZGlvRW5naW5lT247XG4gICAgTUtTb3VuZC5hdWRpb0VuZ2luZU9uID0gZmFsc2U7XG4gICAgTUtTb3VuZC51cGRhdGVNdXNpYygpO1xuICAgIGNvbnNvbGUubG9nKGB3ZWJ2aWV3IG9uQW5kcm9pZFN0b3A6IGFwcCDov5vlhaXlkI7lj7BgKTtcbiAgICBNS0V2ZW50RGlzcGF0Y2guSS5lbWl0KCdvbkFuZHJvaWRTdG9wJyk7XG4gIH07XG4gIC8qKlxuICAgKiBhcHDph43mlrDov5vlhaXliY3lj7BcbiAgICovXG4gIG9uQW5kcm9pZFJlc3VtZSA9ICgpID0+IHtcbiAgICBpZiAoTUtTb3VuZC5hdWRpb0lzT24pIHtcbiAgICAgIE1LU291bmQuYXVkaW9FbmdpbmVPbiA9IHRydWU7XG4gICAgICBNS1NvdW5kLnVwZGF0ZU11c2ljKCk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGB3ZWJ2aWV3IHJlc3VtZTogYXBwIOWbnuWIsOWJjeWPsGApO1xuICAgIE1LRXZlbnREaXNwYXRjaC5JLmVtaXQoJ29uQW5kcm9pZFJlc3VtZScpO1xuICB9O1xuICAvKlxuICAgICog5Yi35pawd2Vidmlld1xuICAgKi9cbiAgb25BbmRyb2lkUmVsb2FkID0gKCkgPT4ge1xuICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICBjb25zb2xlLmxvZyhgd2VidmlldyBvbkFuZHJvaWRSZWxvYWRgKTtcbiAgfTtcblxuICAvKlxuICAgICAg5ZON5bqUYW5kcm9pZOWbnumAgOS6i+S7tlxuICAgICAgMS4g5aaC5b2T5YmN6aG16Z2i5pyJ5by556qXLCDlhYjlhbPlvLnnqpdcbiAgICAgIDIuIOWmgiBoaXN0b3J5Lmxlbmd0aCA+IDEsIOWImeWbnumAgOWIsOS4iuS4gOmhtVxuICAgICAgMy4g5aaC5p6c6YCA5peg5Y+v6YCALCDlsLHnm7TmjqXlhbPpl613ZWJ2aWV3XG4gICAgICDmr4/mrKHlk43lupTpnIDopoHnu5nlrqLmiLfnq6/pgJrnn6UsIOWmguaenDUwMG1z5YaF5LiN5Zue6LCD5a6i5oi356uvLCDlrqLmiLfnq6/kvJrorqTkuLrnvZHpobXlh7rnjrDlvILluLjmiJbogIXmiZPlvIDkuobnrKzkuInmlrnnvZHpobUsIOWuouaIt+err+S8muWFs+mXreW9k+WJjXdlYnZpZXdcbiAgKi9cbiAgb25BbmRyb2lkR29CYWNrID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmdhbWVJc1N0YXJ0KSB7XG4gICAgICB0aGlzLnJ1bignYmFja0Vuc3VyZScpO1xuICAgICAgY29uc3QgaGFzQXVkaWVuY2UgPSBhbmRyb2lkQmFja0V2ZW50LmJyb2FkY2FzdCgpO1xuICAgICAgY29uc29sZS5sb2coJ2FuZHJvaWRCYWNrRXZlbnQuYnJvYWRjYXN0OiAnLCAhaGFzQXVkaWVuY2UpO1xuICAgICAgaWYgKCFoYXNBdWRpZW5jZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25BbmRyb2lkR29CYWNrICBvbkFuZHJvaWRHb0JhY2sgIG9uQW5kcm9pZEdvQmFjaycpO1xuICAgICAgICBNS0V2ZW50RGlzcGF0Y2guSS5lbWl0KCdhbmRyb2lkR29iYWNrJyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vICBNS0V2ZW50RGlzcGF0Y2guSS5lbWl0KCdhbmRyb2lkR29iYWNrJyk7XG4gIH07XG5cbiAgLypcbiAgICAqIEFwcOaUtuWIsOacjeWKoeWZqHNvY2tldOaVsOaNruS7peWQju+8jOi9rOWPkee7mea4uOaIjztcbiAgICBzdGFydDrljLnphY3liLDlvIDlp4vvvJtcbiAgICByb2xs77ya5o635a6M6aqw5a2QXG4gICAgbW92ZTrnp7vliqjpqrDlrZBcbiAgICBza2lw77ya6K+l5o636aqw5a2Q5LqGXG4gICAgbGVhdmXvvJrmnInkurrnprvlvIBcbiAgICBqb2lu77ya5pyJ5Lq65Yqg5YWl77yI5pat57q/6YeN6L+e5LqG77yJXG4gICovXG4gIG9uU29ja2V0UmVjZWl2ZSA9IChkYXRhKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ+aUtuWIsOacjeWKoeWZqOS4i+WPkea2iOaBry0tLS0tLS0tLS0t77yaJyk7XG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgLy/lsIbmtojmga/lj5HpgIHnu5nmtojmga/nrqHnkIbnsbs7XG4gICAgLy8gc2V0VGltZW91dCgoKT0+e1xuICAgIE1LTWVzc2FnZU1hbmFnZXIuZW1pdFNvY2tldE1lc3NhZ2UoZGF0YSk7XG4gICAgLy8gfSwzMDApO1xuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqZW5kKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq5ri45oiP5Y+R6YCB5pWw5o2uKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKlxuICAgICogQHBhcmFtIE1lc3NhZ2VUeXBlIOa2iOaBr+WPt1xuICAgICogQHBhcm0gc2VuZERhdGEg5Y+R6YCB55qE5pWw5o2uKOacieWPr+iDveayoeacieWPguaVsClcbiAgKi9cbiAgc29ja2V0U2VuZChtZXNzYWdlVHlwZTogc3RyaW5nLCBzZW5kRGF0YT86IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdzb2NrZXRTZW5kJywgbWVzc2FnZVR5cGUsIHNlbmREYXRhKTtcbiAgICB3aW5kb3cucHJvbXB0KG1lc3NhZ2VUeXBlLCAnJyk7XG5cbiAgfVxuICBzZW5kQXV0b0pvaW5FdmVudCA9IHNlbmRPYmogPT4ge1xuICAgIGNvbnNvbGUubG9nKCdzZW5kT2JqLmV2ZW50TmFtZTonK3NlbmRPYmouZXZlbnROYW1lKTtcbiAgICB0aGlzLnJ1bignc2VuZEV2ZW50Jywge1xuICAgICAgZXZlbnROYW1lOiBzZW5kT2JqLmV2ZW50TmFtZSxcbiAgICAgIGV2ZW50UGFyYW1zOiB7XG4gICAgICAgIHR5cGU6IHNlbmRPYmoudHlwZSwgc291cmNlOiBzZW5kT2JqLnNvdXJjZSwgaXNfbWF0Y2hfYXV0bzogc2VuZE9iai5pc19tYXRjaF9hdXRvLFxuICAgICAgICBzdGF0dXM6IHNlbmRPYmouc3RhdHVzLCBtZXNzYWdlVHlwZTogc2VuZE9iai5tZXNzYWdlVHlwZSwgdGltZTogc2VuZE9iai50aW1lLG5hbWU6c2VuZE9iai5uYW1lLHJlc3VsdDpzZW5kT2JqLnJlc3VsdFxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKmVuZCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cbn1cblxuY29uc3QgTkRCID0gKCgpID0+IHtcbiAgbGV0IHBsYXRmb3JtID0gJ3Vua25vd24nO1xuICBsZXQgYWxpY2UgPSAndW5rbm93bic7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgaWYgKHdpbmRvdy5BbmRyb2lkSnNDb25uZWN0b3IpIHtcbiAgICAgIHBsYXRmb3JtID0gJ2FuZHJvaWQnO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBhbGljZSA9IHdpbmRvdy5BbmRyb2lkSnNDb25uZWN0b3IuZ2V0SW5qZWN0TmFtZSgpIHx8IHBsYXRmb3JtO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgfSBlbHNlIGlmICh3aW5kb3cud2Via2l0ICYmIHdpbmRvdy53ZWJraXQubWVzc2FnZUhhbmRsZXJzKSB7XG4gICAgICBwbGF0Zm9ybSA9ICdpb3MnO1xuICAgICAgYWxpY2UgPSAnbWVzc2FnZUhhbmRsZXJzJztcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgY29uc3Qgd2VidmlldyA9IG5ldyBOZG9nSnNCcmlkZ2UoYWxpY2UsIHBsYXRmb3JtKTtcbiAgICB3aW5kb3cuTkRCID0gd2VidmlldztcbiAgICB3aW5kb3cud2VidmlldyA9IHRydWU7XG4gICAgY29uc29sZS5sb2coJ25vdyBpcyBpbiB3ZWJ2aWV3Jyk7XG4gICAgcmV0dXJuIHdlYnZpZXc7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBjb25zdCB3ZWJ2aWV3ID0gbmV3IE5kb2dKc0JyaWRnZShhbGljZSwgcGxhdGZvcm0pO1xuICAgIHdpbmRvdy5OREIgPSB3ZWJ2aWV3O1xuICAgIHdpbmRvdy53ZWJ2aWV3ID0gZmFsc2U7XG4gICAgY29uc29sZS5sb2coJ25vdyBpcyBub3QgaW4gd2VidmlldycpO1xuICAgIHJldHVybiB3ZWJ2aWV3O1xuICB9XG4gIFxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgTkRCO1xuXG5leHBvcnQgY29uc3QgYW5kcm9pZEJhY2tFdmVudCA9IG5ldyBBbmRyb2lkQmFja0V2ZW50KCk7XG4iXX0=