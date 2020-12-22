System.register(["cce.code-quality.cr", "cc", "../Game/MyComponent.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, director, find, UITransformComponent, _decorator, Label, MyComponent, _dec, _class, _class2, _temp, _crd, ccclass, property, LoadManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfMyComponent(extras) {
    _reporterNs.report("MyComponent", "../Game/MyComponent", _context.meta, extras);
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
    }, function (_GameMyComponentJs) {
      MyComponent = _GameMyComponentJs.MyComponent;
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

          _defineProperty(this, "index", 0);
        }

        Init() {
          LoadManager.I = this.node.getComponent(LoadManager);
          this.sliderMask = find("Canvas/Slider/Mask").getComponent(UITransformComponent);
          this.sliderText = find("Canvas/Slider/Text").getComponent(Label);
          this.schedule(this.LoadSlider, 0.015);
        }

        LoadSlider() {
          if (this.LoadOver()) {
            this.scheduleOnce(() => {
              director.loadScene("MainScene");
            }, 0.5);
            this.unschedule(this.LoadSlider);
          }
        }

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

      }, _defineProperty(_class2, "I", void 0), _defineProperty(_class2, "loadIndex", 0), _defineProperty(_class2, "allloadIndex", 4), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vTG9hZC9Mb2FkTWFuYWdlci50cyJdLCJuYW1lcyI6WyJkaXJlY3RvciIsImZpbmQiLCJVSVRyYW5zZm9ybUNvbXBvbmVudCIsIl9kZWNvcmF0b3IiLCJMYWJlbCIsIk15Q29tcG9uZW50IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTG9hZE1hbmFnZXIiLCJJbml0IiwiSSIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJzbGlkZXJNYXNrIiwic2xpZGVyVGV4dCIsInNjaGVkdWxlIiwiTG9hZFNsaWRlciIsIkxvYWRPdmVyIiwic2NoZWR1bGVPbmNlIiwibG9hZFNjZW5lIiwidW5zY2hlZHVsZSIsImluZGV4IiwibG9hZEluZGV4IiwiYWxsbG9hZEluZGV4Iiwic3RyaW5nIiwiTWF0aCIsImZsb29yIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDQSxNQUFBQSxRLE9BQUFBLFE7QUFBVUMsTUFBQUEsSSxPQUFBQSxJO0FBQTZDQyxNQUFBQSxvQixPQUFBQSxvQjtBQUFzQkMsTUFBQUEsVSxPQUFBQSxVO0FBQTZCQyxNQUFBQSxLLE9BQUFBLEs7O0FBQ2pJQyxNQUFBQSxXLHNCQUFBQSxXOzs7Ozs7O09BTUg7QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE8sR0FBd0JKLFU7OzZCQUdqQkssVyxXQURaRixPQUFPLENBQUMsYUFBRCxDLG1DQUFSLE1BQ2FFLFdBRGI7QUFBQTtBQUFBLHNDQUM2QztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEseUNBUXpCLENBUnlCO0FBQUE7O0FBVXpDQyxRQUFBQSxJQUFJLEdBQUc7QUFDSEQsVUFBQUEsV0FBVyxDQUFDRSxDQUFaLEdBQWdCLEtBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QkosV0FBdkIsQ0FBaEI7QUFDQSxlQUFLSyxVQUFMLEdBQW1CWixJQUFJLENBQUMsb0JBQUQsQ0FBTCxDQUFxQ1csWUFBckMsQ0FBa0RWLG9CQUFsRCxDQUFsQjtBQUNBLGVBQUtZLFVBQUwsR0FBbUJiLElBQUksQ0FBQyxvQkFBRCxDQUFMLENBQXFDVyxZQUFyQyxDQUFrRFIsS0FBbEQsQ0FBbEI7QUFDQSxlQUFLVyxRQUFMLENBQWMsS0FBS0MsVUFBbkIsRUFBK0IsS0FBL0I7QUFDSDs7QUFFREEsUUFBQUEsVUFBVSxHQUFHO0FBQ1QsY0FBSSxLQUFLQyxRQUFMLEVBQUosRUFBcUI7QUFDakIsaUJBQUtDLFlBQUwsQ0FBa0IsTUFBTTtBQUNwQmxCLGNBQUFBLFFBQVEsQ0FBQ21CLFNBQVQsQ0FBbUIsV0FBbkI7QUFDSCxhQUZELEVBRUcsR0FGSDtBQUdBLGlCQUFLQyxVQUFMLENBQWdCLEtBQUtKLFVBQXJCO0FBQ0g7QUFFSjs7QUFFREMsUUFBQUEsUUFBUSxHQUFZO0FBQ2hCLGNBQUksS0FBS0osVUFBVCxFQUFxQjtBQUNqQixnQkFBSSxLQUFLUSxLQUFMLElBQWNiLFdBQVcsQ0FBQ2MsU0FBWixHQUF3QmQsV0FBVyxDQUFDZSxZQUF0RCxFQUFvRTtBQUNoRSxtQkFBS0YsS0FBTCxJQUFjLElBQWQ7O0FBQ0Esa0JBQUksS0FBS1AsVUFBVCxFQUFxQjtBQUNqQixxQkFBS0EsVUFBTCxDQUFnQlUsTUFBaEIsR0FBeUJDLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtMLEtBQUwsR0FBYSxHQUF4QixJQUErQixHQUF4RDtBQUNIO0FBQ0o7O0FBQ0QsaUJBQUtSLFVBQUwsQ0FBZ0JjLEtBQWhCLEdBQXdCLE1BQU0sS0FBS04sS0FBbkM7QUFDSDs7QUFDRCxjQUFJYixXQUFXLENBQUNjLFNBQVosSUFBeUJkLFdBQVcsQ0FBQ2UsWUFBekMsRUFBdUQ7QUFDbkRmLFlBQUFBLFdBQVcsQ0FBQ2MsU0FBWixHQUF3QmQsV0FBVyxDQUFDZSxZQUFwQztBQUNIOztBQUVELGNBQUksS0FBS0YsS0FBTCxJQUFjLENBQWxCLEVBQXFCO0FBQ2pCLG1CQUFPLElBQVA7QUFDSCxXQUZELE1BRU87QUFDSCxtQkFBTyxLQUFQO0FBQ0g7QUFDSjs7QUE5Q3dDLE8sK0VBR2QsQyw0Q0FDRyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FudmFzQ29tcG9uZW50LCBOb2RlLCBkaXJlY3RvciwgZmluZCwgR0ZYQ2xlYXJGbGFnLCBsb2FkZXIsIFNwcml0ZUNvbXBvbmVudCwgVUlUcmFuc2Zvcm1Db21wb25lbnQsIF9kZWNvcmF0b3IsIGFuaW1hdGlvbiwgVmVjMywgTGFiZWwgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gJy4uL0dhbWUvTXlDb21wb25lbnQnO1xuaW1wb3J0IHsgUG9wdXBNYW5hZ2VyIH0gZnJvbSAnLi4vUG9wdXAvUG9wdXBNYW5hZ2VyJztcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gJy4uL1NvdW5kL1NvdW5kTWFuYWdlcic7XG5pbXBvcnQgeyBJU3RhdGUgfSBmcm9tICcuLi9TdGF0ZU1hY2hpbmUvSVN0YXRlJztcbmltcG9ydCB7IFN0YXRlTWFjaGluZSB9IGZyb20gJy4uL1N0YXRlTWFjaGluZS9TdGF0ZU1hY2hpbmUnO1xuaW1wb3J0IHsgU3RhdGVUeXBlIH0gZnJvbSAnLi4vU3RhdGVNYWNoaW5lL1N0YXRlVHlwZSc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnTG9hZE1hbmFnZXInKVxuZXhwb3J0IGNsYXNzIExvYWRNYW5hZ2VyIGV4dGVuZHMgTXlDb21wb25lbnQge1xuICAgIHN0YXRpYyBJOiBMb2FkTWFuYWdlcjtcblxuICAgIHN0YXRpYyBsb2FkSW5kZXg6IG51bWJlciA9IDA7XG4gICAgc3RhdGljIGFsbGxvYWRJbmRleDogbnVtYmVyID0gNDtcblxuICAgIHByaXZhdGUgc2xpZGVyTWFzazogVUlUcmFuc2Zvcm1Db21wb25lbnQgfCB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBzbGlkZXJUZXh0OiBMYWJlbCB8IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIGluZGV4ID0gMDtcblxuICAgIEluaXQoKSB7XG4gICAgICAgIExvYWRNYW5hZ2VyLkkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KExvYWRNYW5hZ2VyKSBhcyBMb2FkTWFuYWdlcjtcbiAgICAgICAgdGhpcy5zbGlkZXJNYXNrID0gKGZpbmQoXCJDYW52YXMvU2xpZGVyL01hc2tcIikgYXMgTm9kZSkuZ2V0Q29tcG9uZW50KFVJVHJhbnNmb3JtQ29tcG9uZW50KSBhcyBVSVRyYW5zZm9ybUNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5zbGlkZXJUZXh0ID0gKGZpbmQoXCJDYW52YXMvU2xpZGVyL1RleHRcIikgYXMgTm9kZSkuZ2V0Q29tcG9uZW50KExhYmVsKSBhcyBMYWJlbDtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLkxvYWRTbGlkZXIsIDAuMDE1KTtcbiAgICB9XG5cbiAgICBMb2FkU2xpZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5Mb2FkT3ZlcigpKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpblNjZW5lXCIpO1xuICAgICAgICAgICAgfSwgMC41KTtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLkxvYWRTbGlkZXIpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBMb2FkT3ZlcigpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuc2xpZGVyTWFzaykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXggPD0gTG9hZE1hbmFnZXIubG9hZEluZGV4IC8gTG9hZE1hbmFnZXIuYWxsbG9hZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSAwLjAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJUZXh0LnN0cmluZyA9IE1hdGguZmxvb3IodGhpcy5pbmRleCAqIDEwMCkgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNsaWRlck1hc2sud2lkdGggPSA1MTcgKiB0aGlzLmluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChMb2FkTWFuYWdlci5sb2FkSW5kZXggPj0gTG9hZE1hbmFnZXIuYWxsbG9hZEluZGV4KSB7XG4gICAgICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXggPSBMb2FkTWFuYWdlci5hbGxsb2FkSW5kZXhcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmluZGV4ID49IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19