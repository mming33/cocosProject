System.register(["cce.code-quality.cr", "cc", "../Game/MyComponent.js", "../Popup/PopupManager.js", "../Sound/SoundManager.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CanvasComponent, Node, director, find, loader, UITransformComponent, _decorator, MyComponent, PopupManager, SoundManager, _dec, _class, _class2, _temp, _crd, ccclass, property, LoadManager;

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
        }

        LoadSlider() {
          if (this.sliderMask) {
            if (this.index <= LoadManager.loadIndex / LoadManager.allloadIndex) this.index += 0.01;
            this.sliderMask.width = 517 * this.index;
            console.log(this.index);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9Mb2FkL0xvYWRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIkNhbnZhc0NvbXBvbmVudCIsIk5vZGUiLCJkaXJlY3RvciIsImZpbmQiLCJsb2FkZXIiLCJVSVRyYW5zZm9ybUNvbXBvbmVudCIsIl9kZWNvcmF0b3IiLCJNeUNvbXBvbmVudCIsIlBvcHVwTWFuYWdlciIsIlNvdW5kTWFuYWdlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkxvYWRNYW5hZ2VyIiwiSW5pdCIsIkkiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwibG9hZEluZGV4IiwiTG9hZFBvcHVwc1ByZWZhYiIsIkxvYWRTb3VuZFByZWZhYiIsIkxvYWRTY2VuZXMiLCJzY2hlZHVsZSIsIkxvYWRTbGlkZXIiLCJzbGlkZXJNYXNrIiwiaW5kZXgiLCJhbGxsb2FkSW5kZXgiLCJ3aWR0aCIsImNvbnNvbGUiLCJsb2ciLCJzY2hlZHVsZU9uY2UiLCJsb2FkU2NlbmUiLCJ1bnNjaGVkdWxlIiwibG9hZFJlc0RpciIsImVyciIsImFzc2V0cyIsImVycm9yIiwiaSIsImxlbmd0aCIsImVsZW1lbnQiLCJwb3B1cHMiLCJwdXNoIiwiQ3JlYXRlU291bmRNYW5hZ2VyIiwiYXVkaW9zIiwicHJlbG9hZFNjZW5lIiwiQ3JlYXRlUG9wdXBQYXJlbnQiLCJjYW52YXMiLCJwb3B1cCIsImFkZENoaWxkIiwiYWRkQ29tcG9uZW50IiwiY2FudmFzQ29tcG9uZW50IiwicHJpb3JpdHkiLCJwYXJlbnQiLCJzb3VuZE1hbmFnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsZSxPQUFBQSxlO0FBQWlCQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsUSxPQUFBQSxRO0FBQVVDLE1BQUFBLEksT0FBQUEsSTtBQUFvQkMsTUFB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OUMsSUFBSixDQUFTLEtBQVQsQ0FBZjtBQUNBNkMsVUFBQUEsS0FBSyxDQUFDQyxRQUFOLENBQWUsSUFBSTlDLElBQUosQ0FBUyxLQUFULENBQWY7QUFDQTZDLFVBQUFBLEtBQUssQ0FBQ0UsWUFBTixDQUFtQjNDLG9CQUFuQjtBQUNBLGNBQUk0QyxlQUFlLEdBQUdILEtBQUssQ0FBQ0UsWUFBTixDQUFtQmhELGVBQW5CLENBQXRCO0FBQ0E4QyxVQUFBQSxLQUFLLENBQUNFLFlBQU47QUFBQTtBQUFBLDRDQVR3QixDQVV4QjtBQUNBOztBQUNBQyxVQUFBQSxlQUFlLENBQUNDLFFBQWhCLEdBQTJCLEVBQTNCO0FBQ0EsY0FBSSxLQUFLbkMsSUFBTCxDQUFVb0MsTUFBZCxFQUNJLEtBQUtwQyxJQUFMLENBQVVvQyxNQUFWLENBQWlCSixRQUFqQixDQUEwQkQsS0FBMUI7QUFFSm5CLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZa0IsS0FBWjtBQUNIOztBQUNPTCxRQUFBQSxrQkFBUixHQUE2QjtBQUN6QixjQUFJVyxZQUFZLEdBQUcsSUFBSW5ELElBQUosQ0FBUyxjQUFULENBQW5CO0FBQ0FtRCxVQUFBQSxZQUFZLENBQUNKLFlBQWI7QUFBQTtBQUFBO0FBQ0EsY0FBSSxLQUFLakMsSUFBTCxDQUFVb0MsTUFBZCxFQUNJLEtBQUtwQyxJQUFMLENBQVVvQyxNQUFWLENBQWlCSixRQUFqQixDQUEwQkssWUFBMUI7QUFDSnpCLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZd0IsWUFBWjtBQUNIOztBQTlHd0MsTywrRUFHZCxDLDRDQUNHLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW52YXNDb21wb25lbnQsIE5vZGUsIGRpcmVjdG9yLCBmaW5kLCBHRlhDbGVhckZsYWcsIGxvYWRlciwgU3ByaXRlQ29tcG9uZW50LCBVSVRyYW5zZm9ybUNvbXBvbmVudCwgX2RlY29yYXRvciwgYW5pbWF0aW9uLCBWZWMzIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tICcuLi9HYW1lL015Q29tcG9uZW50JztcbmltcG9ydCB7IFBvcHVwTWFuYWdlciB9IGZyb20gJy4uL1BvcHVwL1BvcHVwTWFuYWdlcic7XG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tICcuLi9Tb3VuZC9Tb3VuZE1hbmFnZXInO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0xvYWRNYW5hZ2VyJylcbmV4cG9ydCBjbGFzcyBMb2FkTWFuYWdlciBleHRlbmRzIE15Q29tcG9uZW50IHtcbiAgICBzdGF0aWMgSTogTG9hZE1hbmFnZXI7XG5cbiAgICBzdGF0aWMgbG9hZEluZGV4OiBudW1iZXIgPSAwO1xuICAgIHN0YXRpYyBhbGxsb2FkSW5kZXg6IG51bWJlciA9IDQ7XG4gICAgc2xpZGVyTWFzazogVUlUcmFuc2Zvcm1Db21wb25lbnQgfCB1bmRlZmluZWQ7XG4gICAgY2FudmFzOiBOb2RlIHwgbnVsbCA9IG51bGw7XG4gICAgSW5pdCgpIHtcbiAgICAgICAgTG9hZE1hbmFnZXIuSSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoTG9hZE1hbmFnZXIpIGFzIExvYWRNYW5hZ2VyO1xuICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXggPSAwO1xuICAgICAgICB0aGlzLkxvYWRQb3B1cHNQcmVmYWIoKTtcbiAgICAgICAgdGhpcy5Mb2FkU291bmRQcmVmYWIoKTtcbiAgICAgICAgdGhpcy5Mb2FkU2NlbmVzKCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5Mb2FkU2xpZGVyLCAwLjAxKVxuICAgICAgICB0aGlzLnNsaWRlck1hc2sgPSAoZmluZChcIkNhbnZhcy9TbGlkZXIvTWFza1wiKSBhcyBOb2RlKS5nZXRDb21wb25lbnQoVUlUcmFuc2Zvcm1Db21wb25lbnQpIGFzIFVJVHJhbnNmb3JtQ29tcG9uZW50O1xuICAgIH1cbiAgICBpbmRleCA9IDA7XG4gICAgTG9hZFNsaWRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc2xpZGVyTWFzaykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXggPD0gTG9hZE1hbmFnZXIubG9hZEluZGV4IC8gTG9hZE1hbmFnZXIuYWxsbG9hZEluZGV4KVxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gMC4wMTtcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyTWFzay53aWR0aCA9IDUxNyAqIHRoaXMuaW5kZXg7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmluZGV4KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKExvYWRNYW5hZ2VyLmxvYWRJbmRleCA+PSBMb2FkTWFuYWdlci5hbGxsb2FkSW5kZXgpIHtcbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXggPSBMb2FkTWFuYWdlci5hbGxsb2FkSW5kZXhcbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV4ID49IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdG9yLmxvYWRTY2VuZShcIk1haW5TY2VuZVwiKTtcbiAgICAgICAgICAgICAgICB9LCAwLjUpXG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuTG9hZFNsaWRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coTG9hZE1hbmFnZXIubG9hZEluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWKoOi9veW8ueeql+eahOmihOWItuS9k++8jOW5tuWIneWni+WMllBvcHVwTWFuYWdlcuS4reeahHBvcHVwc+aVsOe7hFxuICAgICAqL1xuICAgIExvYWRQb3B1cHNQcmVmYWIoKSB7XG4gICAgICAgIC8vIHRoaXMuQ3JlYXRlUG9wdXBQYXJlbnQoKTtcbiAgICAgICAgbG9hZGVyLmxvYWRSZXNEaXIoXCJQb3B1cHNQcmVmYWJcIiwgZnVuY3Rpb24gKGVycjogYW55LCBhc3NldHM6IGFueSkge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBhc3NldHNbaV07XG4gICAgICAgICAgICAgICAgUG9wdXBNYW5hZ2VyLkkucG9wdXBzLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXgrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFBvcHVwTWFuYWdlci5JLnBvcHVwcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDliqDovb3pn7PmlYjvvIzlubbliJ3lp4vljJZTb3VuZE1hbmFnZXIuSS5hdWRpb3NcbiAgICAgKi9cbiAgICBMb2FkU291bmRQcmVmYWIoKSB7XG4gICAgICAgIHRoaXMuQ3JlYXRlU291bmRNYW5hZ2VyKCk7XG4gICAgICAgIGxvYWRlci5sb2FkUmVzRGlyKFwiU291bmRzXCIsIGZ1bmN0aW9uIChlcnI6IGFueSwgYXNzZXRzOiBhbnkpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3NldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYXNzZXRzW2ldO1xuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5JLmF1ZGlvcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgTG9hZE1hbmFnZXIubG9hZEluZGV4Kys7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhTb3VuZE1hbmFnZXIuSS5hdWRpb3MpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgTG9hZFNjZW5lcygpIHtcbiAgICAgICAgZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiTWFpblNjZW5lXCIsICgpID0+IHtcbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCsrO1xuICAgICAgICB9KTtcbiAgICAgICAgZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiR2FtZVNjZW5lXCIsICgpID0+IHtcbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCsrO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIENyZWF0ZVBvcHVwUGFyZW50KCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IChmaW5kKFwiQ2FudmFzXCIpIGFzIE5vZGUpXG4gICAgICAgIGxldCBwb3B1cCA9IG5ldyBOb2RlKFwiUG9wdXBcIik7XG4gICAgICAgIC8vIGlmICh0aGlzLmNhbnZhcylcbiAgICAgICAgLy8gICAgIHBvcHVwLnNldFBvc2l0aW9uKG5ldyBWZWMzKC10aGlzLmNhbnZhcy5wb3NpdGlvbi54LCAtdGhpcy5jYW52YXMucG9zaXRpb24ueSwgMCkpXG4gICAgICAgIHBvcHVwLmFkZENoaWxkKG5ldyBOb2RlKFwib25lXCIpKTtcbiAgICAgICAgcG9wdXAuYWRkQ2hpbGQobmV3IE5vZGUoXCJ0d29cIikpO1xuICAgICAgICBwb3B1cC5hZGRDb21wb25lbnQoVUlUcmFuc2Zvcm1Db21wb25lbnQpO1xuICAgICAgICBsZXQgY2FudmFzQ29tcG9uZW50ID0gcG9wdXAuYWRkQ29tcG9uZW50KENhbnZhc0NvbXBvbmVudCk7XG4gICAgICAgIHBvcHVwLmFkZENvbXBvbmVudChQb3B1cE1hbmFnZXIpO1xuICAgICAgICAvLyBjYW52YXNDb21wb25lbnQuY2xlYXJGbGFnID0gR0ZYQ2xlYXJGbGFnLkRFUFRIO1xuICAgICAgICAvLyBjYW52YXNDb21wb25lbnQucmVuZGVyTW9kZSA9IDA7XG4gICAgICAgIGNhbnZhc0NvbXBvbmVudC5wcmlvcml0eSA9IDEwO1xuICAgICAgICBpZiAodGhpcy5ub2RlLnBhcmVudClcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQocG9wdXApO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHBvcHVwKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBDcmVhdGVTb3VuZE1hbmFnZXIoKSB7XG4gICAgICAgIGxldCBzb3VuZE1hbmFnZXIgPSBuZXcgTm9kZShcIlNvdW5kTWFuYWdlclwiKTtcbiAgICAgICAgc291bmRNYW5hZ2VyLmFkZENvbXBvbmVudChTb3VuZE1hbmFnZXIpO1xuICAgICAgICBpZiAodGhpcy5ub2RlLnBhcmVudClcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoc291bmRNYW5hZ2VyKTtcbiAgICAgICAgY29uc29sZS5sb2coc291bmRNYW5hZ2VyKTtcbiAgICB9XG59XG4iXX0=