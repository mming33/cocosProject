System.register(["cce.code-quality.cr", "cc", "../../Common/Popup/Popup.js", "../../Common/StateMachine/SMManger.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, director, Popup, SMManger, SMName, StateType, _dec, _class, _crd, ccclass, property, EndlessModePopup;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("EndlessModePopup", EndlessModePopup = (_dec = ccclass('EndlessModePopup'), _dec(_class = /*#__PURE__*/function (_ref) {
        _inheritsLoose(EndlessModePopup, _ref);

        function EndlessModePopup() {
          return _ref.apply(this, arguments) || this;
        }

        var _proto = EndlessModePopup.prototype;

        _proto.close = function close() {
          director.loadScene("GameScene");
          var data = {
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
        };

        return EndlessModePopup;
      }(_crd && Popup === void 0 ? (_reportPossibleCrUseOfPopup({
        error: Error()
      }), Popup) : Popup)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1BvcHVwcy9FbmRsZXNzTW9kZVBvcHVwLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJkaXJlY3RvciIsIlBvcHVwIiwiU01NYW5nZXIiLCJTTU5hbWUiLCJTdGF0ZVR5cGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFbmRsZXNzTW9kZVBvcHVwIiwiY2xvc2UiLCJsb2FkU2NlbmUiLCJkYXRhIiwidHlwZSIsIkdldFN0YXRlTWFjaGluZSIsIkdhbWVTdGF0ZU1hY2hpbmUiLCJDaGFuZ2VTdGF0ZSIsIkNob29zZUVuZGxlc3NNb2RlU3RhdGUiLCJTdGFydEdhbWVTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUE2QkMsTUFBQUEsUSxPQUFBQSxROztBQUM3QkMsTUFBQUEsSyx1QkFBQUEsSzs7QUFDQUMsTUFBQUEsUSxpQ0FBQUEsUTtBQUFVQyxNQUFBQSxNLGlDQUFBQSxNOztBQUVWQyxNQUFBQSxTLGtDQUFBQSxTOzs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JOLFUsQ0FBdEJNLE87QUFBU0MsTUFBQUEsUSxHQUFhUCxVLENBQWJPLFE7O2tDQUdKQyxnQixXQURaRixPQUFPLENBQUMsa0JBQUQsQzs7Ozs7Ozs7O2VBRUpHLEssR0FBQSxpQkFBUTtBQUNKUixVQUFBQSxRQUFRLENBQUNTLFNBQVQsQ0FBbUIsV0FBbkI7QUFDQSxjQUFJQyxJQUFJLEdBQUc7QUFDUEMsWUFBQUEsSUFBSSxFQUFFO0FBREMsV0FBWDtBQUdBO0FBQUE7QUFBQSxvQ0FBU0MsZUFBVCxDQUF5QjtBQUFBO0FBQUEsZ0NBQU9DLGdCQUFoQyxFQUFrREMsV0FBbEQsQ0FBOEQ7QUFBQTtBQUFBLHNDQUFVQyxzQkFBeEUsRUFBZ0c7QUFBQTtBQUFBLHNDQUFVQyxjQUExRyxFQUEwSCxJQUExSCxFQUFnSU4sSUFBaEk7QUFDSCxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBkaXJlY3RvciB9IGZyb20gJ2NjJztcbmltcG9ydCB7IFBvcHVwIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1BvcHVwL1BvcHVwJztcbmltcG9ydCB7IFNNTWFuZ2VyLCBTTU5hbWUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1NNTWFuZ2VyJztcbmltcG9ydCB7IFN0YXRlTWFjaGluZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVNYWNoaW5lJztcbmltcG9ydCB7IFN0YXRlVHlwZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVUeXBlJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdFbmRsZXNzTW9kZVBvcHVwJylcbmV4cG9ydCBjbGFzcyBFbmRsZXNzTW9kZVBvcHVwIGV4dGVuZHMgUG9wdXAge1xuICAgIGNsb3NlKCkge1xuICAgICAgICBkaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lU2NlbmVcIik7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgdHlwZTogXCJlbmRsZXNzTW9kZVwiXG4gICAgICAgIH1cbiAgICAgICAgU01NYW5nZXIuR2V0U3RhdGVNYWNoaW5lKFNNTmFtZS5HYW1lU3RhdGVNYWNoaW5lKS5DaGFuZ2VTdGF0ZShTdGF0ZVR5cGUuQ2hvb3NlRW5kbGVzc01vZGVTdGF0ZSwgU3RhdGVUeXBlLlN0YXJ0R2FtZVN0YXRlLCBudWxsLCBkYXRhKTtcbiAgICB9XG59XG4iXX0=