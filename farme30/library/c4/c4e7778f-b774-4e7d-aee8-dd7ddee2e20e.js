System.register(["cce.code-quality.cr", "cc", "./Common/StateMachine/StateMachine.js", "./Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, StateMachine, StateType, _dec, _class, _crd, ccclass, property, TESTSCRIPT;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TESTSCRIPT", TESTSCRIPT = (_dec = ccclass('TESTSCRIPT'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TESTSCRIPT, _Component);

        function TESTSCRIPT() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = TESTSCRIPT.prototype;

        _proto.button1 = function button1() {
          // PopupManager.I.ShowPopup("LevelPopup");
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).ChangeState((_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).MainSceneStartState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).ChooseLevelState);
        };

        _proto.button2 = function button2() {
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).ChangeState((_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).MainSceneStartState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).ChooseEndlessModeState);
        };

        return TESTSCRIPT;
      }(Component)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9URVNUU0NSSVBULnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJTdGF0ZU1hY2hpbmUiLCJTdGF0ZVR5cGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJURVNUU0NSSVBUIiwiYnV0dG9uMSIsIkNoYW5nZVN0YXRlIiwiTWFpblNjZW5lU3RhcnRTdGF0ZSIsIkNob29zZUxldmVsU3RhdGUiLCJidXR0b24yIiwiQ2hvb3NlRW5kbGVzc01vZGVTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTOztBQU1aQyxNQUFBQSxZLHFDQUFBQSxZOztBQUNBQyxNQUFBQSxTLGtDQUFBQSxTOzs7Ozs7O0FBRURDLE1BQUFBLE8sR0FBc0JKLFUsQ0FBdEJJLE87QUFBU0MsTUFBQUEsUSxHQUFhTCxVLENBQWJLLFE7OzRCQUdKQyxVLFdBRFpGLE9BQU8sQ0FBQyxZQUFELEM7Ozs7Ozs7OztlQUdKRyxPLEdBQUEsbUJBQVU7QUFDTjtBQUNBO0FBQUE7QUFBQSw0Q0FBYUMsV0FBYixDQUF5QjtBQUFBO0FBQUEsc0NBQVVDLG1CQUFuQyxFQUF1RDtBQUFBO0FBQUEsc0NBQVVDLGdCQUFqRTtBQUNILFM7O2VBQ0RDLE8sR0FBQSxtQkFBVTtBQUNOO0FBQUE7QUFBQSw0Q0FBYUgsV0FBYixDQUF5QjtBQUFBO0FBQUEsc0NBQVVDLG1CQUFuQyxFQUF1RDtBQUFBO0FBQUEsc0NBQVVHLHNCQUFqRTtBQUNILFM7OztRQVIyQlgsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IEV2ZW50VHB5ZSB9IGZyb20gJy4vQ29tbW9uL0V2ZW50cy9FdmVudFRweWUnO1xuaW1wb3J0IHsgTXlFdmVudCB9IGZyb20gJy4vQ29tbW9uL0V2ZW50cy9NeUV2ZW50JztcbmltcG9ydCB7IE15TGlzdENvbW1vbiB9IGZyb20gJy4vQ29tbW9uL015TWF0aC9NeUxpc3RDb21tb24nO1xuaW1wb3J0IHsgUG9wdXBNYW5hZ2VyIH0gZnJvbSAnLi9Db21tb24vUG9wdXAvUG9wdXBNYW5hZ2VyJztcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gJy4vQ29tbW9uL1NvdW5kL1NvdW5kTWFuYWdlcic7XG5pbXBvcnQgeyBTdGF0ZU1hY2hpbmUgfSBmcm9tICcuL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVNYWNoaW5lJztcbmltcG9ydCB7IFN0YXRlVHlwZSB9IGZyb20gJy4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZVR5cGUnO1xuaW1wb3J0IHsgRGF0YVN0b3JhZ2UgfSBmcm9tICcuL0NvbW1vbi9TdG9yYWdlL0RhdGFTdG9yYWdlJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdURVNUU0NSSVBUJylcbmV4cG9ydCBjbGFzcyBURVNUU0NSSVBUIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGJ1dHRvbjEoKSB7XG4gICAgICAgIC8vIFBvcHVwTWFuYWdlci5JLlNob3dQb3B1cChcIkxldmVsUG9wdXBcIik7XG4gICAgICAgIFN0YXRlTWFjaGluZS5DaGFuZ2VTdGF0ZShTdGF0ZVR5cGUuTWFpblNjZW5lU3RhcnRTdGF0ZSxTdGF0ZVR5cGUuQ2hvb3NlTGV2ZWxTdGF0ZSk7XG4gICAgfVxuICAgIGJ1dHRvbjIoKSB7XG4gICAgICAgIFN0YXRlTWFjaGluZS5DaGFuZ2VTdGF0ZShTdGF0ZVR5cGUuTWFpblNjZW5lU3RhcnRTdGF0ZSxTdGF0ZVR5cGUuQ2hvb3NlRW5kbGVzc01vZGVTdGF0ZSk7XG4gICAgfVxuXG5cblxufVxuIl19