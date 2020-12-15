System.register(["cce.code-quality.cr", "cc", "./PopupManager.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, PopupManager, _dec, _class, _temp, _crd, ccclass, property, Popup;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Popup", Popup = (_dec = ccclass('Popup'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Popup, _Component);

        function Popup() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "isLevel2Popup", false);

          return _this;
        }

        var _proto = Popup.prototype;

        _proto.Init = function Init(arg) {};

        _proto.close = function close() {
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).I.ClosePopup(this.isLevel2Popup);
        };

        return Popup;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vUG9wdXAvUG9wdXAudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlBvcHVwTWFuYWdlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlBvcHVwIiwiSW5pdCIsImFyZyIsImNsb3NlIiwiSSIsIkNsb3NlUG9wdXAiLCJpc0xldmVsMlBvcHVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTOztBQUNaQyxNQUFBQSxZLG1CQUFBQSxZOzs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JILFUsQ0FBdEJHLE87QUFBU0MsTUFBQUEsUSxHQUFhSixVLENBQWJJLFE7O3VCQUdKQyxLLFdBRFpGLE9BQU8sQ0FBQyxPQUFELEM7Ozs7Ozs7Ozs7OzswRUFHcUIsSzs7Ozs7OztlQUN6QkcsSSxHQUFBLGNBQUtDLEdBQUwsRUFBZ0IsQ0FFZixDOztlQUNEQyxLLEdBQUEsaUJBQVE7QUFDSjtBQUFBO0FBQUEsNENBQWFDLENBQWIsQ0FBZUMsVUFBZixDQUEwQixLQUFLQyxhQUEvQjtBQUNILFM7OztRQVJzQlYsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IFBvcHVwTWFuYWdlciB9IGZyb20gJy4vUG9wdXBNYW5hZ2VyJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdQb3B1cCcpXG5leHBvcnQgY2xhc3MgUG9wdXAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgaXNMZXZlbDJQb3B1cDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEluaXQoYXJnPzogYW55KSB7XG5cbiAgICB9XG4gICAgY2xvc2UoKSB7XG4gICAgICAgIFBvcHVwTWFuYWdlci5JLkNsb3NlUG9wdXAodGhpcy5pc0xldmVsMlBvcHVwKTtcbiAgICB9XG59XG4iXX0=