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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvOEJhbGwvYXNzZXRzL1NjcmlwdHMvQ29tbW9uL1NvdW5kL1NvdW5kQnRuLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJTcHJpdGUiLCJTcHJpdGVGcmFtZSIsIlNvdW5kTWFuYWdlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlNvdW5kQnRuIiwic3AiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiSSIsIkF1ZGlvU291cmNlVm9sdW1lIiwic3ByaXRlRnJhbWUiLCJPblNvdW5kRnJhbWUiLCJPZmZTb3VuZEZyYW1lIiwiZXZlbnQiLCJuYW1lIiwiU2V0U291cmNlVm9sdW1lIiwiU2V0QkdNdXNpY1ZvbHVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXOzs7O0FBQy9CQyxNQUFBQSxZLG1CQUFBQSxZOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQkwsVSxDQUF0QkssTztBQUFTQyxNQUFBQSxRLEdBQWFOLFUsQ0FBYk0sUTs7MEJBR0pDLFEsV0FEWkYsT0FBTyxDQUFDLFVBQUQsQyxVQUdIQyxRQUFRLENBQUNILFdBQUQsQyxVQUVSRyxRQUFRLENBQUNILFdBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FFRDtBQUNKLGlCQUFLSyxFQUFMLEdBQVUsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCUixNQUF2QixDQUFWOztBQUNBLGdCQUFJO0FBQUE7QUFBQSw4Q0FBYVMsQ0FBYixDQUFlQyxpQkFBZixJQUFvQyxDQUF4QyxFQUEyQztBQUN2QyxtQkFBS0osRUFBTCxDQUFRSyxXQUFSLEdBQXNCLEtBQUtDLFlBQTNCO0FBQ0gsYUFGRCxNQUdLLElBQUk7QUFBQTtBQUFBLDhDQUFhSCxDQUFiLENBQWVDLGlCQUFmLElBQW9DLENBQXhDLEVBQTJDO0FBQzVDLG1CQUFLSixFQUFMLENBQVFLLFdBQVIsR0FBc0IsS0FBS0UsYUFBM0I7QUFDSDtBQUNKOzs7bUNBQ1FDLEssRUFBT0MsSSxFQUFNO0FBQ2xCLGdCQUFJO0FBQUE7QUFBQSw4Q0FBYU4sQ0FBYixDQUFlQyxpQkFBZixJQUFvQyxDQUF4QyxFQUEyQztBQUN2QztBQUFBO0FBQUEsZ0RBQWFELENBQWIsQ0FBZU8sZUFBZixDQUErQixDQUEvQjtBQUNBO0FBQUE7QUFBQSxnREFBYVAsQ0FBYixDQUFlUSxnQkFBZixDQUFnQyxDQUFoQyxFQUFtQ0YsSUFBbkM7QUFDQSxtQkFBS1QsRUFBTCxDQUFRSyxXQUFSLEdBQXNCLEtBQUtFLGFBQTNCO0FBQ0gsYUFKRCxNQUtLLElBQUk7QUFBQTtBQUFBLDhDQUFhSixDQUFiLENBQWVDLGlCQUFmLElBQW9DLENBQXhDLEVBQTJDO0FBQzVDO0FBQUE7QUFBQSxnREFBYUQsQ0FBYixDQUFlTyxlQUFmLENBQStCLENBQS9CO0FBQ0E7QUFBQTtBQUFBLGdEQUFhUCxDQUFiLENBQWVRLGdCQUFmLENBQWdDLENBQWhDLEVBQW1DRixJQUFuQztBQUNBLG1CQUFLVCxFQUFMLENBQVFLLFdBQVIsR0FBc0IsS0FBS0MsWUFBM0I7QUFDSDtBQUNKOzs7O1FBMUJ5QmIsUzs7Ozs7aUJBR0UsSTs7Ozs7OztpQkFFQyxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBTcHJpdGUsIFNwcml0ZUZyYW1lLCBCdXR0b24sIEJ1dHRvbkNvbXBvbmVudCwgRXZlbnRIYW5kbGVyIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi9Tb3VuZE1hbmFnZXInO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1NvdW5kQnRuJylcbmV4cG9ydCBjbGFzcyBTb3VuZEJ0biBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3A6IFNwcml0ZTtcbiAgICBAcHJvcGVydHkoU3ByaXRlRnJhbWUpXG4gICAgT25Tb3VuZEZyYW1lOiBTcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KFNwcml0ZUZyYW1lKVxuICAgIE9mZlNvdW5kRnJhbWU6IFNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5zcCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoU3ByaXRlKTtcbiAgICAgICAgaWYgKFNvdW5kTWFuYWdlci5JLkF1ZGlvU291cmNlVm9sdW1lID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc3Auc3ByaXRlRnJhbWUgPSB0aGlzLk9uU291bmRGcmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTb3VuZE1hbmFnZXIuSS5BdWRpb1NvdXJjZVZvbHVtZSA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNwLnNwcml0ZUZyYW1lID0gdGhpcy5PZmZTb3VuZEZyYW1lO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNvdW5kQnRuKGV2ZW50LCBuYW1lKSB7XG4gICAgICAgIGlmIChTb3VuZE1hbmFnZXIuSS5BdWRpb1NvdXJjZVZvbHVtZSA9PSAxKSB7XG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIuSS5TZXRTb3VyY2VWb2x1bWUoMCk7XG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIuSS5TZXRCR011c2ljVm9sdW1lKDAsIG5hbWUpO1xuICAgICAgICAgICAgdGhpcy5zcC5zcHJpdGVGcmFtZSA9IHRoaXMuT2ZmU291bmRGcmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTb3VuZE1hbmFnZXIuSS5BdWRpb1NvdXJjZVZvbHVtZSA9PSAwKSB7XG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIuSS5TZXRTb3VyY2VWb2x1bWUoMSk7XG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIuSS5TZXRCR011c2ljVm9sdW1lKDEsIG5hbWUpO1xuICAgICAgICAgICAgdGhpcy5zcC5zcHJpdGVGcmFtZSA9IHRoaXMuT25Tb3VuZEZyYW1lO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19