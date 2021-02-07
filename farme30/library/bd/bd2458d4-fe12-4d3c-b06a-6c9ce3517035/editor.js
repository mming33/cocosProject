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
        /**所有弹窗的Prefab的集合 */

        /**1级弹窗的集合 */

        /**2级弹窗的集合 */

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

            if (func) func();
            console.log(PopupManager.popups);
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
        }

      }, _defineProperty(_class2, "popups", []), _defineProperty(_class2, "OnePopups", []), _defineProperty(_class2, "OnePopupsNode", []), _defineProperty(_class2, "OnePopupsArg", []), _defineProperty(_class2, "TwoPopups", []), _defineProperty(_class2, "TwoPopupsNode", []), _defineProperty(_class2, "TwoPopupsArg", []), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vUG9wdXAvUG9wdXBNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJpbnN0YW50aWF0ZSIsInJlc291cmNlcyIsImZpbmQiLCJQb3B1cCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlBvcHVwTWFuYWdlciIsIkxvYWRQb3B1cHMiLCJmdW5jIiwibG9hZERpciIsImVyciIsImFzc2V0cyIsImNvbnNvbGUiLCJlcnJvciIsImkiLCJsZW5ndGgiLCJlbGVtZW50IiwicG9wdXBzIiwicHVzaCIsImxvZyIsIlNob3dQb3B1cCIsInBvcHVwTmFtZSIsImFyZyIsImlzTGV2ZWwyUG9wdXAiLCJBZGRQb3B1cCIsIlR3b1BvcHVwcyIsIk9uZVBvcHVwcyIsInBvcHVwc05vZGUiLCJUd29Qb3B1cHNOb2RlIiwiT25lUG9wdXBzTm9kZSIsInBvcHVwc0FyZyIsIlR3b1BvcHVwc0FyZyIsIk9uZVBvcHVwc0FyZyIsInBhcmVudG5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImNoaWxkcmVuIiwiaW5kZXhPZiIsIm5vZGUiLCJhZGRDaGlsZCIsIm5hbWUiLCJJbml0IiwiQ2xvc2VQb3B1cCIsIlJlbW92ZVBvcHVwIiwiQ2xvc2VBbGxQb3B1cCIsIlB1c2hQb3B1cCIsInBvcHVwIiwidGFyZ2V0UG9wdXBQcmVmYWIiLCJDaG9vc2VQb3B1cCIsInBvcHVwTm9kZSIsImdldENvbXBvbmVudCIsImRlc3Ryb3kiLCJzcGxpY2UiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBNkJDLE1BQUFBLFcsT0FBQUEsVztBQUFtQ0MsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTs7QUFHM0VDLE1BQUFBLEssWUFBQUEsSzs7Ozs7OztPQUNIO0FBQUVDLFFB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RCxlQUFLLElBQUlQLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0csTUFBTCxDQUFZRixNQUFoQyxFQUF3Q0QsQ0FBQyxFQUF6QyxFQUE2QztBQUN6QyxrQkFBTUUsT0FBTyxHQUFHLEtBQUtDLE1BQUwsQ0FBWUgsQ0FBWixDQUFoQjs7QUFDQSxnQkFBSUUsT0FBTyxDQUFDb0MsSUFBUixDQUFhYixJQUFiLElBQXFCbEIsU0FBekIsRUFBb0M7QUFDaEMscUJBQU9MLE9BQVA7QUFDSDtBQUNKOztBQUNELGlCQUFPLElBQVA7QUFDSDs7QUExSXFCLE8scUNBR0ksRSx5Q0FHRSxFLDZDQUNHLEUsNENBQ0YsRSx5Q0FFRCxFLDZDQUNHLEUsNENBQ0YsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgaW5zdGFudGlhdGUsIFByZWZhYiwgZ2FtZSwgbG9hZGVyLCByZXNvdXJjZXMsIGZpbmQgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBMb2FkTWFuYWdlciB9IGZyb20gJy4uL0xvYWQvTG9hZE1hbmFnZXInO1xuaW1wb3J0IHsgTXlMaXN0Q29tbW9uIH0gZnJvbSAnLi4vTXlNYXRoL015TGlzdENvbW1vbic7XG5pbXBvcnQgeyBQb3B1cCB9IGZyb20gJy4vUG9wdXAnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1BvcHVwTWFuYWdlcicpXG5leHBvcnQgY2xhc3MgUG9wdXBNYW5hZ2VyIHtcblxuICAgIC8qKuaJgOacieW8ueeql+eahFByZWZhYueahOmbhuWQiCAqL1xuICAgIHN0YXRpYyBwb3B1cHM6IFByZWZhYltdID0gW107XG5cbiAgICAvKiox57qn5by556qX55qE6ZuG5ZCIICovXG4gICAgc3RhdGljIE9uZVBvcHVwczogUG9wdXBbXSA9IFtdO1xuICAgIHN0YXRpYyBPbmVQb3B1cHNOb2RlOiBOb2RlW10gPSBbXTtcbiAgICBzdGF0aWMgT25lUG9wdXBzQXJnOiBhbnlbXSA9IFtdO1xuICAgIC8qKjLnuqflvLnnqpfnmoTpm4blkIggKi9cbiAgICBzdGF0aWMgVHdvUG9wdXBzOiBQb3B1cFtdID0gW107XG4gICAgc3RhdGljIFR3b1BvcHVwc05vZGU6IE5vZGVbXSA9IFtdO1xuICAgIHN0YXRpYyBUd29Qb3B1cHNBcmc6IGFueVtdID0gW107XG5cblxuICAgIC8qKuWKoOi9veW8ueeql+eahOmihOWItuS9k++8jOW5tuWIneWni+WMllBvcHVwTWFuYWdlcuS4reeahHBvcHVwc+aVsOe7hCovXG4gICAgcHVibGljIHN0YXRpYyBMb2FkUG9wdXBzKGZ1bmM/OiBGdW5jdGlvbikge1xuICAgICAgICAvLyB0aGlzLkNyZWF0ZVBvcHVwUGFyZW50KCk7XG4gICAgICAgIHJlc291cmNlcy5sb2FkRGlyKFwiUG9wdXBzUHJlZmFiXCIsIGZ1bmN0aW9uIChlcnI6IGFueSwgYXNzZXRzOiBhbnkpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3NldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYXNzZXRzW2ldO1xuICAgICAgICAgICAgICAgIFBvcHVwTWFuYWdlci5wb3B1cHMucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmdW5jKVxuICAgICAgICAgICAgICAgIGZ1bmMoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFBvcHVwTWFuYWdlci5wb3B1cHMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoq5bGV56S65by556qXICovXG4gICAgcHVibGljIHN0YXRpYyBTaG93UG9wdXAocG9wdXBOYW1lOiBzdHJpbmcsIGFyZz86IGFueSwgaXNMZXZlbDJQb3B1cDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuQWRkUG9wdXAocG9wdXBOYW1lLCBhcmcsIGlzTGV2ZWwyUG9wdXApO1xuICAgICAgICBsZXQgcG9wdXBzID0gaXNMZXZlbDJQb3B1cCA/IHRoaXMuVHdvUG9wdXBzIDogdGhpcy5PbmVQb3B1cHM7XG4gICAgICAgIGxldCBwb3B1cHNOb2RlID0gaXNMZXZlbDJQb3B1cCA/IHRoaXMuVHdvUG9wdXBzTm9kZSA6IHRoaXMuT25lUG9wdXBzTm9kZTtcbiAgICAgICAgbGV0IHBvcHVwc0FyZyA9IGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwc0FyZyA6IHRoaXMuT25lUG9wdXBzQXJnO1xuICAgICAgICBsZXQgcGFyZW50bm9kZSA9ICgoZmluZChcIkNhbnZhcy9Qb3B1cFwiKSBhcyBOb2RlKS5nZXRDaGlsZEJ5TmFtZShpc0xldmVsMlBvcHVwID8gXCJ0d29cIiA6IFwib25lXCIpIGFzIE5vZGUpXG4gICAgICAgIGlmIChwYXJlbnRub2RlLmNoaWxkcmVuLmluZGV4T2YocG9wdXBzTm9kZVswXSkgIT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBwb3B1cHNbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHBvcHVwc05vZGVbMF07XG4gICAgICAgICAgICBwYXJlbnRub2RlLmFkZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmiZPlvIDkuoblvLnnqpdcIiwgcG9wdXBzWzBdLm5hbWUsIFwiIVwiLCBwb3B1cHNbMF0pO1xuICAgICAgICAgICAgcG9wdXBzWzBdLkluaXQocG9wdXBzQXJnWzBdKTtcbiAgICAgICAgICAgIHJldHVybiBwb3B1cHNbMF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoq5YWz6Zet5b2T5YmN5by556qX5oiW5oyH5a6a5by556qXICovXG4gICAgcHVibGljIHN0YXRpYyBDbG9zZVBvcHVwKGlzTGV2ZWwyUG9wdXA6IGJvb2xlYW4gPSBmYWxzZSwgcG9wdXBOYW1lOiBzdHJpbmcgPSBcIk5VTExfUE9QVVBfTkFNRVwiLCBhcmc/OiBhbnkpIHtcbiAgICAgICAgdGhpcy5SZW1vdmVQb3B1cChwb3B1cE5hbWUsIGlzTGV2ZWwyUG9wdXApO1xuICAgICAgICBsZXQgcG9wdXBzID0gaXNMZXZlbDJQb3B1cCA/IHRoaXMuVHdvUG9wdXBzIDogdGhpcy5PbmVQb3B1cHM7XG4gICAgICAgIGxldCBwb3B1cHNBcmcgPSBpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHNBcmcgOiB0aGlzLk9uZVBvcHVwc0FyZztcbiAgICAgICAgaWYgKHBvcHVwcy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmiYDmnIlcIiwgaXNMZXZlbDJQb3B1cCwgXCLlvLnnqpflt7Lnu4/mkq3mlL7lrozmr5VcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcmVudG5vZGUgPSAoKGZpbmQoXCJDYW52YXMvUG9wdXBcIikgYXMgTm9kZSkuZ2V0Q2hpbGRCeU5hbWUoaXNMZXZlbDJQb3B1cCA/IFwidHdvXCIgOiBcIm9uZVwiKSBhcyBOb2RlKTtcbiAgICAgICAgcGFyZW50bm9kZS5hZGRDaGlsZChwb3B1cHNbMF0ubm9kZSk7XG4gICAgICAgIHBvcHVwc1swXS5Jbml0KHBvcHVwc0FyZ1swXSk7XG4gICAgfVxuICAgIC8qKuWFs+mXreaJgOacieW8ueeqlyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgQ2xvc2VBbGxQb3B1cCgpIHtcbiAgICAgICAgdGhpcy5PbmVQb3B1cHMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5PbmVQb3B1cHNOb2RlLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuT25lUG9wdXBzQXJnLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuVHdvUG9wdXBzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuVHdvUG9wdXBzTm9kZS5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLlR3b1BvcHVwc0FyZy5sZW5ndGggPSAwO1xuICAgIH1cbiAgICAvKirmt7vliqDpooTliLbkvZPliLBwb3B1cHPmlbDnu4TkuK0gKi9cbiAgICBwdWJsaWMgc3RhdGljIFB1c2hQb3B1cChwb3B1cDogUHJlZmFiKSB7XG4gICAgICAgIFBvcHVwTWFuYWdlci5wb3B1cHMucHVzaChwb3B1cCk7XG4gICAgfVxuICAgIHByaXZhdGUgc3RhdGljIEFkZFBvcHVwKHBvcHVwTmFtZTogc3RyaW5nLCBhcmc/OiBhbnksIGlzTGV2ZWwyUG9wdXA6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgdGFyZ2V0UG9wdXBQcmVmYWI6IFByZWZhYiB8IG51bGwgPSB0aGlzLkNob29zZVBvcHVwKHBvcHVwTmFtZSk7XG4gICAgICAgIGlmICghdGFyZ2V0UG9wdXBQcmVmYWIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW4ndCBmaW5kIHBvcHVwTmFtZSBcIiwgcG9wdXBOYW1lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcG9wdXBOb2RlID0gaW5zdGFudGlhdGUodGFyZ2V0UG9wdXBQcmVmYWIpO1xuICAgICAgICBsZXQgcG9wdXAgPSBwb3B1cE5vZGUuZ2V0Q29tcG9uZW50KFBvcHVwKTtcbiAgICAgICAgaWYgKCFwb3B1cCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbid0IGZpbmQgUG9wdXBDbGFzcyBieSBwb3B1cE5hbWUgXCIsIHBvcHVwTmFtZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0xldmVsMlBvcHVwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5PbmVQb3B1cHMuaW5kZXhPZihwb3B1cCkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW8ueeql+W3suWtmOWcqFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLk9uZVBvcHVwcy5wdXNoKHBvcHVwKTtcbiAgICAgICAgICAgIHRoaXMuT25lUG9wdXBzTm9kZS5wdXNoKHBvcHVwTm9kZSk7XG4gICAgICAgICAgICB0aGlzLk9uZVBvcHVwc0FyZy5wdXNoKGFyZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5Ud29Qb3B1cHMuaW5kZXhPZihwb3B1cCkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW8ueeql+W3suWtmOWcqFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb3B1cC5pc0xldmVsMlBvcHVwID0gaXNMZXZlbDJQb3B1cDtcbiAgICAgICAgICAgIHRoaXMuVHdvUG9wdXBzLnB1c2gocG9wdXApO1xuICAgICAgICAgICAgdGhpcy5Ud29Qb3B1cHNOb2RlLnB1c2gocG9wdXBOb2RlKTtcbiAgICAgICAgICAgIHRoaXMuVHdvUG9wdXBzQXJnLnB1c2goYXJnKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHByaXZhdGUgc3RhdGljIFJlbW92ZVBvcHVwKHBvcHVwTmFtZTogc3RyaW5nLCBpc0xldmVsMlBvcHVwOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHBvcHVwcyA9IChpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHMgOiB0aGlzLk9uZVBvcHVwcyk7XG4gICAgICAgIGxldCBwb3B1cHNOb2RlID0gKGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwc05vZGUgOiB0aGlzLk9uZVBvcHVwc05vZGUpO1xuICAgICAgICBsZXQgcG9wdXBzQXJnID0gKGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwc0FyZyA6IHRoaXMuT25lUG9wdXBzQXJnKVxuICAgICAgICBpZiAocG9wdXBOYW1lID09IFwiTlVMTF9QT1BVUF9OQU1FXCIpIHtcbiAgICAgICAgICAgIHBvcHVwc1swXS5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHBvcHVwcy5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICBwb3B1cHNOb2RlLnNwbGljZSgwLCAxKTtcbiAgICAgICAgICAgIHBvcHVwc0FyZy5zcGxpY2UoMCwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvcHVwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBwb3B1cHNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQubm9kZS5uYW1lID09IHBvcHVwTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBwb3B1cHNbaV0ubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwc05vZGUuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBwb3B1cHNBcmcuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgcHJpdmF0ZSBzdGF0aWMgQ2hvb3NlUG9wdXAocG9wdXBOYW1lOiBzdHJpbmcpOiBQcmVmYWIgfCBudWxsIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvcHVwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMucG9wdXBzW2ldO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuZGF0YS5uYW1lID09IHBvcHVwTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0iXX0=