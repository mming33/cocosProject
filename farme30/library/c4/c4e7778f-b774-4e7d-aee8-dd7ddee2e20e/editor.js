System.register(["cce.code-quality.cr", "cc", "./Common/Popup/PopupManager.js", "./Common/Sound/SoundManager.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, PopupManager, SoundManager, _dec, _class, _temp, _crd, ccclass, property, TESTSCRIPT;

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("TESTSCRIPT", TESTSCRIPT = (_dec = ccclass('TESTSCRIPT'), _dec(_class = (_temp = class TESTSCRIPT extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "bool", true);
        }

        onLoad() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).I.PlayBGMusic();
        }

        btn(res, res2) {
          console.log(res2);
          if (this.bool) (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
            error: Error()
          }), PopupManager) : PopupManager).I.ShowPopup("TestPrefab0");else {
            (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
              error: Error()
            }), PopupManager) : PopupManager).I.ClosePopup(false);
          }
          this.bool = !this.bool;
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL1RFU1RTQ1JJUFQudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlBvcHVwTWFuYWdlciIsIlNvdW5kTWFuYWdlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlRFU1RTQ1JJUFQiLCJvbkxvYWQiLCJJIiwiUGxheUJHTXVzaWMiLCJidG4iLCJyZXMiLCJyZXMyIiwiY29uc29sZSIsImxvZyIsImJvb2wiLCJTaG93UG9wdXAiLCJDbG9zZVBvcHVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTOztBQUlaQyxNQUFBQSxZLDhCQUFBQSxZOztBQUNBQyxNQUFBQSxZLDhCQUFBQSxZOzs7Ozs7O09BRUg7QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE8sR0FBd0JMLFU7OzRCQUdqQk0sVSxXQURaRixPQUFPLENBQUMsWUFBRCxDLHlCQUFSLE1BQ2FFLFVBRGIsU0FDZ0NMLFNBRGhDLENBQzBDO0FBQUE7QUFBQTs7QUFBQSx3Q0FLL0IsSUFMK0I7QUFBQTs7QUFFdENNLFFBQUFBLE1BQU0sR0FBRztBQUNMO0FBQUE7QUFBQSw0Q0FBYUMsQ0FBYixDQUFlQyxXQUFmO0FBQ0g7O0FBRURDLFFBQUFBLEdBQUcsQ0FBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQVk7QUFDWEMsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQSxjQUFJLEtBQUtHLElBQVQsRUFDSTtBQUFBO0FBQUEsNENBQWFQLENBQWIsQ0FBZVEsU0FBZixDQUF5QixhQUF6QixFQURKLEtBRUs7QUFDRDtBQUFBO0FBQUEsOENBQWFSLENBQWIsQ0FBZVMsVUFBZixDQUEwQixLQUExQjtBQUNIO0FBQ0QsZUFBS0YsSUFBTCxHQUFZLENBQUMsS0FBS0EsSUFBbEI7QUFDSDs7QUFkcUMsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IEV2ZW50VHB5ZSB9IGZyb20gJy4vQ29tbW9uL0V2ZW50cy9FdmVudFRweWUnO1xuaW1wb3J0IHsgTXlFdmVudCB9IGZyb20gJy4vQ29tbW9uL0V2ZW50cy9NeUV2ZW50JztcbmltcG9ydCB7IE15TGlzdENvbW1vbiB9IGZyb20gJy4vQ29tbW9uL015TWF0aC9NeUxpc3RDb21tb24nO1xuaW1wb3J0IHsgUG9wdXBNYW5hZ2VyIH0gZnJvbSAnLi9Db21tb24vUG9wdXAvUG9wdXBNYW5hZ2VyJztcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gJy4vQ29tbW9uL1NvdW5kL1NvdW5kTWFuYWdlcic7XG5pbXBvcnQgeyBEYXRhU3RvcmFnZSB9IGZyb20gJy4vQ29tbW9uL1N0b3JhZ2UvRGF0YVN0b3JhZ2UnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1RFU1RTQ1JJUFQnKVxuZXhwb3J0IGNsYXNzIFRFU1RTQ1JJUFQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBTb3VuZE1hbmFnZXIuSS5QbGF5QkdNdXNpYygpO1xuICAgIH1cbiAgICBib29sID0gdHJ1ZTtcbiAgICBidG4ocmVzLCByZXMyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlczIpO1xuICAgICAgICBpZiAodGhpcy5ib29sKVxuICAgICAgICAgICAgUG9wdXBNYW5hZ2VyLkkuU2hvd1BvcHVwKFwiVGVzdFByZWZhYjBcIik7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUG9wdXBNYW5hZ2VyLkkuQ2xvc2VQb3B1cChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib29sID0gIXRoaXMuYm9vbDtcbiAgICB9XG5cbn1cbiJdfQ==