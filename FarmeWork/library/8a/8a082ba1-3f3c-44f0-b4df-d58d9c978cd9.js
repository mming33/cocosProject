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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9Qb3B1cC9Qb3B1cE1hbmFnZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsImluc3RhbnRpYXRlIiwiZ2FtZSIsIlBvcHVwIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiUG9wdXBNYW5hZ2VyIiwicG9wdXBzIiwiT25lUG9wdXBzIiwiT25lUG9wdXBzQXJnIiwiVHdvUG9wdXBzIiwiVHdvUG9wdXBzQXJnIiwiYWRkUGVyc2lzdFJvb3ROb2RlIiwibm9kZSIsImkiLCJnZXRDb21wb25lbnQiLCJwb3B1cE5hbWUiLCJhcmciLCJpc0xldmVsMlBvcHVwIiwiQWRkUG9wdXAiLCJwb3B1cHNBcmciLCJnZXRDaGlsZEJ5TmFtZSIsImNoaWxkcmVuIiwiaW5kZXhPZiIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiYWRkQ2hpbGQiLCJJbml0IiwiUmVtb3ZlUG9wdXAiLCJsZW5ndGgiLCJ0YXJnZXRQb3B1cFByZWZhYiIsIkNob29zZVBvcHVwIiwiZXJyb3IiLCJwb3B1cE5vZGUiLCJwb3B1cCIsInB1c2giLCJkZXN0cm95Iiwic3BsaWNlIiwiZWxlbWVudCIsImRhdGEiLCJfbmFtZSIsIkluc3RhbmNlIiwidiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLFcsT0FBQUEsVztBQUFxQkMsTUFBQUEsSSxPQUFBQSxJOzs7O0FBR2xEQyxNQUFBQSxLLFlBQUFBLEs7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCTCxVLENBQXRCSyxPO0FBQVNDLE1BQUFBLFEsR0FBYU4sVSxDQUFiTSxROzs4QkFHSkMsWSxXQURaRixPQUFPLENBQUMsY0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7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LENBQWpCLEVBQW9CLENBQXBCO0FBQ0gsYUFKRCxNQUlPO0FBQ0gsbUJBQUssSUFBSXhCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdQLE1BQU0sQ0FBQ3VCLE1BQTNCLEVBQW1DaEIsQ0FBQyxFQUFwQyxFQUF3QztBQUNwQyxvQkFBTXlCLE9BQU8sR0FBR2hDLE1BQU0sQ0FBQ08sQ0FBRCxDQUF0Qjs7QUFDQSxvQkFBSXlCLE9BQU8sQ0FBQzFCLElBQVIsQ0FBYWEsSUFBYixJQUFxQlYsU0FBekIsRUFBb0M7QUFDaENULGtCQUFBQSxNQUFNLENBQUNPLENBQUQsQ0FBTixDQUFVRCxJQUFWLENBQWV3QixPQUFmO0FBQ0E5QixrQkFBQUEsTUFBTSxDQUFDK0IsTUFBUCxDQUFjeEIsQ0FBZCxFQUFpQixDQUFqQjtBQUNBTSxrQkFBQUEsU0FBUyxDQUFDa0IsTUFBVixDQUFpQnhCLENBQWpCLEVBQW9CLENBQXBCO0FBQ0E7QUFDSDtBQUNKO0FBQ0o7QUFFSjs7O3NDQUVtQkUsUyxFQUEyQjtBQUMzQyxpQkFBSyxJQUFJRixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtQLE1BQUwsQ0FBWXVCLE1BQWhDLEVBQXdDaEIsQ0FBQyxFQUF6QyxFQUE2QztBQUN6QyxrQkFBTXlCLE9BQU8sR0FBRyxLQUFLaEMsTUFBTCxDQUFZTyxDQUFaLENBQWhCOztBQUNBLGtCQUFJeUIsT0FBTyxDQUFDQyxJQUFSLENBQWFDLEtBQWIsSUFBc0J6QixTQUExQixFQUFxQztBQUNqQyx1QkFBT3VCLE9BQVA7QUFDSDtBQUNKO0FBQ0o7Ozs7QUFsR0Q7OEJBRW9DO0FBQUUsbUJBQU8sS0FBS0csUUFBWjtBQUF1Qjs7OzRCQUN4Q0MsQyxFQUFpQjtBQUFFLGlCQUFLRCxRQUFMLEdBQWdCQyxDQUFoQjtBQUFvQjtBQUU1RDs7Ozs7UUFOOEIzQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBpbnN0YW50aWF0ZSwgUHJlZmFiLCBnYW1lLCBsb2FkZXIgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBMb2FkTWFuYWdlciB9IGZyb20gJy4uL0xvYWQvTG9hZE1hbmFnZXInO1xuaW1wb3J0IHsgTXlMaXN0Q29tbW9uIH0gZnJvbSAnLi4vTXlNYXRoL015TGlzdENvbW1vbic7XG5pbXBvcnQgeyBQb3B1cCB9IGZyb20gJy4vUG9wdXAnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1BvcHVwTWFuYWdlcicpXG5leHBvcnQgY2xhc3MgUG9wdXBNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKirljZXkvosgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBJbnN0YW5jZTogUG9wdXBNYW5hZ2VyO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEkoKTogUG9wdXBNYW5hZ2VyIHsgcmV0dXJuIHRoaXMuSW5zdGFuY2U7IH1cbiAgICBwcml2YXRlIHN0YXRpYyBzZXQgaSh2OiBQb3B1cE1hbmFnZXIpIHsgdGhpcy5JbnN0YW5jZSA9IHY7IH1cblxuICAgIC8qKuaJgOacieW8ueeql+eahFByZWZhYueahOmbhuWQiCAqL1xuICAgIHBvcHVwczogUHJlZmFiW10gPSBbXTtcblxuICAgIC8qKjHnuqflvLnnqpfnmoTpm4blkIggKi9cbiAgICBPbmVQb3B1cHM6IFBvcHVwW10gPSBbXTtcbiAgICBPbmVQb3B1cHNBcmc6IGFueVtdID0gW107XG4gICAgLyoqMue6p+W8ueeql+eahOmbhuWQiCAqL1xuICAgIFR3b1BvcHVwczogUG9wdXBbXSA9IFtdO1xuICAgIFR3b1BvcHVwc0FyZzogYW55W10gPSBbXTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcbiAgICAgICAgUG9wdXBNYW5hZ2VyLmkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFBvcHVwTWFuYWdlcik7XG4gICAgfVxuXG4gICAgU2hvd1BvcHVwKHBvcHVwTmFtZTogc3RyaW5nLCBhcmc/OiBhbnksIGlzTGV2ZWwyUG9wdXA6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLkFkZFBvcHVwKHBvcHVwTmFtZSwgYXJnLCBpc0xldmVsMlBvcHVwKTtcbiAgICAgICAgbGV0IHBvcHVwcyA9IGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwcyA6IHRoaXMuT25lUG9wdXBzO1xuICAgICAgICBsZXQgcG9wdXBzQXJnID0gaXNMZXZlbDJQb3B1cCA/IHRoaXMuVHdvUG9wdXBzQXJnIDogdGhpcy5PbmVQb3B1cHNBcmc7XG4gICAgICAgIGlmICh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoaXNMZXZlbDJQb3B1cCA/IFwidHdvXCIgOiBcIm9uZVwiKS5jaGlsZHJlbi5pbmRleE9mKHBvcHVwc1swXS5ub2RlKSAhPSAtMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlvLnnqpdcIiwgcG9wdXBzWzBdLm5hbWUsIFwi5bey57uP5omT5byA5LqGXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGlzTGV2ZWwyUG9wdXAgPyBcInR3b1wiIDogXCJvbmVcIikuYWRkQ2hpbGQocG9wdXBzWzBdLm5vZGUpO1xuICAgICAgICAgICAgcG9wdXBzWzBdLkluaXQocG9wdXBzQXJnWzBdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBDbG9zZVBvcHVwKGlzTGV2ZWwyUG9wdXA6IGJvb2xlYW4gPSBmYWxzZSwgcG9wdXBOYW1lOiBzdHJpbmcgPSBcIk5VTExfUE9QVVBfTkFNRVwiLCBhcmc/OiBhbnkpIHtcbiAgICAgICAgdGhpcy5SZW1vdmVQb3B1cChwb3B1cE5hbWUsIGlzTGV2ZWwyUG9wdXApO1xuICAgICAgICBsZXQgcG9wdXBzID0gaXNMZXZlbDJQb3B1cCA/IHRoaXMuVHdvUG9wdXBzIDogdGhpcy5PbmVQb3B1cHM7XG4gICAgICAgIGxldCBwb3B1cHNBcmcgPSBpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHNBcmcgOiB0aGlzLk9uZVBvcHVwc0FyZztcbiAgICAgICAgaWYgKHBvcHVwcy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmiYDmnIlcIiwgaXNMZXZlbDJQb3B1cCwgXCLlvLnnqpflt7Lnu4/mkq3mlL7lrozmr5VcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKGlzTGV2ZWwyUG9wdXAgPyBcInR3b1wiIDogXCJvbmVcIikuYWRkQ2hpbGQocG9wdXBzWzBdLm5vZGUpO1xuICAgICAgICBwb3B1cHNbMF0uSW5pdChwb3B1cHNBcmdbMF0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgQWRkUG9wdXAocG9wdXBOYW1lOiBzdHJpbmcsIGFyZz86IGFueSwgaXNMZXZlbDJQb3B1cDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCB0YXJnZXRQb3B1cFByZWZhYjogUHJlZmFiID0gdGhpcy5DaG9vc2VQb3B1cChwb3B1cE5hbWUpO1xuICAgICAgICBpZiAoIXRhcmdldFBvcHVwUHJlZmFiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FuJ3QgZmluZCBwb3B1cE5hbWUgXCIsIHBvcHVwTmFtZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBvcHVwTm9kZSA9IGluc3RhbnRpYXRlKHRhcmdldFBvcHVwUHJlZmFiKTtcbiAgICAgICAgbGV0IHBvcHVwID0gcG9wdXBOb2RlLmdldENvbXBvbmVudChQb3B1cCk7XG4gICAgICAgIGlmICghaXNMZXZlbDJQb3B1cCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuT25lUG9wdXBzLmluZGV4T2YocG9wdXApICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlvLnnqpflt7LlrZjlnKhcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5PbmVQb3B1cHMucHVzaChwb3B1cCk7XG4gICAgICAgICAgICB0aGlzLk9uZVBvcHVwc0FyZy5wdXNoKGFyZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5Ud29Qb3B1cHMuaW5kZXhPZihwb3B1cCkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW8ueeql+W3suWtmOWcqFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb3B1cC5pc0xldmVsMlBvcHVwID0gaXNMZXZlbDJQb3B1cDtcbiAgICAgICAgICAgIHRoaXMuVHdvUG9wdXBzLnB1c2gocG9wdXApO1xuICAgICAgICAgICAgdGhpcy5Ud29Qb3B1cHNBcmcucHVzaChhcmcpO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgcHJpdmF0ZSBSZW1vdmVQb3B1cChwb3B1cE5hbWU6IHN0cmluZyA9IFwiTlVMTF9QT1BVUF9OQU1FXCIsIGlzTGV2ZWwyUG9wdXA6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgcG9wdXBzID0gKGlzTGV2ZWwyUG9wdXAgPyB0aGlzLlR3b1BvcHVwcyA6IHRoaXMuT25lUG9wdXBzKTtcbiAgICAgICAgbGV0IHBvcHVwc0FyZyA9IChpc0xldmVsMlBvcHVwID8gdGhpcy5Ud29Qb3B1cHNBcmcgOiB0aGlzLk9uZVBvcHVwc0FyZylcbiAgICAgICAgaWYgKHBvcHVwTmFtZSA9PSBcIk5VTExfUE9QVVBfTkFNRVwiKSB7XG4gICAgICAgICAgICBwb3B1cHNbMF0ubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICBwb3B1cHMuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgcG9wdXBzQXJnLnNwbGljZSgwLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9wdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHBvcHVwc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5ub2RlLm5hbWUgPT0gcG9wdXBOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwc1tpXS5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgcG9wdXBzQXJnLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBDaG9vc2VQb3B1cChwb3B1cE5hbWU6IHN0cmluZyk6IFByZWZhYiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wb3B1cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnBvcHVwc1tpXTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmRhdGEuX25hbWUgPT0gcG9wdXBOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuIl19