System.register(["cce.code-quality.cr", "cc", "../../Common/Game/MyComponent.js", "../../Common/StateMachine/StateMachine.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, MyComponent, StateMachine, StateType, _dec, _class, _temp, _crd, ccclass, property, DeathState;

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

      _cclegacy._RF.push({}, "50f11uIlgZG2LdasrTUjWs3", "DeathState", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DeathState", DeathState = (_dec = ccclass('DeathState'), _dec(_class = (_temp = class DeathState extends (_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "stateName", (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).DeathState);

          _defineProperty(this, "canFromStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GamingState]);

          _defineProperty(this, "canToStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GameOverState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GamingState]);
        }

        onLoad() {
          this.addSelf2StateMap();
        }

        Start(arg) {
          throw new Error('Method not implemented.');
        }

        End(arg) {
          throw new Error('Method not implemented.');
        }

        addSelf2StateMap() {
          console.log("注册状态成功，name: ", this.stateName);
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).AddState(this.stateName, this.node.getComponent(DeathState));
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL0RlYXRoU3RhdGUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIk15Q29tcG9uZW50IiwiU3RhdGVNYWNoaW5lIiwiU3RhdGVUeXBlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiRGVhdGhTdGF0ZSIsIkdhbWluZ1N0YXRlIiwiR2FtZU92ZXJTdGF0ZSIsIm9uTG9hZCIsImFkZFNlbGYyU3RhdGVNYXAiLCJTdGFydCIsImFyZyIsIkVycm9yIiwiRW5kIiwiY29uc29sZSIsImxvZyIsInN0YXRlTmFtZSIsIkFkZFN0YXRlIiwibm9kZSIsImdldENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7QUFDQUMsTUFBQUEsVyw0QkFBQUEsVzs7QUFFQUMsTUFBQUEsWSxxQ0FBQUEsWTs7QUFDQUMsTUFBQUEsUyxrQ0FBQUEsUzs7Ozs7OztPQUNIO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCTCxVOzs0QkFHakJNLFUsV0FEWkYsT0FBTyxDQUFDLFlBQUQsQyx5QkFBUixNQUNhRSxVQURiO0FBQUE7QUFBQSxzQ0FDOEQ7QUFBQTtBQUFBOztBQUFBLDZDQUN0QztBQUFBO0FBQUEsc0NBQVVBLFVBRDRCOztBQUFBLG9EQUU3QixDQUFDO0FBQUE7QUFBQSxzQ0FBVUMsV0FBWCxDQUY2Qjs7QUFBQSxrREFHL0IsQ0FBQztBQUFBO0FBQUEsc0NBQVVDLGFBQVgsRUFBMEI7QUFBQTtBQUFBLHNDQUFVRCxXQUFwQyxDQUgrQjtBQUFBOztBQUsxREUsUUFBQUEsTUFBTSxHQUFHO0FBQ0wsZUFBS0MsZ0JBQUw7QUFDSDs7QUFFRkMsUUFBQUEsS0FBSyxDQUFDQyxHQUFELEVBQWtCO0FBQ2xCLGdCQUFNLElBQUlDLEtBQUosQ0FBVSx5QkFBVixDQUFOO0FBQ0g7O0FBQ0RDLFFBQUFBLEdBQUcsQ0FBQ0YsR0FBRCxFQUFrQjtBQUNqQixnQkFBTSxJQUFJQyxLQUFKLENBQVUseUJBQVYsQ0FBTjtBQUNIOztBQUNESCxRQUFBQSxnQkFBZ0IsR0FBUztBQUNyQkssVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QixLQUFLQyxTQUFsQztBQUNBO0FBQUE7QUFBQSw0Q0FBYUMsUUFBYixDQUFzQixLQUFLRCxTQUEzQixFQUFzQyxLQUFLRSxJQUFMLENBQVVDLFlBQVYsQ0FBdUJkLFVBQXZCLENBQXRDO0FBQ0g7O0FBbEJ5RCxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9Db21tb24vR2FtZS9NeUNvbXBvbmVudCc7XG5pbXBvcnQgeyBJU3RhdGUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL0lTdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZU1hY2hpbmUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1N0YXRlTWFjaGluZSc7XG5pbXBvcnQgeyBTdGF0ZVR5cGUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1N0YXRlVHlwZSc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnRGVhdGhTdGF0ZScpXG5leHBvcnQgY2xhc3MgRGVhdGhTdGF0ZSBleHRlbmRzIE15Q29tcG9uZW50IGltcGxlbWVudHMgSVN0YXRlIHtcbiAgICBzdGF0ZU5hbWU6IHN0cmluZyA9IFN0YXRlVHlwZS5EZWF0aFN0YXRlO1xuICAgIGNhbkZyb21TdGF0ZU5hbWU6IHN0cmluZ1tdID0gW1N0YXRlVHlwZS5HYW1pbmdTdGF0ZV07XG4gICAgY2FuVG9TdGF0ZU5hbWU6IHN0cmluZ1tdID0gW1N0YXRlVHlwZS5HYW1lT3ZlclN0YXRlLCBTdGF0ZVR5cGUuR2FtaW5nU3RhdGVdO1xuICAgIFxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5hZGRTZWxmMlN0YXRlTWFwKCk7XG4gICAgfVxuXG4gICBTdGFydChhcmc/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgICBFbmQoYXJnPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gICAgYWRkU2VsZjJTdGF0ZU1hcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLms6jlhoznirbmgIHmiJDlip/vvIxuYW1lOiBcIiwgdGhpcy5zdGF0ZU5hbWUpO1xuICAgICAgICBTdGF0ZU1hY2hpbmUuQWRkU3RhdGUodGhpcy5zdGF0ZU5hbWUsIHRoaXMubm9kZS5nZXRDb21wb25lbnQoRGVhdGhTdGF0ZSkgYXMgRGVhdGhTdGF0ZSlcbiAgICB9XG5cbn1cbiJdfQ==