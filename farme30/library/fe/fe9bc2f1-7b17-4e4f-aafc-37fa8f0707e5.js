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
          this.onUpDate(0.02);
        };

        _proto.onDisable = function onDisable() {
          this.unschedule(this.gameUpdate);
          this.myDisable();
        };

        _proto.Init = function Init() {};

        _proto.onUpDate = function onUpDate(dt) {};

        _proto.myDisable = function myDisable() {};

        return MyComponent;
      }(Component)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vR2FtZS9NeUNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwibWFjcm8iLCJHYW1lQ29udHJvbGxlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIk15Q29tcG9uZW50Iiwib25FbmFibGUiLCJJbml0Iiwic2NoZWR1bGUiLCJnYW1lVXBkYXRlIiwiUkVQRUFUX0ZPUkVWRVIiLCJpc0dhbWVTdG9wIiwib25VcERhdGUiLCJvbkRpc2FibGUiLCJ1bnNjaGVkdWxlIiwibXlEaXNhYmxlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEssT0FBQUEsSzs7QUFDdkJDLE1BQUFBLGMscUJBQUFBLGM7Ozs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQkosVSxDQUF0QkksTztBQUFTQyxNQUFBQSxRLEdBQWFMLFUsQ0FBYkssUTs7NkJBR0pDLFcsV0FEWkYsT0FBTyxDQUFDLGFBQUQsQzs7Ozs7Ozs7O2VBSUpHLFEsR0FBQSxvQkFBVztBQUNQLGVBQUtDLElBQUw7QUFDQSxlQUFLQyxRQUFMLENBQWMsS0FBS0MsVUFBbkIsRUFBK0IsSUFBL0IsRUFBcUNSLEtBQUssQ0FBQ1MsY0FBM0M7QUFFSCxTOztlQUNPRCxVLEdBQVIsc0JBQXFCO0FBQ2pCLGNBQUk7QUFBQTtBQUFBLGdEQUFlRSxVQUFuQixFQUErQjtBQUMvQixlQUFLQyxRQUFMLENBQWMsSUFBZDtBQUNILFM7O2VBQ0RDLFMsR0FBQSxxQkFBWTtBQUNSLGVBQUtDLFVBQUwsQ0FBZ0IsS0FBS0wsVUFBckI7QUFDQSxlQUFLTSxTQUFMO0FBQ0gsUzs7ZUFFU1IsSSxHQUFWLGdCQUFpQixDQUVoQixDOztlQUNTSyxRLEdBQVYsa0JBQW1CSSxFQUFuQixFQUErQixDQUU5QixDOztlQUNTRCxTLEdBQVYscUJBQXNCLENBRXJCLEM7OztRQXpCNEJmLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIG1hY3JvIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuL0dhbWVDb250cm9sbGVyJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdNeUNvbXBvbmVudCcpXG5leHBvcnQgY2xhc3MgTXlDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5Jbml0KCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5nYW1lVXBkYXRlLCAwLjAyLCBtYWNyby5SRVBFQVRfRk9SRVZFUilcbiAgICAgICAgXG4gICAgfVxuICAgIHByaXZhdGUgZ2FtZVVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKEdhbWVDb250cm9sbGVyLmlzR2FtZVN0b3ApIHJldHVybjtcbiAgICAgICAgdGhpcy5vblVwRGF0ZSgwLjAyKVxuICAgIH1cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmdhbWVVcGRhdGUpXG4gICAgICAgIHRoaXMubXlEaXNhYmxlKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIEluaXQoKSB7XG5cbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uVXBEYXRlKGR0OiBudW1iZXIpIHtcblxuICAgIH1cbiAgICBwcm90ZWN0ZWQgbXlEaXNhYmxlKCkge1xuXG4gICAgfVxuXG5cbn1cbiJdfQ==