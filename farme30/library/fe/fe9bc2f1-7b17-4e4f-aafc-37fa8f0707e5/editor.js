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
        onEnable() {
          this.Init();
          this.schedule(this.gameUpdate, 0.02, macro.REPEAT_FOREVER);
        }

        gameUpdate() {
          if ((_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).isGameStop) return;
          this.onUpDate();
        }

        onDisable() {
          this.unschedule(this.gameUpdate);
          this.myDisable();
        }

        Init() {}

        onUpDate() {}

        myDisable() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vR2FtZS9NeUNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwibWFjcm8iLCJHYW1lQ29udHJvbGxlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIk15Q29tcG9uZW50Iiwib25FbmFibGUiLCJJbml0Iiwic2NoZWR1bGUiLCJnYW1lVXBkYXRlIiwiUkVQRUFUX0ZPUkVWRVIiLCJpc0dhbWVTdG9wIiwib25VcERhdGUiLCJvbkRpc2FibGUiLCJ1bnNjaGVkdWxlIiwibXlEaXNhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSyxPQUFBQSxLOztBQUN2QkMsTUFBQUEsYyxxQkFBQUEsYzs7Ozs7OztPQUNIO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCTCxVOzs2QkFHakJNLFcsV0FEWkYsT0FBTyxDQUFDLGFBQUQsQyxnQkFBUixNQUNhRSxXQURiLFNBQ2lDTCxTQURqQyxDQUMyQztBQUd2Q00sUUFBQUEsUUFBUSxHQUFHO0FBQ1AsZUFBS0MsSUFBTDtBQUNBLGVBQUtDLFFBQUwsQ0FBYyxLQUFLQyxVQUFuQixFQUErQixJQUEvQixFQUFxQ1IsS0FBSyxDQUFDUyxjQUEzQztBQUVIOztBQUNPRCxRQUFBQSxVQUFSLEdBQXFCO0FBQ2pCLGNBQUk7QUFBQTtBQUFBLGdEQUFlRSxVQUFuQixFQUErQjtBQUMvQixlQUFLQyxRQUFMO0FBQ0g7O0FBQ0RDLFFBQUFBLFNBQVMsR0FBRztBQUNSLGVBQUtDLFVBQUwsQ0FBZ0IsS0FBS0wsVUFBckI7QUFDQSxlQUFLTSxTQUFMO0FBQ0g7O0FBRVNSLFFBQUFBLElBQVYsR0FBaUIsQ0FFaEI7O0FBQ1NLLFFBQUFBLFFBQVYsR0FBcUIsQ0FFcEI7O0FBQ1NHLFFBQUFBLFNBQVYsR0FBc0IsQ0FFckI7O0FBekJzQyxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBtYWNybyB9IGZyb20gJ2NjJztcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi9HYW1lQ29udHJvbGxlcic7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnTXlDb21wb25lbnQnKVxuZXhwb3J0IGNsYXNzIE15Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuSW5pdCgpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZ2FtZVVwZGF0ZSwgMC4wMiwgbWFjcm8uUkVQRUFUX0ZPUkVWRVIpXG5cbiAgICB9XG4gICAgcHJpdmF0ZSBnYW1lVXBkYXRlKCkge1xuICAgICAgICBpZiAoR2FtZUNvbnRyb2xsZXIuaXNHYW1lU3RvcCkgcmV0dXJuO1xuICAgICAgICB0aGlzLm9uVXBEYXRlKClcbiAgICB9XG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5nYW1lVXBkYXRlKVxuICAgICAgICB0aGlzLm15RGlzYWJsZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBJbml0KCkge1xuXG4gICAgfVxuICAgIHByb3RlY3RlZCBvblVwRGF0ZSgpIHtcblxuICAgIH1cbiAgICBwcm90ZWN0ZWQgbXlEaXNhYmxlKCkge1xuXG4gICAgfVxuXG5cbn1cbiJdfQ==