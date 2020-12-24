System.register(["cce.code-quality.cr", "cc", "../Game/GameData.js", "../Game/MyComponent.js", "../Popup/PopupManager.js", "../Sound/SoundManager.js", "../StateMachine/StateMachine.js", "../StateMachine/StateType.js", "./LoadManager.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, director, game, resources, GameData, MyComponent, PopupManager, SoundManager, StateMachine, StateType, LoadManager, _dec, _class, _temp, _crd, ccclass, property, LoadState;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("LoadState", LoadState = (_dec = ccclass('LoadState'), _dec(_class = (_temp = /*#__PURE__*/function (_ref) {
        _inheritsLoose(LoadState, _ref);

        function LoadState() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _ref.call.apply(_ref, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "stateName", (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).LoadState);

          _defineProperty(_assertThisInitialized(_this), "canToStateName", [(_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).MainSceneStartState]);

          _defineProperty(_assertThisInitialized(_this), "canFromStateName", []);

          return _this;
        }

        var _proto = LoadState.prototype;

        _proto.onLoad = function onLoad() {
          game.addPersistRootNode(this.node);
          this.addSelf2StateMap();
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).Init("LoadState");
        };

        _proto.Start = function Start(arg) {
          (_crd && LoadManager === void 0 ? (_reportPossibleCrUseOfLoadManager({
            error: Error()
          }), LoadManager) : LoadManager).loadIndex = 0;
          this.CreateSoundManager();
          this.LoadPopupsPrefab();
          this.LoadSoundPrefab();
          this.LoadScenes();
          this.LoadJson();
        };

        _proto.End = function End(arg) {// director.loadScene("MainScene");
        };

        _proto.addSelf2StateMap = function addSelf2StateMap() {
          console.log("注册状态成功，name: ", this.stateName);
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).AddState(this.stateName, this.node.getComponent(LoadState));
        };

        _proto.CreateSoundManager = function CreateSoundManager() {
          var soundManager = new Node("SoundManager");
          soundManager.addComponent(_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager);
          if (this.node.parent) this.node.parent.addChild(soundManager);
        }
        /**
         * 加载弹窗的预制体，并初始化PopupManager中的popups数组
         */
        ;

        _proto.LoadPopupsPrefab = function LoadPopupsPrefab() {
          // this.CreatePopupParent();
          resources.loadDir("PopupsPrefab", function (err, assets) {
            if (err) {
              console.error(err);
              return;
            }

            for (var i = 0; i < assets.length; i++) {
              var element = assets[i];
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
        ;

        _proto.LoadSoundPrefab = function LoadSoundPrefab() {
          resources.loadDir("Sounds", function (err, assets) {
            if (err) {
              console.error(err);
              return;
            }

            for (var i = 0; i < assets.length; i++) {
              var element = assets[i];
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
        };

        _proto.LoadScenes = function LoadScenes() {
          director.preloadScene("MainScene", function () {
            (_crd && LoadManager === void 0 ? (_reportPossibleCrUseOfLoadManager({
              error: Error()
            }), LoadManager) : LoadManager).loadIndex++;
          });
          director.preloadScene("GameScene", function () {
            (_crd && LoadManager === void 0 ? (_reportPossibleCrUseOfLoadManager({
              error: Error()
            }), LoadManager) : LoadManager).loadIndex++;
          });
        };

        _proto.LoadJson = function LoadJson() {
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
        };

        return LoadState;
      }(_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vTG9hZC9Mb2FkU3RhdGUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIk5vZGUiLCJkaXJlY3RvciIsImdhbWUiLCJyZXNvdXJjZXMiLCJHYW1lRGF0YSIsIk15Q29tcG9uZW50IiwiUG9wdXBNYW5hZ2VyIiwiU291bmRNYW5hZ2VyIiwiU3RhdGVNYWNoaW5lIiwiU3RhdGVUeXBlIiwiTG9hZE1hbmFnZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJMb2FkU3RhdGUiLCJNYWluU2NlbmVTdGFydFN0YXRlIiwib25Mb2FkIiwiYWRkUGVyc2lzdFJvb3ROb2RlIiwibm9kZSIsImFkZFNlbGYyU3RhdGVNYXAiLCJJbml0IiwiU3RhcnQiLCJhcmciLCJsb2FkSW5kZXgiLCJDcmVhdGVTb3VuZE1hbmFnZXIiLCJMb2FkUG9wdXBzUHJlZmFiIiwiTG9hZFNvdW5kUHJlZmFiIiwiTG9hZFNjZW5lcyIsIkxvYWRKc29uIiwiRW5kIiwiY29uc29sZSIsImxvZyIsInN0YXRlTmFtZSIsIkFkZFN0YXRlIiwiZ2V0Q29tcG9uZW50Iiwic291bmRNYW5hZ2VyIiwiYWRkQ29tcG9uZW50IiwicGFyZW50IiwiYWRkQ2hpbGQiLCJsb2FkRGlyIiwiZXJyIiwiYXNzZXRzIiwiZXJyb3IiLCJpIiwibGVuZ3RoIiwiZWxlbWVudCIsIkkiLCJwb3B1cHMiLCJwdXNoIiwiYXVkaW9zIiwicHJlbG9hZFNjZW5lIiwibG9hZCIsIkdhbWVTY2VuZURhdGEiLCJqc29uIiwiTGV2ZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1NBLE1BQUFBLFUsT0FBQUEsVTtBQUF1QkMsTUFBQUEsSSxPQUFBQSxJO0FBQWNDLE1BQUFBLFEsT0FBQUEsUTtBQUFpRUMsTUFBQUEsSSxPQUFBQSxJ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VHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgbG9hZGVyLCBkaXJlY3RvciwgY29tcHV0ZVJhdGlvQnlUeXBlLCBmaW5kLCBMYWJlbCwgVUlUcmFuc2Zvcm1Db21wb25lbnQsIGdhbWUsIHJlc291cmNlcywgSnNvbkFzc2V0IH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgR2FtZURhdGEgfSBmcm9tICcuLi9HYW1lL0dhbWVEYXRhJztcbmltcG9ydCB7IE15Q29tcG9uZW50IH0gZnJvbSAnLi4vR2FtZS9NeUNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb3B1cE1hbmFnZXIgfSBmcm9tICcuLi9Qb3B1cC9Qb3B1cE1hbmFnZXInO1xuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi4vU291bmQvU291bmRNYW5hZ2VyJztcbmltcG9ydCB7IElTdGF0ZSB9IGZyb20gJy4uL1N0YXRlTWFjaGluZS9JU3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVNYWNoaW5lIH0gZnJvbSAnLi4vU3RhdGVNYWNoaW5lL1N0YXRlTWFjaGluZSc7XG5pbXBvcnQgeyBTdGF0ZVR5cGUgfSBmcm9tICcuLi9TdGF0ZU1hY2hpbmUvU3RhdGVUeXBlJztcbmltcG9ydCB7IExvYWRNYW5hZ2VyIH0gZnJvbSAnLi9Mb2FkTWFuYWdlcic7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdMb2FkU3RhdGUnKVxuZXhwb3J0IGNsYXNzIExvYWRTdGF0ZSBleHRlbmRzIE15Q29tcG9uZW50IGltcGxlbWVudHMgSVN0YXRlIHtcbiAgICBzdGF0ZU5hbWU6IHN0cmluZyA9IFN0YXRlVHlwZS5Mb2FkU3RhdGU7XG4gICAgY2FuVG9TdGF0ZU5hbWU6IHN0cmluZ1tdID0gW1N0YXRlVHlwZS5NYWluU2NlbmVTdGFydFN0YXRlXTtcbiAgICBjYW5Gcm9tU3RhdGVOYW1lOiBzdHJpbmdbXSA9IFtdO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcbiAgICAgICAgdGhpcy5hZGRTZWxmMlN0YXRlTWFwKCk7XG4gICAgICAgIFN0YXRlTWFjaGluZS5Jbml0KFwiTG9hZFN0YXRlXCIpO1xuICAgIH1cblxuICAgIFN0YXJ0KGFyZz86IGFueSk6IHZvaWQge1xuICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXggPSAwO1xuICAgICAgICB0aGlzLkNyZWF0ZVNvdW5kTWFuYWdlcigpXG4gICAgICAgIHRoaXMuTG9hZFBvcHVwc1ByZWZhYigpO1xuICAgICAgICB0aGlzLkxvYWRTb3VuZFByZWZhYigpO1xuICAgICAgICB0aGlzLkxvYWRTY2VuZXMoKTtcbiAgICAgICAgdGhpcy5Mb2FkSnNvbigpO1xuICAgIH1cblxuICAgIEVuZChhcmc/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgLy8gZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpblNjZW5lXCIpO1xuICAgIH1cbiAgICBhZGRTZWxmMlN0YXRlTWFwKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuazqOWGjOeKtuaAgeaIkOWKn++8jG5hbWU6IFwiLCB0aGlzLnN0YXRlTmFtZSk7XG4gICAgICAgIFN0YXRlTWFjaGluZS5BZGRTdGF0ZSh0aGlzLnN0YXRlTmFtZSwgdGhpcy5ub2RlLmdldENvbXBvbmVudChMb2FkU3RhdGUpIGFzIExvYWRTdGF0ZSlcbiAgICB9XG5cblxuICAgIHByaXZhdGUgQ3JlYXRlU291bmRNYW5hZ2VyKCkge1xuICAgICAgICBsZXQgc291bmRNYW5hZ2VyID0gbmV3IE5vZGUoXCJTb3VuZE1hbmFnZXJcIik7XG4gICAgICAgIHNvdW5kTWFuYWdlci5hZGRDb21wb25lbnQoU291bmRNYW5hZ2VyKTtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5wYXJlbnQpXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKHNvdW5kTWFuYWdlcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWKoOi9veW8ueeql+eahOmihOWItuS9k++8jOW5tuWIneWni+WMllBvcHVwTWFuYWdlcuS4reeahHBvcHVwc+aVsOe7hFxuICAgICAqL1xuICAgIHByaXZhdGUgTG9hZFBvcHVwc1ByZWZhYigpIHtcbiAgICAgICAgLy8gdGhpcy5DcmVhdGVQb3B1cFBhcmVudCgpO1xuICAgICAgICByZXNvdXJjZXMubG9hZERpcihcIlBvcHVwc1ByZWZhYlwiLCBmdW5jdGlvbiAoZXJyOiBhbnksIGFzc2V0czogYW55KSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGFzc2V0c1tpXTtcbiAgICAgICAgICAgICAgICBQb3B1cE1hbmFnZXIuSS5wb3B1cHMucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCsrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coUG9wdXBNYW5hZ2VyLkkucG9wdXBzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWKoOi9vemfs+aViO+8jOW5tuWIneWni+WMllNvdW5kTWFuYWdlci5JLmF1ZGlvc1xuICAgICAqL1xuICAgIHByaXZhdGUgTG9hZFNvdW5kUHJlZmFiKCkge1xuICAgICAgICByZXNvdXJjZXMubG9hZERpcihcIlNvdW5kc1wiLCBmdW5jdGlvbiAoZXJyOiBhbnksIGFzc2V0czogYW55KSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGFzc2V0c1tpXTtcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIuSS5hdWRpb3MucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCsrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coU291bmRNYW5hZ2VyLkkuYXVkaW9zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByaXZhdGUgTG9hZFNjZW5lcygpIHtcbiAgICAgICAgZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiTWFpblNjZW5lXCIsICgpID0+IHtcbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCsrO1xuICAgICAgICB9KTtcbiAgICAgICAgZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiR2FtZVNjZW5lXCIsICgpID0+IHtcbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCsrO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBMb2FkSnNvbigpIHtcbiAgICAgICAgcmVzb3VyY2VzLmxvYWQoXCJKc29uRGF0YXMvTGV2ZWxEYXRhXCIsIGZ1bmN0aW9uIChlcnI6IGFueSwgYXNzZXRzOiBhbnkpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR2FtZURhdGEuR2FtZVNjZW5lRGF0YSA9IGFzc2V0cy5qc29uLkxldmVsO1xuICAgICAgICAgICAgTG9hZE1hbmFnZXIubG9hZEluZGV4Kys7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhHYW1lRGF0YS5HYW1lU2NlbmVEYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=