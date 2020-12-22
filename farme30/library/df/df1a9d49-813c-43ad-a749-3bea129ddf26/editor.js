System.register(["cce.code-quality.cr", "cc", "../../Common/Game/MyComponent.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, SpriteComponent, find, tween, Color, MyComponent, _dec, _class, _temp, _crd, ccclass, property, MainSceneUI;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfMyComponent(extras) {
    _reporterNs.report("MyComponent", "../../Common/Game/MyComponent", _context.meta, extras);
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
      SpriteComponent = _cc.SpriteComponent;
      find = _cc.find;
      tween = _cc.tween;
      Color = _cc.Color;
    }, function (_CommonGameMyComponentJs) {
      MyComponent = _CommonGameMyComponentJs.MyComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "df1a91JgTxDradJO+oSnd8m", "MainSceneUI", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MainSceneUI", MainSceneUI = (_dec = ccclass('MainSceneUI'), _dec(_class = (_temp = class MainSceneUI extends (_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "UI", null);

          _defineProperty(this, "bg", null);

          _defineProperty(this, "mainCamera", null);
        }

        Init() {
          this.InitFindNode();
          this.ShowUI();
        }

        InitFindNode() {
          this.UI = find("Canvas/UI").getComponent(SpriteComponent);
          this.bg = find("Canvas/bg").getComponent(SpriteComponent); // this.mainCamera = (find("Node/Main Camera") as Node).getComponent(CameraComponent) as CameraComponent;
        }

        ShowUI() {
          if (this.UI) {
            this.UI.color = new Color(255, 255, 255, 1);
            tween(this.UI.color).to(1, new Color(255, 255, 255, 255)).start();
          }

          if (this.bg) {
            tween(this.bg.color).to(1, new Color(255, 255, 255, 1)).start();
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL01haW5TY2VuZS9NYWluU2NlbmVVSS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiU3ByaXRlQ29tcG9uZW50IiwiZmluZCIsInR3ZWVuIiwiQ29sb3IiLCJNeUNvbXBvbmVudCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIk1haW5TY2VuZVVJIiwiSW5pdCIsIkluaXRGaW5kTm9kZSIsIlNob3dVSSIsIlVJIiwiZ2V0Q29tcG9uZW50IiwiYmciLCJjb2xvciIsInRvIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQTZCQyxNQUFBQSxlLE9BQUFBLGU7QUFBaUJDLE1BQUFBLEksT0FBQUEsSTtBQUE0Q0MsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLEssT0FBQUEsSzs7QUFDakdDLE1BQUFBLFcsNEJBQUFBLFc7Ozs7Ozs7T0FDSDtBQUFFQyxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsTyxHQUF3QlAsVTs7NkJBR2pCUSxXLFdBRFpGLE9BQU8sQ0FBQyxhQUFELEMseUJBQVIsTUFDYUUsV0FEYjtBQUFBO0FBQUEsc0NBQzZDO0FBQUE7QUFBQTs7QUFBQSxzQ0FFWixJQUZZOztBQUFBLHNDQUdaLElBSFk7O0FBQUEsOENBSUosSUFKSTtBQUFBOztBQU16Q0MsUUFBQUEsSUFBSSxHQUFHO0FBQ0gsZUFBS0MsWUFBTDtBQUNBLGVBQUtDLE1BQUw7QUFDSDs7QUFFREQsUUFBQUEsWUFBWSxHQUFHO0FBQ1gsZUFBS0UsRUFBTCxHQUFXVixJQUFJLENBQUMsV0FBRCxDQUFMLENBQTRCVyxZQUE1QixDQUF5Q1osZUFBekMsQ0FBVjtBQUNBLGVBQUthLEVBQUwsR0FBV1osSUFBSSxDQUFDLFdBQUQsQ0FBTCxDQUE0QlcsWUFBNUIsQ0FBeUNaLGVBQXpDLENBQVYsQ0FGVyxDQUdYO0FBQ0g7O0FBRURVLFFBQUFBLE1BQU0sR0FBRztBQUNMLGNBQUksS0FBS0MsRUFBVCxFQUFhO0FBQ1QsaUJBQUtBLEVBQUwsQ0FBUUcsS0FBUixHQUFnQixJQUFJWCxLQUFKLENBQVUsR0FBVixFQUFlLEdBQWYsRUFBb0IsR0FBcEIsRUFBeUIsQ0FBekIsQ0FBaEI7QUFDQUQsWUFBQUEsS0FBSyxDQUFDLEtBQUtTLEVBQUwsQ0FBUUcsS0FBVCxDQUFMLENBQXFCQyxFQUFyQixDQUF3QixDQUF4QixFQUEyQixJQUFJWixLQUFKLENBQVUsR0FBVixFQUFlLEdBQWYsRUFBb0IsR0FBcEIsRUFBeUIsR0FBekIsQ0FBM0IsRUFBMERhLEtBQTFEO0FBQ0g7O0FBQ0QsY0FBSSxLQUFLSCxFQUFULEVBQWE7QUFDVFgsWUFBQUEsS0FBSyxDQUFDLEtBQUtXLEVBQUwsQ0FBUUMsS0FBVCxDQUFMLENBQXFCQyxFQUFyQixDQUF3QixDQUF4QixFQUEyQixJQUFJWixLQUFKLENBQVUsR0FBVixFQUFlLEdBQWYsRUFBb0IsR0FBcEIsRUFBeUIsQ0FBekIsQ0FBM0IsRUFBd0RhLEtBQXhEO0FBQ0g7QUFDSjs7QUF6QndDLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFNwcml0ZUNvbXBvbmVudCwgZmluZCwgTGFiZWxDb21wb25lbnQsIEV2ZW50VG91Y2gsIGRpcmVjdG9yLCB0d2VlbiwgQ29sb3IsIENhbWVyYUNvbXBvbmVudCB9IGZyb20gJ2NjJztcbmltcG9ydCB7IE15Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vQ29tbW9uL0dhbWUvTXlDb21wb25lbnQnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ01haW5TY2VuZVVJJylcbmV4cG9ydCBjbGFzcyBNYWluU2NlbmVVSSBleHRlbmRzIE15Q29tcG9uZW50IHtcblxuICAgIFVJOiBTcHJpdGVDb21wb25lbnQgfCBudWxsID0gbnVsbDtcbiAgICBiZzogU3ByaXRlQ29tcG9uZW50IHwgbnVsbCA9IG51bGw7XG4gICAgbWFpbkNhbWVyYTogQ2FtZXJhQ29tcG9uZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgICBJbml0KCkge1xuICAgICAgICB0aGlzLkluaXRGaW5kTm9kZSgpO1xuICAgICAgICB0aGlzLlNob3dVSSgpO1xuICAgIH1cblxuICAgIEluaXRGaW5kTm9kZSgpIHtcbiAgICAgICAgdGhpcy5VSSA9IChmaW5kKFwiQ2FudmFzL1VJXCIpIGFzIE5vZGUpLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpIGFzIFNwcml0ZUNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5iZyA9IChmaW5kKFwiQ2FudmFzL2JnXCIpIGFzIE5vZGUpLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpIGFzIFNwcml0ZUNvbXBvbmVudDtcbiAgICAgICAgLy8gdGhpcy5tYWluQ2FtZXJhID0gKGZpbmQoXCJOb2RlL01haW4gQ2FtZXJhXCIpIGFzIE5vZGUpLmdldENvbXBvbmVudChDYW1lcmFDb21wb25lbnQpIGFzIENhbWVyYUNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBTaG93VUkoKSB7XG4gICAgICAgIGlmICh0aGlzLlVJKSB7XG4gICAgICAgICAgICB0aGlzLlVJLmNvbG9yID0gbmV3IENvbG9yKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgdHdlZW4odGhpcy5VSS5jb2xvcikudG8oMSwgbmV3IENvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSkpLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYmcpIHtcbiAgICAgICAgICAgIHR3ZWVuKHRoaXMuYmcuY29sb3IpLnRvKDEsIG5ldyBDb2xvcigyNTUsIDI1NSwgMjU1LCAxKSkuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuXG59XG4iXX0=