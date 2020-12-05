System.register(["cc", "code-quality:cr", "./Popup.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, instantiate, game, Popup, _dec, _class, _temp, _crd, ccclass, property, PopupManager;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfPopup(extras) {
    _reporterNs.report("Popup", "./Popup", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      game = _cc.game;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_PopupJs) {
      Popup = _PopupJs.Popup;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "8a082uhPzxE8LTf1Y2cl4zZ", "PopupManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("PopupManager", PopupManager = (_dec = ccclass('PopupManager'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(PopupManager, _Component);

        function PopupManager() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, PopupManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PopupManager)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.popups = [];
          _this.OnePopups = [];
          _this.OnePopupsArg = [];
          _this.TwoPopups = [];
          _this.TwoPopupsArg = [];
          return _this;
        }

        _createClass(PopupManager, [{
          key: "onLoad",
          value: function onLoad() {
            game.addPersistRootNode(this.node);
            PopupManager.i = this.node.getComponent(PopupManager);
          }
        }, {
          key: "ShowPopup",
          value: function ShowPopup(popupName, arg) {
            var isLevel2Popup = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            this.AddPopup(popupName, arg, isLevel2Popup);
            var popups = isLevel2Popup ? this.TwoPopups : this.OnePopups;
            var popupsArg = isLevel2Popup ? this.TwoPopupsArg : this.OnePopupsArg;

            if (this.node.getChildByName(isLevel2Popup ? "two" : "one").children.indexOf(popups[0].node) != -1) {
              console.log("弹窗", popups[0].name, "已经打开了");
              return;
            } else {
              this.node.getChildByName(isLevel2Popup ? "two" : "one").addChild(popups[0].node);
              popups[0].Init(popupsArg[0]);
            }
          }
        }, {
          key: "ClosePopup",
          value: function ClosePopup() {
            var isLevel2Popup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var popupName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "NULL_POPUP_NAME";
            var arg = arguments.length > 2 ? arguments[2] : undefined;
            this.RemovePopup(popupName, isLevel2Popup);
            var popups = isLevel2Popup ? this.TwoPopups : this.OnePopups;
            var popupsArg = isLevel2Popup ? this.TwoPopupsArg : this.OnePopupsArg;

            if (popups.length <= 0) {
              console.log("所有", isLevel2Popup, "弹窗已经播放完毕");
              return;
            }

            this.node.getChildByName(isLevel2Popup ? "two" : "one").addChild(popups[0].node);
            popups[0].Init(popupsArg[0]);
          }
        }, {
          key: "AddPopup",
          value: function AddPopup(popupName, arg) {
            var isLevel2Popup = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var targetPopupPrefab = this.ChoosePopup(popupName);

            if (!targetPopupPrefab) {
              console.error("Can't find popupName ", popupName);
              return;
            }

            var popupNode = instantiate(targetPopupPrefab);
            var popup = popupNode.getComponent(_crd && Popup === void 0 ? (_reportPossibleCrUseOfPopup({
              error: Error()
            }), Popup) : Popup);

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
        }, {
          key: "RemovePopup",
          value: function RemovePopup() {
            var popupName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "NULL_POPUP_NAME";
            var isLevel2Popup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
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
          }
        }, {
          key: "ChoosePopup",
          value: function ChoosePopup(popupName) {
            for (var i = 0; i < this.popups.length; i++) {
              var element = this.popups[i];

              if (element.data._name == popupName) {
                return element;
              }
            }
          }
        }], [{
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
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvOEJhbGwvYXNzZXRzL1NjcmlwdHMvQ29tbW9uL1BvcHVwL1BvcHVwTWFuYWdlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiaW5zdGFudGlhdGUiLCJnYW1lIiwiUG9wdXAiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJQb3B1cE1hbmFnZXIiLCJwb3B1cHMiLCJPbmVQb3B1cHMiLCJPbmVQb3B1cHNBcmciLCJUd29Qb3B1cHMiLCJUd29Qb3B1cHNBcmciLCJhZGRQZXJzaXN0Um9vdE5vZGUiLCJub2RlIiwiaSIsImdldENvbXBvbmVudCIsInBvcHVwTmFtZSIsImFyZyIsImlzTGV2ZWwyUG9wdXAiLCJBZGRQb3B1cCIsInBvcHVwc0FyZyIsImdldENoaWxkQnlOYW1lIiwiY2hpbGRyZW4iLCJpbmRleE9mIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJhZGRDaGlsZCIsIkluaXQiLCJSZW1vdmVQb3B1cCIsImxlbmd0aCIsInRhcmdldFBvcHVwUHJlZmFiIiwiQ2hvb3NlUG9wdXAiLCJlcnJvciIsInBvcHVwTm9kZSIsInBvcHVwIiwicHVzaCIsImRlc3Ryb3kiLCJzcGxpY2UiLCJlbGVtZW50IiwiZGF0YSIsIl9uYW1lIiwiSW5zdGFuY2UiLCJ2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsVyxPQUFBQSxXO0FBQXFCQyxNQUFBQSxJLE9BQUFBLEk7Ozs7QUFHbERDLE1BQUFBLEssWUFBQUEsSzs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JMLFUsQ0FBdEJLLE87QUFBU0MsTUFBQUEsUSxHQUFhTixVLENBQWJNLFE7OzhCQUdKQyxZLFdBRFpGLE9BQU8sQ0FBQyxjQUFELEM7Ozs7Ozs7Ozs7Ozs7OztnQkFR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akIsRUFBb0IsQ0FBcEI7QUFDSCxhQUpELE1BSU87QUFDSCxtQkFBSyxJQUFJeEIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1AsTUFBTSxDQUFDdUIsTUFBM0IsRUFBbUNoQixDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDLG9CQUFNeUIsT0FBTyxHQUFHaEMsTUFBTSxDQUFDTyxDQUFELENBQXRCOztBQUNBLG9CQUFJeUIsT0FBTyxDQUFDMUIsSUFBUixDQUFhYSxJQUFiLElBQXFCVixTQUF6QixFQUFvQztBQUNoQ1Qsa0JBQUFBLE1BQU0sQ0FBQ08sQ0FBRCxDQUFOLENBQVVELElBQVYsQ0FBZXdCLE9BQWY7QUFDQTlCLGtCQUFBQSxNQUFNLENBQUMrQixNQUFQLENBQWN4QixDQUFkLEVBQWlCLENBQWpCO0FBQ0FNLGtCQUFBQSxTQUFTLENBQUNrQixNQUFWLENBQWlCeEIsQ0FBakIsRUFBb0IsQ0FBcEI7QUFDQTtBQUNIO0FBQ0o7QUFDSjtBQUVKOzs7c0NBRW1CRSxTLEVBQTJCO0FBQzNDLGlCQUFLLElBQUlGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS1AsTUFBTCxDQUFZdUIsTUFBaEMsRUFBd0NoQixDQUFDLEVBQXpDLEVBQTZDO0FBQ3pDLGtCQUFNeUIsT0FBTyxHQUFHLEtBQUtoQyxNQUFMLENBQVlPLENBQVosQ0FBaEI7O0FBQ0Esa0JBQUl5QixPQUFPLENBQUNDLElBQVIsQ0FBYUMsS0FBYixJQUFzQnpCLFNBQTFCLEVBQXFDO0FBQ2pDLHVCQUFPdUIsT0FBUDtBQUNIO0FBQ0o7QUFDSjs7OztBQWxHRDs4QkFFb0M7QUFBRSxtQkFBTyxLQUFLRyxRQUFaO0FBQXVCOzs7NEJBQ3hDQyxDLEVBQWlCO0FBQUUsaUJBQUtELFFBQUwsR0FBZ0JDLENBQWhCO0FBQW9CO0FBRTVEOzs7OztRQU44QjNDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIGluc3RhbnRpYXRlLCBQcmVmYWIsIGdhbWUsIGxvYWRlciB9IGZyb20gJ2NjJztcbmltcG9ydCB7IExvYWRNYW5hZ2VyIH0gZnJvbSAnLi4vTG9hZC9Mb2FkTWFuYWdlcic7XG5pbXBvcnQgeyBNeUxpc3RDb21tb24gfSBmcm9tICcuLi9NeU1hdGgvTXlMaXN0Q29tbW9uJztcbmltcG9ydCB7IFBvcHVwIH0gZnJvbSAnLi9Qb3B1cCc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnUG9wdXBNYW5hZ2VyJylcbmV4cG9ydCBjbGFzcyBQb3B1cE1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKuWNleS+iyAqL1xuICAgIHByaXZhdGUgc3RhdGljIEluc3RhbmNlOiBQb3B1cE1hbmFnZXI7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgSSgpOiBQb3B1cE1hbmFnZXIgeyByZXR1cm4gdGhpcy5JbnN0YW5jZTsgfVxuICAgIHByaXZhdGUgc3RhdGljIHNldCBpKHY6IFBvcHVwTWFuYWdlcikgeyB0aGlzLkluc3RhbmNlID0gdjsgfVxuXG4gICAgLyoq5omA5pyJ5by556qX55qEUHJlZmFi55qE6ZuG5ZCIICovXG4gICAgcG9wdXBzOiBQcmVmYWJbXSA9IFtdO1xuXG4gICAgLyoqMee6p+W8ueeql+eahOmbhuWQiCAqL1xuICAgIE9uZVBvcHVwczogUG9wdXBbXSA9IFtdO1xuICAgIE9uZVBvcHVwc0FyZzogYW55W10gPSBbXTtcbiAgICAvKioy57qn5by556qX55qE6ZuG5ZCIICovXG4gICAgVHdvUG9wdXBzOiBQb3B1cFtdID0gW107XG4gICAgVHdvUG9wdXBzQXJnOiBhbnlbXSA9IFtdO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBnYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICBQb3B1cE1hbmFnZXIuaSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoUG9wdXBNYW5hZ2VyKTtcbiAgICB9XG5cbiAgICBTaG93UG9wdXAocG9wdXBOYW1lOiBzdHJpbmcsIGFyZz86IGFueSwgaXNMZXZlbDJQb3B1cDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuQWRkUG9wdXAocG9wdXBOYW1lLCBhcmcsIGlzTGV2ZWwyUG9wdXApO1xuICAgICAgICBsZXQgcG9wdXBzID0gaXNMZXZlbDJQb3B1cCA/IHRoaXMuVHdvUG9wdXBzIDogdGhpcy5PbmVQb3B1cHM7XG4gICAgICAgIGxldCBwb3B1cHNBcmcgPSBpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHNBcmcgOiB0aGlzLk9uZVBvcHVwc0FyZztcbiAgICAgICAgaWYgKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShpc0xldmVsMlBvcHVwID8gXCJ0d29cIiA6IFwib25lXCIpLmNoaWxkcmVuLmluZGV4T2YocG9wdXBzWzBdLm5vZGUpICE9IC0xKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW8ueeql1wiLCBwb3B1cHNbMF0ubmFtZSwgXCLlt7Lnu4/miZPlvIDkuoZcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoaXNMZXZlbDJQb3B1cCA/IFwidHdvXCIgOiBcIm9uZVwiKS5hZGRDaGlsZChwb3B1cHNbMF0ubm9kZSk7XG4gICAgICAgICAgICBwb3B1cHNbMF0uSW5pdChwb3B1cHNBcmdbMF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIENsb3NlUG9wdXAoaXNMZXZlbDJQb3B1cDogYm9vbGVhbiA9IGZhbHNlLCBwb3B1cE5hbWU6IHN0cmluZyA9IFwiTlVMTF9QT1BVUF9OQU1FXCIsIGFyZz86IGFueSkge1xuICAgICAgICB0aGlzLlJlbW92ZVBvcHVwKHBvcHVwTmFtZSwgaXNMZXZlbDJQb3B1cCk7XG4gICAgICAgIGxldCBwb3B1cHMgPSBpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHMgOiB0aGlzLk9uZVBvcHVwcztcbiAgICAgICAgbGV0IHBvcHVwc0FyZyA9IGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwc0FyZyA6IHRoaXMuT25lUG9wdXBzQXJnO1xuICAgICAgICBpZiAocG9wdXBzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaJgOaciVwiLCBpc0xldmVsMlBvcHVwLCBcIuW8ueeql+W3sue7j+aSreaUvuWujOavlVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoaXNMZXZlbDJQb3B1cCA/IFwidHdvXCIgOiBcIm9uZVwiKS5hZGRDaGlsZChwb3B1cHNbMF0ubm9kZSk7XG4gICAgICAgIHBvcHVwc1swXS5Jbml0KHBvcHVwc0FyZ1swXSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBBZGRQb3B1cChwb3B1cE5hbWU6IHN0cmluZywgYXJnPzogYW55LCBpc0xldmVsMlBvcHVwOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHRhcmdldFBvcHVwUHJlZmFiOiBQcmVmYWIgPSB0aGlzLkNob29zZVBvcHVwKHBvcHVwTmFtZSk7XG4gICAgICAgIGlmICghdGFyZ2V0UG9wdXBQcmVmYWIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW4ndCBmaW5kIHBvcHVwTmFtZSBcIiwgcG9wdXBOYW1lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcG9wdXBOb2RlID0gaW5zdGFudGlhdGUodGFyZ2V0UG9wdXBQcmVmYWIpO1xuICAgICAgICBsZXQgcG9wdXAgPSBwb3B1cE5vZGUuZ2V0Q29tcG9uZW50KFBvcHVwKTtcbiAgICAgICAgaWYgKCFpc0xldmVsMlBvcHVwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5PbmVQb3B1cHMuaW5kZXhPZihwb3B1cCkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW8ueeql+W3suWtmOWcqFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLk9uZVBvcHVwcy5wdXNoKHBvcHVwKTtcbiAgICAgICAgICAgIHRoaXMuT25lUG9wdXBzQXJnLnB1c2goYXJnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLlR3b1BvcHVwcy5pbmRleE9mKHBvcHVwKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5by556qX5bey5a2Y5ZyoXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvcHVwLmlzTGV2ZWwyUG9wdXAgPSBpc0xldmVsMlBvcHVwO1xuICAgICAgICAgICAgdGhpcy5Ud29Qb3B1cHMucHVzaChwb3B1cCk7XG4gICAgICAgICAgICB0aGlzLlR3b1BvcHVwc0FyZy5wdXNoKGFyZyk7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBwcml2YXRlIFJlbW92ZVBvcHVwKHBvcHVwTmFtZTogc3RyaW5nID0gXCJOVUxMX1BPUFVQX05BTUVcIiwgaXNMZXZlbDJQb3B1cDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBwb3B1cHMgPSAoaXNMZXZlbDJQb3B1cCA/IHRoaXMuVHdvUG9wdXBzIDogdGhpcy5PbmVQb3B1cHMpO1xuICAgICAgICBsZXQgcG9wdXBzQXJnID0gKGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwc0FyZyA6IHRoaXMuT25lUG9wdXBzQXJnKVxuICAgICAgICBpZiAocG9wdXBOYW1lID09IFwiTlVMTF9QT1BVUF9OQU1FXCIpIHtcbiAgICAgICAgICAgIHBvcHVwc1swXS5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHBvcHVwcy5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICBwb3B1cHNBcmcuc3BsaWNlKDAsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3B1cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gcG9wdXBzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lm5vZGUubmFtZSA9PSBwb3B1cE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBzW2ldLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICBwb3B1cHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBwb3B1cHNBcmcuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIENob29zZVBvcHVwKHBvcHVwTmFtZTogc3RyaW5nKTogUHJlZmFiIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvcHVwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMucG9wdXBzW2ldO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuZGF0YS5fbmFtZSA9PSBwb3B1cE5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG59XG4iXX0=