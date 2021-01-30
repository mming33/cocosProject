System.register(["cce.code-quality.cr", "cc", "../../Common/StateMachine/SMManger.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, SMName, StateType, _dec, _class, _temp, _crd, ccclass, property, GamingState;

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

      _cclegacy._RF.push({}, "453c0NzGtRJ1bf6QTy98hVT", "GamingState", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GamingState", GamingState = (_dec = ccclass('GamingState'), _dec(_class = (_temp = /*#__PURE__*/function () {
        function GamingState() {
          _defineProperty(this, "stateMachineName", (_crd && SMName === void 0 ? (_reportPossibleCrUseOfSMName({
            error: Error()
          }), SMName) : SMName).GameStateMachine);

          _defineProperty(this, "stateName", (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GamingState);

          _defineProperty(this, "canFromStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).StartGameState]);

          _defineProperty(this, "canToStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).DeathState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GamingStopState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GameOverState]);
        }

        var _proto = GamingState.prototype;

        _proto.Start = function Start(arg) {};

        _proto.End = function End(arg) {};

        return GamingState;
      }(), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL0dhbWluZ1N0YXRlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJTTU5hbWUiLCJTdGF0ZVR5cGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHYW1pbmdTdGF0ZSIsIkdhbWVTdGF0ZU1hY2hpbmUiLCJTdGFydEdhbWVTdGF0ZSIsIkRlYXRoU3RhdGUiLCJHYW1pbmdTdG9wU3RhdGUiLCJHYW1lT3ZlclN0YXRlIiwiU3RhcnQiLCJhcmciLCJFbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7QUFHQUMsTUFBQUEsTSxpQ0FBQUEsTTs7QUFFQUMsTUFBQUEsUyxrQ0FBQUEsUzs7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCSCxVLENBQXRCRyxPO0FBQVNDLE1BQUFBLFEsR0FBYUosVSxDQUFiSSxROzs2QkFHSkMsVyxXQURaRixPQUFPLENBQUMsYUFBRCxDOztvREFFdUI7QUFBQTtBQUFBLGdDQUFPRyxnQjs7NkNBQ2Q7QUFBQTtBQUFBLHNDQUFVRCxXOztvREFDRCxDQUFDO0FBQUE7QUFBQSxzQ0FBVUUsY0FBWCxDOztrREFDRixDQUFDO0FBQUE7QUFBQSxzQ0FBVUMsVUFBWCxFQUF1QjtBQUFBO0FBQUEsc0NBQVVDLGVBQWpDLEVBQWtEO0FBQUE7QUFBQSxzQ0FBVUMsYUFBNUQsQzs7Ozs7ZUFHM0JDLEssR0FBQSxlQUFNQyxHQUFOLEVBQXVCLENBRXRCLEM7O2VBQ0RDLEcsR0FBQSxhQUFJRCxHQUFKLEVBQXFCLENBRXBCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL0NvbW1vbi9HYW1lL015Q29tcG9uZW50JztcbmltcG9ydCB7IElTdGF0ZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvSVN0YXRlJztcbmltcG9ydCB7IFNNTmFtZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU01NYW5nZXInO1xuaW1wb3J0IHsgU3RhdGVNYWNoaW5lIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZU1hY2hpbmUnO1xuaW1wb3J0IHsgU3RhdGVUeXBlIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZVR5cGUnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0dhbWluZ1N0YXRlJylcbmV4cG9ydCBjbGFzcyBHYW1pbmdTdGF0ZSBpbXBsZW1lbnRzIElTdGF0ZSB7XG4gICAgc3RhdGVNYWNoaW5lTmFtZTogc3RyaW5nID0gU01OYW1lLkdhbWVTdGF0ZU1hY2hpbmU7XG4gICAgc3RhdGVOYW1lOiBzdHJpbmcgPSBTdGF0ZVR5cGUuR2FtaW5nU3RhdGU7XG4gICAgY2FuRnJvbVN0YXRlTmFtZTogc3RyaW5nW10gPSBbU3RhdGVUeXBlLlN0YXJ0R2FtZVN0YXRlXTtcbiAgICBjYW5Ub1N0YXRlTmFtZTogc3RyaW5nW10gPSBbU3RhdGVUeXBlLkRlYXRoU3RhdGUsIFN0YXRlVHlwZS5HYW1pbmdTdG9wU3RhdGUsIFN0YXRlVHlwZS5HYW1lT3ZlclN0YXRlXTtcbiAgIFxuXG4gICAgU3RhcnQoYXJnPzogYW55KTogdm9pZCB7XG5cbiAgICB9XG4gICAgRW5kKGFyZz86IGFueSk6IHZvaWQge1xuICAgICAgICBcbiAgICB9XG5cbn1cbiJdfQ==