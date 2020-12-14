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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9Qb3B1cC9Qb3B1cC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiUG9wdXBNYW5hZ2VyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiUG9wdXAiLCJJbml0IiwiYXJnIiwiY2xvc2UiLCJJIiwiQ2xvc2VQb3B1cCIsImlzTGV2ZWwyUG9wdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7O0FBQ1pDLE1BQUFBLFksbUJBQUFBLFk7Ozs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQkgsVSxDQUF0QkcsTztBQUFTQyxNQUFBQSxRLEdBQWFKLFUsQ0FBYkksUTs7dUJBR0pDLEssV0FEWkYsT0FBTyxDQUFDLE9BQUQsQzs7Ozs7Ozs7Ozs7OzBFQUdxQixLOzs7Ozs7O2VBQ3pCRyxJLEdBQUEsY0FBS0MsR0FBTCxFQUFnQixDQUVmLEM7O2VBQ0RDLEssR0FBQSxpQkFBUTtBQUNKO0FBQUE7QUFBQSw0Q0FBYUMsQ0FBYixDQUFlQyxVQUFmLENBQTBCLEtBQUtDLGFBQS9CO0FBQ0gsUzs7O1FBUnNCVixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgUG9wdXBNYW5hZ2VyIH0gZnJvbSAnLi9Qb3B1cE1hbmFnZXInO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1BvcHVwJylcbmV4cG9ydCBjbGFzcyBQb3B1cCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBpc0xldmVsMlBvcHVwOiBib29sZWFuID0gZmFsc2U7XG4gICAgSW5pdChhcmc/OiBhbnkpIHtcblxuICAgIH1cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgUG9wdXBNYW5hZ2VyLkkuQ2xvc2VQb3B1cCh0aGlzLmlzTGV2ZWwyUG9wdXApO1xuICAgIH1cbn1cbiJdfQ==