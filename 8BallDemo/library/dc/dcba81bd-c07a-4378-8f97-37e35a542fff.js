System.register(["cc", "code-quality:cr", "../GameSceneManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, Collider, AnimationComponent, GameSceneManager, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, HoleAnimation;

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

  function _reportPossibleCrUseOfGameSceneManager(extras) {
    _reporterNs.report("GameSceneManager", "../GameSceneManager", _context.meta, extras);
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
      Collider = _cc.Collider;
      AnimationComponent = _cc.AnimationComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GameSceneManagerJs) {
      GameSceneManager = _GameSceneManagerJs.GameSceneManager;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "dcba8G9wHpDeI+XN+NaVC//", "HoleAnimation", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("HoleAnimation", HoleAnimation = (_dec = ccclass('HoleAnimation'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(HoleAnimation, _Component);

        function HoleAnimation() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, HoleAnimation);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HoleAnimation)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "eff", _descriptor, _assertThisInitialized(_this));

          _this.effanimation = null;
          return _this;
        }

        _createClass(HoleAnimation, [{
          key: "start",
          value: function start() {
            this.node.getComponent(Collider).on("onTriggerEnter", this.onTriggerEnter, this);
            this.effanimation = this.eff.getComponent(AnimationComponent);
          }
        }, {
          key: "onTriggerEnter",
          value: function onTriggerEnter(obj) {
            if ((_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.Players[(_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.nowPlayerType].IsFreeBall) {
              return;
            }

            console.log(obj);
            this.eff.active = true;
            this.effanimation.play();
          }
        }]);

        return HoleAnimation;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "eff", [_dec2], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0dhbWUvR2FtZUNvbW1vbi9CYWxsL0hvbGVBbmltYXRpb24udHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJDb2xsaWRlciIsIkFuaW1hdGlvbkNvbXBvbmVudCIsIkdhbWVTY2VuZU1hbmFnZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJIb2xlQW5pbWF0aW9uIiwiZWZmYW5pbWF0aW9uIiwibm9kZSIsImdldENvbXBvbmVudCIsIm9uIiwib25UcmlnZ2VyRW50ZXIiLCJlZmYiLCJvYmoiLCJJIiwiUGxheWVycyIsIm5vd1BsYXllclR5cGUiLCJJc0ZyZWVCYWxsIiwiY29uc29sZSIsImxvZyIsImFjdGl2ZSIsInBsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUEwREMsTUFBQUEsUSxPQUFBQSxRO0FBQVVDLE1BQUFBLGtCLE9BQUFBLGtCOzs7O0FBQzNGQyxNQUFBQSxnQix1QkFBQUEsZ0I7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCTixVLENBQXRCTSxPO0FBQVNDLE1BQUFBLFEsR0FBYVAsVSxDQUFiTyxROzsrQkFHSkMsYSxXQURaRixPQUFPLENBQUMsZUFBRCxDLFVBRUhDLFFBQVEsQ0FBQ0wsSUFBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBRVRPLFksR0FBbUMsSTs7Ozs7O2tDQUMzQjtBQUNKLGlCQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJSLFFBQXZCLEVBQWlDUyxFQUFqQyxDQUFvQyxnQkFBcEMsRUFBc0QsS0FBS0MsY0FBM0QsRUFBMkUsSUFBM0U7QUFDQSxpQkFBS0osWUFBTCxHQUFvQixLQUFLSyxHQUFMLENBQVNILFlBQVQsQ0FBc0JQLGtCQUF0QixDQUFwQjtBQUNIOzs7eUNBRXdCVyxHLEVBQUs7QUFDMUIsZ0JBQUk7QUFBQTtBQUFBLHNEQUFpQkMsQ0FBakIsQ0FBbUJDLE9BQW5CLENBQTJCO0FBQUE7QUFBQSxzREFBaUJELENBQWpCLENBQW1CRSxhQUE5QyxFQUE2REMsVUFBakUsRUFBNkU7QUFDekU7QUFDSDs7QUFDREMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlOLEdBQVo7QUFDQSxpQkFBS0QsR0FBTCxDQUFTUSxNQUFULEdBQWtCLElBQWxCO0FBQ0EsaUJBQUtiLFlBQUwsQ0FBa0JjLElBQWxCO0FBQ0g7Ozs7UUFoQjhCdEIsUzs7Ozs7aUJBRW5CLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFNwaGVyZUNvbGxpZGVyLCB0d2VlbiwgZWZmZWN0cywgVmVjMywgTWVzaFJlbmRlcmVyLCBDb2xsaWRlciwgQW5pbWF0aW9uQ29tcG9uZW50IH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgR2FtZVNjZW5lTWFuYWdlciB9IGZyb20gJy4uL0dhbWVTY2VuZU1hbmFnZXInO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0hvbGVBbmltYXRpb24nKVxuZXhwb3J0IGNsYXNzIEhvbGVBbmltYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShOb2RlKVxuICAgIGVmZjogTm9kZSA9IG51bGw7XG4gICAgZWZmYW5pbWF0aW9uOiBBbmltYXRpb25Db21wb25lbnQgPSBudWxsO1xuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KENvbGxpZGVyKS5vbihcIm9uVHJpZ2dlckVudGVyXCIsIHRoaXMub25UcmlnZ2VyRW50ZXIsIHRoaXMpO1xuICAgICAgICB0aGlzLmVmZmFuaW1hdGlvbiA9IHRoaXMuZWZmLmdldENvbXBvbmVudChBbmltYXRpb25Db21wb25lbnQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvblRyaWdnZXJFbnRlcihvYmopIHtcbiAgICAgICAgaWYgKEdhbWVTY2VuZU1hbmFnZXIuSS5QbGF5ZXJzW0dhbWVTY2VuZU1hbmFnZXIuSS5ub3dQbGF5ZXJUeXBlXS5Jc0ZyZWVCYWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cob2JqKTtcbiAgICAgICAgdGhpcy5lZmYuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lZmZhbmltYXRpb24ucGxheSgpO1xuICAgIH1cbiAgXG59XG4iXX0=