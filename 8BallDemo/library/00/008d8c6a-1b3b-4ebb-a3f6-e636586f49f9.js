System.register(["cc", "code-quality:cr", "./Popup.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Prefab, instantiate, Popup, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, PopupManager;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPopup(extras) {
    _reporterNs.report("Popup", "./Popup", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_PopupJs) {
      Popup = _PopupJs.Popup;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "008d8xqGztOu6P25jZYb0n5", "PopupManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("PopupManager", PopupManager = (_dec = ccclass('PopupManager'), _dec2 = property(Prefab), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(PopupManager, _Component);

        function PopupManager() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, PopupManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PopupManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "popups", _descriptor, _assertThisInitialized(_this));

          _this.willOpenPopups = [];
          _this.nowPopup = null;
          _this.nowPopupComponent = null;
          return _this;
        }

        _createClass(PopupManager, [{
          key: "onLoad",
          value: function onLoad() {
            PopupManager.I = this.node.getComponent(PopupManager);
          }
          /**
           * 显示弹窗
           * @param canvas 弹窗要附加到的Cavans的结点
           * @param popupName 弹窗名（弹窗预制体的名字）
           * @param isLevel2Poputp 是否是2级弹窗
           */

        }, {
          key: "ShowPopup",
          value: function ShowPopup(canvas, popupName) {
            var isLevel2Poputp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (!isLevel2Poputp) {
              this.PushWillOpenPopupList(popupName);

              if (!this.nowPopup) {
                if (this.willOpenPopups.length > 0) {
                  this.nowPopup = instantiate(this.willOpenPopups[0]);
                  canvas.addChild(this.nowPopup);
                  this.nowPopupComponent = this.nowPopup.getComponent(_crd && Popup === void 0 ? (_reportPossibleCrUseOfPopup({
                    error: Error()
                  }), Popup) : Popup);
                  this.willOpenPopups.splice(0, 1);
                }
              }
            } else {
              var level2Popup = instantiate(this.ChoosePopup(popupName));
              canvas.addChild(level2Popup);
            }
          }
          /**
           * 关闭弹窗 关闭当前打开的1级弹窗（关闭二级弹窗需要指定弹窗结点）
           * @param isLevel2Poputp 是否是二级弹窗
           * @param level2Popup 二级弹窗的结点
           */

        }, {
          key: "ClosePopup",
          value: function ClosePopup(canvas) {
            var isLevel2Poputp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var level2Popup = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            if (!isLevel2Poputp) {
              this.nowPopup.destroy();
              this.nowPopup = null;
              this.nowPopupComponent = null;

              if (this.willOpenPopups.length > 0) {
                this.nowPopup = instantiate(this.willOpenPopups[0]);
                canvas.addChild(this.nowPopup);
                this.nowPopupComponent = this.nowPopup.getComponent(_crd && Popup === void 0 ? (_reportPossibleCrUseOfPopup({
                  error: Error()
                }), Popup) : Popup);
                this.willOpenPopups.splice(0, 1);
              }
            } else {
              level2Popup.destroy();
            }
          }
        }, {
          key: "PushWillOpenPopupList",
          value: function PushWillOpenPopupList(popupName) {
            for (var i = 0; i < this.popups.length; i++) {
              var element = this.popups[i];

              if (element.data._name == popupName) {
                var index = this.willOpenPopups.indexOf(element);

                if (index == -1) {
                  this.willOpenPopups.push(element);
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
        }]);

        return PopupManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "popups", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0dhbWUvUG9wdXAvUG9wdXBNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsIlBvcHVwIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiUG9wdXBNYW5hZ2VyIiwid2lsbE9wZW5Qb3B1cHMiLCJub3dQb3B1cCIsIm5vd1BvcHVwQ29tcG9uZW50IiwiSSIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJjYW52YXMiLCJwb3B1cE5hbWUiLCJpc0xldmVsMlBvcHV0cCIsIlB1c2hXaWxsT3BlblBvcHVwTGlzdCIsImxlbmd0aCIsImFkZENoaWxkIiwic3BsaWNlIiwibGV2ZWwyUG9wdXAiLCJDaG9vc2VQb3B1cCIsImRlc3Ryb3kiLCJpIiwicG9wdXBzIiwiZWxlbWVudCIsImRhdGEiLCJfbmFtZSIsImluZGV4IiwiaW5kZXhPZiIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWlCQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXOzs7O0FBQ3JDQyxNQUFBQSxLLFlBQUFBLEs7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCTCxVLENBQXRCSyxPO0FBQVNDLE1BQUFBLFEsR0FBYU4sVSxDQUFiTSxROzs4QkFHSkMsWSxXQURaRixPQUFPLENBQUMsY0FBRCxDLFVBR0hDLFFBQVEsQ0FBQ0osTUFBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBRVRNLGMsR0FBMkIsRTtnQkFFM0JDLFEsR0FBaUIsSTtnQkFFakJDLGlCLEdBQTJCLEk7Ozs7OzttQ0FFbEI7QUFDTEgsWUFBQUEsWUFBWSxDQUFDSSxD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LENBQWFDLEtBQWIsSUFBc0JiLFNBQTFCLEVBQXFDO0FBQ2pDLHVCQUFPVyxPQUFQO0FBQ0g7QUFDSjtBQUNKOzs7O1FBOUU2QnpCLFM7Ozs7O2lCQUdYLEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgaW5zdGFudGlhdGUsIGZpbmQsIFZlYzMgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBQb3B1cCB9IGZyb20gJy4vUG9wdXAnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1BvcHVwTWFuYWdlcicpXG5leHBvcnQgY2xhc3MgUG9wdXBNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgSTogUG9wdXBNYW5hZ2VyO1xuICAgIEBwcm9wZXJ0eShQcmVmYWIpXG4gICAgcG9wdXBzOiBQcmVmYWJbXSA9IFtdO1xuICAgIHdpbGxPcGVuUG9wdXBzOiBQcmVmYWJbXSA9IFtdO1xuICAgIC8qKuW9k+WJjeaJk+W8gOeahOW8ueeql+e7k+eCuSAqL1xuICAgIG5vd1BvcHVwOiBOb2RlID0gbnVsbDtcbiAgICAvKirlvZPliY3miZPlvIDnmoTlvLnnqpfnmoRQb3B1cOe7hOS7tiAqL1xuICAgIG5vd1BvcHVwQ29tcG9uZW50OiBQb3B1cCA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIFBvcHVwTWFuYWdlci5JID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChQb3B1cE1hbmFnZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmmL7npLrlvLnnqpdcbiAgICAgKiBAcGFyYW0gY2FudmFzIOW8ueeql+imgemZhOWKoOWIsOeahENhdmFuc+eahOe7k+eCuVxuICAgICAqIEBwYXJhbSBwb3B1cE5hbWUg5by556qX5ZCN77yI5by556qX6aKE5Yi25L2T55qE5ZCN5a2X77yJXG4gICAgICogQHBhcmFtIGlzTGV2ZWwyUG9wdXRwIOaYr+WQpuaYrzLnuqflvLnnqpdcbiAgICAgKi9cbiAgICBwdWJsaWMgU2hvd1BvcHVwKGNhbnZhczogTm9kZSwgcG9wdXBOYW1lOiBzdHJpbmcsIGlzTGV2ZWwyUG9wdXRwOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCFpc0xldmVsMlBvcHV0cCkge1xuICAgICAgICAgICAgdGhpcy5QdXNoV2lsbE9wZW5Qb3B1cExpc3QocG9wdXBOYW1lKVxuICAgICAgICAgICAgaWYgKCF0aGlzLm5vd1BvcHVwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMud2lsbE9wZW5Qb3B1cHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vd1BvcHVwID0gaW5zdGFudGlhdGUodGhpcy53aWxsT3BlblBvcHVwc1swXSk7XG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy5hZGRDaGlsZCh0aGlzLm5vd1BvcHVwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3dQb3B1cENvbXBvbmVudCA9IHRoaXMubm93UG9wdXAuZ2V0Q29tcG9uZW50KFBvcHVwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aWxsT3BlblBvcHVwcy5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGxldmVsMlBvcHVwID0gaW5zdGFudGlhdGUodGhpcy5DaG9vc2VQb3B1cChwb3B1cE5hbWUpKTtcbiAgICAgICAgICAgIGNhbnZhcy5hZGRDaGlsZChsZXZlbDJQb3B1cCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog5YWz6Zet5by556qXIOWFs+mXreW9k+WJjeaJk+W8gOeahDHnuqflvLnnqpfvvIjlhbPpl63kuoznuqflvLnnqpfpnIDopoHmjIflrprlvLnnqpfnu5PngrnvvIlcbiAgICAgKiBAcGFyYW0gaXNMZXZlbDJQb3B1dHAg5piv5ZCm5piv5LqM57qn5by556qXXG4gICAgICogQHBhcmFtIGxldmVsMlBvcHVwIOS6jOe6p+W8ueeql+eahOe7k+eCuVxuICAgICAqL1xuICAgIHB1YmxpYyBDbG9zZVBvcHVwKGNhbnZhczogTm9kZSwgaXNMZXZlbDJQb3B1dHA6IGJvb2xlYW4gPSBmYWxzZSwgbGV2ZWwyUG9wdXA6IE5vZGUgPSBudWxsKSB7XG4gICAgICAgIGlmICghaXNMZXZlbDJQb3B1dHApIHtcbiAgICAgICAgICAgIHRoaXMubm93UG9wdXAuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5ub3dQb3B1cCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLm5vd1BvcHVwQ29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLndpbGxPcGVuUG9wdXBzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vd1BvcHVwID0gaW5zdGFudGlhdGUodGhpcy53aWxsT3BlblBvcHVwc1swXSk7XG4gICAgICAgICAgICAgICAgY2FudmFzLmFkZENoaWxkKHRoaXMubm93UG9wdXApO1xuICAgICAgICAgICAgICAgIHRoaXMubm93UG9wdXBDb21wb25lbnQgPSB0aGlzLm5vd1BvcHVwLmdldENvbXBvbmVudChQb3B1cCk7XG4gICAgICAgICAgICAgICAgdGhpcy53aWxsT3BlblBvcHVwcy5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXZlbDJQb3B1cC5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG5cbiAgICBwcml2YXRlIFB1c2hXaWxsT3BlblBvcHVwTGlzdChwb3B1cE5hbWU6IHN0cmluZykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9wdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5wb3B1cHNbaV07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5kYXRhLl9uYW1lID09IHBvcHVwTmFtZSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMud2lsbE9wZW5Qb3B1cHMuaW5kZXhPZihlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aWxsT3BlblBvcHVwcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgQ2hvb3NlUG9wdXAocG9wdXBOYW1lOiBzdHJpbmcpOiBQcmVmYWIge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9wdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5wb3B1cHNbaV07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5kYXRhLl9uYW1lID09IHBvcHVwTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbiJdfQ==