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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vUG9wdXAvUG9wdXBNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJpbnN0YW50aWF0ZSIsImdhbWUiLCJQb3B1cCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlBvcHVwTWFuYWdlciIsIkkiLCJJbnN0YW5jZSIsImkiLCJ2Iiwib25Mb2FkIiwiYWRkUGVyc2lzdFJvb3ROb2RlIiwibm9kZSIsImdldENvbXBvbmVudCIsIlNob3dQb3B1cCIsInBvcHVwTmFtZSIsImFyZyIsImlzTGV2ZWwyUG9wdXAiLCJBZGRQb3B1cCIsInBvcHVwcyIsIlR3b1BvcHVwcyIsIk9uZVBvcHVwcyIsInBvcHVwc0FyZyIsIlR3b1BvcHVwc0FyZyIsIk9uZVBvcHVwc0FyZyIsImdldENoaWxkQnlOYW1lIiwiY2hpbGRyZW4iLCJpbmRleE9mIiwiYWRkQ2hpbGQiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsIkluaXQiLCJDbG9zZVBvcHVwIiwiUmVtb3ZlUG9wdXAiLCJsZW5ndGgiLCJ0YXJnZXRQb3B1cFByZWZhYiIsIkNob29zZVBvcHVwIiwiZXJyb3IiLCJwb3B1cE5vZGUiLCJwb3B1cCIsInB1c2giLCJkZXN0cm95Iiwic3BsaWNlIiwiZWxlbWVudCIsImRhdGEiLCJfbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsVyxPQUFBQSxXO0FBQXFCQyxNQUFBQSxJLE9BQUFBLEk7O0FBRWxEQyxNQUFBQSxLLFlBQUFBLEs7Ozs7Ozs7T0FDSDtBQUFFQyxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsTyxHQUF3Qk4sVTs7OEJBR2pCTyxZLFdBRFpGLE9BQU8sQ0FBQyxjQUFELEMsbUNBQVIsTUFDYUUsWUFEYixTQUNrQ04sU0FEbEMsQ0FDNEM7QUFBQTtBQUFBOztBQUFBLDBDQU9yQixFQVBxQjs7QUFBQSw2Q0FVbkIsRUFWbUI7O0FBQUEsZ0RBV2xCLEVBWGtCOztBQUFBLDZDQWFuQixFQWJtQjs7QUFBQSxnREFjbEIsRUFka0I7QUFBQTs7QUFHeEMsbUJBQWtCTyxDQUFsQixHQUFvQztBQUFFLGlCQUFPLEtBQUtDLFFBQVo7QUFBdUI7O0FBQzdELG1CQUFtQkMsQ0FBbkIsQ0FBcUJDLENBQXJCLEVBQXNDO0FBQUUsZUFBS0YsUUFBTCxHQUFnQkUsQ0FBaEI7QUFBb0I7QUFFNUQ7OztBQVVBQyxRQUFBQSxNQUFNLEdBQUc7QUFDTFQsVUFBQUEsSUFBSSxDQUFDVSxrQkFBTCxDQUF3QixLQUFLQyxJQUE3QjtBQUNBUCxVQUFBQSxZQUFZLENBQUNHLENBQWIsR0FBaUIsS0FBS0ksSUFBTCxDQUFVQyxZQUFWLENBQXVCUixZQUF2QixDQUFqQjtBQUNIOztBQUVEUyxRQUFBQSxTQUFTLENBQUNDLFNBQUQsRUFBb0JDLEdBQXBCLEVBQStCQyxhQUFzQixHQUFHLEtBQXhELEVBQStEO0FBQ3BFLGVBQUtDLFFBQUwsQ0FBY0gsU0FBZCxFQUF5QkMsR0FBekIsRUFBOEJDLGFBQTlCO0FBQ0EsY0FBSUUsTUFBTSxHQUFHRixhQUFhLEdBQUcsS0FBS0csU0FBUixHQUFvQixLQUFLQyxTQUFuRDtBQUNBLGNBQUlDLFNBQVMsR0FBR0wsYUFBYSxHQUFHLEtBQUtNLFlBQVIsR0FBdUIsS0FBS0MsWUFBekQ7O0FBQ0EsY0FBSyxLQUFLWixJQUFMLENBQVVhLGNBQVYsQ0FBeUJSLGFBQWEsR0FBRyxLQUFILEdBQVcsS0FBakQsQ0FBRCxDQUFrRVMsUUFBbEUsQ0FBMkVDLE9BQTNFLENBQW1GUixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVQLElBQTdGLEtBQXNHLENBQUMsQ0FBM0csRUFBOEc7QUFDMUc7QUFDSCxXQUZELE1BRU87QUFDRixpQkFBS0EsSUFBTCxDQUFVYSxjQUFWLENBQXlCUixhQUFhLEdBQUcsS0FBSCxHQUFXLEtBQWpELENBQUQsQ0FBa0VXLFFBQWxFLENBQTJFVCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVQLElBQXJGO0FBQ0FpQixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCWCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVZLElBQS9CLEVBQXFDLEdBQXJDLEVBQXlDWixNQUFNLENBQUMsQ0FBRCxDQUEvQztBQUNBQSxZQUFBQSxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVhLElBQVYsQ0FBZVYsU0FBUyxDQUFDLENBQUQsQ0FBeEI7QUFDSDtBQUNKOztBQUNEVyxRQUFBQSxVQUFVLENBQUNoQixhQUFzQixHQUFHLEtBQTFCLEVBQWlDRixTQUFpQixHQUFHLGlCQUFyRCxFQUF3RUMsR0FBeEUsRUFBbUY7QUFDekYsZUFBS2tCLFdBQUwsQ0FBaUJuQixTQUFqQixFQUE0QkUsYUFBNUI7QUFDQSxjQUFJRSxNQUFNLEdBQUdGLGFBQWEsR0FBRyxLQUFLRyxTQUFSLEdBQW9CLEtBQUtDLFNBQW5EO0FBQ0EsY0FBSUMsU0FBUyxHQUFHTCxhQUFhLEdBQUcsS0FBS00sWUFBUixHQUF1QixLQUFLQyxZQUF6RDs7QUFDQSxjQUFJTCxNQUFNLENBQUNnQixNQUFQLElBQWlCLENBQXJCLEVBQXdCO0FBQ3BCTixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaLEVBQWtCYixhQUFsQixFQUFpQyxVQUFqQztBQUNBO0FBQ0g7O0FBQ0EsZUFBS0wsSUFBTCxDQUFVYSxjQUFWLENBQXlCUixhQUFhLEdBQUcsS0FBSCxHQUFXLEtBQWpELENBQUQsQ0FBa0VXLFFBQWxFLENBQTJFVCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVQLElBQXJGO0FBQ0FPLFVBQUFBLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVWEsSUFBVixDQUFlVixTQUFTLENBQUMsQ0FBRCxDQUF4QjtBQUNIOztBQUVPSixRQUFBQSxRQUFSLENBQWlCSCxTQUFqQixFQUFvQ0MsR0FBcEMsRUFBK0NDLGFBQXNCLEdBQUcsS0FBeEUsRUFBK0U7QUFDM0UsY0FBSW1CLGlCQUFnQyxHQUFHLEtBQUtDLFdBQUwsQ0FBaUJ0QixTQUFqQixDQUF2Qzs7QUFDQSxjQUFJLENBQUNxQixpQkFBTCxFQUF3QjtBQUNwQlAsWUFBQUEsT0FBTyxDQUFDUyxLQUFSLENBQWMsdUJBQWQsRUFBdUN2QixTQUF2QztBQUNBO0FBQ0g7O0FBQ0QsY0FBSXdCLFNBQVMsR0FBR3ZDLFdBQVcsQ0FBQ29DLGlCQUFELENBQTNCO0FBQ0EsY0FBSUksS0FBSyxHQUFHRCxTQUFTLENBQUMxQixZQUFWO0FBQUE7QUFBQSw2QkFBWjs7QUFDQSxjQUFJLENBQUMyQixLQUFMLEVBQVk7QUFDUlgsWUFBQUEsT0FBTyxDQUFDUyxLQUFSLENBQWMscUNBQWQsRUFBcUR2QixTQUFyRDtBQUNBO0FBQ0g7O0FBQ0QsY0FBSSxDQUFDRSxhQUFMLEVBQW9CO0FBQ2hCLGdCQUFJLEtBQUtJLFNBQUwsQ0FBZU0sT0FBZixDQUF1QmEsS0FBdkIsS0FBaUMsQ0FBQyxDQUF0QyxFQUF5QztBQUNyQ1gsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBO0FBQ0g7O0FBQ0QsaUJBQUtULFNBQUwsQ0FBZW9CLElBQWYsQ0FBb0JELEtBQXBCO0FBQ0EsaUJBQUtoQixZQUFMLENBQWtCaUIsSUFBbEIsQ0FBdUJ6QixHQUF2QjtBQUNILFdBUEQsTUFPTztBQUNILGdCQUFJLEtBQUtJLFNBQUwsQ0FBZU8sT0FBZixDQUF1QmEsS0FBdkIsS0FBaUMsQ0FBQyxDQUF0QyxFQUF5QztBQUNyQ1gsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBO0FBQ0g7O0FBQ0RVLFlBQUFBLEtBQUssQ0FBQ3ZCLGFBQU4sR0FBc0JBLGFBQXRCO0FBQ0EsaUJBQUtHLFNBQUwsQ0FBZXFCLElBQWYsQ0FBb0JELEtBQXBCO0FBQ0EsaUJBQUtqQixZQUFMLENBQWtCa0IsSUFBbEIsQ0FBdUJ6QixHQUF2QjtBQUNIO0FBRUo7O0FBQ09rQixRQUFBQSxXQUFSLENBQW9CbkIsU0FBaUIsR0FBRyxpQkFBeEMsRUFBMkRFLGFBQXNCLEdBQUcsS0FBcEYsRUFBMkY7QUFDdkYsY0FBSUUsTUFBTSxHQUFJRixhQUFhLEdBQUcsS0FBS0csU0FBUixHQUFvQixLQUFLQyxTQUFwRDtBQUNBLGNBQUlDLFNBQVMsR0FBSUwsYUFBYSxHQUFHLEtBQUtNLFlBQVIsR0FBdUIsS0FBS0MsWUFBMUQ7O0FBQ0EsY0FBSVQsU0FBUyxJQUFJLGlCQUFqQixFQUFvQztBQUNoQ0ksWUFBQUEsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUCxJQUFWLENBQWU4QixPQUFmO0FBQ0F2QixZQUFBQSxNQUFNLENBQUN3QixNQUFQLENBQWMsQ0FBZCxFQUFpQixDQUFqQjtBQUNBckIsWUFBQUEsU0FBUyxDQUFDcUIsTUFBVixDQUFpQixDQUFqQixFQUFvQixDQUFwQjtBQUNILFdBSkQsTUFJTztBQUNILGlCQUFLLElBQUluQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHVyxNQUFNLENBQUNnQixNQUEzQixFQUFtQzNCLENBQUMsRUFBcEMsRUFBd0M7QUFDcEMsb0JBQU1vQyxPQUFPLEdBQUd6QixNQUFNLENBQUNYLENBQUQsQ0FBdEI7O0FBQ0Esa0JBQUlvQyxPQUFPLENBQUNoQyxJQUFSLENBQWFtQixJQUFiLElBQXFCaEIsU0FBekIsRUFBb0M7QUFDaENJLGdCQUFBQSxNQUFNLENBQUNYLENBQUQsQ0FBTixDQUFVSSxJQUFWLENBQWU4QixPQUFmO0FBQ0F2QixnQkFBQUEsTUFBTSxDQUFDd0IsTUFBUCxDQUFjbkMsQ0FBZCxFQUFpQixDQUFqQjtBQUNBYyxnQkFBQUEsU0FBUyxDQUFDcUIsTUFBVixDQUFpQm5DLENBQWpCLEVBQW9CLENBQXBCO0FBQ0E7QUFDSDtBQUNKO0FBQ0o7QUFFSjs7QUFFTzZCLFFBQUFBLFdBQVIsQ0FBb0J0QixTQUFwQixFQUFzRDtBQUNsRCxlQUFLLElBQUlQLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS1csTUFBTCxDQUFZZ0IsTUFBaEMsRUFBd0MzQixDQUFDLEVBQXpDLEVBQTZDO0FBQ3pDLGtCQUFNb0MsT0FBTyxHQUFHLEtBQUt6QixNQUFMLENBQVlYLENBQVosQ0FBaEI7O0FBQ0EsZ0JBQUlvQyxPQUFPLENBQUNDLElBQVIsQ0FBYUMsS0FBYixJQUFzQi9CLFNBQTFCLEVBQXFDO0FBQ2pDLHFCQUFPNkIsT0FBUDtBQUNIO0FBQ0o7O0FBQ0QsaUJBQU8sSUFBUDtBQUNIOztBQXhHdUMsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgaW5zdGFudGlhdGUsIFByZWZhYiwgZ2FtZSwgbG9hZGVyIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgTXlMaXN0Q29tbW9uIH0gZnJvbSAnLi4vTXlNYXRoL015TGlzdENvbW1vbic7XG5pbXBvcnQgeyBQb3B1cCB9IGZyb20gJy4vUG9wdXAnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1BvcHVwTWFuYWdlcicpXG5leHBvcnQgY2xhc3MgUG9wdXBNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKirljZXkvosgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBJbnN0YW5jZTogUG9wdXBNYW5hZ2VyO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEkoKTogUG9wdXBNYW5hZ2VyIHsgcmV0dXJuIHRoaXMuSW5zdGFuY2U7IH1cbiAgICBwcml2YXRlIHN0YXRpYyBzZXQgaSh2OiBQb3B1cE1hbmFnZXIpIHsgdGhpcy5JbnN0YW5jZSA9IHY7IH1cblxuICAgIC8qKuaJgOacieW8ueeql+eahFByZWZhYueahOmbhuWQiCAqL1xuICAgIHBvcHVwczogUHJlZmFiW10gPSBbXTtcblxuICAgIC8qKjHnuqflvLnnqpfnmoTpm4blkIggKi9cbiAgICBPbmVQb3B1cHM6IFBvcHVwW10gPSBbXTtcbiAgICBPbmVQb3B1cHNBcmc6IGFueVtdID0gW107XG4gICAgLyoqMue6p+W8ueeql+eahOmbhuWQiCAqL1xuICAgIFR3b1BvcHVwczogUG9wdXBbXSA9IFtdO1xuICAgIFR3b1BvcHVwc0FyZzogYW55W10gPSBbXTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcbiAgICAgICAgUG9wdXBNYW5hZ2VyLmkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFBvcHVwTWFuYWdlcikgYXMgUG9wdXBNYW5hZ2VyO1xuICAgIH1cblxuICAgIFNob3dQb3B1cChwb3B1cE5hbWU6IHN0cmluZywgYXJnPzogYW55LCBpc0xldmVsMlBvcHVwOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5BZGRQb3B1cChwb3B1cE5hbWUsIGFyZywgaXNMZXZlbDJQb3B1cCk7XG4gICAgICAgIGxldCBwb3B1cHMgPSBpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHMgOiB0aGlzLk9uZVBvcHVwcztcbiAgICAgICAgbGV0IHBvcHVwc0FyZyA9IGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwc0FyZyA6IHRoaXMuT25lUG9wdXBzQXJnO1xuICAgICAgICBpZiAoKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShpc0xldmVsMlBvcHVwID8gXCJ0d29cIiA6IFwib25lXCIpIGFzIE5vZGUpLmNoaWxkcmVuLmluZGV4T2YocG9wdXBzWzBdLm5vZGUpICE9IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGlzTGV2ZWwyUG9wdXAgPyBcInR3b1wiIDogXCJvbmVcIikgYXMgTm9kZSkuYWRkQ2hpbGQocG9wdXBzWzBdLm5vZGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmiZPlvIDkuoblvLnnqpdcIiwgcG9wdXBzWzBdLm5hbWUsIFwiIVwiLHBvcHVwc1swXSk7XG4gICAgICAgICAgICBwb3B1cHNbMF0uSW5pdChwb3B1cHNBcmdbMF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIENsb3NlUG9wdXAoaXNMZXZlbDJQb3B1cDogYm9vbGVhbiA9IGZhbHNlLCBwb3B1cE5hbWU6IHN0cmluZyA9IFwiTlVMTF9QT1BVUF9OQU1FXCIsIGFyZz86IGFueSkge1xuICAgICAgICB0aGlzLlJlbW92ZVBvcHVwKHBvcHVwTmFtZSwgaXNMZXZlbDJQb3B1cCk7XG4gICAgICAgIGxldCBwb3B1cHMgPSBpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHMgOiB0aGlzLk9uZVBvcHVwcztcbiAgICAgICAgbGV0IHBvcHVwc0FyZyA9IGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwc0FyZyA6IHRoaXMuT25lUG9wdXBzQXJnO1xuICAgICAgICBpZiAocG9wdXBzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaJgOaciVwiLCBpc0xldmVsMlBvcHVwLCBcIuW8ueeql+W3sue7j+aSreaUvuWujOavlVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGlzTGV2ZWwyUG9wdXAgPyBcInR3b1wiIDogXCJvbmVcIikgYXMgTm9kZSkuYWRkQ2hpbGQocG9wdXBzWzBdLm5vZGUpO1xuICAgICAgICBwb3B1cHNbMF0uSW5pdChwb3B1cHNBcmdbMF0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgQWRkUG9wdXAocG9wdXBOYW1lOiBzdHJpbmcsIGFyZz86IGFueSwgaXNMZXZlbDJQb3B1cDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCB0YXJnZXRQb3B1cFByZWZhYjogUHJlZmFiIHwgbnVsbCA9IHRoaXMuQ2hvb3NlUG9wdXAocG9wdXBOYW1lKTtcbiAgICAgICAgaWYgKCF0YXJnZXRQb3B1cFByZWZhYikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbid0IGZpbmQgcG9wdXBOYW1lIFwiLCBwb3B1cE5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwb3B1cE5vZGUgPSBpbnN0YW50aWF0ZSh0YXJnZXRQb3B1cFByZWZhYik7XG4gICAgICAgIGxldCBwb3B1cCA9IHBvcHVwTm9kZS5nZXRDb21wb25lbnQoUG9wdXApO1xuICAgICAgICBpZiAoIXBvcHVwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FuJ3QgZmluZCBQb3B1cENsYXNzIGJ5IHBvcHVwTmFtZSBcIiwgcG9wdXBOYW1lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzTGV2ZWwyUG9wdXApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLk9uZVBvcHVwcy5pbmRleE9mKHBvcHVwKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5by556qX5bey5a2Y5ZyoXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuT25lUG9wdXBzLnB1c2gocG9wdXApO1xuICAgICAgICAgICAgdGhpcy5PbmVQb3B1cHNBcmcucHVzaChhcmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuVHdvUG9wdXBzLmluZGV4T2YocG9wdXApICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlvLnnqpflt7LlrZjlnKhcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9wdXAuaXNMZXZlbDJQb3B1cCA9IGlzTGV2ZWwyUG9wdXA7XG4gICAgICAgICAgICB0aGlzLlR3b1BvcHVwcy5wdXNoKHBvcHVwKTtcbiAgICAgICAgICAgIHRoaXMuVHdvUG9wdXBzQXJnLnB1c2goYXJnKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHByaXZhdGUgUmVtb3ZlUG9wdXAocG9wdXBOYW1lOiBzdHJpbmcgPSBcIk5VTExfUE9QVVBfTkFNRVwiLCBpc0xldmVsMlBvcHVwOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHBvcHVwcyA9IChpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHMgOiB0aGlzLk9uZVBvcHVwcyk7XG4gICAgICAgIGxldCBwb3B1cHNBcmcgPSAoaXNMZXZlbDJQb3B1cCA/IHRoaXMuVHdvUG9wdXBzQXJnIDogdGhpcy5PbmVQb3B1cHNBcmcpXG4gICAgICAgIGlmIChwb3B1cE5hbWUgPT0gXCJOVUxMX1BPUFVQX05BTUVcIikge1xuICAgICAgICAgICAgcG9wdXBzWzBdLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgcG9wdXBzLnNwbGljZSgwLCAxKTtcbiAgICAgICAgICAgIHBvcHVwc0FyZy5zcGxpY2UoMCwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvcHVwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBwb3B1cHNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQubm9kZS5uYW1lID09IHBvcHVwTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBwb3B1cHNbaV0ubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwc0FyZy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgQ2hvb3NlUG9wdXAocG9wdXBOYW1lOiBzdHJpbmcpOiBQcmVmYWIgfCBudWxsIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvcHVwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMucG9wdXBzW2ldO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuZGF0YS5fbmFtZSA9PSBwb3B1cE5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cblxufVxuIl19