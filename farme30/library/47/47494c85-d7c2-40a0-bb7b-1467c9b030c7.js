System.register(["cce.code-quality.cr", "cc", "../../Common/StateMachine/SMManger.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, SMName, StateType, _dec, _class, _temp, _crd, ccclass, property, GameSettlementState;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSMName(extras) {
    _reporterNs.report("SMName", "../../Common/StateMachine/SMManger", _context.meta, extras);
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
    }, function (_CommonStateMachineSMMangerJs) {
      SMName = _CommonStateMachineSMMangerJs.SMName;
    }, function (_CommonStateMachineStateTypeJs) {
      StateType = _CommonStateMachineStateTypeJs.StateType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "47494yF18JAoLt7FGfJsDDH", "GameSettlementState", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameSettlementState", GameSettlementState = (_dec = ccclass('GameSettlementState'), _dec(_class = (_temp = /*#__PURE__*/function () {
        function GameSettlementState() {
          _defineProperty(this, "stateMachineName", (_crd && SMName === void 0 ? (_reportPossibleCrUseOfSMName({
            error: Error()
          }), SMName) : SMName).GameStateMachine);

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

        var _proto = GameSettlementState.prototype;

        _proto.Start = function Start(arg) {};

        _proto.End = function End(arg) {};

        return GameSettlementState;
      }(), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL0dhbWVTZXR0bGVtZW50U3RhdGUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIlNNTmFtZSIsIlN0YXRlVHlwZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdhbWVTZXR0bGVtZW50U3RhdGUiLCJHYW1lU3RhdGVNYWNoaW5lIiwiR2FtZU92ZXJTdGF0ZSIsIk1haW5TY2VuZVN0YXJ0U3RhdGUiLCJTdGFydEdhbWVTdGF0ZSIsIlN0YXJ0IiwiYXJnIiwiRW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7O0FBR0FDLE1BQUFBLE0saUNBQUFBLE07O0FBRUFDLE1BQUFBLFMsa0NBQUFBLFM7Ozs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQkgsVSxDQUF0QkcsTztBQUFTQyxNQUFBQSxRLEdBQWFKLFUsQ0FBYkksUTs7cUNBR0pDLG1CLFdBRFpGLE9BQU8sQ0FBQyxxQkFBRCxDOztvREFFdUI7QUFBQTtBQUFBLGdDQUFPRyxnQjs7NkNBQ2Q7QUFBQTtBQUFBLHNDQUFVRCxtQjs7b0RBQ0QsQ0FBQztBQUFBO0FBQUEsc0NBQVVFLGFBQVgsQzs7a0RBQ0YsQ0FBQztBQUFBO0FBQUEsc0NBQVVDLG1CQUFYLEVBQWdDO0FBQUE7QUFBQSxzQ0FBVUMsY0FBMUMsQzs7Ozs7ZUFHM0JDLEssR0FBQSxlQUFNQyxHQUFOLEVBQXVCLENBQ3RCLEM7O2VBQ0RDLEcsR0FBQSxhQUFJRCxHQUFKLEVBQXFCLENBQ3BCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL0NvbW1vbi9HYW1lL015Q29tcG9uZW50JztcbmltcG9ydCB7IElTdGF0ZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvSVN0YXRlJztcbmltcG9ydCB7IFNNTmFtZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU01NYW5nZXInO1xuaW1wb3J0IHsgU3RhdGVNYWNoaW5lIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZU1hY2hpbmUnO1xuaW1wb3J0IHsgU3RhdGVUeXBlIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZVR5cGUnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0dhbWVTZXR0bGVtZW50U3RhdGUnKVxuZXhwb3J0IGNsYXNzIEdhbWVTZXR0bGVtZW50U3RhdGUgaW1wbGVtZW50cyBJU3RhdGUge1xuICAgIHN0YXRlTWFjaGluZU5hbWU6IHN0cmluZyA9IFNNTmFtZS5HYW1lU3RhdGVNYWNoaW5lO1xuICAgIHN0YXRlTmFtZTogc3RyaW5nID0gU3RhdGVUeXBlLkdhbWVTZXR0bGVtZW50U3RhdGU7XG4gICAgY2FuRnJvbVN0YXRlTmFtZTogc3RyaW5nW10gPSBbU3RhdGVUeXBlLkdhbWVPdmVyU3RhdGVdO1xuICAgIGNhblRvU3RhdGVOYW1lOiBzdHJpbmdbXSA9IFtTdGF0ZVR5cGUuTWFpblNjZW5lU3RhcnRTdGF0ZSwgU3RhdGVUeXBlLlN0YXJ0R2FtZVN0YXRlXTtcblxuXG4gICAgU3RhcnQoYXJnPzogYW55KTogdm9pZCB7XG4gICAgfVxuICAgIEVuZChhcmc/OiBhbnkpOiB2b2lkIHtcbiAgICB9XG5cbn1cbiJdfQ==