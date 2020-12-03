System.register(["cc", "code-quality:cr", "../../../Common/SourceManager.js", "../GameSceneManager.js", "./BallType.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, RigidBody, Vec3, SphereCollider, Enum, SourceManager, GameSceneManager, BallType, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, Ball;

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

  function _reportPossibleCrUseOfGameSceneManager(extras) {
    _reporterNs.report("GameSceneManager", "../GameSceneManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBallType(extras) {
    _reporterNs.report("BallType", "./BallType", _context.meta, extras);
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
      RigidBody = _cc.RigidBody;
      Vec3 = _cc.Vec3;
      SphereCollider = _cc.SphereCollider;
      Enum = _cc.Enum;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_CommonSourceManagerJs) {
      SourceManager = _CommonSourceManagerJs.SourceManager;
    }, function (_GameSceneManagerJs) {
      GameSceneManager = _GameSceneManagerJs.GameSceneManager;
    }, function (_BallTypeJs) {
      BallType = _BallTypeJs.BallType;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "2034cfbTABHJ7bcvXretBMy", "Ball", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Ball", Ball = (_dec = ccclass('Ball'), _dec2 = property({
        type: Enum(_crd && BallType === void 0 ? (_reportPossibleCrUseOfBallType({
          error: Error()
        }), BallType) : BallType)
      }), _dec3 = property(Number), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(Ball, _Component);

        function Ball() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Ball);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Ball)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "ballTpye", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "ballNumber", _descriptor2, _assertThisInitialized(_this));

          _this.isGoal = false;
          _this.isStop = true;
          _this.isPlaySource = false;
          _this.startinHoleAnimation = false;
          return _this;
        }

        _createClass(Ball, [{
          key: "start",
          value: function start() {
            this.node.getComponent(SphereCollider).on("onCollisionEnter", this.onCollisionEnter, this);
            this.node.getComponent(SphereCollider).on("onTriggerEnter", this.onTriggerEnter, this);
            this.rig = this.node.getComponent(RigidBody);
            this.owner = this.node.getComponent(Ball);
            this.Init();
          }
        }, {
          key: "Init",

          /**初始化 */
          value: function Init() {
            var _this2 = this;

            this.isPlaySource = false;
            this.scheduleOnce(function () {
              _this2.isPlaySource = true;
            }, 4);
          }
        }, {
          key: "playSource",
          value: function playSource(other) {
            if ((_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.Players[(_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.nowPlayerType].IsFreeBall) return;

            if (this.isPlaySource) {
              if (other.node.name == "Table") {
                (_crd && SourceManager === void 0 ? (_reportPossibleCrUseOfSourceManager({
                  error: Error()
                }), SourceManager) : SourceManager).I.Ball2Table();
              } else if (other.node.name == "dong") {
                (_crd && SourceManager === void 0 ? (_reportPossibleCrUseOfSourceManager({
                  error: Error()
                }), SourceManager) : SourceManager).I.InHole();
              } else {
                (_crd && SourceManager === void 0 ? (_reportPossibleCrUseOfSourceManager({
                  error: Error()
                }), SourceManager) : SourceManager).I.Ball2Ball();
              }
            }
          }
          /**
           * 进入碰撞
           * @param obj obj.otherCollider  obj.selfCollider
           */

        }, {
          key: "onCollisionEnter",
          value: function onCollisionEnter(obj) {
            var other = obj.otherCollider;
            this.playSource(other);
          }
          /**
          * 进入触发器
          * @param obj obj.otherCollider  obj.selfCollider
          */

        }, {
          key: "onTriggerEnter",
          value: function onTriggerEnter(obj) {}
        }, {
          key: "update",
          value: function update() {
            this.JudgeIsStop();
          }
          /**判断球是否停止运动 */

        }, {
          key: "JudgeIsStop",
          value: function JudgeIsStop() {
            var linearVeloctiy = new Vec3(0, 0, 0);
            this.rig.getLinearVelocity(linearVeloctiy);

            if (Math.abs(linearVeloctiy.x) <= 0.8 && Math.abs(linearVeloctiy.z) <= 0.8) {
              // this.rig.setLinearVelocity(new Vec3(0, 0, 0));
              this.rig.clearVelocity();
              this.isStop = true;
            } else {
              this.isStop = false;
            }
          }
        }, {
          key: "Rest",
          value: function Rest() {
            this.isGoal = false;
            this.isStop = true;
            this.node.children[0].scale = new Vec3(11.42, 11.42, 11.42);
            this.node.children[0].scale = new Vec3(11.42, 11.42, 11.42);
            this.rig.clearState();
          }
        }, {
          key: "animation",
          value: function animation() {
            if (this.isGoal) this.rig.clearState();
            this.node.children[0].scale = new Vec3(5.71, 5.71, 5.71);
          }
        }, {
          key: "inHoleAnimation",

          /**进球动画 */
          value: function inHoleAnimation(targetpos) {
            var _this3 = this;

            var index = 0;
            if (this.startinHoleAnimation) return;
            this.schedule(function () {
              var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : targetpos;
              _this3.startinHoleAnimation = true;
              _this3.rig.isKinematic = true; //this.node.getComponent(SphereColliderComponent).isTrigger = true;

              _this3.owner.isStop = true;

              if (Vec3.distance(targetpos, _this3.node.worldPosition) > 3) {
                var outpos1 = new Vec3();
                Vec3.lerp(outpos1, _this3.node.worldPosition, targetpos, 0.4);

                _this3.node.setWorldPosition(outpos1);
              } else if (index <= 1) {
                index++;
              } else {
                var outpos2 = new Vec3();
                Vec3.lerp(outpos2, _this3.node.worldScale, new Vec3(0, 0, 0), 0.4);

                _this3.node.setWorldScale(outpos2);

                if (Vec3.distance(new Vec3(0, 0, 0), _this3.node.worldScale) < 0.45) {
                  _this3.node.active = false;

                  _this3.unschedule(_this3.inHoleAnimation);
                }
              }
            }, 0.02);
          }
        }]);

        return Ball;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ballTpye", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && BallType === void 0 ? (_reportPossibleCrUseOfBallType({
            error: Error()
          }), BallType) : BallType).WHITEBALL;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ballNumber", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0dhbWUvR2FtZUNvbW1vbi9CYWxsL0JhbGwudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlJpZ2lkQm9keSIsIlZlYzMiLCJTcGhlcmVDb2xsaWRlciIsIkVudW0iLCJTb3VyY2VNYW5hZ2VyIiwiR2FtZVNjZW5lTWFuYWdlciIsIkJhbGxUeXBlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQmFsbCIsInR5cGUiLCJOdW1iZXIiLCJpc0dvYWwiLCJpc1N0b3AiLCJpc1BsYXlTb3VyY2UiLCJzdGFydGluSG9sZUFuaW1hdGlvbiIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJvbiIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvblRyaWdnZXJFbnRlciIsInJpZyIsIm93bmVyIiwiSW5pdCIsInNjaGVkdWxlT25jZSIsIm90aGVyIiwiSSIsIlBsYXllcnMiLCJub3dQbGF5ZXJUeXBlIiwiSXNGcmVlQmFsbCIsIm5hbWUiLCJCYWxsMlRhYmxlIiwiSW5Ib2xlIiwiQmFsbDJCYWxsIiwib2JqIiwib3RoZXJDb2xsaWRlciIsInBsYXlTb3VyY2UiLCJKdWRnZUlzU3RvcCIsImxpbmVhclZlbG9jdGl5IiwiZ2V0TGluZWFyVmVsb2NpdHkiLCJNYXRoIiwiYWJzIiwieCIsInoiLCJjbGVhclZlbG9jaXR5IiwiY2hpbGRyZW4iLCJzY2FsZSIsImNsZWFyU3RhdGUiLCJ0YXJnZXRwb3MiLCJpbmRleCIsInNjaGVkdWxlIiwidGFyZ2V0IiwiaXNLaW5lbWF0aWMiLCJkaXN0YW5jZSIsIndvcmxkUG9zaXRpb24iLCJvdXRwb3MxIiwibGVycCIsInNldFdvcmxkUG9zaXRpb24iLCJvdXRwb3MyIiwid29ybGRTY2FsZSIsInNldFdvcmxkU2NhbGUiLCJhY3RpdmUiLCJ1bnNjaGVkdWxlIiwiaW5Ib2xlQW5pbWF0aW9uIiwiV0hJ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LENBQUMzQyxJQUFMLENBQVU2QyxNQUFWLEdBQW1CLEtBQW5COztBQUNBLGtCQUFBLE1BQUksQ0FBQ0MsVUFBTCxDQUFnQixNQUFJLENBQUNDLGVBQXJCO0FBQ0g7QUFDSjtBQUNKLGFBcEJELEVBb0JHLElBcEJIO0FBcUJIOzs7O1FBL0dxQmhFLFM7Ozs7O2lCQUlNO0FBQUE7QUFBQSxvQ0FBU2lFLFM7Ozs7Ozs7aUJBR1QsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgUmlnaWRCb2R5LCBWZWMzLCBRdWF0LCB2MywgX19wcml2YXRlLCBCb3hDb2xsaWRlciwgU3BoZXJlQ29sbGlkZXIsIEVudW0sIHJhbmRvbVJhbmdlLCBDb2xsaWRlciwgUGh5c2ljTWF0ZXJpYWwsIFBoeXNpY3NTeXN0ZW0sIFNwaGVyZUNvbGxpZGVyQ29tcG9uZW50IH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgU291cmNlTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uL0NvbW1vbi9Tb3VyY2VNYW5hZ2VyJztcbmltcG9ydCB7IEdhbWVTY2VuZU1hbmFnZXIgfSBmcm9tICcuLi9HYW1lU2NlbmVNYW5hZ2VyJztcbmltcG9ydCB7IEJhbGxUeXBlIH0gZnJvbSAnLi9CYWxsVHlwZSc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnQmFsbCcpXG5leHBvcnQgY2xhc3MgQmFsbCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICAvKirnkIPnmoTnsbvlnosgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBFbnVtKEJhbGxUeXBlKSB9KVxuICAgIHB1YmxpYyBiYWxsVHB5ZTogQmFsbFR5cGUgPSBCYWxsVHlwZS5XSElURUJBTEw7XG4gICAgLyoq55CD55qE5Y+356CBICovXG4gICAgQHByb3BlcnR5KE51bWJlcilcbiAgICBwdWJsaWMgYmFsbE51bWJlcjogbnVtYmVyID0gMDtcbiAgICAvKirmmK/lkKbov5vnkIPkuobvvIjmmK/lkKblnKjmtJ7ph4zvvIkgKi9cbiAgICBwdWJsaWMgaXNHb2FsOiBib29sZWFuID0gZmFsc2U7XG4gICAgLyoq5piv5ZCm5YGc5q2i6L+Q5YqoICovXG4gICAgcHVibGljIGlzU3RvcDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBwdWJsaWMgcmlnOiBSaWdpZEJvZHk7XG4gICAgcHVibGljIG93bmVyOiBCYWxsO1xuXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFNwaGVyZUNvbGxpZGVyKS5vbihcIm9uQ29sbGlzaW9uRW50ZXJcIiwgdGhpcy5vbkNvbGxpc2lvbkVudGVyLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChTcGhlcmVDb2xsaWRlcikub24oXCJvblRyaWdnZXJFbnRlclwiLCB0aGlzLm9uVHJpZ2dlckVudGVyLCB0aGlzKTtcbiAgICAgICAgdGhpcy5yaWcgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFJpZ2lkQm9keSk7XG4gICAgICAgIHRoaXMub3duZXIgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEJhbGwpO1xuICAgICAgICB0aGlzLkluaXQoKTtcbiAgICB9XG4gICAgaXNQbGF5U291cmNlOiBib29sZWFuID0gZmFsc2U7XG4gICAgLyoq5Yid5aeL5YyWICovXG4gICAgcHJvdGVjdGVkIEluaXQoKSB7XG4gICAgICAgIHRoaXMuaXNQbGF5U291cmNlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNQbGF5U291cmNlID0gdHJ1ZTtcbiAgICAgICAgfSwgNCk7XG4gICAgfVxuICAgIHBsYXlTb3VyY2Uob3RoZXI6IENvbGxpZGVyKSB7XG4gICAgICAgIGlmIChHYW1lU2NlbmVNYW5hZ2VyLkkuUGxheWVyc1tHYW1lU2NlbmVNYW5hZ2VyLkkubm93UGxheWVyVHlwZV0uSXNGcmVlQmFsbCkgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5pc1BsYXlTb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChvdGhlci5ub2RlLm5hbWUgPT0gXCJUYWJsZVwiKSB7XG4gICAgICAgICAgICAgICAgU291cmNlTWFuYWdlci5JLkJhbGwyVGFibGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3RoZXIubm9kZS5uYW1lID09IFwiZG9uZ1wiKSB7XG4gICAgICAgICAgICAgICAgU291cmNlTWFuYWdlci5JLkluSG9sZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBTb3VyY2VNYW5hZ2VyLkkuQmFsbDJCYWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog6L+b5YWl56Kw5pKeXG4gICAgICogQHBhcmFtIG9iaiBvYmoub3RoZXJDb2xsaWRlciAgb2JqLnNlbGZDb2xsaWRlclxuICAgICAqL1xuICAgIHByb3RlY3RlZCBvbkNvbGxpc2lvbkVudGVyKG9iaikge1xuICAgICAgICBsZXQgb3RoZXI6IENvbGxpZGVyID0gb2JqLm90aGVyQ29sbGlkZXI7XG4gICAgICAgIHRoaXMucGxheVNvdXJjZShvdGhlcik7XG4gICAgfVxuICAgIC8qKlxuICAgICog6L+b5YWl6Kem5Y+R5ZmoXG4gICAgKiBAcGFyYW0gb2JqIG9iai5vdGhlckNvbGxpZGVyICBvYmouc2VsZkNvbGxpZGVyXG4gICAgKi9cbiAgICBwcm90ZWN0ZWQgb25UcmlnZ2VyRW50ZXIob2JqKSB7XG4gICAgfVxuICAgIHByb3RlY3RlZCB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuSnVkZ2VJc1N0b3AoKTtcbiAgICB9XG4gICAgLyoq5Yik5pat55CD5piv5ZCm5YGc5q2i6L+Q5YqoICovXG4gICAgcHJvdGVjdGVkIEp1ZGdlSXNTdG9wKCkge1xuICAgICAgICBsZXQgbGluZWFyVmVsb2N0aXk6IFZlYzMgPSBuZXcgVmVjMygwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5yaWcuZ2V0TGluZWFyVmVsb2NpdHkobGluZWFyVmVsb2N0aXkpO1xuICAgICAgICBpZiAoTWF0aC5hYnMobGluZWFyVmVsb2N0aXkueCkgPD0gMC44ICYmIE1hdGguYWJzKGxpbmVhclZlbG9jdGl5LnopIDw9IDAuOCkge1xuICAgICAgICAgICAgLy8gdGhpcy5yaWcuc2V0TGluZWFyVmVsb2NpdHkobmV3IFZlYzMoMCwgMCwgMCkpO1xuICAgICAgICAgICAgdGhpcy5yaWcuY2xlYXJWZWxvY2l0eSgpO1xuICAgICAgICAgICAgdGhpcy5pc1N0b3AgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc1N0b3AgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgUmVzdCgpIHtcbiAgICAgICAgdGhpcy5pc0dvYWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1N0b3AgPSB0cnVlO1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uc2NhbGUgPSBuZXcgVmVjMygxMS40MiwgMTEuNDIsIDExLjQyKTtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLnNjYWxlID0gbmV3IFZlYzMoMTEuNDIsIDExLjQyLCAxMS40Mik7XG4gICAgICAgIHRoaXMucmlnLmNsZWFyU3RhdGUoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYW5pbWF0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5pc0dvYWwpXG4gICAgICAgICAgICB0aGlzLnJpZy5jbGVhclN0YXRlKCk7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5zY2FsZSA9IG5ldyBWZWMzKDUuNzEsIDUuNzEsIDUuNzEpO1xuICAgIH1cbiAgICBzdGFydGluSG9sZUFuaW1hdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8qKui/m+eQg+WKqOeUuyAqL1xuICAgIGluSG9sZUFuaW1hdGlvbih0YXJnZXRwb3M6IFZlYzMpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRpbkhvbGVBbmltYXRpb24pIHJldHVybjtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgodGFyZ2V0ID0gdGFyZ2V0cG9zKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0aW5Ib2xlQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucmlnLmlzS2luZW1hdGljID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vdGhpcy5ub2RlLmdldENvbXBvbmVudChTcGhlcmVDb2xsaWRlckNvbXBvbmVudCkuaXNUcmlnZ2VyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMub3duZXIuaXNTdG9wID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChWZWMzLmRpc3RhbmNlKHRhcmdldHBvcywgdGhpcy5ub2RlLndvcmxkUG9zaXRpb24pID4gMykge1xuICAgICAgICAgICAgICAgIGxldCBvdXRwb3MxID0gbmV3IFZlYzMoKTtcbiAgICAgICAgICAgICAgICBWZWMzLmxlcnAob3V0cG9zMSwgdGhpcy5ub2RlLndvcmxkUG9zaXRpb24sIHRhcmdldHBvcywgMC40KTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0V29ybGRQb3NpdGlvbihvdXRwb3MxKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPD0gMSkge1xuICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBvdXRwb3MyID0gbmV3IFZlYzMoKTtcbiAgICAgICAgICAgICAgICBWZWMzLmxlcnAob3V0cG9zMiwgdGhpcy5ub2RlLndvcmxkU2NhbGUsIG5ldyBWZWMzKDAsIDAsIDApLCAwLjQpO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRXb3JsZFNjYWxlKG91dHBvczIpO1xuICAgICAgICAgICAgICAgIGlmIChWZWMzLmRpc3RhbmNlKG5ldyBWZWMzKDAsIDAsIDApLCB0aGlzLm5vZGUud29ybGRTY2FsZSkgPCAwLjQ1KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuaW5Ib2xlQW5pbWF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDAuMDIpO1xuICAgIH1cbn1cbiJdfQ==