System.register(["cc", "code-quality:cr", "../../Algorithm/MathAlgorithm.js", "../GameSceneManager.js", "./BallManager.js", "./MyLine.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Vec3, PhysicsSystem, geometry, MathAlgorithm, GameSceneManager, BallManager, MyLine, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, Ray, PosFlower;

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

  function _reportPossibleCrUseOfBallManager(extras) {
    _reporterNs.report("BallManager", "./BallManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMyLine(extras) {
    _reporterNs.report("MyLine", "./MyLine", _context.meta, extras);
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
      PhysicsSystem = _cc.PhysicsSystem;
      geometry = _cc.geometry;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_AlgorithmMathAlgorithmJs) {
      MathAlgorithm = _AlgorithmMathAlgorithmJs.MathAlgorithm;
    }, function (_GameSceneManagerJs) {
      GameSceneManager = _GameSceneManagerJs.GameSceneManager;
    }, function (_BallManagerJs) {
      BallManager = _BallManagerJs.BallManager;
    }, function (_MyLineJs) {
      MyLine = _MyLineJs.MyLine;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "5e08b1jC3ZKOpJtAMePtPKU", "FollowWhiteBall", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;
      Ray = geometry.ray;

      _export("PosFlower", PosFlower = (_dec = ccclass('PosFlower'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(PosFlower, _Component);

        function PosFlower() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, PosFlower);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PosFlower)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "gan", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "TargetBall", _descriptor2, _assertThisInitialized(_this));

          _this.TargetBallCenter = null;
          _this.TargetBallLeft = null;
          _this.TargetBallRight = null;
          _this.TargetBallFront = null;
          _this.ganPos = null;
          _this.center = null;
          _this.left = null;
          _this.right = null;
          _this.r = 11.42;
          _this.istable = false;
          return _this;
        }

        _createClass(PosFlower, [{
          key: "start",
          value: function start() {
            this.ganPos = this.node.getChildByName("ganPos");
            this.center = this.node.getChildByName("Center");
            this.left = this.node.getChildByName("Left");
            this.right = this.node.getChildByName("Right");
            this.TargetBallLeft = this.TargetBall.getChildByName("left");
            this.TargetBallRight = this.TargetBall.getChildByName("right");
            this.TargetBallFront = this.TargetBall.getChildByName("front");
            this.TargetBallCenter = this.TargetBall.getChildByName("center");
          }
        }, {
          key: "update",
          value: function update() {
            this.GunFollowAndRotat();
            this.TargetBall.active = this.gan.children[0].active;
            this.DrawLine();
          }
          /**
          * 球杆跟随球及旋转运动
          */

        }, {
          key: "GunFollowAndRotat",
          value: function GunFollowAndRotat() {
            // if (!GameSceneManager.IsStartFollow) return
            var outpos = new Vec3(0, 0, 0);
            Vec3.lerp(outpos, this.node.worldPosition, (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.WhiteBall.worldPosition, 0.1);
            this.node.worldPosition = outpos;
            var GunOutPos = new Vec3(0, 0, 0);
            Vec3.lerp(GunOutPos, this.gan.worldPosition, this.ganPos.worldPosition, 0.1);
            this.gan.worldPosition = GunOutPos;
            this.gan.lookAt(this.center.worldPosition);
            (_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.Players[(_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.nowPlayerType].ForceDirection = (_crd && MathAlgorithm === void 0 ? (_reportPossibleCrUseOfMathAlgorithm({
              error: Error()
            }), MathAlgorithm) : MathAlgorithm).DirectionOfForce(this.ganPos.worldPosition, this.node.worldPosition);
          }
        }, {
          key: "DrawLine",

          /**画辅助线 */
          value: function DrawLine() {
            var point0 = this.CreateRayJudgeNearestBall();
            this.TargetBall.lookAt(point0);
            var targetPos = this.CreateTargetPos(point0);
            if (!targetPos) return;
            this.TargetBall.worldPosition = new Vec3(targetPos.x, 5.71, targetPos.z);

            if (!this.istable) {
              if (this.target) {
                var d1 = new Vec3(this.TargetBallLeft.worldPosition.x - this.TargetBall.worldPosition.x, 0, this.TargetBallLeft.worldPosition.z - this.TargetBall.worldPosition.z);
                var d2 = new Vec3(this.TargetBallRight.worldPosition.x - this.TargetBall.worldPosition.x, 0, this.TargetBallRight.worldPosition.z - this.TargetBall.worldPosition.z);
                var d3 = new Vec3((_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.WhiteBall.worldPosition.x - this.TargetBallCenter.worldPosition.x, 0, (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.WhiteBall.worldPosition.z - this.TargetBallCenter.worldPosition.z);
                var langle = 180 / Math.PI * Vec3.angle(d1, d3);
                var rangle = 180 / Math.PI * Vec3.angle(d2, d3);
                var lerp1 = 1 - langle / 180;
                var lerp2 = 1 - rangle / 180;

                if (langle > rangle) {
                  this.TargetBallLeft.active = true;
                  this.TargetBallRight.active = false;
                  this.TargetBallFront.setScale(1, 1, 0.5 + lerp1);
                } else {
                  this.TargetBallLeft.active = false;
                  this.TargetBallRight.active = true;
                  this.TargetBallFront.setScale(1, 1, 0.5 + lerp2);
                }

                this.TargetBallLeft.setScale(0.5 - lerp1, 1, 1);
                this.TargetBallRight.setScale(0.5 - lerp2, 1, 1); // console.log("左:", lerp1, "\t右:", lerp2);
              }
            }

            (_crd && MyLine === void 0 ? (_reportPossibleCrUseOfMyLine({
              error: Error()
            }), MyLine) : MyLine).I.DrawLine((_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.WhiteBall.worldPosition, targetPos);
          }
          /**创建射线 判断那个球是距离白球最近的球（白球会优先碰到哪个球） */

        }, {
          key: "CreateRayJudgeNearestBall",
          value: function CreateRayJudgeNearestBall() {
            this.target = null;
            var dir = new Vec3(this.center.worldPosition.x - this.ganPos.worldPosition.x, 0, this.center.worldPosition.z - this.ganPos.worldPosition.z); // console.log("方向为", dir);

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
              centerhitPoint = new Vec3(PhysicsSystem.instance.raycastClosestResult.hitPoint.x, PhysicsSystem.instance.raycastClosestResult.hitPoint.y, PhysicsSystem.instance.raycastClosestResult.hitPoint.z); // console.log(PhysicsSystem.instance.raycastClosestResult.hitPoint);

              var name = centercollider.node.name; // console.log("中心射线所照射到的物体名称为：", name);
            }

            if (PhysicsSystem.instance.raycastClosest(rayLeft, 1)) {
              leftcollider = PhysicsSystem.instance.raycastClosestResult.collider;
              lefthitPoint = new Vec3(PhysicsSystem.instance.raycastClosestResult.hitPoint.x, PhysicsSystem.instance.raycastClosestResult.hitPoint.y, PhysicsSystem.instance.raycastClosestResult.hitPoint.z); // console.log(PhysicsSystem.instance.raycastClosestResult.hitPoint);

              var _name = leftcollider.node.name; // console.log("左侧射线所照射到的物体名称为：", name);
            }

            if (PhysicsSystem.instance.raycastClosest(rayRight, 1)) {
              rightcollider = PhysicsSystem.instance.raycastClosestResult.collider;
              righthitPoint = new Vec3(PhysicsSystem.instance.raycastClosestResult.hitPoint.x, PhysicsSystem.instance.raycastClosestResult.hitPoint.y, PhysicsSystem.instance.raycastClosestResult.hitPoint.z); // console.log(PhysicsSystem.instance.raycastClosestResult.hitPoint);
              // let name = rightcollider.node.name;
              // console.log("右侧射线所照射到的物体名称为：", name);
            }

            if (!centerhitPoint || !lefthitPoint || !righthitPoint) return;
            centerd = Vec3.distance(this.center.worldPosition, centerhitPoint);
            leftd = Vec3.distance(this.left.worldPosition, lefthitPoint);
            rightd = Vec3.distance(this.right.worldPosition, righthitPoint); // console.log(centerhitPoint, lefthitPoint, righthitPoint);

            var min = Math.min(centerd, leftd, rightd); // console.log(centerd, leftd, rightd);

            if (min == centerd) {
              // console.log("最小的是中心射线照射到的物体");
              var _name2 = centercollider.node.name;
              this.target = rightcollider.node; // console.log("中心射线所照射到的物体名称为：", name);

              if (_name2 == "Table" || _name2 == "dong" || _name2 == "well") {
                this.r = 2.852;
                this.istable = true;
                this.TargetBallFront.active = false;
                this.TargetBallLeft.active = false;
                this.TargetBallRight.active = false;
                return centerhitPoint;
              } else {
                this.r = 11.42;
                this.istable = false;
                this.TargetBallFront.active = true;
                this.TargetBallLeft.active = true;
                this.TargetBallRight.active = true;
                return centercollider.node.worldPosition;
              }
            } else if (min == leftd) {
              // console.log("最小的是左侧射线照射到的物体");
              var _name3 = leftcollider.node.name;
              this.target = rightcollider.node; // console.log("左侧射线所照射到的物体名称为：", name);

              if (_name3 == "Table" || _name3 == "dong" || _name3 == "well") {
                this.r = 2.852;
                this.istable = true;
                this.TargetBallFront.active = false;
                this.TargetBallLeft.active = false;
                this.TargetBallRight.active = false;
                return lefthitPoint;
              } else {
                this.r = 11.42;
                this.istable = false;
                this.TargetBallFront.active = true;
                this.TargetBallLeft.active = true;
                this.TargetBallRight.active = true;
                return leftcollider.node.worldPosition;
              }
            } else if (min == rightd) {
              // console.log("最小的是右侧射线照射到的物体");
              var _name4 = rightcollider.node.name;
              this.target = rightcollider.node; // console.log("右侧射线所照射到的物体名称为：", name);

              if (_name4 == "Table" || _name4 == "dong" || _name4 == "well") {
                this.r = 5.71;
                this.istable = true;
                this.TargetBallFront.active = false;
                this.TargetBallLeft.active = false;
                this.TargetBallRight.active = false;
                return righthitPoint;
              } else {
                this.r = 11.42;
                this.istable = false;
                this.TargetBallFront.active = true;
                this.TargetBallLeft.active = true;
                this.TargetBallRight.active = true;
                return rightcollider.node.worldPosition;
              }
            }
          }
        }, {
          key: "CreateTargetPos",
          value: function CreateTargetPos(point0) {
            //圆方程
            // (x-x0)^2 + (y-y0)^2 = r^2
            if (!point0) return;
            var x0 = point0.x;
            var y0 = point0.z;
            var r = 11.42; //直线方程

            var point1 = this.center.worldPosition;
            var point2 = this.ganPos.worldPosition;
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

            if (Vec3.distance(this.center.worldPosition, target1) < Vec3.distance(this.center.worldPosition, target2)) {
              return target1;
            } else {
              return target2;
            }
          } // /**计算击球点对于目标球的位置 */
          // CalculateTheLocationOfTheTarget(target: Vec3, r: number): Vec3 {
          //     //直线方程 y = kx + j;
          //     //圆方程 (x-a)^2 +(y-b)^2 = r^2
          //     //圆方程 (x^2+a^2-2ax) +(y^2+b^2-2by) = r^2
          //     //圆方程 x^2 + y^2 -2ax - 2by + b^2 + a^2 -r^2 =0 
          //     //圆方程 x^2+y^2+Ax+By+C = 0;
          //     //方程联立得： x^2+(kx+j)^2+Ax+kBx+Bj+C=0
          //     //方程联立得： x^2+(kx^2+j^2+kjx)+Ax+kBx+Bj+C=0
          //     //方程联立得： (k+1)x^2+j^2+(kj+kB+A)x+Bj+C=0
          //     //方程联立得： (k+1)x^2+(kj+kB+A)x+j^2+Bj+C=0
          //     // ganPos
          //     // center
          //     // Ax+BY+C = 
          //     // Y = -A/B x - C/B
          //     if ((this.ganPos.worldPosition.x - this.center.worldPosition.x) == 0) {
          //         //(y-b)^2 = r^2 - (x-a)^2
          //         let y1 = Math.sqrt(r * r - (this.ganPos.worldPosition.x - target.x) * (this.ganPos.worldPosition.x - target.x)) + target.z;
          //         let y2 = -Math.sqrt(r * r - (this.ganPos.worldPosition.x - target.x) * (this.ganPos.worldPosition.x - target.x)) + target.z;
          //         let target1 = new Vec3(this.ganPos.worldPosition.x, 0, y1)
          //         let target2 = new Vec3(this.ganPos.worldPosition.x, 0, y2)
          //         if (Vec3.distance(target1, this.whiteBall.worldPosition) < Vec3.distance(target2, this.whiteBall.worldPosition)) {
          //             console.log("target1:", target1);
          //             return target1;
          //         }
          //         console.log("target2:", target2);
          //         return target2;
          //     }
          //     let k = -(this.center.worldPosition.z - this.ganPos.worldPosition.z) / (this.ganPos.worldPosition.x - this.center.worldPosition.x)
          //     let j = - (this.center.worldPosition.x * this.ganPos.worldPosition.z - this.ganPos.worldPosition.x * this.center.worldPosition.z) / (this.ganPos.worldPosition.x - this.center.worldPosition.x)
          //     let A = -2 * (target.x);
          //     let B = -2 * (target.z);
          //     let C = (target.x) * (target.x) + (target.z) * (target.z) - r * r;
          //     let a = (k + 1);
          //     let b = (k * j + k * B + A);
          //     let c = j * j + B * j + C;
          //     let x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / 2 * a;
          //     let x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / 2 * a;
          //     let target1 = new Vec3(x1, 0, k * x1 + j)
          //     let target2 = new Vec3(x2, 0, k * x1 + j)
          //     if (Vec3.distance(target1, this.whiteBall.worldPosition) < Vec3.distance(target2, this.whiteBall.worldPosition)) {
          //         console.log("target3:", target1);
          //         return target1;
          //     }
          //     console.log("target4:", target2);
          //     return target2;
          // }
          // Test(startpos: Vec3, lineTarget1: Vec3, lineTarget2: Vec3, circularTarget: Vec3, r: number) {
          //     let outTarget1: Vec3;
          //     let outTarget2: Vec3;
          //     lineTarget1 = this.ganPos.worldPosition;
          //     lineTarget2 = this.center.worldPosition;
          //     let x1 = lineTarget1.x;
          //     let y1 = lineTarget1.z;
          //     let x2 = lineTarget2.x;
          //     let y2 = lineTarget2.z;
          //     if (x2 - x1 != 0 && y2 - y1 != 0) {
          //         let lineA = (x2 - x1);
          //         let lineB = (y1 - y2);
          //         let lineC = (x1 * y2 - y1 * x2);
          //         let linek = -lineB / lineA;
          //         let lineb = startpos.z - startpos.x * linek;
          //         let circularA = -2 * circularTarget.x;
          //         let circularB = -2 * circularTarget.z;
          //         let circularC = circularTarget.x * circularTarget.x + circularTarget.z * circularTarget.z - r * r;
          //         let a = (linek * linek + 1);
          //         let b = (2 * linek * lineb + circularA + circularB * linek);
          //         let c = (lineb * lineb + circularB * lineb + circularC);
          //         let outx1 = (-b + Math.sqrt(b * b - 4 * a * c)) / 2 * a;
          //         let outx2 = (-b - Math.sqrt(b * b - 4 * a * c)) / 2 * a;
          //         let outy1 = linek * x1 + lineb;
          //         let outy2 = linek * x2 + lineb;
          //         outTarget1 = new Vec3(outx1, 5.71, outy1);
          //         outTarget2 = new Vec3(outx2, 5.71, outy2);
          //     } else if (x2 == x1) {
          //         let outy1 = circularTarget.z + Math.sqrt((r * r) - ((x1 - circularTarget.x) * (x1 - circularTarget.x)))
          //         let outy2 = circularTarget.z - Math.sqrt((r * r) - ((x1 - circularTarget.x) * (x1 - circularTarget.x)))
          //         outTarget1 = new Vec3(x1, 5.71, outy1);
          //         outTarget2 = new Vec3(x1, 5.71, outy2);
          //     } else if (y1 == y2) {
          //         let outx1 = circularTarget.x + Math.sqrt((r * r) - ((y1 - circularTarget.z) * (y1 - circularTarget.z)))
          //         let outx2 = circularTarget.x - Math.sqrt((r * r) - ((y1 - circularTarget.z) * (y1 - circularTarget.z)))
          //         outTarget1 = new Vec3(outx1, 5.71, y1);
          //         outTarget2 = new Vec3(outx2, 5.71, y1);
          //     }
          //     if (Vec3.distance(outTarget1, this.whiteBall.worldPosition) < Vec3.distance(outTarget2, this.whiteBall.worldPosition)) {
          //         return outTarget1;
          //     }
          //     return outTarget2;
          // }
          // Test2(startpos: Vec3, target: Vec3, r: number) {
          //     let k;
          //     if (this.ganPos.worldPosition.x == this.center.worldPosition.x) {
          //         console.log("斜率不存在");
          //     } else {
          //         k = (this.ganPos.worldPosition.z - this.center.worldPosition.z) / (this.ganPos.worldPosition.x - this.center.worldPosition.x);
          //     }
          //     let lineb = startpos.z - k * startpos.x;
          //     let a = k * k + 1;
          //     let b = -2 * target.x - 2 * k * (lineb - target.z);
          //     let c = (target.x * target.x + (lineb - target.z) * (lineb - target.z) - r * r);
          //     let x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
          //     let x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
          //     let y1 = k * x1 + lineb;
          //     let y2 = k * x2 + lineb;
          //     let out1 = new Vec3(x1, 5.71, y1);
          //     let out2 = new Vec3(x2, 5.71, y2);
          //     let out = Vec3.distance(out1, this.whiteBall.worldPosition) < Vec3.distance(out2, this.whiteBall.worldPosition) ? out1 : out2;
          //     return out;
          // }

        }]);

        return PosFlower;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gan", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "TargetBall", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class)); // let dir = new Vec3(this.center.worldPosition.x - this.ganPos.worldPosition.x, this.center.worldPosition.y - this.ganPos.worldPosition.y, this.center.worldPosition.z - this.ganPos.worldPosition.z);
      // let rayCenter = new Ray(this.center.worldPosition.x, this.center.worldPosition.y, this.center.worldPosition.z, dir.x, 0, dir.z);
      // let rayLeft = new Ray(this.left.worldPosition.x, this.left.worldPosition.y, this.left.worldPosition.z, dir.x, 0, dir.z);
      // let rayRight = new Ray(this.right.worldPosition.x, this.right.worldPosition.y, this.right.worldPosition.z, dir.x, 0, dir.z);
      // let targetCenter: Vec3;
      // let targetLeft: Vec3;
      // let targetRight: Vec3;
      // let start: Node;
      // let target: Vec3;
      // let discenter = 999;
      // let disleft = 999;
      // let disright = 999;
      // if (PhysicsSystem.instance.raycastClosest(rayCenter)) {
      //     targetCenter = PhysicsSystem.instance.raycastClosestResult.hitPoint;
      //     discenter = Vec3.distance(this.center.worldPosition, PhysicsSystem.instance.raycastClosestResult.hitPoint);
      // }
      // if (PhysicsSystem.instance.raycastClosest(rayLeft)) {
      //     targetLeft = PhysicsSystem.instance.raycastClosestResult.hitPoint;
      //     disleft = Vec3.distance(this.left.worldPosition, PhysicsSystem.instance.raycastClosestResult.hitPoint)
      // }
      // if (PhysicsSystem.instance.raycastClosest(rayRight)) {
      //      targetRight = PhysicsSystem.instance.raycastClosestResult.hitPoint;
      //     disright = Vec3.distance(this.right.worldPosition, PhysicsSystem.instance.raycastClosestResult.hitPoint)
      // }
      // if (disright < disleft && disright < discenter) {
      //     start = this.right;
      //     target = targetRight;
      // } else if (disleft < discenter && disleft < disright) {
      //     start = this.left;
      //     target = targetLeft;
      // } else if (discenter < disleft && discenter < disright) {
      //     start = this.center;
      //     target = targetCenter;
      // } else {
      //     target = null;
      // }
      // if (target) {
      //     // if (target.layer == 1) {
      //     //     targetpos = PhysicsSystem.instance.raycastClosestResult.hitPoint;
      //     // } else
      //     //     if (target.layer == 2) {
      //     // targetpos = this.Test(start.worldPosition, this.ganPos.worldPosition, this.center.worldPosition, target.worldPosition, 11.42)
      //     // let targetpos = this.Test2(start.worldPosition, target.worldPosition, 11.42);
      //     // }
      //     MyLine.I.DrawLine(BallManager.I.WhiteBall.worldPosition, target);
      // }


      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0dhbWUvR2FtZUNvbW1vbi9CYWxsL0ZvbGxvd1doaXRlQmFsbC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlZlYzMiLCJQaHlzaWNzU3lzdGVtIiwiZ2VvbWV0cnkiLCJNYXRoQWxnb3JpdGhtIiwiR2FtZVNjZW5lTWFuYWdlciIsIkJhbGxNYW5hZ2VyIiwiTXlMaW5lIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiUmF5IiwicmF5IiwiUG9zRmxvd2VyIiwiVGFyZ2V0QmFsbENlbnRlciIsIlRhcmdldEJhbGxMZWZ0IiwiVGFyZ2V0QmFsbFJpZ2h0IiwiVGFyZ2V0QmFsbEZyb250IiwiZ2FuUG9zIiwiY2VudGVyIiwibGVmdCIsInJpZ2h0IiwiciIsImlzdGFibGUiLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJUYXJnZXRCYWxsIiwiR3VuRm9sbG93QW5kUm90YXQiLCJhY3RpdmUiLCJnYW4iLCJjaGlsZHJlbiIsIkRyYXdMaW5lIiwib3V0cG9zIiwibGVycCIsIndvcmxkUG9zaXRpb24iLCJJIiwiV2hpdGVCYWxsIiwiR3VuT3V0UG9zIiwibG9va0F0IiwiUGxheWVycyIsIm5vd1BsYXllclR5cGUiLCJGb3JjZURpcmVjdGlvbiIsIkRpcmVjdGlvbk9mRm9yY2UiLCJwb2ludDAiLCJDcmVhdGVSYXlKdWRnZU5lYXJlc3RCYWxsIiwidGFyZ2V0UG9zIiwiQ3JlYXRlVGFyZ2V0UG9zIiwieCIsInoiLCJ0YXJnZXQiLCJkMSIsImQyIiwiZDMiLCJsYW5nbGUiLCJNYXRoIiwiUEkiLCJhbmdsZSIsInJhbmdsZSIsImxlcnAxIiwibGVycDIiLCJzZXRTY2FsZSIsImRpciIsInJheUNlbnRlciIsInkiLCJyYXlMZWZ0IiwicmF5UmlnaHQiLCJjZW50ZXJkIiwibGVmdGQiLCJyaWdodGQiLCJjZW50ZXJjb2xsaWRlciIsImxlZnRjb2xsaWRlciIsInJpZ2h0Y29sbGlkZXIiLCJjZW50ZXJoaXRQb2ludCIsImxlZnRoaXRQb2ludCIsInJpZ2h0aGl0UG9pbnQiLCJpbnN0YW5jZSIsInJheWNhc3RDbG9zZXN0IiwicmF5Y2FzdENsb3Nlc3RSZXN1bHQiLCJjb2xsaWRlciIsImhpdFBvaW50IiwibmFtZSIsImRpc3RhbmNlIiwibWluIiwieDAiLCJ5MCIsInBvaW50MSIsInBvaW50MiIsIngxIiwieTEiLCJ4MiIsInkyIiwidGFyZ2V0MSIsInRhcmdldDIiLCJBIiwiQiIsIkMiLCJzb2x1dGlvblgxIiwic29sdXRpb25ZMSIsInNxcnQiLCJzb2x1dGlvblgyIiwic29sdXRpb25ZMiIsImsiLCJiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxJLE9BQUFBLEk7QUFBVUMsTUFBQUEsYSxPQUFBQSxhO0FBQXVCQyxNQUFBQSxRLE9BQUFBLFE7Ozs7QUFDOURDLE1BQUFBLGEsNkJBQUFBLGE7O0FBQ0FDLE1BQUFBLGdCLHVCQUFBQSxnQjs7QUFDQUMsTUFBQUEsVyxrQkFBQUEsVzs7QUFDQUMsTUFBQUEsTSxhQUFBQSxNOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQlYsVSxDQUF0QlUsTztBQUFTQyxNQUFBQSxRLEdBQWFYLFUsQ0FBYlcsUTtBQUNKQyxNQUFBQSxHLEdBQVFQLFEsQ0FBYlEsRzs7MkJBR0tDLFMsV0FEWkosT0FBTyxDQUFDLFdBQUQsQyxVQUVIQyxRQUFRLENBQUNULElBQUQsQyxVQUVSUyxRQUFRLENBQUNULElBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBRURhLGdCLEdBQXlCLEk7Z0JBQ3pCQyxjLEdBQXVCLEk7Z0JBQ3ZCQyxlLEdBQXdCLEk7Z0JBQ3hC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QUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFZlYzMsIHYzLCBQaHlzaWNzU3lzdGVtLCBDYW1lcmEsIGdlb21ldHJ5LCBQaHlzaWNzUmF5UmVzdWx0LCBNYXNrLCBXb3JsZE5vZGUzRFRvTG9jYWxOb2RlVUksIGxvZywgQ29sbGlkZXIsIHNhbXBsZUFuaW1hdGlvbkN1cnZlLCByYW5kb21SYW5nZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IE1hdGhBbGdvcml0aG0gfSBmcm9tICcuLi8uLi9BbGdvcml0aG0vTWF0aEFsZ29yaXRobSc7XG5pbXBvcnQgeyBHYW1lU2NlbmVNYW5hZ2VyIH0gZnJvbSAnLi4vR2FtZVNjZW5lTWFuYWdlcic7XG5pbXBvcnQgeyBCYWxsTWFuYWdlciB9IGZyb20gJy4vQmFsbE1hbmFnZXInO1xuaW1wb3J0IHsgTXlMaW5lIH0gZnJvbSAnLi9NeUxpbmUnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcbmNvbnN0IHsgcmF5OiBSYXkgfSA9IGdlb21ldHJ5O1xuXG5AY2NjbGFzcygnUG9zRmxvd2VyJylcbmV4cG9ydCBjbGFzcyBQb3NGbG93ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShOb2RlKVxuICAgIHByaXZhdGUgZ2FuOiBOb2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoTm9kZSlcbiAgICBwcml2YXRlIFRhcmdldEJhbGw6IE5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgVGFyZ2V0QmFsbENlbnRlcjogTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBUYXJnZXRCYWxsTGVmdDogTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBUYXJnZXRCYWxsUmlnaHQ6IE5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgVGFyZ2V0QmFsbEZyb250OiBOb2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgZ2FuUG9zOiBOb2RlID0gbnVsbDtcbiAgICBwcml2YXRlIGNlbnRlcjogTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGxlZnQ6IE5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgcmlnaHQ6IE5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSByOiBudW1iZXIgPSAxMS40MjtcblxuICAgIHByaXZhdGUgaXN0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZ2FuUG9zID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZ2FuUG9zXCIpIGFzIE5vZGU7XG4gICAgICAgIHRoaXMuY2VudGVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ2VudGVyXCIpIGFzIE5vZGU7XG4gICAgICAgIHRoaXMubGVmdCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkxlZnRcIikgYXMgTm9kZTtcbiAgICAgICAgdGhpcy5yaWdodCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlJpZ2h0XCIpIGFzIE5vZGU7XG4gICAgICAgIHRoaXMuVGFyZ2V0QmFsbExlZnQgPSB0aGlzLlRhcmdldEJhbGwuZ2V0Q2hpbGRCeU5hbWUoXCJsZWZ0XCIpO1xuICAgICAgICB0aGlzLlRhcmdldEJhbGxSaWdodCA9IHRoaXMuVGFyZ2V0QmFsbC5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0XCIpO1xuICAgICAgICB0aGlzLlRhcmdldEJhbGxGcm9udCA9IHRoaXMuVGFyZ2V0QmFsbC5nZXRDaGlsZEJ5TmFtZShcImZyb250XCIpO1xuICAgICAgICB0aGlzLlRhcmdldEJhbGxDZW50ZXIgPSB0aGlzLlRhcmdldEJhbGwuZ2V0Q2hpbGRCeU5hbWUoXCJjZW50ZXJcIik7XG5cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuR3VuRm9sbG93QW5kUm90YXQoKVxuICAgICAgICB0aGlzLlRhcmdldEJhbGwuYWN0aXZlID0gdGhpcy5nYW4uY2hpbGRyZW5bMF0uYWN0aXZlO1xuICAgICAgICB0aGlzLkRyYXdMaW5lKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICog55CD5p2G6Lef6ZqP55CD5Y+K5peL6L2s6L+Q5YqoXG4gICAgKi9cbiAgICBHdW5Gb2xsb3dBbmRSb3RhdCgpIHtcbiAgICAgICAgLy8gaWYgKCFHYW1lU2NlbmVNYW5hZ2VyLklzU3RhcnRGb2xsb3cpIHJldHVyblxuICAgICAgICBsZXQgb3V0cG9zOiBWZWMzID0gbmV3IFZlYzMoMCwgMCwgMCk7XG4gICAgICAgIFZlYzMubGVycChvdXRwb3MsIHRoaXMubm9kZS53b3JsZFBvc2l0aW9uLCBCYWxsTWFuYWdlci5JLldoaXRlQmFsbC53b3JsZFBvc2l0aW9uLCAwLjEpO1xuICAgICAgICB0aGlzLm5vZGUud29ybGRQb3NpdGlvbiA9IG91dHBvcztcbiAgICAgICAgbGV0IEd1bk91dFBvczogVmVjMyA9IG5ldyBWZWMzKDAsIDAsIDApO1xuICAgICAgICBWZWMzLmxlcnAoR3VuT3V0UG9zLCB0aGlzLmdhbi53b3JsZFBvc2l0aW9uLCB0aGlzLmdhblBvcy53b3JsZFBvc2l0aW9uLCAwLjEpO1xuICAgICAgICB0aGlzLmdhbi53b3JsZFBvc2l0aW9uID0gR3VuT3V0UG9zO1xuICAgICAgICB0aGlzLmdhbi5sb29rQXQodGhpcy5jZW50ZXIud29ybGRQb3NpdGlvbik7XG4gICAgICAgIEdhbWVTY2VuZU1hbmFnZXIuSS5QbGF5ZXJzW0dhbWVTY2VuZU1hbmFnZXIuSS5ub3dQbGF5ZXJUeXBlXS5Gb3JjZURpcmVjdGlvbiA9IE1hdGhBbGdvcml0aG0uRGlyZWN0aW9uT2ZGb3JjZSh0aGlzLmdhblBvcy53b3JsZFBvc2l0aW9uLCB0aGlzLm5vZGUud29ybGRQb3NpdGlvbik7XG4gICAgfVxuICAgIHRhcmdldDogTm9kZTtcbiAgICAvKirnlLvovoXliqnnur8gKi9cbiAgICBEcmF3TGluZSgpIHtcbiAgICAgICAgbGV0IHBvaW50MCA9IHRoaXMuQ3JlYXRlUmF5SnVkZ2VOZWFyZXN0QmFsbCgpO1xuICAgICAgICB0aGlzLlRhcmdldEJhbGwubG9va0F0KHBvaW50MCk7XG4gICAgICAgIGxldCB0YXJnZXRQb3M6IFZlYzMgPSB0aGlzLkNyZWF0ZVRhcmdldFBvcyhwb2ludDApO1xuICAgICAgICBpZiAoIXRhcmdldFBvcykgcmV0dXJuO1xuICAgICAgICB0aGlzLlRhcmdldEJhbGwud29ybGRQb3NpdGlvbiA9IG5ldyBWZWMzKHRhcmdldFBvcy54LCA1LjcxLCB0YXJnZXRQb3Mueik7XG4gICAgICAgIGlmICghdGhpcy5pc3RhYmxlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBsZXQgZDEgPSBuZXcgVmVjMyh0aGlzLlRhcmdldEJhbGxMZWZ0LndvcmxkUG9zaXRpb24ueCAtIHRoaXMuVGFyZ2V0QmFsbC53b3JsZFBvc2l0aW9uLngsIDAsIHRoaXMuVGFyZ2V0QmFsbExlZnQud29ybGRQb3NpdGlvbi56IC0gdGhpcy5UYXJnZXRCYWxsLndvcmxkUG9zaXRpb24ueik7XG4gICAgICAgICAgICAgICAgbGV0IGQyID0gbmV3IFZlYzModGhpcy5UYXJnZXRCYWxsUmlnaHQud29ybGRQb3NpdGlvbi54IC0gdGhpcy5UYXJnZXRCYWxsLndvcmxkUG9zaXRpb24ueCwgMCwgdGhpcy5UYXJnZXRCYWxsUmlnaHQud29ybGRQb3NpdGlvbi56IC0gdGhpcy5UYXJnZXRCYWxsLndvcmxkUG9zaXRpb24ueik7XG4gICAgICAgICAgICAgICAgbGV0IGQzID0gbmV3IFZlYzMoQmFsbE1hbmFnZXIuSS5XaGl0ZUJhbGwud29ybGRQb3NpdGlvbi54IC0gdGhpcy5UYXJnZXRCYWxsQ2VudGVyLndvcmxkUG9zaXRpb24ueCwgMCwgQmFsbE1hbmFnZXIuSS5XaGl0ZUJhbGwud29ybGRQb3NpdGlvbi56IC0gdGhpcy5UYXJnZXRCYWxsQ2VudGVyLndvcmxkUG9zaXRpb24ueik7XG4gICAgICAgICAgICAgICAgbGV0IGxhbmdsZSA9IDE4MCAvIE1hdGguUEkgKiBWZWMzLmFuZ2xlKGQxLCBkMyk7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmdsZSA9IDE4MCAvIE1hdGguUEkgKiBWZWMzLmFuZ2xlKGQyLCBkMyk7XG4gICAgICAgICAgICAgICAgbGV0IGxlcnAxID0gMSAtIGxhbmdsZSAvIDE4MDtcbiAgICAgICAgICAgICAgICBsZXQgbGVycDIgPSAxIC0gcmFuZ2xlIC8gMTgwO1xuICAgICAgICAgICAgICAgIGlmIChsYW5nbGUgPiByYW5nbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5UYXJnZXRCYWxsTGVmdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlRhcmdldEJhbGxSaWdodC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5UYXJnZXRCYWxsRnJvbnQuc2V0U2NhbGUoMSwgMSwgMC41ICsgbGVycDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVGFyZ2V0QmFsbExlZnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVGFyZ2V0QmFsbFJpZ2h0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVGFyZ2V0QmFsbEZyb250LnNldFNjYWxlKDEsIDEsIDAuNSArIGxlcnAyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLlRhcmdldEJhbGxMZWZ0LnNldFNjYWxlKDAuNSAtIGxlcnAxLCAxLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLlRhcmdldEJhbGxSaWdodC5zZXRTY2FsZSgwLjUgLSBsZXJwMiwgMSwgMSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlt6Y6XCIsIGxlcnAxLCBcIlxcdOWPszpcIiwgbGVycDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIE15TGluZS5JLkRyYXdMaW5lKEJhbGxNYW5hZ2VyLkkuV2hpdGVCYWxsLndvcmxkUG9zaXRpb24sIHRhcmdldFBvcyk7XG4gICAgfVxuICAgIC8qKuWIm+W7uuWwhOe6vyDliKTmlq3pgqPkuKrnkIPmmK/ot53nprvnmb3nkIPmnIDov5HnmoTnkIPvvIjnmb3nkIPkvJrkvJjlhYjnorDliLDlk6rkuKrnkIPvvIkgKi9cbiAgICBDcmVhdGVSYXlKdWRnZU5lYXJlc3RCYWxsKCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IG51bGw7XG4gICAgICAgIGxldCBkaXIgPSBuZXcgVmVjMyh0aGlzLmNlbnRlci53b3JsZFBvc2l0aW9uLnggLSB0aGlzLmdhblBvcy53b3JsZFBvc2l0aW9uLngsIDAsIHRoaXMuY2VudGVyLndvcmxkUG9zaXRpb24ueiAtIHRoaXMuZ2FuUG9zLndvcmxkUG9zaXRpb24ueik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5pa55ZCR5Li6XCIsIGRpcik7XG4gICAgICAgIGxldCByYXlDZW50ZXIgPSBuZXcgUmF5KHRoaXMuY2VudGVyLndvcmxkUG9zaXRpb24ueCwgdGhpcy5jZW50ZXIud29ybGRQb3NpdGlvbi55LCB0aGlzLmNlbnRlci53b3JsZFBvc2l0aW9uLnosIGRpci54LCAwLCBkaXIueik7XG4gICAgICAgIGxldCByYXlMZWZ0ID0gbmV3IFJheSh0aGlzLmxlZnQud29ybGRQb3NpdGlvbi54LCB0aGlzLmxlZnQud29ybGRQb3NpdGlvbi55LCB0aGlzLmxlZnQud29ybGRQb3NpdGlvbi56LCBkaXIueCwgMCwgZGlyLnopO1xuICAgICAgICBsZXQgcmF5UmlnaHQgPSBuZXcgUmF5KHRoaXMucmlnaHQud29ybGRQb3NpdGlvbi54LCB0aGlzLnJpZ2h0LndvcmxkUG9zaXRpb24ueSwgdGhpcy5yaWdodC53b3JsZFBvc2l0aW9uLnosIGRpci54LCAwLCBkaXIueik7XG5cbiAgICAgICAgbGV0IGNlbnRlcmQ6IG51bWJlcjtcbiAgICAgICAgbGV0IGxlZnRkOiBudW1iZXI7XG4gICAgICAgIGxldCByaWdodGQ6IG51bWJlcjtcblxuICAgICAgICBsZXQgY2VudGVyY29sbGlkZXI6IENvbGxpZGVyO1xuICAgICAgICBsZXQgbGVmdGNvbGxpZGVyOiBDb2xsaWRlcjtcbiAgICAgICAgbGV0IHJpZ2h0Y29sbGlkZXI6IENvbGxpZGVyO1xuXG4gICAgICAgIGxldCBjZW50ZXJoaXRQb2ludDogVmVjMztcbiAgICAgICAgbGV0IGxlZnRoaXRQb2ludDogVmVjMztcbiAgICAgICAgbGV0IHJpZ2h0aGl0UG9pbnQ6IFZlYzM7XG4gICAgICAgIFxuICAgICAgICBpZiAoUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdChyYXlDZW50ZXIsIDEpKSB7XG4gICAgICAgICAgICBjZW50ZXJjb2xsaWRlciA9IFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3RSZXN1bHQuY29sbGlkZXI7XG4gICAgICAgICAgICBjZW50ZXJoaXRQb2ludCA9IG5ldyBWZWMzKFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3RSZXN1bHQuaGl0UG9pbnQueCwgUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdFJlc3VsdC5oaXRQb2ludC55LCBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0UmVzdWx0LmhpdFBvaW50LnopO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdFJlc3VsdC5oaXRQb2ludCk7XG4gICAgICAgICAgICBsZXQgbmFtZSA9IGNlbnRlcmNvbGxpZGVyLm5vZGUubmFtZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5Lit5b+D5bCE57q/5omA54Wn5bCE5Yiw55qE54mp5L2T5ZCN56ew5Li677yaXCIsIG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0KHJheUxlZnQsIDEpKSB7XG4gICAgICAgICAgICBsZWZ0Y29sbGlkZXIgPSBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0UmVzdWx0LmNvbGxpZGVyO1xuICAgICAgICAgICAgbGVmdGhpdFBvaW50ID0gbmV3IFZlYzMoUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdFJlc3VsdC5oaXRQb2ludC54LCBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0UmVzdWx0LmhpdFBvaW50LnksIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3RSZXN1bHQuaGl0UG9pbnQueik7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0UmVzdWx0LmhpdFBvaW50KTtcbiAgICAgICAgICAgIGxldCBuYW1lID0gbGVmdGNvbGxpZGVyLm5vZGUubmFtZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5bem5L6n5bCE57q/5omA54Wn5bCE5Yiw55qE54mp5L2T5ZCN56ew5Li677yaXCIsIG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0KHJheVJpZ2h0LCAxKSkge1xuICAgICAgICAgICAgcmlnaHRjb2xsaWRlciA9IFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3RSZXN1bHQuY29sbGlkZXI7XG4gICAgICAgICAgICByaWdodGhpdFBvaW50ID0gbmV3IFZlYzMoUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdFJlc3VsdC5oaXRQb2ludC54LCBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0UmVzdWx0LmhpdFBvaW50LnksIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3RSZXN1bHQuaGl0UG9pbnQueik7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0UmVzdWx0LmhpdFBvaW50KTtcbiAgICAgICAgICAgIC8vIGxldCBuYW1lID0gcmlnaHRjb2xsaWRlci5ub2RlLm5hbWU7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWPs+S+p+WwhOe6v+aJgOeFp+WwhOWIsOeahOeJqeS9k+WQjeensOS4uu+8mlwiLCBuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNlbnRlcmhpdFBvaW50IHx8ICFsZWZ0aGl0UG9pbnQgfHwgIXJpZ2h0aGl0UG9pbnQpIHJldHVybjtcbiAgICAgICAgY2VudGVyZCA9IFZlYzMuZGlzdGFuY2UodGhpcy5jZW50ZXIud29ybGRQb3NpdGlvbiwgY2VudGVyaGl0UG9pbnQpO1xuICAgICAgICBsZWZ0ZCA9IFZlYzMuZGlzdGFuY2UodGhpcy5sZWZ0LndvcmxkUG9zaXRpb24sIGxlZnRoaXRQb2ludCk7XG4gICAgICAgIHJpZ2h0ZCA9IFZlYzMuZGlzdGFuY2UodGhpcy5yaWdodC53b3JsZFBvc2l0aW9uLCByaWdodGhpdFBvaW50KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coY2VudGVyaGl0UG9pbnQsIGxlZnRoaXRQb2ludCwgcmlnaHRoaXRQb2ludCk7XG5cbiAgICAgICAgbGV0IG1pbiA9IE1hdGgubWluKGNlbnRlcmQsIGxlZnRkLCByaWdodGQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjZW50ZXJkLCBsZWZ0ZCwgcmlnaHRkKTtcblxuICAgICAgICBpZiAobWluID09IGNlbnRlcmQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5pyA5bCP55qE5piv5Lit5b+D5bCE57q/54Wn5bCE5Yiw55qE54mp5L2TXCIpO1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBjZW50ZXJjb2xsaWRlci5ub2RlLm5hbWU7XG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IHJpZ2h0Y29sbGlkZXIubm9kZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5Lit5b+D5bCE57q/5omA54Wn5bCE5Yiw55qE54mp5L2T5ZCN56ew5Li677yaXCIsIG5hbWUpO1xuICAgICAgICAgICAgaWYgKG5hbWUgPT0gXCJUYWJsZVwiIHx8IG5hbWUgPT0gXCJkb25nXCIgfHwgbmFtZSA9PSBcIndlbGxcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuciA9IDIuODUyO1xuICAgICAgICAgICAgICAgIHRoaXMuaXN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5UYXJnZXRCYWxsRnJvbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5UYXJnZXRCYWxsTGVmdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLlRhcmdldEJhbGxSaWdodC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2VudGVyaGl0UG9pbnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuciA9IDExLjQyO1xuICAgICAgICAgICAgICAgIHRoaXMuaXN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuVGFyZ2V0QmFsbEZyb250LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5UYXJnZXRCYWxsTGVmdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuVGFyZ2V0QmFsbFJpZ2h0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNlbnRlcmNvbGxpZGVyLm5vZGUud29ybGRQb3NpdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtaW4gPT0gbGVmdGQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5pyA5bCP55qE5piv5bem5L6n5bCE57q/54Wn5bCE5Yiw55qE54mp5L2TXCIpO1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBsZWZ0Y29sbGlkZXIubm9kZS5uYW1lO1xuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSByaWdodGNvbGxpZGVyLm5vZGU7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuW3puS+p+WwhOe6v+aJgOeFp+WwhOWIsOeahOeJqeS9k+WQjeensOS4uu+8mlwiLCBuYW1lKTtcbiAgICAgICAgICAgIGlmIChuYW1lID09IFwiVGFibGVcIiB8fCBuYW1lID09IFwiZG9uZ1wiIHx8IG5hbWUgPT0gXCJ3ZWxsXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnIgPSAyLjg1MjtcbiAgICAgICAgICAgICAgICB0aGlzLmlzdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuVGFyZ2V0QmFsbEZyb250LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuVGFyZ2V0QmFsbExlZnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5UYXJnZXRCYWxsUmlnaHQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnRoaXRQb2ludDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yID0gMTEuNDI7XG4gICAgICAgICAgICAgICAgdGhpcy5pc3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5UYXJnZXRCYWxsRnJvbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLlRhcmdldEJhbGxMZWZ0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5UYXJnZXRCYWxsUmlnaHQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdGNvbGxpZGVyLm5vZGUud29ybGRQb3NpdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtaW4gPT0gcmlnaHRkKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuacgOWwj+eahOaYr+WPs+S+p+WwhOe6v+eFp+WwhOWIsOeahOeJqeS9k1wiKTtcbiAgICAgICAgICAgIGxldCBuYW1lID0gcmlnaHRjb2xsaWRlci5ub2RlLm5hbWU7XG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IHJpZ2h0Y29sbGlkZXIubm9kZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5Y+z5L6n5bCE57q/5omA54Wn5bCE5Yiw55qE54mp5L2T5ZCN56ew5Li677yaXCIsIG5hbWUpO1xuICAgICAgICAgICAgaWYgKG5hbWUgPT0gXCJUYWJsZVwiIHx8IG5hbWUgPT0gXCJkb25nXCIgfHwgbmFtZSA9PSBcIndlbGxcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuciA9IDUuNzE7XG4gICAgICAgICAgICAgICAgdGhpcy5pc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLlRhcmdldEJhbGxGcm9udC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLlRhcmdldEJhbGxMZWZ0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuVGFyZ2V0QmFsbFJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiByaWdodGhpdFBvaW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnIgPSAxMS40MjtcbiAgICAgICAgICAgICAgICB0aGlzLmlzdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLlRhcmdldEJhbGxGcm9udC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuVGFyZ2V0QmFsbExlZnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLlRhcmdldEJhbGxSaWdodC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiByaWdodGNvbGxpZGVyLm5vZGUud29ybGRQb3NpdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBDcmVhdGVUYXJnZXRQb3MocG9pbnQwOiBWZWMzKSB7XG5cbiAgICAgICAgLy/lnIbmlrnnqItcbiAgICAgICAgLy8gKHgteDApXjIgKyAoeS15MCleMiA9IHJeMlxuICAgICAgICBpZiAoIXBvaW50MCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCB4MCA9IHBvaW50MC54O1xuICAgICAgICBsZXQgeTAgPSBwb2ludDAuejtcbiAgICAgICAgbGV0IHIgPSAxMS40MjtcbiAgICAgICAgLy/nm7Tnur/mlrnnqItcbiAgICAgICAgbGV0IHBvaW50MTogVmVjMyA9IHRoaXMuY2VudGVyLndvcmxkUG9zaXRpb247XG4gICAgICAgIGxldCBwb2ludDI6IFZlYzMgPSB0aGlzLmdhblBvcy53b3JsZFBvc2l0aW9uO1xuICAgICAgICBsZXQgeDEgPSBwb2ludDEueDtcbiAgICAgICAgbGV0IHkxID0gcG9pbnQxLno7XG4gICAgICAgIGxldCB4MiA9IHBvaW50Mi54O1xuICAgICAgICBsZXQgeTIgPSBwb2ludDIuejtcbiAgICAgICAgbGV0IHRhcmdldDE6IFZlYzM7XG4gICAgICAgIGxldCB0YXJnZXQyOiBWZWMzO1xuICAgICAgICBpZiAocG9pbnQxLnggPT0gcG9pbnQyLngpIHtcbiAgICAgICAgICAgIC8vICDmlrnnqIvkuLogeCA9IHBvaW50MS54O1xuICAgICAgICAgICAgLy/ogZTnq4vmlrnnqIvnmoTlvpdcbiAgICAgICAgICAgIGxldCBBID0gMTtcbiAgICAgICAgICAgIGxldCBCID0gLTIgKiB5MDtcbiAgICAgICAgICAgIGxldCBDID0geTAgKiB5MCArICh4MSAtIHgwKSAqICh4MSAtIHgwKSAtIHIgKiByO1xuICAgICAgICAgICAgLy/mlrnnqIvmsYLop6NcbiAgICAgICAgICAgIGxldCBzb2x1dGlvblgxID0geDE7XG4gICAgICAgICAgICBsZXQgc29sdXRpb25ZMSA9ICgtQiArIE1hdGguc3FydChCICogQiAtIDQgKiBBICogQykpIC8gKDIgKiBBKTtcbiAgICAgICAgICAgIGxldCBzb2x1dGlvblgyID0geDE7XG4gICAgICAgICAgICBsZXQgc29sdXRpb25ZMiA9ICgtQiAtIE1hdGguc3FydChCICogQiAtIDQgKiBBICogQykpIC8gKDIgKiBBKTtcblxuICAgICAgICAgICAgdGFyZ2V0MSA9IG5ldyBWZWMzKHNvbHV0aW9uWDEsIDAsIHNvbHV0aW9uWTEpO1xuICAgICAgICAgICAgdGFyZ2V0MiA9IG5ldyBWZWMzKHNvbHV0aW9uWDIsIDAsIHNvbHV0aW9uWTIpO1xuICAgICAgICB9IGVsc2UgaWYgKHBvaW50MS56ID09IHBvaW50Mi56KSB7XG4gICAgICAgICAgICAvLyDmlrnnqIvkuLogeSA9IHBvaW50MS56XG4gICAgICAgICAgICAvL+iBlOeri+aWueeoi+eahOW+l1xuICAgICAgICAgICAgbGV0IEEgPSAxO1xuICAgICAgICAgICAgbGV0IEIgPSAtMiAqIHgwO1xuICAgICAgICAgICAgbGV0IEMgPSB4MCAqIHgwICsgKHkxIC0geTApICogKHkxIC0geTApIC0gciAqIHI7XG4gICAgICAgICAgICAvL+aWueeoi+axguino1xuICAgICAgICAgICAgbGV0IHNvbHV0aW9uWDEgPSAoLUIgKyBNYXRoLnNxcnQoQiAqIEIgLSA0ICogQSAqIEMpKSAvICgyICogQSk7XG4gICAgICAgICAgICBsZXQgc29sdXRpb25ZMSA9IHkxO1xuICAgICAgICAgICAgbGV0IHNvbHV0aW9uWDIgPSAoLUIgLSBNYXRoLnNxcnQoQiAqIEIgLSA0ICogQSAqIEMpKSAvICgyICogQSk7XG4gICAgICAgICAgICBsZXQgc29sdXRpb25ZMiA9IHkxO1xuXG4gICAgICAgICAgICB0YXJnZXQxID0gbmV3IFZlYzMoc29sdXRpb25YMSwgMCwgc29sdXRpb25ZMSk7XG4gICAgICAgICAgICB0YXJnZXQyID0gbmV3IFZlYzMoc29sdXRpb25YMiwgMCwgc29sdXRpb25ZMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDmlrnnqIvkuLogeSA9ICgocG9pbnQyLnogLSBwb2ludDEueikgLyAocG9pbnQyLnggLSBwb2ludDEueCkpICogeCArIChwb2ludDEueiAtKChwaW9pbnQxLnggKiAocG9pbnQyLnogLSBwb2ludDEueikgLyAocG9pbnQyLnggLSBwb2ludDEueCkpKSlcbiAgICAgICAgICAgIC8vIHkgPSBreCtiO1xuICAgICAgICAgICAgLy8geSA9ICgoeTIteTEpLyh4Mi14MSkpKngrKHkxLSh4MSooeTIteTEpLyh4Mi14MSkpKVxuICAgICAgICAgICAgbGV0IGsgPSAoeTIgLSB5MSkgLyAoeDIgLSB4MSk7XG4gICAgICAgICAgICBsZXQgYiA9ICh5MSAtICh4MSAqICh5MiAtIHkxKSAvICh4MiAtIHgxKSkpO1xuXG4gICAgICAgICAgICAvL+iBlOeri+aWueeoi+W+l1xuICAgICAgICAgICAgbGV0IEEgPSAoMSArIGsgKiBrKTtcbiAgICAgICAgICAgIGxldCBCID0gKDIgKiBrICogYiAtIDIgKiB5MCAqIGsgLSAyICogeDApO1xuICAgICAgICAgICAgbGV0IEMgPSAoYiAqIGIgLSAyICogeTAgKiBiICsgeDAgKiB4MCArIHkwICogeTAgLSByICogcik7XG5cbiAgICAgICAgICAgIC8v5pa556iL5rGC6KejXG4gICAgICAgICAgICBsZXQgc29sdXRpb25YMSA9ICgtQiArIE1hdGguc3FydChCICogQiAtIDQgKiBBICogQykpIC8gKDIgKiBBKTtcbiAgICAgICAgICAgIGxldCBzb2x1dGlvblkxID0gayAqIHNvbHV0aW9uWDEgKyBiO1xuICAgICAgICAgICAgbGV0IHNvbHV0aW9uWDIgPSAoLUIgLSBNYXRoLnNxcnQoQiAqIEIgLSA0ICogQSAqIEMpKSAvICgyICogQSk7XG4gICAgICAgICAgICBsZXQgc29sdXRpb25ZMiA9IGsgKiBzb2x1dGlvblgyICsgYjtcblxuICAgICAgICAgICAgdGFyZ2V0MSA9IG5ldyBWZWMzKHNvbHV0aW9uWDEsIDAsIHNvbHV0aW9uWTEpO1xuICAgICAgICAgICAgdGFyZ2V0MiA9IG5ldyBWZWMzKHNvbHV0aW9uWDIsIDAsIHNvbHV0aW9uWTIpO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoVmVjMy5kaXN0YW5jZSh0aGlzLmNlbnRlci53b3JsZFBvc2l0aW9uLCB0YXJnZXQxKSA8IFZlYzMuZGlzdGFuY2UodGhpcy5jZW50ZXIud29ybGRQb3NpdGlvbiwgdGFyZ2V0MikpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDI7XG4gICAgICAgIH1cblxuXG5cbiAgICB9XG5cblxuICAgIC8vIC8qKuiuoeeul+WHu+eQg+eCueWvueS6juebruagh+eQg+eahOS9jee9riAqL1xuICAgIC8vIENhbGN1bGF0ZVRoZUxvY2F0aW9uT2ZUaGVUYXJnZXQodGFyZ2V0OiBWZWMzLCByOiBudW1iZXIpOiBWZWMzIHtcbiAgICAvLyAgICAgLy/nm7Tnur/mlrnnqIsgeSA9IGt4ICsgajtcbiAgICAvLyAgICAgLy/lnIbmlrnnqIsgKHgtYSleMiArKHktYileMiA9IHJeMlxuICAgIC8vICAgICAvL+WchuaWueeoiyAoeF4yK2FeMi0yYXgpICsoeV4yK2JeMi0yYnkpID0gcl4yXG4gICAgLy8gICAgIC8v5ZyG5pa556iLIHheMiArIHleMiAtMmF4IC0gMmJ5ICsgYl4yICsgYV4yIC1yXjIgPTAgXG4gICAgLy8gICAgIC8v5ZyG5pa556iLIHheMit5XjIrQXgrQnkrQyA9IDA7XG4gICAgLy8gICAgIC8v5pa556iL6IGU56uL5b6X77yaIHheMisoa3graileMitBeCtrQngrQmorQz0wXG4gICAgLy8gICAgIC8v5pa556iL6IGU56uL5b6X77yaIHheMisoa3heMitqXjIra2p4KStBeCtrQngrQmorQz0wXG4gICAgLy8gICAgIC8v5pa556iL6IGU56uL5b6X77yaIChrKzEpeF4yK2peMisoa2ora0IrQSl4K0JqK0M9MFxuICAgIC8vICAgICAvL+aWueeoi+iBlOeri+W+l++8miAoaysxKXheMisoa2ora0IrQSl4K2peMitCaitDPTBcbiAgICAvLyAgICAgLy8gZ2FuUG9zXG4gICAgLy8gICAgIC8vIGNlbnRlclxuICAgIC8vICAgICAvLyBBeCtCWStDID0gXG4gICAgLy8gICAgIC8vIFkgPSAtQS9CIHggLSBDL0JcblxuICAgIC8vICAgICBpZiAoKHRoaXMuZ2FuUG9zLndvcmxkUG9zaXRpb24ueCAtIHRoaXMuY2VudGVyLndvcmxkUG9zaXRpb24ueCkgPT0gMCkge1xuICAgIC8vICAgICAgICAgLy8oeS1iKV4yID0gcl4yIC0gKHgtYSleMlxuICAgIC8vICAgICAgICAgbGV0IHkxID0gTWF0aC5zcXJ0KHIgKiByIC0gKHRoaXMuZ2FuUG9zLndvcmxkUG9zaXRpb24ueCAtIHRhcmdldC54KSAqICh0aGlzLmdhblBvcy53b3JsZFBvc2l0aW9uLnggLSB0YXJnZXQueCkpICsgdGFyZ2V0Lno7XG4gICAgLy8gICAgICAgICBsZXQgeTIgPSAtTWF0aC5zcXJ0KHIgKiByIC0gKHRoaXMuZ2FuUG9zLndvcmxkUG9zaXRpb24ueCAtIHRhcmdldC54KSAqICh0aGlzLmdhblBvcy53b3JsZFBvc2l0aW9uLnggLSB0YXJnZXQueCkpICsgdGFyZ2V0Lno7XG4gICAgLy8gICAgICAgICBsZXQgdGFyZ2V0MSA9IG5ldyBWZWMzKHRoaXMuZ2FuUG9zLndvcmxkUG9zaXRpb24ueCwgMCwgeTEpXG4gICAgLy8gICAgICAgICBsZXQgdGFyZ2V0MiA9IG5ldyBWZWMzKHRoaXMuZ2FuUG9zLndvcmxkUG9zaXRpb24ueCwgMCwgeTIpXG4gICAgLy8gICAgICAgICBpZiAoVmVjMy5kaXN0YW5jZSh0YXJnZXQxLCB0aGlzLndoaXRlQmFsbC53b3JsZFBvc2l0aW9uKSA8IFZlYzMuZGlzdGFuY2UodGFyZ2V0MiwgdGhpcy53aGl0ZUJhbGwud29ybGRQb3NpdGlvbikpIHtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhcmdldDE6XCIsIHRhcmdldDEpO1xuXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHRhcmdldDE7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcInRhcmdldDI6XCIsIHRhcmdldDIpO1xuICAgIC8vICAgICAgICAgcmV0dXJuIHRhcmdldDI7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBsZXQgayA9IC0odGhpcy5jZW50ZXIud29ybGRQb3NpdGlvbi56IC0gdGhpcy5nYW5Qb3Mud29ybGRQb3NpdGlvbi56KSAvICh0aGlzLmdhblBvcy53b3JsZFBvc2l0aW9uLnggLSB0aGlzLmNlbnRlci53b3JsZFBvc2l0aW9uLngpXG4gICAgLy8gICAgIGxldCBqID0gLSAodGhpcy5jZW50ZXIud29ybGRQb3NpdGlvbi54ICogdGhpcy5nYW5Qb3Mud29ybGRQb3NpdGlvbi56IC0gdGhpcy5nYW5Qb3Mud29ybGRQb3NpdGlvbi54ICogdGhpcy5jZW50ZXIud29ybGRQb3NpdGlvbi56KSAvICh0aGlzLmdhblBvcy53b3JsZFBvc2l0aW9uLnggLSB0aGlzLmNlbnRlci53b3JsZFBvc2l0aW9uLngpXG4gICAgLy8gICAgIGxldCBBID0gLTIgKiAodGFyZ2V0LngpO1xuICAgIC8vICAgICBsZXQgQiA9IC0yICogKHRhcmdldC56KTtcbiAgICAvLyAgICAgbGV0IEMgPSAodGFyZ2V0LngpICogKHRhcmdldC54KSArICh0YXJnZXQueikgKiAodGFyZ2V0LnopIC0gciAqIHI7XG4gICAgLy8gICAgIGxldCBhID0gKGsgKyAxKTtcbiAgICAvLyAgICAgbGV0IGIgPSAoayAqIGogKyBrICogQiArIEEpO1xuICAgIC8vICAgICBsZXQgYyA9IGogKiBqICsgQiAqIGogKyBDO1xuICAgIC8vICAgICBsZXQgeDEgPSAoLWIgKyBNYXRoLnNxcnQoYiAqIGIgLSA0ICogYSAqIGMpKSAvIDIgKiBhO1xuICAgIC8vICAgICBsZXQgeDIgPSAoLWIgLSBNYXRoLnNxcnQoYiAqIGIgLSA0ICogYSAqIGMpKSAvIDIgKiBhO1xuICAgIC8vICAgICBsZXQgdGFyZ2V0MSA9IG5ldyBWZWMzKHgxLCAwLCBrICogeDEgKyBqKVxuICAgIC8vICAgICBsZXQgdGFyZ2V0MiA9IG5ldyBWZWMzKHgyLCAwLCBrICogeDEgKyBqKVxuICAgIC8vICAgICBpZiAoVmVjMy5kaXN0YW5jZSh0YXJnZXQxLCB0aGlzLndoaXRlQmFsbC53b3JsZFBvc2l0aW9uKSA8IFZlYzMuZGlzdGFuY2UodGFyZ2V0MiwgdGhpcy53aGl0ZUJhbGwud29ybGRQb3NpdGlvbikpIHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwidGFyZ2V0MzpcIiwgdGFyZ2V0MSk7XG4gICAgLy8gICAgICAgICByZXR1cm4gdGFyZ2V0MTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcInRhcmdldDQ6XCIsIHRhcmdldDIpO1xuICAgIC8vICAgICByZXR1cm4gdGFyZ2V0MjtcblxuICAgIC8vIH1cblxuICAgIC8vIFRlc3Qoc3RhcnRwb3M6IFZlYzMsIGxpbmVUYXJnZXQxOiBWZWMzLCBsaW5lVGFyZ2V0MjogVmVjMywgY2lyY3VsYXJUYXJnZXQ6IFZlYzMsIHI6IG51bWJlcikge1xuICAgIC8vICAgICBsZXQgb3V0VGFyZ2V0MTogVmVjMztcbiAgICAvLyAgICAgbGV0IG91dFRhcmdldDI6IFZlYzM7XG4gICAgLy8gICAgIGxpbmVUYXJnZXQxID0gdGhpcy5nYW5Qb3Mud29ybGRQb3NpdGlvbjtcbiAgICAvLyAgICAgbGluZVRhcmdldDIgPSB0aGlzLmNlbnRlci53b3JsZFBvc2l0aW9uO1xuICAgIC8vICAgICBsZXQgeDEgPSBsaW5lVGFyZ2V0MS54O1xuICAgIC8vICAgICBsZXQgeTEgPSBsaW5lVGFyZ2V0MS56O1xuICAgIC8vICAgICBsZXQgeDIgPSBsaW5lVGFyZ2V0Mi54O1xuICAgIC8vICAgICBsZXQgeTIgPSBsaW5lVGFyZ2V0Mi56O1xuICAgIC8vICAgICBpZiAoeDIgLSB4MSAhPSAwICYmIHkyIC0geTEgIT0gMCkge1xuICAgIC8vICAgICAgICAgbGV0IGxpbmVBID0gKHgyIC0geDEpO1xuICAgIC8vICAgICAgICAgbGV0IGxpbmVCID0gKHkxIC0geTIpO1xuICAgIC8vICAgICAgICAgbGV0IGxpbmVDID0gKHgxICogeTIgLSB5MSAqIHgyKTtcbiAgICAvLyAgICAgICAgIGxldCBsaW5layA9IC1saW5lQiAvIGxpbmVBO1xuICAgIC8vICAgICAgICAgbGV0IGxpbmViID0gc3RhcnRwb3MueiAtIHN0YXJ0cG9zLnggKiBsaW5laztcbiAgICAvLyAgICAgICAgIGxldCBjaXJjdWxhckEgPSAtMiAqIGNpcmN1bGFyVGFyZ2V0Lng7XG4gICAgLy8gICAgICAgICBsZXQgY2lyY3VsYXJCID0gLTIgKiBjaXJjdWxhclRhcmdldC56O1xuICAgIC8vICAgICAgICAgbGV0IGNpcmN1bGFyQyA9IGNpcmN1bGFyVGFyZ2V0LnggKiBjaXJjdWxhclRhcmdldC54ICsgY2lyY3VsYXJUYXJnZXQueiAqIGNpcmN1bGFyVGFyZ2V0LnogLSByICogcjtcbiAgICAvLyAgICAgICAgIGxldCBhID0gKGxpbmVrICogbGluZWsgKyAxKTtcbiAgICAvLyAgICAgICAgIGxldCBiID0gKDIgKiBsaW5layAqIGxpbmViICsgY2lyY3VsYXJBICsgY2lyY3VsYXJCICogbGluZWspO1xuICAgIC8vICAgICAgICAgbGV0IGMgPSAobGluZWIgKiBsaW5lYiArIGNpcmN1bGFyQiAqIGxpbmViICsgY2lyY3VsYXJDKTtcbiAgICAvLyAgICAgICAgIGxldCBvdXR4MSA9ICgtYiArIE1hdGguc3FydChiICogYiAtIDQgKiBhICogYykpIC8gMiAqIGE7XG4gICAgLy8gICAgICAgICBsZXQgb3V0eDIgPSAoLWIgLSBNYXRoLnNxcnQoYiAqIGIgLSA0ICogYSAqIGMpKSAvIDIgKiBhO1xuICAgIC8vICAgICAgICAgbGV0IG91dHkxID0gbGluZWsgKiB4MSArIGxpbmViO1xuICAgIC8vICAgICAgICAgbGV0IG91dHkyID0gbGluZWsgKiB4MiArIGxpbmViO1xuICAgIC8vICAgICAgICAgb3V0VGFyZ2V0MSA9IG5ldyBWZWMzKG91dHgxLCA1LjcxLCBvdXR5MSk7XG4gICAgLy8gICAgICAgICBvdXRUYXJnZXQyID0gbmV3IFZlYzMob3V0eDIsIDUuNzEsIG91dHkyKTtcbiAgICAvLyAgICAgfSBlbHNlIGlmICh4MiA9PSB4MSkge1xuICAgIC8vICAgICAgICAgbGV0IG91dHkxID0gY2lyY3VsYXJUYXJnZXQueiArIE1hdGguc3FydCgociAqIHIpIC0gKCh4MSAtIGNpcmN1bGFyVGFyZ2V0LngpICogKHgxIC0gY2lyY3VsYXJUYXJnZXQueCkpKVxuICAgIC8vICAgICAgICAgbGV0IG91dHkyID0gY2lyY3VsYXJUYXJnZXQueiAtIE1hdGguc3FydCgociAqIHIpIC0gKCh4MSAtIGNpcmN1bGFyVGFyZ2V0LngpICogKHgxIC0gY2lyY3VsYXJUYXJnZXQueCkpKVxuICAgIC8vICAgICAgICAgb3V0VGFyZ2V0MSA9IG5ldyBWZWMzKHgxLCA1LjcxLCBvdXR5MSk7XG4gICAgLy8gICAgICAgICBvdXRUYXJnZXQyID0gbmV3IFZlYzMoeDEsIDUuNzEsIG91dHkyKTtcbiAgICAvLyAgICAgfSBlbHNlIGlmICh5MSA9PSB5Mikge1xuICAgIC8vICAgICAgICAgbGV0IG91dHgxID0gY2lyY3VsYXJUYXJnZXQueCArIE1hdGguc3FydCgociAqIHIpIC0gKCh5MSAtIGNpcmN1bGFyVGFyZ2V0LnopICogKHkxIC0gY2lyY3VsYXJUYXJnZXQueikpKVxuICAgIC8vICAgICAgICAgbGV0IG91dHgyID0gY2lyY3VsYXJUYXJnZXQueCAtIE1hdGguc3FydCgociAqIHIpIC0gKCh5MSAtIGNpcmN1bGFyVGFyZ2V0LnopICogKHkxIC0gY2lyY3VsYXJUYXJnZXQueikpKVxuICAgIC8vICAgICAgICAgb3V0VGFyZ2V0MSA9IG5ldyBWZWMzKG91dHgxLCA1LjcxLCB5MSk7XG4gICAgLy8gICAgICAgICBvdXRUYXJnZXQyID0gbmV3IFZlYzMob3V0eDIsIDUuNzEsIHkxKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAoVmVjMy5kaXN0YW5jZShvdXRUYXJnZXQxLCB0aGlzLndoaXRlQmFsbC53b3JsZFBvc2l0aW9uKSA8IFZlYzMuZGlzdGFuY2Uob3V0VGFyZ2V0MiwgdGhpcy53aGl0ZUJhbGwud29ybGRQb3NpdGlvbikpIHtcbiAgICAvLyAgICAgICAgIHJldHVybiBvdXRUYXJnZXQxO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiBvdXRUYXJnZXQyO1xuICAgIC8vIH1cbiAgICAvLyBUZXN0MihzdGFydHBvczogVmVjMywgdGFyZ2V0OiBWZWMzLCByOiBudW1iZXIpIHtcbiAgICAvLyAgICAgbGV0IGs7XG4gICAgLy8gICAgIGlmICh0aGlzLmdhblBvcy53b3JsZFBvc2l0aW9uLnggPT0gdGhpcy5jZW50ZXIud29ybGRQb3NpdGlvbi54KSB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIuaWnOeOh+S4jeWtmOWcqFwiKTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIGsgPSAodGhpcy5nYW5Qb3Mud29ybGRQb3NpdGlvbi56IC0gdGhpcy5jZW50ZXIud29ybGRQb3NpdGlvbi56KSAvICh0aGlzLmdhblBvcy53b3JsZFBvc2l0aW9uLnggLSB0aGlzLmNlbnRlci53b3JsZFBvc2l0aW9uLngpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGxldCBsaW5lYiA9IHN0YXJ0cG9zLnogLSBrICogc3RhcnRwb3MueDtcbiAgICAvLyAgICAgbGV0IGEgPSBrICogayArIDE7XG4gICAgLy8gICAgIGxldCBiID0gLTIgKiB0YXJnZXQueCAtIDIgKiBrICogKGxpbmViIC0gdGFyZ2V0LnopO1xuICAgIC8vICAgICBsZXQgYyA9ICh0YXJnZXQueCAqIHRhcmdldC54ICsgKGxpbmViIC0gdGFyZ2V0LnopICogKGxpbmViIC0gdGFyZ2V0LnopIC0gciAqIHIpO1xuXG4gICAgLy8gICAgIGxldCB4MSA9ICgtYiArIE1hdGguc3FydChiICogYiAtIDQgKiBhICogYykpIC8gKDIgKiBhKTtcbiAgICAvLyAgICAgbGV0IHgyID0gKC1iIC0gTWF0aC5zcXJ0KGIgKiBiIC0gNCAqIGEgKiBjKSkgLyAoMiAqIGEpO1xuICAgIC8vICAgICBsZXQgeTEgPSBrICogeDEgKyBsaW5lYjtcbiAgICAvLyAgICAgbGV0IHkyID0gayAqIHgyICsgbGluZWI7XG4gICAgLy8gICAgIGxldCBvdXQxID0gbmV3IFZlYzMoeDEsIDUuNzEsIHkxKTtcbiAgICAvLyAgICAgbGV0IG91dDIgPSBuZXcgVmVjMyh4MiwgNS43MSwgeTIpO1xuICAgIC8vICAgICBsZXQgb3V0ID0gVmVjMy5kaXN0YW5jZShvdXQxLCB0aGlzLndoaXRlQmFsbC53b3JsZFBvc2l0aW9uKSA8IFZlYzMuZGlzdGFuY2Uob3V0MiwgdGhpcy53aGl0ZUJhbGwud29ybGRQb3NpdGlvbikgPyBvdXQxIDogb3V0MjtcbiAgICAvLyAgICAgcmV0dXJuIG91dDtcbiAgICAvLyB9XG5cbn1cblxuXG5cblxuXG5cblxuXG5cblxuLy8gbGV0IGRpciA9IG5ldyBWZWMzKHRoaXMuY2VudGVyLndvcmxkUG9zaXRpb24ueCAtIHRoaXMuZ2FuUG9zLndvcmxkUG9zaXRpb24ueCwgdGhpcy5jZW50ZXIud29ybGRQb3NpdGlvbi55IC0gdGhpcy5nYW5Qb3Mud29ybGRQb3NpdGlvbi55LCB0aGlzLmNlbnRlci53b3JsZFBvc2l0aW9uLnogLSB0aGlzLmdhblBvcy53b3JsZFBvc2l0aW9uLnopO1xuICAgICAgICAvLyBsZXQgcmF5Q2VudGVyID0gbmV3IFJheSh0aGlzLmNlbnRlci53b3JsZFBvc2l0aW9uLngsIHRoaXMuY2VudGVyLndvcmxkUG9zaXRpb24ueSwgdGhpcy5jZW50ZXIud29ybGRQb3NpdGlvbi56LCBkaXIueCwgMCwgZGlyLnopO1xuICAgICAgICAvLyBsZXQgcmF5TGVmdCA9IG5ldyBSYXkodGhpcy5sZWZ0LndvcmxkUG9zaXRpb24ueCwgdGhpcy5sZWZ0LndvcmxkUG9zaXRpb24ueSwgdGhpcy5sZWZ0LndvcmxkUG9zaXRpb24ueiwgZGlyLngsIDAsIGRpci56KTtcbiAgICAgICAgLy8gbGV0IHJheVJpZ2h0ID0gbmV3IFJheSh0aGlzLnJpZ2h0LndvcmxkUG9zaXRpb24ueCwgdGhpcy5yaWdodC53b3JsZFBvc2l0aW9uLnksIHRoaXMucmlnaHQud29ybGRQb3NpdGlvbi56LCBkaXIueCwgMCwgZGlyLnopO1xuICAgICAgICAvLyBsZXQgdGFyZ2V0Q2VudGVyOiBWZWMzO1xuICAgICAgICAvLyBsZXQgdGFyZ2V0TGVmdDogVmVjMztcbiAgICAgICAgLy8gbGV0IHRhcmdldFJpZ2h0OiBWZWMzO1xuICAgICAgICAvLyBsZXQgc3RhcnQ6IE5vZGU7XG4gICAgICAgIC8vIGxldCB0YXJnZXQ6IFZlYzM7XG4gICAgICAgIC8vIGxldCBkaXNjZW50ZXIgPSA5OTk7XG4gICAgICAgIC8vIGxldCBkaXNsZWZ0ID0gOTk5O1xuICAgICAgICAvLyBsZXQgZGlzcmlnaHQgPSA5OTk7XG4gICAgICAgIC8vIGlmIChQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0KHJheUNlbnRlcikpIHtcbiAgICAgICAgLy8gICAgIHRhcmdldENlbnRlciA9IFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3RSZXN1bHQuaGl0UG9pbnQ7XG4gICAgICAgIC8vICAgICBkaXNjZW50ZXIgPSBWZWMzLmRpc3RhbmNlKHRoaXMuY2VudGVyLndvcmxkUG9zaXRpb24sIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3RSZXN1bHQuaGl0UG9pbnQpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0KHJheUxlZnQpKSB7XG4gICAgICAgIC8vICAgICB0YXJnZXRMZWZ0ID0gUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdFJlc3VsdC5oaXRQb2ludDtcbiAgICAgICAgLy8gICAgIGRpc2xlZnQgPSBWZWMzLmRpc3RhbmNlKHRoaXMubGVmdC53b3JsZFBvc2l0aW9uLCBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0UmVzdWx0LmhpdFBvaW50KVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0KHJheVJpZ2h0KSkge1xuICAgICAgICAvLyAgICAgIHRhcmdldFJpZ2h0ID0gUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdFJlc3VsdC5oaXRQb2ludDtcbiAgICAgICAgLy8gICAgIGRpc3JpZ2h0ID0gVmVjMy5kaXN0YW5jZSh0aGlzLnJpZ2h0LndvcmxkUG9zaXRpb24sIFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3RSZXN1bHQuaGl0UG9pbnQpXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYgKGRpc3JpZ2h0IDwgZGlzbGVmdCAmJiBkaXNyaWdodCA8IGRpc2NlbnRlcikge1xuICAgICAgICAvLyAgICAgc3RhcnQgPSB0aGlzLnJpZ2h0O1xuICAgICAgICAvLyAgICAgdGFyZ2V0ID0gdGFyZ2V0UmlnaHQ7XG4gICAgICAgIC8vIH0gZWxzZSBpZiAoZGlzbGVmdCA8IGRpc2NlbnRlciAmJiBkaXNsZWZ0IDwgZGlzcmlnaHQpIHtcbiAgICAgICAgLy8gICAgIHN0YXJ0ID0gdGhpcy5sZWZ0O1xuICAgICAgICAvLyAgICAgdGFyZ2V0ID0gdGFyZ2V0TGVmdDtcbiAgICAgICAgLy8gfSBlbHNlIGlmIChkaXNjZW50ZXIgPCBkaXNsZWZ0ICYmIGRpc2NlbnRlciA8IGRpc3JpZ2h0KSB7XG4gICAgICAgIC8vICAgICBzdGFydCA9IHRoaXMuY2VudGVyO1xuICAgICAgICAvLyAgICAgdGFyZ2V0ID0gdGFyZ2V0Q2VudGVyO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgdGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAodGFyZ2V0KSB7XG4gICAgICAgIC8vICAgICAvLyBpZiAodGFyZ2V0LmxheWVyID09IDEpIHtcbiAgICAgICAgLy8gICAgIC8vICAgICB0YXJnZXRwb3MgPSBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0UmVzdWx0LmhpdFBvaW50O1xuICAgICAgICAvLyAgICAgLy8gfSBlbHNlXG4gICAgICAgIC8vICAgICAvLyAgICAgaWYgKHRhcmdldC5sYXllciA9PSAyKSB7XG4gICAgICAgIC8vICAgICAvLyB0YXJnZXRwb3MgPSB0aGlzLlRlc3Qoc3RhcnQud29ybGRQb3NpdGlvbiwgdGhpcy5nYW5Qb3Mud29ybGRQb3NpdGlvbiwgdGhpcy5jZW50ZXIud29ybGRQb3NpdGlvbiwgdGFyZ2V0LndvcmxkUG9zaXRpb24sIDExLjQyKVxuICAgICAgICAvLyAgICAgLy8gbGV0IHRhcmdldHBvcyA9IHRoaXMuVGVzdDIoc3RhcnQud29ybGRQb3NpdGlvbiwgdGFyZ2V0LndvcmxkUG9zaXRpb24sIDExLjQyKTtcbiAgICAgICAgLy8gICAgIC8vIH1cbiAgICAgICAgLy8gICAgIE15TGluZS5JLkRyYXdMaW5lKEJhbGxNYW5hZ2VyLkkuV2hpdGVCYWxsLndvcmxkUG9zaXRpb24sIHRhcmdldCk7XG4gICAgICAgIC8vIH1cbiJdfQ==