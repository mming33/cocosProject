System.register(["cce.code-quality.cr", "cc", "../../Common/StateMachine/SMManger.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, SMName, StateType, _dec, _class, _temp, _crd, ccclass, property, MainSceneStartState;

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

      _cclegacy._RF.push({}, "41d54bEc0hJUo/l0GPb8Jzn", "MainSceneStartState", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MainSceneStartState", MainSceneStartState = (_dec = ccclass('MainSceneStartState'), _dec(_class = (_temp = /*#__PURE__*/function () {
        function MainSceneStartState() {
          _defineProperty(this, "stateMachineName", (_crd && SMName === void 0 ? (_reportPossibleCrUseOfSMName({
            error: Error()
          }), SMName) : SMName).GameStateMachine);

          _defineProperty(this, "stateName", (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).MainSceneStartState);

          _defineProperty(this, "canFromStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).LoadState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).ChooseLevelState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).ChooseEndlessModeState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).ShopPopupState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GameSettlementState]);

          _defineProperty(this, "canToStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).ChooseLevelState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).ChooseEndlessModeState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).ShopPopupState]);
        }

        var _proto = MainSceneStartState.prototype;

        _proto.Start = function Start(arg) {
          console.log("回到Home场景");
        };

        _proto.End = function End(arg) {};

        return MainSceneStartState;
      }(), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL01haW5TY2VuZVN0YXJ0U3RhdGUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIlNNTmFtZSIsIlN0YXRlVHlwZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIk1haW5TY2VuZVN0YXJ0U3RhdGUiLCJHYW1lU3RhdGVNYWNoaW5lIiwiTG9hZFN0YXRlIiwiQ2hvb3NlTGV2ZWxTdGF0ZSIsIkNob29zZUVuZGxlc3NNb2RlU3RhdGUiLCJTaG9wUG9wdXBTdGF0ZSIsIkdhbWVTZXR0bGVtZW50U3RhdGUiLCJTdGFydCIsImFyZyIsImNvbnNvbGUiLCJsb2ciLCJFbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1NBLE1BQUFBLFUsT0FBQUEsVTs7QUFJQUMsTUFBQUEsTSxpQ0FBQUEsTTs7QUFFQUMsTUFBQUEsUyxrQ0FBQUEsUzs7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCSCxVLENBQXRCRyxPO0FBQVNDLE1BQUFBLFEsR0FBYUosVSxDQUFiSSxROztxQ0FHSkMsbUIsV0FEWkYsT0FBTyxDQUFDLHFCQUFELEM7O29EQUV1QjtBQUFBO0FBQUEsZ0NBQU9HLGdCOzs2Q0FDZDtBQUFBO0FBQUEsc0NBQVVELG1COztvREFDRCxDQUFDO0FBQUE7QUFBQSxzQ0FBVUUsU0FBWCxFQUFzQjtBQUFBO0FBQUEsc0NBQVVDLGdCQUFoQyxFQUFrRDtBQUFBO0FBQUEsc0NBQVVDLHNCQUE1RCxFQUFvRjtBQUFBO0FBQUEsc0NBQVVDLGNBQTlGLEVBQThHO0FBQUE7QUFBQSxzQ0FBVUMsbUJBQXhILEM7O2tEQUNGLENBQUM7QUFBQTtBQUFBLHNDQUFVSCxnQkFBWCxFQUE2QjtBQUFBO0FBQUEsc0NBQVVDLHNCQUF2QyxFQUErRDtBQUFBO0FBQUEsc0NBQVVDLGNBQXpFLEM7Ozs7O2VBQzNCRSxLLEdBQUEsZUFBTUMsR0FBTixFQUF1QjtBQUNuQkMsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNILFM7O2VBQ0RDLEcsR0FBQSxhQUFJSCxHQUFKLEVBQXFCLENBQ3BCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9Db21tb24vR2FtZS9HYW1lQ29udHJvbGxlcic7XG5pbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL0NvbW1vbi9HYW1lL015Q29tcG9uZW50JztcbmltcG9ydCB7IElTdGF0ZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvSVN0YXRlJztcbmltcG9ydCB7IFNNTmFtZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU01NYW5nZXInO1xuaW1wb3J0IHsgU3RhdGVNYWNoaW5lIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZU1hY2hpbmUnO1xuaW1wb3J0IHsgU3RhdGVUeXBlIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZVR5cGUnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ01haW5TY2VuZVN0YXJ0U3RhdGUnKVxuZXhwb3J0IGNsYXNzIE1haW5TY2VuZVN0YXJ0U3RhdGUgIGltcGxlbWVudHMgSVN0YXRlIHtcbiAgICBzdGF0ZU1hY2hpbmVOYW1lOiBzdHJpbmcgPSBTTU5hbWUuR2FtZVN0YXRlTWFjaGluZTtcbiAgICBzdGF0ZU5hbWU6IHN0cmluZyA9IFN0YXRlVHlwZS5NYWluU2NlbmVTdGFydFN0YXRlO1xuICAgIGNhbkZyb21TdGF0ZU5hbWU6IHN0cmluZ1tdID0gW1N0YXRlVHlwZS5Mb2FkU3RhdGUsIFN0YXRlVHlwZS5DaG9vc2VMZXZlbFN0YXRlLCBTdGF0ZVR5cGUuQ2hvb3NlRW5kbGVzc01vZGVTdGF0ZSwgU3RhdGVUeXBlLlNob3BQb3B1cFN0YXRlLCBTdGF0ZVR5cGUuR2FtZVNldHRsZW1lbnRTdGF0ZV07XG4gICAgY2FuVG9TdGF0ZU5hbWU6IHN0cmluZ1tdID0gW1N0YXRlVHlwZS5DaG9vc2VMZXZlbFN0YXRlLCBTdGF0ZVR5cGUuQ2hvb3NlRW5kbGVzc01vZGVTdGF0ZSwgU3RhdGVUeXBlLlNob3BQb3B1cFN0YXRlXTtcbiAgICBTdGFydChhcmc/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLlm57liLBIb21l5Zy65pmvXCIpO1xuICAgIH1cbiAgICBFbmQoYXJnPzogYW55KTogdm9pZCB7XG4gICAgfVxuXG59XG4iXX0=