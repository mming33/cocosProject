System.register(["cce.code-quality.cr", "cc", "../../Common/Popup/Popup.js", "../../Common/StateMachine/SMManger.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, director, Popup, SMManger, SMName, StateType, _dec, _class, _crd, ccclass, property, EndlessModePopup;

  function _reportPossibleCrUseOfPopup(extras) {
    _reporterNs.report("Popup", "../../Common/Popup/Popup", _context.meta, extras);
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
      director = _cc.director;
    }, function (_CommonPopupPopupJs) {
      Popup = _CommonPopupPopupJs.Popup;
    }, function (_CommonStateMachineSMMangerJs) {
      SMManger = _CommonStateMachineSMMangerJs.SMManger;
      SMName = _CommonStateMachineSMMangerJs.SMName;
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
          (_crd && SMManger === void 0 ? (_reportPossibleCrUseOfSMManger({
            error: Error()
          }), SMManger) : SMManger).GetStateMachine((_crd && SMName === void 0 ? (_reportPossibleCrUseOfSMName({
            error: Error()
          }), SMName) : SMName).GameStateMachine).ChangeState((_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1BvcHVwcy9FbmRsZXNzTW9kZVBvcHVwLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJkaXJlY3RvciIsIlBvcHVwIiwiU01NYW5nZXIiLCJTTU5hbWUiLCJTdGF0ZVR5cGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFbmRsZXNzTW9kZVBvcHVwIiwiY2xvc2UiLCJsb2FkU2NlbmUiLCJkYXRhIiwidHlwZSIsIkdldFN0YXRlTWFjaGluZSIsIkdhbWVTdGF0ZU1hY2hpbmUiLCJDaGFuZ2VTdGF0ZSIsIkNob29zZUVuZGxlc3NNb2RlU3RhdGUiLCJTdGFydEdhbWVTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBNkJDLE1BQUFBLFEsT0FBQUEsUTs7QUFDN0JDLE1BQUFBLEssdUJBQUFBLEs7O0FBQ0FDLE1BQUFBLFEsaUNBQUFBLFE7QUFBVUMsTUFBQUEsTSxpQ0FBQUEsTTs7QUFFVkMsTUFBQUEsUyxrQ0FBQUEsUzs7Ozs7OztPQUNIO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCUCxVOztrQ0FHakJRLGdCLFdBRFpGLE9BQU8sQ0FBQyxrQkFBRCxDLGdCQUFSLE1BQ2FFLGdCQURiO0FBQUE7QUFBQSwwQkFDNEM7QUFDeENDLFFBQUFBLEtBQUssR0FBRztBQUNKUixVQUFBQSxRQUFRLENBQUNTLFNBQVQsQ0FBbUIsV0FBbkI7QUFDQSxjQUFJQyxJQUFJLEdBQUc7QUFDUEMsWUFBQUEsSUFBSSxFQUFFO0FBREMsV0FBWDtBQUdBO0FBQUE7QUFBQSxvQ0FBU0MsZUFBVCxDQUF5QjtBQUFBO0FBQUEsZ0NBQU9DLGdCQUFoQyxFQUFrREMsV0FBbEQsQ0FBOEQ7QUFBQTtBQUFBLHNDQUFVQyxzQkFBeEUsRUFBZ0c7QUFBQTtBQUFBLHNDQUFVQyxjQUExRyxFQUEwSCxJQUExSCxFQUFnSU4sSUFBaEk7QUFDSDs7QUFQdUMsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgZGlyZWN0b3IgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBQb3B1cCB9IGZyb20gJy4uLy4uL0NvbW1vbi9Qb3B1cC9Qb3B1cCc7XG5pbXBvcnQgeyBTTU1hbmdlciwgU01OYW1lIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TTU1hbmdlcic7XG5pbXBvcnQgeyBTdGF0ZU1hY2hpbmUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1N0YXRlTWFjaGluZSc7XG5pbXBvcnQgeyBTdGF0ZVR5cGUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1N0YXRlVHlwZSc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnRW5kbGVzc01vZGVQb3B1cCcpXG5leHBvcnQgY2xhc3MgRW5kbGVzc01vZGVQb3B1cCBleHRlbmRzIFBvcHVwIHtcbiAgICBjbG9zZSgpIHtcbiAgICAgICAgZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZVNjZW5lXCIpO1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIHR5cGU6IFwiZW5kbGVzc01vZGVcIlxuICAgICAgICB9XG4gICAgICAgIFNNTWFuZ2VyLkdldFN0YXRlTWFjaGluZShTTU5hbWUuR2FtZVN0YXRlTWFjaGluZSkuQ2hhbmdlU3RhdGUoU3RhdGVUeXBlLkNob29zZUVuZGxlc3NNb2RlU3RhdGUsIFN0YXRlVHlwZS5TdGFydEdhbWVTdGF0ZSwgbnVsbCwgZGF0YSk7XG4gICAgfVxufVxuIl19