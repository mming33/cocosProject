System.register(["cce.code-quality.cr", "cc", "./Common/Sound/SoundManager.js", "./Common/StateMachine/StateMachine.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, SoundManager, StateMachine, _dec, _class, _temp, _crd, ccclass, property, TESTSCRIPT;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "./Common/Sound/SoundManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "./Common/StateMachine/StateMachine", _context.meta, extras);
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
    }, function (_CommonSoundSoundManagerJs) {
      SoundManager = _CommonSoundSoundManagerJs.SoundManager;
    }, function (_CommonStateMachineStateMachineJs) {
      StateMachine = _CommonStateMachineStateMachineJs.StateMachine;
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

        _proto.btn = function btn() {
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).ChangeState("StartGameState", "Test1State");
        };

        return TESTSCRIPT;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9URVNUU0NSSVBULnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJTb3VuZE1hbmFnZXIiLCJTdGF0ZU1hY2hpbmUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJURVNUU0NSSVBUIiwib25Mb2FkIiwiSSIsIlBsYXlCR011c2ljIiwiYnRuIiwiQ2hhbmdlU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTOztBQUtaQyxNQUFBQSxZLDhCQUFBQSxZOztBQUNBQyxNQUFBQSxZLHFDQUFBQSxZOzs7Ozs7O0FBRURDLE1BQUFBLE8sR0FBc0JKLFUsQ0FBdEJJLE87QUFBU0MsTUFBQUEsUSxHQUFhTCxVLENBQWJLLFE7OzRCQUdKQyxVLFdBRFpGLE9BQU8sQ0FBQyxZQUFELEM7Ozs7Ozs7Ozs7OztpRUFNRyxJOzs7Ozs7O2VBSFBHLE0sR0FBQSxrQkFBUztBQUNMO0FBQUE7QUFBQSw0Q0FBYUMsQ0FBYixDQUFlQyxXQUFmO0FBQ0gsUzs7ZUFFREMsRyxHQUFBLGVBQU07QUFDSDtBQUFBO0FBQUEsNENBQWFDLFdBQWIsQ0FBeUIsZ0JBQXpCLEVBQTBDLFlBQTFDO0FBQ0YsUzs7O1FBUjJCVixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgRXZlbnRUcHllIH0gZnJvbSAnLi9Db21tb24vRXZlbnRzL0V2ZW50VHB5ZSc7XG5pbXBvcnQgeyBNeUV2ZW50IH0gZnJvbSAnLi9Db21tb24vRXZlbnRzL015RXZlbnQnO1xuaW1wb3J0IHsgTXlMaXN0Q29tbW9uIH0gZnJvbSAnLi9Db21tb24vTXlNYXRoL015TGlzdENvbW1vbic7XG5pbXBvcnQgeyBQb3B1cE1hbmFnZXIgfSBmcm9tICcuL0NvbW1vbi9Qb3B1cC9Qb3B1cE1hbmFnZXInO1xuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi9Db21tb24vU291bmQvU291bmRNYW5hZ2VyJztcbmltcG9ydCB7IFN0YXRlTWFjaGluZSB9IGZyb20gJy4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZU1hY2hpbmUnO1xuaW1wb3J0IHsgRGF0YVN0b3JhZ2UgfSBmcm9tICcuL0NvbW1vbi9TdG9yYWdlL0RhdGFTdG9yYWdlJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdURVNUU0NSSVBUJylcbmV4cG9ydCBjbGFzcyBURVNUU0NSSVBUIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgU291bmRNYW5hZ2VyLkkuUGxheUJHTXVzaWMoKTtcbiAgICB9XG4gICAgYm9vbCA9IHRydWU7XG4gICAgYnRuKCkge1xuICAgICAgIFN0YXRlTWFjaGluZS5DaGFuZ2VTdGF0ZShcIlN0YXJ0R2FtZVN0YXRlXCIsXCJUZXN0MVN0YXRlXCIpO1xuICAgIH1cblxufVxuIl19