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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvOEJhbGwvYXNzZXRzL1NjcmlwdHMvQ29tbW9uL0dhbWUvTXlDb21wb25lbnQudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIm1hY3JvIiwiR2FtZUNvbnRyb2xsZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJNeUNvbXBvbmVudCIsIkluaXQiLCJzY2hlZHVsZSIsImdhbWVVcGRhdGUiLCJSRVBFQVRfRk9SRVZFUiIsImlzR2FtZVN0b3AiLCJvblVwRGF0ZSIsInVuc2NoZWR1bGUiLCJteURpc2FibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSyxPQUFBQSxLOzs7O0FBQ3ZCQyxNQUFBQSxjLHFCQUFBQSxjOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQkosVSxDQUF0QkksTztBQUFTQyxNQUFBQSxRLEdBQWFMLFUsQ0FBYkssUTs7NkJBR0pDLFcsV0FEWkYsT0FBTyxDQUFDLGFBQUQsQzs7Ozs7Ozs7Ozs7cUNBSU87QUFDUCxpQkFBS0csSUFBTDtBQUNBLGlCQUFLQyxRQUFMLENBQWMsS0FBS0MsVUFBbkIsRUFBK0IsSUFBL0IsRUFBcUNQLEtBQUssQ0FBQ1EsY0FBM0M7QUFFSDs7O3VDQUNvQjtBQUNqQixnQkFBSTtBQUFBO0FBQUEsa0RBQWVDLFVBQW5CLEVBQStCO0FBQy9CLGlCQUFLQyxRQUFMO0FBQ0g7OztzQ0FDVztBQUNSLGlCQUFLQyxVQUFMLENBQWdCLEtBQUtKLFVBQXJCO0FBQ0EsaUJBQUtLLFNBQUw7QUFDSDs7O2lDQUVnQixDQUVoQjs7O3FDQUNvQixDQUVwQjs7O3NDQUNxQixDQUVyQjs7OztRQXpCNEJiLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIG1hY3JvIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuL0dhbWVDb250cm9sbGVyJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdNeUNvbXBvbmVudCcpXG5leHBvcnQgY2xhc3MgTXlDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5Jbml0KCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5nYW1lVXBkYXRlLCAwLjAyLCBtYWNyby5SRVBFQVRfRk9SRVZFUilcblxuICAgIH1cbiAgICBwcml2YXRlIGdhbWVVcGRhdGUoKSB7XG4gICAgICAgIGlmIChHYW1lQ29udHJvbGxlci5pc0dhbWVTdG9wKSByZXR1cm47XG4gICAgICAgIHRoaXMub25VcERhdGUoKVxuICAgIH1cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmdhbWVVcGRhdGUpXG4gICAgICAgIHRoaXMubXlEaXNhYmxlKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIEluaXQoKSB7XG5cbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uVXBEYXRlKCkge1xuXG4gICAgfVxuICAgIHByb3RlY3RlZCBteURpc2FibGUoKSB7XG5cbiAgICB9XG5cblxufVxuIl19