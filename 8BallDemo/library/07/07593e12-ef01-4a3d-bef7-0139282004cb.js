System.register(["cc", "code-quality:cr", "./Ball.js", "./BallManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Ball, BallManager, _dec, _class, _crd, ccclass, property, OrdinaryBall;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfBall(extras) {
    _reporterNs.report("Ball", "./Ball", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBallManager(extras) {
    _reporterNs.report("BallManager", "./BallManager", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_BallJs) {
      Ball = _BallJs.Ball;
    }, function (_BallManagerJs) {
      BallManager = _BallManagerJs.BallManager;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "075934S7wFKPb73ATkoIATL", "OrdinaryBall", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("OrdinaryBall", OrdinaryBall = (_dec = ccclass('OrdinaryBall'), _dec(_class = /*#__PURE__*/function (_ref) {
        _inherits(OrdinaryBall, _ref);

        function OrdinaryBall() {
          _classCallCheck(this, OrdinaryBall);

          return _possibleConstructorReturn(this, _getPrototypeOf(OrdinaryBall).apply(this, arguments));
        }

        _createClass(OrdinaryBall, [{
          key: "onTriggerEnter",
          value: function onTriggerEnter(obj) {
            var other = obj.otherCollider;

            if (other.node.name == "dong") {
              this.playSource(other);
              this.isGoal = true;
              this.rig.isKinematic = true;
              this.rig.clearState();
              console.log(this.ballNumber, "号球进了");
              this.inHoleAnimation(other.node.worldPosition);
              (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.GoalBall(this.node); // this.node.active = false;
            }
          }
        }]);

        return OrdinaryBall;
      }(_crd && Ball === void 0 ? (_reportPossibleCrUseOfBall({
        error: Error()
      }), Ball) : Ball)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0dhbWUvR2FtZUNvbW1vbi9CYWxsL09yZGluYXJ5QmFsbC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQmFsbCIsIkJhbGxNYW5hZ2VyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiT3JkaW5hcnlCYWxsIiwib2JqIiwib3RoZXIiLCJvdGhlckNvbGxpZGVyIiwibm9kZSIsIm5hbWUiLCJwbGF5U291cmNlIiwiaXNHb2FsIiwicmlnIiwiaXNLaW5lbWF0aWMiLCJjbGVhclN0YXRlIiwiY29uc29sZSIsImxvZyIsImJhbGxOdW1iZXIiLCJpbkhvbGVBbmltYXRpb24iLCJ3b3JsZFBvc2l0aW9uIiwiSSIsIkdvYWxCYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOzs7O0FBRUFDLE1BQUFBLEksV0FBQUEsSTs7QUFDQUMsTUFBQUEsVyxrQkFBQUEsVzs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JILFUsQ0FBdEJHLE87QUFBU0MsTUFBQUEsUSxHQUFhSixVLENBQWJJLFE7OzhCQUdKQyxZLFdBRFpGLE9BQU8sQ0FBQyxjQUFELEM7Ozs7Ozs7Ozs7O3lDQUdxQkcsRyxFQUFLO0FBQzFCLGdCQUFJQyxLQUFlLEdBQUdELEdBQUcsQ0FBQ0UsYUFBMUI7O0FBQ0EsZ0JBQUlELEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxJQUFYLElBQW1CLE1BQXZCLEVBQStCO0FBQzNCLG1CQUFLQyxVQUFMLENBQWdCSixLQUFoQjtBQUNBLG1CQUFLSyxNQUFMLEdBQWMsSUFBZDtBQUNBLG1CQUFLQyxHQUFMLENBQVNDLFdBQVQsR0FBdUIsSUFBdkI7QUFDQSxtQkFBS0QsR0FBTCxDQUFTRSxVQUFUO0FBQ0FDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtDLFVBQWpCLEVBQTZCLE1BQTdCO0FBQ0EsbUJBQUtDLGVBQUwsQ0FBcUJaLEtBQUssQ0FBQ0UsSUFBTixDQUFXVyxhQUFoQztBQUNBO0FBQUE7QUFBQSw4Q0FBWUMsQ0FBWixDQUFjQyxRQUFkLENBQXVCLEtBQUtiLElBQTVCLEVBUDJCLENBUTNCO0FBQ0g7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgQ29sbGlkZXIgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBHYW1lU2NlbmVVSSB9IGZyb20gJy4uL1VJL0dhbWVTY2VuZVVJJztcbmltcG9ydCB7IEJhbGwgfSBmcm9tICcuL0JhbGwnO1xuaW1wb3J0IHsgQmFsbE1hbmFnZXIgfSBmcm9tICcuL0JhbGxNYW5hZ2VyJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdPcmRpbmFyeUJhbGwnKVxuZXhwb3J0IGNsYXNzIE9yZGluYXJ5QmFsbCBleHRlbmRzIEJhbGwge1xuXG4gICAgcHJvdGVjdGVkIG9uVHJpZ2dlckVudGVyKG9iaikge1xuICAgICAgICBsZXQgb3RoZXI6IENvbGxpZGVyID0gb2JqLm90aGVyQ29sbGlkZXI7XG4gICAgICAgIGlmIChvdGhlci5ub2RlLm5hbWUgPT0gXCJkb25nXCIpIHtcbiAgICAgICAgICAgIHRoaXMucGxheVNvdXJjZShvdGhlcik7XG4gICAgICAgICAgICB0aGlzLmlzR29hbCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJpZy5pc0tpbmVtYXRpYyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJpZy5jbGVhclN0YXRlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJhbGxOdW1iZXIsIFwi5Y+355CD6L+b5LqGXCIpO1xuICAgICAgICAgICAgdGhpcy5pbkhvbGVBbmltYXRpb24ob3RoZXIubm9kZS53b3JsZFBvc2l0aW9uKTtcbiAgICAgICAgICAgIEJhbGxNYW5hZ2VyLkkuR29hbEJhbGwodGhpcy5ub2RlKTtcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==