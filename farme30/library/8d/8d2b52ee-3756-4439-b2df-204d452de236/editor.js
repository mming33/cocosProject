System.register(["cce.code-quality.cr", "cc", "../Game/MyComponent.js", "../Popup/PopupManager.js", "../Sound/SoundManager.js", "../StateMachine/StateMachine.js", "../StateMachine/StateType.js", "./LoadManager.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, loader, director, game, MyComponent, PopupManager, SoundManager, StateMachine, StateType, LoadManager, _dec, _class, _temp, _crd, ccclass, property, LoadState;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      loader = _cc.loader;
      director = _cc.director;
      game = _cc.game;
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
          loader.loadResDir("PopupsPrefab", function (err, assets) {
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
          loader.loadResDir("Sounds", function (err, assets) {
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

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vTG9hZC9Mb2FkU3RhdGUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIk5vZGUiLCJsb2FkZXIiLCJkaXJlY3RvciIsImdhbWUiLCJNeUNvbXBvbmVudCIsIlBvcHVwTWFuYWdlciIsIlNvdW5kTWFuYWdlciIsIlN0YXRlTWFjaGluZSIsIlN0YXRlVHlwZSIsIkxvYWRNYW5hZ2VyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTG9hZFN0YXRlIiwiTWFpblNjZW5lU3RhcnRTdGF0ZSIsIm9uTG9hZCIsImFkZFBlcnNpc3RSb290Tm9kZSIsIm5vZGUiLCJhZGRTZWxmMlN0YXRlTWFwIiwiSW5pdCIsIlN0YXJ0IiwiYXJnIiwibG9hZEluZGV4IiwiQ3JlYXRlU291bmRNYW5hZ2VyIiwiTG9hZFBvcHVwc1ByZWZhYiIsIkxvYWRTb3VuZFByZWZhYiIsIkxvYWRTY2VuZXMiLCJFbmQiLCJjb25zb2xlIiwibG9nIiwic3RhdGVOYW1lIiwiQWRkU3RhdGUiLCJnZXRDb21wb25lbnQiLCJzb3VuZE1hbmFnZXIiLCJhZGRDb21wb25lbnQiLCJwYXJlbnQiLCJhZGRDaGlsZCIsImxvYWRSZXNEaXIiLCJlcnIiLCJhc3NldHMiLCJlcnJvciIsImkiLCJsZW5ndGgiLCJlbGVtZW50IiwiSSIsInBvcHVwcyIsInB1c2giLCJhdWRpb3MiLCJwcmVsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9TQSxNQUFBQSxVLE9BQUFBLFU7QUFBdUJDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsUSxPQUFBQSxRO0FBQWlFQyxNQUFBQSxJLE9BQUFBLEk7O0FBQ3RHQyxNQUFBQSxXLHNCQUFBQSxXOztBQUNBQyxNQUFBQSxZLHdCQUFB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Q0FBQyxHQUFHRixNQUFNLENBQUNHLE1BQTNCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLG9CQUFNRSxPQUFPLEdBQUdKLE1BQU0sQ0FBQ0UsQ0FBRCxDQUF0QjtBQUNBO0FBQUE7QUFBQSxnREFBYUcsQ0FBYixDQUFlRyxNQUFmLENBQXNCRCxJQUF0QixDQUEyQkgsT0FBM0I7QUFDSDs7QUFDRDtBQUFBO0FBQUEsNENBQVlyQixTQUFaO0FBQ0FNLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUE7QUFBQSw4Q0FBYWUsQ0FBYixDQUFlRyxNQUEzQjtBQUNILFdBWEQ7QUFZSDs7QUFDT3JCLFFBQUFBLFVBQVIsR0FBcUI7QUFDakJ2QixVQUFBQSxRQUFRLENBQUM2QyxZQUFULENBQXNCLFdBQXRCLEVBQW1DLE1BQU07QUFDckM7QUFBQTtBQUFBLDRDQUFZMUIsU0FBWjtBQUNILFdBRkQ7QUFHQW5CLFVBQUFBLFFBQVEsQ0FBQzZDLFlBQVQsQ0FBc0IsV0FBdEIsRUFBbUMsTUFBTTtBQUNyQztBQUFBO0FBQUEsNENBQVkxQixTQUFaO0FBQ0gsV0FGRDtBQUdIOztBQTFFd0QsTyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIGxvYWRlciwgZGlyZWN0b3IsIGNvbXB1dGVSYXRpb0J5VHlwZSwgZmluZCwgTGFiZWwsIFVJVHJhbnNmb3JtQ29tcG9uZW50LCBnYW1lIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tICcuLi9HYW1lL015Q29tcG9uZW50JztcbmltcG9ydCB7IFBvcHVwTWFuYWdlciB9IGZyb20gJy4uL1BvcHVwL1BvcHVwTWFuYWdlcic7XG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tICcuLi9Tb3VuZC9Tb3VuZE1hbmFnZXInO1xuaW1wb3J0IHsgSVN0YXRlIH0gZnJvbSAnLi4vU3RhdGVNYWNoaW5lL0lTdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZU1hY2hpbmUgfSBmcm9tICcuLi9TdGF0ZU1hY2hpbmUvU3RhdGVNYWNoaW5lJztcbmltcG9ydCB7IFN0YXRlVHlwZSB9IGZyb20gJy4uL1N0YXRlTWFjaGluZS9TdGF0ZVR5cGUnO1xuaW1wb3J0IHsgTG9hZE1hbmFnZXIgfSBmcm9tICcuL0xvYWRNYW5hZ2VyJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0xvYWRTdGF0ZScpXG5leHBvcnQgY2xhc3MgTG9hZFN0YXRlIGV4dGVuZHMgTXlDb21wb25lbnQgaW1wbGVtZW50cyBJU3RhdGUge1xuICAgIHN0YXRlTmFtZTogc3RyaW5nID0gU3RhdGVUeXBlLkxvYWRTdGF0ZTtcbiAgICBjYW5Ub1N0YXRlTmFtZTogc3RyaW5nW10gPSBbU3RhdGVUeXBlLk1haW5TY2VuZVN0YXJ0U3RhdGVdO1xuICAgIGNhbkZyb21TdGF0ZU5hbWU6IHN0cmluZ1tdID0gW107XG4gICAgb25Mb2FkKCkge1xuICAgICAgICBnYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLmFkZFNlbGYyU3RhdGVNYXAoKTtcbiAgICAgICAgU3RhdGVNYWNoaW5lLkluaXQoXCJMb2FkU3RhdGVcIik7XG4gICAgfVxuXG4gICAgU3RhcnQoYXJnPzogYW55KTogdm9pZCB7XG4gICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuQ3JlYXRlU291bmRNYW5hZ2VyKClcbiAgICAgICAgdGhpcy5Mb2FkUG9wdXBzUHJlZmFiKCk7XG4gICAgICAgIHRoaXMuTG9hZFNvdW5kUHJlZmFiKCk7XG4gICAgICAgIHRoaXMuTG9hZFNjZW5lcygpO1xuICAgIH1cbiAgICBFbmQoYXJnPzogYW55KTogdm9pZCB7XG4gICAgICAgIC8vIGRpcmVjdG9yLmxvYWRTY2VuZShcIk1haW5TY2VuZVwiKTtcbiAgICB9XG4gICAgYWRkU2VsZjJTdGF0ZU1hcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLms6jlhoznirbmgIHmiJDlip/vvIxuYW1lOiBcIiwgdGhpcy5zdGF0ZU5hbWUpO1xuICAgICAgICBTdGF0ZU1hY2hpbmUuQWRkU3RhdGUodGhpcy5zdGF0ZU5hbWUsIHRoaXMubm9kZS5nZXRDb21wb25lbnQoTG9hZFN0YXRlKSBhcyBMb2FkU3RhdGUpXG4gICAgfVxuXG5cbiAgICBwcml2YXRlIENyZWF0ZVNvdW5kTWFuYWdlcigpIHtcbiAgICAgICAgbGV0IHNvdW5kTWFuYWdlciA9IG5ldyBOb2RlKFwiU291bmRNYW5hZ2VyXCIpO1xuICAgICAgICBzb3VuZE1hbmFnZXIuYWRkQ29tcG9uZW50KFNvdW5kTWFuYWdlcik7XG4gICAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50KVxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChzb3VuZE1hbmFnZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDliqDovb3lvLnnqpfnmoTpooTliLbkvZPvvIzlubbliJ3lp4vljJZQb3B1cE1hbmFnZXLkuK3nmoRwb3B1cHPmlbDnu4RcbiAgICAgKi9cbiAgICBwcml2YXRlIExvYWRQb3B1cHNQcmVmYWIoKSB7XG4gICAgICAgIC8vIHRoaXMuQ3JlYXRlUG9wdXBQYXJlbnQoKTtcbiAgICAgICAgbG9hZGVyLmxvYWRSZXNEaXIoXCJQb3B1cHNQcmVmYWJcIiwgZnVuY3Rpb24gKGVycjogYW55LCBhc3NldHM6IGFueSkge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBhc3NldHNbaV07XG4gICAgICAgICAgICAgICAgUG9wdXBNYW5hZ2VyLkkucG9wdXBzLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXgrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFBvcHVwTWFuYWdlci5JLnBvcHVwcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDliqDovb3pn7PmlYjvvIzlubbliJ3lp4vljJZTb3VuZE1hbmFnZXIuSS5hdWRpb3NcbiAgICAgKi9cbiAgICBwcml2YXRlIExvYWRTb3VuZFByZWZhYigpIHtcbiAgICAgICAgbG9hZGVyLmxvYWRSZXNEaXIoXCJTb3VuZHNcIiwgZnVuY3Rpb24gKGVycjogYW55LCBhc3NldHM6IGFueSkge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBhc3NldHNbaV07XG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLkkuYXVkaW9zLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXgrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFNvdW5kTWFuYWdlci5JLmF1ZGlvcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwcml2YXRlIExvYWRTY2VuZXMoKSB7XG4gICAgICAgIGRpcmVjdG9yLnByZWxvYWRTY2VuZShcIk1haW5TY2VuZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXgrKztcbiAgICAgICAgfSk7XG4gICAgICAgIGRpcmVjdG9yLnByZWxvYWRTY2VuZShcIkdhbWVTY2VuZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXgrKztcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbn1cbiJdfQ==