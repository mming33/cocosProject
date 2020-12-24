System.register(["cce.code-quality.cr", "cc", "../../Common/Game/MyComponent.js", "../../Common/StateMachine/StateMachine.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, MyComponent, StateMachine, StateType, _dec, _class, _temp, _crd, ccclass, property, GamingStopState;

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

      _cclegacy._RF.push({}, "c6934CHaDRBb4q9w7A5PfTk", "GamingStopState", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GamingStopState", GamingStopState = (_dec = ccclass('GamingStopState'), _dec(_class = (_temp = /*#__PURE__*/function (_ref) {
        _inheritsLoose(GamingStopState, _ref);

        function GamingStopState() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _ref.call.apply(_ref, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "stateName", (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GamingStopState);

          _defineProperty(_assertThisInitialized(_this), "canFromStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GamingState]);

          _defineProperty(_assertThisInitialized(_this), "canToStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GamingState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GameOverState]);

          return _this;
        }

        var _proto = GamingStopState.prototype;

        _proto.onLoad = function onLoad() {
          this.addSelf2StateMap();
        };

        _proto.Start = function Start(arg) {
          throw new Error('Method not implemented.');
        };

        _proto.End = function End(arg) {
          throw new Error('Method not implemented.');
        };

        _proto.addSelf2StateMap = function addSelf2StateMap() {
          console.log("注册状态成功，name: ", this.stateName);
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).AddState(this.stateName, this.node.getComponent(GamingStopState));
        };

        return GamingStopState;
      }(_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL0dhbWluZ1N0b3BTdGF0ZS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiTXlDb21wb25lbnQiLCJTdGF0ZU1hY2hpbmUiLCJTdGF0ZVR5cGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHYW1pbmdTdG9wU3RhdGUiLCJHYW1pbmdTdGF0ZSIsIkdhbWVPdmVyU3RhdGUiLCJvbkxvYWQiLCJhZGRTZWxmMlN0YXRlTWFwIiwiU3RhcnQiLCJhcmciLCJFcnJvciIsIkVuZCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZU5hbWUiLCJBZGRTdGF0ZSIsIm5vZGUiLCJnZXRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOztBQUNBQyxNQUFBQSxXLDRCQUFBQSxXOztBQUVBQyxNQUFBQSxZLHFDQUFBQSxZOztBQUNBQyxNQUFBQSxTLGtDQUFBQSxTOzs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JKLFUsQ0FBdEJJLE87QUFBU0MsTUFBQUEsUSxHQUFhTCxVLENBQWJLLFE7O2lDQUdKQyxlLFdBRFpGLE9BQU8sQ0FBQyxpQkFBRCxDOzs7Ozs7Ozs7Ozs7c0VBRWdCO0FBQUE7QUFBQSxzQ0FBVUUsZTs7NkVBQ0QsQ0FBQztBQUFBO0FBQUEsc0NBQVVDLFdBQVgsQzs7MkVBQ0YsQ0FBQztBQUFBO0FBQUEsc0NBQVVBLFdBQVgsRUFBdUI7QUFBQTtBQUFBLHNDQUFVQyxhQUFqQyxDOzs7Ozs7O2VBRTNCQyxNLEdBQUEsa0JBQVM7QUFDTCxlQUFLQyxnQkFBTDtBQUNILFM7O2VBRUFDLEssR0FBQSxlQUFNQyxHQUFOLEVBQXVCO0FBQ3BCLGdCQUFNLElBQUlDLEtBQUosQ0FBVSx5QkFBVixDQUFOO0FBQ0gsUzs7ZUFDREMsRyxHQUFBLGFBQUlGLEdBQUosRUFBcUI7QUFDakIsZ0JBQU0sSUFBSUMsS0FBSixDQUFVLHlCQUFWLENBQU47QUFDSCxTOztlQUNESCxnQixHQUFBLDRCQUF5QjtBQUNyQkssVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QixLQUFLQyxTQUFsQztBQUNBO0FBQUE7QUFBQSw0Q0FBYUMsUUFBYixDQUFzQixLQUFLRCxTQUEzQixFQUFzQyxLQUFLRSxJQUFMLENBQVVDLFlBQVYsQ0FBdUJkLGVBQXZCLENBQXRDO0FBQ0gsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IE15Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vQ29tbW9uL0dhbWUvTXlDb21wb25lbnQnO1xuaW1wb3J0IHsgSVN0YXRlIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9JU3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVNYWNoaW5lIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZU1hY2hpbmUnO1xuaW1wb3J0IHsgU3RhdGVUeXBlIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZVR5cGUnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0dhbWluZ1N0b3BTdGF0ZScpXG5leHBvcnQgY2xhc3MgR2FtaW5nU3RvcFN0YXRlIGV4dGVuZHMgTXlDb21wb25lbnQgaW1wbGVtZW50cyBJU3RhdGUge1xuICAgIHN0YXRlTmFtZTogc3RyaW5nID0gU3RhdGVUeXBlLkdhbWluZ1N0b3BTdGF0ZTtcbiAgICBjYW5Gcm9tU3RhdGVOYW1lOiBzdHJpbmdbXSA9IFtTdGF0ZVR5cGUuR2FtaW5nU3RhdGVdO1xuICAgIGNhblRvU3RhdGVOYW1lOiBzdHJpbmdbXSA9IFtTdGF0ZVR5cGUuR2FtaW5nU3RhdGUsU3RhdGVUeXBlLkdhbWVPdmVyU3RhdGVdOyAgIFxuICBcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuYWRkU2VsZjJTdGF0ZU1hcCgpO1xuICAgIH1cblxuICAgICBTdGFydChhcmc/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgICBFbmQoYXJnPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gICAgYWRkU2VsZjJTdGF0ZU1hcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLms6jlhoznirbmgIHmiJDlip/vvIxuYW1lOiBcIiwgdGhpcy5zdGF0ZU5hbWUpO1xuICAgICAgICBTdGF0ZU1hY2hpbmUuQWRkU3RhdGUodGhpcy5zdGF0ZU5hbWUsIHRoaXMubm9kZS5nZXRDb21wb25lbnQoR2FtaW5nU3RvcFN0YXRlKSBhcyBHYW1pbmdTdG9wU3RhdGUpXG4gICAgfVxufVxuIl19