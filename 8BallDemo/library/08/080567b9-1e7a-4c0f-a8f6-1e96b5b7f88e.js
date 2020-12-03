System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, macro, Quat, _dec, _class, _class2, _temp, _crd, ccclass, property, RackManager;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      macro = _cc.macro;
      Quat = _cc.Quat;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "08056e5HnpMD6j2Hpa1t/iO", "RackManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("RackManager", RackManager = (_dec = ccclass('RackManager'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
        _inherits(RackManager, _Component);

        function RackManager() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, RackManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RackManager)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.GoalBalls = new Array();
          _this.nowBall = null;
          _this.ballindex = 0;
          return _this;
        }

        _createClass(RackManager, [{
          key: "onEnable",
          value: function onEnable() {
            RackManager.I = this.node.getComponent(RackManager);
            RackManager.allBall = new Array();
            this.GoalBalls = new Array();
          }
        }, {
          key: "start",
          value: function start() {// this.scheduleOnce(() => void this.GoalBallAnimation(1), 1);
            // this.scheduleOnce(() => void this.GoalBallAnimation(2), 2);
            // this.scheduleOnce(() => void this.GoalBallAnimation(3), 3);
            // this.scheduleOnce(() => void this.GoalBallAnimation(4), 4);
            // this.scheduleOnce(() => void this.GoalBallAnimation(5), 5);
            // this.scheduleOnce(() => void this.GoalBallAnimation(6), 6);
            // this.scheduleOnce(() => void this.GoalBallAnimation(7), 7);
            // this.scheduleOnce(() => void this.GoalBallAnimation(8), 8);
            // this.scheduleOnce(() => void this.GoalBallAnimation(9), 9);
            // this.scheduleOnce(() => void this.GoalBallAnimation(10), 10);
            // this.scheduleOnce(() => void this.GoalBallAnimation(11), 11);
            // this.scheduleOnce(() => void this.GoalBallAnimation(12), 12);
            // this.scheduleOnce(() => void this.GoalBallAnimation(13), 13);
            // this.scheduleOnce(() => void this.GoalBallAnimation(14), 14);
            // this.scheduleOnce(() => void this.GoalBallAnimation(15), 15);
            // this.schedule(() => {
            //     if (!this.nowBall) {
            //         if (this.ballindex != -1 && this.ballindex != this.GoalBalls.length - 1) {
            //             this.nowBall = this.GoalBalls[this.ballindex + 1];
            //             this.Play(this.nowBall);
            //         }
            //     }
            // }, 1)
          }
        }, {
          key: "GoalBallAnimation",
          value: function GoalBallAnimation() {
            var ballnumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            if (ballnumber > RackManager.allBall.length) return;
            var ball = RackManager.allBall[ballnumber - 1];
            if (this.GoalBalls.indexOf(ball) >= 0) return;
            this.GoalBalls.push(ball);
            this.node.addChild(ball); // console.log(ballnumber, ball);

            ball.worldPosition = new Vec3(185, -15, -67);

            if (!this.nowBall) {
              this.nowBall = ball;
              this.Play(this.nowBall);
            }
          }
        }, {
          key: "Play",
          value: function Play(ball) {
            var _this2 = this;

            var index = 1;
            this.ballindex = this.GoalBalls.indexOf(ball);
            this.schedule(function () {
              return void _this2.mmm(++index, ball);
            }, 0.001, macro.REPEAT_FOREVER);
          }
        }, {
          key: "mmm",
          value: function mmm(index, ball) {
            var rot = new Quat();

            if (index <= 100) {
              //210 , -67
              ball.worldPosition = new Vec3(ball.worldPosition.x + 0.25, -15, -67);
              Quat.fromEuler(rot, 0, -3, 0);
              ball.children[0].rotate(rot, 1);
            } else if (index <= 125) {
              if (index == 125) {
                if (this.ballindex != -1 && this.ballindex != this.GoalBalls.length - 1) {
                  this.nowBall = this.GoalBalls[this.ballindex + 1];
                  this.Play(this.nowBall);
                } else {
                  this.nowBall = null;
                }
              } // 215 , -64


              ball.worldPosition = new Vec3(ball.worldPosition.x + 5 / 25, -15, ball.worldPosition.z + 3 / 25);
              Quat.fromEuler(rot, 1, -2, 0);
              ball.children[0].rotate(rot, 1);
            } else if (index <= 140) {
              // 217 , -60
              ball.worldPosition = new Vec3(ball.worldPosition.x + 2 / 15, -15, ball.worldPosition.z + 4 / 15);
              Quat.fromEuler(rot, 2, -4, 0);
              ball.children[0].rotate(rot, 1);
            } else if (index <= 240 - this.GoalBalls.indexOf(ball) * 7) {
              // 217 100
              ball.worldPosition = new Vec3(217, -15, ball.worldPosition.z + 1.6);
              Quat.fromEuler(rot, 32, 0, 0);
              ball.children[0].rotate(rot, 1);
            } else {
              this.unschedule(this.Play);
            }
          }
        }]);

        return RackManager;
      }(Component), _class2.allBall = new Array(), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0dhbWUvR2FtZUNvbW1vbi9CYWxsL1JhY2tNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJWZWMzIiwibWFjcm8iLCJRdWF0IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiUmFja01hbmFnZXIiLCJHb2FsQmFsbHMiLCJBcnJheSIsIm5vd0JhbGwiLCJiYWxsaW5kZXgiLCJJIiwibm9kZSIsImdldENvbXBvbmVudCIsImFsbEJhbGwiLCJiYWxsbnVtYmVyIiwibGVuZ3RoIiwiYmFsbCIsImluZGV4T2YiLCJwdXNoIiwiYWRkQ2hpbGQiLCJ3b3JsZFBvc2l0aW9uIiwiUGxheSIsImluZGV4Iiwic2NoZWR1bGUiLCJtbW0iLCJSRVBFQVRfRk9SRVZFUiIsInJvdCIsIngiLCJmcm9tRXVsZXIiLCJjaGlsZHJlbiIsInJvdGF0ZSIsInoiLCJ1bnNjaGVkdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFxQkMsTUFBQUEsSSxPQUFBQSxJO0FBQWlCQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsSSxPQUFBQSxJOzs7Ozs7QUFDMURDLE1BQUFBLE8sR0FBc0JMLFUsQ0FBdEJLLE87QUFBU0MsTUFBQUEsUSxHQUFhTixVLENBQWJNLFE7OzZCQUdKQyxXLFdBRFpGLE9BQU8sQ0FBQyxhQUFELEM7Ozs7Ozs7Ozs7Ozs7OztnQkFJSkcsUyxHQUF5QixJQUFJQyxLQUFKLEU7Z0JBNEN6QkMsTyxHQUFnQixJO2dCQUNoQkMsUyxHQUFvQixDOzs7Ozs7cUNBNUNUO0FBQ1BKLFlBQUFBLFdBQVcsQ0FBQ0ssQ0FBWixHQUFnQixLQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJQ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Y0FBQUEsSUFBSSxDQUFDMEIsU0FBTCxDQUFlRixHQUFmLEVBQW9CLEVBQXBCLEVBQXdCLENBQXhCLEVBQTJCLENBQTNCO0FBQ0FWLGNBQUFBLElBQUksQ0FBQ2EsUUFBTCxDQUFjLENBQWQsRUFBaUJDLE1BQWpCLENBQXdCSixHQUF4QixFQUE2QixDQUE3QjtBQUNILGFBTE0sTUFLQTtBQUNILG1CQUFLTSxVQUFMLENBQWdCLEtBQUtYLElBQXJCO0FBQ0g7QUFDSjs7OztRQXpGNEJ0QixTLFdBRXRCYyxPLEdBQXVCLElBQUlOLEtBQUosRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgdjMsIFZlYzMsIGFuaW1hdGlvbiwgbWFjcm8sIFF1YXQsIExpbmUgfSBmcm9tICdjYyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnUmFja01hbmFnZXInKVxuZXhwb3J0IGNsYXNzIFJhY2tNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgSTogUmFja01hbmFnZXI7XG4gICAgc3RhdGljIGFsbEJhbGw6IEFycmF5PE5vZGU+ID0gbmV3IEFycmF5PE5vZGU+KCk7XG4gICAgR29hbEJhbGxzOiBBcnJheTxOb2RlPiA9IG5ldyBBcnJheTxOb2RlPigpO1xuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICBSYWNrTWFuYWdlci5JID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChSYWNrTWFuYWdlcik7XG4gICAgICAgIFJhY2tNYW5hZ2VyLmFsbEJhbGwgPSBuZXcgQXJyYXk8Tm9kZT4oKTtcbiAgICAgICAgdGhpcy5Hb2FsQmFsbHMgPSBuZXcgQXJyYXk8Tm9kZT4oKTtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHZvaWQgdGhpcy5Hb2FsQmFsbEFuaW1hdGlvbigxKSwgMSk7XG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHZvaWQgdGhpcy5Hb2FsQmFsbEFuaW1hdGlvbigyKSwgMik7XG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHZvaWQgdGhpcy5Hb2FsQmFsbEFuaW1hdGlvbigzKSwgMyk7XG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHZvaWQgdGhpcy5Hb2FsQmFsbEFuaW1hdGlvbig0KSwgNCk7XG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHZvaWQgdGhpcy5Hb2FsQmFsbEFuaW1hdGlvbig1KSwgNSk7XG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHZvaWQgdGhpcy5Hb2FsQmFsbEFuaW1hdGlvbig2KSwgNik7XG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHZvaWQgdGhpcy5Hb2FsQmFsbEFuaW1hdGlvbig3KSwgNyk7XG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHZvaWQgdGhpcy5Hb2FsQmFsbEFuaW1hdGlvbig4KSwgOCk7XG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHZvaWQgdGhpcy5Hb2FsQmFsbEFuaW1hdGlvbig5KSwgOSk7XG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHZvaWQgdGhpcy5Hb2FsQmFsbEFuaW1hdGlvbigxMCksIDEwKTtcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4gdm9pZCB0aGlzLkdvYWxCYWxsQW5pbWF0aW9uKDExKSwgMTEpO1xuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB2b2lkIHRoaXMuR29hbEJhbGxBbmltYXRpb24oMTIpLCAxMik7XG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHZvaWQgdGhpcy5Hb2FsQmFsbEFuaW1hdGlvbigxMyksIDEzKTtcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4gdm9pZCB0aGlzLkdvYWxCYWxsQW5pbWF0aW9uKDE0KSwgMTQpO1xuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB2b2lkIHRoaXMuR29hbEJhbGxBbmltYXRpb24oMTUpLCAxNSk7XG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAvLyAgICAgaWYgKCF0aGlzLm5vd0JhbGwpIHtcbiAgICAgICAgLy8gICAgICAgICBpZiAodGhpcy5iYWxsaW5kZXggIT0gLTEgJiYgdGhpcy5iYWxsaW5kZXggIT0gdGhpcy5Hb2FsQmFsbHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLm5vd0JhbGwgPSB0aGlzLkdvYWxCYWxsc1t0aGlzLmJhbGxpbmRleCArIDFdO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLlBsYXkodGhpcy5ub3dCYWxsKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sIDEpXG4gICAgfVxuICAgIEdvYWxCYWxsQW5pbWF0aW9uKGJhbGxudW1iZXI6IG51bWJlciA9IDEpIHtcbiAgICAgICAgaWYgKGJhbGxudW1iZXIgPiBSYWNrTWFuYWdlci5hbGxCYWxsLmxlbmd0aCkgcmV0dXJuXG4gICAgICAgIGxldCBiYWxsID0gUmFja01hbmFnZXIuYWxsQmFsbFtiYWxsbnVtYmVyIC0gMV07XG4gICAgICAgIGlmICh0aGlzLkdvYWxCYWxscy5pbmRleE9mKGJhbGwpID49IDApIHJldHVybjtcbiAgICAgICAgdGhpcy5Hb2FsQmFsbHMucHVzaChiYWxsKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJhbGwpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhiYWxsbnVtYmVyLCBiYWxsKTtcbiAgICAgICAgYmFsbC53b3JsZFBvc2l0aW9uID0gbmV3IFZlYzMoMTg1LCAtMTUsIC02Nyk7XG4gICAgICAgIGlmICghdGhpcy5ub3dCYWxsKSB7XG4gICAgICAgICAgICB0aGlzLm5vd0JhbGwgPSBiYWxsO1xuICAgICAgICAgICAgdGhpcy5QbGF5KHRoaXMubm93QmFsbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm93QmFsbDogTm9kZSA9IG51bGw7XG4gICAgYmFsbGluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgUGxheShiYWxsOiBOb2RlKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDE7XG4gICAgICAgIHRoaXMuYmFsbGluZGV4ID0gdGhpcy5Hb2FsQmFsbHMuaW5kZXhPZihiYWxsKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB2b2lkIHRoaXMubW1tKCsraW5kZXgsIGJhbGwpLCAwLjAwMSwgbWFjcm8uUkVQRUFUX0ZPUkVWRVIpXG5cbiAgICB9XG4gICAgbW1tKGluZGV4LCBiYWxsOiBOb2RlKSB7XG4gICAgICAgIGxldCByb3Q6IFF1YXQgPSBuZXcgUXVhdCgpXG4gICAgICAgIGlmIChpbmRleCA8PSAxMDApIHtcbiAgICAgICAgICAgIC8vMjEwICwgLTY3XG4gICAgICAgICAgICBiYWxsLndvcmxkUG9zaXRpb24gPSBuZXcgVmVjMyhiYWxsLndvcmxkUG9zaXRpb24ueCArIDAuMjUsIC0xNSwgLTY3KTtcbiAgICAgICAgICAgIFF1YXQuZnJvbUV1bGVyKHJvdCwgMCwgLTMsIDApXG4gICAgICAgICAgICBiYWxsLmNoaWxkcmVuWzBdLnJvdGF0ZShyb3QsIDEpO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDw9IDEyNSkge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09IDEyNSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJhbGxpbmRleCAhPSAtMSAmJiB0aGlzLmJhbGxpbmRleCAhPSB0aGlzLkdvYWxCYWxscy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm93QmFsbCA9IHRoaXMuR29hbEJhbGxzW3RoaXMuYmFsbGluZGV4ICsgMV07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheSh0aGlzLm5vd0JhbGwpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm93QmFsbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gMjE1ICwgLTY0XG4gICAgICAgICAgICBiYWxsLndvcmxkUG9zaXRpb24gPSBuZXcgVmVjMyhiYWxsLndvcmxkUG9zaXRpb24ueCArICg1IC8gMjUpLCAtMTUsIGJhbGwud29ybGRQb3NpdGlvbi56ICsgKDMgLyAyNSkpO1xuICAgICAgICAgICAgUXVhdC5mcm9tRXVsZXIocm90LCAxLCAtMiwgMClcbiAgICAgICAgICAgIGJhbGwuY2hpbGRyZW5bMF0ucm90YXRlKHJvdCwgMSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPD0gMTQwKSB7XG4gICAgICAgICAgICAvLyAyMTcgLCAtNjBcbiAgICAgICAgICAgIGJhbGwud29ybGRQb3NpdGlvbiA9IG5ldyBWZWMzKGJhbGwud29ybGRQb3NpdGlvbi54ICsgKDIgLyAxNSksIC0xNSwgYmFsbC53b3JsZFBvc2l0aW9uLnogKyAoNCAvIDE1KSk7XG4gICAgICAgICAgICBRdWF0LmZyb21FdWxlcihyb3QsIDIsIC00LCAwKVxuICAgICAgICAgICAgYmFsbC5jaGlsZHJlblswXS5yb3RhdGUocm90LCAxKTtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8PSAyNDAgLSB0aGlzLkdvYWxCYWxscy5pbmRleE9mKGJhbGwpICogNykge1xuICAgICAgICAgICAgLy8gMjE3IDEwMFxuICAgICAgICAgICAgYmFsbC53b3JsZFBvc2l0aW9uID0gbmV3IFZlYzMoMjE3LCAtMTUsIGJhbGwud29ybGRQb3NpdGlvbi56ICsgMS42KTtcbiAgICAgICAgICAgIFF1YXQuZnJvbUV1bGVyKHJvdCwgMzIsIDAsIDApXG4gICAgICAgICAgICBiYWxsLmNoaWxkcmVuWzBdLnJvdGF0ZShyb3QsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuUGxheSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==