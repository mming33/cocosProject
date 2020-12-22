System.register(["cce.code-quality.cr", "cc", "../../Common/Game/MyComponent.js", "../../Common/StateMachine/StateMachine.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, MyComponent, StateMachine, StateType, _dec, _class, _crd, ccclass, property, MainSceneManager;

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
    }, function (_CommonStateMachineStateMachineJs) {
      StateMachine = _CommonStateMachineStateMachineJs.StateMachine;
    }, function (_CommonStateMachineStateTypeJs) {
      StateType = _CommonStateMachineStateTypeJs.StateType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c94eaq+IqFE4q5MPBVQzd8r", "MainSceneManager", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MainSceneManager", MainSceneManager = (_dec = ccclass('MainSceneManager'), _dec(_class = class MainSceneManager extends (_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent) {
        Init() {
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).ChangeState((_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
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
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL01haW5TY2VuZS9NYWluU2NlbmVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJNeUNvbXBvbmVudCIsIlN0YXRlTWFjaGluZSIsIlN0YXRlVHlwZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIk1haW5TY2VuZU1hbmFnZXIiLCJJbml0IiwiQ2hhbmdlU3RhdGUiLCJMb2FkU3RhdGUiLCJNYWluU2NlbmVTdGFydFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOztBQUNBQyxNQUFBQSxXLDRCQUFBQSxXOztBQUVBQyxNQUFBQSxZLHFDQUFBQSxZOztBQUNBQyxNQUFBQSxTLGtDQUFBQSxTOzs7Ozs7O09BQ0g7QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE8sR0FBd0JMLFU7O2tDQUdqQk0sZ0IsV0FEWkYsT0FBTyxDQUFDLGtCQUFELEMsZ0JBQVIsTUFDYUUsZ0JBRGI7QUFBQTtBQUFBLHNDQUNrRDtBQUM5Q0MsUUFBQUEsSUFBSSxHQUFHO0FBQ0g7QUFBQTtBQUFBLDRDQUFhQyxXQUFiLENBQXlCO0FBQUE7QUFBQSxzQ0FBVUMsU0FBbkMsRUFBOEM7QUFBQTtBQUFBLHNDQUFVQyxtQkFBeEQsRUFERyxDQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFkNkMsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgZGlyZWN0b3IgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL0NvbW1vbi9HYW1lL015Q29tcG9uZW50JztcbmltcG9ydCB7IFBvcHVwTWFuYWdlciB9IGZyb20gJy4uLy4uL0NvbW1vbi9Qb3B1cC9Qb3B1cE1hbmFnZXInO1xuaW1wb3J0IHsgU3RhdGVNYWNoaW5lIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZU1hY2hpbmUnO1xuaW1wb3J0IHsgU3RhdGVUeXBlIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZVR5cGUnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ01haW5TY2VuZU1hbmFnZXInKVxuZXhwb3J0IGNsYXNzIE1haW5TY2VuZU1hbmFnZXIgZXh0ZW5kcyBNeUNvbXBvbmVudCB7XG4gICAgSW5pdCgpIHtcbiAgICAgICAgU3RhdGVNYWNoaW5lLkNoYW5nZVN0YXRlKFN0YXRlVHlwZS5Mb2FkU3RhdGUsIFN0YXRlVHlwZS5NYWluU2NlbmVTdGFydFN0YXRlKTtcbiAgICAgICAgLy8gUG9wdXBNYW5hZ2VyLkkuU2hvd1BvcHVwKFwiVGlwUG9wdXBcIiwge1xuICAgICAgICAvLyAgICAgVGlwU3RyaW5nOiAndGlwIHRpcCB0aXAgdGlwIHRpcCcsXG4gICAgICAgIC8vICAgICBZZXNCdG5TdHJpbmc6ICdvaycsXG4gICAgICAgIC8vICAgICBOb0J0blN0cmluZzogJ25vJyxcbiAgICAgICAgLy8gICAgIFllc0J0bjogKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCd5ZXNidXR0b24nKTtcbiAgICAgICAgLy8gICAgICB9LFxuICAgICAgICAvLyAgICAgTm9CdG46ICgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnbm9idXR0b24nKTtcbiAgICAgICAgLy8gICAgICB9LFxuICAgICAgICAvLyB9KVxuICAgIH1cbn1cbiJdfQ==