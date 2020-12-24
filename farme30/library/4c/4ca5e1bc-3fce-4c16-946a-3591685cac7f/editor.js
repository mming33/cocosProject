System.register(["cce.code-quality.cr", "cc", "../../Common/Game/MyComponent.js", "../../Common/Popup/PopupManager.js", "../../Common/StateMachine/StateMachine.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, MyComponent, PopupManager, StateMachine, StateType, _dec, _class, _temp, _crd, ccclass, property, ChooseEndlessModeState;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfMyComponent(extras) {
    _reporterNs.report("MyComponent", "../../Common/Game/MyComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopupManager(extras) {
    _reporterNs.report("PopupManager", "../../Common/Popup/PopupManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../../Common/StateMachine/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../../Common/StateMachine/StateType", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_CommonGameMyComponentJs) {
      MyComponent = _CommonGameMyComponentJs.MyComponent;
    }, function (_CommonPopupPopupManagerJs) {
      PopupManager = _CommonPopupPopupManagerJs.PopupManager;
    }, function (_CommonStateMachineStateMachineJs) {
      StateMachine = _CommonStateMachineStateMachineJs.StateMachine;
    }, function (_CommonStateMachineStateTypeJs) {
      StateType = _CommonStateMachineStateTypeJs.StateType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4ca5eG8P85MFpRqNZFoXKx/", "ChooseEndlessModeState", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ChooseEndlessModeState", ChooseEndlessModeState = (_dec = ccclass('ChooseEndlessModeState'), _dec(_class = (_temp = class ChooseEndlessModeState extends (_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "stateName", (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).ChooseEndlessModeState);

          _defineProperty(this, "canFromStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).MainSceneStartState]);

          _defineProperty(this, "canToStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).MainSceneStartState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).StartGameState]);
        }

        onLoad() {
          this.addSelf2StateMap();
        }

        Start(arg) {
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).I.ShowPopup("EndlessModePopup");
        }

        End(arg) {
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).I.ClosePopup();
        }

        addSelf2StateMap() {
          console.log("注册状态成功，name: ", this.stateName);
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).AddState(this.stateName, this.node.getComponent(ChooseEndlessModeState));
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL0Nob29zZUVuZGxlc3NNb2RlU3RhdGUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIk15Q29tcG9uZW50IiwiUG9wdXBNYW5hZ2VyIiwiU3RhdGVNYWNoaW5lIiwiU3RhdGVUeXBlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQ2hvb3NlRW5kbGVzc01vZGVTdGF0ZSIsIk1haW5TY2VuZVN0YXJ0U3RhdGUiLCJTdGFydEdhbWVTdGF0ZSIsIm9uTG9hZCIsImFkZFNlbGYyU3RhdGVNYXAiLCJTdGFydCIsImFyZyIsIkkiLCJTaG93UG9wdXAiLCJFbmQiLCJDbG9zZVBvcHVwIiwiY29uc29sZSIsImxvZyIsInN0YXRlTmFtZSIsIkFkZFN0YXRlIiwibm9kZSIsImdldENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9TQSxNQUFBQSxVLE9BQUFBLFU7O0FBQ0FDLE1BQUFBLFcsNEJBQUFBLFc7O0FBQ0FDLE1BQUFBLFksOEJBQUFBLFk7O0FBRUFDLE1BQUFBLFkscUNBQUFBLFk7O0FBQ0FDLE1BQUFBLFMsa0NBQUFBLFM7Ozs7Ozs7T0FHSDtBQUFFQyxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsTyxHQUF3Qk4sVTs7d0NBR2pCTyxzQixXQURaRixPQUFPLENBQUMsd0JBQUQsQyx5QkFBUixNQUNhRSxzQkFEYjtBQUFBO0FBQUEsc0NBQzBFO0FBQUE7QUFBQTs7QUFBQSw2Q0FDbEQ7QUFBQTtBQUFBLHNDQUFVQSxzQkFEd0M7O0FBQUEsb0RBRXpDLENBQUM7QUFBQTtBQUFBLHNDQUFVQyxtQkFBWCxDQUZ5Qzs7QUFBQSxrREFHM0MsQ0FBQztBQUFBO0FBQUEsc0NBQVVBLG1CQUFYLEVBQWdDO0FBQUE7QUFBQSxzQ0FBVUMsY0FBMUMsQ0FIMkM7QUFBQTs7QUFLdEVDLFFBQUFBLE1BQU0sR0FBRztBQUNMLGVBQUtDLGdCQUFMO0FBQ0g7O0FBRURDLFFBQUFBLEtBQUssQ0FBQ0MsR0FBRCxFQUFrQjtBQUNuQjtBQUFBO0FBQUEsNENBQWFDLENBQWIsQ0FBZUMsU0FBZixDQUF5QixrQkFBekI7QUFDSDs7QUFDREMsUUFBQUEsR0FBRyxDQUFDSCxHQUFELEVBQWtCO0FBQ2pCO0FBQUE7QUFBQSw0Q0FBYUMsQ0FBYixDQUFlRyxVQUFmO0FBQ0g7O0FBQ0ROLFFBQUFBLGdCQUFnQixHQUFTO0FBQ3JCTyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCLEtBQUtDLFNBQWxDO0FBQ0E7QUFBQTtBQUFBLDRDQUFhQyxRQUFiLENBQXNCLEtBQUtELFNBQTNCLEVBQXNDLEtBQUtFLElBQUwsQ0FBVUMsWUFBVixDQUF1QmhCLHNCQUF2QixDQUF0QztBQUNIOztBQWxCcUUsTyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL0NvbW1vbi9HYW1lL015Q29tcG9uZW50JztcbmltcG9ydCB7IFBvcHVwTWFuYWdlciB9IGZyb20gJy4uLy4uL0NvbW1vbi9Qb3B1cC9Qb3B1cE1hbmFnZXInO1xuaW1wb3J0IHsgSVN0YXRlIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9JU3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVNYWNoaW5lIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZU1hY2hpbmUnO1xuaW1wb3J0IHsgU3RhdGVUeXBlIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZVR5cGUnO1xuaW1wb3J0IHsgU3RhcnRHYW1lU3RhdGUgfSBmcm9tICcuL1N0YXJ0R2FtZVN0YXRlJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0Nob29zZUVuZGxlc3NNb2RlU3RhdGUnKVxuZXhwb3J0IGNsYXNzIENob29zZUVuZGxlc3NNb2RlU3RhdGUgZXh0ZW5kcyBNeUNvbXBvbmVudCBpbXBsZW1lbnRzIElTdGF0ZSB7XG4gICAgc3RhdGVOYW1lOiBzdHJpbmcgPSBTdGF0ZVR5cGUuQ2hvb3NlRW5kbGVzc01vZGVTdGF0ZTtcbiAgICBjYW5Gcm9tU3RhdGVOYW1lOiBzdHJpbmdbXSA9IFtTdGF0ZVR5cGUuTWFpblNjZW5lU3RhcnRTdGF0ZV07XG4gICAgY2FuVG9TdGF0ZU5hbWU6IHN0cmluZ1tdID0gW1N0YXRlVHlwZS5NYWluU2NlbmVTdGFydFN0YXRlLCBTdGF0ZVR5cGUuU3RhcnRHYW1lU3RhdGVdO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmFkZFNlbGYyU3RhdGVNYXAoKTtcbiAgICB9XG5cbiAgICBTdGFydChhcmc/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgUG9wdXBNYW5hZ2VyLkkuU2hvd1BvcHVwKFwiRW5kbGVzc01vZGVQb3B1cFwiKTtcbiAgICB9XG4gICAgRW5kKGFyZz86IGFueSk6IHZvaWQge1xuICAgICAgICBQb3B1cE1hbmFnZXIuSS5DbG9zZVBvcHVwKCk7XG4gICAgfVxuICAgIGFkZFNlbGYyU3RhdGVNYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5rOo5YaM54q25oCB5oiQ5Yqf77yMbmFtZTogXCIsIHRoaXMuc3RhdGVOYW1lKTtcbiAgICAgICAgU3RhdGVNYWNoaW5lLkFkZFN0YXRlKHRoaXMuc3RhdGVOYW1lLCB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KENob29zZUVuZGxlc3NNb2RlU3RhdGUpIGFzIENob29zZUVuZGxlc3NNb2RlU3RhdGUpXG4gICAgfVxuXG5cbn1cbiJdfQ==