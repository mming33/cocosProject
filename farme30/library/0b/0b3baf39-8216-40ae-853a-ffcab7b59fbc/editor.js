System.register(["cce.code-quality.cr", "cc", "../../Common/Game/MyComponent.js", "../../Common/StateMachine/StateMachine.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, MyComponent, StateMachine, StateType, _dec, _class, _temp, _crd, ccclass, property, DifficultyChooseState;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    }, function (_CommonStateMachineStateMachineJs) {
      StateMachine = _CommonStateMachineStateMachineJs.StateMachine;
    }, function (_CommonStateMachineStateTypeJs) {
      StateType = _CommonStateMachineStateTypeJs.StateType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0b3ba85ghZAroU6/8q3tZ+8", "DifficultyChooseState", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DifficultyChooseState", DifficultyChooseState = (_dec = ccclass('DifficultyChooseState'), _dec(_class = (_temp = class DifficultyChooseState extends (_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "stateName", (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).DifficultyChooseState);

          _defineProperty(this, "canFromStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).ChooseEndlessModeState]);

          _defineProperty(this, "canToStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).StartGameState]);
        }

        Start(arg) {
          throw new Error('Method not implemented.');
        }

        End(arg) {
          throw new Error('Method not implemented.');
        }

        addSelf2StateMap() {
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).AddState(this.stateName, this.node.getComponent(DifficultyChooseState));
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL0RpZmZpY3VsdHlDaG9vc2VTdGF0ZS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiTXlDb21wb25lbnQiLCJTdGF0ZU1hY2hpbmUiLCJTdGF0ZVR5cGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJEaWZmaWN1bHR5Q2hvb3NlU3RhdGUiLCJDaG9vc2VFbmRsZXNzTW9kZVN0YXRlIiwiU3RhcnRHYW1lU3RhdGUiLCJTdGFydCIsImFyZyIsIkVycm9yIiwiRW5kIiwiYWRkU2VsZjJTdGF0ZU1hcCIsIkFkZFN0YXRlIiwic3RhdGVOYW1lIiwibm9kZSIsImdldENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVNBLE1BQUFBLFUsT0FBQUEsVTs7QUFDQUMsTUFBQUEsVyw0QkFBQUEsVzs7QUFFQUMsTUFBQUEsWSxxQ0FBQUEsWTs7QUFDQUMsTUFBQUEsUyxrQ0FBQUEsUzs7Ozs7OztPQUNIO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCTCxVOzt1Q0FHakJNLHFCLFdBRFpGLE9BQU8sQ0FBQyx1QkFBRCxDLHlCQUFSLE1BQ2FFLHFCQURiO0FBQUE7QUFBQSxzQ0FDeUU7QUFBQTtBQUFBOztBQUFBLDZDQUNsRDtBQUFBO0FBQUEsc0NBQVVBLHFCQUR3Qzs7QUFBQSxvREFFeEMsQ0FBQztBQUFBO0FBQUEsc0NBQVVDLHNCQUFYLENBRndDOztBQUFBLGtEQUcxQyxDQUFDO0FBQUE7QUFBQSxzQ0FBVUMsY0FBWCxDQUgwQztBQUFBOztBQUlyRUMsUUFBQUEsS0FBSyxDQUFDQyxHQUFELEVBQWtCO0FBQ25CLGdCQUFNLElBQUlDLEtBQUosQ0FBVSx5QkFBVixDQUFOO0FBQ0g7O0FBQ0RDLFFBQUFBLEdBQUcsQ0FBQ0YsR0FBRCxFQUFrQjtBQUNqQixnQkFBTSxJQUFJQyxLQUFKLENBQVUseUJBQVYsQ0FBTjtBQUNIOztBQUNERSxRQUFBQSxnQkFBZ0IsR0FBUztBQUNyQjtBQUFBO0FBQUEsNENBQWFDLFFBQWIsQ0FBc0IsS0FBS0MsU0FBM0IsRUFBc0MsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCWCxxQkFBdkIsQ0FBdEM7QUFDSDs7QUFab0UsTyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL0NvbW1vbi9HYW1lL015Q29tcG9uZW50JztcbmltcG9ydCB7IElTdGF0ZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvSVN0YXRlJztcbmltcG9ydCB7IFN0YXRlTWFjaGluZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVNYWNoaW5lJztcbmltcG9ydCB7IFN0YXRlVHlwZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVUeXBlJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdEaWZmaWN1bHR5Q2hvb3NlU3RhdGUnKVxuZXhwb3J0IGNsYXNzIERpZmZpY3VsdHlDaG9vc2VTdGF0ZSBleHRlbmRzIE15Q29tcG9uZW50IGltcGxlbWVudHMgSVN0YXRlIHtcbiAgICBzdGF0ZU5hbWU6IHN0cmluZz0gU3RhdGVUeXBlLkRpZmZpY3VsdHlDaG9vc2VTdGF0ZTtcbiAgICBjYW5Gcm9tU3RhdGVOYW1lOiBzdHJpbmdbXSA9IFtTdGF0ZVR5cGUuQ2hvb3NlRW5kbGVzc01vZGVTdGF0ZV07XG4gICAgY2FuVG9TdGF0ZU5hbWU6IHN0cmluZ1tdID0gW1N0YXRlVHlwZS5TdGFydEdhbWVTdGF0ZV07XG4gICAgU3RhcnQoYXJnPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gICAgRW5kKGFyZz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIGFkZFNlbGYyU3RhdGVNYXAoKTogdm9pZCB7XG4gICAgICAgIFN0YXRlTWFjaGluZS5BZGRTdGF0ZSh0aGlzLnN0YXRlTmFtZSwgdGhpcy5ub2RlLmdldENvbXBvbmVudChEaWZmaWN1bHR5Q2hvb3NlU3RhdGUpIGFzIERpZmZpY3VsdHlDaG9vc2VTdGF0ZSlcbiAgICB9XG4gICBcbn1cbiJdfQ==