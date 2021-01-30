System.register(["cce.code-quality.cr", "cc", "../../Common/StateMachine/SMManger.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, SMName, StateType, _dec, _class, _temp, _crd, ccclass, property, DeathState;

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

      _cclegacy._RF.push({}, "50f11uIlgZG2LdasrTUjWs3", "DeathState", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("DeathState", DeathState = (_dec = ccclass('DeathState'), _dec(_class = (_temp = /*#__PURE__*/function () {
        function DeathState() {
          _defineProperty(this, "stateMachineName", (_crd && SMName === void 0 ? (_reportPossibleCrUseOfSMName({
            error: Error()
          }), SMName) : SMName).GameStateMachine);

          _defineProperty(this, "stateName", (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).DeathState);

          _defineProperty(this, "canFromStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GamingState]);

          _defineProperty(this, "canToStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GameOverState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GamingState]);
        }

        var _proto = DeathState.prototype;

        _proto.Start = function Start(arg) {};

        _proto.End = function End(arg) {};

        return DeathState;
      }(), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL0RlYXRoU3RhdGUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIlNNTmFtZSIsIlN0YXRlVHlwZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkRlYXRoU3RhdGUiLCJHYW1lU3RhdGVNYWNoaW5lIiwiR2FtaW5nU3RhdGUiLCJHYW1lT3ZlclN0YXRlIiwiU3RhcnQiLCJhcmciLCJFbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7QUFHQUMsTUFBQUEsTSxpQ0FBQUEsTTs7QUFFQUMsTUFBQUEsUyxrQ0FBQUEsUzs7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCSCxVLENBQXRCRyxPO0FBQVNDLE1BQUFBLFEsR0FBYUosVSxDQUFiSSxROzs0QkFHSkMsVSxXQURaRixPQUFPLENBQUMsWUFBRCxDOztvREFFdUI7QUFBQTtBQUFBLGdDQUFPRyxnQjs7NkNBQ2Q7QUFBQTtBQUFBLHNDQUFVRCxVOztvREFDRCxDQUFDO0FBQUE7QUFBQSxzQ0FBVUUsV0FBWCxDOztrREFDRixDQUFDO0FBQUE7QUFBQSxzQ0FBVUMsYUFBWCxFQUEwQjtBQUFBO0FBQUEsc0NBQVVELFdBQXBDLEM7Ozs7O2VBRzNCRSxLLEdBQUEsZUFBTUMsR0FBTixFQUF1QixDQUN0QixDOztlQUNEQyxHLEdBQUEsYUFBSUQsR0FBSixFQUFxQixDQUNwQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9Db21tb24vR2FtZS9NeUNvbXBvbmVudCc7XG5pbXBvcnQgeyBJU3RhdGUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL0lTdGF0ZSc7XG5pbXBvcnQgeyBTTU5hbWUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1NNTWFuZ2VyJztcbmltcG9ydCB7IFN0YXRlTWFjaGluZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVNYWNoaW5lJztcbmltcG9ydCB7IFN0YXRlVHlwZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVUeXBlJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdEZWF0aFN0YXRlJylcbmV4cG9ydCBjbGFzcyBEZWF0aFN0YXRlIGltcGxlbWVudHMgSVN0YXRlIHtcbiAgICBzdGF0ZU1hY2hpbmVOYW1lOiBzdHJpbmcgPSBTTU5hbWUuR2FtZVN0YXRlTWFjaGluZTtcbiAgICBzdGF0ZU5hbWU6IHN0cmluZyA9IFN0YXRlVHlwZS5EZWF0aFN0YXRlO1xuICAgIGNhbkZyb21TdGF0ZU5hbWU6IHN0cmluZ1tdID0gW1N0YXRlVHlwZS5HYW1pbmdTdGF0ZV07XG4gICAgY2FuVG9TdGF0ZU5hbWU6IHN0cmluZ1tdID0gW1N0YXRlVHlwZS5HYW1lT3ZlclN0YXRlLCBTdGF0ZVR5cGUuR2FtaW5nU3RhdGVdO1xuXG5cbiAgICBTdGFydChhcmc/OiBhbnkpOiB2b2lkIHtcbiAgICB9XG4gICAgRW5kKGFyZz86IGFueSk6IHZvaWQge1xuICAgIH1cblxufVxuIl19