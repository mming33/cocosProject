System.register(["cce.code-quality.cr", "cc", "../../Common/Game/MyComponent.js", "../../Common/StateMachine/StateMachine.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, MyComponent, StateMachine, StateType, _dec, _class, _crd, ccclass, property, MainSceneManager;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MainSceneManager", MainSceneManager = (_dec = ccclass('MainSceneManager'), _dec(_class = /*#__PURE__*/function (_ref) {
        _inheritsLoose(MainSceneManager, _ref);

        function MainSceneManager() {
          return _ref.apply(this, arguments) || this;
        }

        var _proto = MainSceneManager.prototype;

        _proto.Init = function Init() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL01haW5TY2VuZS9NYWluU2NlbmVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJNeUNvbXBvbmVudCIsIlN0YXRlTWFjaGluZSIsIlN0YXRlVHlwZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIk1haW5TY2VuZU1hbmFnZXIiLCJJbml0IiwiQ2hhbmdlU3RhdGUiLCJMb2FkU3RhdGUiLCJNYWluU2NlbmVTdGFydFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7O0FBQ0FDLE1BQUFBLFcsNEJBQUFBLFc7O0FBRUFDLE1BQUFBLFkscUNBQUFBLFk7O0FBQ0FDLE1BQUFBLFMsa0NBQUFBLFM7Ozs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQkosVSxDQUF0QkksTztBQUFTQyxNQUFBQSxRLEdBQWFMLFUsQ0FBYkssUTs7a0NBR0pDLGdCLFdBRFpGLE9BQU8sQ0FBQyxrQkFBRCxDOzs7Ozs7Ozs7ZUFFSkcsSSxHQUFBLGdCQUFPO0FBQ0g7QUFBQTtBQUFBLDRDQUFhQyxXQUFiLENBQXlCO0FBQUE7QUFBQSxzQ0FBVUMsU0FBbkMsRUFBOEM7QUFBQTtBQUFBLHNDQUFVQyxtQkFBeEQsRUFERyxDQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBkaXJlY3RvciB9IGZyb20gJ2NjJztcbmltcG9ydCB7IE15Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vQ29tbW9uL0dhbWUvTXlDb21wb25lbnQnO1xuaW1wb3J0IHsgUG9wdXBNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1BvcHVwL1BvcHVwTWFuYWdlcic7XG5pbXBvcnQgeyBTdGF0ZU1hY2hpbmUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1N0YXRlTWFjaGluZSc7XG5pbXBvcnQgeyBTdGF0ZVR5cGUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1N0YXRlVHlwZSc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnTWFpblNjZW5lTWFuYWdlcicpXG5leHBvcnQgY2xhc3MgTWFpblNjZW5lTWFuYWdlciBleHRlbmRzIE15Q29tcG9uZW50IHtcbiAgICBJbml0KCkge1xuICAgICAgICBTdGF0ZU1hY2hpbmUuQ2hhbmdlU3RhdGUoU3RhdGVUeXBlLkxvYWRTdGF0ZSwgU3RhdGVUeXBlLk1haW5TY2VuZVN0YXJ0U3RhdGUpO1xuICAgICAgICAvLyBQb3B1cE1hbmFnZXIuSS5TaG93UG9wdXAoXCJUaXBQb3B1cFwiLCB7XG4gICAgICAgIC8vICAgICBUaXBTdHJpbmc6ICd0aXAgdGlwIHRpcCB0aXAgdGlwJyxcbiAgICAgICAgLy8gICAgIFllc0J0blN0cmluZzogJ29rJyxcbiAgICAgICAgLy8gICAgIE5vQnRuU3RyaW5nOiAnbm8nLFxuICAgICAgICAvLyAgICAgWWVzQnRuOiAoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ3llc2J1dHRvbicpO1xuICAgICAgICAvLyAgICAgIH0sXG4gICAgICAgIC8vICAgICBOb0J0bjogKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdub2J1dHRvbicpO1xuICAgICAgICAvLyAgICAgIH0sXG4gICAgICAgIC8vIH0pXG4gICAgfVxufVxuIl19