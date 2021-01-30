System.register(["cce.code-quality.cr", "cc", "../../Common/StateMachine/SMManger.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, SMName, StateType, _dec, _class, _temp, _crd, ccclass, property, GameOverState;

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

      _cclegacy._RF.push({}, "66296CGP3hDVZWv93f2L0a1", "GameOverState", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameOverState", GameOverState = (_dec = ccclass('GameOverState'), _dec(_class = (_temp = /*#__PURE__*/function () {
        function GameOverState() {
          _defineProperty(this, "stateMachineName", (_crd && SMName === void 0 ? (_reportPossibleCrUseOfSMName({
            error: Error()
          }), SMName) : SMName).GameStateMachine);

          _defineProperty(this, "stateName", (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GameOverState);

          _defineProperty(this, "canFromStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GamingState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).DeathState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GamingStopState]);

          _defineProperty(this, "canToStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GameSettlementState]);
        }

        var _proto = GameOverState.prototype;

        _proto.Start = function Start(arg) {};

        _proto.End = function End(arg) {};

        return GameOverState;
      }(), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL0dhbWVPdmVyU3RhdGUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIlNNTmFtZSIsIlN0YXRlVHlwZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdhbWVPdmVyU3RhdGUiLCJHYW1lU3RhdGVNYWNoaW5lIiwiR2FtaW5nU3RhdGUiLCJEZWF0aFN0YXRlIiwiR2FtaW5nU3RvcFN0YXRlIiwiR2FtZVNldHRsZW1lbnRTdGF0ZSIsIlN0YXJ0IiwiYXJnIiwiRW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7O0FBR0FDLE1BQUFBLE0saUNBQUFBLE07O0FBRUFDLE1BQUFBLFMsa0NBQUFBLFM7Ozs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQkgsVSxDQUF0QkcsTztBQUFTQyxNQUFBQSxRLEdBQWFKLFUsQ0FBYkksUTs7K0JBR0pDLGEsV0FEWkYsT0FBTyxDQUFDLGVBQUQsQzs7b0RBRXVCO0FBQUE7QUFBQSxnQ0FBT0csZ0I7OzZDQUNkO0FBQUE7QUFBQSxzQ0FBVUQsYTs7b0RBQ0QsQ0FBQztBQUFBO0FBQUEsc0NBQVVFLFdBQVgsRUFBd0I7QUFBQTtBQUFBLHNDQUFVQyxVQUFsQyxFQUE4QztBQUFBO0FBQUEsc0NBQVVDLGVBQXhELEM7O2tEQUNGLENBQUM7QUFBQTtBQUFBLHNDQUFVQyxtQkFBWCxDOzs7OztlQUUzQkMsSyxHQUFBLGVBQU1DLEdBQU4sRUFBdUIsQ0FDdEIsQzs7ZUFDREMsRyxHQUFBLGFBQUlELEdBQUosRUFBcUIsQ0FDcEIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IE15Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vQ29tbW9uL0dhbWUvTXlDb21wb25lbnQnO1xuaW1wb3J0IHsgSVN0YXRlIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9JU3RhdGUnO1xuaW1wb3J0IHsgU01OYW1lIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TTU1hbmdlcic7XG5pbXBvcnQgeyBTdGF0ZU1hY2hpbmUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1N0YXRlTWFjaGluZSc7XG5pbXBvcnQgeyBTdGF0ZVR5cGUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1N0YXRlVHlwZSc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnR2FtZU92ZXJTdGF0ZScpXG5leHBvcnQgY2xhc3MgR2FtZU92ZXJTdGF0ZSBpbXBsZW1lbnRzIElTdGF0ZSB7XG4gICAgc3RhdGVNYWNoaW5lTmFtZTogc3RyaW5nID0gU01OYW1lLkdhbWVTdGF0ZU1hY2hpbmU7XG4gICAgc3RhdGVOYW1lOiBzdHJpbmcgPSBTdGF0ZVR5cGUuR2FtZU92ZXJTdGF0ZTtcbiAgICBjYW5Gcm9tU3RhdGVOYW1lOiBzdHJpbmdbXSA9IFtTdGF0ZVR5cGUuR2FtaW5nU3RhdGUsIFN0YXRlVHlwZS5EZWF0aFN0YXRlLCBTdGF0ZVR5cGUuR2FtaW5nU3RvcFN0YXRlXTtcbiAgICBjYW5Ub1N0YXRlTmFtZTogc3RyaW5nW10gPSBbU3RhdGVUeXBlLkdhbWVTZXR0bGVtZW50U3RhdGVdO1xuXG4gICAgU3RhcnQoYXJnPzogYW55KTogdm9pZCB7XG4gICAgfVxuICAgIEVuZChhcmc/OiBhbnkpOiB2b2lkIHtcbiAgICB9XG5cbn1cbiJdfQ==