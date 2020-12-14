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
          }), PopupManager) : PopupManager).I.ClosePopup(this.isLevel2Popup);
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9Qb3B1cC9Qb3B1cC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiUG9wdXBNYW5hZ2VyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiUG9wdXAiLCJJbml0IiwiYXJnIiwiY2xvc2UiLCJJIiwiQ2xvc2VQb3B1cCIsImlzTGV2ZWwyUG9wdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUzs7QUFDWkMsTUFBQUEsWSxtQkFBQUEsWTs7Ozs7OztPQUNIO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCSixVOzt1QkFHakJLLEssV0FEWkYsT0FBTyxDQUFDLE9BQUQsQyx5QkFBUixNQUNhRSxLQURiLFNBQzJCSixTQUQzQixDQUNxQztBQUFBO0FBQUE7O0FBQUEsaURBRVIsS0FGUTtBQUFBOztBQUdqQ0ssUUFBQUEsSUFBSSxDQUFDQyxHQUFELEVBQVksQ0FFZjs7QUFDREMsUUFBQUEsS0FBSyxHQUFHO0FBQ0o7QUFBQTtBQUFBLDRDQUFhQyxDQUFiLENBQWVDLFVBQWYsQ0FBMEIsS0FBS0MsYUFBL0I7QUFDSDs7QUFSZ0MsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IFBvcHVwTWFuYWdlciB9IGZyb20gJy4vUG9wdXBNYW5hZ2VyJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdQb3B1cCcpXG5leHBvcnQgY2xhc3MgUG9wdXAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgaXNMZXZlbDJQb3B1cDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEluaXQoYXJnPzogYW55KSB7XG5cbiAgICB9XG4gICAgY2xvc2UoKSB7XG4gICAgICAgIFBvcHVwTWFuYWdlci5JLkNsb3NlUG9wdXAodGhpcy5pc0xldmVsMlBvcHVwKTtcbiAgICB9XG59XG4iXX0=