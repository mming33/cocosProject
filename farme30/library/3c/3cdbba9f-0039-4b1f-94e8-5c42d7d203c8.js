System.register(["cce.code-quality.cr", "cc", "../Game/MyComponent.js", "../StateMachine/StateMachine.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, find, UITransformComponent, _decorator, Label, MyComponent, StateMachine, _dec, _class, _class2, _temp, _crd, ccclass, property, LoadManager;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfMyComponent(extras) {
    _reporterNs.report("MyComponent", "../Game/MyComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../StateMachine/StateMachine", _context.meta, extras);
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
      find = _cc.find;
      UITransformComponent = _cc.UITransformComponent;
      _decorator = _cc._decorator;
      Label = _cc.Label;
    }, function (_GameMyComponentJs) {
      MyComponent = _GameMyComponentJs.MyComponent;
    }, function (_StateMachineStateMachineJs) {
      StateMachine = _StateMachineStateMachineJs.StateMachine;
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
          this.schedule(this.LoadSlider, 0.01);
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
                (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
                  error: Error()
                }), StateMachine) : StateMachine).NextState();
              }, 0.5);
              this.unschedule(this.LoadSlider);
            } //---------------------------

          } else {
            console.log(LoadManager.loadIndex);
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vTG9hZC9Mb2FkTWFuYWdlci50cyJdLCJuYW1lcyI6WyJmaW5kIiwiVUlUcmFuc2Zvcm1Db21wb25lbnQiLCJfZGVjb3JhdG9yIiwiTGFiZWwiLCJNeUNvbXBvbmVudCIsIlN0YXRlTWFjaGluZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkxvYWRNYW5hZ2VyIiwiSW5pdCIsIkkiLCJub2RlIiwiZ2V0Q29tcG9uZW50Iiwic2xpZGVyTWFzayIsInNsaWRlclRleHQiLCJzY2hlZHVsZSIsIkxvYWRTbGlkZXIiLCJpbmRleCIsImxvYWRJbmRleCIsImFsbGxvYWRJbmRleCIsInN0cmluZyIsIk1hdGgiLCJmbG9vciIsIndpZHRoIiwic2NoZWR1bGVPbmNlIiwiTmV4dFN0YXRlIiwidW5zY2hlZHVsZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMENBLE1BQUFBLEksT0FBQUEsSTtBQUE2Q0MsTUFBQUEsb0IsT0FBQUEsb0I7QUFBc0JDLE1BQUFBLFUsT0FBQUEsVTtBQUE2QkMsTUFBQUEsSyxPQUFBQSxLOztBQUNqSUMsTUFBQUEsVyxzQkFBQUEsVzs7QUFJQUMsTUFBQUEsWSwrQkFBQUEsWTs7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCSixVLENBQXRCSSxPO0FBQVNDLE1BQUFBLFEsR0FBYUwsVSxDQUFiSyxROzs2QkFHSkMsVyxXQURaRixPQUFPLENBQUMsYUFBRCxDOzs7Ozs7Ozs7Ozs7Ozs7O2tFQVNZLEM7Ozs7Ozs7ZUFFaEJHLEksR0FBQSxnQkFBTztBQUNIRCxVQUFBQSxXQUFXLENBQUNFLENBQVosR0FBZ0IsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCSixXQUF2QixDQUFoQjtBQUNBLGVBQUtLLFVBQUwsR0FBbUJiLElBQUksQ0FBQyxvQkFBRCxDQUFMLENBQXFDWSxZQUFyQyxDQUFrRFgsb0JBQWxELENBQWxCO0FBQ0EsZUFBS2EsVUFBTCxHQUFtQmQsSUFBSSxDQUFDLG9CQUFELENBQUwsQ0FBcUNZLFlBQXJDLENBQWtEVCxLQUFsRCxDQUFsQjtBQUNBLGVBQUtZLFFBQUwsQ0FBYyxLQUFLQyxVQUFuQixFQUErQixJQUEvQjtBQUNILFM7O2VBRURBLFUsR0FBQSxzQkFBYTtBQUNULGNBQUksS0FBS0gsVUFBVCxFQUFxQjtBQUNqQixnQkFBSSxLQUFLSSxLQUFMLElBQWNULFdBQVcsQ0FBQ1UsU0FBWixHQUF3QlYsV0FBVyxDQUFDVyxZQUF0RCxFQUFvRTtBQUNoRSxtQkFBS0YsS0FBTCxJQUFjLElBQWQ7O0FBQ0Esa0JBQUksS0FBS0gsVUFBVCxFQUFxQjtBQUNqQixxQkFBS0EsVUFBTCxDQUFnQk0sTUFBaEIsR0FBeUJDLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtMLEtBQUwsR0FBYSxHQUF4QixJQUErQixHQUF4RDtBQUNIO0FBQ0o7O0FBQ0QsaUJBQUtKLFVBQUwsQ0FBZ0JVLEtBQWhCLEdBQXdCLE1BQU0sS0FBS04sS0FBbkM7QUFFSDs7QUFDRCxjQUFJVCxXQUFXLENBQUNVLFNBQVosSUFBeUJWLFdBQVcsQ0FBQ1csWUFBekMsRUFBdUQ7QUFDbkQ7QUFDQVgsWUFBQUEsV0FBVyxDQUFDVSxTQUFaLEdBQXdCVixXQUFXLENBQUNXLFlBQXBDOztBQUNBLGdCQUFJLEtBQUtGLEtBQUwsSUFBYyxDQUFsQixFQUFxQjtBQUNqQixtQkFBS08sWUFBTCxDQUFrQixZQUFNO0FBQ3BCO0FBQUE7QUFBQSxrREFBYUMsU0FBYjtBQUNILGVBRkQsRUFFRyxHQUZIO0FBR0EsbUJBQUtDLFVBQUwsQ0FBZ0IsS0FBS1YsVUFBckI7QUFDSCxhQVJrRCxDQVNuRDs7QUFDSCxXQVZELE1BVU87QUFDSFcsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlwQixXQUFXLENBQUNVLFNBQXhCO0FBQ0g7QUFDSixTOzs7OztvSEF0QzBCLEMsNENBQ0csQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbnZhc0NvbXBvbmVudCwgTm9kZSwgZGlyZWN0b3IsIGZpbmQsIEdGWENsZWFyRmxhZywgbG9hZGVyLCBTcHJpdGVDb21wb25lbnQsIFVJVHJhbnNmb3JtQ29tcG9uZW50LCBfZGVjb3JhdG9yLCBhbmltYXRpb24sIFZlYzMsIExhYmVsIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tICcuLi9HYW1lL015Q29tcG9uZW50JztcbmltcG9ydCB7IFBvcHVwTWFuYWdlciB9IGZyb20gJy4uL1BvcHVwL1BvcHVwTWFuYWdlcic7XG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tICcuLi9Tb3VuZC9Tb3VuZE1hbmFnZXInO1xuaW1wb3J0IHsgSVN0YXRlIH0gZnJvbSAnLi4vU3RhdGVNYWNoaW5lL0lTdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZU1hY2hpbmUgfSBmcm9tICcuLi9TdGF0ZU1hY2hpbmUvU3RhdGVNYWNoaW5lJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdMb2FkTWFuYWdlcicpXG5leHBvcnQgY2xhc3MgTG9hZE1hbmFnZXIgZXh0ZW5kcyBNeUNvbXBvbmVudCB7XG4gICAgc3RhdGljIEk6IExvYWRNYW5hZ2VyO1xuXG4gICAgc3RhdGljIGxvYWRJbmRleDogbnVtYmVyID0gMDtcbiAgICBzdGF0aWMgYWxsbG9hZEluZGV4OiBudW1iZXIgPSA0O1xuXG4gICAgcHJpdmF0ZSBzbGlkZXJNYXNrOiBVSVRyYW5zZm9ybUNvbXBvbmVudCB8IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIHNsaWRlclRleHQ6IExhYmVsIHwgdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgaW5kZXggPSAwO1xuXG4gICAgSW5pdCgpIHtcbiAgICAgICAgTG9hZE1hbmFnZXIuSSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoTG9hZE1hbmFnZXIpIGFzIExvYWRNYW5hZ2VyO1xuICAgICAgICB0aGlzLnNsaWRlck1hc2sgPSAoZmluZChcIkNhbnZhcy9TbGlkZXIvTWFza1wiKSBhcyBOb2RlKS5nZXRDb21wb25lbnQoVUlUcmFuc2Zvcm1Db21wb25lbnQpIGFzIFVJVHJhbnNmb3JtQ29tcG9uZW50O1xuICAgICAgICB0aGlzLnNsaWRlclRleHQgPSAoZmluZChcIkNhbnZhcy9TbGlkZXIvVGV4dFwiKSBhcyBOb2RlKS5nZXRDb21wb25lbnQoTGFiZWwpIGFzIExhYmVsO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuTG9hZFNsaWRlciwgMC4wMSk7XG4gICAgfVxuXG4gICAgTG9hZFNsaWRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc2xpZGVyTWFzaykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXggPD0gTG9hZE1hbmFnZXIubG9hZEluZGV4IC8gTG9hZE1hbmFnZXIuYWxsbG9hZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSAwLjAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlclRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJUZXh0LnN0cmluZyA9IE1hdGguZmxvb3IodGhpcy5pbmRleCAqIDEwMCkgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNsaWRlck1hc2sud2lkdGggPSA1MTcgKiB0aGlzLmluZGV4O1xuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKExvYWRNYW5hZ2VyLmxvYWRJbmRleCA+PSBMb2FkTWFuYWdlci5hbGxsb2FkSW5kZXgpIHtcbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXggPSBMb2FkTWFuYWdlci5hbGxsb2FkSW5kZXhcbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV4ID49IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFN0YXRlTWFjaGluZS5OZXh0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICB9LCAwLjUpXG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuTG9hZFNsaWRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coTG9hZE1hbmFnZXIubG9hZEluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==