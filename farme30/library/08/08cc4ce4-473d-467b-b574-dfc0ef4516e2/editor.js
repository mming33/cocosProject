System.register(["cce.code-quality.cr", "cc", "../Events/MyEvent.js", "./TTCommon.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MyEvent, TTCommon, AdvType, Adv, AdvManager, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfMyEvent(extras) {
    _reporterNs.report("MyEvent", "../Events/MyEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTTCommon(extras) {
    _reporterNs.report("TTCommon", "./TTCommon", _context.meta, extras);
  }

  _export({
    AdvType: void 0,
    Adv: void 0,
    AdvManager: void 0
  });

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_EventsMyEventJs) {
      MyEvent = _EventsMyEventJs.MyEvent;
    }, function (_TTCommonJs) {
      TTCommon = _TTCommonJs.TTCommon;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "08cc4zkRz1Ge7V038DvRRbi", "AdvManager", _context.meta);

      _export("AdvType", AdvType = class AdvType {});

      _defineProperty(AdvType, "SHOWBANNER", 'SHOWBANNER');

      _defineProperty(AdvType, "HIDEBANNER", 'HIDEBANNER');

      _defineProperty(AdvType, "SHOWVIDEOAD", "SHOWVIDEOAD");

      _defineProperty(AdvType, "ONCLOSEVIDEOAD", "ONCLOSEVIDEOAD");

      _defineProperty(AdvType, "OFFCLOSEVIDEOAD", "OFFCLOSEVIDEOAD");

      _defineProperty(AdvType, "SHOWINTERSTITIALAD", "SHOWINTERSTITIALAD");

      _defineProperty(AdvType, "VIBRATELONG", "VIBRATELONG");

      _defineProperty(AdvType, "VIBRATESHORT", "VIBRATESHORT");

      _defineProperty(AdvType, "STARTRECORDER", "STARTRECORDER");

      _defineProperty(AdvType, "STOPRECORDER", "STOPRECORDER");

      _export("Adv", Adv = class Adv {});

      _defineProperty(Adv, "adv", window.tt);

      _defineProperty(Adv, "advtype", 'tt');

      _export("AdvManager", AdvManager = class AdvManager {
        Init() {
          switch (Adv.advtype) {
            case 'tt':
              AdvManager.adv = new (_crd && TTCommon === void 0 ? (_reportPossibleCrUseOfTTCommon({
                error: Error()
              }), TTCommon) : TTCommon)();
              break;

            case 'wx':
              break;

            default:
              break;
          }
        }
        /**显示banner */


        static ShowBannerAd(success, error) {
          let arg = {
            success: success,
            error: error
          };
          (_crd && MyEvent === void 0 ? (_reportPossibleCrUseOfMyEvent({
            error: Error()
          }), MyEvent) : MyEvent).I.emit(AdvType.SHOWBANNER, arg);
        }
        /**隐藏banner */


        static HideBannerAd(success, error) {
          let arg = {
            success: success,
            error: error
          };
          (_crd && MyEvent === void 0 ? (_reportPossibleCrUseOfMyEvent({
            error: Error()
          }), MyEvent) : MyEvent).I.emit(AdvType.HIDEBANNER, arg);
        }
        /**显示视频广告 */


        static ShowVideoAd(success, error) {
          let arg = {
            success: success,
            error: error
          };
          (_crd && MyEvent === void 0 ? (_reportPossibleCrUseOfMyEvent({
            error: Error()
          }), MyEvent) : MyEvent).I.emit(AdvType.SHOWVIDEOAD, arg);
        }
        /**注册关闭广告事件 */


        static onCloseVideoAd(success, error) {
          let arg = {
            success: success,
            error: error
          };
          (_crd && MyEvent === void 0 ? (_reportPossibleCrUseOfMyEvent({
            error: Error()
          }), MyEvent) : MyEvent).I.emit(AdvType.ONCLOSEVIDEOAD, arg);
        }
        /**注销关闭广告事件 */


        static offCloseVideoAd(success, error) {
          let arg = {
            success: success,
            error: error
          };
          (_crd && MyEvent === void 0 ? (_reportPossibleCrUseOfMyEvent({
            error: Error()
          }), MyEvent) : MyEvent).I.emit(AdvType.OFFCLOSEVIDEOAD, arg);
        }
        /**显示插屏广告 */


        static ShowInterstitialAd(success, error) {
          let arg = {
            success: success,
            error: error
          };
          (_crd && MyEvent === void 0 ? (_reportPossibleCrUseOfMyEvent({
            error: Error()
          }), MyEvent) : MyEvent).I.emit(AdvType.SHOWINTERSTITIALAD, arg);
        }
        /**长震动 
         * @param arg 
         * arg.success
         * arg.fail
         * arg.complete
         */


        VibrateLong(success, error, complete) {
          let arg = {
            success: success,
            //&& arg.success(),
            fail: error,
            //&& arg.error(),
            complete: complete // && arg.complete(),

          };
          (_crd && MyEvent === void 0 ? (_reportPossibleCrUseOfMyEvent({
            error: Error()
          }), MyEvent) : MyEvent).I.emit(AdvType.VIBRATELONG, arg);
        }
        /**短震动 
         * @param arg 
         * arg.success
         * arg.fail
         * arg.complete
         */


        VibrateShort(success, error, complete) {
          let arg = {
            success: success,
            //&& arg.success(),
            fail: error,
            //&& arg.error(),
            complete: complete // && arg.complete(),

          };
          (_crd && MyEvent === void 0 ? (_reportPossibleCrUseOfMyEvent({
            error: Error()
          }), MyEvent) : MyEvent).I.emit(AdvType.VIBRATESHORT);
        }
        /**==============================TT==============================**/

        /** 开始录屏
         * @param success 
         * @param error 
         */


        static StartRecorder(success, error) {
          let arg = {
            success: success,
            error: error
          };
          (_crd && MyEvent === void 0 ? (_reportPossibleCrUseOfMyEvent({
            error: Error()
          }), MyEvent) : MyEvent).I.emit(AdvType.STARTRECORDER, arg);
        }
        /** 停止录屏
         * @param success 分享成功
         * @param error 分享失败
         */


        static StopRecorder(success, error) {
          let arg = {
            success: success,
            error: error
          };
          (_crd && MyEvent === void 0 ? (_reportPossibleCrUseOfMyEvent({
            error: Error()
          }), MyEvent) : MyEvent).I.emit(AdvType.STOPRECORDER, arg);
        }

      });

      _defineProperty(AdvManager, "bannerAdId", '');

      _defineProperty(AdvManager, "videoAdId", '');

      _defineProperty(AdvManager, "interstitialAdId", '');

      _defineProperty(AdvManager, "adv", void 0);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vU2VydmVyL0Fkdk1hbmFnZXIudHMiXSwibmFtZXMiOlsiQWR2VHlwZSIsIkFkdiIsIkFkdk1hbmFnZXIiLCJNeUV2ZW50IiwiVFRDb21tb24iLCJ3aW5kb3ciLCJ0dCIsIkluaXQiLCJhZHZ0eXBlIiwiYWR2IiwiU2hvd0Jhbm5lckFkIiwic3VjY2VzcyIsImVycm9yIiwiYXJnIiwiSSIsImVtaXQiLCJTSE9XQkFOTkVSIiwiSGlkZUJhbm5lckFkIiwiSElERUJBTk5FUiIsIlNob3dWaWRlb0FkIiwiU0hPV1ZJREVPQUQiLCJvbkNsb3NlVmlkZW9BZCIsIk9OQ0xPU0VWSURFT0FEIiwib2ZmQ2xvc2VWaWRlb0FkIiwiT0ZGQ0xPU0VWSURFT0FEIiwiU2hvd0ludGVyc3RpdGlhbEFkIiwiU0hPV0lOVEVSU1RJVElBTEFEIiwiVmlicmF0ZUxvbmciLCJjb21wbGV0ZSIsImZhaWwiLCJWSUJSQVRFTE9ORyIsIlZpYnJhdGVTaG9ydCIsIlZJQlJBVEVTSE9SVCIsIlN0YXJ0UmVjb3JkZXIiLCJTVEFSVFJFQ09SREVSIiwiU3RvcFJlY29yZGVyIiwiU1RPUFJFQ09SREVSIl0sIm1hcHBpbmdzIjoiOzs7aURBS2FBLE8sRUF3QkFDLEcsRUFJQUMsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaENKQyxNQUFBQSxPLG9CQUFBQSxPOztBQUVBQyxNQUFBQSxRLGVBQUFBLFE7Ozs7Ozs7eUJBRUlKLE8sR0FBTixNQUFNQSxPQUFOLENBQWMsRTs7c0JBQVJBLE8sZ0JBRTJCLFk7O3NCQUYzQkEsTyxnQkFJMkIsWTs7c0JBSjNCQSxPLGlCQU00QixhOztzQkFONUJBLE8sb0JBUStCLGdCOztzQkFSL0JBLE8scUJBVWdDLGlCOztzQkFWaENBLE8sd0JBWW1DLG9COztzQkFabkNBLE8saUJBYTZCLGE7O3NCQWI3QkEsTyxrQkFjOEIsYzs7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LEVBQXFDdkIsR0FBckM7QUFDSDs7QUEzSG1CLE87O3NCQUFYWCxVLGdCQUM0QixFOztzQkFENUJBLFUsZUFFa0MsRTs7c0JBRmxDQSxVLHNCQUd5QyxFOztzQkFIekNBLFUiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE15RXZlbnQgfSBmcm9tICcuLi9FdmVudHMvTXlFdmVudCc7XG5pbXBvcnQgeyBJQWR2IH0gZnJvbSAnLi9JQWR2JztcbmltcG9ydCB7IFRUQ29tbW9uIH0gZnJvbSAnLi9UVENvbW1vbic7XG5cbmV4cG9ydCBjbGFzcyBBZHZUeXBlIHtcbiAgICAvKirmmL7npLpiYW5uZXIgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNIT1dCQU5ORVIgPSAnU0hPV0JBTk5FUic7XG4gICAgLyoq6ZqQ6JePYmFubmVyICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBISURFQkFOTkVSID0gJ0hJREVCQU5ORVInO1xuICAgIC8qKuaYvuekuuinhumikeW5v+WRiiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU0hPV1ZJREVPQUQgPSBcIlNIT1dWSURFT0FEXCI7XG4gICAgLyoq5re75Yqg5YWz6Zet5bm/5ZGK5LqL5Lu2ICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPTkNMT1NFVklERU9BRCA9IFwiT05DTE9TRVZJREVPQURcIjtcbiAgICAvKirnp7vpmaTlhbPpl63lub/lkYrkuovku7YgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9GRkNMT1NFVklERU9BRCA9IFwiT0ZGQ0xPU0VWSURFT0FEXCI7XG4gICAgLyoq5pi+56S65o+S5bGP5bm/5ZGKICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTSE9XSU5URVJTVElUSUFMQUQgPSBcIlNIT1dJTlRFUlNUSVRJQUxBRFwiO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVklCUkFURUxPTkcgID0gXCJWSUJSQVRFTE9OR1wiO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVklCUkFURVNIT1JUICA9IFwiVklCUkFURVNIT1JUXCI7XG5cblxuXG4gICAgLyoqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09VFQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNUQVJUUkVDT1JERVIgPSBcIlNUQVJUUkVDT1JERVJcIjtcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNUT1BSRUNPUkRFUiA9IFwiU1RPUFJFQ09SREVSXCI7XG5cblxufVxuZXhwb3J0IGNsYXNzIEFkdiB7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBhZHY6IGFueSA9ICg8YW55PndpbmRvdykudHQ7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBhZHZ0eXBlOiBzdHJpbmcgPSAndHQnO1xufVxuZXhwb3J0IGNsYXNzIEFkdk1hbmFnZXIge1xuICAgIHN0YXRpYyByZWFkb25seSBiYW5uZXJBZElkOiBzdHJpbmcgPSAnJ1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdmlkZW9BZElkOiBzdHJpbmcgPSAnJ1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW50ZXJzdGl0aWFsQWRJZDogc3RyaW5nID0gJydcbiAgICBwcml2YXRlIHN0YXRpYyBhZHY6IElBZHY7XG4gICAgSW5pdCgpIHtcbiAgICAgICAgc3dpdGNoIChBZHYuYWR2dHlwZSkge1xuICAgICAgICAgICAgY2FzZSAndHQnOlxuICAgICAgICAgICAgICAgIEFkdk1hbmFnZXIuYWR2ID0gbmV3IFRUQ29tbW9uKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd3eCc6XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoq5pi+56S6YmFubmVyICovXG4gICAgcHVibGljIHN0YXRpYyBTaG93QmFubmVyQWQoc3VjY2Vzcz86IEZ1bmN0aW9uLCBlcnJvcj86IEZ1bmN0aW9uKSB7XG4gICAgICAgIGxldCBhcmcgPSB7XG4gICAgICAgICAgICBzdWNjZXNzOiBzdWNjZXNzLFxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICB9O1xuICAgICAgICBNeUV2ZW50LkkuZW1pdChBZHZUeXBlLlNIT1dCQU5ORVIsIGFyZyk7XG4gICAgfVxuICAgIC8qKumakOiXj2Jhbm5lciAqL1xuICAgIHB1YmxpYyBzdGF0aWMgSGlkZUJhbm5lckFkKHN1Y2Nlc3M/OiBGdW5jdGlvbiwgZXJyb3I/OiBGdW5jdGlvbikge1xuICAgICAgICBsZXQgYXJnID0ge1xuICAgICAgICAgICAgc3VjY2Vzczogc3VjY2VzcyxcbiAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgfTtcbiAgICAgICAgTXlFdmVudC5JLmVtaXQoQWR2VHlwZS5ISURFQkFOTkVSLCBhcmcpO1xuICAgIH1cbiAgICAvKirmmL7npLrop4bpopHlub/lkYogKi9cbiAgICBwdWJsaWMgc3RhdGljIFNob3dWaWRlb0FkKHN1Y2Nlc3M/OiBGdW5jdGlvbiwgZXJyb3I/OiBGdW5jdGlvbikge1xuICAgICAgICBsZXQgYXJnID0ge1xuICAgICAgICAgICAgc3VjY2Vzczogc3VjY2VzcyxcbiAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgfTtcbiAgICAgICAgTXlFdmVudC5JLmVtaXQoQWR2VHlwZS5TSE9XVklERU9BRCwgYXJnKTtcbiAgICB9XG4gICAgLyoq5rOo5YaM5YWz6Zet5bm/5ZGK5LqL5Lu2ICovXG4gICAgcHVibGljIHN0YXRpYyBvbkNsb3NlVmlkZW9BZChzdWNjZXNzPzogRnVuY3Rpb24sIGVycm9yPzogRnVuY3Rpb24pIHtcbiAgICAgICAgbGV0IGFyZyA9IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHN1Y2Nlc3MsXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgIH07XG4gICAgICAgIE15RXZlbnQuSS5lbWl0KEFkdlR5cGUuT05DTE9TRVZJREVPQUQsIGFyZyk7XG4gICAgfVxuICAgIC8qKuazqOmUgOWFs+mXreW5v+WRiuS6i+S7tiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgb2ZmQ2xvc2VWaWRlb0FkKHN1Y2Nlc3M/OiBGdW5jdGlvbiwgZXJyb3I/OiBGdW5jdGlvbikge1xuICAgICAgICBsZXQgYXJnID0ge1xuICAgICAgICAgICAgc3VjY2Vzczogc3VjY2VzcyxcbiAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgfTtcbiAgICAgICAgTXlFdmVudC5JLmVtaXQoQWR2VHlwZS5PRkZDTE9TRVZJREVPQUQsIGFyZyk7XG4gICAgfVxuICAgIC8qKuaYvuekuuaPkuWxj+W5v+WRiiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgU2hvd0ludGVyc3RpdGlhbEFkKHN1Y2Nlc3M/OiBGdW5jdGlvbiwgZXJyb3I/OiBGdW5jdGlvbikge1xuICAgICAgICBsZXQgYXJnID0ge1xuICAgICAgICAgICAgc3VjY2Vzczogc3VjY2VzcyxcbiAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgfTtcbiAgICAgICAgTXlFdmVudC5JLmVtaXQoQWR2VHlwZS5TSE9XSU5URVJTVElUSUFMQUQsIGFyZyk7XG4gICAgfVxuICAgIC8qKumVv+mch+WKqCBcbiAgICAgKiBAcGFyYW0gYXJnIFxuICAgICAqIGFyZy5zdWNjZXNzXG4gICAgICogYXJnLmZhaWxcbiAgICAgKiBhcmcuY29tcGxldGVcbiAgICAgKi9cbiAgICBWaWJyYXRlTG9uZyhzdWNjZXNzPzogRnVuY3Rpb24sIGVycm9yPzogRnVuY3Rpb24sIGNvbXBsZXRlPzogRnVuY3Rpb24pIHtcbiAgICAgICAgbGV0IGFyZyA9IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHN1Y2Nlc3MsIC8vJiYgYXJnLnN1Y2Nlc3MoKSxcbiAgICAgICAgICAgIGZhaWw6IGVycm9yLCAvLyYmIGFyZy5lcnJvcigpLFxuICAgICAgICAgICAgY29tcGxldGU6IGNvbXBsZXRlLC8vICYmIGFyZy5jb21wbGV0ZSgpLFxuICAgICAgICB9XG4gICAgICAgIE15RXZlbnQuSS5lbWl0KEFkdlR5cGUuVklCUkFURUxPTkcsIGFyZyk7XG4gICAgfVxuICAgIC8qKuefremch+WKqCBcbiAgICAgKiBAcGFyYW0gYXJnIFxuICAgICAqIGFyZy5zdWNjZXNzXG4gICAgICogYXJnLmZhaWxcbiAgICAgKiBhcmcuY29tcGxldGVcbiAgICAgKi9cbiAgICBWaWJyYXRlU2hvcnQoc3VjY2Vzcz86IEZ1bmN0aW9uLCBlcnJvcj86IEZ1bmN0aW9uLCBjb21wbGV0ZT86IEZ1bmN0aW9uKSB7XG4gICAgICAgIGxldCBhcmcgPSB7XG4gICAgICAgICAgICBzdWNjZXNzOiBzdWNjZXNzLCAvLyYmIGFyZy5zdWNjZXNzKCksXG4gICAgICAgICAgICBmYWlsOiBlcnJvciwgLy8mJiBhcmcuZXJyb3IoKSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBjb21wbGV0ZSwvLyAmJiBhcmcuY29tcGxldGUoKSxcbiAgICAgICAgfVxuICAgICAgICBNeUV2ZW50LkkuZW1pdChBZHZUeXBlLlZJQlJBVEVTSE9SVClcbiAgICB9XG5cblxuXG5cblxuXG5cblxuICAgIC8qKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVRUPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KiovXG4gICAgLyoqIOW8gOWni+W9leWxj1xuICAgICAqIEBwYXJhbSBzdWNjZXNzIFxuICAgICAqIEBwYXJhbSBlcnJvciBcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIFN0YXJ0UmVjb3JkZXIoc3VjY2Vzcz86IEZ1bmN0aW9uLCBlcnJvcj86IEZ1bmN0aW9uKSB7XG4gICAgICAgIGxldCBhcmcgPSB7XG4gICAgICAgICAgICBzdWNjZXNzOiBzdWNjZXNzLFxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICB9O1xuICAgICAgICBNeUV2ZW50LkkuZW1pdChBZHZUeXBlLlNUQVJUUkVDT1JERVIsIGFyZyk7XG4gICAgfVxuICAgIC8qKiDlgZzmraLlvZXlsY9cbiAgICAgKiBAcGFyYW0gc3VjY2VzcyDliIbkuqvmiJDlip9cbiAgICAgKiBAcGFyYW0gZXJyb3Ig5YiG5Lqr5aSx6LSlXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBTdG9wUmVjb3JkZXIoc3VjY2Vzcz86IEZ1bmN0aW9uLCBlcnJvcj86IEZ1bmN0aW9uKSB7XG4gICAgICAgIGxldCBhcmcgPSB7XG4gICAgICAgICAgICBzdWNjZXNzOiBzdWNjZXNzLFxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICB9O1xuICAgICAgICBNeUV2ZW50LkkuZW1pdChBZHZUeXBlLlNUT1BSRUNPUkRFUiwgYXJnKTtcbiAgICB9XG59XG4iXX0=