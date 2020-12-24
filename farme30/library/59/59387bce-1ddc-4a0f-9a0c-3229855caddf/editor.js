System.register(["cce.code-quality.cr", "cc", "../../Common/Game/MyComponent.js", "../../Common/Popup/PopupManager.js", "../../Common/StateMachine/StateMachine.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, MyComponent, PopupManager, StateMachine, StateType, _dec, _class, _temp, _crd, ccclass, property, ChooseLevelState;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfMyComponent(extras) {
    _reporterNs.report("MyComponent", "../../Common/Game/MyComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopupManager(extras) {
    _reporterNs.report("PopupManager", "../../Common/Popup/PopupManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../../Common/StateMachine/StateMachine", _context.meta, extras);
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
    }, function (_CommonGameMyComponentJs) {
      MyComponent = _CommonGameMyComponentJs.MyComponent;
    }, function (_CommonPopupPopupManagerJs) {
      PopupManager = _CommonPopupPopupManagerJs.PopupManager;
    }, function (_CommonStateMachineStateMachineJs) {
      StateMachine = _CommonStateMachineStateMachineJs.StateMachine;
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

      _export("ChooseLevelState", ChooseLevelState = (_dec = ccclass('ChooseLevelState'), _dec(_class = (_temp = class ChooseLevelState extends (_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent) {
        constructor(...args) {
          super(...args);

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

        onLoad() {
          this.addSelf2StateMap();
        }

        Start(arg) {
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).I.ShowPopup("LevelPopup");
        }

        End(arg) {
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).I.ClosePopup();
        }

        addSelf2StateMap() {
          console.log("注册状态成功，name: ", this.stateName);
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).AddState(this.stateName, this.node.getComponent(ChooseLevelState));
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL0Nob29zZUxldmVsU3RhdGUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIk15Q29tcG9uZW50IiwiUG9wdXBNYW5hZ2VyIiwiU3RhdGVNYWNoaW5lIiwiU3RhdGVUeXBlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQ2hvb3NlTGV2ZWxTdGF0ZSIsIk1haW5TY2VuZVN0YXJ0U3RhdGUiLCJTdGFydEdhbWVTdGF0ZSIsIm9uTG9hZCIsImFkZFNlbGYyU3RhdGVNYXAiLCJTdGFydCIsImFyZyIsIkkiLCJTaG93UG9wdXAiLCJFbmQiLCJDbG9zZVBvcHVwIiwiY29uc29sZSIsImxvZyIsInN0YXRlTmFtZSIsIkFkZFN0YXRlIiwibm9kZSIsImdldENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9TQSxNQUFBQSxVLE9BQUFBLFU7O0FBRUFDLE1BQUFBLFcsNEJBQUFBLFc7O0FBRUFDLE1BQUFBLFksOEJBQUFBLFk7O0FBRUFDLE1BQUFBLFkscUNBQUFBLFk7O0FBQ0FDLE1BQUFBLFMsa0NBQUFBLFM7Ozs7Ozs7T0FDSDtBQUFFQyxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsTyxHQUF3Qk4sVTs7a0NBR2pCTyxnQixXQURaRixPQUFPLENBQUMsa0JBQUQsQyx5QkFBUixNQUNhRSxnQkFEYjtBQUFBO0FBQUEsc0NBQ29FO0FBQUE7QUFBQTs7QUFBQSw2Q0FDNUM7QUFBQTtBQUFBLHNDQUFVQSxnQkFEa0M7O0FBQUEsb0RBRW5DLENBQUM7QUFBQTtBQUFBLHNDQUFVQyxtQkFBWCxDQUZtQzs7QUFBQSxrREFHckMsQ0FBQztBQUFBO0FBQUEsc0NBQVVBLG1CQUFYLEVBQWdDO0FBQUE7QUFBQSxzQ0FBVUMsY0FBMUMsQ0FIcUM7QUFBQTs7QUFLaEVDLFFBQUFBLE1BQU0sR0FBRztBQUNMLGVBQUtDLGdCQUFMO0FBQ0g7O0FBRUZDLFFBQUFBLEtBQUssQ0FBQ0MsR0FBRCxFQUFrQjtBQUNsQjtBQUFBO0FBQUEsNENBQWFDLENBQWIsQ0FBZUMsU0FBZixDQUF5QixZQUF6QjtBQUNIOztBQUNEQyxRQUFBQSxHQUFHLENBQUNILEdBQUQsRUFBa0I7QUFDakI7QUFBQTtBQUFBLDRDQUFhQyxDQUFiLENBQWVHLFVBQWY7QUFDSDs7QUFDRE4sUUFBQUEsZ0JBQWdCLEdBQVM7QUFDckJPLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkIsS0FBS0MsU0FBbEM7QUFDQTtBQUFBO0FBQUEsNENBQWFDLFFBQWIsQ0FBc0IsS0FBS0QsU0FBM0IsRUFBc0MsS0FBS0UsSUFBTCxDQUFVQyxZQUFWLENBQXVCaEIsZ0JBQXZCLENBQXRDO0FBQ0g7O0FBbEIrRCxPIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgZGlyZWN0b3IgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBHYW1lRGF0YSB9IGZyb20gJy4uLy4uL0NvbW1vbi9HYW1lL0dhbWVEYXRhJztcbmltcG9ydCB7IE15Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vQ29tbW9uL0dhbWUvTXlDb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdEdlbmVyYXRvciB9IGZyb20gJy4uLy4uL0NvbW1vbi9MaXN0L0xpc3RHZW5lcmF0b3InO1xuaW1wb3J0IHsgUG9wdXBNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1BvcHVwL1BvcHVwTWFuYWdlcic7XG5pbXBvcnQgeyBJU3RhdGUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL0lTdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZU1hY2hpbmUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1N0YXRlTWFjaGluZSc7XG5pbXBvcnQgeyBTdGF0ZVR5cGUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1N0YXRlVHlwZSc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnQ2hvb3NlTGV2ZWxTdGF0ZScpXG5leHBvcnQgY2xhc3MgQ2hvb3NlTGV2ZWxTdGF0ZSBleHRlbmRzIE15Q29tcG9uZW50IGltcGxlbWVudHMgSVN0YXRlIHtcbiAgICBzdGF0ZU5hbWU6IHN0cmluZyA9IFN0YXRlVHlwZS5DaG9vc2VMZXZlbFN0YXRlO1xuICAgIGNhbkZyb21TdGF0ZU5hbWU6IHN0cmluZ1tdID0gW1N0YXRlVHlwZS5NYWluU2NlbmVTdGFydFN0YXRlXTtcbiAgICBjYW5Ub1N0YXRlTmFtZTogc3RyaW5nW10gPSBbU3RhdGVUeXBlLk1haW5TY2VuZVN0YXJ0U3RhdGUsIFN0YXRlVHlwZS5TdGFydEdhbWVTdGF0ZV07XG4gICAgXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmFkZFNlbGYyU3RhdGVNYXAoKTtcbiAgICB9XG5cbiAgIFN0YXJ0KGFyZz86IGFueSk6IHZvaWQge1xuICAgICAgICBQb3B1cE1hbmFnZXIuSS5TaG93UG9wdXAoXCJMZXZlbFBvcHVwXCIpO1xuICAgIH1cbiAgICBFbmQoYXJnPzogYW55KTogdm9pZCB7XG4gICAgICAgIFBvcHVwTWFuYWdlci5JLkNsb3NlUG9wdXAoKTtcbiAgICB9XG4gICAgYWRkU2VsZjJTdGF0ZU1hcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLms6jlhoznirbmgIHmiJDlip/vvIxuYW1lOiBcIiwgdGhpcy5zdGF0ZU5hbWUpO1xuICAgICAgICBTdGF0ZU1hY2hpbmUuQWRkU3RhdGUodGhpcy5zdGF0ZU5hbWUsIHRoaXMubm9kZS5nZXRDb21wb25lbnQoQ2hvb3NlTGV2ZWxTdGF0ZSkgYXMgQ2hvb3NlTGV2ZWxTdGF0ZSlcbiAgICB9XG5cbn1cbiJdfQ==