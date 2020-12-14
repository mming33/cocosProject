System.register(["cce.code-quality.cr", "cc", "../Game/MyComponent.js", "../Popup/PopupManager.js", "../Sound/SoundManager.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CanvasComponent, Node, director, find, loader, UITransformComponent, _decorator, MyComponent, PopupManager, SoundManager, _dec, _class, _class2, _temp, _crd, ccclass, property, LoadManager;

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
        };

        _proto.LoadSlider = function LoadSlider() {
          if (this.sliderMask) {
            if (this.index <= LoadManager.loadIndex / LoadManager.allloadIndex) this.index += 0.01;
            this.sliderMask.width = 517 * this.index;
            console.log(this.index);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9Mb2FkL0xvYWRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIkNhbnZhc0NvbXBvbmVudCIsIk5vZGUiLCJkaXJlY3RvciIsImZpbmQiLCJsb2FkZXIiLCJVSVRyYW5zZm9ybUNvbXBvbmVudCIsIl9kZWNvcmF0b3IiLCJNeUNvbXBvbmVudCIsIlBvcHVwTWFuYWdlciIsIlNvdW5kTWFuYWdlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkxvYWRNYW5hZ2VyIiwiSW5pdCIsIkkiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwibG9hZEluZGV4IiwiTG9hZFBvcHVwc1ByZWZhYiIsIkxvYWRTb3VuZFByZWZhYiIsIkxvYWRTY2VuZXMiLCJzY2hlZHVsZSIsIkxvYWRTbGlkZXIiLCJzbGlkZXJNYXNrIiwiaW5kZXgiLCJhbGxsb2FkSW5kZXgiLCJ3aWR0aCIsImNvbnNvbGUiLCJsb2ciLCJzY2hlZHVsZU9uY2UiLCJsb2FkU2NlbmUiLCJ1bnNjaGVkdWxlIiwibG9hZFJlc0RpciIsImVyciIsImFzc2V0cyIsImVycm9yIiwiaSIsImxlbmd0aCIsImVsZW1lbnQiLCJwb3B1cHMiLCJwdXNoIiwiQ3JlYXRlU291bmRNYW5hZ2VyIiwiYXVkaW9zIiwicHJlbG9hZFNjZW5lIiwiQ3JlYXRlUG9wdXBQYXJlbnQiLCJjYW52YXMiLCJwb3B1cCIsImFkZENoaWxkIiwiYWRkQ29tcG9uZW50IiwiY2FudmFzQ29tcG9uZW50IiwicHJpb3JpdHkiLCJwYXJlbnQiLCJzb3VuZE1hbmFnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLFEsT0FBQUEsUTtBQUFVQyxNQUFBQSxJLE9BQUFBLEk7QUFBb0JD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LElBQUk5QyxJQUFKLENBQVMsS0FBVCxDQUFmO0FBQ0E2QyxVQUFBQSxLQUFLLENBQUNFLFlBQU4sQ0FBbUIzQyxvQkFBbkI7QUFDQSxjQUFJNEMsZUFBZSxHQUFHSCxLQUFLLENBQUNFLFlBQU4sQ0FBbUJoRCxlQUFuQixDQUF0QjtBQUNBOEMsVUFBQUEsS0FBSyxDQUFDRSxZQUFOO0FBQUE7QUFBQSw0Q0FUd0IsQ0FVeEI7QUFDQTs7QUFDQUMsVUFBQUEsZUFBZSxDQUFDQyxRQUFoQixHQUEyQixFQUEzQjtBQUNBLGNBQUksS0FBS25DLElBQUwsQ0FBVW9DLE1BQWQsRUFDSSxLQUFLcEMsSUFBTCxDQUFVb0MsTUFBVixDQUFpQkosUUFBakIsQ0FBMEJELEtBQTFCO0FBRUpuQixVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWtCLEtBQVo7QUFDSCxTOztlQUNPTCxrQixHQUFSLDhCQUE2QjtBQUN6QixjQUFJVyxZQUFZLEdBQUcsSUFBSW5ELElBQUosQ0FBUyxjQUFULENBQW5CO0FBQ0FtRCxVQUFBQSxZQUFZLENBQUNKLFlBQWI7QUFBQTtBQUFBO0FBQ0EsY0FBSSxLQUFLakMsSUFBTCxDQUFVb0MsTUFBZCxFQUNJLEtBQUtwQyxJQUFMLENBQVVvQyxNQUFWLENBQWlCSixRQUFqQixDQUEwQkssWUFBMUI7QUFDSnpCLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZd0IsWUFBWjtBQUNILFM7Ozs7O29IQTNHMEIsQyw0Q0FDRyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FudmFzQ29tcG9uZW50LCBOb2RlLCBkaXJlY3RvciwgZmluZCwgR0ZYQ2xlYXJGbGFnLCBsb2FkZXIsIFNwcml0ZUNvbXBvbmVudCwgVUlUcmFuc2Zvcm1Db21wb25lbnQsIF9kZWNvcmF0b3IsIGFuaW1hdGlvbiwgVmVjMyB9IGZyb20gJ2NjJztcbmltcG9ydCB7IE15Q29tcG9uZW50IH0gZnJvbSAnLi4vR2FtZS9NeUNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb3B1cE1hbmFnZXIgfSBmcm9tICcuLi9Qb3B1cC9Qb3B1cE1hbmFnZXInO1xuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi4vU291bmQvU291bmRNYW5hZ2VyJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdMb2FkTWFuYWdlcicpXG5leHBvcnQgY2xhc3MgTG9hZE1hbmFnZXIgZXh0ZW5kcyBNeUNvbXBvbmVudCB7XG4gICAgc3RhdGljIEk6IExvYWRNYW5hZ2VyO1xuXG4gICAgc3RhdGljIGxvYWRJbmRleDogbnVtYmVyID0gMDtcbiAgICBzdGF0aWMgYWxsbG9hZEluZGV4OiBudW1iZXIgPSA0O1xuICAgIHNsaWRlck1hc2s6IFVJVHJhbnNmb3JtQ29tcG9uZW50IHwgdW5kZWZpbmVkO1xuICAgIGNhbnZhczogTm9kZSB8IG51bGwgPSBudWxsO1xuICAgIEluaXQoKSB7XG4gICAgICAgIExvYWRNYW5hZ2VyLkkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KExvYWRNYW5hZ2VyKSBhcyBMb2FkTWFuYWdlcjtcbiAgICAgICAgTG9hZE1hbmFnZXIubG9hZEluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5Mb2FkUG9wdXBzUHJlZmFiKCk7XG4gICAgICAgIHRoaXMuTG9hZFNvdW5kUHJlZmFiKCk7XG4gICAgICAgIHRoaXMuTG9hZFNjZW5lcygpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuTG9hZFNsaWRlciwgMC4wMSlcbiAgICAgICAgdGhpcy5zbGlkZXJNYXNrID0gKGZpbmQoXCJDYW52YXMvU2xpZGVyL01hc2tcIikgYXMgTm9kZSkuZ2V0Q29tcG9uZW50KFVJVHJhbnNmb3JtQ29tcG9uZW50KSBhcyBVSVRyYW5zZm9ybUNvbXBvbmVudDtcbiAgICB9XG4gICAgaW5kZXggPSAwO1xuICAgIExvYWRTbGlkZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnNsaWRlck1hc2spIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV4IDw9IExvYWRNYW5hZ2VyLmxvYWRJbmRleCAvIExvYWRNYW5hZ2VyLmFsbGxvYWRJbmRleClcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IDAuMDE7XG4gICAgICAgICAgICB0aGlzLnNsaWRlck1hc2sud2lkdGggPSA1MTcgKiB0aGlzLmluZGV4O1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5pbmRleCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChMb2FkTWFuYWdlci5sb2FkSW5kZXggPj0gTG9hZE1hbmFnZXIuYWxsbG9hZEluZGV4KSB7XG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgTG9hZE1hbmFnZXIubG9hZEluZGV4ID0gTG9hZE1hbmFnZXIuYWxsbG9hZEluZGV4XG4gICAgICAgICAgICBpZiAodGhpcy5pbmRleCA+PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rvci5sb2FkU2NlbmUoXCJNYWluU2NlbmVcIik7XG4gICAgICAgICAgICAgICAgfSwgMC41KVxuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLkxvYWRTbGlkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKExvYWRNYW5hZ2VyLmxvYWRJbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliqDovb3lvLnnqpfnmoTpooTliLbkvZPvvIzlubbliJ3lp4vljJZQb3B1cE1hbmFnZXLkuK3nmoRwb3B1cHPmlbDnu4RcbiAgICAgKi9cbiAgICBMb2FkUG9wdXBzUHJlZmFiKCkge1xuICAgICAgICAvLyB0aGlzLkNyZWF0ZVBvcHVwUGFyZW50KCk7XG4gICAgICAgIGxvYWRlci5sb2FkUmVzRGlyKFwiUG9wdXBzUHJlZmFiXCIsIGZ1bmN0aW9uIChlcnI6IGFueSwgYXNzZXRzOiBhbnkpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3NldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYXNzZXRzW2ldO1xuICAgICAgICAgICAgICAgIFBvcHVwTWFuYWdlci5JLnBvcHVwcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgTG9hZE1hbmFnZXIubG9hZEluZGV4Kys7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhQb3B1cE1hbmFnZXIuSS5wb3B1cHMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5Yqg6L296Z+z5pWI77yM5bm25Yid5aeL5YyWU291bmRNYW5hZ2VyLkkuYXVkaW9zXG4gICAgICovXG4gICAgTG9hZFNvdW5kUHJlZmFiKCkge1xuICAgICAgICB0aGlzLkNyZWF0ZVNvdW5kTWFuYWdlcigpO1xuICAgICAgICBsb2FkZXIubG9hZFJlc0RpcihcIlNvdW5kc1wiLCBmdW5jdGlvbiAoZXJyOiBhbnksIGFzc2V0czogYW55KSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGFzc2V0c1tpXTtcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIuSS5hdWRpb3MucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCsrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coU291bmRNYW5hZ2VyLkkuYXVkaW9zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIExvYWRTY2VuZXMoKSB7XG4gICAgICAgIGRpcmVjdG9yLnByZWxvYWRTY2VuZShcIk1haW5TY2VuZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXgrKztcbiAgICAgICAgfSk7XG4gICAgICAgIGRpcmVjdG9yLnByZWxvYWRTY2VuZShcIkdhbWVTY2VuZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXgrKztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBDcmVhdGVQb3B1cFBhcmVudCgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSAoZmluZChcIkNhbnZhc1wiKSBhcyBOb2RlKVxuICAgICAgICBsZXQgcG9wdXAgPSBuZXcgTm9kZShcIlBvcHVwXCIpO1xuICAgICAgICAvLyBpZiAodGhpcy5jYW52YXMpXG4gICAgICAgIC8vICAgICBwb3B1cC5zZXRQb3NpdGlvbihuZXcgVmVjMygtdGhpcy5jYW52YXMucG9zaXRpb24ueCwgLXRoaXMuY2FudmFzLnBvc2l0aW9uLnksIDApKVxuICAgICAgICBwb3B1cC5hZGRDaGlsZChuZXcgTm9kZShcIm9uZVwiKSk7XG4gICAgICAgIHBvcHVwLmFkZENoaWxkKG5ldyBOb2RlKFwidHdvXCIpKTtcbiAgICAgICAgcG9wdXAuYWRkQ29tcG9uZW50KFVJVHJhbnNmb3JtQ29tcG9uZW50KTtcbiAgICAgICAgbGV0IGNhbnZhc0NvbXBvbmVudCA9IHBvcHVwLmFkZENvbXBvbmVudChDYW52YXNDb21wb25lbnQpO1xuICAgICAgICBwb3B1cC5hZGRDb21wb25lbnQoUG9wdXBNYW5hZ2VyKTtcbiAgICAgICAgLy8gY2FudmFzQ29tcG9uZW50LmNsZWFyRmxhZyA9IEdGWENsZWFyRmxhZy5ERVBUSDtcbiAgICAgICAgLy8gY2FudmFzQ29tcG9uZW50LnJlbmRlck1vZGUgPSAwO1xuICAgICAgICBjYW52YXNDb21wb25lbnQucHJpb3JpdHkgPSAxMDtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5wYXJlbnQpXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKHBvcHVwKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhwb3B1cCk7XG4gICAgfVxuICAgIHByaXZhdGUgQ3JlYXRlU291bmRNYW5hZ2VyKCkge1xuICAgICAgICBsZXQgc291bmRNYW5hZ2VyID0gbmV3IE5vZGUoXCJTb3VuZE1hbmFnZXJcIik7XG4gICAgICAgIHNvdW5kTWFuYWdlci5hZGRDb21wb25lbnQoU291bmRNYW5hZ2VyKTtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5wYXJlbnQpXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKHNvdW5kTWFuYWdlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKHNvdW5kTWFuYWdlcik7XG4gICAgfVxufVxuIl19