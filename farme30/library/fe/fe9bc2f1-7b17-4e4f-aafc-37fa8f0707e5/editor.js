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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9HYW1lL015Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJtYWNybyIsIkdhbWVDb250cm9sbGVyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTXlDb21wb25lbnQiLCJvbkVuYWJsZSIsIkluaXQiLCJzY2hlZHVsZSIsImdhbWVVcGRhdGUiLCJSRVBFQVRfRk9SRVZFUiIsImlzR2FtZVN0b3AiLCJvblVwRGF0ZSIsIm9uRGlzYWJsZSIsInVuc2NoZWR1bGUiLCJteURpc2FibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxLLE9BQUFBLEs7O0FBQ3ZCQyxNQUFBQSxjLHFCQUFBQSxjOzs7Ozs7O09BQ0g7QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE8sR0FBd0JMLFU7OzZCQUdqQk0sVyxXQURaRixPQUFPLENBQUMsYUFBRCxDLGdCQUFSLE1BQ2FFLFdBRGIsU0FDaUNMLFNBRGpDLENBQzJDO0FBR3ZDTSxRQUFBQSxRQUFRLEdBQUc7QUFDUCxlQUFLQyxJQUFMO0FBQ0EsZUFBS0MsUUFBTCxDQUFjLEtBQUtDLFVBQW5CLEVBQStCLElBQS9CLEVBQXFDUixLQUFLLENBQUNTLGNBQTNDO0FBRUg7O0FBQ09ELFFBQUFBLFVBQVIsR0FBcUI7QUFDakIsY0FBSTtBQUFBO0FBQUEsZ0RBQWVFLFVBQW5CLEVBQStCO0FBQy9CLGVBQUtDLFFBQUw7QUFDSDs7QUFDREMsUUFBQUEsU0FBUyxHQUFHO0FBQ1IsZUFBS0MsVUFBTCxDQUFnQixLQUFLTCxVQUFyQjtBQUNBLGVBQUtNLFNBQUw7QUFDSDs7QUFFU1IsUUFBQUEsSUFBVixHQUFpQixDQUVoQjs7QUFDU0ssUUFBQUEsUUFBVixHQUFxQixDQUVwQjs7QUFDU0csUUFBQUEsU0FBVixHQUFzQixDQUVyQjs7QUF6QnNDLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIG1hY3JvIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuL0dhbWVDb250cm9sbGVyJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdNeUNvbXBvbmVudCcpXG5leHBvcnQgY2xhc3MgTXlDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5Jbml0KCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5nYW1lVXBkYXRlLCAwLjAyLCBtYWNyby5SRVBFQVRfRk9SRVZFUilcblxuICAgIH1cbiAgICBwcml2YXRlIGdhbWVVcGRhdGUoKSB7XG4gICAgICAgIGlmIChHYW1lQ29udHJvbGxlci5pc0dhbWVTdG9wKSByZXR1cm47XG4gICAgICAgIHRoaXMub25VcERhdGUoKVxuICAgIH1cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmdhbWVVcGRhdGUpXG4gICAgICAgIHRoaXMubXlEaXNhYmxlKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIEluaXQoKSB7XG5cbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uVXBEYXRlKCkge1xuXG4gICAgfVxuICAgIHByb3RlY3RlZCBteURpc2FibGUoKSB7XG5cbiAgICB9XG5cblxufVxuIl19