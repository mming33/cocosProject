System.register(["cce.code-quality.cr", "cc", "../Events/MyEvent.js", "../Game/GameData.js", "../Game/MyComponent.js", "../Popup/PopupManager.js", "../Sound/SoundManager.js", "../StateMachine/AddState.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, director, find, UITransformComponent, _decorator, Label, resources, EventType, MyEvent, GameData, MyComponent, PopupManager, SoundManager, AddState, _dec, _class, _class2, _temp, _crd, ccclass, property, LoadManager;

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

  function _reportPossibleCrUseOfAddState(extras) {
    _reporterNs.report("AddState", "../StateMachine/AddState", _context.meta, extras);
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
      AddState = _StateMachineAddStateJs.AddState;
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
          (_crd && AddState === void 0 ? (_reportPossibleCrUseOfAddState({
            error: Error()
          }), AddState) : AddState).AddAllState();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vTG9hZC9Mb2FkTWFuYWdlci50cyJdLCJuYW1lcyI6WyJkaXJlY3RvciIsImZpbmQiLCJVSVRyYW5zZm9ybUNvbXBvbmVudCIsIl9kZWNvcmF0b3IiLCJMYWJlbCIsInJlc291cmNlcyIsIkV2ZW50VHlwZSIsIk15RXZlbnQiLCJHYW1lRGF0YSIsIk15Q29tcG9uZW50IiwiUG9wdXBNYW5hZ2VyIiwiU291bmRNYW5hZ2VyIiwiQWRkU3RhdGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJMb2FkTWFuYWdlciIsIkluaXQiLCJJbml0Tm9kZSIsImlzTG9hZE92ZXIiLCJJIiwiZW1pdCIsIkxvYWRSZXNPdmVyIiwiTG9hZFJlcyIsIkFkZEFsbFN0YXRlIiwic2xpZGVyTWFzayIsImdldENvbXBvbmVudCIsInNsaWRlclRleHQiLCJMb2FkU3RhdGVzIiwic2NoZWR1bGUiLCJMb2FkU2xpZGVyIiwiTG9hZFNjZW5lcyIsIkxvYWRKc29uIiwiTG9hZFBvcHVwcyIsIkxvYWRTb3VuZCIsIkxvYWRPdmVyIiwidW5zY2hlZHVsZSIsImluZGV4IiwibG9hZEluZGV4IiwiYWxsbG9hZEluZGV4Iiwic3RyaW5nIiwiTWF0aCIsImZsb29yIiwid2lkdGgiLCJwcmVsb2FkU2NlbmUiLCJNYWluU2NlbmVQYXRoIiwiR2FtZVNjZW5lUGF0aCIsImxvYWQiLCJKc29uRGF0YVBhdGgiLCJlcnIiLCJhc3NldHMiLCJjb25zb2xlIiwiZXJyb3IiLCJHYW1lU2NlbmVEYXRhIiwianNvbiIsIkxldmVsIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQ0EsTUFBQUEsUSxPQUFBQSxRO0FBQVVDLE1BQUFBLEksT0FBQUEsSTtBQUE2Q0MsTUFBQUEsb0IsT0FBQUEsb0I7QUFBc0JD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cEM7QUFDSDs7QUFFRCxjQUFJLEtBQUtGLEtBQUwsSUFBYyxDQUFsQixFQUFxQjtBQUNqQixtQkFBTyxJQUFQO0FBQ0gsV0FGRCxNQUVPO0FBQ0gsbUJBQU8sS0FBUDtBQUNIO0FBQ0o7QUFDRDs7O0FBQ1FOLFFBQUFBLFVBQVIsR0FBcUI7QUFDakI5QixVQUFBQSxRQUFRLENBQUMyQyxZQUFULENBQXNCLEtBQUtDLGFBQTNCLEVBQTBDLE1BQU07QUFDNUM3QixZQUFBQSxXQUFXLENBQUNzQixTQUFaO0FBQ0gsV0FGRDtBQUdBckMsVUFBQUEsUUFBUSxDQUFDMkMsWUFBVCxDQUFzQixLQUFLRSxhQUEzQixFQUEwQyxNQUFNO0FBQzVDOUIsWUFBQUEsV0FBVyxDQUFDc0IsU0FBWjtBQUNILFdBRkQ7QUFHSDtBQUNEOzs7QUFDUU4sUUFBQUEsUUFBUixHQUFtQjtBQUNmMUIsVUFBQUEsU0FBUyxDQUFDeUMsSUFBVixDQUFlLEtBQUtDLFlBQXBCLEVBQWtDLFVBQVVDLEdBQVYsRUFBb0JDLE1BQXBCLEVBQWlDO0FBQy9ELGdCQUFJRCxHQUFKLEVBQVM7QUFDTEUsY0FBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWNILEdBQWQ7QUFDQTtBQUNIOztBQUNEO0FBQUE7QUFBQSxzQ0FBU0ksYUFBVCxHQUF5QkgsTUFBTSxDQUFDSSxJQUFQLENBQVlDLEtBQXJDO0FBQ0F2QyxZQUFBQSxXQUFXLENBQUNzQixTQUFaO0FBQ0FhLFlBQUFBLE9BQU8sQ0FBQ0ssR0FBUixDQUFZO0FBQUE7QUFBQSxzQ0FBU0gsYUFBckI7QUFDSCxXQVJEO0FBU0g7O0FBbEZ3QyxPLDJDQU1LLEMsMENBOEVqQixLLHlDQUNGLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW52YXNDb21wb25lbnQsIE5vZGUsIGRpcmVjdG9yLCBmaW5kLCBHRlhDbGVhckZsYWcsIGxvYWRlciwgU3ByaXRlQ29tcG9uZW50LCBVSVRyYW5zZm9ybUNvbXBvbmVudCwgX2RlY29yYXRvciwgYW5pbWF0aW9uLCBWZWMzLCBMYWJlbCwgcmVzb3VyY2VzIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgRXZlbnRUeXBlLCBNeUV2ZW50IH0gZnJvbSAnLi4vRXZlbnRzL015RXZlbnQnO1xuaW1wb3J0IHsgR2FtZURhdGEgfSBmcm9tICcuLi9HYW1lL0dhbWVEYXRhJztcbmltcG9ydCB7IE15Q29tcG9uZW50IH0gZnJvbSAnLi4vR2FtZS9NeUNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb3B1cE1hbmFnZXIgfSBmcm9tICcuLi9Qb3B1cC9Qb3B1cE1hbmFnZXInO1xuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi4vU291bmQvU291bmRNYW5hZ2VyJztcbmltcG9ydCB7IEFkZFN0YXRlIH0gZnJvbSAnLi4vU3RhdGVNYWNoaW5lL0FkZFN0YXRlJztcbmltcG9ydCB7IFNNTWFuZ2VyLCBTTU5hbWUgfSBmcm9tICcuLi9TdGF0ZU1hY2hpbmUvU01NYW5nZXInO1xuaW1wb3J0IHsgU3RhdGVUeXBlIH0gZnJvbSAnLi4vU3RhdGVNYWNoaW5lL1N0YXRlVHlwZSc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnTG9hZE1hbmFnZXInKVxuZXhwb3J0IGNsYXNzIExvYWRNYW5hZ2VyIGV4dGVuZHMgTXlDb21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBKc29uRGF0YVBhdGggPSBcIkpzb25EYXRhcy9MZXZlbERhdGFcIjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IE1haW5TY2VuZVBhdGggPSBcIk1haW5TY2VuZVwiO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgR2FtZVNjZW5lUGF0aCA9IFwiR2FtZVNjZW5lXCI7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGFsbGxvYWRJbmRleDogbnVtYmVyID0gNTtcbiAgICBcblxuICAgIEluaXQoKSB7XG4gICAgICAgIHRoaXMuSW5pdE5vZGUoKVxuICAgICAgICBpZiAoTG9hZE1hbmFnZXIuaXNMb2FkT3ZlciA9PSB0cnVlKSB7XG4gICAgICAgICAgICBNeUV2ZW50LkkuZW1pdChFdmVudFR5cGUuTG9hZFJlc092ZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5Mb2FkUmVzKCk7XG4gICAgICAgIH07XG4gICAgICAgIEFkZFN0YXRlLkFkZEFsbFN0YXRlKCk7XG4gICAgfVxuICAgIC8qKuWIneWni+WMlue7k+eCueS/oeaBryAqL1xuICAgIHByaXZhdGUgSW5pdE5vZGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2xpZGVyTWFzayA9IChmaW5kKFwiQ2FudmFzL1NsaWRlci9NYXNrXCIpIGFzIE5vZGUpLmdldENvbXBvbmVudChVSVRyYW5zZm9ybUNvbXBvbmVudCkgYXMgVUlUcmFuc2Zvcm1Db21wb25lbnQ7XG4gICAgICAgIHRoaXMuc2xpZGVyVGV4dCA9IChmaW5kKFwiQ2FudmFzL1NsaWRlci9UZXh0XCIpIGFzIE5vZGUpLmdldENvbXBvbmVudChMYWJlbCkgYXMgTGFiZWw7XG4gICAgfVxuICAgIC8qKuWQr+WKqOWKoOi9vei1hOa6kCAqL1xuICAgIHByaXZhdGUgTG9hZFJlcygpIHtcbiAgICAgICAgTXlFdmVudC5JLmVtaXQoRXZlbnRUeXBlLkxvYWRTdGF0ZXMpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuTG9hZFNsaWRlciwgMC4wMTUpO1xuICAgICAgICB0aGlzLkxvYWRTY2VuZXMoKTtcbiAgICAgICAgdGhpcy5Mb2FkSnNvbigpO1xuICAgICAgICBQb3B1cE1hbmFnZXIuTG9hZFBvcHVwcygpO1xuICAgICAgICBTb3VuZE1hbmFnZXIuTG9hZFNvdW5kKCk7XG4gICAgfVxuICAgIC8qKuWKoOi9veeVjOmdoueahOa7keWKqOadoee7k+adn+S6i+S7tiDnu5PmnZ/ml7bmtL7lj5FFdmVudFR5cGUuTG9hZFJlc092ZXLnmoTmtojmga8gKi9cbiAgICBwcml2YXRlIExvYWRTbGlkZXIoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLkxvYWRPdmVyKCkpIHtcbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmlzTG9hZE92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgTXlFdmVudC5JLmVtaXQoRXZlbnRUeXBlLkxvYWRSZXNPdmVyKTtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLkxvYWRTbGlkZXIpO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgLyoq5Yik5pat5piv5ZCm5Yqg6L295a6M5q+V77yM5bm25pS55Y+Y6L+b5bqm5p2h55qE6ZW/5bqmICovXG4gICAgcHJpdmF0ZSBMb2FkT3ZlcigpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuc2xpZGVyTWFzaykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXggPD0gTG9hZE1hbmFnZXIubG9hZEluZGV4IC8gTG9hZE1hbmFnZXIuYWxsbG9hZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSAwLjAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJUZXh0LnN0cmluZyA9IE1hdGguZmxvb3IodGhpcy5pbmRleCAqIDEwMCkgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNsaWRlck1hc2sud2lkdGggPSA1MTcgKiB0aGlzLmluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChMb2FkTWFuYWdlci5sb2FkSW5kZXggPj0gTG9hZE1hbmFnZXIuYWxsbG9hZEluZGV4KSB7XG4gICAgICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXggPSBMb2FkTWFuYWdlci5hbGxsb2FkSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pbmRleCA+PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKirpooTliqDovb3lnLrmma8gKi9cbiAgICBwcml2YXRlIExvYWRTY2VuZXMoKSB7XG4gICAgICAgIGRpcmVjdG9yLnByZWxvYWRTY2VuZSh0aGlzLk1haW5TY2VuZVBhdGgsICgpID0+IHtcbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCsrO1xuICAgICAgICB9KTtcbiAgICAgICAgZGlyZWN0b3IucHJlbG9hZFNjZW5lKHRoaXMuR2FtZVNjZW5lUGF0aCwgKCkgPT4ge1xuICAgICAgICAgICAgTG9hZE1hbmFnZXIubG9hZEluZGV4Kys7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKirliqDovb1qc29u5paH5Lu2ICovXG4gICAgcHJpdmF0ZSBMb2FkSnNvbigpIHtcbiAgICAgICAgcmVzb3VyY2VzLmxvYWQodGhpcy5Kc29uRGF0YVBhdGgsIGZ1bmN0aW9uIChlcnI6IGFueSwgYXNzZXRzOiBhbnkpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR2FtZURhdGEuR2FtZVNjZW5lRGF0YSA9IGFzc2V0cy5qc29uLkxldmVsO1xuICAgICAgICAgICAgTG9hZE1hbmFnZXIubG9hZEluZGV4Kys7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhHYW1lRGF0YS5HYW1lU2NlbmVEYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzTG9hZE92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzdGF0aWMgbG9hZEluZGV4OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc2xpZGVyTWFzazogVUlUcmFuc2Zvcm1Db21wb25lbnQgfCB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBzbGlkZXJUZXh0OiBMYWJlbCB8IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIGluZGV4ID0gMDtcbn1cbiJdfQ==