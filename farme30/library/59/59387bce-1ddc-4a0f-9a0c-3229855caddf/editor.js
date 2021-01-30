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

      ({
        ccclass,
        property
      } = _decorator);

      _export("ChooseLevelState", ChooseLevelState = (_dec = ccclass('ChooseLevelState'), _dec(_class = (_temp = class ChooseLevelState {
        constructor() {
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

        Start(arg) {
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).ShowPopup("LevelPopup");
        }

        End(arg) {
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).ClosePopup();
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL0Nob29zZUxldmVsU3RhdGUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIlBvcHVwTWFuYWdlciIsIlNNTmFtZSIsIlN0YXRlVHlwZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkNob29zZUxldmVsU3RhdGUiLCJHYW1lU3RhdGVNYWNoaW5lIiwiTWFpblNjZW5lU3RhcnRTdGF0ZSIsIlN0YXJ0R2FtZVN0YXRlIiwiU3RhcnQiLCJhcmciLCJTaG93UG9wdXAiLCJFbmQiLCJDbG9zZVBvcHVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPU0EsTUFBQUEsVSxPQUFBQSxVOztBQUlBQyxNQUFBQSxZLDhCQUFBQSxZOztBQUVBQyxNQUFBQSxNLGlDQUFBQSxNOztBQUVBQyxNQUFBQSxTLGtDQUFBQSxTOzs7Ozs7O09BQ0g7QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE8sR0FBd0JMLFU7O2tDQUdqQk0sZ0IsV0FEWkYsT0FBTyxDQUFDLGtCQUFELEMseUJBQVIsTUFDYUUsZ0JBRGIsQ0FDZ0Q7QUFBQTtBQUFBLG9EQUNqQjtBQUFBO0FBQUEsZ0NBQU9DLGdCQURVOztBQUFBLDZDQUV4QjtBQUFBO0FBQUEsc0NBQVVELGdCQUZjOztBQUFBLG9EQUdmLENBQUM7QUFBQTtBQUFBLHNDQUFVRSxtQkFBWCxDQUhlOztBQUFBLGtEQUlqQixDQUFDO0FBQUE7QUFBQSxzQ0FBVUEsbUJBQVgsRUFBZ0M7QUFBQTtBQUFBLHNDQUFVQyxjQUExQyxDQUppQjtBQUFBOztBQU01Q0MsUUFBQUEsS0FBSyxDQUFDQyxHQUFELEVBQWtCO0FBQ25CO0FBQUE7QUFBQSw0Q0FBYUMsU0FBYixDQUF1QixZQUF2QjtBQUNIOztBQUNEQyxRQUFBQSxHQUFHLENBQUNGLEdBQUQsRUFBa0I7QUFDakI7QUFBQTtBQUFBLDRDQUFhRyxVQUFiO0FBQ0g7O0FBWDJDLE8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBkaXJlY3RvciB9IGZyb20gJ2NjJztcbmltcG9ydCB7IEdhbWVEYXRhIH0gZnJvbSAnLi4vLi4vQ29tbW9uL0dhbWUvR2FtZURhdGEnO1xuaW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9Db21tb24vR2FtZS9NeUNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0R2VuZXJhdG9yIH0gZnJvbSAnLi4vLi4vQ29tbW9uL0xpc3QvTGlzdEdlbmVyYXRvcic7XG5pbXBvcnQgeyBQb3B1cE1hbmFnZXIgfSBmcm9tICcuLi8uLi9Db21tb24vUG9wdXAvUG9wdXBNYW5hZ2VyJztcbmltcG9ydCB7IElTdGF0ZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvSVN0YXRlJztcbmltcG9ydCB7IFNNTmFtZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU01NYW5nZXInO1xuaW1wb3J0IHsgU3RhdGVNYWNoaW5lIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZU1hY2hpbmUnO1xuaW1wb3J0IHsgU3RhdGVUeXBlIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZVR5cGUnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0Nob29zZUxldmVsU3RhdGUnKVxuZXhwb3J0IGNsYXNzIENob29zZUxldmVsU3RhdGUgaW1wbGVtZW50cyBJU3RhdGUge1xuICAgIHN0YXRlTWFjaGluZU5hbWU6IHN0cmluZyA9IFNNTmFtZS5HYW1lU3RhdGVNYWNoaW5lO1xuICAgIHN0YXRlTmFtZTogc3RyaW5nID0gU3RhdGVUeXBlLkNob29zZUxldmVsU3RhdGU7XG4gICAgY2FuRnJvbVN0YXRlTmFtZTogc3RyaW5nW10gPSBbU3RhdGVUeXBlLk1haW5TY2VuZVN0YXJ0U3RhdGVdO1xuICAgIGNhblRvU3RhdGVOYW1lOiBzdHJpbmdbXSA9IFtTdGF0ZVR5cGUuTWFpblNjZW5lU3RhcnRTdGF0ZSwgU3RhdGVUeXBlLlN0YXJ0R2FtZVN0YXRlXTtcblxuICAgIFN0YXJ0KGFyZz86IGFueSk6IHZvaWQge1xuICAgICAgICBQb3B1cE1hbmFnZXIuU2hvd1BvcHVwKFwiTGV2ZWxQb3B1cFwiKTtcbiAgICB9XG4gICAgRW5kKGFyZz86IGFueSk6IHZvaWQge1xuICAgICAgICBQb3B1cE1hbmFnZXIuQ2xvc2VQb3B1cCgpO1xuICAgIH1cblxufVxuIl19