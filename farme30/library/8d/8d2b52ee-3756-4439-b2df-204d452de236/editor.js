System.register(["cce.code-quality.cr", "cc", "../Game/GameData.js", "../Game/MyComponent.js", "../Popup/PopupManager.js", "../Sound/SoundManager.js", "../StateMachine/StateMachine.js", "../StateMachine/StateType.js", "./LoadManager.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, director, game, resources, GameData, MyComponent, PopupManager, SoundManager, StateMachine, StateType, LoadManager, _dec, _class, _temp, _crd, ccclass, property, LoadState;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../Game/GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMyComponent(extras) {
    _reporterNs.report("MyComponent", "../Game/MyComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopupManager(extras) {
    _reporterNs.report("PopupManager", "../Popup/PopupManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../Sound/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../StateMachine/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../StateMachine/StateType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadManager(extras) {
    _reporterNs.report("LoadManager", "./LoadManager", _context.meta, extras);
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
      Node = _cc.Node;
      director = _cc.director;
      game = _cc.game;
      resources = _cc.resources;
    }, function (_GameGameDataJs) {
      GameData = _GameGameDataJs.GameData;
    }, function (_GameMyComponentJs) {
      MyComponent = _GameMyComponentJs.MyComponent;
    }, function (_PopupPopupManagerJs) {
      PopupManager = _PopupPopupManagerJs.PopupManager;
    }, function (_SoundSoundManagerJs) {
      SoundManager = _SoundSoundManagerJs.SoundManager;
    }, function (_StateMachineStateMachineJs) {
      StateMachine = _StateMachineStateMachineJs.StateMachine;
    }, function (_StateMachineStateTypeJs) {
      StateType = _StateMachineStateTypeJs.StateType;
    }, function (_LoadManagerJs) {
      LoadManager = _LoadManagerJs.LoadManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8d2b5LuN1ZEObLfIE1FLeI2", "LoadState", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoadState", LoadState = (_dec = ccclass('LoadState'), _dec(_class = (_temp = class LoadState extends (_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "stateName", (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).LoadState);

          _defineProperty(this, "canToStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).MainSceneStartState]);

          _defineProperty(this, "canFromStateName", []);
        }

        onLoad() {
          game.addPersistRootNode(this.node);
          this.addSelf2StateMap();
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).Init("LoadState");
        }

        Start(arg) {
          (_crd && LoadManager === void 0 ? (_reportPossibleCrUseOfLoadManager({
            error: Error()
          }), LoadManager) : LoadManager).loadIndex = 0;
          this.CreateSoundManager();
          this.LoadPopupsPrefab();
          this.LoadSoundPrefab();
          this.LoadScenes();
          this.LoadJson();
        }

        End(arg) {// director.loadScene("MainScene");
        }

        addSelf2StateMap() {
          console.log("注册状态成功，name: ", this.stateName);
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).AddState(this.stateName, this.node.getComponent(LoadState));
        }

        CreateSoundManager() {
          let soundManager = new Node("SoundManager");
          soundManager.addComponent(_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager);
          if (this.node.parent) this.node.parent.addChild(soundManager);
        }
        /**
         * 加载弹窗的预制体，并初始化PopupManager中的popups数组
         */


        LoadPopupsPrefab() {
          // this.CreatePopupParent();
          resources.loadDir("PopupsPrefab", function (err, assets) {
            if (err) {
              console.error(err);
              return;
            }

            for (let i = 0; i < assets.length; i++) {
              const element = assets[i];
              (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
                error: Error()
              }), PopupManager) : PopupManager).I.popups.push(element);
            }

            (_crd && LoadManager === void 0 ? (_reportPossibleCrUseOfLoadManager({
              error: Error()
            }), LoadManager) : LoadManager).loadIndex++;
            console.log((_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
              error: Error()
            }), PopupManager) : PopupManager).I.popups);
          });
        }
        /**
         * 加载音效，并初始化SoundManager.I.audios
         */


        LoadSoundPrefab() {
          resources.loadDir("Sounds", function (err, assets) {
            if (err) {
              console.error(err);
              return;
            }

            for (let i = 0; i < assets.length; i++) {
              const element = assets[i];
              (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
                error: Error()
              }), SoundManager) : SoundManager).I.audios.push(element);
            }

            (_crd && LoadManager === void 0 ? (_reportPossibleCrUseOfLoadManager({
              error: Error()
            }), LoadManager) : LoadManager).loadIndex++;
            console.log((_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager).I.audios);
          });
        }

        LoadScenes() {
          director.preloadScene("MainScene", () => {
            (_crd && LoadManager === void 0 ? (_reportPossibleCrUseOfLoadManager({
              error: Error()
            }), LoadManager) : LoadManager).loadIndex++;
          });
          director.preloadScene("GameScene", () => {
            (_crd && LoadManager === void 0 ? (_reportPossibleCrUseOfLoadManager({
              error: Error()
            }), LoadManager) : LoadManager).loadIndex++;
          });
        }

        LoadJson() {
          resources.load("JsonDatas/LevelData", function (err, assets) {
            if (err) {
              console.error(err);
              return;
            }

            (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).GameSceneData = assets.json.Level;
            (_crd && LoadManager === void 0 ? (_reportPossibleCrUseOfLoadManager({
              error: Error()
            }), LoadManager) : LoadManager).loadIndex++;
            console.log((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).GameSceneData);
          });
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vTG9hZC9Mb2FkU3RhdGUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIk5vZGUiLCJkaXJlY3RvciIsImdhbWUiLCJyZXNvdXJjZXMiLCJHYW1lRGF0YSIsIk15Q29tcG9uZW50IiwiUG9wdXBNYW5hZ2VyIiwiU291bmRNYW5hZ2VyIiwiU3RhdGVNYWNoaW5lIiwiU3RhdGVUeXBlIiwiTG9hZE1hbmFnZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJMb2FkU3RhdGUiLCJNYWluU2NlbmVTdGFydFN0YXRlIiwib25Mb2FkIiwiYWRkUGVyc2lzdFJvb3ROb2RlIiwibm9kZSIsImFkZFNlbGYyU3RhdGVNYXAiLCJJbml0IiwiU3RhcnQiLCJhcmciLCJsb2FkSW5kZXgiLCJDcmVhdGVTb3VuZE1hbmFnZXIiLCJMb2FkUG9wdXBzUHJlZmFiIiwiTG9hZFNvdW5kUHJlZmFiIiwiTG9hZFNjZW5lcyIsIkxvYWRKc29uIiwiRW5kIiwiY29uc29sZSIsImxvZyIsInN0YXRlTmFtZSIsIkFkZFN0YXRlIiwiZ2V0Q29tcG9uZW50Iiwic291bmRNYW5hZ2VyIiwiYWRkQ29tcG9uZW50IiwicGFyZW50IiwiYWRkQ2hpbGQiLCJsb2FkRGlyIiwiZXJyIiwiYXNzZXRzIiwiZXJyb3IiLCJpIiwibGVuZ3RoIiwiZWxlbWVudCIsIkkiLCJwb3B1cHMiLCJwdXNoIiwiYXVkaW9zIiwicHJlbG9hZFNjZW5lIiwibG9hZCIsIkdhbWVTY2VuZURhdGEiLCJqc29uIiwiTGV2ZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPU0EsTUFBQUEsVSxPQUFBQSxVO0FBQXVCQyxNQUFBQSxJLE9BQUFBLEk7QUFBY0MsTUFBQUEsUSxPQUFBQSxRO0FBQWlFQyxNQUFBQSxJLE9BQUFBLEk7QUFB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QUFBQSxzQ0FBU3FCLGFBQXJCO0FBQ0gsV0FSRDtBQVNIOztBQXZGd0QsTyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIGxvYWRlciwgZGlyZWN0b3IsIGNvbXB1dGVSYXRpb0J5VHlwZSwgZmluZCwgTGFiZWwsIFVJVHJhbnNmb3JtQ29tcG9uZW50LCBnYW1lLCByZXNvdXJjZXMsIEpzb25Bc3NldCB9IGZyb20gJ2NjJztcbmltcG9ydCB7IEdhbWVEYXRhIH0gZnJvbSAnLi4vR2FtZS9HYW1lRGF0YSc7XG5pbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gJy4uL0dhbWUvTXlDb21wb25lbnQnO1xuaW1wb3J0IHsgUG9wdXBNYW5hZ2VyIH0gZnJvbSAnLi4vUG9wdXAvUG9wdXBNYW5hZ2VyJztcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gJy4uL1NvdW5kL1NvdW5kTWFuYWdlcic7XG5pbXBvcnQgeyBJU3RhdGUgfSBmcm9tICcuLi9TdGF0ZU1hY2hpbmUvSVN0YXRlJztcbmltcG9ydCB7IFN0YXRlTWFjaGluZSB9IGZyb20gJy4uL1N0YXRlTWFjaGluZS9TdGF0ZU1hY2hpbmUnO1xuaW1wb3J0IHsgU3RhdGVUeXBlIH0gZnJvbSAnLi4vU3RhdGVNYWNoaW5lL1N0YXRlVHlwZSc7XG5pbXBvcnQgeyBMb2FkTWFuYWdlciB9IGZyb20gJy4vTG9hZE1hbmFnZXInO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnTG9hZFN0YXRlJylcbmV4cG9ydCBjbGFzcyBMb2FkU3RhdGUgZXh0ZW5kcyBNeUNvbXBvbmVudCBpbXBsZW1lbnRzIElTdGF0ZSB7XG4gICAgc3RhdGVOYW1lOiBzdHJpbmcgPSBTdGF0ZVR5cGUuTG9hZFN0YXRlO1xuICAgIGNhblRvU3RhdGVOYW1lOiBzdHJpbmdbXSA9IFtTdGF0ZVR5cGUuTWFpblNjZW5lU3RhcnRTdGF0ZV07XG4gICAgY2FuRnJvbVN0YXRlTmFtZTogc3RyaW5nW10gPSBbXTtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XG4gICAgICAgIHRoaXMuYWRkU2VsZjJTdGF0ZU1hcCgpO1xuICAgICAgICBTdGF0ZU1hY2hpbmUuSW5pdChcIkxvYWRTdGF0ZVwiKTtcbiAgICB9XG5cbiAgICBTdGFydChhcmc/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgTG9hZE1hbmFnZXIubG9hZEluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5DcmVhdGVTb3VuZE1hbmFnZXIoKVxuICAgICAgICB0aGlzLkxvYWRQb3B1cHNQcmVmYWIoKTtcbiAgICAgICAgdGhpcy5Mb2FkU291bmRQcmVmYWIoKTtcbiAgICAgICAgdGhpcy5Mb2FkU2NlbmVzKCk7XG4gICAgICAgIHRoaXMuTG9hZEpzb24oKTtcbiAgICB9XG5cbiAgICBFbmQoYXJnPzogYW55KTogdm9pZCB7XG4gICAgICAgIC8vIGRpcmVjdG9yLmxvYWRTY2VuZShcIk1haW5TY2VuZVwiKTtcbiAgICB9XG4gICAgYWRkU2VsZjJTdGF0ZU1hcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLms6jlhoznirbmgIHmiJDlip/vvIxuYW1lOiBcIiwgdGhpcy5zdGF0ZU5hbWUpO1xuICAgICAgICBTdGF0ZU1hY2hpbmUuQWRkU3RhdGUodGhpcy5zdGF0ZU5hbWUsIHRoaXMubm9kZS5nZXRDb21wb25lbnQoTG9hZFN0YXRlKSBhcyBMb2FkU3RhdGUpXG4gICAgfVxuXG5cbiAgICBwcml2YXRlIENyZWF0ZVNvdW5kTWFuYWdlcigpIHtcbiAgICAgICAgbGV0IHNvdW5kTWFuYWdlciA9IG5ldyBOb2RlKFwiU291bmRNYW5hZ2VyXCIpO1xuICAgICAgICBzb3VuZE1hbmFnZXIuYWRkQ29tcG9uZW50KFNvdW5kTWFuYWdlcik7XG4gICAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50KVxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChzb3VuZE1hbmFnZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDliqDovb3lvLnnqpfnmoTpooTliLbkvZPvvIzlubbliJ3lp4vljJZQb3B1cE1hbmFnZXLkuK3nmoRwb3B1cHPmlbDnu4RcbiAgICAgKi9cbiAgICBwcml2YXRlIExvYWRQb3B1cHNQcmVmYWIoKSB7XG4gICAgICAgIC8vIHRoaXMuQ3JlYXRlUG9wdXBQYXJlbnQoKTtcbiAgICAgICAgcmVzb3VyY2VzLmxvYWREaXIoXCJQb3B1cHNQcmVmYWJcIiwgZnVuY3Rpb24gKGVycjogYW55LCBhc3NldHM6IGFueSkge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBhc3NldHNbaV07XG4gICAgICAgICAgICAgICAgUG9wdXBNYW5hZ2VyLkkucG9wdXBzLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXgrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFBvcHVwTWFuYWdlci5JLnBvcHVwcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDliqDovb3pn7PmlYjvvIzlubbliJ3lp4vljJZTb3VuZE1hbmFnZXIuSS5hdWRpb3NcbiAgICAgKi9cbiAgICBwcml2YXRlIExvYWRTb3VuZFByZWZhYigpIHtcbiAgICAgICAgcmVzb3VyY2VzLmxvYWREaXIoXCJTb3VuZHNcIiwgZnVuY3Rpb24gKGVycjogYW55LCBhc3NldHM6IGFueSkge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBhc3NldHNbaV07XG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLkkuYXVkaW9zLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXgrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFNvdW5kTWFuYWdlci5JLmF1ZGlvcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwcml2YXRlIExvYWRTY2VuZXMoKSB7XG4gICAgICAgIGRpcmVjdG9yLnByZWxvYWRTY2VuZShcIk1haW5TY2VuZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXgrKztcbiAgICAgICAgfSk7XG4gICAgICAgIGRpcmVjdG9yLnByZWxvYWRTY2VuZShcIkdhbWVTY2VuZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXgrKztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByaXZhdGUgTG9hZEpzb24oKSB7XG4gICAgICAgIHJlc291cmNlcy5sb2FkKFwiSnNvbkRhdGFzL0xldmVsRGF0YVwiLCBmdW5jdGlvbiAoZXJyOiBhbnksIGFzc2V0czogYW55KSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdhbWVEYXRhLkdhbWVTY2VuZURhdGEgPSBhc3NldHMuanNvbi5MZXZlbDtcbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCsrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coR2FtZURhdGEuR2FtZVNjZW5lRGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19