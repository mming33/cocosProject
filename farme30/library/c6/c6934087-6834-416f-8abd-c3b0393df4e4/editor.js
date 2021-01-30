System.register(["cce.code-quality.cr", "cc", "../../Common/StateMachine/SMManger.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, SMName, StateType, _dec, _class, _temp, _crd, ccclass, property, GamingStopState;

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

      _cclegacy._RF.push({}, "c6934CHaDRBb4q9w7A5PfTk", "GamingStopState", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GamingStopState", GamingStopState = (_dec = ccclass('GamingStopState'), _dec(_class = (_temp = class GamingStopState {
        constructor() {
          _defineProperty(this, "stateMachineName", (_crd && SMName === void 0 ? (_reportPossibleCrUseOfSMName({
            error: Error()
          }), SMName) : SMName).GameStateMachine);

          _defineProperty(this, "stateName", (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GamingStopState);

          _defineProperty(this, "canFromStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GamingState]);

          _defineProperty(this, "canToStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GamingState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GameOverState]);
        }

        Start(arg) {}

        End(arg) {}

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL0dhbWluZ1N0b3BTdGF0ZS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiU01OYW1lIiwiU3RhdGVUeXBlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiR2FtaW5nU3RvcFN0YXRlIiwiR2FtZVN0YXRlTWFjaGluZSIsIkdhbWluZ1N0YXRlIiwiR2FtZU92ZXJTdGF0ZSIsIlN0YXJ0IiwiYXJnIiwiRW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7O0FBR0FDLE1BQUFBLE0saUNBQUFBLE07O0FBRUFDLE1BQUFBLFMsa0NBQUFBLFM7Ozs7Ozs7T0FDSDtBQUFFQyxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsTyxHQUF3QkosVTs7aUNBR2pCSyxlLFdBRFpGLE9BQU8sQ0FBQyxpQkFBRCxDLHlCQUFSLE1BQ2FFLGVBRGIsQ0FDK0M7QUFBQTtBQUFBLG9EQUNoQjtBQUFBO0FBQUEsZ0NBQU9DLGdCQURTOztBQUFBLDZDQUV2QjtBQUFBO0FBQUEsc0NBQVVELGVBRmE7O0FBQUEsb0RBR2QsQ0FBQztBQUFBO0FBQUEsc0NBQVVFLFdBQVgsQ0FIYzs7QUFBQSxrREFJaEIsQ0FBQztBQUFBO0FBQUEsc0NBQVVBLFdBQVgsRUFBdUI7QUFBQTtBQUFBLHNDQUFVQyxhQUFqQyxDQUpnQjtBQUFBOztBQU8xQ0MsUUFBQUEsS0FBSyxDQUFDQyxHQUFELEVBQWtCLENBQ3ZCOztBQUNEQyxRQUFBQSxHQUFHLENBQUNELEdBQUQsRUFBa0IsQ0FDcEI7O0FBVjBDLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL0NvbW1vbi9HYW1lL015Q29tcG9uZW50JztcbmltcG9ydCB7IElTdGF0ZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvSVN0YXRlJztcbmltcG9ydCB7IFNNTmFtZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU01NYW5nZXInO1xuaW1wb3J0IHsgU3RhdGVNYWNoaW5lIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZU1hY2hpbmUnO1xuaW1wb3J0IHsgU3RhdGVUeXBlIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZVR5cGUnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0dhbWluZ1N0b3BTdGF0ZScpXG5leHBvcnQgY2xhc3MgR2FtaW5nU3RvcFN0YXRlIGltcGxlbWVudHMgSVN0YXRlIHtcbiAgICBzdGF0ZU1hY2hpbmVOYW1lOiBzdHJpbmcgPSBTTU5hbWUuR2FtZVN0YXRlTWFjaGluZTtcbiAgICBzdGF0ZU5hbWU6IHN0cmluZyA9IFN0YXRlVHlwZS5HYW1pbmdTdG9wU3RhdGU7XG4gICAgY2FuRnJvbVN0YXRlTmFtZTogc3RyaW5nW10gPSBbU3RhdGVUeXBlLkdhbWluZ1N0YXRlXTtcbiAgICBjYW5Ub1N0YXRlTmFtZTogc3RyaW5nW10gPSBbU3RhdGVUeXBlLkdhbWluZ1N0YXRlLFN0YXRlVHlwZS5HYW1lT3ZlclN0YXRlXTsgICBcbiAgXG5cbiAgICAgU3RhcnQoYXJnPzogYW55KTogdm9pZCB7XG4gICAgfVxuICAgIEVuZChhcmc/OiBhbnkpOiB2b2lkIHtcbiAgICB9XG59XG4iXX0=