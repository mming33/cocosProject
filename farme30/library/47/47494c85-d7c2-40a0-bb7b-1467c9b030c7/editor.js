System.register(["cce.code-quality.cr", "cc", "../../Common/Game/MyComponent.js", "../../Common/StateMachine/StateMachine.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, MyComponent, StateMachine, StateType, _dec, _class, _temp, _crd, ccclass, property, GameSettlementState;

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

      _cclegacy._RF.push({}, "47494yF18JAoLt7FGfJsDDH", "GameSettlementState", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameSettlementState", GameSettlementState = (_dec = ccclass('GameSettlementState'), _dec(_class = (_temp = class GameSettlementState extends (_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "stateName", (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GameSettlementState);

          _defineProperty(this, "canFromStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GameOverState]);

          _defineProperty(this, "canToStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).MainSceneStartState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).StartGameState]);
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
          }), StateMachine) : StateMachine).AddState(this.stateName, this.node.getComponent(GameSettlementState));
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL0dhbWVTZXR0bGVtZW50U3RhdGUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIk15Q29tcG9uZW50IiwiU3RhdGVNYWNoaW5lIiwiU3RhdGVUeXBlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiR2FtZVNldHRsZW1lbnRTdGF0ZSIsIkdhbWVPdmVyU3RhdGUiLCJNYWluU2NlbmVTdGFydFN0YXRlIiwiU3RhcnRHYW1lU3RhdGUiLCJvbkxvYWQiLCJhZGRTZWxmMlN0YXRlTWFwIiwiU3RhcnQiLCJhcmciLCJFbmQiLCJjb25zb2xlIiwibG9nIiwic3RhdGVOYW1lIiwiQWRkU3RhdGUiLCJub2RlIiwiZ2V0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOztBQUNBQyxNQUFBQSxXLDRCQUFBQSxXOztBQUVBQyxNQUFBQSxZLHFDQUFBQSxZOztBQUNBQyxNQUFBQSxTLGtDQUFBQSxTOzs7Ozs7O09BQ0g7QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE8sR0FBd0JMLFU7O3FDQUdqQk0sbUIsV0FEWkYsT0FBTyxDQUFDLHFCQUFELEMseUJBQVIsTUFDYUUsbUJBRGI7QUFBQTtBQUFBLHNDQUN1RTtBQUFBO0FBQUE7O0FBQUEsNkNBQy9DO0FBQUE7QUFBQSxzQ0FBVUEsbUJBRHFDOztBQUFBLG9EQUV0QyxDQUFDO0FBQUE7QUFBQSxzQ0FBVUMsYUFBWCxDQUZzQzs7QUFBQSxrREFHeEMsQ0FBQztBQUFBO0FBQUEsc0NBQVVDLG1CQUFYLEVBQWdDO0FBQUE7QUFBQSxzQ0FBVUMsY0FBMUMsQ0FId0M7QUFBQTs7QUFLbkVDLFFBQUFBLE1BQU0sR0FBRztBQUNMLGVBQUtDLGdCQUFMO0FBQ0g7O0FBRUZDLFFBQUFBLEtBQUssQ0FBQ0MsR0FBRCxFQUFrQixDQUNyQjs7QUFDREMsUUFBQUEsR0FBRyxDQUFDRCxHQUFELEVBQWtCLENBQ3BCOztBQUNERixRQUFBQSxnQkFBZ0IsR0FBUztBQUNyQkksVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QixLQUFLQyxTQUFsQztBQUNBO0FBQUE7QUFBQSw0Q0FBYUMsUUFBYixDQUFzQixLQUFLRCxTQUEzQixFQUFzQyxLQUFLRSxJQUFMLENBQVVDLFlBQVYsQ0FBdUJkLG1CQUF2QixDQUF0QztBQUVIOztBQWpCa0UsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IE15Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vQ29tbW9uL0dhbWUvTXlDb21wb25lbnQnO1xuaW1wb3J0IHsgSVN0YXRlIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9JU3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVNYWNoaW5lIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZU1hY2hpbmUnO1xuaW1wb3J0IHsgU3RhdGVUeXBlIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZVR5cGUnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0dhbWVTZXR0bGVtZW50U3RhdGUnKVxuZXhwb3J0IGNsYXNzIEdhbWVTZXR0bGVtZW50U3RhdGUgZXh0ZW5kcyBNeUNvbXBvbmVudCBpbXBsZW1lbnRzIElTdGF0ZSB7XG4gICAgc3RhdGVOYW1lOiBzdHJpbmcgPSBTdGF0ZVR5cGUuR2FtZVNldHRsZW1lbnRTdGF0ZTtcbiAgICBjYW5Gcm9tU3RhdGVOYW1lOiBzdHJpbmdbXSA9IFtTdGF0ZVR5cGUuR2FtZU92ZXJTdGF0ZV07XG4gICAgY2FuVG9TdGF0ZU5hbWU6IHN0cmluZ1tdID0gW1N0YXRlVHlwZS5NYWluU2NlbmVTdGFydFN0YXRlLCBTdGF0ZVR5cGUuU3RhcnRHYW1lU3RhdGVdO1xuICAgIFxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5hZGRTZWxmMlN0YXRlTWFwKCk7XG4gICAgfVxuXG4gICBTdGFydChhcmc/OiBhbnkpOiB2b2lkIHtcbiAgICB9XG4gICAgRW5kKGFyZz86IGFueSk6IHZvaWQge1xuICAgIH1cbiAgICBhZGRTZWxmMlN0YXRlTWFwKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuazqOWGjOeKtuaAgeaIkOWKn++8jG5hbWU6IFwiLCB0aGlzLnN0YXRlTmFtZSk7XG4gICAgICAgIFN0YXRlTWFjaGluZS5BZGRTdGF0ZSh0aGlzLnN0YXRlTmFtZSwgdGhpcy5ub2RlLmdldENvbXBvbmVudChHYW1lU2V0dGxlbWVudFN0YXRlKSBhcyBHYW1lU2V0dGxlbWVudFN0YXRlKVxuXG4gICAgfVxuXG59XG4iXX0=