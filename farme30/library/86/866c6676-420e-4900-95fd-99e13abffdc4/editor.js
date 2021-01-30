System.register(["cce.code-quality.cr", "cc", "../../Common/Game/GameController.js", "../../Common/StateMachine/SMManger.js", "../../Common/StateMachine/StateType.js", "../Game/Door/FloorMananger.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, GameController, SMName, StateType, FloorManager, _dec, _class, _temp, _crd, ccclass, property, StartGameState;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "../../Common/Game/GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSMName(extras) {
    _reporterNs.report("SMName", "../../Common/StateMachine/SMManger", _context.meta, extras);
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
    }, function (_CommonStateMachineSMMangerJs) {
      SMName = _CommonStateMachineSMMangerJs.SMName;
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

      _export("StartGameState", StartGameState = (_dec = ccclass('StartGameState'), _dec(_class = (_temp = class StartGameState {
        constructor() {
          _defineProperty(this, "stateMachineName", (_crd && SMName === void 0 ? (_reportPossibleCrUseOfSMName({
            error: Error()
          }), SMName) : SMName).GameStateMachine);

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

        Start(arg) {
          console.log(this.stateName, "Start");
          console.log(arg);
          this.gameType = arg.type;
          let self = this;

          if (this.gameType == "level") {
            console.log("arg.data", arg.data);

            if ((_crd && FloorManager === void 0 ? (_reportPossibleCrUseOfFloorManager({
              error: Error()
            }), FloorManager) : FloorManager).I) {
              (_crd && FloorManager === void 0 ? (_reportPossibleCrUseOfFloorManager({
                error: Error()
              }), FloorManager) : FloorManager).I.type = self.gameType;
              (_crd && FloorManager === void 0 ? (_reportPossibleCrUseOfFloorManager({
                error: Error()
              }), FloorManager) : FloorManager).I.CreateFloorForJson(arg.data);
              clearTimeout();
            }
          } else {
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
            }
          }

          (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).isGameStop = false; //StateMachine.ChangeState(StateType.StartGameState, StateType.GamingState);

          (_crd && FloorManager === void 0 ? (_reportPossibleCrUseOfFloorManager({
            error: Error()
          }), FloorManager) : FloorManager).I.startMove();
        }

        End(arg) {
          console.log(this.stateName, "End");
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1N0YXRlL1N0YXJ0R2FtZVN0YXRlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJHYW1lQ29udHJvbGxlciIsIlNNTmFtZSIsIlN0YXRlVHlwZSIsIkZsb29yTWFuYWdlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlN0YXJ0R2FtZVN0YXRlIiwiR2FtZVN0YXRlTWFjaGluZSIsIkNob29zZUxldmVsU3RhdGUiLCJDaG9vc2VFbmRsZXNzTW9kZVN0YXRlIiwiR2FtaW5nU3RhdGUiLCJTdGFydCIsImFyZyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZU5hbWUiLCJnYW1lVHlwZSIsInR5cGUiLCJzZWxmIiwiZGF0YSIsIkkiLCJDcmVhdGVGbG9vckZvckpzb24iLCJjbGVhclRpbWVvdXQiLCJpIiwiQ3JlYXRlRmxvb3JGb3JSYW5kb20iLCJpc0dhbWVTdG9wIiwic3RhcnRNb3ZlIiwiRW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7QUFDQUMsTUFBQUEsYywrQkFBQUEsYzs7QUFHQUMsTUFBQUEsTSxpQ0FBQUEsTTs7QUFFQUMsTUFBQUEsUyxrQ0FBQUEsUzs7QUFDQUMsTUFBQUEsWSw0QkFBQUEsWTs7Ozs7OztPQUNIO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCTixVOztnQ0FFakJPLGMsV0FEWkYsT0FBTyxDQUFDLGdCQUFELEMseUJBQVIsTUFDYUUsY0FEYixDQUM4QztBQUFBO0FBQUEsb0RBQ2Y7QUFBQTtBQUFBLGdDQUFPQyxnQkFEUTs7QUFBQSw2Q0FFdEI7QUFBQTtBQUFBLHNDQUFVRCxjQUZZOztBQUFBLG9EQUdiLENBQUM7QUFBQTtBQUFBLHNDQUFVRSxnQkFBWCxFQUE2QjtBQUFBO0FBQUEsc0NBQVVDLHNCQUF2QyxDQUhhOztBQUFBLGtEQUlmLENBQUM7QUFBQTtBQUFBLHNDQUFVQyxXQUFYLENBSmU7O0FBQUEsNENBS3ZCLE9BTHVCOztBQUFBO0FBQUE7O0FBUTFDQyxRQUFBQSxLQUFLLENBQUNDLEdBQUQsRUFBa0I7QUFDbkJDLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtDLFNBQWpCLEVBQTRCLE9BQTVCO0FBQ0FGLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0EsZUFBS0ksUUFBTCxHQUFnQkosR0FBRyxDQUFDSyxJQUFwQjtBQUNBLGNBQUlDLElBQUksR0FBRyxJQUFYOztBQUNBLGNBQUksS0FBS0YsUUFBTCxJQUFpQixPQUFyQixFQUE4QjtBQUMxQkgsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkYsR0FBRyxDQUFDTyxJQUE1Qjs7QUFDQSxnQkFBSTtBQUFBO0FBQUEsOENBQWFDLENBQWpCLEVBQW9CO0FBQ2hCO0FBQUE7QUFBQSxnREFBYUEsQ0FBYixDQUFlSCxJQUFmLEdBQXNCQyxJQUFJLENBQUNGLFFBQTNCO0FBQ0E7QUFBQTtBQUFBLGdEQUFhSSxDQUFiLENBQWVDLGtCQUFmLENBQWtDVCxHQUFHLENBQUNPLElBQXRDO0FBQ0FHLGNBQUFBLFlBQVk7QUFDZjtBQUNKLFdBUEQsTUFPTztBQUNILGdCQUFJO0FBQUE7QUFBQSw4Q0FBYUYsQ0FBakIsRUFBb0I7QUFDaEI7QUFBQTtBQUFBLGdEQUFhQSxDQUFiLENBQWVILElBQWYsR0FBc0JDLElBQUksQ0FBQ0YsUUFBM0I7O0FBQ0EsbUJBQUssSUFBSU8sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QjtBQUN6QjtBQUFBO0FBQUEsa0RBQWFILENBQWIsQ0FBZUksb0JBQWY7QUFDSDtBQUNKO0FBRUo7O0FBQ0Q7QUFBQTtBQUFBLGdEQUFlQyxVQUFmLEdBQTRCLEtBQTVCLENBckJtQixDQXNCbkI7O0FBQ0E7QUFBQTtBQUFBLDRDQUFhTCxDQUFiLENBQWVNLFNBQWY7QUFDSDs7QUFDREMsUUFBQUEsR0FBRyxDQUFDZixHQUFELEVBQWtCO0FBQ2pCQyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxTQUFqQixFQUE0QixLQUE1QjtBQUNIOztBQW5DeUMsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi4vLi4vQ29tbW9uL0dhbWUvR2FtZUNvbnRyb2xsZXInO1xuaW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9Db21tb24vR2FtZS9NeUNvbXBvbmVudCc7XG5pbXBvcnQgeyBJU3RhdGUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL0lTdGF0ZSc7XG5pbXBvcnQgeyBTTU5hbWUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1NNTWFuZ2VyJztcbmltcG9ydCB7IFN0YXRlTWFjaGluZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVNYWNoaW5lJztcbmltcG9ydCB7IFN0YXRlVHlwZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVUeXBlJztcbmltcG9ydCB7IEZsb29yTWFuYWdlciB9IGZyb20gJy4uL0dhbWUvRG9vci9GbG9vck1hbmFuZ2VyJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5AY2NjbGFzcygnU3RhcnRHYW1lU3RhdGUnKVxuZXhwb3J0IGNsYXNzIFN0YXJ0R2FtZVN0YXRlIGltcGxlbWVudHMgSVN0YXRlIHtcbiAgICBzdGF0ZU1hY2hpbmVOYW1lOiBzdHJpbmcgPSBTTU5hbWUuR2FtZVN0YXRlTWFjaGluZTtcbiAgICBzdGF0ZU5hbWU6IHN0cmluZyA9IFN0YXRlVHlwZS5TdGFydEdhbWVTdGF0ZTtcbiAgICBjYW5Gcm9tU3RhdGVOYW1lOiBzdHJpbmdbXSA9IFtTdGF0ZVR5cGUuQ2hvb3NlTGV2ZWxTdGF0ZSwgU3RhdGVUeXBlLkNob29zZUVuZGxlc3NNb2RlU3RhdGVdO1xuICAgIGNhblRvU3RhdGVOYW1lOiBzdHJpbmdbXSA9IFtTdGF0ZVR5cGUuR2FtaW5nU3RhdGVdO1xuICAgIGdhbWVUeXBlOiBzdHJpbmcgPSBcImxldmVsXCI7XG4gICAgZ2FtZVNjZW5lRGF0YTogYW55O1xuXG4gICAgU3RhcnQoYXJnPzogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGVOYW1lLCBcIlN0YXJ0XCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcmcpO1xuICAgICAgICB0aGlzLmdhbWVUeXBlID0gYXJnLnR5cGVcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5nYW1lVHlwZSA9PSBcImxldmVsXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXJnLmRhdGFcIiwgYXJnLmRhdGEpO1xuICAgICAgICAgICAgaWYgKEZsb29yTWFuYWdlci5JKSB7XG4gICAgICAgICAgICAgICAgRmxvb3JNYW5hZ2VyLkkudHlwZSA9IHNlbGYuZ2FtZVR5cGU7XG4gICAgICAgICAgICAgICAgRmxvb3JNYW5hZ2VyLkkuQ3JlYXRlRmxvb3JGb3JKc29uKGFyZy5kYXRhKTtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChGbG9vck1hbmFnZXIuSSkge1xuICAgICAgICAgICAgICAgIEZsb29yTWFuYWdlci5JLnR5cGUgPSBzZWxmLmdhbWVUeXBlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBGbG9vck1hbmFnZXIuSS5DcmVhdGVGbG9vckZvclJhbmRvbSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIEdhbWVDb250cm9sbGVyLmlzR2FtZVN0b3AgPSBmYWxzZTtcbiAgICAgICAgLy9TdGF0ZU1hY2hpbmUuQ2hhbmdlU3RhdGUoU3RhdGVUeXBlLlN0YXJ0R2FtZVN0YXRlLCBTdGF0ZVR5cGUuR2FtaW5nU3RhdGUpO1xuICAgICAgICBGbG9vck1hbmFnZXIuSS5zdGFydE1vdmUoKTtcbiAgICB9XG4gICAgRW5kKGFyZz86IGFueSk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlTmFtZSwgXCJFbmRcIik7XG4gICAgfVxuXG59Il19