System.register(["cc", "code-quality:cr", "../GameCommon/Ball/BallManager.js", "../GameCommon/Ball/BallType.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, Vec3, _decorator, BallManager, BallType, _dec, _class, _crd, ccclass, MathAlgorithm;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _reportPossibleCrUseOfBallManager(extras) {
    _reporterNs.report("BallManager", "../GameCommon/Ball/BallManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBallType(extras) {
    _reporterNs.report("BallType", "../GameCommon/Ball/BallType", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GameCommonBallBallManagerJs) {
      BallManager = _GameCommonBallBallManagerJs.BallManager;
    }, function (_GameCommonBallBallTypeJs) {
      BallType = _GameCommonBallBallTypeJs.BallType;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "6399fzf3uxDs4E66sUY+fUM", "MathAlgorithm", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;

      _export("MathAlgorithm", MathAlgorithm = (_dec = ccclass('MathAlgorithm'), _dec(_class = /*#__PURE__*/function () {
        function MathAlgorithm() {
          _classCallCheck(this, MathAlgorithm);
        }

        _createClass(MathAlgorithm, null, [{
          key: "Ball_8_Permutation",

          /**8球排列算法
           * （以下1代表实色，2代表花色，0代表黑色）
           *      1
           *     2 1
           *    1 0 2
           *   2 1 2 1
           *  1 2 2 1 2
           * 
           * @param startPos 第一个球的位置
           * @param ballRadius 球的半径
          */
          value: function Ball_8_Permutation() {
            var startPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Vec3(90, 5.71, 0);
            var ballRadius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5.71;
            var outarray = new Array(15);
            outarray[0] = startPos;
            var lerpx = Math.sqrt(ballRadius * ballRadius * 4 - ballRadius * ballRadius);
            var lerpz = ballRadius;
            outarray[1] = new Vec3(startPos.x + lerpx, startPos.y, startPos.z + lerpz);
            outarray[2] = new Vec3(startPos.x + lerpx, startPos.y, startPos.z - lerpz);
            outarray[3] = new Vec3(startPos.x + 2 * lerpx, startPos.y, startPos.z - 2 * ballRadius);
            outarray[4] = new Vec3(startPos.x + 2 * lerpx, startPos.y, startPos.z);
            outarray[5] = new Vec3(startPos.x + 2 * lerpx, startPos.y, startPos.z + 2 * ballRadius);
            outarray[6] = new Vec3(startPos.x + 3 * lerpx, startPos.y, startPos.z + lerpz + 2 * ballRadius);
            outarray[7] = new Vec3(startPos.x + 3 * lerpx, startPos.y, startPos.z + lerpz);
            outarray[8] = new Vec3(startPos.x + 3 * lerpx, startPos.y, startPos.z - lerpz);
            outarray[9] = new Vec3(startPos.x + 3 * lerpx, startPos.y, startPos.z - lerpz - 2 * ballRadius);
            outarray[10] = new Vec3(startPos.x + 4 * lerpx, startPos.y, startPos.z - 4 * ballRadius);
            outarray[11] = new Vec3(startPos.x + 4 * lerpx, startPos.y, startPos.z - 2 * ballRadius);
            outarray[12] = new Vec3(startPos.x + 4 * lerpx, startPos.y, startPos.z);
            outarray[13] = new Vec3(startPos.x + 4 * lerpx, startPos.y, startPos.z + 4 * ballRadius);
            outarray[14] = new Vec3(startPos.x + 4 * lerpx, startPos.y, startPos.z + 2 * ballRadius);
            return outarray;
          }
          /**
           * 计算添加的力的方向(单位向量)
           * @param V1 起始点
           * @param V2 目标点
           */

        }, {
          key: "DirectionOfForce",
          value: function DirectionOfForce(V1, V2) {
            var outvec3 = new Vec3(0, 0, 0);
            Vec3.normalize(outvec3, new Vec3(V2.x - V1.x, 0, V2.z - V1.z));
            return outvec3;
          }
          /**重置某个球的位置*/

        }, {
          key: "ResetBallPos",
          value: function ResetBallPos(ballType) {
            var oldPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Vec3(0, 0, 0);

            if (ballType == (_crd && BallType === void 0 ? (_reportPossibleCrUseOfBallType({
              error: Error()
            }), BallType) : BallType).WHITEBALL) {
              var pos = new Vec3(-120, 5.71, 0);
              return this.panduan2(pos);
            } else if (ballType == (_crd && BallType === void 0 ? (_reportPossibleCrUseOfBallType({
              error: Error()
            }), BallType) : BallType).BLACKBALL) {
              var _pos = new Vec3(90, 5.71, 0);

              return this.panduan2(_pos);
            } else {
              return this.panduan2(oldPos);
            }
          }
          /**判断pos这个位置有没有其他球的存在 返回bool值 若没有返回true；*/

        }, {
          key: "panduan",
          value: function panduan(pos) {
            for (var i = 0; i < (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.AllBallsofNode.length; i++) {
              var element = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.AllBallsofNode[i];

              if (element.worldPosition.x < pos.x + 12 && element.worldPosition.x > pos.x - 12 && element.worldPosition.z < pos.z + 12 && element.worldPosition.z > pos.z - 12) {
                console.log("该位置有其他球存在");
                return false;
              }
            }

            return true;
          }
          /**判断pos这个位置有没有其他球的存在 若有则改变pos的值 向上下左右四个方向延伸*/

        }, {
          key: "panduan2",
          value: function panduan2(pos) {
            var j = 0;
            var index = 1;

            while (true) {
              if (this.panduan(pos)) {
                break;
              } else {
                switch (j % 4) {
                  case 0:
                    var newpos0 = new Vec3(pos.x + index * 5, 5.71, pos.z);
                    pos = newpos0;
                    break;

                  case 1:
                    var newpos1 = new Vec3(pos.x - index * 10, 5.71, pos.z);
                    pos = newpos1;
                    break;

                  case 2:
                    var newpos2 = new Vec3(pos.x + index * 5, 5.71, pos.z + index * 5);
                    pos = newpos2;
                    break;

                  case 4:
                    var newpos3 = new Vec3(pos.x, 5.71, pos.z - index * 10);
                    pos = newpos3;
                    break;

                  default:
                    break;
                }

                index++;
              }
            }

            console.log("球位置应为:", pos);
            return pos;
          }
        }]);

        return MathAlgorithm;
      }()) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0dhbWUvQWxnb3JpdGhtL01hdGhBbGdvcml0aG0udHMiXSwibmFtZXMiOlsiVmVjMyIsIl9kZWNvcmF0b3IiLCJCYWxsTWFuYWdlciIsIkJhbGxUeXBlIiwiY2NjbGFzcyIsIk1hdGhBbGdvcml0aG0iLCJzdGFydFBvcyIsImJhbGxSYWRpdXMiLCJvdXRhcnJheSIsIkFycmF5IiwibGVycHgiLCJNYXRoIiwic3FydCIsImxlcnB6IiwieCIsInkiLCJ6IiwiVjEiLCJWMiIsIm91dHZlYzMiLCJub3JtYWxpemUiLCJiYWxsVHlwZSIsIm9sZFBvcyIsIldISVRFQkFMTCIsInBvcyIsInBhbmR1YW4yIiwiQkxBQ0tCQUxMIiwiaSIsIkkiLCJBbGxCYWxsc29mTm9kZSIsImxlbmd0aCIsImVsZW1lbnQiLCJ3b3JsZFBvc2l0aW9uIiwiY29uc29sZSIsImxvZyIsImoiLCJpbmRleCIsInBhbmR1YW4iLCJuZXdwb3MwIiwibmV3cG9zMSIsIm5ld3BvczIiLCJuZXdwb3MzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEJBLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxVLE9BQUFBLFU7Ozs7QUFDM0JDLE1BQUFBLFcsZ0NBQUFBLFc7O0FBQ0FDLE1BQUFBLFEsNkJBQUFBLFE7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQVlILFUsQ0FBWkcsTzs7K0JBR0tDLGEsV0FEWkQsT0FBTyxDQUFDLGVBQUQsQzs7Ozs7Ozs7QUFHSjs7Ozs7Ozs7Ozs7K0NBVzBHO0FBQUEsZ0JBQWhGRSxRQUFnRix1RUFBL0QsSUFBSU4sSUFBSixDQUFTLEVBQVQsRUFBYSxJQUFiLEVBQW1CLENBQW5CLENBQStEO0FBQUEsZ0JBQXhDTyxVQUF3Qyx1RUFBbkIsSUFBbUI7QUFDdEcsZ0JBQUlDLFFBQXFCLEdBQUcsSUFBSUMs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QTs7QUFDSix1QkFBSyxDQUFMO0FBQ0ksd0JBQUlDLE9BQU8sR0FBRyxJQUFJekMsSUFBSixDQUFTd0IsR0FBRyxDQUFDVixDQUFiLEVBQWdCLElBQWhCLEVBQXNCVSxHQUFHLENBQUNSLENBQUosR0FBUW9CLEtBQUssR0FBRyxFQUF0QyxDQUFkO0FBQ0FaLG9CQUFBQSxHQUFHLEdBQUdpQixPQUFOO0FBQ0E7O0FBQ0o7QUFDSTtBQWxCUjs7QUFvQkFMLGdCQUFBQSxLQUFLO0FBQ1I7QUFDSjs7QUFDREgsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQlYsR0FBdEI7QUFDQSxtQkFBT0EsR0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhQ29tcG9uZW50LCB2MywgVmVjMywgX2RlY29yYXRvciB9IGZyb20gJ2NjJztcbmltcG9ydCB7IEJhbGxNYW5hZ2VyIH0gZnJvbSAnLi4vR2FtZUNvbW1vbi9CYWxsL0JhbGxNYW5hZ2VyJztcbmltcG9ydCB7IEJhbGxUeXBlIH0gZnJvbSAnLi4vR2FtZUNvbW1vbi9CYWxsL0JhbGxUeXBlJztcbmNvbnN0IHsgY2NjbGFzcyB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ01hdGhBbGdvcml0aG0nKVxuZXhwb3J0IGNsYXNzIE1hdGhBbGdvcml0aG0ge1xuXG4gICAgLyoqOOeQg+aOkuWIl+eul+azlVxuICAgICAqIO+8iOS7peS4izHku6Pooajlrp7oibLvvIwy5Luj6KGo6Iqx6Imy77yMMOS7o+ihqOm7keiJsu+8iVxuICAgICAqICAgICAgMVxuICAgICAqICAgICAyIDFcbiAgICAgKiAgICAxIDAgMlxuICAgICAqICAgMiAxIDIgMVxuICAgICAqICAxIDIgMiAxIDJcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gc3RhcnRQb3Mg56ys5LiA5Liq55CD55qE5L2N572uXG4gICAgICogQHBhcmFtIGJhbGxSYWRpdXMg55CD55qE5Y2K5b6EXG4gICAgKi9cbiAgICBzdGF0aWMgQmFsbF84X1Blcm11dGF0aW9uKHN0YXJ0UG9zOiBWZWMzID0gbmV3IFZlYzMoOTAsIDUuNzEsIDApLCBiYWxsUmFkaXVzOiBudW1iZXIgPSA1LjcxKTogQXJyYXk8VmVjMz4ge1xuICAgICAgICBsZXQgb3V0YXJyYXk6IEFycmF5PFZlYzM+ID0gbmV3IEFycmF5PFZlYzM+KDE1KTtcbiAgICAgICAgb3V0YXJyYXlbMF0gPSBzdGFydFBvcztcbiAgICAgICAgbGV0IGxlcnB4ID0gTWF0aC5zcXJ0KGJhbGxSYWRpdXMgKiBiYWxsUmFkaXVzICogNCAtIGJhbGxSYWRpdXMgKiBiYWxsUmFkaXVzKTtcbiAgICAgICAgbGV0IGxlcnB6ID0gYmFsbFJhZGl1cztcblxuICAgICAgICBvdXRhcnJheVsxXSA9IG5ldyBWZWMzKHN0YXJ0UG9zLnggKyBsZXJweCwgc3RhcnRQb3MueSwgc3RhcnRQb3MueiArIGxlcnB6KTtcbiAgICAgICAgb3V0YXJyYXlbMl0gPSBuZXcgVmVjMyhzdGFydFBvcy54ICsgbGVycHgsIHN0YXJ0UG9zLnksIHN0YXJ0UG9zLnogLSBsZXJweik7XG5cbiAgICAgICAgb3V0YXJyYXlbM10gPSBuZXcgVmVjMyhzdGFydFBvcy54ICsgMiAqIGxlcnB4LCBzdGFydFBvcy55LCBzdGFydFBvcy56IC0gMiAqIGJhbGxSYWRpdXMpO1xuICAgICAgICBvdXRhcnJheVs0XSA9IG5ldyBWZWMzKHN0YXJ0UG9zLnggKyAyICogbGVycHgsIHN0YXJ0UG9zLnksIHN0YXJ0UG9zLnopO1xuICAgICAgICBvdXRhcnJheVs1XSA9IG5ldyBWZWMzKHN0YXJ0UG9zLnggKyAyICogbGVycHgsIHN0YXJ0UG9zLnksIHN0YXJ0UG9zLnogKyAyICogYmFsbFJhZGl1cyk7XG5cbiAgICAgICAgb3V0YXJyYXlbNl0gPSBuZXcgVmVjMyhzdGFydFBvcy54ICsgMyAqIGxlcnB4LCBzdGFydFBvcy55LCBzdGFydFBvcy56ICsgbGVycHogKyAyICogYmFsbFJhZGl1cyk7XG4gICAgICAgIG91dGFycmF5WzddID0gbmV3IFZlYzMoc3RhcnRQb3MueCArIDMgKiBsZXJweCwgc3RhcnRQb3MueSwgc3RhcnRQb3MueiArIGxlcnB6KTtcbiAgICAgICAgb3V0YXJyYXlbOF0gPSBuZXcgVmVjMyhzdGFydFBvcy54ICsgMyAqIGxlcnB4LCBzdGFydFBvcy55LCBzdGFydFBvcy56IC0gbGVycHopO1xuICAgICAgICBvdXRhcnJheVs5XSA9IG5ldyBWZWMzKHN0YXJ0UG9zLnggKyAzICogbGVycHgsIHN0YXJ0UG9zLnksIHN0YXJ0UG9zLnogLSBsZXJweiAtIDIgKiBiYWxsUmFkaXVzKTtcblxuICAgICAgICBvdXRhcnJheVsxMF0gPSBuZXcgVmVjMyhzdGFydFBvcy54ICsgNCAqIGxlcnB4LCBzdGFydFBvcy55LCBzdGFydFBvcy56IC0gNCAqIGJhbGxSYWRpdXMpO1xuICAgICAgICBvdXRhcnJheVsxMV0gPSBuZXcgVmVjMyhzdGFydFBvcy54ICsgNCAqIGxlcnB4LCBzdGFydFBvcy55LCBzdGFydFBvcy56IC0gMiAqIGJhbGxSYWRpdXMpO1xuICAgICAgICBvdXRhcnJheVsxMl0gPSBuZXcgVmVjMyhzdGFydFBvcy54ICsgNCAqIGxlcnB4LCBzdGFydFBvcy55LCBzdGFydFBvcy56KTtcbiAgICAgICAgb3V0YXJyYXlbMTNdID0gbmV3IFZlYzMoc3RhcnRQb3MueCArIDQgKiBsZXJweCwgc3RhcnRQb3MueSwgc3RhcnRQb3MueiArIDQgKiBiYWxsUmFkaXVzKTtcbiAgICAgICAgb3V0YXJyYXlbMTRdID0gbmV3IFZlYzMoc3RhcnRQb3MueCArIDQgKiBsZXJweCwgc3RhcnRQb3MueSwgc3RhcnRQb3MueiArIDIgKiBiYWxsUmFkaXVzKTtcbiAgICAgICAgcmV0dXJuIG91dGFycmF5O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDorqHnrpfmt7vliqDnmoTlipvnmoTmlrnlkJEo5Y2V5L2N5ZCR6YePKVxuICAgICAqIEBwYXJhbSBWMSDotbflp4vngrlcbiAgICAgKiBAcGFyYW0gVjIg55uu5qCH54K5XG4gICAgICovXG4gICAgc3RhdGljIERpcmVjdGlvbk9mRm9yY2UoVjE6IFZlYzMsIFYyOiBWZWMzKTogVmVjMyB7XG4gICAgICAgIGxldCBvdXR2ZWMzOiBWZWMzID0gbmV3IFZlYzMoMCwgMCwgMCk7XG4gICAgICAgIFZlYzMubm9ybWFsaXplKG91dHZlYzMsIG5ldyBWZWMzKFYyLnggLSBWMS54LCAwLCBWMi56IC0gVjEueikpXG4gICAgICAgIHJldHVybiBvdXR2ZWMzO1xuICAgIH1cbiAgICAvKirph43nva7mn5DkuKrnkIPnmoTkvY3nva4qL1xuICAgIHN0YXRpYyBSZXNldEJhbGxQb3MoYmFsbFR5cGU6IEJhbGxUeXBlLCBvbGRQb3M6IFZlYzMgPSBuZXcgVmVjMygwLCAwLCAwKSk6IFZlYzMge1xuICAgICAgICBpZiAoYmFsbFR5cGUgPT0gQmFsbFR5cGUuV0hJVEVCQUxMKSB7XG4gICAgICAgICAgICBsZXQgcG9zOiBWZWMzID0gbmV3IFZlYzMoLTEyMCwgNS43MSwgMCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYW5kdWFuMihwb3MpO1xuICAgICAgICB9IGVsc2UgaWYgKGJhbGxUeXBlID09IEJhbGxUeXBlLkJMQUNLQkFMTCkge1xuICAgICAgICAgICAgbGV0IHBvczogVmVjMyA9IG5ldyBWZWMzKDkwLCA1LjcxLCAwKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhbmR1YW4yKHBvcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYW5kdWFuMihvbGRQb3MpO1xuICAgICAgICB9XG5cbiAgICB9XG4gICBcblxuXG5cblxuXG5cblxuXG4gICAgLyoq5Yik5patcG9z6L+Z5Liq5L2N572u5pyJ5rKh5pyJ5YW25LuW55CD55qE5a2Y5ZyoIOi/lOWbnmJvb2zlgLwg6Iul5rKh5pyJ6L+U5ZuedHJ1Ze+8myovXG4gICAgcHJpdmF0ZSBzdGF0aWMgcGFuZHVhbihwb3M6IFZlYzMpOiBib29sZWFuIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBCYWxsTWFuYWdlci5JLkFsbEJhbGxzb2ZOb2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gQmFsbE1hbmFnZXIuSS5BbGxCYWxsc29mTm9kZVtpXTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LndvcmxkUG9zaXRpb24ueCA8IHBvcy54ICsgMTIgJiYgZWxlbWVudC53b3JsZFBvc2l0aW9uLnggPiBwb3MueCAtIDEyICYmIGVsZW1lbnQud29ybGRQb3NpdGlvbi56IDwgcG9zLnogKyAxMiAmJiBlbGVtZW50LndvcmxkUG9zaXRpb24ueiA+IHBvcy56IC0gMTIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuivpeS9jee9ruacieWFtuS7lueQg+WtmOWcqFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKuWIpOaWrXBvc+i/meS4quS9jee9ruacieayoeacieWFtuS7lueQg+eahOWtmOWcqCDoi6XmnInliJnmlLnlj5hwb3PnmoTlgLwg5ZCR5LiK5LiL5bem5Y+z5Zub5Liq5pa55ZCR5bu25Ly4Ki9cbiAgICBwcml2YXRlIHN0YXRpYyBwYW5kdWFuMihwb3MpOiBWZWMzIHtcbiAgICAgICAgbGV0IGogPSAwO1xuICAgICAgICBsZXQgaW5kZXggPSAxO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFuZHVhbihwb3MpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoaiAlIDQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld3BvczAgPSBuZXcgVmVjMyhwb3MueCArIGluZGV4ICogNSwgNS43MSwgcG9zLnopO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gbmV3cG9zMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3cG9zMSA9IG5ldyBWZWMzKHBvcy54IC0gaW5kZXggKiAxMCwgNS43MSwgcG9zLnopO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gbmV3cG9zMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3cG9zMiA9IG5ldyBWZWMzKHBvcy54ICsgaW5kZXggKiA1LCA1LjcxLCBwb3MueiArIGluZGV4ICogNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MgPSBuZXdwb3MyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdwb3MzID0gbmV3IFZlYzMocG9zLngsIDUuNzEsIHBvcy56IC0gaW5kZXggKiAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MgPSBuZXdwb3MzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIueQg+S9jee9ruW6lOS4ujpcIiwgcG9zKTtcbiAgICAgICAgcmV0dXJuIHBvcztcbiAgICB9XG5cbn0iXX0=