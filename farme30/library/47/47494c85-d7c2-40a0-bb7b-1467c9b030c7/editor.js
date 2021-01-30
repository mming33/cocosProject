System.register(["cce.code-quality.cr", "cc", "../../Common/StateMachine/SMManger.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, SMName, StateType, _dec, _class, _temp, _crd, ccclass, property, GameSettlementState;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSMName(extras) {
    _reporterNs.report("SMName", "../../Common/StateMachine/SMManger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../../Common/StateMachine/StateType", _context.meta, extras);
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
    }, function (_CommonStateMachineSMMangerJs) {
      SMName = _CommonStateMachineSMMangerJs.SMName;
    }, function (_CommonStateMachineStateTypeJs) {
      StateType = _CommonStateMachineStateTypeJs.StateType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "47494yF18JAoLt7FGfJsDDH", "GameSettlementState", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameSettlementState", GameSettlementState = (_dec = ccclass('GameSettlementState'), _dec(_class = (_temp = class GameSettlementState {
        constructor() {
          _defineProperty(this, "stateMachineName", (_crd && SMName === void 0 ? (_reportPossibleCrUseOfSMName({
            error: Error()
          }), SMName) : SMName).GameStateMachine);

          _defineProperty(this, "stateName", (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GameSettlementState);

          _defineProperty(this, "canFromStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GameOverState]);

          _defineProperty(this, "canToStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).MainSceneStartState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).StartGameState]);
        }

        Start(arg) {}

        End(arg) {}

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL0dhbWVTZXR0bGVtZW50U3RhdGUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIlNNTmFtZSIsIlN0YXRlVHlwZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdhbWVTZXR0bGVtZW50U3RhdGUiLCJHYW1lU3RhdGVNYWNoaW5lIiwiR2FtZU92ZXJTdGF0ZSIsIk1haW5TY2VuZVN0YXJ0U3RhdGUiLCJTdGFydEdhbWVTdGF0ZSIsIlN0YXJ0IiwiYXJnIiwiRW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7O0FBR0FDLE1BQUFBLE0saUNBQUFBLE07O0FBRUFDLE1BQUFBLFMsa0NBQUFBLFM7Ozs7Ozs7T0FDSDtBQUFFQyxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsTyxHQUF3QkosVTs7cUNBR2pCSyxtQixXQURaRixPQUFPLENBQUMscUJBQUQsQyx5QkFBUixNQUNhRSxtQkFEYixDQUNtRDtBQUFBO0FBQUEsb0RBQ3BCO0FBQUE7QUFBQSxnQ0FBT0MsZ0JBRGE7O0FBQUEsNkNBRTNCO0FBQUE7QUFBQSxzQ0FBVUQsbUJBRmlCOztBQUFBLG9EQUdsQixDQUFDO0FBQUE7QUFBQSxzQ0FBVUUsYUFBWCxDQUhrQjs7QUFBQSxrREFJcEIsQ0FBQztBQUFBO0FBQUEsc0NBQVVDLG1CQUFYLEVBQWdDO0FBQUE7QUFBQSxzQ0FBVUMsY0FBMUMsQ0FKb0I7QUFBQTs7QUFPL0NDLFFBQUFBLEtBQUssQ0FBQ0MsR0FBRCxFQUFrQixDQUN0Qjs7QUFDREMsUUFBQUEsR0FBRyxDQUFDRCxHQUFELEVBQWtCLENBQ3BCOztBQVY4QyxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9Db21tb24vR2FtZS9NeUNvbXBvbmVudCc7XG5pbXBvcnQgeyBJU3RhdGUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL0lTdGF0ZSc7XG5pbXBvcnQgeyBTTU5hbWUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1NNTWFuZ2VyJztcbmltcG9ydCB7IFN0YXRlTWFjaGluZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVNYWNoaW5lJztcbmltcG9ydCB7IFN0YXRlVHlwZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVUeXBlJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdHYW1lU2V0dGxlbWVudFN0YXRlJylcbmV4cG9ydCBjbGFzcyBHYW1lU2V0dGxlbWVudFN0YXRlIGltcGxlbWVudHMgSVN0YXRlIHtcbiAgICBzdGF0ZU1hY2hpbmVOYW1lOiBzdHJpbmcgPSBTTU5hbWUuR2FtZVN0YXRlTWFjaGluZTtcbiAgICBzdGF0ZU5hbWU6IHN0cmluZyA9IFN0YXRlVHlwZS5HYW1lU2V0dGxlbWVudFN0YXRlO1xuICAgIGNhbkZyb21TdGF0ZU5hbWU6IHN0cmluZ1tdID0gW1N0YXRlVHlwZS5HYW1lT3ZlclN0YXRlXTtcbiAgICBjYW5Ub1N0YXRlTmFtZTogc3RyaW5nW10gPSBbU3RhdGVUeXBlLk1haW5TY2VuZVN0YXJ0U3RhdGUsIFN0YXRlVHlwZS5TdGFydEdhbWVTdGF0ZV07XG5cblxuICAgIFN0YXJ0KGFyZz86IGFueSk6IHZvaWQge1xuICAgIH1cbiAgICBFbmQoYXJnPzogYW55KTogdm9pZCB7XG4gICAgfVxuXG59XG4iXX0=