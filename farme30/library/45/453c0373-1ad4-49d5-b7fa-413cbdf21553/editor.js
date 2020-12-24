System.register(["cce.code-quality.cr", "cc", "../../Common/Game/MyComponent.js", "../../Common/StateMachine/StateMachine.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, MyComponent, StateMachine, StateType, _dec, _class, _temp, _crd, ccclass, property, GamingState;

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("GamingState", GamingState = (_dec = ccclass('GamingState'), _dec(_class = (_temp = class GamingState extends (_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "stateName", (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GamingState);

          _defineProperty(this, "canFromStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).StartGameState]);

          _defineProperty(this, "canToStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).DeathState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GamingStopState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GameOverState]);
        }

        onLoad() {
          this.addSelf2StateMap();
        }

        Start(arg) {}

        End(arg) {}

        addSelf2StateMap() {
          console.log("注册状态成功，name: ", this.stateName);
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).AddState(this.stateName, this.node.getComponent(GamingState));
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL0dhbWluZ1N0YXRlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJNeUNvbXBvbmVudCIsIlN0YXRlTWFjaGluZSIsIlN0YXRlVHlwZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdhbWluZ1N0YXRlIiwiU3RhcnRHYW1lU3RhdGUiLCJEZWF0aFN0YXRlIiwiR2FtaW5nU3RvcFN0YXRlIiwiR2FtZU92ZXJTdGF0ZSIsIm9uTG9hZCIsImFkZFNlbGYyU3RhdGVNYXAiLCJTdGFydCIsImFyZyIsIkVuZCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZU5hbWUiLCJBZGRTdGF0ZSIsIm5vZGUiLCJnZXRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7O0FBQ0FDLE1BQUFBLFcsNEJBQUFBLFc7O0FBRUFDLE1BQUFBLFkscUNBQUFBLFk7O0FBQ0FDLE1BQUFBLFMsa0NBQUFBLFM7Ozs7Ozs7T0FDSDtBQUFFQyxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsTyxHQUF3QkwsVTs7NkJBR2pCTSxXLFdBRFpGLE9BQU8sQ0FBQyxhQUFELEMseUJBQVIsTUFDYUUsV0FEYjtBQUFBO0FBQUEsc0NBQytEO0FBQUE7QUFBQTs7QUFBQSw2Q0FDdkM7QUFBQTtBQUFBLHNDQUFVQSxXQUQ2Qjs7QUFBQSxvREFFOUIsQ0FBQztBQUFBO0FBQUEsc0NBQVVDLGNBQVgsQ0FGOEI7O0FBQUEsa0RBR2hDLENBQUM7QUFBQTtBQUFBLHNDQUFVQyxVQUFYLEVBQXVCO0FBQUE7QUFBQSxzQ0FBVUMsZUFBakMsRUFBa0Q7QUFBQTtBQUFBLHNDQUFVQyxhQUE1RCxDQUhnQztBQUFBOztBQUszREMsUUFBQUEsTUFBTSxHQUFHO0FBQ0wsZUFBS0MsZ0JBQUw7QUFDSDs7QUFFREMsUUFBQUEsS0FBSyxDQUFDQyxHQUFELEVBQWtCLENBRXRCOztBQUNEQyxRQUFBQSxHQUFHLENBQUNELEdBQUQsRUFBa0IsQ0FFcEI7O0FBQ0RGLFFBQUFBLGdCQUFnQixHQUFTO0FBQ3JCSSxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCLEtBQUtDLFNBQWxDO0FBQ0E7QUFBQTtBQUFBLDRDQUFhQyxRQUFiLENBQXNCLEtBQUtELFNBQTNCLEVBQXNDLEtBQUtFLElBQUwsQ0FBVUMsWUFBVixDQUF1QmYsV0FBdkIsQ0FBdEM7QUFDSDs7QUFsQjBELE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL0NvbW1vbi9HYW1lL015Q29tcG9uZW50JztcbmltcG9ydCB7IElTdGF0ZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvSVN0YXRlJztcbmltcG9ydCB7IFN0YXRlTWFjaGluZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVNYWNoaW5lJztcbmltcG9ydCB7IFN0YXRlVHlwZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVUeXBlJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdHYW1pbmdTdGF0ZScpXG5leHBvcnQgY2xhc3MgR2FtaW5nU3RhdGUgZXh0ZW5kcyBNeUNvbXBvbmVudCBpbXBsZW1lbnRzIElTdGF0ZSB7XG4gICAgc3RhdGVOYW1lOiBzdHJpbmcgPSBTdGF0ZVR5cGUuR2FtaW5nU3RhdGU7XG4gICAgY2FuRnJvbVN0YXRlTmFtZTogc3RyaW5nW10gPSBbU3RhdGVUeXBlLlN0YXJ0R2FtZVN0YXRlXTtcbiAgICBjYW5Ub1N0YXRlTmFtZTogc3RyaW5nW10gPSBbU3RhdGVUeXBlLkRlYXRoU3RhdGUsIFN0YXRlVHlwZS5HYW1pbmdTdG9wU3RhdGUsIFN0YXRlVHlwZS5HYW1lT3ZlclN0YXRlXTtcbiAgIFxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5hZGRTZWxmMlN0YXRlTWFwKCk7XG4gICAgfVxuXG4gICAgU3RhcnQoYXJnPzogYW55KTogdm9pZCB7XG5cbiAgICB9XG4gICAgRW5kKGFyZz86IGFueSk6IHZvaWQge1xuICAgICAgICBcbiAgICB9XG4gICAgYWRkU2VsZjJTdGF0ZU1hcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLms6jlhoznirbmgIHmiJDlip/vvIxuYW1lOiBcIiwgdGhpcy5zdGF0ZU5hbWUpO1xuICAgICAgICBTdGF0ZU1hY2hpbmUuQWRkU3RhdGUodGhpcy5zdGF0ZU5hbWUsIHRoaXMubm9kZS5nZXRDb21wb25lbnQoR2FtaW5nU3RhdGUpIGFzIEdhbWluZ1N0YXRlKVxuICAgIH1cblxufVxuIl19