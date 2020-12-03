System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, RigidBody, Vec3, Quat, _dec, _class, _crd, ccclass, property, BallPhysics;

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
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      RigidBody = _cc.RigidBody;
      Vec3 = _cc.Vec3;
      Quat = _cc.Quat;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "83636l0Wm1NVb821xzWUnnp", "BallPhysics", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BallPhysics", BallPhysics = (_dec = ccclass('BallPhysics'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(BallPhysics, _Component);

        function BallPhysics() {
          _classCallCheck(this, BallPhysics);

          return _possibleConstructorReturn(this, _getPrototypeOf(BallPhysics).apply(this, arguments));
        }

        _createClass(BallPhysics, [{
          key: "start",
          value: function start() {
            this.rig = this.node.getComponent(RigidBody);
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            this.MyPhysicRotate(deltaTime);
          }
        }, {
          key: "MyPhysicRotate",
          value: function MyPhysicRotate(deltaTime) {
            var outLinearVelocity = new Vec3(0, 0, 0);
            this.rig.getLinearVelocity(outLinearVelocity); // if (Math.abs(outLinearVelocity.x * outLinearVelocity.z) < 0.01) {
            //     outLinearVelocity = new Vec3(0, 0, 0);
            //     this.rig.setLinearVelocity(outLinearVelocity);
            // }

            var rot = new Quat();
            Quat.fromEuler(rot, outLinearVelocity.z / 5.71, 0, -(outLinearVelocity.x / 5.71));
            this.node.children[0].rotate(rot, 1);
          }
        }]);

        return BallPhysics;
      }(Component)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0dhbWUvR2FtZUNvbW1vbi9CYWxsL0JhbGxQaHlzaWNzLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJSaWdpZEJvZHkiLCJWZWMzIiwiUXVhdCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkJhbGxQaHlzaWNzIiwicmlnIiwibm9kZSIsImdldENvbXBvbmVudCIsImRlbHRhVGltZSIsIk15UGh5c2ljUm90YXRlIiwib3V0TGluZWFyVmVsb2NpdHkiLCJnZXRMaW5lYXJWZWxvY2l0eSIsInJvdCIsImZyb21FdWxlciIsInoiLCJ4IiwiY2hpbGRyZW4iLCJyb3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxJLE9BQUFBLEk7Ozs7OztBQUMvQ0MsTUFBQUEsTyxHQUFzQkwsVSxDQUF0QkssTztBQUFTQyxNQUFBQSxRLEdBQWFOLFUsQ0FBYk0sUTs7NkJBR0pDLFcsV0FEWkYsT0FBTyxDQUFDLGFBQUQsQzs7Ozs7Ozs7Ozs7a0NBR0k7QUFDSixpQkFBS0csR0FBTCxHQUFXLEtBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QlIsU0FBdkIsQ0FBWDtBQUNIOzs7aUNBQ01TLFMsRUFBbUI7QUFDdEIsaUJBQUtDLGNBQUwsQ0FBb0JELFNBQXBCO0FBQ0g7Ozt5Q0FDY0EsUyxFQUFtQjtBQUM5QixnQkFBSUUsaUJBQXVCLEdBQUcsSUFBSVYsSUFBSixDQUFTLENBQVQsRUFBWSxDQUFaLEVBQWUsQ0FBZixDQUE5QjtBQUNBLGlCQUFLSyxHQUFMLENBQVNNLGlCQUFULENBQTJCRCxpQkFBM0IsRUFGOEIsQ0FHOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQUlFLEdBQVMsR0FBRyxJQUFJWCxJQUFKLEVBQWhCO0FBQ0FBLFlBQUFBLElBQUksQ0FBQ1ksU0FBTCxDQUFlRCxHQUFmLEVBQXFCRixpQkFBaUIsQ0FBQ0ksQ0FBbEIsR0FBc0IsSUFBM0MsRUFBa0QsQ0FBbEQsRUFBc0QsRUFBRUosaUJBQWlCLENBQUNLLENBQWxCLEdBQXNCLElBQXhCLENBQXREO0FBQ0EsaUJBQUtULElBQUwsQ0FBVVUsUUFBVixDQUFtQixDQUFuQixFQUFzQkMsTUFBdEIsQ0FBNkJMLEdBQTdCLEVBQWtDLENBQWxDO0FBQ0g7Ozs7UUFuQjRCZCxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBSaWdpZEJvZHksIFZlYzMsIFF1YXQsIE1hdGVyaWFsIH0gZnJvbSAnY2MnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0JhbGxQaHlzaWNzJylcbmV4cG9ydCBjbGFzcyBCYWxsUGh5c2ljcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSByaWc6IFJpZ2lkQm9keTtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5yaWcgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFJpZ2lkQm9keSk7XG4gICAgfVxuICAgIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLk15UGh5c2ljUm90YXRlKGRlbHRhVGltZSk7XG4gICAgfVxuICAgIE15UGh5c2ljUm90YXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBvdXRMaW5lYXJWZWxvY2l0eTogVmVjMyA9IG5ldyBWZWMzKDAsIDAsIDApO1xuICAgICAgICB0aGlzLnJpZy5nZXRMaW5lYXJWZWxvY2l0eShvdXRMaW5lYXJWZWxvY2l0eSk7XG4gICAgICAgIC8vIGlmIChNYXRoLmFicyhvdXRMaW5lYXJWZWxvY2l0eS54ICogb3V0TGluZWFyVmVsb2NpdHkueikgPCAwLjAxKSB7XG4gICAgICAgIC8vICAgICBvdXRMaW5lYXJWZWxvY2l0eSA9IG5ldyBWZWMzKDAsIDAsIDApO1xuICAgICAgICAvLyAgICAgdGhpcy5yaWcuc2V0TGluZWFyVmVsb2NpdHkob3V0TGluZWFyVmVsb2NpdHkpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgbGV0IHJvdDogUXVhdCA9IG5ldyBRdWF0KClcbiAgICAgICAgUXVhdC5mcm9tRXVsZXIocm90LCAob3V0TGluZWFyVmVsb2NpdHkueiAvIDUuNzEpLCAwLCAoLShvdXRMaW5lYXJWZWxvY2l0eS54IC8gNS43MSkpKVxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0ucm90YXRlKHJvdCwgMSk7XG4gICAgfVxufVxuIl19