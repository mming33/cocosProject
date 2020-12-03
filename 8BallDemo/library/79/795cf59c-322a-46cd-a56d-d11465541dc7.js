System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, _dec, _class, _temp, _crd, ccclass, property, Player;

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
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "795cfWcMipGzaVt0RRlVB3H", "Player", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Player", Player = (_dec = ccclass('Player'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(Player, _Component);

        function Player() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Player);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Player)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.ContinuousBattingNumber = 0;
          _this.ForceDirection = new Vec3(1, 0, 0);
          _this.TargetBallToBeHit = new Array();
          _this.IsStartFollow = false;
          _this.IsFreeBall = false;
          _this.IsContinuousBatting = false;
          _this.IsFoul = false;
          _this.IsSeriousFoul = false;
          _this.IsUnActiveGun = false;
          _this.IsRoundEnd = false;
          _this.IsHaveBallRight = false;
          _this.IsHitBall = false;
          return _this;
        }

        _createClass(Player, [{
          key: "RoundStart",

          /**回合开始 */
          value: function RoundStart() {
            this.IsHitBall = false;
          }
          /**回合结束 */

        }, {
          key: "RoundEnd",
          value: function RoundEnd() {
            this.IsStartFollow = true;
            this.IsUnActiveGun = false;
            this.IsRoundEnd = true;
          }
        }]);

        return Player;
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0dhbWUvR2FtZUNvbW1vbi9QbGF5ZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlZlYzMiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJQbGF5ZXIiLCJDb250aW51b3VzQmF0dGluZ051bWJlciIsIkZvcmNlRGlyZWN0aW9uIiwiVGFyZ2V0QmFsbFRvQmVIaXQiLCJBcnJheSIsIklzU3RhcnRGb2xsb3ciLCJJc0ZyZWVCYWxsIiwiSXNDb250aW51b3VzQmF0dGluZyIsIklzRm91bCIsIklzU2VyaW91c0ZvdWwiLCJJc1VuQWN0aXZlR3VuIiwiSXNSb3VuZEVuZCIsIklzSGF2ZUJhbGxSaWdodCIsIklzSGl0QmFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsSSxPQUFBQSxJOzs7Ozs7QUFJOUJDLE1BQUFBLE8sR0FBc0JILFUsQ0FBdEJHLE87QUFBU0MsTUFBQUEsUSxHQUFhSixVLENBQWJJLFE7O3dCQUdKQyxNLFdBRFpGLE9BQU8sQ0FBQyxRQUFELEM7Ozs7Ozs7Ozs7Ozs7OztnQkFNSkcsdUIsR0FBa0MsQztnQkFFbENDLGMsR0FBdUIsSUFBSUwsSUFBSixDQUFTLENBQVQsRUFBWSxDQUFaLEVBQWUsQ0FBZixDO2dCQUl2Qk0saUIsR0FBNEIsSUFBSUMsS0FBSixFO2dCQUU1QkMsYSxHQUF5QixLO2dCQUV6QkMsVSxHQUFzQixLO2dCQUV0QkMsbUIsR0FBK0IsSztnQkFFL0JDLE0sR0FBa0IsSztnQkFFbEJDLGEsR0FBeUIsSztnQkFFekJDLGEsR0FBeUIsSztnQkFFekJDLFUsR0FBc0IsSztnQkFFdEJDLGUsR0FBMkIsSztnQkFFM0JDLFMsR0FBcUIsSzs7Ozs7OztBQUNyQjt1Q0FDYTtBQUNULGlCQUFLQSxTQUFMLEdBQWlCLEtBQWpCO0FBQ0g7QUFDRDs7OztxQ0FDVztBQUNQLGlCQUFLUixhQUFMLEdBQXFCLElBQXJCO0FBQ0EsaUJBQUtLLGFBQUwsR0FBcUIsS0FBckI7QUFDQSxpQkFBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNIOzs7O1FBdkN1QmYsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVmVjMyB9IGZyb20gJ2NjJztcbmltcG9ydCB7IEJhbGwgfSBmcm9tICcuL0JhbGwvQmFsbCc7XG5pbXBvcnQgeyBCYWxsVHlwZSB9IGZyb20gJy4vQmFsbC9CYWxsVHlwZSc7XG5pbXBvcnQgeyBSb3VuZFR5cGUgfSBmcm9tICcuL1JvdW5kVHlwZSc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnUGxheWVyJylcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKueOqeWutuexu+WeiyAqL1xuICAgIFBsYXllclR5cGU6IFJvdW5kVHlwZTtcblxuICAgIC8qKui/nue7reWHu+eQg+aVsCAqL1xuICAgIENvbnRpbnVvdXNCYXR0aW5nTnVtYmVyOiBudW1iZXIgPSAwO1xuICAgIC8qKuWKm+eahOaWueWQkSAqL1xuICAgIEZvcmNlRGlyZWN0aW9uOiBWZWMzID0gbmV3IFZlYzMoMSwgMCwgMCk7XG4gICAgLyoq6KaB5Ye75omT55qE55CD55qE57G75Z6LICovXG4gICAgVHlwZU9mQmFsbFRvQmVIaXQ6IEJhbGxUeXBlO1xuICAgIC8qKuimgeWHu+aJk+eahOebruagh+eQg+eahOmbhuWQiCAqL1xuICAgIFRhcmdldEJhbGxUb0JlSGl0OiBCYWxsW10gPSBuZXcgQXJyYXk8QmFsbD4oKTtcbiAgICAvKirmmK/lkKblvIDlkK/nkIPmnYbot5/pmo8gKi9cbiAgICBJc1N0YXJ0Rm9sbG93OiBib29sZWFuID0gZmFsc2U7XG4gICAgLyoq5piv5ZCm5byA5ZCv6Ieq55Sx55CDICovXG4gICAgSXNGcmVlQmFsbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8qKuaYr+WQpui/nue7reWHu+eQgyAqL1xuICAgIElzQ29udGludW91c0JhdHRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKirmmK/lkKbniq/op4QgKi9cbiAgICBJc0ZvdWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKirmmK/lkKbkuKXph43niq/op4QgKi9cbiAgICBJc1NlcmlvdXNGb3VsOiBib29sZWFuID0gZmFsc2U7XG4gICAgLyoq5piv5ZCm6ZqQ6JeP55CD5p2GICovXG4gICAgSXNVbkFjdGl2ZUd1bjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8qKuacrOWbnuWQiOaYr+WQpue7k+adnyAqL1xuICAgIElzUm91bmRFbmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKirmmK/lkKblhbfmnInnkIPmnYMgKi9cbiAgICBJc0hhdmVCYWxsUmlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKirmmK/lkKblh7vmiZPov4fnkIMgKi9cbiAgICBJc0hpdEJhbGw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKirlm57lkIjlvIDlp4sgKi9cbiAgICBSb3VuZFN0YXJ0KCkge1xuICAgICAgICB0aGlzLklzSGl0QmFsbCA9IGZhbHNlO1xuICAgIH1cbiAgICAvKirlm57lkIjnu5PmnZ8gKi9cbiAgICBSb3VuZEVuZCgpIHtcbiAgICAgICAgdGhpcy5Jc1N0YXJ0Rm9sbG93ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5Jc1VuQWN0aXZlR3VuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuSXNSb3VuZEVuZCA9IHRydWU7XG4gICAgfVxufVxuIl19