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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9URVNUU0NSSVBULnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJQb3B1cE1hbmFnZXIiLCJTb3VuZE1hbmFnZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJURVNUU0NSSVBUIiwib25Mb2FkIiwiSSIsIlBsYXlCR011c2ljIiwiYnRuIiwicmVzIiwicmVzMiIsImNvbnNvbGUiLCJsb2ciLCJib29sIiwiU2hvd1BvcHVwIiwiQ2xvc2VQb3B1cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7O0FBSVpDLE1BQUFBLFksOEJBQUFBLFk7O0FBQ0FDLE1BQUFBLFksOEJBQUFBLFk7Ozs7Ozs7QUFFREMsTUFBQUEsTyxHQUFzQkosVSxDQUF0QkksTztBQUFTQyxNQUFBQSxRLEdBQWFMLFUsQ0FBYkssUTs7NEJBR0pDLFUsV0FEWkYsT0FBTyxDQUFDLFlBQUQsQzs7Ozs7Ozs7Ozs7O2lFQU1HLEk7Ozs7Ozs7ZUFIUEcsTSxHQUFBLGtCQUFTO0FBQ0w7QUFBQTtBQUFBLDRDQUFhQyxDQUFiLENBQWVDLFdBQWY7QUFDSCxTOztlQUVEQyxHLEdBQUEsYUFBSUMsR0FBSixFQUFTQyxJQUFULEVBQWU7QUFDWEMsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQSxjQUFJLEtBQUtHLElBQVQsRUFDSTtBQUFBO0FBQUEsNENBQWFQLENBQWIsQ0FBZVEsU0FBZixDQUF5QixhQUF6QixFQURKLEtBRUs7QUFDRDtBQUFBO0FBQUEsOENBQWFSLENBQWIsQ0FBZVMsVUFBZixDQUEwQixLQUExQjtBQUNIO0FBQ0QsZUFBS0YsSUFBTCxHQUFZLENBQUMsS0FBS0EsSUFBbEI7QUFDSCxTOzs7UUFkMkJkLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBFdmVudFRweWUgfSBmcm9tICcuL0NvbW1vbi9FdmVudHMvRXZlbnRUcHllJztcbmltcG9ydCB7IE15RXZlbnQgfSBmcm9tICcuL0NvbW1vbi9FdmVudHMvTXlFdmVudCc7XG5pbXBvcnQgeyBNeUxpc3RDb21tb24gfSBmcm9tICcuL0NvbW1vbi9NeU1hdGgvTXlMaXN0Q29tbW9uJztcbmltcG9ydCB7IFBvcHVwTWFuYWdlciB9IGZyb20gJy4vQ29tbW9uL1BvcHVwL1BvcHVwTWFuYWdlcic7XG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tICcuL0NvbW1vbi9Tb3VuZC9Tb3VuZE1hbmFnZXInO1xuaW1wb3J0IHsgRGF0YVN0b3JhZ2UgfSBmcm9tICcuL0NvbW1vbi9TdG9yYWdlL0RhdGFTdG9yYWdlJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdURVNUU0NSSVBUJylcbmV4cG9ydCBjbGFzcyBURVNUU0NSSVBUIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgU291bmRNYW5hZ2VyLkkuUGxheUJHTXVzaWMoKTtcbiAgICB9XG4gICAgYm9vbCA9IHRydWU7XG4gICAgYnRuKHJlcywgcmVzMikge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMyKTtcbiAgICAgICAgaWYgKHRoaXMuYm9vbClcbiAgICAgICAgICAgIFBvcHVwTWFuYWdlci5JLlNob3dQb3B1cChcIlRlc3RQcmVmYWIwXCIpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFBvcHVwTWFuYWdlci5JLkNsb3NlUG9wdXAoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9vbCA9ICF0aGlzLmJvb2w7XG4gICAgfVxuXG59XG4iXX0=