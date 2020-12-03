System.register(["cc", "code-quality:cr", "../../Utils/MKMessageManager.js", "../GameCommon/GameSceneManager.js", "../GameCommon/UI/MainSceneUI.js", "../GameData.js", "./Popup.js", "./PopupManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, find, tween, Vec3, MKMessageManager, GameSceneManager, MainSceneUI, GameData, Popup, PopupManager, _dec, _class, _crd, ccclass, property, TipPopup;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfMKMessageManager(extras) {
    _reporterNs.report("MKMessageManager", "../../Utils/MKMessageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSceneManager(extras) {
    _reporterNs.report("GameSceneManager", "../GameCommon/GameSceneManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainSceneUI(extras) {
    _reporterNs.report("MainSceneUI", "../GameCommon/UI/MainSceneUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../GameData", _context.meta, extras);
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
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_UtilsMKMessageManagerJs) {
      MKMessageManager = _UtilsMKMessageManagerJs.default;
    }, function (_GameCommonGameSceneManagerJs) {
      GameSceneManager = _GameCommonGameSceneManagerJs.GameSceneManager;
    }, function (_GameCommonUIMainSceneUIJs) {
      MainSceneUI = _GameCommonUIMainSceneUIJs.MainSceneUI;
    }, function (_GameDataJs) {
      GameData = _GameDataJs.GameData;
    }, function (_PopupJs) {
      Popup = _PopupJs.Popup;
    }, function (_PopupManagerJs) {
      PopupManager = _PopupManagerJs.PopupManager;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "64091QfhVJFm6swM1F1nxTk", "TipPopup", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TipPopup", TipPopup = (_dec = ccclass('TipPopup'), _dec(_class = /*#__PURE__*/function (_ref) {
        _inherits(TipPopup, _ref);

        function TipPopup() {
          _classCallCheck(this, TipPopup);

          return _possibleConstructorReturn(this, _getPrototypeOf(TipPopup).apply(this, arguments));
        }

        _createClass(TipPopup, [{
          key: "onEnable",
          value: function onEnable() {
            var tip = this.node.getChildByName("Tip");
            tip.position = new Vec3(0, -600, 0);
            tween(tip).to(0.5, {
              position: new Vec3(0, 0, 0)
            }, {
              easing: "backOut"
            }).start();
          }
        }, {
          key: "YesBtn",
          value: function YesBtn() {
            (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.gameStop = true;
            console.log("退出游戏");
            (_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.Players[(_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.thisPlayer].IsSeriousFoul = true;
            console.log("游戏结束", (_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.thisPlayer, "失败");
            (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.Winer = 1 - (_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.thisPlayer;
            (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
              error: Error()
            }), PopupManager) : PopupManager).I.ClosePopup(find("Canvas"), true, find("Canvas/TipPopup"));
            (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
              error: Error()
            }), PopupManager) : PopupManager).I.ShowPopup(find("Canvas"), "LosePopup");
          }
        }, {
          key: "NoBtn",
          value: function NoBtn() {
            (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
              error: Error()
            }), PopupManager) : PopupManager).I.ClosePopup(find("Canvas"), true, find("Canvas/TipPopup"));
          }
        }, {
          key: "NoAddCoinBtn",
          value: function NoAddCoinBtn() {
            (_crd && MKMessageManager === void 0 ? (_reportPossibleCrUseOfMKMessageManager({
              error: Error()
            }), MKMessageManager) : MKMessageManager).buyGameCion();
            (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
              error: Error()
            }), PopupManager) : PopupManager).I.ClosePopup(find("Canvas"), true, find("Canvas/AddCoinTipPopup"));
          }
        }, {
          key: "NoExitBtn",
          value: function NoExitBtn() {
            (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
              error: Error()
            }), PopupManager) : PopupManager).I.ClosePopup(find("Canvas"), true, find("Canvas/ExitTipPopup"));
          }
        }, {
          key: "Exit",
          value: function Exit() {
            console.log("退出游戏");
            (_crd && MKMessageManager === void 0 ? (_reportPossibleCrUseOfMKMessageManager({
              error: Error()
            }), MKMessageManager) : MKMessageManager).exitGame();
          }
        }, {
          key: "AddCoinBtn",
          value: function AddCoinBtn() {
            (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
              error: Error()
            }), PopupManager) : PopupManager).I.ClosePopup(find("Canvas"), true, find("Canvas/AddCoinTipPopup"));
          }
        }, {
          key: "ErrYes",
          value: function ErrYes() {
            (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
              error: Error()
            }), PopupManager) : PopupManager).I.ClosePopup(find("Canvas"), true, find("Canvas/ErrTipPopup"));
            (_crd && MainSceneUI === void 0 ? (_reportPossibleCrUseOfMainSceneUI({
              error: Error()
            }), MainSceneUI) : MainSceneUI).I.PlayBtn.active = true;
          }
        }, {
          key: "ErrNo",
          value: function ErrNo() {
            (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
              error: Error()
            }), PopupManager) : PopupManager).I.ClosePopup(find("Canvas"), true, find("Canvas/ErrTipPopup"));
            (_crd && MainSceneUI === void 0 ? (_reportPossibleCrUseOfMainSceneUI({
              error: Error()
            }), MainSceneUI) : MainSceneUI).I.Join();
          }
        }]);

        return TipPopup;
      }(_crd && Popup === void 0 ? (_reportPossibleCrUseOfPopup({
        error: Error()
      }), Popup) : Popup)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0dhbWUvUG9wdXAvVGlwUG9wdXAudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsImZpbmQiLCJ0d2VlbiIsIlZlYzMiLCJNS01lc3NhZ2VNYW5hZ2VyIiwiR2FtZVNjZW5lTWFuYWdlciIsIk1haW5TY2VuZVVJIiwiR2FtZURhdGEiLCJQb3B1cCIsIlBvcHVwTWFuYWdlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlRpcFBvcHVwIiwidGlwIiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwicG9zaXRpb24iLCJ0byIsImVhc2luZyIsInN0YXJ0IiwiSSIsImdhbWVTdG9wIiwiY29uc29sZSIsImxvZyIsIlBsYXllcnMiLCJ0aGlzUGxheWVyIiwiSXNTZXJpb3VzRm91bCIsIldpbmVyIiwiQ2xvc2VQb3B1cCIsIlNob3dQb3B1cCIsImJ1eUdhbWVDaW9uIiwiZXhpdEdhbWUiLCJQbGF5QnRuIiwiYWN0aXZlIiwiSm9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBNkJDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsSSxPQUFBQSxJOzs7O0FBQzVDQyxNQUFBQSxnQjs7QUFDRUMsTUFBQUEsZ0IsaUNBQUFBLGdCOztBQUNBQyxNQUFBQSxXLDhCQUFBQSxXOztBQUNBQyxNQUFBQSxRLGVBQUFBLFE7O0FBQ0FDLE1BQUFBLEssWUFBQUEsSzs7QUFDQUMsTUFBQUEsWSxtQkFBQUEsWTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JWLFUsQ0FBdEJVLE87QUFBU0MsTUFBQUEsUSxHQUFhWCxVLENBQWJXLFE7OzBCQUdKQyxRLFdBRFpGLE9BQU8sQ0FBQyxVQUFELEM7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QyxFQUFnREEsSUFBSSxDQUFDLG9CQUFELENBQXBEO0FBQ0E7QUFBQTtBQUFBLDRDQUFZbUIsQ0FBWixDQUFjYyxJQUFkO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIGZpbmQsIHR3ZWVuLCBWZWMzLCB2MyB9IGZyb20gJ2NjJztcbmltcG9ydCBNS01lc3NhZ2VNYW5hZ2VyIGZyb20gJy4uLy4uL1V0aWxzL01LTWVzc2FnZU1hbmFnZXInO1xuaW1wb3J0IHsgR2FtZVNjZW5lTWFuYWdlciB9IGZyb20gJy4uL0dhbWVDb21tb24vR2FtZVNjZW5lTWFuYWdlcic7XG5pbXBvcnQgeyBNYWluU2NlbmVVSSB9IGZyb20gJy4uL0dhbWVDb21tb24vVUkvTWFpblNjZW5lVUknO1xuaW1wb3J0IHsgR2FtZURhdGEgfSBmcm9tICcuLi9HYW1lRGF0YSc7XG5pbXBvcnQgeyBQb3B1cCB9IGZyb20gJy4vUG9wdXAnO1xuaW1wb3J0IHsgUG9wdXBNYW5hZ2VyIH0gZnJvbSAnLi9Qb3B1cE1hbmFnZXInO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1RpcFBvcHVwJylcbmV4cG9ydCBjbGFzcyBUaXBQb3B1cCBleHRlbmRzIFBvcHVwIHtcblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICBsZXQgdGlwID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGlwXCIpO1xuICAgICAgICB0aXAucG9zaXRpb24gPSBuZXcgVmVjMygwLCAtNjAwLCAwKTtcbiAgICAgICAgdHdlZW4odGlwKS50bygwLjUsIHsgcG9zaXRpb246IG5ldyBWZWMzKDAsIDAsIDApIH0sIHsgZWFzaW5nOiBcImJhY2tPdXRcIiB9KS5zdGFydCgpO1xuICAgIH1cbiAgICBZZXNCdG4oKSB7XG4gICAgICAgIEdhbWVEYXRhLkkuZ2FtZVN0b3AgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhcIumAgOWHuua4uOaIj1wiKTtcbiAgICAgICAgR2FtZVNjZW5lTWFuYWdlci5JLlBsYXllcnNbR2FtZVNjZW5lTWFuYWdlci5JLnRoaXNQbGF5ZXJdLklzU2VyaW91c0ZvdWwgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhcIua4uOaIj+e7k+adn1wiLCBHYW1lU2NlbmVNYW5hZ2VyLkkudGhpc1BsYXllciwgXCLlpLHotKVcIik7XG4gICAgICAgIEdhbWVEYXRhLkkuV2luZXIgPSAxIC0gR2FtZVNjZW5lTWFuYWdlci5JLnRoaXNQbGF5ZXI7XG4gICAgICAgIFBvcHVwTWFuYWdlci5JLkNsb3NlUG9wdXAoZmluZChcIkNhbnZhc1wiKSwgdHJ1ZSwgZmluZChcIkNhbnZhcy9UaXBQb3B1cFwiKSlcbiAgICAgICAgUG9wdXBNYW5hZ2VyLkkuU2hvd1BvcHVwKGZpbmQoXCJDYW52YXNcIiksIFwiTG9zZVBvcHVwXCIpO1xuXG4gICAgfVxuICAgIE5vQnRuKCkge1xuICAgICAgICBQb3B1cE1hbmFnZXIuSS5DbG9zZVBvcHVwKGZpbmQoXCJDYW52YXNcIiksIHRydWUsIGZpbmQoXCJDYW52YXMvVGlwUG9wdXBcIikpXG4gICAgfVxuICAgIE5vQWRkQ29pbkJ0bigpIHtcbiAgICAgICAgTUtNZXNzYWdlTWFuYWdlci5idXlHYW1lQ2lvbigpO1xuICAgICAgICBQb3B1cE1hbmFnZXIuSS5DbG9zZVBvcHVwKGZpbmQoXCJDYW52YXNcIiksIHRydWUsIGZpbmQoXCJDYW52YXMvQWRkQ29pblRpcFBvcHVwXCIpKVxuICAgIH1cbiAgICBOb0V4aXRCdG4oKSB7XG4gICAgICAgIFBvcHVwTWFuYWdlci5JLkNsb3NlUG9wdXAoZmluZChcIkNhbnZhc1wiKSwgdHJ1ZSwgZmluZChcIkNhbnZhcy9FeGl0VGlwUG9wdXBcIikpXG4gICAgfVxuICAgIEV4aXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi6YCA5Ye65ri45oiPXCIpO1xuICAgICAgICBNS01lc3NhZ2VNYW5hZ2VyLmV4aXRHYW1lKCk7XG4gICAgfVxuICAgIEFkZENvaW5CdG4oKSB7XG4gICAgICAgIFBvcHVwTWFuYWdlci5JLkNsb3NlUG9wdXAoZmluZChcIkNhbnZhc1wiKSwgdHJ1ZSwgZmluZChcIkNhbnZhcy9BZGRDb2luVGlwUG9wdXBcIikpXG4gICAgfVxuICAgIEVyclllcygpIHtcbiAgICAgICAgUG9wdXBNYW5hZ2VyLkkuQ2xvc2VQb3B1cChmaW5kKFwiQ2FudmFzXCIpLCB0cnVlLCBmaW5kKFwiQ2FudmFzL0VyclRpcFBvcHVwXCIpKTtcbiAgICAgICAgTWFpblNjZW5lVUkuSS5QbGF5QnRuLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIEVyck5vKCkge1xuICAgICAgICBQb3B1cE1hbmFnZXIuSS5DbG9zZVBvcHVwKGZpbmQoXCJDYW52YXNcIiksIHRydWUsIGZpbmQoXCJDYW52YXMvRXJyVGlwUG9wdXBcIikpO1xuICAgICAgICBNYWluU2NlbmVVSS5JLkpvaW4oKTtcbiAgICB9XG59XG4iXX0=