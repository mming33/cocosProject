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
          }), SoundManager) : SoundManager).AudioSourceVolume == 1) {
            this.sp.spriteFrame = this.OnSoundFrame;
          } else if ((_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).AudioSourceVolume == 0) {
            this.sp.spriteFrame = this.OffSoundFrame;
          }
        }

        soundBtn(event, name) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vU291bmQvU291bmRCdG4udHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlNwcml0ZSIsIlNwcml0ZUZyYW1lIiwiU291bmRNYW5hZ2VyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiU291bmRCdG4iLCJzdGFydCIsInNwIiwibm9kZSIsImdldENvbXBvbmVudCIsImNvbnNvbGUiLCJlcnJvciIsIkF1ZGlvU291cmNlVm9sdW1lIiwic3ByaXRlRnJhbWUiLCJPblNvdW5kRnJhbWUiLCJPZmZTb3VuZEZyYW1lIiwic291bmRCdG4iLCJldmVudCIsIm5hbWUiLCJTZXRTb3VyY2VWb2x1bWUiLCJTZXRCR011c2ljVm9sdW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXOztBQUMvQkMsTUFBQUEsWSxtQkFBQUEsWTs7Ozs7OztPQUNIO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCTixVOzswQkFHakJPLFEsV0FEWkYsT0FBTyxDQUFDLFVBQUQsQyxVQUdIQyxRQUFRLENBQUNILFdBQUQsQyxVQUVSRyxRQUFRLENBQUNILFdBQUQsQyxvQ0FMYixNQUNhSSxRQURiLFNBQzhCTixTQUQ5QixDQUN3QztBQUFBO0FBQUE7O0FBQUEsc0NBQ2hCLElBRGdCOztBQUFBOztBQUFBO0FBQUE7O0FBTXBDTyxRQUFBQSxLQUFLLEdBQUc7QUFDSixlQUFLQyxFQUFMLEdBQVUsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCVCxNQUF2QixDQUFWOztBQUNBLGNBQUksQ0FBQyxLQUFLTyxFQUFWLEVBQWM7QUFDVkcsWUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWMsZUFBZDtBQUNBO0FBQ0g7O0FBQ0QsY0FBSTtBQUFBO0FBQUEsNENBQWFDLGlCQUFiLElBQWtDLENBQXRDLEVBQXlDO0FBQ3JDLGlCQUFLTCxFQUFMLENBQVFNLFdBQVIsR0FBc0IsS0FBS0MsWUFBM0I7QUFDSCxXQUZELE1BR0ssSUFBSTtBQUFBO0FBQUEsNENBQWFGLGlCQUFiLElBQWtDLENBQXRDLEVBQXlDO0FBQzFDLGlCQUFLTCxFQUFMLENBQVFNLFdBQVIsR0FBc0IsS0FBS0UsYUFBM0I7QUFDSDtBQUNKOztBQUNEQyxRQUFBQSxRQUFRLENBQUNDLEtBQUQsRUFBYUMsSUFBYixFQUF3QjtBQUM1QixjQUFJO0FBQUE7QUFBQSw0Q0FBYU4saUJBQWIsSUFBa0MsQ0FBdEMsRUFBeUM7QUFDckM7QUFBQTtBQUFBLDhDQUFhTyxlQUFiLENBQTZCLENBQTdCO0FBQ0E7QUFBQTtBQUFBLDhDQUFhQyxnQkFBYixDQUE4QixDQUE5QixFQUFpQ0YsSUFBakM7QUFDQSxnQkFBSSxLQUFLWCxFQUFULEVBQ0ksS0FBS0EsRUFBTCxDQUFRTSxXQUFSLEdBQXNCLEtBQUtFLGFBQTNCO0FBQ1AsV0FMRCxNQU1LLElBQUk7QUFBQTtBQUFBLDRDQUFhSCxpQkFBYixJQUFrQyxDQUF0QyxFQUF5QztBQUMxQztBQUFBO0FBQUEsOENBQWFPLGVBQWIsQ0FBNkIsQ0FBN0I7QUFDQTtBQUFBO0FBQUEsOENBQWFDLGdCQUFiLENBQThCLENBQTlCLEVBQWlDRixJQUFqQztBQUNBLGdCQUFJLEtBQUtYLEVBQVQsRUFDSSxLQUFLQSxFQUFMLENBQVFNLFdBQVIsR0FBc0IsS0FBS0MsWUFBM0I7QUFDUDtBQUNKOztBQWhDbUMsTzs7Ozs7aUJBR0QsSTs7Ozs7OztpQkFFQyxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBTcHJpdGUsIFNwcml0ZUZyYW1lLCBCdXR0b24sIEJ1dHRvbkNvbXBvbmVudCwgRXZlbnRIYW5kbGVyIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi9Tb3VuZE1hbmFnZXInO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1NvdW5kQnRuJylcbmV4cG9ydCBjbGFzcyBTb3VuZEJ0biBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3A6IFNwcml0ZSB8IG51bGwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShTcHJpdGVGcmFtZSlcbiAgICBPblNvdW5kRnJhbWU6IFNwcml0ZUZyYW1lIHwgbnVsbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KFNwcml0ZUZyYW1lKVxuICAgIE9mZlNvdW5kRnJhbWU6IFNwcml0ZUZyYW1lIHwgbnVsbCA9IG51bGw7XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc3AgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFNwcml0ZSk7XG4gICAgICAgIGlmICghdGhpcy5zcCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuatpOe7k+eCueayoeaciVNwcml0Zee7hOS7tlwiKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChTb3VuZE1hbmFnZXIuQXVkaW9Tb3VyY2VWb2x1bWUgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5zcC5zcHJpdGVGcmFtZSA9IHRoaXMuT25Tb3VuZEZyYW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNvdW5kTWFuYWdlci5BdWRpb1NvdXJjZVZvbHVtZSA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNwLnNwcml0ZUZyYW1lID0gdGhpcy5PZmZTb3VuZEZyYW1lO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNvdW5kQnRuKGV2ZW50OiBhbnksIG5hbWU6IGFueSkge1xuICAgICAgICBpZiAoU291bmRNYW5hZ2VyLkF1ZGlvU291cmNlVm9sdW1lID09IDEpIHtcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5TZXRTb3VyY2VWb2x1bWUoMCk7XG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIuU2V0QkdNdXNpY1ZvbHVtZSgwLCBuYW1lKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNwKVxuICAgICAgICAgICAgICAgIHRoaXMuc3Auc3ByaXRlRnJhbWUgPSB0aGlzLk9mZlNvdW5kRnJhbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU291bmRNYW5hZ2VyLkF1ZGlvU291cmNlVm9sdW1lID09IDApIHtcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5TZXRTb3VyY2VWb2x1bWUoMSk7XG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIuU2V0QkdNdXNpY1ZvbHVtZSgxLCBuYW1lKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNwKVxuICAgICAgICAgICAgICAgIHRoaXMuc3Auc3ByaXRlRnJhbWUgPSB0aGlzLk9uU291bmRGcmFtZTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19