System.register(["cce.code-quality.cr", "cc", "../../Common/Game/MyComponent.js", "../../Common/StateMachine/StateMachine.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, MyComponent, StateMachine, StateType, _dec, _class, _temp, _crd, ccclass, property, GameOverState;

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

      _cclegacy._RF.push({}, "66296CGP3hDVZWv93f2L0a1", "GameOverState", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameOverState", GameOverState = (_dec = ccclass('GameOverState'), _dec(_class = (_temp = class GameOverState extends (_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "stateName", (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GameOverState);

          _defineProperty(this, "canFromStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GamingState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).DeathState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GamingStopState]);

          _defineProperty(this, "canToStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GameSettlementState]);
        }

        onLoad() {
          this.addSelf2StateMap();
        }

        Start(arg) {
          throw new Error('Method not implemented.');
        }

        End(arg) {
          throw new Error('Method not implemented.');
        }

        addSelf2StateMap() {
          console.log("注册状态成功，name: ", this.stateName);
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).AddState(this.stateName, this.node.getComponent(GameOverState));
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL0dhbWVPdmVyU3RhdGUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIk15Q29tcG9uZW50IiwiU3RhdGVNYWNoaW5lIiwiU3RhdGVUeXBlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiR2FtZU92ZXJTdGF0ZSIsIkdhbWluZ1N0YXRlIiwiRGVhdGhTdGF0ZSIsIkdhbWluZ1N0b3BTdGF0ZSIsIkdhbWVTZXR0bGVtZW50U3RhdGUiLCJvbkxvYWQiLCJhZGRTZWxmMlN0YXRlTWFwIiwiU3RhcnQiLCJhcmciLCJFcnJvciIsIkVuZCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZU5hbWUiLCJBZGRTdGF0ZSIsIm5vZGUiLCJnZXRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7O0FBQ0FDLE1BQUFBLFcsNEJBQUFBLFc7O0FBRUFDLE1BQUFBLFkscUNBQUFBLFk7O0FBQ0FDLE1BQUFBLFMsa0NBQUFBLFM7Ozs7Ozs7T0FDSDtBQUFFQyxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsTyxHQUF3QkwsVTs7K0JBR2pCTSxhLFdBRFpGLE9BQU8sQ0FBQyxlQUFELEMseUJBQVIsTUFDYUUsYUFEYjtBQUFBO0FBQUEsc0NBQ2lFO0FBQUE7QUFBQTs7QUFBQSw2Q0FDekM7QUFBQTtBQUFBLHNDQUFVQSxhQUQrQjs7QUFBQSxvREFFaEMsQ0FBQztBQUFBO0FBQUEsc0NBQVVDLFdBQVgsRUFBd0I7QUFBQTtBQUFBLHNDQUFVQyxVQUFsQyxFQUE4QztBQUFBO0FBQUEsc0NBQVVDLGVBQXhELENBRmdDOztBQUFBLGtEQUdsQyxDQUFDO0FBQUE7QUFBQSxzQ0FBVUMsbUJBQVgsQ0FIa0M7QUFBQTs7QUFLN0RDLFFBQUFBLE1BQU0sR0FBRztBQUNMLGVBQUtDLGdCQUFMO0FBQ0g7O0FBRUZDLFFBQUFBLEtBQUssQ0FBQ0MsR0FBRCxFQUFrQjtBQUNsQixnQkFBTSxJQUFJQyxLQUFKLENBQVUseUJBQVYsQ0FBTjtBQUNIOztBQUNEQyxRQUFBQSxHQUFHLENBQUNGLEdBQUQsRUFBa0I7QUFDakIsZ0JBQU0sSUFBSUMsS0FBSixDQUFVLHlCQUFWLENBQU47QUFDSDs7QUFDREgsUUFBQUEsZ0JBQWdCLEdBQVM7QUFDckJLLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkIsS0FBS0MsU0FBbEM7QUFDQTtBQUFBO0FBQUEsNENBQWFDLFFBQWIsQ0FBc0IsS0FBS0QsU0FBM0IsRUFBc0MsS0FBS0UsSUFBTCxDQUFVQyxZQUFWLENBQXVCaEIsYUFBdkIsQ0FBdEM7QUFDSDs7QUFsQjRELE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL0NvbW1vbi9HYW1lL015Q29tcG9uZW50JztcbmltcG9ydCB7IElTdGF0ZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvSVN0YXRlJztcbmltcG9ydCB7IFN0YXRlTWFjaGluZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVNYWNoaW5lJztcbmltcG9ydCB7IFN0YXRlVHlwZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVUeXBlJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdHYW1lT3ZlclN0YXRlJylcbmV4cG9ydCBjbGFzcyBHYW1lT3ZlclN0YXRlIGV4dGVuZHMgTXlDb21wb25lbnQgaW1wbGVtZW50cyBJU3RhdGUge1xuICAgIHN0YXRlTmFtZTogc3RyaW5nID0gU3RhdGVUeXBlLkdhbWVPdmVyU3RhdGU7XG4gICAgY2FuRnJvbVN0YXRlTmFtZTogc3RyaW5nW10gPSBbU3RhdGVUeXBlLkdhbWluZ1N0YXRlLCBTdGF0ZVR5cGUuRGVhdGhTdGF0ZSwgU3RhdGVUeXBlLkdhbWluZ1N0b3BTdGF0ZV07XG4gICAgY2FuVG9TdGF0ZU5hbWU6IHN0cmluZ1tdID0gW1N0YXRlVHlwZS5HYW1lU2V0dGxlbWVudFN0YXRlXTtcbiAgICBcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuYWRkU2VsZjJTdGF0ZU1hcCgpO1xuICAgIH1cblxuICAgU3RhcnQoYXJnPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gICAgRW5kKGFyZz86IGFueSk6IHZvaWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICAgIGFkZFNlbGYyU3RhdGVNYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5rOo5YaM54q25oCB5oiQ5Yqf77yMbmFtZTogXCIsIHRoaXMuc3RhdGVOYW1lKTtcbiAgICAgICAgU3RhdGVNYWNoaW5lLkFkZFN0YXRlKHRoaXMuc3RhdGVOYW1lLCB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdhbWVPdmVyU3RhdGUpIGFzIEdhbWVPdmVyU3RhdGUpXG4gICAgfVxuXG59XG4iXX0=