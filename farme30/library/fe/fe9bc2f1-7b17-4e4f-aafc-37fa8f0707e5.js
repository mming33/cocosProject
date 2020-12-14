System.register(["cce.code-quality.cr", "cc", "./GameController.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, macro, GameController, _dec, _class, _crd, ccclass, property, MyComponent;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      macro = _cc.macro;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fe9bcLxexdOT6r8N/qPBwfl", "MyComponent", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MyComponent", MyComponent = (_dec = ccclass('MyComponent'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MyComponent, _Component);

        function MyComponent() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = MyComponent.prototype;

        _proto.onEnable = function onEnable() {
          this.Init();
          this.schedule(this.gameUpdate, 0.02, macro.REPEAT_FOREVER);
        };

        _proto.gameUpdate = function gameUpdate() {
          if ((_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).isGameStop) return;
          this.onUpDate();
        };

        _proto.onDisable = function onDisable() {
          this.unschedule(this.gameUpdate);
          this.myDisable();
        };

        _proto.Init = function Init() {};

        _proto.onUpDate = function onUpDate() {};

        _proto.myDisable = function myDisable() {};

        return MyComponent;
      }(Component)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9HYW1lL015Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJtYWNybyIsIkdhbWVDb250cm9sbGVyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTXlDb21wb25lbnQiLCJvbkVuYWJsZSIsIkluaXQiLCJzY2hlZHVsZSIsImdhbWVVcGRhdGUiLCJSRVBFQVRfRk9SRVZFUiIsImlzR2FtZVN0b3AiLCJvblVwRGF0ZSIsIm9uRGlzYWJsZSIsInVuc2NoZWR1bGUiLCJteURpc2FibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEssT0FBQUEsSzs7QUFDdkJDLE1BQUFBLGMscUJBQUFBLGM7Ozs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQkosVSxDQUF0QkksTztBQUFTQyxNQUFBQSxRLEdBQWFMLFUsQ0FBYkssUTs7NkJBR0pDLFcsV0FEWkYsT0FBTyxDQUFDLGFBQUQsQzs7Ozs7Ozs7O2VBSUpHLFEsR0FBQSxvQkFBVztBQUNQLGVBQUtDLElBQUw7QUFDQSxlQUFLQyxRQUFMLENBQWMsS0FBS0MsVUFBbkIsRUFBK0IsSUFBL0IsRUFBcUNSLEtBQUssQ0FBQ1MsY0FBM0M7QUFFSCxTOztlQUNPRCxVLEdBQVIsc0JBQXFCO0FBQ2pCLGNBQUk7QUFBQTtBQUFBLGdEQUFlRSxVQUFuQixFQUErQjtBQUMvQixlQUFLQyxRQUFMO0FBQ0gsUzs7ZUFDREMsUyxHQUFBLHFCQUFZO0FBQ1IsZUFBS0MsVUFBTCxDQUFnQixLQUFLTCxVQUFyQjtBQUNBLGVBQUtNLFNBQUw7QUFDSCxTOztlQUVTUixJLEdBQVYsZ0JBQWlCLENBRWhCLEM7O2VBQ1NLLFEsR0FBVixvQkFBcUIsQ0FFcEIsQzs7ZUFDU0csUyxHQUFWLHFCQUFzQixDQUVyQixDOzs7UUF6QjRCZixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBtYWNybyB9IGZyb20gJ2NjJztcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi9HYW1lQ29udHJvbGxlcic7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnTXlDb21wb25lbnQnKVxuZXhwb3J0IGNsYXNzIE15Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuSW5pdCgpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZ2FtZVVwZGF0ZSwgMC4wMiwgbWFjcm8uUkVQRUFUX0ZPUkVWRVIpXG5cbiAgICB9XG4gICAgcHJpdmF0ZSBnYW1lVXBkYXRlKCkge1xuICAgICAgICBpZiAoR2FtZUNvbnRyb2xsZXIuaXNHYW1lU3RvcCkgcmV0dXJuO1xuICAgICAgICB0aGlzLm9uVXBEYXRlKClcbiAgICB9XG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5nYW1lVXBkYXRlKVxuICAgICAgICB0aGlzLm15RGlzYWJsZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBJbml0KCkge1xuXG4gICAgfVxuICAgIHByb3RlY3RlZCBvblVwRGF0ZSgpIHtcblxuICAgIH1cbiAgICBwcm90ZWN0ZWQgbXlEaXNhYmxlKCkge1xuXG4gICAgfVxuXG5cbn1cbiJdfQ==