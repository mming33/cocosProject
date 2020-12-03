System.register(["cc", "code-quality:cr", "./Ball.js", "./BallManager.js", "./RackManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Ball, BallManager, RackManager, _dec, _class, _crd, ccclass, property, BlackBall;

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

  function _reportPossibleCrUseOfRackManager(extras) {
    _reporterNs.report("RackManager", "./RackManager", _context.meta, extras);
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
    }, function (_RackManagerJs) {
      RackManager = _RackManagerJs.RackManager;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "78fcb6fR/VNuJ3ilBZy8aex", "BlackBall", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BlackBall", BlackBall = (_dec = ccclass('BlackBall'), _dec(_class = /*#__PURE__*/function (_ref) {
        _inherits(BlackBall, _ref);

        function BlackBall() {
          _classCallCheck(this, BlackBall);

          return _possibleConstructorReturn(this, _getPrototypeOf(BlackBall).apply(this, arguments));
        }

        _createClass(BlackBall, [{
          key: "onTriggerEnter",
          value: function onTriggerEnter(obj) {
            var other = obj.otherCollider;

            if (other.node.name == "dong") {
              this.playSource(other);
              (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.blackBallIsGoal = true;
              this.isGoal = true;
              (_crd && RackManager === void 0 ? (_reportPossibleCrUseOfRackManager({
                error: Error()
              }), RackManager) : RackManager).I.GoalBallAnimation(8);
              this.rig.clearState(); // this.node.active = false;

              this.owner.isStop = true;
              this.inHoleAnimation(other.node.worldPosition);
            }
          }
        }]);

        return BlackBall;
      }(_crd && Ball === void 0 ? (_reportPossibleCrUseOfBall({
        error: Error()
      }), Ball) : Ball)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0dhbWUvR2FtZUNvbW1vbi9CYWxsL0JsYWNrQmFsbC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQmFsbCIsIkJhbGxNYW5hZ2VyIiwiUmFja01hbmFnZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJCbGFja0JhbGwiLCJvYmoiLCJvdGhlciIsIm90aGVyQ29sbGlkZXIiLCJub2RlIiwibmFtZSIsInBsYXlTb3VyY2UiLCJJIiwiYmxhY2tCYWxsSXNHb2FsIiwiaXNHb2FsIiwiR29hbEJhbGxBbmltYXRpb24iLCJyaWciLCJjbGVhclN0YXRlIiwib3duZXIiLCJpc1N0b3AiLCJpbkhvbGVBbmltYXRpb24iLCJ3b3JsZFBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7OztBQUVBQyxNQUFBQSxJLFdBQUFBLEk7O0FBQ0FDLE1BQUFBLFcsa0JBQUFBLFc7O0FBQ0FDLE1BQUFBLFcsa0JBQUFBLFc7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCSixVLENBQXRCSSxPO0FBQVNDLE1BQUFBLFEsR0FBYUwsVSxDQUFiSyxROzsyQkFHSkMsUyxXQURaRixPQUFPLENBQUMsV0FBRCxDOzs7Ozs7Ozs7Ozt5Q0FJcUJHLEcsRUFBSztBQUMxQixnQkFBSUMsS0FBZSxHQUFHRCxHQUFHLENBQUNFLGFBQTFCOztBQUNBLGdCQUFJRCxLQUFLLENBQUNFLElBQU4sQ0FBV0MsSUFBWCxJQUFtQixNQUF2QixFQUErQjtBQUMzQixtQkFBS0MsVUFBTCxDQUFnQkosS0FBaEI7QUFDQTtBQUFBO0FBQUEsOENBQVlLLENBQVosQ0FBY0MsZUFBZCxHQUFnQyxJQUFoQztBQUNBLG1CQUFLQyxNQUFMLEdBQWMsSUFBZDtBQUNBO0FBQUE7QUFBQSw4Q0FBWUYsQ0FBWixDQUFjRyxpQkFBZCxDQUFnQyxDQUFoQztBQUNBLG1CQUFLQyxHQUFMLENBQVNDLFVBQVQsR0FMMkIsQ0FNM0I7O0FBQ0EsbUJBQUtDLEtBQUwsQ0FBV0MsTUFBWCxHQUFvQixJQUFwQjtBQUNBLG1CQUFLQyxlQUFMLENBQXFCYixLQUFLLENBQUNFLElBQU4sQ0FBV1ksYUFBaEM7QUFDSDtBQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBDb2xsaWRlciB9IGZyb20gJ2NjJztcbmltcG9ydCB7IEdhbWVTY2VuZU1hbmFnZXIgfSBmcm9tICcuLi9HYW1lU2NlbmVNYW5hZ2VyJztcbmltcG9ydCB7IEJhbGwgfSBmcm9tICcuL0JhbGwnO1xuaW1wb3J0IHsgQmFsbE1hbmFnZXIgfSBmcm9tICcuL0JhbGxNYW5hZ2VyJztcbmltcG9ydCB7IFJhY2tNYW5hZ2VyIH0gZnJvbSAnLi9SYWNrTWFuYWdlcic7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnQmxhY2tCYWxsJylcbmV4cG9ydCBjbGFzcyBCbGFja0JhbGwgZXh0ZW5kcyBCYWxsIHtcblxuXG4gICAgcHJvdGVjdGVkIG9uVHJpZ2dlckVudGVyKG9iaikge1xuICAgICAgICBsZXQgb3RoZXI6IENvbGxpZGVyID0gb2JqLm90aGVyQ29sbGlkZXI7XG4gICAgICAgIGlmIChvdGhlci5ub2RlLm5hbWUgPT0gXCJkb25nXCIpIHtcbiAgICAgICAgICAgIHRoaXMucGxheVNvdXJjZShvdGhlcik7XG4gICAgICAgICAgICBCYWxsTWFuYWdlci5JLmJsYWNrQmFsbElzR29hbCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlzR29hbCA9IHRydWU7XG4gICAgICAgICAgICBSYWNrTWFuYWdlci5JLkdvYWxCYWxsQW5pbWF0aW9uKDgpO1xuICAgICAgICAgICAgdGhpcy5yaWcuY2xlYXJTdGF0ZSgpO1xuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5vd25lci5pc1N0b3AgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pbkhvbGVBbmltYXRpb24ob3RoZXIubm9kZS53b3JsZFBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuIl19