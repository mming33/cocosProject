System.register(["cce.code-quality.cr", "cc", "../Events/MyEvent.js", "./AdvManager.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, MyEvent, Adv, AdvManager, AdvType, _dec, _class, _temp, _crd, ccclass, property, TTCommon;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfMyEvent(extras) {
    _reporterNs.report("MyEvent", "../Events/MyEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdv(extras) {
    _reporterNs.report("Adv", "./AdvManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdvManager(extras) {
    _reporterNs.report("AdvManager", "./AdvManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdvType(extras) {
    _reporterNs.report("AdvType", "./AdvManager", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_EventsMyEventJs) {
      MyEvent = _EventsMyEventJs.MyEvent;
    }, function (_AdvManagerJs) {
      Adv = _AdvManagerJs.Adv;
      AdvManager = _AdvManagerJs.AdvManager;
      AdvType = _AdvManagerJs.AdvType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "15bb75mDe9Olq6IEBGhCNxA", "TTCommon", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TTCommon", TTCommon = (_dec = ccclass('TTCommon'), _dec(_class = (_temp = class TTCommon {
        constructor() {
          _defineProperty(this, "videoAd", null);

          _defineProperty(this, "bannerAd", null);

          _defineProperty(this, "interstitialAd", null);

          _defineProperty(this, "gameRecorderManager", null);

          _defineProperty(this, "EventType", 'TTAdvEventType');

          _defineProperty(this, "closevideoListener", () => {});

          this.Init();
          this.InitAddEvent();
          this.InitTTCommon();
        }

        /**初始化 创建各种广告 */
        Init() {
          this.videoAd = this.CreateRewardedVideoAd();
          this.bannerAd = this.CreateBannerAd();
          this.interstitialAd = this.CreateInterstitialAd();
        }
        /**初始化注册事件 */


        InitAddEvent() {
          (_crd && MyEvent === void 0 ? (_reportPossibleCrUseOfMyEvent({
            error: Error()
          }), MyEvent) : MyEvent).I.on((_crd && AdvType === void 0 ? (_reportPossibleCrUseOfAdvType({
            error: Error()
          }), AdvType) : AdvType).SHOWBANNER, this.ShowBannerAd, this.EventType);
          (_crd && MyEvent === void 0 ? (_reportPossibleCrUseOfMyEvent({
            error: Error()
          }), MyEvent) : MyEvent).I.on((_crd && AdvType === void 0 ? (_reportPossibleCrUseOfAdvType({
            error: Error()
          }), AdvType) : AdvType).HIDEBANNER, this.HideBannerAd, this.EventType);
          (_crd && MyEvent === void 0 ? (_reportPossibleCrUseOfMyEvent({
            error: Error()
          }), MyEvent) : MyEvent).I.on((_crd && AdvType === void 0 ? (_reportPossibleCrUseOfAdvType({
            error: Error()
          }), AdvType) : AdvType).SHOWVIDEOAD, this.ShowVideoAd, this.EventType);
          (_crd && MyEvent === void 0 ? (_reportPossibleCrUseOfMyEvent({
            error: Error()
          }), MyEvent) : MyEvent).I.on((_crd && AdvType === void 0 ? (_reportPossibleCrUseOfAdvType({
            error: Error()
          }), AdvType) : AdvType).ONCLOSEVIDEOAD, this.onCloseVideoAd, this.EventType);
          (_crd && MyEvent === void 0 ? (_reportPossibleCrUseOfMyEvent({
            error: Error()
          }), MyEvent) : MyEvent).I.on((_crd && AdvType === void 0 ? (_reportPossibleCrUseOfAdvType({
            error: Error()
          }), AdvType) : AdvType).OFFCLOSEVIDEOAD, this.offCloseVideoAd, this.EventType);
          (_crd && MyEvent === void 0 ? (_reportPossibleCrUseOfMyEvent({
            error: Error()
          }), MyEvent) : MyEvent).I.on((_crd && AdvType === void 0 ? (_reportPossibleCrUseOfAdvType({
            error: Error()
          }), AdvType) : AdvType).SHOWINTERSTITIALAD, this.ShowInterstitialAd, this.EventType);
          (_crd && MyEvent === void 0 ? (_reportPossibleCrUseOfMyEvent({
            error: Error()
          }), MyEvent) : MyEvent).I.on((_crd && AdvType === void 0 ? (_reportPossibleCrUseOfAdvType({
            error: Error()
          }), AdvType) : AdvType).VIBRATELONG, this.VibrateLong, this.EventType);
          (_crd && MyEvent === void 0 ? (_reportPossibleCrUseOfMyEvent({
            error: Error()
          }), MyEvent) : MyEvent).I.on((_crd && AdvType === void 0 ? (_reportPossibleCrUseOfAdvType({
            error: Error()
          }), AdvType) : AdvType).VIBRATESHORT, this.VibrateShort, this.EventType);
          (_crd && MyEvent === void 0 ? (_reportPossibleCrUseOfMyEvent({
            error: Error()
          }), MyEvent) : MyEvent).I.on((_crd && AdvType === void 0 ? (_reportPossibleCrUseOfAdvType({
            error: Error()
          }), AdvType) : AdvType).STARTRECORDER, this.StartRecorder, this.EventType);
          (_crd && MyEvent === void 0 ? (_reportPossibleCrUseOfMyEvent({
            error: Error()
          }), MyEvent) : MyEvent).I.on((_crd && AdvType === void 0 ? (_reportPossibleCrUseOfAdvType({
            error: Error()
          }), AdvType) : AdvType).STOPRECORDER, this.StopRecorder, this.EventType);
        }

        InitTTCommon() {
          this.CreateGameRecorderManager();
        }

        CreateBannerAd() {
          (_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
            error: Error()
          }), Adv) : Adv).adv.createBannerAd({
            adUnitId: (_crd && AdvManager === void 0 ? (_reportPossibleCrUseOfAdvManager({
              error: Error()
            }), AdvManager) : AdvManager).bannerAdId,
            adIntervals: 60,
            style: {
              left: 0,
              top: 0,
              width: 300
            }
          });
        }

        CreateRewardedVideoAd() {
          return (_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
            error: Error()
          }), Adv) : Adv).adv.createRewardedVideoAd({
            adUnitId: (_crd && AdvManager === void 0 ? (_reportPossibleCrUseOfAdvManager({
              error: Error()
            }), AdvManager) : AdvManager).videoAdId
          });
        }

        CreateInterstitialAd() {
          return (_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
            error: Error()
          }), Adv) : Adv).adv.createInterstitialAd({
            adUnitId: (_crd && AdvManager === void 0 ? (_reportPossibleCrUseOfAdvManager({
              error: Error()
            }), AdvManager) : AdvManager).interstitialAdId
          });
        }

        CreateGameRecorderManager() {
          this.gameRecorderManager = (_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
            error: Error()
          }), Adv) : Adv).adv.getGameRecorderManager();
        }
        /**开始录屏 */


        StartRecorder(arg) {
          if ((_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
            error: Error()
          }), Adv) : Adv).advtype != 'tt') {
            return;
          }

          this.gameRecorderManager.onStart(res => {
            // do something;
            arg && arg.success && arg.success();
          });
          this.gameRecorderManager.start({
            duration: 60
          });
        }
        /**停止录屏 */


        StopRecorder(arg) {
          if ((_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
            error: Error()
          }), Adv) : Adv).advtype != 'tt') {
            return;
          }

          let options = (_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
            error: Error()
          }), Adv) : Adv).adv.shareAppMessage({
            channel: "video",
            success: arg && arg.success,
            fail: arg && arg.error
          });
          this.gameRecorderManager.onStop(res => {
            console.log(res.videoPath); // do somethine;

            (_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
              error: Error()
            }), Adv) : Adv).adv.navigateToVideoView(options);
          });
          this.gameRecorderManager.stop();
        }

        Login() {
          (_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
            error: Error()
          }), Adv) : Adv).adv.checkSession({
            success() {
              console.log(`session 未过期`);
            },

            fail() {
              console.log(`session 已过期，需要重新登录`);
              (_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
                error: Error()
              }), Adv) : Adv).adv.login({
                force: true,

                success(res) {
                  console.log(`login 调用成功${res.code} ${res.anonymousCode}`);
                },

                fail(res) {
                  console.log(`login 调用失败`);
                }

              });
            }

          });
        }

        GetUserInfo() {
          (_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
            error: Error()
          }), Adv) : Adv).adv.getUserInfo({
            withCredentials: true,

            success(res) {
              console.log(`getUserInfo 调用成功 ${res.userInfo}`);
            },

            fail(res) {
              console.log(`getUserInfo 调用失败`);
            }

          });
        }

        ShowBannerAd(arg) {
          this.bannerAd.onLoad(() => {
            this.bannerAd.show().then(() => {
              arg && arg.success && arg.success();
              console.log("广告显示成功");
            }).catch(err => {
              arg && arg.error && arg.error();
              console.log("广告组件出现问题", err);
            });
          });
        }

        HideBannerAd(arg) {
          arg && arg.success && arg.success();
          this.bannerAd.hide().catch(err => {
            console.error(err);
            arg && arg.error && arg.error();
          });
          console.log("广告隐藏");
        }

        ShowVideoAd(arg) {
          this.videoAd.show().then(() => {
            console.log("视频广告展示");
            arg && arg.success && arg.success();
          }).catch(err => {
            console.error(err);
            arg && arg.error && arg.error();
          });
        }

        onCloseVideoAd(arg) {
          this.closevideoListener = res => {
            if (res.isEnded) {
              arg && arg.success && arg.success();
            } else {
              arg && arg.error && arg.error();
            }
          };

          this.videoAd.onClose(this.closevideoListener).catch(err => {
            console.error(err);
          });
          ;
          return this.closevideoListener;
        }

        offCloseVideoAd(arg) {
          this.videoAd.offClose(this.closevideoListener).catch(err => {
            console.error(err);
            arg && arg.error && arg.error();
          });
        }

        ShowInterstitialAd(arg) {
          this.interstitialAd.load().then(() => {
            this.interstitialAd.show().then(() => {
              console.log("插屏广告展示成功");
              arg && arg.success && arg.success();
            });
          }).catch(err => {
            console.error(err);
            arg && arg.error && arg.error();
          });
        }

        VibrateLong(arg) {
          let options = {
            success: arg && arg.success,
            //&& arg.success(),
            fail: arg && arg.error,
            //&& arg.error(),
            complete: arg && arg.complete // && arg.complete(),

          };
          (_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
            error: Error()
          }), Adv) : Adv).adv.vibrateLong(options);
        }

        VibrateShort(arg) {
          let options = {
            success: arg && arg.success,
            //&& arg.success(),
            fail: arg && arg.error,
            //&& arg.error(),
            complete: arg && arg.complete // && arg.complete(),

          };
          (_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
            error: Error()
          }), Adv) : Adv).adv.vibrateShort(options);
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vU2VydmVyL1RUQ29tbW9uLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJNeUV2ZW50IiwiQWR2IiwiQWR2TWFuYWdlciIsIkFkdlR5cGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJUVENvbW1vbiIsImNvbnN0cnVjdG9yIiwiSW5pdCIsIkluaXRBZGRFdmVudCIsIkluaXRUVENvbW1vbiIsInZpZGVvQWQiLCJDcmVhdGVSZXdhcmRlZFZpZGVvQWQiLCJiYW5uZXJBZCIsIkNyZWF0ZUJhbm5lckFkIiwiaW50ZXJzdGl0aWFsQWQiLCJDcmVhdGVJbnRlcnN0aXRpYWxBZCIsIkkiLCJvbiIsIlNIT1dCQU5ORVIiLCJTaG93QmFubmVyQWQiLCJFdmVudFR5cGUiLCJISURFQkFOTkVSIiwiSGlkZUJhbm5lckFkIiwiU0hPV1ZJREVPQUQiLCJTaG93VmlkZW9BZCIsIk9OQ0xPU0VWSURFT0FEIiwib25DbG9zZVZpZGVvQWQiLCJPRkZDTE9TRVZJREVPQUQiLCJvZmZDbG9zZVZpZGVvQWQiLCJTSE9XSU5URVJTVElUSUFMQUQiLCJTaG93SW50ZXJzdGl0aWFsQWQiLCJWSUJSQVRFTE9ORyIsIlZpYnJhdGVMb25nIiwiVklCUkFURVNIT1JUIiwiVmlicmF0ZVNob3J0IiwiU1RBUlRSRUNPUkRFUiIsIlN0YXJ0UmVjb3JkZXIiLCJTVE9QUkVDT1JERVIiLCJTdG9wUmVjb3JkZXIiLCJDcmVhdGVHYW1lUmVjb3JkZXJNYW5hZ2VyIiwiYWR2IiwiY3JlYXRlQmFubmVyQWQiLCJhZFVuaXRJZCIsImJhbm5lckFkSWQiLCJhZEludGVydmFscyIsInN0eWxlIiwibGVmdCIsInRvcCIsIndpZHRoIiwiY3JlYXRlUmV3YXJkZWRWaWRlb0FkIiwidmlkZW9BZElkIiwiY3JlYXRlSW50ZXJzdGl0aWFsQWQiLCJpbnRlcnN0aXRpYWxBZElkIiwiZ2FtZVJlY29yZGVyTWFuYWdlciIsImdldEdhbWVSZWNvcmRlck1hbmFnZXIiLCJhcmciLCJhZHZ0eXBlIiwib25TdGFydCIsInJlcyIsInN1Y2Nlc3MiLCJzdGFydCIsImR1cmF0aW9uIiwib3B0aW9ucyIsInNoYXJlQXBwTWVzc2FnZSIsImNoYW5uZWwiLCJmYWlsIiwiZXJyb3IiLCJvblN0b3AiLCJjb25zb2xlIiwibG9nIiwidmlkZW9QYXRoIiwibmF2aWdhdGVUb1ZpZGVvVmlldyIsInN0b3AiLCJMb2dpbiIsImNoZWNrU2Vzc2lvbiIsImxvZ2luIiwiZm9yY2UiLCJjb2RlIiwiYW5vbnltb3VzQ29kZSIsIkdldFVzZXJJbmZvIiwiZ2V0VXNlckluZm8iLCJ3aXRoQ3JlZGVudGlhbHMiLCJ1c2VySW5mbyIsIm9uTG9hZCIsInNob3ciLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJoaWRlIiwiY2xvc2V2aWRlb0xpc3RlbmVyIiwiaXNFbmRlZCIsIm9uQ2xvc2UiLCJvZmZDbG9zZSIsImxvYWQiLCJjb21wbGV0ZSIsInZpYnJhdGVMb25nIiwidmlicmF0ZVNob3J0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7QUFDQUMsTUFBQUEsTyxvQkFBQUEsTzs7QUFDQUMsTUFBQUEsRyxpQkFBQUEsRztBQUFLQyxNQUFBQSxVLGlCQUFBQSxVO0FBQVlDLE1BQUFBLE8saUJBQUFBLE87Ozs7Ozs7T0FFcEI7QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE8sR0FBd0JOLFU7OzBCQUVqQk8sUSxXQURaRixPQUFPLENBQUMsVUFBRCxDLHlCQUFSLE1BQ2FFLFFBRGIsQ0FDc0M7QUFNbENDLFFBQUFBLFdBQVcsR0FBRztBQUFBLDJDQUxTLElBS1Q7O0FBQUEsNENBSlUsSUFJVjs7QUFBQSxrREFIZ0IsSUFHaEI7O0FBQUEsdURBRnFCLElBRXJCOztBQUFBLDZDQU9NLGdCQVBOOztBQUFBLHNEQVFpQixNQUFNLENBQUcs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eEI0QixZQUFBQSxRQUFRLEVBQUV2QyxHQUFHLElBQUlBLEdBQUcsQ0FBQ3VDLFFBSFgsQ0FHb0I7O0FBSHBCLFdBQWQ7QUFLQTtBQUFBO0FBQUEsMEJBQUl0RCxHQUFKLENBQVF3RCxZQUFSLENBQXFCbEMsT0FBckI7QUFDSDs7QUFoTmlDLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIHJlc291cmNlcyB9IGZyb20gJ2NjJztcbmltcG9ydCB7IE15RXZlbnQgfSBmcm9tICcuLi9FdmVudHMvTXlFdmVudCc7XG5pbXBvcnQgeyBBZHYsIEFkdk1hbmFnZXIsIEFkdlR5cGUgfSBmcm9tICcuL0Fkdk1hbmFnZXInO1xuaW1wb3J0IHsgSUFkdiB9IGZyb20gJy4vSUFkdic7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuQGNjY2xhc3MoJ1RUQ29tbW9uJylcbmV4cG9ydCBjbGFzcyBUVENvbW1vbiBpbXBsZW1lbnRzIElBZHYge1xuICAgIHByaXZhdGUgdmlkZW9BZDogYW55ID0gbnVsbDtcbiAgICBwcml2YXRlIGJhbm5lckFkOiBhbnkgPSBudWxsO1xuICAgIHByaXZhdGUgaW50ZXJzdGl0aWFsQWQ6IGFueSA9IG51bGw7XG4gICAgcHJpdmF0ZSBnYW1lUmVjb3JkZXJNYW5hZ2VyOiBhbnkgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuSW5pdCgpO1xuICAgICAgICB0aGlzLkluaXRBZGRFdmVudCgpO1xuICAgICAgICB0aGlzLkluaXRUVENvbW1vbigpXG4gICAgfVxuXG5cbiAgICBFdmVudFR5cGU6IHN0cmluZyA9ICdUVEFkdkV2ZW50VHlwZSdcbiAgICBjbG9zZXZpZGVvTGlzdGVuZXI6IEZ1bmN0aW9uID0gKCkgPT4geyB9O1xuICAgIC8qKuWIneWni+WMliDliJvlu7rlkITnp43lub/lkYogKi9cbiAgICBJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZpZGVvQWQgPSB0aGlzLkNyZWF0ZVJld2FyZGVkVmlkZW9BZCgpO1xuICAgICAgICB0aGlzLmJhbm5lckFkID0gdGhpcy5DcmVhdGVCYW5uZXJBZCgpO1xuICAgICAgICB0aGlzLmludGVyc3RpdGlhbEFkID0gdGhpcy5DcmVhdGVJbnRlcnN0aXRpYWxBZCgpO1xuICAgIH1cbiAgICAvKirliJ3lp4vljJbms6jlhozkuovku7YgKi9cbiAgICBJbml0QWRkRXZlbnQoKSB7XG4gICAgICAgIE15RXZlbnQuSS5vbihBZHZUeXBlLlNIT1dCQU5ORVIsIHRoaXMuU2hvd0Jhbm5lckFkLCB0aGlzLkV2ZW50VHlwZSk7XG4gICAgICAgIE15RXZlbnQuSS5vbihBZHZUeXBlLkhJREVCQU5ORVIsIHRoaXMuSGlkZUJhbm5lckFkLCB0aGlzLkV2ZW50VHlwZSk7XG4gICAgICAgIE15RXZlbnQuSS5vbihBZHZUeXBlLlNIT1dWSURFT0FELCB0aGlzLlNob3dWaWRlb0FkLCB0aGlzLkV2ZW50VHlwZSk7XG4gICAgICAgIE15RXZlbnQuSS5vbihBZHZUeXBlLk9OQ0xPU0VWSURFT0FELCB0aGlzLm9uQ2xvc2VWaWRlb0FkLCB0aGlzLkV2ZW50VHlwZSk7XG4gICAgICAgIE15RXZlbnQuSS5vbihBZHZUeXBlLk9GRkNMT1NFVklERU9BRCwgdGhpcy5vZmZDbG9zZVZpZGVvQWQsIHRoaXMuRXZlbnRUeXBlKTtcbiAgICAgICAgTXlFdmVudC5JLm9uKEFkdlR5cGUuU0hPV0lOVEVSU1RJVElBTEFELCB0aGlzLlNob3dJbnRlcnN0aXRpYWxBZCwgdGhpcy5FdmVudFR5cGUpO1xuICAgICAgICBNeUV2ZW50Lkkub24oQWR2VHlwZS5WSUJSQVRFTE9ORywgdGhpcy5WaWJyYXRlTG9uZywgdGhpcy5FdmVudFR5cGUpO1xuICAgICAgICBNeUV2ZW50Lkkub24oQWR2VHlwZS5WSUJSQVRFU0hPUlQsIHRoaXMuVmlicmF0ZVNob3J0LCB0aGlzLkV2ZW50VHlwZSk7XG4gICAgICAgIE15RXZlbnQuSS5vbihBZHZUeXBlLlNUQVJUUkVDT1JERVIsIHRoaXMuU3RhcnRSZWNvcmRlciwgdGhpcy5FdmVudFR5cGUpO1xuICAgICAgICBNeUV2ZW50Lkkub24oQWR2VHlwZS5TVE9QUkVDT1JERVIsIHRoaXMuU3RvcFJlY29yZGVyLCB0aGlzLkV2ZW50VHlwZSk7XG5cbiAgICB9XG4gICAgSW5pdFRUQ29tbW9uKCkge1xuICAgICAgICB0aGlzLkNyZWF0ZUdhbWVSZWNvcmRlck1hbmFnZXIoKTtcbiAgICB9XG4gICAgQ3JlYXRlQmFubmVyQWQoKSB7XG4gICAgICAgIEFkdi5hZHYuY3JlYXRlQmFubmVyQWQoe1xuICAgICAgICAgICAgYWRVbml0SWQ6IEFkdk1hbmFnZXIuYmFubmVyQWRJZCxcbiAgICAgICAgICAgIGFkSW50ZXJ2YWxzOiA2MCxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgQ3JlYXRlUmV3YXJkZWRWaWRlb0FkKCkge1xuICAgICAgICByZXR1cm4gQWR2LmFkdi5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe1xuICAgICAgICAgICAgYWRVbml0SWQ6IEFkdk1hbmFnZXIudmlkZW9BZElkXG4gICAgICAgIH0pXG4gICAgfVxuICAgIENyZWF0ZUludGVyc3RpdGlhbEFkKCkge1xuICAgICAgICByZXR1cm4gQWR2LmFkdi5jcmVhdGVJbnRlcnN0aXRpYWxBZCh7XG4gICAgICAgICAgICBhZFVuaXRJZDogQWR2TWFuYWdlci5pbnRlcnN0aXRpYWxBZElkXG4gICAgICAgIH0pXG4gICAgfVxuICAgIENyZWF0ZUdhbWVSZWNvcmRlck1hbmFnZXIoKSB7XG4gICAgICAgIHRoaXMuZ2FtZVJlY29yZGVyTWFuYWdlciA9IEFkdi5hZHYuZ2V0R2FtZVJlY29yZGVyTWFuYWdlcigpO1xuICAgIH1cbiAgICAvKirlvIDlp4vlvZXlsY8gKi9cbiAgICBTdGFydFJlY29yZGVyKGFyZz86IGFueSkge1xuICAgICAgICBpZiAoQWR2LmFkdnR5cGUgIT0gJ3R0Jykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2FtZVJlY29yZGVyTWFuYWdlci5vblN0YXJ0KChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgLy8gZG8gc29tZXRoaW5nO1xuICAgICAgICAgICAgYXJnICYmIGFyZy5zdWNjZXNzICYmIGFyZy5zdWNjZXNzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdhbWVSZWNvcmRlck1hbmFnZXIuc3RhcnQoe1xuICAgICAgICAgICAgZHVyYXRpb246IDYwXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKirlgZzmraLlvZXlsY8gKi9cbiAgICBTdG9wUmVjb3JkZXIoYXJnPzogYW55KSB7XG4gICAgICAgIGlmIChBZHYuYWR2dHlwZSAhPSAndHQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9wdGlvbnMgPSBBZHYuYWR2LnNoYXJlQXBwTWVzc2FnZSh7XG4gICAgICAgICAgICBjaGFubmVsOiBcInZpZGVvXCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBhcmcgJiYgYXJnLnN1Y2Nlc3MsXG4gICAgICAgICAgICBmYWlsOiBhcmcgJiYgYXJnLmVycm9yXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdhbWVSZWNvcmRlck1hbmFnZXIub25TdG9wKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLnZpZGVvUGF0aCk7XG4gICAgICAgICAgICAvLyBkbyBzb21ldGhpbmU7XG4gICAgICAgICAgICBBZHYuYWR2Lm5hdmlnYXRlVG9WaWRlb1ZpZXcob3B0aW9ucyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2FtZVJlY29yZGVyTWFuYWdlci5zdG9wKCk7XG4gICAgfVxuXG5cblxuICAgIExvZ2luKCkge1xuICAgICAgICBBZHYuYWR2LmNoZWNrU2Vzc2lvbih7XG4gICAgICAgICAgICBzdWNjZXNzKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzZXNzaW9uIOacqui/h+acn2ApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWwoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHNlc3Npb24g5bey6L+H5pyf77yM6ZyA6KaB6YeN5paw55m75b2VYCk7XG4gICAgICAgICAgICAgICAgQWR2LmFkdi5sb2dpbih7XG4gICAgICAgICAgICAgICAgICAgIGZvcmNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlczogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgbG9naW4g6LCD55So5oiQ5YqfJHtyZXMuY29kZX0gJHtyZXMuYW5vbnltb3VzQ29kZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZmFpbChyZXM6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGxvZ2luIOiwg+eUqOWksei0pWApO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIEdldFVzZXJJbmZvKCkge1xuICAgICAgICBBZHYuYWR2LmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZ2V0VXNlckluZm8g6LCD55So5oiQ5YqfICR7cmVzLnVzZXJJbmZvfWApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWwocmVzOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZ2V0VXNlckluZm8g6LCD55So5aSx6LSlYCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgU2hvd0Jhbm5lckFkKGFyZz86IGFueSkge1xuICAgICAgICB0aGlzLmJhbm5lckFkLm9uTG9hZCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJhbm5lckFkXG4gICAgICAgICAgICAgICAgLnNob3coKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYXJnICYmIGFyZy5zdWNjZXNzICYmIGFyZy5zdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5bm/5ZGK5pi+56S65oiQ5YqfXCIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhcmcgJiYgYXJnLmVycm9yICYmIGFyZy5lcnJvcigpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5bm/5ZGK57uE5Lu25Ye6546w6Zeu6aKYXCIsIGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBIaWRlQmFubmVyQWQoYXJnPzogYW55KSB7XG4gICAgICAgIGFyZyAmJiBhcmcuc3VjY2VzcyAmJiBhcmcuc3VjY2VzcygpO1xuICAgICAgICB0aGlzLmJhbm5lckFkLmhpZGUoKVxuICAgICAgICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICBhcmcgJiYgYXJnLmVycm9yICYmIGFyZy5lcnJvcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5bm/5ZGK6ZqQ6JePXCIpO1xuICAgIH1cbiAgICBTaG93VmlkZW9BZChhcmc/OiBhbnkpIHtcbiAgICAgICAgdGhpcy52aWRlb0FkLnNob3coKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6KeG6aKR5bm/5ZGK5bGV56S6XCIpO1xuICAgICAgICAgICAgYXJnICYmIGFyZy5zdWNjZXNzICYmIGFyZy5zdWNjZXNzKCk7XG4gICAgICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgYXJnICYmIGFyZy5lcnJvciAmJiBhcmcuZXJyb3IoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uQ2xvc2VWaWRlb0FkKGFyZz86IGFueSk6IEZ1bmN0aW9uIHtcbiAgICAgICAgdGhpcy5jbG9zZXZpZGVvTGlzdGVuZXIgPSAocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuaXNFbmRlZCkge1xuICAgICAgICAgICAgICAgIGFyZyAmJiBhcmcuc3VjY2VzcyAmJiBhcmcuc3VjY2VzcygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcmcgJiYgYXJnLmVycm9yICYmIGFyZy5lcnJvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlkZW9BZC5vbkNsb3NlKHRoaXMuY2xvc2V2aWRlb0xpc3RlbmVyKVxuICAgICAgICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH0pOztcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2V2aWRlb0xpc3RlbmVyO1xuICAgIH1cbiAgICBvZmZDbG9zZVZpZGVvQWQoYXJnPzogYW55KSB7XG4gICAgICAgIHRoaXMudmlkZW9BZC5vZmZDbG9zZSh0aGlzLmNsb3NldmlkZW9MaXN0ZW5lcilcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgYXJnICYmIGFyZy5lcnJvciAmJiBhcmcuZXJyb3IoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBTaG93SW50ZXJzdGl0aWFsQWQoYXJnPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW50ZXJzdGl0aWFsQWRcbiAgICAgICAgICAgIC5sb2FkKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyc3RpdGlhbEFkLnNob3coKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmj5LlsY/lub/lkYrlsZXnpLrmiJDlip9cIik7XG4gICAgICAgICAgICAgICAgICAgIGFyZyAmJiBhcmcuc3VjY2VzcyAmJiBhcmcuc3VjY2VzcygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgYXJnICYmIGFyZy5lcnJvciAmJiBhcmcuZXJyb3IoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBWaWJyYXRlTG9uZyhhcmc/OiBhbnkpIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBzdWNjZXNzOiBhcmcgJiYgYXJnLnN1Y2Nlc3MsIC8vJiYgYXJnLnN1Y2Nlc3MoKSxcbiAgICAgICAgICAgIGZhaWw6IGFyZyAmJiBhcmcuZXJyb3IsIC8vJiYgYXJnLmVycm9yKCksXG4gICAgICAgICAgICBjb21wbGV0ZTogYXJnICYmIGFyZy5jb21wbGV0ZSwvLyAmJiBhcmcuY29tcGxldGUoKSxcbiAgICAgICAgfVxuICAgICAgICBBZHYuYWR2LnZpYnJhdGVMb25nKG9wdGlvbnMpXG4gICAgfVxuICAgIFZpYnJhdGVTaG9ydChhcmc/OiBhbnkpIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBzdWNjZXNzOiBhcmcgJiYgYXJnLnN1Y2Nlc3MsIC8vJiYgYXJnLnN1Y2Nlc3MoKSxcbiAgICAgICAgICAgIGZhaWw6IGFyZyAmJiBhcmcuZXJyb3IsIC8vJiYgYXJnLmVycm9yKCksXG4gICAgICAgICAgICBjb21wbGV0ZTogYXJnICYmIGFyZy5jb21wbGV0ZSwvLyAmJiBhcmcuY29tcGxldGUoKSxcbiAgICAgICAgfVxuICAgICAgICBBZHYuYWR2LnZpYnJhdGVTaG9ydChvcHRpb25zKVxuICAgIH1cblxufVxuIl19