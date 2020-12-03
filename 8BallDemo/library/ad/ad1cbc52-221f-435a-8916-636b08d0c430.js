System.register(["cc", "code-quality:cr", "../../Common/ServerCommon.js", "../../Utils/MKEventDispatch.js", "../GameData.js", "../Popup/PopupManager.js", "./Ball/BallManager.js", "./Ball/BallType.js", "./Player.js", "./RobotController.js", "./RoundType.js", "./UI/GameSceneUI.js", "./UI/PlayerController.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Vec3, find, SliderComponent, SpriteComponent, Color, tween, ServerCommon, MKEventDispatch, GameData, PopupManager, BallManager, BallType, Player, RobotController, RoundType, GameSceneUI, PlayerController, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, GameSceneManager;

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
    _reporterNs.report("ServerCommon", "../../Common/ServerCommon", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMKEventDispatch(extras) {
    _reporterNs.report("MKEventDispatch", "../../Utils/MKEventDispatch", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopupManager(extras) {
    _reporterNs.report("PopupManager", "../Popup/PopupManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBallManager(extras) {
    _reporterNs.report("BallManager", "./Ball/BallManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBallType(extras) {
    _reporterNs.report("BallType", "./Ball/BallType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "./Player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRobotController(extras) {
    _reporterNs.report("RobotController", "./RobotController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoundType(extras) {
    _reporterNs.report("RoundType", "./RoundType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSceneUI(extras) {
    _reporterNs.report("GameSceneUI", "./UI/GameSceneUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerController(extras) {
    _reporterNs.report("PlayerController", "./UI/PlayerController", _context.meta, extras);
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
      Vec3 = _cc.Vec3;
      find = _cc.find;
      SliderComponent = _cc.SliderComponent;
      SpriteComponent = _cc.SpriteComponent;
      Color = _cc.Color;
      tween = _cc.tween;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_CommonServerCommonJs) {
      ServerCommon = _CommonServerCommonJs.ServerCommon;
    }, function (_UtilsMKEventDispatchJs) {
      MKEventDispatch = _UtilsMKEventDispatchJs.default;
    }, function (_GameDataJs) {
      GameData = _GameDataJs.GameData;
    }, function (_PopupPopupManagerJs) {
      PopupManager = _PopupPopupManagerJs.PopupManager;
    }, function (_BallBallManagerJs) {
      BallManager = _BallBallManagerJs.BallManager;
    }, function (_BallBallTypeJs) {
      BallType = _BallBallTypeJs.BallType;
    }, function (_PlayerJs) {
      Player = _PlayerJs.Player;
    }, function (_RobotControllerJs) {
      RobotController = _RobotControllerJs.RobotController;
    }, function (_RoundTypeJs) {
      RoundType = _RoundTypeJs.RoundType;
    }, function (_UIGameSceneUIJs) {
      GameSceneUI = _UIGameSceneUIJs.GameSceneUI;
    }, function (_UIPlayerControllerJs) {
      PlayerController = _UIPlayerControllerJs.PlayerController;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "ad1cbxSIh9DWokWY2sI0MQw", "GameSceneManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameSceneManager", GameSceneManager = (_dec = ccclass('GameSceneManager'), _dec2 = property(SpriteComponent), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(GameSceneManager, _Component);

        function GameSceneManager() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GameSceneManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameSceneManager)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.Players = new Array(2);
          _this.nowPlayerType = (_crd && RoundType === void 0 ? (_reportPossibleCrUseOfRoundType({
            error: Error()
          }), RoundType) : RoundType).Play1;
          _this.thisPlayer = (_crd && RoundType === void 0 ? (_reportPossibleCrUseOfRoundType({
            error: Error()
          }), RoundType) : RoundType).Play1;
          _this.IsFirstRound = true;
          _this.inHoleBallNumber = 0;

          _initializerDefineProperty(_this, "combos", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(GameSceneManager, [{
          key: "onEnable",
          value: function onEnable() {
            var _this2 = this;

            GameSceneManager.I = this.node.getComponent(GameSceneManager);
            this.Players[0] = new (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player)();
            this.Players[1] = new (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player)();
            this.Players[0].PlayerType = (_crd && RoundType === void 0 ? (_reportPossibleCrUseOfRoundType({
              error: Error()
            }), RoundType) : RoundType).Play1;
            this.Players[1].PlayerType = (_crd && RoundType === void 0 ? (_reportPossibleCrUseOfRoundType({
              error: Error()
            }), RoundType) : RoundType).Play2;
            this.nowPlayerType = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.loadData.nowPlayerType;
            this.thisPlayer = (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.loadData.thisPlayer;
            (_crd && RobotController === void 0 ? (_reportPossibleCrUseOfRobotController({
              error: Error()
            }), RobotController) : RobotController).I.playerType = 1 - (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.loadData.thisPlayer;
            console.log(this.nowPlayerType == 0 ? "玩家1" : "玩家2", "开球");
            this.Players[this.nowPlayerType].IsFreeBall = true; //开始计时

            (_crd && ServerCommon === void 0 ? (_reportPossibleCrUseOfServerCommon({
              error: Error()
            }), ServerCommon) : ServerCommon).gload(100, "bet");
            this.scheduleOnce(function () {
              (_crd && GameSceneUI === void 0 ? (_reportPossibleCrUseOfGameSceneUI({
                error: Error()
              }), GameSceneUI) : GameSceneUI).I.StartReckonTime();
              if (_this2.nowPlayerType == _this2.thisPlayer) (_crd && GameSceneUI === void 0 ? (_reportPossibleCrUseOfGameSceneUI({
                error: Error()
              }), GameSceneUI) : GameSceneUI).I.ShowTip2("Your Turn");else (_crd && GameSceneUI === void 0 ? (_reportPossibleCrUseOfGameSceneUI({
                error: Error()
              }), GameSceneUI) : GameSceneUI).I.ShowTip2("The Opponent's Turn");
            }, 4);
            this.addEventDispatch();
          }
        }, {
          key: "addEventDispatch",
          value: function addEventDispatch() {
            (_crd && MKEventDispatch === void 0 ? (_reportPossibleCrUseOfMKEventDispatch({
              error: Error()
            }), MKEventDispatch) : MKEventDispatch).I.on('androidGoback', this.androidGoback.bind(this), this);
            (_crd && MKEventDispatch === void 0 ? (_reportPossibleCrUseOfMKEventDispatch({
              error: Error()
            }), MKEventDispatch) : MKEventDispatch).I.on('onAndroidStop', this.onAndroidStop.bind(this), this);
            (_crd && MKEventDispatch === void 0 ? (_reportPossibleCrUseOfMKEventDispatch({
              error: Error()
            }), MKEventDispatch) : MKEventDispatch).I.on('onAndroidResume', this.onAndroidResume.bind(this), this);
          } //安卓返回；

        }, {
          key: "androidGoback",
          value: function androidGoback() {
            if (!(_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.gameStop) this.ReturnMainScene();else {
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
            }
          }
        }, {
          key: "onAndroidStop",
          //切后台；
          value: function onAndroidStop() {
            console.log("切后台");
            this.AndroidStopTime = Date.now();
          } //恢复到前台；

        }, {
          key: "onAndroidResume",
          value: function onAndroidResume() {
            console.log("回到前台");
            this.AndroidResumeTime = Date.now();

            if (!(_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.gameStop) {
              if ((this.AndroidResumeTime - this.AndroidStopTime) / 1000 > 120) {
                console.log("切后台时间大于2分钟 判定失败");
                (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                  error: Error()
                }), GameData) : GameData).I.gameStop = true;
                GameSceneManager.I.Players[GameSceneManager.I.thisPlayer].IsSeriousFoul = true;
                console.log("游戏结束", GameSceneManager.I.thisPlayer, "失败");
                (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                  error: Error()
                }), GameData) : GameData).I.Winer = 1 - GameSceneManager.I.thisPlayer;
                (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
                  error: Error()
                }), PopupManager) : PopupManager).I.ShowPopup(find("Canvas"), "LosePopup");
              }
            }
          }
          /**是否是当前操作人的回合 */

        }, {
          key: "IsOwnerRound",
          value: function IsOwnerRound() {
            return this.nowPlayerType == this.thisPlayer && this.Players[this.nowPlayerType].IsHitBall == false;
          }
          /**回合结束 判断是否换人 */

        }, {
          key: "RoundEndChangePlayer",
          value: function RoundEndChangePlayer() {
            console.log("Player", this.nowPlayerType, "回合结束");

            if (GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsFreeBall) {
              (_crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
                error: Error()
              }), PlayerController) : PlayerController).I.FreeBall_Touch_End(null);
              find("Canvas/BallDrag").active = false;
              (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.CloseFreeBall();
              GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsFreeBall = false;
            }

            console.log(GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsFreeBall);
            console.log("Player", this.nowPlayerType, "判断是否有违规情况");
            this.JudgeFoul();
            this.JudgeIsGoalBall();

            if (this.IsFirstRound) {
              this.IsFirstRound = false;
            }
            /**判断如果所有球都打完了 将要打的目标球为8号球 */


            if (this.Players[this.nowPlayerType].TypeOfBallToBeHit != (_crd && BallType === void 0 ? (_reportPossibleCrUseOfBallType({
              error: Error()
            }), BallType) : BallType).BLACKBALL && this.JudgePlayerTargetBallIsOver()) {
              this.Players[this.nowPlayerType].TypeOfBallToBeHit = (_crd && BallType === void 0 ? (_reportPossibleCrUseOfBallType({
                error: Error()
              }), BallType) : BallType).BLACKBALL;
            }

            (_crd && GameSceneUI === void 0 ? (_reportPossibleCrUseOfGameSceneUI({
              error: Error()
            }), GameSceneUI) : GameSceneUI).I.showBall();
            if ((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.gameStop) return;
            this.CloseBallLight();
            (_crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
              error: Error()
            }), PlayerController) : PlayerController).I.slider.enabled = false; //切换回合

            this.nowPlayerType = this.JudgeWhoseurn(this.nowPlayerType);
            console.log(GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsFreeBall);
            find("Gun/Cylinder").active = true;
            find("Line").active = true;

            if (this.Players[this.nowPlayerType].TypeOfBallToBeHit != (_crd && BallType === void 0 ? (_reportPossibleCrUseOfBallType({
              error: Error()
            }), BallType) : BallType).BLACKBALL && this.JudgePlayerTargetBallIsOver()) {
              this.Players[this.nowPlayerType].TypeOfBallToBeHit = (_crd && BallType === void 0 ? (_reportPossibleCrUseOfBallType({
                error: Error()
              }), BallType) : BallType).BLACKBALL;
            }

            this.ShowBallLight(); //开始计时

            (_crd && GameSceneUI === void 0 ? (_reportPossibleCrUseOfGameSceneUI({
              error: Error()
            }), GameSceneUI) : GameSceneUI).I.StartReckonTime();

            if (this.nowPlayerType == this.thisPlayer) {
              find("Canvas/Slider").getComponent(SliderComponent).enabled = true;
              find("Canvas/GunDrag2").active = true;
            }

            (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.ResetBall();
            this.ResetFoul();
            console.log("Player", this.nowPlayerType, "回合开始");
            console.log("Player", this.nowPlayerType, "的球的类型是", this.Players[this.nowPlayerType].TypeOfBallToBeHit);
            this.Players[this.nowPlayerType].IsHitBall = false; //this.thisPlayer = this.nowPlayerType;
          }
          /** 重置违规情况*/

        }, {
          key: "ResetFoul",
          value: function ResetFoul() {
            console.log("重置违规情况", "当前是玩家", this.nowPlayerType, "的回合", "重置的是玩家", 1 - this.nowPlayerType, "的违规情况");
            this.Players[1 - this.nowPlayerType].IsFoul = false;
          }
          /**判断是否有违规情况 */

        }, {
          key: "JudgeFoul",
          value: function JudgeFoul() {
            // this.Players[this.nowPlayerType]
            console.log((_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.whiteBallFirstTouchBallType);

            if (this.Players[this.nowPlayerType].IsSeriousFoul) {
              console.log("游戏结束", this.nowPlayerType, "失败");
              return;
            }

            if (!GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsHitBall) {
              this.Players[this.nowPlayerType].IsFoul = true;
            }

            if ((_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.whiteBallComponent.isGoal) {
              this.Players[this.nowPlayerType].IsFoul = true;
            }

            if ((_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.BlackBallComponent.isGoal && (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.whiteBallComponent.isGoal) {
              // console.log("Player", this.nowPlayerType, "违规打进了白球")
              // console.log("Player", this.nowPlayerType, "违规！打进了黑球的同时打进了白球！严重违规！", "Player", this.nowPlayerType, "输");
              this.UpdateEndGameData(1 - this.nowPlayerType, this.nowPlayerType);
              this.Players[this.nowPlayerType].IsSeriousFoul = true;
              (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                error: Error()
              }), GameData) : GameData).I.gameStop = true;
              return; // this.Players[this.nowPlayerType].IsFoul = true;
              // BallManager.I.ResetWhiteBallPos();
            }

            if ((_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.whiteBallFirstTouchBallType == -1) {
              // console.log("Player", this.nowPlayerType, "没有碰到任何球")
              (_crd && GameSceneUI === void 0 ? (_reportPossibleCrUseOfGameSceneUI({
                error: Error()
              }), GameSceneUI) : GameSceneUI).I.ShowTip("Didn't hit your object ball. ");
              this.Players[this.nowPlayerType].IsFoul = true; // BallManager.I.ResetWhiteBallPos();
            } else if (this.Players[this.nowPlayerType].TypeOfBallToBeHit != undefined && this.Players[this.nowPlayerType].TypeOfBallToBeHit != (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.whiteBallFirstTouchBallType) {
              // console.log("Player", this.nowPlayerType, "没有碰到目标球")
              (_crd && GameSceneUI === void 0 ? (_reportPossibleCrUseOfGameSceneUI({
                error: Error()
              }), GameSceneUI) : GameSceneUI).I.ShowTip("Hit opponent's object ball first.");
              this.Players[this.nowPlayerType].IsFoul = true; // BallManager.I.ResetWhiteBallPos();
            } else if (this.Players[this.nowPlayerType].TypeOfBallToBeHit == undefined && !this.IsFirstRound && (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.whiteBallFirstTouchBallType == (_crd && BallType === void 0 ? (_reportPossibleCrUseOfBallType({
              error: Error()
            }), BallType) : BallType).BLACKBALL) {
              // console.log("Player", this.nowPlayerType, "不是在开球时碰到了黑球");
              (_crd && GameSceneUI === void 0 ? (_reportPossibleCrUseOfGameSceneUI({
                error: Error()
              }), GameSceneUI) : GameSceneUI).I.ShowTip("Didn't hit your object ball. ");
              this.Players[this.nowPlayerType].IsFoul = true; // BallManager.I.ResetWhiteBallPos();
            }
          }
          /**判断当前是谁的回合 并初始化*/

        }, {
          key: "JudgeWhoseurn",
          value: function JudgeWhoseurn(roundType) {
            var _this3 = this;

            //判断当前是谁的回合 如果要换将要换成谁的回合
            var nowplayer = roundType == (_crd && RoundType === void 0 ? (_reportPossibleCrUseOfRoundType({
              error: Error()
            }), RoundType) : RoundType).Play1 ? (_crd && RoundType === void 0 ? (_reportPossibleCrUseOfRoundType({
              error: Error()
            }), RoundType) : RoundType).Play2 : (_crd && RoundType === void 0 ? (_reportPossibleCrUseOfRoundType({
              error: Error()
            }), RoundType) : RoundType).Play1;
            this.Players[roundType].RoundEnd();

            if (this.Players[roundType].IsSeriousFoul) {
              //更新游戏结束的数据 并显示弹窗
              this.UpdateEndGameData(nowplayer, 1 - nowplayer); // GameSceneUI.I.ShowTip("玩家" + roundType + "严重违规" + "玩家" + nowplayer + "赢得比赛");
              // console.log(roundType, "严重违规");
              // console.log("EndGame");
              // console.log("玩家", nowplayer, "赢得比赛");

              return roundType;
            } else if (this.Players[roundType].IsFoul) {
              // console.log("玩家", roundType, "违规");
              // GameSceneUI.I.ShowTip("玩家" + roundType + "违规,玩家" + (1 - roundType) + "的自由球")
              this.inHoleBallNumber = 0;
              (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.ResetWhiteBallPos();
              this.scheduleOnce(function () {
                if (nowplayer == _this3.thisPlayer) (_crd && GameSceneUI === void 0 ? (_reportPossibleCrUseOfGameSceneUI({
                  error: Error()
                }), GameSceneUI) : GameSceneUI).I.ShowTip2("Your Turn");else (_crd && GameSceneUI === void 0 ? (_reportPossibleCrUseOfGameSceneUI({
                  error: Error()
                }), GameSceneUI) : GameSceneUI).I.ShowTip2("The Opponent's Turn");
              }, 1);
              this.Players[nowplayer].IsStartFollow = true;
              this.Players[nowplayer].IsUnActiveGun = false;
              this.Players[nowplayer].IsFreeBall = true;
              this.Players[nowplayer].IsHaveBallRight = false;
              this.Players[nowplayer].IsRoundEnd = true;
              return nowplayer;
            } else if (this.Players[roundType].IsContinuousBatting) {
              // GameSceneUI.I.ShowTip("玩家" + roundType + "没有违规的情况下打进了目标球，有连续击球权")
              // console.log("玩家", roundType, "没有违规的情况下打进了目标球，有连续击球权");
              if (roundType == this.thisPlayer) (_crd && GameSceneUI === void 0 ? (_reportPossibleCrUseOfGameSceneUI({
                error: Error()
              }), GameSceneUI) : GameSceneUI).I.ShowTip2("Your Turn");else (_crd && GameSceneUI === void 0 ? (_reportPossibleCrUseOfGameSceneUI({
                error: Error()
              }), GameSceneUI) : GameSceneUI).I.ShowTip2("The Opponent's Turn");
              this.Players[roundType].IsHaveBallRight = true;
              return roundType;
            } else {
              if (nowplayer == this.thisPlayer) (_crd && GameSceneUI === void 0 ? (_reportPossibleCrUseOfGameSceneUI({
                error: Error()
              }), GameSceneUI) : GameSceneUI).I.ShowTip2("Your Turn");else (_crd && GameSceneUI === void 0 ? (_reportPossibleCrUseOfGameSceneUI({
                error: Error()
              }), GameSceneUI) : GameSceneUI).I.ShowTip2("The Opponent's Turn");
              this.Players[nowplayer].IsHaveBallRight = true;
              this.Players[nowplayer].IsStartFollow = true;
              this.Players[nowplayer].IsRoundEnd = true;
              return nowplayer;
            }
          }
          /**判断进球是否犯规，是否连续击球 */

        }, {
          key: "JudgeIsGoalBall",
          value: function JudgeIsGoalBall() {
            var GoalBallNumberLerp = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.GoalBalls.length - (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.GoalBallNumber;

            if ((_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.blackBallIsGoal) {
              //如果是在开球是将黑八打进 不做处理，重置黑八位置
              if (this.IsFirstRound) {
                (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.ResetBlackBallPos();
                (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.blackBallIsGoal = false;
                (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.BlackBall.active = true;
                (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.BlackBallComponent.isGoal = false;
              } //否则 接下来需要判断当前玩家的球是否打完，若打完则胜利，若没有打完则输
              else {
                  (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                    error: Error()
                  }), GameData) : GameData).I.gameStop = true;

                  if (this.JudgePlayerTargetBallIsOver() && !(_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                    error: Error()
                  }), BallManager) : BallManager).I.whiteBallComponent.isGoal) {
                    this.UpdateEndGameData(this.nowPlayerType, 1 - this.nowPlayerType);
                    (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                      error: Error()
                    }), GameData) : GameData).I.Winer = this.nowPlayerType;
                    console.log("玩家", this.nowPlayerType, "Win");
                    (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                      error: Error()
                    }), GameData) : GameData).I.gameStop = true;
                    if ((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                      error: Error()
                    }), GameData) : GameData).I.Winer == this.thisPlayer) (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
                      error: Error()
                    }), PopupManager) : PopupManager).I.ShowPopup(find("Canvas"), "WinPopup");else (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
                      error: Error()
                    }), PopupManager) : PopupManager).I.ShowPopup(find("Canvas"), "LosePopup");
                  } else {
                    this.UpdateEndGameData(1 - this.nowPlayerType, this.nowPlayerType);
                    console.log("玩家", this.nowPlayerType, "Lose");
                    (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                      error: Error()
                    }), GameData) : GameData).I.Winer = 1 - this.nowPlayerType;
                    this.Players[this.nowPlayerType].IsSeriousFoul = true;
                    (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                      error: Error()
                    }), GameData) : GameData).I.gameStop = true;
                    if ((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                      error: Error()
                    }), GameData) : GameData).I.Winer == this.thisPlayer) (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
                      error: Error()
                    }), PopupManager) : PopupManager).I.ShowPopup(find("Canvas"), "WinPopup");else (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
                      error: Error()
                    }), PopupManager) : PopupManager).I.ShowPopup(find("Canvas"), "LosePopup");
                  }
                }
            }

            if (GoalBallNumberLerp == 0) {
              console.log("没有进球");
              this.inHoleBallNumber = 0;
              this.Players[this.nowPlayerType].IsContinuousBatting = false;
            } else if (GoalBallNumberLerp == 1) {
              console.log("进球了1个球");

              if (this.IsFirstRound) {
                this.Players[this.nowPlayerType].IsContinuousBatting = true;
                (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.GoalBallNumber = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.GoalBalls.length;
                return;
              }

              if (this.Players[this.nowPlayerType].TypeOfBallToBeHit != 0 && this.Players[this.nowPlayerType].TypeOfBallToBeHit != 1 && this.Players[this.nowPlayerType].TypeOfBallToBeHit != 3) {
                console.log("这个进球是本局的第一个单独进球");
                this.Players[this.nowPlayerType].TypeOfBallToBeHit = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.GoalBalls[(_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.GoalBalls.length - 1].ballTpye;
                this.Players[1 - this.nowPlayerType].TypeOfBallToBeHit = 1 - (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.GoalBalls[(_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.GoalBalls.length - 1].ballTpye;
                console.log("玩家", 1 - this.nowPlayerType, "的球的类型是", this.Players[1 - this.nowPlayerType].TypeOfBallToBeHit);
                console.log("玩家", this.nowPlayerType, "的球的类型是", this.Players[this.nowPlayerType].TypeOfBallToBeHit);
                (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.GoalBallNumber = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.GoalBalls.length;
                this.Players[this.nowPlayerType].IsContinuousBatting = true;
              } else if (this.Players[this.nowPlayerType].TypeOfBallToBeHit != (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.GoalBalls[(_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.GoalBalls.length - 1].ballTpye) {
                console.log("打进的球不是目标球，不犯规，没有连续击球权");
                this.inHoleBallNumber = 0;
                this.Players[this.nowPlayerType].IsContinuousBatting = false;
                (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.GoalBallNumber = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.GoalBalls.length;
                return;
              }

              console.log("打进的球的类型为", (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.GoalBalls[(_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.GoalBalls.length - 1].ballTpye);
              console.log("目标类型为", this.Players[this.nowPlayerType].TypeOfBallToBeHit);
              (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.GoalBallNumber = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.GoalBalls.length;
              this.Players[this.nowPlayerType].IsContinuousBatting = true;
            } else if (GoalBallNumberLerp > 1) {
              if (this.IsFirstRound) {
                this.Players[this.nowPlayerType].IsContinuousBatting = true;
                (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.GoalBallNumber = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.GoalBalls.length;
                return;
              } //"进球不止一个 判断所有的进球是否类型相同，若相同决定球的类型，不相同继续击球但不决定击球类型");


              if (this.Players[this.nowPlayerType].TypeOfBallToBeHit != 0 && this.Players[this.nowPlayerType].TypeOfBallToBeHit != 1 && this.Players[this.nowPlayerType].TypeOfBallToBeHit != 3 && !this.IsFirstRound) {
                if (this.JudgeGoalBallIsSameType()) {
                  console.log("这个进球是本局的第一个连续进同样类型的球的进球");
                  this.Players[this.nowPlayerType].TypeOfBallToBeHit = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                    error: Error()
                  }), BallManager) : BallManager).I.GoalBalls[(_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                    error: Error()
                  }), BallManager) : BallManager).I.GoalBalls.length - 1].ballTpye;
                  this.Players[1 - this.nowPlayerType].TypeOfBallToBeHit = 1 - (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                    error: Error()
                  }), BallManager) : BallManager).I.GoalBalls[(_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                    error: Error()
                  }), BallManager) : BallManager).I.GoalBalls.length - 1].ballTpye;
                  console.log("玩家", 1 - this.nowPlayerType, "的球的类型是", this.Players[1 - this.nowPlayerType].TypeOfBallToBeHit);
                  console.log("玩家", this.nowPlayerType, "的球的类型是", this.Players[this.nowPlayerType].TypeOfBallToBeHit);
                  (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                    error: Error()
                  }), BallManager) : BallManager).I.GoalBallNumber = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                    error: Error()
                  }), BallManager) : BallManager).I.GoalBalls.length;
                  this.Players[this.nowPlayerType].IsContinuousBatting = true;
                } else {
                  (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                    error: Error()
                  }), BallManager) : BallManager).I.GoalBallNumber = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                    error: Error()
                  }), BallManager) : BallManager).I.GoalBalls.length;
                  this.Players[this.nowPlayerType].IsContinuousBatting = true;
                  return;
                }
              } else if (this.JudgeGoalBallIsTargetType()) {
                this.Players[this.nowPlayerType].IsContinuousBatting = true;
                (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.GoalBallNumber = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.GoalBalls.length;
                return;
              } else {
                (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.GoalBallNumber = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.GoalBalls.length;
                this.Players[this.nowPlayerType].IsContinuousBatting = false;
                this.inHoleBallNumber = 0;
                return;
              } // BallManager.I.GoalBallNumber = BallManager.I.GoalBalls.length;
              // this.Players[this.nowPlayerType].IsContinuousBatting = true;

            }
          }
          /**判断所有进球中的类型是否相同 */

        }, {
          key: "JudgeGoalBallIsSameType",
          value: function JudgeGoalBallIsSameType() {
            for (var i = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.GoalBallNumber; i < (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.GoalBalls.length; i++) {
              var element = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.GoalBalls[i];

              if ((_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.GoalBalls[(_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.GoalBallNumber].ballTpye != element.ballTpye) {
                return false;
              }
            }

            return true;
          }
          /**判断进球中是否有目标类型 */

        }, {
          key: "JudgeGoalBallIsTargetType",
          value: function JudgeGoalBallIsTargetType() {
            for (var i = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.GoalBallNumber; i < (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.GoalBalls.length; i++) {
              var element = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.GoalBalls[i];

              if (this.Players[this.nowPlayerType].TypeOfBallToBeHit == element.ballTpye) {
                return true;
              }
            }

            return false;
          }
          /**判断玩家的目标球是否已经打完了 */

        }, {
          key: "JudgePlayerTargetBallIsOver",
          value: function JudgePlayerTargetBallIsOver() {
            var sum = 0;
            if (this.Players[this.nowPlayerType].TypeOfBallToBeHit == 3) return true;

            for (var i = 0; i < (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.GoalBalls.length; i++) {
              var element = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.GoalBalls[i];

              if (element.ballTpye == this.Players[this.nowPlayerType].TypeOfBallToBeHit) {
                sum++;
              }
            }

            console.log("判断玩家的目标球是否已经打完了", sum);
            console.log("判断玩家的目标球是否已经打完了", (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.GoalBalls);

            if (sum == 7) {
              return true;
            } else {
              return false;
            }
          }
          /**更新游戏结束的数据 并显示弹窗 */

        }, {
          key: "UpdateEndGameData",
          value: function UpdateEndGameData(winPlayer, lostPlayer) {
            (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.SettlementData.winPlayer = winPlayer;
            (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.SettlementData.lostPlayer = lostPlayer;
          }
        }, {
          key: "ReturnMainScene",
          value: function ReturnMainScene() {
            // director.loadScene("MainScene");
            var popup = find("Canvas/TipPopup");

            if (!popup) {
              (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
                error: Error()
              }), PopupManager) : PopupManager).I.ShowPopup(find("Canvas"), "TipPopup", true);
            } else {
              (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
                error: Error()
              }), PopupManager) : PopupManager).I.ClosePopup(find("Canvas"), true, popup);
            }
          }
          /**显示球高亮 */

        }, {
          key: "ShowBallLight",
          value: function ShowBallLight() {
            if (this.nowPlayerType == this.thisPlayer) {
              if (this.Players[this.thisPlayer].TypeOfBallToBeHit != 0 && this.Players[this.thisPlayer].TypeOfBallToBeHit != 1 && this.Players[this.thisPlayer].TypeOfBallToBeHit != 3) {
                for (var i = 0; i < (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.AllBalls.length; i++) {
                  var ball = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                    error: Error()
                  }), BallManager) : BallManager).I.AllBalls[i];
                  var ballNode = ball.node.getChildByName("Light");
                  console.log(ballNode);

                  if (ball.ballTpye == 3) {
                    ballNode.active = false;
                  } else {
                    ballNode.active = true;
                  }
                }

                return;
              }

              for (var _i = 0; _i < (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.AllBalls.length; _i++) {
                var _ball = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                  error: Error()
                }), BallManager) : BallManager).I.AllBalls[_i];

                var _ballNode = _ball.node.getChildByName("Light");

                console.log(_ballNode);

                if (_ball.ballTpye == this.Players[this.thisPlayer].TypeOfBallToBeHit) {
                  _ballNode.active = true;
                } else {
                  _ballNode.active = false;
                }
              }
            }
          }
          /**关闭球高亮 */

        }, {
          key: "CloseBallLight",
          value: function CloseBallLight() {
            for (var i = 0; i < (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.AllBalls.length; i++) {
              var ball = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.AllBalls[i];
              var ballNode = ball.node.getChildByName("Light");
              ballNode.active = false;
            }
          }
        }, {
          key: "ShowCombo",
          value: function ShowCombo() {
            this.inHoleBallNumber++;
            console.log("连续进球数为: ", this.inHoleBallNumber);
            if (this.inHoleBallNumber == 0 || this.inHoleBallNumber == 1) return;

            for (var i = 0; i < this.combos.length; i++) {
              var element = this.combos[i];

              if (this.inHoleBallNumber - 2 == i) {
                element.node.setPosition(new Vec3(0, 0, 0));
                element.color = new Color(255, 255, 255, 255);
                element.node.active = true;
                tween(element.node).to(1, {
                  position: new Vec3(-170, 0, 0)
                }, {
                  easing: "circOut"
                }).start();
                tween(element.color).to(0.5, new Color(255, 255, 255, 255), {
                  easing: "circOut"
                }).start();
                tween(element.color).delay(1.3).to(0.5, new Color(255, 255, 255, 0), {
                  easing: "circOut"
                }).start();
              }
            }
          }
        }]);

        return GameSceneManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "combos", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0dhbWUvR2FtZUNvbW1vbi9HYW1lU2NlbmVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJWZWMzIiwiZmluZCIsIlNsaWRlckNvbXBvbmVudCIsIlNwcml0ZUNvbXBvbmVudCIsIkNvbG9yIiwidHdlZW4iLCJTZXJ2ZXJDb21tb24iLCJNS0V2ZW50RGlzcGF0Y2giLCJHYW1lRGF0YSIsIlBvcHVwTWFuYWdlciIsIkJhbGxNYW5hZ2VyIiwiQmFsbFR5cGUiLCJQbGF5ZXIiLCJSb2JvdENvbnRyb2xsZXIiLCJSb3VuZFR5cGUiLCJHYW1lU2NlbmVVSSIsIlBsYXllckNvbnRyb2xsZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHYW1lU2NlbmVNYW5hZ2VyIiwiUGxheWVycyIsIkFycmF5Iiwibm93UGxheWVyVHlwZSIsIlBsYXkxIiwidGhpc1BsYXllciIsIklzRmlyc3RSb3VuZCIsImluSG9sZUJhbGxOdW1iZXIiLCJJIiwibm9kZSIsImdldENvbXBvbmVudCIsIlBsYXllclR5cGUiLCJQbGF5MiIsImxvYWREYXRhIiwicGxheWVyVHlwZSIsImNvbnNvbGUiLCJsb2ciLCJJc0ZyZWVCYWxsIiwiZ2xvYWQiLCJzY2hlZHVsZU9uY2UiLCJTdGFydFJlY2tvblRpbWUiLCJTaG93VGlwMiIsImFkZEV2ZW50RGlzcGF0Y2giLCJvbiIsImFuZHJvaWRHb2JhY2siLCJiaW5kIiwib25BbmRyb2lkU3RvcCIsIm9uQW5kcm9pZFJlc3VtZSIsImdhbWVTdG9wIiwiUmV0dXJuTWFpblNjZW5lIiwicG9wdXAiLCJTaG93UG9wdXAiLCJDbG9zZVBvcHVwIiwiQW5kcm9pZFN0b3BUaW1lIiwiRGF0ZSIsIm5vdyIsIkFuZHJvaWRSZXN1bWVUaW1lIiwiSXNTZXJpb3VzRm91bCIsIldpbmVyIiwiSXNIaXRCYWxsIiwiRnJlZUJhbGxfVG91Y2hfRW5kIiwiYWN0aXZlIiwiQ2xvc2VGcmVlQmFsbCIsIkp1ZGdlRm91bCIsIkp1ZGdlSXNHb2FsQmFsbCIsIlR5cGVPZkJhbGxUb0JlSGl0IiwiQkxBQ0tCQUxMIiwiSnVkZ2VQbGF5ZXJUYXJnZXRCYWxsSXNPdmVyIiwic2hvd0JhbGwiLCJDbG9zZUJhbGxMaWdodCIsInNsaWRlciIsImVuYWJsZWQiLCJKdWRnZVdob3NldXJuIiwiU2hvd0JhbGxMaWdodCIsIlJlc2V0QmFsbCIsIlJlc2V0Rm91bCIsIklzRm91bCIsIndoaXRlQmFsbEZpcnN0VG91Y2hCYWxsVHlwZSIsIndoaXRlQmFsbENvbXBvbmVudCIsImlzR29hbCIsIkJsYWNrQmFsbENvbXBvbmVudCIsIlVwZGF0ZUVuZEdhbWVEYXRhIiwiU2hvd1RpcCIsInVuZGVmaW5lZCIsInJvdW5kVHlwZSIsIm5vd3BsYXllciIsIlJvdW5kRW5kIiwiUmVzZXRXaGl0ZUJhbGxQb3MiLCJJc1N0YXJ0Rm9sbG93IiwiSXNVbkFjdGl2ZUd1biIsIklzSGF2ZUJhbGxSaWdodCIsIklzUm91bmRFbmQiLCJJc0NvbnRpbnVvdXNCYXR0aW5nIiwiR29hbEJhbGxOdW1iZXJMZXJwIiwiR29hbEJhbGxzIiwibGVuZ3RoIiwiR29hbEJhbGxOdW1iZXIiLCJibGFja0JhbGxJc0dvYWwiLCJSZXNldEJsYWNrQmFsbFBvcyIsIkJsYWNrQmFsbCIsImJhbGxUcHllIiwiSnVkZ2VHb2FsQmFsbElzU2FtZVR5cGUiLCJKdWRnZUdvYWxCYWxsSXNUYXJnZXRUeXBlIiwiaSIsImVsZW1lbnQiLCJzdW0iLCJ3aW5QbGF5ZXIiLCJsb3N0UGxheWVyIiwiU2V0dGxlbWVudERhdGEiLCJBbGxCYWxscyIsImJhbGwiLCJiYWxsTm9kZSIsImdldENoaWxkQnlOYW1lIiwiY29tYm9zIiwic2V0UG9zaXRpb24iLCJjb2xvciIsInRvIiwicG9zaXRpb24iLCJlYXNpbmciLCJzdGFydCIsImRlbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLEksT0FBQUEsSTtBQUFZQyxNQUFBQSxJLE9BQUFBLEk7QUFBY0MsTUFBQUEsZSxPQUFBQSxlO0FBQTJCQyxNQUFBQSxlLE9BQUFBLGU7QUFBK0JDLE1BQUFBLEssT0FBQUEsSztBQUFPQyxNQUFBQSxLLE9BQUFBLEs7Ozs7QUFDeEhDLE1BQUFBLFkseUJBQUFBLFk7O0FBQ0ZDLE1BQUFBLGU7O0FBQ0VDLE1BQUFBLFEsZUFBQUEsUTs7QUFDQUMsTUFBQUEsWSx3QkFBQUEsWTs7QUFDQUMsTUFBQUEsVyxzQkFBQUEsVzs7QUFDQUMsTUFBQUEsUSxtQkFBQUEsUTs7QUFDQUMsTUFBQUEsTSxhQUFBQSxNOztBQUNBQyxNQUFBQSxlLHNCQUFBQSxlOztBQUNBQyxNQUFBQSxTLGdCQUFBQSxTOztBQUNBQyxNQUFBQSxXLG9CQUFBQSxXOztBQUNBQyxNQUFBQSxnQix5QkFBQUEsZ0I7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCbkIsVSxDQUF0Qm1CLE87QUFBU0MsTUFBQUEsUSxHQUFhcEIsVSxDQUFib0IsUTs7a0NBR0pDLGdCLFdBRFpGLE9BQU8sQ0FBQyxrQkFBRCxDLFVBYUhDLFFBQVEsQ0FBQ2YsZUFBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Z0JBVFRpQixPLEdBQXlCLElBQUlDLEtBQUosQ0FBa0IsQ0FBbEIsQztnQkFFbEJDLGEsR0FBMkI7QUFBQTtBQUFBLHNDQUFVQyxLO2dCQUVyQ0MsVSxHQUF3QjtBQUFBO0FBQUEsc0NBQVVELEs7Z0JBRXpDRSxZLEdBQXdCLEk7Z0JBRXhCQyxnQixHQUEyQixDOzs7Ozs7Ozs7cUNBSWhCO0FBQUE7O0FBQ1BQLFlBQUFBLGdCQUFnQixDQUFDUSxDQUFqQixHQUFxQixLQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJWLGdCQUF2QixDQUFyQjtBQUNBLGlCQUFLQyxPQUFMLENBQWEsQ0FBYixJQUFrQjtBQUFBO0FBQUEsbUNBQWxCO0FBQ0EsaUJBQUtBLE9BQUwsQ0FBYSxDQUFiLElBQWtCO0FBQUE7QUFBQSxtQ0FBbEI7QUFDQSxpQkFBS0EsT0FBTCxDQUFhLENBQWIsRUFBZ0JVLFVBQWhCLEdBQTZCO0FBQUE7QUFBQSx3Q0FBVVAsS0FBdkM7QUFDQSxpQkFBS0gsT0FBTCxDQUFhLENBQWIsRUFBZ0JVLFVBQWhCLEdBQTZCO0FBQUE7QUFBQSx3Q0FBVUMsS0FBdkM7QUFDQSxpQkFBS1QsYUFBTCxHQUFxQjtBQUFBO0FBQUEsc0NBQVNLLENBQVQsQ0FBV0ssUUFBWCxDQUFvQlYsYUFBekM7QUFDQSxpQkFBS0UsVUFBTCxHQUFrQjtBQUFBO0FBQUEsc0NBQVNHLENBQVQsQ0FBV0ssUUFBWCxDQUFvQlIsVUFBdEM7QUFDQTtBQUFBO0FBQUEsb0RBQWdCRyxDQUFoQixDQUFrQk0sVUFBbEIsR0FBK0IsSUFBSTtBQUFBO0FBQUEsc0NBQVNOLENBQVQsQ0FBV0ssUUFBWCxDQUFvQlIsVUFBdkQ7QUFDQVUsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS2IsYUFBTCxJQUFzQixDQUF0QixHQUEwQixLQUExQixHQUFrQyxLQUE5QyxFQUFxRCxJQUFyRDtBQUNBLGlCQUFLRixPQUFMLENBQWEsS0FBS0UsYUFBbEIsRUFBaUNjLFVBQWpDLEdBQThDLElBQTlDLENBVk8sQ0FXUDs7QUFDQTtBQUFBO0FBQUEsOENBQWFDLEtBQWIsQ0FBbUIsR0FBbkIsRUFBd0IsS0FBeEI7QUFDQSxpQkFBS0MsWUFBTCxDQUFrQixZQUFNO0FBQ3BCO0FBQUE7QUFBQSw4Q0FBWVgsQ0FBWixDQUFjWSxlQUFkO0FBQ0Esa0JBQUksTUFBSSxDQUFDakIsYUFBTCxJQUFzQixNQUFJLENBQUNFLFVBQS9CLEVBQ0k7QUFBQTtBQUFBLDhDQUFZRyxDQUFaLENBQWNhLFFBQWQsQ0FBdUIsV0FBdkIsRUFESixLQUdJO0FBQUE7QUFBQSw4Q0FBWWIsQ0FBWixDQUFjYSxRQUFkLENBQXVCLHFCQUF2QjtBQUNQLGFBTkQsRUFNRyxDQU5IO0FBT0EsaUJBQUtDLGdCQUFMO0FBQ0g7Ozs2Q0FFa0I7QUFDZjtBQUFBO0FBQUEsb0RBQWdCZCxDQUFoQixDQUFrQmUsRUFBbEIsQ0FBcUIsZUFBckIsRUFBc0MsS0FBS0MsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBdEMsRUFBcUUsSUFBckU7QUFDQTtBQUFBO0FBQUEsb0RBQWdCakIsQ0FBaEIsQ0FBa0JlLEVBQWxCLENBQXFCLGVBQXJCLEVBQXNDLEtBQUtHLGFBQUwsQ0FBbUJELElBQW5CLENBQXdCLElBQXhCLENBQXRDLEVBQXFFLElBQXJFO0FBQ0E7QUFBQTtBQUFBLG9EQUFnQmpCLENBQWhCLENBQWtCZSxFQUFsQixDQUFxQixpQkFBckIsRUFBd0MsS0FBS0ksZUFBTCxDQUFxQkYsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBeEMsRUFBeUUsSUFBekU7QUFDSCxXLENBQ0Q7Ozs7MENBQ2dCO0FBQ1osZ0JBQUksQ0FBQztBQUFBO0FBQUEsc0NBQVNqQixDQUFULENBQVdvQixRQUFoQixFQUNJLEtBQUtDLGVBQUwsR0FESixLQUVLO0FBQ0Qsa0JBQUlDLEtBQUssR0FBR2hELElBQUksQ0FBQyxxQkFBRCxDQUFoQjs7QUFDQSxrQkFBSSxDQUFDZ0QsS0FBTCxFQUFZO0FBQ1I7QUFBQTtBQUFBLGtEQUFhdEIsQ0FBYixDQUFldUIsU0FBZixDQUF5QmpELElBQUksQ0FBQyxRQUFELENBQTdCLEVBQXlDLGNBQXpDLEVBQXlELElBQXpEO0FBQ0gsZUFGRCxNQUVPO0FBQ0g7QUFBQTtBQUFBLGtEQUFhMEIsQ0FBYixDQUFld0IsVUFBZixDQUEwQmxELElBQUksQ0FBQyxRQUFELENBQTlCLEVBQTBDLElBQTFDLEVBQWdEZ0QsS0FBaEQ7QUFDSDtBQUNKO0FBQ0o7OztBQUdEOzBDQUNnQjtBQUNaZixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaO0FBQ0EsaUJBQUtpQixlQUFMLEdBQXVCQyxJQUFJLENBQUNDLEdBQUwsRUFBdkI7QUFDSCxXLENBQ0Q7Ozs7NENBQ2tCO0FBQ2RwQixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0EsaUJBQUtvQixpQkFBTCxHQUF5QkYsSUFBSSxDQUFDQyxHQUFMLEVBQXpCOztBQUNBLGdCQUFJLENBQUM7QUFBQTtBQUFBLHNDQUFTM0IsQ0FBVCxDQUFXb0IsUUFBaEIsRUFBMEI7QUFDdEIsa0JBQUksQ0FBQyxLQUFLUSxpQkFBTCxHQUF5QixLQUFLSCxlQUEvQixJQUFrRCxJQUFsRCxHQUF5RCxHQUE3RCxFQUFrRTtBQUM5RGxCLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBO0FBQUE7QUFBQSwwQ0FBU1IsQ0FBVCxDQUFXb0IsUUFBWCxHQUFzQixJQUF0QjtBQUNBNUIsZ0JBQUFBLGdCQUFnQixDQUFDUSxDQUFqQixDQUFtQlAsT0FBbkIsQ0FBMkJELGdCQUFnQixDQUFDUSxDQUFqQixDQUFtQkgsVUFBOUMsRUFBMERnQyxhQUExRCxHQUEwRSxJQUExRTtBQUNBdEIsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JoQixnQkFBZ0IsQ0FBQ1EsQ0FBakIsQ0FBbUJILFVBQXZDLEVBQW1ELElBQW5EO0FBQ0E7QUFBQTtBQUFBLDBDQUFTRyxDQUFULENBQVc4QixLQUFYLEdBQW1CLElBQUl0QyxnQkFBZ0IsQ0FBQ1EsQ0FBakIsQ0FBbUJILFVBQTFDO0FBQ0E7QUFBQTtBQUFBLGtEQUFhRyxDQUFiLENBQWV1QixTQUFmLENBQXlCakQsSUFBSSxDQUFDLFFBQUQsQ0FBN0IsRUFBeUMsV0FBekM7QUFDSDtBQUNKO0FBQ0o7QUFFRDs7Ozt5Q0FDd0I7QUFDcEIsbUJBQU8sS0FBS3FCLGFBQUwsSUFBc0IsS0FBS0UsVUFBM0IsSUFDQSxLQUFLSixPQUFMLENBQWEsS0FBS0UsYUFBbEIsRUFBaUNvQyxTQUFqQyxJQUE4QyxLQURyRDtBQUVIO0FBRUQ7Ozs7aURBQ3VCO0FBQ25CeEIsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQixLQUFLYixhQUEzQixFQUEwQyxNQUExQzs7QUFDQSxnQkFBSUgsZ0JBQWdCLENBQUNRLENBQWpCLENBQW1CUCxPQUFuQixDQUEyQkQsZ0JBQWdCLENBQUNRLENBQWpCLENBQW1CTCxhQUE5QyxFQUE2RGMsVUFBakUsRUFBNkU7QUFDekU7QUFBQTtBQUFBLHdEQUFpQlQsQ0FBakIsQ0FBbUJnQyxrQkFBbkIsQ0FBc0MsSUFBdEM7QUFDQTFELGNBQUFBLElBQUksQ0FBQyxpQkFBRCxDQUFKLENBQXdCMkQsTUFBeEIsR0FBaUMsS0FBakM7QUFDQTtBQUFBO0FBQUEsOENBQVlqQyxDQUFaLENBQWNrQyxhQUFkO0FBQ0ExQyxjQUFBQSxnQkFBZ0IsQ0FBQ1EsQ0FBakIsQ0FBbUJQLE9BQW5CLENBQTJCRCxnQkFBZ0IsQ0FBQ1EsQ0FBakIsQ0FBbUJMLGFBQTlDLEVBQTZEYyxVQUE3RCxHQUEwRSxLQUExRTtBQUNIOztBQUNERixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWhCLGdCQUFnQixDQUFDUSxDQUFqQixDQUFtQlAsT0FBbkIsQ0FBMkJELGdCQUFnQixDQUFDUSxDQUFqQixDQUFtQkwsYUFBOUMsRUFBNkRjLFVBQXpFO0FBQ0FGLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0IsS0FBS2IsYUFBM0IsRUFBMEMsV0FBMUM7QUFDQSxpQkFBS3dDLFNBQUw7QUFDQSxpQkFBS0MsZUFBTDs7QUFDQSxnQkFBSSxLQUFLdEMsWUFBVCxFQUF1QjtBQUNuQixtQkFBS0EsWUFBTCxHQUFvQixLQUFwQjtBQUNIO0FBQ0Q7OztBQUNBLGdCQUFJLEtBQUtMLE9BQUwsQ0FBYSxLQUFLRSxhQUFsQixFQUFpQzBDLGlCQUFqQyxJQUFzRDtBQUFBO0FBQUEsc0NBQVNDLFNBQS9ELElBQTRFLEtBQUtDLDJCQUFMLEVBQWhGLEVBQW9IO0FBQ2hILG1CQUFLOUMsT0FBTCxDQUFhLEtBQUtFLGFBQWxCLEVBQWlDMEMsaUJBQWpDLEdBQXFEO0FBQUE7QUFBQSx3Q0FBU0MsU0FBOUQ7QUFDSDs7QUFDRDtBQUFBO0FBQUEsNENBQVl0QyxDQUFaLENBQWN3QyxRQUFkO0FBQ0EsZ0JBQUk7QUFBQTtBQUFBLHNDQUFTeEMsQ0FBVCxDQUFXb0IsUUFBZixFQUF5QjtBQUN6QixpQkFBS3FCLGNBQUw7QUFDQTtBQUFBO0FBQUEsc0RBQWlCekMsQ0FBakIsQ0FBbUIwQyxNQUFuQixDQUEwQkMsT0FBMUIsR0FBb0MsS0FBcEMsQ0F0Qm1CLENBdUJuQjs7QUFDQSxpQkFBS2hELGFBQUwsR0FBcUIsS0FBS2lELGFBQUwsQ0FBbUIsS0FBS2pELGFBQXhCLENBQXJCO0FBQ0FZLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZaEIsZ0JBQWdCLENBQUNRLENBQWpCLENBQW1CUCxPQUFuQixDQUEyQkQsZ0JBQWdCLENBQUNRLENBQWpCLENBQW1CTCxhQUE5QyxFQUE2RGMsVUFBekU7QUFDQW5DLFlBQUFBLElBQUksQ0FBQyxjQUFELENBQUosQ0FBcUIyRCxNQUFyQixHQUE4QixJQUE5QjtBQUNBM0QsWUFBQUEsSUFBSSxDQUFDLE1BQUQsQ0FBSixDQUFhMkQsTUFBYixHQUFzQixJQUF0Qjs7QUFDQSxnQkFBSSxLQUFLeEMsT0FBTCxDQUFhLEtBQUtFLGFBQWxCLEVBQWlDMEMsaUJBQWpDLElBQXNEO0FBQUE7QUFBQSxzQ0FBU0MsU0FBL0QsSUFBNEUsS0FBS0MsMkJBQUwsRUFBaEYsRUFBb0g7QUFDaEgsbUJBQUs5QyxPQUFMLENBQWEsS0FBS0UsYUFBbEIsRUFBaUMwQyxpQkFBakMsR0FBcUQ7QUFBQTtBQUFBLHdDQUFTQyxTQUE5RDtBQUNIOztBQUNELGlCQUFLTyxhQUFMLEdBL0JtQixDQWdDbkI7O0FBQ0E7QUFBQTtBQUFBLDRDQUFZN0MsQ0FBWixDQUFjWSxlQUFkOztBQUNBLGdCQUFJLEtBQUtqQixhQUFMLElBQXNCLEtBQUtFLFVBQS9CLEVBQTJDO0FBQ3ZDdkIsY0FBQUEsSUFBSSxDQUFDLGVBQUQsQ0FBSixDQUFzQjRCLFlBQXRCLENBQW1DM0IsZUFBbkMsRUFBb0RvRSxPQUFwRCxHQUE4RCxJQUE5RDtBQUNBckUsY0FBQUEsSUFBSSxDQUFDLGlCQUFELENBQUosQ0FBd0IyRCxNQUF4QixHQUFpQyxJQUFqQztBQUNIOztBQUNEO0FBQUE7QUFBQSw0Q0FBWWpDLENBQVosQ0FBYzhDLFNBQWQ7QUFDQSxpQkFBS0MsU0FBTDtBQUNBeEMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQixLQUFLYixhQUEzQixFQUEwQyxNQUExQztBQUNBWSxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLEtBQUtiLGFBQTNCLEVBQTBDLFFBQTFDLEVBQW9ELEtBQUtGLE9BQUwsQ0FBYSxLQUFLRSxhQUFsQixFQUFpQzBDLGlCQUFyRjtBQUVBLGlCQUFLNUMsT0FBTCxDQUFhLEtBQUtFLGFBQWxCLEVBQWlDb0MsU0FBakMsR0FBNkMsS0FBN0MsQ0EzQ21CLENBNENuQjtBQUNIO0FBQ0Q7Ozs7c0NBQ1k7QUFDUnhCLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0IsT0FBdEIsRUFBK0IsS0FBS2IsYUFBcEMsRUFBbUQsS0FBbkQsRUFBMEQsUUFBMUQsRUFBb0UsSUFBSSxLQUFLQSxhQUE3RSxFQUE0RixPQUE1RjtBQUNBLGlCQUFLRixPQUFMLENBQWEsSUFBSSxLQUFLRSxhQUF0QixFQUFxQ3FELE1BQXJDLEdBQThDLEtBQTlDO0FBQ0g7QUFDRDs7OztzQ0FDWTtBQUNSO0FBQ0F6QyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFBO0FBQUEsNENBQVlSLENBQVosQ0FBY2lELDJCQUExQjs7QUFDQSxnQkFBSSxLQUFLeEQsT0FBTCxDQUFhLEtBQUtFLGFBQWxCLEVBQWlDa0MsYUFBckMsRUFBb0Q7QUFDaER0QixjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CLEtBQUtiLGFBQXpCLEVBQXdDLElBQXhDO0FBQ0E7QUFDSDs7QUFDRCxnQkFBSSxDQUFDSCxnQkFBZ0IsQ0FBQ1EsQ0FBakIsQ0FBbUJQLE9BQW5CLENBQTJCRCxnQkFBZ0IsQ0FBQ1EsQ0FBakIsQ0FBbUJMLGFBQTlDLEVBQTZEb0MsU0FBbEUsRUFBNkU7QUFDekUsbUJBQUt0QyxPQUFMLENBQWEsS0FBS0UsYUFBbEIsRUFBaUNxRCxNQUFqQyxHQUEwQyxJQUExQztBQUNIOztBQUNELGdCQUFJO0FBQUE7QUFBQSw0Q0FBWWhELENBQVosQ0FBY2tELGtCQUFkLENBQWlDQyxNQUFyQyxFQUE2QztBQUN6QyxtQkFBSzFELE9BQUwsQ0FBYSxLQUFLRSxhQUFsQixFQUFpQ3FELE1BQWpDLEdBQTBDLElBQTFDO0FBQ0g7O0FBQ0QsZ0JBQUk7QUFBQTtBQUFBLDRDQUFZaEQsQ0FBWixDQUFjb0Qsa0JBQWQsQ0FBaUNELE1BQWpDLElBQTJDO0FBQUE7QUFBQSw0Q0FBWW5ELENBQVosQ0FBY2tELGtCQUFkLENBQWlDQyxNQUFoRixFQUF3RjtBQUNwRjtBQUNBO0FBQ0EsbUJBQUtFLGlCQUFMLENBQXVCLElBQUksS0FBSzFELGFBQWhDLEVBQStDLEtBQUtBLGFBQXBEO0FBQ0EsbUJBQUtGLE9BQUwsQ0FBYSxLQUFLRSxhQUFsQixFQUFpQ2tDLGFBQWpDLEdBQWlELElBQWpEO0FBQ0E7QUFBQTtBQUFBLHdDQUFTN0IsQ0FBVCxDQUFXb0IsUUFBWCxHQUFzQixJQUF0QjtBQUNBLHFCQU5vRixDQU9wRjtBQUNBO0FBQ0g7O0FBQ0QsZ0JBQUk7QUFBQTtBQUFBLDRDQUFZcEIsQ0FBWixDQUFjaUQsMkJBQWQsSUFBNkMsQ0FBQyxDQUFsRCxFQUFxRDtBQUNqRDtBQUNBO0FBQUE7QUFBQSw4Q0FBWWpELENBQVosQ0FBY3NELE9BQWQsQ0FBc0IsK0JBQXRCO0FBQ0EsbUJBQUs3RCxPQUFMLENBQWEsS0FBS0UsYUFBbEIsRUFBaUNxRCxNQUFqQyxHQUEwQyxJQUExQyxDQUhpRCxDQUlqRDtBQUNILGFBTEQsTUFLTyxJQUFJLEtBQUt2RCxPQUFMLENBQWEsS0FBS0UsYUFBbEIsRUFBaUMwQyxpQkFBakMsSUFBc0RrQixTQUF0RCxJQUFtRSxLQUFLOUQsT0FBTCxDQUFhLEtBQUtFLGFBQWxCLEVBQWlDMEMsaUJBQWpDLElBQXNEO0FBQUE7QUFBQSw0Q0FBWXJDLENBQVosQ0FBY2lELDJCQUEzSSxFQUF3SztBQUMzSztBQUNBO0FBQUE7QUFBQSw4Q0FBWWpELENBQVosQ0FBY3NELE9BQWQsQ0FBc0IsbUNBQXRCO0FBQ0EsbUJBQUs3RCxPQUFMLENBQWEsS0FBS0UsYUFBbEIsRUFBaUNxRCxNQUFqQyxHQUEwQyxJQUExQyxDQUgySyxDQUkzSztBQUNILGFBTE0sTUFLQSxJQUFJLEtBQUt2RCxPQUFMLENBQWEsS0FBS0UsYUFBbEIsRUFBaUMwQyxpQkFBakMsSUFBc0RrQixTQUF0RCxJQUFtRSxDQUFDLEtBQUt6RCxZQUF6RSxJQUF5RjtBQUFBO0FBQUEsNENBQVlFLENBQVosQ0FBY2lELDJCQUFkLElBQTZDO0FBQUE7QUFBQSxzQ0FBU1gsU0FBbkosRUFBOEo7QUFDaks7QUFDQTtBQUFBO0FBQUEsOENBQVl0QyxDQUFaLENBQWNzRCxPQUFkLENBQXNCLCtCQUF0QjtBQUNBLG1CQUFLN0QsT0FBTCxDQUFhLEtBQUtFLGFBQWxCLEVBQWlDcUQsTUFBakMsR0FBMEMsSUFBMUMsQ0FIaUssQ0FJaks7QUFDSDtBQUVKO0FBQ0Q7Ozs7d0NBQ2NRLFMsRUFBaUM7QUFBQTs7QUFDM0M7QUFDQSxnQkFBSUMsU0FBUyxHQUFHRCxTQUFTLElBQUk7QUFBQTtBQUFBLHdDQUFVNUQsS0FBdkIsR0FBK0I7QUFBQTtBQUFBLHdDQUFVUSxLQUF6QyxHQUFpRDtBQUFBO0FBQUEsd0NBQVVSLEtBQTNFO0FBQ0EsaUJBQUtILE9BQUwsQ0FBYStELFNBQWIsRUFBd0JFLFFBQXhCOztBQUNBLGdCQUFJLEtBQUtqRSxPQUFMLENBQWErRCxTQUFiLEVBQXdCM0IsYUFBNUIsRUFBMkM7QUFDdkM7QUFDQSxtQkFBS3dCLGlCQUFMLENBQXVCSSxTQUF2QixFQUFrQyxJQUFJQSxTQUF0QyxFQUZ1QyxDQUd2QztBQUNBO0FBQ0E7QUFDQTs7QUFDQSxxQkFBT0QsU0FBUDtBQUNILGFBUkQsTUFRTyxJQUFJLEtBQUsvRCxPQUFMLENBQWErRCxTQUFiLEVBQXdCUixNQUE1QixFQUFvQztBQUN2QztBQUNBO0FBQ0EsbUJBQUtqRCxnQkFBTCxHQUF3QixDQUF4QjtBQUNBO0FBQUE7QUFBQSw4Q0FBWUMsQ0FBWixDQUFjMkQsaUJBQWQ7QUFDQSxtQkFBS2hELFlBQUwsQ0FBa0IsWUFBTTtBQUNwQixvQkFBSThDLFNBQVMsSUFBSSxNQUFJLENBQUM1RCxVQUF0QixFQUNJO0FBQUE7QUFBQSxnREFBWUcsQ0FBWixDQUFjYSxRQUFkLENBQXVCLFdBQXZCLEVBREosS0FHSTtBQUFBO0FBQUEsZ0RBQVliLENBQVosQ0FBY2EsUUFBZCxDQUF1QixxQkFBdkI7QUFDUCxlQUxELEVBS0csQ0FMSDtBQU1BLG1CQUFLcEIsT0FBTCxDQUFhZ0UsU0FBYixFQUF3QkcsYUFBeEIsR0FBd0MsSUFBeEM7QUFDQSxtQkFBS25FLE9BQUwsQ0FBYWdFLFNBQWIsRUFBd0JJLGFBQXhCLEdBQXdDLEtBQXhDO0FBQ0EsbUJBQUtwRSxPQUFMLENBQWFnRSxTQUFiLEVBQXdCaEQsVUFBeEIsR0FBcUMsSUFBckM7QUFDQSxtQkFBS2hCLE9BQUwsQ0FBYWdFLFNBQWIsRUFBd0JLLGVBQXhCLEdBQTBDLEtBQTFDO0FBQ0EsbUJBQUtyRSxPQUFMLENBQWFnRSxTQUFiLEVBQXdCTSxVQUF4QixHQUFxQyxJQUFyQztBQUNBLHFCQUFPTixTQUFQO0FBQ0gsYUFqQk0sTUFpQkEsSUFBSSxLQUFLaEUsT0FBTCxDQUFhK0QsU0FBYixFQUF3QlEsbUJBQTVCLEVBQWlEO0FBQ3BEO0FBQ0E7QUFDQSxrQkFBSVIsU0FBUyxJQUFJLEtBQUszRCxVQUF0QixFQUNJO0FBQUE7QUFBQSw4Q0FBWUcsQ0FBWixDQUFjYSxRQUFkLENBQXVCLFdBQXZCLEVBREosS0FHSTtBQUFBO0FBQUEsOENBQVliLENBQVosQ0FBY2EsUUFBZCxDQUF1QixxQkFBdkI7QUFDSixtQkFBS3BCLE9BQUwsQ0FBYStELFNBQWIsRUFBd0JNLGVBQXhCLEdBQTBDLElBQTFDO0FBQ0EscUJBQU9OLFNBQVA7QUFDSCxhQVRNLE1BU0E7QUFDSCxrQkFBSUMsU0FBUyxJQUFJLEtBQUs1RCxVQUF0QixFQUNJO0FBQUE7QUFBQSw4Q0FBWUcsQ0FBWixDQUFjYSxRQUFkLENBQXVCLFdBQXZCLEVBREosS0FHSTtBQUFBO0FBQUEsOENBQVliLENBQVosQ0FBY2EsUUFBZCxDQUF1QixxQkFBdkI7QUFDSixtQkFBS3BCLE9BQUwsQ0FBYWdFLFNBQWIsRUFBd0JLLGVBQXhCLEdBQTBDLElBQTFDO0FBQ0EsbUJBQUtyRSxPQUFMLENBQWFnRSxTQUFiLEVBQXdCRyxhQUF4QixHQUF3QyxJQUF4QztBQUNBLG1CQUFLbkUsT0FBTCxDQUFhZ0UsU0FBYixFQUF3Qk0sVUFBeEIsR0FBcUMsSUFBckM7QUFDQSxxQkFBT04sU0FBUDtBQUNIO0FBQ0o7QUFDRDs7Ozs0Q0FDa0I7QUFDZCxnQkFBSVEsa0JBQWtCLEdBQUc7QUFBQTtBQUFBLDRDQUFZakUsQ0FBWixDQUFja0UsU0FBZCxDQUF3QkMsTUFBeEIsR0FBaUM7QUFBQTtBQUFBLDRDQUFZbkUsQ0FBWixDQUFjb0UsY0FBeEU7O0FBQ0EsZ0JBQUk7QUFBQTtBQUFBLDRDQUFZcEUsQ0FBWixDQUFjcUUsZUFBbEIsRUFBbUM7QUFDL0I7QUFDQSxrQkFBSSxLQUFLdkUsWUFBVCxFQUF1QjtBQUNuQjtBQUFBO0FBQUEsZ0RBQVlFLENBQVosQ0FBY3NFLGlCQUFkO0FBQ0E7QUFBQTtBQUFBLGdEQUFZdEUsQ0FBWixDQUFjcUUsZUFBZCxHQUFnQyxLQUFoQztBQUNBO0FBQUE7QUFBQSxnREFBWXJFLENBQVosQ0FBY3VFLFNBQWQsQ0FBd0J0QyxNQUF4QixHQUFpQyxJQUFqQztBQUNBO0FBQUE7QUFBQSxnREFBWWpDLENBQVosQ0FBY29ELGtCQUFkLENBQWlDRCxNQUFqQyxHQUEwQyxLQUExQztBQUNILGVBTEQsQ0FNQTtBQU5BLG1CQU9LO0FBQ0Q7QUFBQTtBQUFBLDRDQUFTbkQsQ0FBVCxDQUFXb0IsUUFBWCxHQUFzQixJQUF0Qjs7QUFDQSxzQkFBSSxLQUFLbUIsMkJBQUwsTUFBc0MsQ0FBQztBQUFBO0FBQUEsa0RBQVl2QyxDQUFaLENBQWNrRCxrQkFBZCxDQUFpQ0MsTUFBNUUsRUFBb0Y7QUFDaEYseUJBQUtFLGlCQUFMLENBQXVCLEtBQUsxRCxhQUE1QixFQUEyQyxJQUFJLEtBQUtBLGFBQXBEO0FBQ0E7QUFBQTtBQUFBLDhDQUFTSyxDQUFULENBQVc4QixLQUFYLEdBQW1CLEtBQUtuQyxhQUF4QjtBQUNBWSxvQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWixFQUFrQixLQUFLYixhQUF2QixFQUFzQyxLQUF0QztBQUNBO0FBQUE7QUFBQSw4Q0FBU0ssQ0FBVCxDQUFXb0IsUUFBWCxHQUFzQixJQUF0QjtBQUNBLHdCQUFJO0FBQUE7QUFBQSw4Q0FBU3BCLENBQVQsQ0FBVzhCLEtBQVgsSUFBb0IsS0FBS2pDLFVBQTdCLEVBQ0k7QUFBQTtBQUFBLHNEQUFhRyxDQUFiLENBQWV1QixTQUFmLENBQXlCakQsSUFBSSxDQUFDLFFBQUQsQ0FBN0IsRUFBeUMsVUFBekMsRUFESixLQUdJO0FBQUE7QUFBQSxzREFBYTBCLENBQWIsQ0FBZXVCLFNBQWYsQ0FBeUJqRCxJQUFJLENBQUMsUUFBRCxDQUE3QixFQUF5QyxXQUF6QztBQUNQLG1CQVRELE1BU087QUFDSCx5QkFBSytFLGlCQUFMLENBQXVCLElBQUksS0FBSzFELGFBQWhDLEVBQStDLEtBQUtBLGFBQXBEO0FBQ0FZLG9CQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaLEVBQWtCLEtBQUtiLGFBQXZCLEVBQXNDLE1BQXRDO0FBQ0E7QUFBQTtBQUFBLDhDQUFTSyxDQUFULENBQVc4QixLQUFYLEdBQW1CLElBQUksS0FBS25DLGFBQTVCO0FBQ0EseUJBQUtGLE9BQUwsQ0FBYSxLQUFLRSxhQUFsQixFQUFpQ2tDLGFBQWpDLEdBQWlELElBQWpEO0FBQ0E7QUFBQTtBQUFBLDhDQUFTN0IsQ0FBVCxDQUFXb0IsUUFBWCxHQUFzQixJQUF0QjtBQUNBLHdCQUFJO0FBQUE7QUFBQSw4Q0FBU3BCLENBQVQsQ0FBVzhCLEtBQVgsSUFBb0IsS0FBS2pDLFVBQTdCLEVBQ0k7QUFBQTtBQUFBLHNEQUFhRyxDQUFiLENBQWV1QixTQUFmLENBQXlCakQsSUFBSSxDQUFDLFFBQUQsQ0FBN0IsRUFBeUMsVUFBekMsRUFESixLQUdJO0FBQUE7QUFBQSxzREFBYTBCLENBQWIsQ0FBZXVCLFNBQWYsQ0FBeUJqRCxJQUFJLENBQUMsUUFBRCxDQUE3QixFQUF5QyxXQUF6QztBQUNQO0FBQ0o7QUFDSjs7QUFDRCxnQkFBSTJGLGtCQUFrQixJQUFJLENBQTFCLEVBQTZCO0FBQ3pCMUQsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBLG1CQUFLVCxnQkFBTCxHQUF3QixDQUF4QjtBQUNBLG1CQUFLTixPQUFMLENBQWEsS0FBS0UsYUFBbEIsRUFBaUNxRSxtQkFBakMsR0FBdUQsS0FBdkQ7QUFDSCxhQUpELE1BSU8sSUFBSUMsa0JBQWtCLElBQUksQ0FBMUIsRUFBNkI7QUFDaEMxRCxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaOztBQUNBLGtCQUFJLEtBQUtWLFlBQVQsRUFBdUI7QUFDbkIscUJBQUtMLE9BQUwsQ0FBYSxLQUFLRSxhQUFsQixFQUFpQ3FFLG1CQUFqQyxHQUF1RCxJQUF2RDtBQUNBO0FBQUE7QUFBQSxnREFBWWhFLENBQVosQ0FBY29FLGNBQWQsR0FBK0I7QUFBQTtBQUFBLGdEQUFZcEUsQ0FBWixDQUFja0UsU0FBZCxDQUF3QkMsTUFBdkQ7QUFDQTtBQUNIOztBQUNELGtCQUFJLEtBQUsxRSxPQUFMLENBQWEsS0FBS0UsYUFBbEIsRUFBaUMwQyxpQkFBakMsSUFBc0QsQ0FBdEQsSUFBMkQsS0FBSzVDLE9BQUwsQ0FBYSxLQUFLRSxhQUFsQixFQUFpQzBDLGlCQUFqQyxJQUFzRCxDQUFqSCxJQUFzSCxLQUFLNUMsT0FBTCxDQUFhLEtBQUtFLGFBQWxCLEVBQWlDMEMsaUJBQWpDLElBQXNELENBQWhMLEVBQW1MO0FBQy9LOUIsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0EscUJBQUtmLE9BQUwsQ0FBYSxLQUFLRSxhQUFsQixFQUFpQzBDLGlCQUFqQyxHQUFxRDtBQUFBO0FBQUEsZ0RBQVlyQyxDQUFaLENBQWNrRSxTQUFkLENBQXdCO0FBQUE7QUFBQSxnREFBWWxFLENBQVosQ0FBY2tFLFNBQWQsQ0FBd0JDLE1BQXhCLEdBQWlDLENBQXpELEVBQTRESyxRQUFqSDtBQUNBLHFCQUFLL0UsT0FBTCxDQUFhLElBQUksS0FBS0UsYUFBdEIsRUFBcUMwQyxpQkFBckMsR0FBeUQsSUFBSTtBQUFBO0FBQUEsZ0RBQVlyQyxDQUFaLENBQWNrRSxTQUFkLENBQXdCO0FBQUE7QUFBQSxnREFBWWxFLENBQVosQ0FBY2tFLFNBQWQsQ0FBd0JDLE1BQXhCLEdBQWlDLENBQXpELEVBQTRESyxRQUF6SDtBQUNBakUsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVosRUFBa0IsSUFBSSxLQUFLYixhQUEzQixFQUEwQyxRQUExQyxFQUFvRCxLQUFLRixPQUFMLENBQWEsSUFBSSxLQUFLRSxhQUF0QixFQUFxQzBDLGlCQUF6RjtBQUNBOUIsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVosRUFBa0IsS0FBS2IsYUFBdkIsRUFBc0MsUUFBdEMsRUFBZ0QsS0FBS0YsT0FBTCxDQUFhLEtBQUtFLGFBQWxCLEVBQWlDMEMsaUJBQWpGO0FBQ0E7QUFBQTtBQUFBLGdEQUFZckMsQ0FBWixDQUFjb0UsY0FBZCxHQUErQjtBQUFBO0FBQUEsZ0RBQVlwRSxDQUFaLENBQWNrRSxTQUFkLENBQXdCQyxNQUF2RDtBQUNBLHFCQUFLMUUsT0FBTCxDQUFhLEtBQUtFLGFBQWxCLEVBQWlDcUUsbUJBQWpDLEdBQXVELElBQXZEO0FBQ0gsZUFSRCxNQVNLLElBQUksS0FBS3ZFLE9BQUwsQ0FBYSxLQUFLRSxhQUFsQixFQUFpQzBDLGlCQUFqQyxJQUFzRDtBQUFBO0FBQUEsOENBQVlyQyxDQUFaLENBQWNrRSxTQUFkLENBQXdCO0FBQUE7QUFBQSw4Q0FBWWxFLENBQVosQ0FBY2tFLFNBQWQsQ0FBd0JDLE1BQXhCLEdBQWlDLENBQXpELEVBQTRESyxRQUF0SCxFQUFnSTtBQUNqSWpFLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBLHFCQUFLVCxnQkFBTCxHQUF3QixDQUF4QjtBQUNBLHFCQUFLTixPQUFMLENBQWEsS0FBS0UsYUFBbEIsRUFBaUNxRSxtQkFBakMsR0FBdUQsS0FBdkQ7QUFDQTtBQUFBO0FBQUEsZ0RBQVloRSxDQUFaLENBQWNvRSxjQUFkLEdBQStCO0FBQUE7QUFBQSxnREFBWXBFLENBQVosQ0FBY2tFLFNBQWQsQ0FBd0JDLE1BQXZEO0FBQ0E7QUFDSDs7QUFDRDVELGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0I7QUFBQTtBQUFBLDhDQUFZUixDQUFaLENBQWNrRSxTQUFkLENBQXdCO0FBQUE7QUFBQSw4Q0FBWWxFLENBQVosQ0FBY2tFLFNBQWQsQ0FBd0JDLE1BQXhCLEdBQWlDLENBQXpELEVBQTRESyxRQUFwRjtBQUNBakUsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQixLQUFLZixPQUFMLENBQWEsS0FBS0UsYUFBbEIsRUFBaUMwQyxpQkFBdEQ7QUFFQTtBQUFBO0FBQUEsOENBQVlyQyxDQUFaLENBQWNvRSxjQUFkLEdBQStCO0FBQUE7QUFBQSw4Q0FBWXBFLENBQVosQ0FBY2tFLFNBQWQsQ0FBd0JDLE1BQXZEO0FBQ0EsbUJBQUsxRSxPQUFMLENBQWEsS0FBS0UsYUFBbEIsRUFBaUNxRSxtQkFBakMsR0FBdUQsSUFBdkQ7QUFDSCxhQTVCTSxNQTRCQSxJQUFJQyxrQkFBa0IsR0FBRyxDQUF6QixFQUE0QjtBQUMvQixrQkFBSSxLQUFLbkUsWUFBVCxFQUF1QjtBQUNuQixxQkFBS0wsT0FBTCxDQUFhLEtBQUtFLGFBQWxCLEVBQWlDcUUsbUJBQWpDLEdBQXVELElBQXZEO0FBQ0E7QUFBQTtBQUFBLGdEQUFZaEUsQ0FBWixDQUFjb0UsY0FBZCxHQUErQjtBQUFBO0FBQUEsZ0RBQVlwRSxDQUFaLENBQWNrRSxTQUFkLENBQXdCQyxNQUF2RDtBQUNBO0FBQ0gsZUFMOEIsQ0FNL0I7OztBQUNBLGtCQUFJLEtBQUsxRSxPQUFMLENBQWEsS0FBS0UsYUFBbEIsRUFBaUMwQyxpQkFBakMsSUFBc0QsQ0FBdEQsSUFBMkQsS0FBSzVDLE9BQUwsQ0FBYSxLQUFLRSxhQUFsQixFQUFpQzBDLGlCQUFqQyxJQUFzRCxDQUFqSCxJQUFzSCxLQUFLNUMsT0FBTCxDQUFhLEtBQUtFLGFBQWxCLEVBQWlDMEMsaUJBQWpDLElBQXNELENBQTVLLElBQWlMLENBQUMsS0FBS3ZDLFlBQTNMLEVBQXlNO0FBQ3JNLG9CQUFJLEtBQUsyRSx1QkFBTCxFQUFKLEVBQW9DO0FBQ2hDbEUsa0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaO0FBQ0EsdUJBQUtmLE9BQUwsQ0FBYSxLQUFLRSxhQUFsQixFQUFpQzBDLGlCQUFqQyxHQUFxRDtBQUFBO0FBQUEsa0RBQVlyQyxDQUFaLENBQWNrRSxTQUFkLENBQXdCO0FBQUE7QUFBQSxrREFBWWxFLENBQVosQ0FBY2tFLFNBQWQsQ0FBd0JDLE1BQXhCLEdBQWlDLENBQXpELEVBQTRESyxRQUFqSDtBQUNBLHVCQUFLL0UsT0FBTCxDQUFhLElBQUksS0FBS0UsYUFBdEIsRUFBcUMwQyxpQkFBckMsR0FBeUQsSUFBSTtBQUFBO0FBQUEsa0RBQVlyQyxDQUFaLENBQWNrRSxTQUFkLENBQXdCO0FBQUE7QUFBQSxrREFBWWxFLENBQVosQ0FBY2tFLFNBQWQsQ0FBd0JDLE1BQXhCLEdBQWlDLENBQXpELEVBQTRESyxRQUF6SDtBQUNBakUsa0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVosRUFBa0IsSUFBSSxLQUFLYixhQUEzQixFQUEwQyxRQUExQyxFQUFvRCxLQUFLRixPQUFMLENBQWEsSUFBSSxLQUFLRSxhQUF0QixFQUFxQzBDLGlCQUF6RjtBQUNBOUIsa0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVosRUFBa0IsS0FBS2IsYUFBdkIsRUFBc0MsUUFBdEMsRUFBZ0QsS0FBS0YsT0FBTCxDQUFhLEtBQUtFLGFBQWxCLEVBQWlDMEMsaUJBQWpGO0FBQ0E7QUFBQTtBQUFBLGtEQUFZckMsQ0FBWixDQUFjb0UsY0FBZCxHQUErQjtBQUFBO0FBQUEsa0RBQVlwRSxDQUFaLENBQWNrRSxTQUFkLENBQXdCQyxNQUF2RDtBQUNBLHVCQUFLMUUsT0FBTCxDQUFhLEtBQUtFLGFBQWxCLEVBQWlDcUUsbUJBQWpDLEdBQXVELElBQXZEO0FBQ0gsaUJBUkQsTUFRTztBQUNIO0FBQUE7QUFBQSxrREFBWWhFLENBQVosQ0FBY29FLGNBQWQsR0FBK0I7QUFBQTtBQUFBLGtEQUFZcEUsQ0FBWixDQUFja0UsU0FBZCxDQUF3QkMsTUFBdkQ7QUFDQSx1QkFBSzFFLE9BQUwsQ0FBYSxLQUFLRSxhQUFsQixFQUFpQ3FFLG1CQUFqQyxHQUF1RCxJQUF2RDtBQUNBO0FBQ0g7QUFDSixlQWRELE1BY08sSUFBSSxLQUFLVSx5QkFBTCxFQUFKLEVBQXNDO0FBQ3pDLHFCQUFLakYsT0FBTCxDQUFhLEtBQUtFLGFBQWxCLEVBQWlDcUUsbUJBQWpDLEdBQXVELElBQXZEO0FBQ0E7QUFBQTtBQUFBLGdEQUFZaEUsQ0FBWixDQUFjb0UsY0FBZCxHQUErQjtBQUFBO0FBQUEsZ0RBQVlwRSxDQUFaLENBQWNrRSxTQUFkLENBQXdCQyxNQUF2RDtBQUNBO0FBQ0gsZUFKTSxNQUlBO0FBQ0g7QUFBQTtBQUFBLGdEQUFZbkUsQ0FBWixDQUFjb0UsY0FBZCxHQUErQjtBQUFBO0FBQUEsZ0RBQVlwRSxDQUFaLENBQWNrRSxTQUFkLENBQXdCQyxNQUF2RDtBQUNBLHFCQUFLMUUsT0FBTCxDQUFhLEtBQUtFLGFBQWxCLEVBQWlDcUUsbUJBQWpDLEdBQXVELEtBQXZEO0FBQ0EscUJBQUtqRSxnQkFBTCxHQUF3QixDQUF4QjtBQUNBO0FBQ0gsZUE5QjhCLENBK0IvQjtBQUNBOztBQUNIO0FBQ0o7QUFDRDs7OztvREFDMEI7QUFDdEIsaUJBQUssSUFBSTRFLENBQUMsR0FBRztBQUFBO0FBQUEsNENBQVkzRSxDQUFaLENBQWNvRSxjQUEzQixFQUEyQ08sQ0FBQyxHQUFHO0FBQUE7QUFBQSw0Q0FBWTNFLENBQVosQ0FBY2tFLFNBQWQsQ0FBd0JDLE1BQXZFLEVBQStFUSxDQUFDLEVBQWhGLEVBQW9GO0FBQ2hGLGtCQUFNQyxPQUFPLEdBQUc7QUFBQTtBQUFBLDhDQUFZNUUsQ0FBWixDQUFja0UsU0FBZCxDQUF3QlMsQ0FBeEIsQ0FBaEI7O0FBQ0Esa0JBQUk7QUFBQTtBQUFBLDhDQUFZM0UsQ0FBWixDQUFja0UsU0FBZCxDQUF3QjtBQUFBO0FBQUEsOENBQVlsRSxDQUFaLENBQWNvRSxjQUF0QyxFQUFzREksUUFBdEQsSUFBa0VJLE9BQU8sQ0FBQ0osUUFBOUUsRUFBd0Y7QUFDcEYsdUJBQU8sS0FBUDtBQUNIO0FBQ0o7O0FBQ0QsbUJBQU8sSUFBUDtBQUNIO0FBQ0Q7Ozs7c0RBQ3FDO0FBQ2pDLGlCQUFLLElBQUlHLENBQUMsR0FBRztBQUFBO0FBQUEsNENBQVkzRSxDQUFaLENBQWNvRSxjQUEzQixFQUEyQ08sQ0FBQyxHQUFHO0FBQUE7QUFBQSw0Q0FBWTNFLENBQVosQ0FBY2tFLFNBQWQsQ0FBd0JDLE1BQXZFLEVBQStFUSxDQUFDLEVBQWhGLEVBQW9GO0FBQ2hGLGtCQUFNQyxPQUFPLEdBQUc7QUFBQTtBQUFBLDhDQUFZNUUsQ0FBWixDQUFja0UsU0FBZCxDQUF3QlMsQ0FBeEIsQ0FBaEI7O0FBQ0Esa0JBQUksS0FBS2xGLE9BQUwsQ0FBYSxLQUFLRSxhQUFsQixFQUFpQzBDLGlCQUFqQyxJQUFzRHVDLE9BQU8sQ0FBQ0osUUFBbEUsRUFBNEU7QUFDeEUsdUJBQU8sSUFBUDtBQUNIO0FBQ0o7O0FBQ0QsbUJBQU8sS0FBUDtBQUNIO0FBQ0Q7Ozs7d0RBQ3VDO0FBQ25DLGdCQUFJSyxHQUFHLEdBQUcsQ0FBVjtBQUNBLGdCQUFJLEtBQUtwRixPQUFMLENBQWEsS0FBS0UsYUFBbEIsRUFBaUMwQyxpQkFBakMsSUFBc0QsQ0FBMUQsRUFBNkQsT0FBTyxJQUFQOztBQUM3RCxpQkFBSyxJQUFJc0MsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRztBQUFBO0FBQUEsNENBQVkzRSxDQUFaLENBQWNrRSxTQUFkLENBQXdCQyxNQUE1QyxFQUFvRFEsQ0FBQyxFQUFyRCxFQUF5RDtBQUNyRCxrQkFBTUMsT0FBTyxHQUFHO0FBQUE7QUFBQSw4Q0FBWTVFLENBQVosQ0FBY2tFLFNBQWQsQ0FBd0JTLENBQXhCLENBQWhCOztBQUNBLGtCQUFJQyxPQUFPLENBQUNKLFFBQVIsSUFBb0IsS0FBSy9FLE9BQUwsQ0FBYSxLQUFLRSxhQUFsQixFQUFpQzBDLGlCQUF6RCxFQUE0RTtBQUN4RXdDLGdCQUFBQSxHQUFHO0FBQ047QUFDSjs7QUFDRHRFLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCcUUsR0FBL0I7QUFDQXRFLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCO0FBQUE7QUFBQSw0Q0FBWVIsQ0FBWixDQUFja0UsU0FBN0M7O0FBQ0EsZ0JBQUlXLEdBQUcsSUFBSSxDQUFYLEVBQWM7QUFDVixxQkFBTyxJQUFQO0FBQ0gsYUFGRCxNQUVPO0FBQ0gscUJBQU8sS0FBUDtBQUNIO0FBQ0o7QUFDRDs7Ozs0Q0FDa0JDLFMsRUFBV0MsVSxFQUFZO0FBQ3JDO0FBQUE7QUFBQSxzQ0FBUy9FLENBQVQsQ0FBV2dGLGNBQVgsQ0FBMEJGLFNBQTFCLEdBQXNDQSxTQUF0QztBQUNBO0FBQUE7QUFBQSxzQ0FBUzlFLENBQVQsQ0FBV2dGLGNBQVgsQ0FBMEJELFVBQTFCLEdBQXVDQSxVQUF2QztBQUNIOzs7NENBQ2lCO0FBQ2Q7QUFDQSxnQkFBSXpELEtBQUssR0FBR2hELElBQUksQ0FBQyxpQkFBRCxDQUFoQjs7QUFDQSxnQkFBSSxDQUFDZ0QsS0FBTCxFQUFZO0FBQ1I7QUFBQTtBQUFBLGdEQUFhdEIsQ0FBYixDQUFldUIsU0FBZixDQUF5QmpELElBQUksQ0FBQyxRQUFELENBQTdCLEVBQXlDLFVBQXpDLEVBQXFELElBQXJEO0FBQ0gsYUFGRCxNQUVPO0FBQ0g7QUFBQTtBQUFBLGdEQUFhMEIsQ0FBYixDQUFld0IsVUFBZixDQUEwQmxELElBQUksQ0FBQyxRQUFELENBQTlCLEVBQTBDLElBQTFDLEVBQWdEZ0QsS0FBaEQ7QUFDSDtBQUNKO0FBRUQ7Ozs7MENBQ2dCO0FBQ1osZ0JBQUksS0FBSzNCLGFBQUwsSUFBc0IsS0FBS0UsVUFBL0IsRUFBMkM7QUFDdkMsa0JBQUksS0FBS0osT0FBTCxDQUFhLEtBQUtJLFVBQWxCLEVBQThCd0MsaUJBQTlCLElBQW1ELENBQW5ELElBQXdELEtBQUs1QyxPQUFMLENBQWEsS0FBS0ksVUFBbEIsRUFBOEJ3QyxpQkFBOUIsSUFBbUQsQ0FBM0csSUFBZ0gsS0FBSzVDLE9BQUwsQ0FBYSxLQUFLSSxVQUFsQixFQUE4QndDLGlCQUE5QixJQUFtRCxDQUF2SyxFQUEwSztBQUN0SyxxQkFBSyxJQUFJc0MsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRztBQUFBO0FBQUEsZ0RBQVkzRSxDQUFaLENBQWNpRixRQUFkLENBQXVCZCxNQUEzQyxFQUFtRFEsQ0FBQyxFQUFwRCxFQUF3RDtBQUNwRCxzQkFBTU8sSUFBSSxHQUFHO0FBQUE7QUFBQSxrREFBWWxGLENBQVosQ0FBY2lGLFFBQWQsQ0FBdUJOLENBQXZCLENBQWI7QUFDQSxzQkFBTVEsUUFBUSxHQUFHRCxJQUFJLENBQUNqRixJQUFMLENBQVVtRixjQUFWLENBQXlCLE9BQXpCLENBQWpCO0FBQ0E3RSxrQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkyRSxRQUFaOztBQUVBLHNCQUFJRCxJQUFJLENBQUNWLFFBQUwsSUFBaUIsQ0FBckIsRUFBd0I7QUFDcEJXLG9CQUFBQSxRQUFRLENBQUNsRCxNQUFULEdBQWtCLEtBQWxCO0FBQ0gsbUJBRkQsTUFFTztBQUNIa0Qsb0JBQUFBLFFBQVEsQ0FBQ2xELE1BQVQsR0FBa0IsSUFBbEI7QUFDSDtBQUNKOztBQUNEO0FBQ0g7O0FBQ0QsbUJBQUssSUFBSTBDLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUc7QUFBQTtBQUFBLDhDQUFZM0UsQ0FBWixDQUFjaUYsUUFBZCxDQUF1QmQsTUFBM0MsRUFBbURRLEVBQUMsRUFBcEQsRUFBd0Q7QUFDcEQsb0JBQU1PLEtBQUksR0FBRztBQUFBO0FBQUEsZ0RBQVlsRixDQUFaLENBQWNpRixRQUFkLENBQXVCTixFQUF2QixDQUFiOztBQUNBLG9CQUFNUSxTQUFRLEdBQUdELEtBQUksQ0FBQ2pGLElBQUwsQ0FBVW1GLGNBQVYsQ0FBeUIsT0FBekIsQ0FBakI7O0FBQ0E3RSxnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkyRSxTQUFaOztBQUNBLG9CQUFJRCxLQUFJLENBQUNWLFFBQUwsSUFBaUIsS0FBSy9FLE9BQUwsQ0FBYSxLQUFLSSxVQUFsQixFQUE4QndDLGlCQUFuRCxFQUFzRTtBQUNsRThDLGtCQUFBQSxTQUFRLENBQUNsRCxNQUFULEdBQWtCLElBQWxCO0FBQ0gsaUJBRkQsTUFFTztBQUNIa0Qsa0JBQUFBLFNBQVEsQ0FBQ2xELE1BQVQsR0FBa0IsS0FBbEI7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQUNEOzs7OzJDQUNpQjtBQUNiLGlCQUFLLElBQUkwQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHO0FBQUE7QUFBQSw0Q0FBWTNFLENBQVosQ0FBY2lGLFFBQWQsQ0FBdUJkLE1BQTNDLEVBQW1EUSxDQUFDLEVBQXBELEVBQXdEO0FBQ3BELGtCQUFNTyxJQUFJLEdBQUc7QUFBQTtBQUFBLDhDQUFZbEYsQ0FBWixDQUFjaUYsUUFBZCxDQUF1Qk4sQ0FBdkIsQ0FBYjtBQUNBLGtCQUFNUSxRQUFRLEdBQUdELElBQUksQ0FBQ2pGLElBQUwsQ0FBVW1GLGNBQVYsQ0FBeUIsT0FBekIsQ0FBakI7QUFDQUQsY0FBQUEsUUFBUSxDQUFDbEQsTUFBVCxHQUFrQixLQUFsQjtBQUNIO0FBQ0o7OztzQ0FDVztBQUNSLGlCQUFLbEMsZ0JBQUw7QUFDQVEsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QixLQUFLVCxnQkFBN0I7QUFDQSxnQkFBSSxLQUFLQSxnQkFBTCxJQUF5QixDQUF6QixJQUE4QixLQUFLQSxnQkFBTCxJQUF5QixDQUEzRCxFQUE4RDs7QUFDOUQsaUJBQUssSUFBSTRFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS1UsTUFBTCxDQUFZbEIsTUFBaEMsRUFBd0NRLENBQUMsRUFBekMsRUFBNkM7QUFDekMsa0JBQUlDLE9BQU8sR0FBRyxLQUFLUyxNQUFMLENBQVlWLENBQVosQ0FBZDs7QUFDQSxrQkFBSSxLQUFLNUUsZ0JBQUwsR0FBd0IsQ0FBeEIsSUFBNkI0RSxDQUFqQyxFQUFvQztBQUNoQ0MsZ0JBQUFBLE9BQU8sQ0FBQzNFLElBQVIsQ0FBYXFGLFdBQWIsQ0FBeUIsSUFBSWpILElBQUosQ0FBUyxDQUFULEVBQVksQ0FBWixFQUFlLENBQWYsQ0FBekI7QUFDQXVHLGdCQUFBQSxPQUFPLENBQUNXLEtBQVIsR0FBZ0IsSUFBSTlHLEtBQUosQ0FBVSxHQUFWLEVBQWUsR0FBZixFQUFvQixHQUFwQixFQUF5QixHQUF6QixDQUFoQjtBQUNBbUcsZ0JBQUFBLE9BQU8sQ0FBQzNFLElBQVIsQ0FBYWdDLE1BQWIsR0FBc0IsSUFBdEI7QUFDQXZELGdCQUFBQSxLQUFLLENBQUNrRyxPQUFPLENBQUMzRSxJQUFULENBQUwsQ0FBb0J1RixFQUFwQixDQUF1QixDQUF2QixFQUEwQjtBQUFFQyxrQkFBQUEsUUFBUSxFQUFFLElBQUlwSCxJQUFKLENBQVMsQ0FBQyxHQUFWLEVBQWUsQ0FBZixFQUFrQixDQUFsQjtBQUFaLGlCQUExQixFQUE4RDtBQUFFcUgsa0JBQUFBLE1BQU0sRUFBRTtBQUFWLGlCQUE5RCxFQUFxRkMsS0FBckY7QUFDQWpILGdCQUFBQSxLQUFLLENBQUNrRyxPQUFPLENBQUNXLEtBQVQsQ0FBTCxDQUFxQkMsRUFBckIsQ0FBd0IsR0FBeEIsRUFBNkIsSUFBSS9HLEtBQUosQ0FBVSxHQUFWLEVBQWUsR0FBZixFQUFvQixHQUFwQixFQUF5QixHQUF6QixDQUE3QixFQUE0RDtBQUFFaUgsa0JBQUFBLE1BQU0sRUFBRTtBQUFWLGlCQUE1RCxFQUFtRkMsS0FBbkY7QUFDQWpILGdCQUFBQSxLQUFLLENBQUNrRyxPQUFPLENBQUNXLEtBQVQsQ0FBTCxDQUFxQkssS0FBckIsQ0FBMkIsR0FBM0IsRUFBZ0NKLEVBQWhDLENBQW1DLEdBQW5DLEVBQXdDLElBQUkvRyxLQUFKLENBQVUsR0FBVixFQUFlLEdBQWYsRUFBb0IsR0FBcEIsRUFBeUIsQ0FBekIsQ0FBeEMsRUFBcUU7QUFBRWlILGtCQUFBQSxNQUFNLEVBQUU7QUFBVixpQkFBckUsRUFBNEZDLEtBQTVGO0FBQ0g7QUFDSjtBQUNKOzs7O1FBcmJpQ3ZILFM7Ozs7O2lCQWFOLEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFZlYzMsIEdhbWUsIGZpbmQsIENhbnZhcywgU2xpZGVyQ29tcG9uZW50LCBkaXJlY3RvciwgU3ByaXRlQ29tcG9uZW50LCB2MywgQ29sbGlkZXIsIENvbG9yLCB0d2VlbiwgZWFzaW5nIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgU2VydmVyQ29tbW9uIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1NlcnZlckNvbW1vbic7XG5pbXBvcnQgTUtFdmVudERpc3BhdGNoIGZyb20gJy4uLy4uL1V0aWxzL01LRXZlbnREaXNwYXRjaCc7XG5pbXBvcnQgeyBHYW1lRGF0YSB9IGZyb20gJy4uL0dhbWVEYXRhJztcbmltcG9ydCB7IFBvcHVwTWFuYWdlciB9IGZyb20gJy4uL1BvcHVwL1BvcHVwTWFuYWdlcic7XG5pbXBvcnQgeyBCYWxsTWFuYWdlciB9IGZyb20gJy4vQmFsbC9CYWxsTWFuYWdlcic7XG5pbXBvcnQgeyBCYWxsVHlwZSB9IGZyb20gJy4vQmFsbC9CYWxsVHlwZSc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL1BsYXllcic7XG5pbXBvcnQgeyBSb2JvdENvbnRyb2xsZXIgfSBmcm9tICcuL1JvYm90Q29udHJvbGxlcic7XG5pbXBvcnQgeyBSb3VuZFR5cGUgfSBmcm9tICcuL1JvdW5kVHlwZSc7XG5pbXBvcnQgeyBHYW1lU2NlbmVVSSB9IGZyb20gJy4vVUkvR2FtZVNjZW5lVUknO1xuaW1wb3J0IHsgUGxheWVyQ29udHJvbGxlciB9IGZyb20gJy4vVUkvUGxheWVyQ29udHJvbGxlcic7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnR2FtZVNjZW5lTWFuYWdlcicpXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIEk6IEdhbWVTY2VuZU1hbmFnZXI7XG4gICAgLyoq546p5a626ZuG5ZCIICovXG4gICAgUGxheWVyczogQXJyYXk8UGxheWVyPiA9IG5ldyBBcnJheTxQbGF5ZXI+KDIpO1xuICAgIC8qKuW9k+WJjeWbnuWQiOeahOeOqeWutiAqL1xuICAgIHB1YmxpYyBub3dQbGF5ZXJUeXBlOiBSb3VuZFR5cGUgPSBSb3VuZFR5cGUuUGxheTE7XG4gICAgLyoq5b2T5YmN5a6i5oi356uv55qE546p5a62ICovXG4gICAgcHVibGljIHRoaXNQbGF5ZXI6IFJvdW5kVHlwZSA9IFJvdW5kVHlwZS5QbGF5MTtcbiAgICAvKirmmK/lkKbmmK/nrKzkuIDlm57lkIggKi9cbiAgICBJc0ZpcnN0Um91bmQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgaW5Ib2xlQmFsbE51bWJlcjogbnVtYmVyID0gMDtcbiAgICBAcHJvcGVydHkoU3ByaXRlQ29tcG9uZW50KVxuICAgIGNvbWJvczogU3ByaXRlQ29tcG9uZW50W10gPSBbXTtcblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICBHYW1lU2NlbmVNYW5hZ2VyLkkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEdhbWVTY2VuZU1hbmFnZXIpO1xuICAgICAgICB0aGlzLlBsYXllcnNbMF0gPSBuZXcgUGxheWVyKCk7XG4gICAgICAgIHRoaXMuUGxheWVyc1sxXSA9IG5ldyBQbGF5ZXIoKTtcbiAgICAgICAgdGhpcy5QbGF5ZXJzWzBdLlBsYXllclR5cGUgPSBSb3VuZFR5cGUuUGxheTE7XG4gICAgICAgIHRoaXMuUGxheWVyc1sxXS5QbGF5ZXJUeXBlID0gUm91bmRUeXBlLlBsYXkyO1xuICAgICAgICB0aGlzLm5vd1BsYXllclR5cGUgPSBHYW1lRGF0YS5JLmxvYWREYXRhLm5vd1BsYXllclR5cGU7XG4gICAgICAgIHRoaXMudGhpc1BsYXllciA9IEdhbWVEYXRhLkkubG9hZERhdGEudGhpc1BsYXllcjtcbiAgICAgICAgUm9ib3RDb250cm9sbGVyLkkucGxheWVyVHlwZSA9IDEgLSBHYW1lRGF0YS5JLmxvYWREYXRhLnRoaXNQbGF5ZXJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5ub3dQbGF5ZXJUeXBlID09IDAgPyBcIueOqeWutjFcIiA6IFwi546p5a62MlwiLCBcIuW8gOeQg1wiKTtcbiAgICAgICAgdGhpcy5QbGF5ZXJzW3RoaXMubm93UGxheWVyVHlwZV0uSXNGcmVlQmFsbCA9IHRydWU7XG4gICAgICAgIC8v5byA5aeL6K6h5pe2XG4gICAgICAgIFNlcnZlckNvbW1vbi5nbG9hZCgxMDAsIFwiYmV0XCIpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBHYW1lU2NlbmVVSS5JLlN0YXJ0UmVja29uVGltZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMubm93UGxheWVyVHlwZSA9PSB0aGlzLnRoaXNQbGF5ZXIpXG4gICAgICAgICAgICAgICAgR2FtZVNjZW5lVUkuSS5TaG93VGlwMihcIllvdXIgVHVyblwiKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBHYW1lU2NlbmVVSS5JLlNob3dUaXAyKFwiVGhlIE9wcG9uZW50J3MgVHVyblwiKTtcbiAgICAgICAgfSwgNClcbiAgICAgICAgdGhpcy5hZGRFdmVudERpc3BhdGNoKClcbiAgICB9XG5cbiAgICBhZGRFdmVudERpc3BhdGNoKCkge1xuICAgICAgICBNS0V2ZW50RGlzcGF0Y2guSS5vbignYW5kcm9pZEdvYmFjaycsIHRoaXMuYW5kcm9pZEdvYmFjay5iaW5kKHRoaXMpLCB0aGlzKTtcbiAgICAgICAgTUtFdmVudERpc3BhdGNoLkkub24oJ29uQW5kcm9pZFN0b3AnLCB0aGlzLm9uQW5kcm9pZFN0b3AuYmluZCh0aGlzKSwgdGhpcyk7XG4gICAgICAgIE1LRXZlbnREaXNwYXRjaC5JLm9uKCdvbkFuZHJvaWRSZXN1bWUnLCB0aGlzLm9uQW5kcm9pZFJlc3VtZS5iaW5kKHRoaXMpLCB0aGlzKTtcbiAgICB9XG4gICAgLy/lronljZPov5Tlm57vvJtcbiAgICBhbmRyb2lkR29iYWNrKCkge1xuICAgICAgICBpZiAoIUdhbWVEYXRhLkkuZ2FtZVN0b3ApXG4gICAgICAgICAgICB0aGlzLlJldHVybk1haW5TY2VuZSgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBwb3B1cCA9IGZpbmQoXCJDYW52YXMvRXhpdFRpcFBvcHVwXCIpXG4gICAgICAgICAgICBpZiAoIXBvcHVwKSB7XG4gICAgICAgICAgICAgICAgUG9wdXBNYW5hZ2VyLkkuU2hvd1BvcHVwKGZpbmQoXCJDYW52YXNcIiksIFwiRXhpdFRpcFBvcHVwXCIsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBQb3B1cE1hbmFnZXIuSS5DbG9zZVBvcHVwKGZpbmQoXCJDYW52YXNcIiksIHRydWUsIHBvcHVwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIEFuZHJvaWRTdG9wVGltZTogbnVtYmVyO1xuICAgIEFuZHJvaWRSZXN1bWVUaW1lOiBudW1iZXI7XG4gICAgLy/liIflkI7lj7DvvJtcbiAgICBvbkFuZHJvaWRTdG9wKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuWIh+WQjuWPsFwiKTtcbiAgICAgICAgdGhpcy5BbmRyb2lkU3RvcFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIH1cbiAgICAvL+aBouWkjeWIsOWJjeWPsO+8m1xuICAgIG9uQW5kcm9pZFJlc3VtZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLlm57liLDliY3lj7BcIik7XG4gICAgICAgIHRoaXMuQW5kcm9pZFJlc3VtZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBpZiAoIUdhbWVEYXRhLkkuZ2FtZVN0b3ApIHtcbiAgICAgICAgICAgIGlmICgodGhpcy5BbmRyb2lkUmVzdW1lVGltZSAtIHRoaXMuQW5kcm9pZFN0b3BUaW1lKSAvIDEwMDAgPiAxMjApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWIh+WQjuWPsOaXtumXtOWkp+S6jjLliIbpkp8g5Yik5a6a5aSx6LSlXCIpO1xuICAgICAgICAgICAgICAgIEdhbWVEYXRhLkkuZ2FtZVN0b3AgPSB0cnVlO1xuICAgICAgICAgICAgICAgIEdhbWVTY2VuZU1hbmFnZXIuSS5QbGF5ZXJzW0dhbWVTY2VuZU1hbmFnZXIuSS50aGlzUGxheWVyXS5Jc1NlcmlvdXNGb3VsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIua4uOaIj+e7k+adn1wiLCBHYW1lU2NlbmVNYW5hZ2VyLkkudGhpc1BsYXllciwgXCLlpLHotKVcIik7XG4gICAgICAgICAgICAgICAgR2FtZURhdGEuSS5XaW5lciA9IDEgLSBHYW1lU2NlbmVNYW5hZ2VyLkkudGhpc1BsYXllcjtcbiAgICAgICAgICAgICAgICBQb3B1cE1hbmFnZXIuSS5TaG93UG9wdXAoZmluZChcIkNhbnZhc1wiKSwgXCJMb3NlUG9wdXBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirmmK/lkKbmmK/lvZPliY3mk43kvZzkurrnmoTlm57lkIggKi9cbiAgICBJc093bmVyUm91bmQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vd1BsYXllclR5cGUgPT0gdGhpcy50aGlzUGxheWVyXG4gICAgICAgICAgICAmJiB0aGlzLlBsYXllcnNbdGhpcy5ub3dQbGF5ZXJUeXBlXS5Jc0hpdEJhbGwgPT0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoq5Zue5ZCI57uT5p2fIOWIpOaWreaYr+WQpuaNouS6uiAqL1xuICAgIFJvdW5kRW5kQ2hhbmdlUGxheWVyKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXllclwiLCB0aGlzLm5vd1BsYXllclR5cGUsIFwi5Zue5ZCI57uT5p2fXCIpO1xuICAgICAgICBpZiAoR2FtZVNjZW5lTWFuYWdlci5JLlBsYXllcnNbR2FtZVNjZW5lTWFuYWdlci5JLm5vd1BsYXllclR5cGVdLklzRnJlZUJhbGwpIHtcbiAgICAgICAgICAgIFBsYXllckNvbnRyb2xsZXIuSS5GcmVlQmFsbF9Ub3VjaF9FbmQobnVsbCk7XG4gICAgICAgICAgICBmaW5kKFwiQ2FudmFzL0JhbGxEcmFnXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgQmFsbE1hbmFnZXIuSS5DbG9zZUZyZWVCYWxsKCk7XG4gICAgICAgICAgICBHYW1lU2NlbmVNYW5hZ2VyLkkuUGxheWVyc1tHYW1lU2NlbmVNYW5hZ2VyLkkubm93UGxheWVyVHlwZV0uSXNGcmVlQmFsbCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKEdhbWVTY2VuZU1hbmFnZXIuSS5QbGF5ZXJzW0dhbWVTY2VuZU1hbmFnZXIuSS5ub3dQbGF5ZXJUeXBlXS5Jc0ZyZWVCYWxsKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJQbGF5ZXJcIiwgdGhpcy5ub3dQbGF5ZXJUeXBlLCBcIuWIpOaWreaYr+WQpuaciei/neinhOaDheWGtVwiKVxuICAgICAgICB0aGlzLkp1ZGdlRm91bCgpO1xuICAgICAgICB0aGlzLkp1ZGdlSXNHb2FsQmFsbCgpO1xuICAgICAgICBpZiAodGhpcy5Jc0ZpcnN0Um91bmQpIHtcbiAgICAgICAgICAgIHRoaXMuSXNGaXJzdFJvdW5kID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLyoq5Yik5pat5aaC5p6c5omA5pyJ55CD6YO95omT5a6M5LqGIOWwhuimgeaJk+eahOebruagh+eQg+S4ujjlj7fnkIMgKi9cbiAgICAgICAgaWYgKHRoaXMuUGxheWVyc1t0aGlzLm5vd1BsYXllclR5cGVdLlR5cGVPZkJhbGxUb0JlSGl0ICE9IEJhbGxUeXBlLkJMQUNLQkFMTCAmJiB0aGlzLkp1ZGdlUGxheWVyVGFyZ2V0QmFsbElzT3ZlcigpKSB7XG4gICAgICAgICAgICB0aGlzLlBsYXllcnNbdGhpcy5ub3dQbGF5ZXJUeXBlXS5UeXBlT2ZCYWxsVG9CZUhpdCA9IEJhbGxUeXBlLkJMQUNLQkFMTDtcbiAgICAgICAgfVxuICAgICAgICBHYW1lU2NlbmVVSS5JLnNob3dCYWxsKCk7XG4gICAgICAgIGlmIChHYW1lRGF0YS5JLmdhbWVTdG9wKSByZXR1cm47XG4gICAgICAgIHRoaXMuQ2xvc2VCYWxsTGlnaHQoKTtcbiAgICAgICAgUGxheWVyQ29udHJvbGxlci5JLnNsaWRlci5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIC8v5YiH5o2i5Zue5ZCIXG4gICAgICAgIHRoaXMubm93UGxheWVyVHlwZSA9IHRoaXMuSnVkZ2VXaG9zZXVybih0aGlzLm5vd1BsYXllclR5cGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhHYW1lU2NlbmVNYW5hZ2VyLkkuUGxheWVyc1tHYW1lU2NlbmVNYW5hZ2VyLkkubm93UGxheWVyVHlwZV0uSXNGcmVlQmFsbCk7XG4gICAgICAgIGZpbmQoXCJHdW4vQ3lsaW5kZXJcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgZmluZChcIkxpbmVcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuUGxheWVyc1t0aGlzLm5vd1BsYXllclR5cGVdLlR5cGVPZkJhbGxUb0JlSGl0ICE9IEJhbGxUeXBlLkJMQUNLQkFMTCAmJiB0aGlzLkp1ZGdlUGxheWVyVGFyZ2V0QmFsbElzT3ZlcigpKSB7XG4gICAgICAgICAgICB0aGlzLlBsYXllcnNbdGhpcy5ub3dQbGF5ZXJUeXBlXS5UeXBlT2ZCYWxsVG9CZUhpdCA9IEJhbGxUeXBlLkJMQUNLQkFMTDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLlNob3dCYWxsTGlnaHQoKTtcbiAgICAgICAgLy/lvIDlp4vorqHml7ZcbiAgICAgICAgR2FtZVNjZW5lVUkuSS5TdGFydFJlY2tvblRpbWUoKTtcbiAgICAgICAgaWYgKHRoaXMubm93UGxheWVyVHlwZSA9PSB0aGlzLnRoaXNQbGF5ZXIpIHtcbiAgICAgICAgICAgIGZpbmQoXCJDYW52YXMvU2xpZGVyXCIpLmdldENvbXBvbmVudChTbGlkZXJDb21wb25lbnQpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgZmluZChcIkNhbnZhcy9HdW5EcmFnMlwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIEJhbGxNYW5hZ2VyLkkuUmVzZXRCYWxsKCk7XG4gICAgICAgIHRoaXMuUmVzZXRGb3VsKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyXCIsIHRoaXMubm93UGxheWVyVHlwZSwgXCLlm57lkIjlvIDlp4tcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyXCIsIHRoaXMubm93UGxheWVyVHlwZSwgXCLnmoTnkIPnmoTnsbvlnovmmK9cIiwgdGhpcy5QbGF5ZXJzW3RoaXMubm93UGxheWVyVHlwZV0uVHlwZU9mQmFsbFRvQmVIaXQpO1xuXG4gICAgICAgIHRoaXMuUGxheWVyc1t0aGlzLm5vd1BsYXllclR5cGVdLklzSGl0QmFsbCA9IGZhbHNlO1xuICAgICAgICAvL3RoaXMudGhpc1BsYXllciA9IHRoaXMubm93UGxheWVyVHlwZTtcbiAgICB9XG4gICAgLyoqIOmHjee9rui/neinhOaDheWGtSovXG4gICAgUmVzZXRGb3VsKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIumHjee9rui/neinhOaDheWGtVwiLCBcIuW9k+WJjeaYr+eOqeWutlwiLCB0aGlzLm5vd1BsYXllclR5cGUsIFwi55qE5Zue5ZCIXCIsIFwi6YeN572u55qE5piv546p5a62XCIsIDEgLSB0aGlzLm5vd1BsYXllclR5cGUsIFwi55qE6L+d6KeE5oOF5Ya1XCIpO1xuICAgICAgICB0aGlzLlBsYXllcnNbMSAtIHRoaXMubm93UGxheWVyVHlwZV0uSXNGb3VsID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKuWIpOaWreaYr+WQpuaciei/neinhOaDheWGtSAqL1xuICAgIEp1ZGdlRm91bCgpIHtcbiAgICAgICAgLy8gdGhpcy5QbGF5ZXJzW3RoaXMubm93UGxheWVyVHlwZV1cbiAgICAgICAgY29uc29sZS5sb2coQmFsbE1hbmFnZXIuSS53aGl0ZUJhbGxGaXJzdFRvdWNoQmFsbFR5cGUpO1xuICAgICAgICBpZiAodGhpcy5QbGF5ZXJzW3RoaXMubm93UGxheWVyVHlwZV0uSXNTZXJpb3VzRm91bCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmuLjmiI/nu5PmnZ9cIiwgdGhpcy5ub3dQbGF5ZXJUeXBlLCBcIuWksei0pVwiKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmICghR2FtZVNjZW5lTWFuYWdlci5JLlBsYXllcnNbR2FtZVNjZW5lTWFuYWdlci5JLm5vd1BsYXllclR5cGVdLklzSGl0QmFsbCkge1xuICAgICAgICAgICAgdGhpcy5QbGF5ZXJzW3RoaXMubm93UGxheWVyVHlwZV0uSXNGb3VsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQmFsbE1hbmFnZXIuSS53aGl0ZUJhbGxDb21wb25lbnQuaXNHb2FsKSB7XG4gICAgICAgICAgICB0aGlzLlBsYXllcnNbdGhpcy5ub3dQbGF5ZXJUeXBlXS5Jc0ZvdWwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCYWxsTWFuYWdlci5JLkJsYWNrQmFsbENvbXBvbmVudC5pc0dvYWwgJiYgQmFsbE1hbmFnZXIuSS53aGl0ZUJhbGxDb21wb25lbnQuaXNHb2FsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlBsYXllclwiLCB0aGlzLm5vd1BsYXllclR5cGUsIFwi6L+d6KeE5omT6L+b5LqG55m955CDXCIpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlBsYXllclwiLCB0aGlzLm5vd1BsYXllclR5cGUsIFwi6L+d6KeE77yB5omT6L+b5LqG6buR55CD55qE5ZCM5pe25omT6L+b5LqG55m955CD77yB5Lil6YeN6L+d6KeE77yBXCIsIFwiUGxheWVyXCIsIHRoaXMubm93UGxheWVyVHlwZSwgXCLovpNcIik7XG4gICAgICAgICAgICB0aGlzLlVwZGF0ZUVuZEdhbWVEYXRhKDEgLSB0aGlzLm5vd1BsYXllclR5cGUsIHRoaXMubm93UGxheWVyVHlwZSk7XG4gICAgICAgICAgICB0aGlzLlBsYXllcnNbdGhpcy5ub3dQbGF5ZXJUeXBlXS5Jc1NlcmlvdXNGb3VsID0gdHJ1ZTtcbiAgICAgICAgICAgIEdhbWVEYXRhLkkuZ2FtZVN0b3AgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgLy8gdGhpcy5QbGF5ZXJzW3RoaXMubm93UGxheWVyVHlwZV0uSXNGb3VsID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIEJhbGxNYW5hZ2VyLkkuUmVzZXRXaGl0ZUJhbGxQb3MoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQmFsbE1hbmFnZXIuSS53aGl0ZUJhbGxGaXJzdFRvdWNoQmFsbFR5cGUgPT0gLTEpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUGxheWVyXCIsIHRoaXMubm93UGxheWVyVHlwZSwgXCLmsqHmnInnorDliLDku7vkvZXnkINcIilcbiAgICAgICAgICAgIEdhbWVTY2VuZVVJLkkuU2hvd1RpcChcIkRpZG4ndCBoaXQgeW91ciBvYmplY3QgYmFsbC4gXCIpO1xuICAgICAgICAgICAgdGhpcy5QbGF5ZXJzW3RoaXMubm93UGxheWVyVHlwZV0uSXNGb3VsID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIEJhbGxNYW5hZ2VyLkkuUmVzZXRXaGl0ZUJhbGxQb3MoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLlBsYXllcnNbdGhpcy5ub3dQbGF5ZXJUeXBlXS5UeXBlT2ZCYWxsVG9CZUhpdCAhPSB1bmRlZmluZWQgJiYgdGhpcy5QbGF5ZXJzW3RoaXMubm93UGxheWVyVHlwZV0uVHlwZU9mQmFsbFRvQmVIaXQgIT0gQmFsbE1hbmFnZXIuSS53aGl0ZUJhbGxGaXJzdFRvdWNoQmFsbFR5cGUpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUGxheWVyXCIsIHRoaXMubm93UGxheWVyVHlwZSwgXCLmsqHmnInnorDliLDnm67moIfnkINcIilcbiAgICAgICAgICAgIEdhbWVTY2VuZVVJLkkuU2hvd1RpcChcIkhpdCBvcHBvbmVudCdzIG9iamVjdCBiYWxsIGZpcnN0LlwiKVxuICAgICAgICAgICAgdGhpcy5QbGF5ZXJzW3RoaXMubm93UGxheWVyVHlwZV0uSXNGb3VsID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIEJhbGxNYW5hZ2VyLkkuUmVzZXRXaGl0ZUJhbGxQb3MoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLlBsYXllcnNbdGhpcy5ub3dQbGF5ZXJUeXBlXS5UeXBlT2ZCYWxsVG9CZUhpdCA9PSB1bmRlZmluZWQgJiYgIXRoaXMuSXNGaXJzdFJvdW5kICYmIEJhbGxNYW5hZ2VyLkkud2hpdGVCYWxsRmlyc3RUb3VjaEJhbGxUeXBlID09IEJhbGxUeXBlLkJMQUNLQkFMTCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJQbGF5ZXJcIiwgdGhpcy5ub3dQbGF5ZXJUeXBlLCBcIuS4jeaYr+WcqOW8gOeQg+aXtueisOWIsOS6hum7keeQg1wiKTtcbiAgICAgICAgICAgIEdhbWVTY2VuZVVJLkkuU2hvd1RpcChcIkRpZG4ndCBoaXQgeW91ciBvYmplY3QgYmFsbC4gXCIpXG4gICAgICAgICAgICB0aGlzLlBsYXllcnNbdGhpcy5ub3dQbGF5ZXJUeXBlXS5Jc0ZvdWwgPSB0cnVlO1xuICAgICAgICAgICAgLy8gQmFsbE1hbmFnZXIuSS5SZXNldFdoaXRlQmFsbFBvcygpO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgLyoq5Yik5pat5b2T5YmN5piv6LCB55qE5Zue5ZCIIOW5tuWIneWni+WMliovXG4gICAgSnVkZ2VXaG9zZXVybihyb3VuZFR5cGU6IFJvdW5kVHlwZSk6IFJvdW5kVHlwZSB7XG4gICAgICAgIC8v5Yik5pat5b2T5YmN5piv6LCB55qE5Zue5ZCIIOWmguaenOimgeaNouWwhuimgeaNouaIkOiwgeeahOWbnuWQiFxuICAgICAgICBsZXQgbm93cGxheWVyID0gcm91bmRUeXBlID09IFJvdW5kVHlwZS5QbGF5MSA/IFJvdW5kVHlwZS5QbGF5MiA6IFJvdW5kVHlwZS5QbGF5MTtcbiAgICAgICAgdGhpcy5QbGF5ZXJzW3JvdW5kVHlwZV0uUm91bmRFbmQoKTtcbiAgICAgICAgaWYgKHRoaXMuUGxheWVyc1tyb3VuZFR5cGVdLklzU2VyaW91c0ZvdWwpIHtcbiAgICAgICAgICAgIC8v5pu05paw5ri45oiP57uT5p2f55qE5pWw5o2uIOW5tuaYvuekuuW8ueeql1xuICAgICAgICAgICAgdGhpcy5VcGRhdGVFbmRHYW1lRGF0YShub3dwbGF5ZXIsIDEgLSBub3dwbGF5ZXIpO1xuICAgICAgICAgICAgLy8gR2FtZVNjZW5lVUkuSS5TaG93VGlwKFwi546p5a62XCIgKyByb3VuZFR5cGUgKyBcIuS4pemHjei/neinhFwiICsgXCLnjqnlrrZcIiArIG5vd3BsYXllciArIFwi6LWi5b6X5q+U6LWbXCIpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocm91bmRUeXBlLCBcIuS4pemHjei/neinhFwiKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRW5kR2FtZVwiKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi546p5a62XCIsIG5vd3BsYXllciwgXCLotaLlvpfmr5TotZtcIik7XG4gICAgICAgICAgICByZXR1cm4gcm91bmRUeXBlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuUGxheWVyc1tyb3VuZFR5cGVdLklzRm91bCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLnjqnlrrZcIiwgcm91bmRUeXBlLCBcIui/neinhFwiKTtcbiAgICAgICAgICAgIC8vIEdhbWVTY2VuZVVJLkkuU2hvd1RpcChcIueOqeWutlwiICsgcm91bmRUeXBlICsgXCLov53op4Qs546p5a62XCIgKyAoMSAtIHJvdW5kVHlwZSkgKyBcIueahOiHqueUseeQg1wiKVxuICAgICAgICAgICAgdGhpcy5pbkhvbGVCYWxsTnVtYmVyID0gMDtcbiAgICAgICAgICAgIEJhbGxNYW5hZ2VyLkkuUmVzZXRXaGl0ZUJhbGxQb3MoKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobm93cGxheWVyID09IHRoaXMudGhpc1BsYXllcilcbiAgICAgICAgICAgICAgICAgICAgR2FtZVNjZW5lVUkuSS5TaG93VGlwMihcIllvdXIgVHVyblwiKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIEdhbWVTY2VuZVVJLkkuU2hvd1RpcDIoXCJUaGUgT3Bwb25lbnQncyBUdXJuXCIpO1xuICAgICAgICAgICAgfSwgMSlcbiAgICAgICAgICAgIHRoaXMuUGxheWVyc1tub3dwbGF5ZXJdLklzU3RhcnRGb2xsb3cgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5QbGF5ZXJzW25vd3BsYXllcl0uSXNVbkFjdGl2ZUd1biA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5QbGF5ZXJzW25vd3BsYXllcl0uSXNGcmVlQmFsbCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLlBsYXllcnNbbm93cGxheWVyXS5Jc0hhdmVCYWxsUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuUGxheWVyc1tub3dwbGF5ZXJdLklzUm91bmRFbmQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIG5vd3BsYXllcjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLlBsYXllcnNbcm91bmRUeXBlXS5Jc0NvbnRpbnVvdXNCYXR0aW5nKSB7XG4gICAgICAgICAgICAvLyBHYW1lU2NlbmVVSS5JLlNob3dUaXAoXCLnjqnlrrZcIiArIHJvdW5kVHlwZSArIFwi5rKh5pyJ6L+d6KeE55qE5oOF5Ya15LiL5omT6L+b5LqG55uu5qCH55CD77yM5pyJ6L+e57ut5Ye755CD5p2DXCIpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIueOqeWutlwiLCByb3VuZFR5cGUsIFwi5rKh5pyJ6L+d6KeE55qE5oOF5Ya15LiL5omT6L+b5LqG55uu5qCH55CD77yM5pyJ6L+e57ut5Ye755CD5p2DXCIpO1xuICAgICAgICAgICAgaWYgKHJvdW5kVHlwZSA9PSB0aGlzLnRoaXNQbGF5ZXIpXG4gICAgICAgICAgICAgICAgR2FtZVNjZW5lVUkuSS5TaG93VGlwMihcIllvdXIgVHVyblwiKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBHYW1lU2NlbmVVSS5JLlNob3dUaXAyKFwiVGhlIE9wcG9uZW50J3MgVHVyblwiKTtcbiAgICAgICAgICAgIHRoaXMuUGxheWVyc1tyb3VuZFR5cGVdLklzSGF2ZUJhbGxSaWdodCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gcm91bmRUeXBlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG5vd3BsYXllciA9PSB0aGlzLnRoaXNQbGF5ZXIpXG4gICAgICAgICAgICAgICAgR2FtZVNjZW5lVUkuSS5TaG93VGlwMihcIllvdXIgVHVyblwiKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBHYW1lU2NlbmVVSS5JLlNob3dUaXAyKFwiVGhlIE9wcG9uZW50J3MgVHVyblwiKTtcbiAgICAgICAgICAgIHRoaXMuUGxheWVyc1tub3dwbGF5ZXJdLklzSGF2ZUJhbGxSaWdodCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLlBsYXllcnNbbm93cGxheWVyXS5Jc1N0YXJ0Rm9sbG93ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuUGxheWVyc1tub3dwbGF5ZXJdLklzUm91bmRFbmQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIG5vd3BsYXllcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKirliKTmlq3ov5vnkIPmmK/lkKbniq/op4TvvIzmmK/lkKbov57nu63lh7vnkIMgKi9cbiAgICBKdWRnZUlzR29hbEJhbGwoKSB7XG4gICAgICAgIGxldCBHb2FsQmFsbE51bWJlckxlcnAgPSBCYWxsTWFuYWdlci5JLkdvYWxCYWxscy5sZW5ndGggLSBCYWxsTWFuYWdlci5JLkdvYWxCYWxsTnVtYmVyO1xuICAgICAgICBpZiAoQmFsbE1hbmFnZXIuSS5ibGFja0JhbGxJc0dvYWwpIHtcbiAgICAgICAgICAgIC8v5aaC5p6c5piv5Zyo5byA55CD5piv5bCG6buR5YWr5omT6L+bIOS4jeWBmuWkhOeQhu+8jOmHjee9rum7keWFq+S9jee9rlxuICAgICAgICAgICAgaWYgKHRoaXMuSXNGaXJzdFJvdW5kKSB7XG4gICAgICAgICAgICAgICAgQmFsbE1hbmFnZXIuSS5SZXNldEJsYWNrQmFsbFBvcygpO1xuICAgICAgICAgICAgICAgIEJhbGxNYW5hZ2VyLkkuYmxhY2tCYWxsSXNHb2FsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgQmFsbE1hbmFnZXIuSS5CbGFja0JhbGwuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBCYWxsTWFuYWdlci5JLkJsYWNrQmFsbENvbXBvbmVudC5pc0dvYWwgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8v5ZCm5YiZIOaOpeS4i+adpemcgOimgeWIpOaWreW9k+WJjeeOqeWutueahOeQg+aYr+WQpuaJk+WujO+8jOiLpeaJk+WujOWImeiDnOWIqe+8jOiLpeayoeacieaJk+WujOWImei+k1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgR2FtZURhdGEuSS5nYW1lU3RvcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuSnVkZ2VQbGF5ZXJUYXJnZXRCYWxsSXNPdmVyKCkgJiYgIUJhbGxNYW5hZ2VyLkkud2hpdGVCYWxsQ29tcG9uZW50LmlzR29hbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlVwZGF0ZUVuZEdhbWVEYXRhKHRoaXMubm93UGxheWVyVHlwZSwgMSAtIHRoaXMubm93UGxheWVyVHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIEdhbWVEYXRhLkkuV2luZXIgPSB0aGlzLm5vd1BsYXllclR5cGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi546p5a62XCIsIHRoaXMubm93UGxheWVyVHlwZSwgXCJXaW5cIik7XG4gICAgICAgICAgICAgICAgICAgIEdhbWVEYXRhLkkuZ2FtZVN0b3AgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoR2FtZURhdGEuSS5XaW5lciA9PSB0aGlzLnRoaXNQbGF5ZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICBQb3B1cE1hbmFnZXIuSS5TaG93UG9wdXAoZmluZChcIkNhbnZhc1wiKSwgXCJXaW5Qb3B1cFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgUG9wdXBNYW5hZ2VyLkkuU2hvd1BvcHVwKGZpbmQoXCJDYW52YXNcIiksIFwiTG9zZVBvcHVwXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVXBkYXRlRW5kR2FtZURhdGEoMSAtIHRoaXMubm93UGxheWVyVHlwZSwgdGhpcy5ub3dQbGF5ZXJUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLnjqnlrrZcIiwgdGhpcy5ub3dQbGF5ZXJUeXBlLCBcIkxvc2VcIik7XG4gICAgICAgICAgICAgICAgICAgIEdhbWVEYXRhLkkuV2luZXIgPSAxIC0gdGhpcy5ub3dQbGF5ZXJUeXBlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllcnNbdGhpcy5ub3dQbGF5ZXJUeXBlXS5Jc1NlcmlvdXNGb3VsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgR2FtZURhdGEuSS5nYW1lU3RvcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChHYW1lRGF0YS5JLldpbmVyID09IHRoaXMudGhpc1BsYXllcilcbiAgICAgICAgICAgICAgICAgICAgICAgIFBvcHVwTWFuYWdlci5JLlNob3dQb3B1cChmaW5kKFwiQ2FudmFzXCIpLCBcIldpblBvcHVwXCIpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBQb3B1cE1hbmFnZXIuSS5TaG93UG9wdXAoZmluZChcIkNhbnZhc1wiKSwgXCJMb3NlUG9wdXBcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChHb2FsQmFsbE51bWJlckxlcnAgPT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmsqHmnInov5vnkINcIik7XG4gICAgICAgICAgICB0aGlzLmluSG9sZUJhbGxOdW1iZXIgPSAwO1xuICAgICAgICAgICAgdGhpcy5QbGF5ZXJzW3RoaXMubm93UGxheWVyVHlwZV0uSXNDb250aW51b3VzQmF0dGluZyA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKEdvYWxCYWxsTnVtYmVyTGVycCA9PSAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIui/m+eQg+S6hjHkuKrnkINcIik7XG4gICAgICAgICAgICBpZiAodGhpcy5Jc0ZpcnN0Um91bmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllcnNbdGhpcy5ub3dQbGF5ZXJUeXBlXS5Jc0NvbnRpbnVvdXNCYXR0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBCYWxsTWFuYWdlci5JLkdvYWxCYWxsTnVtYmVyID0gQmFsbE1hbmFnZXIuSS5Hb2FsQmFsbHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLlBsYXllcnNbdGhpcy5ub3dQbGF5ZXJUeXBlXS5UeXBlT2ZCYWxsVG9CZUhpdCAhPSAwICYmIHRoaXMuUGxheWVyc1t0aGlzLm5vd1BsYXllclR5cGVdLlR5cGVPZkJhbGxUb0JlSGl0ICE9IDEgJiYgdGhpcy5QbGF5ZXJzW3RoaXMubm93UGxheWVyVHlwZV0uVHlwZU9mQmFsbFRvQmVIaXQgIT0gMykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6L+Z5Liq6L+b55CD5piv5pys5bGA55qE56ys5LiA5Liq5Y2V54us6L+b55CDXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyc1t0aGlzLm5vd1BsYXllclR5cGVdLlR5cGVPZkJhbGxUb0JlSGl0ID0gQmFsbE1hbmFnZXIuSS5Hb2FsQmFsbHNbQmFsbE1hbmFnZXIuSS5Hb2FsQmFsbHMubGVuZ3RoIC0gMV0uYmFsbFRweWVcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllcnNbMSAtIHRoaXMubm93UGxheWVyVHlwZV0uVHlwZU9mQmFsbFRvQmVIaXQgPSAxIC0gQmFsbE1hbmFnZXIuSS5Hb2FsQmFsbHNbQmFsbE1hbmFnZXIuSS5Hb2FsQmFsbHMubGVuZ3RoIC0gMV0uYmFsbFRweWVcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIueOqeWutlwiLCAxIC0gdGhpcy5ub3dQbGF5ZXJUeXBlLCBcIueahOeQg+eahOexu+Wei+aYr1wiLCB0aGlzLlBsYXllcnNbMSAtIHRoaXMubm93UGxheWVyVHlwZV0uVHlwZU9mQmFsbFRvQmVIaXQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi546p5a62XCIsIHRoaXMubm93UGxheWVyVHlwZSwgXCLnmoTnkIPnmoTnsbvlnovmmK9cIiwgdGhpcy5QbGF5ZXJzW3RoaXMubm93UGxheWVyVHlwZV0uVHlwZU9mQmFsbFRvQmVIaXQpO1xuICAgICAgICAgICAgICAgIEJhbGxNYW5hZ2VyLkkuR29hbEJhbGxOdW1iZXIgPSBCYWxsTWFuYWdlci5JLkdvYWxCYWxscy5sZW5ndGhcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllcnNbdGhpcy5ub3dQbGF5ZXJUeXBlXS5Jc0NvbnRpbnVvdXNCYXR0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuUGxheWVyc1t0aGlzLm5vd1BsYXllclR5cGVdLlR5cGVPZkJhbGxUb0JlSGl0ICE9IEJhbGxNYW5hZ2VyLkkuR29hbEJhbGxzW0JhbGxNYW5hZ2VyLkkuR29hbEJhbGxzLmxlbmd0aCAtIDFdLmJhbGxUcHllKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmiZPov5vnmoTnkIPkuI3mmK/nm67moIfnkIPvvIzkuI3niq/op4TvvIzmsqHmnInov57nu63lh7vnkIPmnYNcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5pbkhvbGVCYWxsTnVtYmVyID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllcnNbdGhpcy5ub3dQbGF5ZXJUeXBlXS5Jc0NvbnRpbnVvdXNCYXR0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgQmFsbE1hbmFnZXIuSS5Hb2FsQmFsbE51bWJlciA9IEJhbGxNYW5hZ2VyLkkuR29hbEJhbGxzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaJk+i/m+eahOeQg+eahOexu+Wei+S4ulwiLCBCYWxsTWFuYWdlci5JLkdvYWxCYWxsc1tCYWxsTWFuYWdlci5JLkdvYWxCYWxscy5sZW5ndGggLSAxXS5iYWxsVHB5ZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuebruagh+exu+Wei+S4ulwiLCB0aGlzLlBsYXllcnNbdGhpcy5ub3dQbGF5ZXJUeXBlXS5UeXBlT2ZCYWxsVG9CZUhpdClcblxuICAgICAgICAgICAgQmFsbE1hbmFnZXIuSS5Hb2FsQmFsbE51bWJlciA9IEJhbGxNYW5hZ2VyLkkuR29hbEJhbGxzLmxlbmd0aFxuICAgICAgICAgICAgdGhpcy5QbGF5ZXJzW3RoaXMubm93UGxheWVyVHlwZV0uSXNDb250aW51b3VzQmF0dGluZyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoR29hbEJhbGxOdW1iZXJMZXJwID4gMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuSXNGaXJzdFJvdW5kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5QbGF5ZXJzW3RoaXMubm93UGxheWVyVHlwZV0uSXNDb250aW51b3VzQmF0dGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgQmFsbE1hbmFnZXIuSS5Hb2FsQmFsbE51bWJlciA9IEJhbGxNYW5hZ2VyLkkuR29hbEJhbGxzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL1wi6L+b55CD5LiN5q2i5LiA5LiqIOWIpOaWreaJgOacieeahOi/m+eQg+aYr+WQpuexu+Wei+ebuOWQjO+8jOiLpeebuOWQjOWGs+WumueQg+eahOexu+Wei++8jOS4jeebuOWQjOe7p+e7reWHu+eQg+S9huS4jeWGs+WumuWHu+eQg+exu+Wei1wiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLlBsYXllcnNbdGhpcy5ub3dQbGF5ZXJUeXBlXS5UeXBlT2ZCYWxsVG9CZUhpdCAhPSAwICYmIHRoaXMuUGxheWVyc1t0aGlzLm5vd1BsYXllclR5cGVdLlR5cGVPZkJhbGxUb0JlSGl0ICE9IDEgJiYgdGhpcy5QbGF5ZXJzW3RoaXMubm93UGxheWVyVHlwZV0uVHlwZU9mQmFsbFRvQmVIaXQgIT0gMyAmJiAhdGhpcy5Jc0ZpcnN0Um91bmQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5KdWRnZUdvYWxCYWxsSXNTYW1lVHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6L+Z5Liq6L+b55CD5piv5pys5bGA55qE56ys5LiA5Liq6L+e57ut6L+b5ZCM5qC357G75Z6L55qE55CD55qE6L+b55CDXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllcnNbdGhpcy5ub3dQbGF5ZXJUeXBlXS5UeXBlT2ZCYWxsVG9CZUhpdCA9IEJhbGxNYW5hZ2VyLkkuR29hbEJhbGxzW0JhbGxNYW5hZ2VyLkkuR29hbEJhbGxzLmxlbmd0aCAtIDFdLmJhbGxUcHllO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYXllcnNbMSAtIHRoaXMubm93UGxheWVyVHlwZV0uVHlwZU9mQmFsbFRvQmVIaXQgPSAxIC0gQmFsbE1hbmFnZXIuSS5Hb2FsQmFsbHNbQmFsbE1hbmFnZXIuSS5Hb2FsQmFsbHMubGVuZ3RoIC0gMV0uYmFsbFRweWVcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLnjqnlrrZcIiwgMSAtIHRoaXMubm93UGxheWVyVHlwZSwgXCLnmoTnkIPnmoTnsbvlnovmmK9cIiwgdGhpcy5QbGF5ZXJzWzEgLSB0aGlzLm5vd1BsYXllclR5cGVdLlR5cGVPZkJhbGxUb0JlSGl0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLnjqnlrrZcIiwgdGhpcy5ub3dQbGF5ZXJUeXBlLCBcIueahOeQg+eahOexu+Wei+aYr1wiLCB0aGlzLlBsYXllcnNbdGhpcy5ub3dQbGF5ZXJUeXBlXS5UeXBlT2ZCYWxsVG9CZUhpdCk7XG4gICAgICAgICAgICAgICAgICAgIEJhbGxNYW5hZ2VyLkkuR29hbEJhbGxOdW1iZXIgPSBCYWxsTWFuYWdlci5JLkdvYWxCYWxscy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyc1t0aGlzLm5vd1BsYXllclR5cGVdLklzQ29udGludW91c0JhdHRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIEJhbGxNYW5hZ2VyLkkuR29hbEJhbGxOdW1iZXIgPSBCYWxsTWFuYWdlci5JLkdvYWxCYWxscy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyc1t0aGlzLm5vd1BsYXllclR5cGVdLklzQ29udGludW91c0JhdHRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLkp1ZGdlR29hbEJhbGxJc1RhcmdldFR5cGUoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyc1t0aGlzLm5vd1BsYXllclR5cGVdLklzQ29udGludW91c0JhdHRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIEJhbGxNYW5hZ2VyLkkuR29hbEJhbGxOdW1iZXIgPSBCYWxsTWFuYWdlci5JLkdvYWxCYWxscy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBCYWxsTWFuYWdlci5JLkdvYWxCYWxsTnVtYmVyID0gQmFsbE1hbmFnZXIuSS5Hb2FsQmFsbHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRoaXMuUGxheWVyc1t0aGlzLm5vd1BsYXllclR5cGVdLklzQ29udGludW91c0JhdHRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmluSG9sZUJhbGxOdW1iZXIgPSAwO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEJhbGxNYW5hZ2VyLkkuR29hbEJhbGxOdW1iZXIgPSBCYWxsTWFuYWdlci5JLkdvYWxCYWxscy5sZW5ndGg7XG4gICAgICAgICAgICAvLyB0aGlzLlBsYXllcnNbdGhpcy5ub3dQbGF5ZXJUeXBlXS5Jc0NvbnRpbnVvdXNCYXR0aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKirliKTmlq3miYDmnInov5vnkIPkuK3nmoTnsbvlnovmmK/lkKbnm7jlkIwgKi9cbiAgICBKdWRnZUdvYWxCYWxsSXNTYW1lVHlwZSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IEJhbGxNYW5hZ2VyLkkuR29hbEJhbGxOdW1iZXI7IGkgPCBCYWxsTWFuYWdlci5JLkdvYWxCYWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IEJhbGxNYW5hZ2VyLkkuR29hbEJhbGxzW2ldO1xuICAgICAgICAgICAgaWYgKEJhbGxNYW5hZ2VyLkkuR29hbEJhbGxzW0JhbGxNYW5hZ2VyLkkuR29hbEJhbGxOdW1iZXJdLmJhbGxUcHllICE9IGVsZW1lbnQuYmFsbFRweWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKuWIpOaWrei/m+eQg+S4reaYr+WQpuacieebruagh+exu+WeiyAqL1xuICAgIEp1ZGdlR29hbEJhbGxJc1RhcmdldFR5cGUoKTogYm9vbGVhbiB7XG4gICAgICAgIGZvciAobGV0IGkgPSBCYWxsTWFuYWdlci5JLkdvYWxCYWxsTnVtYmVyOyBpIDwgQmFsbE1hbmFnZXIuSS5Hb2FsQmFsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBCYWxsTWFuYWdlci5JLkdvYWxCYWxsc1tpXTtcbiAgICAgICAgICAgIGlmICh0aGlzLlBsYXllcnNbdGhpcy5ub3dQbGF5ZXJUeXBlXS5UeXBlT2ZCYWxsVG9CZUhpdCA9PSBlbGVtZW50LmJhbGxUcHllKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvKirliKTmlq3njqnlrrbnmoTnm67moIfnkIPmmK/lkKblt7Lnu4/miZPlrozkuoYgKi9cbiAgICBKdWRnZVBsYXllclRhcmdldEJhbGxJc092ZXIoKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICBpZiAodGhpcy5QbGF5ZXJzW3RoaXMubm93UGxheWVyVHlwZV0uVHlwZU9mQmFsbFRvQmVIaXQgPT0gMykgcmV0dXJuIHRydWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQmFsbE1hbmFnZXIuSS5Hb2FsQmFsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBCYWxsTWFuYWdlci5JLkdvYWxCYWxsc1tpXTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmJhbGxUcHllID09IHRoaXMuUGxheWVyc1t0aGlzLm5vd1BsYXllclR5cGVdLlR5cGVPZkJhbGxUb0JlSGl0KSB7XG4gICAgICAgICAgICAgICAgc3VtKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCLliKTmlq3njqnlrrbnmoTnm67moIfnkIPmmK/lkKblt7Lnu4/miZPlrozkuoZcIiwgc3VtKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLliKTmlq3njqnlrrbnmoTnm67moIfnkIPmmK/lkKblt7Lnu4/miZPlrozkuoZcIiwgQmFsbE1hbmFnZXIuSS5Hb2FsQmFsbHMpO1xuICAgICAgICBpZiAoc3VtID09IDcpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKuabtOaWsOa4uOaIj+e7k+adn+eahOaVsOaNriDlubbmmL7npLrlvLnnqpcgKi9cbiAgICBVcGRhdGVFbmRHYW1lRGF0YSh3aW5QbGF5ZXIsIGxvc3RQbGF5ZXIpIHtcbiAgICAgICAgR2FtZURhdGEuSS5TZXR0bGVtZW50RGF0YS53aW5QbGF5ZXIgPSB3aW5QbGF5ZXI7XG4gICAgICAgIEdhbWVEYXRhLkkuU2V0dGxlbWVudERhdGEubG9zdFBsYXllciA9IGxvc3RQbGF5ZXI7XG4gICAgfVxuICAgIFJldHVybk1haW5TY2VuZSgpIHtcbiAgICAgICAgLy8gZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpblNjZW5lXCIpO1xuICAgICAgICBsZXQgcG9wdXAgPSBmaW5kKFwiQ2FudmFzL1RpcFBvcHVwXCIpXG4gICAgICAgIGlmICghcG9wdXApIHtcbiAgICAgICAgICAgIFBvcHVwTWFuYWdlci5JLlNob3dQb3B1cChmaW5kKFwiQ2FudmFzXCIpLCBcIlRpcFBvcHVwXCIsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgUG9wdXBNYW5hZ2VyLkkuQ2xvc2VQb3B1cChmaW5kKFwiQ2FudmFzXCIpLCB0cnVlLCBwb3B1cClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKuaYvuekuueQg+mrmOS6riAqL1xuICAgIFNob3dCYWxsTGlnaHQoKSB7XG4gICAgICAgIGlmICh0aGlzLm5vd1BsYXllclR5cGUgPT0gdGhpcy50aGlzUGxheWVyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5QbGF5ZXJzW3RoaXMudGhpc1BsYXllcl0uVHlwZU9mQmFsbFRvQmVIaXQgIT0gMCAmJiB0aGlzLlBsYXllcnNbdGhpcy50aGlzUGxheWVyXS5UeXBlT2ZCYWxsVG9CZUhpdCAhPSAxICYmIHRoaXMuUGxheWVyc1t0aGlzLnRoaXNQbGF5ZXJdLlR5cGVPZkJhbGxUb0JlSGl0ICE9IDMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEJhbGxNYW5hZ2VyLkkuQWxsQmFsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFsbCA9IEJhbGxNYW5hZ2VyLkkuQWxsQmFsbHNbaV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhbGxOb2RlID0gYmFsbC5ub2RlLmdldENoaWxkQnlOYW1lKFwiTGlnaHRcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJhbGxOb2RlKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFsbC5iYWxsVHB5ZSA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWxsTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBCYWxsTWFuYWdlci5JLkFsbEJhbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmFsbCA9IEJhbGxNYW5hZ2VyLkkuQWxsQmFsbHNbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgYmFsbE5vZGUgPSBiYWxsLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJMaWdodFwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhiYWxsTm9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKGJhbGwuYmFsbFRweWUgPT0gdGhpcy5QbGF5ZXJzW3RoaXMudGhpc1BsYXllcl0uVHlwZU9mQmFsbFRvQmVIaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgYmFsbE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBiYWxsTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoq5YWz6Zet55CD6auY5LquICovXG4gICAgQ2xvc2VCYWxsTGlnaHQoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQmFsbE1hbmFnZXIuSS5BbGxCYWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYmFsbCA9IEJhbGxNYW5hZ2VyLkkuQWxsQmFsbHNbaV07XG4gICAgICAgICAgICBjb25zdCBiYWxsTm9kZSA9IGJhbGwubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkxpZ2h0XCIpXG4gICAgICAgICAgICBiYWxsTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBTaG93Q29tYm8oKSB7XG4gICAgICAgIHRoaXMuaW5Ib2xlQmFsbE51bWJlcisrO1xuICAgICAgICBjb25zb2xlLmxvZyhcIui/nue7rei/m+eQg+aVsOS4ujogXCIsIHRoaXMuaW5Ib2xlQmFsbE51bWJlcik7XG4gICAgICAgIGlmICh0aGlzLmluSG9sZUJhbGxOdW1iZXIgPT0gMCB8fCB0aGlzLmluSG9sZUJhbGxOdW1iZXIgPT0gMSkgcmV0dXJuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29tYm9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuY29tYm9zW2ldO1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5Ib2xlQmFsbE51bWJlciAtIDIgPT0gaSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQubm9kZS5zZXRQb3NpdGlvbihuZXcgVmVjMygwLCAwLCAwKSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jb2xvciA9IG5ldyBDb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHR3ZWVuKGVsZW1lbnQubm9kZSkudG8oMSwgeyBwb3NpdGlvbjogbmV3IFZlYzMoLTE3MCwgMCwgMCkgfSwgeyBlYXNpbmc6IFwiY2lyY091dFwiIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgdHdlZW4oZWxlbWVudC5jb2xvcikudG8oMC41LCBuZXcgQ29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KSwgeyBlYXNpbmc6IFwiY2lyY091dFwiIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgdHdlZW4oZWxlbWVudC5jb2xvcikuZGVsYXkoMS4zKS50bygwLjUsIG5ldyBDb2xvcigyNTUsIDI1NSwgMjU1LCAwKSwgeyBlYXNpbmc6IFwiY2lyY091dFwiIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=