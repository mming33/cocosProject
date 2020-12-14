System.register(["cce.code-quality.cr", "cc", "../Storage/DataStorage.js", "../Utils/MKMessageManager.js", "../Utils/MKResourcesManager.js", "../Utils/NDBTS.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, SpriteFrame, DataStorage, MKMessageManager, MKResourcesManager, NDB, _dec, _class, _class2, _temp, _crd, ccclass, property, GetServerData;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      SpriteFrame = _cc.SpriteFrame;
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
      _crd = true;

      _cclegacy._RF.push({}, "d8189o7FfFKnoh1qQzZCWUH", "GetServerData", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GetServerData", GetServerData = (_dec = ccclass('GetServerData'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        function GetServerData() {}

        //获取资产（金币、钻石、游戏币）；
        //加入游戏；
        //离开游戏；

        /** 获取用户个人信息
         * @param success 获取成功
         * @param err 获取失败
         */
        GetServerData.getUserinfo = function getUserinfo(success, err) {
          var _this = this;

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
        ;

        GetServerData.GetCoin = function GetCoin(success, err) {
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
        ;

        GetServerData.join = function join(success, err) {
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
        ;

        GetServerData.LeaveGame = function LeaveGame() {
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
        ;

        GetServerData.GameLoadComplete = function GameLoadComplete(gameName) {
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
        ;

        GetServerData.GameStartComplete = function GameStartComplete(gameName) {
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
        ;

        GetServerData.GameEndComplete = function GameEndComplete(gameName, gameResult) {
          var obj = {
            eventName: "game_end",
            name: gameName,
            result: gameResult
          };
          (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
            error: Error()
          }), NDB) : NDB).sendAutoJoinEvent(obj);
        };

        GetServerData.subNickName = function subNickName(nameStr) {
          if (nameStr.length > 8) {
            nameStr = nameStr.substring(0, 8) + '...';
          }

          return nameStr;
        };

        return GetServerData;
      }(), _defineProperty(_class2, "UserId", -1), _defineProperty(_class2, "UserName", "userName"), _defineProperty(_class2, "UserAvatar", ""), _defineProperty(_class2, "UserHeadImage", null), _defineProperty(_class2, "UserMoney", 0), _defineProperty(_class2, "OtherId", -1), _defineProperty(_class2, "OtherName", "player2"), _defineProperty(_class2, "OtherAvatar", ""), _defineProperty(_class2, "OtherHeadImage", null), _defineProperty(_class2, "ASSETS", 'v1/ball8/mine/diamond/'), _defineProperty(_class2, "JOIN", 'v1/ball8/join/'), _defineProperty(_class2, "LEAVE", 'v1/ball8/leave/'), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9TZXJ2ZXIvR2V0U2VydmVyRGF0YS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiU3ByaXRlRnJhbWUiLCJEYXRhU3RvcmFnZSIsIk1LTWVzc2FnZU1hbmFnZXIiLCJNS1Jlc291cmNlc01hbmFnZXIiLCJOREIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHZXRTZXJ2ZXJEYXRhIiwiZ2V0VXNlcmluZm8iLCJzdWNjZXNzIiwiZXJyIiwiZGF0YSIsIkdldEpzb24iLCJ1c2VySWQiLCJVc2VySWQiLCJVc2VyTmFtZSIsInVzZXJOYW1lIiwiVXNlckF2YXRhciIsImF2YXRhciIsImxvYWRIZWFkSW1hZyIsInJlcyIsIkhlYWRJbWFnZSIsImNyZWF0ZVdpdGhJbWFnZSIsIlVzZXJIZWFkSW1hZ2UiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwic3ViTmlja05hbWUiLCJvdGhlckRhdGEiLCJTYXZlSnNvbiIsImNvbnNvbGUiLCJlcnJvciIsIkdldENvaW4iLCJodHRwUmVzdWx0IiwiQVNTRVRTIiwiZGlhbW9uZCIsIlVzZXJNb25leSIsImpvaW4iLCJKT0lOIiwiaWQiLCJPdGhlcklkIiwiT3RoZXJOYW1lIiwibmFtZSIsIk90aGVyQXZhdGFyIiwic3ByaXRlRnJhbWUiLCJPdGhlckhlYWRJbWFnZSIsIkxlYXZlR2FtZSIsIkxFQVZFIiwibG9nIiwiZXhpdEdhbWUiLCJHYW1lTG9hZENvbXBsZXRlIiwiZ2FtZU5hbWUiLCJvYmoiLCJldmVudE5hbWUiLCJzZW5kQXV0b0pvaW5FdmVudCIsIkdhbWVTdGFydENvbXBsZXRlIiwiR2FtZUVuZENvbXBsZXRlIiwiZ2FtZVJlc3VsdCIsInJlc3VsdCIsIm5hbWVTdHIiLCJsZW5ndGgiLCJzdWJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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YXRvciwgSW1hZ2VBc3NldCwgU3ByaXRlRnJhbWUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBEYXRhU3RvcmFnZSB9IGZyb20gJy4uL1N0b3JhZ2UvRGF0YVN0b3JhZ2UnO1xuaW1wb3J0IE1LTWVzc2FnZU1hbmFnZXIgZnJvbSAnLi4vVXRpbHMvTUtNZXNzYWdlTWFuYWdlcic7XG5pbXBvcnQgTUtSZXNvdXJjZXNNYW5hZ2VyIGZyb20gJy4uL1V0aWxzL01LUmVzb3VyY2VzTWFuYWdlcic7XG5pbXBvcnQgTkRCIGZyb20gJy4uL1V0aWxzL05EQlRTJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdHZXRTZXJ2ZXJEYXRhJylcbmV4cG9ydCBjbGFzcyBHZXRTZXJ2ZXJEYXRhIHtcbiAgICBzdGF0aWMgVXNlcklkID0gLTE7XG4gICAgc3RhdGljIFVzZXJOYW1lID0gXCJ1c2VyTmFtZVwiO1xuICAgIHN0YXRpYyBVc2VyQXZhdGFyID0gXCJcIjtcbiAgICBzdGF0aWMgVXNlckhlYWRJbWFnZTogU3ByaXRlRnJhbWUgfCBudWxsID0gbnVsbDtcbiAgICBzdGF0aWMgVXNlck1vbmV5OiBudW1iZXIgPSAwO1xuXG4gICAgc3RhdGljIE90aGVySWQgPSAtMTtcbiAgICBzdGF0aWMgT3RoZXJOYW1lID0gXCJwbGF5ZXIyXCI7XG4gICAgc3RhdGljIE90aGVyQXZhdGFyID0gXCJcIjtcbiAgICBzdGF0aWMgT3RoZXJIZWFkSW1hZ2U6IFNwcml0ZUZyYW1lIHwgbnVsbCA9IG51bGw7XG5cblxuICAgIHByaXZhdGUgc3RhdGljIEFTU0VUUyA9ICd2MS9iYWxsOC9taW5lL2RpYW1vbmQvJzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/ojrflj5botYTkuqfvvIjph5HluIHjgIHpkrvnn7PjgIHmuLjmiI/luIHvvInvvJtcbiAgICBwcml2YXRlIHN0YXRpYyBKT0lOID0gJ3YxL2JhbGw4L2pvaW4vJzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yqg5YWl5ri45oiP77ybXG4gICAgcHVibGljIHN0YXRpYyBMRUFWRSA9ICd2MS9iYWxsOC9sZWF2ZS8nOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+emu+W8gOa4uOaIj++8m1xuICAgIC8qKiDojrflj5bnlKjmiLfkuKrkurrkv6Hmga9cbiAgICAgKiBAcGFyYW0gc3VjY2VzcyDojrflj5bmiJDlip9cbiAgICAgKiBAcGFyYW0gZXJyIOiOt+WPluWksei0pVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VXNlcmluZm8oc3VjY2Vzcz86IEZ1bmN0aW9uLCBlcnI/OiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBsZXQgZGF0YSA9IERhdGFTdG9yYWdlLkdldEpzb24oXCJ1c2VySW5mb1wiKTtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS51c2VySWQpIHtcbiAgICAgICAgICAgIEdldFNlcnZlckRhdGEuVXNlcklkID0gZGF0YS51c2VySWQ7XG4gICAgICAgICAgICBHZXRTZXJ2ZXJEYXRhLlVzZXJOYW1lID0gZGF0YS51c2VyTmFtZTtcbiAgICAgICAgICAgIEdldFNlcnZlckRhdGEuVXNlckF2YXRhciA9IGRhdGEuYXZhdGFyO1xuICAgICAgICAgICAgTUtSZXNvdXJjZXNNYW5hZ2VyLmxvYWRIZWFkSW1hZyhkYXRhLmF2YXRhciwgZGF0YS51c2VySWQsIDMsIChyZXM6IEltYWdlQXNzZXQpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgSGVhZEltYWdlID0gbmV3IFNwcml0ZUZyYW1lKCk7XG4gICAgICAgICAgICAgICAgSGVhZEltYWdlID0gU3ByaXRlRnJhbWUuY3JlYXRlV2l0aEltYWdlKHJlcyk7XG4gICAgICAgICAgICAgICAgR2V0U2VydmVyRGF0YS5Vc2VySGVhZEltYWdlID0gSGVhZEltYWdlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgTUtNZXNzYWdlTWFuYWdlci5nZXRVc2VySW5mbygodXNlckluZm86IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXJJbmZvICYmIHVzZXJJbmZvLnVzZXJJZCkge1xuICAgICAgICAgICAgICAgIGxldCB1c2VySWQgPSB1c2VySW5mby51c2VySWQ7XG4gICAgICAgICAgICAgICAgbGV0IHVzZXJOYW1lID0gdGhpcy5zdWJOaWNrTmFtZSh1c2VySW5mby51c2VyTmFtZSk7XG4gICAgICAgICAgICAgICAgbGV0IGF2YXRhciA9IHVzZXJJbmZvLmF2YXRhcjtcbiAgICAgICAgICAgICAgICAvL+WIpOaWreacrOWcsOWtmOWCqOWAvOS4juacjeWKoeWZqOerr+iOt+WPlueahOaVsOaNruaYr+WQpuebuOWQjO+8jOiLpeS4jeWQjOWImeabtOaWsOaVsOaNrlxuICAgICAgICAgICAgICAgIGlmIChHZXRTZXJ2ZXJEYXRhLlVzZXJJZCAhPSB1c2VySWQpIHtcbiAgICAgICAgICAgICAgICAgICAgR2V0U2VydmVyRGF0YS5Vc2VySWQgPSB1c2VySWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChHZXRTZXJ2ZXJEYXRhLlVzZXJOYW1lICE9IHVzZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIEdldFNlcnZlckRhdGEuVXNlck5hbWUgPSB1c2VyTmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKEdldFNlcnZlckRhdGEuVXNlckF2YXRhciAhPSBhdmF0YXIpIHtcbiAgICAgICAgICAgICAgICAgICAgR2V0U2VydmVyRGF0YS5Vc2VyQXZhdGFyID0gYXZhdGFyO1xuICAgICAgICAgICAgICAgICAgICBNS1Jlc291cmNlc01hbmFnZXIubG9hZEhlYWRJbWFnKGF2YXRhciwgdXNlcklkLCAzLCAocmVzOiBJbWFnZUFzc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgSGVhZEltYWdlID0gbmV3IFNwcml0ZUZyYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBIZWFkSW1hZ2UgPSBTcHJpdGVGcmFtZS5jcmVhdGVXaXRoSW1hZ2UocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEdldFNlcnZlckRhdGEuVXNlckhlYWRJbWFnZSA9IEhlYWRJbWFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBvdGhlckRhdGEgPSB7IHVzZXJJZDogdXNlcklkLCB1c2VyTmFtZTogdXNlck5hbWUsIGF2YXRhcjogYXZhdGFyIH07XG4gICAgICAgICAgICAgICAgRGF0YVN0b3JhZ2UuU2F2ZUpzb24oXCJ1c2VySW5mb1wiLCBvdGhlckRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi6ZSZ6K+v77yM5pu05paw5L+h5oGv5aSx6LSl77yM5b2T5YmN5bGV56S65pWw5o2u5Li65LiK5qyh6I635Y+W5oiQ5Yqf5pe255qE5pWw5o2uXCIpO1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICAvKiog6I635Y+W546p5a626YeR5biBXG4gICAgICogQHBhcmFtIHN1Y2Nlc3Mg6I635Y+W5oiQ5YqfXG4gICAgICogQHBhcmFtIGVyciDojrflj5blpLHotKVcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEdldENvaW4oc3VjY2Vzcz86IEZ1bmN0aW9uLCBlcnI/OiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBNS01lc3NhZ2VNYW5hZ2VyLmh0dHBSZXN1bHQoJ2dldCcsIEdldFNlcnZlckRhdGEuQVNTRVRTLCB7fSwgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5kaWFtb25kICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBHZXRTZXJ2ZXJEYXRhLlVzZXJNb25leSA9IGRhdGEuZGlhbW9uZDtcbiAgICAgICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi6ZSZ6K+v77yM5pu05paw5L+h5oGv5aSx6LSlXCIpO1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICAvKiog5Yqg5YWl5ri45oiPIOiOt+WPluWvueaWueeOqeWutuaVsOaNrlxuICAgICAqIEBwYXJhbSBzdWNjZXNzIOiOt+WPluaIkOWKn1xuICAgICAqIEBwYXJhbSBlcnIg6I635Y+W5aSx6LSlXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBqb2luKHN1Y2Nlc3M/OiBGdW5jdGlvbiwgZXJyPzogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgTUtNZXNzYWdlTWFuYWdlci5odHRwUmVzdWx0KCdwb3N0JywgR2V0U2VydmVyRGF0YS5KT0lOLCB7fSwgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5pZCkge1xuICAgICAgICAgICAgICAgIEdldFNlcnZlckRhdGEuT3RoZXJJZCA9IGRhdGEuaWQ7XG4gICAgICAgICAgICAgICAgR2V0U2VydmVyRGF0YS5PdGhlck5hbWUgPSBkYXRhLm5hbWU7XG4gICAgICAgICAgICAgICAgR2V0U2VydmVyRGF0YS5PdGhlckF2YXRhciA9IGRhdGEuYXZhdGFyO1xuICAgICAgICAgICAgICAgIE1LUmVzb3VyY2VzTWFuYWdlci5sb2FkSGVhZEltYWcoR2V0U2VydmVyRGF0YS5PdGhlckF2YXRhciwgR2V0U2VydmVyRGF0YS5PdGhlcklkLCAzLCAocmVzOiBJbWFnZUFzc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzcHJpdGVGcmFtZSA9IG5ldyBTcHJpdGVGcmFtZSgpO1xuICAgICAgICAgICAgICAgICAgICBzcHJpdGVGcmFtZSA9IFNwcml0ZUZyYW1lLmNyZWF0ZVdpdGhJbWFnZShyZXMpO1xuICAgICAgICAgICAgICAgICAgICBHZXRTZXJ2ZXJEYXRhLk90aGVySGVhZEltYWdlID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIumUmeivr++8jOabtOaWsOS/oeaBr+Wksei0pVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgLyoq56a75byA5ri45oiP77ybKi9cbiAgICBwdWJsaWMgc3RhdGljIExlYXZlR2FtZSgpOiB2b2lkIHtcbiAgICAgICAgTUtNZXNzYWdlTWFuYWdlci5odHRwUmVzdWx0KCdwb3N0JywgR2V0U2VydmVyRGF0YS5MRUFWRSwge30sIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgTUtNZXNzYWdlTWFuYWdlci5leGl0R2FtZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoq5ri45oiP5Yqg6L295a6M5oiQ5pat54K5XG4gICAgICogQHBhcmFtIGdhbWVOYW1lIOa4uOaIj+WQjeensFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgR2FtZUxvYWRDb21wbGV0ZShnYW1lTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICBldmVudE5hbWU6IFwiZ2FtZV9sb2FkX2NvbXBsZXRlXCIsXG4gICAgICAgICAgICBuYW1lOiBnYW1lTmFtZSxcbiAgICAgICAgfVxuICAgICAgICBOREIuc2VuZEF1dG9Kb2luRXZlbnQob2JqKTtcbiAgICB9XG4gICAgLyoq5ri45oiP5byA5aeL5pat54K5XG4gICAgICogQHBhcmFtIGdhbWVOYW1lIOa4uOaIj+WQjeensFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgR2FtZVN0YXJ0Q29tcGxldGUoZ2FtZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgZXZlbnROYW1lOiBcImdhbWVfc3RhcnRcIixcbiAgICAgICAgICAgIG5hbWU6IGdhbWVOYW1lLFxuICAgICAgICB9XG4gICAgICAgIE5EQi5zZW5kQXV0b0pvaW5FdmVudChvYmopO1xuICAgIH1cbiAgICAvKiog5ri45oiP57uT5p2f5pat54K5XG4gICAgICogQHBhcmFtIGdhbWVOYW1lIOa4uOaIj+WQjeensFxuICAgICAqIEBwYXJhbSBnYW1lUmVzdWx0IOiuvue9rui/lOWbnue7k+aenCB3aW4o6IOc5YipKS9sb3NlKOWksei0pSkvZHJhdyjlubPlsYApXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBHYW1lRW5kQ29tcGxldGUoZ2FtZU5hbWU6IHN0cmluZywgZ2FtZVJlc3VsdDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICBldmVudE5hbWU6IFwiZ2FtZV9lbmRcIixcbiAgICAgICAgICAgIG5hbWU6IGdhbWVOYW1lLFxuICAgICAgICAgICAgcmVzdWx0OiBnYW1lUmVzdWx0XG4gICAgICAgIH1cbiAgICAgICAgTkRCLnNlbmRBdXRvSm9pbkV2ZW50KG9iaik7XG4gICAgfVxuXG5cblxuICAgIHByaXZhdGUgc3RhdGljIHN1Yk5pY2tOYW1lKG5hbWVTdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmIChuYW1lU3RyLmxlbmd0aCA+IDgpIHtcbiAgICAgICAgICAgIG5hbWVTdHIgPSBuYW1lU3RyLnN1YnN0cmluZygwLCA4KSArICcuLi4nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuYW1lU3RyO1xuICAgIH1cbn1cbiJdfQ==