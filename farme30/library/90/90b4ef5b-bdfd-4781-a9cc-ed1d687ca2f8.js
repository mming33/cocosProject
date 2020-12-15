System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, AnimationComponent, _dec, _class, _temp, _crd, ccclass, property, XiaoFei;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AnimationComponent = _cc.AnimationComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "90b4e9bvf1HganM7R1ofKL4", "XiaoFei", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("XiaoFei", XiaoFei = (_dec = ccclass('XiaoFei'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(XiaoFei, _Component);

        function XiaoFei() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "animationComponent", null);

          _defineProperty(_assertThisInitialized(_this), "clips", []);

          return _this;
        }

        var _proto = XiaoFei.prototype;

        _proto.onLoad = function onLoad() {
          this.animationComponent = this.node.getComponent(AnimationComponent);
        };

        _proto.start = function start() {
          var _this2 = this;

          if (this.animationComponent) {
            this.animationComponent.play("XiaoFeiIdel001");
            console.log("播放了 XiaoFeiIdel001");
            this.scheduleOnce(function () {
              if (_this2.animationComponent) _this2.animationComponent.crossFade('XiaoFeiTalk001', 0.3);
            }, 3);
          }
        };

        return XiaoFei;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvcmVzL1hpYW9GZWkvWGlhb0ZlaVNjcmlwdHMvWGlhb0ZlaS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiQW5pbWF0aW9uQ29tcG9uZW50IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiWGlhb0ZlaSIsIm9uTG9hZCIsImFuaW1hdGlvbkNvbXBvbmVudCIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJzdGFydCIsInBsYXkiLCJjb25zb2xlIiwibG9nIiwic2NoZWR1bGVPbmNlIiwiY3Jvc3NGYWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9TQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWlCQyxNQUFBQSxrQixPQUFBQSxrQjs7Ozs7OztBQUM5QkMsTUFBQUEsTyxHQUFzQkgsVSxDQUF0QkcsTztBQUFTQyxNQUFBQSxRLEdBQWFKLFUsQ0FBYkksUTs7eUJBR0pDLE8sV0FEWkYsT0FBTyxDQUFDLFNBQUQsQzs7Ozs7Ozs7Ozs7OytFQUc0QyxJOztrRUFFdkIsRTs7Ozs7OztlQUN6QkcsTSxHQUFBLGtCQUFTO0FBQ0wsZUFBS0Msa0JBQUwsR0FBMEIsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCUCxrQkFBdkIsQ0FBMUI7QUFFSCxTOztlQUNEUSxLLEdBQUEsaUJBQVE7QUFBQTs7QUFDSixjQUFJLEtBQUtILGtCQUFULEVBQTZCO0FBQ3pCLGlCQUFLQSxrQkFBTCxDQUF3QkksSUFBeEIsQ0FBNkIsZ0JBQTdCO0FBQ0FDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBQ0EsaUJBQUtDLFlBQUwsQ0FBa0IsWUFBTTtBQUNwQixrQkFBSSxNQUFJLENBQUNQLGtCQUFULEVBQ0ksTUFBSSxDQUFDQSxrQkFBTCxDQUF3QlEsU0FBeEIsQ0FBa0MsZ0JBQWxDLEVBQW9ELEdBQXBEO0FBQ1AsYUFIRCxFQUdHLENBSEg7QUFJSDtBQUNKLFM7OztRQWxCd0JkLFMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBBbmltYXRpb25Db21wb25lbnQsIEFuaW1hdGlvbkNsaXAgfSBmcm9tICdjYyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnWGlhb0ZlaScpXG5leHBvcnQgY2xhc3MgWGlhb0ZlaSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBhbmltYXRpb25Db21wb25lbnQ6IEFuaW1hdGlvbkNvbXBvbmVudCB8IG51bGwgPSBudWxsO1xuXG4gICAgY2xpcHM6IEFuaW1hdGlvbkNsaXBbXSA9IFtdO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25Db21wb25lbnQgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEFuaW1hdGlvbkNvbXBvbmVudCk7XG5cbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbkNvbXBvbmVudCkge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25Db21wb25lbnQucGxheShcIlhpYW9GZWlJZGVsMDAxXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmkq3mlL7kuoYgWGlhb0ZlaUlkZWwwMDFcIik7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uQ29tcG9uZW50KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkNvbXBvbmVudC5jcm9zc0ZhZGUoJ1hpYW9GZWlUYWxrMDAxJywgMC4zKTtcbiAgICAgICAgICAgIH0sIDMpXG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuIl19