System.register(["cce.code-quality.cr", "cc", "../../Common/Popup/PopupManager.js", "../../Common/StateMachine/SMManger.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, PopupManager, SMName, StateType, _dec, _class, _temp, _crd, ccclass, property, ChooseLevelState;

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

      _cclegacy._RF.push({}, "59387vOHdxKD5oMMimFXK3f", "ChooseLevelState", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ChooseLevelState", ChooseLevelState = (_dec = ccclass('ChooseLevelState'), _dec(_class = (_temp = /*#__PURE__*/function () {
        function ChooseLevelState() {
          _defineProperty(this, "stateMachineName", (_crd && SMName === void 0 ? (_reportPossibleCrUseOfSMName({
            error: Error()
          }), SMName) : SMName).GameStateMachine);

          _defineProperty(this, "stateName", (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).ChooseLevelState);

          _defineProperty(this, "canFromStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).MainSceneStartState]);

          _defineProperty(this, "canToStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).MainSceneStartState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).StartGameState]);
        }

        var _proto = ChooseLevelState.prototype;

        _proto.Start = function Start(arg) {
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).ShowPopup("LevelPopup");
        };

        _proto.End = function End(arg) {
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).ClosePopup();
        };

        return ChooseLevelState;
      }(), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL0Nob29zZUxldmVsU3RhdGUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIlBvcHVwTWFuYWdlciIsIlNNTmFtZSIsIlN0YXRlVHlwZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkNob29zZUxldmVsU3RhdGUiLCJHYW1lU3RhdGVNYWNoaW5lIiwiTWFpblNjZW5lU3RhcnRTdGF0ZSIsIlN0YXJ0R2FtZVN0YXRlIiwiU3RhcnQiLCJhcmciLCJTaG93UG9wdXAiLCJFbmQiLCJDbG9zZVBvcHVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPU0EsTUFBQUEsVSxPQUFBQSxVOztBQUlBQyxNQUFBQSxZLDhCQUFBQSxZOztBQUVBQyxNQUFBQSxNLGlDQUFBQSxNOztBQUVBQyxNQUFBQSxTLGtDQUFBQSxTOzs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JKLFUsQ0FBdEJJLE87QUFBU0MsTUFBQUEsUSxHQUFhTCxVLENBQWJLLFE7O2tDQUdKQyxnQixXQURaRixPQUFPLENBQUMsa0JBQUQsQzs7b0RBRXVCO0FBQUE7QUFBQSxnQ0FBT0csZ0I7OzZDQUNkO0FBQUE7QUFBQSxzQ0FBVUQsZ0I7O29EQUNELENBQUM7QUFBQTtBQUFBLHNDQUFVRSxtQkFBWCxDOztrREFDRixDQUFDO0FBQUE7QUFBQSxzQ0FBVUEsbUJBQVgsRUFBZ0M7QUFBQTtBQUFBLHNDQUFVQyxjQUExQyxDOzs7OztlQUUzQkMsSyxHQUFBLGVBQU1DLEdBQU4sRUFBdUI7QUFDbkI7QUFBQTtBQUFBLDRDQUFhQyxTQUFiLENBQXVCLFlBQXZCO0FBQ0gsUzs7ZUFDREMsRyxHQUFBLGFBQUlGLEdBQUosRUFBcUI7QUFDakI7QUFBQTtBQUFBLDRDQUFhRyxVQUFiO0FBQ0gsUyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIGRpcmVjdG9yIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgR2FtZURhdGEgfSBmcm9tICcuLi8uLi9Db21tb24vR2FtZS9HYW1lRGF0YSc7XG5pbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL0NvbW1vbi9HYW1lL015Q29tcG9uZW50JztcbmltcG9ydCB7IExpc3RHZW5lcmF0b3IgfSBmcm9tICcuLi8uLi9Db21tb24vTGlzdC9MaXN0R2VuZXJhdG9yJztcbmltcG9ydCB7IFBvcHVwTWFuYWdlciB9IGZyb20gJy4uLy4uL0NvbW1vbi9Qb3B1cC9Qb3B1cE1hbmFnZXInO1xuaW1wb3J0IHsgSVN0YXRlIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9JU3RhdGUnO1xuaW1wb3J0IHsgU01OYW1lIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TTU1hbmdlcic7XG5pbXBvcnQgeyBTdGF0ZU1hY2hpbmUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1N0YXRlTWFjaGluZSc7XG5pbXBvcnQgeyBTdGF0ZVR5cGUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1N0YXRlVHlwZSc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnQ2hvb3NlTGV2ZWxTdGF0ZScpXG5leHBvcnQgY2xhc3MgQ2hvb3NlTGV2ZWxTdGF0ZSBpbXBsZW1lbnRzIElTdGF0ZSB7XG4gICAgc3RhdGVNYWNoaW5lTmFtZTogc3RyaW5nID0gU01OYW1lLkdhbWVTdGF0ZU1hY2hpbmU7XG4gICAgc3RhdGVOYW1lOiBzdHJpbmcgPSBTdGF0ZVR5cGUuQ2hvb3NlTGV2ZWxTdGF0ZTtcbiAgICBjYW5Gcm9tU3RhdGVOYW1lOiBzdHJpbmdbXSA9IFtTdGF0ZVR5cGUuTWFpblNjZW5lU3RhcnRTdGF0ZV07XG4gICAgY2FuVG9TdGF0ZU5hbWU6IHN0cmluZ1tdID0gW1N0YXRlVHlwZS5NYWluU2NlbmVTdGFydFN0YXRlLCBTdGF0ZVR5cGUuU3RhcnRHYW1lU3RhdGVdO1xuXG4gICAgU3RhcnQoYXJnPzogYW55KTogdm9pZCB7XG4gICAgICAgIFBvcHVwTWFuYWdlci5TaG93UG9wdXAoXCJMZXZlbFBvcHVwXCIpO1xuICAgIH1cbiAgICBFbmQoYXJnPzogYW55KTogdm9pZCB7XG4gICAgICAgIFBvcHVwTWFuYWdlci5DbG9zZVBvcHVwKCk7XG4gICAgfVxuXG59XG4iXX0=