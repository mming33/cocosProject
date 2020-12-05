System.register(["cc", "code-quality:cr", "../../Common/Popup/Popup.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, LabelComponent, tween, Vec3, Popup, _dec, _class, _crd, ccclass, property, TipPopup;

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
    _reporterNs.report("Popup", "../../Common/Popup/Popup", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      LabelComponent = _cc.LabelComponent;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_CommonPopupPopupJs) {
      Popup = _CommonPopupPopupJs.Popup;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "8ee2aVcTAVJTJgODOLgFGiQ", "TipPopup", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TipPopup", TipPopup = (_dec = ccclass('TipPopup'), _dec(_class = /*#__PURE__*/function (_ref) {
        _inherits(TipPopup, _ref);

        function TipPopup() {
          _classCallCheck(this, TipPopup);

          return _possibleConstructorReturn(this, _getPrototypeOf(TipPopup).apply(this, arguments));
        }

        _createClass(TipPopup, [{
          key: "onEnable",
          value: function onEnable() {
            var tipBG = this.node.getChildByName("TipBG");
            tipBG.setPosition(0, -1000, 0);
            tween(tipBG).to(0.8, {
              position: new Vec3(0, 0, 0)
            }, {
              easing: "backOut"
            }).start();
          }
        }, {
          key: "Init",
          value: function Init(arg) {
            this.arg = arg;
            var tipBG = this.node.getChildByName("TipBG");
            var TipStringNode = tipBG.getChildByName("TipString");
            this.TipString = TipStringNode.getComponent(LabelComponent);
            var YesBtnLabelNode = tipBG.getChildByName("YesLabel");
            this.YesBtnLabel = YesBtnLabelNode.getComponent(LabelComponent);
            var NoBtnLabelNode = tipBG.getChildByName("NoLabel");
            this.NoBtnLabel = NoBtnLabelNode.getComponent(LabelComponent);
            this.YesBtn = tipBG.getChildByName("YesBtn");
            this.NoBtn = tipBG.getChildByName("NoBtn");
            this.YesBtn.on(Node.EventType.TOUCH_END, this.arg.YesBtn);
            this.NoBtn.on(Node.EventType.TOUCH_END, this.arg.NoBtn);
            this.TipString.string = this.arg.TipString + "";
            this.YesBtnLabel.string = this.arg.YesBtnString + "";
            this.NoBtnLabel.string = this.arg.NoBtnString + "";
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            this.YesBtn.targetOff(Node.EventType.TOUCH_END);
            this.NoBtn.targetOff(Node.EventType.TOUCH_END);
          }
        }]);

        return TipPopup;
      }(_crd && Popup === void 0 ? (_reportPossibleCrUseOfPopup({
        error: Error()
      }), Popup) : Popup)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvOEJhbGwvYXNzZXRzL1NjcmlwdHMvR2FtZS9Qb3B1cHMvVGlwUG9wdXAudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIk5vZGUiLCJMYWJlbENvbXBvbmVudCIsInR3ZWVuIiwiVmVjMyIsIlBvcHVwIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiVGlwUG9wdXAiLCJ0aXBCRyIsIm5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsInNldFBvc2l0aW9uIiwidG8iLCJwb3NpdGlvbiIsImVhc2luZyIsInN0YXJ0IiwiYXJnIiwiVGlwU3RyaW5nTm9kZSIsIlRpcFN0cmluZyIsImdldENvbXBvbmVudCIsIlllc0J0bkxhYmVsTm9kZSIsIlllc0J0bkxhYmVsIiwiTm9CdG5MYWJlbE5vZGUiLCJOb0J0bkxhYmVsIiwiWWVzQnRuIiwiTm9CdG4iLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX0VORCIsInN0cmluZyIsIlllc0J0blN0cmluZyIsIk5vQnRuU3RyaW5nIiwidGFyZ2V0T2ZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBdUJDLE1BQUFBLEksT0FBQUEsSTtBQUFtQkMsTUFBQUEsYyxPQUFBQSxjO0FBQTRCQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsSSxPQUFBQSxJOzs7O0FBQzdFQyxNQUFBQSxLLHVCQUFBQSxLOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQk4sVSxDQUF0Qk0sTztBQUFTQyxNQUFBQSxRLEdBQWFQLFUsQ0FBYk8sUTs7MEJBR0pDLFEsV0FEWkYsT0FBTyxDQUFDLFVBQUQsQzs7Ozs7Ozs7Ozs7cUNBT087QUFDUCxnQkFBSUcsS0FBSyxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsY0FBVixDQUF5QixPQUF6QixDQUFaO0FBQ0FGLFlBQUFBLEtBQUssQ0FBQ0csV0FBTixDQUFrQixDQUFsQixFQUFxQixDQUFFLElBQXZCLEVBQTZCLENBQTdCO0FBQ0FULFlBQUFBLEtBQUssQ0FBQ00sS0FBRCxDQUFMLENBQWFJLEVBQWIsQ0FBZ0IsR0FBaEIsRUFBb0I7QUFBQ0MsY0FBQUEsUUFBUSxFQUFFLElBQUlWLElBQUosQ0FBUyxDQUFULEVBQVksQ0FBWixFQUFlLENBQWY7QUFBWCxhQUFwQixFQUFtRDtBQUFFVyxjQUFBQSxNQUFNLEVBQUU7QUFBVixhQUFuRCxFQUEwRUMsS0FBMUU7QUFDSDs7OytCQUVJQyxHLEVBQVU7QUFDWCxpQkFBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsZ0JBQUlSLEtBQUssR0FBRyxLQUFLQyxJQUFMLENBQVVDLGNBQVYsQ0FBeUIsT0FBekIsQ0FBWjtBQUNBLGdCQUFJTyxhQUFhLEdBQUdULEtBQUssQ0FBQ0UsY0FBTixDQUFxQixXQUFyQixDQUFwQjtBQUNBLGlCQUFLUSxTQUFMLEdBQWlCRCxhQUFhLENBQUNFLFlBQWQsQ0FBMkJsQixjQUEzQixDQUFqQjtBQUNBLGdCQUFJbUIsZUFBZSxHQUFHWixLQUFLLENBQUNFLGNBQU4sQ0FBcUIsVUFBckIsQ0FBdEI7QUFDQSxpQkFBS1csV0FBTCxHQUFtQkQsZUFBZSxDQUFDRCxZQUFoQixDQUE2QmxCLGNBQTdCLENBQW5CO0FBQ0EsZ0JBQUlxQixjQUFjLEdBQUdkLEtBQUssQ0FBQ0UsY0FBTixDQUFxQixTQUFyQixDQUFyQjtBQUNBLGlCQUFLYSxVQUFMLEdBQWtCRCxjQUFjLENBQUNILFlBQWYsQ0FBNEJsQixjQUE1QixDQUFsQjtBQUNBLGlCQUFLdUIsTUFBTCxHQUFjaEIsS0FBSyxDQUFDRSxjQUFOLENBQXFCLFFBQXJCLENBQWQ7QUFDQSxpQkFBS2UsS0FBTCxHQUFhakIsS0FBSyxDQUFDRSxjQUFOLENBQXFCLE9BQXJCLENBQWI7QUFFQSxpQkFBS2MsTUFBTCxDQUFZRSxFQUFaLENBQWUxQixJQUFJLENBQUMyQixTQUFMLENBQWVDLFNBQTlCLEVBQXlDLEtBQUtaLEdBQUwsQ0FBU1EsTUFBbEQ7QUFDQSxpQkFBS0MsS0FBTCxDQUFXQyxFQUFYLENBQWMxQixJQUFJLENBQUMyQixTQUFMLENBQWVDLFNBQTdCLEVBQXdDLEtBQUtaLEdBQUwsQ0FBU1MsS0FBakQ7QUFDQSxpQkFBS1AsU0FBTCxDQUFlVyxNQUFmLEdBQXdCLEtBQUtiLEdBQUwsQ0FBU0UsU0FBVCxHQUFxQixFQUE3QztBQUNBLGlCQUFLRyxXQUFMLENBQWlCUSxNQUFqQixHQUEwQixLQUFLYixHQUFMLENBQVNjLFlBQVQsR0FBd0IsRUFBbEQ7QUFDQSxpQkFBS1AsVUFBTCxDQUFnQk0sTUFBaEIsR0FBeUIsS0FBS2IsR0FBTCxDQUFTZSxXQUFULEdBQXVCLEVBQWhEO0FBRUg7OztzQ0FDVztBQUNSLGlCQUFLUCxNQUFMLENBQVlRLFNBQVosQ0FBc0JoQyxJQUFJLENBQUMyQixTQUFMLENBQWVDLFNBQXJDO0FBQ0EsaUJBQUtILEtBQUwsQ0FBV08sU0FBWCxDQUFxQmhDLElBQUksQ0FBQzJCLFNBQUwsQ0FBZUMsU0FBcEM7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgTGFiZWwsIGZpbmQsIExhYmVsQ29tcG9uZW50LCBFdmVudFRvdWNoLCB0d2VlbiwgVmVjMyB9IGZyb20gJ2NjJztcbmltcG9ydCB7IFBvcHVwIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1BvcHVwL1BvcHVwJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdUaXBQb3B1cCcpXG5leHBvcnQgY2xhc3MgVGlwUG9wdXAgZXh0ZW5kcyBQb3B1cCB7XG4gICAgVGlwU3RyaW5nOiBMYWJlbENvbXBvbmVudDtcbiAgICBZZXNCdG5MYWJlbDogTGFiZWxDb21wb25lbnQ7XG4gICAgTm9CdG5MYWJlbDogTGFiZWxDb21wb25lbnQ7XG4gICAgWWVzQnRuOiBOb2RlO1xuICAgIE5vQnRuOiBOb2RlO1xuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICBsZXQgdGlwQkcgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUaXBCR1wiKVxuICAgICAgICB0aXBCRy5zZXRQb3NpdGlvbigwLCAtIDEwMDAsIDApO1xuICAgICAgICB0d2Vlbih0aXBCRykudG8oMC44LHtwb3NpdGlvbjogbmV3IFZlYzMoMCwgMCwgMCl9LCB7IGVhc2luZzogXCJiYWNrT3V0XCIgfSkuc3RhcnQoKTtcbiAgICB9XG4gICAgYXJnOiBhbnk7XG4gICAgSW5pdChhcmc6IGFueSkge1xuICAgICAgICB0aGlzLmFyZyA9IGFyZztcbiAgICAgICAgbGV0IHRpcEJHID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGlwQkdcIilcbiAgICAgICAgbGV0IFRpcFN0cmluZ05vZGUgPSB0aXBCRy5nZXRDaGlsZEJ5TmFtZShcIlRpcFN0cmluZ1wiKTtcbiAgICAgICAgdGhpcy5UaXBTdHJpbmcgPSBUaXBTdHJpbmdOb2RlLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCk7XG4gICAgICAgIGxldCBZZXNCdG5MYWJlbE5vZGUgPSB0aXBCRy5nZXRDaGlsZEJ5TmFtZShcIlllc0xhYmVsXCIpO1xuICAgICAgICB0aGlzLlllc0J0bkxhYmVsID0gWWVzQnRuTGFiZWxOb2RlLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCk7XG4gICAgICAgIGxldCBOb0J0bkxhYmVsTm9kZSA9IHRpcEJHLmdldENoaWxkQnlOYW1lKFwiTm9MYWJlbFwiKTtcbiAgICAgICAgdGhpcy5Ob0J0bkxhYmVsID0gTm9CdG5MYWJlbE5vZGUuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5ZZXNCdG4gPSB0aXBCRy5nZXRDaGlsZEJ5TmFtZShcIlllc0J0blwiKTtcbiAgICAgICAgdGhpcy5Ob0J0biA9IHRpcEJHLmdldENoaWxkQnlOYW1lKFwiTm9CdG5cIik7XG5cbiAgICAgICAgdGhpcy5ZZXNCdG4ub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmFyZy5ZZXNCdG4pO1xuICAgICAgICB0aGlzLk5vQnRuLm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5hcmcuTm9CdG4pO1xuICAgICAgICB0aGlzLlRpcFN0cmluZy5zdHJpbmcgPSB0aGlzLmFyZy5UaXBTdHJpbmcgKyBcIlwiO1xuICAgICAgICB0aGlzLlllc0J0bkxhYmVsLnN0cmluZyA9IHRoaXMuYXJnLlllc0J0blN0cmluZyArIFwiXCI7XG4gICAgICAgIHRoaXMuTm9CdG5MYWJlbC5zdHJpbmcgPSB0aGlzLmFyZy5Ob0J0blN0cmluZyArIFwiXCI7XG5cbiAgICB9XG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICB0aGlzLlllc0J0bi50YXJnZXRPZmYoTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKTtcbiAgICAgICAgdGhpcy5Ob0J0bi50YXJnZXRPZmYoTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKTtcbiAgICB9XG5cblxufVxuIl19