System.register(["cc", "code-quality:cr", "../../Common/ServerCommon.js", "../../Common/SourceManager.js", "../../Utils/NDBTS.js", "./Popup.js", "./PopupManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, find, ServerCommon, SourceManager, NDB, Popup, PopupManager, _dec, _class, _crd, ccclass, property, WinPopup;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfServerCommon(extras) {
    _reporterNs.report("ServerCommon", "../../Common/ServerCommon", _context.meta, extras);
  }

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
    }, function (_CommonServerCommonJs) {
      ServerCommon = _CommonServerCommonJs.ServerCommon;
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
      _cclegacy._RF.push({}, "72affiSZE5BxJ1aX7RVabhL", "WinPopup", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("WinPopup", WinPopup = (_dec = ccclass('WinPopup'), _dec(_class = /*#__PURE__*/function (_ref) {
        _inherits(WinPopup, _ref);

        function WinPopup() {
          _classCallCheck(this, WinPopup);

          return _possibleConstructorReturn(this, _getPrototypeOf(WinPopup).apply(this, arguments));
        }

        _createClass(WinPopup, [{
          key: "Init",
          value: function Init() {
            (_crd && ServerCommon === void 0 ? (_reportPossibleCrUseOfServerCommon({
              error: Error()
            }), ServerCommon) : ServerCommon).gload(200, "win");
            var obj = {
              eventName: "game_end",
              name: "8ball",
              result: 'win'
            };
            (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
              error: Error()
            }), NDB) : NDB).sendAutoJoinEvent(obj);
            (_crd && SourceManager === void 0 ? (_reportPossibleCrUseOfSourceManager({
              error: Error()
            }), SourceManager) : SourceManager).I.Win();
            this.scheduleOnce(function () {
              (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
                error: Error()
              }), PopupManager) : PopupManager).I.ClosePopup(find("Canvas"));
              (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
                error: Error()
              }), PopupManager) : PopupManager).I.ShowPopup(find("Canvas"), "SettlemenyPopup");
            }, 5);
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return WinPopup;
      }(_crd && Popup === void 0 ? (_reportPossibleCrUseOfPopup({
        error: Error()
      }), Popup) : Popup)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0dhbWUvUG9wdXAvV2luUG9wdXAudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsImZpbmQiLCJTZXJ2ZXJDb21tb24iLCJTb3VyY2VNYW5hZ2VyIiwiTkRCIiwiUG9wdXAiLCJQb3B1cE1hbmFnZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJXaW5Qb3B1cCIsImdsb2FkIiwib2JqIiwiZXZlbnROYW1lIiwibmFtZSIsInJlc3VsdCIsInNlbmRBdXRvSm9pbkV2ZW50IiwiSSIsIldpbiIsInNjaGVkdWxlT25jZSIsIkNsb3NlUG9wdXAiLCJTaG93UG9wdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBNkJDLE1BQUFBLEksT0FBQUEsSTs7OztBQUM3QkMsTUFBQUEsWSx5QkFBQUEsWTs7QUFDQUMsTUFBQUEsYSwwQkFBQUEsYTs7QUFDRkMsTUFBQUEsRzs7QUFDRUMsTUFBQUEsSyxZQUFBQSxLOztBQUNBQyxNQUFBQSxZLG1CQUFBQSxZOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQlAsVSxDQUF0Qk8sTztBQUFTQyxNQUFBQSxRLEdBQWFSLFUsQ0FBYlEsUTs7MEJBR0pDLFEsV0FEWkYsT0FBTyxDQUFDLFVBQUQsQzs7Ozs7Ozs7Ozs7aUNBSUc7QUFDSDtBQUFBO0FBQUEsOENBQWFHLEtBQWIsQ0FBbUIsR0FBbkIsRUFBd0IsS0FBeEI7QUFDQSxnQkFBSUMsR0FBRyxHQUFHO0FBQ05DLGNBQUFBLFNBQVMsRUFBRSxVQURMO0FBRU5DLGNBQUFBLElBQUksRUFBRSxPQUZBO0FBR05DLGNBQUFBLE1BQU0sRUFBQztBQUhELGFBQVY7QUFLQTtBQUFBO0FBQUEsNEJBQUlDLGlCQUFKLENBQXNCSixHQUF0QjtBQUNBO0FBQUE7QUFBQSxnREFBY0ssQ0FBZCxDQUFnQkMsR0FBaEI7QUFDQSxpQkFBS0MsWUFBTCxDQUFrQixZQUFNO0FBQ3BCO0FBQUE7QUFBQSxnREFBYUYsQ0FBYixDQUFlRyxVQUFmLENBQTBCbEIsSUFBSSxDQUFDLFFBQUQsQ0FBOUI7QUFDQTtBQUFBO0FBQUEsZ0RBQWFlLENBQWIsQ0FBZUksU0FBZixDQUF5Qm5CLElBQUksQ0FBQyxRQUFELENBQTdCLEVBQXlDLGlCQUF6QztBQUNILGFBSEQsRUFHRyxDQUhIO0FBSUgsVyxDQUVEO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgZmluZCB9IGZyb20gJ2NjJztcbmltcG9ydCB7IFNlcnZlckNvbW1vbiB9IGZyb20gJy4uLy4uL0NvbW1vbi9TZXJ2ZXJDb21tb24nO1xuaW1wb3J0IHsgU291cmNlTWFuYWdlciB9IGZyb20gJy4uLy4uL0NvbW1vbi9Tb3VyY2VNYW5hZ2VyJztcbmltcG9ydCBOREIgZnJvbSAnLi4vLi4vVXRpbHMvTkRCVFMnO1xuaW1wb3J0IHsgUG9wdXAgfSBmcm9tICcuL1BvcHVwJztcbmltcG9ydCB7IFBvcHVwTWFuYWdlciB9IGZyb20gJy4vUG9wdXBNYW5hZ2VyJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdXaW5Qb3B1cCcpXG5leHBvcnQgY2xhc3MgV2luUG9wdXAgZXh0ZW5kcyBQb3B1cCB7XG5cblxuICAgIEluaXQoKSB7XG4gICAgICAgIFNlcnZlckNvbW1vbi5nbG9hZCgyMDAsIFwid2luXCIpO1xuICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgZXZlbnROYW1lOiBcImdhbWVfZW5kXCIsXG4gICAgICAgICAgICBuYW1lOiBcIjhiYWxsXCIsXG4gICAgICAgICAgICByZXN1bHQ6J3dpbidcbiAgICAgICAgfVxuICAgICAgICBOREIuc2VuZEF1dG9Kb2luRXZlbnQob2JqKTtcbiAgICAgICAgU291cmNlTWFuYWdlci5JLldpbigpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBQb3B1cE1hbmFnZXIuSS5DbG9zZVBvcHVwKGZpbmQoXCJDYW52YXNcIikpO1xuICAgICAgICAgICAgUG9wdXBNYW5hZ2VyLkkuU2hvd1BvcHVwKGZpbmQoXCJDYW52YXNcIiksIFwiU2V0dGxlbWVueVBvcHVwXCIpO1xuICAgICAgICB9LCA1KVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxuICAgIC8vIH1cbn1cbiJdfQ==