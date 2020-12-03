System.register(["cc", "code-quality:cr", "../../../Common/ServerCommon.js", "../../../Common/SourceManager.js", "../../../Utils/MKEventDispatch.js", "../../../Utils/NDBTS.js", "../../GameData.js", "../../Popup/PopupManager.js", "../RoundType.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, director, game, find, Label, Sprite, view, ResolutionPolicy, tween, Vec3, ServerCommon, SourceManager, MKEventDispatch, NDB, GameData, PopupManager, RoundType, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, MainSceneUI;

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

  function _reportPossibleCrUseOfServerCommon(extras) {
    _reporterNs.report("ServerCommon", "../../../Common/ServerCommon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSourceManager(extras) {
    _reporterNs.report("SourceManager", "../../../Common/SourceManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMKEventDispatch(extras) {
    _reporterNs.report("MKEventDispatch", "../../../Utils/MKEventDispatch", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNDB(extras) {
    _reporterNs.report("NDB", "../../../Utils/NDBTS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../../GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopupManager(extras) {
    _reporterNs.report("PopupManager", "../../Popup/PopupManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoundType(extras) {
    _reporterNs.report("RoundType", "../RoundType", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      director = _cc.director;
      game = _cc.game;
      find = _cc.find;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      view = _cc.view;
      ResolutionPolicy = _cc.ResolutionPolicy;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_CommonServerCommonJs) {
      ServerCommon = _CommonServerCommonJs.ServerCommon;
    }, function (_CommonSourceManagerJs) {
      SourceManager = _CommonSourceManagerJs.SourceManager;
    }, function (_UtilsMKEventDispatchJs) {
      MKEventDispatch = _UtilsMKEventDispatchJs.default;
    }, function (_UtilsNDBTSJs) {
      NDB = _UtilsNDBTSJs.default;
    }, function (_GameDataJs) {
      GameData = _GameDataJs.GameData;
    }, function (_PopupPopupManagerJs) {
      PopupManager = _PopupPopupManagerJs.PopupManager;
    }, function (_RoundTypeJs) {
      RoundType = _RoundTypeJs.RoundType;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "c4862nVDUdDR6AJhGGTo8cA", "MainSceneUI", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MainSceneUI", MainSceneUI = (_dec = ccclass('MainSceneUI'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(MainSceneUI, _Component);

        function MainSceneUI() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, MainSceneUI);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MainSceneUI)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.LoadJoinDataOver = false;
          _this.LoadSceneOver = false;
          _this.isJump = false;

          _initializerDefineProperty(_this, "PlayBtn", _descriptor, _assertThisInitialized(_this));

          _this.timeindex = 0;
          return _this;
        }

        _createClass(MainSceneUI, [{
          key: "__preload",
          value: function __preload() {
            view.setDesignResolutionSize(1500, 750, ResolutionPolicy.SHOW_ALL); // view.setOrientation(macro.ORIENTATION_LANDSCAPE)
          }
        }, {
          key: "onLoad",
          value: function onLoad() {}
        }, {
          key: "onEnable",
          value: function onEnable() {
            var _this2 = this;

            MainSceneUI.I = this.node.getComponent(MainSceneUI);
            console.log("开始加载场景");
            director.preloadScene("GameScene", function (res) {
              _this2.LoadSceneOver = true;
              console.log("加载完毕");
            });
          }
        }, {
          key: "start",
          value: function start() {
            var _this3 = this;

            (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
              error: Error()
            }), NDB) : NDB).gameIsStart = true; // PopupManager.I.ShowPopup(find("Canvas"), "LosePopup");

            this.addEventDispatch();
            this.TimeNumber = find("Canvas/BG2/TimeNumber").getComponent(Label);
            game.addPersistRootNode(find("GameData"));
            game.addPersistRootNode(find("PopupManager"));
            game.addPersistRootNode(find("Sources"));
            this.gloadNumber = find("Canvas/GloadNumberBG/Number").getComponent(Label); //开始游戏

            (_crd && ServerCommon === void 0 ? (_reportPossibleCrUseOfServerCommon({
              error: Error()
            }), ServerCommon) : ServerCommon).getUserinfo();
            (_crd && ServerCommon === void 0 ? (_reportPossibleCrUseOfServerCommon({
              error: Error()
            }), ServerCommon) : ServerCommon).UpdataCoin();
            this.scheduleOnce(function () {
              (_crd && ServerCommon === void 0 ? (_reportPossibleCrUseOfServerCommon({
                error: Error()
              }), ServerCommon) : ServerCommon).startGame();
            }, 3); //------------------------------------------------------------------------
            // this.SetPlayersData();
            // this.JumpSuccess();
            //------------------------------------------------------------------------

            (_crd && SourceManager === void 0 ? (_reportPossibleCrUseOfSourceManager({
              error: Error()
            }), SourceManager) : SourceManager).I.BGMusic();
            this.timeindex = 0;
            this.TimeNumber.string == "FINDING PLAYER";
            this.isJump = false;
            this.scheduleOnce(function () {
              _this3.TimeNumber.string = 0 + "";
            }, 2.5);
            this.schedule(function () {
              _this3.timeindex++;
              if (_this3.TimeNumber.string == "start") return;

              if ((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                error: Error()
              }), GameData) : GameData).I.allMoney < 100) {
                _this3.gloadNumber.string = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                  error: Error()
                }), GameData) : GameData).I.allMoney + "";
                _this3.TimeNumber.string = "Insufficient game currency";
                return;
              } else {
                if (_this3.TimeNumber.string == "Insufficient game currency") _this3.TimeNumber.string = "FINDING PLAYER";
              }

              if (_this3.TimeNumber.string == "FINDING PLAYER") return;

              if (_this3.LoadJoinDataOver && _this3.LoadSceneOver && !_this3.isJump) {
                console.log("设置机器人头像数据并跳转场景");
                _this3.TimeNumber.string = "start";
                _this3.isJump = true;

                _this3.setJoinData();

                return;
              }

              _this3.TimeNumber.string = _this3.timeindex + "";
            }, 1, 100, 3);
          }
        }, {
          key: "addEventDispatch",
          value: function addEventDispatch() {
            (_crd && MKEventDispatch === void 0 ? (_reportPossibleCrUseOfMKEventDispatch({
              error: Error()
            }), MKEventDispatch) : MKEventDispatch).I.on('androidGoback', this.androidGoback.bind(this), this);
            (_crd && MKEventDispatch === void 0 ? (_reportPossibleCrUseOfMKEventDispatch({
              error: Error()
            }), MKEventDispatch) : MKEventDispatch).I.on('onAndroidResume', this.onAndroidResume.bind(this), this);
          } //安卓返回；

        }, {
          key: "androidGoback",
          value: function androidGoback() {
            var popup = find("Canvas/ExitTipPopup");

            if (!popup) {
              (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
                error: Error()
              }), PopupManager) : PopupManager).I.ShowPopup(find("Canvas"), "ExitTipPopup", true);
            } else {
              (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
                error: Error()
              }), PopupManager) : PopupManager).I.ClosePopup(find("Canvas"), true, popup);
            }
          } //恢复到前台；

        }, {
          key: "onAndroidResume",
          value: function onAndroidResume() {
            this.PlayBtn.active = true;
            console.log("回到前台");
            (_crd && ServerCommon === void 0 ? (_reportPossibleCrUseOfServerCommon({
              error: Error()
            }), ServerCommon) : ServerCommon).UpdataCoin();
          }
        }, {
          key: "setJoinData",
          value: function setJoinData() {
            MainSceneUI.I.TimeNumber.string = "start";
            var player2headImage = find("Canvas/BG2/Player2BG/Mask/HeadImage"); // console.log("++++", player2headImage);

            player2headImage.getComponent(Sprite).spriteFrame = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.RobotHeadImage;
            tween(player2headImage).to(0.2, {
              postion: new Vec3(165, -160.786, 0)
            }).start();
            find("Canvas/BG2/Player2BG/Name").getComponent(Label).string = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.RobotName;
            (_crd && SourceManager === void 0 ? (_reportPossibleCrUseOfSourceManager({
              error: Error()
            }), SourceManager) : SourceManager).I.Join();
            MainSceneUI.I.JumpSuccess();
          }
        }, {
          key: "Join",
          value: function Join() {
            this.PlayBtn.active = false;
            this.timeindex = 0;
            this.TimeNumber.string = this.timeindex + "";
            this.scheduleOnce(function () {
              (_crd && ServerCommon === void 0 ? (_reportPossibleCrUseOfServerCommon({
                error: Error()
              }), ServerCommon) : ServerCommon).startGame();
            }, 3);
          }
        }, {
          key: "SetPlayersData",
          value: function SetPlayersData() {
            var thisplayer = find("Canvas/thisPlayer");
            var player1 = find("Canvas/BG2/Player1BG");
            thisplayer.getChildByName("Mask").getChildByName("HeadImage").getComponent(Sprite).spriteFrame = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.thisplayerHeadImage;
            thisplayer.getChildByName("Name").getComponent(Label).string = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.thisPlayerName;
            player1.getChildByName("Mask").getChildByName("HeadImage").getComponent(Sprite).spriteFrame = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.thisplayerHeadImage;
            player1.getChildByName("Name").getComponent(Label).string = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.thisPlayerName;
          }
        }, {
          key: "JumpSuccess",
          value: function JumpSuccess() {
            var _this4 = this;

            this.scheduleOnce(function () {
              _this4.CreateData();

              console.log("数据为", (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                error: Error()
              }), GameData) : GameData).I.loadData);

              _this4.LoadGameScene(); // PopupManager.I.ShowPopup(find("Canvas"), "MatchingPopup");

            }, 1.5);
          }
        }, {
          key: "CreateData",
          value: function CreateData() {
            //随机谁先开始
            (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.loadData.nowPlayerType = (_crd && RoundType === void 0 ? (_reportPossibleCrUseOfRoundType({
              error: Error()
            }), RoundType) : RoundType).Play1; //随机当前玩家是红色还是蓝色

            (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.loadData.thisPlayer = this.DecideWhoStartsFirst(); //RoundType.Play1;
          }
          /**随机从一个人开始打球 （目前假设每次都是Player1开始）*/

        }, {
          key: "DecideWhoStartsFirst",
          value: function DecideWhoStartsFirst() {
            return Math.random() > 0.5 ? (_crd && RoundType === void 0 ? (_reportPossibleCrUseOfRoundType({
              error: Error()
            }), RoundType) : RoundType).Play1 : (_crd && RoundType === void 0 ? (_reportPossibleCrUseOfRoundType({
              error: Error()
            }), RoundType) : RoundType).Play2;
          }
        }, {
          key: "LoadGameScene",
          value: function LoadGameScene() {
            // this.scheduleOnce(() => {
            director.loadScene("GameScene"); // }, 3)
          }
        }, {
          key: "PlayGameButton",
          value: function PlayGameButton() {
            (_crd && ServerCommon === void 0 ? (_reportPossibleCrUseOfServerCommon({
              error: Error()
            }), ServerCommon) : ServerCommon).GetCoin();
          }
        }]);

        return MainSceneUI;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "PlayBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0dhbWUvR2FtZUNvbW1vbi9VSS9NYWluU2NlbmVVSS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsImRpcmVjdG9yIiwiZ2FtZSIsImZpbmQiLCJMYWJlbCIsIlNwcml0ZSIsInZpZXciLCJSZXNvbHV0aW9uUG9saWN5IiwidHdlZW4iLCJWZWMzIiwiU2VydmVyQ29tbW9uIiwiU291cmNlTWFuYWdlciIsIk1LRXZlbnREaXNwYXRjaCIsIk5EQiIsIkdhbWVEYXRhIiwiUG9wdXBNYW5hZ2VyIiwiUm91bmRUeXBlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTWFpblNjZW5lVUkiLCJMb2FkSm9pbkRhdGFPdmVyIiwiTG9hZFNjZW5lT3ZlciIsImlzSnVtcCIsInRpbWVpbmRleCIsInNldERlc2lnblJlc29sdXRpb25TaXplIiwiU0hPV19BTEwiLCJJIiwibm9kZSIsImdldENvbXBvbmVudCIsImNvbnNvbGUiLCJsb2ciLCJwcmVsb2FkU2NlbmUiLCJyZXMiLCJnYW1lSXNTdGFydCIsImFkZEV2ZW50RGlzcGF0Y2giLCJUaW1lTnVtYmVyIiwiYWRkUGVyc2lzdFJvb3ROb2RlIiwiZ2xvYWROdW1iZXIiLCJnZXRVc2VyaW5mbyIsIlVwZGF0YUNvaW4iLCJzY2hlZHVsZU9uY2UiLCJzdGFydEdhbWUiLCJCR011c2ljIiwic3RyaW5nIiwic2NoZWR1bGUiLCJhbGxNb25leSIsInNldEpvaW5EYXRhIiwib24iLCJhbmRyb2lkR29iYWNrIiwiYmluZCIsIm9uQW5kcm9pZFJlc3VtZSIsInBvcHVwIiwiU2hvd1BvcHVwIiwiQ2xvc2VQb3B1cCIsIlBsYXlCdG4iLCJhY3RpdmUiLCJwbGF5ZXIyaGVhZEltYWdlIiwic3ByaXRlRnJhbWUiLCJSb2JvdEhlYWRJbWFnZSIsInRvIiwicG9zdGlvbiIsInN0YXJ0IiwiUm9ib3ROYW1lIiwiSm9pbiIsIkp1bXBTdWNjZXNzIiwidGhpc3BsYXllciIsInBsYXllcjEiLCJnZXRDaGlsZEJ5TmFtZSIsInRoaXNwbGF5ZXJIZWFkSW1hZ2UiLCJ0aGlzUGxheWVyTmFtZSIsIkNyZWF0ZURhdGEiLCJsb2FkRGF0YSIsIkxvYWRHYW1lU2NlbmUiLCJub3dQbGF5ZXJUeXBlIiwiUGxheTEiLCJ0aGlzUGxheWVyIiwiRGVjaWRlV2hvU3RhcnRzRmlyc3QiLCJNYXRoIiwicmFuZG9tIiwiUGxheTIiLCJsb2FkU2NlbmUiLCJHZXRDb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsUSxPQUFBQSxRO0FBQVVDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLE0sT0FBQUEsTTtBQUFjQyxNQUFBQSxJLE9BQUFBLEk7QUFBeURDLE1BQUFBLGdCLE9BQUFBLGdCO0FBQWdHQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsSSxPQUFBQSxJOzs7O0FBQ3hPQyxNQUFBQSxZLHlCQUFBQSxZOztBQUNBQyxNQUFBQSxhLDBCQUFBQSxhOztBQUNGQyxNQUFBQSxlOztBQUdBQyxNQUFBQSxHOztBQUNFQyxNQUFBQSxRLGVBQUFBLFE7O0FBQ0FDLE1BQUFBLFksd0JBQUFBLFk7O0FBQ0FDLE1BQUFBLFMsZ0JBQUFBLFM7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCbkIsVSxDQUF0Qm1CLE87QUFBU0MsTUFBQUEsUSxHQUFhcEIsVSxDQUFib0IsUTs7NkJBR0pDLFcsV0FEWkYsT0FBTyxDQUFDLGFBQUQsQyxVQTBCSEMsUUFBUSxDQUFDbEIsSUFBRCxDOzs7Ozs7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QjtBQUFBO0FBQUEsd0NBQVNKLENBQVQsQ0FBVzZDLFFBQTlCOztBQUNBLGNBQUEsTUFBSSxDQUFDQyxhQUFMLEdBSG9CLENBSXBCOztBQUNILGFBTEQsRUFLRyxHQUxIO0FBTUg7Ozt1Q0FDWTtBQUNUO0FBQ0E7QUFBQTtBQUFBLHNDQUFTOUMsQ0FBVCxDQUFXNkMsUUFBWCxDQUFvQkUsYUFBcEIsR0FBb0M7QUFBQTtBQUFBLHdDQUFVQyxLQUE5QyxDQUZTLENBR1Q7O0FBQ0E7QUFBQTtBQUFBLHNDQUFTaEQsQ0FBVCxDQUFXNkMsUUFBWCxDQUFvQkksVUFBcEIsR0FBaUMsS0FBS0Msb0JBQUwsRUFBakMsQ0FKUyxDQUlvRDtBQUNoRTtBQUNEOzs7O2lEQUN1QjtBQUNuQixtQkFBT0MsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQWhCLEdBQXNCO0FBQUE7QUFBQSx3Q0FBVUosS0FBaEMsR0FBd0M7QUFBQTtBQUFBLHdDQUFVSyxLQUF6RDtBQUNIOzs7MENBQ2U7QUFDWjtBQUNBOUUsWUFBQUEsUUFBUSxDQUFDK0UsU0FBVCxDQUFtQixXQUFuQixFQUZZLENBR1o7QUFDSDs7OzJDQUNnQjtBQUNiO0FBQUE7QUFBQSw4Q0FBYUMsT0FBYjtBQUNIOzs7O1FBeEo0QmxGLFM7Ozs7O2lCQTBCYixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBkaXJlY3RvciwgZ2FtZSwgZmluZCwgTGFiZWwsIFNwcml0ZSwgR2FtZSwgdmlldywgbWFjcm8sIFNwcml0ZUZyYW1lLCBsb2FkZXIsIFRleHR1cmUyRCwgSW1hZ2VBc3NldCwgUmVzb2x1dGlvblBvbGljeSwgU2NlbmUsIFNwcml0ZUNvbXBvbmVudCwgR3JhcGhpY3MsIEdyYXBoaWNzQ29tcG9uZW50LCBNYXNrQ29tcG9uZW50LCBNYXRlcmlhbCwgdHdlZW4sIFZlYzMgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBTZXJ2ZXJDb21tb24gfSBmcm9tICcuLi8uLi8uLi9Db21tb24vU2VydmVyQ29tbW9uJztcbmltcG9ydCB7IFNvdXJjZU1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi9Db21tb24vU291cmNlTWFuYWdlcic7XG5pbXBvcnQgTUtFdmVudERpc3BhdGNoIGZyb20gJy4uLy4uLy4uL1V0aWxzL01LRXZlbnREaXNwYXRjaCc7XG5pbXBvcnQgTUtNZXNzYWdlTWFuYWdlciBmcm9tICcuLi8uLi8uLi9VdGlscy9NS01lc3NhZ2VNYW5hZ2VyJztcbmltcG9ydCBNS01lc3NhZ2VUeXBlIGZyb20gJy4uLy4uLy4uL1V0aWxzL01LTWVzc2FnZVR5cGUnO1xuaW1wb3J0IE5EQiBmcm9tICcuLi8uLi8uLi9VdGlscy9OREJUUyc7XG5pbXBvcnQgeyBHYW1lRGF0YSB9IGZyb20gJy4uLy4uL0dhbWVEYXRhJztcbmltcG9ydCB7IFBvcHVwTWFuYWdlciB9IGZyb20gJy4uLy4uL1BvcHVwL1BvcHVwTWFuYWdlcic7XG5pbXBvcnQgeyBSb3VuZFR5cGUgfSBmcm9tICcuLi9Sb3VuZFR5cGUnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ01haW5TY2VuZVVJJylcbmV4cG9ydCBjbGFzcyBNYWluU2NlbmVVSSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBfX3ByZWxvYWQoKSB7XG4gICAgICAgIHZpZXcuc2V0RGVzaWduUmVzb2x1dGlvblNpemUoMTUwMCwgNzUwLCBSZXNvbHV0aW9uUG9saWN5LlNIT1dfQUxMKTtcblxuICAgICAgICAvLyB2aWV3LnNldE9yaWVudGF0aW9uKG1hY3JvLk9SSUVOVEFUSU9OX0xBTkRTQ0FQRSlcblxuXG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gICAgTG9hZEpvaW5EYXRhT3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIExvYWRTY2VuZU92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0p1bXA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBvbkVuYWJsZSgpIHtcblxuICAgICAgICBNYWluU2NlbmVVSS5JID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChNYWluU2NlbmVVSSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5byA5aeL5Yqg6L295Zy65pmvXCIpO1xuICAgICAgICBkaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJHYW1lU2NlbmVcIiwgKHJlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5Mb2FkU2NlbmVPdmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yqg6L295a6M5q+VXCIpO1xuXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHN0YXRpYyBJOiBNYWluU2NlbmVVSTtcbiAgICBAcHJvcGVydHkoTm9kZSlcbiAgICBQbGF5QnRuOiBOb2RlID0gbnVsbDtcbiAgICBUaW1lTnVtYmVyOiBMYWJlbDtcbiAgICBnbG9hZE51bWJlcjogTGFiZWw7XG4gICAgdGltZWluZGV4ID0gMDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBOREIuZ2FtZUlzU3RhcnQgPSB0cnVlO1xuICAgICAgICAvLyBQb3B1cE1hbmFnZXIuSS5TaG93UG9wdXAoZmluZChcIkNhbnZhc1wiKSwgXCJMb3NlUG9wdXBcIik7XG4gICAgICAgIHRoaXMuYWRkRXZlbnREaXNwYXRjaCgpO1xuICAgICAgICB0aGlzLlRpbWVOdW1iZXIgPSBmaW5kKFwiQ2FudmFzL0JHMi9UaW1lTnVtYmVyXCIpLmdldENvbXBvbmVudChMYWJlbCk7XG4gICAgICAgIGdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKGZpbmQoXCJHYW1lRGF0YVwiKSk7XG4gICAgICAgIGdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKGZpbmQoXCJQb3B1cE1hbmFnZXJcIikpO1xuICAgICAgICBnYW1lLmFkZFBlcnNpc3RSb290Tm9kZShmaW5kKFwiU291cmNlc1wiKSk7XG4gICAgICAgIHRoaXMuZ2xvYWROdW1iZXIgPSBmaW5kKFwiQ2FudmFzL0dsb2FkTnVtYmVyQkcvTnVtYmVyXCIpLmdldENvbXBvbmVudChMYWJlbCk7XG4gICAgICAgIC8v5byA5aeL5ri45oiPXG4gICAgICAgIFNlcnZlckNvbW1vbi5nZXRVc2VyaW5mbygpO1xuICAgICAgICBTZXJ2ZXJDb21tb24uVXBkYXRhQ29pbigpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBTZXJ2ZXJDb21tb24uc3RhcnRHYW1lKClcbiAgICAgICAgfSwgMyk7XG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vIHRoaXMuU2V0UGxheWVyc0RhdGEoKTtcbiAgICAgICAgLy8gdGhpcy5KdW1wU3VjY2VzcygpO1xuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBTb3VyY2VNYW5hZ2VyLkkuQkdNdXNpYygpO1xuICAgICAgICB0aGlzLnRpbWVpbmRleCA9IDA7XG4gICAgICAgIHRoaXMuVGltZU51bWJlci5zdHJpbmcgPT0gXCJGSU5ESU5HIFBMQVlFUlwiO1xuICAgICAgICB0aGlzLmlzSnVtcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLlRpbWVOdW1iZXIuc3RyaW5nID0gMCArIFwiXCI7XG4gICAgICAgIH0sIDIuNSlcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRpbWVpbmRleCsrO1xuICAgICAgICAgICAgaWYgKHRoaXMuVGltZU51bWJlci5zdHJpbmcgPT0gXCJzdGFydFwiKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoR2FtZURhdGEuSS5hbGxNb25leSA8IDEwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2xvYWROdW1iZXIuc3RyaW5nID0gR2FtZURhdGEuSS5hbGxNb25leSArIFwiXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5UaW1lTnVtYmVyLnN0cmluZyA9IFwiSW5zdWZmaWNpZW50IGdhbWUgY3VycmVuY3lcIjtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLlRpbWVOdW1iZXIuc3RyaW5nID09IFwiSW5zdWZmaWNpZW50IGdhbWUgY3VycmVuY3lcIilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5UaW1lTnVtYmVyLnN0cmluZyA9IFwiRklORElORyBQTEFZRVJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLlRpbWVOdW1iZXIuc3RyaW5nID09IFwiRklORElORyBQTEFZRVJcIikgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKHRoaXMuTG9hZEpvaW5EYXRhT3ZlciAmJiB0aGlzLkxvYWRTY2VuZU92ZXIgJiYgIXRoaXMuaXNKdW1wKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLorr7nva7mnLrlmajkurrlpLTlg4/mlbDmja7lubbot7PovazlnLrmma9cIik7XG4gICAgICAgICAgICAgICAgdGhpcy5UaW1lTnVtYmVyLnN0cmluZyA9IFwic3RhcnRcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmlzSnVtcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRKb2luRGF0YSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuVGltZU51bWJlci5zdHJpbmcgPSB0aGlzLnRpbWVpbmRleCArIFwiXCI7XG4gICAgICAgIH0sIDEsIDEwMCwgMyk7XG4gICAgfVxuICAgIGFkZEV2ZW50RGlzcGF0Y2goKSB7XG4gICAgICAgIE1LRXZlbnREaXNwYXRjaC5JLm9uKCdhbmRyb2lkR29iYWNrJywgdGhpcy5hbmRyb2lkR29iYWNrLmJpbmQodGhpcyksIHRoaXMpO1xuICAgICAgICBNS0V2ZW50RGlzcGF0Y2guSS5vbignb25BbmRyb2lkUmVzdW1lJywgdGhpcy5vbkFuZHJvaWRSZXN1bWUuYmluZCh0aGlzKSwgdGhpcyk7XG4gICAgfVxuICAgIC8v5a6J5Y2T6L+U5Zue77ybXG4gICAgYW5kcm9pZEdvYmFjaygpIHtcbiAgICAgICAgbGV0IHBvcHVwID0gZmluZChcIkNhbnZhcy9FeGl0VGlwUG9wdXBcIilcbiAgICAgICAgaWYgKCFwb3B1cCkge1xuICAgICAgICAgICAgUG9wdXBNYW5hZ2VyLkkuU2hvd1BvcHVwKGZpbmQoXCJDYW52YXNcIiksIFwiRXhpdFRpcFBvcHVwXCIsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgUG9wdXBNYW5hZ2VyLkkuQ2xvc2VQb3B1cChmaW5kKFwiQ2FudmFzXCIpLCB0cnVlLCBwb3B1cClcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL+aBouWkjeWIsOWJjeWPsO+8m1xuICAgIG9uQW5kcm9pZFJlc3VtZSgpIHtcbiAgICAgICAgdGhpcy5QbGF5QnRuLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5Zue5Yiw5YmN5Y+wXCIpO1xuICAgICAgICBTZXJ2ZXJDb21tb24uVXBkYXRhQ29pbigpO1xuXG4gICAgfVxuICAgIHNldEpvaW5EYXRhKCkge1xuICAgICAgICBNYWluU2NlbmVVSS5JLlRpbWVOdW1iZXIuc3RyaW5nID0gXCJzdGFydFwiO1xuICAgICAgICBsZXQgcGxheWVyMmhlYWRJbWFnZSA9IGZpbmQoXCJDYW52YXMvQkcyL1BsYXllcjJCRy9NYXNrL0hlYWRJbWFnZVwiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCIrKysrXCIsIHBsYXllcjJoZWFkSW1hZ2UpO1xuICAgICAgICBwbGF5ZXIyaGVhZEltYWdlLmdldENvbXBvbmVudChTcHJpdGUpLnNwcml0ZUZyYW1lID0gR2FtZURhdGEuSS5Sb2JvdEhlYWRJbWFnZTtcbiAgICAgICAgdHdlZW4ocGxheWVyMmhlYWRJbWFnZSkudG8oMC4yLCB7IHBvc3Rpb246IG5ldyBWZWMzKDE2NSwgLTE2MC43ODYsIDApIH0pLnN0YXJ0KCk7XG4gICAgICAgIGZpbmQoXCJDYW52YXMvQkcyL1BsYXllcjJCRy9OYW1lXCIpLmdldENvbXBvbmVudChMYWJlbCkuc3RyaW5nID0gR2FtZURhdGEuSS5Sb2JvdE5hbWU7XG4gICAgICAgIFNvdXJjZU1hbmFnZXIuSS5Kb2luKCk7XG4gICAgICAgIE1haW5TY2VuZVVJLkkuSnVtcFN1Y2Nlc3MoKTtcbiAgICB9XG5cbiAgICBKb2luKCkge1xuICAgICAgICB0aGlzLlBsYXlCdG4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGltZWluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5UaW1lTnVtYmVyLnN0cmluZyA9IHRoaXMudGltZWluZGV4ICsgXCJcIjtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgU2VydmVyQ29tbW9uLnN0YXJ0R2FtZSgpO1xuICAgICAgICB9LCAzKTtcbiAgICB9XG4gICAgU2V0UGxheWVyc0RhdGEoKSB7XG4gICAgICAgIGxldCB0aGlzcGxheWVyID0gZmluZChcIkNhbnZhcy90aGlzUGxheWVyXCIpO1xuICAgICAgICBsZXQgcGxheWVyMSA9IGZpbmQoXCJDYW52YXMvQkcyL1BsYXllcjFCR1wiKTtcbiAgICAgICAgdGhpc3BsYXllci5nZXRDaGlsZEJ5TmFtZShcIk1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJIZWFkSW1hZ2VcIikuZ2V0Q29tcG9uZW50KFNwcml0ZSkuc3ByaXRlRnJhbWUgPSBHYW1lRGF0YS5JLnRoaXNwbGF5ZXJIZWFkSW1hZ2U7XG4gICAgICAgIHRoaXNwbGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJOYW1lXCIpLmdldENvbXBvbmVudChMYWJlbCkuc3RyaW5nID0gR2FtZURhdGEuSS50aGlzUGxheWVyTmFtZTtcbiAgICAgICAgcGxheWVyMS5nZXRDaGlsZEJ5TmFtZShcIk1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJIZWFkSW1hZ2VcIikuZ2V0Q29tcG9uZW50KFNwcml0ZSkuc3ByaXRlRnJhbWUgPSBHYW1lRGF0YS5JLnRoaXNwbGF5ZXJIZWFkSW1hZ2U7XG4gICAgICAgIHBsYXllcjEuZ2V0Q2hpbGRCeU5hbWUoXCJOYW1lXCIpLmdldENvbXBvbmVudChMYWJlbCkuc3RyaW5nID0gR2FtZURhdGEuSS50aGlzUGxheWVyTmFtZTtcblxuICAgIH1cbiAgICBKdW1wU3VjY2VzcygpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5DcmVhdGVEYXRhKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaVsOaNruS4ulwiLCBHYW1lRGF0YS5JLmxvYWREYXRhKTtcbiAgICAgICAgICAgIHRoaXMuTG9hZEdhbWVTY2VuZSgpO1xuICAgICAgICAgICAgLy8gUG9wdXBNYW5hZ2VyLkkuU2hvd1BvcHVwKGZpbmQoXCJDYW52YXNcIiksIFwiTWF0Y2hpbmdQb3B1cFwiKTtcbiAgICAgICAgfSwgMS41KTtcbiAgICB9XG4gICAgQ3JlYXRlRGF0YSgpIHtcbiAgICAgICAgLy/pmo/mnLrosIHlhYjlvIDlp4tcbiAgICAgICAgR2FtZURhdGEuSS5sb2FkRGF0YS5ub3dQbGF5ZXJUeXBlID0gUm91bmRUeXBlLlBsYXkxO1xuICAgICAgICAvL+maj+acuuW9k+WJjeeOqeWutuaYr+e6ouiJsui/mOaYr+iTneiJslxuICAgICAgICBHYW1lRGF0YS5JLmxvYWREYXRhLnRoaXNQbGF5ZXIgPSB0aGlzLkRlY2lkZVdob1N0YXJ0c0ZpcnN0KCk7Ly9Sb3VuZFR5cGUuUGxheTE7XG4gICAgfVxuICAgIC8qKumaj+acuuS7juS4gOS4quS6uuW8gOWni+aJk+eQgyDvvIjnm67liY3lgYforr7mr4/mrKHpg73mmK9QbGF5ZXIx5byA5aeL77yJKi9cbiAgICBEZWNpZGVXaG9TdGFydHNGaXJzdCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgPiAwLjUgPyBSb3VuZFR5cGUuUGxheTEgOiBSb3VuZFR5cGUuUGxheTI7XG4gICAgfVxuICAgIExvYWRHYW1lU2NlbmUoKSB7XG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZVNjZW5lXCIpO1xuICAgICAgICAvLyB9LCAzKVxuICAgIH1cbiAgICBQbGF5R2FtZUJ1dHRvbigpIHtcbiAgICAgICAgU2VydmVyQ29tbW9uLkdldENvaW4oKTtcbiAgICB9XG59XG4iXX0=