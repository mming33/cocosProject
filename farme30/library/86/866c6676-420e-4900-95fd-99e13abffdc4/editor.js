System.register(["cce.code-quality.cr", "cc", "../../Common/Game/GameController.js", "../../Common/Game/MyComponent.js", "../../Common/StateMachine/StateMachine.js", "../../Common/StateMachine/StateType.js", "../Game/Door/FloorMananger.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, GameController, MyComponent, StateMachine, StateType, FloorManager, _dec, _class, _temp, _crd, ccclass, property, StartGameState;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "../../Common/Game/GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMyComponent(extras) {
    _reporterNs.report("MyComponent", "../../Common/Game/MyComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../../Common/StateMachine/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../../Common/StateMachine/StateType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFloorManager(extras) {
    _reporterNs.report("FloorManager", "../Game/Door/FloorMananger", _context.meta, extras);
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
    }, function (_CommonGameGameControllerJs) {
      GameController = _CommonGameGameControllerJs.GameController;
    }, function (_CommonGameMyComponentJs) {
      MyComponent = _CommonGameMyComponentJs.MyComponent;
    }, function (_CommonStateMachineStateMachineJs) {
      StateMachine = _CommonStateMachineStateMachineJs.StateMachine;
    }, function (_CommonStateMachineStateTypeJs) {
      StateType = _CommonStateMachineStateTypeJs.StateType;
    }, function (_GameDoorFloorManangerJs) {
      FloorManager = _GameDoorFloorManangerJs.FloorManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "866c6Z2Qg5JAJX9meE6v/3E", "StartGameState", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StartGameState", StartGameState = (_dec = ccclass('StartGameState'), _dec(_class = (_temp = class StartGameState extends (_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "stateName", (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).StartGameState);

          _defineProperty(this, "canFromStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).ChooseLevelState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).ChooseEndlessModeState]);

          _defineProperty(this, "canToStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).GamingState]);

          _defineProperty(this, "gameType", "level");

          _defineProperty(this, "gameSceneData", void 0);
        }

        onLoad() {
          this.addSelf2StateMap();
        }

        Start(arg) {
          console.log(this.stateName, "Start");
          console.log(arg);
          this.gameType = arg.type;
          let self = this;

          if (this.gameType == "level") {
            console.log("arg.data", arg.data);
            this.schedule(function e() {
              if ((_crd && FloorManager === void 0 ? (_reportPossibleCrUseOfFloorManager({
                error: Error()
              }), FloorManager) : FloorManager).I) {
                (_crd && FloorManager === void 0 ? (_reportPossibleCrUseOfFloorManager({
                  error: Error()
                }), FloorManager) : FloorManager).I.type = self.gameType;
                (_crd && FloorManager === void 0 ? (_reportPossibleCrUseOfFloorManager({
                  error: Error()
                }), FloorManager) : FloorManager).I.CreateFloorForJson(arg.data);
                self.unschedule(e);
              }
            }, 0.1);
          } else {
            this.schedule(function e() {
              if ((_crd && FloorManager === void 0 ? (_reportPossibleCrUseOfFloorManager({
                error: Error()
              }), FloorManager) : FloorManager).I) {
                (_crd && FloorManager === void 0 ? (_reportPossibleCrUseOfFloorManager({
                  error: Error()
                }), FloorManager) : FloorManager).I.type = self.gameType;

                for (let i = 0; i < 25; i++) {
                  (_crd && FloorManager === void 0 ? (_reportPossibleCrUseOfFloorManager({
                    error: Error()
                  }), FloorManager) : FloorManager).I.CreateFloorForRandom();
                }

                self.unschedule(e);
              }
            }, 0.1);
          }

          this.scheduleOnce(() => {
            (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).isGameStop = false;
            (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
              error: Error()
            }), StateMachine) : StateMachine).ChangeState((_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
              error: Error()
            }), StateType) : StateType).StartGameState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
              error: Error()
            }), StateType) : StateType).GamingState);
            (_crd && FloorManager === void 0 ? (_reportPossibleCrUseOfFloorManager({
              error: Error()
            }), FloorManager) : FloorManager).I.startMove();
          }, 3);
        }

        End(arg) {
          console.log(this.stateName, "End");
        }

        addSelf2StateMap() {
          console.log("注册状态成功，name: ", this.stateName);
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).AddState(this.stateName, this.node.getComponent(StartGameState));
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL1N0YXJ0R2FtZVN0YXRlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJHYW1lQ29udHJvbGxlciIsIk15Q29tcG9uZW50IiwiU3RhdGVNYWNoaW5lIiwiU3RhdGVUeXBlIiwiRmxvb3JNYW5hZ2VyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiU3RhcnRHYW1lU3RhdGUiLCJDaG9vc2VMZXZlbFN0YXRlIiwiQ2hvb3NlRW5kbGVzc01vZGVTdGF0ZSIsIkdhbWluZ1N0YXRlIiwib25Mb2FkIiwiYWRkU2VsZjJTdGF0ZU1hcCIsIlN0YXJ0IiwiYXJnIiwiY29uc29sZSIsImxvZyIsInN0YXRlTmFtZSIsImdhbWVUeXBlIiwidHlwZSIsInNlbGYiLCJkYXRhIiwic2NoZWR1bGUiLCJlIiwiSSIsIkNyZWF0ZUZsb29yRm9ySnNvbiIsInVuc2NoZWR1bGUiLCJpIiwiQ3JlYXRlRmxvb3JGb3JSYW5kb20iLCJzY2hlZHVsZU9uY2UiLCJpc0dhbWVTdG9wIiwiQ2hhbmdlU3RhdGUiLCJzdGFydE1vdmUiLCJFbmQiLCJBZGRTdGF0ZSIsIm5vZGUiLCJnZXRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7QUFDQUMsTUFBQUEsYywrQkFBQUEsYzs7QUFDQUMsTUFBQUEsVyw0QkFBQUEsVzs7QUFHQUMsTUFBQUEsWSxxQ0FBQUEsWTs7QUFDQUMsTUFBQUEsUyxrQ0FBQUEsUzs7QUFDQUMsTUFBQUEsWSw0QkFBQUEsWTs7Ozs7OztPQUNIO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCUCxVOztnQ0FFakJRLGMsV0FEWkYsT0FBTyxDQUFDLGdCQUFELEMseUJBQVIsTUFDYUUsY0FEYjtBQUFBO0FBQUEsc0NBQ2tFO0FBQUE7QUFBQTs7QUFBQSw2Q0FDMUM7QUFBQTtBQUFBLHNDQUFVQSxjQURnQzs7QUFBQSxvREFFakMsQ0FBQztBQUFBO0FBQUEsc0NBQVVDLGdCQUFYLEVBQTZCO0FBQUE7QUFBQSxzQ0FBVUMsc0JBQXZDLENBRmlDOztBQUFBLGtEQUduQyxDQUFDO0FBQUE7QUFBQSxzQ0FBVUMsV0FBWCxDQUhtQzs7QUFBQSw0Q0FLM0MsT0FMMkM7O0FBQUE7QUFBQTs7QUFPOURDLFFBQUFBLE1BQU0sR0FBRztBQUNMLGVBQUtDLGdCQUFMO0FBQ0g7O0FBQ0RDLFFBQUFBLEtBQUssQ0FBQ0MsR0FBRCxFQUFrQjtBQUNuQkMsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsU0FBakIsRUFBNEIsT0FBNUI7QUFDQUYsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQSxlQUFLSSxRQUFMLEdBQWdCSixHQUFHLENBQUNLLElBQXBCO0FBQ0EsY0FBSUMsSUFBSSxHQUFHLElBQVg7O0FBQ0EsY0FBSSxLQUFLRixRQUFMLElBQWlCLE9BQXJCLEVBQThCO0FBQzFCSCxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRixHQUFHLENBQUNPLElBQTVCO0FBQ0EsaUJBQUtDLFFBQUwsQ0FBYyxTQUFTQyxDQUFULEdBQWE7QUFDdkIsa0JBQUk7QUFBQTtBQUFBLGdEQUFhQyxDQUFqQixFQUFvQjtBQUNoQjtBQUFBO0FBQUEsa0RBQWFBLENBQWIsQ0FBZUwsSUFBZixHQUFzQkMsSUFBSSxDQUFDRixRQUEzQjtBQUNBO0FBQUE7QUFBQSxrREFBYU0sQ0FBYixDQUFlQyxrQkFBZixDQUFrQ1gsR0FBRyxDQUFDTyxJQUF0QztBQUNBRCxnQkFBQUEsSUFBSSxDQUFDTSxVQUFMLENBQWdCSCxDQUFoQjtBQUNIO0FBQ0osYUFORCxFQU1HLEdBTkg7QUFPSCxXQVRELE1BU087QUFDSCxpQkFBS0QsUUFBTCxDQUFjLFNBQVNDLENBQVQsR0FBYTtBQUN2QixrQkFBSTtBQUFBO0FBQUEsZ0RBQWFDLENBQWpCLEVBQW9CO0FBQ2hCO0FBQUE7QUFBQSxrREFBYUEsQ0FBYixDQUFlTCxJQUFmLEdBQXNCQyxJQUFJLENBQUNGLFFBQTNCOztBQUNBLHFCQUFLLElBQUlTLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDekI7QUFBQTtBQUFBLG9EQUFhSCxDQUFiLENBQWVJLG9CQUFmO0FBQ0g7O0FBQ0RSLGdCQUFBQSxJQUFJLENBQUNNLFVBQUwsQ0FBZ0JILENBQWhCO0FBQ0g7QUFDSixhQVJELEVBUUcsR0FSSDtBQVVIOztBQUNELGVBQUtNLFlBQUwsQ0FBa0IsTUFBTTtBQUNwQjtBQUFBO0FBQUEsa0RBQWVDLFVBQWYsR0FBNEIsS0FBNUI7QUFDQTtBQUFBO0FBQUEsOENBQWFDLFdBQWIsQ0FBeUI7QUFBQTtBQUFBLHdDQUFVeEIsY0FBbkMsRUFBbUQ7QUFBQTtBQUFBLHdDQUFVRyxXQUE3RDtBQUNBO0FBQUE7QUFBQSw4Q0FBYWMsQ0FBYixDQUFlUSxTQUFmO0FBQ0gsV0FKRCxFQUlHLENBSkg7QUFLSDs7QUFDREMsUUFBQUEsR0FBRyxDQUFDbkIsR0FBRCxFQUFrQjtBQUNqQkMsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsU0FBakIsRUFBNEIsS0FBNUI7QUFDSDs7QUFDREwsUUFBQUEsZ0JBQWdCLEdBQVM7QUFDckJHLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkIsS0FBS0MsU0FBbEM7QUFDQTtBQUFBO0FBQUEsNENBQWFpQixRQUFiLENBQXNCLEtBQUtqQixTQUEzQixFQUFzQyxLQUFLa0IsSUFBTCxDQUFVQyxZQUFWLENBQXVCN0IsY0FBdkIsQ0FBdEM7QUFDSDs7QUFoRDZELE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4uLy4uL0NvbW1vbi9HYW1lL0dhbWVDb250cm9sbGVyJztcbmltcG9ydCB7IE15Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vQ29tbW9uL0dhbWUvTXlDb21wb25lbnQnO1xuaW1wb3J0IHsgTG9hZFN0YXRlIH0gZnJvbSAnLi4vLi4vQ29tbW9uL0xvYWQvTG9hZFN0YXRlJztcbmltcG9ydCB7IElTdGF0ZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvSVN0YXRlJztcbmltcG9ydCB7IFN0YXRlTWFjaGluZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVNYWNoaW5lJztcbmltcG9ydCB7IFN0YXRlVHlwZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVUeXBlJztcbmltcG9ydCB7IEZsb29yTWFuYWdlciB9IGZyb20gJy4uL0dhbWUvRG9vci9GbG9vck1hbmFuZ2VyJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5AY2NjbGFzcygnU3RhcnRHYW1lU3RhdGUnKVxuZXhwb3J0IGNsYXNzIFN0YXJ0R2FtZVN0YXRlIGV4dGVuZHMgTXlDb21wb25lbnQgaW1wbGVtZW50cyBJU3RhdGUge1xuICAgIHN0YXRlTmFtZTogc3RyaW5nID0gU3RhdGVUeXBlLlN0YXJ0R2FtZVN0YXRlO1xuICAgIGNhbkZyb21TdGF0ZU5hbWU6IHN0cmluZ1tdID0gW1N0YXRlVHlwZS5DaG9vc2VMZXZlbFN0YXRlLCBTdGF0ZVR5cGUuQ2hvb3NlRW5kbGVzc01vZGVTdGF0ZV07XG4gICAgY2FuVG9TdGF0ZU5hbWU6IHN0cmluZ1tdID0gW1N0YXRlVHlwZS5HYW1pbmdTdGF0ZV07XG5cbiAgICBnYW1lVHlwZTogc3RyaW5nID0gXCJsZXZlbFwiO1xuICAgIGdhbWVTY2VuZURhdGE6IGFueTtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuYWRkU2VsZjJTdGF0ZU1hcCgpO1xuICAgIH1cbiAgICBTdGFydChhcmc/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZU5hbWUsIFwiU3RhcnRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGFyZyk7XG4gICAgICAgIHRoaXMuZ2FtZVR5cGUgPSBhcmcudHlwZVxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmdhbWVUeXBlID09IFwibGV2ZWxcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhcmcuZGF0YVwiLCBhcmcuZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKEZsb29yTWFuYWdlci5JKSB7XG4gICAgICAgICAgICAgICAgICAgIEZsb29yTWFuYWdlci5JLnR5cGUgPSBzZWxmLmdhbWVUeXBlO1xuICAgICAgICAgICAgICAgICAgICBGbG9vck1hbmFnZXIuSS5DcmVhdGVGbG9vckZvckpzb24oYXJnLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnVuc2NoZWR1bGUoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMC4xKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbiBlKCkge1xuICAgICAgICAgICAgICAgIGlmIChGbG9vck1hbmFnZXIuSSkge1xuICAgICAgICAgICAgICAgICAgICBGbG9vck1hbmFnZXIuSS50eXBlID0gc2VsZi5nYW1lVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBGbG9vck1hbmFnZXIuSS5DcmVhdGVGbG9vckZvclJhbmRvbSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudW5zY2hlZHVsZShlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAwLjEpXG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBHYW1lQ29udHJvbGxlci5pc0dhbWVTdG9wID0gZmFsc2U7XG4gICAgICAgICAgICBTdGF0ZU1hY2hpbmUuQ2hhbmdlU3RhdGUoU3RhdGVUeXBlLlN0YXJ0R2FtZVN0YXRlLCBTdGF0ZVR5cGUuR2FtaW5nU3RhdGUpO1xuICAgICAgICAgICAgRmxvb3JNYW5hZ2VyLkkuc3RhcnRNb3ZlKCk7XG4gICAgICAgIH0sIDMpO1xuICAgIH1cbiAgICBFbmQoYXJnPzogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGVOYW1lLCBcIkVuZFwiKTtcbiAgICB9XG4gICAgYWRkU2VsZjJTdGF0ZU1hcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLms6jlhoznirbmgIHmiJDlip/vvIxuYW1lOiBcIiwgdGhpcy5zdGF0ZU5hbWUpO1xuICAgICAgICBTdGF0ZU1hY2hpbmUuQWRkU3RhdGUodGhpcy5zdGF0ZU5hbWUsIHRoaXMubm9kZS5nZXRDb21wb25lbnQoU3RhcnRHYW1lU3RhdGUpIGFzIFN0YXJ0R2FtZVN0YXRlKVxuICAgIH1cblxufSJdfQ==