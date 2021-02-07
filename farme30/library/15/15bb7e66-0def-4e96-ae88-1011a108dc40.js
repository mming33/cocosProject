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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TTCommon", TTCommon = (_dec = ccclass('TTCommon'), _dec(_class = (_temp = /*#__PURE__*/function () {
        function TTCommon() {
          _defineProperty(this, "videoAd", null);

          _defineProperty(this, "bannerAd", null);

          _defineProperty(this, "interstitialAd", null);

          _defineProperty(this, "gameRecorderManager", null);

          _defineProperty(this, "EventType", 'TTAdvEventType');

          _defineProperty(this, "closevideoListener", function () {});

          this.Init();
          this.InitAddEvent();
          this.InitTTCommon();
        }

        var _proto = TTCommon.prototype;

        /**初始化 创建各种广告 */
        _proto.Init = function Init() {
          this.videoAd = this.CreateRewardedVideoAd();
          this.bannerAd = this.CreateBannerAd();
          this.interstitialAd = this.CreateInterstitialAd();
        }
        /**初始化注册事件 */
        ;

        _proto.InitAddEvent = function InitAddEvent() {
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
        };

        _proto.InitTTCommon = function InitTTCommon() {
          this.CreateGameRecorderManager();
        };

        _proto.CreateBannerAd = function CreateBannerAd() {
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
        };

        _proto.CreateRewardedVideoAd = function CreateRewardedVideoAd() {
          return (_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
            error: Error()
          }), Adv) : Adv).adv.createRewardedVideoAd({
            adUnitId: (_crd && AdvManager === void 0 ? (_reportPossibleCrUseOfAdvManager({
              error: Error()
            }), AdvManager) : AdvManager).videoAdId
          });
        };

        _proto.CreateInterstitialAd = function CreateInterstitialAd() {
          return (_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
            error: Error()
          }), Adv) : Adv).adv.createInterstitialAd({
            adUnitId: (_crd && AdvManager === void 0 ? (_reportPossibleCrUseOfAdvManager({
              error: Error()
            }), AdvManager) : AdvManager).interstitialAdId
          });
        };

        _proto.CreateGameRecorderManager = function CreateGameRecorderManager() {
          this.gameRecorderManager = (_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
            error: Error()
          }), Adv) : Adv).adv.getGameRecorderManager();
        }
        /**开始录屏 */
        ;

        _proto.StartRecorder = function StartRecorder(arg) {
          if ((_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
            error: Error()
          }), Adv) : Adv).advtype != 'tt') {
            return;
          }

          this.gameRecorderManager.onStart(function (res) {
            // do something;
            arg && arg.success && arg.success();
          });
          this.gameRecorderManager.start({
            duration: 60
          });
        }
        /**停止录屏 */
        ;

        _proto.StopRecorder = function StopRecorder(arg) {
          if ((_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
            error: Error()
          }), Adv) : Adv).advtype != 'tt') {
            return;
          }

          var options = (_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
            error: Error()
          }), Adv) : Adv).adv.shareAppMessage({
            channel: "video",
            success: arg && arg.success,
            fail: arg && arg.error
          });
          this.gameRecorderManager.onStop(function (res) {
            console.log(res.videoPath); // do somethine;

            (_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
              error: Error()
            }), Adv) : Adv).adv.navigateToVideoView(options);
          });
          this.gameRecorderManager.stop();
        };

        _proto.Login = function Login() {
          (_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
            error: Error()
          }), Adv) : Adv).adv.checkSession({
            success: function success() {
              console.log("session \u672A\u8FC7\u671F");
            },
            fail: function fail() {
              console.log("session \u5DF2\u8FC7\u671F\uFF0C\u9700\u8981\u91CD\u65B0\u767B\u5F55");
              (_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
                error: Error()
              }), Adv) : Adv).adv.login({
                force: true,
                success: function success(res) {
                  console.log("login \u8C03\u7528\u6210\u529F" + res.code + " " + res.anonymousCode);
                },
                fail: function fail(res) {
                  console.log("login \u8C03\u7528\u5931\u8D25");
                }
              });
            }
          });
        };

        _proto.GetUserInfo = function GetUserInfo() {
          (_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
            error: Error()
          }), Adv) : Adv).adv.getUserInfo({
            withCredentials: true,
            success: function success(res) {
              console.log("getUserInfo \u8C03\u7528\u6210\u529F " + res.userInfo);
            },
            fail: function fail(res) {
              console.log("getUserInfo \u8C03\u7528\u5931\u8D25");
            }
          });
        };

        _proto.ShowBannerAd = function ShowBannerAd(arg) {
          var _this = this;

          this.bannerAd.onLoad(function () {
            _this.bannerAd.show().then(function () {
              arg && arg.success && arg.success();
              console.log("广告显示成功");
            })["catch"](function (err) {
              arg && arg.error && arg.error();
              console.log("广告组件出现问题", err);
            });
          });
        };

        _proto.HideBannerAd = function HideBannerAd(arg) {
          arg && arg.success && arg.success();
          this.bannerAd.hide()["catch"](function (err) {
            console.error(err);
            arg && arg.error && arg.error();
          });
          console.log("广告隐藏");
        };

        _proto.ShowVideoAd = function ShowVideoAd(arg) {
          this.videoAd.show().then(function () {
            console.log("视频广告展示");
            arg && arg.success && arg.success();
          })["catch"](function (err) {
            console.error(err);
            arg && arg.error && arg.error();
          });
        };

        _proto.onCloseVideoAd = function onCloseVideoAd(arg) {
          this.closevideoListener = function (res) {
            if (res.isEnded) {
              arg && arg.success && arg.success();
            } else {
              arg && arg.error && arg.error();
            }
          };

          this.videoAd.onClose(this.closevideoListener)["catch"](function (err) {
            console.error(err);
          });
          ;
          return this.closevideoListener;
        };

        _proto.offCloseVideoAd = function offCloseVideoAd(arg) {
          this.videoAd.offClose(this.closevideoListener)["catch"](function (err) {
            console.error(err);
            arg && arg.error && arg.error();
          });
        };

        _proto.ShowInterstitialAd = function ShowInterstitialAd(arg) {
          var _this2 = this;

          this.interstitialAd.load().then(function () {
            _this2.interstitialAd.show().then(function () {
              console.log("插屏广告展示成功");
              arg && arg.success && arg.success();
            });
          })["catch"](function (err) {
            console.error(err);
            arg && arg.error && arg.error();
          });
        };

        _proto.VibrateLong = function VibrateLong(arg) {
          var options = {
            success: arg && arg.success,
            //&& arg.success(),
            fail: arg && arg.error,
            //&& arg.error(),
            complete: arg && arg.complete // && arg.complete(),

          };
          (_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
            error: Error()
          }), Adv) : Adv).adv.vibrateLong(options);
        };

        _proto.VibrateShort = function VibrateShort(arg) {
          var options = {
            success: arg && arg.success,
            //&& arg.success(),
            fail: arg && arg.error,
            //&& arg.error(),
            complete: arg && arg.complete // && arg.complete(),

          };
          (_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
            error: Error()
          }), Adv) : Adv).adv.vibrateShort(options);
        };

        return TTCommon;
      }(), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vU2VydmVyL1RUQ29tbW9uLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJNeUV2ZW50IiwiQWR2IiwiQWR2TWFuYWdlciIsIkFkdlR5cGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJUVENvbW1vbiIsIkluaXQiLCJJbml0QWRkRXZlbnQiLCJJbml0VFRDb21tb24iLCJ2aWRlb0FkIiwiQ3JlYXRlUmV3YXJkZWRWaWRlb0FkIiwiYmFubmVyQWQiLCJDcmVhdGVCYW5uZXJBZCIsImludGVyc3RpdGlhbEFkIiwiQ3JlYXRlSW50ZXJzdGl0aWFsQWQiLCJJIiwib24iLCJTSE9XQkFOTkVSIiwiU2hvd0Jhbm5lckFkIiwiRXZlbnRUeXBlIiwiSElERUJBTk5FUiIsIkhpZGVCYW5uZXJBZCIsIlNIT1dWSURFT0FEIiwiU2hvd1ZpZGVvQWQiLCJPTkNMT1NFVklERU9BRCIsIm9uQ2xvc2VWaWRlb0FkIiwiT0ZGQ0xPU0VWSURFT0FEIiwib2ZmQ2xvc2VWaWRlb0FkIiwiU0hPV0lOVEVSU1RJVElBTEFEIiwiU2hvd0ludGVyc3RpdGlhbEFkIiwiVklCUkFURUxPTkciLCJWaWJyYXRlTG9uZyIsIlZJQlJBVEVTSE9SVCIsIlZpYnJhdGVTaG9ydCIsIlNUQVJUUkVDT1JERVIiLCJTdGFydFJlY29yZGVyIiwiU1RPUFJFQ09SREVSIiwiU3RvcFJlY29yZGVyIiwiQ3JlYXRlR2FtZVJlY29yZGVyTWFuYWdlciIsImFkdiIsImNyZWF0ZUJhbm5lckFkIiwiYWRVbml0SWQiLCJiYW5uZXJBZElkIiwiYWRJbnRlcnZhbHMiLCJzdHlsZSIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsImNyZWF0ZVJld2FyZGVkVmlkZW9BZCIsInZpZGVvQWRJZCIsImNyZWF0ZUludGVyc3RpdGlhbEFkIiwiaW50ZXJzdGl0aWFsQWRJZCIsImdhbWVSZWNvcmRlck1hbmFnZXIiLCJnZXRHYW1lUmVjb3JkZXJNYW5hZ2VyIiwiYXJnIiwiYWR2dHlwZSIsIm9uU3RhcnQiLCJyZXMiLCJzdWNjZXNzIiwic3RhcnQiLCJkdXJhdGlvbiIsIm9wdGlvbnMiLCJzaGFyZUFwcE1lc3NhZ2UiLCJjaGFubmVsIiwiZmFpbCIsImVycm9yIiwib25TdG9wIiwiY29uc29sZSIsImxvZyIsInZpZGVvUGF0aCIsIm5hdmlnYXRlVG9WaWRlb1ZpZXciLCJzdG9wIiwiTG9naW4iLCJjaGVja1Nlc3Npb24iLCJsb2dpbiIsImZvcmNlIiwiY29kZSIsImFub255bW91c0NvZGUiLCJHZXRVc2VySW5mbyIsImdldFVzZXJJbmZvIiwid2l0aENyZWRlbnRpYWxzIiwidXNlckluZm8iLCJvbkxvYWQiLCJzaG93IiwidGhlbiIsImVyciIsImhpZGUiLCJjbG9zZXZpZGVvTGlzdGVuZXIiLCJpc0VuZGVkIiwib25DbG9zZSIsIm9mZkNsb3NlIiwibG9hZCIsImNvbXBsZXRlIiwidmlicmF0ZUxvbmciLCJ2aWJyYXRlU2hvcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOztBQUNBQyxNQUFBQSxPLG9CQUFBQSxPOztBQUNBQyxNQUFBQSxHLGlCQUFBQSxHO0FBQUtDLE1BQUFBLFUsaUJBQUFBLFU7QUFBWUMsTUFBQUEsTyxpQkFBQUEsTzs7Ozs7OztBQUVsQkMsTUFBQUEsTyxHQUFzQkwsVSxDQUF0QkssTztBQUFTQyxNQUFBQSxRLEdBQWFOLFUsQ0FBYk0sUTs7MEJBRUpDLFEsV0FEWkYsT0FBTyxDQUFDLFVBQUQsQztBQU9KLDRCQUFjO0FBQUEsMkNBTFMsSUFLVDs7QUFBQSw0Q0FKVSxJQUlWOztBQUFBLGtEQUhnQixJQUdoQjs7QUFBQSx1REFGcUIsSUFFckI7O0FBQUEsNkNBT00sZ0JBUE47O0FBQUEsc0RBUWlCLFlBQU0sQ0FBRyxDQVIxQjs7QUFDVixlQUFLRyxJQUFMO0FBQ0EsZUFBS0MsWUFBTDtBQUNBLGVB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QVIsQ0FBcUJqQyxPQUFyQjtBQUNILFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIHJlc291cmNlcyB9IGZyb20gJ2NjJztcbmltcG9ydCB7IE15RXZlbnQgfSBmcm9tICcuLi9FdmVudHMvTXlFdmVudCc7XG5pbXBvcnQgeyBBZHYsIEFkdk1hbmFnZXIsIEFkdlR5cGUgfSBmcm9tICcuL0Fkdk1hbmFnZXInO1xuaW1wb3J0IHsgSUFkdiB9IGZyb20gJy4vSUFkdic7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuQGNjY2xhc3MoJ1RUQ29tbW9uJylcbmV4cG9ydCBjbGFzcyBUVENvbW1vbiBpbXBsZW1lbnRzIElBZHYge1xuICAgIHByaXZhdGUgdmlkZW9BZDogYW55ID0gbnVsbDtcbiAgICBwcml2YXRlIGJhbm5lckFkOiBhbnkgPSBudWxsO1xuICAgIHByaXZhdGUgaW50ZXJzdGl0aWFsQWQ6IGFueSA9IG51bGw7XG4gICAgcHJpdmF0ZSBnYW1lUmVjb3JkZXJNYW5hZ2VyOiBhbnkgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuSW5pdCgpO1xuICAgICAgICB0aGlzLkluaXRBZGRFdmVudCgpO1xuICAgICAgICB0aGlzLkluaXRUVENvbW1vbigpXG4gICAgfVxuXG5cbiAgICBFdmVudFR5cGU6IHN0cmluZyA9ICdUVEFkdkV2ZW50VHlwZSdcbiAgICBjbG9zZXZpZGVvTGlzdGVuZXI6IEZ1bmN0aW9uID0gKCkgPT4geyB9O1xuICAgIC8qKuWIneWni+WMliDliJvlu7rlkITnp43lub/lkYogKi9cbiAgICBJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZpZGVvQWQgPSB0aGlzLkNyZWF0ZVJld2FyZGVkVmlkZW9BZCgpO1xuICAgICAgICB0aGlzLmJhbm5lckFkID0gdGhpcy5DcmVhdGVCYW5uZXJBZCgpO1xuICAgICAgICB0aGlzLmludGVyc3RpdGlhbEFkID0gdGhpcy5DcmVhdGVJbnRlcnN0aXRpYWxBZCgpO1xuICAgIH1cbiAgICAvKirliJ3lp4vljJbms6jlhozkuovku7YgKi9cbiAgICBJbml0QWRkRXZlbnQoKSB7XG4gICAgICAgIE15RXZlbnQuSS5vbihBZHZUeXBlLlNIT1dCQU5ORVIsIHRoaXMuU2hvd0Jhbm5lckFkLCB0aGlzLkV2ZW50VHlwZSk7XG4gICAgICAgIE15RXZlbnQuSS5vbihBZHZUeXBlLkhJREVCQU5ORVIsIHRoaXMuSGlkZUJhbm5lckFkLCB0aGlzLkV2ZW50VHlwZSk7XG4gICAgICAgIE15RXZlbnQuSS5vbihBZHZUeXBlLlNIT1dWSURFT0FELCB0aGlzLlNob3dWaWRlb0FkLCB0aGlzLkV2ZW50VHlwZSk7XG4gICAgICAgIE15RXZlbnQuSS5vbihBZHZUeXBlLk9OQ0xPU0VWSURFT0FELCB0aGlzLm9uQ2xvc2VWaWRlb0FkLCB0aGlzLkV2ZW50VHlwZSk7XG4gICAgICAgIE15RXZlbnQuSS5vbihBZHZUeXBlLk9GRkNMT1NFVklERU9BRCwgdGhpcy5vZmZDbG9zZVZpZGVvQWQsIHRoaXMuRXZlbnRUeXBlKTtcbiAgICAgICAgTXlFdmVudC5JLm9uKEFkdlR5cGUuU0hPV0lOVEVSU1RJVElBTEFELCB0aGlzLlNob3dJbnRlcnN0aXRpYWxBZCwgdGhpcy5FdmVudFR5cGUpO1xuICAgICAgICBNeUV2ZW50Lkkub24oQWR2VHlwZS5WSUJSQVRFTE9ORywgdGhpcy5WaWJyYXRlTG9uZywgdGhpcy5FdmVudFR5cGUpO1xuICAgICAgICBNeUV2ZW50Lkkub24oQWR2VHlwZS5WSUJSQVRFU0hPUlQsIHRoaXMuVmlicmF0ZVNob3J0LCB0aGlzLkV2ZW50VHlwZSk7XG4gICAgICAgIE15RXZlbnQuSS5vbihBZHZUeXBlLlNUQVJUUkVDT1JERVIsIHRoaXMuU3RhcnRSZWNvcmRlciwgdGhpcy5FdmVudFR5cGUpO1xuICAgICAgICBNeUV2ZW50Lkkub24oQWR2VHlwZS5TVE9QUkVDT1JERVIsIHRoaXMuU3RvcFJlY29yZGVyLCB0aGlzLkV2ZW50VHlwZSk7XG5cbiAgICB9XG4gICAgSW5pdFRUQ29tbW9uKCkge1xuICAgICAgICB0aGlzLkNyZWF0ZUdhbWVSZWNvcmRlck1hbmFnZXIoKTtcbiAgICB9XG4gICAgQ3JlYXRlQmFubmVyQWQoKSB7XG4gICAgICAgIEFkdi5hZHYuY3JlYXRlQmFubmVyQWQoe1xuICAgICAgICAgICAgYWRVbml0SWQ6IEFkdk1hbmFnZXIuYmFubmVyQWRJZCxcbiAgICAgICAgICAgIGFkSW50ZXJ2YWxzOiA2MCxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgQ3JlYXRlUmV3YXJkZWRWaWRlb0FkKCkge1xuICAgICAgICByZXR1cm4gQWR2LmFkdi5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe1xuICAgICAgICAgICAgYWRVbml0SWQ6IEFkdk1hbmFnZXIudmlkZW9BZElkXG4gICAgICAgIH0pXG4gICAgfVxuICAgIENyZWF0ZUludGVyc3RpdGlhbEFkKCkge1xuICAgICAgICByZXR1cm4gQWR2LmFkdi5jcmVhdGVJbnRlcnN0aXRpYWxBZCh7XG4gICAgICAgICAgICBhZFVuaXRJZDogQWR2TWFuYWdlci5pbnRlcnN0aXRpYWxBZElkXG4gICAgICAgIH0pXG4gICAgfVxuICAgIENyZWF0ZUdhbWVSZWNvcmRlck1hbmFnZXIoKSB7XG4gICAgICAgIHRoaXMuZ2FtZVJlY29yZGVyTWFuYWdlciA9IEFkdi5hZHYuZ2V0R2FtZVJlY29yZGVyTWFuYWdlcigpO1xuICAgIH1cbiAgICAvKirlvIDlp4vlvZXlsY8gKi9cbiAgICBTdGFydFJlY29yZGVyKGFyZz86IGFueSkge1xuICAgICAgICBpZiAoQWR2LmFkdnR5cGUgIT0gJ3R0Jykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2FtZVJlY29yZGVyTWFuYWdlci5vblN0YXJ0KChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgLy8gZG8gc29tZXRoaW5nO1xuICAgICAgICAgICAgYXJnICYmIGFyZy5zdWNjZXNzICYmIGFyZy5zdWNjZXNzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdhbWVSZWNvcmRlck1hbmFnZXIuc3RhcnQoe1xuICAgICAgICAgICAgZHVyYXRpb246IDYwXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKirlgZzmraLlvZXlsY8gKi9cbiAgICBTdG9wUmVjb3JkZXIoYXJnPzogYW55KSB7XG4gICAgICAgIGlmIChBZHYuYWR2dHlwZSAhPSAndHQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9wdGlvbnMgPSBBZHYuYWR2LnNoYXJlQXBwTWVzc2FnZSh7XG4gICAgICAgICAgICBjaGFubmVsOiBcInZpZGVvXCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBhcmcgJiYgYXJnLnN1Y2Nlc3MsXG4gICAgICAgICAgICBmYWlsOiBhcmcgJiYgYXJnLmVycm9yXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmdhbWVSZWNvcmRlck1hbmFnZXIub25TdG9wKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLnZpZGVvUGF0aCk7XG4gICAgICAgICAgICAvLyBkbyBzb21ldGhpbmU7XG4gICAgICAgICAgICBBZHYuYWR2Lm5hdmlnYXRlVG9WaWRlb1ZpZXcob3B0aW9ucyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2FtZVJlY29yZGVyTWFuYWdlci5zdG9wKCk7XG4gICAgfVxuXG5cblxuICAgIExvZ2luKCkge1xuICAgICAgICBBZHYuYWR2LmNoZWNrU2Vzc2lvbih7XG4gICAgICAgICAgICBzdWNjZXNzKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzZXNzaW9uIOacqui/h+acn2ApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWwoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHNlc3Npb24g5bey6L+H5pyf77yM6ZyA6KaB6YeN5paw55m75b2VYCk7XG4gICAgICAgICAgICAgICAgQWR2LmFkdi5sb2dpbih7XG4gICAgICAgICAgICAgICAgICAgIGZvcmNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlczogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgbG9naW4g6LCD55So5oiQ5YqfJHtyZXMuY29kZX0gJHtyZXMuYW5vbnltb3VzQ29kZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZmFpbChyZXM6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGxvZ2luIOiwg+eUqOWksei0pWApO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIEdldFVzZXJJbmZvKCkge1xuICAgICAgICBBZHYuYWR2LmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZ2V0VXNlckluZm8g6LCD55So5oiQ5YqfICR7cmVzLnVzZXJJbmZvfWApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWwocmVzOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZ2V0VXNlckluZm8g6LCD55So5aSx6LSlYCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgU2hvd0Jhbm5lckFkKGFyZz86IGFueSkge1xuICAgICAgICB0aGlzLmJhbm5lckFkLm9uTG9hZCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJhbm5lckFkXG4gICAgICAgICAgICAgICAgLnNob3coKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYXJnICYmIGFyZy5zdWNjZXNzICYmIGFyZy5zdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5bm/5ZGK5pi+56S65oiQ5YqfXCIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhcmcgJiYgYXJnLmVycm9yICYmIGFyZy5lcnJvcigpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5bm/5ZGK57uE5Lu25Ye6546w6Zeu6aKYXCIsIGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBIaWRlQmFubmVyQWQoYXJnPzogYW55KSB7XG4gICAgICAgIGFyZyAmJiBhcmcuc3VjY2VzcyAmJiBhcmcuc3VjY2VzcygpO1xuICAgICAgICB0aGlzLmJhbm5lckFkLmhpZGUoKVxuICAgICAgICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICBhcmcgJiYgYXJnLmVycm9yICYmIGFyZy5lcnJvcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5bm/5ZGK6ZqQ6JePXCIpO1xuICAgIH1cbiAgICBTaG93VmlkZW9BZChhcmc/OiBhbnkpIHtcbiAgICAgICAgdGhpcy52aWRlb0FkLnNob3coKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6KeG6aKR5bm/5ZGK5bGV56S6XCIpO1xuICAgICAgICAgICAgYXJnICYmIGFyZy5zdWNjZXNzICYmIGFyZy5zdWNjZXNzKCk7XG4gICAgICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgYXJnICYmIGFyZy5lcnJvciAmJiBhcmcuZXJyb3IoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uQ2xvc2VWaWRlb0FkKGFyZz86IGFueSk6IEZ1bmN0aW9uIHtcbiAgICAgICAgdGhpcy5jbG9zZXZpZGVvTGlzdGVuZXIgPSAocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuaXNFbmRlZCkge1xuICAgICAgICAgICAgICAgIGFyZyAmJiBhcmcuc3VjY2VzcyAmJiBhcmcuc3VjY2VzcygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcmcgJiYgYXJnLmVycm9yICYmIGFyZy5lcnJvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlkZW9BZC5vbkNsb3NlKHRoaXMuY2xvc2V2aWRlb0xpc3RlbmVyKVxuICAgICAgICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH0pOztcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2V2aWRlb0xpc3RlbmVyO1xuICAgIH1cbiAgICBvZmZDbG9zZVZpZGVvQWQoYXJnPzogYW55KSB7XG4gICAgICAgIHRoaXMudmlkZW9BZC5vZmZDbG9zZSh0aGlzLmNsb3NldmlkZW9MaXN0ZW5lcilcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgYXJnICYmIGFyZy5lcnJvciAmJiBhcmcuZXJyb3IoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBTaG93SW50ZXJzdGl0aWFsQWQoYXJnPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW50ZXJzdGl0aWFsQWRcbiAgICAgICAgICAgIC5sb2FkKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyc3RpdGlhbEFkLnNob3coKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmj5LlsY/lub/lkYrlsZXnpLrmiJDlip9cIik7XG4gICAgICAgICAgICAgICAgICAgIGFyZyAmJiBhcmcuc3VjY2VzcyAmJiBhcmcuc3VjY2VzcygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgYXJnICYmIGFyZy5lcnJvciAmJiBhcmcuZXJyb3IoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBWaWJyYXRlTG9uZyhhcmc/OiBhbnkpIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBzdWNjZXNzOiBhcmcgJiYgYXJnLnN1Y2Nlc3MsIC8vJiYgYXJnLnN1Y2Nlc3MoKSxcbiAgICAgICAgICAgIGZhaWw6IGFyZyAmJiBhcmcuZXJyb3IsIC8vJiYgYXJnLmVycm9yKCksXG4gICAgICAgICAgICBjb21wbGV0ZTogYXJnICYmIGFyZy5jb21wbGV0ZSwvLyAmJiBhcmcuY29tcGxldGUoKSxcbiAgICAgICAgfVxuICAgICAgICBBZHYuYWR2LnZpYnJhdGVMb25nKG9wdGlvbnMpXG4gICAgfVxuICAgIFZpYnJhdGVTaG9ydChhcmc/OiBhbnkpIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBzdWNjZXNzOiBhcmcgJiYgYXJnLnN1Y2Nlc3MsIC8vJiYgYXJnLnN1Y2Nlc3MoKSxcbiAgICAgICAgICAgIGZhaWw6IGFyZyAmJiBhcmcuZXJyb3IsIC8vJiYgYXJnLmVycm9yKCksXG4gICAgICAgICAgICBjb21wbGV0ZTogYXJnICYmIGFyZy5jb21wbGV0ZSwvLyAmJiBhcmcuY29tcGxldGUoKSxcbiAgICAgICAgfVxuICAgICAgICBBZHYuYWR2LnZpYnJhdGVTaG9ydChvcHRpb25zKVxuICAgIH1cblxufVxuIl19