System.register(["cce.code-quality.cr", "cc", "../../Common/Game/MyComponent.js", "../../Common/StateMachine/SMManger.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, MyComponent, SMManger, SMName, StateType, _dec, _class, _crd, ccclass, property, MainSceneManager;

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("MainSceneManager", MainSceneManager = (_dec = ccclass('MainSceneManager'), _dec(_class = class MainSceneManager extends (_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent) {
        Init() {
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
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL01haW5TY2VuZS9NYWluU2NlbmVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJNeUNvbXBvbmVudCIsIlNNTWFuZ2VyIiwiU01OYW1lIiwiU3RhdGVUeXBlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTWFpblNjZW5lTWFuYWdlciIsIkluaXQiLCJHZXRTdGF0ZU1hY2hpbmUiLCJHYW1lU3RhdGVNYWNoaW5lIiwiQ2hhbmdlU3RhdGUiLCJMb2FkU3RhdGUiLCJNYWluU2NlbmVTdGFydFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7QUFDQUMsTUFBQUEsVyw0QkFBQUEsVzs7QUFFQUMsTUFBQUEsUSxpQ0FBQUEsUTtBQUFVQyxNQUFBQSxNLGlDQUFBQSxNOztBQUVWQyxNQUFBQSxTLGtDQUFBQSxTOzs7Ozs7O09BQ0g7QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE8sR0FBd0JOLFU7O2tDQUdqQk8sZ0IsV0FEWkYsT0FBTyxDQUFDLGtCQUFELEMsZ0JBQVIsTUFDYUUsZ0JBRGI7QUFBQTtBQUFBLHNDQUNrRDtBQUM5Q0MsUUFBQUEsSUFBSSxHQUFHO0FBQ0g7QUFBQTtBQUFBLG9DQUFTQyxlQUFULENBQXlCO0FBQUE7QUFBQSxnQ0FBT0MsZ0JBQWhDLEVBQWtEQyxXQUFsRCxDQUE4RDtBQUFBO0FBQUEsc0NBQVVDLFNBQXhFLEVBQW1GO0FBQUE7QUFBQSxzQ0FBVUMsbUJBQTdGLEVBREcsQ0FFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7O0FBZDZDLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIGRpcmVjdG9yIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9Db21tb24vR2FtZS9NeUNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb3B1cE1hbmFnZXIgfSBmcm9tICcuLi8uLi9Db21tb24vUG9wdXAvUG9wdXBNYW5hZ2VyJztcbmltcG9ydCB7IFNNTWFuZ2VyLCBTTU5hbWUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1NNTWFuZ2VyJztcbmltcG9ydCB7IFN0YXRlTWFjaGluZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVNYWNoaW5lJztcbmltcG9ydCB7IFN0YXRlVHlwZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVUeXBlJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdNYWluU2NlbmVNYW5hZ2VyJylcbmV4cG9ydCBjbGFzcyBNYWluU2NlbmVNYW5hZ2VyIGV4dGVuZHMgTXlDb21wb25lbnQge1xuICAgIEluaXQoKSB7XG4gICAgICAgIFNNTWFuZ2VyLkdldFN0YXRlTWFjaGluZShTTU5hbWUuR2FtZVN0YXRlTWFjaGluZSkuQ2hhbmdlU3RhdGUoU3RhdGVUeXBlLkxvYWRTdGF0ZSwgU3RhdGVUeXBlLk1haW5TY2VuZVN0YXJ0U3RhdGUpO1xuICAgICAgICAvLyBQb3B1cE1hbmFnZXIuSS5TaG93UG9wdXAoXCJUaXBQb3B1cFwiLCB7XG4gICAgICAgIC8vICAgICBUaXBTdHJpbmc6ICd0aXAgdGlwIHRpcCB0aXAgdGlwJyxcbiAgICAgICAgLy8gICAgIFllc0J0blN0cmluZzogJ29rJyxcbiAgICAgICAgLy8gICAgIE5vQnRuU3RyaW5nOiAnbm8nLFxuICAgICAgICAvLyAgICAgWWVzQnRuOiAoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ3llc2J1dHRvbicpO1xuICAgICAgICAvLyAgICAgIH0sXG4gICAgICAgIC8vICAgICBOb0J0bjogKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdub2J1dHRvbicpO1xuICAgICAgICAvLyAgICAgIH0sXG4gICAgICAgIC8vIH0pXG4gICAgfVxufVxuIl19