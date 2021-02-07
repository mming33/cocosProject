System.register(["cce.code-quality.cr", "cc", "./PopupManager.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, PopupManager, _dec, _class, _temp, _crd, ccclass, property, Popup;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfPopupManager(extras) {
    _reporterNs.report("PopupManager", "./PopupManager", _context.meta, extras);
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
      Component = _cc.Component;
    }, function (_PopupManagerJs) {
      PopupManager = _PopupManagerJs.PopupManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "edc9coy+C5AU4hXxdPJ4lw+", "Popup", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Popup", Popup = (_dec = ccclass('Popup'), _dec(_class = (_temp = class Popup extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "isLevel2Popup", false);
        }

        Init(arg) {}

        close() {
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).ClosePopup(this.isLevel2Popup);
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vUG9wdXAvUG9wdXAudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlBvcHVwTWFuYWdlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlBvcHVwIiwiSW5pdCIsImFyZyIsImNsb3NlIiwiQ2xvc2VQb3B1cCIsImlzTGV2ZWwyUG9wdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUzs7QUFDWkMsTUFBQUEsWSxtQkFBQUEsWTs7Ozs7OztPQUNIO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCSixVOzt1QkFHakJLLEssV0FEWkYsT0FBTyxDQUFDLE9BQUQsQyx5QkFBUixNQUNhRSxLQURiLFNBQzJCSixTQUQzQixDQUNxQztBQUFBO0FBQUE7O0FBQUEsaURBRVIsS0FGUTtBQUFBOztBQUdqQ0ssUUFBQUEsSUFBSSxDQUFDQyxHQUFELEVBQVksQ0FFZjs7QUFDREMsUUFBQUEsS0FBSyxHQUFHO0FBQ0o7QUFBQTtBQUFBLDRDQUFhQyxVQUFiLENBQXdCLEtBQUtDLGFBQTdCO0FBQ0g7O0FBUmdDLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBQb3B1cE1hbmFnZXIgfSBmcm9tICcuL1BvcHVwTWFuYWdlcic7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnUG9wdXAnKVxuZXhwb3J0IGNsYXNzIFBvcHVwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGlzTGV2ZWwyUG9wdXA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBJbml0KGFyZz86IGFueSkge1xuXG4gICAgfVxuICAgIGNsb3NlKCkge1xuICAgICAgICBQb3B1cE1hbmFnZXIuQ2xvc2VQb3B1cCh0aGlzLmlzTGV2ZWwyUG9wdXApO1xuICAgIH1cbn1cbiJdfQ==