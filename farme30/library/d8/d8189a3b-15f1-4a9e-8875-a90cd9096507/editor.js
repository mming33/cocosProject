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

      ({
        ccclass,
        property
      } = _decorator);

      _export("GetServerData", GetServerData = (_dec = ccclass('GetServerData'), _dec(_class = (_temp = _class2 = class GetServerData {
        //获取资产（金币、钻石、游戏币）；
        //加入游戏；
        //离开游戏；

        /** 获取用户个人信息
         * @param success 获取成功
         * @param err 获取失败
         */
        static getUserinfo(success, err) {
          let data = (_crd && DataStorage === void 0 ? (_reportPossibleCrUseOfDataStorage({
            error: Error()
          }), DataStorage) : DataStorage).GetJson("userInfo");

          if (data && data.userId) {
            GetServerData.UserId = data.userId;
            GetServerData.UserName = data.userName;
            GetServerData.UserAvatar = data.avatar;
            (_crd && MKResourcesManager === void 0 ? (_reportPossibleCrUseOfMKResourcesManager({
              error: Error()
            }), MKResourcesManager) : MKResourcesManager).loadHeadImag(data.avatar, data.userId, 3, res => {
              let HeadImage = new SpriteFrame();
              HeadImage = SpriteFrame.createWithImage(res);
              GetServerData.UserHeadImage = HeadImage;
            });
          }

          (_crd && MKMessageManager === void 0 ? (_reportPossibleCrUseOfMKMessageManager({
            error: Error()
          }), MKMessageManager) : MKMessageManager).getUserInfo(userInfo => {
            if (userInfo && userInfo.userId) {
              let userId = userInfo.userId;
              let userName = this.subNickName(userInfo.userName);
              let avatar = userInfo.avatar; //判断本地存储值与服务器端获取的数据是否相同，若不同则更新数据

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
                }), MKResourcesManager) : MKResourcesManager).loadHeadImag(avatar, userId, 3, res => {
                  let HeadImage = new SpriteFrame();
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

              let otherData = {
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


        static GetCoin(success, err) {
          (_crd && MKMessageManager === void 0 ? (_reportPossibleCrUseOfMKMessageManager({
            error: Error()
          }), MKMessageManager) : MKMessageManager).httpResult('get', GetServerData.ASSETS, {}, data => {
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


        static join(success, err) {
          (_crd && MKMessageManager === void 0 ? (_reportPossibleCrUseOfMKMessageManager({
            error: Error()
          }), MKMessageManager) : MKMessageManager).httpResult('post', GetServerData.JOIN, {}, data => {
            if (data && data.id) {
              GetServerData.OtherId = data.id;
              GetServerData.OtherName = data.name;
              GetServerData.OtherAvatar = data.avatar;
              (_crd && MKResourcesManager === void 0 ? (_reportPossibleCrUseOfMKResourcesManager({
                error: Error()
              }), MKResourcesManager) : MKResourcesManager).loadHeadImag(GetServerData.OtherAvatar, GetServerData.OtherId, 3, res => {
                let spriteFrame = new SpriteFrame();
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


        static LeaveGame() {
          (_crd && MKMessageManager === void 0 ? (_reportPossibleCrUseOfMKMessageManager({
            error: Error()
          }), MKMessageManager) : MKMessageManager).httpResult('post', GetServerData.LEAVE, {}, data => {
            console.log(data);
            (_crd && MKMessageManager === void 0 ? (_reportPossibleCrUseOfMKMessageManager({
              error: Error()
            }), MKMessageManager) : MKMessageManager).exitGame();
          });
        }
        /**游戏加载完成断点
         * @param gameName 游戏名称
         */


        static GameLoadComplete(gameName) {
          let obj = {
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


        static GameStartComplete(gameName) {
          let obj = {
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


        static GameEndComplete(gameName, gameResult) {
          let obj = {
            eventName: "game_end",
            name: gameName,
            result: gameResult
          };
          (_crd && NDB === void 0 ? (_reportPossibleCrUseOfNDB({
            error: Error()
          }), NDB) : NDB).sendAutoJoinEvent(obj);
        }

        static subNickName(nameStr) {
          if (nameStr.length > 8) {
            nameStr = nameStr.substring(0, 8) + '...';
          }

          return nameStr;
        }

      }, _defineProperty(_class2, "UserId", -1), _defineProperty(_class2, "UserName", "userName"), _defineProperty(_class2, "UserAvatar", ""), _defineProperty(_class2, "UserHeadImage", null), _defineProperty(_class2, "UserMoney", 0), _defineProperty(_class2, "OtherId", -1), _defineProperty(_class2, "OtherName", "player2"), _defineProperty(_class2, "OtherAvatar", ""), _defineProperty(_class2, "OtherHeadImage", null), _defineProperty(_class2, "ASSETS", 'v1/ball8/mine/diamond/'), _defineProperty(_class2, "JOIN", 'v1/ball8/join/'), _defineProperty(_class2, "LEAVE", 'v1/ball8/leave/'), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9TZXJ2ZXIvR2V0U2VydmVyRGF0YS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiU3ByaXRlRnJhbWUiLCJEYXRhU3RvcmFnZSIsIk1LTWVzc2FnZU1hbmFnZXIiLCJNS1Jlc291cmNlc01hbmFnZXIiLCJOREIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHZXRTZXJ2ZXJEYXRhIiwiZ2V0VXNlcmluZm8iLCJzdWNjZXNzIiwiZXJyIiwiZGF0YSIsIkdldEpzb24iLCJ1c2VySWQiLCJVc2VySWQiLCJVc2VyTmFtZSIsInVzZXJOYW1lIiwiVXNlckF2YXRhciIsImF2YXRhciIsImxvYWRIZWFkSW1hZyIsInJlcyIsIkhlYWRJbWFnZSIsImNyZWF0ZVdpdGhJbWFnZSIsIlVzZXJIZWFkSW1hZ2UiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwic3ViTmlja05hbWUiLCJvdGhlckRhdGEiLCJTYXZlSnNvbiIsImNvbnNvbGUiLCJlcnJvciIsIkdldENvaW4iLCJodHRwUmVzdWx0IiwiQVNTRVRTIiwiZGlhbW9uZCIsIlVzZXJNb25leSIsImpvaW4iLCJKT0lOIiwiaWQiLCJPdGhlcklkIiwiT3RoZXJOYW1lIiwibmFtZSIsIk90aGVyQXZhdGFyIiwic3ByaXRlRnJhbWUiLCJPdGhlckhlYWRJbWFnZSIsIkxlYXZlR2FtZSIsIkxFQVZFIiwibG9nIiwiZXhpdEdhbWUiLCJHYW1lTG9hZENvbXBsZXRlIiwiZ2FtZU5hbWUiLCJvYmoiLCJldmVudE5hbWUiLCJzZW5kQXV0b0pvaW5FdmVudCIsIkdhbWVTdGFydENvbXBsZXRlIiwiR2FtZUVuZENvbXBsZXRlIiwiZ2FtZVJlc3VsdCIsInJlc3VsdCIsIm5hbWVTdHIiLCJsZW5ndGgiLCJzdWJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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ZnJvbSAnY2MnO1xuaW1wb3J0IHsgRGF0YVN0b3JhZ2UgfSBmcm9tICcuLi9TdG9yYWdlL0RhdGFTdG9yYWdlJztcbmltcG9ydCBNS01lc3NhZ2VNYW5hZ2VyIGZyb20gJy4uL1V0aWxzL01LTWVzc2FnZU1hbmFnZXInO1xuaW1wb3J0IE1LUmVzb3VyY2VzTWFuYWdlciBmcm9tICcuLi9VdGlscy9NS1Jlc291cmNlc01hbmFnZXInO1xuaW1wb3J0IE5EQiBmcm9tICcuLi9VdGlscy9OREJUUyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnR2V0U2VydmVyRGF0YScpXG5leHBvcnQgY2xhc3MgR2V0U2VydmVyRGF0YSB7XG4gICAgc3RhdGljIFVzZXJJZCA9IC0xO1xuICAgIHN0YXRpYyBVc2VyTmFtZSA9IFwidXNlck5hbWVcIjtcbiAgICBzdGF0aWMgVXNlckF2YXRhciA9IFwiXCI7XG4gICAgc3RhdGljIFVzZXJIZWFkSW1hZ2U6IFNwcml0ZUZyYW1lIHwgbnVsbCA9IG51bGw7XG4gICAgc3RhdGljIFVzZXJNb25leTogbnVtYmVyID0gMDtcblxuICAgIHN0YXRpYyBPdGhlcklkID0gLTE7XG4gICAgc3RhdGljIE90aGVyTmFtZSA9IFwicGxheWVyMlwiO1xuICAgIHN0YXRpYyBPdGhlckF2YXRhciA9IFwiXCI7XG4gICAgc3RhdGljIE90aGVySGVhZEltYWdlOiBTcHJpdGVGcmFtZSB8IG51bGwgPSBudWxsO1xuXG5cbiAgICBwcml2YXRlIHN0YXRpYyBBU1NFVFMgPSAndjEvYmFsbDgvbWluZS9kaWFtb25kLyc7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6I635Y+W6LWE5Lqn77yI6YeR5biB44CB6ZK755+z44CB5ri45oiP5biB77yJ77ybXG4gICAgcHJpdmF0ZSBzdGF0aWMgSk9JTiA9ICd2MS9iYWxsOC9qb2luLyc7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WKoOWFpea4uOaIj++8m1xuICAgIHB1YmxpYyBzdGF0aWMgTEVBVkUgPSAndjEvYmFsbDgvbGVhdmUvJzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nprvlvIDmuLjmiI/vvJtcbiAgICAvKiog6I635Y+W55So5oi35Liq5Lq65L+h5oGvXG4gICAgICogQHBhcmFtIHN1Y2Nlc3Mg6I635Y+W5oiQ5YqfXG4gICAgICogQHBhcmFtIGVyciDojrflj5blpLHotKVcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldFVzZXJpbmZvKHN1Y2Nlc3M/OiBGdW5jdGlvbiwgZXJyPzogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgbGV0IGRhdGEgPSBEYXRhU3RvcmFnZS5HZXRKc29uKFwidXNlckluZm9cIik7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEudXNlcklkKSB7XG4gICAgICAgICAgICBHZXRTZXJ2ZXJEYXRhLlVzZXJJZCA9IGRhdGEudXNlcklkO1xuICAgICAgICAgICAgR2V0U2VydmVyRGF0YS5Vc2VyTmFtZSA9IGRhdGEudXNlck5hbWU7XG4gICAgICAgICAgICBHZXRTZXJ2ZXJEYXRhLlVzZXJBdmF0YXIgPSBkYXRhLmF2YXRhcjtcbiAgICAgICAgICAgIE1LUmVzb3VyY2VzTWFuYWdlci5sb2FkSGVhZEltYWcoZGF0YS5hdmF0YXIsIGRhdGEudXNlcklkLCAzLCAocmVzOiBJbWFnZUFzc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IEhlYWRJbWFnZSA9IG5ldyBTcHJpdGVGcmFtZSgpO1xuICAgICAgICAgICAgICAgIEhlYWRJbWFnZSA9IFNwcml0ZUZyYW1lLmNyZWF0ZVdpdGhJbWFnZShyZXMpO1xuICAgICAgICAgICAgICAgIEdldFNlcnZlckRhdGEuVXNlckhlYWRJbWFnZSA9IEhlYWRJbWFnZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIE1LTWVzc2FnZU1hbmFnZXIuZ2V0VXNlckluZm8oKHVzZXJJbmZvOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VySW5mbyAmJiB1c2VySW5mby51c2VySWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgdXNlcklkID0gdXNlckluZm8udXNlcklkO1xuICAgICAgICAgICAgICAgIGxldCB1c2VyTmFtZSA9IHRoaXMuc3ViTmlja05hbWUodXNlckluZm8udXNlck5hbWUpO1xuICAgICAgICAgICAgICAgIGxldCBhdmF0YXIgPSB1c2VySW5mby5hdmF0YXI7XG4gICAgICAgICAgICAgICAgLy/liKTmlq3mnKzlnLDlrZjlgqjlgLzkuI7mnI3liqHlmajnq6/ojrflj5bnmoTmlbDmja7mmK/lkKbnm7jlkIzvvIzoi6XkuI3lkIzliJnmm7TmlrDmlbDmja5cbiAgICAgICAgICAgICAgICBpZiAoR2V0U2VydmVyRGF0YS5Vc2VySWQgIT0gdXNlcklkKSB7XG4gICAgICAgICAgICAgICAgICAgIEdldFNlcnZlckRhdGEuVXNlcklkID0gdXNlcklkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoR2V0U2VydmVyRGF0YS5Vc2VyTmFtZSAhPSB1c2VyTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBHZXRTZXJ2ZXJEYXRhLlVzZXJOYW1lID0gdXNlck5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChHZXRTZXJ2ZXJEYXRhLlVzZXJBdmF0YXIgIT0gYXZhdGFyKSB7XG4gICAgICAgICAgICAgICAgICAgIEdldFNlcnZlckRhdGEuVXNlckF2YXRhciA9IGF2YXRhcjtcbiAgICAgICAgICAgICAgICAgICAgTUtSZXNvdXJjZXNNYW5hZ2VyLmxvYWRIZWFkSW1hZyhhdmF0YXIsIHVzZXJJZCwgMywgKHJlczogSW1hZ2VBc3NldCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IEhlYWRJbWFnZSA9IG5ldyBTcHJpdGVGcmFtZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgSGVhZEltYWdlID0gU3ByaXRlRnJhbWUuY3JlYXRlV2l0aEltYWdlKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBHZXRTZXJ2ZXJEYXRhLlVzZXJIZWFkSW1hZ2UgPSBIZWFkSW1hZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgb3RoZXJEYXRhID0geyB1c2VySWQ6IHVzZXJJZCwgdXNlck5hbWU6IHVzZXJOYW1lLCBhdmF0YXI6IGF2YXRhciB9O1xuICAgICAgICAgICAgICAgIERhdGFTdG9yYWdlLlNhdmVKc29uKFwidXNlckluZm9cIiwgb3RoZXJEYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIumUmeivr++8jOabtOaWsOS/oeaBr+Wksei0pe+8jOW9k+WJjeWxleekuuaVsOaNruS4uuS4iuasoeiOt+WPluaIkOWKn+aXtueahOaVsOaNrlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgLyoqIOiOt+WPlueOqeWutumHkeW4gVxuICAgICAqIEBwYXJhbSBzdWNjZXNzIOiOt+WPluaIkOWKn1xuICAgICAqIEBwYXJhbSBlcnIg6I635Y+W5aSx6LSlXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBHZXRDb2luKHN1Y2Nlc3M/OiBGdW5jdGlvbiwgZXJyPzogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgTUtNZXNzYWdlTWFuYWdlci5odHRwUmVzdWx0KCdnZXQnLCBHZXRTZXJ2ZXJEYXRhLkFTU0VUUywge30sIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEuZGlhbW9uZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgR2V0U2VydmVyRGF0YS5Vc2VyTW9uZXkgPSBkYXRhLmRpYW1vbmQ7XG4gICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIumUmeivr++8jOabtOaWsOS/oeaBr+Wksei0pVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgLyoqIOWKoOWFpea4uOaIjyDojrflj5blr7nmlrnnjqnlrrbmlbDmja5cbiAgICAgKiBAcGFyYW0gc3VjY2VzcyDojrflj5bmiJDlip9cbiAgICAgKiBAcGFyYW0gZXJyIOiOt+WPluWksei0pVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgam9pbihzdWNjZXNzPzogRnVuY3Rpb24sIGVycj86IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIE1LTWVzc2FnZU1hbmFnZXIuaHR0cFJlc3VsdCgncG9zdCcsIEdldFNlcnZlckRhdGEuSk9JTiwge30sIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEuaWQpIHtcbiAgICAgICAgICAgICAgICBHZXRTZXJ2ZXJEYXRhLk90aGVySWQgPSBkYXRhLmlkO1xuICAgICAgICAgICAgICAgIEdldFNlcnZlckRhdGEuT3RoZXJOYW1lID0gZGF0YS5uYW1lO1xuICAgICAgICAgICAgICAgIEdldFNlcnZlckRhdGEuT3RoZXJBdmF0YXIgPSBkYXRhLmF2YXRhcjtcbiAgICAgICAgICAgICAgICBNS1Jlc291cmNlc01hbmFnZXIubG9hZEhlYWRJbWFnKEdldFNlcnZlckRhdGEuT3RoZXJBdmF0YXIsIEdldFNlcnZlckRhdGEuT3RoZXJJZCwgMywgKHJlczogSW1hZ2VBc3NldCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3ByaXRlRnJhbWUgPSBuZXcgU3ByaXRlRnJhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlRnJhbWUgPSBTcHJpdGVGcmFtZS5jcmVhdGVXaXRoSW1hZ2UocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgR2V0U2VydmVyRGF0YS5PdGhlckhlYWRJbWFnZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLplJnor6/vvIzmm7TmlrDkv6Hmga/lpLHotKVcIik7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBlcnIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIC8qKuemu+W8gOa4uOaIj++8myovXG4gICAgcHVibGljIHN0YXRpYyBMZWF2ZUdhbWUoKTogdm9pZCB7XG4gICAgICAgIE1LTWVzc2FnZU1hbmFnZXIuaHR0cFJlc3VsdCgncG9zdCcsIEdldFNlcnZlckRhdGEuTEVBVkUsIHt9LCAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIE1LTWVzc2FnZU1hbmFnZXIuZXhpdEdhbWUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKua4uOaIj+WKoOi9veWujOaIkOaWreeCuVxuICAgICAqIEBwYXJhbSBnYW1lTmFtZSDmuLjmiI/lkI3np7BcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEdhbWVMb2FkQ29tcGxldGUoZ2FtZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgZXZlbnROYW1lOiBcImdhbWVfbG9hZF9jb21wbGV0ZVwiLFxuICAgICAgICAgICAgbmFtZTogZ2FtZU5hbWUsXG4gICAgICAgIH1cbiAgICAgICAgTkRCLnNlbmRBdXRvSm9pbkV2ZW50KG9iaik7XG4gICAgfVxuICAgIC8qKua4uOaIj+W8gOWni+aWreeCuVxuICAgICAqIEBwYXJhbSBnYW1lTmFtZSDmuLjmiI/lkI3np7BcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEdhbWVTdGFydENvbXBsZXRlKGdhbWVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgIGV2ZW50TmFtZTogXCJnYW1lX3N0YXJ0XCIsXG4gICAgICAgICAgICBuYW1lOiBnYW1lTmFtZSxcbiAgICAgICAgfVxuICAgICAgICBOREIuc2VuZEF1dG9Kb2luRXZlbnQob2JqKTtcbiAgICB9XG4gICAgLyoqIOa4uOaIj+e7k+adn+aWreeCuVxuICAgICAqIEBwYXJhbSBnYW1lTmFtZSDmuLjmiI/lkI3np7BcbiAgICAgKiBAcGFyYW0gZ2FtZVJlc3VsdCDorr7nva7ov5Tlm57nu5Pmnpwgd2luKOiDnOWIqSkvbG9zZSjlpLHotKUpL2RyYXco5bmz5bGAKVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgR2FtZUVuZENvbXBsZXRlKGdhbWVOYW1lOiBzdHJpbmcsIGdhbWVSZXN1bHQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgZXZlbnROYW1lOiBcImdhbWVfZW5kXCIsXG4gICAgICAgICAgICBuYW1lOiBnYW1lTmFtZSxcbiAgICAgICAgICAgIHJlc3VsdDogZ2FtZVJlc3VsdFxuICAgICAgICB9XG4gICAgICAgIE5EQi5zZW5kQXV0b0pvaW5FdmVudChvYmopO1xuICAgIH1cblxuXG5cbiAgICBwcml2YXRlIHN0YXRpYyBzdWJOaWNrTmFtZShuYW1lU3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAobmFtZVN0ci5sZW5ndGggPiA4KSB7XG4gICAgICAgICAgICBuYW1lU3RyID0gbmFtZVN0ci5zdWJzdHJpbmcoMCwgOCkgKyAnLi4uJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmFtZVN0cjtcbiAgICB9XG59XG4iXX0=