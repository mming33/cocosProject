System.register(["cc", "code-quality:cr", "../Game/MyComponent.js", "../Popup/PopupManager.js", "../Sound/SoundManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, CanvasComponent, Node, director, find, GFXClearFlag, loader, SpriteComponent, UITransformComponent, _decorator, MyComponent, PopupManager, SoundManager, _dec, _class, _class2, _temp, _crd, ccclass, property, LoadManager;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      CanvasComponent = _cc.CanvasComponent;
      Node = _cc.Node;
      director = _cc.director;
      find = _cc.find;
      GFXClearFlag = _cc.GFXClearFlag;
      loader = _cc.loader;
      SpriteComponent = _cc.SpriteComponent;
      UITransformComponent = _cc.UITransformComponent;
      _decorator = _cc._decorator;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GameMyComponentJs) {
      MyComponent = _GameMyComponentJs.MyComponent;
    }, function (_PopupPopupManagerJs) {
      PopupManager = _PopupPopupManagerJs.PopupManager;
    }, function (_SoundSoundManagerJs) {
      SoundManager = _SoundSoundManagerJs.SoundManager;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "99fa3d7EaBNvZlZB9H+FIXj", "LoadManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("LoadManager", LoadManager = (_dec = ccclass('LoadManager'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_ref) {
        _inherits(LoadManager, _ref);

        function LoadManager() {
          _classCallCheck(this, LoadManager);

          return _possibleConstructorReturn(this, _getPrototypeOf(LoadManager).apply(this, arguments));
        }

        _createClass(LoadManager, [{
          key: "Init",
          value: function Init() {
            LoadManager.loadIndex = 0;
            this.LoadPopupsPrefab();
            this.LoadSoundPrefab();
            this.LoadScenes();
            this.schedule(this.LoadSlider, 0.01);
            this.sliderItem = find("Canvas/Slider/Item").getComponent(SpriteComponent);
          }
        }, {
          key: "LoadSlider",
          value: function LoadSlider() {
            var _this = this;

            if (LoadManager.loadIndex >= LoadManager.allloadIndex) {
              this.scheduleOnce(function () {
                _this.sliderItem.fillRange = 1;
                director.loadScene("MainScene");
              }, 1.5);
              this.unschedule(this.LoadSlider);
            } else {
              this.sliderItem.fillRange = LoadManager.loadIndex / LoadManager.allloadIndex;
              console.log(LoadManager.loadIndex);
            }
          }
          /**
           * 加载弹窗的预制体，并初始化PopupManager中的popups数组
           */

        }, {
          key: "LoadPopupsPrefab",
          value: function LoadPopupsPrefab() {
            this.CreatePopupParent();
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

        }, {
          key: "LoadSoundPrefab",
          value: function LoadSoundPrefab() {
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
          }
        }, {
          key: "LoadScenes",
          value: function LoadScenes() {
            director.preloadScene("MainScene", function () {
              LoadManager.loadIndex++;
            });
            director.preloadScene("GameScene", function () {
              LoadManager.loadIndex++;
            });
          }
        }, {
          key: "CreatePopupParent",
          value: function CreatePopupParent() {
            var popup = new Node("Popup");
            popup.addChild(new Node("one"));
            popup.addChild(new Node("two"));
            var uiTransformComponent = popup.addComponent(UITransformComponent);
            var canvasComponent = popup.addComponent(CanvasComponent);
            var popupManager = popup.addComponent(_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
              error: Error()
            }), PopupManager) : PopupManager);
            canvasComponent.clearFlag = GFXClearFlag.DEPTH;
            canvasComponent.renderMode = 0;
            canvasComponent.priority = 10;
            this.node.parent.addChild(popup);
            console.log(popup);
          }
        }, {
          key: "CreateSoundManager",
          value: function CreateSoundManager() {
            var soundManager = new Node("SoundManager");
            soundManager.addComponent(_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager);
            this.node.parent.addChild(soundManager);
            console.log(soundManager);
          }
        }]);

        return LoadManager;
      }(_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent), _class2.loadIndex = 0, _class2.allloadIndex = 4, _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9Mb2FkL0xvYWRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIkNhbnZhc0NvbXBvbmVudCIsIk5vZGUiLCJkaXJlY3RvciIsImZpbmQiLCJHRlhDbGVhckZsYWciLCJsb2FkZXIiLCJTcHJpdGVDb21wb25lbnQiLCJVSVRyYW5zZm9ybUNvbXBvbmVudCIsIl9kZWNvcmF0b3IiLCJNeUNvbXBvbmVudCIsIlBvcHVwTWFuYWdlciIsIlNvdW5kTWFuYWdlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkxvYWRNYW5hZ2VyIiwibG9hZEluZGV4IiwiTG9hZFBvcHVwc1ByZWZhYiIsIkxvYWRTb3VuZFByZWZhYiIsIkxvYWRTY2VuZXMiLCJzY2hlZHVsZSIsIkxvYWRTbGlkZXIiLCJzbGlkZXJJdGVtIiwiZ2V0Q29tcG9uZW50IiwiYWxsbG9hZEluZGV4Iiwic2NoZWR1bGVPbmNlIiwiZmlsbFJhbmdlIiwibG9hZFNjZW5lIiwidW5zY2hlZHVsZSIsImNvbnNvbGUiLCJsb2ciLCJDcmVhdGVQb3B1cFBhcmVudCIsImxvYWRSZXNEaXIiLCJlcnIiLCJhc3NldHMiLCJlcnJvciIsImkiLCJsZW5ndGgiLCJlbGVtZW50IiwiSSIsInBvcHVwcyIsInB1c2giLCJDcmVhdGVTb3VuZE1hbmFnZXIiLCJhdWRpb3MiLCJwcmVsb2FkU2NlbmUiLCJwb3B1cCIsImFkZENoaWxkIiwidWlUcmFuc2Zvcm1Db21wb25lbnQiLCJhZGRDb21wb25lbnQiLCJjYW52YXNDb21wb25lbnQiLCJwb3B1cE1hbmFnZXIiLCJjbGVhckZsYWciLCJERVBUSCIsInJlbmRlck1vZGUiLCJwcmlvcml0eSIsIm5vZGUiLCJwYXJlbnQiLCJzb3VuZE1hbmFnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFT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Q0ssUUFBaEIsR0FBMkIsRUFBM0I7QUFDQSxpQkFBS0MsSUFBTCxDQUFVQyxNQUFWLENBQWlCVixRQUFqQixDQUEwQkQsS0FBMUI7QUFDQWhCLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZSxLQUFaO0FBQ0g7OzsrQ0FDNEI7QUFDekIsZ0JBQUlZLFlBQVksR0FBRyxJQUFJdkQsSUFBSixDQUFTLGNBQVQsQ0FBbkI7QUFDQXVELFlBQUFBLFlBQVksQ0FBQ1QsWUFBYjtBQUFBO0FBQUE7QUFDQSxpQkFBS08sSUFBTCxDQUFVQyxNQUFWLENBQWlCVixRQUFqQixDQUEwQlcsWUFBMUI7QUFDQTVCLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZMkIsWUFBWjtBQUNIOzs7Ozs7K0NBMUZNekMsUyxHQUFvQixDLFVBQ3BCUSxZLEdBQXVCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW52YXNDb21wb25lbnQsIE5vZGUsIGRpcmVjdG9yLCBmaW5kLCBHRlhDbGVhckZsYWcsIGxvYWRlciwgU3ByaXRlQ29tcG9uZW50LCBVSVRyYW5zZm9ybUNvbXBvbmVudCwgX2RlY29yYXRvciB9IGZyb20gJ2NjJztcbmltcG9ydCB7IE15Q29tcG9uZW50IH0gZnJvbSAnLi4vR2FtZS9NeUNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb3B1cE1hbmFnZXIgfSBmcm9tICcuLi9Qb3B1cC9Qb3B1cE1hbmFnZXInO1xuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi4vU291bmQvU291bmRNYW5hZ2VyJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdMb2FkTWFuYWdlcicpXG5leHBvcnQgY2xhc3MgTG9hZE1hbmFnZXIgZXh0ZW5kcyBNeUNvbXBvbmVudCB7XG5cblxuICAgIHN0YXRpYyBsb2FkSW5kZXg6IG51bWJlciA9IDA7XG4gICAgc3RhdGljIGFsbGxvYWRJbmRleDogbnVtYmVyID0gNDtcbiAgICBzbGlkZXJJdGVtOiBTcHJpdGVDb21wb25lbnQ7XG4gICAgSW5pdCgpIHtcbiAgICAgICAgTG9hZE1hbmFnZXIubG9hZEluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5Mb2FkUG9wdXBzUHJlZmFiKCk7XG4gICAgICAgIHRoaXMuTG9hZFNvdW5kUHJlZmFiKCk7XG4gICAgICAgIHRoaXMuTG9hZFNjZW5lcygpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuTG9hZFNsaWRlciwgMC4wMSlcbiAgICAgICAgdGhpcy5zbGlkZXJJdGVtID0gZmluZChcIkNhbnZhcy9TbGlkZXIvSXRlbVwiKS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KTtcbiAgICB9XG4gICAgTG9hZFNsaWRlcigpIHtcbiAgICAgICAgaWYgKExvYWRNYW5hZ2VyLmxvYWRJbmRleCA+PSBMb2FkTWFuYWdlci5hbGxsb2FkSW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlckl0ZW0uZmlsbFJhbmdlID0gMTtcbiAgICAgICAgICAgICAgICBkaXJlY3Rvci5sb2FkU2NlbmUoXCJNYWluU2NlbmVcIik7XG4gICAgICAgICAgICB9LCAxLjUpO1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuTG9hZFNsaWRlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNsaWRlckl0ZW0uZmlsbFJhbmdlID0gTG9hZE1hbmFnZXIubG9hZEluZGV4IC8gTG9hZE1hbmFnZXIuYWxsbG9hZEluZGV4O1xuICAgICAgICAgICAgY29uc29sZS5sb2coTG9hZE1hbmFnZXIubG9hZEluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWKoOi9veW8ueeql+eahOmihOWItuS9k++8jOW5tuWIneWni+WMllBvcHVwTWFuYWdlcuS4reeahHBvcHVwc+aVsOe7hFxuICAgICAqL1xuICAgIExvYWRQb3B1cHNQcmVmYWIoKSB7XG4gICAgICAgIHRoaXMuQ3JlYXRlUG9wdXBQYXJlbnQoKTtcbiAgICAgICAgbG9hZGVyLmxvYWRSZXNEaXIoXCJQb3B1cHNQcmVmYWJcIiwgZnVuY3Rpb24gKGVyciwgYXNzZXRzKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGFzc2V0c1tpXTtcbiAgICAgICAgICAgICAgICBQb3B1cE1hbmFnZXIuSS5wb3B1cHMucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCsrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coUG9wdXBNYW5hZ2VyLkkucG9wdXBzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWKoOi9vemfs+aViO+8jOW5tuWIneWni+WMllNvdW5kTWFuYWdlci5JLmF1ZGlvc1xuICAgICAqL1xuICAgIExvYWRTb3VuZFByZWZhYigpIHtcbiAgICAgICAgdGhpcy5DcmVhdGVTb3VuZE1hbmFnZXIoKTtcbiAgICAgICAgbG9hZGVyLmxvYWRSZXNEaXIoXCJTb3VuZHNcIiwgZnVuY3Rpb24gKGVyciwgYXNzZXRzKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGFzc2V0c1tpXTtcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIuSS5hdWRpb3MucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCsrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coU291bmRNYW5hZ2VyLkkuYXVkaW9zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgTG9hZFNjZW5lcygpIHtcbiAgICAgICAgZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiTWFpblNjZW5lXCIsICgpID0+IHtcbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCsrO1xuICAgICAgICB9KTtcbiAgICAgICAgZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiR2FtZVNjZW5lXCIsICgpID0+IHtcbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCsrO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgcHJpdmF0ZSBDcmVhdGVQb3B1cFBhcmVudCgpIHtcbiAgICAgICAgbGV0IHBvcHVwID0gbmV3IE5vZGUoXCJQb3B1cFwiKTtcbiAgICAgICAgcG9wdXAuYWRkQ2hpbGQobmV3IE5vZGUoXCJvbmVcIikpO1xuICAgICAgICBwb3B1cC5hZGRDaGlsZChuZXcgTm9kZShcInR3b1wiKSk7XG4gICAgICAgIGxldCB1aVRyYW5zZm9ybUNvbXBvbmVudCA9IHBvcHVwLmFkZENvbXBvbmVudChVSVRyYW5zZm9ybUNvbXBvbmVudCk7XG4gICAgICAgIGxldCBjYW52YXNDb21wb25lbnQgPSBwb3B1cC5hZGRDb21wb25lbnQoQ2FudmFzQ29tcG9uZW50KTtcbiAgICAgICAgbGV0IHBvcHVwTWFuYWdlciA9IHBvcHVwLmFkZENvbXBvbmVudChQb3B1cE1hbmFnZXIpO1xuICAgICAgICBjYW52YXNDb21wb25lbnQuY2xlYXJGbGFnID0gR0ZYQ2xlYXJGbGFnLkRFUFRIO1xuICAgICAgICBjYW52YXNDb21wb25lbnQucmVuZGVyTW9kZSA9IDA7XG4gICAgICAgIGNhbnZhc0NvbXBvbmVudC5wcmlvcml0eSA9IDEwO1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKHBvcHVwKTtcbiAgICAgICAgY29uc29sZS5sb2cocG9wdXApO1xuICAgIH1cbiAgICBwcml2YXRlIENyZWF0ZVNvdW5kTWFuYWdlcigpIHtcbiAgICAgICAgbGV0IHNvdW5kTWFuYWdlciA9IG5ldyBOb2RlKFwiU291bmRNYW5hZ2VyXCIpO1xuICAgICAgICBzb3VuZE1hbmFnZXIuYWRkQ29tcG9uZW50KFNvdW5kTWFuYWdlcik7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoc291bmRNYW5hZ2VyKTtcbiAgICAgICAgY29uc29sZS5sb2coc291bmRNYW5hZ2VyKTtcbiAgICB9XG59XG4iXX0=