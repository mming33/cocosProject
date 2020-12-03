System.register(["cc", "code-quality:cr", "../../../Common/SourceManager.js", "../../../Utils/NDBTS.js", "../../GameData.js", "../../Popup/PopupManager.js", "../Ball/BallManager.js", "../GameSceneManager.js", "../RoundType.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Vec3, find, SpriteComponent, macro, SpriteFrame, Sprite, Label, Color, LabelComponent, tween, SourceManager, NDB, GameData, PopupManager, BallManager, GameSceneManager, RoundType, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, GameSceneUI;

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

  function _reportPossibleCrUseOfSourceManager(extras) {
    _reporterNs.report("SourceManager", "../../../Common/SourceManager", _context.meta, extras);
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

  function _reportPossibleCrUseOfBallManager(extras) {
    _reporterNs.report("BallManager", "../Ball/BallManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSceneManager(extras) {
    _reporterNs.report("GameSceneManager", "../GameSceneManager", _context.meta, extras);
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
      Vec3 = _cc.Vec3;
      find = _cc.find;
      SpriteComponent = _cc.SpriteComponent;
      macro = _cc.macro;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      Color = _cc.Color;
      LabelComponent = _cc.LabelComponent;
      tween = _cc.tween;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_CommonSourceManagerJs) {
      SourceManager = _CommonSourceManagerJs.SourceManager;
    }, function (_UtilsNDBTSJs) {
      NDB = _UtilsNDBTSJs.default;
    }, function (_GameDataJs) {
      GameData = _GameDataJs.GameData;
    }, function (_PopupPopupManagerJs) {
      PopupManager = _PopupPopupManagerJs.PopupManager;
    }, function (_BallBallManagerJs) {
      BallManager = _BallBallManagerJs.BallManager;
    }, function (_GameSceneManagerJs) {
      GameSceneManager = _GameSceneManagerJs.GameSceneManager;
    }, function (_RoundTypeJs) {
      RoundType = _RoundTypeJs.RoundType;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "ca228uTMz1GR4EofdvBF57y", "GameSceneUI", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameSceneUI", GameSceneUI = (_dec = ccclass('GameSceneUI'), _dec2 = property(SpriteFrame), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(GameSceneUI, _Component);

        function GameSceneUI() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GameSceneUI);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameSceneUI)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.GunDrag2ScaleNumberChilds = new Array(3);

          _initializerDefineProperty(_this, "balls", _descriptor, _assertThisInitialized(_this));

          _this.toast = null;
          _this.toastLable = null;
          _this.allTime = 30;
          return _this;
        }

        _createClass(GameSceneUI, [{
          key: "onLoad",
          value: function onLoad() {
            GameSceneUI.I = this.node.getComponent(GameSceneUI);
            var obj = {
              eventName: "game_start",
              name: "8ball"
            };
            (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
              error: Error()
            }), NDB) : NDB).sendAutoJoinEvent(obj);
          }
        }, {
          key: "onEnable",
          value: function onEnable() {
            (_crd && SourceManager === void 0 ? (_reportPossibleCrUseOfSourceManager({
              error: Error()
            }), SourceManager) : SourceManager).I.BGMusic();
            this.InitPlayerData();
          }
        }, {
          key: "start",
          value: function start() {
            (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
              error: Error()
            }), PopupManager) : PopupManager).I.ShowPopup(find("Canvas"), "MatchingPopup");
            this.tipBG = find("Canvas/GameSceneUI/TipBG").getComponent(SpriteComponent);
            this.tipLable = find("Canvas/GameSceneUI/TipBG/TipLable").getComponent(LabelComponent);
            this.toast = find("Canvas/toast").getComponent(SpriteComponent);
            this.toastLable = find("Canvas/toast/Text").getComponent(LabelComponent);
            this.GunDrag2ScaleNumber = find("Canvas/GunDrag2/mask/Node");
            this.GunDrag2ScaleNumberChilds[0] = this.GunDrag2ScaleNumber.getChildByName("Number1");
            this.GunDrag2ScaleNumberChilds[1] = this.GunDrag2ScaleNumber.getChildByName("Number2");
            this.GunDrag2ScaleNumberChilds[2] = this.GunDrag2ScaleNumber.getChildByName("Number3");
          }
        }, {
          key: "GunDrag2ScaleNumberMove",
          value: function GunDrag2ScaleNumberMove(lerp) {
            this.GunDrag2ScaleNumber.position = new Vec3(0, this.GunDrag2ScaleNumber.position.y - lerp, 0);
            var index = this.GunDrag2ScaleNumber.position.y / 395 > 0 ? Math.floor(this.GunDrag2ScaleNumber.position.y / 395) : Math.ceil(this.GunDrag2ScaleNumber.position.y / 395);
            console.log(index);
            this.GunDrag2ScaleNumberChilds[0].position = new Vec3(0, -(index + 1) * 395, 0);
            this.GunDrag2ScaleNumberChilds[1].position = new Vec3(0, -index * 395, 0);
            this.GunDrag2ScaleNumberChilds[2].position = new Vec3(0, -(index - 1) * 395, 0);
          }
        }, {
          key: "PlayerTime",
          value: function PlayerTime() {
            if ((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.gameStop) return;
            this.time -= 0.1;
            var num = 1;

            if ((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.loadData.thisPlayer == (_crd && RoundType === void 0 ? (_reportPossibleCrUseOfRoundType({
              error: Error()
            }), RoundType) : RoundType).Play1) {
              num = 1;
              this.Player1TimeSlider.fillStart = 1;
              this.Player1TimeSlider.fillRange = -1;
              this.Player1TimeFire.setPosition(new Vec3(-300.33, 0, 0));
              this.Player2TimeFire.setPosition(new Vec3(300.33, 0, 0));
              this.Player2TimeSlider.fillStart = 0;
              this.Player2TimeSlider.fillRange = 1;
            } else {
              num = -1;
              this.Player1TimeSlider.fillStart = 0;
              this.Player2TimeSlider.fillStart = 1;
              this.Player1TimeSlider.fillRange = 1;
              this.Player2TimeSlider.fillRange = -1;
              this.Player1TimeFire.setPosition(new Vec3(300.33, 0, 0));
              this.Player2TimeFire.setPosition(new Vec3(-300.33, 0, 0));
            }

            var lerp = this.time / this.allTime;

            if ((_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.nowPlayerType == (_crd && RoundType === void 0 ? (_reportPossibleCrUseOfRoundType({
              error: Error()
            }), RoundType) : RoundType).Play1) {
              this.Player1TimeSlider.fillRange = -num * lerp;
              this.Player1TimeFire.setPosition(new Vec3(-num * 300.33 * lerp, 0, 0));
              this.Player1TimeFire.active = true;
              this.Player2TimeFire.active = false;
              this.Player1Light.active = true;
              this.Player1HeadLight.active = true;
              this.Player2Light.active = false;
              this.Player2HeadLight.active = false;

              if (lerp <= 0) {
                (_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
                  error: Error()
                }), GameSceneManager) : GameSceneManager).I.RoundEndChangePlayer();
              }
            } else {
              this.Player2TimeSlider.fillRange = num * lerp;
              this.Player2TimeFire.active = true;
              this.Player2TimeFire.setPosition(new Vec3(num * 300.33 * lerp, 0, 0));
              this.Player1TimeFire.active = false;
              this.Player1Light.active = false;
              this.Player1HeadLight.active = false;
              this.Player2Light.active = true;
              this.Player2HeadLight.active = true;

              if (lerp <= 0) {
                (_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
                  error: Error()
                }), GameSceneManager) : GameSceneManager).I.RoundEndChangePlayer();
              }
            }
          }
        }, {
          key: "StartReckonTime",
          value: function StartReckonTime() {
            this.time = 30;
            this.schedule(this.PlayerTime, 0.1, macro.REPEAT_FOREVER, 0);
          }
        }, {
          key: "EndReckonTime",
          value: function EndReckonTime() {
            this.unschedule(this.PlayerTime);
          }
        }, {
          key: "showBall",
          value: function showBall() {
            if ((_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.Players[(_crd && RoundType === void 0 ? (_reportPossibleCrUseOfRoundType({
              error: Error()
            }), RoundType) : RoundType).Play1].TypeOfBallToBeHit != 0 && (_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.Players[(_crd && RoundType === void 0 ? (_reportPossibleCrUseOfRoundType({
              error: Error()
            }), RoundType) : RoundType).Play1].TypeOfBallToBeHit != 1 && (_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.Players[(_crd && RoundType === void 0 ? (_reportPossibleCrUseOfRoundType({
              error: Error()
            }), RoundType) : RoundType).Play1].TypeOfBallToBeHit != 3) {
              console.log("球类型还未指定");
              return;
            }

            var type = (_crd && GameSceneManager === void 0 ? (_reportPossibleCrUseOfGameSceneManager({
              error: Error()
            }), GameSceneManager) : GameSceneManager).I.Players[(_crd && RoundType === void 0 ? (_reportPossibleCrUseOfRoundType({
              error: Error()
            }), RoundType) : RoundType).Play1].TypeOfBallToBeHit;
            var unGoalBall = new Array();

            for (var i = 0; i < (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
              error: Error()
            }), BallManager) : BallManager).I.AllBalls.length; i++) {
              var element = (_crd && BallManager === void 0 ? (_reportPossibleCrUseOfBallManager({
                error: Error()
              }), BallManager) : BallManager).I.AllBalls[i];

              if (!element.isGoal) {
                unGoalBall.push(element);
              }
            }

            var index1 = 0;
            var index2 = 0;

            for (var _i = 0; _i < unGoalBall.length; _i++) {
              var _element = unGoalBall[_i];
              if (_element.ballNumber == 8) continue;
              var ballspriteFrameNumber = _element.ballNumber > 8 ? _element.ballNumber - 2 : _element.ballNumber - 1;

              if (_element.ballTpye == type) {
                this.Player1Balls.children[index1].getComponent(Sprite).spriteFrame = this.balls[ballspriteFrameNumber];
                console.log("player1的", index1, "张图片是", _element.ballNumber, "号球", "UI图片是", ballspriteFrameNumber);
                index1++;
              } else {
                this.Player2Balls.children[index2].getComponent(Sprite).spriteFrame = this.balls[ballspriteFrameNumber];
                index2++;
                console.log("player2的", index2, "张图片是", _element.ballNumber, "号球", "UI图片是", ballspriteFrameNumber);
              }
            }

            for (var _i2 = index1; _i2 < this.Player1Balls.children.length; _i2++) {
              var _element2 = this.Player1Balls.children[_i2];
              _element2.getComponent(Sprite).spriteFrame = null;
            }

            for (var _i3 = index2; _i3 < this.Player2Balls.children.length; _i3++) {
              var _element3 = this.Player2Balls.children[_i3];
              _element3.getComponent(Sprite).spriteFrame = null;
            }

            if (index1 == 0) {
              this.Player1Balls.children[index1].getComponent(Sprite).spriteFrame = this.balls[14];
            }

            if (index2 == 0) {
              this.Player2Balls.children[index2].getComponent(Sprite).spriteFrame = this.balls[14];
            }
          }
        }, {
          key: "EndGame",
          value: function EndGame(winPlayer, lostPlayer) {
            (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
              error: Error()
            }), PopupManager) : PopupManager).I.ShowPopup(find("Canvas"), "SettlementPopup");
            (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.SettlementData.winPlayer = winPlayer;
            (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.SettlementData.lostPlayer = lostPlayer;
          }
        }, {
          key: "InitPlayerData",
          value: function InitPlayerData() {
            var top1 = find("Canvas/GameSceneUI/Top1");
            var top2 = find("Canvas/GameSceneUI/Top2"); //红色方

            var player1;
            var player2;

            if ((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.loadData.thisPlayer == (_crd && RoundType === void 0 ? (_reportPossibleCrUseOfRoundType({
              error: Error()
            }), RoundType) : RoundType).Play1) {
              top1.active = true;
              top2.active = false;
              player1 = top1.getChildByName("Player1");
              player2 = top1.getChildByName("Player2");
              this.Player1TimeSlider = find("Canvas/GameSceneUI/Top1/Player1TimeSlider/Time").getComponent(SpriteComponent);
              this.Player2TimeSlider = find("Canvas/GameSceneUI/Top1/Player2TimeSlider/Time").getComponent(SpriteComponent);
              this.Player1TimeFire = this.Player1TimeSlider.node.getChildByName("Fire");
              this.Player2TimeFire = this.Player2TimeSlider.node.getChildByName("Fire");
              this.Player1Light = find("Canvas/GameSceneUI/Top1/Player1Light");
              this.Player2Light = find("Canvas/GameSceneUI/Top1/Player2Light");
              this.Player1HeadLight = find("Canvas/GameSceneUI/Top1/Player1HeadLight");
              this.Player2HeadLight = find("Canvas/GameSceneUI/Top1/Player2HeadLight");
              this.Player1Balls = find("Canvas/GameSceneUI/Top1/Player1Ball");
              this.Player2Balls = find("Canvas/GameSceneUI/Top1/Player2Ball");
            } //蓝色方
            else {
                top1.active = false;
                top2.active = true;
                player1 = top2.getChildByName("Player1");
                player2 = top2.getChildByName("Player2");
                this.Player1TimeSlider = find("Canvas/GameSceneUI/Top2/Player1TimeSlider/Time").getComponent(SpriteComponent);
                this.Player2TimeSlider = find("Canvas/GameSceneUI/Top2/Player2TimeSlider/Time").getComponent(SpriteComponent);
                this.Player1TimeFire = this.Player1TimeSlider.node.getChildByName("Fire");
                this.Player2TimeFire = this.Player2TimeSlider.node.getChildByName("Fire");
                this.Player1Light = find("Canvas/GameSceneUI/Top2/Player1Light");
                this.Player2Light = find("Canvas/GameSceneUI/Top2/Player2Light");
                this.Player1HeadLight = find("Canvas/GameSceneUI/Top2/Player1HeadLight");
                this.Player2HeadLight = find("Canvas/GameSceneUI/Top2/Player2HeadLight");
                this.Player1Balls = find("Canvas/GameSceneUI/Top2/Player1Ball");
                this.Player2Balls = find("Canvas/GameSceneUI/Top2/Player2Ball");
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
            }), GameData) : GameData).I.RobotName;
          }
        }, {
          key: "ShowTip",
          value: function ShowTip(str) {
            this.tipBG.node.position = new Vec3(344, -430, 0);
            this.tipBG.color = new Color(255, 255, 255, 255);
            tween(this.tipBG.node).to(0.4, {
              position: new Vec3(344, -311, 0)
            }).start();
            this.tipLable.string = str;
          }
        }, {
          key: "ShowTip2",
          value: function ShowTip2(str) {
            this.toast.node.position = new Vec3(300, 110, 0);
            this.toast.color = new Color(255, 255, 255, 0);
            tween(this.toast.node).to(0.3, {
              position: new Vec3(0, 110, 0)
            }, {
              easing: "circOut"
            }).delay(0.8).to(0.3, {
              position: new Vec3(-300, 110, 0)
            }, {
              easing: "circOut"
            }).start();
            tween(this.toast.color).to(0.3, new Color(255, 255, 255, 255), {
              easing: "circOut"
            }).delay(0.8).to(0.3, new Color(255, 255, 255, 0), {
              easing: "circOut"
            }).start();
            this.toastLable.string = str;
          }
        }]);

        return GameSceneUI;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "balls", [_dec2], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0dhbWUvR2FtZUNvbW1vbi9VSS9HYW1lU2NlbmVVSS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiVmVjMyIsImZpbmQiLCJTcHJpdGVDb21wb25lbnQiLCJtYWNybyIsIlNwcml0ZUZyYW1lIiwiU3ByaXRlIiwiTGFiZWwiLCJDb2xvciIsIkxhYmVsQ29tcG9uZW50IiwidHdlZW4iLCJTb3VyY2VNYW5hZ2VyIiwiTkRCIiwiR2FtZURhdGEiLCJQb3B1cE1hbmFnZXIiLCJCYWxsTWFuYWdlciIsIkdhbWVTY2VuZU1hbmFnZXIiLCJSb3VuZFR5cGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHYW1lU2NlbmVVSSIsIkd1bkRyYWcyU2NhbGVOdW1iZXJDaGlsZHMiLCJBcnJheSIsInRvYXN0IiwidG9hc3RMYWJsZSIsImFsbFRpbWUiLCJJIiwibm9kZSIsImdldENvbXBvbmVudCIsIm9iaiIsImV2ZW50TmFtZSIsIm5hbWUiLCJzZW5kQXV0b0pvaW5FdmVudCIsIkJHTXVzaWMiLCJJbml0UGxheWVyRGF0YSIsIlNob3dQb3B1cCIsInRpcEJHIiwidGlwTGFibGUiLCJHdW5EcmFnMlNjYWxlTnVtYmVyIiwiZ2V0Q2hpbGRCeU5hbWUiLCJsZXJwIiwicG9zaXRpb24iLCJ5IiwiaW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJjZWlsIiwiY29uc29sZSIsImxvZyIsImdhbWVTdG9wIiwidGltZSIsIm51bSIsImxvYWREYXRhIiwidGhpc1BsYXllciIsIlBsYXkxIiwiUGxheWVyMVRpbWVTbGlkZXIiLCJmaWxsU3RhcnQiLCJmaWxsUmFuZ2UiLCJQbGF5ZXIxVGltZUZpcmUiLCJzZXRQb3NpdGlvbiIsIlBsYXllcjJUaW1lRmlyZSIsIlBsYXllcjJUaW1lU2xpZGVyIiwibm93UGxheWVyVHlwZSIsImFjdGl2ZSIsIlBsYXllcjFMaWdodCIsIlBsYXllcjFIZWFkTGlnaHQiLCJQbGF5ZXIyTGlnaHQiLCJQbGF5ZXIySGVhZExpZ2h0IiwiUm91bmRFbmRDaGFuZ2VQbGF5ZXIiLCJzY2hlZHVsZSIsIlBsYXllclRpbWUiLCJSRVBFQVRfRk9SRVZFUiIsInVuc2NoZWR1bGUiLCJQbGF5ZXJzIiwiVHlwZU9mQmFsbFRvQmVIaXQiLCJ0eXBlIiwidW5Hb2FsQmFsbCIsImkiLCJBbGxCYWxscyIsImxlbmd0aCIsImVsZW1lbnQiLCJpc0dvYWwiLCJwdXNoIiwiaW5kZXgxIiwiaW5kZXgyIiwiYmFsbE51bWJlciIsImJhbGxzcHJpdGVGcmFtZU51bWJlciIsImJhbGxUcHllIiwiUGxheWVyMUJhbGxzIiwiY2hpbGRyZW4iLCJzcHJpdGVGcmFtZSIsImJhbGxzIiwiUGxheWVyMkJhbGxzIiwid2luUGxheWVyIiwibG9zdFBsYXllciIsIlNldHRsZW1lbnREYXRhIiwidG9wMSIsInRvcDIiLCJwbGF5ZXIxIiwicGxheWVyMiIsInBsYXllcjFIZWFkSW1hZ2UiLCJwbGF5ZXIxTmFtZSIsInBsYXllcjJIZWFkSW1hZ2UiLCJwbGF5ZXIyTmFtZSIsInRoaXNwbGF5ZXJIZWFkSW1hZ2UiLCJzdHJpbmciLCJ0aGlzUGxheWVyTmFtZSIsIlJvYm90SGVhZEltYWdlIiwiUm9ib3ROYW1lIiwic3RyIiwiY29sb3IiLCJ0byIsInN0YXJ0IiwiZWFzaW5nIiwiZGVsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWlCQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFBQUEsSyxPQUFBQSxLO0FBQWFDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxNLE9BQUFBLE07QUFB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O0FBQ0FFLFlBQUFBLEtBQUssQ0FBQyxLQUFLYSxLQUFMLENBQVdJLElBQVosQ0FBTCxDQUNLb0YsRUFETCxDQUNRLEdBRFIsRUFDYTtBQUFFdEUsY0FBQUEsUUFBUSxFQUFFLElBQUl4QyxJQUFKLENBQVMsQ0FBVCxFQUFZLEdBQVosRUFBaUIsQ0FBakI7QUFBWixhQURiLEVBQytDO0FBQUNnSCxjQUFBQSxNQUFNLEVBQUM7QUFBUixhQUQvQyxFQUVLQyxLQUZMLENBRVcsR0FGWCxFQUdLSCxFQUhMLENBR1EsR0FIUixFQUdhO0FBQUV0RSxjQUFBQSxRQUFRLEVBQUUsSUFBSXhDLElBQUosQ0FBUyxDQUFDLEdBQVYsRUFBZSxHQUFmLEVBQW9CLENBQXBCO0FBQVosYUFIYixFQUdrRDtBQUFDZ0gsY0FBQUEsTUFBTSxFQUFDO0FBQVIsYUFIbEQsRUFHc0VELEtBSHRFO0FBSUF0RyxZQUFBQSxLQUFLLENBQUMsS0FBS2EsS0FBTCxDQUFXdUYsS0FBWixDQUFMLENBQ0tDLEVBREwsQ0FDUSxHQURSLEVBQ2EsSUFBSXZHLEtBQUosQ0FBVSxHQUFWLEVBQWUsR0FBZixFQUFvQixHQUFwQixFQUF5QixHQUF6QixDQURiLEVBQzJDO0FBQUN5RyxjQUFBQSxNQUFNLEVBQUM7QUFBUixhQUQzQyxFQUVLQyxLQUZMLENBRVcsR0FGWCxFQUdLSCxFQUhMLENBR1EsR0FIUixFQUdhLElBQUl2RyxLQUFKLENBQVUsR0FBVixFQUFlLEdBQWYsRUFBb0IsR0FBcEIsRUFBeUIsQ0FBekIsQ0FIYixFQUd5QztBQUFDeUcsY0FBQUEsTUFBTSxFQUFDO0FBQVIsYUFIekMsRUFHNkRELEtBSDdEO0FBSUEsaUJBQUt4RixVQUFMLENBQWdCaUYsTUFBaEIsR0FBeUJJLEdBQXpCO0FBQ0g7Ozs7UUFuUDRCN0csUzs7Ozs7aUJBZUUsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVmVjMywgZmluZCwgU3ByaXRlQ29tcG9uZW50LCBtYWNybywgR2FtZSwgU3ByaXRlRnJhbWUsIFNwcml0ZSwgTGFiZWwsIFZlYzQsIENvbG9yLCBMYWJlbENvbXBvbmVudCwgdHdlZW4sIEFuaW1hdGlvbkNvbXBvbmVudCB9IGZyb20gJ2NjJztcbmltcG9ydCB7IFNvdXJjZU1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi9Db21tb24vU291cmNlTWFuYWdlcic7XG5pbXBvcnQgTkRCIGZyb20gJy4uLy4uLy4uL1V0aWxzL05EQlRTJztcbmltcG9ydCB7IEdhbWVEYXRhIH0gZnJvbSAnLi4vLi4vR2FtZURhdGEnO1xuaW1wb3J0IHsgUG9wdXBNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vUG9wdXAvUG9wdXBNYW5hZ2VyJztcbmltcG9ydCB7IEJhbGwgfSBmcm9tICcuLi9CYWxsL0JhbGwnO1xuaW1wb3J0IHsgQmFsbE1hbmFnZXIgfSBmcm9tICcuLi9CYWxsL0JhbGxNYW5hZ2VyJztcbmltcG9ydCB7IEJhbGxUeXBlIH0gZnJvbSAnLi4vQmFsbC9CYWxsVHlwZSc7XG5pbXBvcnQgeyBHYW1lU2NlbmVNYW5hZ2VyIH0gZnJvbSAnLi4vR2FtZVNjZW5lTWFuYWdlcic7XG5pbXBvcnQgeyBSb3VuZFR5cGUgfSBmcm9tICcuLi9Sb3VuZFR5cGUnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0dhbWVTY2VuZVVJJylcbmV4cG9ydCBjbGFzcyBHYW1lU2NlbmVVSSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIEk6IEdhbWVTY2VuZVVJO1xuICAgIHByaXZhdGUgR3VuRHJhZzJTY2FsZU51bWJlcjogTm9kZTtcbiAgICBwcml2YXRlIEd1bkRyYWcyU2NhbGVOdW1iZXJDaGlsZHM6IEFycmF5PE5vZGU+ID0gbmV3IEFycmF5PE5vZGU+KDMpO1xuICAgIHByaXZhdGUgR3VuRHJhZzJTY2FsZU51bWJlckNoaWxkMDI6IE5vZGU7XG4gICAgcHJpdmF0ZSBHdW5EcmFnMlNjYWxlTnVtYmVyQ2hpbGQwMzogTm9kZTtcbiAgICBwdWJsaWMgUGxheWVyMVRpbWVTbGlkZXI6IFNwcml0ZUNvbXBvbmVudDtcbiAgICBwdWJsaWMgUGxheWVyMVRpbWVGaXJlOiBOb2RlO1xuICAgIHB1YmxpYyBQbGF5ZXIyVGltZVNsaWRlcjogU3ByaXRlQ29tcG9uZW50O1xuICAgIHB1YmxpYyBQbGF5ZXIyVGltZUZpcmU6IE5vZGU7XG4gICAgcHJpdmF0ZSBQbGF5ZXIxTGlnaHQ6IE5vZGU7XG4gICAgcHJpdmF0ZSBQbGF5ZXIxSGVhZExpZ2h0OiBOb2RlO1xuICAgIHByaXZhdGUgUGxheWVyMkhlYWRMaWdodDogTm9kZTtcbiAgICBwcml2YXRlIFBsYXllcjJMaWdodDogTm9kZTtcbiAgICBAcHJvcGVydHkoU3ByaXRlRnJhbWUpXG4gICAgcHJpdmF0ZSBiYWxsczogU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSBQbGF5ZXIxQmFsbHM6IE5vZGU7XG4gICAgcHJpdmF0ZSBQbGF5ZXIyQmFsbHM6IE5vZGU7XG5cbiAgICB0aXBCRzogU3ByaXRlQ29tcG9uZW50O1xuICAgIHRpcExhYmxlOiBMYWJlbENvbXBvbmVudDtcblxuICAgIHRvYXN0OiBTcHJpdGVDb21wb25lbnQgPSBudWxsO1xuICAgIHRvYXN0TGFibGU6IExhYmVsQ29tcG9uZW50ID0gbnVsbDtcblxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBHYW1lU2NlbmVVSS5JID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChHYW1lU2NlbmVVSSk7XG4gICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICBldmVudE5hbWU6IFwiZ2FtZV9zdGFydFwiLFxuICAgICAgICAgICAgbmFtZTogXCI4YmFsbFwiLFxuICAgICAgICB9XG4gICAgICAgIE5EQi5zZW5kQXV0b0pvaW5FdmVudChvYmopO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICBTb3VyY2VNYW5hZ2VyLkkuQkdNdXNpYygpO1xuICAgICAgICB0aGlzLkluaXRQbGF5ZXJEYXRhKCk7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICBQb3B1cE1hbmFnZXIuSS5TaG93UG9wdXAoZmluZChcIkNhbnZhc1wiKSwgXCJNYXRjaGluZ1BvcHVwXCIpO1xuICAgICAgICB0aGlzLnRpcEJHID0gZmluZChcIkNhbnZhcy9HYW1lU2NlbmVVSS9UaXBCR1wiKS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KTtcbiAgICAgICAgdGhpcy50aXBMYWJsZSA9IGZpbmQoXCJDYW52YXMvR2FtZVNjZW5lVUkvVGlwQkcvVGlwTGFibGVcIikuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KTtcblxuICAgICAgICB0aGlzLnRvYXN0ID0gZmluZChcIkNhbnZhcy90b2FzdFwiKS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KTtcbiAgICAgICAgdGhpcy50b2FzdExhYmxlID0gZmluZChcIkNhbnZhcy90b2FzdC9UZXh0XCIpLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCk7XG5cbiAgICAgICAgdGhpcy5HdW5EcmFnMlNjYWxlTnVtYmVyID0gZmluZChcIkNhbnZhcy9HdW5EcmFnMi9tYXNrL05vZGVcIik7XG4gICAgICAgIHRoaXMuR3VuRHJhZzJTY2FsZU51bWJlckNoaWxkc1swXSA9IHRoaXMuR3VuRHJhZzJTY2FsZU51bWJlci5nZXRDaGlsZEJ5TmFtZShcIk51bWJlcjFcIik7XG4gICAgICAgIHRoaXMuR3VuRHJhZzJTY2FsZU51bWJlckNoaWxkc1sxXSA9IHRoaXMuR3VuRHJhZzJTY2FsZU51bWJlci5nZXRDaGlsZEJ5TmFtZShcIk51bWJlcjJcIik7XG4gICAgICAgIHRoaXMuR3VuRHJhZzJTY2FsZU51bWJlckNoaWxkc1syXSA9IHRoaXMuR3VuRHJhZzJTY2FsZU51bWJlci5nZXRDaGlsZEJ5TmFtZShcIk51bWJlcjNcIik7XG4gICAgfVxuICAgIEd1bkRyYWcyU2NhbGVOdW1iZXJNb3ZlKGxlcnApIHtcbiAgICAgICAgdGhpcy5HdW5EcmFnMlNjYWxlTnVtYmVyLnBvc2l0aW9uID0gbmV3IFZlYzMoMCwgdGhpcy5HdW5EcmFnMlNjYWxlTnVtYmVyLnBvc2l0aW9uLnkgLSBsZXJwLCAwKTtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5HdW5EcmFnMlNjYWxlTnVtYmVyLnBvc2l0aW9uLnkgLyAzOTUgPiAwID8gTWF0aC5mbG9vcih0aGlzLkd1bkRyYWcyU2NhbGVOdW1iZXIucG9zaXRpb24ueSAvIDM5NSkgOiBNYXRoLmNlaWwodGhpcy5HdW5EcmFnMlNjYWxlTnVtYmVyLnBvc2l0aW9uLnkgLyAzOTUpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICAgIHRoaXMuR3VuRHJhZzJTY2FsZU51bWJlckNoaWxkc1swXS5wb3NpdGlvbiA9IG5ldyBWZWMzKDAsIC0oaW5kZXggKyAxKSAqIDM5NSwgMCk7XG4gICAgICAgIHRoaXMuR3VuRHJhZzJTY2FsZU51bWJlckNoaWxkc1sxXS5wb3NpdGlvbiA9IG5ldyBWZWMzKDAsIC0oaW5kZXgpICogMzk1LCAwKTtcbiAgICAgICAgdGhpcy5HdW5EcmFnMlNjYWxlTnVtYmVyQ2hpbGRzWzJdLnBvc2l0aW9uID0gbmV3IFZlYzMoMCwgLShpbmRleCAtIDEpICogMzk1LCAwKTtcbiAgICB9XG4gICAgdGltZTogbnVtYmVyXG4gICAgYWxsVGltZTogbnVtYmVyID0gMzA7XG4gICAgUGxheWVyVGltZSgpIHtcbiAgICAgICAgaWYgKEdhbWVEYXRhLkkuZ2FtZVN0b3ApIHJldHVybjtcbiAgICAgICAgdGhpcy50aW1lIC09IDAuMTtcbiAgICAgICAgbGV0IG51bSA9IDE7XG4gICAgICAgIGlmIChHYW1lRGF0YS5JLmxvYWREYXRhLnRoaXNQbGF5ZXIgPT0gUm91bmRUeXBlLlBsYXkxKSB7XG4gICAgICAgICAgICBudW0gPSAxO1xuICAgICAgICAgICAgdGhpcy5QbGF5ZXIxVGltZVNsaWRlci5maWxsU3RhcnQgPSAxO1xuICAgICAgICAgICAgdGhpcy5QbGF5ZXIxVGltZVNsaWRlci5maWxsUmFuZ2UgPSAtMTtcbiAgICAgICAgICAgIHRoaXMuUGxheWVyMVRpbWVGaXJlLnNldFBvc2l0aW9uKG5ldyBWZWMzKC0zMDAuMzMsIDAsIDApKTtcbiAgICAgICAgICAgIHRoaXMuUGxheWVyMlRpbWVGaXJlLnNldFBvc2l0aW9uKG5ldyBWZWMzKDMwMC4zMywgMCwgMCkpO1xuICAgICAgICAgICAgdGhpcy5QbGF5ZXIyVGltZVNsaWRlci5maWxsU3RhcnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5QbGF5ZXIyVGltZVNsaWRlci5maWxsUmFuZ2UgPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbnVtID0gLTFcbiAgICAgICAgICAgIHRoaXMuUGxheWVyMVRpbWVTbGlkZXIuZmlsbFN0YXJ0ID0gMDtcbiAgICAgICAgICAgIHRoaXMuUGxheWVyMlRpbWVTbGlkZXIuZmlsbFN0YXJ0ID0gMTtcbiAgICAgICAgICAgIHRoaXMuUGxheWVyMVRpbWVTbGlkZXIuZmlsbFJhbmdlID0gMTtcbiAgICAgICAgICAgIHRoaXMuUGxheWVyMlRpbWVTbGlkZXIuZmlsbFJhbmdlID0gLTE7XG4gICAgICAgICAgICB0aGlzLlBsYXllcjFUaW1lRmlyZS5zZXRQb3NpdGlvbihuZXcgVmVjMygzMDAuMzMsIDAsIDApKTtcbiAgICAgICAgICAgIHRoaXMuUGxheWVyMlRpbWVGaXJlLnNldFBvc2l0aW9uKG5ldyBWZWMzKC0zMDAuMzMsIDAsIDApKVxuICAgICAgICB9XG4gICAgICAgIGxldCBsZXJwID0gdGhpcy50aW1lIC8gdGhpcy5hbGxUaW1lO1xuXG4gICAgICAgIGlmIChHYW1lU2NlbmVNYW5hZ2VyLkkubm93UGxheWVyVHlwZSA9PSBSb3VuZFR5cGUuUGxheTEpIHtcbiAgICAgICAgICAgIHRoaXMuUGxheWVyMVRpbWVTbGlkZXIuZmlsbFJhbmdlID0gLW51bSAqIGxlcnA7XG4gICAgICAgICAgICB0aGlzLlBsYXllcjFUaW1lRmlyZS5zZXRQb3NpdGlvbihuZXcgVmVjMygtbnVtICogMzAwLjMzICogbGVycCwgMCwgMCkpO1xuICAgICAgICAgICAgdGhpcy5QbGF5ZXIxVGltZUZpcmUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuUGxheWVyMlRpbWVGaXJlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5QbGF5ZXIxTGlnaHQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuUGxheWVyMUhlYWRMaWdodC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5QbGF5ZXIyTGlnaHQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLlBsYXllcjJIZWFkTGlnaHQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAobGVycCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgR2FtZVNjZW5lTWFuYWdlci5JLlJvdW5kRW5kQ2hhbmdlUGxheWVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLlBsYXllcjJUaW1lU2xpZGVyLmZpbGxSYW5nZSA9IG51bSAqIGxlcnA7XG4gICAgICAgICAgICB0aGlzLlBsYXllcjJUaW1lRmlyZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5QbGF5ZXIyVGltZUZpcmUuc2V0UG9zaXRpb24obmV3IFZlYzMobnVtICogMzAwLjMzICogbGVycCwgMCwgMCkpO1xuICAgICAgICAgICAgdGhpcy5QbGF5ZXIxVGltZUZpcmUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLlBsYXllcjFMaWdodC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuUGxheWVyMUhlYWRMaWdodC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuUGxheWVyMkxpZ2h0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLlBsYXllcjJIZWFkTGlnaHQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChsZXJwIDw9IDApIHtcbiAgICAgICAgICAgICAgICBHYW1lU2NlbmVNYW5hZ2VyLkkuUm91bmRFbmRDaGFuZ2VQbGF5ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIFN0YXJ0UmVja29uVGltZSgpIHtcbiAgICAgICAgdGhpcy50aW1lID0gMzA7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5QbGF5ZXJUaW1lLCAwLjEsIG1hY3JvLlJFUEVBVF9GT1JFVkVSLCAwKTtcbiAgICB9XG4gICAgRW5kUmVja29uVGltZSgpIHtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuUGxheWVyVGltZSk7XG5cbiAgICB9XG5cbiAgICBzaG93QmFsbCgpIHtcbiAgICAgICAgaWYgKEdhbWVTY2VuZU1hbmFnZXIuSS5QbGF5ZXJzW1JvdW5kVHlwZS5QbGF5MV0uVHlwZU9mQmFsbFRvQmVIaXQgIT0gMCAmJiBHYW1lU2NlbmVNYW5hZ2VyLkkuUGxheWVyc1tSb3VuZFR5cGUuUGxheTFdLlR5cGVPZkJhbGxUb0JlSGl0ICE9IDEgJiYgR2FtZVNjZW5lTWFuYWdlci5JLlBsYXllcnNbUm91bmRUeXBlLlBsYXkxXS5UeXBlT2ZCYWxsVG9CZUhpdCAhPSAzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIueQg+exu+Wei+i/mOacquaMh+WumlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdHlwZSA9IEdhbWVTY2VuZU1hbmFnZXIuSS5QbGF5ZXJzW1JvdW5kVHlwZS5QbGF5MV0uVHlwZU9mQmFsbFRvQmVIaXQ7XG4gICAgICAgIGxldCB1bkdvYWxCYWxsOiBBcnJheTxCYWxsPiA9IG5ldyBBcnJheTxCYWxsPigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEJhbGxNYW5hZ2VyLkkuQWxsQmFsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBCYWxsTWFuYWdlci5JLkFsbEJhbGxzW2ldO1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50LmlzR29hbCkge1xuICAgICAgICAgICAgICAgIHVuR29hbEJhbGwucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgaW5kZXgxID0gMDtcbiAgICAgICAgbGV0IGluZGV4MiA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW5Hb2FsQmFsbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHVuR29hbEJhbGxbaV07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5iYWxsTnVtYmVyID09IDgpIGNvbnRpbnVlO1xuICAgICAgICAgICAgbGV0IGJhbGxzcHJpdGVGcmFtZU51bWJlciA9IGVsZW1lbnQuYmFsbE51bWJlciA+IDggPyBlbGVtZW50LmJhbGxOdW1iZXIgLSAyIDogZWxlbWVudC5iYWxsTnVtYmVyIC0gMTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmJhbGxUcHllID09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllcjFCYWxscy5jaGlsZHJlbltpbmRleDFdLmdldENvbXBvbmVudChTcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5iYWxsc1tiYWxsc3ByaXRlRnJhbWVOdW1iZXJdO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyMeeahFwiLCBpbmRleDEsIFwi5byg5Zu+54mH5pivXCIsIGVsZW1lbnQuYmFsbE51bWJlciwgXCLlj7fnkINcIiwgXCJVSeWbvueJh+aYr1wiLCBiYWxsc3ByaXRlRnJhbWVOdW1iZXIpO1xuICAgICAgICAgICAgICAgIGluZGV4MSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLlBsYXllcjJCYWxscy5jaGlsZHJlbltpbmRleDJdLmdldENvbXBvbmVudChTcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5iYWxsc1tiYWxsc3ByaXRlRnJhbWVOdW1iZXJdO1xuICAgICAgICAgICAgICAgIGluZGV4MisrO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyMueahFwiLCBpbmRleDIsIFwi5byg5Zu+54mH5pivXCIsIGVsZW1lbnQuYmFsbE51bWJlciwgXCLlj7fnkINcIiwgXCJVSeWbvueJh+aYr1wiLCBiYWxsc3ByaXRlRnJhbWVOdW1iZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IGluZGV4MTsgaSA8IHRoaXMuUGxheWVyMUJhbGxzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5QbGF5ZXIxQmFsbHMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBlbGVtZW50LmdldENvbXBvbmVudChTcHJpdGUpLnNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gaW5kZXgyOyBpIDwgdGhpcy5QbGF5ZXIyQmFsbHMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLlBsYXllcjJCYWxscy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGVsZW1lbnQuZ2V0Q29tcG9uZW50KFNwcml0ZSkuc3ByaXRlRnJhbWUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4MSA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLlBsYXllcjFCYWxscy5jaGlsZHJlbltpbmRleDFdLmdldENvbXBvbmVudChTcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5iYWxsc1sxNF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4MiA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLlBsYXllcjJCYWxscy5jaGlsZHJlbltpbmRleDJdLmdldENvbXBvbmVudChTcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5iYWxsc1sxNF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgRW5kR2FtZSh3aW5QbGF5ZXIsIGxvc3RQbGF5ZXIpIHtcbiAgICAgICAgUG9wdXBNYW5hZ2VyLkkuU2hvd1BvcHVwKGZpbmQoXCJDYW52YXNcIiksIFwiU2V0dGxlbWVudFBvcHVwXCIpO1xuICAgICAgICBHYW1lRGF0YS5JLlNldHRsZW1lbnREYXRhLndpblBsYXllciA9IHdpblBsYXllcjtcbiAgICAgICAgR2FtZURhdGEuSS5TZXR0bGVtZW50RGF0YS5sb3N0UGxheWVyID0gbG9zdFBsYXllcjtcbiAgICB9XG4gICAgSW5pdFBsYXllckRhdGEoKSB7XG4gICAgICAgIGxldCB0b3AxID0gZmluZChcIkNhbnZhcy9HYW1lU2NlbmVVSS9Ub3AxXCIpO1xuICAgICAgICBsZXQgdG9wMiA9IGZpbmQoXCJDYW52YXMvR2FtZVNjZW5lVUkvVG9wMlwiKTtcbiAgICAgICAgLy/nuqLoibLmlrlcbiAgICAgICAgbGV0IHBsYXllcjFcbiAgICAgICAgbGV0IHBsYXllcjJcbiAgICAgICAgaWYgKEdhbWVEYXRhLkkubG9hZERhdGEudGhpc1BsYXllciA9PSBSb3VuZFR5cGUuUGxheTEpIHtcbiAgICAgICAgICAgIHRvcDEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRvcDIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBwbGF5ZXIxID0gdG9wMS5nZXRDaGlsZEJ5TmFtZShcIlBsYXllcjFcIik7XG4gICAgICAgICAgICBwbGF5ZXIyID0gdG9wMS5nZXRDaGlsZEJ5TmFtZShcIlBsYXllcjJcIik7XG4gICAgICAgICAgICB0aGlzLlBsYXllcjFUaW1lU2xpZGVyID0gZmluZChcIkNhbnZhcy9HYW1lU2NlbmVVSS9Ub3AxL1BsYXllcjFUaW1lU2xpZGVyL1RpbWVcIikuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCk7XG4gICAgICAgICAgICB0aGlzLlBsYXllcjJUaW1lU2xpZGVyID0gZmluZChcIkNhbnZhcy9HYW1lU2NlbmVVSS9Ub3AxL1BsYXllcjJUaW1lU2xpZGVyL1RpbWVcIikuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCk7XG4gICAgICAgICAgICB0aGlzLlBsYXllcjFUaW1lRmlyZSA9IHRoaXMuUGxheWVyMVRpbWVTbGlkZXIubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkZpcmVcIik7XG4gICAgICAgICAgICB0aGlzLlBsYXllcjJUaW1lRmlyZSA9IHRoaXMuUGxheWVyMlRpbWVTbGlkZXIubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkZpcmVcIik7XG4gICAgICAgICAgICB0aGlzLlBsYXllcjFMaWdodCA9IGZpbmQoXCJDYW52YXMvR2FtZVNjZW5lVUkvVG9wMS9QbGF5ZXIxTGlnaHRcIik7XG4gICAgICAgICAgICB0aGlzLlBsYXllcjJMaWdodCA9IGZpbmQoXCJDYW52YXMvR2FtZVNjZW5lVUkvVG9wMS9QbGF5ZXIyTGlnaHRcIik7XG4gICAgICAgICAgICB0aGlzLlBsYXllcjFIZWFkTGlnaHQgPSBmaW5kKFwiQ2FudmFzL0dhbWVTY2VuZVVJL1RvcDEvUGxheWVyMUhlYWRMaWdodFwiKTtcbiAgICAgICAgICAgIHRoaXMuUGxheWVyMkhlYWRMaWdodCA9IGZpbmQoXCJDYW52YXMvR2FtZVNjZW5lVUkvVG9wMS9QbGF5ZXIySGVhZExpZ2h0XCIpO1xuICAgICAgICAgICAgdGhpcy5QbGF5ZXIxQmFsbHMgPSBmaW5kKFwiQ2FudmFzL0dhbWVTY2VuZVVJL1RvcDEvUGxheWVyMUJhbGxcIik7XG4gICAgICAgICAgICB0aGlzLlBsYXllcjJCYWxscyA9IGZpbmQoXCJDYW52YXMvR2FtZVNjZW5lVUkvVG9wMS9QbGF5ZXIyQmFsbFwiKTtcbiAgICAgICAgfVxuICAgICAgICAvL+iTneiJsuaWuVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRvcDEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0b3AyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBwbGF5ZXIxID0gdG9wMi5nZXRDaGlsZEJ5TmFtZShcIlBsYXllcjFcIik7XG4gICAgICAgICAgICBwbGF5ZXIyID0gdG9wMi5nZXRDaGlsZEJ5TmFtZShcIlBsYXllcjJcIik7XG4gICAgICAgICAgICB0aGlzLlBsYXllcjFUaW1lU2xpZGVyID0gZmluZChcIkNhbnZhcy9HYW1lU2NlbmVVSS9Ub3AyL1BsYXllcjFUaW1lU2xpZGVyL1RpbWVcIikuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCk7XG4gICAgICAgICAgICB0aGlzLlBsYXllcjJUaW1lU2xpZGVyID0gZmluZChcIkNhbnZhcy9HYW1lU2NlbmVVSS9Ub3AyL1BsYXllcjJUaW1lU2xpZGVyL1RpbWVcIikuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCk7XG4gICAgICAgICAgICB0aGlzLlBsYXllcjFUaW1lRmlyZSA9IHRoaXMuUGxheWVyMVRpbWVTbGlkZXIubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkZpcmVcIik7XG4gICAgICAgICAgICB0aGlzLlBsYXllcjJUaW1lRmlyZSA9IHRoaXMuUGxheWVyMlRpbWVTbGlkZXIubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkZpcmVcIik7XG4gICAgICAgICAgICB0aGlzLlBsYXllcjFMaWdodCA9IGZpbmQoXCJDYW52YXMvR2FtZVNjZW5lVUkvVG9wMi9QbGF5ZXIxTGlnaHRcIik7XG4gICAgICAgICAgICB0aGlzLlBsYXllcjJMaWdodCA9IGZpbmQoXCJDYW52YXMvR2FtZVNjZW5lVUkvVG9wMi9QbGF5ZXIyTGlnaHRcIik7XG4gICAgICAgICAgICB0aGlzLlBsYXllcjFIZWFkTGlnaHQgPSBmaW5kKFwiQ2FudmFzL0dhbWVTY2VuZVVJL1RvcDIvUGxheWVyMUhlYWRMaWdodFwiKTtcbiAgICAgICAgICAgIHRoaXMuUGxheWVyMkhlYWRMaWdodCA9IGZpbmQoXCJDYW52YXMvR2FtZVNjZW5lVUkvVG9wMi9QbGF5ZXIySGVhZExpZ2h0XCIpO1xuICAgICAgICAgICAgdGhpcy5QbGF5ZXIxQmFsbHMgPSBmaW5kKFwiQ2FudmFzL0dhbWVTY2VuZVVJL1RvcDIvUGxheWVyMUJhbGxcIik7XG4gICAgICAgICAgICB0aGlzLlBsYXllcjJCYWxscyA9IGZpbmQoXCJDYW52YXMvR2FtZVNjZW5lVUkvVG9wMi9QbGF5ZXIyQmFsbFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwbGF5ZXIxSGVhZEltYWdlID0gcGxheWVyMS5nZXRDaGlsZEJ5TmFtZShcIk1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJIZWFkSW1hZ2VcIik7XG4gICAgICAgIGxldCBwbGF5ZXIxTmFtZSA9IHBsYXllcjEuZ2V0Q2hpbGRCeU5hbWUoXCJOYW1lXCIpO1xuICAgICAgICBsZXQgcGxheWVyMkhlYWRJbWFnZSA9IHBsYXllcjIuZ2V0Q2hpbGRCeU5hbWUoXCJNYXNrXCIpLmdldENoaWxkQnlOYW1lKFwiSGVhZEltYWdlXCIpO1xuICAgICAgICBsZXQgcGxheWVyMk5hbWUgPSBwbGF5ZXIyLmdldENoaWxkQnlOYW1lKFwiTmFtZVwiKTtcblxuICAgICAgICAvLyDpnIDopoHmlbDmja4g546p5a625aS05YOP5L+h5oGvLOWQjeWtl+OAguWvueaJi+WktOWDjyzlkI3lrZdcbiAgICAgICAgcGxheWVyMUhlYWRJbWFnZS5nZXRDb21wb25lbnQoU3ByaXRlKS5zcHJpdGVGcmFtZSA9IEdhbWVEYXRhLkkudGhpc3BsYXllckhlYWRJbWFnZTtcbiAgICAgICAgcGxheWVyMU5hbWUuZ2V0Q29tcG9uZW50KExhYmVsKS5zdHJpbmcgPSBHYW1lRGF0YS5JLnRoaXNQbGF5ZXJOYW1lO1xuICAgICAgICBwbGF5ZXIySGVhZEltYWdlLmdldENvbXBvbmVudChTcHJpdGUpLnNwcml0ZUZyYW1lID0gR2FtZURhdGEuSS5Sb2JvdEhlYWRJbWFnZTtcbiAgICAgICAgcGxheWVyMk5hbWUuZ2V0Q29tcG9uZW50KExhYmVsKS5zdHJpbmcgPSBHYW1lRGF0YS5JLlJvYm90TmFtZTtcblxuICAgIH1cbiAgICBTaG93VGlwKHN0cjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudGlwQkcubm9kZS5wb3NpdGlvbiA9IG5ldyBWZWMzKDM0NCwgLTQzMCwgMClcbiAgICAgICAgdGhpcy50aXBCRy5jb2xvciA9IG5ldyBDb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICB0d2Vlbih0aGlzLnRpcEJHLm5vZGUpLnRvKDAuNCwgeyBwb3NpdGlvbjogbmV3IFZlYzMoMzQ0LCAtMzExLCAwKSB9KS5zdGFydCgpO1xuICAgICAgICB0aGlzLnRpcExhYmxlLnN0cmluZyA9IHN0cjtcbiAgICB9XG4gICAgU2hvd1RpcDIoc3RyOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50b2FzdC5ub2RlLnBvc2l0aW9uID0gbmV3IFZlYzMoMzAwLCAxMTAsIDApXG4gICAgICAgIHRoaXMudG9hc3QuY29sb3IgPSBuZXcgQ29sb3IoMjU1LCAyNTUsIDI1NSwgMCk7XG4gICAgICAgIHR3ZWVuKHRoaXMudG9hc3Qubm9kZSlcbiAgICAgICAgICAgIC50bygwLjMsIHsgcG9zaXRpb246IG5ldyBWZWMzKDAsIDExMCwgMCkgfSx7ZWFzaW5nOlwiY2lyY091dFwifSlcbiAgICAgICAgICAgIC5kZWxheSgwLjgpXG4gICAgICAgICAgICAudG8oMC4zLCB7IHBvc2l0aW9uOiBuZXcgVmVjMygtMzAwLCAxMTAsIDApIH0se2Vhc2luZzpcImNpcmNPdXRcIn0pLnN0YXJ0KCk7XG4gICAgICAgIHR3ZWVuKHRoaXMudG9hc3QuY29sb3IpXG4gICAgICAgICAgICAudG8oMC4zLCBuZXcgQ29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KSx7ZWFzaW5nOlwiY2lyY091dFwifSlcbiAgICAgICAgICAgIC5kZWxheSgwLjgpXG4gICAgICAgICAgICAudG8oMC4zLCBuZXcgQ29sb3IoMjU1LCAyNTUsIDI1NSwgMCkse2Vhc2luZzpcImNpcmNPdXRcIn0pLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMudG9hc3RMYWJsZS5zdHJpbmcgPSBzdHI7XG4gICAgfVxufVxuIl19