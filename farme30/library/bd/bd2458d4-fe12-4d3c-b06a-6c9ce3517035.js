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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("PopupManager", PopupManager = (_dec = ccclass('PopupManager'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        function PopupManager() {}

        /**所有弹窗的Prefab的集合 */

        /**1级弹窗的集合 */

        /**2级弹窗的集合 */

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

            if (func) func();
            console.log(PopupManager.popups);
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
        };

        return PopupManager;
      }(), _defineProperty(_class2, "popups", []), _defineProperty(_class2, "OnePopups", []), _defineProperty(_class2, "OnePopupsNode", []), _defineProperty(_class2, "OnePopupsArg", []), _defineProperty(_class2, "TwoPopups", []), _defineProperty(_class2, "TwoPopupsNode", []), _defineProperty(_class2, "TwoPopupsArg", []), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vUG9wdXAvUG9wdXBNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJpbnN0YW50aWF0ZSIsInJlc291cmNlcyIsImZpbmQiLCJQb3B1cCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlBvcHVwTWFuYWdlciIsIkxvYWRQb3B1cHMiLCJmdW5jIiwibG9hZERpciIsImVyciIsImFzc2V0cyIsImNvbnNvbGUiLCJlcnJvciIsImkiLCJsZW5ndGgiLCJlbGVtZW50IiwicG9wdXBzIiwicHVzaCIsImxvZyIsIlNob3dQb3B1cCIsInBvcHVwTmFtZSIsImFyZyIsImlzTGV2ZWwyUG9wdXAiLCJBZGRQb3B1cCIsIlR3b1BvcHVwcyIsIk9uZVBvcHVwcyIsInBvcHVwc05vZGUiLCJUd29Qb3B1cHNOb2RlIiwiT25lUG9wdXBzTm9kZSIsInBvcHVwc0FyZyIsIlR3b1BvcHVwc0FyZyIsIk9uZVBvcHVwc0FyZyIsInBhcmVudG5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImNoaWxkcmVuIiwiaW5kZXhPZiIsIm5vZGUiLCJhZGRDaGlsZCIsIm5hbWUiLCJJbml0IiwiQ2xvc2VQb3B1cCIsIlJlbW92ZVBvcHVwIiwiQ2xvc2VBbGxQb3B1cCIsIlB1c2hQb3B1cCIsInBvcHVwIiwidGFyZ2V0UG9wdXBQcmVmYWIiLCJDaG9vc2VQb3B1cCIsInBvcHVwTm9kZSIsImdldENvbXBvbmVudCIsImRlc3Ryb3kiLCJzcGxpY2UiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBNkJDLE1BQUFBLFcsT0FBQUEsVztBQUFtQ0MsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTs7QUFHM0VDLE1BQUFBLEssWUFBQUEsSzs7Ozs7OztBQUNEQyxNQUFBQSxP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ckMsQ0FBZCxFQUFpQixDQUFqQjtBQUNBYSxnQkFBQUEsVUFBVSxDQUFDd0IsTUFBWCxDQUFrQnJDLENBQWxCLEVBQXFCLENBQXJCO0FBQ0FnQixnQkFBQUEsU0FBUyxDQUFDcUIsTUFBVixDQUFpQnJDLENBQWpCLEVBQW9CLENBQXBCO0FBQ0E7QUFDSDtBQUNKO0FBQ0o7QUFFSixTOztxQkFDY2lDLFcsR0FBZixxQkFBMkIxQixTQUEzQixFQUE2RDtBQUN6RCxlQUFLLElBQUlQLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0csTUFBTCxDQUFZRixNQUFoQyxFQUF3Q0QsQ0FBQyxFQUF6QyxFQUE2QztBQUN6QyxnQkFBTUUsT0FBTyxHQUFHLEtBQUtDLE1BQUwsQ0FBWUgsQ0FBWixDQUFoQjs7QUFDQSxnQkFBSUUsT0FBTyxDQUFDb0MsSUFBUixDQUFhYixJQUFiLElBQXFCbEIsU0FBekIsRUFBb0M7QUFDaEMscUJBQU9MLE9BQVA7QUFDSDtBQUNKOztBQUNELGlCQUFPLElBQVA7QUFDSCxTOzs7OENBdkl5QixFLHlDQUdFLEUsNkNBQ0csRSw0Q0FDRixFLHlDQUVELEUsNkNBQ0csRSw0Q0FDRixFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBpbnN0YW50aWF0ZSwgUHJlZmFiLCBnYW1lLCBsb2FkZXIsIHJlc291cmNlcywgZmluZCB9IGZyb20gJ2NjJztcbmltcG9ydCB7IExvYWRNYW5hZ2VyIH0gZnJvbSAnLi4vTG9hZC9Mb2FkTWFuYWdlcic7XG5pbXBvcnQgeyBNeUxpc3RDb21tb24gfSBmcm9tICcuLi9NeU1hdGgvTXlMaXN0Q29tbW9uJztcbmltcG9ydCB7IFBvcHVwIH0gZnJvbSAnLi9Qb3B1cCc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnUG9wdXBNYW5hZ2VyJylcbmV4cG9ydCBjbGFzcyBQb3B1cE1hbmFnZXIge1xuXG4gICAgLyoq5omA5pyJ5by556qX55qEUHJlZmFi55qE6ZuG5ZCIICovXG4gICAgc3RhdGljIHBvcHVwczogUHJlZmFiW10gPSBbXTtcblxuICAgIC8qKjHnuqflvLnnqpfnmoTpm4blkIggKi9cbiAgICBzdGF0aWMgT25lUG9wdXBzOiBQb3B1cFtdID0gW107XG4gICAgc3RhdGljIE9uZVBvcHVwc05vZGU6IE5vZGVbXSA9IFtdO1xuICAgIHN0YXRpYyBPbmVQb3B1cHNBcmc6IGFueVtdID0gW107XG4gICAgLyoqMue6p+W8ueeql+eahOmbhuWQiCAqL1xuICAgIHN0YXRpYyBUd29Qb3B1cHM6IFBvcHVwW10gPSBbXTtcbiAgICBzdGF0aWMgVHdvUG9wdXBzTm9kZTogTm9kZVtdID0gW107XG4gICAgc3RhdGljIFR3b1BvcHVwc0FyZzogYW55W10gPSBbXTtcblxuXG4gICAgLyoq5Yqg6L295by556qX55qE6aKE5Yi25L2T77yM5bm25Yid5aeL5YyWUG9wdXBNYW5hZ2Vy5Lit55qEcG9wdXBz5pWw57uEKi9cbiAgICBwdWJsaWMgc3RhdGljIExvYWRQb3B1cHMoZnVuYz86IEZ1bmN0aW9uKSB7XG4gICAgICAgIC8vIHRoaXMuQ3JlYXRlUG9wdXBQYXJlbnQoKTtcbiAgICAgICAgcmVzb3VyY2VzLmxvYWREaXIoXCJQb3B1cHNQcmVmYWJcIiwgZnVuY3Rpb24gKGVycjogYW55LCBhc3NldHM6IGFueSkge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBhc3NldHNbaV07XG4gICAgICAgICAgICAgICAgUG9wdXBNYW5hZ2VyLnBvcHVwcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZ1bmMpXG4gICAgICAgICAgICAgICAgZnVuYygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coUG9wdXBNYW5hZ2VyLnBvcHVwcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKirlsZXnpLrlvLnnqpcgKi9cbiAgICBwdWJsaWMgc3RhdGljIFNob3dQb3B1cChwb3B1cE5hbWU6IHN0cmluZywgYXJnPzogYW55LCBpc0xldmVsMlBvcHVwOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5BZGRQb3B1cChwb3B1cE5hbWUsIGFyZywgaXNMZXZlbDJQb3B1cCk7XG4gICAgICAgIGxldCBwb3B1cHMgPSBpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHMgOiB0aGlzLk9uZVBvcHVwcztcbiAgICAgICAgbGV0IHBvcHVwc05vZGUgPSBpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHNOb2RlIDogdGhpcy5PbmVQb3B1cHNOb2RlO1xuICAgICAgICBsZXQgcG9wdXBzQXJnID0gaXNMZXZlbDJQb3B1cCA/IHRoaXMuVHdvUG9wdXBzQXJnIDogdGhpcy5PbmVQb3B1cHNBcmc7XG4gICAgICAgIGxldCBwYXJlbnRub2RlID0gKChmaW5kKFwiQ2FudmFzL1BvcHVwXCIpIGFzIE5vZGUpLmdldENoaWxkQnlOYW1lKGlzTGV2ZWwyUG9wdXAgPyBcInR3b1wiIDogXCJvbmVcIikgYXMgTm9kZSlcbiAgICAgICAgaWYgKHBhcmVudG5vZGUuY2hpbGRyZW4uaW5kZXhPZihwb3B1cHNOb2RlWzBdKSAhPSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHBvcHVwc1swXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gcG9wdXBzTm9kZVswXTtcbiAgICAgICAgICAgIHBhcmVudG5vZGUuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaJk+W8gOS6huW8ueeql1wiLCBwb3B1cHNbMF0ubmFtZSwgXCIhXCIsIHBvcHVwc1swXSk7XG4gICAgICAgICAgICBwb3B1cHNbMF0uSW5pdChwb3B1cHNBcmdbMF0pO1xuICAgICAgICAgICAgcmV0dXJuIHBvcHVwc1swXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKirlhbPpl63lvZPliY3lvLnnqpfmiJbmjIflrprlvLnnqpcgKi9cbiAgICBwdWJsaWMgc3RhdGljIENsb3NlUG9wdXAoaXNMZXZlbDJQb3B1cDogYm9vbGVhbiA9IGZhbHNlLCBwb3B1cE5hbWU6IHN0cmluZyA9IFwiTlVMTF9QT1BVUF9OQU1FXCIsIGFyZz86IGFueSkge1xuICAgICAgICB0aGlzLlJlbW92ZVBvcHVwKHBvcHVwTmFtZSwgaXNMZXZlbDJQb3B1cCk7XG4gICAgICAgIGxldCBwb3B1cHMgPSBpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHMgOiB0aGlzLk9uZVBvcHVwcztcbiAgICAgICAgbGV0IHBvcHVwc0FyZyA9IGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwc0FyZyA6IHRoaXMuT25lUG9wdXBzQXJnO1xuICAgICAgICBpZiAocG9wdXBzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaJgOaciVwiLCBpc0xldmVsMlBvcHVwLCBcIuW8ueeql+W3sue7j+aSreaUvuWujOavlVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyZW50bm9kZSA9ICgoZmluZChcIkNhbnZhcy9Qb3B1cFwiKSBhcyBOb2RlKS5nZXRDaGlsZEJ5TmFtZShpc0xldmVsMlBvcHVwID8gXCJ0d29cIiA6IFwib25lXCIpIGFzIE5vZGUpO1xuICAgICAgICBwYXJlbnRub2RlLmFkZENoaWxkKHBvcHVwc1swXS5ub2RlKTtcbiAgICAgICAgcG9wdXBzWzBdLkluaXQocG9wdXBzQXJnWzBdKTtcbiAgICB9XG4gICAgLyoq5YWz6Zet5omA5pyJ5by556qXICovXG4gICAgcHVibGljIHN0YXRpYyBDbG9zZUFsbFBvcHVwKCkge1xuICAgICAgICB0aGlzLk9uZVBvcHVwcy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLk9uZVBvcHVwc05vZGUubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5PbmVQb3B1cHNBcmcubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5Ud29Qb3B1cHMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5Ud29Qb3B1cHNOb2RlLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuVHdvUG9wdXBzQXJnLmxlbmd0aCA9IDA7XG4gICAgfVxuICAgIC8qKua3u+WKoOmihOWItuS9k+WIsHBvcHVwc+aVsOe7hOS4rSAqL1xuICAgIHB1YmxpYyBzdGF0aWMgUHVzaFBvcHVwKHBvcHVwOiBQcmVmYWIpIHtcbiAgICAgICAgUG9wdXBNYW5hZ2VyLnBvcHVwcy5wdXNoKHBvcHVwKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzdGF0aWMgQWRkUG9wdXAocG9wdXBOYW1lOiBzdHJpbmcsIGFyZz86IGFueSwgaXNMZXZlbDJQb3B1cDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCB0YXJnZXRQb3B1cFByZWZhYjogUHJlZmFiIHwgbnVsbCA9IHRoaXMuQ2hvb3NlUG9wdXAocG9wdXBOYW1lKTtcbiAgICAgICAgaWYgKCF0YXJnZXRQb3B1cFByZWZhYikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbid0IGZpbmQgcG9wdXBOYW1lIFwiLCBwb3B1cE5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwb3B1cE5vZGUgPSBpbnN0YW50aWF0ZSh0YXJnZXRQb3B1cFByZWZhYik7XG4gICAgICAgIGxldCBwb3B1cCA9IHBvcHVwTm9kZS5nZXRDb21wb25lbnQoUG9wdXApO1xuICAgICAgICBpZiAoIXBvcHVwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FuJ3QgZmluZCBQb3B1cENsYXNzIGJ5IHBvcHVwTmFtZSBcIiwgcG9wdXBOYW1lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzTGV2ZWwyUG9wdXApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLk9uZVBvcHVwcy5pbmRleE9mKHBvcHVwKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5by556qX5bey5a2Y5ZyoXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuT25lUG9wdXBzLnB1c2gocG9wdXApO1xuICAgICAgICAgICAgdGhpcy5PbmVQb3B1cHNOb2RlLnB1c2gocG9wdXBOb2RlKTtcbiAgICAgICAgICAgIHRoaXMuT25lUG9wdXBzQXJnLnB1c2goYXJnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLlR3b1BvcHVwcy5pbmRleE9mKHBvcHVwKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5by556qX5bey5a2Y5ZyoXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvcHVwLmlzTGV2ZWwyUG9wdXAgPSBpc0xldmVsMlBvcHVwO1xuICAgICAgICAgICAgdGhpcy5Ud29Qb3B1cHMucHVzaChwb3B1cCk7XG4gICAgICAgICAgICB0aGlzLlR3b1BvcHVwc05vZGUucHVzaChwb3B1cE5vZGUpO1xuICAgICAgICAgICAgdGhpcy5Ud29Qb3B1cHNBcmcucHVzaChhcmcpO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgcHJpdmF0ZSBzdGF0aWMgUmVtb3ZlUG9wdXAocG9wdXBOYW1lOiBzdHJpbmcsIGlzTGV2ZWwyUG9wdXA6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgcG9wdXBzID0gKGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwcyA6IHRoaXMuT25lUG9wdXBzKTtcbiAgICAgICAgbGV0IHBvcHVwc05vZGUgPSAoaXNMZXZlbDJQb3B1cCA/IHRoaXMuVHdvUG9wdXBzTm9kZSA6IHRoaXMuT25lUG9wdXBzTm9kZSk7XG4gICAgICAgIGxldCBwb3B1cHNBcmcgPSAoaXNMZXZlbDJQb3B1cCA/IHRoaXMuVHdvUG9wdXBzQXJnIDogdGhpcy5PbmVQb3B1cHNBcmcpXG4gICAgICAgIGlmIChwb3B1cE5hbWUgPT0gXCJOVUxMX1BPUFVQX05BTUVcIikge1xuICAgICAgICAgICAgcG9wdXBzWzBdLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgcG9wdXBzLnNwbGljZSgwLCAxKTtcbiAgICAgICAgICAgIHBvcHVwc05vZGUuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgcG9wdXBzQXJnLnNwbGljZSgwLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9wdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHBvcHVwc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5ub2RlLm5hbWUgPT0gcG9wdXBOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwc1tpXS5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBzTm9kZS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwc0FyZy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBwcml2YXRlIHN0YXRpYyBDaG9vc2VQb3B1cChwb3B1cE5hbWU6IHN0cmluZyk6IFByZWZhYiB8IG51bGwge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9wdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5wb3B1cHNbaV07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5kYXRhLm5hbWUgPT0gcG9wdXBOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufSJdfQ==