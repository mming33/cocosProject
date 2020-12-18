System.register(["cce.code-quality.cr", "cc", "./Popup.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, game, Popup, _dec, _class, _class2, _temp, _crd, ccclass, property, PopupManager;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("PopupManager", PopupManager = (_dec = ccclass('PopupManager'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PopupManager, _Component);

        function PopupManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "popups", []);

          _defineProperty(_assertThisInitialized(_this), "OnePopups", []);

          _defineProperty(_assertThisInitialized(_this), "OnePopupsArg", []);

          _defineProperty(_assertThisInitialized(_this), "TwoPopups", []);

          _defineProperty(_assertThisInitialized(_this), "TwoPopupsArg", []);

          return _this;
        }

        var _proto = PopupManager.prototype;

        _proto.onLoad = function onLoad() {
          game.addPersistRootNode(this.node);
          PopupManager.i = this.node.getComponent(PopupManager);
        };

        _proto.ShowPopup = function ShowPopup(popupName, arg, isLevel2Popup) {
          if (isLevel2Popup === void 0) {
            isLevel2Popup = false;
          }

          this.AddPopup(popupName, arg, isLevel2Popup);
          var popups = isLevel2Popup ? this.TwoPopups : this.OnePopups;
          var popupsArg = isLevel2Popup ? this.TwoPopupsArg : this.OnePopupsArg;

          if (this.node.getChildByName(isLevel2Popup ? "two" : "one").children.indexOf(popups[0].node) != -1) {
            return;
          } else {
            this.node.getChildByName(isLevel2Popup ? "two" : "one").addChild(popups[0].node);
            console.log("打开了弹窗", popups[0].name, "!", popups[0]);
            popups[0].Init(popupsArg[0]);
          }
        };

        _proto.ClosePopup = function ClosePopup(isLevel2Popup, popupName, arg) {
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

          this.node.getChildByName(isLevel2Popup ? "two" : "one").addChild(popups[0].node);
          popups[0].Init(popupsArg[0]);
        };

        _proto.AddPopup = function AddPopup(popupName, arg, isLevel2Popup) {
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
        };

        _proto.RemovePopup = function RemovePopup(popupName, isLevel2Popup) {
          if (popupName === void 0) {
            popupName = "NULL_POPUP_NAME";
          }

          if (isLevel2Popup === void 0) {
            isLevel2Popup = false;
          }

          var popups = isLevel2Popup ? this.TwoPopups : this.OnePopups;
          var popupsArg = isLevel2Popup ? this.TwoPopupsArg : this.OnePopupsArg;

          if (popupName == "NULL_POPUP_NAME") {
            popups[0].node.destroy();
            popups.splice(0, 1);
            popupsArg.splice(0, 1);
          } else {
            for (var i = 0; i < popups.length; i++) {
              var element = popups[i];

              if (element.node.name == popupName) {
                popups[i].node.destroy();
                popups.splice(i, 1);
                popupsArg.splice(i, 1);
                return;
              }
            }
          }
        };

        _proto.ChoosePopup = function ChoosePopup(popupName) {
          for (var i = 0; i < this.popups.length; i++) {
            var element = this.popups[i];

            if (element.data._name == popupName) {
              return element;
            }
          }

          return null;
        };

        _createClass(PopupManager, null, [{
          key: "I",
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
      }(Component), _defineProperty(_class2, "Instance", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vUG9wdXAvUG9wdXBNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJpbnN0YW50aWF0ZSIsImdhbWUiLCJQb3B1cCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlBvcHVwTWFuYWdlciIsIm9uTG9hZCIsImFkZFBlcnNpc3RSb290Tm9kZSIsIm5vZGUiLCJpIiwiZ2V0Q29tcG9uZW50IiwiU2hvd1BvcHVwIiwicG9wdXBOYW1lIiwiYXJnIiwiaXNMZXZlbDJQb3B1cCIsIkFkZFBvcHVwIiwicG9wdXBzIiwiVHdvUG9wdXBzIiwiT25lUG9wdXBzIiwicG9wdXBzQXJnIiwiVHdvUG9wdXBzQXJnIiwiT25lUG9wdXBzQXJnIiwiZ2V0Q2hpbGRCeU5hbWUiLCJjaGlsZHJlbiIsImluZGV4T2YiLCJhZGRDaGlsZCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiSW5pdCIsIkNsb3NlUG9wdXAiLCJSZW1vdmVQb3B1cCIsImxlbmd0aCIsInRhcmdldFBvcHVwUHJlZmFiIiwiQ2hvb3NlUG9wdXAiLCJlcnJvciIsInBvcHVwTm9kZSIsInBvcHVwIiwicHVzaCIsImRlc3Ryb3kiLCJzcGxpY2UiLCJlbGVtZW50IiwiZGF0YSIsIl9uYW1lIiwiSW5zdGFuY2UiLCJ2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLFcsT0FBQUEsVztBQUFxQkMsTUFBQUEsSSxPQUFBQSxJOztBQUVsREMsTUFBQUEsSyxZQUFBQSxLOzs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JMLFUsQ0FBdEJLLE87QUFBU0MsTUFBQUEsUSxHQUFhTixVLENBQWJNLFE7OzhCQUdKQyxZLFdBRFpGLE9BQU8s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QUFDLEdBQUcsS0FBS08sTUFBTCxDQUFZZ0IsTUFBaEMsRUFBd0N2QixDQUFDLEVBQXpDLEVBQTZDO0FBQ3pDLGdCQUFNZ0MsT0FBTyxHQUFHLEtBQUt6QixNQUFMLENBQVlQLENBQVosQ0FBaEI7O0FBQ0EsZ0JBQUlnQyxPQUFPLENBQUNDLElBQVIsQ0FBYUMsS0FBYixJQUFzQi9CLFNBQTFCLEVBQXFDO0FBQ2pDLHFCQUFPNkIsT0FBUDtBQUNIO0FBQ0o7O0FBQ0QsaUJBQU8sSUFBUDtBQUNILFM7Ozs7OEJBckdtQztBQUFFLG1CQUFPLEtBQUtHLFFBQVo7QUFBdUI7Ozs0QkFDeENDLEMsRUFBaUI7QUFBRSxpQkFBS0QsUUFBTCxHQUFnQkMsQ0FBaEI7QUFBb0I7QUFFNUQ7Ozs7O1FBTjhCOUMsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgaW5zdGFudGlhdGUsIFByZWZhYiwgZ2FtZSwgbG9hZGVyIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgTXlMaXN0Q29tbW9uIH0gZnJvbSAnLi4vTXlNYXRoL015TGlzdENvbW1vbic7XG5pbXBvcnQgeyBQb3B1cCB9IGZyb20gJy4vUG9wdXAnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1BvcHVwTWFuYWdlcicpXG5leHBvcnQgY2xhc3MgUG9wdXBNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKirljZXkvosgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBJbnN0YW5jZTogUG9wdXBNYW5hZ2VyO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEkoKTogUG9wdXBNYW5hZ2VyIHsgcmV0dXJuIHRoaXMuSW5zdGFuY2U7IH1cbiAgICBwcml2YXRlIHN0YXRpYyBzZXQgaSh2OiBQb3B1cE1hbmFnZXIpIHsgdGhpcy5JbnN0YW5jZSA9IHY7IH1cblxuICAgIC8qKuaJgOacieW8ueeql+eahFByZWZhYueahOmbhuWQiCAqL1xuICAgIHBvcHVwczogUHJlZmFiW10gPSBbXTtcblxuICAgIC8qKjHnuqflvLnnqpfnmoTpm4blkIggKi9cbiAgICBPbmVQb3B1cHM6IFBvcHVwW10gPSBbXTtcbiAgICBPbmVQb3B1cHNBcmc6IGFueVtdID0gW107XG4gICAgLyoqMue6p+W8ueeql+eahOmbhuWQiCAqL1xuICAgIFR3b1BvcHVwczogUG9wdXBbXSA9IFtdO1xuICAgIFR3b1BvcHVwc0FyZzogYW55W10gPSBbXTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcbiAgICAgICAgUG9wdXBNYW5hZ2VyLmkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFBvcHVwTWFuYWdlcikgYXMgUG9wdXBNYW5hZ2VyO1xuICAgIH1cblxuICAgIFNob3dQb3B1cChwb3B1cE5hbWU6IHN0cmluZywgYXJnPzogYW55LCBpc0xldmVsMlBvcHVwOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5BZGRQb3B1cChwb3B1cE5hbWUsIGFyZywgaXNMZXZlbDJQb3B1cCk7XG4gICAgICAgIGxldCBwb3B1cHMgPSBpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHMgOiB0aGlzLk9uZVBvcHVwcztcbiAgICAgICAgbGV0IHBvcHVwc0FyZyA9IGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwc0FyZyA6IHRoaXMuT25lUG9wdXBzQXJnO1xuICAgICAgICBpZiAoKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShpc0xldmVsMlBvcHVwID8gXCJ0d29cIiA6IFwib25lXCIpIGFzIE5vZGUpLmNoaWxkcmVuLmluZGV4T2YocG9wdXBzWzBdLm5vZGUpICE9IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGlzTGV2ZWwyUG9wdXAgPyBcInR3b1wiIDogXCJvbmVcIikgYXMgTm9kZSkuYWRkQ2hpbGQocG9wdXBzWzBdLm5vZGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmiZPlvIDkuoblvLnnqpdcIiwgcG9wdXBzWzBdLm5hbWUsIFwiIVwiLHBvcHVwc1swXSk7XG4gICAgICAgICAgICBwb3B1cHNbMF0uSW5pdChwb3B1cHNBcmdbMF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIENsb3NlUG9wdXAoaXNMZXZlbDJQb3B1cDogYm9vbGVhbiA9IGZhbHNlLCBwb3B1cE5hbWU6IHN0cmluZyA9IFwiTlVMTF9QT1BVUF9OQU1FXCIsIGFyZz86IGFueSkge1xuICAgICAgICB0aGlzLlJlbW92ZVBvcHVwKHBvcHVwTmFtZSwgaXNMZXZlbDJQb3B1cCk7XG4gICAgICAgIGxldCBwb3B1cHMgPSBpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHMgOiB0aGlzLk9uZVBvcHVwcztcbiAgICAgICAgbGV0IHBvcHVwc0FyZyA9IGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwc0FyZyA6IHRoaXMuT25lUG9wdXBzQXJnO1xuICAgICAgICBpZiAocG9wdXBzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaJgOaciVwiLCBpc0xldmVsMlBvcHVwLCBcIuW8ueeql+W3sue7j+aSreaUvuWujOavlVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGlzTGV2ZWwyUG9wdXAgPyBcInR3b1wiIDogXCJvbmVcIikgYXMgTm9kZSkuYWRkQ2hpbGQocG9wdXBzWzBdLm5vZGUpO1xuICAgICAgICBwb3B1cHNbMF0uSW5pdChwb3B1cHNBcmdbMF0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgQWRkUG9wdXAocG9wdXBOYW1lOiBzdHJpbmcsIGFyZz86IGFueSwgaXNMZXZlbDJQb3B1cDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCB0YXJnZXRQb3B1cFByZWZhYjogUHJlZmFiIHwgbnVsbCA9IHRoaXMuQ2hvb3NlUG9wdXAocG9wdXBOYW1lKTtcbiAgICAgICAgaWYgKCF0YXJnZXRQb3B1cFByZWZhYikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbid0IGZpbmQgcG9wdXBOYW1lIFwiLCBwb3B1cE5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwb3B1cE5vZGUgPSBpbnN0YW50aWF0ZSh0YXJnZXRQb3B1cFByZWZhYik7XG4gICAgICAgIGxldCBwb3B1cCA9IHBvcHVwTm9kZS5nZXRDb21wb25lbnQoUG9wdXApO1xuICAgICAgICBpZiAoIXBvcHVwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FuJ3QgZmluZCBQb3B1cENsYXNzIGJ5IHBvcHVwTmFtZSBcIiwgcG9wdXBOYW1lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzTGV2ZWwyUG9wdXApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLk9uZVBvcHVwcy5pbmRleE9mKHBvcHVwKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5by556qX5bey5a2Y5ZyoXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuT25lUG9wdXBzLnB1c2gocG9wdXApO1xuICAgICAgICAgICAgdGhpcy5PbmVQb3B1cHNBcmcucHVzaChhcmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuVHdvUG9wdXBzLmluZGV4T2YocG9wdXApICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlvLnnqpflt7LlrZjlnKhcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9wdXAuaXNMZXZlbDJQb3B1cCA9IGlzTGV2ZWwyUG9wdXA7XG4gICAgICAgICAgICB0aGlzLlR3b1BvcHVwcy5wdXNoKHBvcHVwKTtcbiAgICAgICAgICAgIHRoaXMuVHdvUG9wdXBzQXJnLnB1c2goYXJnKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHByaXZhdGUgUmVtb3ZlUG9wdXAocG9wdXBOYW1lOiBzdHJpbmcgPSBcIk5VTExfUE9QVVBfTkFNRVwiLCBpc0xldmVsMlBvcHVwOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHBvcHVwcyA9IChpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHMgOiB0aGlzLk9uZVBvcHVwcyk7XG4gICAgICAgIGxldCBwb3B1cHNBcmcgPSAoaXNMZXZlbDJQb3B1cCA/IHRoaXMuVHdvUG9wdXBzQXJnIDogdGhpcy5PbmVQb3B1cHNBcmcpXG4gICAgICAgIGlmIChwb3B1cE5hbWUgPT0gXCJOVUxMX1BPUFVQX05BTUVcIikge1xuICAgICAgICAgICAgcG9wdXBzWzBdLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgcG9wdXBzLnNwbGljZSgwLCAxKTtcbiAgICAgICAgICAgIHBvcHVwc0FyZy5zcGxpY2UoMCwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvcHVwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBwb3B1cHNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQubm9kZS5uYW1lID09IHBvcHVwTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBwb3B1cHNbaV0ubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwc0FyZy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgQ2hvb3NlUG9wdXAocG9wdXBOYW1lOiBzdHJpbmcpOiBQcmVmYWIgfCBudWxsIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvcHVwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMucG9wdXBzW2ldO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuZGF0YS5fbmFtZSA9PSBwb3B1cE5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cblxufVxuIl19