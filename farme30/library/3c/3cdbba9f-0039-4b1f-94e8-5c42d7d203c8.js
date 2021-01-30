System.register(["cce.code-quality.cr", "cc", "../Events/MyEvent.js", "../Game/GameData.js", "../Game/MyComponent.js", "../Popup/PopupManager.js", "../Sound/SoundManager.js", "../StateMachine/AddState.js", "../StateMachine/SMManger.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, director, find, UITransformComponent, _decorator, Label, resources, EventType, MyEvent, GameData, MyComponent, PopupManager, SoundManager, State, SMManger, _dec, _class, _class2, _temp, _crd, ccclass, property, LoadManager;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("LoadManager", LoadManager = (_dec = ccclass('LoadManager'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_ref) {
        _inheritsLoose(LoadManager, _ref);

        function LoadManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _ref.call.apply(_ref, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "JsonDataPath", "JsonDatas/LevelData");

          _defineProperty(_assertThisInitialized(_this), "MainScenePath", "MainScene");

          _defineProperty(_assertThisInitialized(_this), "GameScenePath", "GameScene");

          _defineProperty(_assertThisInitialized(_this), "sliderMask", void 0);

          _defineProperty(_assertThisInitialized(_this), "sliderText", void 0);

          _defineProperty(_assertThisInitialized(_this), "index", 0);

          return _this;
        }

        var _proto = LoadManager.prototype;

        _proto.Init = function Init() {
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
        ;

        _proto.InitNode = function InitNode() {
          this.sliderMask = find("Canvas/Slider/Mask").getComponent(UITransformComponent);
          this.sliderText = find("Canvas/Slider/Text").getComponent(Label);
        }
        /**启动加载资源 */
        ;

        _proto.LoadRes = function LoadRes() {
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
        ;

        _proto.LoadSlider = function LoadSlider() {
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
        ;

        _proto.LoadOver = function LoadOver() {
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
        ;

        _proto.LoadScenes = function LoadScenes() {
          director.preloadScene(this.MainScenePath, function () {
            LoadManager.loadIndex++;
          });
          director.preloadScene(this.GameScenePath, function () {
            LoadManager.loadIndex++;
          });
        }
        /**加载json文件 */
        ;

        _proto.LoadJson = function LoadJson() {
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
        };

        return LoadManager;
      }(_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent), _defineProperty(_class2, "allloadIndex", 5), _defineProperty(_class2, "isLoadOver", false), _defineProperty(_class2, "loadIndex", 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vTG9hZC9Mb2FkTWFuYWdlci50cyJdLCJuYW1lcyI6WyJkaXJlY3RvciIsImZpbmQiLCJVSVRyYW5zZm9ybUNvbXBvbmVudCIsIl9kZWNvcmF0b3IiLCJMYWJlbCIsInJlc291cmNlcyIsIkV2ZW50VHlwZSIsIk15RXZlbnQiLCJHYW1lRGF0YSIsIk15Q29tcG9uZW50IiwiUG9wdXBNYW5hZ2VyIiwiU291bmRNYW5hZ2VyIiwiU3RhdGUiLCJTTU1hbmdlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkxvYWRNYW5hZ2VyIiwiSW5pdCIsIkF1dG9BbmRBbGxTdGF0ZUFuZENyZWF0ZVNNIiwiSW5pdE5vZGUiLCJpc0xvYWRPdmVyIiwiSSIsImVtaXQiLCJMb2FkUmVzT3ZlciIsIkxvYWRSZXMiLCJBZGRTdGF0ZSIsInNsaWRlck1hc2siLCJnZXRDb21wb25lbnQiLCJzbGlkZXJUZXh0IiwiTG9hZFN0YXRlcyIsInNjaGVkdWxlIiwiTG9hZFNsaWRlciIsIkxvYWRTY2VuZXMiLCJMb2FkSnNvbiIsIkxvYWRQb3B1cHMiLCJMb2FkU291bmQiLCJMb2FkT3ZlciIsInVuc2NoZWR1bGUiLCJpbmRleCIsImxvYWRJbmRleCIsImFsbGxvYWRJbmRleCIsInN0cmluZyIsIk1hdGgiLCJmbG9vciIsIndpZHRoIiwicHJlbG9hZFNjZW5lIiwiTWFpblNjZW5lUGF0aCIsIkdhbWVTY2VuZVBhdGgiLCJsb2FkIiwiSnNvbkRhdGFQYXRoIiwiZXJyIiwiYXNzZXRzIiwiY29uc29sZSIsImVycm9yIiwiR2FtZVNjZW5lRGF0YSIsImpzb24iLCJMZXZlbCIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQ0EsTUFBQUEsUSxPQUFBQSxRO0FBQVVDLE1BQUFB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LFdBQVcsQ0FBQ3dCLFlBQXBDO0FBQ0g7O0FBRUQsY0FBSSxLQUFLRixLQUFMLElBQWMsQ0FBbEIsRUFBcUI7QUFDakIsbUJBQU8sSUFBUDtBQUNILFdBRkQsTUFFTztBQUNILG1CQUFPLEtBQVA7QUFDSDtBQUNKO0FBQ0Q7OztlQUNRTixVLEdBQVIsc0JBQXFCO0FBQ2pCaEMsVUFBQUEsUUFBUSxDQUFDNkMsWUFBVCxDQUFzQixLQUFLQyxhQUEzQixFQUEwQyxZQUFNO0FBQzVDOUIsWUFBQUEsV0FBVyxDQUFDdUIsU0FBWjtBQUNILFdBRkQ7QUFHQXZDLFVBQUFBLFFBQVEsQ0FBQzZDLFlBQVQsQ0FBc0IsS0FBS0UsYUFBM0IsRUFBMEMsWUFBTTtBQUM1Qy9CLFlBQUFBLFdBQVcsQ0FBQ3VCLFNBQVo7QUFDSCxXQUZEO0FBR0g7QUFDRDs7O2VBQ1FOLFEsR0FBUixvQkFBbUI7QUFDZjVCLFVBQUFBLFNBQVMsQ0FBQzJDLElBQVYsQ0FBZSxLQUFLQyxZQUFwQixFQUFrQyxVQUFVQyxHQUFWLEVBQW9CQyxNQUFwQixFQUFpQztBQUMvRCxnQkFBSUQsR0FBSixFQUFTO0FBQ0xFLGNBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjSCxHQUFkO0FBQ0E7QUFDSDs7QUFDRDtBQUFBO0FBQUEsc0NBQVNJLGFBQVQsR0FBeUJILE1BQU0sQ0FBQ0ksSUFBUCxDQUFZQyxLQUFyQztBQUNBeEMsWUFBQUEsV0FBVyxDQUFDdUIsU0FBWjtBQUNBYSxZQUFBQSxPQUFPLENBQUNLLEdBQVIsQ0FBWTtBQUFBO0FBQUEsc0NBQVNILGFBQXJCO0FBQ0gsV0FSRDtBQVNILFM7Ozs7O2dGQTVFNkMsQywwQ0E4RWpCLEsseUNBQ0YsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbnZhc0NvbXBvbmVudCwgTm9kZSwgZGlyZWN0b3IsIGZpbmQsIEdGWENsZWFyRmxhZywgbG9hZGVyLCBTcHJpdGVDb21wb25lbnQsIFVJVHJhbnNmb3JtQ29tcG9uZW50LCBfZGVjb3JhdG9yLCBhbmltYXRpb24sIFZlYzMsIExhYmVsLCByZXNvdXJjZXMgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBFdmVudFR5cGUsIE15RXZlbnQgfSBmcm9tICcuLi9FdmVudHMvTXlFdmVudCc7XG5pbXBvcnQgeyBHYW1lRGF0YSB9IGZyb20gJy4uL0dhbWUvR2FtZURhdGEnO1xuaW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tICcuLi9HYW1lL015Q29tcG9uZW50JztcbmltcG9ydCB7IFBvcHVwTWFuYWdlciB9IGZyb20gJy4uL1BvcHVwL1BvcHVwTWFuYWdlcic7XG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tICcuLi9Tb3VuZC9Tb3VuZE1hbmFnZXInO1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLi9TdGF0ZU1hY2hpbmUvQWRkU3RhdGUnO1xuaW1wb3J0IHsgU01NYW5nZXIsIFNNTmFtZSB9IGZyb20gJy4uL1N0YXRlTWFjaGluZS9TTU1hbmdlcic7XG5pbXBvcnQgeyBTdGF0ZVR5cGUgfSBmcm9tICcuLi9TdGF0ZU1hY2hpbmUvU3RhdGVUeXBlJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdMb2FkTWFuYWdlcicpXG5leHBvcnQgY2xhc3MgTG9hZE1hbmFnZXIgZXh0ZW5kcyBNeUNvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IEpzb25EYXRhUGF0aCA9IFwiSnNvbkRhdGFzL0xldmVsRGF0YVwiO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgTWFpblNjZW5lUGF0aCA9IFwiTWFpblNjZW5lXCI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBHYW1lU2NlbmVQYXRoID0gXCJHYW1lU2NlbmVcIjtcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGFsbGxvYWRJbmRleDogbnVtYmVyID0gNTtcblxuICAgIEluaXQoKSB7XG4gICAgICAgIFNNTWFuZ2VyLkF1dG9BbmRBbGxTdGF0ZUFuZENyZWF0ZVNNKCk7XG4gICAgICAgIHRoaXMuSW5pdE5vZGUoKVxuICAgICAgICBpZiAoTG9hZE1hbmFnZXIuaXNMb2FkT3ZlciA9PSB0cnVlKSB7XG4gICAgICAgICAgICBNeUV2ZW50LkkuZW1pdChFdmVudFR5cGUuTG9hZFJlc092ZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5Mb2FkUmVzKCk7XG4gICAgICAgIH07XG4gICAgICAgIFN0YXRlLkFkZFN0YXRlKCk7XG4gICAgfVxuICAgIC8qKuWIneWni+WMlue7k+eCueS/oeaBryAqL1xuICAgIHByaXZhdGUgSW5pdE5vZGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2xpZGVyTWFzayA9IChmaW5kKFwiQ2FudmFzL1NsaWRlci9NYXNrXCIpIGFzIE5vZGUpLmdldENvbXBvbmVudChVSVRyYW5zZm9ybUNvbXBvbmVudCkgYXMgVUlUcmFuc2Zvcm1Db21wb25lbnQ7XG4gICAgICAgIHRoaXMuc2xpZGVyVGV4dCA9IChmaW5kKFwiQ2FudmFzL1NsaWRlci9UZXh0XCIpIGFzIE5vZGUpLmdldENvbXBvbmVudChMYWJlbCkgYXMgTGFiZWw7XG4gICAgfVxuICAgIC8qKuWQr+WKqOWKoOi9vei1hOa6kCAqL1xuICAgIHByaXZhdGUgTG9hZFJlcygpIHtcbiAgICAgICAgTXlFdmVudC5JLmVtaXQoRXZlbnRUeXBlLkxvYWRTdGF0ZXMpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuTG9hZFNsaWRlciwgMC4wMTUpO1xuICAgICAgICB0aGlzLkxvYWRTY2VuZXMoKTtcbiAgICAgICAgdGhpcy5Mb2FkSnNvbigpO1xuICAgICAgICBQb3B1cE1hbmFnZXIuTG9hZFBvcHVwcygpO1xuICAgICAgICBTb3VuZE1hbmFnZXIuTG9hZFNvdW5kKCk7XG4gICAgfVxuICAgIC8qKuWKoOi9veeVjOmdoueahOa7keWKqOadoee7k+adn+S6i+S7tiDnu5PmnZ/ml7bmtL7lj5FFdmVudFR5cGUuTG9hZFJlc092ZXLnmoTmtojmga8gKi9cbiAgICBwcml2YXRlIExvYWRTbGlkZXIoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLkxvYWRPdmVyKCkpIHtcbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmlzTG9hZE92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgTXlFdmVudC5JLmVtaXQoRXZlbnRUeXBlLkxvYWRSZXNPdmVyKTtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLkxvYWRTbGlkZXIpO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgLyoq5Yik5pat5piv5ZCm5Yqg6L295a6M5q+V77yM5bm25pS55Y+Y6L+b5bqm5p2h55qE6ZW/5bqmICovXG4gICAgcHJpdmF0ZSBMb2FkT3ZlcigpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuc2xpZGVyTWFzaykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXggPD0gTG9hZE1hbmFnZXIubG9hZEluZGV4IC8gTG9hZE1hbmFnZXIuYWxsbG9hZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSAwLjAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJUZXh0LnN0cmluZyA9IE1hdGguZmxvb3IodGhpcy5pbmRleCAqIDEwMCkgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNsaWRlck1hc2sud2lkdGggPSA1MTcgKiB0aGlzLmluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChMb2FkTWFuYWdlci5sb2FkSW5kZXggPj0gTG9hZE1hbmFnZXIuYWxsbG9hZEluZGV4KSB7XG4gICAgICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXggPSBMb2FkTWFuYWdlci5hbGxsb2FkSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pbmRleCA+PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKirpooTliqDovb3lnLrmma8gKi9cbiAgICBwcml2YXRlIExvYWRTY2VuZXMoKSB7XG4gICAgICAgIGRpcmVjdG9yLnByZWxvYWRTY2VuZSh0aGlzLk1haW5TY2VuZVBhdGgsICgpID0+IHtcbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCsrO1xuICAgICAgICB9KTtcbiAgICAgICAgZGlyZWN0b3IucHJlbG9hZFNjZW5lKHRoaXMuR2FtZVNjZW5lUGF0aCwgKCkgPT4ge1xuICAgICAgICAgICAgTG9hZE1hbmFnZXIubG9hZEluZGV4Kys7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKirliqDovb1qc29u5paH5Lu2ICovXG4gICAgcHJpdmF0ZSBMb2FkSnNvbigpIHtcbiAgICAgICAgcmVzb3VyY2VzLmxvYWQodGhpcy5Kc29uRGF0YVBhdGgsIGZ1bmN0aW9uIChlcnI6IGFueSwgYXNzZXRzOiBhbnkpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR2FtZURhdGEuR2FtZVNjZW5lRGF0YSA9IGFzc2V0cy5qc29uLkxldmVsO1xuICAgICAgICAgICAgTG9hZE1hbmFnZXIubG9hZEluZGV4Kys7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhHYW1lRGF0YS5HYW1lU2NlbmVEYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzTG9hZE92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBzdGF0aWMgbG9hZEluZGV4OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc2xpZGVyTWFzazogVUlUcmFuc2Zvcm1Db21wb25lbnQgfCB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBzbGlkZXJUZXh0OiBMYWJlbCB8IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIGluZGV4ID0gMDtcbn1cbiJdfQ==