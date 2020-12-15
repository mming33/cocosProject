System.register(["cce.code-quality.cr", "cc", "../../Common/Game/MyComponent.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, MyComponent, _dec, _class, _temp, _crd, ccclass, property, MainSceneUI;

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("MainSceneUI", MainSceneUI = (_dec = ccclass('MainSceneUI'), _dec(_class = (_temp = class MainSceneUI extends (_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "UI", null);

          _defineProperty(this, "bg", null);

          _defineProperty(this, "mainCamera", null);
        }

        Init() {}

        InitFindNode() {}

        ShowUI() {}

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL01haW5TY2VuZS9NYWluU2NlbmVVSS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiTXlDb21wb25lbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJNYWluU2NlbmVVSSIsIkluaXQiLCJJbml0RmluZE5vZGUiLCJTaG93VUkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOztBQUNBQyxNQUFBQSxXLDRCQUFBQSxXOzs7Ozs7O09BQ0g7QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE8sR0FBd0JILFU7OzZCQUdqQkksVyxXQURaRixPQUFPLENBQUMsYUFBRCxDLHlCQUFSLE1BQ2FFLFdBRGI7QUFBQTtBQUFBLHNDQUM2QztBQUFBO0FBQUE7O0FBQUEsc0NBRVosSUFGWTs7QUFBQSxzQ0FHWixJQUhZOztBQUFBLDhDQUlKLElBSkk7QUFBQTs7QUFNekNDLFFBQUFBLElBQUksR0FBRyxDQUVOOztBQUVEQyxRQUFBQSxZQUFZLEdBQUcsQ0FFZDs7QUFFREMsUUFBQUEsTUFBTSxHQUFHLENBRVI7O0FBaEJ3QyxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBTcHJpdGVDb21wb25lbnQsIGZpbmQsIExhYmVsQ29tcG9uZW50LCBFdmVudFRvdWNoLCBkaXJlY3RvciwgdHdlZW4sIENvbG9yLCBDYW1lcmFDb21wb25lbnQgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL0NvbW1vbi9HYW1lL015Q29tcG9uZW50JztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdNYWluU2NlbmVVSScpXG5leHBvcnQgY2xhc3MgTWFpblNjZW5lVUkgZXh0ZW5kcyBNeUNvbXBvbmVudCB7XG5cbiAgICBVSTogU3ByaXRlQ29tcG9uZW50IHwgbnVsbCA9IG51bGw7XG4gICAgYmc6IFNwcml0ZUNvbXBvbmVudCB8IG51bGwgPSBudWxsO1xuICAgIG1haW5DYW1lcmE6IENhbWVyYUNvbXBvbmVudCB8IG51bGwgPSBudWxsO1xuICAgIFxuICAgIEluaXQoKSB7XG5cbiAgICB9XG5cbiAgICBJbml0RmluZE5vZGUoKSB7XG5cbiAgICB9XG5cbiAgICBTaG93VUkoKSB7XG5cbiAgICB9XG5cblxuXG5cblxufVxuIl19