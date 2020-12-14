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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9Qb3B1cC9Qb3B1cE1hbmFnZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsImluc3RhbnRpYXRlIiwiZ2FtZSIsIlBvcHVwIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiUG9wdXBNYW5hZ2VyIiwib25Mb2FkIiwiYWRkUGVyc2lzdFJvb3ROb2RlIiwibm9kZSIsImkiLCJnZXRDb21wb25lbnQiLCJTaG93UG9wdXAiLCJwb3B1cE5hbWUiLCJhcmciLCJpc0xldmVsMlBvcHVwIiwiQWRkUG9wdXAiLCJwb3B1cHMiLCJUd29Qb3B1cHMiLCJPbmVQb3B1cHMiLCJwb3B1cHNBcmciLCJUd29Qb3B1cHNBcmciLCJPbmVQb3B1cHNBcmciLCJnZXRDaGlsZEJ5TmFtZSIsImNoaWxkcmVuIiwiaW5kZXhPZiIsImFkZENoaWxkIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJJbml0IiwiQ2xvc2VQb3B1cCIsIlJlbW92ZVBvcHVwIiwibGVuZ3RoIiwidGFyZ2V0UG9wdXBQcmVmYWIiLCJDaG9vc2VQb3B1cCIsImVycm9yIiwicG9wdXBOb2RlIiwicG9wdXAiLCJwdXNoIiwiZGVzdHJveSIsInNwbGljZSIsImVsZW1lbnQiLCJkYXRhIiwiX25hbWUiLCJJbnN0YW5jZSIsInYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsVyxPQUFBQSxXO0FBQXFCQyxNQUFBQSxJLE9BQUFBLEk7O0FBR2xEQyxNQUFBQSxLLFlBQUFBLEs7Ozs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQkwsVSxDQUF0QkssTztBQUFTQyxNQUFBQSxRLEdBQWFOLFUsQ0FBYk0sUTs7OEJBR0pDLFksV0FEWkYs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Z0JBLENBQUMsR0FBRyxLQUFLTyxNQUFMLENBQVlnQixNQUFoQyxFQUF3Q3ZCLENBQUMsRUFBekMsRUFBNkM7QUFDekMsZ0JBQU1nQyxPQUFPLEdBQUcsS0FBS3pCLE1BQUwsQ0FBWVAsQ0FBWixDQUFoQjs7QUFDQSxnQkFBSWdDLE9BQU8sQ0FBQ0MsSUFBUixDQUFhQyxLQUFiLElBQXNCL0IsU0FBMUIsRUFBcUM7QUFDakMscUJBQU82QixPQUFQO0FBQ0g7QUFDSjs7QUFDRCxpQkFBTyxJQUFQO0FBQ0gsUzs7Ozs4QkFyR21DO0FBQUUsbUJBQU8sS0FBS0csUUFBWjtBQUF1Qjs7OzRCQUN4Q0MsQyxFQUFpQjtBQUFFLGlCQUFLRCxRQUFMLEdBQWdCQyxDQUFoQjtBQUFvQjtBQUU1RDs7Ozs7UUFOOEI5QyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBpbnN0YW50aWF0ZSwgUHJlZmFiLCBnYW1lLCBsb2FkZXIgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBMb2FkTWFuYWdlciB9IGZyb20gJy4uL0xvYWQvTG9hZE1hbmFnZXInO1xuaW1wb3J0IHsgTXlMaXN0Q29tbW9uIH0gZnJvbSAnLi4vTXlNYXRoL015TGlzdENvbW1vbic7XG5pbXBvcnQgeyBQb3B1cCB9IGZyb20gJy4vUG9wdXAnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1BvcHVwTWFuYWdlcicpXG5leHBvcnQgY2xhc3MgUG9wdXBNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKirljZXkvosgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBJbnN0YW5jZTogUG9wdXBNYW5hZ2VyO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEkoKTogUG9wdXBNYW5hZ2VyIHsgcmV0dXJuIHRoaXMuSW5zdGFuY2U7IH1cbiAgICBwcml2YXRlIHN0YXRpYyBzZXQgaSh2OiBQb3B1cE1hbmFnZXIpIHsgdGhpcy5JbnN0YW5jZSA9IHY7IH1cblxuICAgIC8qKuaJgOacieW8ueeql+eahFByZWZhYueahOmbhuWQiCAqL1xuICAgIHBvcHVwczogUHJlZmFiW10gPSBbXTtcblxuICAgIC8qKjHnuqflvLnnqpfnmoTpm4blkIggKi9cbiAgICBPbmVQb3B1cHM6IFBvcHVwW10gPSBbXTtcbiAgICBPbmVQb3B1cHNBcmc6IGFueVtdID0gW107XG4gICAgLyoqMue6p+W8ueeql+eahOmbhuWQiCAqL1xuICAgIFR3b1BvcHVwczogUG9wdXBbXSA9IFtdO1xuICAgIFR3b1BvcHVwc0FyZzogYW55W10gPSBbXTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcbiAgICAgICAgUG9wdXBNYW5hZ2VyLmkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFBvcHVwTWFuYWdlcikgYXMgUG9wdXBNYW5hZ2VyO1xuICAgIH1cblxuICAgIFNob3dQb3B1cChwb3B1cE5hbWU6IHN0cmluZywgYXJnPzogYW55LCBpc0xldmVsMlBvcHVwOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5BZGRQb3B1cChwb3B1cE5hbWUsIGFyZywgaXNMZXZlbDJQb3B1cCk7XG4gICAgICAgIGxldCBwb3B1cHMgPSBpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHMgOiB0aGlzLk9uZVBvcHVwcztcbiAgICAgICAgbGV0IHBvcHVwc0FyZyA9IGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwc0FyZyA6IHRoaXMuT25lUG9wdXBzQXJnO1xuICAgICAgICBpZiAoKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShpc0xldmVsMlBvcHVwID8gXCJ0d29cIiA6IFwib25lXCIpIGFzIE5vZGUpLmNoaWxkcmVuLmluZGV4T2YocG9wdXBzWzBdLm5vZGUpICE9IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGlzTGV2ZWwyUG9wdXAgPyBcInR3b1wiIDogXCJvbmVcIikgYXMgTm9kZSkuYWRkQ2hpbGQocG9wdXBzWzBdLm5vZGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmiZPlvIDkuoblvLnnqpdcIiwgcG9wdXBzWzBdLm5hbWUsIFwiIVwiLHBvcHVwc1swXSk7XG4gICAgICAgICAgICBwb3B1cHNbMF0uSW5pdChwb3B1cHNBcmdbMF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIENsb3NlUG9wdXAoaXNMZXZlbDJQb3B1cDogYm9vbGVhbiA9IGZhbHNlLCBwb3B1cE5hbWU6IHN0cmluZyA9IFwiTlVMTF9QT1BVUF9OQU1FXCIsIGFyZz86IGFueSkge1xuICAgICAgICB0aGlzLlJlbW92ZVBvcHVwKHBvcHVwTmFtZSwgaXNMZXZlbDJQb3B1cCk7XG4gICAgICAgIGxldCBwb3B1cHMgPSBpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHMgOiB0aGlzLk9uZVBvcHVwcztcbiAgICAgICAgbGV0IHBvcHVwc0FyZyA9IGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwc0FyZyA6IHRoaXMuT25lUG9wdXBzQXJnO1xuICAgICAgICBpZiAocG9wdXBzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaJgOaciVwiLCBpc0xldmVsMlBvcHVwLCBcIuW8ueeql+W3sue7j+aSreaUvuWujOavlVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGlzTGV2ZWwyUG9wdXAgPyBcInR3b1wiIDogXCJvbmVcIikgYXMgTm9kZSkuYWRkQ2hpbGQocG9wdXBzWzBdLm5vZGUpO1xuICAgICAgICBwb3B1cHNbMF0uSW5pdChwb3B1cHNBcmdbMF0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgQWRkUG9wdXAocG9wdXBOYW1lOiBzdHJpbmcsIGFyZz86IGFueSwgaXNMZXZlbDJQb3B1cDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCB0YXJnZXRQb3B1cFByZWZhYjogUHJlZmFiIHwgbnVsbCA9IHRoaXMuQ2hvb3NlUG9wdXAocG9wdXBOYW1lKTtcbiAgICAgICAgaWYgKCF0YXJnZXRQb3B1cFByZWZhYikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbid0IGZpbmQgcG9wdXBOYW1lIFwiLCBwb3B1cE5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwb3B1cE5vZGUgPSBpbnN0YW50aWF0ZSh0YXJnZXRQb3B1cFByZWZhYik7XG4gICAgICAgIGxldCBwb3B1cCA9IHBvcHVwTm9kZS5nZXRDb21wb25lbnQoUG9wdXApO1xuICAgICAgICBpZiAoIXBvcHVwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FuJ3QgZmluZCBQb3B1cENsYXNzIGJ5IHBvcHVwTmFtZSBcIiwgcG9wdXBOYW1lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzTGV2ZWwyUG9wdXApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLk9uZVBvcHVwcy5pbmRleE9mKHBvcHVwKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5by556qX5bey5a2Y5ZyoXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuT25lUG9wdXBzLnB1c2gocG9wdXApO1xuICAgICAgICAgICAgdGhpcy5PbmVQb3B1cHNBcmcucHVzaChhcmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuVHdvUG9wdXBzLmluZGV4T2YocG9wdXApICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlvLnnqpflt7LlrZjlnKhcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9wdXAuaXNMZXZlbDJQb3B1cCA9IGlzTGV2ZWwyUG9wdXA7XG4gICAgICAgICAgICB0aGlzLlR3b1BvcHVwcy5wdXNoKHBvcHVwKTtcbiAgICAgICAgICAgIHRoaXMuVHdvUG9wdXBzQXJnLnB1c2goYXJnKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHByaXZhdGUgUmVtb3ZlUG9wdXAocG9wdXBOYW1lOiBzdHJpbmcgPSBcIk5VTExfUE9QVVBfTkFNRVwiLCBpc0xldmVsMlBvcHVwOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHBvcHVwcyA9IChpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHMgOiB0aGlzLk9uZVBvcHVwcyk7XG4gICAgICAgIGxldCBwb3B1cHNBcmcgPSAoaXNMZXZlbDJQb3B1cCA/IHRoaXMuVHdvUG9wdXBzQXJnIDogdGhpcy5PbmVQb3B1cHNBcmcpXG4gICAgICAgIGlmIChwb3B1cE5hbWUgPT0gXCJOVUxMX1BPUFVQX05BTUVcIikge1xuICAgICAgICAgICAgcG9wdXBzWzBdLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgcG9wdXBzLnNwbGljZSgwLCAxKTtcbiAgICAgICAgICAgIHBvcHVwc0FyZy5zcGxpY2UoMCwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvcHVwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBwb3B1cHNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQubm9kZS5uYW1lID09IHBvcHVwTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBwb3B1cHNbaV0ubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwc0FyZy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgQ2hvb3NlUG9wdXAocG9wdXBOYW1lOiBzdHJpbmcpOiBQcmVmYWIgfCBudWxsIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvcHVwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMucG9wdXBzW2ldO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuZGF0YS5fbmFtZSA9PSBwb3B1cE5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cblxufVxuIl19