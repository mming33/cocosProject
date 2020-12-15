System.register(["cce.code-quality.cr", "cc", "../../Common/Game/MyComponent.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, MyComponent, _dec, _class, _temp, _crd, ccclass, property, MainSceneUI;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfMyComponent(extras) {
    _reporterNs.report("MyComponent", "../../Common/Game/MyComponent", _context.meta, extras);
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
    }, function (_CommonGameMyComponentJs) {
      MyComponent = _CommonGameMyComponentJs.MyComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "df1a91JgTxDradJO+oSnd8m", "MainSceneUI", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MainSceneUI", MainSceneUI = (_dec = ccclass('MainSceneUI'), _dec(_class = (_temp = /*#__PURE__*/function (_ref) {
        _inheritsLoose(MainSceneUI, _ref);

        function MainSceneUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _ref.call.apply(_ref, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "UI", null);

          _defineProperty(_assertThisInitialized(_this), "bg", null);

          _defineProperty(_assertThisInitialized(_this), "mainCamera", null);

          return _this;
        }

        var _proto = MainSceneUI.prototype;

        _proto.Init = function Init() {};

        _proto.InitFindNode = function InitFindNode() {};

        _proto.ShowUI = function ShowUI() {};

        return MainSceneUI;
      }(_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL01haW5TY2VuZS9NYWluU2NlbmVVSS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiTXlDb21wb25lbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJNYWluU2NlbmVVSSIsIkluaXQiLCJJbml0RmluZE5vZGUiLCJTaG93VUkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7QUFDQUMsTUFBQUEsVyw0QkFBQUEsVzs7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCRixVLENBQXRCRSxPO0FBQVNDLE1BQUFBLFEsR0FBYUgsVSxDQUFiRyxROzs2QkFHSkMsVyxXQURaRixPQUFPLENBQUMsYUFBRCxDOzs7Ozs7Ozs7Ozs7K0RBR3lCLEk7OytEQUNBLEk7O3VFQUNRLEk7Ozs7Ozs7ZUFFckNHLEksR0FBQSxnQkFBTyxDQUVOLEM7O2VBRURDLFksR0FBQSx3QkFBZSxDQUVkLEM7O2VBRURDLE0sR0FBQSxrQkFBUyxDQUVSLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFNwcml0ZUNvbXBvbmVudCwgZmluZCwgTGFiZWxDb21wb25lbnQsIEV2ZW50VG91Y2gsIGRpcmVjdG9yLCB0d2VlbiwgQ29sb3IsIENhbWVyYUNvbXBvbmVudCB9IGZyb20gJ2NjJztcbmltcG9ydCB7IE15Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vQ29tbW9uL0dhbWUvTXlDb21wb25lbnQnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ01haW5TY2VuZVVJJylcbmV4cG9ydCBjbGFzcyBNYWluU2NlbmVVSSBleHRlbmRzIE15Q29tcG9uZW50IHtcblxuICAgIFVJOiBTcHJpdGVDb21wb25lbnQgfCBudWxsID0gbnVsbDtcbiAgICBiZzogU3ByaXRlQ29tcG9uZW50IHwgbnVsbCA9IG51bGw7XG4gICAgbWFpbkNhbWVyYTogQ2FtZXJhQ29tcG9uZW50IHwgbnVsbCA9IG51bGw7XG4gICAgXG4gICAgSW5pdCgpIHtcblxuICAgIH1cblxuICAgIEluaXRGaW5kTm9kZSgpIHtcblxuICAgIH1cblxuICAgIFNob3dVSSgpIHtcblxuICAgIH1cblxuXG5cblxuXG59XG4iXX0=