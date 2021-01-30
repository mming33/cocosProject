System.register(["cce.code-quality.cr", "cc", "./Popup.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, instantiate, resources, find, Popup, _dec, _class, _class2, _temp, _crd, ccclass, property, PopupManager;

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("PopupManager", PopupManager = (_dec = ccclass('PopupManager'), _dec(_class = (_temp = _class2 = class PopupManager {
        /**单例 */
        static get I() {
          return this.Instance;
        }

        static set i(v) {
          this.Instance = v;
        }
        /**所有弹窗的Prefab的集合 */


        /**加载弹窗的预制体，并初始化PopupManager中的popups数组*/
        static LoadPopups(func) {
          // this.CreatePopupParent();
          resources.loadDir("PopupsPrefab", function (err, assets) {
            if (err) {
              console.error(err);
              return;
            }

            for (let i = 0; i < assets.length; i++) {
              const element = assets[i];
              PopupManager.popups.push(element);
            }

            if (func) func(); // console.log(PopupManager.popups);
          });
        }
        /**展示弹窗 */


        static ShowPopup(popupName, arg, isLevel2Popup = false) {
          this.AddPopup(popupName, arg, isLevel2Popup);
          let popups = isLevel2Popup ? this.TwoPopups : this.OnePopups;
          let popupsNode = isLevel2Popup ? this.TwoPopupsNode : this.OnePopupsNode;
          let popupsArg = isLevel2Popup ? this.TwoPopupsArg : this.OnePopupsArg;
          let parentnode = find("Canvas/Popup").getChildByName(isLevel2Popup ? "two" : "one");

          if (parentnode.children.indexOf(popupsNode[0]) != -1) {
            return popups[0];
          } else {
            let node = popupsNode[0];
            parentnode.addChild(node);
            console.log("打开了弹窗", popups[0].name, "!", popups[0]);
            popups[0].Init(popupsArg[0]);
            return popups[0];
          }
        }
        /**关闭当前弹窗或指定弹窗 */


        static ClosePopup(isLevel2Popup = false, popupName = "NULL_POPUP_NAME", arg) {
          this.RemovePopup(popupName, isLevel2Popup);
          let popups = isLevel2Popup ? this.TwoPopups : this.OnePopups;
          let popupsArg = isLevel2Popup ? this.TwoPopupsArg : this.OnePopupsArg;

          if (popups.length <= 0) {
            console.log("所有", isLevel2Popup, "弹窗已经播放完毕");
            return;
          }

          let parentnode = find("Canvas/Popup").getChildByName(isLevel2Popup ? "two" : "one");
          parentnode.addChild(popups[0].node);
          popups[0].Init(popupsArg[0]);
        }
        /**关闭所有弹窗 */


        static CloseAllPopup() {
          this.OnePopups.length = 0;
          this.OnePopupsNode.length = 0;
          this.OnePopupsArg.length = 0;
          this.TwoPopups.length = 0;
          this.TwoPopupsNode.length = 0;
          this.TwoPopupsArg.length = 0;
        }
        /**添加预制体到popups数组中 */


        static PushPopup(popup) {
          PopupManager.popups.push(popup);
        }

        static AddPopup(popupName, arg, isLevel2Popup = false) {
          let targetPopupPrefab = this.ChoosePopup(popupName);

          if (!targetPopupPrefab) {
            console.error("Can't find popupName ", popupName);
            return;
          }

          let popupNode = instantiate(targetPopupPrefab);
          let popup = popupNode.getComponent(_crd && Popup === void 0 ? (_reportPossibleCrUseOfPopup({
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
        }

        static RemovePopup(popupName, isLevel2Popup = false) {
          let popups = isLevel2Popup ? this.TwoPopups : this.OnePopups;
          let popupsNode = isLevel2Popup ? this.TwoPopupsNode : this.OnePopupsNode;
          let popupsArg = isLevel2Popup ? this.TwoPopupsArg : this.OnePopupsArg;

          if (popupName == "NULL_POPUP_NAME") {
            popups[0].node.destroy();
            popups.splice(0, 1);
            popupsNode.splice(0, 1);
            popupsArg.splice(0, 1);
          } else {
            for (let i = 0; i < popups.length; i++) {
              const element = popups[i];

              if (element.node.name == popupName) {
                popups[i].node.destroy();
                popups.splice(i, 1);
                popupsNode.splice(i, 1);
                popupsArg.splice(i, 1);
                return;
              }
            }
          }
        }

        static ChoosePopup(popupName) {
          for (let i = 0; i < this.popups.length; i++) {
            const element = this.popups[i];

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


      }, _defineProperty(_class2, "Instance", void 0), _defineProperty(_class2, "popups", []), _defineProperty(_class2, "OnePopups", []), _defineProperty(_class2, "OnePopupsNode", []), _defineProperty(_class2, "OnePopupsArg", []), _defineProperty(_class2, "TwoPopups", []), _defineProperty(_class2, "TwoPopupsNode", []), _defineProperty(_class2, "TwoPopupsArg", []), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vUG9wdXAvUG9wdXBNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJpbnN0YW50aWF0ZSIsInJlc291cmNlcyIsImZpbmQiLCJQb3B1cCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlBvcHVwTWFuYWdlciIsIkkiLCJJbnN0YW5jZSIsImkiLCJ2IiwiTG9hZFBvcHVwcyIsImZ1bmMiLCJsb2FkRGlyIiwiZXJyIiwiYXNzZXRzIiwiY29uc29sZSIsImVycm9yIiwibGVuZ3RoIiwiZWxlbWVudCIsInBvcHVwcyIsInB1c2giLCJTaG93UG9wdXAiLCJwb3B1cE5hbWUiLCJhcmciLCJpc0xldmVsMlBvcHVwIiwiQWRkUG9wdXAiLCJUd29Qb3B1cHMiLCJPbmVQb3B1cHMiLCJwb3B1cHNOb2RlIiwiVHdvUG9wdXBzTm9kZSIsIk9uZVBvcHVwc05vZGUiLCJwb3B1cHNBcmciLCJUd29Qb3B1cHNBcmciLCJPbmVQb3B1cHNBcmciLCJwYXJlbnRub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJjaGlsZHJlbiIsImluZGV4T2YiLCJub2RlIiwiYWRkQ2hpbGQiLCJsb2ciLCJuYW1lIiwiSW5pdCIsIkNsb3NlUG9wdXAiLCJSZW1vdmVQb3B1cCIsIkNsb3NlQWxsUG9wdXAiLCJQdXNoUG9wdXAiLCJwb3B1cCIsInRhcmdldFBvcHVwUHJlZmFiIiwiQ2hvb3NlUG9wdXAiLCJwb3B1cE5vZGUiLCJnZXRDb21wb25lbnQiLCJkZXN0cm95Iiwic3BsaWNlIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQTZCQyxNQUFBQSxXLE9BQUFBLFc7QUFBbUNDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7O0FBRzNFQyxNQUFBQSxLLFlBQUFBLEs7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQTlTc0IsTyxtRkFRSSxFLHlDQUdFLEUsNkNBQ0csRSw0Q0FDRixFLHlDQUVELEUsNkNBQ0csRSw0Q0FDRixFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBpbnN0YW50aWF0ZSwgUHJlZmFiLCBnYW1lLCBsb2FkZXIsIHJlc291cmNlcywgZmluZCB9IGZyb20gJ2NjJztcbmltcG9ydCB7IExvYWRNYW5hZ2VyIH0gZnJvbSAnLi4vTG9hZC9Mb2FkTWFuYWdlcic7XG5pbXBvcnQgeyBNeUxpc3RDb21tb24gfSBmcm9tICcuLi9NeU1hdGgvTXlMaXN0Q29tbW9uJztcbmltcG9ydCB7IFBvcHVwIH0gZnJvbSAnLi9Qb3B1cCc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnUG9wdXBNYW5hZ2VyJylcbmV4cG9ydCBjbGFzcyBQb3B1cE1hbmFnZXIge1xuXG4gICAgLyoq5Y2V5L6LICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgSW5zdGFuY2U6IFBvcHVwTWFuYWdlcjtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJKCk6IFBvcHVwTWFuYWdlciB7IHJldHVybiB0aGlzLkluc3RhbmNlOyB9XG4gICAgcHJpdmF0ZSBzdGF0aWMgc2V0IGkodjogUG9wdXBNYW5hZ2VyKSB7IHRoaXMuSW5zdGFuY2UgPSB2OyB9XG5cbiAgICAvKirmiYDmnInlvLnnqpfnmoRQcmVmYWLnmoTpm4blkIggKi9cbiAgICBzdGF0aWMgcG9wdXBzOiBQcmVmYWJbXSA9IFtdO1xuXG4gICAgLyoqMee6p+W8ueeql+eahOmbhuWQiCAqL1xuICAgIHN0YXRpYyBPbmVQb3B1cHM6IFBvcHVwW10gPSBbXTtcbiAgICBzdGF0aWMgT25lUG9wdXBzTm9kZTogTm9kZVtdID0gW107XG4gICAgc3RhdGljIE9uZVBvcHVwc0FyZzogYW55W10gPSBbXTtcbiAgICAvKioy57qn5by556qX55qE6ZuG5ZCIICovXG4gICAgc3RhdGljIFR3b1BvcHVwczogUG9wdXBbXSA9IFtdO1xuICAgIHN0YXRpYyBUd29Qb3B1cHNOb2RlOiBOb2RlW10gPSBbXTtcbiAgICBzdGF0aWMgVHdvUG9wdXBzQXJnOiBhbnlbXSA9IFtdO1xuXG5cbiAgICAvKirliqDovb3lvLnnqpfnmoTpooTliLbkvZPvvIzlubbliJ3lp4vljJZQb3B1cE1hbmFnZXLkuK3nmoRwb3B1cHPmlbDnu4QqL1xuICAgIHB1YmxpYyBzdGF0aWMgTG9hZFBvcHVwcyhmdW5jPzogRnVuY3Rpb24pIHtcbiAgICAgICAgLy8gdGhpcy5DcmVhdGVQb3B1cFBhcmVudCgpO1xuICAgICAgICByZXNvdXJjZXMubG9hZERpcihcIlBvcHVwc1ByZWZhYlwiLCBmdW5jdGlvbiAoZXJyOiBhbnksIGFzc2V0czogYW55KSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGFzc2V0c1tpXTtcbiAgICAgICAgICAgICAgICBQb3B1cE1hbmFnZXIucG9wdXBzLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZnVuYylcbiAgICAgICAgICAgICAgICBmdW5jKCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhQb3B1cE1hbmFnZXIucG9wdXBzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKuWxleekuuW8ueeqlyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgU2hvd1BvcHVwKHBvcHVwTmFtZTogc3RyaW5nLCBhcmc/OiBhbnksIGlzTGV2ZWwyUG9wdXA6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLkFkZFBvcHVwKHBvcHVwTmFtZSwgYXJnLCBpc0xldmVsMlBvcHVwKTtcbiAgICAgICAgbGV0IHBvcHVwcyA9IGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwcyA6IHRoaXMuT25lUG9wdXBzO1xuICAgICAgICBsZXQgcG9wdXBzTm9kZSA9IGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwc05vZGUgOiB0aGlzLk9uZVBvcHVwc05vZGU7XG4gICAgICAgIGxldCBwb3B1cHNBcmcgPSBpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHNBcmcgOiB0aGlzLk9uZVBvcHVwc0FyZztcbiAgICAgICAgbGV0IHBhcmVudG5vZGUgPSAoKGZpbmQoXCJDYW52YXMvUG9wdXBcIikgYXMgTm9kZSkuZ2V0Q2hpbGRCeU5hbWUoaXNMZXZlbDJQb3B1cCA/IFwidHdvXCIgOiBcIm9uZVwiKSBhcyBOb2RlKVxuICAgICAgICBpZiAocGFyZW50bm9kZS5jaGlsZHJlbi5pbmRleE9mKHBvcHVwc05vZGVbMF0pICE9IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gcG9wdXBzWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBwb3B1cHNOb2RlWzBdO1xuICAgICAgICAgICAgcGFyZW50bm9kZS5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5omT5byA5LqG5by556qXXCIsIHBvcHVwc1swXS5uYW1lLCBcIiFcIiwgcG9wdXBzWzBdKTtcbiAgICAgICAgICAgIHBvcHVwc1swXS5Jbml0KHBvcHVwc0FyZ1swXSk7XG4gICAgICAgICAgICByZXR1cm4gcG9wdXBzWzBdO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKuWFs+mXreW9k+WJjeW8ueeql+aIluaMh+WumuW8ueeqlyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgQ2xvc2VQb3B1cChpc0xldmVsMlBvcHVwOiBib29sZWFuID0gZmFsc2UsIHBvcHVwTmFtZTogc3RyaW5nID0gXCJOVUxMX1BPUFVQX05BTUVcIiwgYXJnPzogYW55KSB7XG4gICAgICAgIHRoaXMuUmVtb3ZlUG9wdXAocG9wdXBOYW1lLCBpc0xldmVsMlBvcHVwKTtcbiAgICAgICAgbGV0IHBvcHVwcyA9IGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwcyA6IHRoaXMuT25lUG9wdXBzO1xuICAgICAgICBsZXQgcG9wdXBzQXJnID0gaXNMZXZlbDJQb3B1cCA/IHRoaXMuVHdvUG9wdXBzQXJnIDogdGhpcy5PbmVQb3B1cHNBcmc7XG4gICAgICAgIGlmIChwb3B1cHMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5omA5pyJXCIsIGlzTGV2ZWwyUG9wdXAsIFwi5by556qX5bey57uP5pKt5pS+5a6M5q+VXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJlbnRub2RlID0gKChmaW5kKFwiQ2FudmFzL1BvcHVwXCIpIGFzIE5vZGUpLmdldENoaWxkQnlOYW1lKGlzTGV2ZWwyUG9wdXAgPyBcInR3b1wiIDogXCJvbmVcIikgYXMgTm9kZSk7XG4gICAgICAgIHBhcmVudG5vZGUuYWRkQ2hpbGQocG9wdXBzWzBdLm5vZGUpO1xuICAgICAgICBwb3B1cHNbMF0uSW5pdChwb3B1cHNBcmdbMF0pO1xuICAgIH1cbiAgICAvKirlhbPpl63miYDmnInlvLnnqpcgKi9cbiAgICBwdWJsaWMgc3RhdGljIENsb3NlQWxsUG9wdXAoKSB7XG4gICAgICAgIHRoaXMuT25lUG9wdXBzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuT25lUG9wdXBzTm9kZS5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLk9uZVBvcHVwc0FyZy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLlR3b1BvcHVwcy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLlR3b1BvcHVwc05vZGUubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5Ud29Qb3B1cHNBcmcubGVuZ3RoID0gMDtcbiAgICB9XG4gICAgLyoq5re75Yqg6aKE5Yi25L2T5YiwcG9wdXBz5pWw57uE5LitICovXG4gICAgcHVibGljIHN0YXRpYyBQdXNoUG9wdXAocG9wdXA6IFByZWZhYikge1xuICAgICAgICBQb3B1cE1hbmFnZXIucG9wdXBzLnB1c2gocG9wdXApO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIEFkZFBvcHVwKHBvcHVwTmFtZTogc3RyaW5nLCBhcmc/OiBhbnksIGlzTGV2ZWwyUG9wdXA6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgdGFyZ2V0UG9wdXBQcmVmYWI6IFByZWZhYiB8IG51bGwgPSB0aGlzLkNob29zZVBvcHVwKHBvcHVwTmFtZSk7XG4gICAgICAgIGlmICghdGFyZ2V0UG9wdXBQcmVmYWIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW4ndCBmaW5kIHBvcHVwTmFtZSBcIiwgcG9wdXBOYW1lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcG9wdXBOb2RlID0gaW5zdGFudGlhdGUodGFyZ2V0UG9wdXBQcmVmYWIpO1xuICAgICAgICBsZXQgcG9wdXAgPSBwb3B1cE5vZGUuZ2V0Q29tcG9uZW50KFBvcHVwKTtcbiAgICAgICAgaWYgKCFwb3B1cCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbid0IGZpbmQgUG9wdXBDbGFzcyBieSBwb3B1cE5hbWUgXCIsIHBvcHVwTmFtZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0xldmVsMlBvcHVwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5PbmVQb3B1cHMuaW5kZXhPZihwb3B1cCkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW8ueeql+W3suWtmOWcqFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLk9uZVBvcHVwcy5wdXNoKHBvcHVwKTtcbiAgICAgICAgICAgIHRoaXMuT25lUG9wdXBzTm9kZS5wdXNoKHBvcHVwTm9kZSk7XG4gICAgICAgICAgICB0aGlzLk9uZVBvcHVwc0FyZy5wdXNoKGFyZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5Ud29Qb3B1cHMuaW5kZXhPZihwb3B1cCkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW8ueeql+W3suWtmOWcqFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb3B1cC5pc0xldmVsMlBvcHVwID0gaXNMZXZlbDJQb3B1cDtcbiAgICAgICAgICAgIHRoaXMuVHdvUG9wdXBzLnB1c2gocG9wdXApO1xuICAgICAgICAgICAgdGhpcy5Ud29Qb3B1cHNOb2RlLnB1c2gocG9wdXBOb2RlKTtcbiAgICAgICAgICAgIHRoaXMuVHdvUG9wdXBzQXJnLnB1c2goYXJnKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHByaXZhdGUgc3RhdGljIFJlbW92ZVBvcHVwKHBvcHVwTmFtZTogc3RyaW5nLCBpc0xldmVsMlBvcHVwOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHBvcHVwcyA9IChpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHMgOiB0aGlzLk9uZVBvcHVwcyk7XG4gICAgICAgIGxldCBwb3B1cHNOb2RlID0gKGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwc05vZGUgOiB0aGlzLk9uZVBvcHVwc05vZGUpO1xuICAgICAgICBsZXQgcG9wdXBzQXJnID0gKGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwc0FyZyA6IHRoaXMuT25lUG9wdXBzQXJnKVxuICAgICAgICBpZiAocG9wdXBOYW1lID09IFwiTlVMTF9QT1BVUF9OQU1FXCIpIHtcbiAgICAgICAgICAgIHBvcHVwc1swXS5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHBvcHVwcy5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICBwb3B1cHNOb2RlLnNwbGljZSgwLCAxKTtcbiAgICAgICAgICAgIHBvcHVwc0FyZy5zcGxpY2UoMCwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvcHVwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBwb3B1cHNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQubm9kZS5uYW1lID09IHBvcHVwTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBwb3B1cHNbaV0ubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwc05vZGUuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBwb3B1cHNBcmcuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgcHJpdmF0ZSBzdGF0aWMgQ2hvb3NlUG9wdXAocG9wdXBOYW1lOiBzdHJpbmcpOiBQcmVmYWIgfCBudWxsIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvcHVwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMucG9wdXBzW2ldO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuZGF0YS5uYW1lID09IHBvcHVwTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAgIC8vIC8qKuWNleS+iyAqL1xuICAgIC8vIHByaXZhdGUgc3RhdGljIHNpbmdsZXRvbjogUG9wdXBNYW5hZ2VyO1xuICAgIC8vIHB1YmxpYyBzdGF0aWMgZ2V0IEkoKTogUG9wdXBNYW5hZ2VyIHtcbiAgICAvLyAgICAgaWYgKCF0aGlzLnNpbmdsZXRvbikge1xuICAgIC8vICAgICAgICAgdGhpcy5zaW5nbGV0b24gPSBuZXcgUG9wdXBNYW5hZ2VyKCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuc2luZ2xldG9uO1xuICAgIC8vIH1cblxuICAgIC8vIC8qKuaJgOacieW8ueeql+eahFByZWZhYueahOmbhuWQiCAqL1xuICAgIC8vIHN0YXRpYyBwb3B1cHM6IFByZWZhYltdID0gW107XG5cbiAgICAvLyAvKiox57qn5by556qX55qE6ZuG5ZCIICovXG4gICAgLy8gc3RhdGljIE9uZVBvcHVwczogUG9wdXBbXSA9IFtdO1xuICAgIC8vIHN0YXRpYyBPbmVQb3B1cHNOb2RlOiBOb2RlW10gPSBbXTtcbiAgICAvLyBzdGF0aWMgT25lUG9wdXBzQXJnOiBhbnlbXSA9IFtdO1xuICAgIC8vIC8qKjLnuqflvLnnqpfnmoTpm4blkIggKi9cbiAgICAvLyBzdGF0aWMgVHdvUG9wdXBzOiBQb3B1cFtdID0gW107XG4gICAgLy8gc3RhdGljIFR3b1BvcHVwc0FyZzogYW55W10gPSBbXTtcbiAgICAvLyBzdGF0aWMgVHdvUG9wdXBzTm9kZTogTm9kZVtdID0gW107XG5cblxuICAgIC8vIC8qKlxuICAgIC8vICAgICAgKiDliqDovb3lvLnnqpfnmoTpooTliLbkvZPvvIzlubbliJ3lp4vljJZQb3B1cE1hbmFnZXLkuK3nmoRwb3B1cHPmlbDnu4RcbiAgICAvLyAgICAgICovXG4gICAgLy8gc3RhdGljIExvYWRQb3B1cHMoKSB7XG4gICAgLy8gICAgIHJlc291cmNlcy5sb2FkRGlyKFwiUG9wdXBzUHJlZmFiXCIsIGZ1bmN0aW9uIChlcnI6IGFueSwgYXNzZXRzOiBhbnkpIHtcbiAgICAvLyAgICAgICAgIGlmIChlcnIpIHtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3NldHMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYXNzZXRzW2ldO1xuICAgIC8vICAgICAgICAgICAgIFBvcHVwTWFuYWdlci5wb3B1cHMucHVzaChlbGVtZW50KTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCsrO1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coUG9wdXBNYW5hZ2VyLnBvcHVwcyk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cbiAgICAvLyBzdGF0aWMgU2hvd1BvcHVwKHBvcHVwTmFtZTogc3RyaW5nLCBhcmc/OiBhbnksIGlzTGV2ZWwyUG9wdXA6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIC8vICAgICB0aGlzLkFkZFBvcHVwKHBvcHVwTmFtZSwgYXJnLCBpc0xldmVsMlBvcHVwKTtcbiAgICAvLyAgICAgbGV0IHBvcHVwcyA9IGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwcyA6IHRoaXMuT25lUG9wdXBzO1xuICAgIC8vICAgICBsZXQgcG9wdXBzTm9kZSA9IGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwc05vZGUgOiB0aGlzLk9uZVBvcHVwc05vZGU7XG4gICAgLy8gICAgIGxldCBwb3B1cHNBcmcgPSBpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHNBcmcgOiB0aGlzLk9uZVBvcHVwc0FyZztcbiAgICAvLyAgICAgaWYgKCgoZmluZChcIkNhbnZhcy9Qb3B1cFwiKSBhcyBOb2RlKS5nZXRDaGlsZEJ5TmFtZShpc0xldmVsMlBvcHVwID8gXCJ0d29cIiA6IFwib25lXCIpIGFzIE5vZGUpLmNoaWxkcmVuLmluZGV4T2YocG9wdXBzWzBdLm5vZGUpICE9IC0xKSB7XG4gICAgLy8gICAgICAgICByZXR1cm4gcG9wdXBzWzBdO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgKChmaW5kKFwiQ2FudmFzL1BvcHVwXCIpIGFzIE5vZGUpLmdldENoaWxkQnlOYW1lKGlzTGV2ZWwyUG9wdXAgPyBcInR3b1wiIDogXCJvbmVcIikgYXMgTm9kZSkuYWRkQ2hpbGQocG9wdXBzWzBdLm5vZGUpO1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCLmiZPlvIDkuoblvLnnqpdcIiwgcG9wdXBzWzBdLm5hbWUsIFwiIVwiLCBwb3B1cHNbMF0pO1xuICAgIC8vICAgICAgICAgcG9wdXBzWzBdLkluaXQocG9wdXBzQXJnWzBdKTtcbiAgICAvLyAgICAgICAgIHJldHVybiBwb3B1cHNbMF07XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgLy8gc3RhdGljIENsb3NlUG9wdXAoaXNMZXZlbDJQb3B1cDogYm9vbGVhbiA9IGZhbHNlLCBwb3B1cE5hbWU6IHN0cmluZyA9IFwiTlVMTF9QT1BVUF9OQU1FXCIsIGFyZz86IGFueSkge1xuICAgIC8vICAgICB0aGlzLlJlbW92ZVBvcHVwKHBvcHVwTmFtZSwgaXNMZXZlbDJQb3B1cCk7XG4gICAgLy8gICAgIGxldCBwb3B1cHMgPSBpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHMgOiB0aGlzLk9uZVBvcHVwcztcbiAgICAvLyAgICAgbGV0IHBvcHVwc0FyZyA9IGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwc0FyZyA6IHRoaXMuT25lUG9wdXBzQXJnO1xuICAgIC8vICAgICBpZiAocG9wdXBzLmxlbmd0aCA8PSAwKSB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIuaJgOaciVwiLCBpc0xldmVsMlBvcHVwLCBcIuW8ueeql+W3sue7j+aSreaUvuWujOavlVwiKTtcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICAoKGZpbmQoXCJDYW52YXMvUG9wdXBcIikgYXMgTm9kZSkuZ2V0Q2hpbGRCeU5hbWUoaXNMZXZlbDJQb3B1cCA/IFwidHdvXCIgOiBcIm9uZVwiKSBhcyBOb2RlKS5hZGRDaGlsZChwb3B1cHNbMF0ubm9kZSk7XG4gICAgLy8gICAgIHBvcHVwc1swXS5Jbml0KHBvcHVwc0FyZ1swXSk7XG4gICAgLy8gfVxuICAgIC8vIHN0YXRpYyBDbG9zZUFsbFBvcHVwKCkge1xuICAgIC8vICAgICB0aGlzLk9uZVBvcHVwcy5sZW5ndGggPSAwO1xuICAgIC8vICAgICB0aGlzLk9uZVBvcHVwc05vZGUubGVuZ3RoID0gMDtcbiAgICAvLyAgICAgdGhpcy5PbmVQb3B1cHNBcmcubGVuZ3RoID0gMDtcbiAgICAvLyAgICAgdGhpcy5Ud29Qb3B1cHMubGVuZ3RoID0gMDtcbiAgICAvLyAgICAgdGhpcy5Ud29Qb3B1cHNOb2RlLmxlbmd0aCA9IDA7XG4gICAgLy8gICAgIHRoaXMuVHdvUG9wdXBzQXJnLmxlbmd0aCA9IDA7XG4gICAgLy8gfVxuICAgIC8vIHByaXZhdGUgc3RhdGljIEFkZFBvcHVwKHBvcHVwTmFtZTogc3RyaW5nLCBhcmc/OiBhbnksIGlzTGV2ZWwyUG9wdXA6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIC8vICAgICBsZXQgdGFyZ2V0UG9wdXBQcmVmYWI6IFByZWZhYiB8IG51bGwgPSB0aGlzLkNob29zZVBvcHVwKHBvcHVwTmFtZSk7XG4gICAgLy8gICAgIGlmICghdGFyZ2V0UG9wdXBQcmVmYWIpIHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW4ndCBmaW5kIHBvcHVwTmFtZSBcIiwgcG9wdXBOYW1lKTtcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBsZXQgcG9wdXBOb2RlID0gaW5zdGFudGlhdGUodGFyZ2V0UG9wdXBQcmVmYWIpO1xuICAgIC8vICAgICBsZXQgcG9wdXAgPSBwb3B1cE5vZGUuZ2V0Q29tcG9uZW50KFBvcHVwKTtcbiAgICAvLyAgICAgaWYgKCFwb3B1cCkge1xuICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbid0IGZpbmQgUG9wdXBDbGFzcyBieSBwb3B1cE5hbWUgXCIsIHBvcHVwTmFtZSk7XG4gICAgLy8gICAgICAgICByZXR1cm47XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKCFpc0xldmVsMlBvcHVwKSB7XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5PbmVQb3B1cHMuaW5kZXhPZihwb3B1cCkgIT0gLTEpIHtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW8ueeql+W3suWtmOWcqFwiKTtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICB0aGlzLk9uZVBvcHVwcy5wdXNoKHBvcHVwKTtcbiAgICAvLyAgICAgICAgIHRoaXMuT25lUG9wdXBzQXJnLnB1c2goYXJnKTtcbiAgICAvLyAgICAgICAgIHRoaXMuT25lUG9wdXBzTm9kZS5wdXNoKHBvcHVwTm9kZSk7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5Ud29Qb3B1cHMuaW5kZXhPZihwb3B1cCkgIT0gLTEpIHtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW8ueeql+W3suWtmOWcqFwiKTtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBwb3B1cC5pc0xldmVsMlBvcHVwID0gaXNMZXZlbDJQb3B1cDtcbiAgICAvLyAgICAgICAgIHRoaXMuVHdvUG9wdXBzLnB1c2gocG9wdXApO1xuICAgIC8vICAgICAgICAgdGhpcy5Ud29Qb3B1cHNBcmcucHVzaChhcmcpO1xuICAgIC8vICAgICAgICAgdGhpcy5Ud29Qb3B1cHNOb2RlLnB1c2gocG9wdXBOb2RlKTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gfVxuICAgIC8vIHByaXZhdGUgc3RhdGljIFJlbW92ZVBvcHVwKHBvcHVwTmFtZTogc3RyaW5nID0gXCJOVUxMX1BPUFVQX05BTUVcIiwgaXNMZXZlbDJQb3B1cDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgLy8gICAgIGxldCBwb3B1cHMgPSAoaXNMZXZlbDJQb3B1cCA/IHRoaXMuVHdvUG9wdXBzIDogdGhpcy5PbmVQb3B1cHMpO1xuICAgIC8vICAgICBsZXQgcG9wdXBzQXJnID0gKGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwc0FyZyA6IHRoaXMuT25lUG9wdXBzQXJnKVxuICAgIC8vICAgICBsZXQgcG9wdXBzTm9kZSA9IChpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHNOb2RlIDogdGhpcy5PbmVQb3B1cHNOb2RlKTtcbiAgICAvLyAgICAgaWYgKHBvcHVwTmFtZSA9PSBcIk5VTExfUE9QVVBfTkFNRVwiKSB7XG4gICAgLy8gICAgICAgICBwb3B1cHNbMF0ubm9kZS5kZXN0cm95KCk7XG4gICAgLy8gICAgICAgICBwb3B1cHMuc3BsaWNlKDAsIDEpO1xuICAgIC8vICAgICAgICAgcG9wdXBzTm9kZS5zcGxpY2UoMCwgMSk7XG4gICAgLy8gICAgICAgICBwb3B1cHNBcmcuc3BsaWNlKDAsIDEpO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3B1cHMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gcG9wdXBzW2ldO1xuICAgIC8vICAgICAgICAgICAgIGlmIChlbGVtZW50Lm5vZGUubmFtZSA9PSBwb3B1cE5hbWUpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgcG9wdXBzW2ldLm5vZGUuZGVzdHJveSgpO1xuICAgIC8vICAgICAgICAgICAgICAgICBwb3B1cHMuc3BsaWNlKGksIDEpO1xuICAgIC8vICAgICAgICAgICAgICAgICBwb3B1cHNOb2RlLnNwbGljZShpLCAxKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgcG9wdXBzQXJnLnNwbGljZShpLCAxKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gfVxuICAgIC8vIHByaXZhdGUgc3RhdGljIENob29zZVBvcHVwKHBvcHVwTmFtZTogc3RyaW5nKTogUHJlZmFiIHwgbnVsbCB7XG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wb3B1cHMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnBvcHVwc1tpXTtcbiAgICAvLyAgICAgICAgIGlmIChlbGVtZW50LmRhdGEuX25hbWUgPT0gcG9wdXBOYW1lKSB7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmV0dXJuIG51bGw7XG4gICAgLy8gfVxuXG5cbn1cbiJdfQ==