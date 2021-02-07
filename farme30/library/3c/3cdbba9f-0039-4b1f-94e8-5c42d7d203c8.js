System.register(["cce.code-quality.cr", "cc", "../Events/MyEvent.js", "../Game/GameData.js", "../Game/MyComponent.js", "../Popup/PopupManager.js", "../Sound/SoundManager.js", "../StateMachine/AddState.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, director, find, UITransformComponent, _decorator, Label, resources, EventType, MyEvent, GameData, MyComponent, PopupManager, SoundManager, AddState, _dec, _class, _class2, _temp, _crd, ccclass, property, LoadManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vTG9hZC9Mb2FkTWFuYWdlci50cyJdLCJuYW1lcyI6WyJkaXJlY3RvciIsImZpbmQiLCJVSVRyYW5zZm9ybUNvbXBvbmVudCIsIl9kZWNvcmF0b3IiLCJMYWJlbCIsInJlc291cmNlcyIsIkV2ZW50VHlwZSIsIk15RXZlbnQiLCJHYW1lRGF0YSIsIk15Q29tcG9uZW50IiwiUG9wdXBNYW5hZ2VyIiwiU291bmRNYW5hZ2VyIiwiQWRkU3RhdGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJMb2FkTWFuYWdlciIsIkluaXQiLCJJbml0Tm9kZSIsImlzTG9hZE92ZXIiLCJJIiwiZW1pdCIsIkxvYWRSZXNPdmVyIiwiTG9hZFJlcyIsIkFkZEFsbFN0YXRlIiwic2xpZGVyTWFzayIsImdldENvbXBvbmVudCIsInNsaWRlclRleHQiLCJMb2FkU3RhdGVzIiwic2NoZWR1bGUiLCJMb2FkU2xpZGVyIiwiTG9hZFNjZW5lcyIsIkxvYWRKc29uIiwiTG9hZFBvcHVwcyIsIkxvYWRTb3VuZCIsIkxvYWRPdmVyIiwidW5zY2hlZHVsZSIsImluZGV4IiwibG9hZEluZGV4IiwiYWxsbG9hZEluZGV4Iiwic3RyaW5nIiwiTWF0aCIsImZsb29yIiwid2lkdGgiLCJwcmVsb2FkU2NlbmUiLCJNYWluU2NlbmVQYXRoIiwiR2FtZVNjZW5lUGF0aCIsImxvYWQiLCJKc29uRGF0YVBhdGgiLCJlcnIiLCJhc3NldHMiLCJjb25zb2xlIiwiZXJyb3IiLCJHYW1lU2NlbmVEYXRhIiwianNvbiIsIkxldmVsIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0NBLE1BQUFBLFEsT0FBQUEsUTtBQUFVQyxNQUFBQSxJLE9BQUFBLEk7QUFBNkNDLE1BQUFBLG9CLE9BQUFBLG9CO0FB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TUFFTztBQUNILG1CQUFPLEtBQVA7QUFDSDtBQUNKO0FBQ0Q7OztlQUNRTixVLEdBQVIsc0JBQXFCO0FBQ2pCOUIsVUFBQUEsUUFBUSxDQUFDMkMsWUFBVCxDQUFzQixLQUFLQyxhQUEzQixFQUEwQyxZQUFNO0FBQzVDN0IsWUFBQUEsV0FBVyxDQUFDc0IsU0FBWjtBQUNILFdBRkQ7QUFHQXJDLFVBQUFBLFFBQVEsQ0FBQzJDLFlBQVQsQ0FBc0IsS0FBS0UsYUFBM0IsRUFBMEMsWUFBTTtBQUM1QzlCLFlBQUFBLFdBQVcsQ0FBQ3NCLFNBQVo7QUFDSCxXQUZEO0FBR0g7QUFDRDs7O2VBQ1FOLFEsR0FBUixvQkFBbUI7QUFDZjFCLFVBQUFBLFNBQVMsQ0FBQ3lDLElBQVYsQ0FBZSxLQUFLQyxZQUFwQixFQUFrQyxVQUFVQyxHQUFWLEVBQW9CQyxNQUFwQixFQUFpQztBQUMvRCxnQkFBSUQsR0FBSixFQUFTO0FBQ0xFLGNBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjSCxHQUFkO0FBQ0E7QUFDSDs7QUFDRDtBQUFBO0FBQUEsc0NBQVNJLGFBQVQsR0FBeUJILE1BQU0sQ0FBQ0ksSUFBUCxDQUFZQyxLQUFyQztBQUNBdkMsWUFBQUEsV0FBVyxDQUFDc0IsU0FBWjtBQUNBYSxZQUFBQSxPQUFPLENBQUNLLEdBQVIsQ0FBWTtBQUFBO0FBQUEsc0NBQVNILGFBQXJCO0FBQ0gsV0FSRDtBQVNILFM7Ozs7O2dGQTVFNkMsQywwQ0E4RWpCLEsseUNBQ0YsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbnZhc0NvbXBvbmVudCwgTm9kZSwgZGlyZWN0b3IsIGZpbmQsIEdGWENsZWFyRmxhZywgbG9hZGVyLCBTcHJpdGVDb21wb25lbnQsIFVJVHJhbnNmb3JtQ29tcG9uZW50LCBfZGVjb3JhdG9yLCBhbmltYXRpb24sIFZlYzMsIExhYmVsLCByZXNvdXJjZXMgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBFdmVudFR5cGUsIE15RXZlbnQgfSBmcm9tICcuLi9FdmVudHMvTXlFdmVudCc7XG5pbXBvcnQgeyBHYW1lRGF0YSB9IGZyb20gJy4uL0dhbWUvR2FtZURhdGEnO1xuaW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tICcuLi9HYW1lL015Q29tcG9uZW50JztcbmltcG9ydCB7IFBvcHVwTWFuYWdlciB9IGZyb20gJy4uL1BvcHVwL1BvcHVwTWFuYWdlcic7XG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tICcuLi9Tb3VuZC9Tb3VuZE1hbmFnZXInO1xuaW1wb3J0IHsgQWRkU3RhdGUgfSBmcm9tICcuLi9TdGF0ZU1hY2hpbmUvQWRkU3RhdGUnO1xuaW1wb3J0IHsgU01NYW5nZXIsIFNNTmFtZSB9IGZyb20gJy4uL1N0YXRlTWFjaGluZS9TTU1hbmdlcic7XG5pbXBvcnQgeyBTdGF0ZVR5cGUgfSBmcm9tICcuLi9TdGF0ZU1hY2hpbmUvU3RhdGVUeXBlJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdMb2FkTWFuYWdlcicpXG5leHBvcnQgY2xhc3MgTG9hZE1hbmFnZXIgZXh0ZW5kcyBNeUNvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IEpzb25EYXRhUGF0aCA9IFwiSnNvbkRhdGFzL0xldmVsRGF0YVwiO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgTWFpblNjZW5lUGF0aCA9IFwiTWFpblNjZW5lXCI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBHYW1lU2NlbmVQYXRoID0gXCJHYW1lU2NlbmVcIjtcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgYWxsbG9hZEluZGV4OiBudW1iZXIgPSA1O1xuICAgIFxuXG4gICAgSW5pdCgpIHtcbiAgICAgICAgdGhpcy5Jbml0Tm9kZSgpXG4gICAgICAgIGlmIChMb2FkTWFuYWdlci5pc0xvYWRPdmVyID09IHRydWUpIHtcbiAgICAgICAgICAgIE15RXZlbnQuSS5lbWl0KEV2ZW50VHlwZS5Mb2FkUmVzT3Zlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLkxvYWRSZXMoKTtcbiAgICAgICAgfTtcbiAgICAgICAgQWRkU3RhdGUuQWRkQWxsU3RhdGUoKTtcbiAgICB9XG4gICAgLyoq5Yid5aeL5YyW57uT54K55L+h5oGvICovXG4gICAgcHJpdmF0ZSBJbml0Tm9kZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zbGlkZXJNYXNrID0gKGZpbmQoXCJDYW52YXMvU2xpZGVyL01hc2tcIikgYXMgTm9kZSkuZ2V0Q29tcG9uZW50KFVJVHJhbnNmb3JtQ29tcG9uZW50KSBhcyBVSVRyYW5zZm9ybUNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5zbGlkZXJUZXh0ID0gKGZpbmQoXCJDYW52YXMvU2xpZGVyL1RleHRcIikgYXMgTm9kZSkuZ2V0Q29tcG9uZW50KExhYmVsKSBhcyBMYWJlbDtcbiAgICB9XG4gICAgLyoq5ZCv5Yqo5Yqg6L296LWE5rqQICovXG4gICAgcHJpdmF0ZSBMb2FkUmVzKCkge1xuICAgICAgICBNeUV2ZW50LkkuZW1pdChFdmVudFR5cGUuTG9hZFN0YXRlcyk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5Mb2FkU2xpZGVyLCAwLjAxNSk7XG4gICAgICAgIHRoaXMuTG9hZFNjZW5lcygpO1xuICAgICAgICB0aGlzLkxvYWRKc29uKCk7XG4gICAgICAgIFBvcHVwTWFuYWdlci5Mb2FkUG9wdXBzKCk7XG4gICAgICAgIFNvdW5kTWFuYWdlci5Mb2FkU291bmQoKTtcbiAgICB9XG4gICAgLyoq5Yqg6L2955WM6Z2i55qE5ruR5Yqo5p2h57uT5p2f5LqL5Lu2IOe7k+adn+aXtua0vuWPkUV2ZW50VHlwZS5Mb2FkUmVzT3ZlcueahOa2iOaBryAqL1xuICAgIHByaXZhdGUgTG9hZFNsaWRlcigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuTG9hZE92ZXIoKSkge1xuICAgICAgICAgICAgTG9hZE1hbmFnZXIuaXNMb2FkT3ZlciA9IHRydWU7XG4gICAgICAgICAgICBNeUV2ZW50LkkuZW1pdChFdmVudFR5cGUuTG9hZFJlc092ZXIpO1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuTG9hZFNsaWRlcik7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICAvKirliKTmlq3mmK/lkKbliqDovb3lrozmr5XvvIzlubbmlLnlj5jov5vluqbmnaHnmoTplb/luqYgKi9cbiAgICBwcml2YXRlIExvYWRPdmVyKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5zbGlkZXJNYXNrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbmRleCA8PSBMb2FkTWFuYWdlci5sb2FkSW5kZXggLyBMb2FkTWFuYWdlci5hbGxsb2FkSW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IDAuMDE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVyVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNsaWRlclRleHQuc3RyaW5nID0gTWF0aC5mbG9vcih0aGlzLmluZGV4ICogMTAwKSArIFwiJVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2xpZGVyTWFzay53aWR0aCA9IDUxNyAqIHRoaXMuaW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKExvYWRNYW5hZ2VyLmxvYWRJbmRleCA+PSBMb2FkTWFuYWdlci5hbGxsb2FkSW5kZXgpIHtcbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCA9IExvYWRNYW5hZ2VyLmFsbGxvYWRJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmluZGV4ID49IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKumihOWKoOi9veWcuuaZryAqL1xuICAgIHByaXZhdGUgTG9hZFNjZW5lcygpIHtcbiAgICAgICAgZGlyZWN0b3IucHJlbG9hZFNjZW5lKHRoaXMuTWFpblNjZW5lUGF0aCwgKCkgPT4ge1xuICAgICAgICAgICAgTG9hZE1hbmFnZXIubG9hZEluZGV4Kys7XG4gICAgICAgIH0pO1xuICAgICAgICBkaXJlY3Rvci5wcmVsb2FkU2NlbmUodGhpcy5HYW1lU2NlbmVQYXRoLCAoKSA9PiB7XG4gICAgICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXgrKztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKuWKoOi9vWpzb27mlofku7YgKi9cbiAgICBwcml2YXRlIExvYWRKc29uKCkge1xuICAgICAgICByZXNvdXJjZXMubG9hZCh0aGlzLkpzb25EYXRhUGF0aCwgZnVuY3Rpb24gKGVycjogYW55LCBhc3NldHM6IGFueSkge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHYW1lRGF0YS5HYW1lU2NlbmVEYXRhID0gYXNzZXRzLmpzb24uTGV2ZWw7XG4gICAgICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXgrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEdhbWVEYXRhLkdhbWVTY2VuZURhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNMb2FkT3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHN0YXRpYyBsb2FkSW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBzbGlkZXJNYXNrOiBVSVRyYW5zZm9ybUNvbXBvbmVudCB8IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIHNsaWRlclRleHQ6IExhYmVsIHwgdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgaW5kZXggPSAwO1xufVxuIl19