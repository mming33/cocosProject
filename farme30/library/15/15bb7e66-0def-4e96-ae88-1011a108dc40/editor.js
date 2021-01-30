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

      ({
        ccclass,
        property
      } = _decorator);

      _export("TTCommon", TTCommon = (_dec = ccclass('TTCommon'), _dec(_class = (_temp = _class2 = class TTCommon {
        constructor() {
          TTCommon.Init();
          TTCommon.InitAddEvent();
        }
        /**初始化 创建各种广告 */


        static Init() {
          TTCommon.videoAd = TTCommon.CreateRewardedVideoAd();
          TTCommon.bannerAd = TTCommon.CreateBannerAd();
          TTCommon.interstitialAd = TTCommon.CreateInterstitialAd();
        }
        /**初始化注册事件 */


        static InitAddEvent() {
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


        static Login() {
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

        static GetUserInfo() {
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

        static CreateBannerAd() {
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
        }

        static CreateRewardedVideoAd() {
          return (_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
            error: Error()
          }), Adv) : Adv).adv.createRewardedVideoAd({
            adUnitId: "123123123123"
          });
        }

        static CreateInterstitialAd() {
          return (_crd && Adv === void 0 ? (_reportPossibleCrUseOfAdv({
            error: Error()
          }), Adv) : Adv).adv.createInterstitialAd({
            adUnitId: "123123123123"
          });
        }

        static ShowBannerAd(arg) {
          TTCommon.bannerAd.onLoad(() => {
            TTCommon.bannerAd.show().then(() => {
              if (arg && arg.success) {
                arg.success();
              }

              console.log("广告显示成功");
            }).catch(err => {
              if (arg && arg.error) {
                arg.error();
              }

              console.log("广告组件出现问题", err);
            });
          });
        }

        static HideBannerAd(arg) {
          if (arg && arg.success) {
            arg.success();
          }

          TTCommon.bannerAd.hide();
          console.log("广告隐藏");
        }

        static ShowVideoAd() {}

      }, _defineProperty(_class2, "videoAd", null), _defineProperty(_class2, "bannerAd", null), _defineProperty(_class2, "interstitialAd", null), _defineProperty(_class2, "ET", 'TTAdvEventType'), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vU2VydmVyL1RUQ29tbW9uLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJNeUV2ZW50IiwiQWR2IiwiQWR2TWFuYWdlciIsIkFkdlR5cGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJUVENvbW1vbiIsImNvbnN0cnVjdG9yIiwiSW5pdCIsIkluaXRBZGRFdmVudCIsInZpZGVvQWQiLCJDcmVhdGVSZXdhcmRlZFZpZGVvQWQiLCJiYW5uZXJBZCIsIkNyZWF0ZUJhbm5lckFkIiwiaW50ZXJzdGl0aWFsQWQiLCJDcmVhdGVJbnRlcnN0aXRpYWxBZCIsIkkiLCJvbiIsIlNIT1dCQU5ORVIiLCJTaG93QmFubmVyQWQiLCJFVCIsIkhJREVCQU5ORVIiLCJIaWRlQmFubmVyQWQiLCJMb2dpbiIsImFkdiIsImNoZWNrU2Vzc2lvbiIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiZmFpbCIsImxvZ2luIiwiZm9yY2UiLCJyZXMiLCJjb2RlIiwiYW5vbnltb3VzQ29kZSIsIkdldFVzZXJJbmZvIiwiZ2V0VXNlckluZm8iLCJ3aXRoQ3JlZGVudGlhbHMiLCJ1c2VySW5mbyIsImNyZWF0ZUJhbm5lckFkIiwiYWRVbml0SWQiLCJUVGJhbm5lckFkSWQiLCJhZEludGVydmFscyIsInN0eWxlIiwibGVmdCIsInRvcCIsIndpZHRoIiwiY3JlYXRlUmV3YXJkZWRWaWRlb0FkIiwiY3JlYXRlSW50ZXJzdGl0aWFsQWQiLCJhcmciLCJvbkxvYWQiLCJzaG93IiwidGhlbiIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJoaWRlIiwiU2hvd1ZpZGVvQWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7QUFDQUMsTUFBQUEsTyxvQkFBQUEsTzs7QUFDQUMsTUFBQUEsRyxV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N0IsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNIOztBQUNELGVBQWM2QixXQUFkLEdBQTRCLENBRTNCOztBQTVHaUIsTyxzQ0FDWSxJLHdDQUNDLEksOENBQ00sSSxrQ0FFUixnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IE15RXZlbnQgfSBmcm9tICcuLi9FdmVudHMvTXlFdmVudCc7XG5pbXBvcnQgeyBBZHYgfSBmcm9tICcuL0Fkdic7XG5pbXBvcnQgeyBBZHZNYW5hZ2VyLCBBZHZUeXBlIH0gZnJvbSAnLi9BZHZNYW5hZ2VyJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5AY2NjbGFzcygnVFRDb21tb24nKVxuZXhwb3J0IGNsYXNzIFRUQ29tbW9uIHtcbiAgICBwcml2YXRlIHN0YXRpYyB2aWRlb0FkOiBhbnkgPSBudWxsO1xuICAgIHByaXZhdGUgc3RhdGljIGJhbm5lckFkOiBhbnkgPSBudWxsO1xuICAgIHByaXZhdGUgc3RhdGljIGludGVyc3RpdGlhbEFkOiBhbnkgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRVQgPSAnVFRBZHZFdmVudFR5cGUnXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgVFRDb21tb24uSW5pdCgpO1xuICAgICAgICBUVENvbW1vbi5Jbml0QWRkRXZlbnQoKTtcblxuICAgIH1cbiAgICAvKirliJ3lp4vljJYg5Yib5bu65ZCE56eN5bm/5ZGKICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgSW5pdCgpIHtcbiAgICAgICAgVFRDb21tb24udmlkZW9BZCA9IFRUQ29tbW9uLkNyZWF0ZVJld2FyZGVkVmlkZW9BZCgpO1xuICAgICAgICBUVENvbW1vbi5iYW5uZXJBZCA9IFRUQ29tbW9uLkNyZWF0ZUJhbm5lckFkKCk7XG4gICAgICAgIFRUQ29tbW9uLmludGVyc3RpdGlhbEFkID0gVFRDb21tb24uQ3JlYXRlSW50ZXJzdGl0aWFsQWQoKTtcbiAgICB9XG4gICAgLyoq5Yid5aeL5YyW5rOo5YaM5LqL5Lu2ICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgSW5pdEFkZEV2ZW50KCl7XG4gICAgICAgIE15RXZlbnQuSS5vbihBZHZUeXBlLlNIT1dCQU5ORVIsIFRUQ29tbW9uLlNob3dCYW5uZXJBZCwgVFRDb21tb24uRVQpO1xuICAgICAgICBNeUV2ZW50Lkkub24oQWR2VHlwZS5ISURFQkFOTkVSLCBUVENvbW1vbi5IaWRlQmFubmVyQWQsIFRUQ29tbW9uLkVUKTtcbiAgICB9XG5cbiAgICAvKirnmbvpmYYgKi9cbiAgICBwdWJsaWMgc3RhdGljIExvZ2luKCkge1xuICAgICAgICBBZHYuYWR2LmNoZWNrU2Vzc2lvbih7XG4gICAgICAgICAgICBzdWNjZXNzKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzZXNzaW9uIOacqui/h+acn2ApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWwoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHNlc3Npb24g5bey6L+H5pyf77yM6ZyA6KaB6YeN5paw55m75b2VYCk7XG4gICAgICAgICAgICAgICAgQWR2LmFkdi5sb2dpbih7XG4gICAgICAgICAgICAgICAgICAgIGZvcmNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlczogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgbG9naW4g6LCD55So5oiQ5YqfJHtyZXMuY29kZX0gJHtyZXMuYW5vbnltb3VzQ29kZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZmFpbChyZXM6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGxvZ2luIOiwg+eUqOWksei0pWApO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgR2V0VXNlckluZm8oKSB7XG4gICAgICAgIEFkdi5hZHYuZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICAgICAgc3VjY2VzcyhyZXM6IGFueSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBnZXRVc2VySW5mbyDosIPnlKjmiJDlip8gJHtyZXMudXNlckluZm99YCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbChyZXM6IGFueSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBnZXRVc2VySW5mbyDosIPnlKjlpLHotKVgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZUJhbm5lckFkKCkge1xuICAgICAgICBBZHYuYWR2LmNyZWF0ZUJhbm5lckFkKHtcbiAgICAgICAgICAgIGFkVW5pdElkOiBBZHZNYW5hZ2VyLlRUYmFubmVyQWRJZCxcbiAgICAgICAgICAgIGFkSW50ZXJ2YWxzOiA2MCxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZVJld2FyZGVkVmlkZW9BZCgpIHtcbiAgICAgICAgcmV0dXJuIEFkdi5hZHYuY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHtcbiAgICAgICAgICAgIGFkVW5pdElkOiBcIjEyMzEyMzEyMzEyM1wiXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBDcmVhdGVJbnRlcnN0aXRpYWxBZCgpIHtcbiAgICAgICAgcmV0dXJuIEFkdi5hZHYuY3JlYXRlSW50ZXJzdGl0aWFsQWQoe1xuICAgICAgICAgICAgYWRVbml0SWQ6IFwiMTIzMTIzMTIzMTIzXCJcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBTaG93QmFubmVyQWQoYXJnPzogYW55KSB7XG4gICAgICAgIFRUQ29tbW9uLmJhbm5lckFkLm9uTG9hZCgoKSA9PiB7XG4gICAgICAgICAgICBUVENvbW1vbi5iYW5uZXJBZFxuICAgICAgICAgICAgICAgIC5zaG93KClcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcmcgJiYgYXJnLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZy5zdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlub/lkYrmmL7npLrmiJDlip9cIik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcmcgJiYgYXJnLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcuZXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW5v+WRiue7hOS7tuWHuueOsOmXrumimFwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBIaWRlQmFubmVyQWQoYXJnPzogYW55KSB7XG4gICAgICAgIGlmIChhcmcgJiYgYXJnLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGFyZy5zdWNjZXNzKCk7XG4gICAgICAgIH1cbiAgICAgICAgVFRDb21tb24uYmFubmVyQWQuaGlkZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuW5v+WRiumakOiXj1wiKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBTaG93VmlkZW9BZCgpIHtcblxuICAgIH1cblxufVxuIl19