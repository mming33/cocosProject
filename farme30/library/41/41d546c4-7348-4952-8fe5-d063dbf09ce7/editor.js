System.register(["cce.code-quality.cr", "cc", "../../Common/StateMachine/SMManger.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, SMName, StateType, _dec, _class, _temp, _crd, ccclass, property, MainSceneStartState;

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

      _cclegacy._RF.push({}, "41d54bEc0hJUo/l0GPb8Jzn", "MainSceneStartState", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MainSceneStartState", MainSceneStartState = (_dec = ccclass('MainSceneStartState'), _dec(_class = (_temp = class MainSceneStartState {
        constructor() {
          _defineProperty(this, "stateMachineName", (_crd && SMName === void 0 ? (_reportPossibleCrUseOfSMName({
            error: Error()
          }), SMName) : SMName).GameStateMachine);

          _defineProperty(this, "stateName", (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).MainSceneStartState);

          _defineProperty(this, "canFromStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).LoadState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).ChooseLevelState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).ChooseEndlessModeState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).ShopPopupState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GameSettlementState]);

          _defineProperty(this, "canToStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).ChooseLevelState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).ChooseEndlessModeState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).ShopPopupState]);
        }

        Start(arg) {
          console.log("回到Home场景");
        }

        End(arg) {}

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL01haW5TY2VuZVN0YXJ0U3RhdGUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIlNNTmFtZSIsIlN0YXRlVHlwZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIk1haW5TY2VuZVN0YXJ0U3RhdGUiLCJHYW1lU3RhdGVNYWNoaW5lIiwiTG9hZFN0YXRlIiwiQ2hvb3NlTGV2ZWxTdGF0ZSIsIkNob29zZUVuZGxlc3NNb2RlU3RhdGUiLCJTaG9wUG9wdXBTdGF0ZSIsIkdhbWVTZXR0bGVtZW50U3RhdGUiLCJTdGFydCIsImFyZyIsImNvbnNvbGUiLCJsb2ciLCJFbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1NBLE1BQUFBLFUsT0FBQUEsVTs7QUFJQUMsTUFBQUEsTSxpQ0FBQUEsTTs7QUFFQUMsTUFBQUEsUyxrQ0FBQUEsUzs7Ozs7OztPQUNIO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCSixVOztxQ0FHakJLLG1CLFdBRFpGLE9BQU8sQ0FBQyxxQkFBRCxDLHlCQUFSLE1BQ2FFLG1CQURiLENBQ29EO0FBQUE7QUFBQSxvREFDckI7QUFBQTtBQUFBLGdDQUFPQyxnQkFEYzs7QUFBQSw2Q0FFNUI7QUFBQTtBQUFBLHNDQUFVRCxtQkFGa0I7O0FBQUEsb0RBR25CLENBQUM7QUFBQTtBQUFBLHNDQUFVRSxTQUFYLEVBQXNCO0FBQUE7QUFBQSxzQ0FBVUMsZ0JBQWhDLEVBQWtEO0FBQUE7QUFBQSxzQ0FBVUMsc0JBQTVELEVBQW9GO0FBQUE7QUFBQSxzQ0FBVUMsY0FBOUYsRUFBOEc7QUFBQTtBQUFBLHNDQUFVQyxtQkFBeEgsQ0FIbUI7O0FBQUEsa0RBSXJCLENBQUM7QUFBQTtBQUFBLHNDQUFVSCxnQkFBWCxFQUE2QjtBQUFBO0FBQUEsc0NBQVVDLHNCQUF2QyxFQUErRDtBQUFBO0FBQUEsc0NBQVVDLGNBQXpFLENBSnFCO0FBQUE7O0FBS2hERSxRQUFBQSxLQUFLLENBQUNDLEdBQUQsRUFBa0I7QUFDbkJDLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDSDs7QUFDREMsUUFBQUEsR0FBRyxDQUFDSCxHQUFELEVBQWtCLENBQ3BCOztBQVQrQyxPIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi4vLi4vQ29tbW9uL0dhbWUvR2FtZUNvbnRyb2xsZXInO1xuaW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9Db21tb24vR2FtZS9NeUNvbXBvbmVudCc7XG5pbXBvcnQgeyBJU3RhdGUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL0lTdGF0ZSc7XG5pbXBvcnQgeyBTTU5hbWUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1NNTWFuZ2VyJztcbmltcG9ydCB7IFN0YXRlTWFjaGluZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVNYWNoaW5lJztcbmltcG9ydCB7IFN0YXRlVHlwZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVUeXBlJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdNYWluU2NlbmVTdGFydFN0YXRlJylcbmV4cG9ydCBjbGFzcyBNYWluU2NlbmVTdGFydFN0YXRlICBpbXBsZW1lbnRzIElTdGF0ZSB7XG4gICAgc3RhdGVNYWNoaW5lTmFtZTogc3RyaW5nID0gU01OYW1lLkdhbWVTdGF0ZU1hY2hpbmU7XG4gICAgc3RhdGVOYW1lOiBzdHJpbmcgPSBTdGF0ZVR5cGUuTWFpblNjZW5lU3RhcnRTdGF0ZTtcbiAgICBjYW5Gcm9tU3RhdGVOYW1lOiBzdHJpbmdbXSA9IFtTdGF0ZVR5cGUuTG9hZFN0YXRlLCBTdGF0ZVR5cGUuQ2hvb3NlTGV2ZWxTdGF0ZSwgU3RhdGVUeXBlLkNob29zZUVuZGxlc3NNb2RlU3RhdGUsIFN0YXRlVHlwZS5TaG9wUG9wdXBTdGF0ZSwgU3RhdGVUeXBlLkdhbWVTZXR0bGVtZW50U3RhdGVdO1xuICAgIGNhblRvU3RhdGVOYW1lOiBzdHJpbmdbXSA9IFtTdGF0ZVR5cGUuQ2hvb3NlTGV2ZWxTdGF0ZSwgU3RhdGVUeXBlLkNob29zZUVuZGxlc3NNb2RlU3RhdGUsIFN0YXRlVHlwZS5TaG9wUG9wdXBTdGF0ZV07XG4gICAgU3RhcnQoYXJnPzogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5Zue5YiwSG9tZeWcuuaZr1wiKTtcbiAgICB9XG4gICAgRW5kKGFyZz86IGFueSk6IHZvaWQge1xuICAgIH1cblxufVxuIl19