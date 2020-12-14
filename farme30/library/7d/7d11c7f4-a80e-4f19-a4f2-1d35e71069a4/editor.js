System.register(["cce.code-quality.cr", "cc", "./MKMessageManager.js", "./MKSound.js", "./MKEventDispatch.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MKMessageManager, MKSound, MKEventDispatch, AndroidBackEvent, NdogJsBridge, _crd, NDB, androidBackEvent;

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

      AndroidBackEvent = class AndroidBackEvent {
        constructor() {
          _defineProperty(this, "list", void 0);

          this.list = [];
        }

        addEventListener(audience) {
          this.list.push(audience);
        }

        removeEventListener(audience) {
          // console.log(audience);
          // console.log(JSON.stringify(this.list));
          // this.list.forEach(fn=>{
          //   console.log(fn,audience,fn.toString() == audience.toString());
          // })
          this.list = this.list.filter(fn => fn.toString() != audience.toString()); // console.log(this.list);
        }

        broadcast() {
          console.log(this.list);
          this.list.forEach(fn => {
            fn && fn();
          });
          return !!this.list.length;
        }

      };
      NdogJsBridge = class NdogJsBridge {
        constructor(alice, platform) {
          _defineProperty(this, "ALICE", void 0);

          _defineProperty(this, "platform", void 0);

          _defineProperty(this, "PROTOCOL", void 0);

          _defineProperty(this, "pool", void 0);

          _defineProperty(this, "sequenceId", void 0);

          _defineProperty(this, "gameIsStart", false);

          _defineProperty(this, "report", void 0);

          _defineProperty(this, "sleep", void 0);

          _defineProperty(this, "generateRequestObj", (method, params = {}) => {
            const port = this.sequenceId++;
            return {
              uri: `${this.PROTOCOL}://${this.ALICE}:${port}/${method}?${JSON.stringify(params)}`,
              port
            };
          });

          _defineProperty(this, "run", (nativeMethodName, params) => {
            const {
              uri,
              port
            } = this.generateRequestObj(nativeMethodName, params);
            console.log('%c >> request:' + port, 'color:blue', uri);
            return new Promise(resolve => {
              this.pool[port] = resolve;

              if (this.platform === 'android') {
                //通过prompt将消息传递给android；
                window.prompt(uri, '');
              } else if (this.platform === 'ios') {
                this.setupWKWebViewJavascriptBridge(bridge => {
                  bridge.callHandler('handleIOSJsBridge', {
                    url: uri
                  }, response => {
                    // IOS  端的回调函数
                    console.log('IOS back data: ', response);
                    const {
                      port,
                      ...res
                    } = response;
                    this.onFinish(port, res);
                  });
                });
              } else {
                throw new Error(JSON.stringify(this.platform));
              }
            }).catch(e => {
              console.error(e);
              console.error(`jsbridge method fail: ${JSON.stringify({
                uri,
                port
              })}`);
              throw new Error(`jsbridge method fail: ${JSON.stringify({
                uri,
                port
              })}`);
            });
          });

          _defineProperty(this, "setupWKWebViewJavascriptBridge", callback => {
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

          _defineProperty(this, "onFinish", (port, res) => {
            console.log('%c << response:' + port, 'color:green', res);
            const resolve = this.pool[port];
            resolve && resolve(res);
            delete this.pool[port];
          });

          _defineProperty(this, "request", async (method, url, params) => {
            try {
              const result = await this.run(method, {
                url,
                params
              });
              console.log('-------->>>>>', result);

              if (result.err_code || result.msg) {
                console.log(result); // this.toast({msg: result.msg})
                // return false
              }

              return result;
            } catch (e) {
              console.log('0000000', e);
            }
          });

          _defineProperty(this, "closeWebView", () => {
            this.run('closeWebView');
          });

          _defineProperty(this, "shareGameOrImage", async (shareText, imgurl) => {
            try {
              const result = await this.run('shareMediaText', {
                shareText: shareText,
                imgUrl: imgurl,
                is_room: true
              });
              console.log('-------->>>>>', result);

              if (result.err_code || result.msg) {
                console.log(result);
              }

              return result;
            } catch (e) {
              console.log('0000000', e);
            }
          });

          _defineProperty(this, "getUserInfo", async () => {
            const result = await this.run('getUserInfo');
            console.log('-------->>>>>getUserInfo', result);

            if (result.err_code || result.msg) {
              console.log(result);
            }

            return result;
          });

          _defineProperty(this, "getRoomInfo", async () => {
            const result = await this.run('getRoomInfo');
            console.log('-------->>>>>getRoomInfo', result);

            if (result.err_code || result.msg) {
              console.log(result);
            }

            return result;
          });

          _defineProperty(this, "showEmoji", (pos, size, svga) => {
            this.run('playSvga', {
              x: pos[0],
              y: pos[1],
              w: size[0],
              h: size[1],
              url: svga
            });
          });

          _defineProperty(this, "setEngineSwitch", flag => {
            console.log('setEngineSwitch:' + flag);
            (_crd && MKSound === void 0 ? (_reportPossibleCrUseOfMKSound({
              error: Error()
            }), MKSound) : MKSound).audioEngineOn = flag;
            (_crd && MKSound === void 0 ? (_reportPossibleCrUseOfMKSound({
              error: Error()
            }), MKSound) : MKSound).updateMusic();
          });

          _defineProperty(this, "showPlayerInfo", playerId => {
            /*
            openProfile
            {
            "user_id","242424",       //用户id;
            "where", "",              //log；
            "in_room",true/false      //是否是在聊天室内；
            }
            */
            console.log('发送显示用户：' + playerId);
            this.run('openProfile', {
              userId: playerId,
              where: 'Bull Fight',
              in_room: true
            });
          });

          _defineProperty(this, "renderTextureShare", async () => {
            try {
              let wid = Math.floor(document.body.clientWidth) - 2;
              let heig = Math.floor(document.body.clientHeight) - 2;
              const result = await this.run('takeScreenShot', {
                image_coordinate: {
                  x: 0,
                  y: 0,
                  w: wid,
                  h: heig,
                  r: 0
                }
              });
              console.log('-------->>>>>', result);

              if (result.err_code || result.msg) {
                console.log(result);
              }

              return result;
            } catch (e) {
              console.log('0000000', e);
            }
          });

          _defineProperty(this, "toast", (opt = {}) => {
            const defaultOpt = {
              msg: '弹出Toast',
              long: true
            };
            return this.run('toast', Object.assign(defaultOpt, opt));
          });

          _defineProperty(this, "openDeepLink", link => {
            this.run('openDeepLink', {
              link: link
            });
          });

          _defineProperty(this, "sendEvent", sendObj => {
            this.run('sendEvent', {
              eventName: sendObj.eventName,
              eventParams: {
                type: sendObj.type,
                from: sendObj.from,
                result: sendObj.result,
                way: sendObj.way
              }
            });
          });

          _defineProperty(this, "onAndroidStop", () => {
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
            console.log(`webview onAndroidStop: app 进入后台`);
            (_crd && MKEventDispatch === void 0 ? (_reportPossibleCrUseOfMKEventDispatch({
              error: Error()
            }), MKEventDispatch) : MKEventDispatch).I.emit('onAndroidStop');
          });

          _defineProperty(this, "onAndroidResume", () => {
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

            console.log(`webview resume: app 回到前台`);
            (_crd && MKEventDispatch === void 0 ? (_reportPossibleCrUseOfMKEventDispatch({
              error: Error()
            }), MKEventDispatch) : MKEventDispatch).I.emit('onAndroidResume');
          });

          _defineProperty(this, "onAndroidReload", () => {
            // window.location.reload();
            console.log(`webview onAndroidReload`);
          });

          _defineProperty(this, "onAndroidGoBack", () => {
            if (this.gameIsStart) {
              this.run('backEnsure');
              const hasAudience = androidBackEvent.broadcast();
              console.log('androidBackEvent.broadcast: ', !hasAudience);

              if (!hasAudience) {
                console.log('onAndroidGoBack  onAndroidGoBack  onAndroidGoBack');
                (_crd && MKEventDispatch === void 0 ? (_reportPossibleCrUseOfMKEventDispatch({
                  error: Error()
                }), MKEventDispatch) : MKEventDispatch).I.emit('androidGoback');
              }
            } //  MKEventDispatch.I.emit('androidGoback');

          });

          _defineProperty(this, "onSocketReceive", data => {
            // console.log('收到服务器下发消息-----------：');
            // console.log(data);
            //将消息发送给消息管理类;
            // setTimeout(()=>{
            (_crd && MKMessageManager === void 0 ? (_reportPossibleCrUseOfMKMessageManager({
              error: Error()
            }), MKMessageManager) : MKMessageManager).emitSocketMessage(data); // },300);
          });

          _defineProperty(this, "sendAutoJoinEvent", sendObj => {
            console.log('sendObj.eventName:' + sendObj.eventName);
            this.run('sendEvent', {
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
            const galog = [];
            const len = arguments.length;

            for (let i = 0; i < len; i++) {
              galog.push(arguments[i]);
            }

            console.log(JSON.stringify(galog));
            console.log('=======report======='); // }
          };

          this.sleep = ms => {
            return new Promise((resolve, reject) => {
              setTimeout(resolve, ms, 'done');
            });
          };

          if (this.platform == 'ios') {
            this.setupWKWebViewJavascriptBridge(bridge => {
              bridge.registerHandler('onSocketReceive', this.onSocketReceive);
              bridge.registerHandler('onAndroidGoBack', this.onAndroidGoBack);
              bridge.registerHandler('onAndroidReload', this.onAndroidReload);
              bridge.registerHandler('onAndroidResume', this.onAndroidResume);
              bridge.registerHandler('onAndroidStop', this.onAndroidStop);
            });
          }
        }
        /**
         * 生成android解析协议
         */


        /*****************************************************end********************************************************/

        /***********************************************游戏发送数据*******************************************************/

        /*
          * @param MessageType 消息号
          * @parm sendData 发送的数据(有可能没有参数)
        */
        socketSend(messageType, sendData) {
          console.log('socketSend', messageType, sendData);
          window.prompt(messageType, '');
        }
        /***********************************************end*****************************************************/


      };

      NDB = (() => {
        let platform = 'unknown';
        let alice = 'unknown';

        try {
          // eslint-disable-next-line
          if (window.AndroidJsConnector) {
            platform = 'android'; // eslint-disable-next-line

            alice = window.AndroidJsConnector.getInjectName() || platform; // eslint-disable-next-line
          } else if (window.webkit && window.webkit.messageHandlers) {
            platform = 'ios';
            alice = 'messageHandlers';
          } // eslint-disable-next-line


          const webview = new NdogJsBridge(alice, platform);
          window.NDB = webview;
          window.webview = true;
          console.log('now is in webview');
          return webview;
        } catch (e) {
          console.log(e);
          const webview = new NdogJsBridge(alice, platform);
          window.NDB = webview;
          window.webview = false;
          console.log('now is not in webview');
          return webview;
        }
      })();

      _export("default", NDB);

      _export("androidBackEvent", androidBackEvent = new AndroidBackEvent());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9VdGlscy9OREJUUy50cyJdLCJuYW1lcyI6WyJBbmRyb2lkQmFja0V2ZW50IiwiTmRvZ0pzQnJpZGdlIiwiTUtNZXNzYWdlTWFuYWdlciIsIk1LU291bmQiLCJNS0V2ZW50RGlzcGF0Y2giLCJjb25zdHJ1Y3RvciIsImxpc3QiLCJhZGRFdmVudExpc3RlbmVyIiwiYXVkaWVuY2UiLCJwdXNoIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZpbHRlciIsImZuIiwidG9TdHJpbmciLCJicm9hZGNhc3QiLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsImxlbmd0aCIsImFsaWNlIiwicGxhdGZvcm0iLCJtZXRob2QiLCJwYXJhbXMiLCJwb3J0Iiwic2VxdWVuY2VJZCIsInVyaSIsIlBST1RPQ09MIiwiQUxJQ0UiLCJKU09OIiwic3RyaW5naWZ5IiwibmF0aXZlTWV0aG9kTmFtZSIsImdlbmVyYXRlUmVxdWVzdE9iaiIsIlByb21pc2UiLCJyZXNvbHZlIiwicG9vbCIsIndpbmRvdyIsInByb21wdCIsInNldHVwV0tXZWJWaWV3SmF2YXNjcmlwdEJyaWRnZSIsImJyaWRnZSIsImNhbGxIYW5kbGVyIiwidXJsIiwicmVzcG9uc2UiLCJyZXMiLCJvbkZpbmlzaCIsIkVycm9yIiwiY2F0Y2giLCJlIiwiZXJyb3IiLCJjYWxsYmFjayIsIldLV2ViVmlld0phdmFzY3JpcHRCcmlkZ2UiLCJXS1dWSkJDYWxsYmFja3MiLCJ3ZWJraXQiLCJtZXNzYWdlSGFuZGxlcnMiLCJpT1NfTmF0aXZlX0luamVjdEphdmFzY3JpcHQiLCJwb3N0TWVzc2FnZSIsInJlc3VsdCIsInJ1biIsImVycl9jb2RlIiwibXNnIiwic2hhcmVUZXh0IiwiaW1ndXJsIiwiaW1nVXJsIiwiaXNfcm9vbSIsInBvcyIsInNpemUiLCJzdmdhIiwieCIsInkiLCJ3IiwiaCIsImZsYWciLCJhdWRpb0VuZ2luZU9uIiwidXBkYXRlTXVzaWMiLCJwbGF5ZXJJZCIsInVzZXJJZCIsIndoZXJlIiwiaW5fcm9vbSIsIndpZCIsIk1hdGgiLCJmbG9vciIsImRvY3VtZW50IiwiYm9keSIsImNsaWVudFdpZHRoIiwiaGVpZyIsImNsaWVudEhlaWdodCIsImltYWdlX2Nvb3JkaW5hdGUiLCJyIiwib3B0IiwiZGVmYXVsdE9wdCIsImxvbmciLCJPYmplY3QiLCJhc3NpZ24iLCJsaW5rIiwic2VuZE9iaiIsImV2ZW50TmFtZSIsImV2ZW50UGFyYW1zIiwidHlwZSIsImZyb20iLCJ3YXkiLCJhdWRpb0lzT24iLCJJIiwiZW1pdCIsImdhbWVJc1N0YXJ0IiwiaGFzQXVkaWVuY2UiLCJhbmRyb2lkQmFja0V2ZW50IiwiZGF0YSIsImVtaXRTb2NrZXRNZXNzYWdlIiwic291cmNlIiwiaXNfbWF0Y2hfYXV0byIsInN0YXR1cyIsIm1lc3NhZ2VUeXBlIiwidGltZSIsIm5hbWUiLCJyZXBvcnQiLCJndGFnIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJnYWxvZyIsImxlbiIsImkiLCJzbGVlcCIsIm1zIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInJlZ2lzdGVySGFuZGxlciIsIm9uU29ja2V0UmVjZWl2ZSIsIm9uQW5kcm9pZEdvQmFjayIsIm9uQW5kcm9pZFJlbG9hZCIsIm9uQW5kcm9pZFJlc3VtZSIsIm9uQW5kcm9pZFN0b3AiLCJzb2NrZXRTZW5kIiwic2VuZERhdGEiLCJOREIiLCJBbmRyb2lkSnNDb25uZWN0b3IiLCJnZXRJbmplY3ROYW1lIiwid2VidmlldyJdLCJtYXBwaW5ncyI6Ijs7OzBFQXlFTUEsZ0IsRUEwQkFDLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFqRENDLE1BQUFBLGdCOztBQUNBQyxNQUFBQSxPOztBQUNBQyxNQUFBQSxlOzs7Ozs7O0FBcUJESixNQUFBQSxnQixHQUFOLE1BQU1BLGdCQUFOLENBQXVCO0FBRXJCSyxRQUFBQSxXQUFXLEdBQUc7QUFBQTs7QUFDWixlQUFL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R0FBRyxJQUFJdEksWUFBSixDQUFpQmtCLEtBQWpCLEVBQXdCQyxRQUF4QixDQUFoQjtBQUNBZSxVQUFBQSxNQUFNLENBQUNpRyxHQUFQLEdBQWFHLE9BQWI7QUFDQXBHLFVBQUFBLE1BQU0sQ0FBQ29HLE9BQVAsR0FBaUIsSUFBakI7QUFDQXhILFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0EsaUJBQU91SCxPQUFQO0FBQ0QsU0FqQkQsQ0FpQkUsT0FBT3pGLENBQVAsRUFBVTtBQUNWL0IsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk4QixDQUFaO0FBQ0EsZ0JBQU15RixPQUFPLEdBQUcsSUFBSXRJLFlBQUosQ0FBaUJrQixLQUFqQixFQUF3QkMsUUFBeEIsQ0FBaEI7QUFDQWUsVUFBQUEsTUFBTSxDQUFDaUcsR0FBUCxHQUFhRyxPQUFiO0FBQ0FwRyxVQUFBQSxNQUFNLENBQUNvRyxPQUFQLEdBQWlCLEtBQWpCO0FBQ0F4SCxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBLGlCQUFPdUgsT0FBUDtBQUNEO0FBRUYsT0E3QlcsRzs7eUJBK0JHSCxHOztrQ0FFRjVCLGdCLEdBQW1CLElBQUl4RyxnQkFBSixFIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkpTQnJpZGdl5Yqf6IO95Y+C5pWwXG7lh73mlbDlkI0gIHwg5Y+C5pWwIHwg5Ye95pWw5o+P6L+wXG4tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLXwgLS0tLS0tLS0tLS0tLVxub3BlblByb2ZpbGUgIHwgdXNlcklkIHwg5omT5byA55So5oi36K+m5oOF6aG1XG5vcGVuVGFnRGV0YWlsICB8IHRhZ0lk77yMdGFnVGl0bGV8IOaJk+W8gHRhZ+ivpuaDhemhtVxub3BlbkZlZWQgIHwgZmVlZElkfCDmiZPlvIBmZWVkXG5vcGVuQ29tbWVudCAgfCBmZWVkSWR8IOaJk+W8gGZlZWTor4TorrrpobVcbnNob3dCYW5uZXIgIHwgc2xpZGUg5aSa5byg6Ziy5q2i6Lef6ZqP5ruR5YqoIHwg5pi+56S6YmFubmVyIChhbGFza2Hml6ApXG5oaWRlQmFubmVyICB8IHwg6ZqQ6JePYmFubmVyIChhbGFza2Hml6ApXG5zZW5kRXZlbnQgIHwgSlNPTk9iamVjdCBwYXJhbXN8IOWPkemAgeS6i+S7tlxuc2hhcmVBcGsgIHwgYXBrTmFtZXwg5YiG5LqrYXBrXG5zaGFyZVRleHQgIHwgc2hhcmVUZXh0fCDliIbkuqvmloflrZdcbnNoYXJlTWVkaWFUZXh0ICB8IHNoYXJlVGV4dCxpbWdVcmx8IOWIhuS6q+aWh+Wtl+WSjOWbvueJh1xuc2hhcmVGaWxlICB8IHNoYXJlVGV4dCwgZmlsZVBhdGgo5pys5Zyw5paH5Lu26Lev5b6E77yM5LiN6ZyA6KaB5YqgZmlsZTovLykgfCDliIbkuqvmlofku7Zcbm1lZGlhVG9Mb2NhbCAgfCBpbWFnZVVybCx2aWRlb1VybHwg5Zu+54mHL+inhumikSDnvZHnu5zlnLDlnYDovazmnKzlnLDlnLDlnYBcbmJhc2U2NFRvTG9jYWwgIHwgYmFzZTY0VXJsfCDlm77niYdCYXNlNjTovazmnKzlnLDlnLDlnYBcbnRha2VTY3JlZW5TaG90ICB8IOWQjG5ld3NEb2d8IOaIquWbviDvvIjlj5HpgIHlsY/luZXlnZDmoIflkozlrr3pq5jvvIzov5Tlm57lm77niYfmnKzlnLDlnLDlnYDvvIlcbmdldFVzZXJJbmZvICB8IGF2YXRhciwgdXNlck5hbWUgfCDnlKjmiLflkI3vvIzlpLTlg49cbmdldEdyb3VwSWQgIHwgdXNlcklkfCDnlKjmiLdJRO+8iE9iamVjdElk77yMc2VxX2lk77yJIChhbGFza2Hml6ApXG5nZXRVc2VyR3JvdXAgIHwgZ3JvdXAgfCDnlKjmiLdHcm91cCAoYWxhc2th5pegKVxuZ2V0VXNlckxhbmcgIHwgbGFuZ3wg6K+t6KiAXG5vcGVuV2ViVmlldyAgfCB1cmx8IOaJk+W8gOS4gOS4quaWsOeahOWFqOWxj1dlYlZpZXdcbmNsb3NlV2ViVmlldyAgfCB8IOWFs+mXreW9k+WJjVdlYlZpZXdcbmJhY2tQcmVzc2VkICB8IGZlZWRJZHwg5a6i5oi356uv5Li75Yqo5Y+R6YCB5ZCO6YCA5LqL5Lu2XG5jbGlja1Bvc3RCdG4gIHwgfCDngrnlh7vlj5HluIPmjInpkq4sdG9nb+S4k+aciVxuY2xpY2tQb3N0VGV4dCAgfCB8IOeCueWHu+WPkeW4g+aWh+Wtl+aMiemSrix0b2dv5LiT5pyJXG5jbGlja1Bvc3RJbWFnZSAgfCB8IOeCueWHu+WPkeW4g+WbvueJh+aMiemSrix0b2dv5LiT5pyJXG5jbGlja1Bvc3RQaG90byAgfCB8IOeCueWHu+WPkeW4g+aLjeeFp+aMiemSrix0b2dv5LiT5pyJXG5jbGlja1Bvc3RBdWRpbyB8IHwg54K55Ye75Y+R5biD6K+t6Z+z5oyJ6ZKuLHRvZ2/kuJPmnIlcblxuLz09PT1hbGFza2E9PT09L1xuY2xpY2tQb3N0U3RhdHVzTWFrZXIgfCB8IOeCueWHu+WPkeW4g+WItuS9nOW9sembhlxuY2xpY2tQb3N0VmlkZW8gfCB8IOeCueWHu+WPkeW4g+inhumikVxub3BlblRvcGljIHwgdG9waWNJZCB8IOaJk+W8gOS4u+mimOa0u+WKqOmhtemdolxuXG4vPT09PW5ld3Nkb2c9PT09L1xub3BlbkZlZWQgIHwgZmVlZElkLHR5cGUsbGFuZyB8IOi3s+i9rOWIsOafkOS4qmFydGljbGVcbm9wZW5DYXRlZ29yeSB8IGNhdGVfa2V5LHZpZGVvIHwg6Lez6L2s5Yiw5p+Q5Liq5YiG57G7XG5vcGVuVG9waWMgfCBmZWVkSWQsbGFuZyB8IOi3s+i9rOWIsOafkOS4qnRvcGljXG5vcGVuRGVlcExpbmsgfHtsaW5rOiduZXdzZG9nOi8vZGV0YWlsP2lkPTVhMTY1OTQ3MTIzMTNhMDBhMzQxMDlkMSZsYW5nPWVuJnR5cGU9YXJ0aWNsZSd9fOi3s+i9rOWIsOafkOS4qkRFRVBMSU5LXG5vcGVuSHR0cExpbmsgfHtsaW5rOiAnaHR0cDovL3h4eCd9fOS9v+eUqE5ld3NEb2fmiZPlvIDmn5DkuKrmlK/mjIHnmoRIVFRQ6ZO+5o6lXG5cbi89PT09d2FuZ2NhaT09PT0vXG5lbnRlckNoYXRSb29tIHwgcm9vbUlkLHdoZXJlIHwg5LuOd2hlcmXov5vlhaVyb29tSWTogYrlpKnlrqQsXG5vcGVuRGVlcExpbmsgfHtsaW5rOicnfXzot7PovazliLDmn5DkuKpERUVQTElOS1xub3BlblRhYiB8IHRhYiB8XG5cblxuKi9cbmltcG9ydCBNS01lc3NhZ2VNYW5hZ2VyIGZyb20gJy4uL1V0aWxzL01LTWVzc2FnZU1hbmFnZXInO1xuaW1wb3J0IE1LU291bmQgZnJvbSAnLi4vVXRpbHMvTUtTb3VuZCc7XG5pbXBvcnQgTUtFdmVudERpc3BhdGNoIGZyb20gJy4vTUtFdmVudERpc3BhdGNoJztcblxuaW50ZXJmYWNlIElBY3Rpb24ge1xuICBtZXRob2Q6IHN0cmluZztcbiAgcGFyYW1zPzoge1xuICAgIFtwOiBzdHJpbmddOiBhbnk7XG4gIH07XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgZ3RhZz86IChlOiBhbnkpID0+IHZvaWQ7XG4gICAgV0tXVkpCQ2FsbGJhY2tzPzogYW55W107XG4gICAgV0tXZWJWaWV3SmF2YXNjcmlwdEJyaWRnZT86IGFueTtcbiAgICB3ZWJraXQ/OiBhbnk7XG4gICAgTkRCPzogYW55O1xuICAgIHdlYnZpZXc/OiBhbnk7XG4gICAgQW5kcm9pZEpzQ29ubmVjdG9yPzogYW55O1xuICB9XG59XG5cbmNsYXNzIEFuZHJvaWRCYWNrRXZlbnQge1xuICBwcml2YXRlIGxpc3Q6IGFueVtdO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpc3QgPSBbXTtcbiAgfVxuICBhZGRFdmVudExpc3RlbmVyKGF1ZGllbmNlOiBhbnkpIHtcbiAgICB0aGlzLmxpc3QucHVzaChhdWRpZW5jZSk7XG4gIH1cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihhdWRpZW5jZTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coYXVkaWVuY2UpO1xuICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMubGlzdCkpO1xuICAgIC8vIHRoaXMubGlzdC5mb3JFYWNoKGZuPT57XG4gICAgLy8gICBjb25zb2xlLmxvZyhmbixhdWRpZW5jZSxmbi50b1N0cmluZygpID09IGF1ZGllbmNlLnRvU3RyaW5nKCkpO1xuICAgIC8vIH0pXG4gICAgdGhpcy5saXN0ID0gdGhpcy5saXN0LmZpbHRlcihmbiA9PiBmbi50b1N0cmluZygpICE9IGF1ZGllbmNlLnRvU3RyaW5nKCkpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubGlzdCk7XG4gIH1cbiAgYnJvYWRjYXN0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdCk7XG4gICAgdGhpcy5saXN0LmZvckVhY2goZm4gPT4ge1xuICAgICAgZm4gJiYgZm4oKTtcbiAgICB9KTtcbiAgICByZXR1cm4gISF0aGlzLmxpc3QubGVuZ3RoO1xuICB9XG59XG5cbmNsYXNzIE5kb2dKc0JyaWRnZSB7XG4gIEFMSUNFOiBzdHJpbmc7XG4gIHBsYXRmb3JtOiBzdHJpbmc7XG4gIFBST1RPQ09MOiBzdHJpbmc7XG4gIHBvb2w6IGFueTtcbiAgc2VxdWVuY2VJZDogbnVtYmVyO1xuICBnYW1lSXNTdGFydDogYm9vbGVhbiA9IGZhbHNlO1xuICByZXBvcnQ6ICgpID0+IHZvaWQ7XG4gIHNsZWVwOiAobXM6IG51bWJlcikgPT4gUHJvbWlzZTxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKGFsaWNlOiBhbnksIHBsYXRmb3JtOiBhbnkpIHtcbiAgICB0aGlzLkFMSUNFID0gYWxpY2U7XG4gICAgdGhpcy5wbGF0Zm9ybSA9IHBsYXRmb3JtO1xuICAgIHRoaXMuUFJPVE9DT0wgPSAnTkRCJztcbiAgICB0aGlzLnBvb2wgPSB7fTtcbiAgICB0aGlzLnNlcXVlbmNlSWQgPSAwO1xuICAgIHRoaXMucmVwb3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCF3aW5kb3cuZ3RhZykgcmV0dXJuO1xuICAgICAgd2luZG93Lmd0YWcuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09cmVwb3J0PT09PT09PScpO1xuICAgICAgY29uc3QgZ2Fsb2cgPSBbXTtcbiAgICAgIGNvbnN0IGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGdhbG9nLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGdhbG9nKSk7XG4gICAgICBjb25zb2xlLmxvZygnPT09PT09PXJlcG9ydD09PT09PT0nKTtcbiAgICAgIC8vIH1cbiAgICB9O1xuICAgIHRoaXMuc2xlZXAgPSBtcyA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIG1zLCAnZG9uZScpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLnBsYXRmb3JtID09ICdpb3MnKSB7XG4gICAgICB0aGlzLnNldHVwV0tXZWJWaWV3SmF2YXNjcmlwdEJyaWRnZSgoYnJpZGdlOiBhbnkpID0+IHtcbiAgICAgICAgYnJpZGdlLnJlZ2lzdGVySGFuZGxlcignb25Tb2NrZXRSZWNlaXZlJywgdGhpcy5vblNvY2tldFJlY2VpdmUpO1xuICAgICAgICBicmlkZ2UucmVnaXN0ZXJIYW5kbGVyKCdvbkFuZHJvaWRHb0JhY2snLCB0aGlzLm9uQW5kcm9pZEdvQmFjayk7XG4gICAgICAgIGJyaWRnZS5yZWdpc3RlckhhbmRsZXIoJ29uQW5kcm9pZFJlbG9hZCcsIHRoaXMub25BbmRyb2lkUmVsb2FkKTtcbiAgICAgICAgYnJpZGdlLnJlZ2lzdGVySGFuZGxlcignb25BbmRyb2lkUmVzdW1lJywgdGhpcy5vbkFuZHJvaWRSZXN1bWUpO1xuICAgICAgICBicmlkZ2UucmVnaXN0ZXJIYW5kbGVyKCdvbkFuZHJvaWRTdG9wJywgdGhpcy5vbkFuZHJvaWRTdG9wKTtcblxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiDnlJ/miJBhbmRyb2lk6Kej5p6Q5Y2P6K6uXG4gICAqL1xuICBnZW5lcmF0ZVJlcXVlc3RPYmogPSAobWV0aG9kOiBhbnksIHBhcmFtcyA9IHt9KSA9PiB7XG4gICAgY29uc3QgcG9ydCA9IHRoaXMuc2VxdWVuY2VJZCsrO1xuICAgIHJldHVybiB7XG4gICAgICB1cmk6IGAke3RoaXMuUFJPVE9DT0x9Oi8vJHt0aGlzLkFMSUNFfToke3BvcnR9LyR7bWV0aG9kfT8ke0pTT04uc3RyaW5naWZ5KHBhcmFtcyl9YCxcbiAgICAgIHBvcnQsXG4gICAgfTtcbiAgfTtcbiAgLyoqXG4gICAqIOmAmui/h3dpbmRvdy5wcm9tcHTlsIblj4LmlbDkvKDpgJLnu5nlrqLmiLfnq68s5bm2562J5b6F5Zue6LCDXG4gICAqIEBuYXRpdmVNZXRob2ROYW1lIHtTdHJpbmd9IOWuouaIt+err+WTjeW6lOeahOWHveaVsOWQjSjmj5DliY3kurrlt6XnuqblrpopXG4gICAqIEBwYXJhbXMge09iamVjdH0g6ZyA6KaB5Lyg6YCS55qE5Y+C5pWwXG4gICAqL1xuICBydW46IChtOiBzdHJpbmcsIHA/OiBvYmplY3QpID0+IFByb21pc2U8eyBlcnJfY29kZT86IHN0cmluZzsgbXNnPzogc3RyaW5nIH0+ID0gKFxuICAgIG5hdGl2ZU1ldGhvZE5hbWUsXG4gICAgcGFyYW1zLFxuICApID0+IHtcbiAgICBjb25zdCB7IHVyaSwgcG9ydCB9ID0gdGhpcy5nZW5lcmF0ZVJlcXVlc3RPYmoobmF0aXZlTWV0aG9kTmFtZSwgcGFyYW1zKTtcbiAgICBjb25zb2xlLmxvZygnJWMgPj4gcmVxdWVzdDonICsgcG9ydCwgJ2NvbG9yOmJsdWUnLCB1cmkpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMucG9vbFtwb3J0XSA9IHJlc29sdmU7XG4gICAgICBpZiAodGhpcy5wbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnKSB7XG4gICAgICAgIC8v6YCa6L+HcHJvbXB05bCG5raI5oGv5Lyg6YCS57uZYW5kcm9pZO+8m1xuICAgICAgICB3aW5kb3cucHJvbXB0KHVyaSwgJycpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYXRmb3JtID09PSAnaW9zJykge1xuICAgICAgICB0aGlzLnNldHVwV0tXZWJWaWV3SmF2YXNjcmlwdEJyaWRnZSggYnJpZGdlID0+IHtcbiAgICAgICAgICBicmlkZ2UuY2FsbEhhbmRsZXIoJ2hhbmRsZUlPU0pzQnJpZGdlJywgeyB1cmw6IHVyaSB9LCByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAvLyBJT1MgIOerr+eahOWbnuiwg+WHveaVsFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0lPUyBiYWNrIGRhdGE6ICcsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcG9ydCwgLi4ucmVzIH0gPSByZXNwb25zZTtcbiAgICAgICAgICAgIHRoaXMub25GaW5pc2gocG9ydCwgcmVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSlNPTi5zdHJpbmdpZnkodGhpcy5wbGF0Zm9ybSkpO1xuICAgICAgfVxuICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYGpzYnJpZGdlIG1ldGhvZCBmYWlsOiAke0pTT04uc3RyaW5naWZ5KHsgdXJpLCBwb3J0IH0pfWApO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBqc2JyaWRnZSBtZXRob2QgZmFpbDogJHtKU09OLnN0cmluZ2lmeSh7IHVyaSwgcG9ydCB9KX1gKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICoganNicmlkZ2Ug6LCD55SoaW9zXG4gICAqIEBtZW1iZXJvZiBOZG9nSnNCcmlkZ2VcbiAgICovXG4gIHNldHVwV0tXZWJWaWV3SmF2YXNjcmlwdEJyaWRnZSA9IGNhbGxiYWNrID0+IHtcbiAgICBpZiAod2luZG93LldLV2ViVmlld0phdmFzY3JpcHRCcmlkZ2UpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgcmV0dXJuIGNhbGxiYWNrKHdpbmRvdy5XS1dlYlZpZXdKYXZhc2NyaXB0QnJpZGdlKTtcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5XS1dWSkJDYWxsYmFja3MpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuV0tXVkpCQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgIH1cbiAgICB3aW5kb3cuV0tXVkpCQ2FsbGJhY2tzID0gW2NhbGxiYWNrXTtcbiAgICB3aW5kb3cud2Via2l0Lm1lc3NhZ2VIYW5kbGVycy5pT1NfTmF0aXZlX0luamVjdEphdmFzY3JpcHQucG9zdE1lc3NhZ2UobnVsbCk7XG4gIH07XG4gIC8qKlxuICAgKiDkvpvlrqLmiLfnq6/lm57osINcbiAgICogQHBvcnQge051bWJlcn0g5b2T5YmN5Zue6LCD5rGg5Lit55qEa2V5LCDlr7nlupTkuIDkuKrlm57osIPlh73mlbBcbiAgICogQHJlcyB7T2JqZWN0fSDlrqLmiLfnq6/nmoTlpITnkIbnu5PmnpwsIOS4gOiIrOaYr2pzb27moLzlvI9cbiAgICovXG4gIG9uRmluaXNoID0gKHBvcnQsIHJlcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKCclYyA8PCByZXNwb25zZTonICsgcG9ydCwgJ2NvbG9yOmdyZWVuJywgcmVzKTtcbiAgICBjb25zdCByZXNvbHZlID0gdGhpcy5wb29sW3BvcnRdO1xuICAgIHJlc29sdmUgJiYgcmVzb2x2ZShyZXMpO1xuICAgIGRlbGV0ZSB0aGlzLnBvb2xbcG9ydF07XG4gIH07XG4gIC8qKlxuICAgKiDlj5HpgIHnvZHnu5zor7fmsYJcbiAgICogQG1ldGhvZCB7U3RyaW5nfSBnZXQscG9zdCxwdXQsZGVsXG4gICAqIEB1cmwge1N0cmluZ30g6K+35rGCdXJsc2V0RW5naW5lU3dpdGNoMVxuICAgKiBAcGFyYW1zIHtPYmplY3R9IOWPkemAgeWPguaVsFxuICAgKi9cbiAgcmVxdWVzdCA9IGFzeW5jIChtZXRob2QsIHVybCwgcGFyYW1zKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucnVuKG1ldGhvZCwgeyB1cmwsIHBhcmFtcyB9KTtcbiAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLT4+Pj4+JywgcmVzdWx0KTtcbiAgICAgIGlmIChyZXN1bHQuZXJyX2NvZGUgfHwgcmVzdWx0Lm1zZykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAvLyB0aGlzLnRvYXN0KHttc2c6IHJlc3VsdC5tc2d9KVxuICAgICAgICAvLyByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coJzAwMDAwMDAnLCBlKTtcbiAgICB9XG4gIH07XG5cbiAgY2xvc2VXZWJWaWV3ID0gKCkgPT4ge1xuICAgIHRoaXMucnVuKCdjbG9zZVdlYlZpZXcnKTtcbiAgfVxuXG4gIC8v5YiG5Lqr5Zu+54mHO1xuICBzaGFyZUdhbWVPckltYWdlID0gYXN5bmMgKHNoYXJlVGV4dCwgaW1ndXJsKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucnVuKCdzaGFyZU1lZGlhVGV4dCcsIHsgc2hhcmVUZXh0OiBzaGFyZVRleHQsIGltZ1VybDogaW1ndXJsLCBpc19yb29tOiB0cnVlIH0pO1xuICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tPj4+Pj4nLCByZXN1bHQpO1xuICAgICAgaWYgKHJlc3VsdC5lcnJfY29kZSB8fCByZXN1bHQubXNnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCcwMDAwMDAwJywgZSk7XG4gICAgfVxuICB9XG5cblxuICBnZXRVc2VySW5mbyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJ1bignZ2V0VXNlckluZm8nKTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0+Pj4+PmdldFVzZXJJbmZvJywgcmVzdWx0KTtcbiAgICBpZiAocmVzdWx0LmVycl9jb2RlIHx8IHJlc3VsdC5tc2cpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuXG4gIGdldFJvb21JbmZvID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucnVuKCdnZXRSb29tSW5mbycpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLT4+Pj4+Z2V0Um9vbUluZm8nLCByZXN1bHQpO1xuICAgIGlmIChyZXN1bHQuZXJyX2NvZGUgfHwgcmVzdWx0Lm1zZykge1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8v5pi+56S66KGo5oOF77ybXG4gIHNob3dFbW9qaSA9IChwb3MsIHNpemUsIHN2Z2EpID0+IHtcbiAgICB0aGlzLnJ1bigncGxheVN2Z2EnLCB7IHg6IHBvc1swXSwgeTogcG9zWzFdLCB3OiBzaXplWzBdLCBoOiBzaXplWzFdLCB1cmw6IHN2Z2EgfSk7XG4gIH1cblxuICAvL+iuvue9rumfs+aViOW8gOWFsztcbiAgc2V0RW5naW5lU3dpdGNoID0gKGZsYWcpID0+IHtcbiAgICBjb25zb2xlLmxvZygnc2V0RW5naW5lU3dpdGNoOicgKyBmbGFnKTtcbiAgICBNS1NvdW5kLmF1ZGlvRW5naW5lT24gPSBmbGFnO1xuICAgIE1LU291bmQudXBkYXRlTXVzaWMoKTtcbiAgfVxuXG4gIHNob3dQbGF5ZXJJbmZvID0gKHBsYXllcklkKSA9PiB7XG4gICAgLypcbiAgICBvcGVuUHJvZmlsZVxuICAgIHtcbiAgICBcInVzZXJfaWRcIixcIjI0MjQyNFwiLCAgICAgICAvL+eUqOaIt2lkO1xuICAgIFwid2hlcmVcIiwgXCJcIiwgICAgICAgICAgICAgIC8vbG9n77ybXG4gICAgXCJpbl9yb29tXCIsdHJ1ZS9mYWxzZSAgICAgIC8v5piv5ZCm5piv5Zyo6IGK5aSp5a6k5YaF77ybXG4gICAgfVxuICAgICovXG4gICAgY29uc29sZS5sb2coJ+WPkemAgeaYvuekuueUqOaIt++8micgKyBwbGF5ZXJJZCk7XG4gICAgdGhpcy5ydW4oJ29wZW5Qcm9maWxlJywgeyB1c2VySWQ6IHBsYXllcklkLCB3aGVyZTogJ0J1bGwgRmlnaHQnLCBpbl9yb29tOiB0cnVlIH0pO1xuICB9XG5cbiAgLy/miKrlm77liIbkuqs7XG4gIHJlbmRlclRleHR1cmVTaGFyZSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgbGV0IHdpZCA9IE1hdGguZmxvb3IoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCkgLSAyO1xuICAgICAgbGV0IGhlaWcgPSBNYXRoLmZsb29yKGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KSAtIDI7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJ1bigndGFrZVNjcmVlblNob3QnLCB7IGltYWdlX2Nvb3JkaW5hdGU6IHsgeDogMCwgeTogMCwgdzogd2lkLCBoOiBoZWlnLCByOiAwIH0gfSk7XG4gICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0+Pj4+PicsIHJlc3VsdCk7XG4gICAgICBpZiAocmVzdWx0LmVycl9jb2RlIHx8IHJlc3VsdC5tc2cpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coJzAwMDAwMDAnLCBlKTtcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiDlvLnlh7rljp/nlJ90b2FzdFxuICAgKi9cbiAgdG9hc3QgPSAob3B0ID0ge30pID0+IHtcbiAgICBjb25zdCBkZWZhdWx0T3B0ID0ge1xuICAgICAgbXNnOiAn5by55Ye6VG9hc3QnLFxuICAgICAgbG9uZzogdHJ1ZSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLnJ1bigndG9hc3QnLCBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHQsIG9wdCkpO1xuICB9O1xuXG4gIG9wZW5EZWVwTGluayA9IGxpbmsgPT4ge1xuICAgIHRoaXMucnVuKCdvcGVuRGVlcExpbmsnLCB7IGxpbms6IGxpbmsgfSk7XG4gIH07XG5cbiAgc2VuZEV2ZW50ID0gc2VuZE9iaiA9PiB7XG4gICAgdGhpcy5ydW4oJ3NlbmRFdmVudCcsIHsgZXZlbnROYW1lOiBzZW5kT2JqLmV2ZW50TmFtZSwgZXZlbnRQYXJhbXM6IHsgdHlwZTogc2VuZE9iai50eXBlLCBmcm9tOiBzZW5kT2JqLmZyb20sIHJlc3VsdDogc2VuZE9iai5yZXN1bHQsIHdheTogc2VuZE9iai53YXkgfSB9KTtcbiAgfVxuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKkFQUOiwg+eUqOa4uOaIj+aOpeWPoyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIC8qKlxuICAgKiBhcHDov5vlhaXlkI7lj7BcbiAgICovXG4gIG9uQW5kcm9pZFN0b3AgPSAoKSA9PiB7XG4gICAgTUtTb3VuZC5hdWRpb0lzT24gPSBNS1NvdW5kLmF1ZGlvRW5naW5lT247XG4gICAgTUtTb3VuZC5hdWRpb0VuZ2luZU9uID0gZmFsc2U7XG4gICAgTUtTb3VuZC51cGRhdGVNdXNpYygpO1xuICAgIGNvbnNvbGUubG9nKGB3ZWJ2aWV3IG9uQW5kcm9pZFN0b3A6IGFwcCDov5vlhaXlkI7lj7BgKTtcbiAgICBNS0V2ZW50RGlzcGF0Y2guSS5lbWl0KCdvbkFuZHJvaWRTdG9wJyk7XG4gIH07XG4gIC8qKlxuICAgKiBhcHDph43mlrDov5vlhaXliY3lj7BcbiAgICovXG4gIG9uQW5kcm9pZFJlc3VtZSA9ICgpID0+IHtcbiAgICBpZiAoTUtTb3VuZC5hdWRpb0lzT24pIHtcbiAgICAgIE1LU291bmQuYXVkaW9FbmdpbmVPbiA9IHRydWU7XG4gICAgICBNS1NvdW5kLnVwZGF0ZU11c2ljKCk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGB3ZWJ2aWV3IHJlc3VtZTogYXBwIOWbnuWIsOWJjeWPsGApO1xuICAgIE1LRXZlbnREaXNwYXRjaC5JLmVtaXQoJ29uQW5kcm9pZFJlc3VtZScpO1xuICB9O1xuICAvKlxuICAgICog5Yi35pawd2Vidmlld1xuICAgKi9cbiAgb25BbmRyb2lkUmVsb2FkID0gKCkgPT4ge1xuICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICBjb25zb2xlLmxvZyhgd2VidmlldyBvbkFuZHJvaWRSZWxvYWRgKTtcbiAgfTtcblxuICAvKlxuICAgICAg5ZON5bqUYW5kcm9pZOWbnumAgOS6i+S7tlxuICAgICAgMS4g5aaC5b2T5YmN6aG16Z2i5pyJ5by556qXLCDlhYjlhbPlvLnnqpdcbiAgICAgIDIuIOWmgiBoaXN0b3J5Lmxlbmd0aCA+IDEsIOWImeWbnumAgOWIsOS4iuS4gOmhtVxuICAgICAgMy4g5aaC5p6c6YCA5peg5Y+v6YCALCDlsLHnm7TmjqXlhbPpl613ZWJ2aWV3XG4gICAgICDmr4/mrKHlk43lupTpnIDopoHnu5nlrqLmiLfnq6/pgJrnn6UsIOWmguaenDUwMG1z5YaF5LiN5Zue6LCD5a6i5oi356uvLCDlrqLmiLfnq6/kvJrorqTkuLrnvZHpobXlh7rnjrDlvILluLjmiJbogIXmiZPlvIDkuobnrKzkuInmlrnnvZHpobUsIOWuouaIt+err+S8muWFs+mXreW9k+WJjXdlYnZpZXdcbiAgKi9cbiAgb25BbmRyb2lkR29CYWNrID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmdhbWVJc1N0YXJ0KSB7XG4gICAgICB0aGlzLnJ1bignYmFja0Vuc3VyZScpO1xuICAgICAgY29uc3QgaGFzQXVkaWVuY2UgPSBhbmRyb2lkQmFja0V2ZW50LmJyb2FkY2FzdCgpO1xuICAgICAgY29uc29sZS5sb2coJ2FuZHJvaWRCYWNrRXZlbnQuYnJvYWRjYXN0OiAnLCAhaGFzQXVkaWVuY2UpO1xuICAgICAgaWYgKCFoYXNBdWRpZW5jZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25BbmRyb2lkR29CYWNrICBvbkFuZHJvaWRHb0JhY2sgIG9uQW5kcm9pZEdvQmFjaycpO1xuICAgICAgICBNS0V2ZW50RGlzcGF0Y2guSS5lbWl0KCdhbmRyb2lkR29iYWNrJyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vICBNS0V2ZW50RGlzcGF0Y2guSS5lbWl0KCdhbmRyb2lkR29iYWNrJyk7XG4gIH07XG5cbiAgLypcbiAgICAqIEFwcOaUtuWIsOacjeWKoeWZqHNvY2tldOaVsOaNruS7peWQju+8jOi9rOWPkee7mea4uOaIjztcbiAgICBzdGFydDrljLnphY3liLDlvIDlp4vvvJtcbiAgICByb2xs77ya5o635a6M6aqw5a2QXG4gICAgbW92ZTrnp7vliqjpqrDlrZBcbiAgICBza2lw77ya6K+l5o636aqw5a2Q5LqGXG4gICAgbGVhdmXvvJrmnInkurrnprvlvIBcbiAgICBqb2lu77ya5pyJ5Lq65Yqg5YWl77yI5pat57q/6YeN6L+e5LqG77yJXG4gICovXG4gIG9uU29ja2V0UmVjZWl2ZSA9IChkYXRhKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ+aUtuWIsOacjeWKoeWZqOS4i+WPkea2iOaBry0tLS0tLS0tLS0t77yaJyk7XG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgLy/lsIbmtojmga/lj5HpgIHnu5nmtojmga/nrqHnkIbnsbs7XG4gICAgLy8gc2V0VGltZW91dCgoKT0+e1xuICAgIE1LTWVzc2FnZU1hbmFnZXIuZW1pdFNvY2tldE1lc3NhZ2UoZGF0YSk7XG4gICAgLy8gfSwzMDApO1xuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqZW5kKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq5ri45oiP5Y+R6YCB5pWw5o2uKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKlxuICAgICogQHBhcmFtIE1lc3NhZ2VUeXBlIOa2iOaBr+WPt1xuICAgICogQHBhcm0gc2VuZERhdGEg5Y+R6YCB55qE5pWw5o2uKOacieWPr+iDveayoeacieWPguaVsClcbiAgKi9cbiAgc29ja2V0U2VuZChtZXNzYWdlVHlwZTogc3RyaW5nLCBzZW5kRGF0YT86IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdzb2NrZXRTZW5kJywgbWVzc2FnZVR5cGUsIHNlbmREYXRhKTtcbiAgICB3aW5kb3cucHJvbXB0KG1lc3NhZ2VUeXBlLCAnJyk7XG5cbiAgfVxuICBzZW5kQXV0b0pvaW5FdmVudCA9IHNlbmRPYmogPT4ge1xuICAgIGNvbnNvbGUubG9nKCdzZW5kT2JqLmV2ZW50TmFtZTonK3NlbmRPYmouZXZlbnROYW1lKTtcbiAgICB0aGlzLnJ1bignc2VuZEV2ZW50Jywge1xuICAgICAgZXZlbnROYW1lOiBzZW5kT2JqLmV2ZW50TmFtZSxcbiAgICAgIGV2ZW50UGFyYW1zOiB7XG4gICAgICAgIHR5cGU6IHNlbmRPYmoudHlwZSwgc291cmNlOiBzZW5kT2JqLnNvdXJjZSwgaXNfbWF0Y2hfYXV0bzogc2VuZE9iai5pc19tYXRjaF9hdXRvLFxuICAgICAgICBzdGF0dXM6IHNlbmRPYmouc3RhdHVzLCBtZXNzYWdlVHlwZTogc2VuZE9iai5tZXNzYWdlVHlwZSwgdGltZTogc2VuZE9iai50aW1lLG5hbWU6c2VuZE9iai5uYW1lLHJlc3VsdDpzZW5kT2JqLnJlc3VsdFxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKmVuZCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cbn1cblxuY29uc3QgTkRCID0gKCgpID0+IHtcbiAgbGV0IHBsYXRmb3JtID0gJ3Vua25vd24nO1xuICBsZXQgYWxpY2UgPSAndW5rbm93bic7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgaWYgKHdpbmRvdy5BbmRyb2lkSnNDb25uZWN0b3IpIHtcbiAgICAgIHBsYXRmb3JtID0gJ2FuZHJvaWQnO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBhbGljZSA9IHdpbmRvdy5BbmRyb2lkSnNDb25uZWN0b3IuZ2V0SW5qZWN0TmFtZSgpIHx8IHBsYXRmb3JtO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgfSBlbHNlIGlmICh3aW5kb3cud2Via2l0ICYmIHdpbmRvdy53ZWJraXQubWVzc2FnZUhhbmRsZXJzKSB7XG4gICAgICBwbGF0Zm9ybSA9ICdpb3MnO1xuICAgICAgYWxpY2UgPSAnbWVzc2FnZUhhbmRsZXJzJztcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgY29uc3Qgd2VidmlldyA9IG5ldyBOZG9nSnNCcmlkZ2UoYWxpY2UsIHBsYXRmb3JtKTtcbiAgICB3aW5kb3cuTkRCID0gd2VidmlldztcbiAgICB3aW5kb3cud2VidmlldyA9IHRydWU7XG4gICAgY29uc29sZS5sb2coJ25vdyBpcyBpbiB3ZWJ2aWV3Jyk7XG4gICAgcmV0dXJuIHdlYnZpZXc7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBjb25zdCB3ZWJ2aWV3ID0gbmV3IE5kb2dKc0JyaWRnZShhbGljZSwgcGxhdGZvcm0pO1xuICAgIHdpbmRvdy5OREIgPSB3ZWJ2aWV3O1xuICAgIHdpbmRvdy53ZWJ2aWV3ID0gZmFsc2U7XG4gICAgY29uc29sZS5sb2coJ25vdyBpcyBub3QgaW4gd2VidmlldycpO1xuICAgIHJldHVybiB3ZWJ2aWV3O1xuICB9XG4gIFxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgTkRCO1xuXG5leHBvcnQgY29uc3QgYW5kcm9pZEJhY2tFdmVudCA9IG5ldyBBbmRyb2lkQmFja0V2ZW50KCk7XG4iXX0=