System.register(["cce.code-quality.cr", "cc", "../../Common/Game/GameController.js", "../../Common/Game/MyComponent.js", "../../Common/StateMachine/StateMachine.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, GameController, MyComponent, StateMachine, StateType, _dec, _class, _temp, _crd, ccclass, property, StartGameState;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "../../Common/Game/GameController", _context.meta, extras);
  }

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
    }, function (_CommonGameGameControllerJs) {
      GameController = _CommonGameGameControllerJs.GameController;
    }, function (_CommonGameMyComponentJs) {
      MyComponent = _CommonGameMyComponentJs.MyComponent;
    }, function (_CommonStateMachineStateMachineJs) {
      StateMachine = _CommonStateMachineStateMachineJs.StateMachine;
    }, function (_CommonStateMachineStateTypeJs) {
      StateType = _CommonStateMachineStateTypeJs.StateType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "866c6Z2Qg5JAJX9meE6v/3E", "StartGameState", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StartGameState", StartGameState = (_dec = ccclass('StartGameState'), _dec(_class = (_temp = class StartGameState extends (_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "stateName", (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).StartGameState);

          _defineProperty(this, "canToStateName", []);

          _defineProperty(this, "canFromStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GameSceneStartState]);
        }

        onLoad() {
          this.addSelf2StateMap();
        }

        Start(arg) {
          console.log(this.stateName, "Start");
          this.scheduleOnce(() => {
            (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).isGameStop = false;
          }, 3);
        }

        End(arg) {
          console.log(this.stateName, "End");
        }

        addSelf2StateMap() {
          console.log("注册状态成功，name: ", this.stateName);
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).AddState(this.stateName, this.node.getComponent(StartGameState));
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL1N0YXJ0R2FtZVN0YXRlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJHYW1lQ29udHJvbGxlciIsIk15Q29tcG9uZW50IiwiU3RhdGVNYWNoaW5lIiwiU3RhdGVUeXBlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiU3RhcnRHYW1lU3RhdGUiLCJHYW1lU2NlbmVTdGFydFN0YXRlIiwib25Mb2FkIiwiYWRkU2VsZjJTdGF0ZU1hcCIsIlN0YXJ0IiwiYXJnIiwiY29uc29sZSIsImxvZyIsInN0YXRlTmFtZSIsInNjaGVkdWxlT25jZSIsImlzR2FtZVN0b3AiLCJFbmQiLCJBZGRTdGF0ZSIsIm5vZGUiLCJnZXRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOztBQUNBQyxNQUFBQSxjLCtCQUFBQSxjOztBQUNBQyxNQUFBQSxXLDRCQUFBQSxXOztBQUdBQyxNQUFBQSxZLHFDQUFBQSxZOztBQUNBQyxNQUFBQSxTLGtDQUFBQSxTOzs7Ozs7O09BQ0g7QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE8sR0FBd0JOLFU7O2dDQUVqQk8sYyxXQURaRixPQUFPLENBQUMsZ0JBQUQsQyx5QkFBUixNQUNhRSxjQURiO0FBQUE7QUFBQSxzQ0FDa0U7QUFBQTtBQUFBOztBQUFBLDZDQUMxQztBQUFBO0FBQUEsc0NBQVVBLGNBRGdDOztBQUFBLGtEQUVuQyxFQUZtQzs7QUFBQSxvREFHakMsQ0FBQztBQUFBO0FBQUEsc0NBQVVDLG1CQUFYLENBSGlDO0FBQUE7O0FBSTlEQyxRQUFBQSxNQUFNLEdBQUc7QUFDTCxlQUFLQyxnQkFBTDtBQUNIOztBQUNEQyxRQUFBQSxLQUFLLENBQUNDLEdBQUQsRUFBa0I7QUFDbkJDLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtDLFNBQWpCLEVBQTRCLE9BQTVCO0FBQ0EsZUFBS0MsWUFBTCxDQUFrQixNQUFNO0FBQUU7QUFBQTtBQUFBLGtEQUFlQyxVQUFmLEdBQTRCLEtBQTVCO0FBQW9DLFdBQTlELEVBQWdFLENBQWhFO0FBQ0g7O0FBQ0RDLFFBQUFBLEdBQUcsQ0FBQ04sR0FBRCxFQUFrQjtBQUNqQkMsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsU0FBakIsRUFBNEIsS0FBNUI7QUFDSDs7QUFDREwsUUFBQUEsZ0JBQWdCLEdBQVM7QUFDckJHLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkIsS0FBS0MsU0FBbEM7QUFDQTtBQUFBO0FBQUEsNENBQWFJLFFBQWIsQ0FBc0IsS0FBS0osU0FBM0IsRUFBc0MsS0FBS0ssSUFBTCxDQUFVQyxZQUFWLENBQXVCZCxjQUF2QixDQUF0QztBQUNIOztBQWpCNkQsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi4vLi4vQ29tbW9uL0dhbWUvR2FtZUNvbnRyb2xsZXInO1xuaW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9Db21tb24vR2FtZS9NeUNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2FkU3RhdGUgfSBmcm9tICcuLi8uLi9Db21tb24vTG9hZC9Mb2FkU3RhdGUnO1xuaW1wb3J0IHsgSVN0YXRlIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9JU3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVNYWNoaW5lIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZU1hY2hpbmUnO1xuaW1wb3J0IHsgU3RhdGVUeXBlIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZVR5cGUnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcbkBjY2NsYXNzKCdTdGFydEdhbWVTdGF0ZScpXG5leHBvcnQgY2xhc3MgU3RhcnRHYW1lU3RhdGUgZXh0ZW5kcyBNeUNvbXBvbmVudCBpbXBsZW1lbnRzIElTdGF0ZSB7XG4gICAgc3RhdGVOYW1lOiBzdHJpbmcgPSBTdGF0ZVR5cGUuU3RhcnRHYW1lU3RhdGU7XG4gICAgY2FuVG9TdGF0ZU5hbWU6IHN0cmluZ1tdID0gW107XG4gICAgY2FuRnJvbVN0YXRlTmFtZTogc3RyaW5nW10gPSBbU3RhdGVUeXBlLkdhbWVTY2VuZVN0YXJ0U3RhdGVdO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5hZGRTZWxmMlN0YXRlTWFwKCk7XG4gICAgfVxuICAgIFN0YXJ0KGFyZz86IGFueSk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlTmFtZSwgXCJTdGFydFwiKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4geyBHYW1lQ29udHJvbGxlci5pc0dhbWVTdG9wID0gZmFsc2U7IH0sIDMpO1xuICAgIH1cbiAgICBFbmQoYXJnPzogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGVOYW1lLCBcIkVuZFwiKTtcbiAgICB9XG4gICAgYWRkU2VsZjJTdGF0ZU1hcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLms6jlhoznirbmgIHmiJDlip/vvIxuYW1lOiBcIiwgdGhpcy5zdGF0ZU5hbWUpO1xuICAgICAgICBTdGF0ZU1hY2hpbmUuQWRkU3RhdGUodGhpcy5zdGF0ZU5hbWUsIHRoaXMubm9kZS5nZXRDb21wb25lbnQoU3RhcnRHYW1lU3RhdGUpIGFzIFN0YXJ0R2FtZVN0YXRlKVxuICAgIH1cblxufSJdfQ==