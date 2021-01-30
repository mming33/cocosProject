System.register(["cce.code-quality.cr", "cc", "./SoundManager.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, SpriteFrame, SoundManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, SoundBtn;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_SoundManagerJs) {
      SoundManager = _SoundManagerJs.SoundManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c108c5QqBdKEaSyjnrQ6nF9", "SoundBtn", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SoundBtn", SoundBtn = (_dec = ccclass('SoundBtn'), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SoundBtn, _Component);

        function SoundBtn() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "sp", null);

          _initializerDefineProperty(_assertThisInitialized(_this), "OnSoundFrame", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "OffSoundFrame", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = SoundBtn.prototype;

        _proto.start = function start() {
          this.sp = this.node.getComponent(Sprite);

          if (!this.sp) {
            console.error("此结点没有Sprite组件");
            return;
          }

          if ((_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).AudioSourceVolume == 1) {
            this.sp.spriteFrame = this.OnSoundFrame;
          } else if ((_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).AudioSourceVolume == 0) {
            this.sp.spriteFrame = this.OffSoundFrame;
          }
        };

        _proto.soundBtn = function soundBtn(event, name) {
          if ((_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).AudioSourceVolume == 1) {
            (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager).SetSourceVolume(0);
            (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager).SetBGMusicVolume(0, name);
            if (this.sp) this.sp.spriteFrame = this.OffSoundFrame;
          } else if ((_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).AudioSourceVolume == 0) {
            (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager).SetSourceVolume(1);
            (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager).SetBGMusicVolume(1, name);
            if (this.sp) this.sp.spriteFrame = this.OnSoundFrame;
          }
        };

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

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vU291bmQvU291bmRCdG4udHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlNwcml0ZSIsIlNwcml0ZUZyYW1lIiwiU291bmRNYW5hZ2VyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiU291bmRCdG4iLCJzdGFydCIsInNwIiwibm9kZSIsImdldENvbXBvbmVudCIsImNvbnNvbGUiLCJlcnJvciIsIkF1ZGlvU291cmNlVm9sdW1lIiwic3ByaXRlRnJhbWUiLCJPblNvdW5kRnJhbWUiLCJPZmZTb3VuZEZyYW1lIiwic291bmRCdG4iLCJldmVudCIsIm5hbWUiLCJTZXRTb3VyY2VWb2x1bWUiLCJTZXRCR011c2ljVm9sdW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVzs7QUFDL0JDLE1BQUFBLFksbUJBQUFBLFk7Ozs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQkwsVSxDQUF0QkssTztBQUFTQyxNQUFBQSxRLEdBQWFOLFUsQ0FBYk0sUTs7MEJBR0pDLFEsV0FEWkYsT0FBTyxDQUFDLFVBQUQsQyxVQUdIQyxRQUFRLENBQUNILFdBQUQsQyxVQUVSRyxRQUFRLENBQUNILFdBQUQsQzs7Ozs7Ozs7Ozs7OytEQUhXLEk7Ozs7Ozs7Ozs7O2VBS3BCSyxLLEdBQUEsaUJBQVE7QUFDSixlQUFLQyxFQUFMLEdBQVUsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCVCxNQUF2QixDQUFWOztBQUNBLGNBQUksQ0FBQyxLQUFLTyxFQUFWLEVBQWM7QUFDVkcsWUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWMsZUFBZDtBQUNBO0FBQ0g7O0FBQ0QsY0FBSTtBQUFBO0FBQUEsNENBQWFDLGlCQUFiLElBQWtDLENBQXRDLEVBQXlDO0FBQ3JDLGlCQUFLTCxFQUFMLENBQVFNLFdBQVIsR0FBc0IsS0FBS0MsWUFBM0I7QUFDSCxXQUZELE1BR0ssSUFBSTtBQUFBO0FBQUEsNENBQWFGLGlCQUFiLElBQWtDLENBQXRDLEVBQXlDO0FBQzFDLGlCQUFLTCxFQUFMLENBQVFNLFdBQVIsR0FBc0IsS0FBS0UsYUFBM0I7QUFDSDtBQUNKLFM7O2VBQ0RDLFEsR0FBQSxrQkFBU0MsS0FBVCxFQUFxQkMsSUFBckIsRUFBZ0M7QUFDNUIsY0FBSTtBQUFBO0FBQUEsNENBQWFOLGlCQUFiLElBQWtDLENBQXRDLEVBQXlDO0FBQ3JDO0FBQUE7QUFBQSw4Q0FBYU8sZUFBYixDQUE2QixDQUE3QjtBQUNBO0FBQUE7QUFBQSw4Q0FBYUMsZ0JBQWIsQ0FBOEIsQ0FBOUIsRUFBaUNGLElBQWpDO0FBQ0EsZ0JBQUksS0FBS1gsRUFBVCxFQUNJLEtBQUtBLEVBQUwsQ0FBUU0sV0FBUixHQUFzQixLQUFLRSxhQUEzQjtBQUNQLFdBTEQsTUFNSyxJQUFJO0FBQUE7QUFBQSw0Q0FBYUgsaUJBQWIsSUFBa0MsQ0FBdEMsRUFBeUM7QUFDMUM7QUFBQTtBQUFBLDhDQUFhTyxlQUFiLENBQTZCLENBQTdCO0FBQ0E7QUFBQTtBQUFBLDhDQUFhQyxnQkFBYixDQUE4QixDQUE5QixFQUFpQ0YsSUFBakM7QUFDQSxnQkFBSSxLQUFLWCxFQUFULEVBQ0ksS0FBS0EsRUFBTCxDQUFRTSxXQUFSLEdBQXNCLEtBQUtDLFlBQTNCO0FBQ1A7QUFDSixTOzs7UUFoQ3lCZixTOzs7OztpQkFHUyxJOzs7Ozs7O2lCQUVDLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIFNwcml0ZSwgU3ByaXRlRnJhbWUsIEJ1dHRvbiwgQnV0dG9uQ29tcG9uZW50LCBFdmVudEhhbmRsZXIgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tICcuL1NvdW5kTWFuYWdlcic7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnU291bmRCdG4nKVxuZXhwb3J0IGNsYXNzIFNvdW5kQnRuIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzcDogU3ByaXRlIHwgbnVsbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KFNwcml0ZUZyYW1lKVxuICAgIE9uU291bmRGcmFtZTogU3ByaXRlRnJhbWUgfCBudWxsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoU3ByaXRlRnJhbWUpXG4gICAgT2ZmU291bmRGcmFtZTogU3ByaXRlRnJhbWUgfCBudWxsID0gbnVsbDtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5zcCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoU3ByaXRlKTtcbiAgICAgICAgaWYgKCF0aGlzLnNwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5q2k57uT54K55rKh5pyJU3ByaXRl57uE5Lu2XCIpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKFNvdW5kTWFuYWdlci5BdWRpb1NvdXJjZVZvbHVtZSA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnNwLnNwcml0ZUZyYW1lID0gdGhpcy5PblNvdW5kRnJhbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU291bmRNYW5hZ2VyLkF1ZGlvU291cmNlVm9sdW1lID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3Auc3ByaXRlRnJhbWUgPSB0aGlzLk9mZlNvdW5kRnJhbWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc291bmRCdG4oZXZlbnQ6IGFueSwgbmFtZTogYW55KSB7XG4gICAgICAgIGlmIChTb3VuZE1hbmFnZXIuQXVkaW9Tb3VyY2VWb2x1bWUgPT0gMSkge1xuICAgICAgICAgICAgU291bmRNYW5hZ2VyLlNldFNvdXJjZVZvbHVtZSgwKTtcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5TZXRCR011c2ljVm9sdW1lKDAsIG5hbWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3ApXG4gICAgICAgICAgICAgICAgdGhpcy5zcC5zcHJpdGVGcmFtZSA9IHRoaXMuT2ZmU291bmRGcmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTb3VuZE1hbmFnZXIuQXVkaW9Tb3VyY2VWb2x1bWUgPT0gMCkge1xuICAgICAgICAgICAgU291bmRNYW5hZ2VyLlNldFNvdXJjZVZvbHVtZSgxKTtcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5TZXRCR011c2ljVm9sdW1lKDEsIG5hbWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3ApXG4gICAgICAgICAgICAgICAgdGhpcy5zcC5zcHJpdGVGcmFtZSA9IHRoaXMuT25Tb3VuZEZyYW1lO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=