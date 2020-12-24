System.register(["cce.code-quality.cr", "cc", "./Common/StateMachine/StateMachine.js", "./Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, StateMachine, StateType, _dec, _class, _crd, ccclass, property, TESTSCRIPT;

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "./Common/StateMachine/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "./Common/StateMachine/StateType", _context.meta, extras);
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
      Component = _cc.Component;
    }, function (_CommonStateMachineStateMachineJs) {
      StateMachine = _CommonStateMachineStateMachineJs.StateMachine;
    }, function (_CommonStateMachineStateTypeJs) {
      StateType = _CommonStateMachineStateTypeJs.StateType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c4e77ePt3ROfa7o3X3e4uIO", "TESTSCRIPT", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TESTSCRIPT", TESTSCRIPT = (_dec = ccclass('TESTSCRIPT'), _dec(_class = class TESTSCRIPT extends Component {
        button1() {
          // PopupManager.I.ShowPopup("LevelPopup");
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).ChangeState((_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).MainSceneStartState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).ChooseLevelState);
        }

        button2() {
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).ChangeState((_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).MainSceneStartState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).ChooseEndlessModeState);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9URVNUU0NSSVBULnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJTdGF0ZU1hY2hpbmUiLCJTdGF0ZVR5cGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJURVNUU0NSSVBUIiwiYnV0dG9uMSIsIkNoYW5nZVN0YXRlIiwiTWFpblNjZW5lU3RhcnRTdGF0ZSIsIkNob29zZUxldmVsU3RhdGUiLCJidXR0b24yIiwiQ2hvb3NlRW5kbGVzc01vZGVTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUzs7QUFNWkMsTUFBQUEsWSxxQ0FBQUEsWTs7QUFDQUMsTUFBQUEsUyxrQ0FBQUEsUzs7Ozs7OztPQUVIO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCTCxVOzs0QkFHakJNLFUsV0FEWkYsT0FBTyxDQUFDLFlBQUQsQyxnQkFBUixNQUNhRSxVQURiLFNBQ2dDTCxTQURoQyxDQUMwQztBQUV0Q00sUUFBQUEsT0FBTyxHQUFHO0FBQ047QUFDQTtBQUFBO0FBQUEsNENBQWFDLFdBQWIsQ0FBeUI7QUFBQTtBQUFBLHNDQUFVQyxtQkFBbkMsRUFBdUQ7QUFBQTtBQUFBLHNDQUFVQyxnQkFBakU7QUFDSDs7QUFDREMsUUFBQUEsT0FBTyxHQUFHO0FBQ047QUFBQTtBQUFBLDRDQUFhSCxXQUFiLENBQXlCO0FBQUE7QUFBQSxzQ0FBVUMsbUJBQW5DLEVBQXVEO0FBQUE7QUFBQSxzQ0FBVUcsc0JBQWpFO0FBQ0g7O0FBUnFDLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBFdmVudFRweWUgfSBmcm9tICcuL0NvbW1vbi9FdmVudHMvRXZlbnRUcHllJztcbmltcG9ydCB7IE15RXZlbnQgfSBmcm9tICcuL0NvbW1vbi9FdmVudHMvTXlFdmVudCc7XG5pbXBvcnQgeyBNeUxpc3RDb21tb24gfSBmcm9tICcuL0NvbW1vbi9NeU1hdGgvTXlMaXN0Q29tbW9uJztcbmltcG9ydCB7IFBvcHVwTWFuYWdlciB9IGZyb20gJy4vQ29tbW9uL1BvcHVwL1BvcHVwTWFuYWdlcic7XG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tICcuL0NvbW1vbi9Tb3VuZC9Tb3VuZE1hbmFnZXInO1xuaW1wb3J0IHsgU3RhdGVNYWNoaW5lIH0gZnJvbSAnLi9Db21tb24vU3RhdGVNYWNoaW5lL1N0YXRlTWFjaGluZSc7XG5pbXBvcnQgeyBTdGF0ZVR5cGUgfSBmcm9tICcuL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVUeXBlJztcbmltcG9ydCB7IERhdGFTdG9yYWdlIH0gZnJvbSAnLi9Db21tb24vU3RvcmFnZS9EYXRhU3RvcmFnZSc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnVEVTVFNDUklQVCcpXG5leHBvcnQgY2xhc3MgVEVTVFNDUklQVCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBidXR0b24xKCkge1xuICAgICAgICAvLyBQb3B1cE1hbmFnZXIuSS5TaG93UG9wdXAoXCJMZXZlbFBvcHVwXCIpO1xuICAgICAgICBTdGF0ZU1hY2hpbmUuQ2hhbmdlU3RhdGUoU3RhdGVUeXBlLk1haW5TY2VuZVN0YXJ0U3RhdGUsU3RhdGVUeXBlLkNob29zZUxldmVsU3RhdGUpO1xuICAgIH1cbiAgICBidXR0b24yKCkge1xuICAgICAgICBTdGF0ZU1hY2hpbmUuQ2hhbmdlU3RhdGUoU3RhdGVUeXBlLk1haW5TY2VuZVN0YXJ0U3RhdGUsU3RhdGVUeXBlLkNob29zZUVuZGxlc3NNb2RlU3RhdGUpO1xuICAgIH1cblxuXG5cbn1cbiJdfQ==