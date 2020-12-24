System.register(["cce.code-quality.cr", "cc", "../../Common/Popup/Popup.js", "../../Common/StateMachine/StateMachine.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, director, Popup, StateMachine, StateType, _dec, _class, _crd, ccclass, property, EndlessModePopup;

  function _reportPossibleCrUseOfPopup(extras) {
    _reporterNs.report("Popup", "../../Common/Popup/Popup", _context.meta, extras);
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
      director = _cc.director;
    }, function (_CommonPopupPopupJs) {
      Popup = _CommonPopupPopupJs.Popup;
    }, function (_CommonStateMachineStateMachineJs) {
      StateMachine = _CommonStateMachineStateMachineJs.StateMachine;
    }, function (_CommonStateMachineStateTypeJs) {
      StateType = _CommonStateMachineStateTypeJs.StateType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "18322CI9TVJWYRbtYx37sd2", "EndlessModePopup", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EndlessModePopup", EndlessModePopup = (_dec = ccclass('EndlessModePopup'), _dec(_class = class EndlessModePopup extends (_crd && Popup === void 0 ? (_reportPossibleCrUseOfPopup({
        error: Error()
      }), Popup) : Popup) {
        close() {
          director.loadScene("GameScene");
          let data = {
            type: "endlessMode"
          };
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).ChangeState((_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).ChooseEndlessModeState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).StartGameState, null, data);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1BvcHVwcy9FbmRsZXNzTW9kZVBvcHVwLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJkaXJlY3RvciIsIlBvcHVwIiwiU3RhdGVNYWNoaW5lIiwiU3RhdGVUeXBlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiRW5kbGVzc01vZGVQb3B1cCIsImNsb3NlIiwibG9hZFNjZW5lIiwiZGF0YSIsInR5cGUiLCJDaGFuZ2VTdGF0ZSIsIkNob29zZUVuZGxlc3NNb2RlU3RhdGUiLCJTdGFydEdhbWVTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUE2QkMsTUFBQUEsUSxPQUFBQSxROztBQUM3QkMsTUFBQUEsSyx1QkFBQUEsSzs7QUFDQUMsTUFBQUEsWSxxQ0FBQUEsWTs7QUFDQUMsTUFBQUEsUyxrQ0FBQUEsUzs7Ozs7OztPQUNIO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCTixVOztrQ0FHakJPLGdCLFdBRFpGLE9BQU8sQ0FBQyxrQkFBRCxDLGdCQUFSLE1BQ2FFLGdCQURiO0FBQUE7QUFBQSwwQkFDNEM7QUFDeENDLFFBQUFBLEtBQUssR0FBRztBQUNKUCxVQUFBQSxRQUFRLENBQUNRLFNBQVQsQ0FBbUIsV0FBbkI7QUFDQSxjQUFJQyxJQUFJLEdBQUc7QUFDUEMsWUFBQUEsSUFBSSxFQUFFO0FBREMsV0FBWDtBQUdBO0FBQUE7QUFBQSw0Q0FBYUMsV0FBYixDQUF5QjtBQUFBO0FBQUEsc0NBQVVDLHNCQUFuQyxFQUEyRDtBQUFBO0FBQUEsc0NBQVVDLGNBQXJFLEVBQXFGLElBQXJGLEVBQTJGSixJQUEzRjtBQUNIOztBQVB1QyxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBkaXJlY3RvciB9IGZyb20gJ2NjJztcbmltcG9ydCB7IFBvcHVwIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1BvcHVwL1BvcHVwJztcbmltcG9ydCB7IFN0YXRlTWFjaGluZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVNYWNoaW5lJztcbmltcG9ydCB7IFN0YXRlVHlwZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVUeXBlJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdFbmRsZXNzTW9kZVBvcHVwJylcbmV4cG9ydCBjbGFzcyBFbmRsZXNzTW9kZVBvcHVwIGV4dGVuZHMgUG9wdXAge1xuICAgIGNsb3NlKCkge1xuICAgICAgICBkaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lU2NlbmVcIik7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgdHlwZTogXCJlbmRsZXNzTW9kZVwiXG4gICAgICAgIH1cbiAgICAgICAgU3RhdGVNYWNoaW5lLkNoYW5nZVN0YXRlKFN0YXRlVHlwZS5DaG9vc2VFbmRsZXNzTW9kZVN0YXRlLCBTdGF0ZVR5cGUuU3RhcnRHYW1lU3RhdGUsIG51bGwsIGRhdGEpXG4gICAgfVxufVxuIl19