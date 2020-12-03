System.register(["cc", "code-quality:cr", "../../Algorithm/MathAlgorithm.js", "./Ball.js", "./BallManager.js", "./BallPhysics.js", "./BlackBall.js", "./RackManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Prefab, instantiate, SphereCollider, RigidBody, MathAlgorithm, Ball, BallManager, BallPhysics, BlackBall, RackManager, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, CreateBall;

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

  function _reportPossibleCrUseOfBall(extras) {
    _reporterNs.report("Ball", "./Ball", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBallManager(extras) {
    _reporterNs.report("BallManager", "./BallManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBallPhysics(extras) {
    _reporterNs.report("BallPhysics", "./BallPhysics", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlackBall(extras) {
    _reporterNs.report("BlackBall", "./BlackBall", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRackManager(extras) {
    _reporterNs.report("RackManager", "./RackManager", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      SphereCollider = _cc.SphereCollider;
      RigidBody = _cc.RigidBody;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_AlgorithmMathAlgorithmJs) {
      MathAlgorithm = _AlgorithmMathAlgorithmJs.MathAlgorithm;
    }, function (_BallJs) {
      Ball = _BallJs.Ball;
    }, function (_BallManagerJs) {
      BallManager = _BallManagerJs.BallManager;
    }, function (_BallPhysicsJs) {
      BallPhysics = _BallPhysicsJs.BallPhysics;
    }, function (_BlackBallJs) {
      BlackBall = _BlackBallJs.BlackBall;
    }, function (_RackManagerJs) {
      RackManager = _RackManagerJs.RackManager;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "c0b6chier1MzZj2OhRRby5x", "CreateBall", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("CreateBall", CreateBall = (_dec = ccclass('CreateBall'), _dec2 = property({
        type: Prefab
      }), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(CreateBall, _Component);

        function CreateBall() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, CreateBall);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreateBall)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "redBall", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "yellowBall", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "blackBall", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(CreateBall, [{
          key: "start",
          value: function start() {
            this.PutBall();
            this.RackBall();
          }
          /**创建球并摆到相应的位置上（红黄两种颜色的球） */

        }, {
          key: "PutBall",
          value: function PutBall() {
            var posArr = (_crd && MathAlgorithm === void 0 ? (_reportPossibleCrUseOfMathAlgorithm({
              error: Error()
            }), MathAlgorithm) : MathAlgorithm).Ball_8_Permutation();
            var redBallNumbebr = 0;
            var yellowBallNumbebr = 0;

            for (var i = 0; i < posArr.length; i++) {
              var node = null;

              if (i == 4) {
                node = instantiate(this.blackBall);
                (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.BlackBall = node;
                (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.BlackBallComponent = node.getComponent(_crd && BlackBall === void 0 ? (_reportPossibleCrUseOfBlackBall({
                  error: Error()
                }), BlackBall) : BlackBall);
              } else if (redBallNumbebr <= yellowBallNumbebr) {
                node = instantiate(this.redBall[redBallNumbebr]);
                redBallNumbebr++;
                (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.RedBalls.push(node);
              } else {
                node = instantiate(this.yellowBall[yellowBallNumbebr]);
                yellowBallNumbebr++;
                (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.YellowBalls.push(node);
              }

              node.position = posArr[i];
              this.node.parent.addChild(node);
              (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.AllBallsofNode.push(node);
              (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.AllBalls.push(node.getComponent(_crd && Ball === void 0 ? (_reportPossibleCrUseOfBall({
                error: Error()
              }), Ball) : Ball));
            }
          }
          /**创建球 */

        }, {
          key: "RackBall",
          value: function RackBall() {
            for (var i = 0; i < this.redBall.length; i++) {
              var ball = instantiate(this.redBall[i]);
              ball.getComponent(RigidBody).enabled = false;
              ball.getComponent(SphereCollider).enabled = false;
              ball.getComponent(_crd && BallPhysics === void 0 ? (_reportPossibleCrUseOfBallPhysics({
                error: Error()
              }), BallPhysics) : BallPhysics).enabled = false;
              ball.getComponent(_crd && Ball === void 0 ? (_reportPossibleCrUseOfBall({
                error: Error()
              }), Ball) : Ball).enabled = false;
              (_crd && RackManager === void 0 ? (_reportPossibleCrUseOfRackManager({
                error: Error()
              }), RackManager) : RackManager).allBall.push(ball);
            }

            var ball2 = instantiate(this.blackBall);
            ball2.getComponent(RigidBody).enabled = false;
            ball2.getComponent(SphereCollider).enabled = false;
            ball2.getComponent(_crd && BallPhysics === void 0 ? (_reportPossibleCrUseOfBallPhysics({
              error: Error()
            }), BallPhysics) : BallPhysics).enabled = false;
            ball2.getComponent(_crd && BlackBall === void 0 ? (_reportPossibleCrUseOfBlackBall({
              error: Error()
            }), BlackBall) : BlackBall).enabled = false;
            console.log(ball2.getComponent(SphereCollider).enabled);
            (_crd && RackManager === void 0 ? (_reportPossibleCrUseOfRackManager({
              error: Error()
            }), RackManager) : RackManager).allBall.push(ball2);

            for (var _i = 0; _i < this.yellowBall.length; _i++) {
              var ball3 = instantiate(this.yellowBall[_i]);
              ball3.getComponent(RigidBody).enabled = false;
              ball3.getComponent(SphereCollider).enabled = false;
              ball3.getComponent(_crd && BallPhysics === void 0 ? (_reportPossibleCrUseOfBallPhysics({
                error: Error()
              }), BallPhysics) : BallPhysics).enabled = false;
              ball3.getComponent(_crd && Ball === void 0 ? (_reportPossibleCrUseOfBall({
                error: Error()
              }), Ball) : Ball).enabled = false;
              console.log(ball3.getComponent(SphereCollider).enabled);
              (_crd && RackManager === void 0 ? (_reportPossibleCrUseOfRackManager({
                error: Error()
              }), RackManager) : RackManager).allBall.push(ball3);
            }
          }
        }]);

        return CreateBall;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "redBall", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "yellowBall", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "blackBall", [_dec4], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0dhbWUvR2FtZUNvbW1vbi9CYWxsL0NyZWF0ZUJhbGwudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlByZWZhYiIsImluc3RhbnRpYXRlIiwiU3BoZXJlQ29sbGlkZXIiLCJSaWdpZEJvZHkiLCJNYXRoQWxnb3JpdGhtIiwiQmFsbCIsIkJhbGxNYW5hZ2VyIiwiQmFsbFBoeXNpY3MiLCJCbGFja0JhbGwiLCJSYWNrTWFuYWdlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkNyZWF0ZUJhbGwiLCJ0eXBlIiwiUHV0QmFsbCIsIlJhY2tCYWxsIiwicG9zQXJyIiwiQmFsbF84X1Blcm11dGF0aW9uIiwicmVkQmFsbE51bWJlYnIiLCJ5ZWxsb3dCYWxsTnVtYmViciIsImkiLCJsZW5ndGgiLCJub2RlIiwiYmxhY2tCYWxsIiwiSSIsIkJsYWNrQmFsbENvbXBvbmVudCIsImdldENvbXBvbmVudCIsInJlZEJhbGwiLCJSZWRCYWxscyIsInB1c2giLCJ5ZWxsb3dCYWxsIiwiWWVsbG93QmFsbHMiLCJwb3NpdGlvbiIsInBhcmVudCIsImFkZENoaWxkIiwiQWxsQmFsbHNvZk5vZGUiLCJBbGxCYWxscyIsImJhbGwiLCJlbmFibGVkIiwiYWxsQmFsbCIsImJhbGwyIiwiY29uc29sZSIsImxvZyIsImJhbGwzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxjLE9BQUFBLGM7QUFBZ0JDLE1BQUFBLFMsT0FBQUEsUzs7OztBQUNsRUMsTUFBQUEsYSw2QkFBQUEsYTs7QUFDQUMsTUFBQUEsSSxXQUFBQSxJOztBQUNBQyxNQUFBQSxXLGtCQUFBQSxXOztBQUNBQyxNQUFBQSxXLGtCQUFBQSxXOztBQUNBQyxNQUFBQSxTLGdCQUFBQSxTOztBQUVBQyxNQUFBQSxXLGtCQUFBQSxXOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQlosVSxDQUF0QlksTztBQUFTQyxNQUFBQSxRLEdBQWFiLFUsQ0FBYmEsUTs7NEJBR0pDLFUsV0FEWkYsT0FBTyxDQUFDLFlBQUQsQyxVQUVIQyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFYjtBQUFSLE9BQUQsQyxVQUVSVyxRQUFRLENBQUNYLE1BQUQsQyxVQUVSVyxRQUFRLENBQUNYLE1BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUVEO0FBQ0osaUJBQUtjLE9BQUw7QUFDQSxpQkFBS0MsUUFBTDtBQUNIO0FBQ0Q7Ozs7b0NBQ1U7QUFDTixnQkFBSUMsTUFBTSxHQUFHO0FBQUE7QUFBQSxnREFBY0Msa0JBQWQsRUFBYjtBQUNBLGdCQUFJQyxjQUFjLEdBQUcsQ0FBckI7QUFDQSxnQkFBSUMsaUJBQWlCLEdBQUcsQ0FBeEI7O0FBQ0EsaUJBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0osTUFBTSxDQUFDSyxNQUEzQixFQUFtQ0QsQ0FBQyxFQUFwQyxFQUF3QztBQUNwQyxrQkFBSUUsSUFBVSxHQUFHLElBQWpCOztBQUNBLGtCQUFJRixDQUFDLElBQUksQ0FBVCxFQUFZO0FBQ1JFLGdCQUFBQSxJQUFJLEdBQUlyQixXQUFXLENBQUMsS0FBS3NCLFNBQU4sQ0FBbkI7QUFDQTtBQUFBO0FBQUEsZ0RBQVlDLENBQVosQ0FBY2hCLFNBQWQsR0FBMEJjLElBQTFCO0FBQ0E7QUFBQTtBQUFBLGdEQUFZRSxDQUFaLENBQWNDLGtCQUFkLEdBQW1DSCxJQUFJLENBQUNJLFlBQUw7QUFBQTtBQUFBLDJDQUFuQztBQUNILGVBSkQsTUFJTyxJQUFJUixjQUFjLElBQUlDLGlCQUF0QixFQUF5QztBQUM1Q0csZ0JBQUFBLElBQUksR0FBSXJCLFdBQVcsQ0FBQyxLQUFLMEIsT0FBTCxDQUFhVCxjQUFiLENBQUQsQ0FBbkI7QUFDQUEsZ0JBQUFBLGNBQWM7QUFDZDtBQUFBO0FBQUEsZ0RBQVlNLENBQVosQ0FBY0ksUUFBZCxDQUF1QkMsSUFBdkIsQ0FBNEJQLElBQTVCO0FBQ0gsZUFKTSxNQUlBO0FBQ0hBLGdCQUFBQSxJQUFJLEdBQUlyQixXQUFXLENBQUMsS0FBSzZCLFVBQUwsQ0FBZ0JYLGlCQUFoQixDQUFELENBQW5CO0FBQ0FBLGdCQUFBQSxpQkFBaUI7QUFDakI7QUFBQTtBQUFBLGdEQUFZSyxDQUFaLENBQWNPLFdBQWQsQ0FBMEJGLElBQTFCLENBQStCUCxJQUEvQjtBQUNIOztBQUNEQSxjQUFBQSxJQUFJLENBQUNVLFFBQUwsR0FBZ0JoQixNQUFNLENBQUNJLENBQUQsQ0FBdEI7QUFDQSxtQkFBS0UsSUFBTCxDQUFVVyxNQUFWLENBQWlCQyxRQUFqQixDQUEwQlosSUFBMUI7QUFDQTtBQUFBO0FBQUEsOENBQVlFLENBQVosQ0FBY1csY0FBZCxDQUE2Qk4sSUFBN0IsQ0FBa0NQLElBQWxDO0FBQ0E7QUFBQTtBQUFBLDhDQUFZRSxDQUFaLENBQWNZLFFBQWQsQ0FBdUJQLElBQXZCLENBQTRCUCxJQUFJLENBQUNJLFlBQUw7QUFBQTtBQUFBLCtCQUE1QjtBQUNIO0FBQ0o7QUFDRDs7OztxQ0FDVztBQUNQLGlCQUFLLElBQUlOLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS08sT0FBTCxDQUFhTixNQUFqQyxFQUF5Q0QsQ0FBQyxFQUExQyxFQUE4QztBQUMxQyxrQkFBSWlCLElBQUksR0FBR3BDLFdBQVcsQ0FBQyxLQUFLMEIsT0FBTCxDQUFhUCxDQUFiLENBQUQsQ0FBdEI7QUFDQWlCLGNBQUFBLElBQUksQ0FBQ1gsWUFBTCxDQUFrQnZCLFNBQWxCLEVBQTZCbUMsT0FBN0IsR0FBdUMsS0FBdkM7QUFDQUQsY0FBQUEsSUFBSSxDQUFDWCxZQUFMLENBQWtCeEIsY0FBbEIsRUFBa0NvQyxPQUFsQyxHQUE0QyxLQUE1QztBQUNBRCxjQUFBQSxJQUFJLENBQUNYLFlBQUw7QUFBQTtBQUFBLDhDQUErQlksT0FBL0IsR0FBeUMsS0FBekM7QUFDQUQsY0FBQUEsSUFBSSxDQUFDWCxZQUFMO0FBQUE7QUFBQSxnQ0FBd0JZLE9BQXhCLEdBQWtDLEtBQWxDO0FBQ0E7QUFBQTtBQUFBLDhDQUFZQyxPQUFaLENBQW9CVixJQUFwQixDQUF5QlEsSUFBekI7QUFDSDs7QUFDRCxnQkFBSUcsS0FBSyxHQUFHdkMsV0FBVyxDQUFDLEtBQUtzQixTQUFOLENBQXZCO0FBQ0FpQixZQUFBQSxLQUFLLENBQUNkLFlBQU4sQ0FBbUJ2QixTQUFuQixFQUE4Qm1DLE9BQTlCLEdBQXdDLEtBQXhDO0FBQ0FFLFlBQUFBLEtBQUssQ0FBQ2QsWUFBTixDQUFtQnhCLGNBQW5CLEVBQW1Db0MsT0FBbkMsR0FBNkMsS0FBN0M7QUFDQUUsWUFBQUEsS0FBSyxDQUFDZCxZQUFOO0FBQUE7QUFBQSw0Q0FBZ0NZLE9BQWhDLEdBQTBDLEtBQTFDO0FBQ0FFLFlBQUFBLEtBQUssQ0FBQ2QsWUFBTjtBQUFBO0FBQUEsd0NBQThCWSxPQUE5QixHQUF3QyxLQUF4QztBQUNBRyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDZCxZQUFOLENBQW1CeEIsY0FBbkIsRUFBbUNvQyxPQUEvQztBQUNBO0FBQUE7QUFBQSw0Q0FBWUMsT0FBWixDQUFvQlYsSUFBcEIsQ0FBeUJXLEtBQXpCOztBQUNBLGlCQUFLLElBQUlwQixFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHLEtBQUtVLFVBQUwsQ0FBZ0JULE1BQXBDLEVBQTRDRCxFQUFDLEVBQTdDLEVBQWlEO0FBQzdDLGtCQUFJdUIsS0FBSyxHQUFHMUMsV0FBVyxDQUFDLEtBQUs2QixVQUFMLENBQWdCVixFQUFoQixDQUFELENBQXZCO0FBQ0F1QixjQUFBQSxLQUFLLENBQUNqQixZQUFOLENBQW1CdkIsU0FBbkIsRUFBOEJtQyxPQUE5QixHQUF3QyxLQUF4QztBQUNBSyxjQUFBQSxLQUFLLENBQUNqQixZQUFOLENBQW1CeEIsY0FBbkIsRUFBbUNvQyxPQUFuQyxHQUE2QyxLQUE3QztBQUNBSyxjQUFBQSxLQUFLLENBQUNqQixZQUFOO0FBQUE7QUFBQSw4Q0FBZ0NZLE9BQWhDLEdBQTBDLEtBQTFDO0FBQ0FLLGNBQUFBLEtBQUssQ0FBQ2pCLFlBQU47QUFBQTtBQUFBLGdDQUF5QlksT0FBekIsR0FBbUMsS0FBbkM7QUFDQUcsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLEtBQUssQ0FBQ2pCLFlBQU4sQ0FBbUJ4QixjQUFuQixFQUFtQ29DLE9BQS9DO0FBQ0E7QUFBQTtBQUFBLDhDQUFZQyxPQUFaLENBQW9CVixJQUFwQixDQUF5QmMsS0FBekI7QUFDSDtBQUNKOzs7O1FBL0QyQjVDLFM7Ozs7O2lCQUVBLEU7Ozs7Ozs7aUJBRUcsRTs7Ozs7OztpQkFFSCxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIGluc3RhbnRpYXRlLCBTcGhlcmVDb2xsaWRlciwgUmlnaWRCb2R5IH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgTWF0aEFsZ29yaXRobSB9IGZyb20gJy4uLy4uL0FsZ29yaXRobS9NYXRoQWxnb3JpdGhtJztcbmltcG9ydCB7IEJhbGwgfSBmcm9tICcuL0JhbGwnO1xuaW1wb3J0IHsgQmFsbE1hbmFnZXIgfSBmcm9tICcuL0JhbGxNYW5hZ2VyJztcbmltcG9ydCB7IEJhbGxQaHlzaWNzIH0gZnJvbSAnLi9CYWxsUGh5c2ljcyc7XG5pbXBvcnQgeyBCbGFja0JhbGwgfSBmcm9tICcuL0JsYWNrQmFsbCc7XG5pbXBvcnQgeyBPcmRpbmFyeUJhbGwgfSBmcm9tICcuL09yZGluYXJ5QmFsbCc7XG5pbXBvcnQgeyBSYWNrTWFuYWdlciB9IGZyb20gJy4vUmFja01hbmFnZXInO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0NyZWF0ZUJhbGwnKVxuZXhwb3J0IGNsYXNzIENyZWF0ZUJhbGwgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFByZWZhYiB9KVxuICAgIHByaXZhdGUgcmVkQmFsbDogUHJlZmFiW10gPSBbXTtcbiAgICBAcHJvcGVydHkoUHJlZmFiKVxuICAgIHByaXZhdGUgeWVsbG93QmFsbDogUHJlZmFiW10gPSBbXTtcbiAgICBAcHJvcGVydHkoUHJlZmFiKVxuICAgIHByaXZhdGUgYmxhY2tCYWxsOiBQcmVmYWIgPSBudWxsO1xuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLlB1dEJhbGwoKTtcbiAgICAgICAgdGhpcy5SYWNrQmFsbCgpO1xuICAgIH1cbiAgICAvKirliJvlu7rnkIPlubbmkYbliLDnm7jlupTnmoTkvY3nva7kuIrvvIjnuqLpu4TkuKTnp43popzoibLnmoTnkIPvvIkgKi9cbiAgICBQdXRCYWxsKCkge1xuICAgICAgICBsZXQgcG9zQXJyID0gTWF0aEFsZ29yaXRobS5CYWxsXzhfUGVybXV0YXRpb24oKTtcbiAgICAgICAgbGV0IHJlZEJhbGxOdW1iZWJyID0gMDtcbiAgICAgICAgbGV0IHllbGxvd0JhbGxOdW1iZWJyID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub2RlOiBOb2RlID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChpID09IDQpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gKGluc3RhbnRpYXRlKHRoaXMuYmxhY2tCYWxsKSBhcyBOb2RlKTtcbiAgICAgICAgICAgICAgICBCYWxsTWFuYWdlci5JLkJsYWNrQmFsbCA9IG5vZGU7XG4gICAgICAgICAgICAgICAgQmFsbE1hbmFnZXIuSS5CbGFja0JhbGxDb21wb25lbnQgPSBub2RlLmdldENvbXBvbmVudChCbGFja0JhbGwpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWRCYWxsTnVtYmViciA8PSB5ZWxsb3dCYWxsTnVtYmVicikge1xuICAgICAgICAgICAgICAgIG5vZGUgPSAoaW5zdGFudGlhdGUodGhpcy5yZWRCYWxsW3JlZEJhbGxOdW1iZWJyXSkgYXMgTm9kZSlcbiAgICAgICAgICAgICAgICByZWRCYWxsTnVtYmVicisrO1xuICAgICAgICAgICAgICAgIEJhbGxNYW5hZ2VyLkkuUmVkQmFsbHMucHVzaChub2RlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IChpbnN0YW50aWF0ZSh0aGlzLnllbGxvd0JhbGxbeWVsbG93QmFsbE51bWJlYnJdKSBhcyBOb2RlKVxuICAgICAgICAgICAgICAgIHllbGxvd0JhbGxOdW1iZWJyKys7XG4gICAgICAgICAgICAgICAgQmFsbE1hbmFnZXIuSS5ZZWxsb3dCYWxscy5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHBvc0FycltpXTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICBCYWxsTWFuYWdlci5JLkFsbEJhbGxzb2ZOb2RlLnB1c2gobm9kZSk7XG4gICAgICAgICAgICBCYWxsTWFuYWdlci5JLkFsbEJhbGxzLnB1c2gobm9kZS5nZXRDb21wb25lbnQoQmFsbCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKuWIm+W7uueQgyAqL1xuICAgIFJhY2tCYWxsKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVkQmFsbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJhbGwgPSBpbnN0YW50aWF0ZSh0aGlzLnJlZEJhbGxbaV0pO1xuICAgICAgICAgICAgYmFsbC5nZXRDb21wb25lbnQoUmlnaWRCb2R5KS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBiYWxsLmdldENvbXBvbmVudChTcGhlcmVDb2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgYmFsbC5nZXRDb21wb25lbnQoQmFsbFBoeXNpY3MpLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJhbGwuZ2V0Q29tcG9uZW50KEJhbGwpLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIFJhY2tNYW5hZ2VyLmFsbEJhbGwucHVzaChiYWxsKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYmFsbDIgPSBpbnN0YW50aWF0ZSh0aGlzLmJsYWNrQmFsbCk7XG4gICAgICAgIGJhbGwyLmdldENvbXBvbmVudChSaWdpZEJvZHkpLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgYmFsbDIuZ2V0Q29tcG9uZW50KFNwaGVyZUNvbGxpZGVyKS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIGJhbGwyLmdldENvbXBvbmVudChCYWxsUGh5c2ljcykuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICBiYWxsMi5nZXRDb21wb25lbnQoQmxhY2tCYWxsKS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKGJhbGwyLmdldENvbXBvbmVudChTcGhlcmVDb2xsaWRlcikuZW5hYmxlZCk7XG4gICAgICAgIFJhY2tNYW5hZ2VyLmFsbEJhbGwucHVzaChiYWxsMik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy55ZWxsb3dCYWxsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYmFsbDMgPSBpbnN0YW50aWF0ZSh0aGlzLnllbGxvd0JhbGxbaV0pO1xuICAgICAgICAgICAgYmFsbDMuZ2V0Q29tcG9uZW50KFJpZ2lkQm9keSkuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgYmFsbDMuZ2V0Q29tcG9uZW50KFNwaGVyZUNvbGxpZGVyKS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBiYWxsMy5nZXRDb21wb25lbnQoQmFsbFBoeXNpY3MpLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGJhbGwzLmdldENvbXBvbmVudChCYWxsKS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhiYWxsMy5nZXRDb21wb25lbnQoU3BoZXJlQ29sbGlkZXIpLmVuYWJsZWQpO1xuICAgICAgICAgICAgUmFja01hbmFnZXIuYWxsQmFsbC5wdXNoKGJhbGwzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==