System.register(["cce.code-quality.cr", "cc", "../../Common/Game/MyComponent.js", "../../Common/StateMachine/StateMachine.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, MyComponent, StateMachine, StateType, _dec, _class, _temp, _crd, ccclass, property, GamingState;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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

      _cclegacy._RF.push({}, "453c0NzGtRJ1bf6QTy98hVT", "GamingState", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GamingState", GamingState = (_dec = ccclass('GamingState'), _dec(_class = (_temp = /*#__PURE__*/function (_ref) {
        _inheritsLoose(GamingState, _ref);

        function GamingState() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _ref.call.apply(_ref, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "stateName", (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GamingState);

          _defineProperty(_assertThisInitialized(_this), "canFromStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).StartGameState]);

          _defineProperty(_assertThisInitialized(_this), "canToStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).DeathState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GamingStopState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GameOverState]);

          return _this;
        }

        var _proto = GamingState.prototype;

        _proto.onLoad = function onLoad() {
          this.addSelf2StateMap();
        };

        _proto.Start = function Start(arg) {};

        _proto.End = function End(arg) {};

        _proto.addSelf2StateMap = function addSelf2StateMap() {
          console.log("注册状态成功，name: ", this.stateName);
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).AddState(this.stateName, this.node.getComponent(GamingState));
        };

        return GamingState;
      }(_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL0dhbWluZ1N0YXRlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJNeUNvbXBvbmVudCIsIlN0YXRlTWFjaGluZSIsIlN0YXRlVHlwZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdhbWluZ1N0YXRlIiwiU3RhcnRHYW1lU3RhdGUiLCJEZWF0aFN0YXRlIiwiR2FtaW5nU3RvcFN0YXRlIiwiR2FtZU92ZXJTdGF0ZSIsIm9uTG9hZCIsImFkZFNlbGYyU3RhdGVNYXAiLCJTdGFydCIsImFyZyIsIkVuZCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZU5hbWUiLCJBZGRTdGF0ZSIsIm5vZGUiLCJnZXRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOztBQUNBQyxNQUFBQSxXLDRCQUFBQSxXOztBQUVBQyxNQUFBQSxZLHFDQUFBQSxZOztBQUNBQyxNQUFBQSxTLGtDQUFBQSxTOzs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JKLFUsQ0FBdEJJLE87QUFBU0MsTUFBQUEsUSxHQUFhTCxVLENBQWJLLFE7OzZCQUdKQyxXLFdBRFpGLE9BQU8sQ0FBQyxhQUFELEM7Ozs7Ozs7Ozs7OztzRUFFZ0I7QUFBQTtBQUFBLHNDQUFVRSxXOzs2RUFDRCxDQUFDO0FBQUE7QUFBQSxzQ0FBVUMsY0FBWCxDOzsyRUFDRixDQUFDO0FBQUE7QUFBQSxzQ0FBVUMsVUFBWCxFQUF1QjtBQUFBO0FBQUEsc0NBQVVDLGVBQWpDLEVBQWtEO0FBQUE7QUFBQSxzQ0FBVUMsYUFBNUQsQzs7Ozs7OztlQUUzQkMsTSxHQUFBLGtCQUFTO0FBQ0wsZUFBS0MsZ0JBQUw7QUFDSCxTOztlQUVEQyxLLEdBQUEsZUFBTUMsR0FBTixFQUF1QixDQUV0QixDOztlQUNEQyxHLEdBQUEsYUFBSUQsR0FBSixFQUFxQixDQUVwQixDOztlQUNERixnQixHQUFBLDRCQUF5QjtBQUNyQkksVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QixLQUFLQyxTQUFsQztBQUNBO0FBQUE7QUFBQSw0Q0FBYUMsUUFBYixDQUFzQixLQUFLRCxTQUEzQixFQUFzQyxLQUFLRSxJQUFMLENBQVVDLFlBQVYsQ0FBdUJmLFdBQXZCLENBQXRDO0FBQ0gsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IE15Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vQ29tbW9uL0dhbWUvTXlDb21wb25lbnQnO1xuaW1wb3J0IHsgSVN0YXRlIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9JU3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVNYWNoaW5lIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZU1hY2hpbmUnO1xuaW1wb3J0IHsgU3RhdGVUeXBlIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZVR5cGUnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0dhbWluZ1N0YXRlJylcbmV4cG9ydCBjbGFzcyBHYW1pbmdTdGF0ZSBleHRlbmRzIE15Q29tcG9uZW50IGltcGxlbWVudHMgSVN0YXRlIHtcbiAgICBzdGF0ZU5hbWU6IHN0cmluZyA9IFN0YXRlVHlwZS5HYW1pbmdTdGF0ZTtcbiAgICBjYW5Gcm9tU3RhdGVOYW1lOiBzdHJpbmdbXSA9IFtTdGF0ZVR5cGUuU3RhcnRHYW1lU3RhdGVdO1xuICAgIGNhblRvU3RhdGVOYW1lOiBzdHJpbmdbXSA9IFtTdGF0ZVR5cGUuRGVhdGhTdGF0ZSwgU3RhdGVUeXBlLkdhbWluZ1N0b3BTdGF0ZSwgU3RhdGVUeXBlLkdhbWVPdmVyU3RhdGVdO1xuICAgXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmFkZFNlbGYyU3RhdGVNYXAoKTtcbiAgICB9XG5cbiAgICBTdGFydChhcmc/OiBhbnkpOiB2b2lkIHtcblxuICAgIH1cbiAgICBFbmQoYXJnPzogYW55KTogdm9pZCB7XG4gICAgICAgIFxuICAgIH1cbiAgICBhZGRTZWxmMlN0YXRlTWFwKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuazqOWGjOeKtuaAgeaIkOWKn++8jG5hbWU6IFwiLCB0aGlzLnN0YXRlTmFtZSk7XG4gICAgICAgIFN0YXRlTWFjaGluZS5BZGRTdGF0ZSh0aGlzLnN0YXRlTmFtZSwgdGhpcy5ub2RlLmdldENvbXBvbmVudChHYW1pbmdTdGF0ZSkgYXMgR2FtaW5nU3RhdGUpXG4gICAgfVxuXG59XG4iXX0=