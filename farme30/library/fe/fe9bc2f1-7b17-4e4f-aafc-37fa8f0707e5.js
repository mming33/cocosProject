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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vR2FtZS9NeUNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwibWFjcm8iLCJHYW1lQ29udHJvbGxlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIk15Q29tcG9uZW50Iiwib25FbmFibGUiLCJJbml0Iiwic2NoZWR1bGUiLCJnYW1lVXBkYXRlIiwiUkVQRUFUX0ZPUkVWRVIiLCJpc0dhbWVTdG9wIiwib25VcERhdGUiLCJvbkRpc2FibGUiLCJ1bnNjaGVkdWxlIiwibXlEaXNhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxLLE9BQUFBLEs7O0FBQ3ZCQyxNQUFBQSxjLHFCQUFBQSxjOzs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JKLFUsQ0FBdEJJLE87QUFBU0MsTUFBQUEsUSxHQUFhTCxVLENBQWJLLFE7OzZCQUdKQyxXLFdBRFpGLE9BQU8sQ0FBQyxhQUFELEM7Ozs7Ozs7OztlQUlKRyxRLEdBQUEsb0JBQVc7QUFDUCxlQUFLQyxJQUFMO0FBQ0EsZUFBS0MsUUFBTCxDQUFjLEtBQUtDLFVBQW5CLEVBQStCLElBQS9CLEVBQXFDUixLQUFLLENBQUNTLGNBQTNDO0FBRUgsUzs7ZUFDT0QsVSxHQUFSLHNCQUFxQjtBQUNqQixjQUFJO0FBQUE7QUFBQSxnREFBZUUsVUFBbkIsRUFBK0I7QUFDL0IsZUFBS0MsUUFBTDtBQUNILFM7O2VBQ0RDLFMsR0FBQSxxQkFBWTtBQUNSLGVBQUtDLFVBQUwsQ0FBZ0IsS0FBS0wsVUFBckI7QUFDQSxlQUFLTSxTQUFMO0FBQ0gsUzs7ZUFFU1IsSSxHQUFWLGdCQUFpQixDQUVoQixDOztlQUNTSyxRLEdBQVYsb0JBQXFCLENBRXBCLEM7O2VBQ1NHLFMsR0FBVixxQkFBc0IsQ0FFckIsQzs7O1FBekI0QmYsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgbWFjcm8gfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBHYW1lQ29udHJvbGxlciB9IGZyb20gJy4vR2FtZUNvbnRyb2xsZXInO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ015Q29tcG9uZW50JylcbmV4cG9ydCBjbGFzcyBNeUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG5cblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLkluaXQoKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmdhbWVVcGRhdGUsIDAuMDIsIG1hY3JvLlJFUEVBVF9GT1JFVkVSKVxuXG4gICAgfVxuICAgIHByaXZhdGUgZ2FtZVVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKEdhbWVDb250cm9sbGVyLmlzR2FtZVN0b3ApIHJldHVybjtcbiAgICAgICAgdGhpcy5vblVwRGF0ZSgpXG4gICAgfVxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZ2FtZVVwZGF0ZSlcbiAgICAgICAgdGhpcy5teURpc2FibGUoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgSW5pdCgpIHtcblxuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25VcERhdGUoKSB7XG5cbiAgICB9XG4gICAgcHJvdGVjdGVkIG15RGlzYWJsZSgpIHtcblxuICAgIH1cblxuXG59XG4iXX0=