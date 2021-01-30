System.register(["cce.code-quality.cr", "cc", "../../Common/Popup/PopupManager.js", "../../Common/StateMachine/SMManger.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, PopupManager, SMName, StateType, _dec, _class, _temp, _crd, ccclass, property, ShopPopupState;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfPopupManager(extras) {
    _reporterNs.report("PopupManager", "../../Common/Popup/PopupManager", _context.meta, extras);
  }

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
    }, function (_CommonPopupPopupManagerJs) {
      PopupManager = _CommonPopupPopupManagerJs.PopupManager;
    }, function (_CommonStateMachineSMMangerJs) {
      SMName = _CommonStateMachineSMMangerJs.SMName;
    }, function (_CommonStateMachineStateTypeJs) {
      StateType = _CommonStateMachineStateTypeJs.StateType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "29d5ebV5cxA+K9EhLAsm5SB", "ShopPopupState", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ShopPopupState", ShopPopupState = (_dec = ccclass('ShopPopupState'), _dec(_class = (_temp = /*#__PURE__*/function () {
        function ShopPopupState() {
          _defineProperty(this, "stateMachineName", (_crd && SMName === void 0 ? (_reportPossibleCrUseOfSMName({
            error: Error()
          }), SMName) : SMName).GameStateMachine);

          _defineProperty(this, "stateName", (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).ShopPopupState);

          _defineProperty(this, "canFromStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).MainSceneStartState]);

          _defineProperty(this, "canToStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).MainSceneStartState]);
        }

        var _proto = ShopPopupState.prototype;

        _proto.Start = function Start(arg) {
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).ShowPopup("ShopPopup");
        };

        _proto.End = function End(arg) {};

        return ShopPopupState;
      }(), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL1Nob3BQb3B1cFN0YXRlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJQb3B1cE1hbmFnZXIiLCJTTU5hbWUiLCJTdGF0ZVR5cGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJTaG9wUG9wdXBTdGF0ZSIsIkdhbWVTdGF0ZU1hY2hpbmUiLCJNYWluU2NlbmVTdGFydFN0YXRlIiwiU3RhcnQiLCJhcmciLCJTaG93UG9wdXAiLCJFbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7O0FBRUFDLE1BQUFBLFksOEJBQUFBLFk7O0FBRUFDLE1BQUFBLE0saUNBQUFBLE07O0FBRUFDLE1BQUFBLFMsa0NBQUFBLFM7Ozs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQkosVSxDQUF0QkksTztBQUFTQyxNQUFBQSxRLEdBQWFMLFUsQ0FBYkssUTs7Z0NBR0pDLGMsV0FEWkYsT0FBTyxDQUFDLGdCQUFELEM7O29EQUV1QjtBQUFBO0FBQUEsZ0NBQU9HLGdCOzs2Q0FDZDtBQUFBO0FBQUEsc0NBQVVELGM7O29EQUNELENBQUM7QUFBQTtBQUFBLHNDQUFVRSxtQkFBWCxDOztrREFDRixDQUFDO0FBQUE7QUFBQSxzQ0FBVUEsbUJBQVgsQzs7Ozs7ZUFHM0JDLEssR0FBQSxlQUFNQyxHQUFOLEVBQXVCO0FBQ25CO0FBQUE7QUFBQSw0Q0FBYUMsU0FBYixDQUF1QixXQUF2QjtBQUNILFM7O2VBRURDLEcsR0FBQSxhQUFJRixHQUFKLEVBQXFCLENBQ3BCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL0NvbW1vbi9HYW1lL015Q29tcG9uZW50JztcbmltcG9ydCB7IFBvcHVwTWFuYWdlciB9IGZyb20gJy4uLy4uL0NvbW1vbi9Qb3B1cC9Qb3B1cE1hbmFnZXInO1xuaW1wb3J0IHsgSVN0YXRlIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9JU3RhdGUnO1xuaW1wb3J0IHsgU01OYW1lIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TTU1hbmdlcic7XG5pbXBvcnQgeyBTdGF0ZU1hY2hpbmUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1N0YXRlTWFjaGluZSc7XG5pbXBvcnQgeyBTdGF0ZVR5cGUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1N0YXRlVHlwZSc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnU2hvcFBvcHVwU3RhdGUnKVxuZXhwb3J0IGNsYXNzIFNob3BQb3B1cFN0YXRlICBpbXBsZW1lbnRzIElTdGF0ZSB7XG4gICAgc3RhdGVNYWNoaW5lTmFtZTogc3RyaW5nID0gU01OYW1lLkdhbWVTdGF0ZU1hY2hpbmU7XG4gICAgc3RhdGVOYW1lOiBzdHJpbmcgPSBTdGF0ZVR5cGUuU2hvcFBvcHVwU3RhdGU7XG4gICAgY2FuRnJvbVN0YXRlTmFtZTogc3RyaW5nW10gPSBbU3RhdGVUeXBlLk1haW5TY2VuZVN0YXJ0U3RhdGVdO1xuICAgIGNhblRvU3RhdGVOYW1lOiBzdHJpbmdbXSA9IFtTdGF0ZVR5cGUuTWFpblNjZW5lU3RhcnRTdGF0ZV07XG4gXG5cbiAgICBTdGFydChhcmc/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgUG9wdXBNYW5hZ2VyLlNob3dQb3B1cChcIlNob3BQb3B1cFwiKTtcbiAgICB9XG4gICAgXG4gICAgRW5kKGFyZz86IGFueSk6IHZvaWQge1xuICAgIH1cblxufVxuIl19