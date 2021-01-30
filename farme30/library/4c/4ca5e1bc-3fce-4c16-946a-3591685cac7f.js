System.register(["cce.code-quality.cr", "cc", "../../Common/Popup/PopupManager.js", "../../Common/StateMachine/SMManger.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, PopupManager, SMName, StateType, _dec, _class, _temp, _crd, ccclass, property, ChooseEndlessModeState;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfPopupManager(extras) {
    _reporterNs.report("PopupManager", "../../Common/Popup/PopupManager", _context.meta, extras);
  }

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
    }, function (_CommonPopupPopupManagerJs) {
      PopupManager = _CommonPopupPopupManagerJs.PopupManager;
    }, function (_CommonStateMachineSMMangerJs) {
      SMName = _CommonStateMachineSMMangerJs.SMName;
    }, function (_CommonStateMachineStateTypeJs) {
      StateType = _CommonStateMachineStateTypeJs.StateType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4ca5eG8P85MFpRqNZFoXKx/", "ChooseEndlessModeState", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ChooseEndlessModeState", ChooseEndlessModeState = (_dec = ccclass('ChooseEndlessModeState'), _dec(_class = (_temp = /*#__PURE__*/function () {
        function ChooseEndlessModeState() {
          _defineProperty(this, "stateMachineName", (_crd && SMName === void 0 ? (_reportPossibleCrUseOfSMName({
            error: Error()
          }), SMName) : SMName).GameStateMachine);

          _defineProperty(this, "stateName", (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).ChooseEndlessModeState);

          _defineProperty(this, "canFromStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).MainSceneStartState]);

          _defineProperty(this, "canToStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).MainSceneStartState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).StartGameState]);
        }

        var _proto = ChooseEndlessModeState.prototype;

        _proto.Start = function Start(arg) {
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).ShowPopup("EndlessModePopup");
        };

        _proto.End = function End(arg) {
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).ClosePopup();
        };

        return ChooseEndlessModeState;
      }(), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL0Nob29zZUVuZGxlc3NNb2RlU3RhdGUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIlBvcHVwTWFuYWdlciIsIlNNTmFtZSIsIlN0YXRlVHlwZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkNob29zZUVuZGxlc3NNb2RlU3RhdGUiLCJHYW1lU3RhdGVNYWNoaW5lIiwiTWFpblNjZW5lU3RhcnRTdGF0ZSIsIlN0YXJ0R2FtZVN0YXRlIiwiU3RhcnQiLCJhcmciLCJTaG93UG9wdXAiLCJFbmQiLCJDbG9zZVBvcHVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPU0EsTUFBQUEsVSxPQUFBQSxVOztBQUVBQyxNQUFBQSxZLDhCQUFBQSxZOztBQUVBQyxNQUFBQSxNLGlDQUFBQSxNOztBQUVBQyxNQUFBQSxTLGtDQUFBQSxTOzs7Ozs7O0FBR0RDLE1BQUFBLE8sR0FBc0JKLFUsQ0FBdEJJLE87QUFBU0MsTUFBQUEsUSxHQUFhTCxVLENBQWJLLFE7O3dDQUlKQyxzQixXQURaRixPQUFPLENBQUMsd0JBQUQsQzs7b0RBRXVCO0FBQUE7QUFBQSxnQ0FBT0csZ0I7OzZDQUNkO0FBQUE7QUFBQSxzQ0FBVUQsc0I7O29EQUNELENBQUM7QUFBQTtBQUFBLHNDQUFVRSxtQkFBWCxDOztrREFDRixDQUFDO0FBQUE7QUFBQSxzQ0FBVUEsbUJBQVgsRUFBZ0M7QUFBQTtBQUFBLHNDQUFVQyxjQUExQyxDOzs7OztlQUczQkMsSyxHQUFBLGVBQU1DLEdBQU4sRUFBdUI7QUFDbkI7QUFBQTtBQUFBLDRDQUFhQyxTQUFiLENBQXVCLGtCQUF2QjtBQUNILFM7O2VBQ0RDLEcsR0FBQSxhQUFJRixHQUFKLEVBQXFCO0FBQ2pCO0FBQUE7QUFBQSw0Q0FBYUcsVUFBYjtBQUNILFMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9Db21tb24vR2FtZS9NeUNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb3B1cE1hbmFnZXIgfSBmcm9tICcuLi8uLi9Db21tb24vUG9wdXAvUG9wdXBNYW5hZ2VyJztcbmltcG9ydCB7IElTdGF0ZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvSVN0YXRlJztcbmltcG9ydCB7IFNNTmFtZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU01NYW5nZXInO1xuaW1wb3J0IHsgU3RhdGVNYWNoaW5lIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZU1hY2hpbmUnO1xuaW1wb3J0IHsgU3RhdGVUeXBlIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZVR5cGUnO1xuaW1wb3J0IHsgU3RhcnRHYW1lU3RhdGUgfSBmcm9tICcuL1N0YXJ0R2FtZVN0YXRlJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuXG5AY2NjbGFzcygnQ2hvb3NlRW5kbGVzc01vZGVTdGF0ZScpXG5leHBvcnQgY2xhc3MgQ2hvb3NlRW5kbGVzc01vZGVTdGF0ZSBpbXBsZW1lbnRzIElTdGF0ZSB7XG4gICAgc3RhdGVNYWNoaW5lTmFtZTogc3RyaW5nID0gU01OYW1lLkdhbWVTdGF0ZU1hY2hpbmU7XG4gICAgc3RhdGVOYW1lOiBzdHJpbmcgPSBTdGF0ZVR5cGUuQ2hvb3NlRW5kbGVzc01vZGVTdGF0ZTtcbiAgICBjYW5Gcm9tU3RhdGVOYW1lOiBzdHJpbmdbXSA9IFtTdGF0ZVR5cGUuTWFpblNjZW5lU3RhcnRTdGF0ZV07XG4gICAgY2FuVG9TdGF0ZU5hbWU6IHN0cmluZ1tdID0gW1N0YXRlVHlwZS5NYWluU2NlbmVTdGFydFN0YXRlLCBTdGF0ZVR5cGUuU3RhcnRHYW1lU3RhdGVdO1xuXG5cbiAgICBTdGFydChhcmc/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgUG9wdXBNYW5hZ2VyLlNob3dQb3B1cChcIkVuZGxlc3NNb2RlUG9wdXBcIik7XG4gICAgfVxuICAgIEVuZChhcmc/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgUG9wdXBNYW5hZ2VyLkNsb3NlUG9wdXAoKTtcbiAgICB9XG5cblxufVxuXG4iXX0=