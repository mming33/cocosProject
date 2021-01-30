System.register(["cce.code-quality.cr", "cc", "../StateMachine/SMManger.js", "../StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, SMName, StateType, _dec, _class, _temp, _crd, ccclass, property, LoadState;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSMName(extras) {
    _reporterNs.report("SMName", "../StateMachine/SMManger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../StateMachine/StateType", _context.meta, extras);
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
    }, function (_StateMachineSMMangerJs) {
      SMName = _StateMachineSMMangerJs.SMName;
    }, function (_StateMachineStateTypeJs) {
      StateType = _StateMachineStateTypeJs.StateType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8d2b5LuN1ZEObLfIE1FLeI2", "LoadState", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("LoadState", LoadState = (_dec = ccclass('LoadState'), _dec(_class = (_temp = /*#__PURE__*/function () {
        function LoadState() {
          _defineProperty(this, "stateName", (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).LoadState);

          _defineProperty(this, "stateMachineName", (_crd && SMName === void 0 ? (_reportPossibleCrUseOfSMName({
            error: Error()
          }), SMName) : SMName).GameStateMachine);

          _defineProperty(this, "canToStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).MainSceneStartState]);

          _defineProperty(this, "canFromStateName", []);
        }

        var _proto = LoadState.prototype;

        _proto.Start = function Start(arg) {};

        _proto.End = function End(arg) {};

        _proto.addSelf2StateMap = function addSelf2StateMap(instance) {};

        return LoadState;
      }(), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vQ29tbW9uU3RhdGUvTG9hZFN0YXRlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJTTU5hbWUiLCJTdGF0ZVR5cGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJMb2FkU3RhdGUiLCJHYW1lU3RhdGVNYWNoaW5lIiwiTWFpblNjZW5lU3RhcnRTdGF0ZSIsIlN0YXJ0IiwiYXJnIiwiRW5kIiwiYWRkU2VsZjJTdGF0ZU1hcCIsImluc3RhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7O0FBRVVDLE1BQUFBLE0sMkJBQUFBLE07O0FBQ1ZDLE1BQUFBLFMsNEJBQUFBLFM7Ozs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQkgsVSxDQUF0QkcsTztBQUFTQyxNQUFBQSxRLEdBQWFKLFUsQ0FBYkksUTs7MkJBRUpDLFMsV0FEWkYsT0FBTyxDQUFDLFdBQUQsQzs7NkNBR2dCO0FBQUE7QUFBQSxzQ0FBVUUsUzs7b0RBQ0g7QUFBQTtBQUFBLGdDQUFPQyxnQjs7a0RBQ1AsQ0FBQztBQUFBO0FBQUEsc0NBQVVDLG1CQUFYLEM7O29EQUNFLEU7Ozs7O2VBQzdCQyxLLEdBQUEsZUFBTUMsR0FBTixFQUF1QixDQUV0QixDOztlQUNEQyxHLEdBQUEsYUFBSUQsR0FBSixFQUFxQixDQUVwQixDOztlQUNERSxnQixHQUFBLDBCQUFpQkMsUUFBakIsRUFBeUMsQ0FDeEMsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgbG9hZGVyLCBkaXJlY3RvciwgY29tcHV0ZVJhdGlvQnlUeXBlLCBmaW5kLCBMYWJlbCwgVUlUcmFuc2Zvcm1Db21wb25lbnQsIGdhbWUsIHJlc291cmNlcywgSnNvbkFzc2V0LCBpbnN0YW50aWF0ZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IElTdGF0ZSB9IGZyb20gJy4uL1N0YXRlTWFjaGluZS9JU3RhdGUnO1xuaW1wb3J0IHsgU01NYW5nZXIsIFNNTmFtZSB9IGZyb20gJy4uL1N0YXRlTWFjaGluZS9TTU1hbmdlcic7XG5pbXBvcnQgeyBTdGF0ZVR5cGUgfSBmcm9tICcuLi9TdGF0ZU1hY2hpbmUvU3RhdGVUeXBlJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5AY2NjbGFzcygnTG9hZFN0YXRlJylcbmV4cG9ydCBjbGFzcyBMb2FkU3RhdGUgaW1wbGVtZW50cyBJU3RhdGUge1xuXG4gICAgc3RhdGVOYW1lOiBzdHJpbmcgPSBTdGF0ZVR5cGUuTG9hZFN0YXRlO1xuICAgIHN0YXRlTWFjaGluZU5hbWU6IHN0cmluZyA9IFNNTmFtZS5HYW1lU3RhdGVNYWNoaW5lO1xuICAgIGNhblRvU3RhdGVOYW1lOiBzdHJpbmdbXSA9IFtTdGF0ZVR5cGUuTWFpblNjZW5lU3RhcnRTdGF0ZV07XG4gICAgY2FuRnJvbVN0YXRlTmFtZTogc3RyaW5nW10gPSBbXTtcbiAgICBTdGFydChhcmc/OiBhbnkpOiB2b2lkIHtcblxuICAgIH1cbiAgICBFbmQoYXJnPzogYW55KTogdm9pZCB7XG5cbiAgICB9XG4gICAgYWRkU2VsZjJTdGF0ZU1hcChpbnN0YW5jZTogSVN0YXRlKTogdm9pZCB7XG4gICAgfVxuXG59XG4iXX0=