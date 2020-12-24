System.register(["cce.code-quality.cr", "cc", "./GameController.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, macro, GameController, _dec, _class, _crd, ccclass, property, MyComponent;

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("MyComponent", MyComponent = (_dec = ccclass('MyComponent'), _dec(_class = class MyComponent extends Component {
        constructor() {
          super();
        }

        onEnable() {
          this.Init();
          this.schedule(this.gameUpdate, 0.02, macro.REPEAT_FOREVER);
        }

        gameUpdate() {
          if ((_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).isGameStop) return;
          this.onUpDate(0.02);
        }

        onDisable() {
          this.unschedule(this.gameUpdate);
          this.myDisable();
        }

        Init() {}

        onUpDate(dt) {}

        myDisable() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vR2FtZS9NeUNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwibWFjcm8iLCJHYW1lQ29udHJvbGxlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIk15Q29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJvbkVuYWJsZSIsIkluaXQiLCJzY2hlZHVsZSIsImdhbWVVcGRhdGUiLCJSRVBFQVRfRk9SRVZFUiIsImlzR2FtZVN0b3AiLCJvblVwRGF0ZSIsIm9uRGlzYWJsZSIsInVuc2NoZWR1bGUiLCJteURpc2FibGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEssT0FBQUEsSzs7QUFDdkJDLE1BQUFBLGMscUJBQUFBLGM7Ozs7Ozs7T0FDSDtBQUFFQyxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsTyxHQUF3QkwsVTs7NkJBR2pCTSxXLFdBRFpGLE9BQU8sQ0FBQyxhQUFELEMsZ0JBQVIsTUFDYUUsV0FEYixTQUNpQ0wsU0FEakMsQ0FDMkM7QUFFdkNNLFFBQUFBLFdBQVcsR0FBRztBQUNWO0FBQ0g7O0FBRURDLFFBQUFBLFFBQVEsR0FBRztBQUNQLGVBQUtDLElBQUw7QUFDQSxlQUFLQyxRQUFMLENBQWMsS0FBS0MsVUFBbkIsRUFBK0IsSUFBL0IsRUFBcUNULEtBQUssQ0FBQ1UsY0FBM0M7QUFFSDs7QUFDT0QsUUFBQUEsVUFBUixHQUFxQjtBQUNqQixjQUFJO0FBQUE7QUFBQSxnREFBZUUsVUFBbkIsRUFBK0I7QUFDL0IsZUFBS0MsUUFBTCxDQUFjLElBQWQ7QUFDSDs7QUFDREMsUUFBQUEsU0FBUyxHQUFHO0FBQ1IsZUFBS0MsVUFBTCxDQUFnQixLQUFLTCxVQUFyQjtBQUNBLGVBQUtNLFNBQUw7QUFDSDs7QUFFU1IsUUFBQUEsSUFBVixHQUFpQixDQUVoQjs7QUFDU0ssUUFBQUEsUUFBVixDQUFtQkksRUFBbkIsRUFBK0IsQ0FFOUI7O0FBQ1NELFFBQUFBLFNBQVYsR0FBc0IsQ0FFckI7O0FBNUJzQyxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBtYWNybyB9IGZyb20gJ2NjJztcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi9HYW1lQ29udHJvbGxlcic7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnTXlDb21wb25lbnQnKVxuZXhwb3J0IGNsYXNzIE15Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLkluaXQoKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmdhbWVVcGRhdGUsIDAuMDIsIG1hY3JvLlJFUEVBVF9GT1JFVkVSKVxuXG4gICAgfVxuICAgIHByaXZhdGUgZ2FtZVVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKEdhbWVDb250cm9sbGVyLmlzR2FtZVN0b3ApIHJldHVybjtcbiAgICAgICAgdGhpcy5vblVwRGF0ZSgwLjAyKVxuICAgIH1cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmdhbWVVcGRhdGUpXG4gICAgICAgIHRoaXMubXlEaXNhYmxlKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIEluaXQoKSB7XG5cbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uVXBEYXRlKGR0OiBudW1iZXIpIHtcblxuICAgIH1cbiAgICBwcm90ZWN0ZWQgbXlEaXNhYmxlKCkge1xuXG4gICAgfVxuXG5cbn1cbiJdfQ==