System.register(["cce.code-quality.cr", "cc", "../Game/MyComponent.js", "../Popup/PopupManager.js", "../Sound/SoundManager.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CanvasComponent, Node, director, find, loader, UITransformComponent, _decorator, Label, MyComponent, PopupManager, SoundManager, _dec, _class, _class2, _temp, _crd, ccclass, property, LoadManager;

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
      CanvasComponent = _cc.CanvasComponent;
      Node = _cc.Node;
      director = _cc.director;
      find = _cc.find;
      loader = _cc.loader;
      UITransformComponent = _cc.UITransformComponent;
      _decorator = _cc._decorator;
      Label = _cc.Label;
    }, function (_GameMyComponentJs) {
      MyComponent = _GameMyComponentJs.MyComponent;
    }, function (_PopupPopupManagerJs) {
      PopupManager = _PopupPopupManagerJs.PopupManager;
    }, function (_SoundSoundManagerJs) {
      SoundManager = _SoundSoundManagerJs.SoundManager;
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

          _defineProperty(_assertThisInitialized(_this), "sliderMask", void 0);

          _defineProperty(_assertThisInitialized(_this), "sliderText", void 0);

          _defineProperty(_assertThisInitialized(_this), "canvas", null);

          _defineProperty(_assertThisInitialized(_this), "index", 0);

          return _this;
        }

        var _proto = LoadManager.prototype;

        _proto.Init = function Init() {
          LoadManager.I = this.node.getComponent(LoadManager);
          LoadManager.loadIndex = 0;
          this.LoadPopupsPrefab();
          this.LoadSoundPrefab();
          this.LoadScenes();
          this.schedule(this.LoadSlider, 0.01);
          this.sliderMask = find("Canvas/Slider/Mask").getComponent(UITransformComponent);
          this.sliderText = find("Canvas/Slider/Text").getComponent(Label);
        };

        _proto.LoadSlider = function LoadSlider() {
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
            //---------------------------
            LoadManager.loadIndex = LoadManager.allloadIndex;

            if (this.index >= 1) {
              this.scheduleOnce(function () {
                director.loadScene("MainScene");
              }, 0.5);
              this.unschedule(this.LoadSlider);
            } //---------------------------

          } else {
            console.log(LoadManager.loadIndex);
          }
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

            LoadManager.loadIndex++;
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
          this.CreateSoundManager();
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

            LoadManager.loadIndex++;
            console.log((_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager).I.audios);
          });
        };

        _proto.LoadScenes = function LoadScenes() {
          director.preloadScene("MainScene", function () {
            LoadManager.loadIndex++;
          });
          director.preloadScene("GameScene", function () {
            LoadManager.loadIndex++;
          });
        };

        _proto.CreatePopupParent = function CreatePopupParent() {
          this.canvas = find("Canvas");
          var popup = new Node("Popup"); // if (this.canvas)
          //     popup.setPosition(new Vec3(-this.canvas.position.x, -this.canvas.position.y, 0))

          popup.addChild(new Node("one"));
          popup.addChild(new Node("two"));
          popup.addComponent(UITransformComponent);
          var canvasComponent = popup.addComponent(CanvasComponent);
          popup.addComponent(_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager); // canvasComponent.clearFlag = GFXClearFlag.DEPTH;
          // canvasComponent.renderMode = 0;

          canvasComponent.priority = 10;
          if (this.node.parent) this.node.parent.addChild(popup);
          console.log(popup);
        };

        _proto.CreateSoundManager = function CreateSoundManager() {
          var soundManager = new Node("SoundManager");
          soundManager.addComponent(_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager);
          if (this.node.parent) this.node.parent.addChild(soundManager);
          console.log(soundManager);
        };

        return LoadManager;
      }(_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent), _defineProperty(_class2, "I", void 0), _defineProperty(_class2, "loadIndex", 0), _defineProperty(_class2, "allloadIndex", 4), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vTG9hZC9Mb2FkTWFuYWdlci50cyJdLCJuYW1lcyI6WyJDYW52YXNDb21wb25lbnQiLCJOb2RlIiwiZGlyZWN0b3IiLCJmaW5kIiwibG9hZGVyIiwiVUlUcmFuc2Zvcm1Db21wb25lbnQiLCJfZGVjb3JhdG9yIiwiTGFiZWwiLCJNeUNvbXBvbmVudCIsIlBvcHVwTWFuYWdlciIsIlNvdW5kTWFuYWdlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkxvYWRNYW5hZ2VyIiwiSW5pdCIsIkkiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwibG9hZEluZGV4IiwiTG9hZFBvcHVwc1ByZWZhYiIsIkxvYWRTb3VuZFByZWZhYiIsIkxvYWRTY2VuZXMiLCJzY2hlZHVsZSIsIkxvYWRTbGlkZXIiLCJzbGlkZXJNYXNrIiwic2xpZGVyVGV4dCIsImluZGV4IiwiYWxsbG9hZEluZGV4Iiwic3RyaW5nIiwiTWF0aCIsImZsb29yIiwid2lkdGgiLCJzY2hlZHVsZU9uY2UiLCJsb2FkU2NlbmUiLCJ1bnNjaGVkdWxlIiwiY29uc29sZSIsImxvZyIsImxvYWRSZXNEaXIiLCJlcnIiLCJhc3NldHMiLCJlcnJvciIsImkiLCJsZW5ndGgiLCJlbGVtZW50IiwicG9wdXBzIiwicHVzaCIsIkNyZWF0ZVNvdW5kTWFuYWdlciIsImF1ZGlvcyIsInByZWxvYWRTY2VuZSIsIkNyZWF0ZVBvcHVwUGFyZW50IiwiY2FudmFzIiwicG9wdXAiLCJhZGRDaGlsZCIsImFkZENvbXBvbmVudCIsImNhbnZhc0NvbXBvbmVudCIsInByaW9yaXR5IiwicGFyZW50Iiwic291bmRNYW5hZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxlLE9BQUFBLGU7QUFBaUJDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFB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aW1wb3J0IHsgQ2FudmFzQ29tcG9uZW50LCBOb2RlLCBkaXJlY3RvciwgZmluZCwgR0ZYQ2xlYXJGbGFnLCBsb2FkZXIsIFNwcml0ZUNvbXBvbmVudCwgVUlUcmFuc2Zvcm1Db21wb25lbnQsIF9kZWNvcmF0b3IsIGFuaW1hdGlvbiwgVmVjMywgTGFiZWwgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gJy4uL0dhbWUvTXlDb21wb25lbnQnO1xuaW1wb3J0IHsgUG9wdXBNYW5hZ2VyIH0gZnJvbSAnLi4vUG9wdXAvUG9wdXBNYW5hZ2VyJztcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gJy4uL1NvdW5kL1NvdW5kTWFuYWdlcic7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnTG9hZE1hbmFnZXInKVxuZXhwb3J0IGNsYXNzIExvYWRNYW5hZ2VyIGV4dGVuZHMgTXlDb21wb25lbnQge1xuICAgIHN0YXRpYyBJOiBMb2FkTWFuYWdlcjtcblxuICAgIHN0YXRpYyBsb2FkSW5kZXg6IG51bWJlciA9IDA7XG4gICAgc3RhdGljIGFsbGxvYWRJbmRleDogbnVtYmVyID0gNDtcbiAgICBzbGlkZXJNYXNrOiBVSVRyYW5zZm9ybUNvbXBvbmVudCB8IHVuZGVmaW5lZDtcbiAgICBzbGlkZXJUZXh0OiBMYWJlbCB8IHVuZGVmaW5lZDtcbiAgICBjYW52YXM6IE5vZGUgfCBudWxsID0gbnVsbDtcbiAgICBJbml0KCkge1xuICAgICAgICBMb2FkTWFuYWdlci5JID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChMb2FkTWFuYWdlcikgYXMgTG9hZE1hbmFnZXI7XG4gICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuTG9hZFBvcHVwc1ByZWZhYigpO1xuICAgICAgICB0aGlzLkxvYWRTb3VuZFByZWZhYigpO1xuICAgICAgICB0aGlzLkxvYWRTY2VuZXMoKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLkxvYWRTbGlkZXIsIDAuMDEpO1xuICAgICAgICB0aGlzLnNsaWRlck1hc2sgPSAoZmluZChcIkNhbnZhcy9TbGlkZXIvTWFza1wiKSBhcyBOb2RlKS5nZXRDb21wb25lbnQoVUlUcmFuc2Zvcm1Db21wb25lbnQpIGFzIFVJVHJhbnNmb3JtQ29tcG9uZW50O1xuICAgICAgICB0aGlzLnNsaWRlclRleHQgPSAoZmluZChcIkNhbnZhcy9TbGlkZXIvVGV4dFwiKSBhcyBOb2RlKS5nZXRDb21wb25lbnQoTGFiZWwpIGFzIExhYmVsO1xuICAgIH1cbiAgICBpbmRleCA9IDA7XG4gICAgTG9hZFNsaWRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc2xpZGVyTWFzaykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXggPD0gTG9hZE1hbmFnZXIubG9hZEluZGV4IC8gTG9hZE1hbmFnZXIuYWxsbG9hZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSAwLjAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJUZXh0LnN0cmluZyA9IE1hdGguZmxvb3IodGhpcy5pbmRleCAqIDEwMCkgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNsaWRlck1hc2sud2lkdGggPSA1MTcgKiB0aGlzLmluZGV4O1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTG9hZE1hbmFnZXIubG9hZEluZGV4ID49IExvYWRNYW5hZ2VyLmFsbGxvYWRJbmRleCkge1xuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCA9IExvYWRNYW5hZ2VyLmFsbGxvYWRJbmRleFxuICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXggPj0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpblNjZW5lXCIpO1xuICAgICAgICAgICAgICAgIH0sIDAuNSlcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5Mb2FkU2xpZGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhMb2FkTWFuYWdlci5sb2FkSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yqg6L295by556qX55qE6aKE5Yi25L2T77yM5bm25Yid5aeL5YyWUG9wdXBNYW5hZ2Vy5Lit55qEcG9wdXBz5pWw57uEXG4gICAgICovXG4gICAgTG9hZFBvcHVwc1ByZWZhYigpIHtcbiAgICAgICAgLy8gdGhpcy5DcmVhdGVQb3B1cFBhcmVudCgpO1xuICAgICAgICBsb2FkZXIubG9hZFJlc0RpcihcIlBvcHVwc1ByZWZhYlwiLCBmdW5jdGlvbiAoZXJyOiBhbnksIGFzc2V0czogYW55KSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGFzc2V0c1tpXTtcbiAgICAgICAgICAgICAgICBQb3B1cE1hbmFnZXIuSS5wb3B1cHMucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCsrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coUG9wdXBNYW5hZ2VyLkkucG9wdXBzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWKoOi9vemfs+aViO+8jOW5tuWIneWni+WMllNvdW5kTWFuYWdlci5JLmF1ZGlvc1xuICAgICAqL1xuICAgIExvYWRTb3VuZFByZWZhYigpIHtcbiAgICAgICAgdGhpcy5DcmVhdGVTb3VuZE1hbmFnZXIoKTtcbiAgICAgICAgbG9hZGVyLmxvYWRSZXNEaXIoXCJTb3VuZHNcIiwgZnVuY3Rpb24gKGVycjogYW55LCBhc3NldHM6IGFueSkge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBhc3NldHNbaV07XG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLkkuYXVkaW9zLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXgrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFNvdW5kTWFuYWdlci5JLmF1ZGlvcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBMb2FkU2NlbmVzKCkge1xuICAgICAgICBkaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJNYWluU2NlbmVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgTG9hZE1hbmFnZXIubG9hZEluZGV4Kys7XG4gICAgICAgIH0pO1xuICAgICAgICBkaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJHYW1lU2NlbmVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgTG9hZE1hbmFnZXIubG9hZEluZGV4Kys7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgQ3JlYXRlUG9wdXBQYXJlbnQoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gKGZpbmQoXCJDYW52YXNcIikgYXMgTm9kZSlcbiAgICAgICAgbGV0IHBvcHVwID0gbmV3IE5vZGUoXCJQb3B1cFwiKTtcbiAgICAgICAgLy8gaWYgKHRoaXMuY2FudmFzKVxuICAgICAgICAvLyAgICAgcG9wdXAuc2V0UG9zaXRpb24obmV3IFZlYzMoLXRoaXMuY2FudmFzLnBvc2l0aW9uLngsIC10aGlzLmNhbnZhcy5wb3NpdGlvbi55LCAwKSlcbiAgICAgICAgcG9wdXAuYWRkQ2hpbGQobmV3IE5vZGUoXCJvbmVcIikpO1xuICAgICAgICBwb3B1cC5hZGRDaGlsZChuZXcgTm9kZShcInR3b1wiKSk7XG4gICAgICAgIHBvcHVwLmFkZENvbXBvbmVudChVSVRyYW5zZm9ybUNvbXBvbmVudCk7XG4gICAgICAgIGxldCBjYW52YXNDb21wb25lbnQgPSBwb3B1cC5hZGRDb21wb25lbnQoQ2FudmFzQ29tcG9uZW50KTtcbiAgICAgICAgcG9wdXAuYWRkQ29tcG9uZW50KFBvcHVwTWFuYWdlcik7XG4gICAgICAgIC8vIGNhbnZhc0NvbXBvbmVudC5jbGVhckZsYWcgPSBHRlhDbGVhckZsYWcuREVQVEg7XG4gICAgICAgIC8vIGNhbnZhc0NvbXBvbmVudC5yZW5kZXJNb2RlID0gMDtcbiAgICAgICAgY2FudmFzQ29tcG9uZW50LnByaW9yaXR5ID0gMTA7XG4gICAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50KVxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChwb3B1cCk7XG5cbiAgICAgICAgY29uc29sZS5sb2cocG9wdXApO1xuICAgIH1cbiAgICBwcml2YXRlIENyZWF0ZVNvdW5kTWFuYWdlcigpIHtcbiAgICAgICAgbGV0IHNvdW5kTWFuYWdlciA9IG5ldyBOb2RlKFwiU291bmRNYW5hZ2VyXCIpO1xuICAgICAgICBzb3VuZE1hbmFnZXIuYWRkQ29tcG9uZW50KFNvdW5kTWFuYWdlcik7XG4gICAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50KVxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChzb3VuZE1hbmFnZXIpO1xuICAgICAgICBjb25zb2xlLmxvZyhzb3VuZE1hbmFnZXIpO1xuICAgIH1cbn1cbiJdfQ==