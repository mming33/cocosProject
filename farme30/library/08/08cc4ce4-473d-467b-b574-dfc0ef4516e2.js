System.register(["cce.code-quality.cr", "cc", "../Events/MyEvent.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MyEvent, _crd, AdvType, AdvManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfMyEvent(extras) {
    _reporterNs.report("MyEvent", "../Events/MyEvent", _context.meta, extras);
  }

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_EventsMyEventJs) {
      MyEvent = _EventsMyEventJs.MyEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "08cc4zkRz1Ge7V038DvRRbi", "AdvManager", _context.meta);

      _export("AdvType", AdvType = function AdvType() {});

      _defineProperty(AdvType, "SHOWBANNER", 'SHOWBANNER');

      _defineProperty(AdvType, "HIDEBANNER", 'HIDEBANNER');

      _export("AdvManager", AdvManager = /*#__PURE__*/function () {
        function AdvManager() {}

        AdvManager.CreateBanner = function CreateBanner(success, error) {}
        /**显示banner */
        ;

        AdvManager.ShowBannerAd = function ShowBannerAd(success, error) {
          var arg = {
            success: success,
            error: error
          };
          (_crd && MyEvent === void 0 ? (_reportPossibleCrUseOfMyEvent({
            error: Error()
          }), MyEvent) : MyEvent).I.emit(AdvType.SHOWBANNER, arg);
        }
        /**隐藏banner */
        ;

        AdvManager.HideBannerAd = function HideBannerAd(success, error) {
          var arg = {
            success: success,
            error: error
          };
          (_crd && MyEvent === void 0 ? (_reportPossibleCrUseOfMyEvent({
            error: Error()
          }), MyEvent) : MyEvent).I.emit(AdvType.HIDEBANNER, arg);
        };

        return AdvManager;
      }());

      _defineProperty(AdvManager, "TTbannerAdId", '');

      _defineProperty(AdvManager, "TTvideoAdId", '');

      _defineProperty(AdvManager, "TTinterstitialAdId", '');

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vU2VydmVyL0Fkdk1hbmFnZXIudHMiXSwibmFtZXMiOlsiTXlFdmVudCIsIkFkdlR5cGUiLCJBZHZNYW5hZ2VyIiwiQ3JlYXRlQmFubmVyIiwic3VjY2VzcyIsImVycm9yIiwiU2hvd0Jhbm5lckFkIiwiYXJnIiwiSSIsImVtaXQiLCJTSE9XQkFOTkVSIiwiSGlkZUJhbm5lckFkIiwiSElERUJBTk5FUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDU0EsTUFBQUEsTyxvQkFBQUEsTzs7Ozs7Ozt5QkFFSUMsTzs7c0JBQUFBLE8sZ0JBRTJCLFk7O3NCQUYzQkEsTyxnQkFJMkIsWTs7NEJBRzNCQyxVOzs7bUJBUUtDLFksR0FBZCxzQkFBMkJDLE9BQTNCLEVBQStDQyxLQUEvQyxFQUFpRSxDQUVoRTtBQUVEOzs7bUJBQ2NDLFksR0FBZCxzQkFBMkJGLE9BQTNCLEVBQStDQyxLQUEvQyxFQUFpRTtBQUM3RCxjQUFJRSxHQUFHLEdBQUc7QUFDTkgsWUFBQUEsT0FBTyxFQUFFQSxPQURIO0FBRU5DLFlBQUFBLEtBQUssRUFBRUE7QUFGRCxXQUFWO0FBSUE7QUFBQTtBQUFBLGtDQUFRRyxDQUFSLENBQVVDLElBQVYsQ0FBZVIsT0FBTyxDQUFDUyxVQUF2QixFQUFtQ0gsR0FBbkM7QUFDSDtBQUVEOzs7bUJBQ2NJLFksR0FBZCxzQkFBMkJQLE9BQTNCLEVBQStDQyxLQUEvQyxFQUFpRTtBQUM3RCxjQUFJRSxHQUFHLEdBQUc7QUFDTkgsWUFBQUEsT0FBTyxFQUFFQSxPQURIO0FBRU5DLFlBQUFBLEtBQUssRUFBRUE7QUFGRCxXQUFWO0FBSUE7QUFBQTtBQUFBLGtDQUFRRyxDQUFSLENBQVVDLElBQVYsQ0FBZVIsT0FBTyxDQUFDVyxVQUF2QixFQUFtQ0wsR0FBbkM7QUFDSCxTOzs7OztzQkE1QlFMLFUsa0JBRXFDLEU7O3NCQUZyQ0EsVSxpQkFHb0MsRTs7c0JBSHBDQSxVLHdCQUkyQyxFIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBNeUV2ZW50IH0gZnJvbSAnLi4vRXZlbnRzL015RXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgQWR2VHlwZSB7XG4gICAgLyoq5pi+56S6YmFubmVyICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTSE9XQkFOTkVSID0gJ1NIT1dCQU5ORVInO1xuICAgIC8qKumakOiXj2Jhbm5lciAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSElERUJBTk5FUiA9ICdISURFQkFOTkVSJztcblxufVxuZXhwb3J0IGNsYXNzIEFkdk1hbmFnZXIge1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUVGJhbm5lckFkSWQ6IHN0cmluZyA9ICcnXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUVHZpZGVvQWRJZDogc3RyaW5nID0gJydcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRUaW50ZXJzdGl0aWFsQWRJZDogc3RyaW5nID0gJydcblxuXG5cbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZUJhbm5lcihzdWNjZXNzPzogRnVuY3Rpb24sIGVycm9yPzogRnVuY3Rpb24pIHtcblxuICAgIH1cblxuICAgIC8qKuaYvuekumJhbm5lciAqL1xuICAgIHB1YmxpYyBzdGF0aWMgU2hvd0Jhbm5lckFkKHN1Y2Nlc3M/OiBGdW5jdGlvbiwgZXJyb3I/OiBGdW5jdGlvbikge1xuICAgICAgICBsZXQgYXJnID0ge1xuICAgICAgICAgICAgc3VjY2Vzczogc3VjY2VzcyxcbiAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgfTtcbiAgICAgICAgTXlFdmVudC5JLmVtaXQoQWR2VHlwZS5TSE9XQkFOTkVSLCBhcmcpO1xuICAgIH1cblxuICAgIC8qKumakOiXj2Jhbm5lciAqL1xuICAgIHB1YmxpYyBzdGF0aWMgSGlkZUJhbm5lckFkKHN1Y2Nlc3M/OiBGdW5jdGlvbiwgZXJyb3I/OiBGdW5jdGlvbikge1xuICAgICAgICBsZXQgYXJnID0ge1xuICAgICAgICAgICAgc3VjY2Vzczogc3VjY2VzcyxcbiAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgfTtcbiAgICAgICAgTXlFdmVudC5JLmVtaXQoQWR2VHlwZS5ISURFQkFOTkVSLCBhcmcpO1xuICAgIH1cbn1cbiJdfQ==