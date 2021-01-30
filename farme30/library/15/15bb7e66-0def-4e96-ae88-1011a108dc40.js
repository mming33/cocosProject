System.register(["cce.code-quality.cr", "cc", "../Events/MyEvent.js", "./Adv.js", "./AdvManager.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, MyEvent, Adv, AdvManager, AdvType, _dec, _class, _class2, _temp, _crd, ccclass, property, TTCommon;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfMyEvent(extras) {
    _reporterNs.report("MyEvent", "../Events/MyEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdv(extras) {
    _reporterNs.report("Adv", "./Adv", _context.meta, extras);
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
    _class2: void 0,
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
    }, function (_AdvJs) {
      Adv = _AdvJs.Adv;
    }, function (_AdvManagerJs) {
      AdvManager = _AdvManagerJs.AdvManager;
      AdvType = _AdvManagerJs.AdvType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "15bb75mDe9Olq6IEBGhCNxA", "TTCommon", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TTCommon", TTCommon = (_dec = ccclass('TTCommon'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        function TTCommon() {
          TTCommon.Init();
          TTCommon.InitAddEvent();
        }
        /**初始化 创建各种广告 */


        TTCommon.Init = function Init() {
          TTCommon.videoAd = TTCommon.CreateRewardedVideoAd();
          TTCommon.bannerAd = TTCommon.CreateBannerAd();
          TTCommon.interstitialAd = TTCommon.CreateInterstitialAd();
        }
        /**初始化注册事件 */
        ;

        TTCommon.InitAddEvent = function InitAddEvent() {
          (_crd && MyEvent === void 0 ? (_reportPossibleCrUseOfMyEvent({
            error: Error()
          }), MyEvent) : MyEvent).I.on((_crd && AdvType === void 0 ? (_reportPossibleCrUseOfAdvType({
            error: Error()
          }), AdvType) : AdvType).SHOWBANNER, TTCommon.ShowBannerAd, TTCommon.ET);
          (_crd && MyEvent === void 0 ? (_reportPossibleCrUseOfMyEvent({
            error: Error()
          }), MyEvent) : MyEvent).I.on((_crd && AdvType === void 0 ? (_reportPossibleCrUseOfAdvType({
            error: Error()
          }), AdvType) : AdvType).HIDEBANNER, TTCommon.HideBannerAd, TTCommon.ET);
        }
        /**登陆 */
        ;

        TTCommon.Login = function Login() {
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

        TTCommon.GetUserInfo = function GetUserInfo() {
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

        TTCommon.CreateBannerAd = function CreateBannerAd() {
          (_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
            error: Error()
          }), Adv) : Adv).adv.createBannerAd({
            adUnitId: (_crd && AdvManager === void 0 ? (_reportPossibleCrUseOfAdvManager({
              error: Error()
            }), AdvManager) : AdvManager).TTbannerAdId,
            adIntervals: 60,
            style: {
              left: 0,
              top: 0,
              width: 300
            }
          });
        };

        TTCommon.CreateRewardedVideoAd = function CreateRewardedVideoAd() {
          return (_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
            error: Error()
          }), Adv) : Adv).adv.createRewardedVideoAd({
            adUnitId: "123123123123"
          });
        };

        TTCommon.CreateInterstitialAd = function CreateInterstitialAd() {
          return (_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
            error: Error()
          }), Adv) : Adv).adv.createInterstitialAd({
            adUnitId: "123123123123"
          });
        };

        TTCommon.ShowBannerAd = function ShowBannerAd(arg) {
          TTCommon.bannerAd.onLoad(function () {
            TTCommon.bannerAd.show().then(function () {
              if (arg && arg.success) {
                arg.success();
              }

              console.log("广告显示成功");
            })["catch"](function (err) {
              if (arg && arg.error) {
                arg.error();
              }

              console.log("广告组件出现问题", err);
            });
          });
        };

        TTCommon.HideBannerAd = function HideBannerAd(arg) {
          if (arg && arg.success) {
            arg.success();
          }

          TTCommon.bannerAd.hide();
          console.log("广告隐藏");
        };

        TTCommon.ShowVideoAd = function ShowVideoAd() {};

        return TTCommon;
      }(), _defineProperty(_class2, "videoAd", null), _defineProperty(_class2, "bannerAd", null), _defineProperty(_class2, "interstitialAd", null), _defineProperty(_class2, "ET", 'TTAdvEventType'), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vU2VydmVyL1RUQ29tbW9uLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJNeUV2ZW50IiwiQWR2IiwiQWR2TWFuYWdlciIsIkFkdlR5cGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJUVENvbW1vbiIsIkluaXQiLCJJbml0QWRkRXZlbnQiLCJ2aWRlb0FkIiwiQ3JlYXRlUmV3YXJkZWRWaWRlb0FkIiwiYmFubmVyQWQiLCJDcmVhdGVCYW5uZXJBZCIsImludGVyc3RpdGlhbEFkIiwiQ3JlYXRlSW50ZXJzdGl0aWFsQWQiLCJJIiwib24iLCJTSE9XQkFOTkVSIiwiU2hvd0Jhbm5lckFkIiwiRVQiLCJISURFQkFOTkVSIiwiSGlkZUJhbm5lckFkIiwiTG9naW4iLCJhZHYiLCJjaGVja1Nlc3Npb24iLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImZhaWwiLCJsb2dpbiIsImZvcmNlIiwicmVzIiwiY29kZSIsImFub255bW91c0NvZGUiLCJHZXRVc2VySW5mbyIsImdldFVzZXJJbmZvIiwid2l0aENyZWRlbnRpYWxzIiwidXNlckluZm8iLCJjcmVhdGVCYW5uZXJBZCIsImFkVW5pdElkIiwiVFRiYW5uZXJBZElkIiwiYWRJbnRlcnZhbHMiLCJzdHlsZSIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsImNyZWF0ZVJld2FyZGVkVmlkZW9BZCIsImNyZWF0ZUludGVyc3RpdGlhbEFkIiwiYXJnIiwib25Mb2FkIiwic2hvdyIsInRoZW4iLCJlcnIiLCJlcnJvciIsImhpZGUiLCJTaG93VmlkZW9BZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOztBQUNBQyxNQUFBQSxPLG9CQUFBQSxPOztBQUNBQyxNQUFBQSxHLFVBQUFBLEc7O0FBQ0FDLE1BQUFBLFUs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Z0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBNeUV2ZW50IH0gZnJvbSAnLi4vRXZlbnRzL015RXZlbnQnO1xuaW1wb3J0IHsgQWR2IH0gZnJvbSAnLi9BZHYnO1xuaW1wb3J0IHsgQWR2TWFuYWdlciwgQWR2VHlwZSB9IGZyb20gJy4vQWR2TWFuYWdlcic7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuQGNjY2xhc3MoJ1RUQ29tbW9uJylcbmV4cG9ydCBjbGFzcyBUVENvbW1vbiB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgdmlkZW9BZDogYW55ID0gbnVsbDtcbiAgICBwcml2YXRlIHN0YXRpYyBiYW5uZXJBZDogYW55ID0gbnVsbDtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnRlcnN0aXRpYWxBZDogYW55ID0gbnVsbDtcblxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEVUID0gJ1RUQWR2RXZlbnRUeXBlJ1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIFRUQ29tbW9uLkluaXQoKTtcbiAgICAgICAgVFRDb21tb24uSW5pdEFkZEV2ZW50KCk7XG5cbiAgICB9XG4gICAgLyoq5Yid5aeL5YyWIOWIm+W7uuWQhOenjeW5v+WRiiAqL1xuICAgIHByaXZhdGUgc3RhdGljIEluaXQoKSB7XG4gICAgICAgIFRUQ29tbW9uLnZpZGVvQWQgPSBUVENvbW1vbi5DcmVhdGVSZXdhcmRlZFZpZGVvQWQoKTtcbiAgICAgICAgVFRDb21tb24uYmFubmVyQWQgPSBUVENvbW1vbi5DcmVhdGVCYW5uZXJBZCgpO1xuICAgICAgICBUVENvbW1vbi5pbnRlcnN0aXRpYWxBZCA9IFRUQ29tbW9uLkNyZWF0ZUludGVyc3RpdGlhbEFkKCk7XG4gICAgfVxuICAgIC8qKuWIneWni+WMluazqOWGjOS6i+S7tiAqL1xuICAgIHByaXZhdGUgc3RhdGljIEluaXRBZGRFdmVudCgpe1xuICAgICAgICBNeUV2ZW50Lkkub24oQWR2VHlwZS5TSE9XQkFOTkVSLCBUVENvbW1vbi5TaG93QmFubmVyQWQsIFRUQ29tbW9uLkVUKTtcbiAgICAgICAgTXlFdmVudC5JLm9uKEFkdlR5cGUuSElERUJBTk5FUiwgVFRDb21tb24uSGlkZUJhbm5lckFkLCBUVENvbW1vbi5FVCk7XG4gICAgfVxuXG4gICAgLyoq55m76ZmGICovXG4gICAgcHVibGljIHN0YXRpYyBMb2dpbigpIHtcbiAgICAgICAgQWR2LmFkdi5jaGVja1Nlc3Npb24oe1xuICAgICAgICAgICAgc3VjY2VzcygpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgc2Vzc2lvbiDmnKrov4fmnJ9gKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWlsKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzZXNzaW9uIOW3sui/h+acn++8jOmcgOimgemHjeaWsOeZu+W9lWApO1xuICAgICAgICAgICAgICAgIEFkdi5hZHYubG9naW4oe1xuICAgICAgICAgICAgICAgICAgICBmb3JjZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXM6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGxvZ2luIOiwg+eUqOaIkOWKnyR7cmVzLmNvZGV9ICR7cmVzLmFub255bW91c0NvZGV9YCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZhaWwocmVzOiBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBsb2dpbiDosIPnlKjlpLHotKVgKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIEdldFVzZXJJbmZvKCkge1xuICAgICAgICBBZHYuYWR2LmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZ2V0VXNlckluZm8g6LCD55So5oiQ5YqfICR7cmVzLnVzZXJJbmZvfWApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWwocmVzOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZ2V0VXNlckluZm8g6LCD55So5aSx6LSlYCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgcHVibGljIHN0YXRpYyBDcmVhdGVCYW5uZXJBZCgpIHtcbiAgICAgICAgQWR2LmFkdi5jcmVhdGVCYW5uZXJBZCh7XG4gICAgICAgICAgICBhZFVuaXRJZDogQWR2TWFuYWdlci5UVGJhbm5lckFkSWQsXG4gICAgICAgICAgICBhZEludGVydmFsczogNjAsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBDcmVhdGVSZXdhcmRlZFZpZGVvQWQoKSB7XG4gICAgICAgIHJldHVybiBBZHYuYWR2LmNyZWF0ZVJld2FyZGVkVmlkZW9BZCh7XG4gICAgICAgICAgICBhZFVuaXRJZDogXCIxMjMxMjMxMjMxMjNcIlxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgQ3JlYXRlSW50ZXJzdGl0aWFsQWQoKSB7XG4gICAgICAgIHJldHVybiBBZHYuYWR2LmNyZWF0ZUludGVyc3RpdGlhbEFkKHtcbiAgICAgICAgICAgIGFkVW5pdElkOiBcIjEyMzEyMzEyMzEyM1wiXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgU2hvd0Jhbm5lckFkKGFyZz86IGFueSkge1xuICAgICAgICBUVENvbW1vbi5iYW5uZXJBZC5vbkxvYWQoKCkgPT4ge1xuICAgICAgICAgICAgVFRDb21tb24uYmFubmVyQWRcbiAgICAgICAgICAgICAgICAuc2hvdygpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJnICYmIGFyZy5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcuc3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5bm/5ZGK5pi+56S65oiQ5YqfXCIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJnICYmIGFyZy5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJnLmVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlub/lkYrnu4Tku7blh7rnjrDpl67pophcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgSGlkZUJhbm5lckFkKGFyZz86IGFueSkge1xuICAgICAgICBpZiAoYXJnICYmIGFyZy5zdWNjZXNzKSB7XG4gICAgICAgICAgICBhcmcuc3VjY2VzcygpO1xuICAgICAgICB9XG4gICAgICAgIFRUQ29tbW9uLmJhbm5lckFkLmhpZGUoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLlub/lkYrpmpDol49cIik7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgU2hvd1ZpZGVvQWQoKSB7XG5cbiAgICB9XG5cbn1cbiJdfQ==