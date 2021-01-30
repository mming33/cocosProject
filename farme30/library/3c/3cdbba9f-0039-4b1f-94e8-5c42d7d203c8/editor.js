System.register(["cce.code-quality.cr", "cc", "../Events/MyEvent.js", "../Game/GameData.js", "../Game/MyComponent.js", "../Popup/PopupManager.js", "../Sound/SoundManager.js", "../StateMachine/AddState.js", "../StateMachine/SMManger.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, director, find, UITransformComponent, _decorator, Label, resources, EventType, MyEvent, GameData, MyComponent, PopupManager, SoundManager, State, SMManger, _dec, _class, _class2, _temp, _crd, ccclass, property, LoadManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfEventType(extras) {
    _reporterNs.report("EventType", "../Events/MyEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMyEvent(extras) {
    _reporterNs.report("MyEvent", "../Events/MyEvent", _context.meta, extras);
  }

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

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../StateMachine/AddState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSMManger(extras) {
    _reporterNs.report("SMManger", "../StateMachine/SMManger", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      director = _cc.director;
      find = _cc.find;
      UITransformComponent = _cc.UITransformComponent;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      resources = _cc.resources;
    }, function (_EventsMyEventJs) {
      EventType = _EventsMyEventJs.EventType;
      MyEvent = _EventsMyEventJs.MyEvent;
    }, function (_GameGameDataJs) {
      GameData = _GameGameDataJs.GameData;
    }, function (_GameMyComponentJs) {
      MyComponent = _GameMyComponentJs.MyComponent;
    }, function (_PopupPopupManagerJs) {
      PopupManager = _PopupPopupManagerJs.PopupManager;
    }, function (_SoundSoundManagerJs) {
      SoundManager = _SoundSoundManagerJs.SoundManager;
    }, function (_StateMachineAddStateJs) {
      State = _StateMachineAddStateJs.State;
    }, function (_StateMachineSMMangerJs) {
      SMManger = _StateMachineSMMangerJs.SMManger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3cdbbqfADlLH5ToXELX0gPI", "LoadManager", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoadManager", LoadManager = (_dec = ccclass('LoadManager'), _dec(_class = (_temp = _class2 = class LoadManager extends (_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "JsonDataPath", "JsonDatas/LevelData");

          _defineProperty(this, "MainScenePath", "MainScene");

          _defineProperty(this, "GameScenePath", "GameScene");

          _defineProperty(this, "sliderMask", void 0);

          _defineProperty(this, "sliderText", void 0);

          _defineProperty(this, "index", 0);
        }

        Init() {
          (_crd && SMManger === void 0 ? (_reportPossibleCrUseOfSMManger({
            error: Error()
          }), SMManger) : SMManger).AutoAndAllStateAndCreateSM();
          this.InitNode();

          if (LoadManager.isLoadOver == true) {
            (_crd && MyEvent === void 0 ? (_reportPossibleCrUseOfMyEvent({
              error: Error()
            }), MyEvent) : MyEvent).I.emit((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).LoadResOver);
          } else {
            this.LoadRes();
          }

          ;
          (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State).AddState();
        }
        /**初始化结点信息 */


        InitNode() {
          this.sliderMask = find("Canvas/Slider/Mask").getComponent(UITransformComponent);
          this.sliderText = find("Canvas/Slider/Text").getComponent(Label);
        }
        /**启动加载资源 */


        LoadRes() {
          (_crd && MyEvent === void 0 ? (_reportPossibleCrUseOfMyEvent({
            error: Error()
          }), MyEvent) : MyEvent).I.emit((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
            error: Error()
          }), EventType) : EventType).LoadStates);
          this.schedule(this.LoadSlider, 0.015);
          this.LoadScenes();
          this.LoadJson();
          (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).LoadPopups();
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).LoadSound();
        }
        /**加载界面的滑动条结束事件 结束时派发EventType.LoadResOver的消息 */


        LoadSlider() {
          if (this.LoadOver()) {
            LoadManager.isLoadOver = true;
            (_crd && MyEvent === void 0 ? (_reportPossibleCrUseOfMyEvent({
              error: Error()
            }), MyEvent) : MyEvent).I.emit((_crd && EventType === void 0 ? (_reportPossibleCrUseOfEventType({
              error: Error()
            }), EventType) : EventType).LoadResOver);
            this.unschedule(this.LoadSlider);
          }
        }
        /**判断是否加载完毕，并改变进度条的长度 */


        LoadOver() {
          if (this.sliderMask) {
            if (this.index <= LoadManager.loadIndex / LoadManager.allloadIndex) {
              this.index += 0.01;

              if (this.sliderText) {
                this.sliderText.string = Math.floor(this.index * 100) + "%";
              }
            }

            this.sliderMask.width = 517 * this.index;
          }

          if (LoadManager.loadIndex >= LoadManager.allloadIndex) {
            LoadManager.loadIndex = LoadManager.allloadIndex;
          }

          if (this.index >= 1) {
            return true;
          } else {
            return false;
          }
        }
        /**预加载场景 */


        LoadScenes() {
          director.preloadScene(this.MainScenePath, () => {
            LoadManager.loadIndex++;
          });
          director.preloadScene(this.GameScenePath, () => {
            LoadManager.loadIndex++;
          });
        }
        /**加载json文件 */


        LoadJson() {
          resources.load(this.JsonDataPath, function (err, assets) {
            if (err) {
              console.error(err);
              return;
            }

            (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).GameSceneData = assets.json.Level;
            LoadManager.loadIndex++;
            console.log((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).GameSceneData);
          });
        }

      }, _defineProperty(_class2, "allloadIndex", 5), _defineProperty(_class2, "isLoadOver", false), _defineProperty(_class2, "loadIndex", 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vTG9hZC9Mb2FkTWFuYWdlci50cyJdLCJuYW1lcyI6WyJkaXJlY3RvciIsImZpbmQiLCJVSVRyYW5zZm9ybUNvbXBvbmVudCIsIl9kZWNvcmF0b3IiLCJMYWJlbCIsInJlc291cmNlcyIsIkV2ZW50VHlwZSIsIk15RXZlbnQiLCJHYW1lRGF0YSIsIk15Q29tcG9uZW50IiwiUG9wdXBNYW5hZ2VyIiwiU291bmRNYW5hZ2VyIiwiU3RhdGUiLCJTTU1hbmdlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkxvYWRNYW5hZ2VyIiwiSW5pdCIsIkF1dG9BbmRBbGxTdGF0ZUFuZENyZWF0ZVNNIiwiSW5pdE5vZGUiLCJpc0xvYWRPdmVyIiwiSSIsImVtaXQiLCJMb2FkUmVzT3ZlciIsIkxvYWRSZXMiLCJBZGRTdGF0ZSIsInNsaWRlck1hc2siLCJnZXRDb21wb25lbnQiLCJzbGlkZXJUZXh0IiwiTG9hZFN0YXRlcyIsInNjaGVkdWxlIiwiTG9hZFNsaWRlciIsIkxvYWRTY2VuZXMiLCJMb2FkSnNvbiIsIkxvYWRQb3B1cHMiLCJMb2FkU291bmQiLCJMb2FkT3ZlciIsInVuc2NoZWR1bGUiLCJpbmRleCIsImxvYWRJbmRleCIsImFsbGxvYWRJbmRleCIsInN0cmluZyIsIk1hdGgiLCJmbG9vciIsIndpZHRoIiwicHJlbG9hZFNjZW5lIiwiTWFpblNjZW5lUGF0aCIsIkdhbWVTY2VuZVBhdGgiLCJsb2FkIiwiSnNvbkRhdGFQYXRoIiwiZXJyIiwiYXNzZXRzIiwiY29uc29sZSIsImVycm9yIiwiR2FtZVNjZW5lRGF0YSIsImpzb24iLCJMZXZlbCIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDQSxNQUFBQSxRLE9BQUFBLFE7QUFBVUMsTUFBQUEsSSxP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QUFaLElBQXlCdkIsV0FBVyxDQUFDd0IsWUFBekMsRUFBdUQ7QUFDbkR4QixZQUFBQSxXQUFXLENBQUN1QixTQUFaLEdBQXdCdkIsV0FBVyxDQUFDd0IsWUFBcEM7QUFDSDs7QUFFRCxjQUFJLEtBQUtGLEtBQUwsSUFBYyxDQUFsQixFQUFxQjtBQUNqQixtQkFBTyxJQUFQO0FBQ0gsV0FGRCxNQUVPO0FBQ0gsbUJBQU8sS0FBUDtBQUNIO0FBQ0o7QUFDRDs7O0FBQ1FOLFFBQUFBLFVBQVIsR0FBcUI7QUFDakJoQyxVQUFBQSxRQUFRLENBQUM2QyxZQUFULENBQXNCLEtBQUtDLGFBQTNCLEVBQTBDLE1BQU07QUFDNUM5QixZQUFBQSxXQUFXLENBQUN1QixTQUFaO0FBQ0gsV0FGRDtBQUdBdkMsVUFBQUEsUUFBUSxDQUFDNkMsWUFBVCxDQUFzQixLQUFLRSxhQUEzQixFQUEwQyxNQUFNO0FBQzVDL0IsWUFBQUEsV0FBVyxDQUFDdUIsU0FBWjtBQUNILFdBRkQ7QUFHSDtBQUNEOzs7QUFDUU4sUUFBQUEsUUFBUixHQUFtQjtBQUNmNUIsVUFBQUEsU0FBUyxDQUFDMkMsSUFBVixDQUFlLEtBQUtDLFlBQXBCLEVBQWtDLFVBQVVDLEdBQVYsRUFBb0JDLE1BQXBCLEVBQWlDO0FBQy9ELGdCQUFJRCxHQUFKLEVBQVM7QUFDTEUsY0FBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWNILEdBQWQ7QUFDQTtBQUNIOztBQUNEO0FBQUE7QUFBQSxzQ0FBU0ksYUFBVCxHQUF5QkgsTUFBTSxDQUFDSSxJQUFQLENBQVlDLEtBQXJDO0FBQ0F4QyxZQUFBQSxXQUFXLENBQUN1QixTQUFaO0FBQ0FhLFlBQUFBLE9BQU8sQ0FBQ0ssR0FBUixDQUFZO0FBQUE7QUFBQSxzQ0FBU0gsYUFBckI7QUFDSCxXQVJEO0FBU0g7O0FBakZ3QyxPLDJDQUtLLEMsMENBOEVqQixLLHlDQUNGLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW52YXNDb21wb25lbnQsIE5vZGUsIGRpcmVjdG9yLCBmaW5kLCBHRlhDbGVhckZsYWcsIGxvYWRlciwgU3ByaXRlQ29tcG9uZW50LCBVSVRyYW5zZm9ybUNvbXBvbmVudCwgX2RlY29yYXRvciwgYW5pbWF0aW9uLCBWZWMzLCBMYWJlbCwgcmVzb3VyY2VzIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgRXZlbnRUeXBlLCBNeUV2ZW50IH0gZnJvbSAnLi4vRXZlbnRzL015RXZlbnQnO1xuaW1wb3J0IHsgR2FtZURhdGEgfSBmcm9tICcuLi9HYW1lL0dhbWVEYXRhJztcbmltcG9ydCB7IE15Q29tcG9uZW50IH0gZnJvbSAnLi4vR2FtZS9NeUNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb3B1cE1hbmFnZXIgfSBmcm9tICcuLi9Qb3B1cC9Qb3B1cE1hbmFnZXInO1xuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi4vU291bmQvU291bmRNYW5hZ2VyJztcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vU3RhdGVNYWNoaW5lL0FkZFN0YXRlJztcbmltcG9ydCB7IFNNTWFuZ2VyLCBTTU5hbWUgfSBmcm9tICcuLi9TdGF0ZU1hY2hpbmUvU01NYW5nZXInO1xuaW1wb3J0IHsgU3RhdGVUeXBlIH0gZnJvbSAnLi4vU3RhdGVNYWNoaW5lL1N0YXRlVHlwZSc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnTG9hZE1hbmFnZXInKVxuZXhwb3J0IGNsYXNzIExvYWRNYW5hZ2VyIGV4dGVuZHMgTXlDb21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBKc29uRGF0YVBhdGggPSBcIkpzb25EYXRhcy9MZXZlbERhdGFcIjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IE1haW5TY2VuZVBhdGggPSBcIk1haW5TY2VuZVwiO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgR2FtZVNjZW5lUGF0aCA9IFwiR2FtZVNjZW5lXCI7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBhbGxsb2FkSW5kZXg6IG51bWJlciA9IDU7XG5cbiAgICBJbml0KCkge1xuICAgICAgICBTTU1hbmdlci5BdXRvQW5kQWxsU3RhdGVBbmRDcmVhdGVTTSgpO1xuICAgICAgICB0aGlzLkluaXROb2RlKClcbiAgICAgICAgaWYgKExvYWRNYW5hZ2VyLmlzTG9hZE92ZXIgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgTXlFdmVudC5JLmVtaXQoRXZlbnRUeXBlLkxvYWRSZXNPdmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuTG9hZFJlcygpO1xuICAgICAgICB9O1xuICAgICAgICBTdGF0ZS5BZGRTdGF0ZSgpO1xuICAgIH1cbiAgICAvKirliJ3lp4vljJbnu5Pngrnkv6Hmga8gKi9cbiAgICBwcml2YXRlIEluaXROb2RlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNsaWRlck1hc2sgPSAoZmluZChcIkNhbnZhcy9TbGlkZXIvTWFza1wiKSBhcyBOb2RlKS5nZXRDb21wb25lbnQoVUlUcmFuc2Zvcm1Db21wb25lbnQpIGFzIFVJVHJhbnNmb3JtQ29tcG9uZW50O1xuICAgICAgICB0aGlzLnNsaWRlclRleHQgPSAoZmluZChcIkNhbnZhcy9TbGlkZXIvVGV4dFwiKSBhcyBOb2RlKS5nZXRDb21wb25lbnQoTGFiZWwpIGFzIExhYmVsO1xuICAgIH1cbiAgICAvKirlkK/liqjliqDovb3otYTmupAgKi9cbiAgICBwcml2YXRlIExvYWRSZXMoKSB7XG4gICAgICAgIE15RXZlbnQuSS5lbWl0KEV2ZW50VHlwZS5Mb2FkU3RhdGVzKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLkxvYWRTbGlkZXIsIDAuMDE1KTtcbiAgICAgICAgdGhpcy5Mb2FkU2NlbmVzKCk7XG4gICAgICAgIHRoaXMuTG9hZEpzb24oKTtcbiAgICAgICAgUG9wdXBNYW5hZ2VyLkxvYWRQb3B1cHMoKTtcbiAgICAgICAgU291bmRNYW5hZ2VyLkxvYWRTb3VuZCgpO1xuICAgIH1cbiAgICAvKirliqDovb3nlYzpnaLnmoTmu5HliqjmnaHnu5PmnZ/kuovku7Yg57uT5p2f5pe25rS+5Y+RRXZlbnRUeXBlLkxvYWRSZXNPdmVy55qE5raI5oGvICovXG4gICAgcHJpdmF0ZSBMb2FkU2xpZGVyKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5Mb2FkT3ZlcigpKSB7XG4gICAgICAgICAgICBMb2FkTWFuYWdlci5pc0xvYWRPdmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIE15RXZlbnQuSS5lbWl0KEV2ZW50VHlwZS5Mb2FkUmVzT3Zlcik7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5Mb2FkU2xpZGVyKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIC8qKuWIpOaWreaYr+WQpuWKoOi9veWujOavle+8jOW5tuaUueWPmOi/m+W6puadoeeahOmVv+W6piAqL1xuICAgIHByaXZhdGUgTG9hZE92ZXIoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLnNsaWRlck1hc2spIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV4IDw9IExvYWRNYW5hZ2VyLmxvYWRJbmRleCAvIExvYWRNYW5hZ2VyLmFsbGxvYWRJbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gMC4wMTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zbGlkZXJUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyVGV4dC5zdHJpbmcgPSBNYXRoLmZsb29yKHRoaXMuaW5kZXggKiAxMDApICsgXCIlXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zbGlkZXJNYXNrLndpZHRoID0gNTE3ICogdGhpcy5pbmRleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoTG9hZE1hbmFnZXIubG9hZEluZGV4ID49IExvYWRNYW5hZ2VyLmFsbGxvYWRJbmRleCkge1xuICAgICAgICAgICAgTG9hZE1hbmFnZXIubG9hZEluZGV4ID0gTG9hZE1hbmFnZXIuYWxsbG9hZEluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaW5kZXggPj0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoq6aKE5Yqg6L295Zy65pmvICovXG4gICAgcHJpdmF0ZSBMb2FkU2NlbmVzKCkge1xuICAgICAgICBkaXJlY3Rvci5wcmVsb2FkU2NlbmUodGhpcy5NYWluU2NlbmVQYXRoLCAoKSA9PiB7XG4gICAgICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXgrKztcbiAgICAgICAgfSk7XG4gICAgICAgIGRpcmVjdG9yLnByZWxvYWRTY2VuZSh0aGlzLkdhbWVTY2VuZVBhdGgsICgpID0+IHtcbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCsrO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoq5Yqg6L29anNvbuaWh+S7tiAqL1xuICAgIHByaXZhdGUgTG9hZEpzb24oKSB7XG4gICAgICAgIHJlc291cmNlcy5sb2FkKHRoaXMuSnNvbkRhdGFQYXRoLCBmdW5jdGlvbiAoZXJyOiBhbnksIGFzc2V0czogYW55KSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdhbWVEYXRhLkdhbWVTY2VuZURhdGEgPSBhc3NldHMuanNvbi5MZXZlbDtcbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCsrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coR2FtZURhdGEuR2FtZVNjZW5lRGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc0xvYWRPdmVyOiBib29sZWFuID0gZmFsc2U7XG4gICAgc3RhdGljIGxvYWRJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHNsaWRlck1hc2s6IFVJVHJhbnNmb3JtQ29tcG9uZW50IHwgdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgc2xpZGVyVGV4dDogTGFiZWwgfCB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBpbmRleCA9IDA7XG59XG4iXX0=