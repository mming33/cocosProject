System.register(["cce.code-quality.cr", "cc", "./Common/Popup/PopupManager.js", "./Common/Sound/SoundManager.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, PopupManager, SoundManager, _dec, _class, _temp, _crd, ccclass, property, TESTSCRIPT;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfPopupManager(extras) {
    _reporterNs.report("PopupManager", "./Common/Popup/PopupManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "./Common/Sound/SoundManager", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_CommonPopupPopupManagerJs) {
      PopupManager = _CommonPopupPopupManagerJs.PopupManager;
    }, function (_CommonSoundSoundManagerJs) {
      SoundManager = _CommonSoundSoundManagerJs.SoundManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c4e77ePt3ROfa7o3X3e4uIO", "TESTSCRIPT", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TESTSCRIPT", TESTSCRIPT = (_dec = ccclass('TESTSCRIPT'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TESTSCRIPT, _Component);

        function TESTSCRIPT() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "bool", true);

          return _this;
        }

        var _proto = TESTSCRIPT.prototype;

        _proto.onLoad = function onLoad() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).I.PlayBGMusic();
        };

        _proto.btn = function btn(res, res2) {
          console.log(res2);
          if (this.bool) (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).I.ShowPopup("TestPrefab0");else {
            (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
              error: Error()
            }), PopupManager) : PopupManager).I.ClosePopup(false);
          }
          this.bool = !this.bool;
        };

        return TESTSCRIPT;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL1RFU1RTQ1JJUFQudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlBvcHVwTWFuYWdlciIsIlNvdW5kTWFuYWdlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlRFU1RTQ1JJUFQiLCJvbkxvYWQiLCJJIiwiUGxheUJHTXVzaWMiLCJidG4iLCJyZXMiLCJyZXMyIiwiY29uc29sZSIsImxvZyIsImJvb2wiLCJTaG93UG9wdXAiLCJDbG9zZVBvcHVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUzs7QUFJWkMsTUFBQUEsWSw4QkFBQUEsWTs7QUFDQUMsTUFBQUEsWSw4QkFBQUEsWTs7Ozs7OztBQUVEQyxNQUFBQSxPLEdBQXNCSixVLENBQXRCSSxPO0FBQVNDLE1BQUFBLFEsR0FBYUwsVSxDQUFiSyxROzs0QkFHSkMsVSxXQURaRixPQUFPLENBQUMsWUFBRCxDOzs7Ozs7Ozs7Ozs7aUVBTUcsSTs7Ozs7OztlQUhQRyxNLEdBQUEsa0JBQVM7QUFDTDtBQUFBO0FBQUEsNENBQWFDLENBQWIsQ0FBZUMsV0FBZjtBQUNILFM7O2VBRURDLEcsR0FBQSxhQUFJQyxHQUFKLEVBQVNDLElBQVQsRUFBZTtBQUNYQyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLGNBQUksS0FBS0csSUFBVCxFQUNJO0FBQUE7QUFBQSw0Q0FBYVAsQ0FBYixDQUFlUSxTQUFmLENBQXlCLGFBQXpCLEVBREosS0FFSztBQUNEO0FBQUE7QUFBQSw4Q0FBYVIsQ0FBYixDQUFlUyxVQUFmLENBQTBCLEtBQTFCO0FBQ0g7QUFDRCxlQUFLRixJQUFMLEdBQVksQ0FBQyxLQUFLQSxJQUFsQjtBQUNILFM7OztRQWQyQmQsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IEV2ZW50VHB5ZSB9IGZyb20gJy4vQ29tbW9uL0V2ZW50cy9FdmVudFRweWUnO1xuaW1wb3J0IHsgTXlFdmVudCB9IGZyb20gJy4vQ29tbW9uL0V2ZW50cy9NeUV2ZW50JztcbmltcG9ydCB7IE15TGlzdENvbW1vbiB9IGZyb20gJy4vQ29tbW9uL015TWF0aC9NeUxpc3RDb21tb24nO1xuaW1wb3J0IHsgUG9wdXBNYW5hZ2VyIH0gZnJvbSAnLi9Db21tb24vUG9wdXAvUG9wdXBNYW5hZ2VyJztcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gJy4vQ29tbW9uL1NvdW5kL1NvdW5kTWFuYWdlcic7XG5pbXBvcnQgeyBEYXRhU3RvcmFnZSB9IGZyb20gJy4vQ29tbW9uL1N0b3JhZ2UvRGF0YVN0b3JhZ2UnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1RFU1RTQ1JJUFQnKVxuZXhwb3J0IGNsYXNzIFRFU1RTQ1JJUFQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBTb3VuZE1hbmFnZXIuSS5QbGF5QkdNdXNpYygpO1xuICAgIH1cbiAgICBib29sID0gdHJ1ZTtcbiAgICBidG4ocmVzLCByZXMyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlczIpO1xuICAgICAgICBpZiAodGhpcy5ib29sKVxuICAgICAgICAgICAgUG9wdXBNYW5hZ2VyLkkuU2hvd1BvcHVwKFwiVGVzdFByZWZhYjBcIik7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUG9wdXBNYW5hZ2VyLkkuQ2xvc2VQb3B1cChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib29sID0gIXRoaXMuYm9vbDtcbiAgICB9XG5cbn1cbiJdfQ==