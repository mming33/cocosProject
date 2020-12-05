System.register(["cc", "code-quality:cr", "../Storage/DataStorage.js", "../Utils/MKMessageManager.js", "../Utils/MKResourcesManager.js", "../Utils/NDBTS.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, SpriteFrame, DataStorage, MKMessageManager, MKResourcesManager, NDB, _dec, _class, _class2, _temp, _crd, ccclass, property, GetServerData;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _reportPossibleCrUseOfDataStorage(extras) {
    _reporterNs.report("DataStorage", "../Storage/DataStorage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMKMessageManager(extras) {
    _reporterNs.report("MKMessageManager", "../Utils/MKMessageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMKResourcesManager(extras) {
    _reporterNs.report("MKResourcesManager", "../Utils/MKResourcesManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNDB(extras) {
    _reporterNs.report("NDB", "../Utils/NDBTS", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_StorageDataStorageJs) {
      DataStorage = _StorageDataStorageJs.DataStorage;
    }, function (_UtilsMKMessageManagerJs) {
      MKMessageManager = _UtilsMKMessageManagerJs.default;
    }, function (_UtilsMKResourcesManagerJs) {
      MKResourcesManager = _UtilsMKResourcesManagerJs.default;
    }, function (_UtilsNDBTSJs) {
      NDB = _UtilsNDBTSJs.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "73f36tjcA9F/rOCQJ8VmLZA", "GetServerData", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GetServerData", GetServerData = (_dec = ccclass('GetServerData'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        function GetServerData() {
          _classCallCheck(this, GetServerData);
        }

        _createClass(GetServerData, null, [{
          key: "getUserinfo",
          //获取资产（金币、钻石、游戏币）；
          //加入游戏；
          //离开游戏；

          /** 获取用户个人信息
           * @param success 获取成功
           * @param err 获取失败
           */
          value: function getUserinfo() {
            var _this = this;

            var success = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var err = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var data = (_crd && DataStorage === void 0 ? (_reportPossibleCrUseOfDataStorage({
              error: Error()
            }), DataStorage) : DataStorage).GetJson("userInfo");

            if (data && data.userId) {
              GetServerData.UserId = data.userId;
              GetServerData.UserName = data.userName;
              GetServerData.UserAvatar = data.avatar;
              (_crd && MKResourcesManager === void 0 ? (_reportPossibleCrUseOfMKResourcesManager({
                error: Error()
              }), MKResourcesManager) : MKResourcesManager).loadHeadImag(data.avatar, data.userId, 3, function (res) {
                var HeadImage = new SpriteFrame();
                HeadImage = SpriteFrame.createWithImage(res);
                GetServerData.UserHeadImage = HeadImage;
              });
            }

            (_crd && MKMessageManager === void 0 ? (_reportPossibleCrUseOfMKMessageManager({
              error: Error()
            }), MKMessageManager) : MKMessageManager).getUserInfo(function (userInfo) {
              if (userInfo && userInfo.userId) {
                var userId = userInfo.userId;

                var userName = _this.subNickName(userInfo.userName);

                var avatar = userInfo.avatar; //判断本地存储值与服务器端获取的数据是否相同，若不同则更新数据

                if (GetServerData.UserId != userId) {
                  GetServerData.UserId = userId;
                }

                if (GetServerData.UserName != userName) {
                  GetServerData.UserName = userName;
                }

                if (GetServerData.UserAvatar != avatar) {
                  GetServerData.UserAvatar = avatar;
                  (_crd && MKResourcesManager === void 0 ? (_reportPossibleCrUseOfMKResourcesManager({
                    error: Error()
                  }), MKResourcesManager) : MKResourcesManager).loadHeadImag(avatar, userId, 3, function (res) {
                    var HeadImage = new SpriteFrame();
                    HeadImage = SpriteFrame.createWithImage(res);
                    GetServerData.UserHeadImage = HeadImage;

                    if (success) {
                      success();
                    }
                  });
                } else {
                  if (success) {
                    success();
                  }
                }

                var otherData = {
                  userId: userId,
                  userName: userName,
                  avatar: avatar
                };
                (_crd && DataStorage === void 0 ? (_reportPossibleCrUseOfDataStorage({
                  error: Error()
                }), DataStorage) : DataStorage).SaveJson("userInfo", otherData);
              } else {
                console.error("错误，更新信息失败，当前展示数据为上次获取成功时的数据");

                if (err) {
                  err();
                }
              }
            });
          }
          /** 获取玩家金币
           * @param success 获取成功
           * @param err 获取失败
           */

        }, {
          key: "GetCoin",
          value: function GetCoin() {
            var success = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var err = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            (_crd && MKMessageManager === void 0 ? (_reportPossibleCrUseOfMKMessageManager({
              error: Error()
            }), MKMessageManager) : MKMessageManager).httpResult('get', GetServerData.ASSETS, {}, function (data) {
              if (data && data.diamond != null) {
                GetServerData.UserMoney = data.diamond;

                if (success) {
                  success();
                }
              } else {
                console.error("错误，更新信息失败");

                if (err) {
                  err();
                }
              }
            });
          }
          /** 加入游戏 获取对方玩家数据
           * @param success 获取成功
           * @param err 获取失败
           */

        }, {
          key: "join",
          value: function join() {
            var success = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var err = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            (_crd && MKMessageManager === void 0 ? (_reportPossibleCrUseOfMKMessageManager({
              error: Error()
            }), MKMessageManager) : MKMessageManager).httpResult('post', GetServerData.JOIN, {}, function (data) {
              if (data && data.id) {
                GetServerData.OtherId = data.id;
                GetServerData.OtherName = data.name;
                GetServerData.OtherAvatar = data.avatar;
                (_crd && MKResourcesManager === void 0 ? (_reportPossibleCrUseOfMKResourcesManager({
                  error: Error()
                }), MKResourcesManager) : MKResourcesManager).loadHeadImag(GetServerData.OtherAvatar, GetServerData.OtherId, 3, function (res) {
                  var spriteFrame = new SpriteFrame();
                  spriteFrame = SpriteFrame.createWithImage(res);
                  GetServerData.OtherHeadImage = spriteFrame;

                  if (success) {
                    success();
                  }
                });
              } else {
                console.error("错误，更新信息失败");

                if (err) {
                  err();
                }
              }
            });
          }
          /**离开游戏；*/

        }, {
          key: "LeaveGame",
          value: function LeaveGame() {
            (_crd && MKMessageManager === void 0 ? (_reportPossibleCrUseOfMKMessageManager({
              error: Error()
            }), MKMessageManager) : MKMessageManager).httpResult('post', GetServerData.LEAVE, {}, function (data) {
              console.log(data);
              (_crd && MKMessageManager === void 0 ? (_reportPossibleCrUseOfMKMessageManager({
                error: Error()
              }), MKMessageManager) : MKMessageManager).exitGame();
            });
          }
          /**游戏加载完成断点
           * @param gameName 游戏名称
           */

        }, {
          key: "GameLoadComplete",
          value: function GameLoadComplete(gameName) {
            var obj = {
              eventName: "game_load_complete",
              name: gameName
            };
            (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
              error: Error()
            }), NDB) : NDB).sendAutoJoinEvent(obj);
          }
          /**游戏开始断点
           * @param gameName 游戏名称
           */

        }, {
          key: "GameStartComplete",
          value: function GameStartComplete(gameName) {
            var obj = {
              eventName: "game_start",
              name: gameName
            };
            (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
              error: Error()
            }), NDB) : NDB).sendAutoJoinEvent(obj);
          }
          /** 游戏结束断点
           * @param gameName 游戏名称
           * @param gameResult 设置返回结果 win(胜利)/lose(失败)/draw(平局)
           */

        }, {
          key: "GameEndComplete",
          value: function GameEndComplete(gameName, gameResult) {
            var obj = {
              eventName: "game_end",
              name: gameName,
              result: gameResult
            };
            (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
              error: Error()
            }), NDB) : NDB).sendAutoJoinEvent(obj);
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

        return GetServerData;
      }(), _class2.UserId = -1, _class2.UserName = "userName", _class2.UserAvatar = "", _class2.UserHeadImage = null, _class2.UserMoney = 0, _class2.OtherId = -1, _class2.OtherName = "player2", _class2.OtherAvatar = "", _class2.OtherHeadImage = null, _class2.ASSETS = 'v1/ball8/mine/diamond/', _class2.JOIN = 'v1/ball8/join/', _class2.LEAVE = 'v1/ball8/leave/', _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvOEJhbGwvYXNzZXRzL1NjcmlwdHMvQ29tbW9uL1NlcnZlci9HZXRTZXJ2ZXJEYXRhLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJTcHJpdGVGcmFtZSIsIkRhdGFTdG9yYWdlIiwiTUtNZXNzYWdlTWFuYWdlciIsIk1LUmVzb3VyY2VzTWFuYWdlciIsIk5EQiIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdldFNlcnZlckRhdGEiLCJzdWNjZXNzIiwiZXJyIiwiZGF0YSIsIkdldEpzb24iLCJ1c2VySWQiLCJVc2VySWQiLCJVc2VyTmFtZSIsInVzZXJOYW1lIiwiVXNlckF2YXRhciIsImF2YXRhciIsImxvYWRIZWFkSW1hZyIsInJlcyIsIkhlYWRJbWFnZSIsImNyZWF0ZVdpdGhJbWFnZSIsIlVzZXJIZWFkSW1hZ2UiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwic3ViTmlja05hbWUiLCJvdGhlckRhdGEiLCJTYXZlSnNvbiIsImNvbnNvbGUiLCJlcnJvciIsImh0dHBSZXN1bHQiLCJBU1NFVFMiLCJkaWFtb25kIiwiVXNlck1vbmV5IiwiSk9JTiIsImlkIiwiT3RoZXJJZCIsIk90aGVyTmFtZSIsIm5hbWUiLCJPdGhlckF2YXRhciIsInNwcml0ZUZyYW1lIiwiT3RoZXJIZWFkSW1hZ2UiLCJMRUFWRSIsImxvZyIsImV4aXRHYW1lIiwiZ2FtZU5hbWUiLCJvYmoiLCJldmVudE5hbWUiLCJzZW5kQXV0b0pvaW5FdmVudCIsImdhbWVSZXN1bHQiLCJyZXN1bHQiLCJuYW1lU3RyIiwibGVuZ3RoIiwic3Vic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUF3QkMsTUFBQUEsVyxPQUFBQSxXOzs7O0FBQ3hCQyxNQUFBQSxXLHlCQUFBQSxXOztBQUNGQyxNQUFBQSxnQjs7QUFDQUMs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VjtBQUlBO0FBQUE7QUFBQSw0QkFBSUcsaUJBQUosQ0FBc0JGLEdBQXRCO0FBQ0g7QUFDRDs7Ozs7OzRDQUdnQ0QsUSxFQUF3QjtBQUNwRCxnQkFBSUMsR0FBRyxHQUFHO0FBQ05DLGNBQUFBLFNBQVMsRUFBRSxZQURMO0FBRU5ULGNBQUFBLElBQUksRUFBRU87QUFGQSxhQUFWO0FBSUE7QUFBQTtBQUFBLDRCQUFJRyxpQkFBSixDQUFzQkYsR0FBdEI7QUFDSDtBQUNEOzs7Ozs7OzBDQUk4QkQsUSxFQUFrQkksVSxFQUEwQjtBQUN0RSxnQkFBSUgsR0FBRyxHQUFHO0FBQ05DLGNBQUFBLFNBQVMsRUFBRSxVQURMO0FBRU5ULGNBQUFBLElBQUksRUFBRU8sUUFGQTtBQUdOSyxjQUFBQSxNQUFNLEVBQUVEO0FBSEYsYUFBVjtBQUtBO0FBQUE7QUFBQSw0QkFBSUQsaUJBQUosQ0FBc0JGLEdBQXRCO0FBQ0g7OztzQ0FJMEJLLE8sRUFBeUI7QUFDaEQsZ0JBQUlBLE9BQU8sQ0FBQ0MsTUFBUixHQUFpQixDQUFyQixFQUF3QjtBQUNwQkQsY0FBQUEsT0FBTyxHQUFHQSxPQUFPLENBQUNFLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsSUFBMEIsS0FBcEM7QUFDSDs7QUFDRCxtQkFBT0YsT0FBUDtBQUNIOzs7O21CQWpLTXRDLE0sR0FBUyxDQUFDLEMsVUFDVkMsUSxHQUFXLFUsVUFDWEUsVSxHQUFhLEUsVUFDYk0sYSxHQUE2QixJLFVBQzdCVyxTLEdBQW9CLEMsVUFFcEJHLE8sR0FBVSxDQUFDLEMsVUFDWEMsUyxHQUFZLFMsVUFDWkUsVyxHQUFjLEUsVUFDZEUsYyxHQUE4QixJLFVBR3RCVixNLEdBQVMsd0IsVUFDVEcsSSxHQUFPLGdCLFVBQ1JRLEssR0FBUSxpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIEltYWdlQXNzZXQsIFNwcml0ZUZyYW1lIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgRGF0YVN0b3JhZ2UgfSBmcm9tICcuLi9TdG9yYWdlL0RhdGFTdG9yYWdlJztcbmltcG9ydCBNS01lc3NhZ2VNYW5hZ2VyIGZyb20gJy4uL1V0aWxzL01LTWVzc2FnZU1hbmFnZXInO1xuaW1wb3J0IE1LUmVzb3VyY2VzTWFuYWdlciBmcm9tICcuLi9VdGlscy9NS1Jlc291cmNlc01hbmFnZXInO1xuaW1wb3J0IE5EQiBmcm9tICcuLi9VdGlscy9OREJUUyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnR2V0U2VydmVyRGF0YScpXG5leHBvcnQgY2xhc3MgR2V0U2VydmVyRGF0YSB7XG4gICAgc3RhdGljIFVzZXJJZCA9IC0xO1xuICAgIHN0YXRpYyBVc2VyTmFtZSA9IFwidXNlck5hbWVcIjtcbiAgICBzdGF0aWMgVXNlckF2YXRhciA9IFwiXCI7XG4gICAgc3RhdGljIFVzZXJIZWFkSW1hZ2U6IFNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBzdGF0aWMgVXNlck1vbmV5OiBudW1iZXIgPSAwO1xuXG4gICAgc3RhdGljIE90aGVySWQgPSAtMTtcbiAgICBzdGF0aWMgT3RoZXJOYW1lID0gXCJwbGF5ZXIyXCI7XG4gICAgc3RhdGljIE90aGVyQXZhdGFyID0gXCJcIjtcbiAgICBzdGF0aWMgT3RoZXJIZWFkSW1hZ2U6IFNwcml0ZUZyYW1lID0gbnVsbDtcblxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgQVNTRVRTID0gJ3YxL2JhbGw4L21pbmUvZGlhbW9uZC8nOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+iOt+WPlui1hOS6p++8iOmHkeW4geOAgemSu+efs+OAgea4uOaIj+W4ge+8ie+8m1xuICAgIHByaXZhdGUgc3RhdGljIEpPSU4gPSAndjEvYmFsbDgvam9pbi8nOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liqDlhaXmuLjmiI/vvJtcbiAgICBwdWJsaWMgc3RhdGljIExFQVZFID0gJ3YxL2JhbGw4L2xlYXZlLyc7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v56a75byA5ri45oiP77ybXG4gICAgLyoqIOiOt+WPlueUqOaIt+S4quS6uuS/oeaBr1xuICAgICAqIEBwYXJhbSBzdWNjZXNzIOiOt+WPluaIkOWKn1xuICAgICAqIEBwYXJhbSBlcnIg6I635Y+W5aSx6LSlXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRVc2VyaW5mbyhzdWNjZXNzOiBGdW5jdGlvbiA9IG51bGwsIGVycjogRnVuY3Rpb24gPSBudWxsKTogdm9pZCB7XG4gICAgICAgIGxldCBkYXRhID0gRGF0YVN0b3JhZ2UuR2V0SnNvbihcInVzZXJJbmZvXCIpO1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLnVzZXJJZCkge1xuICAgICAgICAgICAgR2V0U2VydmVyRGF0YS5Vc2VySWQgPSBkYXRhLnVzZXJJZDtcbiAgICAgICAgICAgIEdldFNlcnZlckRhdGEuVXNlck5hbWUgPSBkYXRhLnVzZXJOYW1lO1xuICAgICAgICAgICAgR2V0U2VydmVyRGF0YS5Vc2VyQXZhdGFyID0gZGF0YS5hdmF0YXI7XG4gICAgICAgICAgICBNS1Jlc291cmNlc01hbmFnZXIubG9hZEhlYWRJbWFnKGRhdGEuYXZhdGFyLCBkYXRhLnVzZXJJZCwgMywgKHJlczogSW1hZ2VBc3NldCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBIZWFkSW1hZ2UgPSBuZXcgU3ByaXRlRnJhbWUoKTtcbiAgICAgICAgICAgICAgICBIZWFkSW1hZ2UgPSBTcHJpdGVGcmFtZS5jcmVhdGVXaXRoSW1hZ2UocmVzKTtcbiAgICAgICAgICAgICAgICBHZXRTZXJ2ZXJEYXRhLlVzZXJIZWFkSW1hZ2UgPSBIZWFkSW1hZ2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBNS01lc3NhZ2VNYW5hZ2VyLmdldFVzZXJJbmZvKCh1c2VySW5mbykgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXJJbmZvICYmIHVzZXJJbmZvLnVzZXJJZCkge1xuICAgICAgICAgICAgICAgIGxldCB1c2VySWQgPSB1c2VySW5mby51c2VySWQ7XG4gICAgICAgICAgICAgICAgbGV0IHVzZXJOYW1lID0gdGhpcy5zdWJOaWNrTmFtZSh1c2VySW5mby51c2VyTmFtZSk7XG4gICAgICAgICAgICAgICAgbGV0IGF2YXRhciA9IHVzZXJJbmZvLmF2YXRhcjtcbiAgICAgICAgICAgICAgICAvL+WIpOaWreacrOWcsOWtmOWCqOWAvOS4juacjeWKoeWZqOerr+iOt+WPlueahOaVsOaNruaYr+WQpuebuOWQjO+8jOiLpeS4jeWQjOWImeabtOaWsOaVsOaNrlxuICAgICAgICAgICAgICAgIGlmIChHZXRTZXJ2ZXJEYXRhLlVzZXJJZCAhPSB1c2VySWQpIHtcbiAgICAgICAgICAgICAgICAgICAgR2V0U2VydmVyRGF0YS5Vc2VySWQgPSB1c2VySWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChHZXRTZXJ2ZXJEYXRhLlVzZXJOYW1lICE9IHVzZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIEdldFNlcnZlckRhdGEuVXNlck5hbWUgPSB1c2VyTmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKEdldFNlcnZlckRhdGEuVXNlckF2YXRhciAhPSBhdmF0YXIpIHtcbiAgICAgICAgICAgICAgICAgICAgR2V0U2VydmVyRGF0YS5Vc2VyQXZhdGFyID0gYXZhdGFyO1xuICAgICAgICAgICAgICAgICAgICBNS1Jlc291cmNlc01hbmFnZXIubG9hZEhlYWRJbWFnKGF2YXRhciwgdXNlcklkLCAzLCAocmVzOiBJbWFnZUFzc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgSGVhZEltYWdlID0gbmV3IFNwcml0ZUZyYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBIZWFkSW1hZ2UgPSBTcHJpdGVGcmFtZS5jcmVhdGVXaXRoSW1hZ2UocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEdldFNlcnZlckRhdGEuVXNlckhlYWRJbWFnZSA9IEhlYWRJbWFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBvdGhlckRhdGEgPSB7IHVzZXJJZDogdXNlcklkLCB1c2VyTmFtZTogdXNlck5hbWUsIGF2YXRhcjogYXZhdGFyIH07XG4gICAgICAgICAgICAgICAgRGF0YVN0b3JhZ2UuU2F2ZUpzb24oXCJ1c2VySW5mb1wiLCBvdGhlckRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi6ZSZ6K+v77yM5pu05paw5L+h5oGv5aSx6LSl77yM5b2T5YmN5bGV56S65pWw5o2u5Li65LiK5qyh6I635Y+W5oiQ5Yqf5pe255qE5pWw5o2uXCIpO1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICAvKiog6I635Y+W546p5a626YeR5biBXG4gICAgICogQHBhcmFtIHN1Y2Nlc3Mg6I635Y+W5oiQ5YqfXG4gICAgICogQHBhcmFtIGVyciDojrflj5blpLHotKVcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEdldENvaW4oc3VjY2VzczogRnVuY3Rpb24gPSBudWxsLCBlcnI6IEZ1bmN0aW9uID0gbnVsbCk6IHZvaWQge1xuICAgICAgICBNS01lc3NhZ2VNYW5hZ2VyLmh0dHBSZXN1bHQoJ2dldCcsIEdldFNlcnZlckRhdGEuQVNTRVRTLCB7fSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEuZGlhbW9uZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgR2V0U2VydmVyRGF0YS5Vc2VyTW9uZXkgPSBkYXRhLmRpYW1vbmQ7XG4gICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIumUmeivr++8jOabtOaWsOS/oeaBr+Wksei0pVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgLyoqIOWKoOWFpea4uOaIjyDojrflj5blr7nmlrnnjqnlrrbmlbDmja5cbiAgICAgKiBAcGFyYW0gc3VjY2VzcyDojrflj5bmiJDlip9cbiAgICAgKiBAcGFyYW0gZXJyIOiOt+WPluWksei0pVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgam9pbihzdWNjZXNzOiBGdW5jdGlvbiA9IG51bGwsIGVycjogRnVuY3Rpb24gPSBudWxsKTogdm9pZCB7XG4gICAgICAgIE1LTWVzc2FnZU1hbmFnZXIuaHR0cFJlc3VsdCgncG9zdCcsIEdldFNlcnZlckRhdGEuSk9JTiwge30sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmlkKSB7XG4gICAgICAgICAgICAgICAgR2V0U2VydmVyRGF0YS5PdGhlcklkID0gZGF0YS5pZDtcbiAgICAgICAgICAgICAgICBHZXRTZXJ2ZXJEYXRhLk90aGVyTmFtZSA9IGRhdGEubmFtZTtcbiAgICAgICAgICAgICAgICBHZXRTZXJ2ZXJEYXRhLk90aGVyQXZhdGFyID0gZGF0YS5hdmF0YXI7XG4gICAgICAgICAgICAgICAgTUtSZXNvdXJjZXNNYW5hZ2VyLmxvYWRIZWFkSW1hZyhHZXRTZXJ2ZXJEYXRhLk90aGVyQXZhdGFyLCBHZXRTZXJ2ZXJEYXRhLk90aGVySWQsIDMsIChyZXM6IEltYWdlQXNzZXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwcml0ZUZyYW1lID0gbmV3IFNwcml0ZUZyYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZUZyYW1lID0gU3ByaXRlRnJhbWUuY3JlYXRlV2l0aEltYWdlKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIEdldFNlcnZlckRhdGEuT3RoZXJIZWFkSW1hZ2UgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi6ZSZ6K+v77yM5pu05paw5L+h5oGv5aSx6LSlXCIpO1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cbiAgICAvKirnprvlvIDmuLjmiI/vvJsqL1xuICAgIHB1YmxpYyBzdGF0aWMgTGVhdmVHYW1lKCk6IHZvaWQge1xuICAgICAgICBNS01lc3NhZ2VNYW5hZ2VyLmh0dHBSZXN1bHQoJ3Bvc3QnLCBHZXRTZXJ2ZXJEYXRhLkxFQVZFLCB7fSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgTUtNZXNzYWdlTWFuYWdlci5leGl0R2FtZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoq5ri45oiP5Yqg6L295a6M5oiQ5pat54K5XG4gICAgICogQHBhcmFtIGdhbWVOYW1lIOa4uOaIj+WQjeensFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgR2FtZUxvYWRDb21wbGV0ZShnYW1lTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICBldmVudE5hbWU6IFwiZ2FtZV9sb2FkX2NvbXBsZXRlXCIsXG4gICAgICAgICAgICBuYW1lOiBnYW1lTmFtZSxcbiAgICAgICAgfVxuICAgICAgICBOREIuc2VuZEF1dG9Kb2luRXZlbnQob2JqKTtcbiAgICB9XG4gICAgLyoq5ri45oiP5byA5aeL5pat54K5XG4gICAgICogQHBhcmFtIGdhbWVOYW1lIOa4uOaIj+WQjeensFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgR2FtZVN0YXJ0Q29tcGxldGUoZ2FtZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgZXZlbnROYW1lOiBcImdhbWVfc3RhcnRcIixcbiAgICAgICAgICAgIG5hbWU6IGdhbWVOYW1lLFxuICAgICAgICB9XG4gICAgICAgIE5EQi5zZW5kQXV0b0pvaW5FdmVudChvYmopO1xuICAgIH1cbiAgICAvKiog5ri45oiP57uT5p2f5pat54K5XG4gICAgICogQHBhcmFtIGdhbWVOYW1lIOa4uOaIj+WQjeensFxuICAgICAqIEBwYXJhbSBnYW1lUmVzdWx0IOiuvue9rui/lOWbnue7k+aenCB3aW4o6IOc5YipKS9sb3NlKOWksei0pSkvZHJhdyjlubPlsYApXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBHYW1lRW5kQ29tcGxldGUoZ2FtZU5hbWU6IHN0cmluZywgZ2FtZVJlc3VsdDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICBldmVudE5hbWU6IFwiZ2FtZV9lbmRcIixcbiAgICAgICAgICAgIG5hbWU6IGdhbWVOYW1lLFxuICAgICAgICAgICAgcmVzdWx0OiBnYW1lUmVzdWx0XG4gICAgICAgIH1cbiAgICAgICAgTkRCLnNlbmRBdXRvSm9pbkV2ZW50KG9iaik7XG4gICAgfVxuXG5cblxuICAgIHByaXZhdGUgc3RhdGljIHN1Yk5pY2tOYW1lKG5hbWVTdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmIChuYW1lU3RyLmxlbmd0aCA+IDgpIHtcbiAgICAgICAgICAgIG5hbWVTdHIgPSBuYW1lU3RyLnN1YnN0cmluZygwLCA4KSArICcuLi4nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuYW1lU3RyO1xuICAgIH1cbn1cbiJdfQ==