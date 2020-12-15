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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vUG9wdXAvUG9wdXBNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJpbnN0YW50aWF0ZSIsImdhbWUiLCJQb3B1cCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlBvcHVwTWFuYWdlciIsIkkiLCJJbnN0YW5jZSIsImkiLCJ2Iiwib25Mb2FkIiwiYWRkUGVyc2lzdFJvb3ROb2RlIiwibm9kZSIsImdldENvbXBvbmVudCIsIlNob3dQb3B1cCIsInBvcHVwTmFtZSIsImFyZyIsImlzTGV2ZWwyUG9wdXAiLCJBZGRQb3B1cCIsInBvcHVwcyIsIlR3b1BvcHVwcyIsIk9uZVBvcHVwcyIsInBvcHVwc0FyZyIsIlR3b1BvcHVwc0FyZyIsIk9uZVBvcHVwc0FyZyIsImdldENoaWxkQnlOYW1lIiwiY2hpbGRyZW4iLCJpbmRleE9mIiwiYWRkQ2hpbGQiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsIkluaXQiLCJDbG9zZVBvcHVwIiwiUmVtb3ZlUG9wdXAiLCJsZW5ndGgiLCJ0YXJnZXRQb3B1cFByZWZhYiIsIkNob29zZVBvcHVwIiwiZXJyb3IiLCJwb3B1cE5vZGUiLCJwb3B1cCIsInB1c2giLCJkZXN0cm95Iiwic3BsaWNlIiwiZWxlbWVudCIsImRhdGEiLCJfbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsVyxPQUFBQSxXO0FBQXFCQyxNQUFBQSxJLE9BQUFBLEk7O0FBR2xEQyxNQUFBQSxLLFlBQUFBLEs7Ozs7Ozs7T0FDSDtBQUFFQyxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsTyxHQUF3Qk4sVTs7OEJBR2pCTyxZLFdBRFpGLE9BQU8sQ0FBQyxjQUFELEMsbUNB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QUFDLEVBQXpDLEVBQTZDO0FBQ3pDLGtCQUFNb0MsT0FBTyxHQUFHLEtBQUt6QixNQUFMLENBQVlYLENBQVosQ0FBaEI7O0FBQ0EsZ0JBQUlvQyxPQUFPLENBQUNDLElBQVIsQ0FBYUMsS0FBYixJQUFzQi9CLFNBQTFCLEVBQXFDO0FBQ2pDLHFCQUFPNkIsT0FBUDtBQUNIO0FBQ0o7O0FBQ0QsaUJBQU8sSUFBUDtBQUNIOztBQXhHdUMsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgaW5zdGFudGlhdGUsIFByZWZhYiwgZ2FtZSwgbG9hZGVyIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgTG9hZE1hbmFnZXIgfSBmcm9tICcuLi9Mb2FkL0xvYWRNYW5hZ2VyJztcbmltcG9ydCB7IE15TGlzdENvbW1vbiB9IGZyb20gJy4uL015TWF0aC9NeUxpc3RDb21tb24nO1xuaW1wb3J0IHsgUG9wdXAgfSBmcm9tICcuL1BvcHVwJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdQb3B1cE1hbmFnZXInKVxuZXhwb3J0IGNsYXNzIFBvcHVwTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoq5Y2V5L6LICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgSW5zdGFuY2U6IFBvcHVwTWFuYWdlcjtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJKCk6IFBvcHVwTWFuYWdlciB7IHJldHVybiB0aGlzLkluc3RhbmNlOyB9XG4gICAgcHJpdmF0ZSBzdGF0aWMgc2V0IGkodjogUG9wdXBNYW5hZ2VyKSB7IHRoaXMuSW5zdGFuY2UgPSB2OyB9XG5cbiAgICAvKirmiYDmnInlvLnnqpfnmoRQcmVmYWLnmoTpm4blkIggKi9cbiAgICBwb3B1cHM6IFByZWZhYltdID0gW107XG5cbiAgICAvKiox57qn5by556qX55qE6ZuG5ZCIICovXG4gICAgT25lUG9wdXBzOiBQb3B1cFtdID0gW107XG4gICAgT25lUG9wdXBzQXJnOiBhbnlbXSA9IFtdO1xuICAgIC8qKjLnuqflvLnnqpfnmoTpm4blkIggKi9cbiAgICBUd29Qb3B1cHM6IFBvcHVwW10gPSBbXTtcbiAgICBUd29Qb3B1cHNBcmc6IGFueVtdID0gW107XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XG4gICAgICAgIFBvcHVwTWFuYWdlci5pID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChQb3B1cE1hbmFnZXIpIGFzIFBvcHVwTWFuYWdlcjtcbiAgICB9XG5cbiAgICBTaG93UG9wdXAocG9wdXBOYW1lOiBzdHJpbmcsIGFyZz86IGFueSwgaXNMZXZlbDJQb3B1cDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuQWRkUG9wdXAocG9wdXBOYW1lLCBhcmcsIGlzTGV2ZWwyUG9wdXApO1xuICAgICAgICBsZXQgcG9wdXBzID0gaXNMZXZlbDJQb3B1cCA/IHRoaXMuVHdvUG9wdXBzIDogdGhpcy5PbmVQb3B1cHM7XG4gICAgICAgIGxldCBwb3B1cHNBcmcgPSBpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHNBcmcgOiB0aGlzLk9uZVBvcHVwc0FyZztcbiAgICAgICAgaWYgKCh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoaXNMZXZlbDJQb3B1cCA/IFwidHdvXCIgOiBcIm9uZVwiKSBhcyBOb2RlKS5jaGlsZHJlbi5pbmRleE9mKHBvcHVwc1swXS5ub2RlKSAhPSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShpc0xldmVsMlBvcHVwID8gXCJ0d29cIiA6IFwib25lXCIpIGFzIE5vZGUpLmFkZENoaWxkKHBvcHVwc1swXS5ub2RlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5omT5byA5LqG5by556qXXCIsIHBvcHVwc1swXS5uYW1lLCBcIiFcIixwb3B1cHNbMF0pO1xuICAgICAgICAgICAgcG9wdXBzWzBdLkluaXQocG9wdXBzQXJnWzBdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDbG9zZVBvcHVwKGlzTGV2ZWwyUG9wdXA6IGJvb2xlYW4gPSBmYWxzZSwgcG9wdXBOYW1lOiBzdHJpbmcgPSBcIk5VTExfUE9QVVBfTkFNRVwiLCBhcmc/OiBhbnkpIHtcbiAgICAgICAgdGhpcy5SZW1vdmVQb3B1cChwb3B1cE5hbWUsIGlzTGV2ZWwyUG9wdXApO1xuICAgICAgICBsZXQgcG9wdXBzID0gaXNMZXZlbDJQb3B1cCA/IHRoaXMuVHdvUG9wdXBzIDogdGhpcy5PbmVQb3B1cHM7XG4gICAgICAgIGxldCBwb3B1cHNBcmcgPSBpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHNBcmcgOiB0aGlzLk9uZVBvcHVwc0FyZztcbiAgICAgICAgaWYgKHBvcHVwcy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmiYDmnIlcIiwgaXNMZXZlbDJQb3B1cCwgXCLlvLnnqpflt7Lnu4/mkq3mlL7lrozmr5VcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShpc0xldmVsMlBvcHVwID8gXCJ0d29cIiA6IFwib25lXCIpIGFzIE5vZGUpLmFkZENoaWxkKHBvcHVwc1swXS5ub2RlKTtcbiAgICAgICAgcG9wdXBzWzBdLkluaXQocG9wdXBzQXJnWzBdKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIEFkZFBvcHVwKHBvcHVwTmFtZTogc3RyaW5nLCBhcmc/OiBhbnksIGlzTGV2ZWwyUG9wdXA6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgdGFyZ2V0UG9wdXBQcmVmYWI6IFByZWZhYiB8IG51bGwgPSB0aGlzLkNob29zZVBvcHVwKHBvcHVwTmFtZSk7XG4gICAgICAgIGlmICghdGFyZ2V0UG9wdXBQcmVmYWIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW4ndCBmaW5kIHBvcHVwTmFtZSBcIiwgcG9wdXBOYW1lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcG9wdXBOb2RlID0gaW5zdGFudGlhdGUodGFyZ2V0UG9wdXBQcmVmYWIpO1xuICAgICAgICBsZXQgcG9wdXAgPSBwb3B1cE5vZGUuZ2V0Q29tcG9uZW50KFBvcHVwKTtcbiAgICAgICAgaWYgKCFwb3B1cCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbid0IGZpbmQgUG9wdXBDbGFzcyBieSBwb3B1cE5hbWUgXCIsIHBvcHVwTmFtZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0xldmVsMlBvcHVwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5PbmVQb3B1cHMuaW5kZXhPZihwb3B1cCkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW8ueeql+W3suWtmOWcqFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLk9uZVBvcHVwcy5wdXNoKHBvcHVwKTtcbiAgICAgICAgICAgIHRoaXMuT25lUG9wdXBzQXJnLnB1c2goYXJnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLlR3b1BvcHVwcy5pbmRleE9mKHBvcHVwKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5by556qX5bey5a2Y5ZyoXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvcHVwLmlzTGV2ZWwyUG9wdXAgPSBpc0xldmVsMlBvcHVwO1xuICAgICAgICAgICAgdGhpcy5Ud29Qb3B1cHMucHVzaChwb3B1cCk7XG4gICAgICAgICAgICB0aGlzLlR3b1BvcHVwc0FyZy5wdXNoKGFyZyk7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBwcml2YXRlIFJlbW92ZVBvcHVwKHBvcHVwTmFtZTogc3RyaW5nID0gXCJOVUxMX1BPUFVQX05BTUVcIiwgaXNMZXZlbDJQb3B1cDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBwb3B1cHMgPSAoaXNMZXZlbDJQb3B1cCA/IHRoaXMuVHdvUG9wdXBzIDogdGhpcy5PbmVQb3B1cHMpO1xuICAgICAgICBsZXQgcG9wdXBzQXJnID0gKGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwc0FyZyA6IHRoaXMuT25lUG9wdXBzQXJnKVxuICAgICAgICBpZiAocG9wdXBOYW1lID09IFwiTlVMTF9QT1BVUF9OQU1FXCIpIHtcbiAgICAgICAgICAgIHBvcHVwc1swXS5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHBvcHVwcy5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICBwb3B1cHNBcmcuc3BsaWNlKDAsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3B1cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gcG9wdXBzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lm5vZGUubmFtZSA9PSBwb3B1cE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBzW2ldLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICBwb3B1cHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBwb3B1cHNBcmcuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIENob29zZVBvcHVwKHBvcHVwTmFtZTogc3RyaW5nKTogUHJlZmFiIHwgbnVsbCB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wb3B1cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnBvcHVwc1tpXTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmRhdGEuX25hbWUgPT0gcG9wdXBOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG5cbn1cbiJdfQ==