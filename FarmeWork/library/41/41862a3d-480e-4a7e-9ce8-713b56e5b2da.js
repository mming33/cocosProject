System.register(["cc", "code-quality:cr", "./PopupManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, PopupManager, _dec, _class, _temp, _crd, ccclass, property, Popup;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfPopupManager(extras) {
    _reporterNs.report("PopupManager", "./PopupManager", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_PopupManagerJs) {
      PopupManager = _PopupManagerJs.PopupManager;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "41862o9SA5KfpzocTtW5bLa", "Popup", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Popup", Popup = (_dec = ccclass('Popup'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(Popup, _Component);

        function Popup() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Popup);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Popup)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.isLevel2Popup = false;
          return _this;
        }

        _createClass(Popup, [{
          key: "Init",
          value: function Init(arg) {}
        }, {
          key: "close",
          value: function close() {
            (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
              error: Error()
            }), PopupManager) : PopupManager).I.ClosePopup(this.isLevel2Popup);
          }
        }]);

        return Popup;
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9Qb3B1cC9Qb3B1cC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiUG9wdXBNYW5hZ2VyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiUG9wdXAiLCJpc0xldmVsMlBvcHVwIiwiYXJnIiwiSSIsIkNsb3NlUG9wdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTOzs7O0FBQ1pDLE1BQUFBLFksbUJBQUFBLFk7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCSCxVLENBQXRCRyxPO0FBQVNDLE1BQUFBLFEsR0FBYUosVSxDQUFiSSxROzt1QkFHSkMsSyxXQURaRixPQUFPLENBQUMsT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Z0JBR0pHLGEsR0FBeUIsSzs7Ozs7OytCQUNwQkMsRyxFQUFXLENBRWY7OztrQ0FDTztBQUNKO0FBQUE7QUFBQSw4Q0FBYUMsQ0FBYixDQUFlQyxVQUFmLENBQTBCLEtBQUtILGFBQS9CO0FBQ0g7Ozs7UUFSc0JMLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBQb3B1cE1hbmFnZXIgfSBmcm9tICcuL1BvcHVwTWFuYWdlcic7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnUG9wdXAnKVxuZXhwb3J0IGNsYXNzIFBvcHVwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGlzTGV2ZWwyUG9wdXA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBJbml0KGFyZz86IGFueSkge1xuXG4gICAgfVxuICAgIGNsb3NlKCkge1xuICAgICAgICBQb3B1cE1hbmFnZXIuSS5DbG9zZVBvcHVwKHRoaXMuaXNMZXZlbDJQb3B1cCk7XG4gICAgfVxufVxuIl19