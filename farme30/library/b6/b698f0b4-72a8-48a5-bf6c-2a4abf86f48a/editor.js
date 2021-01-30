System.register(["cce.code-quality.cr", "cc", "../../Common/StateMachine/SMManger.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, SMName, StateType, _dec, _class, _temp, _crd, ccclass, property, GameSceneStartState;

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

      _cclegacy._RF.push({}, "b698fC0cqhIpb9sKkq/hvSK", "GameSceneStartState", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameSceneStartState", GameSceneStartState = (_dec = ccclass('GameSceneStartState'), _dec(_class = (_temp = class GameSceneStartState {
        constructor() {
          _defineProperty(this, "stateMachineName", (_crd && SMName === void 0 ? (_reportPossibleCrUseOfSMName({
            error: Error()
          }), SMName) : SMName).GameStateMachine);

          _defineProperty(this, "stateName", (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GameSceneStartState);

          _defineProperty(this, "canToStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).StartGameState]);

          _defineProperty(this, "canFromStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).MainSceneStartState]);
        }

        Start(arg) {}

        End(arg) {}

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL0dhbWVTY2VuZVN0YXJ0U3RhdGUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIlNNTmFtZSIsIlN0YXRlVHlwZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdhbWVTY2VuZVN0YXJ0U3RhdGUiLCJHYW1lU3RhdGVNYWNoaW5lIiwiU3RhcnRHYW1lU3RhdGUiLCJNYWluU2NlbmVTdGFydFN0YXRlIiwiU3RhcnQiLCJhcmciLCJFbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1NBLE1BQUFBLFUsT0FBQUEsVTs7QUFJQUMsTUFBQUEsTSxpQ0FBQUEsTTs7QUFFQUMsTUFBQUEsUyxrQ0FBQUEsUzs7Ozs7OztPQUNIO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCSixVOztxQ0FHakJLLG1CLFdBRFpGLE9BQU8sQ0FBQyxxQkFBRCxDLHlCQUFSLE1BQ2FFLG1CQURiLENBQ29EO0FBQUE7QUFBQSxvREFDckI7QUFBQTtBQUFBLGdDQUFPQyxnQkFEYzs7QUFBQSw2Q0FFNUI7QUFBQTtBQUFBLHNDQUFVRCxtQkFGa0I7O0FBQUEsa0RBR3JCLENBQUM7QUFBQTtBQUFBLHNDQUFVRSxjQUFYLENBSHFCOztBQUFBLG9EQUluQixDQUFDO0FBQUE7QUFBQSxzQ0FBVUMsbUJBQVgsQ0FKbUI7QUFBQTs7QUFNaERDLFFBQUFBLEtBQUssQ0FBQ0MsR0FBRCxFQUFrQixDQUN0Qjs7QUFDREMsUUFBQUEsR0FBRyxDQUFDRCxHQUFELEVBQWtCLENBQ3BCOztBQVQrQyxPIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi4vLi4vQ29tbW9uL0dhbWUvR2FtZUNvbnRyb2xsZXInO1xuaW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9Db21tb24vR2FtZS9NeUNvbXBvbmVudCc7XG5pbXBvcnQgeyBJU3RhdGUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL0lTdGF0ZSc7XG5pbXBvcnQgeyBTTU5hbWUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1NNTWFuZ2VyJztcbmltcG9ydCB7IFN0YXRlTWFjaGluZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVNYWNoaW5lJztcbmltcG9ydCB7IFN0YXRlVHlwZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVUeXBlJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdHYW1lU2NlbmVTdGFydFN0YXRlJylcbmV4cG9ydCBjbGFzcyBHYW1lU2NlbmVTdGFydFN0YXRlICBpbXBsZW1lbnRzIElTdGF0ZSB7XG4gICAgc3RhdGVNYWNoaW5lTmFtZTogc3RyaW5nID0gU01OYW1lLkdhbWVTdGF0ZU1hY2hpbmU7XG4gICAgc3RhdGVOYW1lOiBzdHJpbmcgPSBTdGF0ZVR5cGUuR2FtZVNjZW5lU3RhcnRTdGF0ZTtcbiAgICBjYW5Ub1N0YXRlTmFtZTogc3RyaW5nW10gPSBbU3RhdGVUeXBlLlN0YXJ0R2FtZVN0YXRlXTtcbiAgICBjYW5Gcm9tU3RhdGVOYW1lOiBzdHJpbmdbXSA9IFtTdGF0ZVR5cGUuTWFpblNjZW5lU3RhcnRTdGF0ZV07XG4gICBcbiAgICBTdGFydChhcmc/OiBhbnkpOiB2b2lkIHtcbiAgICB9XG4gICAgRW5kKGFyZz86IGFueSk6IHZvaWQge1xuICAgIH1cbiAgXG5cbn1cbiJdfQ==