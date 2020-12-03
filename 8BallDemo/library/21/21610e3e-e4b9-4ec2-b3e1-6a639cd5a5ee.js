System.register(["cc", "code-quality:cr", "../Game/GameCommon/UI/MainSceneUI.js", "../Game/GameData.js", "../Game/Popup/PopupManager.js", "../Utils/MKMessageManager.js", "../Utils/MKMessageType.js", "../Utils/MKResourcesManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, SpriteFrame, find, MainSceneUI, GameData, PopupManager, MKMessageManager, MKMessageType, MKResourcesManager, _dec, _class, _crd, ccclass, property, ServerCommon;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _reportPossibleCrUseOfMainSceneUI(extras) {
    _reporterNs.report("MainSceneUI", "../Game/GameCommon/UI/MainSceneUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../Game/GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopupManager(extras) {
    _reporterNs.report("PopupManager", "../Game/Popup/PopupManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMKMessageManager(extras) {
    _reporterNs.report("MKMessageManager", "../Utils/MKMessageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMKMessageType(extras) {
    _reporterNs.report("MKMessageType", "../Utils/MKMessageType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMKResourcesManager(extras) {
    _reporterNs.report("MKResourcesManager", "../Utils/MKResourcesManager", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      SpriteFrame = _cc.SpriteFrame;
      find = _cc.find;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GameGameCommonUIMainSceneUIJs) {
      MainSceneUI = _GameGameCommonUIMainSceneUIJs.MainSceneUI;
    }, function (_GameGameDataJs) {
      GameData = _GameGameDataJs.GameData;
    }, function (_GamePopupPopupManagerJs) {
      PopupManager = _GamePopupPopupManagerJs.PopupManager;
    }, function (_UtilsMKMessageManagerJs) {
      MKMessageManager = _UtilsMKMessageManagerJs.default;
    }, function (_UtilsMKMessageTypeJs) {
      MKMessageType = _UtilsMKMessageTypeJs.default;
    }, function (_UtilsMKResourcesManagerJs) {
      MKResourcesManager = _UtilsMKResourcesManagerJs.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "216104+5LlOwrPhamOc1aXu", "ServerCommon", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ServerCommon", ServerCommon = (_dec = ccclass('ServerCommon'), _dec(_class = /*#__PURE__*/function () {
        function ServerCommon() {
          _classCallCheck(this, ServerCommon);
        }

        _createClass(ServerCommon, [{
          key: "leaveGame",
          //离开游戏；
          value: function leaveGame() {
            (_crd && MKMessageManager === void 0 ? (_reportPossibleCrUseOfMKMessageManager({
              error: Error()
            }), MKMessageManager) : MKMessageManager).httpResult('post', (_crd && MKMessageType === void 0 ? (_reportPossibleCrUseOfMKMessageType({
              error: Error()
            }), MKMessageType) : MKMessageType).LEAVE, {}, function (data) {
              console.log(data);
            });
          }
        }], [{
          key: "startGame",
          value: function startGame() {
            if (!ServerCommon.userId) this.getUserinfo(ServerCommon.GetCoin);else {
              console.log("+++++++++++", (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                error: Error()
              }), GameData) : GameData).I.allMoney);

              if ((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                error: Error()
              }), GameData) : GameData).I.allMoney >= 100) {
                ServerCommon.join();
              } else {
                ServerCommon.GetCoin();
              }
            }
          }
        }, {
          key: "JoinGame",
          value: function JoinGame() {
            ServerCommon.GetCoin();
          }
          /**获取个人信息并且设置；
           * @param return data = {userId:0,userName:"",coin=0,HeadImage=null}
           */

        }, {
          key: "getUserinfo",
          value: function getUserinfo() {
            var _this = this;

            var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            (_crd && MKMessageManager === void 0 ? (_reportPossibleCrUseOfMKMessageManager({
              error: Error()
            }), MKMessageManager) : MKMessageManager).getUserInfo(function (userInfo) {
              if (userInfo && userInfo.userId) {
                ServerCommon.userId = userInfo.userId;

                var userName = _this.subNickName(userInfo.userName);

                (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                  error: Error()
                }), GameData) : GameData).I.thisPlayerName = userName;
                var avatar = userInfo.avatar;
                (_crd && MKResourcesManager === void 0 ? (_reportPossibleCrUseOfMKResourcesManager({
                  error: Error()
                }), MKResourcesManager) : MKResourcesManager).loadHeadImag(avatar, ServerCommon.userId, 3, function (res) {
                  var spriteFrame = new SpriteFrame();
                  spriteFrame = SpriteFrame.createWithImage(res);
                  (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                    error: Error()
                  }), GameData) : GameData).I.thisplayerHeadImage = spriteFrame;
                  (_crd && MainSceneUI === void 0 ? (_reportPossibleCrUseOfMainSceneUI({
                    error: Error()
                  }), MainSceneUI) : MainSceneUI).I.SetPlayersData();
                });

                if (func) {
                  func();
                }
              } else {
                (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
                  error: Error()
                }), PopupManager) : PopupManager).I.ShowPopup(find("Canvas"), "ErrTipPopup", true);
                (_crd && MainSceneUI === void 0 ? (_reportPossibleCrUseOfMainSceneUI({
                  error: Error()
                }), MainSceneUI) : MainSceneUI).I.PlayBtn.active = true;
              }
            });
          }
        }, {
          key: "GetCoin",
          value: function GetCoin() {
            var _this2 = this;

            console.log("=++++++++++游戏币============================");
            (_crd && MKMessageManager === void 0 ? (_reportPossibleCrUseOfMKMessageManager({
              error: Error()
            }), MKMessageManager) : MKMessageManager).httpResult('get', (_crd && MKMessageType === void 0 ? (_reportPossibleCrUseOfMKMessageType({
              error: Error()
            }), MKMessageType) : MKMessageType).ASSETS, {}, function (data) {
              console.log("=====================游戏币============================");
              console.log(data);

              if (data && data.diamond != null) {
                (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                  error: Error()
                }), GameData) : GameData).I.allMoney = data.diamond;
                (_crd && MainSceneUI === void 0 ? (_reportPossibleCrUseOfMainSceneUI({
                  error: Error()
                }), MainSceneUI) : MainSceneUI).I.gloadNumber.string = data.diamond + "";

                if (data.diamond >= 100) {
                  _this2.join();
                } else {
                  (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
                    error: Error()
                  }), PopupManager) : PopupManager).I.ShowPopup(find("Canvas"), "AddCoinTipPopup", true);
                  (_crd && MainSceneUI === void 0 ? (_reportPossibleCrUseOfMainSceneUI({
                    error: Error()
                  }), MainSceneUI) : MainSceneUI).I.PlayBtn.active = true;
                }
              } else {
                // MainSceneUI.I.gloadNumber.string = 0 + "";
                (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
                  error: Error()
                }), PopupManager) : PopupManager).I.ShowPopup(find("Canvas"), "ErrTipPopup", true);
                (_crd && MainSceneUI === void 0 ? (_reportPossibleCrUseOfMainSceneUI({
                  error: Error()
                }), MainSceneUI) : MainSceneUI).I.PlayBtn.active = true;
              }
            });
          }
        }, {
          key: "UpdataCoin",
          value: function UpdataCoin() {
            (_crd && MKMessageManager === void 0 ? (_reportPossibleCrUseOfMKMessageManager({
              error: Error()
            }), MKMessageManager) : MKMessageManager).httpResult('get', (_crd && MKMessageType === void 0 ? (_reportPossibleCrUseOfMKMessageType({
              error: Error()
            }), MKMessageType) : MKMessageType).ASSETS, {}, function (data) {
              console.log("=====================游戏币============================");
              console.log(data);

              if (data && data.diamond != null) {
                (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                  error: Error()
                }), GameData) : GameData).I.allMoney = data.diamond;
                (_crd && MainSceneUI === void 0 ? (_reportPossibleCrUseOfMainSceneUI({
                  error: Error()
                }), MainSceneUI) : MainSceneUI).I.gloadNumber.string = data.diamond + "";
              }
            });
          }
        }, {
          key: "join",
          value: function join() {
            (_crd && MKMessageManager === void 0 ? (_reportPossibleCrUseOfMKMessageManager({
              error: Error()
            }), MKMessageManager) : MKMessageManager).httpResult('post', (_crd && MKMessageType === void 0 ? (_reportPossibleCrUseOfMKMessageType({
              error: Error()
            }), MKMessageType) : MKMessageType).JOIN, {}, function (data) {
              if (data && data.id) {
                ServerCommon.robotId = data.id;
                (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                  error: Error()
                }), GameData) : GameData).I.RobotName = data.name;
                (_crd && MKResourcesManager === void 0 ? (_reportPossibleCrUseOfMKResourcesManager({
                  error: Error()
                }), MKResourcesManager) : MKResourcesManager).loadHeadImag(data.avatar, ServerCommon.robotId, 3, function (res) {
                  var spriteFrame = new SpriteFrame();
                  spriteFrame = SpriteFrame.createWithImage(res);
                  (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                    error: Error()
                  }), GameData) : GameData).I.RobotHeadImage = spriteFrame;
                  (_crd && MainSceneUI === void 0 ? (_reportPossibleCrUseOfMainSceneUI({
                    error: Error()
                  }), MainSceneUI) : MainSceneUI).I.LoadJoinDataOver = true;
                });
              } else {
                (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
                  error: Error()
                }), PopupManager) : PopupManager).I.ShowPopup(find("Canvas"), "ErrTipPopup", true);
                (_crd && MainSceneUI === void 0 ? (_reportPossibleCrUseOfMainSceneUI({
                  error: Error()
                }), MainSceneUI) : MainSceneUI).I.PlayBtn.active = true;
              }
            });
          }
          /**
           * 金币操作
           * @param number 100/200
           * @param type bet/win
           */

        }, {
          key: "gload",
          value: function gload(number, type) {
            var data = {
              "users": [Number(ServerCommon.userId)],
              "coin": number,
              "type": type
            };
            console.log("------------------------------------");
            console.log(data);
            (_crd && MKMessageManager === void 0 ? (_reportPossibleCrUseOfMKMessageManager({
              error: Error()
            }), MKMessageManager) : MKMessageManager).httpResult('post', 'v1/ball8/coin/', data, function (res) {
              console.log("00000000000000", res);
            });
          }
        }, {
          key: "subNickName",
          value: function subNickName(nameStr) {
            if (nameStr.length > 8) {
              nameStr = nameStr.substring(0, 8) + '...';
            }

            return nameStr;
          }
        }]);

        return ServerCommon;
      }()) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9TZXJ2ZXJDb21tb24udHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIlNwcml0ZUZyYW1lIiwiZmluZCIsIk1haW5TY2VuZVVJIiwiR2FtZURhdGEiLCJQb3B1cE1hbmFnZXIiLCJNS01lc3NhZ2VNYW5hZ2VyIiwiTUtNZXNzYWdlVHlwZSIsIk1LUmVzb3VyY2VzTWFuYWdlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlNlcnZlckNvbW1vbiIsImh0dHBSZXN1bHQiLCJMRUFWRSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidXNlcklkIiwiZ2V0VXNlcmluZm8iLCJHZXRDb2luIiwiSSIsImFsbE1vbmV5Iiwiam9pbiIsImZ1bmMiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwidXNlck5hbWUiLCJzdWJOaWNrTmFtZSIsInRoaXNQbGF5ZXJOYW1lIiwiYXZhdGFyIiwibG9hZEhlYWRJbWFnIiwicmVzIiwic3ByaXRlRnJhbWUiLCJjcmVhdGVXaXRoSW1hZ2UiLCJ0aGlzcGxheWVySGVhZEltYWdlIiwiU2V0UGxheWVyc0RhdGEiLCJTaG93UG9wdXAiLCJQbGF5QnRuIiwiYWN0aXZlIiwiQVNTRVRTIiwiZGlhbW9uZCIsImdsb2FkTnVtYmVyIiwic3RyaW5nIiwiSk9JTiIsImlkIiwicm9ib3RJZCIsIlJvYm90TmFtZSIsIm5hbWUiLCJSb2JvdEhlYWRJbWFnZSIsIkxvYWRKb2luRGF0YU92ZXIiLCJudW1iZXIiLCJ0eXBlIiwiTnVtYmVyIiwibmFtZVN0ciIsImxlbmd0aCIsInN1YnN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBd0NDLE1BQUFBLFcsT0FBQUEsVztBQUE0Q0MsTUFBQUEsSSxPQUFB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REFBWVosQ0FBWixDQUFjNkIsZ0JBQWQsR0FBaUMsSUFBakM7QUFDSCxpQkFMRDtBQU1ILGVBVEQsTUFTTztBQUNIO0FBQUE7QUFBQSxrREFBYTdCLENBQWIsQ0FBZWdCLFNBQWYsQ0FBeUJsQyxJQUFJLENBQUMsUUFBRCxDQUE3QixFQUF5QyxhQUF6QyxFQUF3RCxJQUF4RDtBQUNBO0FBQUE7QUFBQSxnREFBWWtCLENBQVosQ0FBY2lCLE9BQWQsQ0FBc0JDLE1BQXRCLEdBQStCLElBQS9CO0FBQ0g7QUFDSixhQWREO0FBZ0JIO0FBRUQ7Ozs7Ozs7O2dDQUtvQlksTSxFQUFRQyxJLEVBQU07QUFDOUIsZ0JBQUlyQyxJQUFTLEdBQUc7QUFBRSx1QkFBUyxDQUFDc0MsTUFBTSxDQUFDekMsWUFBWSxDQUFDTSxNQUFkLENBQVAsQ0FBWDtBQUEwQyxzQkFBUWlDLE1BQWxEO0FBQTBELHNCQUFRQztBQUFsRSxhQUFoQjtBQUNBcEMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksc0NBQVo7QUFDQUQsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFFQTtBQUFBO0FBQUEsc0RBQWlCRixVQUFqQixDQUE0QixNQUE1QixFQUFvQyxnQkFBcEMsRUFBc0RFLElBQXRELEVBQTRELFVBQUNpQixHQUFELEVBQVM7QUFDakVoQixjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QmUsR0FBOUI7QUFDSCxhQUZEO0FBR0g7OztzQ0FFeUJzQixPLEVBQWlCO0FBQ3ZDLGdCQUFJQSxPQUFPLENBQUNDLE1BQVIsR0FBaUIsQ0FBckIsRUFBd0I7QUFDcEJELGNBQUFBLE9BQU8sR0FBR0EsT0FBTyxDQUFDRSxTQUFSLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLElBQTBCLEtBQXBDO0FBQ0g7O0FBQ0QsbUJBQU9GLE9BQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVGV4dHVyZTJELCBTcHJpdGVGcmFtZSwgSW1hZ2VBc3NldCwgX19wcml2YXRlLCBsb2FkZXIsIGZpbmQsIExhYmVsLCBTcHJpdGUsIHR3ZWVuLCBWZWMzIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgTWFpblNjZW5lVUkgfSBmcm9tICcuLi9HYW1lL0dhbWVDb21tb24vVUkvTWFpblNjZW5lVUknO1xuaW1wb3J0IHsgR2FtZURhdGEgfSBmcm9tICcuLi9HYW1lL0dhbWVEYXRhJztcbmltcG9ydCB7IFBvcHVwTWFuYWdlciB9IGZyb20gJy4uL0dhbWUvUG9wdXAvUG9wdXBNYW5hZ2VyJztcbmltcG9ydCBNS01lc3NhZ2VNYW5hZ2VyIGZyb20gJy4uL1V0aWxzL01LTWVzc2FnZU1hbmFnZXInO1xuaW1wb3J0IE1LTWVzc2FnZVR5cGUgZnJvbSAnLi4vVXRpbHMvTUtNZXNzYWdlVHlwZSc7XG5pbXBvcnQgTUtSZXNvdXJjZXNNYW5hZ2VyIGZyb20gJy4uL1V0aWxzL01LUmVzb3VyY2VzTWFuYWdlcic7XG5pbXBvcnQgeyBTb3VyY2VNYW5hZ2VyIH0gZnJvbSAnLi9Tb3VyY2VNYW5hZ2VyJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdTZXJ2ZXJDb21tb24nKVxuZXhwb3J0IGNsYXNzIFNlcnZlckNvbW1vbiB7XG4gICAgc3RhdGljIHVzZXJJZDogYW55O1xuICAgIHN0YXRpYyByb2JvdElkOiBhbnk7XG5cblxuICAgIHB1YmxpYyBzdGF0aWMgc3RhcnRHYW1lKCkge1xuICAgICAgICBpZiAoIVNlcnZlckNvbW1vbi51c2VySWQpXG4gICAgICAgICAgICB0aGlzLmdldFVzZXJpbmZvKFNlcnZlckNvbW1vbi5HZXRDb2luKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIisrKysrKysrKysrXCIsIEdhbWVEYXRhLkkuYWxsTW9uZXkpO1xuICAgICAgICAgICAgaWYgKEdhbWVEYXRhLkkuYWxsTW9uZXkgPj0gMTAwKSB7XG4gICAgICAgICAgICAgICAgU2VydmVyQ29tbW9uLmpvaW4oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgU2VydmVyQ29tbW9uLkdldENvaW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIEpvaW5HYW1lKCkge1xuICAgICAgICBTZXJ2ZXJDb21tb24uR2V0Q29pbigpO1xuICAgIH1cblxuICAgIC8qKuiOt+WPluS4quS6uuS/oeaBr+W5tuS4lOiuvue9ru+8m1xuICAgICAqIEBwYXJhbSByZXR1cm4gZGF0YSA9IHt1c2VySWQ6MCx1c2VyTmFtZTpcIlwiLGNvaW49MCxIZWFkSW1hZ2U9bnVsbH1cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldFVzZXJpbmZvKGZ1bmM6IEZ1bmN0aW9uID0gbnVsbCk6IHZvaWQge1xuICAgICAgICBNS01lc3NhZ2VNYW5hZ2VyLmdldFVzZXJJbmZvKCh1c2VySW5mbykgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXJJbmZvICYmIHVzZXJJbmZvLnVzZXJJZCkge1xuICAgICAgICAgICAgICAgIFNlcnZlckNvbW1vbi51c2VySWQgPSB1c2VySW5mby51c2VySWQ7XG4gICAgICAgICAgICAgICAgbGV0IHVzZXJOYW1lID0gdGhpcy5zdWJOaWNrTmFtZSh1c2VySW5mby51c2VyTmFtZSk7XG4gICAgICAgICAgICAgICAgR2FtZURhdGEuSS50aGlzUGxheWVyTmFtZSA9IHVzZXJOYW1lO1xuXG4gICAgICAgICAgICAgICAgbGV0IGF2YXRhciA9IHVzZXJJbmZvLmF2YXRhcjtcbiAgICAgICAgICAgICAgICBNS1Jlc291cmNlc01hbmFnZXIubG9hZEhlYWRJbWFnKGF2YXRhciwgU2VydmVyQ29tbW9uLnVzZXJJZCwgMywgKHJlczogSW1hZ2VBc3NldCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3ByaXRlRnJhbWUgPSBuZXcgU3ByaXRlRnJhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlRnJhbWUgPSBTcHJpdGVGcmFtZS5jcmVhdGVXaXRoSW1hZ2UocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgR2FtZURhdGEuSS50aGlzcGxheWVySGVhZEltYWdlID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgICAgIE1haW5TY2VuZVVJLkkuU2V0UGxheWVyc0RhdGEoKTtcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChmdW5jKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFBvcHVwTWFuYWdlci5JLlNob3dQb3B1cChmaW5kKFwiQ2FudmFzXCIpLCBcIkVyclRpcFBvcHVwXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIE1haW5TY2VuZVVJLkkuUGxheUJ0bi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgR2V0Q29pbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCI9KysrKysrKysrK+a4uOaIj+W4gT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIik7XG4gICAgICAgIE1LTWVzc2FnZU1hbmFnZXIuaHR0cFJlc3VsdCgnZ2V0JywgTUtNZXNzYWdlVHlwZS5BU1NFVFMsIHt9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PT3muLjmiI/luIE9PT09PT09PT09PT09PT09PT09PT09PT09PT09XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmRpYW1vbmQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIEdhbWVEYXRhLkkuYWxsTW9uZXkgPSBkYXRhLmRpYW1vbmQ7XG4gICAgICAgICAgICAgICAgTWFpblNjZW5lVUkuSS5nbG9hZE51bWJlci5zdHJpbmcgPSBkYXRhLmRpYW1vbmQgKyBcIlwiO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmRpYW1vbmQgPj0gMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuam9pbigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFBvcHVwTWFuYWdlci5JLlNob3dQb3B1cChmaW5kKFwiQ2FudmFzXCIpLCBcIkFkZENvaW5UaXBQb3B1cFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgTWFpblNjZW5lVUkuSS5QbGF5QnRuLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNYWluU2NlbmVVSS5JLmdsb2FkTnVtYmVyLnN0cmluZyA9IDAgKyBcIlwiO1xuICAgICAgICAgICAgICAgIFBvcHVwTWFuYWdlci5JLlNob3dQb3B1cChmaW5kKFwiQ2FudmFzXCIpLCBcIkVyclRpcFBvcHVwXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIE1haW5TY2VuZVVJLkkuUGxheUJ0bi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIFVwZGF0YUNvaW4oKSB7XG4gICAgICAgIE1LTWVzc2FnZU1hbmFnZXIuaHR0cFJlc3VsdCgnZ2V0JywgTUtNZXNzYWdlVHlwZS5BU1NFVFMsIHt9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PT3muLjmiI/luIE9PT09PT09PT09PT09PT09PT09PT09PT09PT09XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmRpYW1vbmQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIEdhbWVEYXRhLkkuYWxsTW9uZXkgPSBkYXRhLmRpYW1vbmQ7XG4gICAgICAgICAgICAgICAgTWFpblNjZW5lVUkuSS5nbG9hZE51bWJlci5zdHJpbmcgPSBkYXRhLmRpYW1vbmQgKyBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGpvaW4oKSB7XG4gICAgICAgIE1LTWVzc2FnZU1hbmFnZXIuaHR0cFJlc3VsdCgncG9zdCcsIE1LTWVzc2FnZVR5cGUuSk9JTiwge30sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmlkKSB7XG4gICAgICAgICAgICAgICAgU2VydmVyQ29tbW9uLnJvYm90SWQgPSBkYXRhLmlkO1xuICAgICAgICAgICAgICAgIEdhbWVEYXRhLkkuUm9ib3ROYW1lID0gZGF0YS5uYW1lO1xuICAgICAgICAgICAgICAgIE1LUmVzb3VyY2VzTWFuYWdlci5sb2FkSGVhZEltYWcoZGF0YS5hdmF0YXIsIFNlcnZlckNvbW1vbi5yb2JvdElkLCAzLCAocmVzOiBJbWFnZUFzc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzcHJpdGVGcmFtZSA9IG5ldyBTcHJpdGVGcmFtZSgpO1xuICAgICAgICAgICAgICAgICAgICBzcHJpdGVGcmFtZSA9IFNwcml0ZUZyYW1lLmNyZWF0ZVdpdGhJbWFnZShyZXMpO1xuICAgICAgICAgICAgICAgICAgICBHYW1lRGF0YS5JLlJvYm90SGVhZEltYWdlID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgICAgIE1haW5TY2VuZVVJLkkuTG9hZEpvaW5EYXRhT3ZlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFBvcHVwTWFuYWdlci5JLlNob3dQb3B1cChmaW5kKFwiQ2FudmFzXCIpLCBcIkVyclRpcFBvcHVwXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIE1haW5TY2VuZVVJLkkuUGxheUJ0bi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmHkeW4geaTjeS9nFxuICAgICAqIEBwYXJhbSBudW1iZXIgMTAwLzIwMFxuICAgICAqIEBwYXJhbSB0eXBlIGJldC93aW5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdsb2FkKG51bWJlciwgdHlwZSkge1xuICAgICAgICBsZXQgZGF0YTogYW55ID0geyBcInVzZXJzXCI6IFtOdW1iZXIoU2VydmVyQ29tbW9uLnVzZXJJZCldLCBcImNvaW5cIjogbnVtYmVyLCBcInR5cGVcIjogdHlwZSB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgICBNS01lc3NhZ2VNYW5hZ2VyLmh0dHBSZXN1bHQoJ3Bvc3QnLCAndjEvYmFsbDgvY29pbi8nLCBkYXRhLCAocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIjAwMDAwMDAwMDAwMDAwXCIsIHJlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc3ViTmlja05hbWUobmFtZVN0cjogc3RyaW5nKSB7XG4gICAgICAgIGlmIChuYW1lU3RyLmxlbmd0aCA+IDgpIHtcbiAgICAgICAgICAgIG5hbWVTdHIgPSBuYW1lU3RyLnN1YnN0cmluZygwLCA4KSArICcuLi4nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuYW1lU3RyO1xuICAgIH1cbiAgICAvL+emu+W8gOa4uOaIj++8m1xuICAgIGxlYXZlR2FtZSgpIHtcbiAgICAgICAgTUtNZXNzYWdlTWFuYWdlci5odHRwUmVzdWx0KCdwb3N0JywgTUtNZXNzYWdlVHlwZS5MRUFWRSwge30sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19