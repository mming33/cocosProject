System.register(["cc", "code-quality:cr", "../Popup/PopupManager.js", "../Sound/SoundManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, loader, CanvasComponent, UITransformComponent, GFXClearFlag, director, SpriteComponent, find, PopupManager, SoundManager, _dec, _class, _class2, _temp, _crd, ccclass, property, LoadManager;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      loader = _cc.loader;
      CanvasComponent = _cc.CanvasComponent;
      UITransformComponent = _cc.UITransformComponent;
      GFXClearFlag = _cc.GFXClearFlag;
      director = _cc.director;
      SpriteComponent = _cc.SpriteComponent;
      find = _cc.find;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
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

      _export("LoadManager", LoadManager = (_dec = ccclass('LoadManager'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
        _inherits(LoadManager, _Component);

        function LoadManager() {
          _classCallCheck(this, LoadManager);

          return _possibleConstructorReturn(this, _getPrototypeOf(LoadManager).apply(this, arguments));
        }

        _createClass(LoadManager, [{
          key: "onEnable",
          value: function onEnable() {
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
            if (LoadManager.loadIndex >= LoadManager.allloadIndex) {
              director.loadScene("MainScene");
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
      }(Component), _class2.loadIndex = 0, _class2.allloadIndex = 4, _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9Mb2FkL0xvYWRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwibG9hZGVyIiwiQ2FudmFzQ29tcG9uZW50IiwiVUlUcmFuc2Zvcm1Db21wb25lbnQiLCJHRlhDbGVhckZsYWciLCJkaXJlY3RvciIsIlNwcml0ZUNvbXBvbmVudCIsImZpbmQiLCJQb3B1cE1hbmFnZXIiLCJTb3VuZE1hbmFnZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJMb2FkTWFuYWdlciIsImxvYWRJbmRleCIsIkxvYWRQb3B1cHNQcmVmYWIiLCJMb2FkU291bmRQcmVmYWIiLCJMb2FkU2NlbmVzIiwic2NoZWR1bGUiLCJMb2FkU2xpZGVyIiwic2xpZGVySXRlbSIsImdldENvbXBvbmVudCIsImFsbGxvYWRJbmRleCIsImxvYWRTY2VuZSIsInVuc2NoZWR1bGUiLCJmaWxsUmFuZ2UiLCJjb25zb2xlIiwibG9nIiwiQ3JlYXRlUG9wdXBQYXJlbnQiLCJsb2FkUmVzRGlyIiwiZXJyIiwiYXNzZXRzIiwiZXJyb3IiLCJpIiwibGVuZ3RoIiwiZWxlbWVudCIsIkkiLCJwb3B1cHMiLCJwdXNoIiwiQ3JlYXRlU291bmRNYW5hZ2VyIiwiYXVkaW9zIiwicHJlbG9hZFNjZW5lIiwicG9wdXAiLCJhZGRDaGlsZCIsInVpVHJhbnNmb3JtQ29tcG9uZW50IiwiYWRkQ29tcG9uZW50IiwiY2FudmFzQ29tcG9uZW50IiwicG9wdXBNYW5hZ2VyIiwiY2xlYXJGbGFnIiwiREVQVEgiLCJyZW5kZXJNb2RlIiwicHJpb3JpdHkiLCJub2RlIiwicGFyZW50Iiwic291bmRNYW5hZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFB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QixnQkFBSVksWUFBWSxHQUFHLElBQUlyRCxJQUFKLENBQVMsY0FBVCxDQUFuQjtBQUNBcUQsWUFBQUEsWUFBWSxDQUFDVCxZQUFiO0FBQUE7QUFBQTtBQUNBLGlCQUFLTyxJQUFMLENBQVVDLE1BQVYsQ0FBaUJWLFFBQWpCLENBQTBCVyxZQUExQjtBQUNBNUIsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkyQixZQUFaO0FBQ0g7Ozs7UUExRjRCdEQsUyxXQUd0QmMsUyxHQUFvQixDLFVBQ3BCUSxZLEdBQXVCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIGxvYWRlciwgQ2FudmFzQ29tcG9uZW50LCBVSVRyYW5zZm9ybUNvbXBvbmVudCwgU2NlbmUsIExheWVycywgR0ZYQ2xlYXJGbGFnLCBkaXJlY3RvciwgUHJlZmFiLCBTcHJpdGVDb21wb25lbnQsIGZpbmQgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBQb3B1cE1hbmFnZXIgfSBmcm9tICcuLi9Qb3B1cC9Qb3B1cE1hbmFnZXInO1xuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi4vU291bmQvU291bmRNYW5hZ2VyJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdMb2FkTWFuYWdlcicpXG5leHBvcnQgY2xhc3MgTG9hZE1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cbiAgICBzdGF0aWMgbG9hZEluZGV4OiBudW1iZXIgPSAwO1xuICAgIHN0YXRpYyBhbGxsb2FkSW5kZXg6IG51bWJlciA9IDQ7XG4gICAgc2xpZGVySXRlbTogU3ByaXRlQ29tcG9uZW50O1xuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXggPSAwO1xuICAgICAgICB0aGlzLkxvYWRQb3B1cHNQcmVmYWIoKTtcbiAgICAgICAgdGhpcy5Mb2FkU291bmRQcmVmYWIoKTtcbiAgICAgICAgdGhpcy5Mb2FkU2NlbmVzKCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5Mb2FkU2xpZGVyLCAwLjAxKVxuICAgICAgICB0aGlzLnNsaWRlckl0ZW0gPSBmaW5kKFwiQ2FudmFzL1NsaWRlci9JdGVtXCIpLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpO1xuICAgIH1cbiAgICBMb2FkU2xpZGVyKCkge1xuICAgICAgICBpZiAoTG9hZE1hbmFnZXIubG9hZEluZGV4ID49IExvYWRNYW5hZ2VyLmFsbGxvYWRJbmRleCkge1xuICAgICAgICAgICAgZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpblNjZW5lXCIpO1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuTG9hZFNsaWRlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNsaWRlckl0ZW0uZmlsbFJhbmdlID0gTG9hZE1hbmFnZXIubG9hZEluZGV4IC8gTG9hZE1hbmFnZXIuYWxsbG9hZEluZGV4O1xuICAgICAgICAgICAgY29uc29sZS5sb2coTG9hZE1hbmFnZXIubG9hZEluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWKoOi9veW8ueeql+eahOmihOWItuS9k++8jOW5tuWIneWni+WMllBvcHVwTWFuYWdlcuS4reeahHBvcHVwc+aVsOe7hFxuICAgICAqL1xuICAgIExvYWRQb3B1cHNQcmVmYWIoKSB7XG4gICAgICAgIHRoaXMuQ3JlYXRlUG9wdXBQYXJlbnQoKTtcbiAgICAgICAgbG9hZGVyLmxvYWRSZXNEaXIoXCJQb3B1cHNQcmVmYWJcIiwgZnVuY3Rpb24gKGVyciwgYXNzZXRzKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGFzc2V0c1tpXTtcbiAgICAgICAgICAgICAgICBQb3B1cE1hbmFnZXIuSS5wb3B1cHMucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCsrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coUG9wdXBNYW5hZ2VyLkkucG9wdXBzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWKoOi9vemfs+aViO+8jOW5tuWIneWni+WMllNvdW5kTWFuYWdlci5JLmF1ZGlvc1xuICAgICAqL1xuICAgIExvYWRTb3VuZFByZWZhYigpIHtcbiAgICAgICAgdGhpcy5DcmVhdGVTb3VuZE1hbmFnZXIoKTtcbiAgICAgICAgbG9hZGVyLmxvYWRSZXNEaXIoXCJTb3VuZHNcIiwgZnVuY3Rpb24gKGVyciwgYXNzZXRzKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGFzc2V0c1tpXTtcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIuSS5hdWRpb3MucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCsrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coU291bmRNYW5hZ2VyLkkuYXVkaW9zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgTG9hZFNjZW5lcygpIHtcbiAgICAgICAgZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiTWFpblNjZW5lXCIsICgpID0+IHtcbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCsrO1xuICAgICAgICB9KTtcbiAgICAgICAgZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiR2FtZVNjZW5lXCIsICgpID0+IHtcbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCsrO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgcHJpdmF0ZSBDcmVhdGVQb3B1cFBhcmVudCgpIHtcbiAgICAgICAgbGV0IHBvcHVwID0gbmV3IE5vZGUoXCJQb3B1cFwiKTtcbiAgICAgICAgcG9wdXAuYWRkQ2hpbGQobmV3IE5vZGUoXCJvbmVcIikpO1xuICAgICAgICBwb3B1cC5hZGRDaGlsZChuZXcgTm9kZShcInR3b1wiKSk7XG4gICAgICAgIGxldCB1aVRyYW5zZm9ybUNvbXBvbmVudCA9IHBvcHVwLmFkZENvbXBvbmVudChVSVRyYW5zZm9ybUNvbXBvbmVudCk7XG4gICAgICAgIGxldCBjYW52YXNDb21wb25lbnQgPSBwb3B1cC5hZGRDb21wb25lbnQoQ2FudmFzQ29tcG9uZW50KTtcbiAgICAgICAgbGV0IHBvcHVwTWFuYWdlciA9IHBvcHVwLmFkZENvbXBvbmVudChQb3B1cE1hbmFnZXIpO1xuICAgICAgICBjYW52YXNDb21wb25lbnQuY2xlYXJGbGFnID0gR0ZYQ2xlYXJGbGFnLkRFUFRIO1xuICAgICAgICBjYW52YXNDb21wb25lbnQucmVuZGVyTW9kZSA9IDA7XG4gICAgICAgIGNhbnZhc0NvbXBvbmVudC5wcmlvcml0eSA9IDEwO1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKHBvcHVwKTtcbiAgICAgICAgY29uc29sZS5sb2cocG9wdXApO1xuICAgIH1cbiAgICBwcml2YXRlIENyZWF0ZVNvdW5kTWFuYWdlcigpIHtcbiAgICAgICAgbGV0IHNvdW5kTWFuYWdlciA9IG5ldyBOb2RlKFwiU291bmRNYW5hZ2VyXCIpO1xuICAgICAgICBzb3VuZE1hbmFnZXIuYWRkQ29tcG9uZW50KFNvdW5kTWFuYWdlcik7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoc291bmRNYW5hZ2VyKTtcbiAgICAgICAgY29uc29sZS5sb2coc291bmRNYW5hZ2VyKTtcbiAgICB9XG59XG4iXX0=