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
            return;
          } else {
            this.node.getChildByName(isLevel2Popup ? "two" : "one").addChild(popups[0].node);
            console.log("打开了弹窗", popups[0].name, "!", popups[0]);
            popups[0].Init(popupsArg[0]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9Qb3B1cC9Qb3B1cE1hbmFnZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsImluc3RhbnRpYXRlIiwiZ2FtZSIsIlBvcHVwIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiUG9wdXBNYW5hZ2VyIiwiSSIsIkluc3RhbmNlIiwiaSIsInYiLCJvbkxvYWQiLCJhZGRQZXJzaXN0Um9vdE5vZGUiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiU2hvd1BvcHVwIiwicG9wdXBOYW1lIiwiYXJnIiwiaXNMZXZlbDJQb3B1cCIsIkFkZFBvcHVwIiwicG9wdXBzIiwiVHdvUG9wdXBzIiwiT25lUG9wdXBzIiwicG9wdXBzQXJnIiwiVHdvUG9wdXBzQXJnIiwiT25lUG9wdXBzQXJnIiwiZ2V0Q2hpbGRCeU5hbWUiLCJjaGlsZHJlbiIsImluZGV4T2YiLCJhZGRDaGlsZCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiSW5pdCIsIkNsb3NlUG9wdXAiLCJSZW1vdmVQb3B1cCIsImxlbmd0aCIsInRhcmdldFBvcHVwUHJlZmFiIiwiQ2hvb3NlUG9wdXAiLCJlcnJvciIsInBvcHVwTm9kZSIsInBvcHVwIiwicHVzaCIsImRlc3Ryb3kiLCJzcGxpY2UiLCJlbGVtZW50IiwiZGF0YSIsIl9uYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWlCQyxNQUFBQSxXLE9BQUFBLFc7QUFBcUJDLE1BQUFBLEksT0FBQUEsSTs7QUFHbERDLE1BQUFBLEssWUFBQUEsSzs7Ozs7OztPQUNIO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCTixVOzs4QkFHakJPLFksV0FEWkYsT0FBTyxDQUFDLGNBQUQs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QzNCLENBQUMsRUFBekMsRUFBNkM7QUFDekMsa0JBQU1vQyxPQUFPLEdBQUcsS0FBS3pCLE1BQUwsQ0FBWVgsQ0FBWixDQUFoQjs7QUFDQSxnQkFBSW9DLE9BQU8sQ0FBQ0MsSUFBUixDQUFhQyxLQUFiLElBQXNCL0IsU0FBMUIsRUFBcUM7QUFDakMscUJBQU82QixPQUFQO0FBQ0g7QUFDSjs7QUFDRCxpQkFBTyxJQUFQO0FBQ0g7O0FBeEd1QyxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBpbnN0YW50aWF0ZSwgUHJlZmFiLCBnYW1lLCBsb2FkZXIgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBMb2FkTWFuYWdlciB9IGZyb20gJy4uL0xvYWQvTG9hZE1hbmFnZXInO1xuaW1wb3J0IHsgTXlMaXN0Q29tbW9uIH0gZnJvbSAnLi4vTXlNYXRoL015TGlzdENvbW1vbic7XG5pbXBvcnQgeyBQb3B1cCB9IGZyb20gJy4vUG9wdXAnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1BvcHVwTWFuYWdlcicpXG5leHBvcnQgY2xhc3MgUG9wdXBNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKirljZXkvosgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBJbnN0YW5jZTogUG9wdXBNYW5hZ2VyO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEkoKTogUG9wdXBNYW5hZ2VyIHsgcmV0dXJuIHRoaXMuSW5zdGFuY2U7IH1cbiAgICBwcml2YXRlIHN0YXRpYyBzZXQgaSh2OiBQb3B1cE1hbmFnZXIpIHsgdGhpcy5JbnN0YW5jZSA9IHY7IH1cblxuICAgIC8qKuaJgOacieW8ueeql+eahFByZWZhYueahOmbhuWQiCAqL1xuICAgIHBvcHVwczogUHJlZmFiW10gPSBbXTtcblxuICAgIC8qKjHnuqflvLnnqpfnmoTpm4blkIggKi9cbiAgICBPbmVQb3B1cHM6IFBvcHVwW10gPSBbXTtcbiAgICBPbmVQb3B1cHNBcmc6IGFueVtdID0gW107XG4gICAgLyoqMue6p+W8ueeql+eahOmbhuWQiCAqL1xuICAgIFR3b1BvcHVwczogUG9wdXBbXSA9IFtdO1xuICAgIFR3b1BvcHVwc0FyZzogYW55W10gPSBbXTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcbiAgICAgICAgUG9wdXBNYW5hZ2VyLmkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFBvcHVwTWFuYWdlcikgYXMgUG9wdXBNYW5hZ2VyO1xuICAgIH1cblxuICAgIFNob3dQb3B1cChwb3B1cE5hbWU6IHN0cmluZywgYXJnPzogYW55LCBpc0xldmVsMlBvcHVwOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5BZGRQb3B1cChwb3B1cE5hbWUsIGFyZywgaXNMZXZlbDJQb3B1cCk7XG4gICAgICAgIGxldCBwb3B1cHMgPSBpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHMgOiB0aGlzLk9uZVBvcHVwcztcbiAgICAgICAgbGV0IHBvcHVwc0FyZyA9IGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwc0FyZyA6IHRoaXMuT25lUG9wdXBzQXJnO1xuICAgICAgICBpZiAoKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShpc0xldmVsMlBvcHVwID8gXCJ0d29cIiA6IFwib25lXCIpIGFzIE5vZGUpLmNoaWxkcmVuLmluZGV4T2YocG9wdXBzWzBdLm5vZGUpICE9IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGlzTGV2ZWwyUG9wdXAgPyBcInR3b1wiIDogXCJvbmVcIikgYXMgTm9kZSkuYWRkQ2hpbGQocG9wdXBzWzBdLm5vZGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmiZPlvIDkuoblvLnnqpdcIiwgcG9wdXBzWzBdLm5hbWUsIFwiIVwiLHBvcHVwc1swXSk7XG4gICAgICAgICAgICBwb3B1cHNbMF0uSW5pdChwb3B1cHNBcmdbMF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIENsb3NlUG9wdXAoaXNMZXZlbDJQb3B1cDogYm9vbGVhbiA9IGZhbHNlLCBwb3B1cE5hbWU6IHN0cmluZyA9IFwiTlVMTF9QT1BVUF9OQU1FXCIsIGFyZz86IGFueSkge1xuICAgICAgICB0aGlzLlJlbW92ZVBvcHVwKHBvcHVwTmFtZSwgaXNMZXZlbDJQb3B1cCk7XG4gICAgICAgIGxldCBwb3B1cHMgPSBpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHMgOiB0aGlzLk9uZVBvcHVwcztcbiAgICAgICAgbGV0IHBvcHVwc0FyZyA9IGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwc0FyZyA6IHRoaXMuT25lUG9wdXBzQXJnO1xuICAgICAgICBpZiAocG9wdXBzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaJgOaciVwiLCBpc0xldmVsMlBvcHVwLCBcIuW8ueeql+W3sue7j+aSreaUvuWujOavlVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGlzTGV2ZWwyUG9wdXAgPyBcInR3b1wiIDogXCJvbmVcIikgYXMgTm9kZSkuYWRkQ2hpbGQocG9wdXBzWzBdLm5vZGUpO1xuICAgICAgICBwb3B1cHNbMF0uSW5pdChwb3B1cHNBcmdbMF0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgQWRkUG9wdXAocG9wdXBOYW1lOiBzdHJpbmcsIGFyZz86IGFueSwgaXNMZXZlbDJQb3B1cDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCB0YXJnZXRQb3B1cFByZWZhYjogUHJlZmFiIHwgbnVsbCA9IHRoaXMuQ2hvb3NlUG9wdXAocG9wdXBOYW1lKTtcbiAgICAgICAgaWYgKCF0YXJnZXRQb3B1cFByZWZhYikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbid0IGZpbmQgcG9wdXBOYW1lIFwiLCBwb3B1cE5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwb3B1cE5vZGUgPSBpbnN0YW50aWF0ZSh0YXJnZXRQb3B1cFByZWZhYik7XG4gICAgICAgIGxldCBwb3B1cCA9IHBvcHVwTm9kZS5nZXRDb21wb25lbnQoUG9wdXApO1xuICAgICAgICBpZiAoIXBvcHVwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FuJ3QgZmluZCBQb3B1cENsYXNzIGJ5IHBvcHVwTmFtZSBcIiwgcG9wdXBOYW1lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzTGV2ZWwyUG9wdXApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLk9uZVBvcHVwcy5pbmRleE9mKHBvcHVwKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5by556qX5bey5a2Y5ZyoXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuT25lUG9wdXBzLnB1c2gocG9wdXApO1xuICAgICAgICAgICAgdGhpcy5PbmVQb3B1cHNBcmcucHVzaChhcmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuVHdvUG9wdXBzLmluZGV4T2YocG9wdXApICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlvLnnqpflt7LlrZjlnKhcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9wdXAuaXNMZXZlbDJQb3B1cCA9IGlzTGV2ZWwyUG9wdXA7XG4gICAgICAgICAgICB0aGlzLlR3b1BvcHVwcy5wdXNoKHBvcHVwKTtcbiAgICAgICAgICAgIHRoaXMuVHdvUG9wdXBzQXJnLnB1c2goYXJnKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHByaXZhdGUgUmVtb3ZlUG9wdXAocG9wdXBOYW1lOiBzdHJpbmcgPSBcIk5VTExfUE9QVVBfTkFNRVwiLCBpc0xldmVsMlBvcHVwOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHBvcHVwcyA9IChpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHMgOiB0aGlzLk9uZVBvcHVwcyk7XG4gICAgICAgIGxldCBwb3B1cHNBcmcgPSAoaXNMZXZlbDJQb3B1cCA/IHRoaXMuVHdvUG9wdXBzQXJnIDogdGhpcy5PbmVQb3B1cHNBcmcpXG4gICAgICAgIGlmIChwb3B1cE5hbWUgPT0gXCJOVUxMX1BPUFVQX05BTUVcIikge1xuICAgICAgICAgICAgcG9wdXBzWzBdLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgcG9wdXBzLnNwbGljZSgwLCAxKTtcbiAgICAgICAgICAgIHBvcHVwc0FyZy5zcGxpY2UoMCwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvcHVwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBwb3B1cHNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQubm9kZS5uYW1lID09IHBvcHVwTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBwb3B1cHNbaV0ubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwc0FyZy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgQ2hvb3NlUG9wdXAocG9wdXBOYW1lOiBzdHJpbmcpOiBQcmVmYWIgfCBudWxsIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvcHVwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMucG9wdXBzW2ldO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuZGF0YS5fbmFtZSA9PSBwb3B1cE5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cblxufVxuIl19