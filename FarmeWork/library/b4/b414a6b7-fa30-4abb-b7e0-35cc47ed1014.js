System.register(["cc", "code-quality:cr", "./SoundManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Sprite, SpriteFrame, SoundManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, SoundBtn;

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

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "./SoundManager", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_SoundManagerJs) {
      SoundManager = _SoundManagerJs.SoundManager;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "b414aa3+jBKu7fgNcxH7RAU", "SoundBtn", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SoundBtn", SoundBtn = (_dec = ccclass('SoundBtn'), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(SoundBtn, _Component);

        function SoundBtn() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, SoundBtn);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SoundBtn)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "OnSoundFrame", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "OffSoundFrame", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(SoundBtn, [{
          key: "start",
          value: function start() {
            this.sp = this.node.getComponent(Sprite);

            if ((_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager).I.AudioSourceVolume == 1) {
              this.sp.spriteFrame = this.OnSoundFrame;
            } else if ((_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager).I.AudioSourceVolume == 0) {
              this.sp.spriteFrame = this.OffSoundFrame;
            }
          }
        }, {
          key: "soundBtn",
          value: function soundBtn(event, name) {
            if ((_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager).I.AudioSourceVolume == 1) {
              (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
                error: Error()
              }), SoundManager) : SoundManager).I.SetSourceVolume(0);
              (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
                error: Error()
              }), SoundManager) : SoundManager).I.SetBGMusicVolume(0, name);
              this.sp.spriteFrame = this.OffSoundFrame;
            } else if ((_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager).I.AudioSourceVolume == 0) {
              (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
                error: Error()
              }), SoundManager) : SoundManager).I.SetSourceVolume(1);
              (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
                error: Error()
              }), SoundManager) : SoundManager).I.SetBGMusicVolume(1, name);
              this.sp.spriteFrame = this.OnSoundFrame;
            }
          }
        }]);

        return SoundBtn;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "OnSoundFrame", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "OffSoundFrame", [_dec3], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9Tb3VuZC9Tb3VuZEJ0bi50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiU3ByaXRlIiwiU3ByaXRlRnJhbWUiLCJTb3VuZE1hbmFnZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJTb3VuZEJ0biIsInNwIiwibm9kZSIsImdldENvbXBvbmVudCIsIkkiLCJBdWRpb1NvdXJjZVZvbHVtZSIsInNwcml0ZUZyYW1lIiwiT25Tb3VuZEZyYW1lIiwiT2ZmU291bmRGcmFtZSIsImV2ZW50IiwibmFtZSIsIlNldFNvdXJjZVZvbHVtZSIsIlNldEJHTXVzaWNWb2x1bWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVzs7OztBQUMvQkMsTUFBQUEsWSxtQkFBQUEsWTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JMLFUsQ0FBdEJLLE87QUFBU0MsTUFBQUEsUSxHQUFhTixVLENBQWJNLFE7OzBCQUdKQyxRLFdBRFpGLE9BQU8sQ0FBQyxVQUFELEMsVUFHSEMsUUFBUSxDQUFDSCxXQUFELEMsVUFFUkcsUUFBUSxDQUFDSCxXQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRUQ7QUFDSixpQkFBS0ssRUFBTCxHQUFVLEtBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QlIsTUFBdkIsQ0FBVjs7QUFDQSxnQkFBSTtBQUFBO0FBQUEsOENBQWFTLENBQWIsQ0FBZUMsaUJBQWYsSUFBb0MsQ0FBeEMsRUFBMkM7QUFDdkMsbUJBQUtKLEVBQUwsQ0FBUUssV0FBUixHQUFzQixLQUFLQyxZQUEzQjtBQUNILGFBRkQsTUFHSyxJQUFJO0FBQUE7QUFBQSw4Q0FBYUgsQ0FBYixDQUFlQyxpQkFBZixJQUFvQyxDQUF4QyxFQUEyQztBQUM1QyxtQkFBS0osRUFBTCxDQUFRSyxXQUFSLEdBQXNCLEtBQUtFLGFBQTNCO0FBQ0g7QUFDSjs7O21DQUNRQyxLLEVBQU9DLEksRUFBTTtBQUNsQixnQkFBSTtBQUFBO0FBQUEsOENBQWFOLENBQWIsQ0FBZUMsaUJBQWYsSUFBb0MsQ0FBeEMsRUFBMkM7QUFDdkM7QUFBQTtBQUFBLGdEQUFhRCxDQUFiLENBQWVPLGVBQWYsQ0FBK0IsQ0FBL0I7QUFDQTtBQUFBO0FBQUEsZ0RBQWFQLENBQWIsQ0FBZVEsZ0JBQWYsQ0FBZ0MsQ0FBaEMsRUFBbUNGLElBQW5DO0FBQ0EsbUJBQUtULEVBQUwsQ0FBUUssV0FBUixHQUFzQixLQUFLRSxhQUEzQjtBQUNILGFBSkQsTUFLSyxJQUFJO0FBQUE7QUFBQSw4Q0FBYUosQ0FBYixDQUFlQyxpQkFBZixJQUFvQyxDQUF4QyxFQUEyQztBQUM1QztBQUFBO0FBQUEsZ0RBQWFELENBQWIsQ0FBZU8sZUFBZixDQUErQixDQUEvQjtBQUNBO0FBQUE7QUFBQSxnREFBYVAsQ0FBYixDQUFlUSxnQkFBZixDQUFnQyxDQUFoQyxFQUFtQ0YsSUFBbkM7QUFDQSxtQkFBS1QsRUFBTCxDQUFRSyxXQUFSLEdBQXNCLEtBQUtDLFlBQTNCO0FBQ0g7QUFDSjs7OztRQTFCeUJiLFM7Ozs7O2lCQUdFLEk7Ozs7Ozs7aUJBRUMsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgU3ByaXRlLCBTcHJpdGVGcmFtZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gJy4vU291bmRNYW5hZ2VyJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdTb3VuZEJ0bicpXG5leHBvcnQgY2xhc3MgU291bmRCdG4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHNwOiBTcHJpdGU7XG4gICAgQHByb3BlcnR5KFNwcml0ZUZyYW1lKVxuICAgIE9uU291bmRGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShTcHJpdGVGcmFtZSlcbiAgICBPZmZTb3VuZEZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc3AgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZSk7XG4gICAgICAgIGlmIChTb3VuZE1hbmFnZXIuSS5BdWRpb1NvdXJjZVZvbHVtZSA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnNwLnNwcml0ZUZyYW1lID0gdGhpcy5PblNvdW5kRnJhbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU291bmRNYW5hZ2VyLkkuQXVkaW9Tb3VyY2VWb2x1bWUgPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zcC5zcHJpdGVGcmFtZSA9IHRoaXMuT2ZmU291bmRGcmFtZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzb3VuZEJ0bihldmVudCwgbmFtZSkge1xuICAgICAgICBpZiAoU291bmRNYW5hZ2VyLkkuQXVkaW9Tb3VyY2VWb2x1bWUgPT0gMSkge1xuICAgICAgICAgICAgU291bmRNYW5hZ2VyLkkuU2V0U291cmNlVm9sdW1lKDApO1xuICAgICAgICAgICAgU291bmRNYW5hZ2VyLkkuU2V0QkdNdXNpY1ZvbHVtZSgwLCBuYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc3Auc3ByaXRlRnJhbWUgPSB0aGlzLk9mZlNvdW5kRnJhbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU291bmRNYW5hZ2VyLkkuQXVkaW9Tb3VyY2VWb2x1bWUgPT0gMCkge1xuICAgICAgICAgICAgU291bmRNYW5hZ2VyLkkuU2V0U291cmNlVm9sdW1lKDEpO1xuICAgICAgICAgICAgU291bmRNYW5hZ2VyLkkuU2V0QkdNdXNpY1ZvbHVtZSgxLCBuYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc3Auc3ByaXRlRnJhbWUgPSB0aGlzLk9uU291bmRGcmFtZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==