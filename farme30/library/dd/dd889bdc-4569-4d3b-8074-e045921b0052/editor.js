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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1BvcHVwcy9UaXBQb3B1cC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiTm9kZSIsIkxhYmVsQ29tcG9uZW50IiwidHdlZW4iLCJWZWMzIiwiUG9wdXAiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJUaXBQb3B1cCIsIm9uRW5hYmxlIiwidGlwQkciLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJzZXRQb3NpdGlvbiIsInRvIiwicG9zaXRpb24iLCJlYXNpbmciLCJzdGFydCIsIkluaXQiLCJhcmciLCJUaXBTdHJpbmdOb2RlIiwiVGlwU3RyaW5nIiwiZ2V0Q29tcG9uZW50IiwiWWVzQnRuTGFiZWxOb2RlIiwiWWVzQnRuTGFiZWwiLCJOb0J0bkxhYmVsTm9kZSIsIk5vQnRuTGFiZWwiLCJZZXNCdG4iLCJOb0J0biIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfRU5EIiwic3RyaW5nIiwiWWVzQnRuU3RyaW5nIiwiTm9CdG5TdHJpbmciLCJvbkRpc2FibGUiLCJ0YXJnZXRPZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQXVCQyxNQUFBQSxJLE9BQUFBLEk7QUFBbUJDLE1BQUFBLGMsT0FBQUEsYztBQUE0QkMsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLEksT0FBQUEsSTs7QUFDN0VDLE1BQUFBLEssdUJBQUFBLEs7Ozs7Ozs7T0FDSDtBQUFFQyxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsTyxHQUF3QlAsVTs7MEJBR2pCUSxRLFdBRFpGLE9BQU8sQ0FBQyxVQUFELEMseUJBQVIsTUFDYUUsUUFEYjtBQUFBO0FBQUEsMEJBQ29DO0FBQUE7QUFBQTs7QUFBQSw2Q0FDVyxJQURYOztBQUFBLCtDQUVhLElBRmI7O0FBQUEsOENBR1ksSUFIWjs7QUFBQSwwQ0FJRixJQUpFOztBQUFBLHlDQUtILElBTEc7QUFBQTs7QUFNaENDLFFBQUFBLFFBQVEsR0FBRztBQUNQLGNBQUlDLEtBQUssR0FBRyxLQUFLQyxJQUFMLENBQVVDLGNBQVYsQ0FBeUIsT0FBekIsQ0FBWjtBQUNBRixVQUFBQSxLQUFLLENBQUNHLFdBQU4sQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBRSxJQUF2QixFQUE2QixDQUE3QjtBQUNBVixVQUFBQSxLQUFLLENBQUNPLEtBQUQsQ0FBTCxDQUFhSSxFQUFiLENBQWdCLEdBQWhCLEVBQXFCO0FBQUVDLFlBQUFBLFFBQVEsRUFBRSxJQUFJWCxJQUFKLENBQVMsQ0FBVCxFQUFZLENBQVosRUFBZSxDQUFmO0FBQVosV0FBckIsRUFBc0Q7QUFBRVksWUFBQUEsTUFBTSxFQUFFO0FBQVYsV0FBdEQsRUFBNkVDLEtBQTdFO0FBQ0g7O0FBQ0RDLFFBQUFBLElBQUksQ0FBQ0MsR0FBRCxFQUFXO0FBQ1gsY0FBSVQsS0FBSyxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsY0FBVixDQUF5QixPQUF6QixDQUFaO0FBQ0EsY0FBSVEsYUFBYSxHQUFHVixLQUFLLENBQUNFLGNBQU4sQ0FBcUIsV0FBckIsQ0FBcEI7QUFDQSxlQUFLUyxTQUFMLEdBQWlCRCxhQUFhLENBQUNFLFlBQWQsQ0FBMkJwQixjQUEzQixDQUFqQjtBQUNBLGNBQUlxQixlQUFlLEdBQUdiLEtBQUssQ0FBQ0UsY0FBTixDQUFxQixVQUFyQixDQUF0QjtBQUNBLGVBQUtZLFdBQUwsR0FBbUJELGVBQWUsQ0FBQ0QsWUFBaEIsQ0FBNkJwQixjQUE3QixDQUFuQjtBQUNBLGNBQUl1QixjQUFjLEdBQUdmLEtBQUssQ0FBQ0UsY0FBTixDQUFxQixTQUFyQixDQUFyQjtBQUNBLGVBQUtjLFVBQUwsR0FBa0JELGNBQWMsQ0FBQ0gsWUFBZixDQUE0QnBCLGNBQTVCLENBQWxCO0FBQ0EsZUFBS3lCLE1BQUwsR0FBY2pCLEtBQUssQ0FBQ0UsY0FBTixDQUFxQixRQUFyQixDQUFkO0FBQ0EsZUFBS2dCLEtBQUwsR0FBYWxCLEtBQUssQ0FBQ0UsY0FBTixDQUFxQixPQUFyQixDQUFiO0FBRUEsZUFBS2UsTUFBTCxDQUFZRSxFQUFaLENBQWU1QixJQUFJLENBQUM2QixTQUFMLENBQWVDLFNBQTlCLEVBQXlDWixHQUFHLENBQUNRLE1BQTdDO0FBQ0EsZUFBS0MsS0FBTCxDQUFXQyxFQUFYLENBQWM1QixJQUFJLENBQUM2QixTQUFMLENBQWVDLFNBQTdCLEVBQXdDWixHQUFHLENBQUNTLEtBQTVDO0FBQ0EsZUFBS1AsU0FBTCxDQUFlVyxNQUFmLEdBQXdCYixHQUFHLENBQUNFLFNBQUosR0FBZ0IsRUFBeEM7QUFDQSxlQUFLRyxXQUFMLENBQWlCUSxNQUFqQixHQUEwQmIsR0FBRyxDQUFDYyxZQUFKLEdBQW1CLEVBQTdDO0FBQ0EsZUFBS1AsVUFBTCxDQUFnQk0sTUFBaEIsR0FBeUJiLEdBQUcsQ0FBQ2UsV0FBSixHQUFrQixFQUEzQztBQUVIOztBQUNEQyxRQUFBQSxTQUFTLEdBQUc7QUFDUixjQUFJLEtBQUtSLE1BQVQsRUFDSSxLQUFLQSxNQUFMLENBQVlTLFNBQVosQ0FBc0JuQyxJQUFJLENBQUM2QixTQUFMLENBQWVDLFNBQXJDO0FBQ0osY0FBSSxLQUFLSCxLQUFULEVBQ0ksS0FBS0EsS0FBTCxDQUFXUSxTQUFYLENBQXFCbkMsSUFBSSxDQUFDNkIsU0FBTCxDQUFlQyxTQUFwQztBQUNQOztBQWxDK0IsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgTGFiZWwsIGZpbmQsIExhYmVsQ29tcG9uZW50LCBFdmVudFRvdWNoLCB0d2VlbiwgVmVjMyB9IGZyb20gJ2NjJztcbmltcG9ydCB7IFBvcHVwIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1BvcHVwL1BvcHVwJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdUaXBQb3B1cCcpXG5leHBvcnQgY2xhc3MgVGlwUG9wdXAgZXh0ZW5kcyBQb3B1cCB7XG4gICAgcHJpdmF0ZSBUaXBTdHJpbmc6IExhYmVsQ29tcG9uZW50IHwgbnVsbCA9IG51bGw7XG4gICAgcHJpdmF0ZSBZZXNCdG5MYWJlbDogTGFiZWxDb21wb25lbnQgfCBudWxsID0gbnVsbDtcbiAgICBwcml2YXRlIE5vQnRuTGFiZWw6IExhYmVsQ29tcG9uZW50IHwgbnVsbCA9IG51bGw7XG4gICAgcHJpdmF0ZSBZZXNCdG46IE5vZGUgfCBudWxsID0gbnVsbDtcbiAgICBwcml2YXRlIE5vQnRuOiBOb2RlIHwgbnVsbCA9IG51bGw7XG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIGxldCB0aXBCRyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRpcEJHXCIpIGFzIE5vZGU7XG4gICAgICAgIHRpcEJHLnNldFBvc2l0aW9uKDAsIC0gMTAwMCwgMCk7XG4gICAgICAgIHR3ZWVuKHRpcEJHKS50bygwLjgsIHsgcG9zaXRpb246IG5ldyBWZWMzKDAsIDAsIDApIH0sIHsgZWFzaW5nOiBcImJhY2tPdXRcIiB9KS5zdGFydCgpO1xuICAgIH1cbiAgICBJbml0KGFyZzogYW55KSB7XG4gICAgICAgIGxldCB0aXBCRyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRpcEJHXCIpIGFzIE5vZGU7XG4gICAgICAgIGxldCBUaXBTdHJpbmdOb2RlID0gdGlwQkcuZ2V0Q2hpbGRCeU5hbWUoXCJUaXBTdHJpbmdcIikgYXMgTm9kZTtcbiAgICAgICAgdGhpcy5UaXBTdHJpbmcgPSBUaXBTdHJpbmdOb2RlLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkgYXMgTGFiZWxDb21wb25lbnQ7XG4gICAgICAgIGxldCBZZXNCdG5MYWJlbE5vZGUgPSB0aXBCRy5nZXRDaGlsZEJ5TmFtZShcIlllc0xhYmVsXCIpIGFzIE5vZGU7XG4gICAgICAgIHRoaXMuWWVzQnRuTGFiZWwgPSBZZXNCdG5MYWJlbE5vZGUuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KSBhcyBMYWJlbENvbXBvbmVudDtcbiAgICAgICAgbGV0IE5vQnRuTGFiZWxOb2RlID0gdGlwQkcuZ2V0Q2hpbGRCeU5hbWUoXCJOb0xhYmVsXCIpIGFzIE5vZGU7XG4gICAgICAgIHRoaXMuTm9CdG5MYWJlbCA9IE5vQnRuTGFiZWxOb2RlLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkgYXMgTGFiZWxDb21wb25lbnQ7XG4gICAgICAgIHRoaXMuWWVzQnRuID0gdGlwQkcuZ2V0Q2hpbGRCeU5hbWUoXCJZZXNCdG5cIikgYXMgTm9kZTtcbiAgICAgICAgdGhpcy5Ob0J0biA9IHRpcEJHLmdldENoaWxkQnlOYW1lKFwiTm9CdG5cIikgYXMgTm9kZTtcblxuICAgICAgICB0aGlzLlllc0J0bi5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGFyZy5ZZXNCdG4pO1xuICAgICAgICB0aGlzLk5vQnRuLm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgYXJnLk5vQnRuKTtcbiAgICAgICAgdGhpcy5UaXBTdHJpbmcuc3RyaW5nID0gYXJnLlRpcFN0cmluZyArIFwiXCI7XG4gICAgICAgIHRoaXMuWWVzQnRuTGFiZWwuc3RyaW5nID0gYXJnLlllc0J0blN0cmluZyArIFwiXCI7XG4gICAgICAgIHRoaXMuTm9CdG5MYWJlbC5zdHJpbmcgPSBhcmcuTm9CdG5TdHJpbmcgKyBcIlwiO1xuXG4gICAgfVxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuWWVzQnRuKVxuICAgICAgICAgICAgdGhpcy5ZZXNCdG4udGFyZ2V0T2ZmKE5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCk7XG4gICAgICAgIGlmICh0aGlzLk5vQnRuKVxuICAgICAgICAgICAgdGhpcy5Ob0J0bi50YXJnZXRPZmYoTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKTtcbiAgICB9XG5cblxufVxuIl19