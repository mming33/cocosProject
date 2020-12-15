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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vVXRpbHMvTkRCVFMudHMiXSwibmFtZXMiOlsiQW5kcm9pZEJhY2tFdmVudCIsIk5kb2dKc0JyaWRnZSIsIk1LTWVzc2FnZU1hbmFnZXIiLCJNS1NvdW5kIiwiTUtFdmVudERpc3BhdGNoIiwiY29uc3RydWN0b3IiLCJsaXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImF1ZGllbmNlIiwicHVzaCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmaWx0ZXIiLCJmbiIsInRvU3RyaW5nIiwiYnJvYWRjYXN0IiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJsZW5ndGgiLCJhbGljZSIsInBsYXRmb3JtIiwibWV0aG9kIiwicGFyYW1zIiwicG9ydCIsInNlcXVlbmNlSWQiLCJ1cmkiLCJQUk9UT0NPTCIsIkFMSUNFIiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hdGl2ZU1ldGhvZE5hbWUiLCJnZW5lcmF0ZVJlcXVlc3RPYmoiLCJQcm9taXNlIiwicmVzb2x2ZSIsInBvb2wiLCJ3aW5kb3ciLCJwcm9tcHQiLCJzZXR1cFdLV2ViVmlld0phdmFzY3JpcHRCcmlkZ2UiLCJicmlkZ2UiLCJjYWxsSGFuZGxlciIsInVybCIsInJlc3BvbnNlIiwicmVzIiwib25GaW5pc2giLCJFcnJvciIsImNhdGNoIiwiZSIsImVycm9yIiwiY2FsbGJhY2siLCJXS1dlYlZpZXdKYXZhc2NyaXB0QnJpZGdlIiwiV0tXVkpCQ2FsbGJhY2tzIiwid2Via2l0IiwibWVzc2FnZUhhbmRsZXJzIiwiaU9TX05hdGl2ZV9JbmplY3RKYXZhc2NyaXB0IiwicG9zdE1lc3NhZ2UiLCJyZXN1bHQiLCJydW4iLCJlcnJfY29kZSIsIm1zZyIsInNoYXJlVGV4dCIsImltZ3VybCIsImltZ1VybCIsImlzX3Jvb20iLCJwb3MiLCJzaXplIiwic3ZnYSIsIngiLCJ5IiwidyIsImgiLCJmbGFnIiwiYXVkaW9FbmdpbmVPbiIsInVwZGF0ZU11c2ljIiwicGxheWVySWQiLCJ1c2VySWQiLCJ3aGVyZSIsImluX3Jvb20iLCJ3aWQiLCJNYXRoIiwiZmxvb3IiLCJkb2N1bWVudCIsImJvZHkiLCJjbGllbnRXaWR0aCIsImhlaWciLCJjbGllbnRIZWlnaHQiLCJpbWFnZV9jb29yZGluYXRlIiwiciIsIm9wdCIsImRlZmF1bHRPcHQiLCJsb25nIiwiT2JqZWN0IiwiYXNzaWduIiwibGluayIsInNlbmRPYmoiLCJldmVudE5hbWUiLCJldmVudFBhcmFtcyIsInR5cGUiLCJmcm9tIiwid2F5IiwiYXVkaW9Jc09uIiwiSSIsImVtaXQiLCJnYW1lSXNTdGFydCIsImhhc0F1ZGllbmNlIiwiYW5kcm9pZEJhY2tFdmVudCIsImRhdGEiLCJlbWl0U29ja2V0TWVzc2FnZSIsInNvdXJjZSIsImlzX21hdGNoX2F1dG8iLCJzdGF0dXMiLCJtZXNzYWdlVHlwZSIsInRpbWUiLCJuYW1lIiwicmVwb3J0IiwiZ3RhZyIsImFwcGx5IiwiYXJndW1lbnRzIiwiZ2Fsb2ciLCJsZW4iLCJpIiwic2xlZXAiLCJtcyIsInJlamVjdCIsInNldFRpbWVvdXQiLCJyZWdpc3RlckhhbmRsZXIiLCJvblNvY2tldFJlY2VpdmUiLCJvbkFuZHJvaWRHb0JhY2siLCJvbkFuZHJvaWRSZWxvYWQiLCJvbkFuZHJvaWRSZXN1bWUiLCJvbkFuZHJvaWRTdG9wIiwic29ja2V0U2VuZCIsInNlbmREYXRhIiwiTkRCIiwiQW5kcm9pZEpzQ29ubmVjdG9yIiwiZ2V0SW5qZWN0TmFtZSIsIndlYnZpZXciXSwibWFwcGluZ3MiOiI7OzswRUF5RU1BLGdCLEVBMEJBQyxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBakRDQyxNQUFBQSxnQjs7QUFDQUMsTUFBQUEsTzs7QUFDQUMsTUFBQUEsZTs7Ozs7OztBQXFCREosTUFBQUEsZ0IsR0FBTixNQUFNQSxnQkFBTixDQUF1QjtBQUVyQkssUUFBQUEsV0FBVyxHQUFHO0FBQUE7O0FBQ1osZUFBS0MsSUFB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SUFBSXRJLFlBQUosQ0FBaUJrQixLQUFqQixFQUF3QkMsUUFBeEIsQ0FBaEI7QUFDQWUsVUFBQUEsTUFBTSxDQUFDaUcsR0FBUCxHQUFhRyxPQUFiO0FBQ0FwRyxVQUFBQSxNQUFNLENBQUNvRyxPQUFQLEdBQWlCLElBQWpCO0FBQ0F4SCxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBLGlCQUFPdUgsT0FBUDtBQUNELFNBakJELENBaUJFLE9BQU96RixDQUFQLEVBQVU7QUFDVi9CLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZOEIsQ0FBWjtBQUNBLGdCQUFNeUYsT0FBTyxHQUFHLElBQUl0SSxZQUFKLENBQWlCa0IsS0FBakIsRUFBd0JDLFFBQXhCLENBQWhCO0FBQ0FlLFVBQUFBLE1BQU0sQ0FBQ2lHLEdBQVAsR0FBYUcsT0FBYjtBQUNBcEcsVUFBQUEsTUFBTSxDQUFDb0csT0FBUCxHQUFpQixLQUFqQjtBQUNBeEgsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDQSxpQkFBT3VILE9BQVA7QUFDRDtBQUVGLE9BN0JXLEc7O3lCQStCR0gsRzs7a0NBRUY1QixnQixHQUFtQixJQUFJeEcsZ0JBQUosRSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5KU0JyaWRnZeWKn+iDveWPguaVsFxu5Ye95pWw5ZCNICB8IOWPguaVsCB8IOWHveaVsOaPj+i/sFxuLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS18IC0tLS0tLS0tLS0tLS1cbm9wZW5Qcm9maWxlICB8IHVzZXJJZCB8IOaJk+W8gOeUqOaIt+ivpuaDhemhtVxub3BlblRhZ0RldGFpbCAgfCB0YWdJZO+8jHRhZ1RpdGxlfCDmiZPlvIB0YWfor6bmg4XpobVcbm9wZW5GZWVkICB8IGZlZWRJZHwg5omT5byAZmVlZFxub3BlbkNvbW1lbnQgIHwgZmVlZElkfCDmiZPlvIBmZWVk6K+E6K666aG1XG5zaG93QmFubmVyICB8IHNsaWRlIOWkmuW8oOmYsuatoui3n+maj+a7keWKqCB8IOaYvuekumJhbm5lciAoYWxhc2th5pegKVxuaGlkZUJhbm5lciAgfCB8IOmakOiXj2Jhbm5lciAoYWxhc2th5pegKVxuc2VuZEV2ZW50ICB8IEpTT05PYmplY3QgcGFyYW1zfCDlj5HpgIHkuovku7ZcbnNoYXJlQXBrICB8IGFwa05hbWV8IOWIhuS6q2Fwa1xuc2hhcmVUZXh0ICB8IHNoYXJlVGV4dHwg5YiG5Lqr5paH5a2XXG5zaGFyZU1lZGlhVGV4dCAgfCBzaGFyZVRleHQsaW1nVXJsfCDliIbkuqvmloflrZflkozlm77niYdcbnNoYXJlRmlsZSAgfCBzaGFyZVRleHQsIGZpbGVQYXRoKOacrOWcsOaWh+S7tui3r+W+hO+8jOS4jemcgOimgeWKoGZpbGU6Ly8pIHwg5YiG5Lqr5paH5Lu2XG5tZWRpYVRvTG9jYWwgIHwgaW1hZ2VVcmwsdmlkZW9Vcmx8IOWbvueJhy/op4bpopEg572R57uc5Zyw5Z2A6L2s5pys5Zyw5Zyw5Z2AXG5iYXNlNjRUb0xvY2FsICB8IGJhc2U2NFVybHwg5Zu+54mHQmFzZTY06L2s5pys5Zyw5Zyw5Z2AXG50YWtlU2NyZWVuU2hvdCAgfCDlkIxuZXdzRG9nfCDmiKrlm74g77yI5Y+R6YCB5bGP5bmV5Z2Q5qCH5ZKM5a696auY77yM6L+U5Zue5Zu+54mH5pys5Zyw5Zyw5Z2A77yJXG5nZXRVc2VySW5mbyAgfCBhdmF0YXIsIHVzZXJOYW1lIHwg55So5oi35ZCN77yM5aS05YOPXG5nZXRHcm91cElkICB8IHVzZXJJZHwg55So5oi3SUTvvIhPYmplY3RJZO+8jHNlcV9pZO+8iSAoYWxhc2th5pegKVxuZ2V0VXNlckdyb3VwICB8IGdyb3VwIHwg55So5oi3R3JvdXAgKGFsYXNrYeaXoClcbmdldFVzZXJMYW5nICB8IGxhbmd8IOivreiogFxub3BlbldlYlZpZXcgIHwgdXJsfCDmiZPlvIDkuIDkuKrmlrDnmoTlhajlsY9XZWJWaWV3XG5jbG9zZVdlYlZpZXcgIHwgfCDlhbPpl63lvZPliY1XZWJWaWV3XG5iYWNrUHJlc3NlZCAgfCBmZWVkSWR8IOWuouaIt+err+S4u+WKqOWPkemAgeWQjumAgOS6i+S7tlxuY2xpY2tQb3N0QnRuICB8IHwg54K55Ye75Y+R5biD5oyJ6ZKuLHRvZ2/kuJPmnIlcbmNsaWNrUG9zdFRleHQgIHwgfCDngrnlh7vlj5HluIPmloflrZfmjInpkq4sdG9nb+S4k+aciVxuY2xpY2tQb3N0SW1hZ2UgIHwgfCDngrnlh7vlj5HluIPlm77niYfmjInpkq4sdG9nb+S4k+aciVxuY2xpY2tQb3N0UGhvdG8gIHwgfCDngrnlh7vlj5HluIPmi43nhafmjInpkq4sdG9nb+S4k+aciVxuY2xpY2tQb3N0QXVkaW8gfCB8IOeCueWHu+WPkeW4g+ivremfs+aMiemSrix0b2dv5LiT5pyJXG5cbi89PT09YWxhc2thPT09PS9cbmNsaWNrUG9zdFN0YXR1c01ha2VyIHwgfCDngrnlh7vlj5HluIPliLbkvZzlvbHpm4ZcbmNsaWNrUG9zdFZpZGVvIHwgfCDngrnlh7vlj5HluIPop4bpopFcbm9wZW5Ub3BpYyB8IHRvcGljSWQgfCDmiZPlvIDkuLvpopjmtLvliqjpobXpnaJcblxuLz09PT1uZXdzZG9nPT09PS9cbm9wZW5GZWVkICB8IGZlZWRJZCx0eXBlLGxhbmcgfCDot7PovazliLDmn5DkuKphcnRpY2xlXG5vcGVuQ2F0ZWdvcnkgfCBjYXRlX2tleSx2aWRlbyB8IOi3s+i9rOWIsOafkOS4quWIhuexu1xub3BlblRvcGljIHwgZmVlZElkLGxhbmcgfCDot7PovazliLDmn5DkuKp0b3BpY1xub3BlbkRlZXBMaW5rIHx7bGluazonbmV3c2RvZzovL2RldGFpbD9pZD01YTE2NTk0NzEyMzEzYTAwYTM0MTA5ZDEmbGFuZz1lbiZ0eXBlPWFydGljbGUnfXzot7PovazliLDmn5DkuKpERUVQTElOS1xub3Blbkh0dHBMaW5rIHx7bGluazogJ2h0dHA6Ly94eHgnfXzkvb/nlKhOZXdzRG9n5omT5byA5p+Q5Liq5pSv5oyB55qESFRUUOmTvuaOpVxuXG4vPT09PXdhbmdjYWk9PT09L1xuZW50ZXJDaGF0Um9vbSB8IHJvb21JZCx3aGVyZSB8IOS7jndoZXJl6L+b5YWlcm9vbUlk6IGK5aSp5a6kLFxub3BlbkRlZXBMaW5rIHx7bGluazonJ3186Lez6L2s5Yiw5p+Q5LiqREVFUExJTktcbm9wZW5UYWIgfCB0YWIgfFxuXG5cbiovXG5pbXBvcnQgTUtNZXNzYWdlTWFuYWdlciBmcm9tICcuLi9VdGlscy9NS01lc3NhZ2VNYW5hZ2VyJztcbmltcG9ydCBNS1NvdW5kIGZyb20gJy4uL1V0aWxzL01LU291bmQnO1xuaW1wb3J0IE1LRXZlbnREaXNwYXRjaCBmcm9tICcuL01LRXZlbnREaXNwYXRjaCc7XG5cbmludGVyZmFjZSBJQWN0aW9uIHtcbiAgbWV0aG9kOiBzdHJpbmc7XG4gIHBhcmFtcz86IHtcbiAgICBbcDogc3RyaW5nXTogYW55O1xuICB9O1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIGd0YWc/OiAoZTogYW55KSA9PiB2b2lkO1xuICAgIFdLV1ZKQkNhbGxiYWNrcz86IGFueVtdO1xuICAgIFdLV2ViVmlld0phdmFzY3JpcHRCcmlkZ2U/OiBhbnk7XG4gICAgd2Via2l0PzogYW55O1xuICAgIE5EQj86IGFueTtcbiAgICB3ZWJ2aWV3PzogYW55O1xuICAgIEFuZHJvaWRKc0Nvbm5lY3Rvcj86IGFueTtcbiAgfVxufVxuXG5jbGFzcyBBbmRyb2lkQmFja0V2ZW50IHtcbiAgcHJpdmF0ZSBsaXN0OiBhbnlbXTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5saXN0ID0gW107XG4gIH1cbiAgYWRkRXZlbnRMaXN0ZW5lcihhdWRpZW5jZTogYW55KSB7XG4gICAgdGhpcy5saXN0LnB1c2goYXVkaWVuY2UpO1xuICB9XG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIoYXVkaWVuY2U6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGF1ZGllbmNlKTtcbiAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmxpc3QpKTtcbiAgICAvLyB0aGlzLmxpc3QuZm9yRWFjaChmbj0+e1xuICAgIC8vICAgY29uc29sZS5sb2coZm4sYXVkaWVuY2UsZm4udG9TdHJpbmcoKSA9PSBhdWRpZW5jZS50b1N0cmluZygpKTtcbiAgICAvLyB9KVxuICAgIHRoaXMubGlzdCA9IHRoaXMubGlzdC5maWx0ZXIoZm4gPT4gZm4udG9TdHJpbmcoKSAhPSBhdWRpZW5jZS50b1N0cmluZygpKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxpc3QpO1xuICB9XG4gIGJyb2FkY2FzdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3QpO1xuICAgIHRoaXMubGlzdC5mb3JFYWNoKGZuID0+IHtcbiAgICAgIGZuICYmIGZuKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuICEhdGhpcy5saXN0Lmxlbmd0aDtcbiAgfVxufVxuXG5jbGFzcyBOZG9nSnNCcmlkZ2Uge1xuICBBTElDRTogc3RyaW5nO1xuICBwbGF0Zm9ybTogc3RyaW5nO1xuICBQUk9UT0NPTDogc3RyaW5nO1xuICBwb29sOiBhbnk7XG4gIHNlcXVlbmNlSWQ6IG51bWJlcjtcbiAgZ2FtZUlzU3RhcnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcmVwb3J0OiAoKSA9PiB2b2lkO1xuICBzbGVlcDogKG1zOiBudW1iZXIpID0+IFByb21pc2U8YW55PjtcblxuICBjb25zdHJ1Y3RvcihhbGljZTogYW55LCBwbGF0Zm9ybTogYW55KSB7XG4gICAgdGhpcy5BTElDRSA9IGFsaWNlO1xuICAgIHRoaXMucGxhdGZvcm0gPSBwbGF0Zm9ybTtcbiAgICB0aGlzLlBST1RPQ09MID0gJ05EQic7XG4gICAgdGhpcy5wb29sID0ge307XG4gICAgdGhpcy5zZXF1ZW5jZUlkID0gMDtcbiAgICB0aGlzLnJlcG9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghd2luZG93Lmd0YWcpIHJldHVybjtcbiAgICAgIHdpbmRvdy5ndGFnLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICBjb25zb2xlLmxvZygnPT09PT09PXJlcG9ydD09PT09PT0nKTtcbiAgICAgIGNvbnN0IGdhbG9nID0gW107XG4gICAgICBjb25zdCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBnYWxvZy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShnYWxvZykpO1xuICAgICAgY29uc29sZS5sb2coJz09PT09PT1yZXBvcnQ9PT09PT09Jyk7XG4gICAgICAvLyB9XG4gICAgfTtcbiAgICB0aGlzLnNsZWVwID0gbXMgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBtcywgJ2RvbmUnKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5wbGF0Zm9ybSA9PSAnaW9zJykge1xuICAgICAgdGhpcy5zZXR1cFdLV2ViVmlld0phdmFzY3JpcHRCcmlkZ2UoKGJyaWRnZTogYW55KSA9PiB7XG4gICAgICAgIGJyaWRnZS5yZWdpc3RlckhhbmRsZXIoJ29uU29ja2V0UmVjZWl2ZScsIHRoaXMub25Tb2NrZXRSZWNlaXZlKTtcbiAgICAgICAgYnJpZGdlLnJlZ2lzdGVySGFuZGxlcignb25BbmRyb2lkR29CYWNrJywgdGhpcy5vbkFuZHJvaWRHb0JhY2spO1xuICAgICAgICBicmlkZ2UucmVnaXN0ZXJIYW5kbGVyKCdvbkFuZHJvaWRSZWxvYWQnLCB0aGlzLm9uQW5kcm9pZFJlbG9hZCk7XG4gICAgICAgIGJyaWRnZS5yZWdpc3RlckhhbmRsZXIoJ29uQW5kcm9pZFJlc3VtZScsIHRoaXMub25BbmRyb2lkUmVzdW1lKTtcbiAgICAgICAgYnJpZGdlLnJlZ2lzdGVySGFuZGxlcignb25BbmRyb2lkU3RvcCcsIHRoaXMub25BbmRyb2lkU3RvcCk7XG5cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICog55Sf5oiQYW5kcm9pZOino+aekOWNj+iurlxuICAgKi9cbiAgZ2VuZXJhdGVSZXF1ZXN0T2JqID0gKG1ldGhvZDogYW55LCBwYXJhbXMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHBvcnQgPSB0aGlzLnNlcXVlbmNlSWQrKztcbiAgICByZXR1cm4ge1xuICAgICAgdXJpOiBgJHt0aGlzLlBST1RPQ09MfTovLyR7dGhpcy5BTElDRX06JHtwb3J0fS8ke21ldGhvZH0/JHtKU09OLnN0cmluZ2lmeShwYXJhbXMpfWAsXG4gICAgICBwb3J0LFxuICAgIH07XG4gIH07XG4gIC8qKlxuICAgKiDpgJrov4d3aW5kb3cucHJvbXB05bCG5Y+C5pWw5Lyg6YCS57uZ5a6i5oi356uvLOW5tuetieW+heWbnuiwg1xuICAgKiBAbmF0aXZlTWV0aG9kTmFtZSB7U3RyaW5nfSDlrqLmiLfnq6/lk43lupTnmoTlh73mlbDlkI0o5o+Q5YmN5Lq65bel57qm5a6aKVxuICAgKiBAcGFyYW1zIHtPYmplY3R9IOmcgOimgeS8oOmAkueahOWPguaVsFxuICAgKi9cbiAgcnVuOiAobTogc3RyaW5nLCBwPzogb2JqZWN0KSA9PiBQcm9taXNlPHsgZXJyX2NvZGU/OiBzdHJpbmc7IG1zZz86IHN0cmluZyB9PiA9IChcbiAgICBuYXRpdmVNZXRob2ROYW1lLFxuICAgIHBhcmFtcyxcbiAgKSA9PiB7XG4gICAgY29uc3QgeyB1cmksIHBvcnQgfSA9IHRoaXMuZ2VuZXJhdGVSZXF1ZXN0T2JqKG5hdGl2ZU1ldGhvZE5hbWUsIHBhcmFtcyk7XG4gICAgY29uc29sZS5sb2coJyVjID4+IHJlcXVlc3Q6JyArIHBvcnQsICdjb2xvcjpibHVlJywgdXJpKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLnBvb2xbcG9ydF0gPSByZXNvbHZlO1xuICAgICAgaWYgKHRoaXMucGxhdGZvcm0gPT09ICdhbmRyb2lkJykge1xuICAgICAgICAvL+mAmui/h3Byb21wdOWwhua2iOaBr+S8oOmAkue7mWFuZHJvaWTvvJtcbiAgICAgICAgd2luZG93LnByb21wdCh1cmksICcnKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGF0Zm9ybSA9PT0gJ2lvcycpIHtcbiAgICAgICAgdGhpcy5zZXR1cFdLV2ViVmlld0phdmFzY3JpcHRCcmlkZ2UoIGJyaWRnZSA9PiB7XG4gICAgICAgICAgYnJpZGdlLmNhbGxIYW5kbGVyKCdoYW5kbGVJT1NKc0JyaWRnZScsIHsgdXJsOiB1cmkgfSwgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgLy8gSU9TICDnq6/nmoTlm57osIPlh73mlbBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJT1MgYmFjayBkYXRhOiAnLCByZXNwb25zZSk7XG4gICAgICAgICAgICBjb25zdCB7IHBvcnQsIC4uLnJlcyB9ID0gcmVzcG9uc2U7XG4gICAgICAgICAgICB0aGlzLm9uRmluaXNoKHBvcnQsIHJlcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKEpTT04uc3RyaW5naWZ5KHRoaXMucGxhdGZvcm0pKTtcbiAgICAgIH1cbiAgICB9KS5jYXRjaChlID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICBjb25zb2xlLmVycm9yKGBqc2JyaWRnZSBtZXRob2QgZmFpbDogJHtKU09OLnN0cmluZ2lmeSh7IHVyaSwgcG9ydCB9KX1gKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihganNicmlkZ2UgbWV0aG9kIGZhaWw6ICR7SlNPTi5zdHJpbmdpZnkoeyB1cmksIHBvcnQgfSl9YCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIGpzYnJpZGdlIOiwg+eUqGlvc1xuICAgKiBAbWVtYmVyb2YgTmRvZ0pzQnJpZGdlXG4gICAqL1xuICBzZXR1cFdLV2ViVmlld0phdmFzY3JpcHRCcmlkZ2UgPSBjYWxsYmFjayA9PiB7XG4gICAgaWYgKHdpbmRvdy5XS1dlYlZpZXdKYXZhc2NyaXB0QnJpZGdlKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIHJldHVybiBjYWxsYmFjayh3aW5kb3cuV0tXZWJWaWV3SmF2YXNjcmlwdEJyaWRnZSk7XG4gICAgfVxuICAgIGlmICh3aW5kb3cuV0tXVkpCQ2FsbGJhY2tzKSB7XG4gICAgICByZXR1cm4gd2luZG93LldLV1ZKQkNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgd2luZG93LldLV1ZKQkNhbGxiYWNrcyA9IFtjYWxsYmFja107XG4gICAgd2luZG93LndlYmtpdC5tZXNzYWdlSGFuZGxlcnMuaU9TX05hdGl2ZV9JbmplY3RKYXZhc2NyaXB0LnBvc3RNZXNzYWdlKG51bGwpO1xuICB9O1xuICAvKipcbiAgICog5L6b5a6i5oi356uv5Zue6LCDXG4gICAqIEBwb3J0IHtOdW1iZXJ9IOW9k+WJjeWbnuiwg+axoOS4reeahGtleSwg5a+55bqU5LiA5Liq5Zue6LCD5Ye95pWwXG4gICAqIEByZXMge09iamVjdH0g5a6i5oi356uv55qE5aSE55CG57uT5p6cLCDkuIDoiKzmmK9qc29u5qC85byPXG4gICAqL1xuICBvbkZpbmlzaCA9IChwb3J0LCByZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZygnJWMgPDwgcmVzcG9uc2U6JyArIHBvcnQsICdjb2xvcjpncmVlbicsIHJlcyk7XG4gICAgY29uc3QgcmVzb2x2ZSA9IHRoaXMucG9vbFtwb3J0XTtcbiAgICByZXNvbHZlICYmIHJlc29sdmUocmVzKTtcbiAgICBkZWxldGUgdGhpcy5wb29sW3BvcnRdO1xuICB9O1xuICAvKipcbiAgICog5Y+R6YCB572R57uc6K+35rGCXG4gICAqIEBtZXRob2Qge1N0cmluZ30gZ2V0LHBvc3QscHV0LGRlbFxuICAgKiBAdXJsIHtTdHJpbmd9IOivt+axgnVybHNldEVuZ2luZVN3aXRjaDFcbiAgICogQHBhcmFtcyB7T2JqZWN0fSDlj5HpgIHlj4LmlbBcbiAgICovXG4gIHJlcXVlc3QgPSBhc3luYyAobWV0aG9kLCB1cmwsIHBhcmFtcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJ1bihtZXRob2QsIHsgdXJsLCBwYXJhbXMgfSk7XG4gICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0+Pj4+PicsIHJlc3VsdCk7XG4gICAgICBpZiAocmVzdWx0LmVycl9jb2RlIHx8IHJlc3VsdC5tc2cpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgLy8gdGhpcy50b2FzdCh7bXNnOiByZXN1bHQubXNnfSlcbiAgICAgICAgLy8gcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCcwMDAwMDAwJywgZSk7XG4gICAgfVxuICB9O1xuXG4gIGNsb3NlV2ViVmlldyA9ICgpID0+IHtcbiAgICB0aGlzLnJ1bignY2xvc2VXZWJWaWV3Jyk7XG4gIH1cblxuICAvL+WIhuS6q+WbvueJhztcbiAgc2hhcmVHYW1lT3JJbWFnZSA9IGFzeW5jIChzaGFyZVRleHQsIGltZ3VybCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJ1bignc2hhcmVNZWRpYVRleHQnLCB7IHNoYXJlVGV4dDogc2hhcmVUZXh0LCBpbWdVcmw6IGltZ3VybCwgaXNfcm9vbTogdHJ1ZSB9KTtcbiAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLT4+Pj4+JywgcmVzdWx0KTtcbiAgICAgIGlmIChyZXN1bHQuZXJyX2NvZGUgfHwgcmVzdWx0Lm1zZykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZygnMDAwMDAwMCcsIGUpO1xuICAgIH1cbiAgfVxuXG5cbiAgZ2V0VXNlckluZm8gPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5ydW4oJ2dldFVzZXJJbmZvJyk7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tPj4+Pj5nZXRVc2VySW5mbycsIHJlc3VsdCk7XG4gICAgaWYgKHJlc3VsdC5lcnJfY29kZSB8fCByZXN1bHQubXNnKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cblxuICBnZXRSb29tSW5mbyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJ1bignZ2V0Um9vbUluZm8nKTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0+Pj4+PmdldFJvb21JbmZvJywgcmVzdWx0KTtcbiAgICBpZiAocmVzdWx0LmVycl9jb2RlIHx8IHJlc3VsdC5tc2cpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvL+aYvuekuuihqOaDhe+8m1xuICBzaG93RW1vamkgPSAocG9zLCBzaXplLCBzdmdhKSA9PiB7XG4gICAgdGhpcy5ydW4oJ3BsYXlTdmdhJywgeyB4OiBwb3NbMF0sIHk6IHBvc1sxXSwgdzogc2l6ZVswXSwgaDogc2l6ZVsxXSwgdXJsOiBzdmdhIH0pO1xuICB9XG5cbiAgLy/orr7nva7pn7PmlYjlvIDlhbM7XG4gIHNldEVuZ2luZVN3aXRjaCA9IChmbGFnKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3NldEVuZ2luZVN3aXRjaDonICsgZmxhZyk7XG4gICAgTUtTb3VuZC5hdWRpb0VuZ2luZU9uID0gZmxhZztcbiAgICBNS1NvdW5kLnVwZGF0ZU11c2ljKCk7XG4gIH1cblxuICBzaG93UGxheWVySW5mbyA9IChwbGF5ZXJJZCkgPT4ge1xuICAgIC8qXG4gICAgb3BlblByb2ZpbGVcbiAgICB7XG4gICAgXCJ1c2VyX2lkXCIsXCIyNDI0MjRcIiwgICAgICAgLy/nlKjmiLdpZDtcbiAgICBcIndoZXJlXCIsIFwiXCIsICAgICAgICAgICAgICAvL2xvZ++8m1xuICAgIFwiaW5fcm9vbVwiLHRydWUvZmFsc2UgICAgICAvL+aYr+WQpuaYr+WcqOiBiuWkqeWupOWGhe+8m1xuICAgIH1cbiAgICAqL1xuICAgIGNvbnNvbGUubG9nKCflj5HpgIHmmL7npLrnlKjmiLfvvJonICsgcGxheWVySWQpO1xuICAgIHRoaXMucnVuKCdvcGVuUHJvZmlsZScsIHsgdXNlcklkOiBwbGF5ZXJJZCwgd2hlcmU6ICdCdWxsIEZpZ2h0JywgaW5fcm9vbTogdHJ1ZSB9KTtcbiAgfVxuXG4gIC8v5oiq5Zu+5YiG5LqrO1xuICByZW5kZXJUZXh0dXJlU2hhcmUgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB3aWQgPSBNYXRoLmZsb29yKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgpIC0gMjtcbiAgICAgIGxldCBoZWlnID0gTWF0aC5mbG9vcihkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCkgLSAyO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5ydW4oJ3Rha2VTY3JlZW5TaG90JywgeyBpbWFnZV9jb29yZGluYXRlOiB7IHg6IDAsIHk6IDAsIHc6IHdpZCwgaDogaGVpZywgcjogMCB9IH0pO1xuICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tPj4+Pj4nLCByZXN1bHQpO1xuICAgICAgaWYgKHJlc3VsdC5lcnJfY29kZSB8fCByZXN1bHQubXNnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCcwMDAwMDAwJywgZSk7XG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICog5by55Ye65Y6f55SfdG9hc3RcbiAgICovXG4gIHRvYXN0ID0gKG9wdCA9IHt9KSA9PiB7XG4gICAgY29uc3QgZGVmYXVsdE9wdCA9IHtcbiAgICAgIG1zZzogJ+W8ueWHulRvYXN0JyxcbiAgICAgIGxvbmc6IHRydWUsXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5ydW4oJ3RvYXN0JywgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0LCBvcHQpKTtcbiAgfTtcblxuICBvcGVuRGVlcExpbmsgPSBsaW5rID0+IHtcbiAgICB0aGlzLnJ1bignb3BlbkRlZXBMaW5rJywgeyBsaW5rOiBsaW5rIH0pO1xuICB9O1xuXG4gIHNlbmRFdmVudCA9IHNlbmRPYmogPT4ge1xuICAgIHRoaXMucnVuKCdzZW5kRXZlbnQnLCB7IGV2ZW50TmFtZTogc2VuZE9iai5ldmVudE5hbWUsIGV2ZW50UGFyYW1zOiB7IHR5cGU6IHNlbmRPYmoudHlwZSwgZnJvbTogc2VuZE9iai5mcm9tLCByZXN1bHQ6IHNlbmRPYmoucmVzdWx0LCB3YXk6IHNlbmRPYmoud2F5IH0gfSk7XG4gIH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipBUFDosIPnlKjmuLjmiI/mjqXlj6MqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAvKipcbiAgICogYXBw6L+b5YWl5ZCO5Y+wXG4gICAqL1xuICBvbkFuZHJvaWRTdG9wID0gKCkgPT4ge1xuICAgIE1LU291bmQuYXVkaW9Jc09uID0gTUtTb3VuZC5hdWRpb0VuZ2luZU9uO1xuICAgIE1LU291bmQuYXVkaW9FbmdpbmVPbiA9IGZhbHNlO1xuICAgIE1LU291bmQudXBkYXRlTXVzaWMoKTtcbiAgICBjb25zb2xlLmxvZyhgd2VidmlldyBvbkFuZHJvaWRTdG9wOiBhcHAg6L+b5YWl5ZCO5Y+wYCk7XG4gICAgTUtFdmVudERpc3BhdGNoLkkuZW1pdCgnb25BbmRyb2lkU3RvcCcpO1xuICB9O1xuICAvKipcbiAgICogYXBw6YeN5paw6L+b5YWl5YmN5Y+wXG4gICAqL1xuICBvbkFuZHJvaWRSZXN1bWUgPSAoKSA9PiB7XG4gICAgaWYgKE1LU291bmQuYXVkaW9Jc09uKSB7XG4gICAgICBNS1NvdW5kLmF1ZGlvRW5naW5lT24gPSB0cnVlO1xuICAgICAgTUtTb3VuZC51cGRhdGVNdXNpYygpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgd2VidmlldyByZXN1bWU6IGFwcCDlm57liLDliY3lj7BgKTtcbiAgICBNS0V2ZW50RGlzcGF0Y2guSS5lbWl0KCdvbkFuZHJvaWRSZXN1bWUnKTtcbiAgfTtcbiAgLypcbiAgICAqIOWIt+aWsHdlYnZpZXdcbiAgICovXG4gIG9uQW5kcm9pZFJlbG9hZCA9ICgpID0+IHtcbiAgICAvLyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgY29uc29sZS5sb2coYHdlYnZpZXcgb25BbmRyb2lkUmVsb2FkYCk7XG4gIH07XG5cbiAgLypcbiAgICAgIOWTjeW6lGFuZHJvaWTlm57pgIDkuovku7ZcbiAgICAgIDEuIOWmguW9k+WJjemhtemdouacieW8ueeqlywg5YWI5YWz5by556qXXG4gICAgICAyLiDlpoIgaGlzdG9yeS5sZW5ndGggPiAxLCDliJnlm57pgIDliLDkuIrkuIDpobVcbiAgICAgIDMuIOWmguaenOmAgOaXoOWPr+mAgCwg5bCx55u05o6l5YWz6Zetd2Vidmlld1xuICAgICAg5q+P5qyh5ZON5bqU6ZyA6KaB57uZ5a6i5oi356uv6YCa55+lLCDlpoLmnpw1MDBtc+WGheS4jeWbnuiwg+WuouaIt+errywg5a6i5oi356uv5Lya6K6k5Li6572R6aG15Ye6546w5byC5bi45oiW6ICF5omT5byA5LqG56ys5LiJ5pa5572R6aG1LCDlrqLmiLfnq6/kvJrlhbPpl63lvZPliY13ZWJ2aWV3XG4gICovXG4gIG9uQW5kcm9pZEdvQmFjayA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5nYW1lSXNTdGFydCkge1xuICAgICAgdGhpcy5ydW4oJ2JhY2tFbnN1cmUnKTtcbiAgICAgIGNvbnN0IGhhc0F1ZGllbmNlID0gYW5kcm9pZEJhY2tFdmVudC5icm9hZGNhc3QoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdhbmRyb2lkQmFja0V2ZW50LmJyb2FkY2FzdDogJywgIWhhc0F1ZGllbmNlKTtcbiAgICAgIGlmICghaGFzQXVkaWVuY2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uQW5kcm9pZEdvQmFjayAgb25BbmRyb2lkR29CYWNrICBvbkFuZHJvaWRHb0JhY2snKTtcbiAgICAgICAgTUtFdmVudERpc3BhdGNoLkkuZW1pdCgnYW5kcm9pZEdvYmFjaycpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyAgTUtFdmVudERpc3BhdGNoLkkuZW1pdCgnYW5kcm9pZEdvYmFjaycpO1xuICB9O1xuXG4gIC8qXG4gICAgKiBBcHDmlLbliLDmnI3liqHlmahzb2NrZXTmlbDmja7ku6XlkI7vvIzovazlj5Hnu5nmuLjmiI87XG4gICAgc3RhcnQ65Yy56YWN5Yiw5byA5aeL77ybXG4gICAgcm9sbO+8muaOt+WujOmqsOWtkFxuICAgIG1vdmU656e75Yqo6aqw5a2QXG4gICAgc2tpcO+8muivpeaOt+mqsOWtkOS6hlxuICAgIGxlYXZl77ya5pyJ5Lq656a75byAXG4gICAgam9pbu+8muacieS6uuWKoOWFpe+8iOaWree6v+mHjei/nuS6hu+8iVxuICAqL1xuICBvblNvY2tldFJlY2VpdmUgPSAoZGF0YSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCfmlLbliLDmnI3liqHlmajkuIvlj5Hmtojmga8tLS0tLS0tLS0tLe+8micpO1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIC8v5bCG5raI5oGv5Y+R6YCB57uZ5raI5oGv566h55CG57G7O1xuICAgIC8vIHNldFRpbWVvdXQoKCk9PntcbiAgICBNS01lc3NhZ2VNYW5hZ2VyLmVtaXRTb2NrZXRNZXNzYWdlKGRhdGEpO1xuICAgIC8vIH0sMzAwKTtcbiAgfVxuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKmVuZCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKua4uOaIj+WPkemAgeaVsOaNrioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgLypcbiAgICAqIEBwYXJhbSBNZXNzYWdlVHlwZSDmtojmga/lj7dcbiAgICAqIEBwYXJtIHNlbmREYXRhIOWPkemAgeeahOaVsOaNrijmnInlj6/og73msqHmnInlj4LmlbApXG4gICovXG4gIHNvY2tldFNlbmQobWVzc2FnZVR5cGU6IHN0cmluZywgc2VuZERhdGE/OiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygnc29ja2V0U2VuZCcsIG1lc3NhZ2VUeXBlLCBzZW5kRGF0YSk7XG4gICAgd2luZG93LnByb21wdChtZXNzYWdlVHlwZSwgJycpO1xuXG4gIH1cbiAgc2VuZEF1dG9Kb2luRXZlbnQgPSBzZW5kT2JqID0+IHtcbiAgICBjb25zb2xlLmxvZygnc2VuZE9iai5ldmVudE5hbWU6JytzZW5kT2JqLmV2ZW50TmFtZSk7XG4gICAgdGhpcy5ydW4oJ3NlbmRFdmVudCcsIHtcbiAgICAgIGV2ZW50TmFtZTogc2VuZE9iai5ldmVudE5hbWUsXG4gICAgICBldmVudFBhcmFtczoge1xuICAgICAgICB0eXBlOiBzZW5kT2JqLnR5cGUsIHNvdXJjZTogc2VuZE9iai5zb3VyY2UsIGlzX21hdGNoX2F1dG86IHNlbmRPYmouaXNfbWF0Y2hfYXV0byxcbiAgICAgICAgc3RhdHVzOiBzZW5kT2JqLnN0YXR1cywgbWVzc2FnZVR5cGU6IHNlbmRPYmoubWVzc2FnZVR5cGUsIHRpbWU6IHNlbmRPYmoudGltZSxuYW1lOnNlbmRPYmoubmFtZSxyZXN1bHQ6c2VuZE9iai5yZXN1bHRcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiplbmQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG59XG5cbmNvbnN0IE5EQiA9ICgoKSA9PiB7XG4gIGxldCBwbGF0Zm9ybSA9ICd1bmtub3duJztcbiAgbGV0IGFsaWNlID0gJ3Vua25vd24nO1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIGlmICh3aW5kb3cuQW5kcm9pZEpzQ29ubmVjdG9yKSB7XG4gICAgICBwbGF0Zm9ybSA9ICdhbmRyb2lkJztcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgYWxpY2UgPSB3aW5kb3cuQW5kcm9pZEpzQ29ubmVjdG9yLmdldEluamVjdE5hbWUoKSB8fCBwbGF0Zm9ybTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIH0gZWxzZSBpZiAod2luZG93LndlYmtpdCAmJiB3aW5kb3cud2Via2l0Lm1lc3NhZ2VIYW5kbGVycykge1xuICAgICAgcGxhdGZvcm0gPSAnaW9zJztcbiAgICAgIGFsaWNlID0gJ21lc3NhZ2VIYW5kbGVycyc7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIGNvbnN0IHdlYnZpZXcgPSBuZXcgTmRvZ0pzQnJpZGdlKGFsaWNlLCBwbGF0Zm9ybSk7XG4gICAgd2luZG93Lk5EQiA9IHdlYnZpZXc7XG4gICAgd2luZG93LndlYnZpZXcgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKCdub3cgaXMgaW4gd2VidmlldycpO1xuICAgIHJldHVybiB3ZWJ2aWV3O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgY29uc3Qgd2VidmlldyA9IG5ldyBOZG9nSnNCcmlkZ2UoYWxpY2UsIHBsYXRmb3JtKTtcbiAgICB3aW5kb3cuTkRCID0gd2VidmlldztcbiAgICB3aW5kb3cud2VidmlldyA9IGZhbHNlO1xuICAgIGNvbnNvbGUubG9nKCdub3cgaXMgbm90IGluIHdlYnZpZXcnKTtcbiAgICByZXR1cm4gd2VidmlldztcbiAgfVxuICBcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IE5EQjtcblxuZXhwb3J0IGNvbnN0IGFuZHJvaWRCYWNrRXZlbnQgPSBuZXcgQW5kcm9pZEJhY2tFdmVudCgpO1xuIl19