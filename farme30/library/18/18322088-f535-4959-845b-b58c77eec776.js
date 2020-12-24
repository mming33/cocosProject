System.register(["cce.code-quality.cr", "cc", "../../Common/Popup/Popup.js", "../../Common/StateMachine/StateMachine.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, director, Popup, StateMachine, StateType, _dec, _class, _crd, ccclass, property, EndlessModePopup;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).ChangeState((_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1BvcHVwcy9FbmRsZXNzTW9kZVBvcHVwLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJkaXJlY3RvciIsIlBvcHVwIiwiU3RhdGVNYWNoaW5lIiwiU3RhdGVUeXBlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiRW5kbGVzc01vZGVQb3B1cCIsImNsb3NlIiwibG9hZFNjZW5lIiwiZGF0YSIsInR5cGUiLCJDaGFuZ2VTdGF0ZSIsIkNob29zZUVuZGxlc3NNb2RlU3RhdGUiLCJTdGFydEdhbWVTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQTZCQyxNQUFBQSxRLE9BQUFBLFE7O0FBQzdCQyxNQUFBQSxLLHVCQUFBQSxLOztBQUNBQyxNQUFBQSxZLHFDQUFBQSxZOztBQUNBQyxNQUFBQSxTLGtDQUFBQSxTOzs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JMLFUsQ0FBdEJLLE87QUFBU0MsTUFBQUEsUSxHQUFhTixVLENBQWJNLFE7O2tDQUdKQyxnQixXQURaRixPQUFPLENBQUMsa0JBQUQsQzs7Ozs7Ozs7O2VBRUpHLEssR0FBQSxpQkFBUTtBQUNKUCxVQUFBQSxRQUFRLENBQUNRLFNBQVQsQ0FBbUIsV0FBbkI7QUFDQSxjQUFJQyxJQUFJLEdBQUc7QUFDUEMsWUFBQUEsSUFBSSxFQUFFO0FBREMsV0FBWDtBQUdBO0FBQUE7QUFBQSw0Q0FBYUMsV0FBYixDQUF5QjtBQUFBO0FBQUEsc0NBQVVDLHNCQUFuQyxFQUEyRDtBQUFBO0FBQUEsc0NBQVVDLGNBQXJFLEVBQXFGLElBQXJGLEVBQTJGSixJQUEzRjtBQUNILFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIGRpcmVjdG9yIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgUG9wdXAgfSBmcm9tICcuLi8uLi9Db21tb24vUG9wdXAvUG9wdXAnO1xuaW1wb3J0IHsgU3RhdGVNYWNoaW5lIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZU1hY2hpbmUnO1xuaW1wb3J0IHsgU3RhdGVUeXBlIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZVR5cGUnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0VuZGxlc3NNb2RlUG9wdXAnKVxuZXhwb3J0IGNsYXNzIEVuZGxlc3NNb2RlUG9wdXAgZXh0ZW5kcyBQb3B1cCB7XG4gICAgY2xvc2UoKSB7XG4gICAgICAgIGRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVTY2VuZVwiKTtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICB0eXBlOiBcImVuZGxlc3NNb2RlXCJcbiAgICAgICAgfVxuICAgICAgICBTdGF0ZU1hY2hpbmUuQ2hhbmdlU3RhdGUoU3RhdGVUeXBlLkNob29zZUVuZGxlc3NNb2RlU3RhdGUsIFN0YXRlVHlwZS5TdGFydEdhbWVTdGF0ZSwgbnVsbCwgZGF0YSlcbiAgICB9XG59XG4iXX0=