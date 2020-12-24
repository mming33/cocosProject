System.register(["cce.code-quality.cr", "cc", "../../Common/Game/MyComponent.js", "../../Common/StateMachine/StateMachine.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, MyComponent, StateMachine, StateType, _dec, _class, _temp, _crd, ccclass, property, MainSceneStartState;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfMyComponent(extras) {
    _reporterNs.report("MyComponent", "../../Common/Game/MyComponent", _context.meta, extras);
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
    }, function (_CommonStateMachineStateMachineJs) {
      StateMachine = _CommonStateMachineStateMachineJs.StateMachine;
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

      _export("MainSceneStartState", MainSceneStartState = (_dec = ccclass('MainSceneStartState'), _dec(_class = (_temp = class MainSceneStartState extends (_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent) {
        constructor(...args) {
          super(...args);

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

        onLoad() {
          this.addSelf2StateMap();
        }

        Start(arg) {
          console.log("回到Home场景");
        }

        End(arg) {}

        addSelf2StateMap() {
          console.log("注册状态成功，name: ", this.stateName);
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).AddState(this.stateName, this.node.getComponent(MainSceneStartState));
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL01haW5TY2VuZVN0YXJ0U3RhdGUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIk15Q29tcG9uZW50IiwiU3RhdGVNYWNoaW5lIiwiU3RhdGVUeXBlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTWFpblNjZW5lU3RhcnRTdGF0ZSIsIkxvYWRTdGF0ZSIsIkNob29zZUxldmVsU3RhdGUiLCJDaG9vc2VFbmRsZXNzTW9kZVN0YXRlIiwiU2hvcFBvcHVwU3RhdGUiLCJHYW1lU2V0dGxlbWVudFN0YXRlIiwib25Mb2FkIiwiYWRkU2VsZjJTdGF0ZU1hcCIsIlN0YXJ0IiwiYXJnIiwiY29uc29sZSIsImxvZyIsIkVuZCIsInN0YXRlTmFtZSIsIkFkZFN0YXRlIiwibm9kZSIsImdldENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1NBLE1BQUFBLFUsT0FBQUEsVTs7QUFFQUMsTUFBQUEsVyw0QkFBQUEsVzs7QUFFQUMsTUFBQUEsWSxxQ0FBQUEsWTs7QUFDQUMsTUFBQUEsUyxrQ0FBQUEsUzs7Ozs7OztPQUNIO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCTCxVOztxQ0FHakJNLG1CLFdBRFpGLE9BQU8sQ0FBQyxxQkFBRCxDLHlCQUFSLE1BQ2FFLG1CQURiO0FBQUE7QUFBQSxzQ0FDdUU7QUFBQTtBQUFBOztBQUFBLDZDQUMvQztBQUFBO0FBQUEsc0NBQVVBLG1CQURxQzs7QUFBQSxvREFFdEMsQ0FBQztBQUFBO0FBQUEsc0NBQVVDLFNBQVgsRUFBc0I7QUFBQTtBQUFBLHNDQUFVQyxnQkFBaEMsRUFBa0Q7QUFBQTtBQUFBLHNDQUFVQyxzQkFBNUQsRUFBb0Y7QUFBQTtBQUFBLHNDQUFVQyxjQUE5RixFQUE4RztBQUFBO0FBQUEsc0NBQVVDLG1CQUF4SCxDQUZzQzs7QUFBQSxrREFHeEMsQ0FBQztBQUFBO0FBQUEsc0NBQVVILGdCQUFYLEVBQTZCO0FBQUE7QUFBQSxzQ0FBVUMsc0JBQXZDLEVBQStEO0FBQUE7QUFBQSxzQ0FBVUMsY0FBekUsQ0FId0M7QUFBQTs7QUFJbkVFLFFBQUFBLE1BQU0sR0FBRztBQUNMLGVBQUtDLGdCQUFMO0FBQ0g7O0FBQ0RDLFFBQUFBLEtBQUssQ0FBQ0MsR0FBRCxFQUFrQjtBQUNuQkMsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNIOztBQUNEQyxRQUFBQSxHQUFHLENBQUNILEdBQUQsRUFBa0IsQ0FDcEI7O0FBQ0RGLFFBQUFBLGdCQUFnQixHQUFTO0FBQ3JCRyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCLEtBQUtFLFNBQWxDO0FBQ0E7QUFBQTtBQUFBLDRDQUFhQyxRQUFiLENBQXNCLEtBQUtELFNBQTNCLEVBQXNDLEtBQUtFLElBQUwsQ0FBVUMsWUFBVixDQUF1QmhCLG1CQUF2QixDQUF0QztBQUNIOztBQWZrRSxPIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi4vLi4vQ29tbW9uL0dhbWUvR2FtZUNvbnRyb2xsZXInO1xuaW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9Db21tb24vR2FtZS9NeUNvbXBvbmVudCc7XG5pbXBvcnQgeyBJU3RhdGUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL0lTdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZU1hY2hpbmUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1N0YXRlTWFjaGluZSc7XG5pbXBvcnQgeyBTdGF0ZVR5cGUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1N0YXRlVHlwZSc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnTWFpblNjZW5lU3RhcnRTdGF0ZScpXG5leHBvcnQgY2xhc3MgTWFpblNjZW5lU3RhcnRTdGF0ZSBleHRlbmRzIE15Q29tcG9uZW50IGltcGxlbWVudHMgSVN0YXRlIHtcbiAgICBzdGF0ZU5hbWU6IHN0cmluZyA9IFN0YXRlVHlwZS5NYWluU2NlbmVTdGFydFN0YXRlO1xuICAgIGNhbkZyb21TdGF0ZU5hbWU6IHN0cmluZ1tdID0gW1N0YXRlVHlwZS5Mb2FkU3RhdGUsIFN0YXRlVHlwZS5DaG9vc2VMZXZlbFN0YXRlLCBTdGF0ZVR5cGUuQ2hvb3NlRW5kbGVzc01vZGVTdGF0ZSwgU3RhdGVUeXBlLlNob3BQb3B1cFN0YXRlLCBTdGF0ZVR5cGUuR2FtZVNldHRsZW1lbnRTdGF0ZV07XG4gICAgY2FuVG9TdGF0ZU5hbWU6IHN0cmluZ1tdID0gW1N0YXRlVHlwZS5DaG9vc2VMZXZlbFN0YXRlLCBTdGF0ZVR5cGUuQ2hvb3NlRW5kbGVzc01vZGVTdGF0ZSwgU3RhdGVUeXBlLlNob3BQb3B1cFN0YXRlXTtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuYWRkU2VsZjJTdGF0ZU1hcCgpO1xuICAgIH1cbiAgICBTdGFydChhcmc/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLlm57liLBIb21l5Zy65pmvXCIpO1xuICAgIH1cbiAgICBFbmQoYXJnPzogYW55KTogdm9pZCB7XG4gICAgfVxuICAgIGFkZFNlbGYyU3RhdGVNYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5rOo5YaM54q25oCB5oiQ5Yqf77yMbmFtZTogXCIsIHRoaXMuc3RhdGVOYW1lKTtcbiAgICAgICAgU3RhdGVNYWNoaW5lLkFkZFN0YXRlKHRoaXMuc3RhdGVOYW1lLCB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KE1haW5TY2VuZVN0YXJ0U3RhdGUpIGFzIE1haW5TY2VuZVN0YXJ0U3RhdGUpO1xuICAgIH1cblxufVxuIl19