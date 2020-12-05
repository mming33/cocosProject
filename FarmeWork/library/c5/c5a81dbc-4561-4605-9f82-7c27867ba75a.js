System.register(["cc", "code-quality:cr", "./GameController.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, macro, GameController, _dec, _class, _crd, ccclass, property, MyComponent;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      macro = _cc.macro;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GameControllerJs) {
      GameController = _GameControllerJs.GameController;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "c5a8128RWFGBZ+CfCeGe6da", "MyComponent", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MyComponent", MyComponent = (_dec = ccclass('MyComponent'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(MyComponent, _Component);

        function MyComponent() {
          _classCallCheck(this, MyComponent);

          return _possibleConstructorReturn(this, _getPrototypeOf(MyComponent).apply(this, arguments));
        }

        _createClass(MyComponent, [{
          key: "onEnable",
          value: function onEnable() {
            this.Init();
            this.schedule(this.gameUpdate, 0.02, macro.REPEAT_FOREVER);
          }
        }, {
          key: "gameUpdate",
          value: function gameUpdate() {
            if ((_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).isGameStop) return;
            this.onUpDate();
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            this.unschedule(this.gameUpdate);
            this.myDisable();
          }
        }, {
          key: "Init",
          value: function Init() {}
        }, {
          key: "onUpDate",
          value: function onUpDate() {}
        }, {
          key: "myDisable",
          value: function myDisable() {}
        }]);

        return MyComponent;
      }(Component)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9HYW1lL015Q29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJtYWNybyIsIkdhbWVDb250cm9sbGVyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTXlDb21wb25lbnQiLCJJbml0Iiwic2NoZWR1bGUiLCJnYW1lVXBkYXRlIiwiUkVQRUFUX0ZPUkVWRVIiLCJpc0dhbWVTdG9wIiwib25VcERhdGUiLCJ1bnNjaGVkdWxlIiwibXlEaXNhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEssT0FBQUEsSzs7OztBQUN2QkMsTUFBQUEsYyxxQkFBQUEsYzs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JKLFUsQ0FBdEJJLE87QUFBU0MsTUFBQUEsUSxHQUFhTCxVLENBQWJLLFE7OzZCQUdKQyxXLFdBRFpGLE9BQU8sQ0FBQyxhQUFELEM7Ozs7Ozs7Ozs7O3FDQUlPO0FBQ1AsaUJBQUtHLElBQUw7QUFDQSxpQkFBS0MsUUFBTCxDQUFjLEtBQUtDLFVBQW5CLEVBQStCLElBQS9CLEVBQXFDUCxLQUFLLENBQUNRLGNBQTNDO0FBRUg7Ozt1Q0FDb0I7QUFDakIsZ0JBQUk7QUFBQTtBQUFBLGtEQUFlQyxVQUFuQixFQUErQjtBQUMvQixpQkFBS0MsUUFBTDtBQUNIOzs7c0NBQ1c7QUFDUixpQkFBS0MsVUFBTCxDQUFnQixLQUFLSixVQUFyQjtBQUNBLGlCQUFLSyxTQUFMO0FBQ0g7OztpQ0FFZ0IsQ0FFaEI7OztxQ0FDb0IsQ0FFcEI7OztzQ0FDcUIsQ0FFckI7Ozs7UUF6QjRCYixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBtYWNybyB9IGZyb20gJ2NjJztcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi9HYW1lQ29udHJvbGxlcic7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnTXlDb21wb25lbnQnKVxuZXhwb3J0IGNsYXNzIE15Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuSW5pdCgpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZ2FtZVVwZGF0ZSwgMC4wMiwgbWFjcm8uUkVQRUFUX0ZPUkVWRVIpXG5cbiAgICB9XG4gICAgcHJpdmF0ZSBnYW1lVXBkYXRlKCkge1xuICAgICAgICBpZiAoR2FtZUNvbnRyb2xsZXIuaXNHYW1lU3RvcCkgcmV0dXJuO1xuICAgICAgICB0aGlzLm9uVXBEYXRlKClcbiAgICB9XG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5nYW1lVXBkYXRlKVxuICAgICAgICB0aGlzLm15RGlzYWJsZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBJbml0KCkge1xuXG4gICAgfVxuICAgIHByb3RlY3RlZCBvblVwRGF0ZSgpIHtcblxuICAgIH1cbiAgICBwcm90ZWN0ZWQgbXlEaXNhYmxlKCkge1xuXG4gICAgfVxuXG5cbn1cbiJdfQ==