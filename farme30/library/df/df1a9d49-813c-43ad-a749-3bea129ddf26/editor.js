System.register(["cce.code-quality.cr", "cc", "../../Common/Game/MyComponent.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, SpriteComponent, find, tween, Color, CameraComponent, MyComponent, _dec, _class, _temp, _crd, ccclass, property, MainSceneUI;

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
      CameraComponent = _cc.CameraComponent;
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
          this.bg = find("Canvas/bg").getComponent(SpriteComponent);
          this.mainCamera = find("Main Camera").getComponent(CameraComponent);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL01haW5TY2VuZS9NYWluU2NlbmVVSS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiU3ByaXRlQ29tcG9uZW50IiwiZmluZCIsInR3ZWVuIiwiQ29sb3IiLCJDYW1lcmFDb21wb25lbnQiLCJNeUNvbXBvbmVudCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIk1haW5TY2VuZVVJIiwiSW5pdCIsIkluaXRGaW5kTm9kZSIsIlNob3dVSSIsIlVJIiwiZ2V0Q29tcG9uZW50IiwiYmciLCJtYWluQ2FtZXJhIiwiY29sb3IiLCJ0byIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUE2QkMsTUFBQUEsZSxPQUFBQSxlO0FBQWlCQyxNQUFBQSxJLE9BQUFBLEk7QUFBNENDLE1BQUFBLEssT0FBQUEsSztBQUFPQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsZSxPQUFBQSxlOztBQUN4R0MsTUFBQUEsVyw0QkFBQUEsVzs7Ozs7OztPQUNIO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCUixVOzs2QkFHakJTLFcsV0FEWkYsT0FBTyxDQUFDLGFBQUQsQyx5QkFBUixNQUNhRSxXQURiO0FBQUE7QUFBQSxzQ0FDNkM7QUFBQTtBQUFBOztBQUFBLHNDQUVaLElBRlk7O0FBQUEsc0NBR1osSUFIWTs7QUFBQSw4Q0FJSixJQUpJO0FBQUE7O0FBTXpDQyxRQUFBQSxJQUFJLEdBQUc7QUFDSCxlQUFLQyxZQUFMO0FBQ0EsZUFBS0MsTUFBTDtBQUNIOztBQUVERCxRQUFBQSxZQUFZLEdBQUc7QUFDWCxlQUFLRSxFQUFMLEdBQVdYLElBQUksQ0FBQyxXQUFELENBQUwsQ0FBNEJZLFlBQTVCLENBQXlDYixlQUF6QyxDQUFWO0FBQ0EsZUFBS2MsRUFBTCxHQUFXYixJQUFJLENBQUMsV0FBRCxDQUFMLENBQTRCWSxZQUE1QixDQUF5Q2IsZUFBekMsQ0FBVjtBQUNBLGVBQUtlLFVBQUwsR0FBbUJkLElBQUksQ0FBQyxhQUFELENBQUwsQ0FBOEJZLFlBQTlCLENBQTJDVCxlQUEzQyxDQUFsQjtBQUNIOztBQUVETyxRQUFBQSxNQUFNLEdBQUc7QUFDTCxjQUFJLEtBQUtDLEVBQVQsRUFBYTtBQUNULGlCQUFLQSxFQUFMLENBQVFJLEtBQVIsR0FBZ0IsSUFBSWIsS0FBSixDQUFVLEdBQVYsRUFBZSxHQUFmLEVBQW9CLEdBQXBCLEVBQXlCLENBQXpCLENBQWhCO0FBQ0FELFlBQUFBLEtBQUssQ0FBQyxLQUFLVSxFQUFMLENBQVFJLEtBQVQsQ0FBTCxDQUFxQkMsRUFBckIsQ0FBd0IsQ0FBeEIsRUFBMkIsSUFBSWQsS0FBSixDQUFVLEdBQVYsRUFBZSxHQUFmLEVBQW9CLEdBQXBCLEVBQXlCLEdBQXpCLENBQTNCLEVBQTBEZSxLQUExRDtBQUNIOztBQUNELGNBQUksS0FBS0osRUFBVCxFQUFhO0FBQ1RaLFlBQUFBLEtBQUssQ0FBQyxLQUFLWSxFQUFMLENBQVFFLEtBQVQsQ0FBTCxDQUFxQkMsRUFBckIsQ0FBd0IsQ0FBeEIsRUFBMkIsSUFBSWQsS0FBSixDQUFVLEdBQVYsRUFBZSxHQUFmLEVBQW9CLEdBQXBCLEVBQXlCLENBQXpCLENBQTNCLEVBQXdEZSxLQUF4RDtBQUNIO0FBQ0o7O0FBekJ3QyxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBTcHJpdGVDb21wb25lbnQsIGZpbmQsIExhYmVsQ29tcG9uZW50LCBFdmVudFRvdWNoLCBkaXJlY3RvciwgdHdlZW4sIENvbG9yLCBDYW1lcmFDb21wb25lbnQgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL0NvbW1vbi9HYW1lL015Q29tcG9uZW50JztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdNYWluU2NlbmVVSScpXG5leHBvcnQgY2xhc3MgTWFpblNjZW5lVUkgZXh0ZW5kcyBNeUNvbXBvbmVudCB7XG5cbiAgICBVSTogU3ByaXRlQ29tcG9uZW50IHwgbnVsbCA9IG51bGw7XG4gICAgYmc6IFNwcml0ZUNvbXBvbmVudCB8IG51bGwgPSBudWxsO1xuICAgIG1haW5DYW1lcmE6IENhbWVyYUNvbXBvbmVudCB8IG51bGwgPSBudWxsO1xuXG4gICAgSW5pdCgpIHtcbiAgICAgICAgdGhpcy5Jbml0RmluZE5vZGUoKTtcbiAgICAgICAgdGhpcy5TaG93VUkoKTtcbiAgICB9XG5cbiAgICBJbml0RmluZE5vZGUoKSB7XG4gICAgICAgIHRoaXMuVUkgPSAoZmluZChcIkNhbnZhcy9VSVwiKSBhcyBOb2RlKS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KSBhcyBTcHJpdGVDb21wb25lbnQ7XG4gICAgICAgIHRoaXMuYmcgPSAoZmluZChcIkNhbnZhcy9iZ1wiKSBhcyBOb2RlKS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KSBhcyBTcHJpdGVDb21wb25lbnQ7XG4gICAgICAgIHRoaXMubWFpbkNhbWVyYSA9IChmaW5kKFwiTWFpbiBDYW1lcmFcIikgYXMgTm9kZSkuZ2V0Q29tcG9uZW50KENhbWVyYUNvbXBvbmVudCkgYXMgQ2FtZXJhQ29tcG9uZW50O1xuICAgIH1cblxuICAgIFNob3dVSSgpIHtcbiAgICAgICAgaWYgKHRoaXMuVUkpIHtcbiAgICAgICAgICAgIHRoaXMuVUkuY29sb3IgPSBuZXcgQ29sb3IoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgICAgICB0d2Vlbih0aGlzLlVJLmNvbG9yKS50bygxLCBuZXcgQ29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KSkuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5iZykge1xuICAgICAgICAgICAgdHdlZW4odGhpcy5iZy5jb2xvcikudG8oMSwgbmV3IENvbG9yKDI1NSwgMjU1LCAyNTUsIDEpKS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG5cbn1cbiJdfQ==