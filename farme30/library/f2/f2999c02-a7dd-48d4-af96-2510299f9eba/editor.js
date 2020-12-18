System.register(["cce.code-quality.cr", "cc", "../../Common/Game/MyComponent.js", "../../Common/StateMachine/StateMachine.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, MyComponent, StateMachine, _dec, _class, _temp, _crd, ccclass, property, Test2;

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

      _cclegacy._RF.push({}, "f2999wCp91I1K+WJRApn566", "Test2", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Test2", Test2 = (_dec = ccclass('Test2'), _dec(_class = (_temp = class Test2 extends (_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "stateName", "Test2State");

          _defineProperty(this, "canToStateName", ["Test1State"]);

          _defineProperty(this, "canFromStateName", ["Test1State"]);
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
          }), StateMachine) : StateMachine).AddState(this.stateName, this.node.getComponent(Test2));
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL1Rlc3QyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJNeUNvbXBvbmVudCIsIlN0YXRlTWFjaGluZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlRlc3QyIiwib25Mb2FkIiwiYWRkU2VsZjJTdGF0ZU1hcCIsIlN0YXJ0IiwiYXJnIiwiY29uc29sZSIsImxvZyIsInN0YXRlTmFtZSIsIkVuZCIsIkFkZFN0YXRlIiwibm9kZSIsImdldENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPU0EsTUFBQUEsVSxPQUFBQSxVOztBQUNBQyxNQUFBQSxXLDRCQUFBQSxXOztBQUdBQyxNQUFBQSxZLHFDQUFBQSxZOzs7Ozs7O09BQ0g7QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE8sR0FBd0JKLFU7O3VCQUdqQkssSyxXQURaRixPQUFPLENBQUMsT0FBRCxDLHlCQUFSLE1BQ2FFLEtBRGI7QUFBQTtBQUFBLHNDQUN5RDtBQUFBO0FBQUE7O0FBQUEsNkNBQ2pDLFlBRGlDOztBQUFBLGtEQUUxQixDQUFDLFlBQUQsQ0FGMEI7O0FBQUEsb0RBR3hCLENBQUMsWUFBRCxDQUh3QjtBQUFBOztBQUlyREMsUUFBQUEsTUFBTSxHQUFHO0FBQ0wsZUFBS0MsZ0JBQUw7QUFDSDs7QUFDREMsUUFBQUEsS0FBSyxDQUFDQyxHQUFELEVBQWtCO0FBQ25CQyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxTQUFqQixFQUE0QixPQUE1QjtBQUNIOztBQUNEQyxRQUFBQSxHQUFHLENBQUNKLEdBQUQsRUFBa0I7QUFDakJDLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtDLFNBQWpCLEVBQTRCLEtBQTVCO0FBQ0g7O0FBQ0RMLFFBQUFBLGdCQUFnQixHQUFTO0FBQ3JCRyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCLEtBQUtDLFNBQWxDO0FBQ0E7QUFBQTtBQUFBLDRDQUFhRSxRQUFiLENBQXNCLEtBQUtGLFNBQTNCLEVBQXNDLEtBQUtHLElBQUwsQ0FBVUMsWUFBVixDQUF1QlgsS0FBdkIsQ0FBdEM7QUFDSDs7QUFoQm9ELE8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9Db21tb24vR2FtZS9NeUNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2FkU3RhdGUgfSBmcm9tICcuLi8uLi9Db21tb24vTG9hZC9Mb2FkU3RhdGUnO1xuaW1wb3J0IHsgSVN0YXRlIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9JU3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVNYWNoaW5lIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZU1hY2hpbmUnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1Rlc3QyJylcbmV4cG9ydCBjbGFzcyBUZXN0MiBleHRlbmRzIE15Q29tcG9uZW50IGltcGxlbWVudHMgSVN0YXRlIHtcbiAgICBzdGF0ZU5hbWU6IHN0cmluZyA9IFwiVGVzdDJTdGF0ZVwiO1xuICAgIGNhblRvU3RhdGVOYW1lOiBzdHJpbmdbXSA9IFtcIlRlc3QxU3RhdGVcIl07XG4gICAgY2FuRnJvbVN0YXRlTmFtZTogc3RyaW5nW10gPSBbXCJUZXN0MVN0YXRlXCJdO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5hZGRTZWxmMlN0YXRlTWFwKCk7XG4gICAgfVxuICAgIFN0YXJ0KGFyZz86IGFueSk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlTmFtZSwgXCJTdGFydFwiKTtcbiAgICB9XG4gICAgRW5kKGFyZz86IGFueSk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlTmFtZSwgXCJFbmRcIik7XG4gICAgfVxuICAgIGFkZFNlbGYyU3RhdGVNYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5rOo5YaM54q25oCB5oiQ5Yqf77yMbmFtZTogXCIsIHRoaXMuc3RhdGVOYW1lKTtcbiAgICAgICAgU3RhdGVNYWNoaW5lLkFkZFN0YXRlKHRoaXMuc3RhdGVOYW1lLCB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFRlc3QyKSBhcyBUZXN0MilcbiAgICB9XG59XG4iXX0=