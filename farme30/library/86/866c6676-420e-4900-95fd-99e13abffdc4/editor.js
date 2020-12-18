System.register(["cce.code-quality.cr", "cc", "../../Common/Game/MyComponent.js", "../../Common/StateMachine/StateMachine.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, MyComponent, StateMachine, _dec, _class, _temp, _crd, ccclass, property, StartGameState;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfMyComponent(extras) {
    _reporterNs.report("MyComponent", "../../Common/Game/MyComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../../Common/StateMachine/StateMachine", _context.meta, extras);
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

          _defineProperty(this, "stateName", "StartGameState");

          _defineProperty(this, "canToStateName", ["Test1State"]);

          _defineProperty(this, "canFromStateName", ["LoadState"]);
        }

        onLoad() {
          this.addSelf2StateMap();
        }

        Start(arg) {
          console.log(this.stateName, "Start");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL1N0YXJ0R2FtZVN0YXRlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJNeUNvbXBvbmVudCIsIlN0YXRlTWFjaGluZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlN0YXJ0R2FtZVN0YXRlIiwib25Mb2FkIiwiYWRkU2VsZjJTdGF0ZU1hcCIsIlN0YXJ0IiwiYXJnIiwiY29uc29sZSIsImxvZyIsInN0YXRlTmFtZSIsIkVuZCIsIkFkZFN0YXRlIiwibm9kZSIsImdldENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDU0EsTUFBQUEsVSxPQUFBQSxVOztBQUNBQyxNQUFBQSxXLDRCQUFBQSxXOztBQUdBQyxNQUFBQSxZLHFDQUFBQSxZOzs7Ozs7O09BQ0g7QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE8sR0FBd0JKLFU7O2dDQUdqQkssYyxXQURaRixPQUFPLENBQUMsZ0JBQUQsQyx5QkFBUixNQUNhRSxjQURiO0FBQUE7QUFBQSxzQ0FDa0U7QUFBQTtBQUFBOztBQUFBLDZDQUMxQyxnQkFEMEM7O0FBQUEsa0RBRW5DLENBQUMsWUFBRCxDQUZtQzs7QUFBQSxvREFHakMsQ0FBQyxXQUFELENBSGlDO0FBQUE7O0FBSTlEQyxRQUFBQSxNQUFNLEdBQUc7QUFDTCxlQUFLQyxnQkFBTDtBQUNIOztBQUNEQyxRQUFBQSxLQUFLLENBQUNDLEdBQUQsRUFBa0I7QUFDbkJDLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtDLFNBQWpCLEVBQTRCLE9BQTVCO0FBQ0g7O0FBQ0RDLFFBQUFBLEdBQUcsQ0FBQ0osR0FBRCxFQUFrQjtBQUNqQkMsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsU0FBakIsRUFBNEIsS0FBNUI7QUFDSDs7QUFDREwsUUFBQUEsZ0JBQWdCLEdBQVM7QUFDckJHLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkIsS0FBS0MsU0FBbEM7QUFDQTtBQUFBO0FBQUEsNENBQWFFLFFBQWIsQ0FBc0IsS0FBS0YsU0FBM0IsRUFBc0MsS0FBS0csSUFBTCxDQUFVQyxZQUFWLENBQXVCWCxjQUF2QixDQUF0QztBQUNIOztBQWhCNkQsTyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9Db21tb24vR2FtZS9NeUNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2FkU3RhdGUgfSBmcm9tICcuLi8uLi9Db21tb24vTG9hZC9Mb2FkU3RhdGUnO1xuaW1wb3J0IHsgSVN0YXRlIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9JU3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVNYWNoaW5lIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZU1hY2hpbmUnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1N0YXJ0R2FtZVN0YXRlJylcbmV4cG9ydCBjbGFzcyBTdGFydEdhbWVTdGF0ZSBleHRlbmRzIE15Q29tcG9uZW50IGltcGxlbWVudHMgSVN0YXRlIHtcbiAgICBzdGF0ZU5hbWU6IHN0cmluZyA9IFwiU3RhcnRHYW1lU3RhdGVcIjtcbiAgICBjYW5Ub1N0YXRlTmFtZTogc3RyaW5nW10gPSBbXCJUZXN0MVN0YXRlXCJdO1xuICAgIGNhbkZyb21TdGF0ZU5hbWU6IHN0cmluZ1tdID0gW1wiTG9hZFN0YXRlXCJdO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5hZGRTZWxmMlN0YXRlTWFwKCk7XG4gICAgfVxuICAgIFN0YXJ0KGFyZz86IGFueSk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlTmFtZSwgXCJTdGFydFwiKTtcbiAgICB9XG4gICAgRW5kKGFyZz86IGFueSk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlTmFtZSwgXCJFbmRcIik7XG4gICAgfVxuICAgIGFkZFNlbGYyU3RhdGVNYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5rOo5YaM54q25oCB5oiQ5Yqf77yMbmFtZTogXCIsIHRoaXMuc3RhdGVOYW1lKTtcbiAgICAgICAgU3RhdGVNYWNoaW5lLkFkZFN0YXRlKHRoaXMuc3RhdGVOYW1lLCB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFN0YXJ0R2FtZVN0YXRlKSBhcyBTdGFydEdhbWVTdGF0ZSlcbiAgICB9XG5cbn1cbiJdfQ==