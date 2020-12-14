System.register(["cce.code-quality.cr", "cc", "./SoundManager.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, SpriteFrame, SoundManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, SoundBtn;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("SoundBtn", SoundBtn = (_dec = ccclass('SoundBtn'), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec(_class = (_class2 = (_temp = class SoundBtn extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "sp", null);

          _initializerDefineProperty(this, "OnSoundFrame", _descriptor, this);

          _initializerDefineProperty(this, "OffSoundFrame", _descriptor2, this);
        }

        start() {
          this.sp = this.node.getComponent(Sprite);

          if (!this.sp) {
            console.error("此结点没有Sprite组件");
            return;
          }

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

        soundBtn(event, name) {
          if ((_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).I.AudioSourceVolume == 1) {
            (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager).I.SetSourceVolume(0);
            (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager).I.SetBGMusicVolume(0, name);
            if (this.sp) this.sp.spriteFrame = this.OffSoundFrame;
          } else if ((_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).I.AudioSourceVolume == 0) {
            (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager).I.SetSourceVolume(1);
            (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager).I.SetBGMusicVolume(1, name);
            if (this.sp) this.sp.spriteFrame = this.OnSoundFrame;
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "OnSoundFrame", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "OffSoundFrame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9Tb3VuZC9Tb3VuZEJ0bi50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiU3ByaXRlIiwiU3ByaXRlRnJhbWUiLCJTb3VuZE1hbmFnZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJTb3VuZEJ0biIsInN0YXJ0Iiwic3AiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiY29uc29sZSIsImVycm9yIiwiSSIsIkF1ZGlvU291cmNlVm9sdW1lIiwic3ByaXRlRnJhbWUiLCJPblNvdW5kRnJhbWUiLCJPZmZTb3VuZEZyYW1lIiwic291bmRCdG4iLCJldmVudCIsIm5hbWUiLCJTZXRTb3VyY2VWb2x1bWUiLCJTZXRCR011c2ljVm9sdW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXOztBQUMvQkMsTUFBQUEsWSxtQkFBQUEsWTs7Ozs7OztPQUNIO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCTixVOzswQkFHakJPLFEsV0FEWkYsT0FBTyxDQUFDLFVBQUQsQyxVQUdIQyxRQUFRLENBQUNILFdBQUQsQyxVQUVSRyxRQUFRLENBQUNILFdBQUQsQyxvQ0FMYixNQUNhSSxRQURiLFNBQzhCTixTQUQ5QixDQUN3QztBQUFBO0FBQUE7O0FBQUEsc0NBQ2hCLElBRGdCOztBQUFBOztBQUFBO0FBQUE7O0FBTXBDTyxRQUFBQSxLQUFLLEdBQUc7QUFDSixlQUFLQyxFQUFMLEdBQVUsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCVCxNQUF2QixDQUFWOztBQUNBLGNBQUksQ0FBQyxLQUFLTyxFQUFWLEVBQWM7QUFDVkcsWUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWMsZUFBZDtBQUNBO0FBQ0g7O0FBQ0QsY0FBSTtBQUFBO0FBQUEsNENBQWFDLENBQWIsQ0FBZUMsaUJBQWYsSUFBb0MsQ0FBeEMsRUFBMkM7QUFDdkMsaUJBQUtOLEVBQUwsQ0FBUU8sV0FBUixHQUFzQixLQUFLQyxZQUEzQjtBQUNILFdBRkQsTUFHSyxJQUFJO0FBQUE7QUFBQSw0Q0FBYUgsQ0FBYixDQUFlQyxpQkFBZixJQUFvQyxDQUF4QyxFQUEyQztBQUM1QyxpQkFBS04sRUFBTCxDQUFRTyxXQUFSLEdBQXNCLEtBQUtFLGFBQTNCO0FBQ0g7QUFDSjs7QUFDREMsUUFBQUEsUUFBUSxDQUFDQyxLQUFELEVBQWFDLElBQWIsRUFBd0I7QUFDNUIsY0FBSTtBQUFBO0FBQUEsNENBQWFQLENBQWIsQ0FBZUMsaUJBQWYsSUFBb0MsQ0FBeEMsRUFBMkM7QUFDdkM7QUFBQTtBQUFBLDhDQUFhRCxDQUFiLENBQWVRLGVBQWYsQ0FBK0IsQ0FBL0I7QUFDQTtBQUFBO0FBQUEsOENBQWFSLENBQWIsQ0FBZVMsZ0JBQWYsQ0FBZ0MsQ0FBaEMsRUFBbUNGLElBQW5DO0FBQ0EsZ0JBQUksS0FBS1osRUFBVCxFQUNJLEtBQUtBLEVBQUwsQ0FBUU8sV0FBUixHQUFzQixLQUFLRSxhQUEzQjtBQUNQLFdBTEQsTUFNSyxJQUFJO0FBQUE7QUFBQSw0Q0FBYUosQ0FBYixDQUFlQyxpQkFBZixJQUFvQyxDQUF4QyxFQUEyQztBQUM1QztBQUFBO0FBQUEsOENBQWFELENBQWIsQ0FBZVEsZUFBZixDQUErQixDQUEvQjtBQUNBO0FBQUE7QUFBQSw4Q0FBYVIsQ0FBYixDQUFlUyxnQkFBZixDQUFnQyxDQUFoQyxFQUFtQ0YsSUFBbkM7QUFDQSxnQkFBSSxLQUFLWixFQUFULEVBQ0ksS0FBS0EsRUFBTCxDQUFRTyxXQUFSLEdBQXNCLEtBQUtDLFlBQTNCO0FBQ1A7QUFDSjs7QUFoQ21DLE87Ozs7O2lCQUdELEk7Ozs7Ozs7aUJBRUMsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgU3ByaXRlLCBTcHJpdGVGcmFtZSwgQnV0dG9uLCBCdXR0b25Db21wb25lbnQsIEV2ZW50SGFuZGxlciB9IGZyb20gJ2NjJztcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gJy4vU291bmRNYW5hZ2VyJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdTb3VuZEJ0bicpXG5leHBvcnQgY2xhc3MgU291bmRCdG4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHNwOiBTcHJpdGUgfCBudWxsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoU3ByaXRlRnJhbWUpXG4gICAgT25Tb3VuZEZyYW1lOiBTcHJpdGVGcmFtZSB8IG51bGwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShTcHJpdGVGcmFtZSlcbiAgICBPZmZTb3VuZEZyYW1lOiBTcHJpdGVGcmFtZSB8IG51bGwgPSBudWxsO1xuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnNwID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChTcHJpdGUpO1xuICAgICAgICBpZiAoIXRoaXMuc3ApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLmraTnu5PngrnmsqHmnIlTcHJpdGXnu4Tku7ZcIik7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAoU291bmRNYW5hZ2VyLkkuQXVkaW9Tb3VyY2VWb2x1bWUgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5zcC5zcHJpdGVGcmFtZSA9IHRoaXMuT25Tb3VuZEZyYW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNvdW5kTWFuYWdlci5JLkF1ZGlvU291cmNlVm9sdW1lID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3Auc3ByaXRlRnJhbWUgPSB0aGlzLk9mZlNvdW5kRnJhbWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc291bmRCdG4oZXZlbnQ6IGFueSwgbmFtZTogYW55KSB7XG4gICAgICAgIGlmIChTb3VuZE1hbmFnZXIuSS5BdWRpb1NvdXJjZVZvbHVtZSA9PSAxKSB7XG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIuSS5TZXRTb3VyY2VWb2x1bWUoMCk7XG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIuSS5TZXRCR011c2ljVm9sdW1lKDAsIG5hbWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3ApXG4gICAgICAgICAgICAgICAgdGhpcy5zcC5zcHJpdGVGcmFtZSA9IHRoaXMuT2ZmU291bmRGcmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTb3VuZE1hbmFnZXIuSS5BdWRpb1NvdXJjZVZvbHVtZSA9PSAwKSB7XG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIuSS5TZXRTb3VyY2VWb2x1bWUoMSk7XG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIuSS5TZXRCR011c2ljVm9sdW1lKDEsIG5hbWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3ApXG4gICAgICAgICAgICAgICAgdGhpcy5zcC5zcHJpdGVGcmFtZSA9IHRoaXMuT25Tb3VuZEZyYW1lO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=