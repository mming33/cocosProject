System.register(["cce.code-quality.cr", "cc", "../../Common/Game/MyComponent.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, MyComponent, _dec, _class, _crd, ccclass, property, MainSceneUI;

  function _reportPossibleCrUseOfMyComponent(extras) {
    _reporterNs.report("MyComponent", "../../Common/Game/MyComponent", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0
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

      _export("MainSceneUI", MainSceneUI = (_dec = ccclass('MainSceneUI'), _dec(_class = class MainSceneUI extends (_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent) {}) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0dhbWUvTWFpblNjZW5lL01haW5TY2VuZVVJLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJNeUNvbXBvbmVudCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIk1haW5TY2VuZVVJIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7QUFDQUMsTUFBQUEsVyw0QkFBQUEsVzs7Ozs7OztPQUlIO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCSCxVOzs2QkFHakJJLFcsV0FEWkYsT0FBTyxDQUFDLGFBQUQsQyxnQkFBUixNQUNhRSxXQURiO0FBQUE7QUFBQSxzQ0FDNkMsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgU3ByaXRlQ29tcG9uZW50LCBmaW5kLCBMYWJlbENvbXBvbmVudCwgRXZlbnRUb3VjaCwgZGlyZWN0b3IsIHR3ZWVuLCBDb2xvciB9IGZyb20gJ2NjJztcbmltcG9ydCB7IE15Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vQ29tbW9uL0dhbWUvTXlDb21wb25lbnQnO1xuaW1wb3J0IHsgR2V0U2VydmVyRGF0YSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TZXJ2ZXIvR2V0U2VydmVyRGF0YSc7XG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tICcuLi8uLi9Db21tb24vU291bmQvU291bmRNYW5hZ2VyJztcbmltcG9ydCB7IE1haW5TY2VuZU1hbmFnZXIgfSBmcm9tICcuL01haW5TY2VuZU1hbmFnZXInO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ01haW5TY2VuZVVJJylcbmV4cG9ydCBjbGFzcyBNYWluU2NlbmVVSSBleHRlbmRzIE15Q29tcG9uZW50IHtcbiAgIFxufVxuIl19