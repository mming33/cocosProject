System.register(["cc", "code-quality:cr", "../../Algorithm/MathAlgorithm.js", "../GameSceneManager.js", "./Ball.js", "./BallType.js", "./RackManager.js", "./WhiteBall.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Vec3, RigidBody, find, PhysicsSystem, RigidBodyComponent, SphereColliderComponent, MathAlgorithm, GameSceneManager, Ball, BallType, RackManager, WhiteBall, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, BallManager;

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
    _reporterNs.report("MathAlgorithm", "../../Algorithm/MathAlgorithm", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSceneManager(extras) {
    _reporterNs.report("GameSceneManager", "../GameSceneManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBall(extras) {
    _reporterNs.report("Ball", "./Ball", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBallType(extras) {
    _reporterNs.report("BallType", "./BallType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRackManager(extras) {
    _reporterNs.report("RackManager", "./RackManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWhiteBall(extras) {
    _reporterNs.report("WhiteBall", "./WhiteBall", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      RigidBody = _cc.RigidBody;
      find = _cc.find;
      PhysicsSystem = _cc.PhysicsSystem;
      RigidBodyComponent = _cc.RigidBodyComponent;
      SphereColliderComponent = _cc.SphereColliderComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_AlgorithmMathAlgorithmJs) {
      MathAlgorithm = _AlgorithmMathAlgorithmJs.MathAlgorithm;
    }, function (_GameSceneManagerJs) {
      GameSceneManager = _GameSceneManagerJs.GameSceneManager;
    }, function (_BallJs) {
      Ball = _BallJs.Ball;
    }, function (_BallTypeJs) {
      BallType = _BallTypeJs.BallType;
    }, function (_RackManagerJs) {
      RackManager = _RackManagerJs.RackManager;
    }, function (_WhiteBallJs) {
      WhiteBall = _WhiteBallJs.WhiteBall;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "dd40fBTdSxPOop5YJwmPBzq", "BallManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BallManager",
      /**管理球数据 */
      BallManager = (_dec = ccclass('BallManager'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(BallManager, _Component);

        function BallManager() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, BallManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BallManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "WhiteBall", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "whiteBallPos", _descriptor2, _assertThisInitialized(_this));

          _this.AllBallsofNode = new Array();
          _this.RedBalls = new Array();
          _this.YellowBalls = new Array();
          _this.BlackBall = null;
          _this.BlackBallComponent = null;
          _this.wihteBallIsGoal = false;
          _this.blackBallIsGoal = false;
          _this.GoalBalls = new Array();
          _this.UnGoalBalls = new Array();
          _this.AllBalls = new Array();
          _this.whiteBallComponent = null;
          _this.isAllBallStop = false;
          _this.GoalBallNumber = 0;
          return _this;
        }

        _createClass(BallManager, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            PhysicsSystem.instance.maxSubSteps = 8;
            PhysicsSystem.instance.fixedTimeStep = 1 / 150;
            this.Init();
            this.schedule(function () {
              //判断玩家是否击打过球  若没有 则不进行继续的判断
              if (!(_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
                error: Error()
              }), GameSceneManager) : GameSceneManager).I.Players[(_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
                error: Error()
              }), GameSceneManager) : GameSceneManager).I.nowPlayerType].IsHitBall) return;
              if (_this2.isAllBallStop) return;

              if (_this2.IsAllBallIsStop()) {
                _this2.isAllBallStop = true;
                (_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
                  error: Error()
                }), GameSceneManager) : GameSceneManager).I.RoundEndChangePlayer();
              }
            }, 0.2);
          }
          /**初始化 */

        }, {
          key: "Init",
          value: function Init() {
            BallManager.I = this.node.getComponent(BallManager);
            this.whiteBallComponent = this.WhiteBall.getComponent(_crd && WhiteBall === void 0 ? (_reportPossibleCrUseOfWhiteBall({
              error: Error()
            }), WhiteBall) : WhiteBall);
            this.WhiteBall.setWorldPosition(new Vec3(-130 + (Math.random() < 0.5 ? 1 : -1) * (3 * Math.random()), 5.71, (Math.random() < 0.5 ? 1 : -1) * (3 * Math.random())));
            this.UnGoalBalls = this.AllBalls;
          }
          /**重置白球第一个碰到的球的信息 */

        }, {
          key: "ResetWhiteBallFirstTouchBallValue",
          value: function ResetWhiteBallFirstTouchBallValue() {
            this.whiteBallFirstTouchBallType = -1;
          }
          /**重置白球进球状态 */

        }, {
          key: "ResetWhiteBallIsGoal",
          value: function ResetWhiteBallIsGoal() {
            this.wihteBallIsGoal = false;
          }
          /**判断是否所有的球都停止运动了 */

        }, {
          key: "IsAllBallIsStop",
          value: function IsAllBallIsStop() {
            if (!this.whiteBallComponent.isStop) return false;

            for (var i = 0; i < this.AllBalls.length; i++) {
              var element = this.AllBalls[i];

              if (!element.isStop) {
                return false;
              }
            }

            return true;
          }
          /**开启自由球 */

        }, {
          key: "OpenFreeBall",
          value: function OpenFreeBall() {
            for (var i = 0; i < this.AllBalls.length; i++) {
              var element = this.AllBalls[i];
              this.AllBalls[i].rig.isKinematic = true;
            }

            this.WhiteBall.getComponent(_crd && Ball === void 0 ? (_reportPossibleCrUseOfBall({
              error: Error()
            }), Ball) : Ball).rig.linearDamping = 0.999999999;
          }
          /**关闭自由球 */

        }, {
          key: "CloseFreeBall",
          value: function CloseFreeBall() {
            for (var i = 0; i < this.AllBalls.length; i++) {
              var element = this.AllBalls[i];
              this.AllBalls[i].rig.isKinematic = false;
            }

            this.WhiteBall.getComponent(_crd && Ball === void 0 ? (_reportPossibleCrUseOfBall({
              error: Error()
            }), Ball) : Ball).rig.linearDamping = 0.4;
          }
          /**进球的方法 */

        }, {
          key: "GoalBall",
          value: function GoalBall(ball) {
            var ballcomponent = ball.getComponent(_crd && Ball === void 0 ? (_reportPossibleCrUseOfBall({
              error: Error()
            }), Ball) : Ball);
            this.GoalBalls.push(ballcomponent);
            ballcomponent.isStop = true;
            var number = ballcomponent.ballNumber; // if (GameSceneManager.I.thisPlayer == GameSceneManager.I.nowPlayerType) {

            if ((_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.Players[(_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.nowPlayerType].TypeOfBallToBeHit != 0 && (_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.Players[(_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.nowPlayerType].TypeOfBallToBeHit != 1 && (_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.Players[(_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.nowPlayerType].TypeOfBallToBeHit != 2) {
              (_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
                error: Error()
              }), GameSceneManager) : GameSceneManager).I.ShowCombo();
            } else if ((_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.Players[(_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.nowPlayerType].TypeOfBallToBeHit == ballcomponent.ballTpye) {
              (_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
                error: Error()
              }), GameSceneManager) : GameSceneManager).I.ShowCombo();
            } // }


            (_crd && RackManager === void 0 ? (_reportPossibleCrUseOfRackManager({
              error: Error()
            }), RackManager) : RackManager).I.GoalBallAnimation(number);
          }
          /**重置白球的位置 */

        }, {
          key: "ResetWhiteBallPos",
          value: function ResetWhiteBallPos() {
            // this.scheduleOnce(() => {
            find("Canvas/BallDrag").active = true;
            find("Canvas/BallDrag/hand").active = true;
            console.log("重置白球位置");
            BallManager.I.WhiteBall.active = true;
            BallManager.I.WhiteBall.setWorldScale(new Vec3(11.42, 11.42, 11.42));
            BallManager.I.WhiteBall.getComponent(SphereColliderComponent).isTrigger = false;
            BallManager.I.WhiteBall.getComponent(RigidBodyComponent).isKinematic = false;
            BallManager.I.WhiteBall.worldPosition = (_crd && MathAlgorithm === void 0 ? (_reportPossibleCrUseOfMathAlgorithm({
              error: Error()
            }), MathAlgorithm) : MathAlgorithm).ResetBallPos((_crd && BallType === void 0 ? (_reportPossibleCrUseOfBallType({
              error: Error()
            }), BallType) : BallType).WHITEBALL);
            BallManager.I.WhiteBall.getComponent(RigidBody).clearState(); // }, 1)
          }
          /**重置黑球的位置 */

        }, {
          key: "ResetBlackBallPos",
          value: function ResetBlackBallPos() {
            console.log("重置黑球位置");
            BallManager.I.BlackBall.worldPosition = (_crd && MathAlgorithm === void 0 ? (_reportPossibleCrUseOfMathAlgorithm({
              error: Error()
            }), MathAlgorithm) : MathAlgorithm).ResetBallPos((_crd && BallType === void 0 ? (_reportPossibleCrUseOfBallType({
              error: Error()
            }), BallType) : BallType).BLACKBALL);
            BallManager.I.BlackBall.getComponent(RigidBody).clearState();
          }
          /**重置球的状态 */

        }, {
          key: "ResetBall",
          value: function ResetBall() {
            this.whiteBallComponent.isGoal = false;
            this.BlackBallComponent.isGoal = false;
          }
        }]);

        return BallManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "WhiteBall", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "whiteBallPos", [_dec3], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0dhbWUvR2FtZUNvbW1vbi9CYWxsL0JhbGxNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiVmVjMyIsIlJpZ2lkQm9keSIsImZpbmQiLCJQaHlzaWNzU3lzdGVtIiwiUmlnaWRCb2R5Q29tcG9uZW50IiwiU3BoZXJlQ29sbGlkZXJDb21wb25lbnQiLCJNYXRoQWxnb3JpdGhtIiwiR2FtZVNjZW5lTWFuYWdlciIsIkJhbGwiLCJCYWxsVHlwZSIsIlJhY2tNYW5hZ2VyIiwiV2hpdGVCYWxsIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQmFsbE1hbmFnZXIiLCJBbGxCYWxsc29mTm9kZSIsIkFycmF5IiwiUmVkQmFsbHMiLCJZZWxsb3dCYWxscyIsIkJsYWNrQmFsbCIsIkJsYWNrQmFsbENvbXBvbmVudCIsIndpaHRlQmFsbElzR29hbCIsImJsYWNrQmFsbElzR29hbCIsIkdvYWxCYWxscyIsIlVuR29hbEJhbGxzIiwiQWxsQmFsbHMiLCJ3aGl0ZUJhbGxDb21wb25lbnQiLCJpc0FsbEJhbGxTdG9wIiwiR29hbEJhbGxOdW1iZXIiLCJpbnN0YW5jZSIsIm1heFN1YlN0ZXBzIiwiZml4ZWRUaW1lU3RlcCIsIkluaXQiLCJzY2hlZHVsZSIsIkkiLCJQbGF5ZXJzIiwibm93UGxheWVyVHlwZSIsIklzSGl0QmFsbCIsIklzQWxsQmFsbElzU3RvcCIsIlJvdW5kRW5kQ2hhbmdlUGxheWVyIiwibm9kZSIsImdldENvbXBvbmVudCIsInNldFdvcmxkUG9zaXRpb24iLCJNYXRoIiwicmFuZG9tIiwid2hpdGVCYWxsRmlyc3RUb3VjaEJhbGxUeXBlIiwiaXNTdG9wIiwiaSIsImxlbmd0aCIsImVsZW1lbnQiLCJyaWciLCJpc0tpbmVtYXRpYyIsImxpbmVhckRhbXBpbmciLCJiYWxsIiwiYmFsbGNvbXBvbmVudCIsInB1c2giLCJudW1iZXIiLCJiYWxsTnVtYmVyIiwiVHlwZU9mQmFsbFRvQmVIaXQiLCJTaG93Q29tYm8iLCJiYWxsVHB5ZSIsIkdvYWxCYWxsQW5pbWF0aW9uIiwiYWN0aXZlIiwiY29uc29sZSIsImxvZyIsInNldFdvcmxkU2NhbGUiLCJpc1RyaWdnZXIiLCJ3b3JsZFBvc2l0aW9uIiwiUmVzZXRCYWxsUG9zIiwiV0hJVEVCQUxMIiwiY2xlYXJTdGF0ZSIsIkJMQUNLQkFMTCIsImlzR29hbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFhQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxhLE9BQUFBLGE7QUFBK0JDLE1BQUFBLGtCLE9BQUFBLGtCO0FBQW9CQyxNQUFBQSx1QixPQUFBQSx1Qjs7OztBQUM5R0MsTUFBQUEsYSw2QkFBQUEsYTs7QUFDQUMsTUFBQUEsZ0IsdUJBQUFBLGdCOztBQUNBQyxNQUFBQSxJLFdBQUFBLEk7O0FBQ0FDLE1BQUFBLFEsZUFBQUEsUTs7QUFFQUMsTUFBQUEsVyxrQkFBQUEsVzs7QUFDQUMsTUFBQUEsUyxnQkFBQUEsUzs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JmLFUsQ0FBdEJlLE87QUFBU0MsTUFBQUEsUSxHQUFhaEIsVSxDQUFiZ0IsUTs7O0FBR2pCO0FBQ2FDLE1BQUFBLFcsV0FGWkYsT0FBTyxDQUFDLGFBQUQsQyxVQUtIQyxRQUFRLENBQUNkLElBQUQsQyxVQUVSYyxRQUFRLENBQUNkLElBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBR1RnQixjLEdBQThCLElBQUlDLEtBQUosRTtnQkFFOUJDLFEsR0FBd0IsSUFBSUQsS0FB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QUFxQ3BDLHVCQUFyQyxFQUE4RDZELFNBQTlELEdBQTBFLEtBQTFFO0FBQ0FwRCxZQUFBQSxXQUFXLENBQUNvQixDQUFaLENBQWN2QixTQUFkLENBQXdCOEIsWUFBeEIsQ0FBcUNyQyxrQkFBckMsRUFBeUQrQyxXQUF6RCxHQUF1RSxLQUF2RTtBQUNBckMsWUFBQUEsV0FBVyxDQUFDb0IsQ0FBWixDQUFjdkIsU0FBZCxDQUF3QndELGFBQXhCLEdBQXdDO0FBQUE7QUFBQSxnREFBY0MsWUFBZCxDQUEyQjtBQUFBO0FBQUEsc0NBQVNDLFNBQXBDLENBQXhDO0FBQ0F2RCxZQUFBQSxXQUFXLENBQUNvQixDQUFaLENBQWN2QixTQUFkLENBQXdCOEIsWUFBeEIsQ0FBcUN4QyxTQUFyQyxFQUFnRHFFLFVBQWhELEdBVmdCLENBV2hCO0FBQ0g7QUFFRDs7Ozs4Q0FDb0I7QUFDaEJQLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQWxELFlBQUFBLFdBQVcsQ0FBQ29CLENBQVosQ0FBY2YsU0FBZCxDQUF3QmdELGFBQXhCLEdBQXdDO0FBQUE7QUFBQSxnREFBY0MsWUFBZCxDQUEyQjtBQUFBO0FBQUEsc0NBQVNHLFNBQXBDLENBQXhDO0FBQ0F6RCxZQUFBQSxXQUFXLENBQUNvQixDQUFaLENBQWNmLFNBQWQsQ0FBd0JzQixZQUF4QixDQUFxQ3hDLFNBQXJDLEVBQWdEcUUsVUFBaEQ7QUFDSDtBQUNEOzs7O3NDQUNZO0FBQ1IsaUJBQUs1QyxrQkFBTCxDQUF3QjhDLE1BQXhCLEdBQWlDLEtBQWpDO0FBQ0EsaUJBQUtwRCxrQkFBTCxDQUF3Qm9ELE1BQXhCLEdBQWlDLEtBQWpDO0FBRUg7Ozs7UUFoSTRCMUUsUzs7Ozs7aUJBSVgsSTs7Ozs7OztpQkFFRyxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBtYWNybywgVmVjMywgUmlnaWRCb2R5LCBmaW5kLCBQaHlzaWNzU3lzdGVtLCBTcGhlcmVDb2xsaWRlciwgUmlnaWRCb2R5Q29tcG9uZW50LCBTcGhlcmVDb2xsaWRlckNvbXBvbmVudCwgdjMgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBNYXRoQWxnb3JpdGhtIH0gZnJvbSAnLi4vLi4vQWxnb3JpdGhtL01hdGhBbGdvcml0aG0nO1xuaW1wb3J0IHsgR2FtZVNjZW5lTWFuYWdlciB9IGZyb20gJy4uL0dhbWVTY2VuZU1hbmFnZXInO1xuaW1wb3J0IHsgQmFsbCB9IGZyb20gJy4vQmFsbCc7XG5pbXBvcnQgeyBCYWxsVHlwZSB9IGZyb20gJy4vQmFsbFR5cGUnO1xuaW1wb3J0IHsgQmxhY2tCYWxsIH0gZnJvbSAnLi9CbGFja0JhbGwnO1xuaW1wb3J0IHsgUmFja01hbmFnZXIgfSBmcm9tICcuL1JhY2tNYW5hZ2VyJztcbmltcG9ydCB7IFdoaXRlQmFsbCB9IGZyb20gJy4vV2hpdGVCYWxsJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdCYWxsTWFuYWdlcicpXG4vKirnrqHnkIbnkIPmlbDmja4gKi9cbmV4cG9ydCBjbGFzcyBCYWxsTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIEk6IEJhbGxNYW5hZ2VyO1xuICAgIC8qKueZveeQgyAqL1xuICAgIEBwcm9wZXJ0eShOb2RlKVxuICAgIFdoaXRlQmFsbDogTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KE5vZGUpXG4gICAgd2hpdGVCYWxsUG9zOiBOb2RlID0gbnVsbDtcbiAgICAvKirkv53lrZjkuobmiYDmnInnkIPnmoTnu5PngrnnmoTpm4blkIggKi9cbiAgICBBbGxCYWxsc29mTm9kZTogQXJyYXk8Tm9kZT4gPSBuZXcgQXJyYXk8Tm9kZT4oKTtcbiAgICAvKirkv53lrZjkuobmiYDmnInnuqLoibLvvIjlrp7oibLvvInnkIPnmoTnu5PngrnnmoTpm4blkIggKi9cbiAgICBSZWRCYWxsczogQXJyYXk8Tm9kZT4gPSBuZXcgQXJyYXk8Tm9kZT4oKTtcbiAgICAvKirkv53lrZjkuobmiYDmnInpu4ToibLvvIjoirHoibLvvInnkIPnmoTnu5PngrnnmoTpm4blkIggKi9cbiAgICBZZWxsb3dCYWxsczogQXJyYXk8Tm9kZT4gPSBuZXcgQXJyYXk8Tm9kZT4oKTtcbiAgICAvKirpu5HnkIMgKi9cbiAgICBCbGFja0JhbGw6IE5vZGUgPSBudWxsO1xuICAgIEJsYWNrQmFsbENvbXBvbmVudDogQmxhY2tCYWxsID0gbnVsbDtcbiAgICB3aGl0ZUJhbGxGaXJzdFRvdWNoQmFsbFR5cGU6IEJhbGxUeXBlO1xuICAgIHdpaHRlQmFsbElzR29hbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGJsYWNrQmFsbElzR29hbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgR29hbEJhbGxzOiBBcnJheTxCYWxsPiA9IG5ldyBBcnJheTxCYWxsPigpO1xuICAgIFVuR29hbEJhbGxzOiBBcnJheTxCYWxsPiA9IG5ldyBBcnJheTxCYWxsPigpO1xuXG4gICAgLyoq5L+d5a2Y5LqG5omA5pyJ55CD55qE57uT54K555qE6ZuG5ZCIICovXG4gICAgQWxsQmFsbHM6IEFycmF5PEJhbGw+ID0gbmV3IEFycmF5PEJhbGw+KCk7XG4gICAgd2hpdGVCYWxsQ29tcG9uZW50OiBXaGl0ZUJhbGwgPSBudWxsO1xuXG4gICAgaXNBbGxCYWxsU3RvcDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLyoq6L+b55CD5pWwICovXG4gICAgR29hbEJhbGxOdW1iZXI6IG51bWJlciA9IDA7XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UubWF4U3ViU3RlcHMgPSA4O1xuICAgICAgICBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLmZpeGVkVGltZVN0ZXAgPSAxIC8gMTUwO1xuICAgICAgICB0aGlzLkluaXQoKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICAvL+WIpOaWreeOqeWutuaYr+WQpuWHu+aJk+i/h+eQgyAg6Iul5rKh5pyJIOWImeS4jei/m+ihjOe7p+e7reeahOWIpOaWrVxuICAgICAgICAgICAgaWYgKCFHYW1lU2NlbmVNYW5hZ2VyLkkuUGxheWVyc1tHYW1lU2NlbmVNYW5hZ2VyLkkubm93UGxheWVyVHlwZV0uSXNIaXRCYWxsKSByZXR1cm47XG4gICAgICAgICAgICBpZiAodGhpcy5pc0FsbEJhbGxTdG9wKSByZXR1cm47XG4gICAgICAgICAgICBpZiAodGhpcy5Jc0FsbEJhbGxJc1N0b3AoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNBbGxCYWxsU3RvcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgR2FtZVNjZW5lTWFuYWdlci5JLlJvdW5kRW5kQ2hhbmdlUGxheWVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDAuMilcbiAgICB9XG4gICAgLyoq5Yid5aeL5YyWICovXG4gICAgSW5pdCgpIHtcbiAgICAgICAgQmFsbE1hbmFnZXIuSSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoQmFsbE1hbmFnZXIpO1xuICAgICAgICB0aGlzLndoaXRlQmFsbENvbXBvbmVudCA9IHRoaXMuV2hpdGVCYWxsLmdldENvbXBvbmVudChXaGl0ZUJhbGwpO1xuICAgICAgICB0aGlzLldoaXRlQmFsbC5zZXRXb3JsZFBvc2l0aW9uKG5ldyBWZWMzKC0xMzAgKyAoTWF0aC5yYW5kb20oKSA8IDAuNSA/IDEgOiAtMSkgKiAoMyAqIE1hdGgucmFuZG9tKCkpLCA1LjcxLCAoTWF0aC5yYW5kb20oKSA8IDAuNSA/IDEgOiAtMSkgKiAoMyAqIE1hdGgucmFuZG9tKCkpKSlcbiAgICAgICAgdGhpcy5VbkdvYWxCYWxscyA9IHRoaXMuQWxsQmFsbHM7XG4gICAgfVxuICAgIC8qKumHjee9rueZveeQg+esrOS4gOS4queisOWIsOeahOeQg+eahOS/oeaBryAqL1xuICAgIFJlc2V0V2hpdGVCYWxsRmlyc3RUb3VjaEJhbGxWYWx1ZSgpIHtcbiAgICAgICAgdGhpcy53aGl0ZUJhbGxGaXJzdFRvdWNoQmFsbFR5cGUgPSAtMTtcbiAgICB9XG4gICAgLyoq6YeN572u55m955CD6L+b55CD54q25oCBICovXG4gICAgUmVzZXRXaGl0ZUJhbGxJc0dvYWwoKSB7XG4gICAgICAgIHRoaXMud2lodGVCYWxsSXNHb2FsID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKuWIpOaWreaYr+WQpuaJgOacieeahOeQg+mDveWBnOatoui/kOWKqOS6hiAqL1xuICAgIElzQWxsQmFsbElzU3RvcCgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aGlzLndoaXRlQmFsbENvbXBvbmVudC5pc1N0b3ApIHJldHVybiBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkFsbEJhbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5BbGxCYWxsc1tpXTtcbiAgICAgICAgICAgIGlmICghZWxlbWVudC5pc1N0b3ApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKuW8gOWQr+iHqueUseeQgyAqL1xuICAgIE9wZW5GcmVlQmFsbCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkFsbEJhbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5BbGxCYWxsc1tpXTtcbiAgICAgICAgICAgIHRoaXMuQWxsQmFsbHNbaV0ucmlnLmlzS2luZW1hdGljID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLldoaXRlQmFsbC5nZXRDb21wb25lbnQoQmFsbCkucmlnLmxpbmVhckRhbXBpbmcgPSAwLjk5OTk5OTk5OTtcbiAgICB9XG4gICAgLyoq5YWz6Zet6Ieq55Sx55CDICovXG4gICAgQ2xvc2VGcmVlQmFsbCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkFsbEJhbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5BbGxCYWxsc1tpXTtcbiAgICAgICAgICAgIHRoaXMuQWxsQmFsbHNbaV0ucmlnLmlzS2luZW1hdGljID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5XaGl0ZUJhbGwuZ2V0Q29tcG9uZW50KEJhbGwpLnJpZy5saW5lYXJEYW1waW5nID0gMC40O1xuICAgIH1cbiAgICAvKirov5vnkIPnmoTmlrnms5UgKi9cbiAgICBHb2FsQmFsbChiYWxsOiBOb2RlKSB7XG4gICAgICAgIGxldCBiYWxsY29tcG9uZW50ID0gYmFsbC5nZXRDb21wb25lbnQoQmFsbClcbiAgICAgICAgdGhpcy5Hb2FsQmFsbHMucHVzaChiYWxsY29tcG9uZW50KTtcbiAgICAgICAgYmFsbGNvbXBvbmVudC5pc1N0b3AgPSB0cnVlO1xuICAgICAgICBsZXQgbnVtYmVyID0gYmFsbGNvbXBvbmVudC5iYWxsTnVtYmVyO1xuICAgICAgICAvLyBpZiAoR2FtZVNjZW5lTWFuYWdlci5JLnRoaXNQbGF5ZXIgPT0gR2FtZVNjZW5lTWFuYWdlci5JLm5vd1BsYXllclR5cGUpIHtcbiAgICAgICAgaWYgKEdhbWVTY2VuZU1hbmFnZXIuSS5QbGF5ZXJzW0dhbWVTY2VuZU1hbmFnZXIuSS5ub3dQbGF5ZXJUeXBlXS5UeXBlT2ZCYWxsVG9CZUhpdCAhPSAwICYmIEdhbWVTY2VuZU1hbmFnZXIuSS5QbGF5ZXJzW0dhbWVTY2VuZU1hbmFnZXIuSS5ub3dQbGF5ZXJUeXBlXS5UeXBlT2ZCYWxsVG9CZUhpdCAhPSAxICYmIEdhbWVTY2VuZU1hbmFnZXIuSS5QbGF5ZXJzW0dhbWVTY2VuZU1hbmFnZXIuSS5ub3dQbGF5ZXJUeXBlXS5UeXBlT2ZCYWxsVG9CZUhpdCAhPSAyKSB7XG4gICAgICAgICAgICBHYW1lU2NlbmVNYW5hZ2VyLkkuU2hvd0NvbWJvKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoR2FtZVNjZW5lTWFuYWdlci5JLlBsYXllcnNbR2FtZVNjZW5lTWFuYWdlci5JLm5vd1BsYXllclR5cGVdLlR5cGVPZkJhbGxUb0JlSGl0ID09IGJhbGxjb21wb25lbnQuYmFsbFRweWUpIHtcbiAgICAgICAgICAgIEdhbWVTY2VuZU1hbmFnZXIuSS5TaG93Q29tYm8oKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIFJhY2tNYW5hZ2VyLkkuR29hbEJhbGxBbmltYXRpb24obnVtYmVyKTtcbiAgICB9XG4gICAgLyoq6YeN572u55m955CD55qE5L2N572uICovXG4gICAgUmVzZXRXaGl0ZUJhbGxQb3MoKSB7XG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgZmluZChcIkNhbnZhcy9CYWxsRHJhZ1wiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBmaW5kKFwiQ2FudmFzL0JhbGxEcmFnL2hhbmRcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coXCLph43nva7nmb3nkIPkvY3nva5cIik7XG4gICAgICAgIEJhbGxNYW5hZ2VyLkkuV2hpdGVCYWxsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIEJhbGxNYW5hZ2VyLkkuV2hpdGVCYWxsLnNldFdvcmxkU2NhbGUobmV3IFZlYzMoMTEuNDIsIDExLjQyLCAxMS40MikpO1xuICAgICAgICBCYWxsTWFuYWdlci5JLldoaXRlQmFsbC5nZXRDb21wb25lbnQoU3BoZXJlQ29sbGlkZXJDb21wb25lbnQpLmlzVHJpZ2dlciA9IGZhbHNlO1xuICAgICAgICBCYWxsTWFuYWdlci5JLldoaXRlQmFsbC5nZXRDb21wb25lbnQoUmlnaWRCb2R5Q29tcG9uZW50KS5pc0tpbmVtYXRpYyA9IGZhbHNlO1xuICAgICAgICBCYWxsTWFuYWdlci5JLldoaXRlQmFsbC53b3JsZFBvc2l0aW9uID0gTWF0aEFsZ29yaXRobS5SZXNldEJhbGxQb3MoQmFsbFR5cGUuV0hJVEVCQUxMKTtcbiAgICAgICAgQmFsbE1hbmFnZXIuSS5XaGl0ZUJhbGwuZ2V0Q29tcG9uZW50KFJpZ2lkQm9keSkuY2xlYXJTdGF0ZSgpO1xuICAgICAgICAvLyB9LCAxKVxuICAgIH1cblxuICAgIC8qKumHjee9rum7keeQg+eahOS9jee9riAqL1xuICAgIFJlc2V0QmxhY2tCYWxsUG9zKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIumHjee9rum7keeQg+S9jee9rlwiKTtcbiAgICAgICAgQmFsbE1hbmFnZXIuSS5CbGFja0JhbGwud29ybGRQb3NpdGlvbiA9IE1hdGhBbGdvcml0aG0uUmVzZXRCYWxsUG9zKEJhbGxUeXBlLkJMQUNLQkFMTCk7XG4gICAgICAgIEJhbGxNYW5hZ2VyLkkuQmxhY2tCYWxsLmdldENvbXBvbmVudChSaWdpZEJvZHkpLmNsZWFyU3RhdGUoKTtcbiAgICB9XG4gICAgLyoq6YeN572u55CD55qE54q25oCBICovXG4gICAgUmVzZXRCYWxsKCkge1xuICAgICAgICB0aGlzLndoaXRlQmFsbENvbXBvbmVudC5pc0dvYWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5CbGFja0JhbGxDb21wb25lbnQuaXNHb2FsID0gZmFsc2U7XG5cbiAgICB9XG59XG4iXX0=