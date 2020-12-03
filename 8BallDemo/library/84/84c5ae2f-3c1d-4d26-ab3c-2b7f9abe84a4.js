System.register(["cc", "code-quality:cr", "../GameSceneManager.js", "../UI/GameSceneUI.js", "./Ball.js", "./BallManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, GameSceneManager, GameSceneUI, Ball, BallManager, _dec, _class, _crd, ccclass, property, WhiteBall;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfGameSceneManager(extras) {
    _reporterNs.report("GameSceneManager", "../GameSceneManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSceneUI(extras) {
    _reporterNs.report("GameSceneUI", "../UI/GameSceneUI", _context.meta, extras);
  }

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
    }, function (_GameSceneManagerJs) {
      GameSceneManager = _GameSceneManagerJs.GameSceneManager;
    }, function (_UIGameSceneUIJs) {
      GameSceneUI = _UIGameSceneUIJs.GameSceneUI;
    }, function (_BallJs) {
      Ball = _BallJs.Ball;
    }, function (_BallManagerJs) {
      BallManager = _BallManagerJs.BallManager;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "84c5a4vPB1NJqs8K3+avoSk", "WhiteBall", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("WhiteBall", WhiteBall = (_dec = ccclass('WhiteBall'), _dec(_class = /*#__PURE__*/function (_ref) {
        _inherits(WhiteBall, _ref);

        function WhiteBall() {
          _classCallCheck(this, WhiteBall);

          return _possibleConstructorReturn(this, _getPrototypeOf(WhiteBall).apply(this, arguments));
        }

        _createClass(WhiteBall, [{
          key: "onTriggerEnter",
          value: function onTriggerEnter(obj) {
            if (this.JudgingFreeBallTime()) return;
            var other = obj.otherCollider;

            if (other.node.name == "dong") {
              (_crd && GameSceneUI === void 0 ? (_reportPossibleCrUseOfGameSceneUI({
                error: Error()
              }), GameSceneUI) : GameSceneUI).I.ShowTip("Cue Ball into Pocket");
              this.playSource(other);
              (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.wihteBallIsGoal = true;
              this.isGoal = true;
              this.rig.clearState();
              this.node.active = false; // this.inHoleAnimation(other.node.worldPosition);

              this.owner.isStop = true;
            }
          }
        }, {
          key: "onCollisionEnter",
          value: function onCollisionEnter(obj) {
            var other = obj.otherCollider;
            if (this.JudgingFreeBallTime()) return;
            this.playSource(other);
            this.JudgingTheFirstBallTouched(other);
          }
          /**判断碰到的第一个球的方法 */

        }, {
          key: "JudgingTheFirstBallTouched",
          value: function JudgingTheFirstBallTouched(other) {
            var ball = other.node.getComponent(_crd && Ball === void 0 ? (_reportPossibleCrUseOfBall({
              error: Error()
            }), Ball) : Ball);

            if (ball && (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.whiteBallFirstTouchBallType == -1) {
              (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.whiteBallFirstTouchBallType = ball.ballTpye;
              console.log("本回合第一个碰到的球为", ball.ballTpye);
            }
          }
          /**判断是否是自由球状态 */

        }, {
          key: "JudgingFreeBallTime",
          value: function JudgingFreeBallTime() {
            if ((_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.Players[(_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.nowPlayerType].IsFreeBall) {
              console.log("自由球状态 不检测碰撞");
              return true;
            }

            return false;
          }
        }]);

        return WhiteBall;
      }(_crd && Ball === void 0 ? (_reportPossibleCrUseOfBall({
        error: Error()
      }), Ball) : Ball)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0dhbWUvR2FtZUNvbW1vbi9CYWxsL1doaXRlQmFsbC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiR2FtZVNjZW5lTWFuYWdlciIsIkdhbWVTY2VuZVVJIiwiQmFsbCIsIkJhbGxNYW5hZ2VyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiV2hpdGVCYWxsIiwib2JqIiwiSnVkZ2luZ0ZyZWVCYWxsVGltZSIsIm90aGVyIiwib3RoZXJDb2xsaWRlciIsIm5vZGUiLCJuYW1lIiwiSSIsIlNob3dUaXAiLCJwbGF5U291cmNlIiwid2lodGVCYWxsSXNHb2FsIiwiaXNHb2FsIiwicmlnIiwiY2xlYXJTdGF0ZSIsImFjdGl2ZSIsIm93bmVyIiwiaXNTdG9wIiwiSnVkZ2luZ1RoZUZpcnN0QmFsbFRvdWNoZWQiLCJiYWxsIiwiZ2V0Q29tcG9uZW50Iiwid2hpdGVCYWxsRmlyc3RUb3VjaEJhbGxUeXBlIiwiYmFsbFRweWUiLCJjb25zb2xlIiwibG9nIiwiUGxheWVycyIsIm5vd1BsYXllclR5cGUiLCJJc0ZyZWVCYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7Ozs7QUFFQUMsTUFBQUEsZ0IsdUJBQUFBLGdCOztBQUNBQyxNQUFBQSxXLG9CQUFBQSxXOztBQUNBQyxNQUFBQSxJLFdBQUFBLEk7O0FBQ0FDLE1BQUFBLFcsa0JBQUFBLFc7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCTCxVLENBQXRCSyxPO0FBQVNDLE1BQUFBLFEsR0FBYU4sVSxDQUFiTSxROzsyQkFHSkMsUyxXQURaRixPQUFPLENBQUMsV0FBRCxDOzs7Ozs7Ozs7Ozt5Q0FJcUJHLEcsRUFBSztBQUMxQixnQkFBSSxLQUFLQyxtQkFBTCxFQUFKLEVBQWdDO0FBQ2hDLGdCQUFJQyxLQUFlLEdBQUdGLEdBQUcsQ0FBQ0csYUFBMUI7O0FBQ0EsZ0JBQUlELEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxJQUFYLElBQW1CLE1BQXZCLEVBQStCO0FBQzNCO0FBQUE7QUFBQSw4Q0FBWUMsQ0FBWixDQUFjQyxPQUFkLENBQXNCLHNCQUF0QjtBQUNBLG1CQUFLQyxVQUFMLENBQWdCTixLQUFoQjtBQUNBO0FBQUE7QUFBQSw4Q0FBWUksQ0FBWixDQUFjRyxlQUFkLEdBQWdDLElBQWhDO0FBQ0EsbUJBQUtDLE1BQUwsR0FBYyxJQUFkO0FBQ0EsbUJBQUtDLEdBQUwsQ0FBU0MsVUFBVDtBQUNBLG1CQUFLUixJQUFMLENBQVVTLE1BQVYsR0FBbUIsS0FBbkIsQ0FOMkIsQ0FPM0I7O0FBQ0EsbUJBQUtDLEtBQUwsQ0FBV0MsTUFBWCxHQUFvQixJQUFwQjtBQUNIO0FBQ0o7OzsyQ0FDMEJmLEcsRUFBSztBQUM1QixnQkFBSUUsS0FBZSxHQUFHRixHQUFHLENBQUNHLGFBQTFCO0FBQ0EsZ0JBQUksS0FBS0YsbUJBQUwsRUFBSixFQUFnQztBQUNoQyxpQkFBS08sVUFBTCxDQUFnQk4sS0FBaEI7QUFDQSxpQkFBS2MsMEJBQUwsQ0FBZ0NkLEtBQWhDO0FBQ0g7QUFFRDs7OztxREFDbUNBLEssRUFBaUI7QUFDaEQsZ0JBQUllLElBQVUsR0FBR2YsS0FBSyxDQUFDRSxJQUFOLENBQVdjLFlBQVg7QUFBQTtBQUFBLDZCQUFqQjs7QUFDQSxnQkFBSUQsSUFBSSxJQUFJO0FBQUE7QUFBQSw0Q0FBWVgsQ0FBWixDQUFjYSwyQkFBZCxJQUE2QyxDQUFDLENBQTFELEVBQTZEO0FBQ3pEO0FBQUE7QUFBQSw4Q0FBWWIsQ0FBWixDQUFjYSwyQkFBZCxHQUE0Q0YsSUFBSSxDQUFDRyxRQUFqRDtBQUNBQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCTCxJQUFJLENBQUNHLFFBQWhDO0FBRUg7QUFDSjtBQUNEOzs7O2dEQUM4QjtBQUMxQixnQkFBSTtBQUFBO0FBQUEsc0RBQWlCZCxDQUFqQixDQUFtQmlCLE9BQW5CLENBQTJCO0FBQUE7QUFBQSxzREFBaUJqQixDQUFqQixDQUFtQmtCLGFBQTlDLEVBQTZEQyxVQUFqRSxFQUE2RTtBQUN6RUosY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBLHFCQUFPLElBQVA7QUFDSDs7QUFDRCxtQkFBTyxLQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIENvbGxpZGVyLCBHRlhfTUFYX0FUVEFDSE1FTlRTIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgU291cmNlTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uL0NvbW1vbi9Tb3VyY2VNYW5hZ2VyJztcbmltcG9ydCB7IEdhbWVTY2VuZU1hbmFnZXIgfSBmcm9tICcuLi9HYW1lU2NlbmVNYW5hZ2VyJztcbmltcG9ydCB7IEdhbWVTY2VuZVVJIH0gZnJvbSAnLi4vVUkvR2FtZVNjZW5lVUknO1xuaW1wb3J0IHsgQmFsbCB9IGZyb20gJy4vQmFsbCc7XG5pbXBvcnQgeyBCYWxsTWFuYWdlciB9IGZyb20gJy4vQmFsbE1hbmFnZXInO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1doaXRlQmFsbCcpXG5leHBvcnQgY2xhc3MgV2hpdGVCYWxsIGV4dGVuZHMgQmFsbCB7XG5cbiAgICBcbiAgICBwcm90ZWN0ZWQgb25UcmlnZ2VyRW50ZXIob2JqKSB7XG4gICAgICAgIGlmICh0aGlzLkp1ZGdpbmdGcmVlQmFsbFRpbWUoKSkgcmV0dXJuO1xuICAgICAgICBsZXQgb3RoZXI6IENvbGxpZGVyID0gb2JqLm90aGVyQ29sbGlkZXI7XG4gICAgICAgIGlmIChvdGhlci5ub2RlLm5hbWUgPT0gXCJkb25nXCIpIHtcbiAgICAgICAgICAgIEdhbWVTY2VuZVVJLkkuU2hvd1RpcChcIkN1ZSBCYWxsIGludG8gUG9ja2V0XCIpO1xuICAgICAgICAgICAgdGhpcy5wbGF5U291cmNlKG90aGVyKTtcbiAgICAgICAgICAgIEJhbGxNYW5hZ2VyLkkud2lodGVCYWxsSXNHb2FsID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaXNHb2FsID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucmlnLmNsZWFyU3RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHRoaXMuaW5Ib2xlQW5pbWF0aW9uKG90aGVyLm5vZGUud29ybGRQb3NpdGlvbik7XG4gICAgICAgICAgICB0aGlzLm93bmVyLmlzU3RvcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uQ29sbGlzaW9uRW50ZXIob2JqKSB7XG4gICAgICAgIGxldCBvdGhlcjogQ29sbGlkZXIgPSBvYmoub3RoZXJDb2xsaWRlcjtcbiAgICAgICAgaWYgKHRoaXMuSnVkZ2luZ0ZyZWVCYWxsVGltZSgpKSByZXR1cm47XG4gICAgICAgIHRoaXMucGxheVNvdXJjZShvdGhlcik7XG4gICAgICAgIHRoaXMuSnVkZ2luZ1RoZUZpcnN0QmFsbFRvdWNoZWQob3RoZXIpO1xuICAgIH1cblxuICAgIC8qKuWIpOaWreeisOWIsOeahOesrOS4gOS4queQg+eahOaWueazlSAqL1xuICAgIHByaXZhdGUgSnVkZ2luZ1RoZUZpcnN0QmFsbFRvdWNoZWQob3RoZXI6IENvbGxpZGVyKSB7XG4gICAgICAgIGxldCBiYWxsOiBCYWxsID0gb3RoZXIubm9kZS5nZXRDb21wb25lbnQoQmFsbCk7XG4gICAgICAgIGlmIChiYWxsICYmIEJhbGxNYW5hZ2VyLkkud2hpdGVCYWxsRmlyc3RUb3VjaEJhbGxUeXBlID09IC0xKSB7XG4gICAgICAgICAgICBCYWxsTWFuYWdlci5JLndoaXRlQmFsbEZpcnN0VG91Y2hCYWxsVHlwZSA9IGJhbGwuYmFsbFRweWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuacrOWbnuWQiOesrOS4gOS4queisOWIsOeahOeQg+S4ulwiLCBiYWxsLmJhbGxUcHllKTtcblxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKuWIpOaWreaYr+WQpuaYr+iHqueUseeQg+eKtuaAgSAqL1xuICAgIHByaXZhdGUgSnVkZ2luZ0ZyZWVCYWxsVGltZSgpIHtcbiAgICAgICAgaWYgKEdhbWVTY2VuZU1hbmFnZXIuSS5QbGF5ZXJzW0dhbWVTY2VuZU1hbmFnZXIuSS5ub3dQbGF5ZXJUeXBlXS5Jc0ZyZWVCYWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuiHqueUseeQg+eKtuaAgSDkuI3mo4DmtYvnorDmkp5cIik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIl19