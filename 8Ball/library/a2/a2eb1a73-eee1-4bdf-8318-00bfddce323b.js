System.register(["cc", "code-quality:cr", "./Common/Popup/PopupManager.js", "./Common/Sound/SoundManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, PopupManager, SoundManager, _dec, _class, _temp, _crd, ccclass, property, TESTSCRIPT;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_CommonPopupPopupManagerJs) {
      PopupManager = _CommonPopupPopupManagerJs.PopupManager;
    }, function (_CommonSoundSoundManagerJs) {
      SoundManager = _CommonSoundSoundManagerJs.SoundManager;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "a2eb1pz7uFL34MYAL/dzjI7", "TESTSCRIPT", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TESTSCRIPT", TESTSCRIPT = (_dec = ccclass('TESTSCRIPT'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(TESTSCRIPT, _Component);

        function TESTSCRIPT() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, TESTSCRIPT);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TESTSCRIPT)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.bool = true;
          return _this;
        }

        _createClass(TESTSCRIPT, [{
          key: "onLoad",
          value: function onLoad() {
            (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager).I.PlayBGMusic();
          }
        }, {
          key: "btn",
          value: function btn(res, res2) {
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
        }]);

        return TESTSCRIPT;
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvOEJhbGwvYXNzZXRzL1NjcmlwdHMvVEVTVFNDUklQVC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiUG9wdXBNYW5hZ2VyIiwiU291bmRNYW5hZ2VyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiVEVTVFNDUklQVCIsImJvb2wiLCJJIiwiUGxheUJHTXVzaWMiLCJyZXMiLCJyZXMyIiwiY29uc29sZSIsImxvZyIsIlNob3dQb3B1cCIsIkNsb3NlUG9wdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUzs7OztBQUlaQyxNQUFBQSxZLDhCQUFBQSxZOztBQUNBQyxNQUFBQSxZLDhCQUFBQSxZOzs7Ozs7QUFFREMsTUFBQUEsTyxHQUFzQkosVSxDQUF0QkksTztBQUFTQyxNQUFBQSxRLEdBQWFMLFUsQ0FBYkssUTs7NEJBR0pDLFUsV0FEWkYsT0FBTyxDQUFDLFlBQUQsQzs7Ozs7Ozs7Ozs7Ozs7O2dCQU1KRyxJLEdBQU8sSTs7Ozs7O21DQUhFO0FBQ0w7QUFBQTtBQUFBLDhDQUFhQyxDQUFiLENBQWVDLFdBQWY7QUFDSDs7OzhCQUVHQyxHLEVBQUtDLEksRUFBTTtBQUNYQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLGdCQUFJLEtBQUtKLElBQVQsRUFDSTtBQUFBO0FBQUEsOENBQWFDLENBQWIsQ0FBZU0sU0FBZixDQUF5QixhQUF6QixFQURKLEtBRUs7QUFDRDtBQUFBO0FBQUEsZ0RBQWFOLENBQWIsQ0FBZU8sVUFBZixDQUEwQixLQUExQjtBQUNIO0FBQ0QsaUJBQUtSLElBQUwsR0FBWSxDQUFDLEtBQUtBLElBQWxCO0FBQ0g7Ozs7UUFkMkJOLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBFdmVudFRweWUgfSBmcm9tICcuL0NvbW1vbi9FdmVudHMvRXZlbnRUcHllJztcbmltcG9ydCB7IE15RXZlbnQgfSBmcm9tICcuL0NvbW1vbi9FdmVudHMvTXlFdmVudCc7XG5pbXBvcnQgeyBNeUxpc3RDb21tb24gfSBmcm9tICcuL0NvbW1vbi9NeU1hdGgvTXlMaXN0Q29tbW9uJztcbmltcG9ydCB7IFBvcHVwTWFuYWdlciB9IGZyb20gJy4vQ29tbW9uL1BvcHVwL1BvcHVwTWFuYWdlcic7XG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tICcuL0NvbW1vbi9Tb3VuZC9Tb3VuZE1hbmFnZXInO1xuaW1wb3J0IHsgRGF0YVN0b3JhZ2UgfSBmcm9tICcuL0NvbW1vbi9TdG9yYWdlL0RhdGFTdG9yYWdlJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdURVNUU0NSSVBUJylcbmV4cG9ydCBjbGFzcyBURVNUU0NSSVBUIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgU291bmRNYW5hZ2VyLkkuUGxheUJHTXVzaWMoKTtcbiAgICB9XG4gICAgYm9vbCA9IHRydWU7XG4gICAgYnRuKHJlcywgcmVzMikge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMyKTtcbiAgICAgICAgaWYgKHRoaXMuYm9vbClcbiAgICAgICAgICAgIFBvcHVwTWFuYWdlci5JLlNob3dQb3B1cChcIlRlc3RQcmVmYWIwXCIpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFBvcHVwTWFuYWdlci5JLkNsb3NlUG9wdXAoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9vbCA9ICF0aGlzLmJvb2w7XG4gICAgfVxuXG59XG4iXX0=