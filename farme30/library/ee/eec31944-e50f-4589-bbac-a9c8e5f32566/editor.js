System.register(["cce.code-quality.cr", "cc", "../../Common/Game/MyComponent.js", "../../Common/StateMachine/StateMachine.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, MyComponent, StateMachine, _dec, _class, _temp, _crd, ccclass, property, Test1;

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

      _cclegacy._RF.push({}, "eec31lE5Q9Fibusqcjl8yVm", "Test1", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Test1", Test1 = (_dec = ccclass('Test1'), _dec(_class = (_temp = class Test1 extends (_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "stateName", "Test1State");

          _defineProperty(this, "canToStateName", ["Test2State"]);

          _defineProperty(this, "canFromStateName", ["Test2State", "StartGameState"]);
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
          }), StateMachine) : StateMachine).AddState(this.stateName, this.node.getComponent(Test1));
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL1Rlc3QxLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJNeUNvbXBvbmVudCIsIlN0YXRlTWFjaGluZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlRlc3QxIiwib25Mb2FkIiwiYWRkU2VsZjJTdGF0ZU1hcCIsIlN0YXJ0IiwiYXJnIiwiY29uc29sZSIsImxvZyIsInN0YXRlTmFtZSIsIkVuZCIsIkFkZFN0YXRlIiwibm9kZSIsImdldENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPU0EsTUFBQUEsVSxPQUFBQSxVOztBQUNBQyxNQUFBQSxXLDRCQUFBQSxXOztBQUdBQyxNQUFBQSxZLHFDQUFBQSxZOzs7Ozs7O09BQ0g7QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE8sR0FBd0JKLFU7O3VCQUdqQkssSyxXQURaRixPQUFPLENBQUMsT0FBRCxDLHlCQUFSLE1BQ2FFLEtBRGI7QUFBQTtBQUFBLHNDQUMwRDtBQUFBO0FBQUE7O0FBQUEsNkNBQ2xDLFlBRGtDOztBQUFBLGtEQUU1QixDQUFDLFlBQUQsQ0FGNEI7O0FBQUEsb0RBRzNCLENBQUMsWUFBRCxFQUFjLGdCQUFkLENBSDJCO0FBQUE7O0FBSXREQyxRQUFBQSxNQUFNLEdBQUc7QUFDTCxlQUFLQyxnQkFBTDtBQUNIOztBQUNEQyxRQUFBQSxLQUFLLENBQUNDLEdBQUQsRUFBa0I7QUFDcEJDLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtDLFNBQWpCLEVBQTJCLE9BQTNCO0FBQ0Y7O0FBQ0RDLFFBQUFBLEdBQUcsQ0FBQ0osR0FBRCxFQUFrQjtBQUNsQkMsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsU0FBakIsRUFBMkIsS0FBM0I7QUFDRjs7QUFDREwsUUFBQUEsZ0JBQWdCLEdBQVM7QUFDdEJHLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkIsS0FBS0MsU0FBbEM7QUFDQTtBQUFBO0FBQUEsNENBQWFFLFFBQWIsQ0FBc0IsS0FBS0YsU0FBM0IsRUFBc0MsS0FBS0csSUFBTCxDQUFVQyxZQUFWLENBQXVCWCxLQUF2QixDQUF0QztBQUNGOztBQWhCcUQsTyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL0NvbW1vbi9HYW1lL015Q29tcG9uZW50JztcbmltcG9ydCB7IExvYWRTdGF0ZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9Mb2FkL0xvYWRTdGF0ZSc7XG5pbXBvcnQgeyBJU3RhdGUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL0lTdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZU1hY2hpbmUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1N0YXRlTWFjaGluZSc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnVGVzdDEnKVxuZXhwb3J0IGNsYXNzIFRlc3QxIGV4dGVuZHMgTXlDb21wb25lbnQgIGltcGxlbWVudHMgSVN0YXRlIHtcbiAgICBzdGF0ZU5hbWU6IHN0cmluZyA9IFwiVGVzdDFTdGF0ZVwiO1xuICAgIGNhblRvU3RhdGVOYW1lOiBzdHJpbmdbXT0gW1wiVGVzdDJTdGF0ZVwiXTtcbiAgICBjYW5Gcm9tU3RhdGVOYW1lOiBzdHJpbmdbXT1bXCJUZXN0MlN0YXRlXCIsXCJTdGFydEdhbWVTdGF0ZVwiXTtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuYWRkU2VsZjJTdGF0ZU1hcCgpO1xuICAgIH1cbiAgICBTdGFydChhcmc/OiBhbnkpOiB2b2lkIHtcbiAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlTmFtZSxcIlN0YXJ0XCIpO1xuICAgIH1cbiAgICBFbmQoYXJnPzogYW55KTogdm9pZCB7XG4gICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZU5hbWUsXCJFbmRcIik7XG4gICAgfVxuICAgIGFkZFNlbGYyU3RhdGVNYXAoKTogdm9pZCB7XG4gICAgICAgY29uc29sZS5sb2coXCLms6jlhoznirbmgIHmiJDlip/vvIxuYW1lOiBcIiwgdGhpcy5zdGF0ZU5hbWUpO1xuICAgICAgIFN0YXRlTWFjaGluZS5BZGRTdGF0ZSh0aGlzLnN0YXRlTmFtZSwgdGhpcy5ub2RlLmdldENvbXBvbmVudChUZXN0MSkgYXMgVGVzdDEpXG4gICAgfVxufVxuIl19