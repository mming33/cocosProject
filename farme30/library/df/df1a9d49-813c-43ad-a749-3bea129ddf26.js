System.register(["cce.code-quality.cr", "cc", "../../Common/Game/MyComponent.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, SpriteComponent, find, tween, Color, CameraComponent, MyComponent, _dec, _class, _temp, _crd, ccclass, property, MainSceneUI;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MainSceneUI", MainSceneUI = (_dec = ccclass('MainSceneUI'), _dec(_class = (_temp = /*#__PURE__*/function (_ref) {
        _inheritsLoose(MainSceneUI, _ref);

        function MainSceneUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _ref.call.apply(_ref, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "UI", null);

          _defineProperty(_assertThisInitialized(_this), "bg", null);

          _defineProperty(_assertThisInitialized(_this), "mainCamera", null);

          return _this;
        }

        var _proto = MainSceneUI.prototype;

        _proto.Init = function Init() {
          this.InitFindNode();
          this.ShowUI();
        };

        _proto.InitFindNode = function InitFindNode() {
          this.UI = find("Canvas/UI").getComponent(SpriteComponent);
          this.bg = find("Canvas/bg").getComponent(SpriteComponent);
          this.mainCamera = find("Main Camera").getComponent(CameraComponent);
        };

        _proto.ShowUI = function ShowUI() {
          if (this.UI) {
            this.UI.color = new Color(255, 255, 255, 1);
            tween(this.UI.color).to(1, new Color(255, 255, 255, 255)).start();
          }

          if (this.bg) {
            tween(this.bg.color).to(1, new Color(255, 255, 255, 1)).start();
          }
        };

        return MainSceneUI;
      }(_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL01haW5TY2VuZS9NYWluU2NlbmVVSS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiU3ByaXRlQ29tcG9uZW50IiwiZmluZCIsInR3ZWVuIiwiQ29sb3IiLCJDYW1lcmFDb21wb25lbnQiLCJNeUNvbXBvbmVudCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIk1haW5TY2VuZVVJIiwiSW5pdCIsIkluaXRGaW5kTm9kZSIsIlNob3dVSSIsIlVJIiwiZ2V0Q29tcG9uZW50IiwiYmciLCJtYWluQ2FtZXJhIiwiY29sb3IiLCJ0byIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBNkJDLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFBQUEsSSxPQUFBQSxJO0FBQTRDQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLGUsT0FBQUEsZTs7QUFDeEdDLE1BQUFBLFcsNEJBQUFBLFc7Ozs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQlAsVSxDQUF0Qk8sTztBQUFTQyxNQUFBQSxRLEdBQWFSLFUsQ0FBYlEsUTs7NkJBR0pDLFcsV0FEWkYsT0FBTyxDQUFDLGFBQUQsQzs7Ozs7Ozs7Ozs7OytEQUd5QixJOzsrREFDQSxJOzt1RUFDUSxJOzs7Ozs7O2VBRXJDRyxJLEdBQUEsZ0JBQU87QUFDSCxlQUFLQyxZQUFMO0FBQ0EsZUFBS0MsTUFBTDtBQUNILFM7O2VBRURELFksR0FBQSx3QkFBZTtBQUNYLGVBQUtFLEVBQUwsR0FBV1gsSUFBSSxDQUFDLFdBQUQsQ0FBTCxDQUE0QlksWUFBNUIsQ0FBeUNiLGVBQXpDLENBQVY7QUFDQSxlQUFLYyxFQUFMLEdBQVdiLElBQUksQ0FBQyxXQUFELENBQUwsQ0FBNEJZLFlBQTVCLENBQXlDYixlQUF6QyxDQUFWO0FBQ0EsZUFBS2UsVUFBTCxHQUFtQmQsSUFBSSxDQUFDLGFBQUQsQ0FBTCxDQUE4QlksWUFBOUIsQ0FBMkNULGVBQTNDLENBQWxCO0FBQ0gsUzs7ZUFFRE8sTSxHQUFBLGtCQUFTO0FBQ0wsY0FBSSxLQUFLQyxFQUFULEVBQWE7QUFDVCxpQkFBS0EsRUFBTCxDQUFRSSxLQUFSLEdBQWdCLElBQUliLEtBQUosQ0FBVSxHQUFWLEVBQWUsR0FBZixFQUFvQixHQUFwQixFQUF5QixDQUF6QixDQUFoQjtBQUNBRCxZQUFBQSxLQUFLLENBQUMsS0FBS1UsRUFBTCxDQUFRSSxLQUFULENBQUwsQ0FBcUJDLEVBQXJCLENBQXdCLENBQXhCLEVBQTJCLElBQUlkLEtBQUosQ0FBVSxHQUFWLEVBQWUsR0FBZixFQUFvQixHQUFwQixFQUF5QixHQUF6QixDQUEzQixFQUEwRGUsS0FBMUQ7QUFDSDs7QUFDRCxjQUFJLEtBQUtKLEVBQVQsRUFBYTtBQUNUWixZQUFBQSxLQUFLLENBQUMsS0FBS1ksRUFBTCxDQUFRRSxLQUFULENBQUwsQ0FBcUJDLEVBQXJCLENBQXdCLENBQXhCLEVBQTJCLElBQUlkLEtBQUosQ0FBVSxHQUFWLEVBQWUsR0FBZixFQUFvQixHQUFwQixFQUF5QixDQUF6QixDQUEzQixFQUF3RGUsS0FBeEQ7QUFDSDtBQUNKLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFNwcml0ZUNvbXBvbmVudCwgZmluZCwgTGFiZWxDb21wb25lbnQsIEV2ZW50VG91Y2gsIGRpcmVjdG9yLCB0d2VlbiwgQ29sb3IsIENhbWVyYUNvbXBvbmVudCB9IGZyb20gJ2NjJztcbmltcG9ydCB7IE15Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vQ29tbW9uL0dhbWUvTXlDb21wb25lbnQnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ01haW5TY2VuZVVJJylcbmV4cG9ydCBjbGFzcyBNYWluU2NlbmVVSSBleHRlbmRzIE15Q29tcG9uZW50IHtcblxuICAgIFVJOiBTcHJpdGVDb21wb25lbnQgfCBudWxsID0gbnVsbDtcbiAgICBiZzogU3ByaXRlQ29tcG9uZW50IHwgbnVsbCA9IG51bGw7XG4gICAgbWFpbkNhbWVyYTogQ2FtZXJhQ29tcG9uZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgICBJbml0KCkge1xuICAgICAgICB0aGlzLkluaXRGaW5kTm9kZSgpO1xuICAgICAgICB0aGlzLlNob3dVSSgpO1xuICAgIH1cblxuICAgIEluaXRGaW5kTm9kZSgpIHtcbiAgICAgICAgdGhpcy5VSSA9IChmaW5kKFwiQ2FudmFzL1VJXCIpIGFzIE5vZGUpLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpIGFzIFNwcml0ZUNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5iZyA9IChmaW5kKFwiQ2FudmFzL2JnXCIpIGFzIE5vZGUpLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpIGFzIFNwcml0ZUNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5tYWluQ2FtZXJhID0gKGZpbmQoXCJNYWluIENhbWVyYVwiKSBhcyBOb2RlKS5nZXRDb21wb25lbnQoQ2FtZXJhQ29tcG9uZW50KSBhcyBDYW1lcmFDb21wb25lbnQ7XG4gICAgfVxuXG4gICAgU2hvd1VJKCkge1xuICAgICAgICBpZiAodGhpcy5VSSkge1xuICAgICAgICAgICAgdGhpcy5VSS5jb2xvciA9IG5ldyBDb2xvcigyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgICAgIHR3ZWVuKHRoaXMuVUkuY29sb3IpLnRvKDEsIG5ldyBDb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpKS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJnKSB7XG4gICAgICAgICAgICB0d2Vlbih0aGlzLmJnLmNvbG9yKS50bygxLCBuZXcgQ29sb3IoMjU1LCAyNTUsIDI1NSwgMSkpLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG5cblxufVxuIl19