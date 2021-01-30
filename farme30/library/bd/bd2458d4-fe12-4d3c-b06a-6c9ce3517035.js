System.register(["cce.code-quality.cr", "cc", "./Popup.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, instantiate, resources, find, Popup, _dec, _class, _class2, _temp, _crd, ccclass, property, PopupManager;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfPopup(extras) {
    _reporterNs.report("Popup", "./Popup", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      resources = _cc.resources;
      find = _cc.find;
    }, function (_PopupJs) {
      Popup = _PopupJs.Popup;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd245jU/hJNPLBqbJzjUXA1", "PopupManager", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("PopupManager", PopupManager = (_dec = ccclass('PopupManager'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        function PopupManager() {}

        /**加载弹窗的预制体，并初始化PopupManager中的popups数组*/
        PopupManager.LoadPopups = function LoadPopups(func) {
          // this.CreatePopupParent();
          resources.loadDir("PopupsPrefab", function (err, assets) {
            if (err) {
              console.error(err);
              return;
            }

            for (var i = 0; i < assets.length; i++) {
              var element = assets[i];
              PopupManager.popups.push(element);
            }

            if (func) func(); // console.log(PopupManager.popups);
          });
        }
        /**展示弹窗 */
        ;

        PopupManager.ShowPopup = function ShowPopup(popupName, arg, isLevel2Popup) {
          if (isLevel2Popup === void 0) {
            isLevel2Popup = false;
          }

          this.AddPopup(popupName, arg, isLevel2Popup);
          var popups = isLevel2Popup ? this.TwoPopups : this.OnePopups;
          var popupsNode = isLevel2Popup ? this.TwoPopupsNode : this.OnePopupsNode;
          var popupsArg = isLevel2Popup ? this.TwoPopupsArg : this.OnePopupsArg;
          var parentnode = find("Canvas/Popup").getChildByName(isLevel2Popup ? "two" : "one");

          if (parentnode.children.indexOf(popupsNode[0]) != -1) {
            return popups[0];
          } else {
            var node = popupsNode[0];
            parentnode.addChild(node);
            console.log("打开了弹窗", popups[0].name, "!", popups[0]);
            popups[0].Init(popupsArg[0]);
            return popups[0];
          }
        }
        /**关闭当前弹窗或指定弹窗 */
        ;

        PopupManager.ClosePopup = function ClosePopup(isLevel2Popup, popupName, arg) {
          if (isLevel2Popup === void 0) {
            isLevel2Popup = false;
          }

          if (popupName === void 0) {
            popupName = "NULL_POPUP_NAME";
          }

          this.RemovePopup(popupName, isLevel2Popup);
          var popups = isLevel2Popup ? this.TwoPopups : this.OnePopups;
          var popupsArg = isLevel2Popup ? this.TwoPopupsArg : this.OnePopupsArg;

          if (popups.length <= 0) {
            console.log("所有", isLevel2Popup, "弹窗已经播放完毕");
            return;
          }

          var parentnode = find("Canvas/Popup").getChildByName(isLevel2Popup ? "two" : "one");
          parentnode.addChild(popups[0].node);
          popups[0].Init(popupsArg[0]);
        }
        /**关闭所有弹窗 */
        ;

        PopupManager.CloseAllPopup = function CloseAllPopup() {
          this.OnePopups.length = 0;
          this.OnePopupsNode.length = 0;
          this.OnePopupsArg.length = 0;
          this.TwoPopups.length = 0;
          this.TwoPopupsNode.length = 0;
          this.TwoPopupsArg.length = 0;
        }
        /**添加预制体到popups数组中 */
        ;

        PopupManager.PushPopup = function PushPopup(popup) {
          PopupManager.popups.push(popup);
        };

        PopupManager.AddPopup = function AddPopup(popupName, arg, isLevel2Popup) {
          if (isLevel2Popup === void 0) {
            isLevel2Popup = false;
          }

          var targetPopupPrefab = this.ChoosePopup(popupName);

          if (!targetPopupPrefab) {
            console.error("Can't find popupName ", popupName);
            return;
          }

          var popupNode = instantiate(targetPopupPrefab);
          var popup = popupNode.getComponent(_crd && Popup === void 0 ? (_reportPossibleCrUseOfPopup({
            error: Error()
          }), Popup) : Popup);

          if (!popup) {
            console.error("Can't find PopupClass by popupName ", popupName);
            return;
          }

          if (!isLevel2Popup) {
            if (this.OnePopups.indexOf(popup) != -1) {
              console.log("弹窗已存在");
              return;
            }

            this.OnePopups.push(popup);
            this.OnePopupsNode.push(popupNode);
            this.OnePopupsArg.push(arg);
          } else {
            if (this.TwoPopups.indexOf(popup) != -1) {
              console.log("弹窗已存在");
              return;
            }

            popup.isLevel2Popup = isLevel2Popup;
            this.TwoPopups.push(popup);
            this.TwoPopupsNode.push(popupNode);
            this.TwoPopupsArg.push(arg);
          }
        };

        PopupManager.RemovePopup = function RemovePopup(popupName, isLevel2Popup) {
          if (isLevel2Popup === void 0) {
            isLevel2Popup = false;
          }

          var popups = isLevel2Popup ? this.TwoPopups : this.OnePopups;
          var popupsNode = isLevel2Popup ? this.TwoPopupsNode : this.OnePopupsNode;
          var popupsArg = isLevel2Popup ? this.TwoPopupsArg : this.OnePopupsArg;

          if (popupName == "NULL_POPUP_NAME") {
            popups[0].node.destroy();
            popups.splice(0, 1);
            popupsNode.splice(0, 1);
            popupsArg.splice(0, 1);
          } else {
            for (var i = 0; i < popups.length; i++) {
              var element = popups[i];

              if (element.node.name == popupName) {
                popups[i].node.destroy();
                popups.splice(i, 1);
                popupsNode.splice(i, 1);
                popupsArg.splice(i, 1);
                return;
              }
            }
          }
        };

        PopupManager.ChoosePopup = function ChoosePopup(popupName) {
          for (var i = 0; i < this.popups.length; i++) {
            var element = this.popups[i];

            if (element.data.name == popupName) {
              return element;
            }
          }

          return null;
        } // /**单例 */
        // private static singleton: PopupManager;
        // public static get I(): PopupManager {
        //     if (!this.singleton) {
        //         this.singleton = new PopupManager();
        //     }
        //     return this.singleton;
        // }
        // /**所有弹窗的Prefab的集合 */
        // static popups: Prefab[] = [];
        // /**1级弹窗的集合 */
        // static OnePopups: Popup[] = [];
        // static OnePopupsNode: Node[] = [];
        // static OnePopupsArg: any[] = [];
        // /**2级弹窗的集合 */
        // static TwoPopups: Popup[] = [];
        // static TwoPopupsArg: any[] = [];
        // static TwoPopupsNode: Node[] = [];
        // /**
        //      * 加载弹窗的预制体，并初始化PopupManager中的popups数组
        //      */
        // static LoadPopups() {
        //     resources.loadDir("PopupsPrefab", function (err: any, assets: any) {
        //         if (err) {
        //             console.error(err);
        //             return;
        //         }
        //         for (let i = 0; i < assets.length; i++) {
        //             const element = assets[i];
        //             PopupManager.popups.push(element);
        //         }
        //         LoadManager.loadIndex++;
        //         console.log(PopupManager.popups);
        //     });
        // }
        // static ShowPopup(popupName: string, arg?: any, isLevel2Popup: boolean = false) {
        //     this.AddPopup(popupName, arg, isLevel2Popup);
        //     let popups = isLevel2Popup ? this.TwoPopups : this.OnePopups;
        //     let popupsNode = isLevel2Popup ? this.TwoPopupsNode : this.OnePopupsNode;
        //     let popupsArg = isLevel2Popup ? this.TwoPopupsArg : this.OnePopupsArg;
        //     if (((find("Canvas/Popup") as Node).getChildByName(isLevel2Popup ? "two" : "one") as Node).children.indexOf(popups[0].node) != -1) {
        //         return popups[0];
        //     } else {
        //         ((find("Canvas/Popup") as Node).getChildByName(isLevel2Popup ? "two" : "one") as Node).addChild(popups[0].node);
        //         console.log("打开了弹窗", popups[0].name, "!", popups[0]);
        //         popups[0].Init(popupsArg[0]);
        //         return popups[0];
        //     }
        // }
        // static ClosePopup(isLevel2Popup: boolean = false, popupName: string = "NULL_POPUP_NAME", arg?: any) {
        //     this.RemovePopup(popupName, isLevel2Popup);
        //     let popups = isLevel2Popup ? this.TwoPopups : this.OnePopups;
        //     let popupsArg = isLevel2Popup ? this.TwoPopupsArg : this.OnePopupsArg;
        //     if (popups.length <= 0) {
        //         console.log("所有", isLevel2Popup, "弹窗已经播放完毕");
        //         return;
        //     }
        //     ((find("Canvas/Popup") as Node).getChildByName(isLevel2Popup ? "two" : "one") as Node).addChild(popups[0].node);
        //     popups[0].Init(popupsArg[0]);
        // }
        // static CloseAllPopup() {
        //     this.OnePopups.length = 0;
        //     this.OnePopupsNode.length = 0;
        //     this.OnePopupsArg.length = 0;
        //     this.TwoPopups.length = 0;
        //     this.TwoPopupsNode.length = 0;
        //     this.TwoPopupsArg.length = 0;
        // }
        // private static AddPopup(popupName: string, arg?: any, isLevel2Popup: boolean = false) {
        //     let targetPopupPrefab: Prefab | null = this.ChoosePopup(popupName);
        //     if (!targetPopupPrefab) {
        //         console.error("Can't find popupName ", popupName);
        //         return;
        //     }
        //     let popupNode = instantiate(targetPopupPrefab);
        //     let popup = popupNode.getComponent(Popup);
        //     if (!popup) {
        //         console.error("Can't find PopupClass by popupName ", popupName);
        //         return;
        //     }
        //     if (!isLevel2Popup) {
        //         if (this.OnePopups.indexOf(popup) != -1) {
        //             console.log("弹窗已存在");
        //             return;
        //         }
        //         this.OnePopups.push(popup);
        //         this.OnePopupsArg.push(arg);
        //         this.OnePopupsNode.push(popupNode);
        //     } else {
        //         if (this.TwoPopups.indexOf(popup) != -1) {
        //             console.log("弹窗已存在");
        //             return;
        //         }
        //         popup.isLevel2Popup = isLevel2Popup;
        //         this.TwoPopups.push(popup);
        //         this.TwoPopupsArg.push(arg);
        //         this.TwoPopupsNode.push(popupNode);
        //     }
        // }
        // private static RemovePopup(popupName: string = "NULL_POPUP_NAME", isLevel2Popup: boolean = false) {
        //     let popups = (isLevel2Popup ? this.TwoPopups : this.OnePopups);
        //     let popupsArg = (isLevel2Popup ? this.TwoPopupsArg : this.OnePopupsArg)
        //     let popupsNode = (isLevel2Popup ? this.TwoPopupsNode : this.OnePopupsNode);
        //     if (popupName == "NULL_POPUP_NAME") {
        //         popups[0].node.destroy();
        //         popups.splice(0, 1);
        //         popupsNode.splice(0, 1);
        //         popupsArg.splice(0, 1);
        //     } else {
        //         for (let i = 0; i < popups.length; i++) {
        //             const element = popups[i];
        //             if (element.node.name == popupName) {
        //                 popups[i].node.destroy();
        //                 popups.splice(i, 1);
        //                 popupsNode.splice(i, 1);
        //                 popupsArg.splice(i, 1);
        //                 return;
        //             }
        //         }
        //     }
        // }
        // private static ChoosePopup(popupName: string): Prefab | null {
        //     for (let i = 0; i < this.popups.length; i++) {
        //         const element = this.popups[i];
        //         if (element.data._name == popupName) {
        //             return element;
        //         }
        //     }
        //     return null;
        // }
        ;

        _createClass(PopupManager, null, [{
          key: "I",

          /**单例 */
          get: function get() {
            return this.Instance;
          }
        }, {
          key: "i",
          set: function set(v) {
            this.Instance = v;
          }
          /**所有弹窗的Prefab的集合 */

        }]);

        return PopupManager;
      }(), _defineProperty(_class2, "Instance", void 0), _defineProperty(_class2, "popups", []), _defineProperty(_class2, "OnePopups", []), _defineProperty(_class2, "OnePopupsNode", []), _defineProperty(_class2, "OnePopupsArg", []), _defineProperty(_class2, "TwoPopups", []), _defineProperty(_class2, "TwoPopupsNode", []), _defineProperty(_class2, "TwoPopupsArg", []), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vUG9wdXAvUG9wdXBNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJpbnN0YW50aWF0ZSIsInJlc291cmNlcyIsImZpbmQiLCJQb3B1cCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlBvcHVwTWFuYWdlciIsIkxvYWRQb3B1cHMiLCJmdW5jIiwibG9hZERpciIsImVyciIsImFzc2V0cyIsImNvbnNvbGUiLCJlcnJvciIsImkiLCJsZW5ndGgiLCJlbGVtZW50IiwicG9wdXBzIiwicHVzaCIsIlNob3dQb3B1cCIsInBvcHVwTmFtZSIsImFyZyIsImlzTGV2ZWwyUG9wdXAiLCJBZGRQb3B1cCIsIlR3b1BvcHVwcyIsIk9uZVBvcHVwcyIsInBvcHVwc05vZGUiLCJUd29Qb3B1cHNOb2RlIiwiT25lUG9wdXBzTm9kZSIsInBvcHVwc0FyZyIsIlR3b1BvcHVwc0FyZyIsIk9uZVBvcHVwc0FyZyIsInBhcmVudG5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImNoaWxkcmVuIiwiaW5kZXhPZiIsIm5vZGUiLCJhZGRDaGlsZCIsImxvZyIsIm5hbWUiLCJJbml0IiwiQ2xvc2VQb3B1cCIsIlJlbW92ZVBvcHVwIiwiQ2xvc2VBbGxQb3B1cCIsIlB1c2hQb3B1cCIsInBvcHVwIiwidGFyZ2V0UG9wdXBQcmVmYWIiLCJDaG9vc2VQb3B1cCIsInBvcHVwTm9kZSIsImdldENvbXBvbmVudCIsImRlc3Ryb3kiLCJzcGxpY2UiLCJkYXRhIiwiSW5zdGFuY2UiLCJ2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQTZCQyxNQUFBQSxXLE9BQUFBLFc7QUFBbUNDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7O0FBRzNFQyxNQUFBQSxLLFlBQUFBLEs7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Q0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBNVNBOzhCQUVvQztBQUFFLG1CQUFPLEtBQUtxQyxRQUFaO0FBQXVCOzs7NEJBQ3hDQyxDLEVBQWlCO0FBQUUsaUJBQUtELFFBQUwsR0FBZ0JDLENBQWhCO0FBQW9CO0FBRTVEOzs7Ozs0RkFDMEIsRSx5Q0FHRSxFLDZDQUNHLEUsNENBQ0YsRSx5Q0FFRCxFLDZDQUNHLEUsNENBQ0YsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgaW5zdGFudGlhdGUsIFByZWZhYiwgZ2FtZSwgbG9hZGVyLCByZXNvdXJjZXMsIGZpbmQgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBMb2FkTWFuYWdlciB9IGZyb20gJy4uL0xvYWQvTG9hZE1hbmFnZXInO1xuaW1wb3J0IHsgTXlMaXN0Q29tbW9uIH0gZnJvbSAnLi4vTXlNYXRoL015TGlzdENvbW1vbic7XG5pbXBvcnQgeyBQb3B1cCB9IGZyb20gJy4vUG9wdXAnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1BvcHVwTWFuYWdlcicpXG5leHBvcnQgY2xhc3MgUG9wdXBNYW5hZ2VyIHtcblxuICAgIC8qKuWNleS+iyAqL1xuICAgIHByaXZhdGUgc3RhdGljIEluc3RhbmNlOiBQb3B1cE1hbmFnZXI7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgSSgpOiBQb3B1cE1hbmFnZXIgeyByZXR1cm4gdGhpcy5JbnN0YW5jZTsgfVxuICAgIHByaXZhdGUgc3RhdGljIHNldCBpKHY6IFBvcHVwTWFuYWdlcikgeyB0aGlzLkluc3RhbmNlID0gdjsgfVxuXG4gICAgLyoq5omA5pyJ5by556qX55qEUHJlZmFi55qE6ZuG5ZCIICovXG4gICAgc3RhdGljIHBvcHVwczogUHJlZmFiW10gPSBbXTtcblxuICAgIC8qKjHnuqflvLnnqpfnmoTpm4blkIggKi9cbiAgICBzdGF0aWMgT25lUG9wdXBzOiBQb3B1cFtdID0gW107XG4gICAgc3RhdGljIE9uZVBvcHVwc05vZGU6IE5vZGVbXSA9IFtdO1xuICAgIHN0YXRpYyBPbmVQb3B1cHNBcmc6IGFueVtdID0gW107XG4gICAgLyoqMue6p+W8ueeql+eahOmbhuWQiCAqL1xuICAgIHN0YXRpYyBUd29Qb3B1cHM6IFBvcHVwW10gPSBbXTtcbiAgICBzdGF0aWMgVHdvUG9wdXBzTm9kZTogTm9kZVtdID0gW107XG4gICAgc3RhdGljIFR3b1BvcHVwc0FyZzogYW55W10gPSBbXTtcblxuXG4gICAgLyoq5Yqg6L295by556qX55qE6aKE5Yi25L2T77yM5bm25Yid5aeL5YyWUG9wdXBNYW5hZ2Vy5Lit55qEcG9wdXBz5pWw57uEKi9cbiAgICBwdWJsaWMgc3RhdGljIExvYWRQb3B1cHMoZnVuYz86IEZ1bmN0aW9uKSB7XG4gICAgICAgIC8vIHRoaXMuQ3JlYXRlUG9wdXBQYXJlbnQoKTtcbiAgICAgICAgcmVzb3VyY2VzLmxvYWREaXIoXCJQb3B1cHNQcmVmYWJcIiwgZnVuY3Rpb24gKGVycjogYW55LCBhc3NldHM6IGFueSkge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBhc3NldHNbaV07XG4gICAgICAgICAgICAgICAgUG9wdXBNYW5hZ2VyLnBvcHVwcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZ1bmMpXG4gICAgICAgICAgICAgICAgZnVuYygpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coUG9wdXBNYW5hZ2VyLnBvcHVwcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKirlsZXnpLrlvLnnqpcgKi9cbiAgICBwdWJsaWMgc3RhdGljIFNob3dQb3B1cChwb3B1cE5hbWU6IHN0cmluZywgYXJnPzogYW55LCBpc0xldmVsMlBvcHVwOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5BZGRQb3B1cChwb3B1cE5hbWUsIGFyZywgaXNMZXZlbDJQb3B1cCk7XG4gICAgICAgIGxldCBwb3B1cHMgPSBpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHMgOiB0aGlzLk9uZVBvcHVwcztcbiAgICAgICAgbGV0IHBvcHVwc05vZGUgPSBpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHNOb2RlIDogdGhpcy5PbmVQb3B1cHNOb2RlO1xuICAgICAgICBsZXQgcG9wdXBzQXJnID0gaXNMZXZlbDJQb3B1cCA/IHRoaXMuVHdvUG9wdXBzQXJnIDogdGhpcy5PbmVQb3B1cHNBcmc7XG4gICAgICAgIGxldCBwYXJlbnRub2RlID0gKChmaW5kKFwiQ2FudmFzL1BvcHVwXCIpIGFzIE5vZGUpLmdldENoaWxkQnlOYW1lKGlzTGV2ZWwyUG9wdXAgPyBcInR3b1wiIDogXCJvbmVcIikgYXMgTm9kZSlcbiAgICAgICAgaWYgKHBhcmVudG5vZGUuY2hpbGRyZW4uaW5kZXhPZihwb3B1cHNOb2RlWzBdKSAhPSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHBvcHVwc1swXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gcG9wdXBzTm9kZVswXTtcbiAgICAgICAgICAgIHBhcmVudG5vZGUuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaJk+W8gOS6huW8ueeql1wiLCBwb3B1cHNbMF0ubmFtZSwgXCIhXCIsIHBvcHVwc1swXSk7XG4gICAgICAgICAgICBwb3B1cHNbMF0uSW5pdChwb3B1cHNBcmdbMF0pO1xuICAgICAgICAgICAgcmV0dXJuIHBvcHVwc1swXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKirlhbPpl63lvZPliY3lvLnnqpfmiJbmjIflrprlvLnnqpcgKi9cbiAgICBwdWJsaWMgc3RhdGljIENsb3NlUG9wdXAoaXNMZXZlbDJQb3B1cDogYm9vbGVhbiA9IGZhbHNlLCBwb3B1cE5hbWU6IHN0cmluZyA9IFwiTlVMTF9QT1BVUF9OQU1FXCIsIGFyZz86IGFueSkge1xuICAgICAgICB0aGlzLlJlbW92ZVBvcHVwKHBvcHVwTmFtZSwgaXNMZXZlbDJQb3B1cCk7XG4gICAgICAgIGxldCBwb3B1cHMgPSBpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHMgOiB0aGlzLk9uZVBvcHVwcztcbiAgICAgICAgbGV0IHBvcHVwc0FyZyA9IGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwc0FyZyA6IHRoaXMuT25lUG9wdXBzQXJnO1xuICAgICAgICBpZiAocG9wdXBzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaJgOaciVwiLCBpc0xldmVsMlBvcHVwLCBcIuW8ueeql+W3sue7j+aSreaUvuWujOavlVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyZW50bm9kZSA9ICgoZmluZChcIkNhbnZhcy9Qb3B1cFwiKSBhcyBOb2RlKS5nZXRDaGlsZEJ5TmFtZShpc0xldmVsMlBvcHVwID8gXCJ0d29cIiA6IFwib25lXCIpIGFzIE5vZGUpO1xuICAgICAgICBwYXJlbnRub2RlLmFkZENoaWxkKHBvcHVwc1swXS5ub2RlKTtcbiAgICAgICAgcG9wdXBzWzBdLkluaXQocG9wdXBzQXJnWzBdKTtcbiAgICB9XG4gICAgLyoq5YWz6Zet5omA5pyJ5by556qXICovXG4gICAgcHVibGljIHN0YXRpYyBDbG9zZUFsbFBvcHVwKCkge1xuICAgICAgICB0aGlzLk9uZVBvcHVwcy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLk9uZVBvcHVwc05vZGUubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5PbmVQb3B1cHNBcmcubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5Ud29Qb3B1cHMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5Ud29Qb3B1cHNOb2RlLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuVHdvUG9wdXBzQXJnLmxlbmd0aCA9IDA7XG4gICAgfVxuICAgIC8qKua3u+WKoOmihOWItuS9k+WIsHBvcHVwc+aVsOe7hOS4rSAqL1xuICAgIHB1YmxpYyBzdGF0aWMgUHVzaFBvcHVwKHBvcHVwOiBQcmVmYWIpIHtcbiAgICAgICAgUG9wdXBNYW5hZ2VyLnBvcHVwcy5wdXNoKHBvcHVwKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBBZGRQb3B1cChwb3B1cE5hbWU6IHN0cmluZywgYXJnPzogYW55LCBpc0xldmVsMlBvcHVwOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHRhcmdldFBvcHVwUHJlZmFiOiBQcmVmYWIgfCBudWxsID0gdGhpcy5DaG9vc2VQb3B1cChwb3B1cE5hbWUpO1xuICAgICAgICBpZiAoIXRhcmdldFBvcHVwUHJlZmFiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FuJ3QgZmluZCBwb3B1cE5hbWUgXCIsIHBvcHVwTmFtZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBvcHVwTm9kZSA9IGluc3RhbnRpYXRlKHRhcmdldFBvcHVwUHJlZmFiKTtcbiAgICAgICAgbGV0IHBvcHVwID0gcG9wdXBOb2RlLmdldENvbXBvbmVudChQb3B1cCk7XG4gICAgICAgIGlmICghcG9wdXApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW4ndCBmaW5kIFBvcHVwQ2xhc3MgYnkgcG9wdXBOYW1lIFwiLCBwb3B1cE5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNMZXZlbDJQb3B1cCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuT25lUG9wdXBzLmluZGV4T2YocG9wdXApICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlvLnnqpflt7LlrZjlnKhcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5PbmVQb3B1cHMucHVzaChwb3B1cCk7XG4gICAgICAgICAgICB0aGlzLk9uZVBvcHVwc05vZGUucHVzaChwb3B1cE5vZGUpO1xuICAgICAgICAgICAgdGhpcy5PbmVQb3B1cHNBcmcucHVzaChhcmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuVHdvUG9wdXBzLmluZGV4T2YocG9wdXApICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlvLnnqpflt7LlrZjlnKhcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9wdXAuaXNMZXZlbDJQb3B1cCA9IGlzTGV2ZWwyUG9wdXA7XG4gICAgICAgICAgICB0aGlzLlR3b1BvcHVwcy5wdXNoKHBvcHVwKTtcbiAgICAgICAgICAgIHRoaXMuVHdvUG9wdXBzTm9kZS5wdXNoKHBvcHVwTm9kZSk7XG4gICAgICAgICAgICB0aGlzLlR3b1BvcHVwc0FyZy5wdXNoKGFyZyk7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBwcml2YXRlIHN0YXRpYyBSZW1vdmVQb3B1cChwb3B1cE5hbWU6IHN0cmluZywgaXNMZXZlbDJQb3B1cDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBwb3B1cHMgPSAoaXNMZXZlbDJQb3B1cCA/IHRoaXMuVHdvUG9wdXBzIDogdGhpcy5PbmVQb3B1cHMpO1xuICAgICAgICBsZXQgcG9wdXBzTm9kZSA9IChpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHNOb2RlIDogdGhpcy5PbmVQb3B1cHNOb2RlKTtcbiAgICAgICAgbGV0IHBvcHVwc0FyZyA9IChpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHNBcmcgOiB0aGlzLk9uZVBvcHVwc0FyZylcbiAgICAgICAgaWYgKHBvcHVwTmFtZSA9PSBcIk5VTExfUE9QVVBfTkFNRVwiKSB7XG4gICAgICAgICAgICBwb3B1cHNbMF0ubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICBwb3B1cHMuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgcG9wdXBzTm9kZS5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICBwb3B1cHNBcmcuc3BsaWNlKDAsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3B1cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gcG9wdXBzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lm5vZGUubmFtZSA9PSBwb3B1cE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBzW2ldLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICBwb3B1cHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBwb3B1cHNOb2RlLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBzQXJnLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHByaXZhdGUgc3RhdGljIENob29zZVBvcHVwKHBvcHVwTmFtZTogc3RyaW5nKTogUHJlZmFiIHwgbnVsbCB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wb3B1cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnBvcHVwc1tpXTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmRhdGEubmFtZSA9PSBwb3B1cE5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICAvLyAvKirljZXkvosgKi9cbiAgICAvLyBwcml2YXRlIHN0YXRpYyBzaW5nbGV0b246IFBvcHVwTWFuYWdlcjtcbiAgICAvLyBwdWJsaWMgc3RhdGljIGdldCBJKCk6IFBvcHVwTWFuYWdlciB7XG4gICAgLy8gICAgIGlmICghdGhpcy5zaW5nbGV0b24pIHtcbiAgICAvLyAgICAgICAgIHRoaXMuc2luZ2xldG9uID0gbmV3IFBvcHVwTWFuYWdlcigpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiB0aGlzLnNpbmdsZXRvbjtcbiAgICAvLyB9XG5cbiAgICAvLyAvKirmiYDmnInlvLnnqpfnmoRQcmVmYWLnmoTpm4blkIggKi9cbiAgICAvLyBzdGF0aWMgcG9wdXBzOiBQcmVmYWJbXSA9IFtdO1xuXG4gICAgLy8gLyoqMee6p+W8ueeql+eahOmbhuWQiCAqL1xuICAgIC8vIHN0YXRpYyBPbmVQb3B1cHM6IFBvcHVwW10gPSBbXTtcbiAgICAvLyBzdGF0aWMgT25lUG9wdXBzTm9kZTogTm9kZVtdID0gW107XG4gICAgLy8gc3RhdGljIE9uZVBvcHVwc0FyZzogYW55W10gPSBbXTtcbiAgICAvLyAvKioy57qn5by556qX55qE6ZuG5ZCIICovXG4gICAgLy8gc3RhdGljIFR3b1BvcHVwczogUG9wdXBbXSA9IFtdO1xuICAgIC8vIHN0YXRpYyBUd29Qb3B1cHNBcmc6IGFueVtdID0gW107XG4gICAgLy8gc3RhdGljIFR3b1BvcHVwc05vZGU6IE5vZGVbXSA9IFtdO1xuXG5cbiAgICAvLyAvKipcbiAgICAvLyAgICAgICog5Yqg6L295by556qX55qE6aKE5Yi25L2T77yM5bm25Yid5aeL5YyWUG9wdXBNYW5hZ2Vy5Lit55qEcG9wdXBz5pWw57uEXG4gICAgLy8gICAgICAqL1xuICAgIC8vIHN0YXRpYyBMb2FkUG9wdXBzKCkge1xuICAgIC8vICAgICByZXNvdXJjZXMubG9hZERpcihcIlBvcHVwc1ByZWZhYlwiLCBmdW5jdGlvbiAoZXJyOiBhbnksIGFzc2V0czogYW55KSB7XG4gICAgLy8gICAgICAgICBpZiAoZXJyKSB7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGFzc2V0c1tpXTtcbiAgICAvLyAgICAgICAgICAgICBQb3B1cE1hbmFnZXIucG9wdXBzLnB1c2goZWxlbWVudCk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBMb2FkTWFuYWdlci5sb2FkSW5kZXgrKztcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFBvcHVwTWFuYWdlci5wb3B1cHMpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG4gICAgLy8gc3RhdGljIFNob3dQb3B1cChwb3B1cE5hbWU6IHN0cmluZywgYXJnPzogYW55LCBpc0xldmVsMlBvcHVwOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAvLyAgICAgdGhpcy5BZGRQb3B1cChwb3B1cE5hbWUsIGFyZywgaXNMZXZlbDJQb3B1cCk7XG4gICAgLy8gICAgIGxldCBwb3B1cHMgPSBpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHMgOiB0aGlzLk9uZVBvcHVwcztcbiAgICAvLyAgICAgbGV0IHBvcHVwc05vZGUgPSBpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHNOb2RlIDogdGhpcy5PbmVQb3B1cHNOb2RlO1xuICAgIC8vICAgICBsZXQgcG9wdXBzQXJnID0gaXNMZXZlbDJQb3B1cCA/IHRoaXMuVHdvUG9wdXBzQXJnIDogdGhpcy5PbmVQb3B1cHNBcmc7XG4gICAgLy8gICAgIGlmICgoKGZpbmQoXCJDYW52YXMvUG9wdXBcIikgYXMgTm9kZSkuZ2V0Q2hpbGRCeU5hbWUoaXNMZXZlbDJQb3B1cCA/IFwidHdvXCIgOiBcIm9uZVwiKSBhcyBOb2RlKS5jaGlsZHJlbi5pbmRleE9mKHBvcHVwc1swXS5ub2RlKSAhPSAtMSkge1xuICAgIC8vICAgICAgICAgcmV0dXJuIHBvcHVwc1swXTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICgoZmluZChcIkNhbnZhcy9Qb3B1cFwiKSBhcyBOb2RlKS5nZXRDaGlsZEJ5TmFtZShpc0xldmVsMlBvcHVwID8gXCJ0d29cIiA6IFwib25lXCIpIGFzIE5vZGUpLmFkZENoaWxkKHBvcHVwc1swXS5ub2RlKTtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwi5omT5byA5LqG5by556qXXCIsIHBvcHVwc1swXS5uYW1lLCBcIiFcIiwgcG9wdXBzWzBdKTtcbiAgICAvLyAgICAgICAgIHBvcHVwc1swXS5Jbml0KHBvcHVwc0FyZ1swXSk7XG4gICAgLy8gICAgICAgICByZXR1cm4gcG9wdXBzWzBdO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIC8vIHN0YXRpYyBDbG9zZVBvcHVwKGlzTGV2ZWwyUG9wdXA6IGJvb2xlYW4gPSBmYWxzZSwgcG9wdXBOYW1lOiBzdHJpbmcgPSBcIk5VTExfUE9QVVBfTkFNRVwiLCBhcmc/OiBhbnkpIHtcbiAgICAvLyAgICAgdGhpcy5SZW1vdmVQb3B1cChwb3B1cE5hbWUsIGlzTGV2ZWwyUG9wdXApO1xuICAgIC8vICAgICBsZXQgcG9wdXBzID0gaXNMZXZlbDJQb3B1cCA/IHRoaXMuVHdvUG9wdXBzIDogdGhpcy5PbmVQb3B1cHM7XG4gICAgLy8gICAgIGxldCBwb3B1cHNBcmcgPSBpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHNBcmcgOiB0aGlzLk9uZVBvcHVwc0FyZztcbiAgICAvLyAgICAgaWYgKHBvcHVwcy5sZW5ndGggPD0gMCkge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCLmiYDmnIlcIiwgaXNMZXZlbDJQb3B1cCwgXCLlvLnnqpflt7Lnu4/mkq3mlL7lrozmr5VcIik7XG4gICAgLy8gICAgICAgICByZXR1cm47XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgKChmaW5kKFwiQ2FudmFzL1BvcHVwXCIpIGFzIE5vZGUpLmdldENoaWxkQnlOYW1lKGlzTGV2ZWwyUG9wdXAgPyBcInR3b1wiIDogXCJvbmVcIikgYXMgTm9kZSkuYWRkQ2hpbGQocG9wdXBzWzBdLm5vZGUpO1xuICAgIC8vICAgICBwb3B1cHNbMF0uSW5pdChwb3B1cHNBcmdbMF0pO1xuICAgIC8vIH1cbiAgICAvLyBzdGF0aWMgQ2xvc2VBbGxQb3B1cCgpIHtcbiAgICAvLyAgICAgdGhpcy5PbmVQb3B1cHMubGVuZ3RoID0gMDtcbiAgICAvLyAgICAgdGhpcy5PbmVQb3B1cHNOb2RlLmxlbmd0aCA9IDA7XG4gICAgLy8gICAgIHRoaXMuT25lUG9wdXBzQXJnLmxlbmd0aCA9IDA7XG4gICAgLy8gICAgIHRoaXMuVHdvUG9wdXBzLmxlbmd0aCA9IDA7XG4gICAgLy8gICAgIHRoaXMuVHdvUG9wdXBzTm9kZS5sZW5ndGggPSAwO1xuICAgIC8vICAgICB0aGlzLlR3b1BvcHVwc0FyZy5sZW5ndGggPSAwO1xuICAgIC8vIH1cbiAgICAvLyBwcml2YXRlIHN0YXRpYyBBZGRQb3B1cChwb3B1cE5hbWU6IHN0cmluZywgYXJnPzogYW55LCBpc0xldmVsMlBvcHVwOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAvLyAgICAgbGV0IHRhcmdldFBvcHVwUHJlZmFiOiBQcmVmYWIgfCBudWxsID0gdGhpcy5DaG9vc2VQb3B1cChwb3B1cE5hbWUpO1xuICAgIC8vICAgICBpZiAoIXRhcmdldFBvcHVwUHJlZmFiKSB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FuJ3QgZmluZCBwb3B1cE5hbWUgXCIsIHBvcHVwTmFtZSk7XG4gICAgLy8gICAgICAgICByZXR1cm47XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgbGV0IHBvcHVwTm9kZSA9IGluc3RhbnRpYXRlKHRhcmdldFBvcHVwUHJlZmFiKTtcbiAgICAvLyAgICAgbGV0IHBvcHVwID0gcG9wdXBOb2RlLmdldENvbXBvbmVudChQb3B1cCk7XG4gICAgLy8gICAgIGlmICghcG9wdXApIHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW4ndCBmaW5kIFBvcHVwQ2xhc3MgYnkgcG9wdXBOYW1lIFwiLCBwb3B1cE5hbWUpO1xuICAgIC8vICAgICAgICAgcmV0dXJuO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICghaXNMZXZlbDJQb3B1cCkge1xuICAgIC8vICAgICAgICAgaWYgKHRoaXMuT25lUG9wdXBzLmluZGV4T2YocG9wdXApICE9IC0xKSB7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCLlvLnnqpflt7LlrZjlnKhcIik7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgdGhpcy5PbmVQb3B1cHMucHVzaChwb3B1cCk7XG4gICAgLy8gICAgICAgICB0aGlzLk9uZVBvcHVwc0FyZy5wdXNoKGFyZyk7XG4gICAgLy8gICAgICAgICB0aGlzLk9uZVBvcHVwc05vZGUucHVzaChwb3B1cE5vZGUpO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgaWYgKHRoaXMuVHdvUG9wdXBzLmluZGV4T2YocG9wdXApICE9IC0xKSB7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCLlvLnnqpflt7LlrZjlnKhcIik7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgcG9wdXAuaXNMZXZlbDJQb3B1cCA9IGlzTGV2ZWwyUG9wdXA7XG4gICAgLy8gICAgICAgICB0aGlzLlR3b1BvcHVwcy5wdXNoKHBvcHVwKTtcbiAgICAvLyAgICAgICAgIHRoaXMuVHdvUG9wdXBzQXJnLnB1c2goYXJnKTtcbiAgICAvLyAgICAgICAgIHRoaXMuVHdvUG9wdXBzTm9kZS5wdXNoKHBvcHVwTm9kZSk7XG4gICAgLy8gICAgIH1cblxuICAgIC8vIH1cbiAgICAvLyBwcml2YXRlIHN0YXRpYyBSZW1vdmVQb3B1cChwb3B1cE5hbWU6IHN0cmluZyA9IFwiTlVMTF9QT1BVUF9OQU1FXCIsIGlzTGV2ZWwyUG9wdXA6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIC8vICAgICBsZXQgcG9wdXBzID0gKGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwcyA6IHRoaXMuT25lUG9wdXBzKTtcbiAgICAvLyAgICAgbGV0IHBvcHVwc0FyZyA9IChpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHNBcmcgOiB0aGlzLk9uZVBvcHVwc0FyZylcbiAgICAvLyAgICAgbGV0IHBvcHVwc05vZGUgPSAoaXNMZXZlbDJQb3B1cCA/IHRoaXMuVHdvUG9wdXBzTm9kZSA6IHRoaXMuT25lUG9wdXBzTm9kZSk7XG4gICAgLy8gICAgIGlmIChwb3B1cE5hbWUgPT0gXCJOVUxMX1BPUFVQX05BTUVcIikge1xuICAgIC8vICAgICAgICAgcG9wdXBzWzBdLm5vZGUuZGVzdHJveSgpO1xuICAgIC8vICAgICAgICAgcG9wdXBzLnNwbGljZSgwLCAxKTtcbiAgICAvLyAgICAgICAgIHBvcHVwc05vZGUuc3BsaWNlKDAsIDEpO1xuICAgIC8vICAgICAgICAgcG9wdXBzQXJnLnNwbGljZSgwLCAxKTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9wdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHBvcHVwc1tpXTtcbiAgICAvLyAgICAgICAgICAgICBpZiAoZWxlbWVudC5ub2RlLm5hbWUgPT0gcG9wdXBOYW1lKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHBvcHVwc1tpXS5ub2RlLmRlc3Ryb3koKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgcG9wdXBzLnNwbGljZShpLCAxKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgcG9wdXBzTm9kZS5zcGxpY2UoaSwgMSk7XG4gICAgLy8gICAgICAgICAgICAgICAgIHBvcHVwc0FyZy5zcGxpY2UoaSwgMSk7XG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cblxuICAgIC8vIH1cbiAgICAvLyBwcml2YXRlIHN0YXRpYyBDaG9vc2VQb3B1cChwb3B1cE5hbWU6IHN0cmluZyk6IFByZWZhYiB8IG51bGwge1xuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9wdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5wb3B1cHNbaV07XG4gICAgLy8gICAgICAgICBpZiAoZWxlbWVudC5kYXRhLl9uYW1lID09IHBvcHVwTmFtZSkge1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiBudWxsO1xuICAgIC8vIH1cblxuXG59XG4iXX0=