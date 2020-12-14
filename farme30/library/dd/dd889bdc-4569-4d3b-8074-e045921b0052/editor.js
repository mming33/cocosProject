System.register(["cce.code-quality.cr", "cc", "../../Common/Popup/Popup.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, LabelComponent, tween, Vec3, Popup, _dec, _class, _temp, _crd, ccclass, property, TipPopup;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfPopup(extras) {
    _reporterNs.report("Popup", "../../Common/Popup/Popup", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      LabelComponent = _cc.LabelComponent;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_CommonPopupPopupJs) {
      Popup = _CommonPopupPopupJs.Popup;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dd889vcRWlNO4B04EWSGwBS", "TipPopup", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TipPopup", TipPopup = (_dec = ccclass('TipPopup'), _dec(_class = (_temp = class TipPopup extends (_crd && Popup === void 0 ? (_reportPossibleCrUseOfPopup({
        error: Error()
      }), Popup) : Popup) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "TipString", null);

          _defineProperty(this, "YesBtnLabel", null);

          _defineProperty(this, "NoBtnLabel", null);

          _defineProperty(this, "YesBtn", null);

          _defineProperty(this, "NoBtn", null);
        }

        onEnable() {
          let tipBG = this.node.getChildByName("TipBG");
          tipBG.setPosition(0, -1000, 0);
          tween(tipBG).to(0.8, {
            position: new Vec3(0, 0, 0)
          }, {
            easing: "backOut"
          }).start();
        }

        Init(arg) {
          let tipBG = this.node.getChildByName("TipBG");
          let TipStringNode = tipBG.getChildByName("TipString");
          this.TipString = TipStringNode.getComponent(LabelComponent);
          let YesBtnLabelNode = tipBG.getChildByName("YesLabel");
          this.YesBtnLabel = YesBtnLabelNode.getComponent(LabelComponent);
          let NoBtnLabelNode = tipBG.getChildByName("NoLabel");
          this.NoBtnLabel = NoBtnLabelNode.getComponent(LabelComponent);
          this.YesBtn = tipBG.getChildByName("YesBtn");
          this.NoBtn = tipBG.getChildByName("NoBtn");
          this.YesBtn.on(Node.EventType.TOUCH_END, arg.YesBtn);
          this.NoBtn.on(Node.EventType.TOUCH_END, arg.NoBtn);
          this.TipString.string = arg.TipString + "";
          this.YesBtnLabel.string = arg.YesBtnString + "";
          this.NoBtnLabel.string = arg.NoBtnString + "";
        }

        onDisable() {
          if (this.YesBtn) this.YesBtn.targetOff(Node.EventType.TOUCH_END);
          if (this.NoBtn) this.NoBtn.targetOff(Node.EventType.TOUCH_END);
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0dhbWUvUG9wdXBzL1RpcFBvcHVwLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwiTGFiZWxDb21wb25lbnQiLCJ0d2VlbiIsIlZlYzMiLCJQb3B1cCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlRpcFBvcHVwIiwib25FbmFibGUiLCJ0aXBCRyIsIm5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsInNldFBvc2l0aW9uIiwidG8iLCJwb3NpdGlvbiIsImVhc2luZyIsInN0YXJ0IiwiSW5pdCIsImFyZyIsIlRpcFN0cmluZ05vZGUiLCJUaXBTdHJpbmciLCJnZXRDb21wb25lbnQiLCJZZXNCdG5MYWJlbE5vZGUiLCJZZXNCdG5MYWJlbCIsIk5vQnRuTGFiZWxOb2RlIiwiTm9CdG5MYWJlbCIsIlllc0J0biIsIk5vQnRuIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJzdHJpbmciLCJZZXNCdG5TdHJpbmciLCJOb0J0blN0cmluZyIsIm9uRGlzYWJsZSIsInRhcmdldE9mZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBdUJDLE1BQUFBLEksT0FBQUEsSTtBQUFtQkMsTUFBQUEsYyxPQUFBQSxjO0FBQTRCQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsSSxPQUFBQSxJOztBQUM3RUMsTUFBQUEsSyx1QkFBQUEsSzs7Ozs7OztPQUNIO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCUCxVOzswQkFHakJRLFEsV0FEWkYsT0FBTyxDQUFDLFVBQUQsQyx5QkFBUixNQUNhRSxRQURiO0FBQUE7QUFBQSwwQkFDb0M7QUFBQTtBQUFBOztBQUFBLDZDQUNXLElBRFg7O0FBQUEsK0NBRWEsSUFGYjs7QUFBQSw4Q0FHWSxJQUhaOztBQUFBLDBDQUlGLElBSkU7O0FBQUEseUNBS0gsSUFMRztBQUFBOztBQU1oQ0MsUUFBQUEsUUFBUSxHQUFHO0FBQ1AsY0FBSUMsS0FBSyxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsY0FBVixDQUF5QixPQUF6QixDQUFaO0FBQ0FGLFVBQUFBLEtBQUssQ0FBQ0csV0FBTixDQUFrQixDQUFsQixFQUFxQixDQUFFLElBQXZCLEVBQTZCLENBQTdCO0FBQ0FWLFVBQUFBLEtBQUssQ0FBQ08sS0FBRCxDQUFMLENBQWFJLEVBQWIsQ0FBZ0IsR0FBaEIsRUFBcUI7QUFBRUMsWUFBQUEsUUFBUSxFQUFFLElBQUlYLElBQUosQ0FBUyxDQUFULEVBQVksQ0FBWixFQUFlLENBQWY7QUFBWixXQUFyQixFQUFzRDtBQUFFWSxZQUFBQSxNQUFNLEVBQUU7QUFBVixXQUF0RCxFQUE2RUMsS0FBN0U7QUFDSDs7QUFDREMsUUFBQUEsSUFBSSxDQUFDQyxHQUFELEVBQVc7QUFDWCxjQUFJVCxLQUFLLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxjQUFWLENBQXlCLE9BQXpCLENBQVo7QUFDQSxjQUFJUSxhQUFhLEdBQUdWLEtBQUssQ0FBQ0UsY0FBTixDQUFxQixXQUFyQixDQUFwQjtBQUNBLGVBQUtTLFNBQUwsR0FBaUJELGFBQWEsQ0FBQ0UsWUFBZCxDQUEyQnBCLGNBQTNCLENBQWpCO0FBQ0EsY0FBSXFCLGVBQWUsR0FBR2IsS0FBSyxDQUFDRSxjQUFOLENBQXFCLFVBQXJCLENBQXRCO0FBQ0EsZUFBS1ksV0FBTCxHQUFtQkQsZUFBZSxDQUFDRCxZQUFoQixDQUE2QnBCLGNBQTdCLENBQW5CO0FBQ0EsY0FBSXVCLGNBQWMsR0FBR2YsS0FBSyxDQUFDRSxjQUFOLENBQXFCLFNBQXJCLENBQXJCO0FBQ0EsZUFBS2MsVUFBTCxHQUFrQkQsY0FBYyxDQUFDSCxZQUFmLENBQTRCcEIsY0FBNUIsQ0FBbEI7QUFDQSxlQUFLeUIsTUFBTCxHQUFjakIsS0FBSyxDQUFDRSxjQUFOLENBQXFCLFFBQXJCLENBQWQ7QUFDQSxlQUFLZ0IsS0FBTCxHQUFhbEIsS0FBSyxDQUFDRSxjQUFOLENBQXFCLE9BQXJCLENBQWI7QUFFQSxlQUFLZSxNQUFMLENBQVlFLEVBQVosQ0FBZTVCLElBQUksQ0FBQzZCLFNBQUwsQ0FBZUMsU0FBOUIsRUFBeUNaLEdBQUcsQ0FBQ1EsTUFBN0M7QUFDQSxlQUFLQyxLQUFMLENBQVdDLEVBQVgsQ0FBYzVCLElBQUksQ0FBQzZCLFNBQUwsQ0FBZUMsU0FBN0IsRUFBd0NaLEdBQUcsQ0FBQ1MsS0FBNUM7QUFDQSxlQUFLUCxTQUFMLENBQWVXLE1BQWYsR0FBd0JiLEdBQUcsQ0FBQ0UsU0FBSixHQUFnQixFQUF4QztBQUNBLGVBQUtHLFdBQUwsQ0FBaUJRLE1BQWpCLEdBQTBCYixHQUFHLENBQUNjLFlBQUosR0FBbUIsRUFBN0M7QUFDQSxlQUFLUCxVQUFMLENBQWdCTSxNQUFoQixHQUF5QmIsR0FBRyxDQUFDZSxXQUFKLEdBQWtCLEVBQTNDO0FBRUg7O0FBQ0RDLFFBQUFBLFNBQVMsR0FBRztBQUNSLGNBQUksS0FBS1IsTUFBVCxFQUNJLEtBQUtBLE1BQUwsQ0FBWVMsU0FBWixDQUFzQm5DLElBQUksQ0FBQzZCLFNBQUwsQ0FBZUMsU0FBckM7QUFDSixjQUFJLEtBQUtILEtBQVQsRUFDSSxLQUFLQSxLQUFMLENBQVdRLFNBQVgsQ0FBcUJuQyxJQUFJLENBQUM2QixTQUFMLENBQWVDLFNBQXBDO0FBQ1A7O0FBbEMrQixPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBMYWJlbCwgZmluZCwgTGFiZWxDb21wb25lbnQsIEV2ZW50VG91Y2gsIHR3ZWVuLCBWZWMzIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgUG9wdXAgfSBmcm9tICcuLi8uLi9Db21tb24vUG9wdXAvUG9wdXAnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1RpcFBvcHVwJylcbmV4cG9ydCBjbGFzcyBUaXBQb3B1cCBleHRlbmRzIFBvcHVwIHtcbiAgICBwcml2YXRlIFRpcFN0cmluZzogTGFiZWxDb21wb25lbnQgfCBudWxsID0gbnVsbDtcbiAgICBwcml2YXRlIFllc0J0bkxhYmVsOiBMYWJlbENvbXBvbmVudCB8IG51bGwgPSBudWxsO1xuICAgIHByaXZhdGUgTm9CdG5MYWJlbDogTGFiZWxDb21wb25lbnQgfCBudWxsID0gbnVsbDtcbiAgICBwcml2YXRlIFllc0J0bjogTm9kZSB8IG51bGwgPSBudWxsO1xuICAgIHByaXZhdGUgTm9CdG46IE5vZGUgfCBudWxsID0gbnVsbDtcbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgbGV0IHRpcEJHID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGlwQkdcIikgYXMgTm9kZTtcbiAgICAgICAgdGlwQkcuc2V0UG9zaXRpb24oMCwgLSAxMDAwLCAwKTtcbiAgICAgICAgdHdlZW4odGlwQkcpLnRvKDAuOCwgeyBwb3NpdGlvbjogbmV3IFZlYzMoMCwgMCwgMCkgfSwgeyBlYXNpbmc6IFwiYmFja091dFwiIH0pLnN0YXJ0KCk7XG4gICAgfVxuICAgIEluaXQoYXJnOiBhbnkpIHtcbiAgICAgICAgbGV0IHRpcEJHID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGlwQkdcIikgYXMgTm9kZTtcbiAgICAgICAgbGV0IFRpcFN0cmluZ05vZGUgPSB0aXBCRy5nZXRDaGlsZEJ5TmFtZShcIlRpcFN0cmluZ1wiKSBhcyBOb2RlO1xuICAgICAgICB0aGlzLlRpcFN0cmluZyA9IFRpcFN0cmluZ05vZGUuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KSBhcyBMYWJlbENvbXBvbmVudDtcbiAgICAgICAgbGV0IFllc0J0bkxhYmVsTm9kZSA9IHRpcEJHLmdldENoaWxkQnlOYW1lKFwiWWVzTGFiZWxcIikgYXMgTm9kZTtcbiAgICAgICAgdGhpcy5ZZXNCdG5MYWJlbCA9IFllc0J0bkxhYmVsTm9kZS5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpIGFzIExhYmVsQ29tcG9uZW50O1xuICAgICAgICBsZXQgTm9CdG5MYWJlbE5vZGUgPSB0aXBCRy5nZXRDaGlsZEJ5TmFtZShcIk5vTGFiZWxcIikgYXMgTm9kZTtcbiAgICAgICAgdGhpcy5Ob0J0bkxhYmVsID0gTm9CdG5MYWJlbE5vZGUuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KSBhcyBMYWJlbENvbXBvbmVudDtcbiAgICAgICAgdGhpcy5ZZXNCdG4gPSB0aXBCRy5nZXRDaGlsZEJ5TmFtZShcIlllc0J0blwiKSBhcyBOb2RlO1xuICAgICAgICB0aGlzLk5vQnRuID0gdGlwQkcuZ2V0Q2hpbGRCeU5hbWUoXCJOb0J0blwiKSBhcyBOb2RlO1xuXG4gICAgICAgIHRoaXMuWWVzQnRuLm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgYXJnLlllc0J0bik7XG4gICAgICAgIHRoaXMuTm9CdG4ub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBhcmcuTm9CdG4pO1xuICAgICAgICB0aGlzLlRpcFN0cmluZy5zdHJpbmcgPSBhcmcuVGlwU3RyaW5nICsgXCJcIjtcbiAgICAgICAgdGhpcy5ZZXNCdG5MYWJlbC5zdHJpbmcgPSBhcmcuWWVzQnRuU3RyaW5nICsgXCJcIjtcbiAgICAgICAgdGhpcy5Ob0J0bkxhYmVsLnN0cmluZyA9IGFyZy5Ob0J0blN0cmluZyArIFwiXCI7XG5cbiAgICB9XG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICBpZiAodGhpcy5ZZXNCdG4pXG4gICAgICAgICAgICB0aGlzLlllc0J0bi50YXJnZXRPZmYoTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKTtcbiAgICAgICAgaWYgKHRoaXMuTm9CdG4pXG4gICAgICAgICAgICB0aGlzLk5vQnRuLnRhcmdldE9mZihOb2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQpO1xuICAgIH1cblxuXG59XG4iXX0=