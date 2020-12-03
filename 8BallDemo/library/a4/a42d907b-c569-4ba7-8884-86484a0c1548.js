System.register(["cc", "code-quality:cr", "../../Common/SourceManager.js", "../GameCommon/GameSceneManager.js", "../GameCommon/RoundType.js", "../GameData.js", "./Popup.js", "./PopupManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Label, Sprite, director, find, SourceManager, GameSceneManager, RoundType, GameData, Popup, PopupManager, _dec, _class, _crd, ccclass, property, SettlemenyPopup;

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

  function _reportPossibleCrUseOfGameSceneManager(extras) {
    _reporterNs.report("GameSceneManager", "../GameCommon/GameSceneManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoundType(extras) {
    _reporterNs.report("RoundType", "../GameCommon/RoundType", _context.meta, extras);
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
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      director = _cc.director;
      find = _cc.find;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_CommonSourceManagerJs) {
      SourceManager = _CommonSourceManagerJs.SourceManager;
    }, function (_GameCommonGameSceneManagerJs) {
      GameSceneManager = _GameCommonGameSceneManagerJs.GameSceneManager;
    }, function (_GameCommonRoundTypeJs) {
      RoundType = _GameCommonRoundTypeJs.RoundType;
    }, function (_GameDataJs) {
      GameData = _GameDataJs.GameData;
    }, function (_PopupJs) {
      Popup = _PopupJs.Popup;
    }, function (_PopupManagerJs) {
      PopupManager = _PopupManagerJs.PopupManager;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "a42d9B7xWlLp4iEhkhKDBVI", "SettlementPopup", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SettlemenyPopup", SettlemenyPopup = (_dec = ccclass('SettlementPopup'), _dec(_class = /*#__PURE__*/function (_ref) {
        _inherits(SettlemenyPopup, _ref);

        function SettlemenyPopup() {
          _classCallCheck(this, SettlemenyPopup);

          return _possibleConstructorReturn(this, _getPrototypeOf(SettlemenyPopup).apply(this, arguments));
        }

        _createClass(SettlemenyPopup, [{
          key: "Init",
          value: function Init() {
            (_crd && SourceManager === void 0 ? (_reportPossibleCrUseOfSourceManager({
              error: Error()
            }), SourceManager) : SourceManager).I.Settlemeny();
            var player1 = this.node.getChildByName("Player1");
            var player2 = this.node.getChildByName("Player2");
            ;
            var player1HeadImage = player1.getChildByName("Mask").getChildByName("HeadImage");
            var player1Name = player1.getChildByName("Name");
            var player2HeadImage = player2.getChildByName("Mask").getChildByName("HeadImage");
            var player2Name = player2.getChildByName("Name"); // 需要数据 玩家头像信息,名字。对手头像,名字

            player1HeadImage.getComponent(Sprite).spriteFrame = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.thisplayerHeadImage;
            player1Name.getComponent(Label).string = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.thisPlayerName;
            player2HeadImage.getComponent(Sprite).spriteFrame = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.RobotHeadImage;
            player2Name.getComponent(Label).string = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.RobotName;
            var Player1WinTip = this.node.getChildByName("Player1WinTip");
            var Player1Gload = this.node.getChildByName("Player1Gload");
            var Player2WinTip = this.node.getChildByName("Player2WinTip");
            var Player2Gload = this.node.getChildByName("Player2Gload");

            if ((_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.thisPlayer == (_crd && RoundType === void 0 ? (_reportPossibleCrUseOfRoundType({
              error: Error()
            }), RoundType) : RoundType).Play1) {
              player1.getChildByName("RedBG").active = true;
              player1.getChildByName("BlueBG").active = false;
              player2.getChildByName("RedBG").active = false;
              player2.getChildByName("BlueBG").active = true;

              if ((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                error: Error()
              }), GameData) : GameData).I.Winer == (_crd && RoundType === void 0 ? (_reportPossibleCrUseOfRoundType({
                error: Error()
              }), RoundType) : RoundType).Play1) {
                Player1WinTip.active = true;
                Player1Gload.active = true;
                Player2WinTip.active = false;
                Player2Gload.active = false;
              } else {
                Player1WinTip.active = false;
                Player1Gload.active = false;
                Player2WinTip.active = true;
                Player2Gload.active = true;
              }
            }

            if ((_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.thisPlayer == (_crd && RoundType === void 0 ? (_reportPossibleCrUseOfRoundType({
              error: Error()
            }), RoundType) : RoundType).Play2) {
              player1.getChildByName("RedBG").active = false;
              player1.getChildByName("BlueBG").active = true;
              player2.getChildByName("RedBG").active = true;
              player2.getChildByName("BlueBG").active = false;

              if ((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                error: Error()
              }), GameData) : GameData).I.Winer == (_crd && RoundType === void 0 ? (_reportPossibleCrUseOfRoundType({
                error: Error()
              }), RoundType) : RoundType).Play2) {
                Player1WinTip.active = true;
                Player1Gload.active = true;
                Player2WinTip.active = false;
                Player2Gload.active = false;
              } else {
                Player1WinTip.active = false;
                Player1Gload.active = false;
                Player2WinTip.active = true;
                Player2Gload.active = true;
              }
            }
          }
        }, {
          key: "PlayAgain",
          value: function PlayAgain() {
            (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
              error: Error()
            }), PopupManager) : PopupManager).I.ClosePopup(find("Canvas"));
            director.loadScene("MainScene");
            (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.gameStop = false;
            (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.Winer = null;
            (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
              error: Error()
            }), PopupManager) : PopupManager).I.nowPopup = null; // GameSceneManager.I.
          }
        }, {
          key: "Exit",
          value: function Exit() {
            (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
              error: Error()
            }), PopupManager) : PopupManager).I.ShowPopup(find("Canvas"), "ExitTipPopup", true);
          }
        }]);

        return SettlemenyPopup;
      }(_crd && Popup === void 0 ? (_reportPossibleCrUseOfPopup({
        error: Error()
      }), Popup) : Popup)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0dhbWUvUG9wdXAvU2V0dGxlbWVudFBvcHVwLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJMYWJlbCIsIlNwcml0ZSIsImRpcmVjdG9yIiwiZmluZCIsIlNvdXJjZU1hbmFnZXIiLCJHYW1lU2NlbmVNYW5hZ2VyIiwiUm91bmRUeXBlIiwiR2FtZURhdGEiLCJQb3B1cCIsIlBvcHVwTWFuYWdlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlNldHRsZW1lbnlQb3B1cCIsIkkiLCJTZXR0bGVtZW55IiwicGxheWVyMSIsIm5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsInBsYXllcjIiLCJwbGF5ZXIxSGVhZEltYWdlIiwicGxheWVyMU5hbWUiLCJwbGF5ZXIySGVhZEltYWdlIiwicGxheWVyMk5hbWUiLCJnZXRDb21wb25lbnQiLCJzcHJpdGVGcmFtZSIsInRoaXNwbGF5ZXJIZWFkSW1hZ2UiLCJzdHJpbmciLCJ0aGlzUGxheWVyTmFtZSIsIlJvYm90SGVhZEltYWdlIiwiUm9ib3ROYW1lIiwiUGxheWVyMVdpblRpcCIsIlBsYXllcjFHbG9hZCIsIlBsYXllcjJXaW5UaXAiLCJQbGF5ZXIyR2xvYWQiLCJ0aGlzUGxheWVyIiwiUGxheTEiLCJhY3RpdmUiLCJXaW5lciIsIlBsYXkyIiwiQ2xvc2VQb3B1cCIsImxvYWRTY2VuZSIsImdhbWVTdG9wIiwibm93UG9wdXAiLCJTaG93UG9wdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQTZCQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFEsT0FBQUEsUTtBQUFVQyxNQUFBQSxJLE9BQUFBLEk7Ozs7QUFDdERDLE1BQUFBLGEsMEJBQUFBLGE7O0FBR0FDLE1BQUFBLGdCLGlDQUFBQSxnQjs7QUFDQUMsTUFBQUEsUywwQkFBQUEsUzs7QUFDQUMsTUFBQUEsUSxlQUFBQSxROztBQUNBQyxNQUFBQSxLLFlBQUFBLEs7O0FBQ0FDLE1BQUFBLFksbUJBQUFBLFk7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCWCxVLENBQXRCVyxPO0FBQVNDLE1BQUFBLFEsR0FBYVosVSxDQUFiWSxROztpQ0FHSkMsZSxXQURaRixPQUFPLENBQUMsaUJBQUQsQzs7Ozs7Ozs7Ozs7aUNBSUc7QUFDSDtBQUFBO0FBQUEsZ0RBQWNHLENBQWQsQ0FBZ0JDLFVBQWhCO0FBRUEsZ0JBQUlDLE9BQU8sR0FBRyxLQUFLQyxJQUFMLENBQVVDLGNBQVYsQ0FBeUIsU0FBekIsQ0FBZDtBQUNBLGdCQUFJQyxPQUFPLEdBQUcsS0FBS0YsSUFBTCxDQUFVQyxjQUFWLENBQXlCLFNBQXpCLENBQWQ7QUFBa0Q7QUFDbEQsZ0JBQUlFLGdCQUFnQixHQUFHSixPQUFPLENBQUNFLGNBQVIsQ0FBdUIsTUFBdkIsRUFBK0JBLGNBQS9CLENBQThDLFdBQTlDLENBQXZCO0FBQ0EsZ0JBQUlHLFdBQVcsR0FBR0wsT0FBTyxDQUFDRSxjQUFSLENBQXVCLE1BQXZCLENBQWxCO0FBQ0EsZ0JBQUlJLGdCQUFnQixHQUFHSCxPQUFPLENBQUNELGNBQVIsQ0FBdUIsTUFBdkIsRUFBK0JBLGNBQS9CLENBQThDLFdBQTlDLENBQXZCO0FBQ0EsZ0JBQUlLLFdBQVcsR0FBR0osT0FBTyxDQUFDRCxjQUFSLENBQXVCLE1BQXZCLENBQWxCLENBUkcsQ0FVSDs7QUFDQUUsWUFBQUEsZ0JBQWdCLENBQUNJLFlBQWpCLENBQThCdEIsTUFBOUIsRUFBc0N1QixXQUF0QyxHQUFvRDtBQUFBO0FBQUEsc0NBQVNYLENBQVQsQ0FBV1ksbUJBQS9EO0FBQ0FMLFlBQUFBLFdBQVcsQ0FBQ0csWUFBWixDQUF5QnZCLEtBQXpCLEVBQWdDMEIsTUFBaEMsR0FBeUM7QUFBQTtBQUFBLHNDQUFTYixDQUFULENBQVdjLGNBQXBEO0FBQ0FOLFlBQUFBLGdCQUFnQixDQUFDRSxZQUFqQixDQUE4QnRCLE1BQTlCLEVBQXNDdUIsV0FBdEMsR0FBb0Q7QUFBQTtBQUFBLHNDQUFTWCxDQUFULENBQVdlLGNBQS9EO0FBQ0FOLFlBQUFBLFdBQVcsQ0FBQ0MsWUFBWixDQUF5QnZCLEtBQXpCLEVBQWdDMEIsTUFBaEMsR0FBeUM7QUFBQTtBQUFBLHNDQUFTYixDQUFULENBQVdnQixTQUFwRDtBQUVBLGdCQUFJQyxhQUFhLEdBQUcsS0FBS2QsSUFBTCxDQUFVQyxjQUFWLENBQXlCLGVBQXpCLENBQXBCO0FBQ0EsZ0JBQUljLFlBQVksR0FBRyxLQUFLZixJQUFMLENBQVVDLGNBQVYsQ0FBeUIsY0FBekIsQ0FBbkI7QUFDQSxnQkFBSWUsYUFBYSxHQUFHLEtBQUtoQixJQUFMLENBQVVDLGNBQVYsQ0FBeUIsZUFBekIsQ0FBcEI7QUFDQSxnQkFBSWdCLFlBQVksR0FBRyxLQUFLakIsSUFBTCxDQUFVQyxjQUFWLENBQXlCLGNBQXpCLENBQW5COztBQUNBLGdCQUFJO0FBQUE7QUFBQSxzREFBaUJKLENBQWpCLENBQW1CcUIsVUFBbkIsSUFBaUM7QUFBQTtBQUFBLHdDQUFVQyxLQUEvQyxFQUFzRDtBQUNsRHBCLGNBQUFBLE9BQU8sQ0FBQ0UsY0FBUixDQUF1QixPQUF2QixFQUFnQ21CLE1BQWhDLEdBQXlDLElBQXpDO0FBQ0FyQixjQUFBQSxPQUFPLENBQUNFLGNBQVIsQ0FBdUIsUUFBdkIsRUFBaUNtQixNQUFqQyxHQUEwQyxLQUExQztBQUNBbEIsY0FBQUEsT0FBTyxDQUFDRCxjQUFSLENBQXVCLE9BQXZCLEVBQWdDbUIsTUFBaEMsR0FBeUMsS0FBekM7QUFDQWxCLGNBQUFBLE9BQU8sQ0FBQ0QsY0FBUixDQUF1QixRQUF2QixFQUFpQ21CLE1BQWpDLEdBQTBDLElBQTFDOztBQUNBLGtCQUFJO0FBQUE7QUFBQSx3Q0FBU3ZCLENBQVQsQ0FBV3dCLEtBQVgsSUFBb0I7QUFBQTtBQUFBLDBDQUFVRixLQUFsQyxFQUF5QztBQUNyQ0wsZ0JBQUFBLGFBQWEsQ0FBQ00sTUFBZCxHQUF1QixJQUF2QjtBQUNBTCxnQkFBQUEsWUFBWSxDQUFDSyxNQUFiLEdBQXNCLElBQXRCO0FBQ0FKLGdCQUFBQSxhQUFhLENBQUNJLE1BQWQsR0FBdUIsS0FBdkI7QUFDQUgsZ0JBQUFBLFlBQVksQ0FBQ0csTUFBYixHQUFzQixLQUF0QjtBQUVILGVBTkQsTUFNTztBQUNITixnQkFBQUEsYUFBYSxDQUFDTSxNQUFkLEdBQXVCLEtBQXZCO0FBQ0FMLGdCQUFBQSxZQUFZLENBQUNLLE1BQWIsR0FBc0IsS0FBdEI7QUFDQUosZ0JBQUFBLGFBQWEsQ0FBQ0ksTUFBZCxHQUF1QixJQUF2QjtBQUNBSCxnQkFBQUEsWUFBWSxDQUFDRyxNQUFiLEdBQXNCLElBQXRCO0FBQ0g7QUFDSjs7QUFDRCxnQkFBSTtBQUFBO0FBQUEsc0RBQWlCdkIsQ0FBakIsQ0FBbUJxQixVQUFuQixJQUFpQztBQUFBO0FBQUEsd0NBQVVJLEtBQS9DLEVBQXNEO0FBQ2xEdkIsY0FBQUEsT0FBTyxDQUFDRSxjQUFSLENBQXVCLE9BQXZCLEVBQWdDbUIsTUFBaEMsR0FBeUMsS0FBekM7QUFDQXJCLGNBQUFBLE9BQU8sQ0FBQ0UsY0FBUixDQUF1QixRQUF2QixFQUFpQ21CLE1BQWpDLEdBQTBDLElBQTFDO0FBQ0FsQixjQUFBQSxPQUFPLENBQUNELGNBQVIsQ0FBdUIsT0FBdkIsRUFBZ0NtQixNQUFoQyxHQUF5QyxJQUF6QztBQUNBbEIsY0FBQUEsT0FBTyxDQUFDRCxjQUFSLENBQXVCLFFBQXZCLEVBQWlDbUIsTUFBakMsR0FBMEMsS0FBMUM7O0FBQ0Esa0JBQUk7QUFBQTtBQUFBLHdDQUFTdkIsQ0FBVCxDQUFXd0IsS0FBWCxJQUFvQjtBQUFBO0FBQUEsMENBQVVDLEtBQWxDLEVBQXlDO0FBQ3JDUixnQkFBQUEsYUFBYSxDQUFDTSxNQUFkLEdBQXVCLElBQXZCO0FBQ0FMLGdCQUFBQSxZQUFZLENBQUNLLE1BQWIsR0FBc0IsSUFBdEI7QUFDQUosZ0JBQUFBLGFBQWEsQ0FBQ0ksTUFBZCxHQUF1QixLQUF2QjtBQUNBSCxnQkFBQUEsWUFBWSxDQUFDRyxNQUFiLEdBQXNCLEtBQXRCO0FBRUgsZUFORCxNQU1PO0FBQ0hOLGdCQUFBQSxhQUFhLENBQUNNLE1BQWQsR0FBdUIsS0FBdkI7QUFDQUwsZ0JBQUFBLFlBQVksQ0FBQ0ssTUFBYixHQUFzQixLQUF0QjtBQUNBSixnQkFBQUEsYUFBYSxDQUFDSSxNQUFkLEdBQXVCLElBQXZCO0FBQ0FILGdCQUFBQSxZQUFZLENBQUNHLE1BQWIsR0FBc0IsSUFBdEI7QUFDSDtBQUNKO0FBQ0o7OztzQ0FFVztBQUNSO0FBQUE7QUFBQSw4Q0FBYXZCLENBQWIsQ0FBZTBCLFVBQWYsQ0FBMEJwQyxJQUFJLENBQUMsUUFBRCxDQUE5QjtBQUNBRCxZQUFBQSxRQUFRLENBQUNzQyxTQUFULENBQW1CLFdBQW5CO0FBQ0E7QUFBQTtBQUFBLHNDQUFTM0IsQ0FBVCxDQUFXNEIsUUFBWCxHQUFzQixLQUF0QjtBQUNBO0FBQUE7QUFBQSxzQ0FBUzVCLENBQVQsQ0FBV3dCLEtBQVgsR0FBbUIsSUFBbkI7QUFDQTtBQUFBO0FBQUEsOENBQWF4QixDQUFiLENBQWU2QixRQUFmLEdBQTBCLElBQTFCLENBTFEsQ0FNUjtBQUNIOzs7aUNBQ007QUFDSDtBQUFBO0FBQUEsOENBQWE3QixDQUFiLENBQWU4QixTQUFmLENBQXlCeEMsSUFBSSxDQUFDLFFBQUQsQ0FBN0IsRUFBeUMsY0FBekMsRUFBeUQsSUFBekQ7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgTGFiZWwsIFNwcml0ZSwgZGlyZWN0b3IsIGZpbmQgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBTb3VyY2VNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1NvdXJjZU1hbmFnZXInO1xuaW1wb3J0IE1LTWVzc2FnZU1hbmFnZXIgZnJvbSAnLi4vLi4vVXRpbHMvTUtNZXNzYWdlTWFuYWdlcic7XG5pbXBvcnQgTkRCIGZyb20gJy4uLy4uL1V0aWxzL05EQlRTJztcbmltcG9ydCB7IEdhbWVTY2VuZU1hbmFnZXIgfSBmcm9tICcuLi9HYW1lQ29tbW9uL0dhbWVTY2VuZU1hbmFnZXInO1xuaW1wb3J0IHsgUm91bmRUeXBlIH0gZnJvbSAnLi4vR2FtZUNvbW1vbi9Sb3VuZFR5cGUnO1xuaW1wb3J0IHsgR2FtZURhdGEgfSBmcm9tICcuLi9HYW1lRGF0YSc7XG5pbXBvcnQgeyBQb3B1cCB9IGZyb20gJy4vUG9wdXAnO1xuaW1wb3J0IHsgUG9wdXBNYW5hZ2VyIH0gZnJvbSAnLi9Qb3B1cE1hbmFnZXInO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1NldHRsZW1lbnRQb3B1cCcpXG5leHBvcnQgY2xhc3MgU2V0dGxlbWVueVBvcHVwIGV4dGVuZHMgUG9wdXAge1xuXG5cbiAgICBJbml0KCkge1xuICAgICAgICBTb3VyY2VNYW5hZ2VyLkkuU2V0dGxlbWVueSgpO1xuICAgICBcbiAgICAgICAgbGV0IHBsYXllcjEgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXIxXCIpO1xuICAgICAgICBsZXQgcGxheWVyMiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlBsYXllcjJcIik7O1xuICAgICAgICBsZXQgcGxheWVyMUhlYWRJbWFnZSA9IHBsYXllcjEuZ2V0Q2hpbGRCeU5hbWUoXCJNYXNrXCIpLmdldENoaWxkQnlOYW1lKFwiSGVhZEltYWdlXCIpO1xuICAgICAgICBsZXQgcGxheWVyMU5hbWUgPSBwbGF5ZXIxLmdldENoaWxkQnlOYW1lKFwiTmFtZVwiKTtcbiAgICAgICAgbGV0IHBsYXllcjJIZWFkSW1hZ2UgPSBwbGF5ZXIyLmdldENoaWxkQnlOYW1lKFwiTWFza1wiKS5nZXRDaGlsZEJ5TmFtZShcIkhlYWRJbWFnZVwiKTtcbiAgICAgICAgbGV0IHBsYXllcjJOYW1lID0gcGxheWVyMi5nZXRDaGlsZEJ5TmFtZShcIk5hbWVcIik7XG5cbiAgICAgICAgLy8g6ZyA6KaB5pWw5o2uIOeOqeWutuWktOWDj+S/oeaBryzlkI3lrZfjgILlr7nmiYvlpLTlg48s5ZCN5a2XXG4gICAgICAgIHBsYXllcjFIZWFkSW1hZ2UuZ2V0Q29tcG9uZW50KFNwcml0ZSkuc3ByaXRlRnJhbWUgPSBHYW1lRGF0YS5JLnRoaXNwbGF5ZXJIZWFkSW1hZ2U7XG4gICAgICAgIHBsYXllcjFOYW1lLmdldENvbXBvbmVudChMYWJlbCkuc3RyaW5nID0gR2FtZURhdGEuSS50aGlzUGxheWVyTmFtZTtcbiAgICAgICAgcGxheWVyMkhlYWRJbWFnZS5nZXRDb21wb25lbnQoU3ByaXRlKS5zcHJpdGVGcmFtZSA9IEdhbWVEYXRhLkkuUm9ib3RIZWFkSW1hZ2U7XG4gICAgICAgIHBsYXllcjJOYW1lLmdldENvbXBvbmVudChMYWJlbCkuc3RyaW5nID0gR2FtZURhdGEuSS5Sb2JvdE5hbWU7XG5cbiAgICAgICAgbGV0IFBsYXllcjFXaW5UaXAgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXIxV2luVGlwXCIpO1xuICAgICAgICBsZXQgUGxheWVyMUdsb2FkID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUGxheWVyMUdsb2FkXCIpO1xuICAgICAgICBsZXQgUGxheWVyMldpblRpcCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlBsYXllcjJXaW5UaXBcIik7XG4gICAgICAgIGxldCBQbGF5ZXIyR2xvYWQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXIyR2xvYWRcIik7XG4gICAgICAgIGlmIChHYW1lU2NlbmVNYW5hZ2VyLkkudGhpc1BsYXllciA9PSBSb3VuZFR5cGUuUGxheTEpIHtcbiAgICAgICAgICAgIHBsYXllcjEuZ2V0Q2hpbGRCeU5hbWUoXCJSZWRCR1wiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgcGxheWVyMS5nZXRDaGlsZEJ5TmFtZShcIkJsdWVCR1wiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHBsYXllcjIuZ2V0Q2hpbGRCeU5hbWUoXCJSZWRCR1wiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHBsYXllcjIuZ2V0Q2hpbGRCeU5hbWUoXCJCbHVlQkdcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChHYW1lRGF0YS5JLldpbmVyID09IFJvdW5kVHlwZS5QbGF5MSkge1xuICAgICAgICAgICAgICAgIFBsYXllcjFXaW5UaXAuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBQbGF5ZXIxR2xvYWQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBQbGF5ZXIyV2luVGlwLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIFBsYXllcjJHbG9hZC5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBQbGF5ZXIxV2luVGlwLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIFBsYXllcjFHbG9hZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBQbGF5ZXIyV2luVGlwLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgUGxheWVyMkdsb2FkLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEdhbWVTY2VuZU1hbmFnZXIuSS50aGlzUGxheWVyID09IFJvdW5kVHlwZS5QbGF5Mikge1xuICAgICAgICAgICAgcGxheWVyMS5nZXRDaGlsZEJ5TmFtZShcIlJlZEJHXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgcGxheWVyMS5nZXRDaGlsZEJ5TmFtZShcIkJsdWVCR1wiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgcGxheWVyMi5nZXRDaGlsZEJ5TmFtZShcIlJlZEJHXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBwbGF5ZXIyLmdldENoaWxkQnlOYW1lKFwiQmx1ZUJHXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKEdhbWVEYXRhLkkuV2luZXIgPT0gUm91bmRUeXBlLlBsYXkyKSB7XG4gICAgICAgICAgICAgICAgUGxheWVyMVdpblRpcC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIFBsYXllcjFHbG9hZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIFBsYXllcjJXaW5UaXAuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgUGxheWVyMkdsb2FkLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFBsYXllcjFXaW5UaXAuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgUGxheWVyMUdsb2FkLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIFBsYXllcjJXaW5UaXAuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBQbGF5ZXIyR2xvYWQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIFBsYXlBZ2FpbigpIHtcbiAgICAgICAgUG9wdXBNYW5hZ2VyLkkuQ2xvc2VQb3B1cChmaW5kKFwiQ2FudmFzXCIpKTtcbiAgICAgICAgZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpblNjZW5lXCIpXG4gICAgICAgIEdhbWVEYXRhLkkuZ2FtZVN0b3AgPSBmYWxzZTtcbiAgICAgICAgR2FtZURhdGEuSS5XaW5lciA9IG51bGw7XG4gICAgICAgIFBvcHVwTWFuYWdlci5JLm5vd1BvcHVwID0gbnVsbDtcbiAgICAgICAgLy8gR2FtZVNjZW5lTWFuYWdlci5JLlxuICAgIH1cbiAgICBFeGl0KCkge1xuICAgICAgICBQb3B1cE1hbmFnZXIuSS5TaG93UG9wdXAoZmluZChcIkNhbnZhc1wiKSwgXCJFeGl0VGlwUG9wdXBcIiwgdHJ1ZSk7XG4gICAgfVxufVxuIl19