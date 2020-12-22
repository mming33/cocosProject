System.register(["cce.code-quality.cr", "cc", "../Game/MyComponent.js", "../Popup/PopupManager.js", "../Sound/SoundManager.js", "../StateMachine/StateMachine.js", "../StateMachine/StateType.js", "./LoadManager.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, loader, director, game, MyComponent, PopupManager, SoundManager, StateMachine, StateType, LoadManager, _dec, _class, _temp, _crd, ccclass, property, LoadState;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vTG9hZC9Mb2FkU3RhdGUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIk5vZGUiLCJsb2FkZXIiLCJkaXJlY3RvciIsImdhbWUiLCJNeUNvbXBvbmVudCIsIlBvcHVwTWFuYWdlciIsIlNvdW5kTWFuYWdlciIsIlN0YXRlTWFjaGluZSIsIlN0YXRlVHlwZSIsIkxvYWRNYW5hZ2VyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTG9hZFN0YXRlIiwiTWFpblNjZW5lU3RhcnRTdGF0ZSIsIm9uTG9hZCIsImFkZFBlcnNpc3RSb290Tm9kZSIsIm5vZGUiLCJhZGRTZWxmMlN0YXRlTWFwIiwiSW5pdCIsIlN0YXJ0IiwiYXJnIiwibG9hZEluZGV4IiwiQ3JlYXRlU291bmRNYW5hZ2VyIiwiTG9hZFBvcHVwc1ByZWZhYiIsIkxvYWRTb3VuZFByZWZhYiIsIkxvYWRTY2VuZXMiLCJFbmQiLCJjb25zb2xlIiwibG9nIiwic3RhdGVOYW1lIiwiQWRkU3RhdGUiLCJnZXRDb21wb25lbnQiLCJzb3VuZE1hbmFnZXIiLCJhZGRDb21wb25lbnQiLCJwYXJlbnQiLCJhZGRDaGlsZCIsImxvYWRSZXNEaXIiLCJlcnIiLCJhc3NldHMiLCJlcnJvciIsImkiLCJsZW5ndGgiLCJlbGVtZW50IiwiSSIsInBvcHVwcyIsInB1c2giLCJhdWRpb3MiLCJwcmVsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPU0EsTUFBQUEsVSxPQUFBQSxVO0FBQXVCQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFEsT0FBQUEsUTtBQUFpRUMsTUFBQUEsSSxPQUFBQSxJOztBQUN0R0MsTUFBQUEsVyxzQkFBQUEsVzs7QUFDQUMsTUFBQUEsWSx3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RSxPQUFPLEdBQUdKLE1BQU0sQ0FBQ0UsQ0FBRCxDQUF0QjtBQUNBO0FBQUE7QUFBQSxnREFBYUcsQ0FBYixDQUFlRyxNQUFmLENBQXNCRCxJQUF0QixDQUEyQkgsT0FBM0I7QUFDSDs7QUFDRDtBQUFBO0FBQUEsNENBQVlyQixTQUFaO0FBQ0FNLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUE7QUFBQSw4Q0FBYWUsQ0FBYixDQUFlRyxNQUEzQjtBQUNILFdBWEQ7QUFZSCxTOztlQUNPckIsVSxHQUFSLHNCQUFxQjtBQUNqQnZCLFVBQUFBLFFBQVEsQ0FBQzZDLFlBQVQsQ0FBc0IsV0FBdEIsRUFBbUMsWUFBTTtBQUNyQztBQUFBO0FBQUEsNENBQVkxQixTQUFaO0FBQ0gsV0FGRDtBQUdBbkIsVUFBQUEsUUFBUSxDQUFDNkMsWUFBVCxDQUFzQixXQUF0QixFQUFtQyxZQUFNO0FBQ3JDO0FBQUE7QUFBQSw0Q0FBWTFCLFNBQVo7QUFDSCxXQUZEO0FBR0gsUyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIGxvYWRlciwgZGlyZWN0b3IsIGNvbXB1dGVSYXRpb0J5VHlwZSwgZmluZCwgTGFiZWwsIFVJVHJhbnNmb3JtQ29tcG9uZW50LCBnYW1lIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tICcuLi9HYW1lL015Q29tcG9uZW50JztcbmltcG9ydCB7IFBvcHVwTWFuYWdlciB9IGZyb20gJy4uL1BvcHVwL1BvcHVwTWFuYWdlcic7XG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tICcuLi9Tb3VuZC9Tb3VuZE1hbmFnZXInO1xuaW1wb3J0IHsgSVN0YXRlIH0gZnJvbSAnLi4vU3RhdGVNYWNoaW5lL0lTdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZU1hY2hpbmUgfSBmcm9tICcuLi9TdGF0ZU1hY2hpbmUvU3RhdGVNYWNoaW5lJztcbmltcG9ydCB7IFN0YXRlVHlwZSB9IGZyb20gJy4uL1N0YXRlTWFjaGluZS9TdGF0ZVR5cGUnO1xuaW1wb3J0IHsgTG9hZE1hbmFnZXIgfSBmcm9tICcuL0xvYWRNYW5hZ2VyJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0xvYWRTdGF0ZScpXG5leHBvcnQgY2xhc3MgTG9hZFN0YXRlIGV4dGVuZHMgTXlDb21wb25lbnQgaW1wbGVtZW50cyBJU3RhdGUge1xuICAgIHN0YXRlTmFtZTogc3RyaW5nID0gU3RhdGVUeXBlLkxvYWRTdGF0ZTtcbiAgICBjYW5Ub1N0YXRlTmFtZTogc3RyaW5nW10gPSBbU3RhdGVUeXBlLk1haW5TY2VuZVN0YXJ0U3RhdGVdO1xuICAgIGNhbkZyb21TdGF0ZU5hbWU6IHN0cmluZ1tdID0gW107XG4gICAgb25Mb2FkKCkge1xuICAgICAgICBnYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLmFkZFNlbGYyU3RhdGVNYXAoKTtcbiAgICAgICAgU3RhdGVNYWNoaW5lLkluaXQoXCJMb2FkU3RhdGVcIik7XG4gICAgfVxuXG4gICAgU3RhcnQoYXJnPzogYW55KTogdm9pZCB7XG4gICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuQ3JlYXRlU291bmRNYW5hZ2VyKClcbiAgICAgICAgdGhpcy5Mb2FkUG9wdXBzUHJlZmFiKCk7XG4gICAgICAgIHRoaXMuTG9hZFNvdW5kUHJlZmFiKCk7XG4gICAgICAgIHRoaXMuTG9hZFNjZW5lcygpO1xuICAgIH1cbiAgICBFbmQoYXJnPzogYW55KTogdm9pZCB7XG4gICAgICAgIC8vIGRpcmVjdG9yLmxvYWRTY2VuZShcIk1haW5TY2VuZVwiKTtcbiAgICB9XG4gICAgYWRkU2VsZjJTdGF0ZU1hcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLms6jlhoznirbmgIHmiJDlip/vvIxuYW1lOiBcIiwgdGhpcy5zdGF0ZU5hbWUpO1xuICAgICAgICBTdGF0ZU1hY2hpbmUuQWRkU3RhdGUodGhpcy5zdGF0ZU5hbWUsIHRoaXMubm9kZS5nZXRDb21wb25lbnQoTG9hZFN0YXRlKSBhcyBMb2FkU3RhdGUpXG4gICAgfVxuXG5cbiAgICBwcml2YXRlIENyZWF0ZVNvdW5kTWFuYWdlcigpIHtcbiAgICAgICAgbGV0IHNvdW5kTWFuYWdlciA9IG5ldyBOb2RlKFwiU291bmRNYW5hZ2VyXCIpO1xuICAgICAgICBzb3VuZE1hbmFnZXIuYWRkQ29tcG9uZW50KFNvdW5kTWFuYWdlcik7XG4gICAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50KVxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChzb3VuZE1hbmFnZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDliqDovb3lvLnnqpfnmoTpooTliLbkvZPvvIzlubbliJ3lp4vljJZQb3B1cE1hbmFnZXLkuK3nmoRwb3B1cHPmlbDnu4RcbiAgICAgKi9cbiAgICBwcml2YXRlIExvYWRQb3B1cHNQcmVmYWIoKSB7XG4gICAgICAgIC8vIHRoaXMuQ3JlYXRlUG9wdXBQYXJlbnQoKTtcbiAgICAgICAgbG9hZGVyLmxvYWRSZXNEaXIoXCJQb3B1cHNQcmVmYWJcIiwgZnVuY3Rpb24gKGVycjogYW55LCBhc3NldHM6IGFueSkge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBhc3NldHNbaV07XG4gICAgICAgICAgICAgICAgUG9wdXBNYW5hZ2VyLkkucG9wdXBzLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXgrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFBvcHVwTWFuYWdlci5JLnBvcHVwcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDliqDovb3pn7PmlYjvvIzlubbliJ3lp4vljJZTb3VuZE1hbmFnZXIuSS5hdWRpb3NcbiAgICAgKi9cbiAgICBwcml2YXRlIExvYWRTb3VuZFByZWZhYigpIHtcbiAgICAgICAgbG9hZGVyLmxvYWRSZXNEaXIoXCJTb3VuZHNcIiwgZnVuY3Rpb24gKGVycjogYW55LCBhc3NldHM6IGFueSkge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBhc3NldHNbaV07XG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLkkuYXVkaW9zLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXgrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFNvdW5kTWFuYWdlci5JLmF1ZGlvcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwcml2YXRlIExvYWRTY2VuZXMoKSB7XG4gICAgICAgIGRpcmVjdG9yLnByZWxvYWRTY2VuZShcIk1haW5TY2VuZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXgrKztcbiAgICAgICAgfSk7XG4gICAgICAgIGRpcmVjdG9yLnByZWxvYWRTY2VuZShcIkdhbWVTY2VuZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXgrKztcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbn1cbiJdfQ==