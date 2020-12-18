System.register(["cce.code-quality.cr", "cc", "../Game/MyComponent.js", "../Popup/PopupManager.js", "../Sound/SoundManager.js", "../StateMachine/StateMachine.js", "./LoadManager.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, loader, director, game, MyComponent, PopupManager, SoundManager, StateMachine, LoadManager, _dec, _class, _temp, _crd, ccclass, property, LoadState;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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

          _defineProperty(_assertThisInitialized(_this), "stateName", "LoadState");

          _defineProperty(_assertThisInitialized(_this), "canToStateName", ["StartGameState"]);

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
        };

        _proto.End = function End(arg) {
          director.loadScene("MainScene");
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
          loader.loadResDir("PopupsPrefab", function (err, assets) {
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
          loader.loadResDir("Sounds", function (err, assets) {
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

        return LoadState;
      }(_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vTG9hZC9Mb2FkU3RhdGUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIk5vZGUiLCJsb2FkZXIiLCJkaXJlY3RvciIsImdhbWUiLCJNeUNvbXBvbmVudCIsIlBvcHVwTWFuYWdlciIsIlNvdW5kTWFuYWdlciIsIlN0YXRlTWFjaGluZSIsIkxvYWRNYW5hZ2VyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTG9hZFN0YXRlIiwib25Mb2FkIiwiYWRkUGVyc2lzdFJvb3ROb2RlIiwibm9kZSIsImFkZFNlbGYyU3RhdGVNYXAiLCJJbml0IiwiU3RhcnQiLCJhcmciLCJsb2FkSW5kZXgiLCJDcmVhdGVTb3VuZE1hbmFnZXIiLCJMb2FkUG9wdXBzUHJlZmFiIiwiTG9hZFNvdW5kUHJlZmFiIiwiTG9hZFNjZW5lcyIsIkVuZCIsImxvYWRTY2VuZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZU5hbWUiLCJBZGRTdGF0ZSIsImdldENvbXBvbmVudCIsInNvdW5kTWFuYWdlciIsImFkZENvbXBvbmVudCIsInBhcmVudCIsImFkZENoaWxkIiwibG9hZFJlc0RpciIsImVyciIsImFzc2V0cyIsImVycm9yIiwiaSIsImxlbmd0aCIsImVsZW1lbnQiLCJJIiwicG9wdXBzIiwicHVzaCIsImF1ZGlvcyIsInByZWxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1NBLE1BQUFBLFUsT0FBQUEsVTtBQUF1QkMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxRLE9BQUFBLFE7QUFBaUVDLE1BQUFBLEksT0FBQUEsSTs7QUFDdEdDLE1BQUFBLFcsc0JBQUFBLFc7O0FBQ0FDLE1BQUFBLFksd0JBQUFBLFk7O0FBQ0FDLE1BQUFBLFksd0JB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QUFBLGdEQUFhRyxDQUFiLENBQWVHLE1BQWYsQ0FBc0JELElBQXRCLENBQTJCSCxPQUEzQjtBQUNIOztBQUNEO0FBQUE7QUFBQSw0Q0FBWXRCLFNBQVo7QUFDQU8sWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBQTtBQUFBLDhDQUFhZSxDQUFiLENBQWVHLE1BQTNCO0FBQ0gsV0FYRDtBQVlILFM7O2VBQ090QixVLEdBQVIsc0JBQXFCO0FBQ2pCckIsVUFBQUEsUUFBUSxDQUFDNEMsWUFBVCxDQUFzQixXQUF0QixFQUFtQyxZQUFNO0FBQ3JDO0FBQUE7QUFBQSw0Q0FBWTNCLFNBQVo7QUFDSCxXQUZEO0FBR0FqQixVQUFBQSxRQUFRLENBQUM0QyxZQUFULENBQXNCLFdBQXRCLEVBQW1DLFlBQU07QUFDckM7QUFBQTtBQUFBLDRDQUFZM0IsU0FBWjtBQUNILFdBRkQ7QUFHSCxTIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgbG9hZGVyLCBkaXJlY3RvciwgY29tcHV0ZVJhdGlvQnlUeXBlLCBmaW5kLCBMYWJlbCwgVUlUcmFuc2Zvcm1Db21wb25lbnQsIGdhbWUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gJy4uL0dhbWUvTXlDb21wb25lbnQnO1xuaW1wb3J0IHsgUG9wdXBNYW5hZ2VyIH0gZnJvbSAnLi4vUG9wdXAvUG9wdXBNYW5hZ2VyJztcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gJy4uL1NvdW5kL1NvdW5kTWFuYWdlcic7XG5pbXBvcnQgeyBJU3RhdGUgfSBmcm9tICcuLi9TdGF0ZU1hY2hpbmUvSVN0YXRlJztcbmltcG9ydCB7IFN0YXRlTWFjaGluZSB9IGZyb20gJy4uL1N0YXRlTWFjaGluZS9TdGF0ZU1hY2hpbmUnO1xuaW1wb3J0IHsgTG9hZE1hbmFnZXIgfSBmcm9tICcuL0xvYWRNYW5hZ2VyJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0xvYWRTdGF0ZScpXG5leHBvcnQgY2xhc3MgTG9hZFN0YXRlIGV4dGVuZHMgTXlDb21wb25lbnQgaW1wbGVtZW50cyBJU3RhdGUge1xuICAgIHN0YXRlTmFtZTogc3RyaW5nID0gXCJMb2FkU3RhdGVcIjtcbiAgICBjYW5Ub1N0YXRlTmFtZTogc3RyaW5nW10gPSBbXCJTdGFydEdhbWVTdGF0ZVwiXTtcbiAgICBjYW5Gcm9tU3RhdGVOYW1lOiBzdHJpbmdbXSA9IFtdO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcbiAgICAgICAgdGhpcy5hZGRTZWxmMlN0YXRlTWFwKCk7XG4gICAgICAgIFN0YXRlTWFjaGluZS5Jbml0KFwiTG9hZFN0YXRlXCIpO1xuICAgIH1cblxuICAgIFN0YXJ0KGFyZz86IGFueSk6IHZvaWQge1xuICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXggPSAwO1xuICAgICAgICB0aGlzLkNyZWF0ZVNvdW5kTWFuYWdlcigpXG4gICAgICAgIHRoaXMuTG9hZFBvcHVwc1ByZWZhYigpO1xuICAgICAgICB0aGlzLkxvYWRTb3VuZFByZWZhYigpO1xuICAgICAgICB0aGlzLkxvYWRTY2VuZXMoKTtcbiAgICB9XG4gICAgRW5kKGFyZz86IGFueSk6IHZvaWQge1xuICAgICAgICBkaXJlY3Rvci5sb2FkU2NlbmUoXCJNYWluU2NlbmVcIik7XG4gICAgfVxuICAgIGFkZFNlbGYyU3RhdGVNYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5rOo5YaM54q25oCB5oiQ5Yqf77yMbmFtZTogXCIsIHRoaXMuc3RhdGVOYW1lKTtcbiAgICAgICAgU3RhdGVNYWNoaW5lLkFkZFN0YXRlKHRoaXMuc3RhdGVOYW1lLCB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KExvYWRTdGF0ZSkgYXMgTG9hZFN0YXRlKVxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBDcmVhdGVTb3VuZE1hbmFnZXIoKSB7XG4gICAgICAgIGxldCBzb3VuZE1hbmFnZXIgPSBuZXcgTm9kZShcIlNvdW5kTWFuYWdlclwiKTtcbiAgICAgICAgc291bmRNYW5hZ2VyLmFkZENvbXBvbmVudChTb3VuZE1hbmFnZXIpO1xuICAgICAgICBpZiAodGhpcy5ub2RlLnBhcmVudClcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoc291bmRNYW5hZ2VyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5Yqg6L295by556qX55qE6aKE5Yi25L2T77yM5bm25Yid5aeL5YyWUG9wdXBNYW5hZ2Vy5Lit55qEcG9wdXBz5pWw57uEXG4gICAgICovXG4gICAgcHJpdmF0ZSBMb2FkUG9wdXBzUHJlZmFiKCkge1xuICAgICAgICAvLyB0aGlzLkNyZWF0ZVBvcHVwUGFyZW50KCk7XG4gICAgICAgIGxvYWRlci5sb2FkUmVzRGlyKFwiUG9wdXBzUHJlZmFiXCIsIGZ1bmN0aW9uIChlcnI6IGFueSwgYXNzZXRzOiBhbnkpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3NldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYXNzZXRzW2ldO1xuICAgICAgICAgICAgICAgIFBvcHVwTWFuYWdlci5JLnBvcHVwcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgTG9hZE1hbmFnZXIubG9hZEluZGV4Kys7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhQb3B1cE1hbmFnZXIuSS5wb3B1cHMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5Yqg6L296Z+z5pWI77yM5bm25Yid5aeL5YyWU291bmRNYW5hZ2VyLkkuYXVkaW9zXG4gICAgICovXG4gICAgcHJpdmF0ZSBMb2FkU291bmRQcmVmYWIoKSB7XG4gICAgICAgIGxvYWRlci5sb2FkUmVzRGlyKFwiU291bmRzXCIsIGZ1bmN0aW9uIChlcnI6IGFueSwgYXNzZXRzOiBhbnkpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3NldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYXNzZXRzW2ldO1xuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5JLmF1ZGlvcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgTG9hZE1hbmFnZXIubG9hZEluZGV4Kys7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhTb3VuZE1hbmFnZXIuSS5hdWRpb3MpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBMb2FkU2NlbmVzKCkge1xuICAgICAgICBkaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJNYWluU2NlbmVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgTG9hZE1hbmFnZXIubG9hZEluZGV4Kys7XG4gICAgICAgIH0pO1xuICAgICAgICBkaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJHYW1lU2NlbmVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgTG9hZE1hbmFnZXIubG9hZEluZGV4Kys7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG59XG4iXX0=