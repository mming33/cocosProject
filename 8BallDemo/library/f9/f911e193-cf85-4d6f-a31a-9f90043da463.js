System.register(["cc", "code-quality:cr", "../Common/noSleep.js", "../Utils/NDBTS.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, SpriteFrame, CCString, noSleep, NDB, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, GameData;

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

  function _reportPossibleCrUseOfnoSleep(extras) {
    _reporterNs.report("noSleep", "../Common/noSleep", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNDB(extras) {
    _reporterNs.report("NDB", "../Utils/NDBTS", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SpriteFrame = _cc.SpriteFrame;
      CCString = _cc.CCString;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_CommonNoSleepJs) {
      noSleep = _CommonNoSleepJs.default;
    }, function (_UtilsNDBTSJs) {
      NDB = _UtilsNDBTSJs.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "f911eGTz4VNb6Man5AEPaRj", "GameData", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameData", GameData = (_dec = ccclass('GameData'), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec4 = property(CCString), _dec5 = property(CCString), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(GameData, _Component);

        function GameData() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GameData);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameData)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.loadData = {};
          _this.SettlementData = {};

          _initializerDefineProperty(_this, "thisplayerHeadImage", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "RobotHeadImage", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "thisPlayerName", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "RobotName", _descriptor4, _assertThisInitialized(_this));

          _this.Winer = null;
          _this.allMoney = 0;
          _this.gameStop = false;
          _this.isFirst = true;
          return _this;
        }

        _createClass(GameData, [{
          key: "onLoad",
          value: function onLoad() {
            GameData.I = this.node.getComponent(GameData);

            if (GameData.I.isFirst) {
              GameData.I.isFirst = false;
              var obj = {
                eventName: "game_load_complete",
                name: "8ball"
              };
              (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
                error: Error()
              }), NDB) : NDB).sendAutoJoinEvent(obj);
            }

            var nosleep = new (_crd && noSleep === void 0 ? (_reportPossibleCrUseOfnoSleep({
              error: Error()
            }), noSleep) : noSleep)();
            nosleep.enable();
            console.log("当前版本为v1.0.0.10"); // console.error("当前版本为v1.0.0.7");
          }
        }]);

        return GameData;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "thisplayerHeadImage", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "RobotHeadImage", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "thisPlayerName", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "RobotName", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0dhbWUvR2FtZURhdGEudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlNwcml0ZUZyYW1lIiwiQ0NTdHJpbmciLCJub1NsZWVwIiwiTkRCIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiR2FtZURhdGEiLCJsb2FkRGF0YSIsIlNldHRsZW1lbnREYXRhIiwiV2luZXIiLCJhbGxNb25leSIsImdhbWVTdG9wIiwiaXNGaXJzdCIsIkkiLCJub2RlIiwiZ2V0Q29tcG9uZW50Iiwib2JqIiwiZXZlbnROYW1lIiwibmFtZSIsInNlbmRBdXRvSm9pbkV2ZW50Iiwibm9zbGVlcCIsImVuYWJsZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLFEsT0FBQUEsUTs7OztBQUM1Q0MsTUFBQUEsTzs7QUFDQUMsTUFBQUEsRzs7Ozs7O0FBRUNDLE1BQUFBLE8sR0FBc0JOLFUsQ0FBdEJNLE87QUFBU0MsTUFBQUEsUSxHQUFhUCxVLENBQWJPLFE7OzBCQUdKQyxRLFdBRFpGLE9BQU8sQ0FBQyxVQUFELEMsVUFRSEMsUUFBUSxDQUFDTCxXQUFELEMsVUFHUkssUUFBUSxDQUFDTCxXQUFELEMsVUFHUkssUUFBUSxDQUFDSixRQUFELEMsVUFHUkksUUFBUSxDQUFDSixRQUFELEM7Ozs7Ozs7Ozs7Ozs7OztnQkFiVE0sUSxHQUFnQixFO2dCQUVoQkMsYyxHQUFzQixFOzs7Ozs7Ozs7O2dCQWN0QkMsSyxHQUFtQixJO2dCQUVuQkMsUSxHQUFtQixDO2dCQUVuQkMsUSxHQUFvQixLO2dCQUNwQkMsTyxHQUFtQixJOzs7Ozs7bUNBQ1Y7QUFDTE4sWUFBQUEsUUFBUSxDQUFDTyxDQUFULEdBQWEsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCVCxRQUF2QixDQUFiOztBQUNBLGdCQUFJQSxRQUFRLENBQUNPLENBQVQsQ0FBV0QsT0FBZixFQUF3QjtBQUNwQk4sY0FBQUEsUUFBUSxDQUFDTyxDQUFULENBQVdELE9BQVgsR0FBcUIsS0FBckI7QUFDQSxrQkFBSUksR0FBRyxHQUFHO0FBQ05DLGdCQUFBQSxTQUFTLEVBQUUsb0JBREw7QUFFTkMsZ0JBQUFBLElBQUksRUFBRTtBQUZBLGVBQVY7QUFJQTtBQUFBO0FBQUEsOEJBQUlDLGlCQUFKLENBQXNCSCxHQUF0QjtBQUNIOztBQUNELGdCQUFJSSxPQUFPLEdBQUc7QUFBQTtBQUFBLHFDQUFkO0FBQ0FBLFlBQUFBLE9BQU8sQ0FBQ0MsTUFBUjtBQUNBQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQVpLLENBYUw7QUFFSDs7OztRQXhDeUJ4QixTOzs7OztpQkFRUyxJOzs7Ozs7O2lCQUdMLEk7Ozs7Ozs7aUJBR0wsRTs7Ozs7OztpQkFHTCxFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBTcHJpdGVGcmFtZSwgQ0NTdHJpbmcgfSBmcm9tICdjYyc7XG5pbXBvcnQgbm9TbGVlcCBmcm9tICcuLi9Db21tb24vbm9TbGVlcCc7XG5pbXBvcnQgTkRCIGZyb20gJy4uL1V0aWxzL05EQlRTJztcbmltcG9ydCB7IFJvdW5kVHlwZSB9IGZyb20gJy4vR2FtZUNvbW1vbi9Sb3VuZFR5cGUnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0dhbWVEYXRhJylcbmV4cG9ydCBjbGFzcyBHYW1lRGF0YSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIEk6IEdhbWVEYXRhO1xuXG4gICAgbG9hZERhdGE6IGFueSA9IHt9O1xuXG4gICAgU2V0dGxlbWVudERhdGE6IGFueSA9IHt9O1xuXG4gICAgQHByb3BlcnR5KFNwcml0ZUZyYW1lKVxuICAgIHRoaXNwbGF5ZXJIZWFkSW1hZ2U6IFNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShTcHJpdGVGcmFtZSlcbiAgICBSb2JvdEhlYWRJbWFnZTogU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KENDU3RyaW5nKVxuICAgIHRoaXNQbGF5ZXJOYW1lOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgQHByb3BlcnR5KENDU3RyaW5nKVxuICAgIFJvYm90TmFtZTogc3RyaW5nID0gXCJcIjtcblxuICAgIFdpbmVyOiBSb3VuZFR5cGUgPSBudWxsO1xuXG4gICAgYWxsTW9uZXk6IG51bWJlciA9IDA7XG5cbiAgICBnYW1lU3RvcDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzRmlyc3Q6IGJvb2xlYW4gPSB0cnVlO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgR2FtZURhdGEuSSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoR2FtZURhdGEpO1xuICAgICAgICBpZiAoR2FtZURhdGEuSS5pc0ZpcnN0KSB7XG4gICAgICAgICAgICBHYW1lRGF0YS5JLmlzRmlyc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgZXZlbnROYW1lOiBcImdhbWVfbG9hZF9jb21wbGV0ZVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiOGJhbGxcIixcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE5EQi5zZW5kQXV0b0pvaW5FdmVudChvYmopO1xuICAgICAgICB9XG4gICAgICAgIGxldCBub3NsZWVwID0gbmV3IG5vU2xlZXAoKTtcbiAgICAgICAgbm9zbGVlcC5lbmFibGUoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLlvZPliY3niYjmnKzkuLp2MS4wLjAuMTBcIik7XG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCLlvZPliY3niYjmnKzkuLp2MS4wLjAuN1wiKTtcbiAgICAgICAgXG4gICAgfVxuXG5cbn1cbiJdfQ==