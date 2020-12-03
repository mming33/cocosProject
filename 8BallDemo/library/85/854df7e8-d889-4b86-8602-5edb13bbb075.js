System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, LineComponent, Vec2, _dec, _class, _temp, _crd, ccclass, property, MyLine;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
      Vec3 = _cc.Vec3;
      LineComponent = _cc.LineComponent;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "854dffo2IlLhoYCXtsTu7B1", "MyLine", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MyLine", MyLine = (_dec = ccclass('MyLine'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(MyLine, _Component);

        function MyLine() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, MyLine);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MyLine)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.index = 0;
          return _this;
        }

        _createClass(MyLine, [{
          key: "start",
          value: function start() {
            MyLine.I = this.node.getComponent(MyLine);
            this.line = this.node.getComponent(LineComponent);
          }
        }, {
          key: "DrawLine",
          value: function DrawLine(startPos, targetPos) {
            var arr = new Array(2);
            arr[0] = startPos;
            arr[1] = targetPos; //这个没有错！！

            this.line.positions = arr;
            var d = Vec3.distance(arr[0], arr[1]) / 10;
            this.line.tile = new Vec2(d, 1); // console.log(this.line.tile.x);

            this.index -= 0.01;
            this.line.offset = new Vec2(this.index, 0); // console.log(this.line.positions);
          }
        }]);

        return MyLine;
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0dhbWUvR2FtZUNvbW1vbi9CYWxsL015TGluZS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiVmVjMyIsIkxpbmVDb21wb25lbnQiLCJWZWMyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTXlMaW5lIiwiaW5kZXgiLCJJIiwibm9kZSIsImdldENvbXBvbmVudCIsImxpbmUiLCJzdGFydFBvcyIsInRhcmdldFBvcyIsImFyciIsIkFycmF5IiwicG9zaXRpb25zIiwiZCIsImRpc3RhbmNlIiwidGlsZSIsIm9mZnNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsSSxPQUFBQSxJO0FBQVVDLE1BQUFBLGEsT0FBQUEsYTtBQUFtQkMsTUFBQUEsSSxPQUFBQSxJOzs7Ozs7QUFDM0RDLE1BQUFBLE8sR0FBc0JMLFUsQ0FBdEJLLE87QUFBU0MsTUFBQUEsUSxHQUFhTixVLENBQWJNLFE7O3dCQUdKQyxNLFdBRFpGLE9BQU8sQ0FBQyxRQUFELEM7Ozs7Ozs7Ozs7Ozs7OztnQkFXSUcsSyxHQUFRLEM7Ozs7OztrQ0FMUjtBQUNKRCxZQUFBQSxNQUFNLENBQUNFLENBQVAsR0FBVyxLQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJKLE1BQXZCLENBQVg7QUFDQSxpQkFBS0ssSUFBTCxHQUFZLEtBQUtGLElBQUwsQ0FBVUMsWUFBVixDQUF1QlIsYUFBdkIsQ0FBWjtBQUVIOzs7bUNBRVFVLFEsRUFBVUMsUyxFQUFXO0FBQzFCLGdCQUFJQyxHQUFnQixHQUFHLElBQUlDLEtBQUosQ0FBZ0IsQ0FBaEIsQ0FBdkI7QUFDQUQsWUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTRixRQUFUO0FBQ0FFLFlBQUFBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU0QsU0FBVCxDQUgwQixDQUkxQjs7QUFDQSxpQkFBS0YsSUFBTCxDQUFVSyxTQUFWLEdBQXNCRixHQUF0QjtBQUNBLGdCQUFJRyxDQUFDLEdBQUdoQixJQUFJLENBQUNpQixRQUFMLENBQWNKLEdBQUcsQ0FBQyxDQUFELENBQWpCLEVBQXNCQSxHQUFHLENBQUMsQ0FBRCxDQUF6QixJQUFnQyxFQUF4QztBQUVBLGlCQUFLSCxJQUFMLENBQVVRLElBQVYsR0FBaUIsSUFBSWhCLElBQUosQ0FBU2MsQ0FBVCxFQUFZLENBQVosQ0FBakIsQ0FSMEIsQ0FTMUI7O0FBQ0EsaUJBQUtWLEtBQUwsSUFBYyxJQUFkO0FBQ0EsaUJBQUtJLElBQUwsQ0FBVVMsTUFBVixHQUFtQixJQUFJakIsSUFBSixDQUFTLEtBQUtJLEtBQWQsRUFBcUIsQ0FBckIsQ0FBbkIsQ0FYMEIsQ0FZMUI7QUFDSDs7OztRQXhCdUJQLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFZlYzMsIHYzLCBMaW5lQ29tcG9uZW50LCB2MiwgVmVjMiB9IGZyb20gJ2NjJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdNeUxpbmUnKVxuZXhwb3J0IGNsYXNzIE15TGluZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgSTogTXlMaW5lXG5cbiAgICBsaW5lOiBMaW5lQ29tcG9uZW50O1xuICAgIHN0YXJ0KCkge1xuICAgICAgICBNeUxpbmUuSSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoTXlMaW5lKTtcbiAgICAgICAgdGhpcy5saW5lID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChMaW5lQ29tcG9uZW50KTtcblxuICAgIH1cbiAgICBwcml2YXRlIGluZGV4ID0gMFxuICAgIERyYXdMaW5lKHN0YXJ0UG9zLCB0YXJnZXRQb3MpIHtcbiAgICAgICAgbGV0IGFycjogQXJyYXk8VmVjMz4gPSBuZXcgQXJyYXk8VmVjMz4oMik7XG4gICAgICAgIGFyclswXSA9IHN0YXJ0UG9zO1xuICAgICAgICBhcnJbMV0gPSB0YXJnZXRQb3M7XG4gICAgICAgIC8v6L+Z5Liq5rKh5pyJ6ZSZ77yB77yBXG4gICAgICAgIHRoaXMubGluZS5wb3NpdGlvbnMgPSBhcnI7XG4gICAgICAgIGxldCBkID0gVmVjMy5kaXN0YW5jZShhcnJbMF0sIGFyclsxXSkgLyAxMDtcblxuICAgICAgICB0aGlzLmxpbmUudGlsZSA9IG5ldyBWZWMyKGQsIDEpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxpbmUudGlsZS54KTtcbiAgICAgICAgdGhpcy5pbmRleCAtPSAwLjAxXG4gICAgICAgIHRoaXMubGluZS5vZmZzZXQgPSBuZXcgVmVjMih0aGlzLmluZGV4LCAwKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxpbmUucG9zaXRpb25zKTtcbiAgICB9XG5cbn1cbiJdfQ==