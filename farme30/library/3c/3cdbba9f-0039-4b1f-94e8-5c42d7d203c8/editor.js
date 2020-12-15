System.register(["cce.code-quality.cr", "cc", "../Game/MyComponent.js", "../Popup/PopupManager.js", "../Sound/SoundManager.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CanvasComponent, Node, director, find, loader, UITransformComponent, _decorator, Label, MyComponent, PopupManager, SoundManager, _dec, _class, _class2, _temp, _crd, ccclass, property, LoadManager;

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoadManager", LoadManager = (_dec = ccclass('LoadManager'), _dec(_class = (_temp = _class2 = class LoadManager extends (_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "sliderMask", void 0);

          _defineProperty(this, "sliderText", void 0);

          _defineProperty(this, "canvas", null);

          _defineProperty(this, "index", 0);
        }

        Init() {
          LoadManager.I = this.node.getComponent(LoadManager);
          LoadManager.loadIndex = 0;
          this.LoadPopupsPrefab();
          this.LoadSoundPrefab();
          this.LoadScenes();
          this.schedule(this.LoadSlider, 0.01);
          this.sliderMask = find("Canvas/Slider/Mask").getComponent(UITransformComponent);
          this.sliderText = find("Canvas/Slider/Text").getComponent(Label);
        }

        LoadSlider() {
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
              this.scheduleOnce(() => {
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


        LoadPopupsPrefab() {
          // this.CreatePopupParent();
          loader.loadResDir("PopupsPrefab", function (err, assets) {
            if (err) {
              console.error(err);
              return;
            }

            for (let i = 0; i < assets.length; i++) {
              const element = assets[i];
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


        LoadSoundPrefab() {
          this.CreateSoundManager();
          loader.loadResDir("Sounds", function (err, assets) {
            if (err) {
              console.error(err);
              return;
            }

            for (let i = 0; i < assets.length; i++) {
              const element = assets[i];
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

        LoadScenes() {
          director.preloadScene("MainScene", () => {
            LoadManager.loadIndex++;
          });
          director.preloadScene("GameScene", () => {
            LoadManager.loadIndex++;
          });
        }

        CreatePopupParent() {
          this.canvas = find("Canvas");
          let popup = new Node("Popup"); // if (this.canvas)
          //     popup.setPosition(new Vec3(-this.canvas.position.x, -this.canvas.position.y, 0))

          popup.addChild(new Node("one"));
          popup.addChild(new Node("two"));
          popup.addComponent(UITransformComponent);
          let canvasComponent = popup.addComponent(CanvasComponent);
          popup.addComponent(_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager); // canvasComponent.clearFlag = GFXClearFlag.DEPTH;
          // canvasComponent.renderMode = 0;

          canvasComponent.priority = 10;
          if (this.node.parent) this.node.parent.addChild(popup);
          console.log(popup);
        }

        CreateSoundManager() {
          let soundManager = new Node("SoundManager");
          soundManager.addComponent(_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager);
          if (this.node.parent) this.node.parent.addChild(soundManager);
          console.log(soundManager);
        }

      }, _defineProperty(_class2, "I", void 0), _defineProperty(_class2, "loadIndex", 0), _defineProperty(_class2, "allloadIndex", 4), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vTG9hZC9Mb2FkTWFuYWdlci50cyJdLCJuYW1lcyI6WyJDYW52YXNDb21wb25lbnQiLCJOb2RlIiwiZGlyZWN0b3IiLCJmaW5kIiwibG9hZGVyIiwiVUlUcmFuc2Zvcm1Db21wb25lbnQiLCJfZGVjb3JhdG9yIiwiTGFiZWwiLCJNeUNvbXBvbmVudCIsIlBvcHVwTWFuYWdlciIsIlNvdW5kTWFuYWdlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkxvYWRNYW5hZ2VyIiwiSW5pdCIsIkkiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwibG9hZEluZGV4IiwiTG9hZFBvcHVwc1ByZWZhYiIsIkxvYWRTb3VuZFByZWZhYiIsIkxvYWRTY2VuZXMiLCJzY2hlZHVsZSIsIkxvYWRTbGlkZXIiLCJzbGlkZXJNYXNrIiwic2xpZGVyVGV4dCIsImluZGV4IiwiYWxsbG9hZEluZGV4Iiwic3RyaW5nIiwiTWF0aCIsImZsb29yIiwid2lkdGgiLCJzY2hlZHVsZU9uY2UiLCJsb2FkU2NlbmUiLCJ1bnNjaGVkdWxlIiwiY29uc29sZSIsImxvZyIsImxvYWRSZXNEaXIiLCJlcnIiLCJhc3NldHMiLCJlcnJvciIsImkiLCJsZW5ndGgiLCJlbGVtZW50IiwicG9wdXBzIiwicHVzaCIsIkNyZWF0ZVNvdW5kTWFuYWdlciIsImF1ZGlvcyIsInByZWxvYWRTY2VuZSIsIkNyZWF0ZVBvcHVwUGFyZW50IiwiY2FudmFzIiwicG9wdXAiLCJhZGRDaGlsZCIsImFkZENvbXBvbmVudCIsImNhbnZhc0NvbXBvbmVudCIsInByaW9yaXR5IiwicGFyZW50Iiwic291bmRNYW5hZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLFEs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Q0FBWXFCLFlBQVo7QUFDSDs7QUFuSHdDLE8sK0VBR2QsQyw0Q0FDRyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FudmFzQ29tcG9uZW50LCBOb2RlLCBkaXJlY3RvciwgZmluZCwgR0ZYQ2xlYXJGbGFnLCBsb2FkZXIsIFNwcml0ZUNvbXBvbmVudCwgVUlUcmFuc2Zvcm1Db21wb25lbnQsIF9kZWNvcmF0b3IsIGFuaW1hdGlvbiwgVmVjMywgTGFiZWwgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gJy4uL0dhbWUvTXlDb21wb25lbnQnO1xuaW1wb3J0IHsgUG9wdXBNYW5hZ2VyIH0gZnJvbSAnLi4vUG9wdXAvUG9wdXBNYW5hZ2VyJztcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gJy4uL1NvdW5kL1NvdW5kTWFuYWdlcic7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnTG9hZE1hbmFnZXInKVxuZXhwb3J0IGNsYXNzIExvYWRNYW5hZ2VyIGV4dGVuZHMgTXlDb21wb25lbnQge1xuICAgIHN0YXRpYyBJOiBMb2FkTWFuYWdlcjtcblxuICAgIHN0YXRpYyBsb2FkSW5kZXg6IG51bWJlciA9IDA7XG4gICAgc3RhdGljIGFsbGxvYWRJbmRleDogbnVtYmVyID0gNDtcbiAgICBzbGlkZXJNYXNrOiBVSVRyYW5zZm9ybUNvbXBvbmVudCB8IHVuZGVmaW5lZDtcbiAgICBzbGlkZXJUZXh0OiBMYWJlbCB8IHVuZGVmaW5lZDtcbiAgICBjYW52YXM6IE5vZGUgfCBudWxsID0gbnVsbDtcbiAgICBJbml0KCkge1xuICAgICAgICBMb2FkTWFuYWdlci5JID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChMb2FkTWFuYWdlcikgYXMgTG9hZE1hbmFnZXI7XG4gICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuTG9hZFBvcHVwc1ByZWZhYigpO1xuICAgICAgICB0aGlzLkxvYWRTb3VuZFByZWZhYigpO1xuICAgICAgICB0aGlzLkxvYWRTY2VuZXMoKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLkxvYWRTbGlkZXIsIDAuMDEpO1xuICAgICAgICB0aGlzLnNsaWRlck1hc2sgPSAoZmluZChcIkNhbnZhcy9TbGlkZXIvTWFza1wiKSBhcyBOb2RlKS5nZXRDb21wb25lbnQoVUlUcmFuc2Zvcm1Db21wb25lbnQpIGFzIFVJVHJhbnNmb3JtQ29tcG9uZW50O1xuICAgICAgICB0aGlzLnNsaWRlclRleHQgPSAoZmluZChcIkNhbnZhcy9TbGlkZXIvVGV4dFwiKSBhcyBOb2RlKS5nZXRDb21wb25lbnQoTGFiZWwpIGFzIExhYmVsO1xuICAgIH1cbiAgICBpbmRleCA9IDA7XG4gICAgTG9hZFNsaWRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc2xpZGVyTWFzaykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXggPD0gTG9hZE1hbmFnZXIubG9hZEluZGV4IC8gTG9hZE1hbmFnZXIuYWxsbG9hZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSAwLjAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJUZXh0LnN0cmluZyA9IE1hdGguZmxvb3IodGhpcy5pbmRleCAqIDEwMCkgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNsaWRlck1hc2sud2lkdGggPSA1MTcgKiB0aGlzLmluZGV4O1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTG9hZE1hbmFnZXIubG9hZEluZGV4ID49IExvYWRNYW5hZ2VyLmFsbGxvYWRJbmRleCkge1xuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCA9IExvYWRNYW5hZ2VyLmFsbGxvYWRJbmRleFxuICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXggPj0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpblNjZW5lXCIpO1xuICAgICAgICAgICAgICAgIH0sIDAuNSlcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5Mb2FkU2xpZGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhMb2FkTWFuYWdlci5sb2FkSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yqg6L295by556qX55qE6aKE5Yi25L2T77yM5bm25Yid5aeL5YyWUG9wdXBNYW5hZ2Vy5Lit55qEcG9wdXBz5pWw57uEXG4gICAgICovXG4gICAgTG9hZFBvcHVwc1ByZWZhYigpIHtcbiAgICAgICAgLy8gdGhpcy5DcmVhdGVQb3B1cFBhcmVudCgpO1xuICAgICAgICBsb2FkZXIubG9hZFJlc0RpcihcIlBvcHVwc1ByZWZhYlwiLCBmdW5jdGlvbiAoZXJyOiBhbnksIGFzc2V0czogYW55KSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGFzc2V0c1tpXTtcbiAgICAgICAgICAgICAgICBQb3B1cE1hbmFnZXIuSS5wb3B1cHMucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCsrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coUG9wdXBNYW5hZ2VyLkkucG9wdXBzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWKoOi9vemfs+aViO+8jOW5tuWIneWni+WMllNvdW5kTWFuYWdlci5JLmF1ZGlvc1xuICAgICAqL1xuICAgIExvYWRTb3VuZFByZWZhYigpIHtcbiAgICAgICAgdGhpcy5DcmVhdGVTb3VuZE1hbmFnZXIoKTtcbiAgICAgICAgbG9hZGVyLmxvYWRSZXNEaXIoXCJTb3VuZHNcIiwgZnVuY3Rpb24gKGVycjogYW55LCBhc3NldHM6IGFueSkge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBhc3NldHNbaV07XG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLkkuYXVkaW9zLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXgrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFNvdW5kTWFuYWdlci5JLmF1ZGlvcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBMb2FkU2NlbmVzKCkge1xuICAgICAgICBkaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJNYWluU2NlbmVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgTG9hZE1hbmFnZXIubG9hZEluZGV4Kys7XG4gICAgICAgIH0pO1xuICAgICAgICBkaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJHYW1lU2NlbmVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgTG9hZE1hbmFnZXIubG9hZEluZGV4Kys7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgQ3JlYXRlUG9wdXBQYXJlbnQoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gKGZpbmQoXCJDYW52YXNcIikgYXMgTm9kZSlcbiAgICAgICAgbGV0IHBvcHVwID0gbmV3IE5vZGUoXCJQb3B1cFwiKTtcbiAgICAgICAgLy8gaWYgKHRoaXMuY2FudmFzKVxuICAgICAgICAvLyAgICAgcG9wdXAuc2V0UG9zaXRpb24obmV3IFZlYzMoLXRoaXMuY2FudmFzLnBvc2l0aW9uLngsIC10aGlzLmNhbnZhcy5wb3NpdGlvbi55LCAwKSlcbiAgICAgICAgcG9wdXAuYWRkQ2hpbGQobmV3IE5vZGUoXCJvbmVcIikpO1xuICAgICAgICBwb3B1cC5hZGRDaGlsZChuZXcgTm9kZShcInR3b1wiKSk7XG4gICAgICAgIHBvcHVwLmFkZENvbXBvbmVudChVSVRyYW5zZm9ybUNvbXBvbmVudCk7XG4gICAgICAgIGxldCBjYW52YXNDb21wb25lbnQgPSBwb3B1cC5hZGRDb21wb25lbnQoQ2FudmFzQ29tcG9uZW50KTtcbiAgICAgICAgcG9wdXAuYWRkQ29tcG9uZW50KFBvcHVwTWFuYWdlcik7XG4gICAgICAgIC8vIGNhbnZhc0NvbXBvbmVudC5jbGVhckZsYWcgPSBHRlhDbGVhckZsYWcuREVQVEg7XG4gICAgICAgIC8vIGNhbnZhc0NvbXBvbmVudC5yZW5kZXJNb2RlID0gMDtcbiAgICAgICAgY2FudmFzQ29tcG9uZW50LnByaW9yaXR5ID0gMTA7XG4gICAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50KVxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChwb3B1cCk7XG5cbiAgICAgICAgY29uc29sZS5sb2cocG9wdXApO1xuICAgIH1cbiAgICBwcml2YXRlIENyZWF0ZVNvdW5kTWFuYWdlcigpIHtcbiAgICAgICAgbGV0IHNvdW5kTWFuYWdlciA9IG5ldyBOb2RlKFwiU291bmRNYW5hZ2VyXCIpO1xuICAgICAgICBzb3VuZE1hbmFnZXIuYWRkQ29tcG9uZW50KFNvdW5kTWFuYWdlcik7XG4gICAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50KVxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChzb3VuZE1hbmFnZXIpO1xuICAgICAgICBjb25zb2xlLmxvZyhzb3VuZE1hbmFnZXIpO1xuICAgIH1cbn1cbiJdfQ==