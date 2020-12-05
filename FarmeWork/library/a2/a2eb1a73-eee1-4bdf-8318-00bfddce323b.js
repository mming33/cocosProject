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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrL2Fzc2V0cy9TY3JpcHRzL1RFU1RTQ1JJUFQudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlBvcHVwTWFuYWdlciIsIlNvdW5kTWFuYWdlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlRFU1RTQ1JJUFQiLCJib29sIiwiSSIsIlBsYXlCR011c2ljIiwicmVzIiwicmVzMiIsImNvbnNvbGUiLCJsb2ciLCJTaG93UG9wdXAiLCJDbG9zZVBvcHVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7Ozs7QUFJWkMsTUFBQUEsWSw4QkFBQUEsWTs7QUFDQUMsTUFBQUEsWSw4QkFBQUEsWTs7Ozs7O0FBRURDLE1BQUFBLE8sR0FBc0JKLFUsQ0FBdEJJLE87QUFBU0MsTUFBQUEsUSxHQUFhTCxVLENBQWJLLFE7OzRCQUdKQyxVLFdBRFpGLE9BQU8sQ0FBQyxZQUFELEM7Ozs7Ozs7Ozs7Ozs7OztnQkFNSkcsSSxHQUFPLEk7Ozs7OzttQ0FIRTtBQUNMO0FBQUE7QUFBQSw4Q0FBYUMsQ0FBYixDQUFlQyxXQUFmO0FBQ0g7Ozs4QkFFR0MsRyxFQUFLQyxJLEVBQU07QUFDWEMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQSxnQkFBSSxLQUFLSixJQUFULEVBQ0k7QUFBQTtBQUFBLDhDQUFhQyxDQUFiLENBQWVNLFNBQWYsQ0FBeUIsYUFBekIsRUFESixLQUVLO0FBQ0Q7QUFBQTtBQUFBLGdEQUFhTixDQUFiLENBQWVPLFVBQWYsQ0FBMEIsS0FBMUI7QUFDSDtBQUNELGlCQUFLUixJQUFMLEdBQVksQ0FBQyxLQUFLQSxJQUFsQjtBQUNIOzs7O1FBZDJCTixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgRXZlbnRUcHllIH0gZnJvbSAnLi9Db21tb24vRXZlbnRzL0V2ZW50VHB5ZSc7XG5pbXBvcnQgeyBNeUV2ZW50IH0gZnJvbSAnLi9Db21tb24vRXZlbnRzL015RXZlbnQnO1xuaW1wb3J0IHsgTXlMaXN0Q29tbW9uIH0gZnJvbSAnLi9Db21tb24vTXlNYXRoL015TGlzdENvbW1vbic7XG5pbXBvcnQgeyBQb3B1cE1hbmFnZXIgfSBmcm9tICcuL0NvbW1vbi9Qb3B1cC9Qb3B1cE1hbmFnZXInO1xuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi9Db21tb24vU291bmQvU291bmRNYW5hZ2VyJztcbmltcG9ydCB7IERhdGFTdG9yYWdlIH0gZnJvbSAnLi9Db21tb24vU3RvcmFnZS9EYXRhU3RvcmFnZSc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnVEVTVFNDUklQVCcpXG5leHBvcnQgY2xhc3MgVEVTVFNDUklQVCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIFNvdW5kTWFuYWdlci5JLlBsYXlCR011c2ljKCk7XG4gICAgfVxuICAgIGJvb2wgPSB0cnVlO1xuICAgIGJ0bihyZXMsIHJlczIpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzMik7XG4gICAgICAgIGlmICh0aGlzLmJvb2wpXG4gICAgICAgICAgICBQb3B1cE1hbmFnZXIuSS5TaG93UG9wdXAoXCJUZXN0UHJlZmFiMFwiKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBQb3B1cE1hbmFnZXIuSS5DbG9zZVBvcHVwKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvb2wgPSAhdGhpcy5ib29sO1xuICAgIH1cblxufVxuIl19