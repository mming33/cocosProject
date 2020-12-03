System.register(["cc", "code-quality:cr", "../../Common/SourceManager.js", "../Algorithm/MathAlgorithm.js", "../GameData.js", "./Ball/BallManager.js", "./Ball/BallType.js", "./GameSceneManager.js", "./UI/GameSceneUI.js", "./UI/PlayerController.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, find, RigidBody, Vec3, geometry, PhysicsSystem, macro, SourceManager, MathAlgorithm, GameData, BallManager, BallType, GameSceneManager, GameSceneUI, PlayerController, _dec, _class, _temp, _crd, ccclass, property, Ray, RobotController;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfSourceManager(extras) {
    _reporterNs.report("SourceManager", "../../Common/SourceManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMathAlgorithm(extras) {
    _reporterNs.report("MathAlgorithm", "../Algorithm/MathAlgorithm", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBallManager(extras) {
    _reporterNs.report("BallManager", "./Ball/BallManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBallType(extras) {
    _reporterNs.report("BallType", "./Ball/BallType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSceneManager(extras) {
    _reporterNs.report("GameSceneManager", "./GameSceneManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSceneUI(extras) {
    _reporterNs.report("GameSceneUI", "./UI/GameSceneUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerController(extras) {
    _reporterNs.report("PlayerController", "./UI/PlayerController", _context.meta, extras);
  }

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
      find = _cc.find;
      RigidBody = _cc.RigidBody;
      Vec3 = _cc.Vec3;
      geometry = _cc.geometry;
      PhysicsSystem = _cc.PhysicsSystem;
      macro = _cc.macro;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_CommonSourceManagerJs) {
      SourceManager = _CommonSourceManagerJs.SourceManager;
    }, function (_AlgorithmMathAlgorithmJs) {
      MathAlgorithm = _AlgorithmMathAlgorithmJs.MathAlgorithm;
    }, function (_GameDataJs) {
      GameData = _GameDataJs.GameData;
    }, function (_BallBallManagerJs) {
      BallManager = _BallBallManagerJs.BallManager;
    }, function (_BallBallTypeJs) {
      BallType = _BallBallTypeJs.BallType;
    }, function (_GameSceneManagerJs) {
      GameSceneManager = _GameSceneManagerJs.GameSceneManager;
    }, function (_UIGameSceneUIJs) {
      GameSceneUI = _UIGameSceneUIJs.GameSceneUI;
    }, function (_UIPlayerControllerJs) {
      PlayerController = _UIPlayerControllerJs.PlayerController;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "368ceKgnqhCE4IyHlYMankL", "RobotController", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;
      Ray = geometry.ray;

      _export("RobotController", RobotController = (_dec = ccclass('RobotController'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(RobotController, _Component);

        function RobotController() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, RobotController);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RobotController)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.holes = new Array(6);
          _this.whiteBallPos2 = null;
          _this.ganPos = null;
          _this.center = null;
          _this.left = null;
          _this.right = null;
          _this.Sphere = null;
          _this.Sphere2 = null;
          _this.IsUseFreeBall = false;
          return _this;
        }

        _createClass(RobotController, [{
          key: "onLoad",
          value: function onLoad() {
            RobotController.I = this.node.getComponent(RobotController);
          }
        }, {
          key: "start",
          value: function start() {
            var _this2 = this;

            this.scheduleOnce(function () {
              _this2.Init();

              _this2.ChooseBallLogic();
            }, 5);
          } // Robot() {
          //     this.schedule(() => {
          //         if (GameData.I.gameStop) return;
          //         if (GameSceneManager.I.nowPlayerType != GameSceneManager.I.thisPlayer) {
          //             if (GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsHitBall) {
          //                 console.log("本回合玩家", GameSceneManager.I.nowPlayerType, "已经击打过球了，请等待下一回合");
          //                 console.log("我是机器人2 我要这回合打过球了，我在等待球停止运动");
          //                 return;
          //             } else {
          //                 this.slider.progress = 0.5 + 0.5 * Math.random();
          //             }
          //             if (this.slider.progress > 0.06) {
          //                 //停止计时
          //                 GameSceneUI.I.EndReckonTime();
          //                 if (GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsFreeBall) {
          //                     console.log("本回合玩家", GameSceneManager.I.nowPlayerType, "有自由球权，现已经打过球了，重置自由球权，并关闭自由球移动规定");
          //                     find("Canvas/BallDrag").active = false;
          //                     BallManager.I.CloseFreeBall();
          //                     GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsFreeBall = false;
          //                 }
          //                 find("Gun/Cylinder").active = false;
          //                 find("Line").active = false;
          //                 find("Canvas/GunDrag2").active = false;
          //                 let force = this.slider.progress * 300;
          //                 console.log("我是机器人2 我要开始打球了");
          //                 BallManager.I.WhiteBall.getComponent(RigidBody).applyImpulse(new Vec3(GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].ForceDirection.x * force, 0, GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].ForceDirection.z * force));
          //                 GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsStartFollow = false;
          //                 BallManager.I.isAllBallStop = false;
          //                 GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsHitBall = true;
          //                 //重置白球第一个碰到的球的信息
          //                 BallManager.I.ResetWhiteBallFirstTouchBallValue()
          //             }
          //             this.slider.progress = 0;
          //         }
          //         // if (GameSceneManager.I.nowPlayerType == RoundType.Play2) {
          //         //     if (GameSceneManager.I.Players[RoundType.Play2].IsHitBall == true) {
          //         //         console.log("我是机器人2 我要这回合打过球了，我在等待球停止运动");
          //         //         return;
          //         //     }
          //         //     console.log("我是机器人2 我要开始打球了");
          //         //     this.slider.progress = 1 * Math.random()
          //         //     let force = this.slider.progress * 400;
          //         //     BallManager.I.WhiteBall.getComponent(RigidBody).applyImpulse(new Vec3((Math.random() < 0.5 ? 1 : -1) * force * Math.random(), 0, (Math.random() < 0.5 ? 1 : -1) * force * Math.random()));
          //         //     GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsStartFollow = false;
          //         //     BallManager.I.isAllBallStop = false;
          //         //     GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsHitBall = true;
          //         //     //重置白球第一个碰到的球的信息
          //         //     BallManager.I.ResetWhiteBallFirstTouchBallValue()
          //         // }
          //         // if (GameSceneManager.I.nowPlayerType == RoundType.Play1) {
          //         // if (GameSceneManager.I.Players[RoundType.Play1].IsHitBall == true) {
          //         //     console.log("我是机器人1 我要这回合打过球了，我在等待球停止运动");
          //         //     return;
          //         // }
          //         // console.log("我是机器人1 我要开始打球了");
          //         // this.slider.progress = 1 * Math.random();
          //         // let force = this.slider.progress * 400;
          //         // BallManager.I.WhiteBall.getComponent(RigidBody).applyImpulse(new Vec3((Math.random() < 0.5 ? 1 : -1) * force * Math.random(), 0, (Math.random() < 0.5 ? 1 : -1) * force * Math.random()));
          //         // GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsStartFollow = false;
          //         // BallManager.I.isAllBallStop = false;
          //         // GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsHitBall = true;
          //         // // 重置白球第一个碰到的球的信息
          //         // BallManager.I.ResetWhiteBallFirstTouchBallValue()
          //         //     }
          //     }, 5, macro.REPEAT_FOREVER, 1);
          // }

        }, {
          key: "Init",
          value: function Init() {
            var _this3 = this;

            //查找所有的球洞结点
            for (var i = 0; i < this.holes.length; i++) {
              this.holes[i] = find("Table/hole" + i);
            } //模拟瞄准


            this.whiteBallPos2 = find("whiteBallPos2");
            this.ganPos = this.whiteBallPos2.getChildByName("ganPos");
            this.center = this.whiteBallPos2.getChildByName("Center");
            this.left = this.whiteBallPos2.getChildByName("Left");
            this.right = this.whiteBallPos2.getChildByName("Right");
            this.Sphere = find("Sphere");
            this.Sphere2 = find("Sphere2");
            this.schedule(function () {
              _this3.TurnLogicPart();
            }, 5, macro.REPEAT_FOREVER, 10);
          }
        }, {
          key: "TurnLogicPart",

          /**判断回合逻辑部分 */
          value: function TurnLogicPart() {
            //游戏暂停时
            if ((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.gameStop) return; //不是机器人回合时

            if ((_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.nowPlayerType != this.playerType) return; //机器人已经打过球时

            if ((_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.Players[this.playerType].IsHitBall) return;

            if ((_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.Players[this.playerType].IsFreeBall && !this.IsUseFreeBall) {
              (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.OpenFreeBall();

              if ((_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
                error: Error()
              }), GameSceneManager) : GameSceneManager).I.IsFirstRound) {
                if (Math.random() > 0.8) {// console.log("开局懒得摆球");
                } else {
                  (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                    error: Error()
                  }), BallManager) : BallManager).I.WhiteBall.worldPosition = (_crd && MathAlgorithm === void 0 ? (_reportPossibleCrUseOfMathAlgorithm({
                    error: Error()
                  }), MathAlgorithm) : MathAlgorithm).ResetBallPos((_crd && BallType === void 0 ? (_reportPossibleCrUseOfBallType({
                    error: Error()
                  }), BallType) : BallType).SOLIDBALL, new Vec3(-130 + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 30, 5.71, (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 70)));
                }
              } else {
                find("Canvas/BallDrag/hand").active = false;
                (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.WhiteBall.worldPosition = (_crd && MathAlgorithm === void 0 ? (_reportPossibleCrUseOfMathAlgorithm({
                  error: Error()
                }), MathAlgorithm) : MathAlgorithm).ResetBallPos((_crd && BallType === void 0 ? (_reportPossibleCrUseOfBallType({
                  error: Error()
                }), BallType) : BallType).SOLIDBALL, new Vec3((Math.random() > 0.5 ? 1 : -1) * (Math.random() * 130), 5.71, (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 70)));
              }

              this.IsUseFreeBall = true; // this.scheduleOnce(this.ChooseBallLogic, 2);

              return;
            }

            (_crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
              error: Error()
            }), PlayerController) : PlayerController).I.slider.enabled = false;
            this.ChooseBallLogic();
          }
          /**选球逻辑 */

        }, {
          key: "ChooseBallLogic",
          value: function ChooseBallLogic() {
            if ((_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.IsFirstRound) {
              this.scheduleOnce(this.Hit, 2);
              return;
            } //普通球指向白球的向量集合


            var whiteballToOrdinaryBall = new Array(); //普通球指向每个球洞的向量集合

            var OrdinaryBallToHoles = new Array(); //遍历所有的球 计算每个球指向白球的向量 和每个球指向球洞的向量

            for (var i = 0; i < (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.AllBalls.length; i++) {
              OrdinaryBallToHoles.push(new Array(6));

              for (var j = 0; j < this.holes.length; j++) {
                var out = new Vec3(this.holes[j].worldPosition.x - (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.AllBalls[i].node.worldPosition.x, 0, this.holes[j].worldPosition.z - (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.AllBalls[i].node.worldPosition.z);
                OrdinaryBallToHoles[i][j] = out;
              }

              var out2 = new Vec3((_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.WhiteBall.worldPosition.x - (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.AllBalls[i].node.worldPosition.x, 0, (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.WhiteBall.worldPosition.z - (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.AllBalls[i].node.worldPosition.z);
              whiteballToOrdinaryBall.push(out2); // console.log(i, BallManager.I.AllBalls[i].ballNumber);
            } //求出两向量的夹角弧度值


            var datas = new Array();

            for (var _i = 0; _i < OrdinaryBallToHoles.length; _i++) {
              var o2h = OrdinaryBallToHoles[_i];

              for (var _j = 0; _j < o2h.length; _j++) {
                var angle = Vec3.angle(whiteballToOrdinaryBall[_i], o2h[_j]);
                var _data = {};
                _data.angle = angle;
                _data.ballNumber = _i + 1;
                _data.holeNumber = _j;
                _data.ballName = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.AllBalls[_i].ballNumber;
                datas.push(_data);
              }
            }

            if ((_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.Players[this.playerType].TypeOfBallToBeHit != 0 && (_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.Players[this.playerType].TypeOfBallToBeHit != 1 && (_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.Players[this.playerType].TypeOfBallToBeHit != 3) {
              //如果击打球的类型还未指定 则删除所有的黑八
              for (var _i2 = datas.length - 1; _i2 >= 0; _i2--) {
                if (datas[_i2].ballName == 8) {
                  console.log(datas[_i2]);
                  datas.splice(_i2, 1);
                }
              }
            } else if ((_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.Players[this.playerType].TypeOfBallToBeHit == 0) {
              //如果击打球的类型为实色球 则删除所有的花色球和黑八
              for (var _i3 = datas.length - 1; _i3 >= 0; _i3--) {
                if (datas[_i3].ballName >= 8) {
                  datas.splice(_i3, 1);
                }
              }
            } else if ((_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.Players[this.playerType].TypeOfBallToBeHit == 1) {
              //如果击打球的类型为花色球 则删除所有的实色球和黑八
              for (var _i4 = datas.length - 1; _i4 >= 0; _i4--) {
                if (datas[_i4].ballName <= 8) {
                  datas.splice(_i4, 1);
                }
              }
            } else if ((_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.Players[this.playerType].TypeOfBallToBeHit == 3) {
              //如果击打球的类型为黑八 则删除所有的实色球和花色球
              for (var _i5 = datas.length - 1; _i5 >= 0; _i5--) {
                if (datas[_i5].ballName != 8) {
                  datas.splice(_i5, 1);
                }
              }
            } //根据弧值制进行排序 弧度值越大说明角度越大 越容易打进


            for (var _i6 = 0; _i6 < datas.length - 1; _i6++) {
              for (var _j2 = _i6 + 1; _j2 < datas.length; _j2++) {
                if (datas[_j2].angle > datas[_i6].angle) {
                  var _data2 = datas[_i6];
                  datas[_i6] = datas[_j2];
                  datas[_j2] = _data2;
                }
              }
            } // console.log(datas);
            // console.log(BallManager.I.AllBalls);
            //优先选择白球到球，球到洞口都没有遮挡的
            // console.log("优先选择!!!!");


            for (var _i7 = 0; _i7 < datas.length; _i7++) {
              var _data3 = datas[_i7];
              var _ball = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.AllBalls[_data3.ballNumber - 1].node;
              var _hole = this.holes[_data3.holeNumber];

              var _targetpos = this.CreateTargetPos(_ball.worldPosition, _ball.worldPosition, _hole.worldPosition);

              this.whiteBallPos2.setWorldPosition((_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.WhiteBall.worldPosition);
              this.whiteBallPos2.lookAt(_targetpos == 1 ? this.Sphere.position : this.Sphere2.position); //console.log(data.ballName, ball.name);

              var firstball = this.CreateRayJudgeNearestBall();

              if (firstball.name != _ball.name) {
                continue;
              } else {
                if (this.CreateRay(_ball.worldPosition, _hole.worldPosition)) {
                  // console.log("白球到球，球到洞口都没有遮挡的");
                  (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                    error: Error()
                  }), BallManager) : BallManager).I.whiteBallPos.lookAt(_targetpos == 1 ? this.Sphere.position : this.Sphere2.position);
                  this.scheduleOnce(this.Hit, 2);
                  return;
                }
              }
            } //选择白球到球没有遮挡的


            for (var _i8 = 0; _i8 < datas.length; _i8++) {
              var _data4 = datas[_i8];
              var _ball2 = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.AllBalls[_data4.ballNumber - 1].node;
              var _hole2 = this.holes[_data4.holeNumber];

              var _targetpos2 = this.CreateTargetPos(_ball2.worldPosition, _ball2.worldPosition, _hole2.worldPosition);

              this.whiteBallPos2.setWorldPosition((_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.WhiteBall.worldPosition);
              this.whiteBallPos2.lookAt(_targetpos2 == 1 ? this.Sphere.position : this.Sphere2.position); // console.log(data.ballName, ball.name);

              var _firstball = this.CreateRayJudgeNearestBall();

              if (_firstball.name != _ball2.name) {
                // console.log("---------");
                continue;
              } else {
                // console.log("++++++++++++++");
                // console.log("选择白球到球没有遮挡的");
                (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.whiteBallPos.lookAt(_targetpos2 == 1 ? this.Sphere.position : this.Sphere2.position);
                this.scheduleOnce(this.Hit, 2);
                return;
              }
            }

            console.log("没有可以打的球", datas[0]);
            var data = datas[0];
            var ball = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.AllBalls[data.ballNumber - 1].node;
            var hole = this.holes[data.holeNumber];
            var targetpos = this.CreateTargetPos(ball.worldPosition, ball.worldPosition, hole.worldPosition);
            this.whiteBallPos2.setWorldPosition((_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.WhiteBall.worldPosition);
            this.whiteBallPos2.lookAt(targetpos == 1 ? this.Sphere.position : this.Sphere2.position);
            (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.whiteBallPos.lookAt(targetpos == 1 ? this.Sphere.position : this.Sphere2.position);
            this.scheduleOnce(this.Hit, 2);
          }
        }, {
          key: "CreateRayJudgeNearestBall",
          value: function CreateRayJudgeNearestBall() {
            var dir = new Vec3(this.center.worldPosition.x - this.ganPos.worldPosition.x, 0, this.center.worldPosition.z - this.ganPos.worldPosition.z);
            var rayCenter = new Ray(this.center.worldPosition.x, this.center.worldPosition.y, this.center.worldPosition.z, dir.x, 0, dir.z);
            var rayLeft = new Ray(this.left.worldPosition.x, this.left.worldPosition.y, this.left.worldPosition.z, dir.x, 0, dir.z);
            var rayRight = new Ray(this.right.worldPosition.x, this.right.worldPosition.y, this.right.worldPosition.z, dir.x, 0, dir.z);
            var centerd;
            var leftd;
            var rightd;
            var centercollider;
            var leftcollider;
            var rightcollider;
            var centerhitPoint;
            var lefthitPoint;
            var righthitPoint;

            if (PhysicsSystem.instance.raycastClosest(rayCenter, 1)) {
              centercollider = PhysicsSystem.instance.raycastClosestResult.collider;
              centerhitPoint = new Vec3(PhysicsSystem.instance.raycastClosestResult.hitPoint.x, PhysicsSystem.instance.raycastClosestResult.hitPoint.y, PhysicsSystem.instance.raycastClosestResult.hitPoint.z);
            }

            if (PhysicsSystem.instance.raycastClosest(rayLeft, 1)) {
              leftcollider = PhysicsSystem.instance.raycastClosestResult.collider;
              lefthitPoint = new Vec3(PhysicsSystem.instance.raycastClosestResult.hitPoint.x, PhysicsSystem.instance.raycastClosestResult.hitPoint.y, PhysicsSystem.instance.raycastClosestResult.hitPoint.z);
            }

            if (PhysicsSystem.instance.raycastClosest(rayRight, 1)) {
              rightcollider = PhysicsSystem.instance.raycastClosestResult.collider;
              righthitPoint = new Vec3(PhysicsSystem.instance.raycastClosestResult.hitPoint.x, PhysicsSystem.instance.raycastClosestResult.hitPoint.y, PhysicsSystem.instance.raycastClosestResult.hitPoint.z);
            }

            if (!centerhitPoint || !lefthitPoint || !righthitPoint) return;
            centerd = Vec3.distance(this.center.worldPosition, centerhitPoint);
            leftd = Vec3.distance(this.left.worldPosition, lefthitPoint);
            rightd = Vec3.distance(this.right.worldPosition, righthitPoint);
            var min = Math.min(centerd, leftd, rightd);

            if (min == centerd) {
              return centercollider.node;
            } else if (min == leftd) {
              return leftcollider.node;
            } else if (min == rightd) {
              return rightcollider.node;
            }
          }
        }, {
          key: "CreateRay",
          value: function CreateRay(start, end) {
            var dir = new Vec3(end.x - start.x, 0, end.z - start.z);
            var rayCenter = new Ray(start.x, start.y, start.z, dir.x, 0, dir.z);
            var centercollider = new Array();
            var centerhitPoint;

            if (PhysicsSystem.instance.raycast(rayCenter)) {
              centercollider = PhysicsSystem.instance.raycastResults;
            }

            if (centercollider.length >= 2) {
              if (centercollider[centercollider.length - 2].collider.node.name == "dong" || centercollider[centercollider.length - 2].collider.node.name == "well") {
                return true;
              }
            }

            return false;
          }
        }, {
          key: "CreateTargetPos",
          value: function CreateTargetPos(point0, point1, point2) {
            //圆方程
            // (x-x0)^2 + (y-y0)^2 = r^2
            if (!point0) return;
            var x0 = point0.x;
            var y0 = point0.z;
            var r = 11.42; //直线方程

            var x1 = point1.x;
            var y1 = point1.z;
            var x2 = point2.x;
            var y2 = point2.z;
            var target1;
            var target2;

            if (point1.x == point2.x) {
              //  方程为 x = point1.x;
              //联立方程的得
              var A = 1;
              var B = -2 * y0;
              var C = y0 * y0 + (x1 - x0) * (x1 - x0) - r * r; //方程求解

              var solutionX1 = x1;
              var solutionY1 = (-B + Math.sqrt(B * B - 4 * A * C)) / (2 * A);
              var solutionX2 = x1;
              var solutionY2 = (-B - Math.sqrt(B * B - 4 * A * C)) / (2 * A);
              target1 = new Vec3(solutionX1, 0, solutionY1);
              target2 = new Vec3(solutionX2, 0, solutionY2);
            } else if (point1.z == point2.z) {
              // 方程为 y = point1.z
              //联立方程的得
              var _A = 1;

              var _B = -2 * x0;

              var _C = x0 * x0 + (y1 - y0) * (y1 - y0) - r * r; //方程求解


              var _solutionX = (-_B + Math.sqrt(_B * _B - 4 * _A * _C)) / (2 * _A);

              var _solutionY = y1;

              var _solutionX2 = (-_B - Math.sqrt(_B * _B - 4 * _A * _C)) / (2 * _A);

              var _solutionY2 = y1;
              target1 = new Vec3(_solutionX, 0, _solutionY);
              target2 = new Vec3(_solutionX2, 0, _solutionY2);
            } else {
              // 方程为 y = ((point2.z - point1.z) / (point2.x - point1.x)) * x + (point1.z -((pioint1.x * (point2.z - point1.z) / (point2.x - point1.x))))
              // y = kx+b;
              // y = ((y2-y1)/(x2-x1))*x+(y1-(x1*(y2-y1)/(x2-x1)))
              var k = (y2 - y1) / (x2 - x1);
              var b = y1 - x1 * (y2 - y1) / (x2 - x1); //联立方程得

              var _A2 = 1 + k * k;

              var _B2 = 2 * k * b - 2 * y0 * k - 2 * x0;

              var _C2 = b * b - 2 * y0 * b + x0 * x0 + y0 * y0 - r * r; //方程求解


              var _solutionX3 = (-_B2 + Math.sqrt(_B2 * _B2 - 4 * _A2 * _C2)) / (2 * _A2);

              var _solutionY3 = k * _solutionX3 + b;

              var _solutionX4 = (-_B2 - Math.sqrt(_B2 * _B2 - 4 * _A2 * _C2)) / (2 * _A2);

              var _solutionY4 = k * _solutionX4 + b;

              target1 = new Vec3(_solutionX3, 0, _solutionY3);
              target2 = new Vec3(_solutionX4, 0, _solutionY4);
            }

            this.Sphere.setWorldPosition(target1);
            this.Sphere2.setWorldPosition(target2);

            if (Vec3.distance(this.center.worldPosition, target1) < Vec3.distance(this.center.worldPosition, target2)) {
              return 1;
            } else {
              return 2;
            }
          }
        }, {
          key: "Hit",
          value: function Hit() {
            if ((_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.nowPlayerType != this.playerType) return; //停止计时

            (_crd && GameSceneUI === void 0 ? (_reportPossibleCrUseOfGameSceneUI({
              error: Error()
            }), GameSceneUI) : GameSceneUI).I.EndReckonTime();

            if ((_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.Players[(_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.nowPlayerType].IsHitBall) {
              console.log("本回合玩家", (_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
                error: Error()
              }), GameSceneManager) : GameSceneManager).I.nowPlayerType, "已经击打过球了，请等待下一回合");
              return;
            }

            if ((_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.Players[(_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.nowPlayerType].IsFreeBall) {
              console.log("本回合玩家", (_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
                error: Error()
              }), GameSceneManager) : GameSceneManager).I.nowPlayerType, "有自由球权，现已经打过球了，重置自由球权，并关闭自由球移动规定");
              find("Canvas/BallDrag").active = false;
              (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.CloseFreeBall();
              (_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
                error: Error()
              }), GameSceneManager) : GameSceneManager).I.Players[(_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
                error: Error()
              }), GameSceneManager) : GameSceneManager).I.nowPlayerType].IsFreeBall = false;
              this.IsUseFreeBall = false;
            }

            find("Gun/Cylinder").active = false;
            find("Line").active = false;
            find("Canvas/GunDrag2").active = false;
            (_crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
              error: Error()
            }), PlayerController) : PlayerController).I.slider.enabled = false;
            (_crd && SourceManager === void 0 ? (_reportPossibleCrUseOfSourceManager({
              error: Error()
            }), SourceManager) : SourceManager).I.Gun2Ball();
            var force = 100 + Math.random() * 200;
            (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.WhiteBall.getComponent(RigidBody).applyImpulse(new Vec3((_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.Players[(_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.nowPlayerType].ForceDirection.x * force, 0, (_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.Players[(_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.nowPlayerType].ForceDirection.z * force));
            (_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.Players[(_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.nowPlayerType].IsStartFollow = false;
            (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.isAllBallStop = false;
            (_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.Players[(_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.nowPlayerType].IsHitBall = true; //重置白球第一个碰到的球的信息

            (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.ResetWhiteBallFirstTouchBallValue();
          }
        }]);

        return RobotController;
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0dhbWUvR2FtZUNvbW1vbi9Sb2JvdENvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsImZpbmQiLCJSaWdpZEJvZHkiLCJWZWMzIiwiZ2VvbWV0cnkiLCJQaHlzaWNzU3lzdGVtIiwibWFjcm8iLCJTb3VyY2VNYW5hZ2VyIiwiTWF0aEFsZ29yaXRobSIsIkdhbWVEYXRhIiwiQmFsbE1hbmFnZXIiLCJCYWxsVHlwZSIsIkdhbWVTY2VuZU1hbmFnZXIiLCJHYW1lU2NlbmVVSSIsIlBsYXllckNvbnRyb2xsZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJSYXkiLCJyYXkiLCJSb2JvdENvbnRyb2xsZXIiLCJob2xlcyIsIkFycmF5Iiwid2hpdGVCYWxsUG9zMiIsImdhblBvcyIsImNlbnRlciIsImxlZnQiLCJyaWdodCIsIlNwaGVyZSIsIlNwaGVyZTIiLCJJc1VzZUZyZWVCYWxsIiwiSSIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJzY2hlZHVsZU9uY2UiLCJJbml0IiwiQ2hvb3NlQmFsbExvZ2ljIiwiaSIsImxlbmd0aCIsImdldENoaWxkQnlOYW1lIiwic2NoZWR1bGUiLCJUdXJuTG9naWNQYXJ0IiwiUkVQRUFUX0ZPUkVWRVIiLCJnYW1lU3RvcCIsIm5vd1BsYXllclR5cGUiLCJwbGF5ZXJUeXBlIiwiUGxheWVycyIsIklzSGl0QmFsbCIsIklzRnJlZUJhbGwiLCJPcGVuRnJlZUJhbGwiLCJJc0ZpcnN0Um91bmQiLCJNYXRoIiwicmFuZG9tIiwiV2hpdGVCYWxsIiwid29ybGRQb3NpdGlvbiIsIlJlc2V0QmFsbFBvcyIsIlNPTElEQkFMTCIsImFjdGl2ZSIsInNsaWRlciIsImVuYWJsZWQiLCJIaXQiLCJ3aGl0ZWJhbGxUb09yZGluYXJ5QmFsbCIsIk9yZGluYXJ5QmFsbFRvSG9sZXMiLCJBbGxCYWxscyIsInB1c2giLCJqIiwib3V0IiwieCIsInoiLCJvdXQyIiwiZGF0YXMiLCJvMmgiLCJhbmdsZSIsImRhdGEiLCJiYWxsTnVtYmVyIiwiaG9sZU51bWJlciIsImJhbGxOYW1lIiwiVHlwZU9mQmFsbFRvQmVIaXQiLCJjb25zb2xlIiwibG9nIiwic3BsaWNlIiwiYmFsbCIsImhvbGUiLCJ0YXJnZXRwb3MiLCJDcmVhdGVUYXJnZXRQb3MiLCJzZXRXb3JsZFBvc2l0aW9uIiwibG9va0F0IiwicG9zaXRpb24iLCJmaXJzdGJhbGwiLCJDcmVhdGVSYXlKdWRnZU5lYXJlc3RCYWxsIiwibmFtZSIsIkNyZWF0ZVJheSIsIndoaXRlQmFsbFBvcyIsImRpciIsInJheUNlbnRlciIsInkiLCJyYXlMZWZ0IiwicmF5UmlnaHQiLCJjZW50ZXJkIiwibGVmdGQiLCJyaWdodGQiLCJjZW50ZXJjb2xsaWRlciIsImxlZnRjb2xsaWRlciIsInJpZ2h0Y29sbGlkZXIiLCJjZW50ZXJoaXRQb2ludCIsImxlZnRoaXRQb2ludCIsInJpZ2h0aGl0UG9pbnQiLCJpbnN0YW5jZSIsInJheWNhc3RDbG9zZXN0IiwicmF5Y2FzdENsb3Nlc3RSZXN1bHQiLCJjb2xsaWRlciIsImhpdFBvaW50IiwiZGlzdGFuY2UiLCJtaW4iLCJzdGFydCIsImVuZCIsInJheWNhc3QiLCJyYXljYXN0UmVzdWx0cyIsInBvaW50MCIsInBvaW50MSIsInBvaW50MiIsIngwIiwieTAiLCJyIiwieDEiLCJ5MSIsIngyIiwieTIiLCJ0YXJnZXQxIiwidGFyZ2V0MiIsIkEiLCJCIiwiQyIsInNvbHV0aW9uWDEiLCJzb2x1dGlvblkxIiwic3FydCIsInNvbHV0aW9uWDIiLCJzb2x1dGlvblkyIiwiayIsImIiLCJFbmRSZWNrb25UaW1lIiwiQ2xvc2VGcmVlQmFsbCIsIkd1bjJCYWxsIiwiZm9yY2UiLCJhcHBseUltcHVsc2UiLCJGb3JjZURpcmVjdGlvbiIsIklzU3RhcnRGb2xsb3ciLCJpc0FsbEJhbGxTdG9wIiwiUmVzZXRXaGl0ZUJhbGxG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QWxDO0FBQ0E7QUFBQTtBQUFBLDRDQUFZckIsQ0FBWixDQUFjc0IsU0FBZCxDQUF3QnBCLFlBQXhCLENBQXFDOUIsU0FBckMsRUFBZ0Q2SSxZQUFoRCxDQUE2RCxJQUFJNUksSUFBSixDQUFTO0FBQUE7QUFBQSxzREFBaUIyQixDQUFqQixDQUFtQmUsT0FBbkIsQ0FBMkI7QUFBQTtBQUFBLHNEQUFpQmYsQ0FBakIsQ0FBbUJhLGFBQTlDLEVBQTZEcUcsY0FBN0QsQ0FBNEU5RSxDQUE1RSxHQUFnRjRFLEtBQXpGLEVBQWdHLENBQWhHLEVBQW1HO0FBQUE7QUFBQSxzREFBaUJoSCxDQUFqQixDQUFtQmUsT0FBbkIsQ0FBMkI7QUFBQTtBQUFBLHNEQUFpQmYsQ0FBakIsQ0FBbUJhLGFBQTlDLEVBQTZEcUcsY0FBN0QsQ0FBNEU3RSxDQUE1RSxHQUFnRjJFLEtBQW5MLENBQTdEO0FBQ0E7QUFBQTtBQUFBLHNEQUFpQmhILENBQWpCLENBQW1CZSxPQUFuQixDQUEyQjtBQUFBO0FBQUEsc0RBQWlCZixDQUFqQixDQUFtQmEsYUFBOUMsRUFBNkRzRyxhQUE3RCxHQUE2RSxLQUE3RTtBQUNBO0FBQUE7QUFBQSw0Q0FBWW5ILENBQVosQ0FBY29ILGFBQWQsR0FBOEIsS0FBOUI7QUFDQTtBQUFBO0FBQUEsc0RBQWlCcEgsQ0FBakIsQ0FBbUJlLE9BQW5CLENBQTJCO0FBQUE7QUFBQSxzREFBaUJmLENBQWpCLENBQW1CYSxhQUE5QyxFQUE2REcsU0FBN0QsR0FBeUUsSUFBekUsQ0F6QkUsQ0EwQkY7O0FBQ0E7QUFBQTtBQUFBLDRDQUFZaEIsQ0FBWixDQUFjcUgsaUNBQWQ7QUFDSDs7OztRQWpiZ0NuSixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBmaW5kLCBSaWdpZEJvZHksIFZlYzMsIHYzLCBnZW9tZXRyeSwgQ29sbGlkZXIsIFBoeXNpY3NTeXN0ZW0sIG1hY3JvLCBQaHlzaWNzUmF5UmVzdWx0IH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgU291cmNlTWFuYWdlciB9IGZyb20gJy4uLy4uL0NvbW1vbi9Tb3VyY2VNYW5hZ2VyJztcbmltcG9ydCB7IE1hdGhBbGdvcml0aG0gfSBmcm9tICcuLi9BbGdvcml0aG0vTWF0aEFsZ29yaXRobSc7XG5pbXBvcnQgeyBHYW1lRGF0YSB9IGZyb20gJy4uL0dhbWVEYXRhJztcbmltcG9ydCB7IEJhbGxNYW5hZ2VyIH0gZnJvbSAnLi9CYWxsL0JhbGxNYW5hZ2VyJztcbmltcG9ydCB7IEJhbGxUeXBlIH0gZnJvbSAnLi9CYWxsL0JhbGxUeXBlJztcbmltcG9ydCB7IEdhbWVTY2VuZU1hbmFnZXIgfSBmcm9tICcuL0dhbWVTY2VuZU1hbmFnZXInO1xuaW1wb3J0IHsgUm91bmRUeXBlIH0gZnJvbSAnLi9Sb3VuZFR5cGUnO1xuaW1wb3J0IHsgR2FtZVNjZW5lVUkgfSBmcm9tICcuL1VJL0dhbWVTY2VuZVVJJztcbmltcG9ydCB7IFBsYXllckNvbnRyb2xsZXIgfSBmcm9tICcuL1VJL1BsYXllckNvbnRyb2xsZXInO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcbmNvbnN0IHsgcmF5OiBSYXkgfSA9IGdlb21ldHJ5O1xuXG5AY2NjbGFzcygnUm9ib3RDb250cm9sbGVyJylcbmV4cG9ydCBjbGFzcyBSb2JvdENvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBJOiBSb2JvdENvbnRyb2xsZXI7XG4gICAgcGxheWVyVHlwZTogUm91bmRUeXBlO1xuICAgIGhvbGVzOiBOb2RlW10gPSBuZXcgQXJyYXk8Tm9kZT4oNik7XG5cblxuICAgIHByaXZhdGUgd2hpdGVCYWxsUG9zMjogTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBnYW5Qb3M6IE5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgY2VudGVyOiBOb2RlID0gbnVsbDtcbiAgICBwcml2YXRlIGxlZnQ6IE5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgcmlnaHQ6IE5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBTcGhlcmU6IE5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgU3BoZXJlMjogTm9kZSA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIFJvYm90Q29udHJvbGxlci5JID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChSb2JvdENvbnRyb2xsZXIpO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5Jbml0KCk7XG4gICAgICAgICAgICB0aGlzLkNob29zZUJhbGxMb2dpYygpO1xuICAgICAgICB9LCA1KVxuICAgIH1cbiAgICAvLyBSb2JvdCgpIHtcbiAgICAvLyAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG4gICAgLy8gICAgICAgICBpZiAoR2FtZURhdGEuSS5nYW1lU3RvcCkgcmV0dXJuO1xuICAgIC8vICAgICAgICAgaWYgKEdhbWVTY2VuZU1hbmFnZXIuSS5ub3dQbGF5ZXJUeXBlICE9IEdhbWVTY2VuZU1hbmFnZXIuSS50aGlzUGxheWVyKSB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKEdhbWVTY2VuZU1hbmFnZXIuSS5QbGF5ZXJzW0dhbWVTY2VuZU1hbmFnZXIuSS5ub3dQbGF5ZXJUeXBlXS5Jc0hpdEJhbGwpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmnKzlm57lkIjnjqnlrrZcIiwgR2FtZVNjZW5lTWFuYWdlci5JLm5vd1BsYXllclR5cGUsIFwi5bey57uP5Ye75omT6L+H55CD5LqG77yM6K+3562J5b6F5LiL5LiA5Zue5ZCIXCIpO1xuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaIkeaYr+acuuWZqOS6ujIg5oiR6KaB6L+Z5Zue5ZCI5omT6L+H55CD5LqG77yM5oiR5Zyo562J5b6F55CD5YGc5q2i6L+Q5YqoXCIpO1xuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5zbGlkZXIucHJvZ3Jlc3MgPSAwLjUgKyAwLjUgKiBNYXRoLnJhbmRvbSgpO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICBpZiAodGhpcy5zbGlkZXIucHJvZ3Jlc3MgPiAwLjA2KSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIC8v5YGc5q2i6K6h5pe2XG4gICAgLy8gICAgICAgICAgICAgICAgIEdhbWVTY2VuZVVJLkkuRW5kUmVja29uVGltZSgpO1xuICAgIC8vICAgICAgICAgICAgICAgICBpZiAoR2FtZVNjZW5lTWFuYWdlci5JLlBsYXllcnNbR2FtZVNjZW5lTWFuYWdlci5JLm5vd1BsYXllclR5cGVdLklzRnJlZUJhbGwpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pys5Zue5ZCI546p5a62XCIsIEdhbWVTY2VuZU1hbmFnZXIuSS5ub3dQbGF5ZXJUeXBlLCBcIuacieiHqueUseeQg+adg++8jOeOsOW3sue7j+aJk+i/h+eQg+S6hu+8jOmHjee9ruiHqueUseeQg+adg++8jOW5tuWFs+mXreiHqueUseeQg+enu+WKqOinhOWumlwiKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGZpbmQoXCJDYW52YXMvQmFsbERyYWdcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBCYWxsTWFuYWdlci5JLkNsb3NlRnJlZUJhbGwoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIEdhbWVTY2VuZU1hbmFnZXIuSS5QbGF5ZXJzW0dhbWVTY2VuZU1hbmFnZXIuSS5ub3dQbGF5ZXJUeXBlXS5Jc0ZyZWVCYWxsID0gZmFsc2U7XG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgZmluZChcIkd1bi9DeWxpbmRlclwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgICAgICAgZmluZChcIkxpbmVcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgLy8gICAgICAgICAgICAgICAgIGZpbmQoXCJDYW52YXMvR3VuRHJhZzJcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgLy8gICAgICAgICAgICAgICAgIGxldCBmb3JjZSA9IHRoaXMuc2xpZGVyLnByb2dyZXNzICogMzAwO1xuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaIkeaYr+acuuWZqOS6ujIg5oiR6KaB5byA5aeL5omT55CD5LqGXCIpO1xuICAgIC8vICAgICAgICAgICAgICAgICBCYWxsTWFuYWdlci5JLldoaXRlQmFsbC5nZXRDb21wb25lbnQoUmlnaWRCb2R5KS5hcHBseUltcHVsc2UobmV3IFZlYzMoR2FtZVNjZW5lTWFuYWdlci5JLlBsYXllcnNbR2FtZVNjZW5lTWFuYWdlci5JLm5vd1BsYXllclR5cGVdLkZvcmNlRGlyZWN0aW9uLnggKiBmb3JjZSwgMCwgR2FtZVNjZW5lTWFuYWdlci5JLlBsYXllcnNbR2FtZVNjZW5lTWFuYWdlci5JLm5vd1BsYXllclR5cGVdLkZvcmNlRGlyZWN0aW9uLnogKiBmb3JjZSkpO1xuICAgIC8vICAgICAgICAgICAgICAgICBHYW1lU2NlbmVNYW5hZ2VyLkkuUGxheWVyc1tHYW1lU2NlbmVNYW5hZ2VyLkkubm93UGxheWVyVHlwZV0uSXNTdGFydEZvbGxvdyA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgICAgICAgICBCYWxsTWFuYWdlci5JLmlzQWxsQmFsbFN0b3AgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgICAgICAgR2FtZVNjZW5lTWFuYWdlci5JLlBsYXllcnNbR2FtZVNjZW5lTWFuYWdlci5JLm5vd1BsYXllclR5cGVdLklzSGl0QmFsbCA9IHRydWU7XG4gICAgLy8gICAgICAgICAgICAgICAgIC8v6YeN572u55m955CD56ys5LiA5Liq56Kw5Yiw55qE55CD55qE5L+h5oGvXG4gICAgLy8gICAgICAgICAgICAgICAgIEJhbGxNYW5hZ2VyLkkuUmVzZXRXaGl0ZUJhbGxGaXJzdFRvdWNoQmFsbFZhbHVlKClcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zbGlkZXIucHJvZ3Jlc3MgPSAwO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgLy8gaWYgKEdhbWVTY2VuZU1hbmFnZXIuSS5ub3dQbGF5ZXJUeXBlID09IFJvdW5kVHlwZS5QbGF5Mikge1xuICAgIC8vICAgICAgICAgLy8gICAgIGlmIChHYW1lU2NlbmVNYW5hZ2VyLkkuUGxheWVyc1tSb3VuZFR5cGUuUGxheTJdLklzSGl0QmFsbCA9PSB0cnVlKSB7XG4gICAgLy8gICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwi5oiR5piv5py65Zmo5Lq6MiDmiJHopoHov5nlm57lkIjmiZPov4fnkIPkuobvvIzmiJHlnKjnrYnlvoXnkIPlgZzmraLov5DliqhcIik7XG4gICAgLy8gICAgICAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgICAgIC8vICAgICB9XG4gICAgLy8gICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLmiJHmmK/mnLrlmajkuroyIOaIkeimgeW8gOWni+aJk+eQg+S6hlwiKTtcbiAgICAvLyAgICAgICAgIC8vICAgICB0aGlzLnNsaWRlci5wcm9ncmVzcyA9IDEgKiBNYXRoLnJhbmRvbSgpXG4gICAgLy8gICAgICAgICAvLyAgICAgbGV0IGZvcmNlID0gdGhpcy5zbGlkZXIucHJvZ3Jlc3MgKiA0MDA7XG4gICAgLy8gICAgICAgICAvLyAgICAgQmFsbE1hbmFnZXIuSS5XaGl0ZUJhbGwuZ2V0Q29tcG9uZW50KFJpZ2lkQm9keSkuYXBwbHlJbXB1bHNlKG5ldyBWZWMzKChNYXRoLnJhbmRvbSgpIDwgMC41ID8gMSA6IC0xKSAqIGZvcmNlICogTWF0aC5yYW5kb20oKSwgMCwgKE1hdGgucmFuZG9tKCkgPCAwLjUgPyAxIDogLTEpICogZm9yY2UgKiBNYXRoLnJhbmRvbSgpKSk7XG4gICAgLy8gICAgICAgICAvLyAgICAgR2FtZVNjZW5lTWFuYWdlci5JLlBsYXllcnNbR2FtZVNjZW5lTWFuYWdlci5JLm5vd1BsYXllclR5cGVdLklzU3RhcnRGb2xsb3cgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgIC8vICAgICBCYWxsTWFuYWdlci5JLmlzQWxsQmFsbFN0b3AgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgIC8vICAgICBHYW1lU2NlbmVNYW5hZ2VyLkkuUGxheWVyc1tHYW1lU2NlbmVNYW5hZ2VyLkkubm93UGxheWVyVHlwZV0uSXNIaXRCYWxsID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgIC8vICAgICAvL+mHjee9rueZveeQg+esrOS4gOS4queisOWIsOeahOeQg+eahOS/oeaBr1xuICAgIC8vICAgICAgICAgLy8gICAgIEJhbGxNYW5hZ2VyLkkuUmVzZXRXaGl0ZUJhbGxGaXJzdFRvdWNoQmFsbFZhbHVlKClcblxuICAgIC8vICAgICAgICAgLy8gfVxuICAgIC8vICAgICAgICAgLy8gaWYgKEdhbWVTY2VuZU1hbmFnZXIuSS5ub3dQbGF5ZXJUeXBlID09IFJvdW5kVHlwZS5QbGF5MSkge1xuICAgIC8vICAgICAgICAgLy8gaWYgKEdhbWVTY2VuZU1hbmFnZXIuSS5QbGF5ZXJzW1JvdW5kVHlwZS5QbGF5MV0uSXNIaXRCYWxsID09IHRydWUpIHtcbiAgICAvLyAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIuaIkeaYr+acuuWZqOS6ujEg5oiR6KaB6L+Z5Zue5ZCI5omT6L+H55CD5LqG77yM5oiR5Zyo562J5b6F55CD5YGc5q2i6L+Q5YqoXCIpO1xuICAgIC8vICAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAvLyAgICAgICAgIC8vIH1cbiAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5oiR5piv5py65Zmo5Lq6MSDmiJHopoHlvIDlp4vmiZPnkIPkuoZcIik7XG4gICAgLy8gICAgICAgICAvLyB0aGlzLnNsaWRlci5wcm9ncmVzcyA9IDEgKiBNYXRoLnJhbmRvbSgpO1xuICAgIC8vICAgICAgICAgLy8gbGV0IGZvcmNlID0gdGhpcy5zbGlkZXIucHJvZ3Jlc3MgKiA0MDA7XG4gICAgLy8gICAgICAgICAvLyBCYWxsTWFuYWdlci5JLldoaXRlQmFsbC5nZXRDb21wb25lbnQoUmlnaWRCb2R5KS5hcHBseUltcHVsc2UobmV3IFZlYzMoKE1hdGgucmFuZG9tKCkgPCAwLjUgPyAxIDogLTEpICogZm9yY2UgKiBNYXRoLnJhbmRvbSgpLCAwLCAoTWF0aC5yYW5kb20oKSA8IDAuNSA/IDEgOiAtMSkgKiBmb3JjZSAqIE1hdGgucmFuZG9tKCkpKTtcbiAgICAvLyAgICAgICAgIC8vIEdhbWVTY2VuZU1hbmFnZXIuSS5QbGF5ZXJzW0dhbWVTY2VuZU1hbmFnZXIuSS5ub3dQbGF5ZXJUeXBlXS5Jc1N0YXJ0Rm9sbG93ID0gZmFsc2U7XG4gICAgLy8gICAgICAgICAvLyBCYWxsTWFuYWdlci5JLmlzQWxsQmFsbFN0b3AgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgIC8vIEdhbWVTY2VuZU1hbmFnZXIuSS5QbGF5ZXJzW0dhbWVTY2VuZU1hbmFnZXIuSS5ub3dQbGF5ZXJUeXBlXS5Jc0hpdEJhbGwgPSB0cnVlO1xuICAgIC8vICAgICAgICAgLy8gLy8g6YeN572u55m955CD56ys5LiA5Liq56Kw5Yiw55qE55CD55qE5L+h5oGvXG4gICAgLy8gICAgICAgICAvLyBCYWxsTWFuYWdlci5JLlJlc2V0V2hpdGVCYWxsRmlyc3RUb3VjaEJhbGxWYWx1ZSgpXG4gICAgLy8gICAgICAgICAvLyAgICAgfVxuICAgIC8vICAgICB9LCA1LCBtYWNyby5SRVBFQVRfRk9SRVZFUiwgMSk7XG4gICAgLy8gfVxuICAgIEluaXQoKSB7XG4gICAgICAgIC8v5p+l5om+5omA5pyJ55qE55CD5rSe57uT54K5XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ob2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ob2xlc1tpXSA9IGZpbmQoXCJUYWJsZS9ob2xlXCIgKyBpKTtcbiAgICAgICAgfVxuICAgICAgICAvL+aooeaLn+eehOWHhlxuICAgICAgICB0aGlzLndoaXRlQmFsbFBvczIgPSBmaW5kKFwid2hpdGVCYWxsUG9zMlwiKTtcbiAgICAgICAgdGhpcy5nYW5Qb3MgPSB0aGlzLndoaXRlQmFsbFBvczIuZ2V0Q2hpbGRCeU5hbWUoXCJnYW5Qb3NcIikgYXMgTm9kZTtcbiAgICAgICAgdGhpcy5jZW50ZXIgPSB0aGlzLndoaXRlQmFsbFBvczIuZ2V0Q2hpbGRCeU5hbWUoXCJDZW50ZXJcIikgYXMgTm9kZTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gdGhpcy53aGl0ZUJhbGxQb3MyLmdldENoaWxkQnlOYW1lKFwiTGVmdFwiKSBhcyBOb2RlO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gdGhpcy53aGl0ZUJhbGxQb3MyLmdldENoaWxkQnlOYW1lKFwiUmlnaHRcIikgYXMgTm9kZTtcbiAgICAgICAgdGhpcy5TcGhlcmUgPSBmaW5kKFwiU3BoZXJlXCIpO1xuICAgICAgICB0aGlzLlNwaGVyZTIgPSBmaW5kKFwiU3BoZXJlMlwiKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLlR1cm5Mb2dpY1BhcnQoKTtcbiAgICAgICAgfSwgNSwgbWFjcm8uUkVQRUFUX0ZPUkVWRVIsIDEwKTtcbiAgICB9XG4gICAgSXNVc2VGcmVlQmFsbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8qKuWIpOaWreWbnuWQiOmAu+i+kemDqOWIhiAqL1xuICAgIFR1cm5Mb2dpY1BhcnQoKSB7XG4gICAgICAgIC8v5ri45oiP5pqC5YGc5pe2XG4gICAgICAgIGlmIChHYW1lRGF0YS5JLmdhbWVTdG9wKSByZXR1cm47XG4gICAgICAgIC8v5LiN5piv5py65Zmo5Lq65Zue5ZCI5pe2XG4gICAgICAgIGlmIChHYW1lU2NlbmVNYW5hZ2VyLkkubm93UGxheWVyVHlwZSAhPSB0aGlzLnBsYXllclR5cGUpIHJldHVybjtcbiAgICAgICAgLy/mnLrlmajkurrlt7Lnu4/miZPov4fnkIPml7ZcbiAgICAgICAgaWYgKEdhbWVTY2VuZU1hbmFnZXIuSS5QbGF5ZXJzW3RoaXMucGxheWVyVHlwZV0uSXNIaXRCYWxsKSByZXR1cm47XG4gICAgICAgIGlmIChHYW1lU2NlbmVNYW5hZ2VyLkkuUGxheWVyc1t0aGlzLnBsYXllclR5cGVdLklzRnJlZUJhbGwgJiYgIXRoaXMuSXNVc2VGcmVlQmFsbCkge1xuICAgICAgICAgICAgQmFsbE1hbmFnZXIuSS5PcGVuRnJlZUJhbGwoKTtcbiAgICAgICAgICAgIGlmIChHYW1lU2NlbmVNYW5hZ2VyLkkuSXNGaXJzdFJvdW5kKSB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlvIDlsYDmh5LlvpfmkYbnkINcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgQmFsbE1hbmFnZXIuSS5XaGl0ZUJhbGwud29ybGRQb3NpdGlvbiA9IE1hdGhBbGdvcml0aG0uUmVzZXRCYWxsUG9zKEJhbGxUeXBlLlNPTElEQkFMTCwgbmV3IFZlYzMoLTEzMCArICgoTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMSkgKiBNYXRoLnJhbmRvbSgpICogMzApLCA1LjcxLCAoTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMSkgKiAoTWF0aC5yYW5kb20oKSAqIDcwKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpbmQoXCJDYW52YXMvQmFsbERyYWcvaGFuZFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBCYWxsTWFuYWdlci5JLldoaXRlQmFsbC53b3JsZFBvc2l0aW9uID0gTWF0aEFsZ29yaXRobS5SZXNldEJhbGxQb3MoQmFsbFR5cGUuU09MSURCQUxMLCBuZXcgVmVjMygoTWF0aC5yYW5kb20oKSA+IDAuNSA/IDEgOiAtMSkgKiAoTWF0aC5yYW5kb20oKSAqIDEzMCksIDUuNzEsIChNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xKSAqIChNYXRoLnJhbmRvbSgpICogNzApKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLklzVXNlRnJlZUJhbGwgPSB0cnVlO1xuICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5DaG9vc2VCYWxsTG9naWMsIDIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFBsYXllckNvbnRyb2xsZXIuSS5zbGlkZXIuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLkNob29zZUJhbGxMb2dpYygpO1xuICAgIH1cbiAgICAvKirpgInnkIPpgLvovpEgKi9cbiAgICBDaG9vc2VCYWxsTG9naWMoKSB7XG4gICAgICAgIGlmIChHYW1lU2NlbmVNYW5hZ2VyLkkuSXNGaXJzdFJvdW5kKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLkhpdCwgMik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy/mma7pgJrnkIPmjIflkJHnmb3nkIPnmoTlkJHph4/pm4blkIhcbiAgICAgICAgbGV0IHdoaXRlYmFsbFRvT3JkaW5hcnlCYWxsOiBWZWMzW10gPSBuZXcgQXJyYXk8VmVjMz4oKTtcbiAgICAgICAgLy/mma7pgJrnkIPmjIflkJHmr4/kuKrnkIPmtJ7nmoTlkJHph4/pm4blkIhcbiAgICAgICAgbGV0IE9yZGluYXJ5QmFsbFRvSG9sZXM6IEFycmF5PEFycmF5PFZlYzM+PiA9IG5ldyBBcnJheTxBcnJheTxWZWMzPj4oKTtcbiAgICAgICAgLy/pgY3ljobmiYDmnInnmoTnkIMg6K6h566X5q+P5Liq55CD5oyH5ZCR55m955CD55qE5ZCR6YePIOWSjOavj+S4queQg+aMh+WQkeeQg+a0nueahOWQkemHj1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEJhbGxNYW5hZ2VyLkkuQWxsQmFsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIE9yZGluYXJ5QmFsbFRvSG9sZXMucHVzaChuZXcgQXJyYXk8VmVjMz4oNikpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmhvbGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG91dCA9IG5ldyBWZWMzKHRoaXMuaG9sZXNbal0ud29ybGRQb3NpdGlvbi54IC0gQmFsbE1hbmFnZXIuSS5BbGxCYWxsc1tpXS5ub2RlLndvcmxkUG9zaXRpb24ueCwgMCwgdGhpcy5ob2xlc1tqXS53b3JsZFBvc2l0aW9uLnogLSBCYWxsTWFuYWdlci5JLkFsbEJhbGxzW2ldLm5vZGUud29ybGRQb3NpdGlvbi56KTtcbiAgICAgICAgICAgICAgICBPcmRpbmFyeUJhbGxUb0hvbGVzW2ldW2pdID0gb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG91dDIgPSBuZXcgVmVjMyhCYWxsTWFuYWdlci5JLldoaXRlQmFsbC53b3JsZFBvc2l0aW9uLnggLSBCYWxsTWFuYWdlci5JLkFsbEJhbGxzW2ldLm5vZGUud29ybGRQb3NpdGlvbi54LCAwLCBCYWxsTWFuYWdlci5JLldoaXRlQmFsbC53b3JsZFBvc2l0aW9uLnogLSBCYWxsTWFuYWdlci5JLkFsbEJhbGxzW2ldLm5vZGUud29ybGRQb3NpdGlvbi56KTtcbiAgICAgICAgICAgIHdoaXRlYmFsbFRvT3JkaW5hcnlCYWxsLnB1c2gob3V0Mik7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpLCBCYWxsTWFuYWdlci5JLkFsbEJhbGxzW2ldLmJhbGxOdW1iZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8v5rGC5Ye65Lik5ZCR6YeP55qE5aS56KeS5byn5bqm5YC8XG4gICAgICAgIGxldCBkYXRhczogQXJyYXk8YW55PiA9IG5ldyBBcnJheTxhbnk+KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT3JkaW5hcnlCYWxsVG9Ib2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbzJoID0gT3JkaW5hcnlCYWxsVG9Ib2xlc1tpXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbzJoLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gVmVjMy5hbmdsZSh3aGl0ZWJhbGxUb09yZGluYXJ5QmFsbFtpXSwgbzJoW2pdKTtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YTogYW55ID0ge307XG4gICAgICAgICAgICAgICAgZGF0YS5hbmdsZSA9IGFuZ2xlO1xuICAgICAgICAgICAgICAgIGRhdGEuYmFsbE51bWJlciA9IGkgKyAxO1xuICAgICAgICAgICAgICAgIGRhdGEuaG9sZU51bWJlciA9IGo7XG4gICAgICAgICAgICAgICAgZGF0YS5iYWxsTmFtZSA9IEJhbGxNYW5hZ2VyLkkuQWxsQmFsbHNbaV0uYmFsbE51bWJlcjtcbiAgICAgICAgICAgICAgICBkYXRhcy5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEdhbWVTY2VuZU1hbmFnZXIuSS5QbGF5ZXJzW3RoaXMucGxheWVyVHlwZV0uVHlwZU9mQmFsbFRvQmVIaXQgIT0gMCAmJiBHYW1lU2NlbmVNYW5hZ2VyLkkuUGxheWVyc1t0aGlzLnBsYXllclR5cGVdLlR5cGVPZkJhbGxUb0JlSGl0ICE9IDEgJiYgR2FtZVNjZW5lTWFuYWdlci5JLlBsYXllcnNbdGhpcy5wbGF5ZXJUeXBlXS5UeXBlT2ZCYWxsVG9CZUhpdCAhPSAzKSB7XG4gICAgICAgICAgICAvL+WmguaenOWHu+aJk+eQg+eahOexu+Wei+i/mOacquaMh+WumiDliJnliKDpmaTmiYDmnInnmoTpu5HlhatcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBkYXRhcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhc1tpXS5iYWxsTmFtZSA9PSA4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChHYW1lU2NlbmVNYW5hZ2VyLkkuUGxheWVyc1t0aGlzLnBsYXllclR5cGVdLlR5cGVPZkJhbGxUb0JlSGl0ID09IDApIHtcbiAgICAgICAgICAgIC8v5aaC5p6c5Ye75omT55CD55qE57G75Z6L5Li65a6e6Imy55CDIOWImeWIoOmZpOaJgOacieeahOiKseiJsueQg+WSjOm7keWFq1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGRhdGFzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFzW2ldLmJhbGxOYW1lID49IDgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChHYW1lU2NlbmVNYW5hZ2VyLkkuUGxheWVyc1t0aGlzLnBsYXllclR5cGVdLlR5cGVPZkJhbGxUb0JlSGl0ID09IDEpIHtcbiAgICAgICAgICAgIC8v5aaC5p6c5Ye75omT55CD55qE57G75Z6L5Li66Iqx6Imy55CDIOWImeWIoOmZpOaJgOacieeahOWunuiJsueQg+WSjOm7keWFq1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGRhdGFzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFzW2ldLmJhbGxOYW1lIDw9IDgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChHYW1lU2NlbmVNYW5hZ2VyLkkuUGxheWVyc1t0aGlzLnBsYXllclR5cGVdLlR5cGVPZkJhbGxUb0JlSGl0ID09IDMpIHtcbiAgICAgICAgICAgIC8v5aaC5p6c5Ye75omT55CD55qE57G75Z6L5Li66buR5YWrIOWImeWIoOmZpOaJgOacieeahOWunuiJsueQg+WSjOiKseiJsueQg1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGRhdGFzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFzW2ldLmJhbGxOYW1lICE9IDgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8v5qC55o2u5byn5YC85Yi26L+b6KGM5o6S5bqPIOW8p+W6puWAvOi2iuWkp+ivtOaYjuinkuW6pui2iuWkpyDotorlrrnmmJPmiZPov5tcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IGRhdGFzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFzW2pdLmFuZ2xlID4gZGF0YXNbaV0uYW5nbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBkYXRhc1tpXVxuICAgICAgICAgICAgICAgICAgICBkYXRhc1tpXSA9IGRhdGFzW2pdO1xuICAgICAgICAgICAgICAgICAgICBkYXRhc1tqXSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFzKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coQmFsbE1hbmFnZXIuSS5BbGxCYWxscyk7XG4gICAgICAgIC8v5LyY5YWI6YCJ5oup55m955CD5Yiw55CD77yM55CD5Yiw5rSe5Y+j6YO95rKh5pyJ6YGu5oyh55qEXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5LyY5YWI6YCJ5oupISEhIVwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGRhdGFzW2ldO1xuICAgICAgICAgICAgY29uc3QgYmFsbCA9IEJhbGxNYW5hZ2VyLkkuQWxsQmFsbHNbZGF0YS5iYWxsTnVtYmVyIC0gMV0ubm9kZTtcbiAgICAgICAgICAgIGNvbnN0IGhvbGUgPSB0aGlzLmhvbGVzW2RhdGEuaG9sZU51bWJlcl07XG4gICAgICAgICAgICBsZXQgdGFyZ2V0cG9zID0gdGhpcy5DcmVhdGVUYXJnZXRQb3MoYmFsbC53b3JsZFBvc2l0aW9uLCBiYWxsLndvcmxkUG9zaXRpb24sIGhvbGUud29ybGRQb3NpdGlvbik7XG4gICAgICAgICAgICB0aGlzLndoaXRlQmFsbFBvczIuc2V0V29ybGRQb3NpdGlvbihCYWxsTWFuYWdlci5JLldoaXRlQmFsbC53b3JsZFBvc2l0aW9uKTtcbiAgICAgICAgICAgIHRoaXMud2hpdGVCYWxsUG9zMi5sb29rQXQodGFyZ2V0cG9zID09IDEgPyB0aGlzLlNwaGVyZS5wb3NpdGlvbiA6IHRoaXMuU3BoZXJlMi5wb3NpdGlvbik7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEuYmFsbE5hbWUsIGJhbGwubmFtZSk7XG4gICAgICAgICAgICBsZXQgZmlyc3RiYWxsID0gdGhpcy5DcmVhdGVSYXlKdWRnZU5lYXJlc3RCYWxsKCk7XG4gICAgICAgICAgICBpZiAoZmlyc3RiYWxsLm5hbWUgIT0gYmFsbC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5DcmVhdGVSYXkoYmFsbC53b3JsZFBvc2l0aW9uLCBob2xlLndvcmxkUG9zaXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi55m955CD5Yiw55CD77yM55CD5Yiw5rSe5Y+j6YO95rKh5pyJ6YGu5oyh55qEXCIpO1xuICAgICAgICAgICAgICAgICAgICBCYWxsTWFuYWdlci5JLndoaXRlQmFsbFBvcy5sb29rQXQodGFyZ2V0cG9zID09IDEgPyB0aGlzLlNwaGVyZS5wb3NpdGlvbiA6IHRoaXMuU3BoZXJlMi5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuSGl0LCAyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL+mAieaLqeeZveeQg+WIsOeQg+ayoeaciemBruaMoeeahFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gZGF0YXNbaV07XG4gICAgICAgICAgICBjb25zdCBiYWxsID0gQmFsbE1hbmFnZXIuSS5BbGxCYWxsc1tkYXRhLmJhbGxOdW1iZXIgLSAxXS5ub2RlO1xuICAgICAgICAgICAgY29uc3QgaG9sZSA9IHRoaXMuaG9sZXNbZGF0YS5ob2xlTnVtYmVyXTtcbiAgICAgICAgICAgIGxldCB0YXJnZXRwb3MgPSB0aGlzLkNyZWF0ZVRhcmdldFBvcyhiYWxsLndvcmxkUG9zaXRpb24sIGJhbGwud29ybGRQb3NpdGlvbiwgaG9sZS53b3JsZFBvc2l0aW9uKTtcbiAgICAgICAgICAgIHRoaXMud2hpdGVCYWxsUG9zMi5zZXRXb3JsZFBvc2l0aW9uKEJhbGxNYW5hZ2VyLkkuV2hpdGVCYWxsLndvcmxkUG9zaXRpb24pO1xuICAgICAgICAgICAgdGhpcy53aGl0ZUJhbGxQb3MyLmxvb2tBdCh0YXJnZXRwb3MgPT0gMSA/IHRoaXMuU3BoZXJlLnBvc2l0aW9uIDogdGhpcy5TcGhlcmUyLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEuYmFsbE5hbWUsIGJhbGwubmFtZSk7XG4gICAgICAgICAgICBsZXQgZmlyc3RiYWxsID0gdGhpcy5DcmVhdGVSYXlKdWRnZU5lYXJlc3RCYWxsKCk7XG4gICAgICAgICAgICBpZiAoZmlyc3RiYWxsLm5hbWUgIT0gYmFsbC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0tLS0tLS1cIik7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIisrKysrKysrKysrKysrXCIpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6YCJ5oup55m955CD5Yiw55CD5rKh5pyJ6YGu5oyh55qEXCIpO1xuICAgICAgICAgICAgICAgIEJhbGxNYW5hZ2VyLkkud2hpdGVCYWxsUG9zLmxvb2tBdCh0YXJnZXRwb3MgPT0gMSA/IHRoaXMuU3BoZXJlLnBvc2l0aW9uIDogdGhpcy5TcGhlcmUyLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLkhpdCwgMik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5rKh5pyJ5Y+v5Lul5omT55qE55CDXCIsIGRhdGFzWzBdKTtcbiAgICAgICAgbGV0IGRhdGEgPSBkYXRhc1swXTtcbiAgICAgICAgbGV0IGJhbGwgPSBCYWxsTWFuYWdlci5JLkFsbEJhbGxzW2RhdGEuYmFsbE51bWJlciAtIDFdLm5vZGU7XG4gICAgICAgIGxldCBob2xlID0gdGhpcy5ob2xlc1tkYXRhLmhvbGVOdW1iZXJdO1xuICAgICAgICBsZXQgdGFyZ2V0cG9zID0gdGhpcy5DcmVhdGVUYXJnZXRQb3MoYmFsbC53b3JsZFBvc2l0aW9uLCBiYWxsLndvcmxkUG9zaXRpb24sIGhvbGUud29ybGRQb3NpdGlvbik7XG4gICAgICAgIHRoaXMud2hpdGVCYWxsUG9zMi5zZXRXb3JsZFBvc2l0aW9uKEJhbGxNYW5hZ2VyLkkuV2hpdGVCYWxsLndvcmxkUG9zaXRpb24pO1xuICAgICAgICB0aGlzLndoaXRlQmFsbFBvczIubG9va0F0KHRhcmdldHBvcyA9PSAxID8gdGhpcy5TcGhlcmUucG9zaXRpb24gOiB0aGlzLlNwaGVyZTIucG9zaXRpb24pO1xuICAgICAgICBCYWxsTWFuYWdlci5JLndoaXRlQmFsbFBvcy5sb29rQXQodGFyZ2V0cG9zID09IDEgPyB0aGlzLlNwaGVyZS5wb3NpdGlvbiA6IHRoaXMuU3BoZXJlMi5wb3NpdGlvbik7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuSGl0LCAyKTtcbiAgICB9XG5cbiAgICBDcmVhdGVSYXlKdWRnZU5lYXJlc3RCYWxsKCkge1xuICAgICAgICBsZXQgZGlyID0gbmV3IFZlYzModGhpcy5jZW50ZXIud29ybGRQb3NpdGlvbi54IC0gdGhpcy5nYW5Qb3Mud29ybGRQb3NpdGlvbi54LCAwLCB0aGlzLmNlbnRlci53b3JsZFBvc2l0aW9uLnogLSB0aGlzLmdhblBvcy53b3JsZFBvc2l0aW9uLnopO1xuICAgICAgICBsZXQgcmF5Q2VudGVyID0gbmV3IFJheSh0aGlzLmNlbnRlci53b3JsZFBvc2l0aW9uLngsIHRoaXMuY2VudGVyLndvcmxkUG9zaXRpb24ueSwgdGhpcy5jZW50ZXIud29ybGRQb3NpdGlvbi56LCBkaXIueCwgMCwgZGlyLnopO1xuICAgICAgICBsZXQgcmF5TGVmdCA9IG5ldyBSYXkodGhpcy5sZWZ0LndvcmxkUG9zaXRpb24ueCwgdGhpcy5sZWZ0LndvcmxkUG9zaXRpb24ueSwgdGhpcy5sZWZ0LndvcmxkUG9zaXRpb24ueiwgZGlyLngsIDAsIGRpci56KTtcbiAgICAgICAgbGV0IHJheVJpZ2h0ID0gbmV3IFJheSh0aGlzLnJpZ2h0LndvcmxkUG9zaXRpb24ueCwgdGhpcy5yaWdodC53b3JsZFBvc2l0aW9uLnksIHRoaXMucmlnaHQud29ybGRQb3NpdGlvbi56LCBkaXIueCwgMCwgZGlyLnopO1xuXG4gICAgICAgIGxldCBjZW50ZXJkOiBudW1iZXI7XG4gICAgICAgIGxldCBsZWZ0ZDogbnVtYmVyO1xuICAgICAgICBsZXQgcmlnaHRkOiBudW1iZXI7XG5cbiAgICAgICAgbGV0IGNlbnRlcmNvbGxpZGVyOiBDb2xsaWRlcjtcbiAgICAgICAgbGV0IGxlZnRjb2xsaWRlcjogQ29sbGlkZXI7XG4gICAgICAgIGxldCByaWdodGNvbGxpZGVyOiBDb2xsaWRlcjtcblxuICAgICAgICBsZXQgY2VudGVyaGl0UG9pbnQ6IFZlYzM7XG4gICAgICAgIGxldCBsZWZ0aGl0UG9pbnQ6IFZlYzM7XG4gICAgICAgIGxldCByaWdodGhpdFBvaW50OiBWZWMzO1xuXG4gICAgICAgIGlmIChQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0KHJheUNlbnRlciwgMSkpIHtcbiAgICAgICAgICAgIGNlbnRlcmNvbGxpZGVyID0gUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdFJlc3VsdC5jb2xsaWRlcjtcbiAgICAgICAgICAgIGNlbnRlcmhpdFBvaW50ID0gbmV3IFZlYzMoUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdFJlc3VsdC5oaXRQb2ludC54LCBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0UmVzdWx0LmhpdFBvaW50LnksIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3RSZXN1bHQuaGl0UG9pbnQueik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3QocmF5TGVmdCwgMSkpIHtcbiAgICAgICAgICAgIGxlZnRjb2xsaWRlciA9IFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3RSZXN1bHQuY29sbGlkZXI7XG4gICAgICAgICAgICBsZWZ0aGl0UG9pbnQgPSBuZXcgVmVjMyhQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0UmVzdWx0LmhpdFBvaW50LngsIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3RSZXN1bHQuaGl0UG9pbnQueSwgUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdFJlc3VsdC5oaXRQb2ludC56KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdChyYXlSaWdodCwgMSkpIHtcbiAgICAgICAgICAgIHJpZ2h0Y29sbGlkZXIgPSBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0UmVzdWx0LmNvbGxpZGVyO1xuICAgICAgICAgICAgcmlnaHRoaXRQb2ludCA9IG5ldyBWZWMzKFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3RSZXN1bHQuaGl0UG9pbnQueCwgUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdFJlc3VsdC5oaXRQb2ludC55LCBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0UmVzdWx0LmhpdFBvaW50LnopO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2VudGVyaGl0UG9pbnQgfHwgIWxlZnRoaXRQb2ludCB8fCAhcmlnaHRoaXRQb2ludCkgcmV0dXJuO1xuXG4gICAgICAgIGNlbnRlcmQgPSBWZWMzLmRpc3RhbmNlKHRoaXMuY2VudGVyLndvcmxkUG9zaXRpb24sIGNlbnRlcmhpdFBvaW50KTtcbiAgICAgICAgbGVmdGQgPSBWZWMzLmRpc3RhbmNlKHRoaXMubGVmdC53b3JsZFBvc2l0aW9uLCBsZWZ0aGl0UG9pbnQpO1xuICAgICAgICByaWdodGQgPSBWZWMzLmRpc3RhbmNlKHRoaXMucmlnaHQud29ybGRQb3NpdGlvbiwgcmlnaHRoaXRQb2ludCk7XG4gICAgICAgIGxldCBtaW4gPSBNYXRoLm1pbihjZW50ZXJkLCBsZWZ0ZCwgcmlnaHRkKTtcbiAgICAgICAgaWYgKG1pbiA9PSBjZW50ZXJkKSB7XG4gICAgICAgICAgICByZXR1cm4gY2VudGVyY29sbGlkZXIubm9kZTtcbiAgICAgICAgfSBlbHNlIGlmIChtaW4gPT0gbGVmdGQpIHtcbiAgICAgICAgICAgIHJldHVybiBsZWZ0Y29sbGlkZXIubm9kZTtcbiAgICAgICAgfSBlbHNlIGlmIChtaW4gPT0gcmlnaHRkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmlnaHRjb2xsaWRlci5ub2RlO1xuICAgICAgICB9XG4gICAgfVxuICAgIENyZWF0ZVJheShzdGFydDogVmVjMywgZW5kOiBWZWMzKSB7XG4gICAgICAgIGxldCBkaXIgPSBuZXcgVmVjMyhlbmQueCAtIHN0YXJ0LngsIDAsIGVuZC56IC0gc3RhcnQueilcbiAgICAgICAgbGV0IHJheUNlbnRlciA9IG5ldyBSYXkoc3RhcnQueCwgc3RhcnQueSwgc3RhcnQueiwgZGlyLngsIDAsIGRpci56KTtcbiAgICAgICAgbGV0IGNlbnRlcmNvbGxpZGVyOiBQaHlzaWNzUmF5UmVzdWx0W10gPSBuZXcgQXJyYXk8UGh5c2ljc1JheVJlc3VsdD4oKTtcbiAgICAgICAgbGV0IGNlbnRlcmhpdFBvaW50OiBWZWMzO1xuICAgICAgICBpZiAoUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0KHJheUNlbnRlcikpIHtcbiAgICAgICAgICAgIGNlbnRlcmNvbGxpZGVyID0gUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0UmVzdWx0cztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2VudGVyY29sbGlkZXIubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgIGlmIChjZW50ZXJjb2xsaWRlcltjZW50ZXJjb2xsaWRlci5sZW5ndGggLSAyXS5jb2xsaWRlci5ub2RlLm5hbWUgPT0gXCJkb25nXCIgfHwgY2VudGVyY29sbGlkZXJbY2VudGVyY29sbGlkZXIubGVuZ3RoIC0gMl0uY29sbGlkZXIubm9kZS5uYW1lID09IFwid2VsbFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBDcmVhdGVUYXJnZXRQb3MocG9pbnQwOiBWZWMzLCBwb2ludDE6IFZlYzMsIHBvaW50MjogVmVjMykge1xuXG4gICAgICAgIC8v5ZyG5pa556iLXG4gICAgICAgIC8vICh4LXgwKV4yICsgKHkteTApXjIgPSByXjJcbiAgICAgICAgaWYgKCFwb2ludDApIHJldHVybjtcbiAgICAgICAgbGV0IHgwID0gcG9pbnQwLng7XG4gICAgICAgIGxldCB5MCA9IHBvaW50MC56O1xuICAgICAgICBsZXQgciA9IDExLjQyO1xuICAgICAgICAvL+ebtOe6v+aWueeoi1xuICAgICAgICBsZXQgeDEgPSBwb2ludDEueDtcbiAgICAgICAgbGV0IHkxID0gcG9pbnQxLno7XG4gICAgICAgIGxldCB4MiA9IHBvaW50Mi54O1xuICAgICAgICBsZXQgeTIgPSBwb2ludDIuejtcbiAgICAgICAgbGV0IHRhcmdldDE6IFZlYzM7XG4gICAgICAgIGxldCB0YXJnZXQyOiBWZWMzO1xuICAgICAgICBpZiAocG9pbnQxLnggPT0gcG9pbnQyLngpIHtcbiAgICAgICAgICAgIC8vICDmlrnnqIvkuLogeCA9IHBvaW50MS54O1xuICAgICAgICAgICAgLy/ogZTnq4vmlrnnqIvnmoTlvpdcbiAgICAgICAgICAgIGxldCBBID0gMTtcbiAgICAgICAgICAgIGxldCBCID0gLTIgKiB5MDtcbiAgICAgICAgICAgIGxldCBDID0geTAgKiB5MCArICh4MSAtIHgwKSAqICh4MSAtIHgwKSAtIHIgKiByO1xuICAgICAgICAgICAgLy/mlrnnqIvmsYLop6NcbiAgICAgICAgICAgIGxldCBzb2x1dGlvblgxID0geDE7XG4gICAgICAgICAgICBsZXQgc29sdXRpb25ZMSA9ICgtQiArIE1hdGguc3FydChCICogQiAtIDQgKiBBICogQykpIC8gKDIgKiBBKTtcbiAgICAgICAgICAgIGxldCBzb2x1dGlvblgyID0geDE7XG4gICAgICAgICAgICBsZXQgc29sdXRpb25ZMiA9ICgtQiAtIE1hdGguc3FydChCICogQiAtIDQgKiBBICogQykpIC8gKDIgKiBBKTtcblxuICAgICAgICAgICAgdGFyZ2V0MSA9IG5ldyBWZWMzKHNvbHV0aW9uWDEsIDAsIHNvbHV0aW9uWTEpO1xuICAgICAgICAgICAgdGFyZ2V0MiA9IG5ldyBWZWMzKHNvbHV0aW9uWDIsIDAsIHNvbHV0aW9uWTIpO1xuICAgICAgICB9IGVsc2UgaWYgKHBvaW50MS56ID09IHBvaW50Mi56KSB7XG4gICAgICAgICAgICAvLyDmlrnnqIvkuLogeSA9IHBvaW50MS56XG4gICAgICAgICAgICAvL+iBlOeri+aWueeoi+eahOW+l1xuICAgICAgICAgICAgbGV0IEEgPSAxO1xuICAgICAgICAgICAgbGV0IEIgPSAtMiAqIHgwO1xuICAgICAgICAgICAgbGV0IEMgPSB4MCAqIHgwICsgKHkxIC0geTApICogKHkxIC0geTApIC0gciAqIHI7XG4gICAgICAgICAgICAvL+aWueeoi+axguino1xuICAgICAgICAgICAgbGV0IHNvbHV0aW9uWDEgPSAoLUIgKyBNYXRoLnNxcnQoQiAqIEIgLSA0ICogQSAqIEMpKSAvICgyICogQSk7XG4gICAgICAgICAgICBsZXQgc29sdXRpb25ZMSA9IHkxO1xuICAgICAgICAgICAgbGV0IHNvbHV0aW9uWDIgPSAoLUIgLSBNYXRoLnNxcnQoQiAqIEIgLSA0ICogQSAqIEMpKSAvICgyICogQSk7XG4gICAgICAgICAgICBsZXQgc29sdXRpb25ZMiA9IHkxO1xuXG4gICAgICAgICAgICB0YXJnZXQxID0gbmV3IFZlYzMoc29sdXRpb25YMSwgMCwgc29sdXRpb25ZMSk7XG4gICAgICAgICAgICB0YXJnZXQyID0gbmV3IFZlYzMoc29sdXRpb25YMiwgMCwgc29sdXRpb25ZMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDmlrnnqIvkuLogeSA9ICgocG9pbnQyLnogLSBwb2ludDEueikgLyAocG9pbnQyLnggLSBwb2ludDEueCkpICogeCArIChwb2ludDEueiAtKChwaW9pbnQxLnggKiAocG9pbnQyLnogLSBwb2ludDEueikgLyAocG9pbnQyLnggLSBwb2ludDEueCkpKSlcbiAgICAgICAgICAgIC8vIHkgPSBreCtiO1xuICAgICAgICAgICAgLy8geSA9ICgoeTIteTEpLyh4Mi14MSkpKngrKHkxLSh4MSooeTIteTEpLyh4Mi14MSkpKVxuICAgICAgICAgICAgbGV0IGsgPSAoeTIgLSB5MSkgLyAoeDIgLSB4MSk7XG4gICAgICAgICAgICBsZXQgYiA9ICh5MSAtICh4MSAqICh5MiAtIHkxKSAvICh4MiAtIHgxKSkpO1xuXG4gICAgICAgICAgICAvL+iBlOeri+aWueeoi+W+l1xuICAgICAgICAgICAgbGV0IEEgPSAoMSArIGsgKiBrKTtcbiAgICAgICAgICAgIGxldCBCID0gKDIgKiBrICogYiAtIDIgKiB5MCAqIGsgLSAyICogeDApO1xuICAgICAgICAgICAgbGV0IEMgPSAoYiAqIGIgLSAyICogeTAgKiBiICsgeDAgKiB4MCArIHkwICogeTAgLSByICogcik7XG5cbiAgICAgICAgICAgIC8v5pa556iL5rGC6KejXG4gICAgICAgICAgICBsZXQgc29sdXRpb25YMSA9ICgtQiArIE1hdGguc3FydChCICogQiAtIDQgKiBBICogQykpIC8gKDIgKiBBKTtcbiAgICAgICAgICAgIGxldCBzb2x1dGlvblkxID0gayAqIHNvbHV0aW9uWDEgKyBiO1xuICAgICAgICAgICAgbGV0IHNvbHV0aW9uWDIgPSAoLUIgLSBNYXRoLnNxcnQoQiAqIEIgLSA0ICogQSAqIEMpKSAvICgyICogQSk7XG4gICAgICAgICAgICBsZXQgc29sdXRpb25ZMiA9IGsgKiBzb2x1dGlvblgyICsgYjtcblxuICAgICAgICAgICAgdGFyZ2V0MSA9IG5ldyBWZWMzKHNvbHV0aW9uWDEsIDAsIHNvbHV0aW9uWTEpO1xuICAgICAgICAgICAgdGFyZ2V0MiA9IG5ldyBWZWMzKHNvbHV0aW9uWDIsIDAsIHNvbHV0aW9uWTIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5TcGhlcmUuc2V0V29ybGRQb3NpdGlvbih0YXJnZXQxKTtcbiAgICAgICAgdGhpcy5TcGhlcmUyLnNldFdvcmxkUG9zaXRpb24odGFyZ2V0Mik7XG4gICAgICAgIGlmIChWZWMzLmRpc3RhbmNlKHRoaXMuY2VudGVyLndvcmxkUG9zaXRpb24sIHRhcmdldDEpIDwgVmVjMy5kaXN0YW5jZSh0aGlzLmNlbnRlci53b3JsZFBvc2l0aW9uLCB0YXJnZXQyKSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEhpdCgpIHtcbiAgICAgICAgaWYgKEdhbWVTY2VuZU1hbmFnZXIuSS5ub3dQbGF5ZXJUeXBlICE9IHRoaXMucGxheWVyVHlwZSkgcmV0dXJuO1xuICAgICAgICAvL+WBnOatouiuoeaXtlxuICAgICAgICBHYW1lU2NlbmVVSS5JLkVuZFJlY2tvblRpbWUoKTtcbiAgICAgICAgaWYgKEdhbWVTY2VuZU1hbmFnZXIuSS5QbGF5ZXJzW0dhbWVTY2VuZU1hbmFnZXIuSS5ub3dQbGF5ZXJUeXBlXS5Jc0hpdEJhbGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pys5Zue5ZCI546p5a62XCIsIEdhbWVTY2VuZU1hbmFnZXIuSS5ub3dQbGF5ZXJUeXBlLCBcIuW3sue7j+WHu+aJk+i/h+eQg+S6hu+8jOivt+etieW+heS4i+S4gOWbnuWQiFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoR2FtZVNjZW5lTWFuYWdlci5JLlBsYXllcnNbR2FtZVNjZW5lTWFuYWdlci5JLm5vd1BsYXllclR5cGVdLklzRnJlZUJhbGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pys5Zue5ZCI546p5a62XCIsIEdhbWVTY2VuZU1hbmFnZXIuSS5ub3dQbGF5ZXJUeXBlLCBcIuacieiHqueUseeQg+adg++8jOeOsOW3sue7j+aJk+i/h+eQg+S6hu+8jOmHjee9ruiHqueUseeQg+adg++8jOW5tuWFs+mXreiHqueUseeQg+enu+WKqOinhOWumlwiKTtcbiAgICAgICAgICAgIGZpbmQoXCJDYW52YXMvQmFsbERyYWdcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBCYWxsTWFuYWdlci5JLkNsb3NlRnJlZUJhbGwoKTtcbiAgICAgICAgICAgIEdhbWVTY2VuZU1hbmFnZXIuSS5QbGF5ZXJzW0dhbWVTY2VuZU1hbmFnZXIuSS5ub3dQbGF5ZXJUeXBlXS5Jc0ZyZWVCYWxsID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLklzVXNlRnJlZUJhbGwgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmaW5kKFwiR3VuL0N5bGluZGVyXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBmaW5kKFwiTGluZVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZmluZChcIkNhbnZhcy9HdW5EcmFnMlwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgUGxheWVyQ29udHJvbGxlci5JLnNsaWRlci5lbmFibGVkID0gZmFsc2U7XG5cbiAgICAgICAgU291cmNlTWFuYWdlci5JLkd1bjJCYWxsKCk7XG4gICAgICAgIGxldCBmb3JjZSA9IDEwMCArIE1hdGgucmFuZG9tKCkgKiAyMDA7XG4gICAgICAgIEJhbGxNYW5hZ2VyLkkuV2hpdGVCYWxsLmdldENvbXBvbmVudChSaWdpZEJvZHkpLmFwcGx5SW1wdWxzZShuZXcgVmVjMyhHYW1lU2NlbmVNYW5hZ2VyLkkuUGxheWVyc1tHYW1lU2NlbmVNYW5hZ2VyLkkubm93UGxheWVyVHlwZV0uRm9yY2VEaXJlY3Rpb24ueCAqIGZvcmNlLCAwLCBHYW1lU2NlbmVNYW5hZ2VyLkkuUGxheWVyc1tHYW1lU2NlbmVNYW5hZ2VyLkkubm93UGxheWVyVHlwZV0uRm9yY2VEaXJlY3Rpb24ueiAqIGZvcmNlKSk7XG4gICAgICAgIEdhbWVTY2VuZU1hbmFnZXIuSS5QbGF5ZXJzW0dhbWVTY2VuZU1hbmFnZXIuSS5ub3dQbGF5ZXJUeXBlXS5Jc1N0YXJ0Rm9sbG93ID0gZmFsc2U7XG4gICAgICAgIEJhbGxNYW5hZ2VyLkkuaXNBbGxCYWxsU3RvcCA9IGZhbHNlO1xuICAgICAgICBHYW1lU2NlbmVNYW5hZ2VyLkkuUGxheWVyc1tHYW1lU2NlbmVNYW5hZ2VyLkkubm93UGxheWVyVHlwZV0uSXNIaXRCYWxsID0gdHJ1ZTtcbiAgICAgICAgLy/ph43nva7nmb3nkIPnrKzkuIDkuKrnorDliLDnmoTnkIPnmoTkv6Hmga9cbiAgICAgICAgQmFsbE1hbmFnZXIuSS5SZXNldFdoaXRlQmFsbEZpcnN0VG91Y2hCYWxsVmFsdWUoKVxuICAgIH1cbn0iXX0=