System.register(["cce.code-quality.cr", "cc", "../Game/MyComponent.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, director, find, UITransformComponent, _decorator, Label, MyComponent, _dec, _class, _class2, _temp, _crd, ccclass, property, LoadManager;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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

          _defineProperty(_assertThisInitialized(_this), "index", 0);

          return _this;
        }

        var _proto = LoadManager.prototype;

        _proto.Init = function Init() {
          LoadManager.I = this.node.getComponent(LoadManager);
          this.sliderMask = find("Canvas/Slider/Mask").getComponent(UITransformComponent);
          this.sliderText = find("Canvas/Slider/Text").getComponent(Label);
          this.schedule(this.LoadSlider, 0.015);
        };

        _proto.LoadSlider = function LoadSlider() {
          if (this.LoadOver()) {
            this.scheduleOnce(function () {
              director.loadScene("MainScene");
            }, 0.5);
            this.unschedule(this.LoadSlider);
          }
        };

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
        };

        return LoadManager;
      }(_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent), _defineProperty(_class2, "I", void 0), _defineProperty(_class2, "loadIndex", 0), _defineProperty(_class2, "allloadIndex", 5), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vTG9hZC9Mb2FkTWFuYWdlci50cyJdLCJuYW1lcyI6WyJkaXJlY3RvciIsImZpbmQiLCJVSVRyYW5zZm9ybUNvbXBvbmVudCIsIl9kZWNvcmF0b3IiLCJMYWJlbCIsIk15Q29tcG9uZW50IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTG9hZE1hbmFnZXIiLCJJbml0IiwiSSIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJzbGlkZXJNYXNrIiwic2xpZGVyVGV4dCIsInNjaGVkdWxlIiwiTG9hZFNsaWRlciIsIkxvYWRPdmVyIiwic2NoZWR1bGVPbmNlIiwibG9hZFNjZW5lIiwidW5zY2hlZHVsZSIsImluZGV4IiwibG9hZEluZGV4IiwiYWxsbG9hZEluZGV4Iiwic3RyaW5nIiwiTWF0aCIsImZsb29yIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQ0EsTUFBQUEsUSxPQUFBQSxRO0FBQVVDLE1BQUFBLEksT0FBQUEsSTtBQUE2Q0MsTUFBQUEsb0IsT0FBQUEsb0I7QUFBc0JDLE1BQUFBLFUsT0FBQUEsVTtBQUE2QkMsTUFBQUEsSyxPQUFBQSxLOztBQUNqSUMsTUFBQUEsVyxzQkFBQUEsVzs7Ozs7OztBQU1EQyxNQUFBQSxPLEdBQXNCSCxVLENBQXRCRyxPO0FBQVNDLE1BQUFBLFEsR0FBYUosVSxDQUFiSSxROzs2QkFHSkMsVyxXQURaRixPQUFPLENBQUMsYUFBRCxDOzs7Ozs7Ozs7Ozs7Ozs7O2tFQVNZLEM7Ozs7Ozs7ZUFFaEJHLEksR0FBQSxnQkFBTztBQUNIRCxVQUFBQSxXQUFXLENBQUNFLENBQVosR0FBZ0IsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCSixXQUF2QixDQUFoQjtBQUNBLGVBQUtLLFVBQUwsR0FBbUJaLElBQUksQ0FBQyxvQkFBRCxDQUFMLENBQXFDVyxZQUFyQyxDQUFrRFYsb0JBQWxELENBQWxCO0FBQ0EsZUFBS1ksVUFBTCxHQUFtQmIsSUFBSSxDQUFDLG9CQUFELENBQUwsQ0FBcUNXLFlBQXJDLENBQWtEUixLQUFsRCxDQUFsQjtBQUNBLGVBQUtXLFFBQUwsQ0FBYyxLQUFLQyxVQUFuQixFQUErQixLQUEvQjtBQUNILFM7O2VBRURBLFUsR0FBQSxzQkFBYTtBQUNULGNBQUksS0FBS0MsUUFBTCxFQUFKLEVBQXFCO0FBQ2pCLGlCQUFLQyxZQUFMLENBQWtCLFlBQU07QUFDcEJsQixjQUFBQSxRQUFRLENBQUNtQixTQUFULENBQW1CLFdBQW5CO0FBQ0gsYUFGRCxFQUVHLEdBRkg7QUFHQSxpQkFBS0MsVUFBTCxDQUFnQixLQUFLSixVQUFyQjtBQUNIO0FBRUosUzs7ZUFFREMsUSxHQUFBLG9CQUFvQjtBQUNoQixjQUFJLEtBQUtKLFVBQVQsRUFBcUI7QUFDakIsZ0JBQUksS0FBS1EsS0FBTCxJQUFjYixXQUFXLENBQUNjLFNBQVosR0FBd0JkLFdBQVcsQ0FBQ2UsWUFBdEQsRUFBb0U7QUFDaEUsbUJBQUtGLEtBQUwsSUFBYyxJQUFkOztBQUNBLGtCQUFJLEtBQUtQLFVBQVQsRUFBcUI7QUFDakIscUJBQUtBLFVBQUwsQ0FBZ0JVLE1BQWhCLEdBQXlCQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLTCxLQUFMLEdBQWEsR0FBeEIsSUFBK0IsR0FBeEQ7QUFDSDtBQUNKOztBQUNELGlCQUFLUixVQUFMLENBQWdCYyxLQUFoQixHQUF3QixNQUFNLEtBQUtOLEtBQW5DO0FBQ0g7O0FBQ0QsY0FBSWIsV0FBVyxDQUFDYyxTQUFaLElBQXlCZCxXQUFXLENBQUNlLFlBQXpDLEVBQXVEO0FBQ25EZixZQUFBQSxXQUFXLENBQUNjLFNBQVosR0FBd0JkLFdBQVcsQ0FBQ2UsWUFBcEM7QUFDSDs7QUFFRCxjQUFJLEtBQUtGLEtBQUwsSUFBYyxDQUFsQixFQUFxQjtBQUNqQixtQkFBTyxJQUFQO0FBQ0gsV0FGRCxNQUVPO0FBQ0gsbUJBQU8sS0FBUDtBQUNIO0FBQ0osUzs7Ozs7b0hBM0MwQixDLDRDQUNHLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW52YXNDb21wb25lbnQsIE5vZGUsIGRpcmVjdG9yLCBmaW5kLCBHRlhDbGVhckZsYWcsIGxvYWRlciwgU3ByaXRlQ29tcG9uZW50LCBVSVRyYW5zZm9ybUNvbXBvbmVudCwgX2RlY29yYXRvciwgYW5pbWF0aW9uLCBWZWMzLCBMYWJlbCB9IGZyb20gJ2NjJztcbmltcG9ydCB7IE15Q29tcG9uZW50IH0gZnJvbSAnLi4vR2FtZS9NeUNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb3B1cE1hbmFnZXIgfSBmcm9tICcuLi9Qb3B1cC9Qb3B1cE1hbmFnZXInO1xuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi4vU291bmQvU291bmRNYW5hZ2VyJztcbmltcG9ydCB7IElTdGF0ZSB9IGZyb20gJy4uL1N0YXRlTWFjaGluZS9JU3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVNYWNoaW5lIH0gZnJvbSAnLi4vU3RhdGVNYWNoaW5lL1N0YXRlTWFjaGluZSc7XG5pbXBvcnQgeyBTdGF0ZVR5cGUgfSBmcm9tICcuLi9TdGF0ZU1hY2hpbmUvU3RhdGVUeXBlJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdMb2FkTWFuYWdlcicpXG5leHBvcnQgY2xhc3MgTG9hZE1hbmFnZXIgZXh0ZW5kcyBNeUNvbXBvbmVudCB7XG4gICAgc3RhdGljIEk6IExvYWRNYW5hZ2VyO1xuXG4gICAgc3RhdGljIGxvYWRJbmRleDogbnVtYmVyID0gMDtcbiAgICBzdGF0aWMgYWxsbG9hZEluZGV4OiBudW1iZXIgPSA1O1xuXG4gICAgcHJpdmF0ZSBzbGlkZXJNYXNrOiBVSVRyYW5zZm9ybUNvbXBvbmVudCB8IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIHNsaWRlclRleHQ6IExhYmVsIHwgdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgaW5kZXggPSAwO1xuXG4gICAgSW5pdCgpIHtcbiAgICAgICAgTG9hZE1hbmFnZXIuSSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoTG9hZE1hbmFnZXIpIGFzIExvYWRNYW5hZ2VyO1xuICAgICAgICB0aGlzLnNsaWRlck1hc2sgPSAoZmluZChcIkNhbnZhcy9TbGlkZXIvTWFza1wiKSBhcyBOb2RlKS5nZXRDb21wb25lbnQoVUlUcmFuc2Zvcm1Db21wb25lbnQpIGFzIFVJVHJhbnNmb3JtQ29tcG9uZW50O1xuICAgICAgICB0aGlzLnNsaWRlclRleHQgPSAoZmluZChcIkNhbnZhcy9TbGlkZXIvVGV4dFwiKSBhcyBOb2RlKS5nZXRDb21wb25lbnQoTGFiZWwpIGFzIExhYmVsO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuTG9hZFNsaWRlciwgMC4wMTUpO1xuICAgIH1cblxuICAgIExvYWRTbGlkZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLkxvYWRPdmVyKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rvci5sb2FkU2NlbmUoXCJNYWluU2NlbmVcIik7XG4gICAgICAgICAgICB9LCAwLjUpO1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuTG9hZFNsaWRlcik7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIExvYWRPdmVyKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5zbGlkZXJNYXNrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbmRleCA8PSBMb2FkTWFuYWdlci5sb2FkSW5kZXggLyBMb2FkTWFuYWdlci5hbGxsb2FkSW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IDAuMDE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVyVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNsaWRlclRleHQuc3RyaW5nID0gTWF0aC5mbG9vcih0aGlzLmluZGV4ICogMTAwKSArIFwiJVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2xpZGVyTWFzay53aWR0aCA9IDUxNyAqIHRoaXMuaW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKExvYWRNYW5hZ2VyLmxvYWRJbmRleCA+PSBMb2FkTWFuYWdlci5hbGxsb2FkSW5kZXgpIHtcbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCA9IExvYWRNYW5hZ2VyLmFsbGxvYWRJbmRleFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaW5kZXggPj0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=