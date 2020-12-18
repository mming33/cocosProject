System.register(["cce.code-quality.cr", "cc", "../../Common/Game/MyComponent.js", "../../Common/StateMachine/StateMachine.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, MyComponent, StateMachine, _dec, _class, _temp, _crd, ccclass, property, Test1;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Test1", Test1 = (_dec = ccclass('Test1'), _dec(_class = (_temp = /*#__PURE__*/function (_ref) {
        _inheritsLoose(Test1, _ref);

        function Test1() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _ref.call.apply(_ref, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "stateName", "Test1State");

          _defineProperty(_assertThisInitialized(_this), "canToStateName", ["Test2State"]);

          _defineProperty(_assertThisInitialized(_this), "canFromStateName", ["Test2State", "StartGameState"]);

          return _this;
        }

        var _proto = Test1.prototype;

        _proto.onLoad = function onLoad() {
          this.addSelf2StateMap();
        };

        _proto.Start = function Start(arg) {
          console.log(this.stateName, "Start");
        };

        _proto.End = function End(arg) {
          console.log(this.stateName, "End");
        };

        _proto.addSelf2StateMap = function addSelf2StateMap() {
          console.log("注册状态成功，name: ", this.stateName);
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).AddState(this.stateName, this.node.getComponent(Test1));
        };

        return Test1;
      }(_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL1Rlc3QxLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJNeUNvbXBvbmVudCIsIlN0YXRlTWFjaGluZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlRlc3QxIiwib25Mb2FkIiwiYWRkU2VsZjJTdGF0ZU1hcCIsIlN0YXJ0IiwiYXJnIiwiY29uc29sZSIsImxvZyIsInN0YXRlTmFtZSIsIkVuZCIsIkFkZFN0YXRlIiwibm9kZSIsImdldENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1NBLE1BQUFBLFUsT0FBQUEsVTs7QUFDQUMsTUFBQUEsVyw0QkFBQUEsVzs7QUFHQUMsTUFBQUEsWSxxQ0FBQUEsWTs7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCSCxVLENBQXRCRyxPO0FBQVNDLE1BQUFBLFEsR0FBYUosVSxDQUFiSSxROzt1QkFHSkMsSyxXQURaRixPQUFPLENBQUMsT0FBRCxDOzs7Ozs7Ozs7Ozs7c0VBRWdCLFk7OzJFQUNNLENBQUMsWUFBRCxDOzs2RUFDQyxDQUFDLFlBQUQsRUFBYyxnQkFBZCxDOzs7Ozs7O2VBQzNCRyxNLEdBQUEsa0JBQVM7QUFDTCxlQUFLQyxnQkFBTDtBQUNILFM7O2VBQ0RDLEssR0FBQSxlQUFNQyxHQUFOLEVBQXVCO0FBQ3BCQyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxTQUFqQixFQUEyQixPQUEzQjtBQUNGLFM7O2VBQ0RDLEcsR0FBQSxhQUFJSixHQUFKLEVBQXFCO0FBQ2xCQyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxTQUFqQixFQUEyQixLQUEzQjtBQUNGLFM7O2VBQ0RMLGdCLEdBQUEsNEJBQXlCO0FBQ3RCRyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCLEtBQUtDLFNBQWxDO0FBQ0E7QUFBQTtBQUFBLDRDQUFhRSxRQUFiLENBQXNCLEtBQUtGLFNBQTNCLEVBQXNDLEtBQUtHLElBQUwsQ0FBVUMsWUFBVixDQUF1QlgsS0FBdkIsQ0FBdEM7QUFDRixTIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IE15Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vQ29tbW9uL0dhbWUvTXlDb21wb25lbnQnO1xuaW1wb3J0IHsgTG9hZFN0YXRlIH0gZnJvbSAnLi4vLi4vQ29tbW9uL0xvYWQvTG9hZFN0YXRlJztcbmltcG9ydCB7IElTdGF0ZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvSVN0YXRlJztcbmltcG9ydCB7IFN0YXRlTWFjaGluZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVNYWNoaW5lJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdUZXN0MScpXG5leHBvcnQgY2xhc3MgVGVzdDEgZXh0ZW5kcyBNeUNvbXBvbmVudCAgaW1wbGVtZW50cyBJU3RhdGUge1xuICAgIHN0YXRlTmFtZTogc3RyaW5nID0gXCJUZXN0MVN0YXRlXCI7XG4gICAgY2FuVG9TdGF0ZU5hbWU6IHN0cmluZ1tdPSBbXCJUZXN0MlN0YXRlXCJdO1xuICAgIGNhbkZyb21TdGF0ZU5hbWU6IHN0cmluZ1tdPVtcIlRlc3QyU3RhdGVcIixcIlN0YXJ0R2FtZVN0YXRlXCJdO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5hZGRTZWxmMlN0YXRlTWFwKCk7XG4gICAgfVxuICAgIFN0YXJ0KGFyZz86IGFueSk6IHZvaWQge1xuICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGVOYW1lLFwiU3RhcnRcIik7XG4gICAgfVxuICAgIEVuZChhcmc/OiBhbnkpOiB2b2lkIHtcbiAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlTmFtZSxcIkVuZFwiKTtcbiAgICB9XG4gICAgYWRkU2VsZjJTdGF0ZU1hcCgpOiB2b2lkIHtcbiAgICAgICBjb25zb2xlLmxvZyhcIuazqOWGjOeKtuaAgeaIkOWKn++8jG5hbWU6IFwiLCB0aGlzLnN0YXRlTmFtZSk7XG4gICAgICAgU3RhdGVNYWNoaW5lLkFkZFN0YXRlKHRoaXMuc3RhdGVOYW1lLCB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFRlc3QxKSBhcyBUZXN0MSlcbiAgICB9XG59XG4iXX0=