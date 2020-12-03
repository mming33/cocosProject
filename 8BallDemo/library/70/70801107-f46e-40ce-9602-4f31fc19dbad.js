System.register(["cc", "code-quality:cr", "../../../Common/SourceManager.js", "../Ball/BallManager.js", "../GameSceneManager.js", "./GameSceneUI.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, SliderComponent, RigidBody, Vec3, geometry, CameraComponent, PhysicsSystem, macro, find, Sprite, Color, SourceManager, BallManager, GameSceneManager, GameSceneUI, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, Ray, PlayerController;

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

  function _reportPossibleCrUseOfSourceManager(extras) {
    _reporterNs.report("SourceManager", "../../../Common/SourceManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBallManager(extras) {
    _reporterNs.report("BallManager", "../Ball/BallManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSceneManager(extras) {
    _reporterNs.report("GameSceneManager", "../GameSceneManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSceneUI(extras) {
    _reporterNs.report("GameSceneUI", "./GameSceneUI", _context.meta, extras);
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
      Node = _cc.Node;
      SliderComponent = _cc.SliderComponent;
      RigidBody = _cc.RigidBody;
      Vec3 = _cc.Vec3;
      geometry = _cc.geometry;
      CameraComponent = _cc.CameraComponent;
      PhysicsSystem = _cc.PhysicsSystem;
      macro = _cc.macro;
      find = _cc.find;
      Sprite = _cc.Sprite;
      Color = _cc.Color;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_CommonSourceManagerJs) {
      SourceManager = _CommonSourceManagerJs.SourceManager;
    }, function (_BallBallManagerJs) {
      BallManager = _BallBallManagerJs.BallManager;
    }, function (_GameSceneManagerJs) {
      GameSceneManager = _GameSceneManagerJs.GameSceneManager;
    }, function (_GameSceneUIJs) {
      GameSceneUI = _GameSceneUIJs.GameSceneUI;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "70801EH9G5AzpYCTzH8Gdut", "PlayerController", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;
      Ray = geometry.ray;

      _export("PlayerController",
      /**玩家操作控制器 */
      PlayerController = (_dec = ccclass('PlayerController'), _dec2 = property(CameraComponent), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(PlayerController, _Component);

        function PlayerController() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, PlayerController);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PlayerController)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "camera", _descriptor, _assertThisInitialized(_this));

          _this.aimstartX = 0;
          _this.aimstartY = 0;
          _this.aimnowX = 0;
          _this.aimnowY = 0;
          _this.freeBallstartX = 0;
          _this.freeBallstartY = 0;
          _this.freeBallnowX = 0;
          _this.freeBallnowY = 0;
          _this.lerpnumber = 7;
          _this.startTouch = false;
          _this.touchtime = 0;
          return _this;
        }

        _createClass(PlayerController, [{
          key: "onEnable",
          value: function onEnable() {
            PlayerController.I = this.node.getComponent(PlayerController);
          }
        }, {
          key: "start",
          value: function start() {
            var _this2 = this;

            var GunDrag = this.node.getChildByName("GunDrag");
            var GunDrag2 = this.node.getChildByName("GunDrag2");
            var ballDrag = this.node.getChildByName("BallDrag");
            this.whiteballUIpos = this.node.getChildByName("whiteballUIpos");
            this.gun = find("Gun/Cylinder");
            this.line = find("Line");
            GunDrag.on(Node.EventType.TOUCH_START, this.Aim_Touch_Start, this);
            GunDrag.on(Node.EventType.TOUCH_MOVE, this.Aim_Touch_Move, this);
            GunDrag.on(Node.EventType.TOUCH_END, this.Aim_Touch_End, this);
            GunDrag2.on(Node.EventType.TOUCH_START, this.Aim_Touch_Start2, this);
            GunDrag2.on(Node.EventType.TOUCH_MOVE, this.Aim_Touch_Move, this);
            GunDrag2.on(Node.EventType.TOUCH_END, this.Aim_Touch_End, this);
            ballDrag.on(Node.EventType.TOUCH_START, this.FreeBall_Touch_Start, this);
            ballDrag.on(Node.EventType.TOUCH_MOVE, this.FreeBall_Touch_Move, this);
            ballDrag.on(Node.EventType.TOUCH_END, this.FreeBall_Touch_End, this);
            ballDrag.on(Node.EventType.TOUCH_CANCEL, this.FreeBall_Touch_End, this);
            this.slider = this.node.getChildByName("Slider").getComponent(SliderComponent);
            this.colorNode = this.slider.node.getChildByName("Color").getComponent(Sprite); // this.node.getChildByName("HitBall")

            this.slider.node.on(Node.EventType.TOUCH_END, this.SliderMouseUp, this);
            this.slider.node.on(Node.EventType.TOUCH_CANCEL, this.SliderMouseUp, this);
            this.schedule(function () {
              var out = new Vec3();

              _this2.camera.convertToUINode((_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.WhiteBall.worldPosition, _this2.node, out);

              if ((_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
                error: Error()
              }), GameSceneManager) : GameSceneManager).I.Players[(_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
                error: Error()
              }), GameSceneManager) : GameSceneManager).I.nowPlayerType].IsFreeBall) {
                ballDrag.position = out;
              }

              _this2.whiteballUIpos.position = out;
            }, 0.02, macro.REPEAT_FOREVER);
          }
          /**松开滑动条 打球 */

        }, {
          key: "SliderMouseUp",
          value: function SliderMouseUp(event) {
            if ((_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.IsOwnerRound()) {
              if (this.slider.progress > 0.06) {
                (_crd && SourceManager === void 0 ? (_reportPossibleCrUseOfSourceManager({
                  error: Error()
                }), SourceManager) : SourceManager).I.Gun2Ball(); //停止计时

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
                }

                find("Gun/Cylinder").active = false;
                find("Line").active = false;
                find("Canvas/GunDrag2").active = false;
                (_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
                  error: Error()
                }), GameSceneManager) : GameSceneManager).I.CloseBallLight();
                var force = this.slider.progress * 300;
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
                this.slider.enabled = false;
              }
            }

            this.slider.progress = 0;
          } //瞄准的方法

        }, {
          key: "Aim_Touch_Start",
          value: function Aim_Touch_Start(event) {
            if (!(_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.IsOwnerRound()) return;
            this.aimstartX = event.getLocationX();
            this.aimstartY = event.getLocationY();
            this.lerpnumber = 7;
            this.startTouch = true;
            this.touchtime = 0;
          } //微调

        }, {
          key: "Aim_Touch_Start2",
          value: function Aim_Touch_Start2(event) {
            if (!(_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.IsOwnerRound()) return;
            this.aimstartX = event.getLocationX();
            this.aimstartY = event.getLocationY();
            this.lerpnumber = 80;
          }
        }, {
          key: "Aim_Touch_Move",
          value: function Aim_Touch_Move(event) {
            if (!(_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.IsOwnerRound()) return;
            this.aimnowX = event.getLocationX();
            this.aimnowY = event.getLocationY();
            var lerpx = this.aimstartX - this.aimnowX;
            var lerpy = this.aimstartY - this.aimnowY;
            var uipos = event.getUILocation();

            if (Math.abs(lerpx) > Math.abs(lerpy)) {
              if (uipos.y > this.whiteballUIpos.worldPosition.y) {
                var anglue = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.whiteBallPos.eulerAngles.y + lerpx / this.lerpnumber;
              } else {
                var anglue = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.whiteBallPos.eulerAngles.y - lerpx / this.lerpnumber;
              }
            } else {
              if (uipos.x > this.whiteballUIpos.worldPosition.x) {
                var anglue = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.whiteBallPos.eulerAngles.y - lerpy / this.lerpnumber;
              } else {
                var anglue = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.whiteBallPos.eulerAngles.y + lerpy / this.lerpnumber;
              }
            }

            (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.whiteBallPos.setRotationFromEuler(0, anglue, 0);
            this.aimstartX = event.getLocationX();
            this.aimstartY = event.getLocationY();

            if (this.lerpnumber == 80) {
              (_crd && GameSceneUI === void 0 ? (_reportPossibleCrUseOfGameSceneUI({
                error: Error()
              }), GameSceneUI) : GameSceneUI).I.GunDrag2ScaleNumberMove(lerpy);
            }
          } //判断是点击还是拖拽。touchtime<10为点击否则为拖拽

        }, {
          key: "Aim_Touch_End",
          value: function Aim_Touch_End(event) {
            if (!(_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.IsOwnerRound()) return;
            this.aimstartX = 0;
            this.aimnowX = 0;
            this.aimstartY = 0;
            this.aimnowY = 0;
            this.startTouch = false;

            if (this.touchtime < 10) {
              console.log("改变角度");
              var out = new Ray();
              this.camera.screenPointToRay(event.getLocationX(), event.getLocationY(), out);

              if (PhysicsSystem.instance.raycastClosest(out)) {
                var point = PhysicsSystem.instance.raycastClosestResult.hitPoint;
                var v3 = new Vec3(point.x, 5.71, point.z);
                (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.whiteBallPos.lookAt(v3);
                console.log(out);
              }
            }
          } // isDrawing: boolean = false;
          // isDrawing1: number = 0;
          // isDrawing2: number = 0;
          //计算点击时间 判断是否使用点击还是拖拽的瞄准办法

        }, {
          key: "update",
          value: function update() {
            // if (GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsFreeBall) {
            //     if (this.isDrawing1 == this.isDrawing2) {
            //         if (this.isDrawing) {
            //             console.log("拖拽结束");
            //             this.isDrawing = false;
            //             this.gun.active = true;
            //             this.line.active = true;
            //         }
            //     } else {
            //         this.isDrawing1 = this.isDrawing2;
            //         this.isDrawing = true;
            //         this.gun.active = false;
            //         this.line.active = false;
            //         console.log("拖拽中");
            //     }
            // }
            if (this.startTouch) {
              this.touchtime++;
            } // if (this.slider.progress == 0) this.colorNode.fillRange = 0;
            else this.colorNode.color = new Color(255, 255, 255, 255 * this.slider.progress);

            if ((_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.Players[(_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.nowPlayerType].IsFreeBall) {
              (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.whiteBallComponent.rig.clearState();
            }
          } //自由球拖拽的方法

        }, {
          key: "FreeBall_Touch_Start",
          value: function FreeBall_Touch_Start(event) {
            if (!(_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.IsOwnerRound()) return;
            find("Canvas/BallDrag/hand").active = false;
            this.gun.active = false;
            this.line.active = false;
            this.freeBallstartX = event.getLocationX();
            this.freeBallstartY = event.getLocationY();
          }
        }, {
          key: "FreeBall_Touch_Move",
          value: function FreeBall_Touch_Move(event) {
            if (!(_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.IsOwnerRound()) return;
            (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.OpenFreeBall();
            this.freeBallnowX = event.getLocationX();
            this.freeBallnowY = event.getLocationY();
            var lerpx = this.freeBallstartX - this.freeBallnowX;
            var lerpy = this.freeBallstartY - this.freeBallnowY;
            var xmove = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.WhiteBall.worldPosition.x - lerpx / 2.2;
            var ymove = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.WhiteBall.worldPosition.z + lerpy / 2.2;
            if (xmove < -176) xmove = -170;
            if (xmove > 176) xmove = 170;
            if (ymove < -84) ymove = -77;
            if (ymove > 84) ymove = 77;

            if ((_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.IsFirstRound) {
              if (xmove > -92) xmove = -92;
            }

            (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.WhiteBall.worldPosition = new Vec3(xmove, 5.71, ymove);
            this.freeBallstartX = event.getLocationX();
            this.freeBallstartY = event.getLocationY(); // this.isDrawing2++;
          }
        }, {
          key: "FreeBall_Touch_End",
          value: function FreeBall_Touch_End(event) {
            if (!(_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.IsOwnerRound()) return; // BallManager.I.CloseFreeBall();

            this.freeBallstartX = 0;
            this.freeBallnowX = 0;
            this.freeBallstartY = 0;
            this.freeBallnowY = 0;
            this.gun.active = true;
            this.line.active = true;
          }
        }]);

        return PlayerController;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class)); // this.schedule(() => {
      // if (GameSceneManager.I.nowPlayerType == RoundType.Play2) {
      // if (GameSceneManager.I.Players[RoundType.Play2].IsHitBall == true) {
      //     console.log("我是机器人2 我要这回合打过球了，我在等待球停止运动");
      //     return;
      // }
      // console.log("我是机器人2 我要开始打球了");
      // this.slider.progress = 1 * Math.random()
      // let force = this.slider.progress * 400;
      // BallManager.I.WhiteBall.getComponent(RigidBody).applyImpulse(new Vec3((Math.random() < 0.5 ? 1 : -1) * force * Math.random(), 0, (Math.random() < 0.5 ? 1 : -1) * force * Math.random()));
      // GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsStartFollow = false;
      // BallManager.I.isAllBallStop = false;
      // GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsHitBall = true;
      // //重置白球第一个碰到的球的信息
      // BallManager.I.ResetWhiteBallFirstTouchBallValue()
      // }
      // if (GameSceneManager.I.nowPlayerType == RoundType.Play1) {
      // if (GameSceneManager.I.Players[RoundType.Play1].IsHitBall == true) {
      //     console.log("我是机器人1 我要这回合打过球了，我在等待球停止运动");
      //     return;
      // }
      // console.log("我是机器人1 我要开始打球了");
      // this.slider.progress = 1 * Math.random();
      // let force = this.slider.progress * 400;
      // BallManager.I.WhiteBall.getComponent(RigidBody).applyImpulse(new Vec3((Math.random() < 0.5 ? 1 : -1) * force * Math.random(), 0, (Math.random() < 0.5 ? 1 : -1) * force * Math.random()));
      // GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsStartFollow = false;
      // BallManager.I.isAllBallStop = false;
      // GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsHitBall = true;
      //重置白球第一个碰到的球的信息
      // BallManager.I.ResetWhiteBallFirstTouchBallValue()
      //     }
      // }, 5, macro.REPEAT_FOREVER, 1);


      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0dhbWUvR2FtZUNvbW1vbi9VSS9QbGF5ZXJDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiU2xpZGVyQ29tcG9uZW50IiwiUmlnaWRCb2R5IiwiVmVjMyIsImdlb21ldHJ5IiwiQ2FtZXJhQ29tcG9uZW50IiwiUGh5c2ljc1N5c3RlbSIsIm1hY3JvIiwiZmluZCIsIlNwcml0ZSIsIkNvbG9yIiwiU291cmNlTWFuYWdlciIsIkJhbGxNYW5hZ2VyIiwiR2FtZVNjZW5lTWFuYWdlciIsIkdhbWVTY2VuZVVJIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiUmF5IiwicmF5IiwiUGxheWVyQ29udHJvbGxlciIsImFpbXN0YXJ0WCIsImFpbXN0YXJ0WSIsImFpbW5vd1giLCJhaW1ub3dZIiwiZnJlZUJhbGxzdGFydFgiLCJmcmVlQmFsbHN0YXJ0WSIsImZyZWVCYWxsbm93WCIsImZyZWVCYWxsbm93WSIsImxlcnBudW1iZXIiLCJzdGFydFRvdWNoIiwidG91Y2h0aW1lIiwiSSIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJHdW5EcmFnIiwiZ2V0Q2hpbGRCeU5hbWUiLCJHdW5EcmFnMiIsImJhbGxEcmFnIiwid2hpdGViYWxsVUlwb3MiLCJndW4iLCJsaW5lIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsIkFpbV9Ub3VjaF9TdGFydCIsIlRPVUNIX01PVkUiLCJBaW1fVG91Y2hfTW92ZSIsIlRPVUNIX0VORCIsIkFpbV9Ub3VjaF9FbmQiLCJBaW1fVG91Y2hfU3RhcnQyIiwiRnJlZUJhbGxfVG91Y2hfU3RhcnQiLCJGcmVlQmFsbF9Ub3VjaF9Nb3ZlIiwiRnJlZUJhbGxfVG91Y2hfRW5kIiwiVE9VQ0hfQ0FOQ0VMIiwic2xpZGVyIiwiY29sb3JOb2RlIiwiU2xpZGVyTW91c2VVcCIsInNjaGVkdWxlIiwib3V0IiwiY2FtZXJhIiwiY29udmVydFRvVUlOb2RlIiwiV2hpdGVCYWxsIiwid29ybGRQb3NpdGlvbiIsIlBsYXllcnMiLCJub3dQbGF5ZXJUeXBlIiwiSXNGcmVlQmFsbCIsInBvc2l0aW9uIiwiUkVQRUFUX0ZPUkVWRVIiLCJldmVudCIsIklzT3duZXJSb3VuZCIsInByb2dyZXNzIiwiR3VuMkJhbGwiLCJFbmRSZWNrb25UaW1lIiwiSXNIaXRCYWxsIiwiY29uc29sZSIsImxvZyIsImFjdGl2ZSIsIkNsb3NlRnJlZUJhbGwiLCJDbG9zZUJhbGxMaWdodCIsImZvcmNlIiwiYXBwbHlJbXB1bHNlIiwiRm9yY2VEaXJlY3Rpb24iLCJ4IiwieiIsIklzU3RhcnRGb2xsb3ciLCJpc0FsbEJhbGxTdG9wIiwiUmVzZXRXaGl0ZUJhbGxGaXJzdFRvdWNoQmFsbFZhbHVlIiwiZW5hYmxlZCIsImdldExvY2F0aW9uWCIsImdldExvY2F0aW9uWSIsImxlcnB4IiwibGVycHkiLCJ1aXBvcyIsImdldFVJTG9jYXRpb24iLCJNYXRoIiwiYWJzIiwieSIsImFuZ2x1ZSIsIndoaXRlQmFsbFBvcyIsImV1bGVyQW5nbGVzIiwic2V0Um90YXRpb25Gcm9tRXVsZXIiLCJHdW5EcmFnMlNjYWxlTnVtYmVyTW92ZSIsInNjcmVlblBvaW50VG9SYXkiLCJpbnN0YW5jZSIsInJheWNhc3RDbG9zZXN0IiwicG9pbnQiLCJyYXljYXN0Q2xvc2VzdFJlc3VsdCIsImhpdFBvaW50IiwidjMiLCJsb29rQXQiLCJjb2xvciIsIndoaXRlQmFsbENvbXBvbmVudCIsInJpZyIsImNsZWFyU3RhdGUiLCJPcGVuRnJlZUJhbGwiLCJ4bW92ZSIsInltb3ZlIiwiSXNGaXJzdFJvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJ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QUFLWSxHQUFMLENBQVNxQyxNQUFULEdBQWtCLElBQWxCO0FBQ0EsaUJBQUtwQyxJQUFMLENBQVVvQyxNQUFWLEdBQW1CLElBQW5CO0FBQ0g7Ozs7UUFwUGlDN0UsUzs7Ozs7aUJBR1IsSTs7a0NBdVE3QjtBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBUb3VjaCwgU2xpZGVyLCBTbGlkZXJDb21wb25lbnQsIFN5c3RlbUV2ZW50VHlwZSwgUmlnaWRCb2R5LCBWZWMzLCBnZW9tZXRyeSwgQ2FtZXJhLCBDYW1lcmFDb21wb25lbnQsIFBoeXNpY3NTeXN0ZW0sIHYzLCBtYWNybywgQ2FudmFzQ29tcG9uZW50LCBzeXN0ZW1FdmVudCwgZmluZCwgbG9hZGVyLCBTY2VuZSwgU2NlbmVBc3NldCwgZGlyZWN0b3IsIFNwcml0ZSwgU3ByaXRlQ29tcG9uZW50LCBsZXJwLCBDb2xvciwgVUlUcmFuc2Zvcm0gfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBTb3VyY2VNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vQ29tbW9uL1NvdXJjZU1hbmFnZXInO1xuaW1wb3J0IHsgR2FtZURhdGEgfSBmcm9tICcuLi8uLi9HYW1lRGF0YSc7XG5pbXBvcnQgeyBCYWxsTWFuYWdlciB9IGZyb20gJy4uL0JhbGwvQmFsbE1hbmFnZXInO1xuaW1wb3J0IHsgR2FtZVNjZW5lTWFuYWdlciB9IGZyb20gJy4uL0dhbWVTY2VuZU1hbmFnZXInO1xuaW1wb3J0IHsgUm9ib3RDb250cm9sbGVyIH0gZnJvbSAnLi4vUm9ib3RDb250cm9sbGVyJztcbmltcG9ydCB7IFJvdW5kVHlwZSB9IGZyb20gJy4uL1JvdW5kVHlwZSc7XG5pbXBvcnQgeyBHYW1lU2NlbmVVSSB9IGZyb20gJy4vR2FtZVNjZW5lVUknO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcbmNvbnN0IHsgcmF5OiBSYXkgfSA9IGdlb21ldHJ5O1xuXG5AY2NjbGFzcygnUGxheWVyQ29udHJvbGxlcicpXG4vKirnjqnlrrbmk43kvZzmjqfliLblmaggKi9cbmV4cG9ydCBjbGFzcyBQbGF5ZXJDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgSTogUGxheWVyQ29udHJvbGxlcjtcbiAgICBAcHJvcGVydHkoQ2FtZXJhQ29tcG9uZW50KVxuICAgIGNhbWVyYTogQ2FtZXJhQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIC8v556E5YeG5Y+C5pWwXG4gICAgcHJpdmF0ZSBhaW1zdGFydFg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBhaW1zdGFydFk6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBhaW1ub3dYOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgYWltbm93WTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNvbG9yTm9kZTogU3ByaXRlO1xuXG4gICAgLy/miZPnkIPlj4LmlbBcbiAgICBwdWJsaWMgc2xpZGVyOiBTbGlkZXJDb21wb25lbnQ7XG5cbiAgICAvL+iHqueUseeQg+WPguaVsFxuICAgIHByaXZhdGUgZnJlZUJhbGxzdGFydFg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBmcmVlQmFsbHN0YXJ0WTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGZyZWVCYWxsbm93WDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGZyZWVCYWxsbm93WTogbnVtYmVyID0gMDtcblxuICAgIC8v556E5YeG5pWw5o2uXG4gICAgcHJpdmF0ZSBsZXJwbnVtYmVyOiBudW1iZXIgPSA3O1xuXG4gICAgcHJpdmF0ZSB3aGl0ZWJhbGxVSXBvczogTm9kZTtcbiAgICBndW46IE5vZGU7XG4gICAgbGluZTogTm9kZTtcbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgUGxheWVyQ29udHJvbGxlci5JID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChQbGF5ZXJDb250cm9sbGVyKTtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGxldCBHdW5EcmFnOiBOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiR3VuRHJhZ1wiKTtcbiAgICAgICAgbGV0IEd1bkRyYWcyOiBOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiR3VuRHJhZzJcIik7XG4gICAgICAgIGxldCBiYWxsRHJhZzogTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJhbGxEcmFnXCIpO1xuICAgICAgICB0aGlzLndoaXRlYmFsbFVJcG9zID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwid2hpdGViYWxsVUlwb3NcIik7XG4gICAgICAgIHRoaXMuZ3VuID0gZmluZChcIkd1bi9DeWxpbmRlclwiKTtcbiAgICAgICAgdGhpcy5saW5lID0gZmluZChcIkxpbmVcIik7XG4gICAgICAgIEd1bkRyYWcub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuQWltX1RvdWNoX1N0YXJ0LCB0aGlzKTtcbiAgICAgICAgR3VuRHJhZy5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLkFpbV9Ub3VjaF9Nb3ZlLCB0aGlzKTtcbiAgICAgICAgR3VuRHJhZy5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuQWltX1RvdWNoX0VuZCwgdGhpcyk7XG5cbiAgICAgICAgR3VuRHJhZzIub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuQWltX1RvdWNoX1N0YXJ0MiwgdGhpcyk7XG4gICAgICAgIEd1bkRyYWcyLm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMuQWltX1RvdWNoX01vdmUsIHRoaXMpO1xuICAgICAgICBHdW5EcmFnMi5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuQWltX1RvdWNoX0VuZCwgdGhpcyk7XG5cbiAgICAgICAgYmFsbERyYWcub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuRnJlZUJhbGxfVG91Y2hfU3RhcnQsIHRoaXMpO1xuICAgICAgICBiYWxsRHJhZy5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLkZyZWVCYWxsX1RvdWNoX01vdmUsIHRoaXMpO1xuICAgICAgICBiYWxsRHJhZy5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuRnJlZUJhbGxfVG91Y2hfRW5kLCB0aGlzKTtcbiAgICAgICAgYmFsbERyYWcub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLkZyZWVCYWxsX1RvdWNoX0VuZCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5zbGlkZXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJTbGlkZXJcIikuZ2V0Q29tcG9uZW50KFNsaWRlckNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuY29sb3JOb2RlID0gdGhpcy5zbGlkZXIubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNvbG9yXCIpLmdldENvbXBvbmVudChTcHJpdGUpO1xuICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJIaXRCYWxsXCIpXG4gICAgICAgIHRoaXMuc2xpZGVyLm5vZGUub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLlNsaWRlck1vdXNlVXAsIHRoaXMpO1xuICAgICAgICB0aGlzLnNsaWRlci5ub2RlLm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5TbGlkZXJNb3VzZVVwLCB0aGlzKTtcblxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBvdXQ6IFZlYzMgPSBuZXcgVmVjMygpO1xuICAgICAgICAgICAgdGhpcy5jYW1lcmEuY29udmVydFRvVUlOb2RlKEJhbGxNYW5hZ2VyLkkuV2hpdGVCYWxsLndvcmxkUG9zaXRpb24sIHRoaXMubm9kZSwgb3V0KVxuICAgICAgICAgICAgaWYgKEdhbWVTY2VuZU1hbmFnZXIuSS5QbGF5ZXJzW0dhbWVTY2VuZU1hbmFnZXIuSS5ub3dQbGF5ZXJUeXBlXS5Jc0ZyZWVCYWxsKSB7XG4gICAgICAgICAgICAgICAgYmFsbERyYWcucG9zaXRpb24gPSBvdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLndoaXRlYmFsbFVJcG9zLnBvc2l0aW9uID0gb3V0O1xuICAgICAgICB9LCAwLjAyLCBtYWNyby5SRVBFQVRfRk9SRVZFUik7XG4gICAgfVxuXG4gICAgLyoq5p2+5byA5ruR5Yqo5p2hIOaJk+eQgyAqL1xuICAgIFNsaWRlck1vdXNlVXAoZXZlbnQpIHtcbiAgICAgICAgaWYgKEdhbWVTY2VuZU1hbmFnZXIuSS5Jc093bmVyUm91bmQoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVyLnByb2dyZXNzID4gMC4wNikge1xuICAgICAgICAgICAgICAgIFNvdXJjZU1hbmFnZXIuSS5HdW4yQmFsbCgpO1xuICAgICAgICAgICAgICAgIC8v5YGc5q2i6K6h5pe2XG4gICAgICAgICAgICAgICAgR2FtZVNjZW5lVUkuSS5FbmRSZWNrb25UaW1lKCk7XG4gICAgICAgICAgICAgICAgaWYgKEdhbWVTY2VuZU1hbmFnZXIuSS5QbGF5ZXJzW0dhbWVTY2VuZU1hbmFnZXIuSS5ub3dQbGF5ZXJUeXBlXS5Jc0hpdEJhbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmnKzlm57lkIjnjqnlrrZcIiwgR2FtZVNjZW5lTWFuYWdlci5JLm5vd1BsYXllclR5cGUsIFwi5bey57uP5Ye75omT6L+H55CD5LqG77yM6K+3562J5b6F5LiL5LiA5Zue5ZCIXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChHYW1lU2NlbmVNYW5hZ2VyLkkuUGxheWVyc1tHYW1lU2NlbmVNYW5hZ2VyLkkubm93UGxheWVyVHlwZV0uSXNGcmVlQmFsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuacrOWbnuWQiOeOqeWutlwiLCBHYW1lU2NlbmVNYW5hZ2VyLkkubm93UGxheWVyVHlwZSwgXCLmnInoh6rnlLHnkIPmnYPvvIznjrDlt7Lnu4/miZPov4fnkIPkuobvvIzph43nva7oh6rnlLHnkIPmnYPvvIzlubblhbPpl63oh6rnlLHnkIPnp7vliqjop4TlrppcIik7XG4gICAgICAgICAgICAgICAgICAgIGZpbmQoXCJDYW52YXMvQmFsbERyYWdcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIEJhbGxNYW5hZ2VyLkkuQ2xvc2VGcmVlQmFsbCgpO1xuICAgICAgICAgICAgICAgICAgICBHYW1lU2NlbmVNYW5hZ2VyLkkuUGxheWVyc1tHYW1lU2NlbmVNYW5hZ2VyLkkubm93UGxheWVyVHlwZV0uSXNGcmVlQmFsbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5kKFwiR3VuL0N5bGluZGVyXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZpbmQoXCJMaW5lXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZpbmQoXCJDYW52YXMvR3VuRHJhZzJcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgR2FtZVNjZW5lTWFuYWdlci5JLkNsb3NlQmFsbExpZ2h0KCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgZm9yY2UgPSB0aGlzLnNsaWRlci5wcm9ncmVzcyAqIDMwMDtcbiAgICAgICAgICAgICAgICBCYWxsTWFuYWdlci5JLldoaXRlQmFsbC5nZXRDb21wb25lbnQoUmlnaWRCb2R5KS5hcHBseUltcHVsc2UobmV3IFZlYzMoR2FtZVNjZW5lTWFuYWdlci5JLlBsYXllcnNbR2FtZVNjZW5lTWFuYWdlci5JLm5vd1BsYXllclR5cGVdLkZvcmNlRGlyZWN0aW9uLnggKiBmb3JjZSwgMCwgR2FtZVNjZW5lTWFuYWdlci5JLlBsYXllcnNbR2FtZVNjZW5lTWFuYWdlci5JLm5vd1BsYXllclR5cGVdLkZvcmNlRGlyZWN0aW9uLnogKiBmb3JjZSkpO1xuICAgICAgICAgICAgICAgIEdhbWVTY2VuZU1hbmFnZXIuSS5QbGF5ZXJzW0dhbWVTY2VuZU1hbmFnZXIuSS5ub3dQbGF5ZXJUeXBlXS5Jc1N0YXJ0Rm9sbG93ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgQmFsbE1hbmFnZXIuSS5pc0FsbEJhbGxTdG9wID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgR2FtZVNjZW5lTWFuYWdlci5JLlBsYXllcnNbR2FtZVNjZW5lTWFuYWdlci5JLm5vd1BsYXllclR5cGVdLklzSGl0QmFsbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy/ph43nva7nmb3nkIPnrKzkuIDkuKrnorDliLDnmoTnkIPnmoTkv6Hmga9cbiAgICAgICAgICAgICAgICBCYWxsTWFuYWdlci5JLlJlc2V0V2hpdGVCYWxsRmlyc3RUb3VjaEJhbGxWYWx1ZSgpXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXIuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2xpZGVyLnByb2dyZXNzID0gMDtcbiAgICB9XG5cbiAgICAvL+eehOWHhueahOaWueazlVxuICAgIHN0YXJ0VG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICB0b3VjaHRpbWU6IG51bWJlciA9IDA7XG4gICAgQWltX1RvdWNoX1N0YXJ0KGV2ZW50OiBUb3VjaCkge1xuICAgICAgICBpZiAoIUdhbWVTY2VuZU1hbmFnZXIuSS5Jc093bmVyUm91bmQoKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmFpbXN0YXJ0WCA9IGV2ZW50LmdldExvY2F0aW9uWCgpO1xuICAgICAgICB0aGlzLmFpbXN0YXJ0WSA9IGV2ZW50LmdldExvY2F0aW9uWSgpO1xuICAgICAgICB0aGlzLmxlcnBudW1iZXIgPSA3O1xuICAgICAgICB0aGlzLnN0YXJ0VG91Y2ggPSB0cnVlO1xuICAgICAgICB0aGlzLnRvdWNodGltZSA9IDA7XG4gICAgfVxuICAgIC8v5b6u6LCDXG4gICAgQWltX1RvdWNoX1N0YXJ0MihldmVudDogVG91Y2gpIHtcbiAgICAgICAgaWYgKCFHYW1lU2NlbmVNYW5hZ2VyLkkuSXNPd25lclJvdW5kKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5haW1zdGFydFggPSBldmVudC5nZXRMb2NhdGlvblgoKTtcbiAgICAgICAgdGhpcy5haW1zdGFydFkgPSBldmVudC5nZXRMb2NhdGlvblkoKTtcbiAgICAgICAgdGhpcy5sZXJwbnVtYmVyID0gODA7XG4gICAgfVxuXG4gICAgQWltX1RvdWNoX01vdmUoZXZlbnQ6IFRvdWNoKSB7XG4gICAgICAgIGlmICghR2FtZVNjZW5lTWFuYWdlci5JLklzT3duZXJSb3VuZCgpKSByZXR1cm47XG4gICAgICAgIHRoaXMuYWltbm93WCA9IGV2ZW50LmdldExvY2F0aW9uWCgpO1xuICAgICAgICB0aGlzLmFpbW5vd1kgPSBldmVudC5nZXRMb2NhdGlvblkoKTtcbiAgICAgICAgbGV0IGxlcnB4ID0gdGhpcy5haW1zdGFydFggLSB0aGlzLmFpbW5vd1g7XG4gICAgICAgIGxldCBsZXJweSA9IHRoaXMuYWltc3RhcnRZIC0gdGhpcy5haW1ub3dZO1xuICAgICAgICBsZXQgdWlwb3MgPSBldmVudC5nZXRVSUxvY2F0aW9uKCk7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKGxlcnB4KSA+IE1hdGguYWJzKGxlcnB5KSkge1xuICAgICAgICAgICAgaWYgKHVpcG9zLnkgPiB0aGlzLndoaXRlYmFsbFVJcG9zLndvcmxkUG9zaXRpb24ueSkge1xuICAgICAgICAgICAgICAgIHZhciBhbmdsdWUgPSBCYWxsTWFuYWdlci5JLndoaXRlQmFsbFBvcy5ldWxlckFuZ2xlcy55ICsgbGVycHggLyB0aGlzLmxlcnBudW1iZXI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBhbmdsdWUgPSBCYWxsTWFuYWdlci5JLndoaXRlQmFsbFBvcy5ldWxlckFuZ2xlcy55IC0gbGVycHggLyB0aGlzLmxlcnBudW1iZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodWlwb3MueCA+IHRoaXMud2hpdGViYWxsVUlwb3Mud29ybGRQb3NpdGlvbi54KSB7XG4gICAgICAgICAgICAgICAgdmFyIGFuZ2x1ZSA9IEJhbGxNYW5hZ2VyLkkud2hpdGVCYWxsUG9zLmV1bGVyQW5nbGVzLnkgLSBsZXJweSAvIHRoaXMubGVycG51bWJlcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGFuZ2x1ZSA9IEJhbGxNYW5hZ2VyLkkud2hpdGVCYWxsUG9zLmV1bGVyQW5nbGVzLnkgKyBsZXJweSAvIHRoaXMubGVycG51bWJlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBCYWxsTWFuYWdlci5JLndoaXRlQmFsbFBvcy5zZXRSb3RhdGlvbkZyb21FdWxlcigwLCBhbmdsdWUsIDApXG4gICAgICAgIHRoaXMuYWltc3RhcnRYID0gZXZlbnQuZ2V0TG9jYXRpb25YKCk7XG4gICAgICAgIHRoaXMuYWltc3RhcnRZID0gZXZlbnQuZ2V0TG9jYXRpb25ZKCk7XG4gICAgICAgIGlmICh0aGlzLmxlcnBudW1iZXIgPT0gODApIHtcbiAgICAgICAgICAgIEdhbWVTY2VuZVVJLkkuR3VuRHJhZzJTY2FsZU51bWJlck1vdmUobGVycHkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8v5Yik5pat5piv54K55Ye76L+Y5piv5ouW5ou944CCdG91Y2h0aW1lPDEw5Li654K55Ye75ZCm5YiZ5Li65ouW5ou9XG4gICAgQWltX1RvdWNoX0VuZChldmVudDogVG91Y2gpIHtcbiAgICAgICAgaWYgKCFHYW1lU2NlbmVNYW5hZ2VyLkkuSXNPd25lclJvdW5kKCkpIHJldHVybjtcbiAgICAgICAgdGhpcy5haW1zdGFydFggPSAwO1xuICAgICAgICB0aGlzLmFpbW5vd1ggPSAwO1xuICAgICAgICB0aGlzLmFpbXN0YXJ0WSA9IDA7XG4gICAgICAgIHRoaXMuYWltbm93WSA9IDA7XG4gICAgICAgIHRoaXMuc3RhcnRUb3VjaCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy50b3VjaHRpbWUgPCAxMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmlLnlj5jop5LluqZcIik7XG4gICAgICAgICAgICBsZXQgb3V0ID0gbmV3IFJheSgpXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5zY3JlZW5Qb2ludFRvUmF5KGV2ZW50LmdldExvY2F0aW9uWCgpLCBldmVudC5nZXRMb2NhdGlvblkoKSwgb3V0KTtcbiAgICAgICAgICAgIGlmIChQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0KG91dCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgcG9pbnQgPSBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0UmVzdWx0LmhpdFBvaW50O1xuICAgICAgICAgICAgICAgIGxldCB2MyA9IG5ldyBWZWMzKHBvaW50LngsIDUuNzEsIHBvaW50LnopO1xuICAgICAgICAgICAgICAgIEJhbGxNYW5hZ2VyLkkud2hpdGVCYWxsUG9zLmxvb2tBdCh2Myk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cob3V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG4gICAgLy8gaXNEcmF3aW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgLy8gaXNEcmF3aW5nMTogbnVtYmVyID0gMDtcbiAgICAvLyBpc0RyYXdpbmcyOiBudW1iZXIgPSAwO1xuICAgIC8v6K6h566X54K55Ye75pe26Ze0IOWIpOaWreaYr+WQpuS9v+eUqOeCueWHu+i/mOaYr+aLluaLveeahOeehOWHhuWKnuazlVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgLy8gaWYgKEdhbWVTY2VuZU1hbmFnZXIuSS5QbGF5ZXJzW0dhbWVTY2VuZU1hbmFnZXIuSS5ub3dQbGF5ZXJUeXBlXS5Jc0ZyZWVCYWxsKSB7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5pc0RyYXdpbmcxID09IHRoaXMuaXNEcmF3aW5nMikge1xuICAgICAgICAvLyAgICAgICAgIGlmICh0aGlzLmlzRHJhd2luZykge1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaLluaLvee7k+adn1wiKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5pc0RyYXdpbmcgPSBmYWxzZTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5ndW4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5saW5lLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmlzRHJhd2luZzEgPSB0aGlzLmlzRHJhd2luZzI7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5pc0RyYXdpbmcgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuZ3VuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMubGluZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIuaLluaLveS4rVwiKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICBpZiAodGhpcy5zdGFydFRvdWNoKSB7XG4gICAgICAgICAgICB0aGlzLnRvdWNodGltZSsrO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmICh0aGlzLnNsaWRlci5wcm9ncmVzcyA9PSAwKSB0aGlzLmNvbG9yTm9kZS5maWxsUmFuZ2UgPSAwO1xuICAgICAgICBlbHNlIHRoaXMuY29sb3JOb2RlLmNvbG9yID0gbmV3IENvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSAqIHRoaXMuc2xpZGVyLnByb2dyZXNzKVxuICAgICAgICBpZiAoR2FtZVNjZW5lTWFuYWdlci5JLlBsYXllcnNbR2FtZVNjZW5lTWFuYWdlci5JLm5vd1BsYXllclR5cGVdLklzRnJlZUJhbGwpIHtcbiAgICAgICAgICAgIEJhbGxNYW5hZ2VyLkkud2hpdGVCYWxsQ29tcG9uZW50LnJpZy5jbGVhclN0YXRlKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgLy/oh6rnlLHnkIPmi5bmi73nmoTmlrnms5VcbiAgICBGcmVlQmFsbF9Ub3VjaF9TdGFydChldmVudDogVG91Y2gpIHtcbiAgICAgICAgaWYgKCFHYW1lU2NlbmVNYW5hZ2VyLkkuSXNPd25lclJvdW5kKCkpIHJldHVybjtcbiAgICAgICAgZmluZChcIkNhbnZhcy9CYWxsRHJhZy9oYW5kXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmd1bi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5saW5lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZyZWVCYWxsc3RhcnRYID0gZXZlbnQuZ2V0TG9jYXRpb25YKCk7XG4gICAgICAgIHRoaXMuZnJlZUJhbGxzdGFydFkgPSBldmVudC5nZXRMb2NhdGlvblkoKTtcbiAgICB9XG4gICAgRnJlZUJhbGxfVG91Y2hfTW92ZShldmVudDogVG91Y2gpIHtcbiAgICAgICAgaWYgKCFHYW1lU2NlbmVNYW5hZ2VyLkkuSXNPd25lclJvdW5kKCkpIHJldHVybjtcbiAgICAgICAgQmFsbE1hbmFnZXIuSS5PcGVuRnJlZUJhbGwoKTtcbiAgICAgICAgdGhpcy5mcmVlQmFsbG5vd1ggPSBldmVudC5nZXRMb2NhdGlvblgoKTtcbiAgICAgICAgdGhpcy5mcmVlQmFsbG5vd1kgPSBldmVudC5nZXRMb2NhdGlvblkoKTtcbiAgICAgICAgbGV0IGxlcnB4ID0gdGhpcy5mcmVlQmFsbHN0YXJ0WCAtIHRoaXMuZnJlZUJhbGxub3dYO1xuICAgICAgICBsZXQgbGVycHkgPSB0aGlzLmZyZWVCYWxsc3RhcnRZIC0gdGhpcy5mcmVlQmFsbG5vd1k7XG4gICAgICAgIGxldCB4bW92ZSA9IEJhbGxNYW5hZ2VyLkkuV2hpdGVCYWxsLndvcmxkUG9zaXRpb24ueCAtIGxlcnB4IC8gMi4yO1xuICAgICAgICBsZXQgeW1vdmUgPSBCYWxsTWFuYWdlci5JLldoaXRlQmFsbC53b3JsZFBvc2l0aW9uLnogKyBsZXJweSAvIDIuMjtcbiAgICAgICAgaWYgKHhtb3ZlIDwgLTE3NikgeG1vdmUgPSAtMTcwO1xuICAgICAgICBpZiAoeG1vdmUgPiAxNzYpIHhtb3ZlID0gMTcwO1xuICAgICAgICBpZiAoeW1vdmUgPCAtODQpIHltb3ZlID0gLTc3O1xuICAgICAgICBpZiAoeW1vdmUgPiA4NCkgeW1vdmUgPSA3NztcbiAgICAgICAgaWYgKEdhbWVTY2VuZU1hbmFnZXIuSS5Jc0ZpcnN0Um91bmQpIHtcbiAgICAgICAgICAgIGlmICh4bW92ZSA+IC05MikgeG1vdmUgPSAtOTI7XG4gICAgICAgIH1cbiAgICAgICAgQmFsbE1hbmFnZXIuSS5XaGl0ZUJhbGwud29ybGRQb3NpdGlvbiA9IG5ldyBWZWMzKHhtb3ZlLCA1LjcxLCB5bW92ZSk7XG4gICAgICAgIHRoaXMuZnJlZUJhbGxzdGFydFggPSBldmVudC5nZXRMb2NhdGlvblgoKTtcbiAgICAgICAgdGhpcy5mcmVlQmFsbHN0YXJ0WSA9IGV2ZW50LmdldExvY2F0aW9uWSgpO1xuICAgICAgICAvLyB0aGlzLmlzRHJhd2luZzIrKztcblxuICAgIH1cbiAgICBGcmVlQmFsbF9Ub3VjaF9FbmQoZXZlbnQ6IFRvdWNoKSB7XG4gICAgICAgIGlmICghR2FtZVNjZW5lTWFuYWdlci5JLklzT3duZXJSb3VuZCgpKSByZXR1cm47XG4gICAgICAgIC8vIEJhbGxNYW5hZ2VyLkkuQ2xvc2VGcmVlQmFsbCgpO1xuICAgICAgICB0aGlzLmZyZWVCYWxsc3RhcnRYID0gMDtcbiAgICAgICAgdGhpcy5mcmVlQmFsbG5vd1ggPSAwO1xuICAgICAgICB0aGlzLmZyZWVCYWxsc3RhcnRZID0gMDtcbiAgICAgICAgdGhpcy5mcmVlQmFsbG5vd1kgPSAwO1xuICAgICAgICB0aGlzLmd1bi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxpbmUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cblxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIC8vIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAvLyBpZiAoR2FtZVNjZW5lTWFuYWdlci5JLm5vd1BsYXllclR5cGUgPT0gUm91bmRUeXBlLlBsYXkyKSB7XG4gICAgICAgIC8vIGlmIChHYW1lU2NlbmVNYW5hZ2VyLkkuUGxheWVyc1tSb3VuZFR5cGUuUGxheTJdLklzSGl0QmFsbCA9PSB0cnVlKSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIuaIkeaYr+acuuWZqOS6ujIg5oiR6KaB6L+Z5Zue5ZCI5omT6L+H55CD5LqG77yM5oiR5Zyo562J5b6F55CD5YGc5q2i6L+Q5YqoXCIpO1xuICAgICAgICAvLyAgICAgcmV0dXJuO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5oiR5piv5py65Zmo5Lq6MiDmiJHopoHlvIDlp4vmiZPnkIPkuoZcIik7XG4gICAgICAgIC8vIHRoaXMuc2xpZGVyLnByb2dyZXNzID0gMSAqIE1hdGgucmFuZG9tKClcbiAgICAgICAgLy8gbGV0IGZvcmNlID0gdGhpcy5zbGlkZXIucHJvZ3Jlc3MgKiA0MDA7XG4gICAgICAgIC8vIEJhbGxNYW5hZ2VyLkkuV2hpdGVCYWxsLmdldENvbXBvbmVudChSaWdpZEJvZHkpLmFwcGx5SW1wdWxzZShuZXcgVmVjMygoTWF0aC5yYW5kb20oKSA8IDAuNSA/IDEgOiAtMSkgKiBmb3JjZSAqIE1hdGgucmFuZG9tKCksIDAsIChNYXRoLnJhbmRvbSgpIDwgMC41ID8gMSA6IC0xKSAqIGZvcmNlICogTWF0aC5yYW5kb20oKSkpO1xuICAgICAgICAvLyBHYW1lU2NlbmVNYW5hZ2VyLkkuUGxheWVyc1tHYW1lU2NlbmVNYW5hZ2VyLkkubm93UGxheWVyVHlwZV0uSXNTdGFydEZvbGxvdyA9IGZhbHNlO1xuICAgICAgICAvLyBCYWxsTWFuYWdlci5JLmlzQWxsQmFsbFN0b3AgPSBmYWxzZTtcbiAgICAgICAgLy8gR2FtZVNjZW5lTWFuYWdlci5JLlBsYXllcnNbR2FtZVNjZW5lTWFuYWdlci5JLm5vd1BsYXllclR5cGVdLklzSGl0QmFsbCA9IHRydWU7XG4gICAgICAgIC8vIC8v6YeN572u55m955CD56ys5LiA5Liq56Kw5Yiw55qE55CD55qE5L+h5oGvXG4gICAgICAgIC8vIEJhbGxNYW5hZ2VyLkkuUmVzZXRXaGl0ZUJhbGxGaXJzdFRvdWNoQmFsbFZhbHVlKClcblxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChHYW1lU2NlbmVNYW5hZ2VyLkkubm93UGxheWVyVHlwZSA9PSBSb3VuZFR5cGUuUGxheTEpIHtcbiAgICAgICAgLy8gaWYgKEdhbWVTY2VuZU1hbmFnZXIuSS5QbGF5ZXJzW1JvdW5kVHlwZS5QbGF5MV0uSXNIaXRCYWxsID09IHRydWUpIHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwi5oiR5piv5py65Zmo5Lq6MSDmiJHopoHov5nlm57lkIjmiZPov4fnkIPkuobvvIzmiJHlnKjnrYnlvoXnkIPlgZzmraLov5DliqhcIik7XG4gICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLmiJHmmK/mnLrlmajkuroxIOaIkeimgeW8gOWni+aJk+eQg+S6hlwiKTtcbiAgICAgICAgLy8gdGhpcy5zbGlkZXIucHJvZ3Jlc3MgPSAxICogTWF0aC5yYW5kb20oKTtcbiAgICAgICAgLy8gbGV0IGZvcmNlID0gdGhpcy5zbGlkZXIucHJvZ3Jlc3MgKiA0MDA7XG4gICAgICAgIC8vIEJhbGxNYW5hZ2VyLkkuV2hpdGVCYWxsLmdldENvbXBvbmVudChSaWdpZEJvZHkpLmFwcGx5SW1wdWxzZShuZXcgVmVjMygoTWF0aC5yYW5kb20oKSA8IDAuNSA/IDEgOiAtMSkgKiBmb3JjZSAqIE1hdGgucmFuZG9tKCksIDAsIChNYXRoLnJhbmRvbSgpIDwgMC41ID8gMSA6IC0xKSAqIGZvcmNlICogTWF0aC5yYW5kb20oKSkpO1xuICAgICAgICAvLyBHYW1lU2NlbmVNYW5hZ2VyLkkuUGxheWVyc1tHYW1lU2NlbmVNYW5hZ2VyLkkubm93UGxheWVyVHlwZV0uSXNTdGFydEZvbGxvdyA9IGZhbHNlO1xuICAgICAgICAvLyBCYWxsTWFuYWdlci5JLmlzQWxsQmFsbFN0b3AgPSBmYWxzZTtcbiAgICAgICAgLy8gR2FtZVNjZW5lTWFuYWdlci5JLlBsYXllcnNbR2FtZVNjZW5lTWFuYWdlci5JLm5vd1BsYXllclR5cGVdLklzSGl0QmFsbCA9IHRydWU7XG4gICAgICAgIC8v6YeN572u55m955CD56ys5LiA5Liq56Kw5Yiw55qE55CD55qE5L+h5oGvXG4gICAgICAgIC8vIEJhbGxNYW5hZ2VyLkkuUmVzZXRXaGl0ZUJhbGxGaXJzdFRvdWNoQmFsbFZhbHVlKClcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSwgNSwgbWFjcm8uUkVQRUFUX0ZPUkVWRVIsIDEpOyJdfQ==