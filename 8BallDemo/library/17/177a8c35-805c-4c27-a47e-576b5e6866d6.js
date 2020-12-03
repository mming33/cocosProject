System.register(["cc", "code-quality:cr", "./Algorithm/MathAlgorithm.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Prefab, instantiate, RigidBody, Vec3, MathAlgorithm, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, Test;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMathAlgorithm(extras) {
    _reporterNs.report("MathAlgorithm", "./Algorithm/MathAlgorithm", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      RigidBody = _cc.RigidBody;
      Vec3 = _cc.Vec3;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_AlgorithmMathAlgorithmJs) {
      MathAlgorithm = _AlgorithmMathAlgorithmJs.MathAlgorithm;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "177a8w1gFxMJ6R+V2teaGbW", "Test", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Test", Test = (_dec = ccclass('Test'), _dec2 = property(Prefab), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(Test, _Component);

        function Test() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Test);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Test)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "ball", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(Test, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            var poss = (_crd && MathAlgorithm === void 0 ? (_reportPossibleCrUseOfMathAlgorithm({
              error: Error()
            }), MathAlgorithm) : MathAlgorithm).Ball_8_Permutation();

            for (var i = 0; i < poss.length; i++) {
              var node = instantiate(this.ball);
              node.position = poss[i];
              this.node.parent.addChild(node);
            }

            this.scheduleOnce(function () {
              _this2.node.parent.getChildByName("RedBall").getComponent(RigidBody).applyImpulse(new Vec3(30, 0, 0));
            }, 1);
          }
        }]);

        return Test;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ball", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0dhbWUvVGVzdC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJSaWdpZEJvZHkiLCJWZWMzIiwiTWF0aEFsZ29yaXRobSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlRlc3QiLCJwb3NzIiwiQmFsbF84X1Blcm11dGF0aW9uIiwiaSIsImxlbmd0aCIsIm5vZGUiLCJiYWxsIiwicG9zaXRpb24iLCJwYXJlbnQiLCJhZGRDaGlsZCIsInNjaGVkdWxlT25jZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiYXBwbHlJbXB1bHNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJOzs7O0FBQzdEQyxNQUFBQSxhLDZCQUFBQSxhOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQlAsVSxDQUF0Qk8sTztBQUFTQyxNQUFBQSxRLEdBQWFSLFUsQ0FBYlEsUTs7c0JBR0pDLEksV0FEWkYsT0FBTyxDQUFDLE1BQUQsQyxVQUdIQyxRQUFRLENBQUNOLE1BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRUQ7QUFBQTs7QUFDSixnQkFBSVEsSUFBSSxHQUFHO0FBQUE7QUFBQSxnREFBY0Msa0JBQWQsRUFBWDs7QUFDQSxpQkFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixJQUFJLENBQUNHLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLGtCQUFJRSxJQUFJLEdBQUlYLFdBQVcsQ0FBQyxLQUFLWSxJQUFOLENBQXZCO0FBQ0FELGNBQUFBLElBQUksQ0FBQ0UsUUFBTCxHQUFnQk4sSUFBSSxDQUFDRSxDQUFELENBQXBCO0FBQ0EsbUJBQUtFLElBQUwsQ0FBVUcsTUFBVixDQUFpQkMsUUFBakIsQ0FBMEJKLElBQTFCO0FBRUg7O0FBQ0QsaUJBQUtLLFlBQUwsQ0FBa0IsWUFBTTtBQUNwQixjQUFBLE1BQUksQ0FBQ0wsSUFBTCxDQUFVRyxNQUFWLENBQWlCRyxjQUFqQixDQUFnQyxTQUFoQyxFQUEyQ0MsWUFBM0MsQ0FBd0RqQixTQUF4RCxFQUFtRWtCLFlBQW5FLENBQWdGLElBQUlqQixJQUFKLENBQVMsRUFBVCxFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBaEY7QUFDSCxhQUZELEVBRUcsQ0FGSDtBQUdIOzs7O1FBZnFCSixTOzs7OztpQkFHQyxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIGluc3RhbnRpYXRlLCBSaWdpZEJvZHksIFZlYzMsIHR3ZWVuIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgTWF0aEFsZ29yaXRobSB9IGZyb20gJy4vQWxnb3JpdGhtL01hdGhBbGdvcml0aG0nO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1Rlc3QnKVxuZXhwb3J0IGNsYXNzIFRlc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KFByZWZhYilcbiAgICBwcml2YXRlIGJhbGw6IFByZWZhYiA9IG51bGw7XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGxldCBwb3NzID0gTWF0aEFsZ29yaXRobS5CYWxsXzhfUGVybXV0YXRpb24oKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IChpbnN0YW50aWF0ZSh0aGlzLmJhbGwpIGFzIE5vZGUpXG4gICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gcG9zc1tpXTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQobm9kZSk7XG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwiUmVkQmFsbFwiKS5nZXRDb21wb25lbnQoUmlnaWRCb2R5KS5hcHBseUltcHVsc2UobmV3IFZlYzMoMzAsIDAsIDApKTtcbiAgICAgICAgfSwgMSk7XG4gICAgfVxuXG59XG4iXX0=