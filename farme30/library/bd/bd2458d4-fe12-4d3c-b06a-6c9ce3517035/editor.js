System.register(["cce.code-quality.cr", "cc", "./Popup.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, game, Popup, _dec, _class, _class2, _temp, _crd, ccclass, property, PopupManager;

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
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      game = _cc.game;
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

      _export("PopupManager", PopupManager = (_dec = ccclass('PopupManager'), _dec(_class = (_temp = _class2 = class PopupManager extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "popups", []);

          _defineProperty(this, "OnePopups", []);

          _defineProperty(this, "OnePopupsArg", []);

          _defineProperty(this, "TwoPopups", []);

          _defineProperty(this, "TwoPopupsArg", []);
        }

        static get I() {
          return this.Instance;
        }

        static set i(v) {
          this.Instance = v;
        }
        /**所有弹窗的Prefab的集合 */


        onLoad() {
          game.addPersistRootNode(this.node);
          PopupManager.i = this.node.getComponent(PopupManager);
        }

        ShowPopup(popupName, arg, isLevel2Popup = false) {
          this.AddPopup(popupName, arg, isLevel2Popup);
          let popups = isLevel2Popup ? this.TwoPopups : this.OnePopups;
          let popupsArg = isLevel2Popup ? this.TwoPopupsArg : this.OnePopupsArg;

          if (this.node.getChildByName(isLevel2Popup ? "two" : "one").children.indexOf(popups[0].node) != -1) {
            return popups[0];
          } else {
            this.node.getChildByName(isLevel2Popup ? "two" : "one").addChild(popups[0].node);
            console.log("打开了弹窗", popups[0].name, "!", popups[0]);
            popups[0].Init(popupsArg[0]);
            return popups[0];
          }
        }

        ClosePopup(isLevel2Popup = false, popupName = "NULL_POPUP_NAME", arg) {
          this.RemovePopup(popupName, isLevel2Popup);
          let popups = isLevel2Popup ? this.TwoPopups : this.OnePopups;
          let popupsArg = isLevel2Popup ? this.TwoPopupsArg : this.OnePopupsArg;

          if (popups.length <= 0) {
            console.log("所有", isLevel2Popup, "弹窗已经播放完毕");
            return;
          }

          this.node.getChildByName(isLevel2Popup ? "two" : "one").addChild(popups[0].node);
          popups[0].Init(popupsArg[0]);
        }

        AddPopup(popupName, arg, isLevel2Popup = false) {
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
            this.OnePopupsArg.push(arg);
          } else {
            if (this.TwoPopups.indexOf(popup) != -1) {
              console.log("弹窗已存在");
              return;
            }

            popup.isLevel2Popup = isLevel2Popup;
            this.TwoPopups.push(popup);
            this.TwoPopupsArg.push(arg);
          }
        }

        RemovePopup(popupName = "NULL_POPUP_NAME", isLevel2Popup = false) {
          let popups = isLevel2Popup ? this.TwoPopups : this.OnePopups;
          let popupsArg = isLevel2Popup ? this.TwoPopupsArg : this.OnePopupsArg;

          if (popupName == "NULL_POPUP_NAME") {
            popups[0].node.destroy();
            popups.splice(0, 1);
            popupsArg.splice(0, 1);
          } else {
            for (let i = 0; i < popups.length; i++) {
              const element = popups[i];

              if (element.node.name == popupName) {
                popups[i].node.destroy();
                popups.splice(i, 1);
                popupsArg.splice(i, 1);
                return;
              }
            }
          }
        }

        ChoosePopup(popupName) {
          for (let i = 0; i < this.popups.length; i++) {
            const element = this.popups[i];

            if (element.data._name == popupName) {
              return element;
            }
          }

          return null;
        }

      }, _defineProperty(_class2, "Instance", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vUG9wdXAvUG9wdXBNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJpbnN0YW50aWF0ZSIsImdhbWUiLCJQb3B1cCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlBvcHVwTWFuYWdlciIsIkkiLCJJbnN0YW5jZSIsImkiLCJ2Iiwib25Mb2FkIiwiYWRkUGVyc2lzdFJvb3ROb2RlIiwibm9kZSIsImdldENvbXBvbmVudCIsIlNob3dQb3B1cCIsInBvcHVwTmFtZSIsImFyZyIsImlzTGV2ZWwyUG9wdXAiLCJBZGRQb3B1cCIsInBvcHVwcyIsIlR3b1BvcHVwcyIsIk9uZVBvcHVwcyIsInBvcHVwc0FyZyIsIlR3b1BvcHVwc0FyZyIsIk9uZVBvcHVwc0FyZyIsImdldENoaWxkQnlOYW1lIiwiY2hpbGRyZW4iLCJpbmRleE9mIiwiYWRkQ2hpbGQiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsIkluaXQiLCJDbG9zZVBvcHVwIiwiUmVtb3ZlUG9wdXAiLCJsZW5ndGgiLCJ0YXJnZXRQb3B1cFByZWZhYiIsIkNob29zZVBvcHVwIiwiZXJyb3IiLCJwb3B1cE5vZGUiLCJwb3B1cCIsInB1c2giLCJkZXN0cm95Iiwic3BsaWNlIiwiZWxlbWVudCIsImRhdGEiLCJfbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsVyxPQUFBQSxXO0FBQXFCQyxNQUFBQSxJLE9BQUFBLEk7O0FBRWxEQyxNQUFBQSxLLFlBQUFBLEs7Ozs7Ozs7T0FDSDtBQUFFQyxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsTyxHQUF3Qk4sVTs7OEJBR2pCTyxZLFdBRFpGLE9BQU8sQ0FBQyxjQUFELEMsbUNB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QUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLVyxNQUFMLENBQVlnQixNQUFoQyxFQUF3QzNCLENBQUMsRUFBekMsRUFBNkM7QUFDekMsa0JBQU1vQyxPQUFPLEdBQUcsS0FBS3pCLE1BQUwsQ0FBWVgsQ0FBWixDQUFoQjs7QUFDQSxnQkFBSW9DLE9BQU8sQ0FBQ0MsSUFBUixDQUFhQyxLQUFiLElBQXNCL0IsU0FBMUIsRUFBcUM7QUFDakMscUJBQU82QixPQUFQO0FBQ0g7QUFDSjs7QUFDRCxpQkFBTyxJQUFQO0FBQ0g7O0FBekd1QyxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBpbnN0YW50aWF0ZSwgUHJlZmFiLCBnYW1lLCBsb2FkZXIgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBNeUxpc3RDb21tb24gfSBmcm9tICcuLi9NeU1hdGgvTXlMaXN0Q29tbW9uJztcbmltcG9ydCB7IFBvcHVwIH0gZnJvbSAnLi9Qb3B1cCc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnUG9wdXBNYW5hZ2VyJylcbmV4cG9ydCBjbGFzcyBQb3B1cE1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKuWNleS+iyAqL1xuICAgIHByaXZhdGUgc3RhdGljIEluc3RhbmNlOiBQb3B1cE1hbmFnZXI7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgSSgpOiBQb3B1cE1hbmFnZXIgeyByZXR1cm4gdGhpcy5JbnN0YW5jZTsgfVxuICAgIHByaXZhdGUgc3RhdGljIHNldCBpKHY6IFBvcHVwTWFuYWdlcikgeyB0aGlzLkluc3RhbmNlID0gdjsgfVxuXG4gICAgLyoq5omA5pyJ5by556qX55qEUHJlZmFi55qE6ZuG5ZCIICovXG4gICAgcG9wdXBzOiBQcmVmYWJbXSA9IFtdO1xuXG4gICAgLyoqMee6p+W8ueeql+eahOmbhuWQiCAqL1xuICAgIE9uZVBvcHVwczogUG9wdXBbXSA9IFtdO1xuICAgIE9uZVBvcHVwc0FyZzogYW55W10gPSBbXTtcbiAgICAvKioy57qn5by556qX55qE6ZuG5ZCIICovXG4gICAgVHdvUG9wdXBzOiBQb3B1cFtdID0gW107XG4gICAgVHdvUG9wdXBzQXJnOiBhbnlbXSA9IFtdO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBnYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICBQb3B1cE1hbmFnZXIuaSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoUG9wdXBNYW5hZ2VyKSBhcyBQb3B1cE1hbmFnZXI7XG4gICAgfVxuXG4gICAgU2hvd1BvcHVwKHBvcHVwTmFtZTogc3RyaW5nLCBhcmc/OiBhbnksIGlzTGV2ZWwyUG9wdXA6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLkFkZFBvcHVwKHBvcHVwTmFtZSwgYXJnLCBpc0xldmVsMlBvcHVwKTtcbiAgICAgICAgbGV0IHBvcHVwcyA9IGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwcyA6IHRoaXMuT25lUG9wdXBzO1xuICAgICAgICBsZXQgcG9wdXBzQXJnID0gaXNMZXZlbDJQb3B1cCA/IHRoaXMuVHdvUG9wdXBzQXJnIDogdGhpcy5PbmVQb3B1cHNBcmc7XG4gICAgICAgIGlmICgodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGlzTGV2ZWwyUG9wdXAgPyBcInR3b1wiIDogXCJvbmVcIikgYXMgTm9kZSkuY2hpbGRyZW4uaW5kZXhPZihwb3B1cHNbMF0ubm9kZSkgIT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBwb3B1cHNbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGlzTGV2ZWwyUG9wdXAgPyBcInR3b1wiIDogXCJvbmVcIikgYXMgTm9kZSkuYWRkQ2hpbGQocG9wdXBzWzBdLm5vZGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmiZPlvIDkuoblvLnnqpdcIiwgcG9wdXBzWzBdLm5hbWUsIFwiIVwiLCBwb3B1cHNbMF0pO1xuICAgICAgICAgICAgcG9wdXBzWzBdLkluaXQocG9wdXBzQXJnWzBdKTtcbiAgICAgICAgICAgIHJldHVybiBwb3B1cHNbMF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ2xvc2VQb3B1cChpc0xldmVsMlBvcHVwOiBib29sZWFuID0gZmFsc2UsIHBvcHVwTmFtZTogc3RyaW5nID0gXCJOVUxMX1BPUFVQX05BTUVcIiwgYXJnPzogYW55KSB7XG4gICAgICAgIHRoaXMuUmVtb3ZlUG9wdXAocG9wdXBOYW1lLCBpc0xldmVsMlBvcHVwKTtcbiAgICAgICAgbGV0IHBvcHVwcyA9IGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwcyA6IHRoaXMuT25lUG9wdXBzO1xuICAgICAgICBsZXQgcG9wdXBzQXJnID0gaXNMZXZlbDJQb3B1cCA/IHRoaXMuVHdvUG9wdXBzQXJnIDogdGhpcy5PbmVQb3B1cHNBcmc7XG4gICAgICAgIGlmIChwb3B1cHMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5omA5pyJXCIsIGlzTGV2ZWwyUG9wdXAsIFwi5by556qX5bey57uP5pKt5pS+5a6M5q+VXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoaXNMZXZlbDJQb3B1cCA/IFwidHdvXCIgOiBcIm9uZVwiKSBhcyBOb2RlKS5hZGRDaGlsZChwb3B1cHNbMF0ubm9kZSk7XG4gICAgICAgIHBvcHVwc1swXS5Jbml0KHBvcHVwc0FyZ1swXSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBBZGRQb3B1cChwb3B1cE5hbWU6IHN0cmluZywgYXJnPzogYW55LCBpc0xldmVsMlBvcHVwOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHRhcmdldFBvcHVwUHJlZmFiOiBQcmVmYWIgfCBudWxsID0gdGhpcy5DaG9vc2VQb3B1cChwb3B1cE5hbWUpO1xuICAgICAgICBpZiAoIXRhcmdldFBvcHVwUHJlZmFiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FuJ3QgZmluZCBwb3B1cE5hbWUgXCIsIHBvcHVwTmFtZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBvcHVwTm9kZSA9IGluc3RhbnRpYXRlKHRhcmdldFBvcHVwUHJlZmFiKTtcbiAgICAgICAgbGV0IHBvcHVwID0gcG9wdXBOb2RlLmdldENvbXBvbmVudChQb3B1cCk7XG4gICAgICAgIGlmICghcG9wdXApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW4ndCBmaW5kIFBvcHVwQ2xhc3MgYnkgcG9wdXBOYW1lIFwiLCBwb3B1cE5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNMZXZlbDJQb3B1cCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuT25lUG9wdXBzLmluZGV4T2YocG9wdXApICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlvLnnqpflt7LlrZjlnKhcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5PbmVQb3B1cHMucHVzaChwb3B1cCk7XG4gICAgICAgICAgICB0aGlzLk9uZVBvcHVwc0FyZy5wdXNoKGFyZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5Ud29Qb3B1cHMuaW5kZXhPZihwb3B1cCkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW8ueeql+W3suWtmOWcqFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb3B1cC5pc0xldmVsMlBvcHVwID0gaXNMZXZlbDJQb3B1cDtcbiAgICAgICAgICAgIHRoaXMuVHdvUG9wdXBzLnB1c2gocG9wdXApO1xuICAgICAgICAgICAgdGhpcy5Ud29Qb3B1cHNBcmcucHVzaChhcmcpO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgcHJpdmF0ZSBSZW1vdmVQb3B1cChwb3B1cE5hbWU6IHN0cmluZyA9IFwiTlVMTF9QT1BVUF9OQU1FXCIsIGlzTGV2ZWwyUG9wdXA6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgcG9wdXBzID0gKGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwcyA6IHRoaXMuT25lUG9wdXBzKTtcbiAgICAgICAgbGV0IHBvcHVwc0FyZyA9IChpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHNBcmcgOiB0aGlzLk9uZVBvcHVwc0FyZylcbiAgICAgICAgaWYgKHBvcHVwTmFtZSA9PSBcIk5VTExfUE9QVVBfTkFNRVwiKSB7XG4gICAgICAgICAgICBwb3B1cHNbMF0ubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICBwb3B1cHMuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgcG9wdXBzQXJnLnNwbGljZSgwLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9wdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHBvcHVwc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5ub2RlLm5hbWUgPT0gcG9wdXBOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwc1tpXS5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBzQXJnLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBDaG9vc2VQb3B1cChwb3B1cE5hbWU6IHN0cmluZyk6IFByZWZhYiB8IG51bGwge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9wdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5wb3B1cHNbaV07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5kYXRhLl9uYW1lID09IHBvcHVwTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuXG59XG4iXX0=