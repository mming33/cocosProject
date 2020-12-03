System.register(["cc", "code-quality:cr", "../../Common/SourceManager.js", "../../Utils/NDBTS.js", "./Popup.js", "./PopupManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, find, SourceManager, NDB, Popup, PopupManager, _dec, _class, _crd, ccclass, property, LosePopup;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfSourceManager(extras) {
    _reporterNs.report("SourceManager", "../../Common/SourceManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNDB(extras) {
    _reporterNs.report("NDB", "../../Utils/NDBTS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopup(extras) {
    _reporterNs.report("Popup", "./Popup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopupManager(extras) {
    _reporterNs.report("PopupManager", "./PopupManager", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      find = _cc.find;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_CommonSourceManagerJs) {
      SourceManager = _CommonSourceManagerJs.SourceManager;
    }, function (_UtilsNDBTSJs) {
      NDB = _UtilsNDBTSJs.default;
    }, function (_PopupJs) {
      Popup = _PopupJs.Popup;
    }, function (_PopupManagerJs) {
      PopupManager = _PopupManagerJs.PopupManager;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "2e9d00XaxpIrKNEaqTygKss", "LosePopup", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("LosePopup", LosePopup = (_dec = ccclass('LosePopup'), _dec(_class = /*#__PURE__*/function (_ref) {
        _inherits(LosePopup, _ref);

        function LosePopup() {
          _classCallCheck(this, LosePopup);

          return _possibleConstructorReturn(this, _getPrototypeOf(LosePopup).apply(this, arguments));
        }

        _createClass(LosePopup, [{
          key: "Init",
          value: function Init() {
            (_crd && SourceManager === void 0 ? (_reportPossibleCrUseOfSourceManager({
              error: Error()
            }), SourceManager) : SourceManager).I.Lose();
            var obj = {
              eventName: "game_end",
              name: "8ball",
              result: 'lose'
            };
            (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
              error: Error()
            }), NDB) : NDB).sendAutoJoinEvent(obj);
            this.scheduleOnce(function () {
              console.log("打开结算弹窗");
              (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
                error: Error()
              }), PopupManager) : PopupManager).I.ClosePopup(find("Canvas"));
              (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
                error: Error()
              }), PopupManager) : PopupManager).I.ShowPopup(find("Canvas"), "SettlemenyPopup");
            }, 5);
          }
        }]);

        return LosePopup;
      }(_crd && Popup === void 0 ? (_reportPossibleCrUseOfPopup({
        error: Error()
      }), Popup) : Popup)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0dhbWUvUG9wdXAvTG9zZVBvcHVwLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJmaW5kIiwiU291cmNlTWFuYWdlciIsIk5EQiIsIlBvcHVwIiwiUG9wdXBNYW5hZ2VyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTG9zZVBvcHVwIiwiSSIsIkxvc2UiLCJvYmoiLCJldmVudE5hbWUiLCJuYW1lIiwicmVzdWx0Iiwic2VuZEF1dG9Kb2luRXZlbnQiLCJzY2hlZHVsZU9uY2UiLCJjb25zb2xlIiwibG9nIiwiQ2xvc2VQb3B1cCIsIlNob3dQb3B1cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQTZCQyxNQUFBQSxJLE9BQUFBLEk7Ozs7QUFFN0JDLE1BQUFBLGEsMEJBQUFBLGE7O0FBQ0ZDLE1BQUFBLEc7O0FBQ0VDLE1BQUFBLEssWUFBQUEsSzs7QUFDQUMsTUFBQUEsWSxtQkFBQUEsWTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JOLFUsQ0FBdEJNLE87QUFBU0MsTUFBQUEsUSxHQUFhUCxVLENBQWJPLFE7OzJCQUdKQyxTLFdBRFpGLE9BQU8sQ0FBQyxXQUFELEM7Ozs7Ozs7Ozs7O2lDQUlHO0FBQ0g7QUFBQTtBQUFBLGdEQUFjRyxDQUFkLENBQWdCQyxJQUFoQjtBQUNBLGdCQUFJQyxHQUFHLEdBQUc7QUFDTkMsY0FBQUEsU0FBUyxFQUFFLFVBREw7QUFFTkMsY0FBQUEsSUFBSSxFQUFFLE9BRkE7QUFHTkMsY0FBQUEsTUFBTSxFQUFDO0FBSEQsYUFBVjtBQUtBO0FBQUE7QUFBQSw0QkFBSUMsaUJBQUosQ0FBc0JKLEdBQXRCO0FBQ0EsaUJBQUtLLFlBQUwsQ0FBa0IsWUFBTTtBQUNwQkMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBO0FBQUE7QUFBQSxnREFBYVQsQ0FBYixDQUFlVSxVQUFmLENBQTBCbEIsSUFBSSxDQUFDLFFBQUQsQ0FBOUI7QUFDQTtBQUFBO0FBQUEsZ0RBQWFRLENBQWIsQ0FBZVcsU0FBZixDQUF5Qm5CLElBQUksQ0FBQyxRQUFELENBQTdCLEVBQXlDLGlCQUF6QztBQUNILGFBSkQsRUFJRyxDQUpIO0FBS0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIGZpbmQgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBTZXJ2ZXJDb21tb24gfSBmcm9tICcuLi8uLi9Db21tb24vU2VydmVyQ29tbW9uJztcbmltcG9ydCB7IFNvdXJjZU1hbmFnZXIgfSBmcm9tICcuLi8uLi9Db21tb24vU291cmNlTWFuYWdlcic7XG5pbXBvcnQgTkRCIGZyb20gJy4uLy4uL1V0aWxzL05EQlRTJztcbmltcG9ydCB7IFBvcHVwIH0gZnJvbSAnLi9Qb3B1cCc7XG5pbXBvcnQgeyBQb3B1cE1hbmFnZXIgfSBmcm9tICcuL1BvcHVwTWFuYWdlcic7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnTG9zZVBvcHVwJylcbmV4cG9ydCBjbGFzcyBMb3NlUG9wdXAgZXh0ZW5kcyBQb3B1cCB7XG5cblxuICAgIEluaXQoKSB7XG4gICAgICAgIFNvdXJjZU1hbmFnZXIuSS5Mb3NlKCk7XG4gICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICBldmVudE5hbWU6IFwiZ2FtZV9lbmRcIixcbiAgICAgICAgICAgIG5hbWU6IFwiOGJhbGxcIixcbiAgICAgICAgICAgIHJlc3VsdDonbG9zZSdcbiAgICAgICAgfVxuICAgICAgICBOREIuc2VuZEF1dG9Kb2luRXZlbnQob2JqKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmiZPlvIDnu5PnrpflvLnnqpdcIik7XG4gICAgICAgICAgICBQb3B1cE1hbmFnZXIuSS5DbG9zZVBvcHVwKGZpbmQoXCJDYW52YXNcIikpO1xuICAgICAgICAgICAgUG9wdXBNYW5hZ2VyLkkuU2hvd1BvcHVwKGZpbmQoXCJDYW52YXNcIiksIFwiU2V0dGxlbWVueVBvcHVwXCIpO1xuICAgICAgICB9LCA1KVxuICAgIH1cblxufVxuIl19