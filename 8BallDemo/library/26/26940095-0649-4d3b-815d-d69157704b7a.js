System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, tween, Vec3, Sprite, Color, macro, Enum, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, UIAnimationEnum, UIAnimation;

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

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0,
    UIAnimationEnum: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Sprite = _cc.Sprite;
      Color = _cc.Color;
      macro = _cc.macro;
      Enum = _cc.Enum;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "26940CVBklNO4Fd1pFXcEt6", "UIAnimation", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (UIAnimationEnum) {
        UIAnimationEnum[UIAnimationEnum["MatchingHeadImageBGAnimation"] = 0] = "MatchingHeadImageBGAnimation";
        UIAnimationEnum[UIAnimationEnum["Alpha1to0"] = 1] = "Alpha1to0";
      })(UIAnimationEnum || (UIAnimationEnum = {}));

      _export("UIAnimation", UIAnimation = (_dec = ccclass('Typescript'), _dec2 = property({
        type: Enum(UIAnimationEnum)
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(UIAnimation, _Component);

        function UIAnimation() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, UIAnimation);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UIAnimation)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "thisUIAnimationEnum", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(UIAnimation, [{
          key: "start",
          value: function start() {
            switch (this.thisUIAnimationEnum) {
              case UIAnimationEnum.MatchingHeadImageBGAnimation:
                this.MatchingHeadImageBGAnimation(this.node);
                break;

              case UIAnimationEnum.Alpha1to0:
                var nodeSprite = this.node.getComponent(Sprite);
                this.Alpha1to0(nodeSprite);
                break;

              default:
                break;
            }
          }
          /**匹配时头像背景放大缩小循环动画 */

        }, {
          key: "MatchingHeadImageBGAnimation",
          value: function MatchingHeadImageBGAnimation(node) {
            tween(node).to(0.5, {
              scale: new Vec3(1.1, 1.1, 1.1)
            }
            /** { easing: "backInOut" }*/
            ).to(0.5, {
              scale: new Vec3(1, 1, 1)
            }).union().repeat(999).start();
            ;
          }
        }, {
          key: "Alpha1to0",
          value: function Alpha1to0(node) {
            this.schedule(function () {
              if (node.color.a <= 0) {
                return;
              }

              var index = node.color.a - 1;
              node.color = new Color(node.color.r, node.color.g, node.color.b, index);
            }, 0.01, macro.REPEAT_FOREVER, 0);
          }
        }]);

        return UIAnimation;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "thisUIAnimationEnum", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return UIAnimationEnum.MatchingHeadImageBGAnimation;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9VSUFuaW1hdGlvbi50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwidHdlZW4iLCJWZWMzIiwiU3ByaXRlIiwiQ29sb3IiLCJtYWNybyIsIkVudW0iLCJjY2NsYXNzIiwicHJvcGVydHkiLCJVSUFuaW1hdGlvbkVudW0iLCJVSUFuaW1hdGlvbiIsInR5cGUiLCJ0aGlzVUlBbmltYXRpb25FbnVtIiwiTWF0Y2hpbmdIZWFkSW1hZ2VCR0FuaW1hdGlvbiIsIm5vZGUiLCJBbHBoYTF0bzAiLCJub2RlU3ByaXRlIiwiZ2V0Q29tcG9uZW50IiwidG8iLCJzY2FsZSIsInVuaW9uIiwicmVwZWF0Iiwic3RhcnQiLCJzY2hlZHVsZSIsImNvbG9yIiwiYSIsImluZGV4IiwiciIsImciLCJiIiwiUkVQRUFUX0ZPUkVWRVIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQXdCQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLEksT0FBQUEsSTs7Ozs7O0FBQ3hFQyxNQUFBQSxPLEdBQXNCUixVLENBQXRCUSxPO0FBQVNDLE1BQUFBLFEsR0FBYVQsVSxDQUFiUyxROztpQkFDWkMsZTtBQUFBQSxRQUFBQSxlLENBQUFBLGU7QUFBQUEsUUFBQUEsZSxDQUFBQSxlO1NBQUFBLGUsS0FBQUEsZTs7NkJBTVFDLFcsV0FEWkgsT0FBTyxDQUFDLFlBQUQsQyxVQUVIQyxRQUFRLENBQUM7QUFBRUcsUUFBQUEsSUFBSSxFQUFFTCxJQUFJLENBQUNHLGVBQUQ7QUFBWixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUVEO0FBQ0osb0JBQVEsS0FBS0csbUJBQWI7QUFDSSxtQkFBS0gsZUFBZSxDQUFDSSw0QkFBckI7QUFDSSxxQkFBS0EsNEJBQUwsQ0FBa0MsS0FBS0MsSUFBdkM7QUFDQTs7QUFDSixtQkFBS0wsZUFBZSxDQUFDTSxTQUFyQjtBQUNJLG9CQUFJQyxVQUFVLEdBQUcsS0FBS0YsSUFBTCxDQUFVRyxZQUFWLENBQXVCZCxNQUF2QixDQUFqQjtBQUNBLHFCQUFLWSxTQUFMLENBQWVDLFVBQWY7QUFDQTs7QUFDSjtBQUNJO0FBVFI7QUFXSDtBQUNEOzs7O3VEQUM2QkYsSSxFQUFZO0FBQ3JDYixZQUFBQSxLQUFLLENBQUNhLElBQUQsQ0FBTCxDQUNLSSxFQURMLENBQ1EsR0FEUixFQUNhO0FBQUVDLGNBQUFBLEtBQUssRUFBRSxJQUFJakIsSUFBSixDQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CLEdBQW5CO0FBQVQ7QUFBbUM7QUFEaEQsY0FFS2dCLEVBRkwsQ0FFUSxHQUZSLEVBRWE7QUFBRUMsY0FBQUEsS0FBSyxFQUFFLElBQUlqQixJQUFKLENBQVMsQ0FBVCxFQUFZLENBQVosRUFBZSxDQUFmO0FBQVQsYUFGYixFQUUyQ2tCLEtBRjNDLEdBRW1EQyxNQUZuRCxDQUUwRCxHQUYxRCxFQUUrREMsS0FGL0Q7QUFFdUU7QUFDMUU7OztvQ0FDU1IsSSxFQUFjO0FBQ3BCLGlCQUFLUyxRQUFMLENBQWMsWUFBTTtBQUNoQixrQkFBSVQsSUFBSSxDQUFDVSxLQUFMLENBQVdDLENBQVgsSUFBZ0IsQ0FBcEIsRUFBdUI7QUFDbkI7QUFDSDs7QUFDRCxrQkFBSUMsS0FBSyxHQUFHWixJQUFJLENBQUNVLEtBQUwsQ0FBV0MsQ0FBWCxHQUFlLENBQTNCO0FBQ0FYLGNBQUFBLElBQUksQ0FBQ1UsS0FBTCxHQUFhLElBQUlwQixLQUFKLENBQVVVLElBQUksQ0FBQ1UsS0FBTCxDQUFXRyxDQUFyQixFQUF3QmIsSUFBSSxDQUFDVSxLQUFMLENBQVdJLENBQW5DLEVBQXNDZCxJQUFJLENBQUNVLEtBQUwsQ0FBV0ssQ0FBakQsRUFBb0RILEtBQXBELENBQWI7QUFDSCxhQU5ELEVBTUcsSUFOSCxFQU1TckIsS0FBSyxDQUFDeUIsY0FOZixFQU0rQixDQU4vQjtBQU9IOzs7O1FBOUI0QjlCLFM7Ozs7O2lCQUVVUyxlQUFlLENBQUNJLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBUd2VlbiwgdHdlZW4sIFZlYzMsIFNwcml0ZSwgQ29sb3IsIG1hY3JvLCBFbnVtLCB2MyB9IGZyb20gJ2NjJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5lbnVtIFVJQW5pbWF0aW9uRW51bSB7XG4gICAgTWF0Y2hpbmdIZWFkSW1hZ2VCR0FuaW1hdGlvbixcbiAgICBBbHBoYTF0bzAsXG59XG5cbkBjY2NsYXNzKCdUeXBlc2NyaXB0JylcbmV4cG9ydCBjbGFzcyBVSUFuaW1hdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogRW51bShVSUFuaW1hdGlvbkVudW0pIH0pXG4gICAgdGhpc1VJQW5pbWF0aW9uRW51bTogVUlBbmltYXRpb25FbnVtID0gVUlBbmltYXRpb25FbnVtLk1hdGNoaW5nSGVhZEltYWdlQkdBbmltYXRpb247XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy50aGlzVUlBbmltYXRpb25FbnVtKSB7XG4gICAgICAgICAgICBjYXNlIFVJQW5pbWF0aW9uRW51bS5NYXRjaGluZ0hlYWRJbWFnZUJHQW5pbWF0aW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuTWF0Y2hpbmdIZWFkSW1hZ2VCR0FuaW1hdGlvbih0aGlzLm5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBVSUFuaW1hdGlvbkVudW0uQWxwaGExdG8wOlxuICAgICAgICAgICAgICAgIGxldCBub2RlU3ByaXRlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChTcHJpdGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuQWxwaGExdG8wKG5vZGVTcHJpdGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKirljLnphY3ml7blpLTlg4/og4zmma/mlL7lpKfnvKnlsI/lvqrnjq/liqjnlLsgKi9cbiAgICBNYXRjaGluZ0hlYWRJbWFnZUJHQW5pbWF0aW9uKG5vZGU6IE5vZGUpIHtcbiAgICAgICAgdHdlZW4obm9kZSlcbiAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IG5ldyBWZWMzKDEuMSwgMS4xLCAxLjEpIH0gLyoqIHsgZWFzaW5nOiBcImJhY2tJbk91dFwiIH0qLylcbiAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IG5ldyBWZWMzKDEsIDEsIDEpIH0pLnVuaW9uKCkucmVwZWF0KDk5OSkuc3RhcnQoKTs7XG4gICAgfVxuICAgIEFscGhhMXRvMChub2RlOiBTcHJpdGUpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAobm9kZS5jb2xvci5hIDw9IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgbGV0IGluZGV4ID0gbm9kZS5jb2xvci5hIC0gMTtcbiAgICAgICAgICAgIG5vZGUuY29sb3IgPSBuZXcgQ29sb3Iobm9kZS5jb2xvci5yLCBub2RlLmNvbG9yLmcsIG5vZGUuY29sb3IuYiwgaW5kZXgpO1xuICAgICAgICB9LCAwLjAxLCBtYWNyby5SRVBFQVRfRk9SRVZFUiwgMClcbiAgICB9XG59XG4iXX0=