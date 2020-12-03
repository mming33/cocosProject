System.register(["cc", "code-quality:cr", "../Game/Popup/PopupManager.js", "./SourceManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, find, Sprite, SpriteFrame, PopupManager, SourceManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, Silence;

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

  function _reportPossibleCrUseOfPopupManager(extras) {
    _reporterNs.report("PopupManager", "../Game/Popup/PopupManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSourceManager(extras) {
    _reporterNs.report("SourceManager", "./SourceManager", _context.meta, extras);
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
      find = _cc.find;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GamePopupPopupManagerJs) {
      PopupManager = _GamePopupPopupManagerJs.PopupManager;
    }, function (_SourceManagerJs) {
      SourceManager = _SourceManagerJs.SourceManager;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "d604c/4nKJDLJUWNd2sMfDZ", "Silence", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Silence", Silence = (_dec = ccclass('Silence'), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(Silence, _Component);

        function Silence() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Silence);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Silence)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "OnSoundFrame", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "OffSoundFrame", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(Silence, [{
          key: "start",
          value: function start() {
            this.sp = this.node.getComponent(Sprite);

            if ((_crd && SourceManager === void 0 ? (_reportPossibleCrUseOfSourceManager({
              error: Error()
            }), SourceManager) : SourceManager).I.volume == 1) {
              this.sp.spriteFrame = this.OnSoundFrame;
            } else if ((_crd && SourceManager === void 0 ? (_reportPossibleCrUseOfSourceManager({
              error: Error()
            }), SourceManager) : SourceManager).I.volume == 0) {
              this.sp.spriteFrame = this.OffSoundFrame;
            }
          }
        }, {
          key: "soundBtn",
          value: function soundBtn() {
            if ((_crd && SourceManager === void 0 ? (_reportPossibleCrUseOfSourceManager({
              error: Error()
            }), SourceManager) : SourceManager).I.volume == 1) {
              (_crd && SourceManager === void 0 ? (_reportPossibleCrUseOfSourceManager({
                error: Error()
              }), SourceManager) : SourceManager).I.volume = 0;
              (_crd && SourceManager === void 0 ? (_reportPossibleCrUseOfSourceManager({
                error: Error()
              }), SourceManager) : SourceManager).I.audios[9].setVolume(0);
              this.sp.spriteFrame = this.OffSoundFrame;
            } else if ((_crd && SourceManager === void 0 ? (_reportPossibleCrUseOfSourceManager({
              error: Error()
            }), SourceManager) : SourceManager).I.volume == 0) {
              (_crd && SourceManager === void 0 ? (_reportPossibleCrUseOfSourceManager({
                error: Error()
              }), SourceManager) : SourceManager).I.volume = 1;
              (_crd && SourceManager === void 0 ? (_reportPossibleCrUseOfSourceManager({
                error: Error()
              }), SourceManager) : SourceManager).I.audios[9].setVolume(1);
              this.sp.spriteFrame = this.OnSoundFrame;
            }
          }
        }, {
          key: "ExitBtn",
          value: function ExitBtn() {
            (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
              error: Error()
            }), PopupManager) : PopupManager).I.ShowPopup(find("Canvas"), "ExitTipPopup", true);
          }
        }]);

        return Silence;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9TaWxlbmNlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJmaW5kIiwiU3ByaXRlIiwiU3ByaXRlRnJhbWUiLCJQb3B1cE1hbmFnZXIiLCJTb3VyY2VNYW5hZ2VyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiU2lsZW5jZSIsInNwIiwibm9kZSIsImdldENvbXBvbmVudCIsIkkiLCJ2b2x1bWUiLCJzcHJpdGVGcmFtZSIsIk9uU291bmRGcmFtZSIsIk9mZlNvdW5kRnJhbWUiLCJhdWRpb3MiLCJzZXRWb2x1bWUiLCJTaG93UG9wdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQThCQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVzs7OztBQUN4REMsTUFBQUEsWSw0QkFBQUEsWTs7QUFDQUMsTUFBQUEsYSxvQkFBQUEsYTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JQLFUsQ0FBdEJPLE87QUFBU0MsTUFBQUEsUSxHQUFhUixVLENBQWJRLFE7O3lCQUdKQyxPLFdBRFpGLE9BQU8sQ0FBQyxTQUFELEMsVUFJSEMsUUFBUSxDQUFDSixXQUFELEMsVUFFUkksUUFBUSxDQUFDSixXQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRUQ7QUFDSixpQkFBS00sRUFBTCxHQUFVLEtBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QlQsTUFBdkIsQ0FBVjs7QUFDQSxnQkFBSTtBQUFBO0FBQUEsZ0RBQWNVLENBQWQsQ0FBZ0JDLE1BQWhCLElBQTBCLENBQTlCLEVBQWlDO0FBQzdCLG1CQUFLSixFQUFMLENBQVFLLFdBQVIsR0FBc0IsS0FBS0MsWUFBM0I7QUFDSCxhQUZELE1BR0ssSUFBSTtBQUFBO0FBQUEsZ0RBQWNILENBQWQsQ0FBZ0JDLE1BQWhCLElBQTBCLENBQTlCLEVBQWlDO0FBQ2xDLG1CQUFLSixFQUFMLENBQVFLLFdBQVIsR0FBc0IsS0FBS0UsYUFBM0I7QUFDSDtBQUNKOzs7cUNBQ1U7QUFDUCxnQkFBSTtBQUFBO0FBQUEsZ0RBQWNKLENBQWQsQ0FBZ0JDLE1BQWhCLElBQTBCLENBQTlCLEVBQWlDO0FBQzdCO0FBQUE7QUFBQSxrREFBY0QsQ0FBZCxDQUFnQkMsTUFBaEIsR0FBeUIsQ0FBekI7QUFDQTtBQUFBO0FBQUEsa0RBQWNELENBQWQsQ0FBZ0JLLE1BQWhCLENBQXVCLENBQXZCLEVBQTBCQyxTQUExQixDQUFvQyxDQUFwQztBQUNBLG1CQUFLVCxFQUFMLENBQVFLLFdBQVIsR0FBc0IsS0FBS0UsYUFBM0I7QUFDSCxhQUpELE1BS0ssSUFBSTtBQUFBO0FBQUEsZ0RBQWNKLENBQWQsQ0FBZ0JDLE1BQWhCLElBQTBCLENBQTlCLEVBQWlDO0FBQ2xDO0FBQUE7QUFBQSxrREFBY0QsQ0FBZCxDQUFnQkMsTUFBaEIsR0FBeUIsQ0FBekI7QUFDQTtBQUFBO0FBQUEsa0RBQWNELENBQWQsQ0FBZ0JLLE1BQWhCLENBQXVCLENBQXZCLEVBQTBCQyxTQUExQixDQUFvQyxDQUFwQztBQUNBLG1CQUFLVCxFQUFMLENBQVFLLFdBQVIsR0FBc0IsS0FBS0MsWUFBM0I7QUFDSDtBQUNKOzs7b0NBQ1M7QUFDTjtBQUFBO0FBQUEsOENBQWFILENBQWIsQ0FBZU8sU0FBZixDQUF5QmxCLElBQUksQ0FBQyxRQUFELENBQTdCLEVBQXlDLGNBQXpDLEVBQXlELElBQXpEO0FBQ0g7Ozs7UUE5QndCRCxTOzs7OztpQkFJRyxJOzs7Ozs7O2lCQUVDLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIEF1ZGlvU291cmNlLCBmaW5kLCBTcHJpdGUsIFNwcml0ZUZyYW1lIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgUG9wdXBNYW5hZ2VyIH0gZnJvbSAnLi4vR2FtZS9Qb3B1cC9Qb3B1cE1hbmFnZXInO1xuaW1wb3J0IHsgU291cmNlTWFuYWdlciB9IGZyb20gJy4vU291cmNlTWFuYWdlcic7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnU2lsZW5jZScpXG5leHBvcnQgY2xhc3MgU2lsZW5jZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzcDogU3ByaXRlO1xuICAgIEBwcm9wZXJ0eShTcHJpdGVGcmFtZSlcbiAgICBPblNvdW5kRnJhbWU6IFNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoU3ByaXRlRnJhbWUpXG4gICAgT2ZmU291bmRGcmFtZTogU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnNwID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChTcHJpdGUpO1xuICAgICAgICBpZiAoU291cmNlTWFuYWdlci5JLnZvbHVtZSA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnNwLnNwcml0ZUZyYW1lID0gdGhpcy5PblNvdW5kRnJhbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU291cmNlTWFuYWdlci5JLnZvbHVtZSA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNwLnNwcml0ZUZyYW1lID0gdGhpcy5PZmZTb3VuZEZyYW1lO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNvdW5kQnRuKCkge1xuICAgICAgICBpZiAoU291cmNlTWFuYWdlci5JLnZvbHVtZSA9PSAxKSB7XG4gICAgICAgICAgICBTb3VyY2VNYW5hZ2VyLkkudm9sdW1lID0gMDtcbiAgICAgICAgICAgIFNvdXJjZU1hbmFnZXIuSS5hdWRpb3NbOV0uc2V0Vm9sdW1lKDApXG4gICAgICAgICAgICB0aGlzLnNwLnNwcml0ZUZyYW1lID0gdGhpcy5PZmZTb3VuZEZyYW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNvdXJjZU1hbmFnZXIuSS52b2x1bWUgPT0gMCkge1xuICAgICAgICAgICAgU291cmNlTWFuYWdlci5JLnZvbHVtZSA9IDE7XG4gICAgICAgICAgICBTb3VyY2VNYW5hZ2VyLkkuYXVkaW9zWzldLnNldFZvbHVtZSgxKVxuICAgICAgICAgICAgdGhpcy5zcC5zcHJpdGVGcmFtZSA9IHRoaXMuT25Tb3VuZEZyYW1lO1xuICAgICAgICB9XG4gICAgfVxuICAgIEV4aXRCdG4oKSB7XG4gICAgICAgIFBvcHVwTWFuYWdlci5JLlNob3dQb3B1cChmaW5kKFwiQ2FudmFzXCIpLCBcIkV4aXRUaXBQb3B1cFwiLCB0cnVlKTtcbiAgICB9XG5cbn1cbiJdfQ==