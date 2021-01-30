System.register(["cce.code-quality.cr", "cc", "../../Common/Game/MyComponent.js", "../../Common/StateMachine/SMManger.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, MyComponent, SMManger, SMName, StateType, _dec, _class, _crd, ccclass, property, MainSceneManager;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _reportPossibleCrUseOfMyComponent(extras) {
    _reporterNs.report("MyComponent", "../../Common/Game/MyComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSMManger(extras) {
    _reporterNs.report("SMManger", "../../Common/StateMachine/SMManger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSMName(extras) {
    _reporterNs.report("SMName", "../../Common/StateMachine/SMManger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../../Common/StateMachine/StateType", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_CommonGameMyComponentJs) {
      MyComponent = _CommonGameMyComponentJs.MyComponent;
    }, function (_CommonStateMachineSMMangerJs) {
      SMManger = _CommonStateMachineSMMangerJs.SMManger;
      SMName = _CommonStateMachineSMMangerJs.SMName;
    }, function (_CommonStateMachineStateTypeJs) {
      StateType = _CommonStateMachineStateTypeJs.StateType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c94eaq+IqFE4q5MPBVQzd8r", "MainSceneManager", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MainSceneManager", MainSceneManager = (_dec = ccclass('MainSceneManager'), _dec(_class = /*#__PURE__*/function (_ref) {
        _inheritsLoose(MainSceneManager, _ref);

        function MainSceneManager() {
          return _ref.apply(this, arguments) || this;
        }

        var _proto = MainSceneManager.prototype;

        _proto.Init = function Init() {
          (_crd && SMManger === void 0 ? (_reportPossibleCrUseOfSMManger({
            error: Error()
          }), SMManger) : SMManger).GetStateMachine((_crd && SMName === void 0 ? (_reportPossibleCrUseOfSMName({
            error: Error()
          }), SMName) : SMName).GameStateMachine).ChangeState((_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).LoadState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).MainSceneStartState); // PopupManager.I.ShowPopup("TipPopup", {
          //     TipString: 'tip tip tip tip tip',
          //     YesBtnString: 'ok',
          //     NoBtnString: 'no',
          //     YesBtn: () => {
          //         console.log('yesbutton');
          //      },
          //     NoBtn: () => {
          //         console.log('nobutton');
          //      },
          // })
        };

        return MainSceneManager;
      }(_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL01haW5TY2VuZS9NYWluU2NlbmVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJNeUNvbXBvbmVudCIsIlNNTWFuZ2VyIiwiU01OYW1lIiwiU3RhdGVUeXBlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTWFpblNjZW5lTWFuYWdlciIsIkluaXQiLCJHZXRTdGF0ZU1hY2hpbmUiLCJHYW1lU3RhdGVNYWNoaW5lIiwiQ2hhbmdlU3RhdGUiLCJMb2FkU3RhdGUiLCJNYWluU2NlbmVTdGFydFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOztBQUNBQyxNQUFBQSxXLDRCQUFBQSxXOztBQUVBQyxNQUFBQSxRLGlDQUFBQSxRO0FBQVVDLE1BQUFBLE0saUNBQUFBLE07O0FBRVZDLE1BQUFBLFMsa0NBQUFBLFM7Ozs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQkwsVSxDQUF0QkssTztBQUFTQyxNQUFBQSxRLEdBQWFOLFUsQ0FBYk0sUTs7a0NBR0pDLGdCLFdBRFpGLE9BQU8sQ0FBQyxrQkFBRCxDOzs7Ozs7Ozs7ZUFFSkcsSSxHQUFBLGdCQUFPO0FBQ0g7QUFBQTtBQUFBLG9DQUFTQyxlQUFULENBQXlCO0FBQUE7QUFBQSxnQ0FBT0MsZ0JBQWhDLEVBQWtEQyxXQUFsRCxDQUE4RDtBQUFBO0FBQUEsc0NBQVVDLFNBQXhFLEVBQW1GO0FBQUE7QUFBQSxzQ0FBVUMsbUJBQTdGLEVBREcsQ0FFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgZGlyZWN0b3IgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL0NvbW1vbi9HYW1lL015Q29tcG9uZW50JztcbmltcG9ydCB7IFBvcHVwTWFuYWdlciB9IGZyb20gJy4uLy4uL0NvbW1vbi9Qb3B1cC9Qb3B1cE1hbmFnZXInO1xuaW1wb3J0IHsgU01NYW5nZXIsIFNNTmFtZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU01NYW5nZXInO1xuaW1wb3J0IHsgU3RhdGVNYWNoaW5lIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZU1hY2hpbmUnO1xuaW1wb3J0IHsgU3RhdGVUeXBlIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZVR5cGUnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ01haW5TY2VuZU1hbmFnZXInKVxuZXhwb3J0IGNsYXNzIE1haW5TY2VuZU1hbmFnZXIgZXh0ZW5kcyBNeUNvbXBvbmVudCB7XG4gICAgSW5pdCgpIHtcbiAgICAgICAgU01NYW5nZXIuR2V0U3RhdGVNYWNoaW5lKFNNTmFtZS5HYW1lU3RhdGVNYWNoaW5lKS5DaGFuZ2VTdGF0ZShTdGF0ZVR5cGUuTG9hZFN0YXRlLCBTdGF0ZVR5cGUuTWFpblNjZW5lU3RhcnRTdGF0ZSk7XG4gICAgICAgIC8vIFBvcHVwTWFuYWdlci5JLlNob3dQb3B1cChcIlRpcFBvcHVwXCIsIHtcbiAgICAgICAgLy8gICAgIFRpcFN0cmluZzogJ3RpcCB0aXAgdGlwIHRpcCB0aXAnLFxuICAgICAgICAvLyAgICAgWWVzQnRuU3RyaW5nOiAnb2snLFxuICAgICAgICAvLyAgICAgTm9CdG5TdHJpbmc6ICdubycsXG4gICAgICAgIC8vICAgICBZZXNCdG46ICgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygneWVzYnV0dG9uJyk7XG4gICAgICAgIC8vICAgICAgfSxcbiAgICAgICAgLy8gICAgIE5vQnRuOiAoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ25vYnV0dG9uJyk7XG4gICAgICAgIC8vICAgICAgfSxcbiAgICAgICAgLy8gfSlcbiAgICB9XG59XG4iXX0=