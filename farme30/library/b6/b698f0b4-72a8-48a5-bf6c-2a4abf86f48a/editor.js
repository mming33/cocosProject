System.register(["cce.code-quality.cr", "cc", "../../Common/Game/MyComponent.js", "../../Common/StateMachine/StateMachine.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, MyComponent, StateMachine, StateType, _dec, _class, _temp, _crd, ccclass, property, GameSceneStartState;

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

      _cclegacy._RF.push({}, "b698fC0cqhIpb9sKkq/hvSK", "GameSceneStartState", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameSceneStartState", GameSceneStartState = (_dec = ccclass('GameSceneStartState'), _dec(_class = (_temp = class GameSceneStartState extends (_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent) {
        constructor(...args) {
          super(...args);

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

        onLoad() {
          this.addSelf2StateMap();
        }

        Start(arg) {
          console.log("开始游戏"); // this.scheduleOnce(() => { GameController.isGameStop = false; }, 1);
        }

        End(arg) {}

        addSelf2StateMap() {
          console.log("注册状态成功，name: ", this.stateName);
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).AddState(this.stateName, this.node.getComponent(GameSceneStartState));
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL0dhbWVTY2VuZVN0YXJ0U3RhdGUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIk15Q29tcG9uZW50IiwiU3RhdGVNYWNoaW5lIiwiU3RhdGVUeXBlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiR2FtZVNjZW5lU3RhcnRTdGF0ZSIsIlN0YXJ0R2FtZVN0YXRlIiwiTWFpblNjZW5lU3RhcnRTdGF0ZSIsIm9uTG9hZCIsImFkZFNlbGYyU3RhdGVNYXAiLCJTdGFydCIsImFyZyIsImNvbnNvbGUiLCJsb2ciLCJFbmQiLCJzdGF0ZU5hbWUiLCJBZGRTdGF0ZSIsIm5vZGUiLCJnZXRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9TQSxNQUFBQSxVLE9BQUFBLFU7O0FBRUFDLE1BQUFBLFcsNEJBQUFBLFc7O0FBRUFDLE1BQUFBLFkscUNBQUFBLFk7O0FBQ0FDLE1BQUFBLFMsa0NBQUFBLFM7Ozs7Ozs7T0FDSDtBQUFFQyxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsTyxHQUF3QkwsVTs7cUNBR2pCTSxtQixXQURaRixPQUFPLENBQUMscUJBQUQsQyx5QkFBUixNQUNhRSxtQkFEYjtBQUFBO0FBQUEsc0NBQ3VFO0FBQUE7QUFBQTs7QUFBQSw2Q0FDL0M7QUFBQTtBQUFBLHNDQUFVQSxtQkFEcUM7O0FBQUEsa0RBRXhDLENBQUM7QUFBQTtBQUFBLHNDQUFVQyxjQUFYLENBRndDOztBQUFBLG9EQUd0QyxDQUFDO0FBQUE7QUFBQSxzQ0FBVUMsbUJBQVgsQ0FIc0M7QUFBQTs7QUFJbkVDLFFBQUFBLE1BQU0sR0FBRztBQUNMLGVBQUtDLGdCQUFMO0FBQ0g7O0FBQ0RDLFFBQUFBLEtBQUssQ0FBQ0MsR0FBRCxFQUFrQjtBQUNuQkMsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQURtQixDQUVuQjtBQUNIOztBQUNEQyxRQUFBQSxHQUFHLENBQUNILEdBQUQsRUFBa0IsQ0FDcEI7O0FBQ0RGLFFBQUFBLGdCQUFnQixHQUFTO0FBQ3JCRyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCLEtBQUtFLFNBQWxDO0FBQ0E7QUFBQTtBQUFBLDRDQUFhQyxRQUFiLENBQXNCLEtBQUtELFNBQTNCLEVBQXNDLEtBQUtFLElBQUwsQ0FBVUMsWUFBVixDQUF1QmIsbUJBQXZCLENBQXRDO0FBQ0g7O0FBaEJrRSxPIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi4vLi4vQ29tbW9uL0dhbWUvR2FtZUNvbnRyb2xsZXInO1xuaW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9Db21tb24vR2FtZS9NeUNvbXBvbmVudCc7XG5pbXBvcnQgeyBJU3RhdGUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL0lTdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZU1hY2hpbmUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1N0YXRlTWFjaGluZSc7XG5pbXBvcnQgeyBTdGF0ZVR5cGUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1N0YXRlVHlwZSc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnR2FtZVNjZW5lU3RhcnRTdGF0ZScpXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lU3RhcnRTdGF0ZSBleHRlbmRzIE15Q29tcG9uZW50IGltcGxlbWVudHMgSVN0YXRlIHtcbiAgICBzdGF0ZU5hbWU6IHN0cmluZyA9IFN0YXRlVHlwZS5HYW1lU2NlbmVTdGFydFN0YXRlO1xuICAgIGNhblRvU3RhdGVOYW1lOiBzdHJpbmdbXSA9IFtTdGF0ZVR5cGUuU3RhcnRHYW1lU3RhdGVdO1xuICAgIGNhbkZyb21TdGF0ZU5hbWU6IHN0cmluZ1tdID0gW1N0YXRlVHlwZS5NYWluU2NlbmVTdGFydFN0YXRlXTtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuYWRkU2VsZjJTdGF0ZU1hcCgpO1xuICAgIH1cbiAgICBTdGFydChhcmc/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLlvIDlp4vmuLjmiI9cIik7XG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHsgR2FtZUNvbnRyb2xsZXIuaXNHYW1lU3RvcCA9IGZhbHNlOyB9LCAxKTtcbiAgICB9XG4gICAgRW5kKGFyZz86IGFueSk6IHZvaWQge1xuICAgIH1cbiAgICBhZGRTZWxmMlN0YXRlTWFwKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuazqOWGjOeKtuaAgeaIkOWKn++8jG5hbWU6IFwiLCB0aGlzLnN0YXRlTmFtZSk7XG4gICAgICAgIFN0YXRlTWFjaGluZS5BZGRTdGF0ZSh0aGlzLnN0YXRlTmFtZSwgdGhpcy5ub2RlLmdldENvbXBvbmVudChHYW1lU2NlbmVTdGFydFN0YXRlKSBhcyBHYW1lU2NlbmVTdGFydFN0YXRlKTtcbiAgICB9XG5cbn1cbiJdfQ==