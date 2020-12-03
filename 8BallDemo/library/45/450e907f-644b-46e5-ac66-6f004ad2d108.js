System.register(["cc", "code-quality:cr", "../../Common/SourceManager.js", "../GameCommon/RoundType.js", "../GameData.js", "./Popup.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, director, Sprite, Label, SourceManager, RoundType, GameData, Popup, _dec, _class, _crd, ccclass, property, MatchingPopup;

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

  function _reportPossibleCrUseOfRoundType(extras) {
    _reporterNs.report("RoundType", "../GameCommon/RoundType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopup(extras) {
    _reporterNs.report("Popup", "./Popup", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      director = _cc.director;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_CommonSourceManagerJs) {
      SourceManager = _CommonSourceManagerJs.SourceManager;
    }, function (_GameCommonRoundTypeJs) {
      RoundType = _GameCommonRoundTypeJs.RoundType;
    }, function (_GameDataJs) {
      GameData = _GameDataJs.GameData;
    }, function (_PopupJs) {
      Popup = _PopupJs.Popup;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "450e9B/ZEtG5axmbwBK0tEI", "MatchingPopup", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MatchingPopup", MatchingPopup = (_dec = ccclass('MatchingPopup'), _dec(_class = /*#__PURE__*/function (_ref) {
        _inherits(MatchingPopup, _ref);

        function MatchingPopup() {
          _classCallCheck(this, MatchingPopup);

          return _possibleConstructorReturn(this, _getPrototypeOf(MatchingPopup).apply(this, arguments));
        }

        _createClass(MatchingPopup, [{
          key: "Init",
          value: function Init() {
            (_crd && SourceManager === void 0 ? (_reportPossibleCrUseOfSourceManager({
              error: Error()
            }), SourceManager) : SourceManager).I.StartGame();
            (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.gameStop = true;
            this.top1 = this.node.getChildByName("Top1");
            this.top2 = this.node.getChildByName("Top2"); //随机当前玩家是红色还是蓝色
            //红色方

            var player1;
            var player2;

            if ((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.loadData.thisPlayer == (_crd && RoundType === void 0 ? (_reportPossibleCrUseOfRoundType({
              error: Error()
            }), RoundType) : RoundType).Play1) {
              this.top1.active = true;
              this.top2.active = false;
              player1 = this.top1.getChildByName("Player1");
              player2 = this.top1.getChildByName("Player2");
            } //蓝色方
            else {
                this.top1.active = false;
                this.top2.active = true;
                player1 = this.top2.getChildByName("Player2");
                player2 = this.top2.getChildByName("Player1");
              }

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
            }), GameData) : GameData).I.RobotName; // this.LoadGameScene();
            // PopupManager.I.nowPopup = null;
            // ServerCommon.gload(100,"bet");
          }
        }, {
          key: "LoadGameScene",
          value: function LoadGameScene() {
            this.scheduleOnce(function () {
              console.log("信息展示3秒后跳转游戏场景");
              director.loadScene("GameScene");
            }, 3);
          }
        }]);

        return MatchingPopup;
      }(_crd && Popup === void 0 ? (_reportPossibleCrUseOfPopup({
        error: Error()
      }), Popup) : Popup)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0dhbWUvUG9wdXAvTWF0Y2hpbmdQb3B1cC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiZGlyZWN0b3IiLCJTcHJpdGUiLCJMYWJlbCIsIlNvdXJjZU1hbmFnZXIiLCJSb3VuZFR5cGUiLCJHYW1lRGF0YSIsIlBvcHVwIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTWF0Y2hpbmdQb3B1cCIsIkkiLCJTdGFydEdhbWUiLCJnYW1lU3RvcCIsInRvcDEiLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJ0b3AyIiwicGxheWVyMSIsInBsYXllcjIiLCJsb2FkRGF0YSIsInRoaXNQbGF5ZXIiLCJQbGF5MSIsImFjdGl2ZSIsInBsYXllcjFIZWFkSW1hZ2UiLCJwbGF5ZXIxTmFtZSIsInBsYXllcjJIZWFkSW1hZ2UiLCJwbGF5ZXIyTmFtZSIsImdldENvbXBvbmVudCIsInNwcml0ZUZyYW1lIiwidGhpc3BsYXllckhlYWRJbWFnZSIsInN0cmluZyIsInRoaXNQbGF5ZXJOYW1lIiwiUm9ib3RIZWFkSW1hZ2UiLCJSb2JvdE5hbWUiLCJzY2hlZHVsZU9uY2UiLCJjb25zb2xlIiwibG9nIiwibG9hZFNjZW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBNkJDLE1BQUFBLFEsT0FBQUEsUTtBQUFpQ0MsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLEssT0FBQUEsSzs7OztBQUV0RUMsTUFBQUEsYSwwQkFBQUEsYTs7QUFDQUMsTUFBQUEsUywwQkFBQUEsUzs7QUFDQUMsTUFBQUEsUSxlQUFBQSxROztBQUNBQyxNQUFBQSxLLFlBQUFBLEs7Ozs7OztBQUVEQyxNQUFBQSxPLEdBQXNCUixVLENBQXRCUSxPO0FBQVNDLE1BQUFBLFEsR0FBYVQsVSxDQUFiUyxROzsrQkFHSkMsYSxXQURaRixPQUFPLENBQUMsZUFBRCxDOzs7Ozs7Ozs7OztpQ0FLRztBQUNIO0FBQUE7QUFBQSxnREFBY0csQ0FBZCxDQUFnQkMsU0FBaEI7QUFDQTtBQUFBO0FBQUEsc0NBQVNELENBQVQsQ0FBV0UsUUFBWCxHQUFzQixJQUF0QjtBQUVBLGlCQUFLQyxJQUFMLEdBQVksS0FBS0MsSUFBTCxDQUFVQyxjQUFWLENBQXlCLE1BQXpCLENBQVo7QUFDQSxpQkFBS0MsSUFBTCxHQUFZLEtBQUtGLElBQUwsQ0FBVUMsY0FBVixDQUF5QixNQUF6QixDQUFaLENBTEcsQ0FNSDtBQUNBOztBQUNBLGdCQUFJRSxPQUFKO0FBQ0EsZ0JBQUlDLE9BQUo7O0FBQ0EsZ0JBQUk7QUFBQTtBQUFBLHNDQUFTUixDQUFULENBQVdTLFFBQVgsQ0FBb0JDLFVBQXBCLElBQWtDO0FBQUE7QUFBQSx3Q0FBVUMsS0FBaEQsRUFBdUQ7QUFDbkQsbUJBQUtSLElBQUwsQ0FBVVMsTUFBVixHQUFtQixJQUFuQjtBQUNBLG1CQUFLTixJQUFMLENBQVVNLE1BQVYsR0FBbUIsS0FBbkI7QUFDQUwsY0FBQUEsT0FBTyxHQUFHLEtBQUtKLElBQUwsQ0FBVUUsY0FBVixDQUF5QixTQUF6QixDQUFWO0FBQ0FHLGNBQUFBLE9BQU8sR0FBRyxLQUFLTCxJQUFMLENBQVVFLGNBQVYsQ0FBeUIsU0FBekIsQ0FBVjtBQUNILGFBTEQsQ0FNQTtBQU5BLGlCQU9LO0FBQ0QscUJBQUtGLElBQUwsQ0FBVVMsTUFBVixHQUFtQixLQUFuQjtBQUNBLHFCQUFLTixJQUFMLENBQVVNLE1BQVYsR0FBbUIsSUFBbkI7QUFDQUwsZ0JBQUFBLE9BQU8sR0FBRyxLQUFLRCxJQUFMLENBQVVELGNBQVYsQ0FBeUIsU0FBekIsQ0FBVjtBQUNBRyxnQkFBQUEsT0FBTyxHQUFHLEtBQUtGLElBQUwsQ0FBVUQsY0FBVixDQUF5QixTQUF6QixDQUFWO0FBQ0g7O0FBRUQsZ0JBQUlRLGdCQUFnQixHQUFHTixPQUFPLENBQUNGLGNBQVIsQ0FBdUIsTUFBdkIsRUFBK0JBLGNBQS9CLENBQThDLFdBQTlDLENBQXZCO0FBQ0EsZ0JBQUlTLFdBQVcsR0FBR1AsT0FBTyxDQUFDRixjQUFSLENBQXVCLE1BQXZCLENBQWxCO0FBQ0EsZ0JBQUlVLGdCQUFnQixHQUFHUCxPQUFPLENBQUNILGNBQVIsQ0FBdUIsTUFBdkIsRUFBK0JBLGNBQS9CLENBQThDLFdBQTlDLENBQXZCO0FBQ0EsZ0JBQUlXLFdBQVcsR0FBR1IsT0FBTyxDQUFDSCxjQUFSLENBQXVCLE1BQXZCLENBQWxCLENBM0JHLENBNkJIOztBQUNBUSxZQUFBQSxnQkFBZ0IsQ0FBQ0ksWUFBakIsQ0FBOEIxQixNQUE5QixFQUFzQzJCLFdBQXRDLEdBQW9EO0FBQUE7QUFBQSxzQ0FBU2xCLENBQVQsQ0FBV21CLG1CQUEvRDtBQUNBTCxZQUFBQSxXQUFXLENBQUNHLFlBQVosQ0FBeUJ6QixLQUF6QixFQUFnQzRCLE1BQWhDLEdBQXlDO0FBQUE7QUFBQSxzQ0FBU3BCLENBQVQsQ0FBV3FCLGNBQXBEO0FBQ0FOLFlBQUFBLGdCQUFnQixDQUFDRSxZQUFqQixDQUE4QjFCLE1BQTlCLEVBQXNDMkIsV0FBdEMsR0FBb0Q7QUFBQTtBQUFBLHNDQUFTbEIsQ0FBVCxDQUFXc0IsY0FBL0Q7QUFDQU4sWUFBQUEsV0FBVyxDQUFDQyxZQUFaLENBQXlCekIsS0FBekIsRUFBZ0M0QixNQUFoQyxHQUF5QztBQUFBO0FBQUEsc0NBQVNwQixDQUFULENBQVd1QixTQUFwRCxDQWpDRyxDQW1DSjtBQUNDO0FBQ0E7QUFDSDs7OzBDQUVlO0FBQ1osaUJBQUtDLFlBQUwsQ0FBa0IsWUFBTTtBQUNwQkMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBcEMsY0FBQUEsUUFBUSxDQUFDcUMsU0FBVCxDQUFtQixXQUFuQjtBQUNILGFBSEQsRUFHRyxDQUhIO0FBSUgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIGRpcmVjdG9yLCBmaW5kLCBzcHJpdGVBc3NlbWJsZXIsIFNwcml0ZSwgTGFiZWwsIFNwcml0ZUZyYW1lIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgU2VydmVyQ29tbW9uIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1NlcnZlckNvbW1vbic7XG5pbXBvcnQgeyBTb3VyY2VNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1NvdXJjZU1hbmFnZXInO1xuaW1wb3J0IHsgUm91bmRUeXBlIH0gZnJvbSAnLi4vR2FtZUNvbW1vbi9Sb3VuZFR5cGUnO1xuaW1wb3J0IHsgR2FtZURhdGEgfSBmcm9tICcuLi9HYW1lRGF0YSc7XG5pbXBvcnQgeyBQb3B1cCB9IGZyb20gJy4vUG9wdXAnO1xuaW1wb3J0IHsgUG9wdXBNYW5hZ2VyIH0gZnJvbSAnLi9Qb3B1cE1hbmFnZXInO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ01hdGNoaW5nUG9wdXAnKVxuZXhwb3J0IGNsYXNzIE1hdGNoaW5nUG9wdXAgZXh0ZW5kcyBQb3B1cCB7XG4gICAgdG9wMTogTm9kZTtcbiAgICB0b3AyOiBOb2RlO1xuXG4gICAgSW5pdCgpIHtcbiAgICAgICAgU291cmNlTWFuYWdlci5JLlN0YXJ0R2FtZSgpO1xuICAgICAgICBHYW1lRGF0YS5JLmdhbWVTdG9wID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnRvcDEgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUb3AxXCIpO1xuICAgICAgICB0aGlzLnRvcDIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUb3AyXCIpO1xuICAgICAgICAvL+maj+acuuW9k+WJjeeOqeWutuaYr+e6ouiJsui/mOaYr+iTneiJslxuICAgICAgICAvL+e6ouiJsuaWuVxuICAgICAgICBsZXQgcGxheWVyMVxuICAgICAgICBsZXQgcGxheWVyMlxuICAgICAgICBpZiAoR2FtZURhdGEuSS5sb2FkRGF0YS50aGlzUGxheWVyID09IFJvdW5kVHlwZS5QbGF5MSkge1xuICAgICAgICAgICAgdGhpcy50b3AxLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRvcDIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBwbGF5ZXIxID0gdGhpcy50b3AxLmdldENoaWxkQnlOYW1lKFwiUGxheWVyMVwiKTtcbiAgICAgICAgICAgIHBsYXllcjIgPSB0aGlzLnRvcDEuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXIyXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8v6JOd6Imy5pa5XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b3AxLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50b3AyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBwbGF5ZXIxID0gdGhpcy50b3AyLmdldENoaWxkQnlOYW1lKFwiUGxheWVyMlwiKTtcbiAgICAgICAgICAgIHBsYXllcjIgPSB0aGlzLnRvcDIuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXIxXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBsYXllcjFIZWFkSW1hZ2UgPSBwbGF5ZXIxLmdldENoaWxkQnlOYW1lKFwiTWFza1wiKS5nZXRDaGlsZEJ5TmFtZShcIkhlYWRJbWFnZVwiKTtcbiAgICAgICAgbGV0IHBsYXllcjFOYW1lID0gcGxheWVyMS5nZXRDaGlsZEJ5TmFtZShcIk5hbWVcIik7XG4gICAgICAgIGxldCBwbGF5ZXIySGVhZEltYWdlID0gcGxheWVyMi5nZXRDaGlsZEJ5TmFtZShcIk1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJIZWFkSW1hZ2VcIik7XG4gICAgICAgIGxldCBwbGF5ZXIyTmFtZSA9IHBsYXllcjIuZ2V0Q2hpbGRCeU5hbWUoXCJOYW1lXCIpO1xuXG4gICAgICAgIC8vIOmcgOimgeaVsOaNriDnjqnlrrblpLTlg4/kv6Hmga8s5ZCN5a2X44CC5a+55omL5aS05YOPLOWQjeWtl1xuICAgICAgICBwbGF5ZXIxSGVhZEltYWdlLmdldENvbXBvbmVudChTcHJpdGUpLnNwcml0ZUZyYW1lID0gR2FtZURhdGEuSS50aGlzcGxheWVySGVhZEltYWdlO1xuICAgICAgICBwbGF5ZXIxTmFtZS5nZXRDb21wb25lbnQoTGFiZWwpLnN0cmluZyA9IEdhbWVEYXRhLkkudGhpc1BsYXllck5hbWU7XG4gICAgICAgIHBsYXllcjJIZWFkSW1hZ2UuZ2V0Q29tcG9uZW50KFNwcml0ZSkuc3ByaXRlRnJhbWUgPSBHYW1lRGF0YS5JLlJvYm90SGVhZEltYWdlO1xuICAgICAgICBwbGF5ZXIyTmFtZS5nZXRDb21wb25lbnQoTGFiZWwpLnN0cmluZyA9IEdhbWVEYXRhLkkuUm9ib3ROYW1lO1xuXG4gICAgICAgLy8gdGhpcy5Mb2FkR2FtZVNjZW5lKCk7XG4gICAgICAgIC8vIFBvcHVwTWFuYWdlci5JLm5vd1BvcHVwID0gbnVsbDtcbiAgICAgICAgLy8gU2VydmVyQ29tbW9uLmdsb2FkKDEwMCxcImJldFwiKTtcbiAgICB9XG5cbiAgICBMb2FkR2FtZVNjZW5lKCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS/oeaBr+WxleekujPnp5LlkI7ot7PovazmuLjmiI/lnLrmma9cIik7XG4gICAgICAgICAgICBkaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lU2NlbmVcIik7XG4gICAgICAgIH0sIDMpXG4gICAgfVxufVxuIl19