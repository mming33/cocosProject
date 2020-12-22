System.register(["cce.code-quality.cr", "cc", "../../Common/Game/MyComponent.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, SpriteComponent, find, tween, Color, MyComponent, _dec, _class, _temp, _crd, ccclass, property, MainSceneUI;

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
          this.bg = find("Canvas/bg").getComponent(SpriteComponent); // this.mainCamera = (find("Node/Main Camera") as Node).getComponent(CameraComponent) as CameraComponent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL01haW5TY2VuZS9NYWluU2NlbmVVSS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiU3ByaXRlQ29tcG9uZW50IiwiZmluZCIsInR3ZWVuIiwiQ29sb3IiLCJNeUNvbXBvbmVudCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIk1haW5TY2VuZVVJIiwiSW5pdCIsIkluaXRGaW5kTm9kZSIsIlNob3dVSSIsIlVJIiwiZ2V0Q29tcG9uZW50IiwiYmciLCJjb2xvciIsInRvIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUE2QkMsTUFBQUEsZSxPQUFBQSxlO0FBQWlCQyxNQUFBQSxJLE9BQUFBLEk7QUFBNENDLE1BQUFBLEssT0FBQUEsSztBQUFPQyxNQUFBQSxLLE9BQUFBLEs7O0FBQ2pHQyxNQUFBQSxXLDRCQUFBQSxXOzs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JOLFUsQ0FBdEJNLE87QUFBU0MsTUFBQUEsUSxHQUFhUCxVLENBQWJPLFE7OzZCQUdKQyxXLFdBRFpGLE9BQU8sQ0FBQyxhQUFELEM7Ozs7Ozs7Ozs7OzsrREFHeUIsSTs7K0RBQ0EsSTs7dUVBQ1EsSTs7Ozs7OztlQUVyQ0csSSxHQUFBLGdCQUFPO0FBQ0gsZUFBS0MsWUFBTDtBQUNBLGVBQUtDLE1BQUw7QUFDSCxTOztlQUVERCxZLEdBQUEsd0JBQWU7QUFDWCxlQUFLRSxFQUFMLEdBQVdWLElBQUksQ0FBQyxXQUFELENBQUwsQ0FBNEJXLFlBQTVCLENBQXlDWixlQUF6QyxDQUFWO0FBQ0EsZUFBS2EsRUFBTCxHQUFXWixJQUFJLENBQUMsV0FBRCxDQUFMLENBQTRCVyxZQUE1QixDQUF5Q1osZUFBekMsQ0FBVixDQUZXLENBR1g7QUFDSCxTOztlQUVEVSxNLEdBQUEsa0JBQVM7QUFDTCxjQUFJLEtBQUtDLEVBQVQsRUFBYTtBQUNULGlCQUFLQSxFQUFMLENBQVFHLEtBQVIsR0FBZ0IsSUFBSVgsS0FBSixDQUFVLEdBQVYsRUFBZSxHQUFmLEVBQW9CLEdBQXBCLEVBQXlCLENBQXpCLENBQWhCO0FBQ0FELFlBQUFBLEtBQUssQ0FBQyxLQUFLUyxFQUFMLENBQVFHLEtBQVQsQ0FBTCxDQUFxQkMsRUFBckIsQ0FBd0IsQ0FBeEIsRUFBMkIsSUFBSVosS0FBSixDQUFVLEdBQVYsRUFBZSxHQUFmLEVBQW9CLEdBQXBCLEVBQXlCLEdBQXpCLENBQTNCLEVBQTBEYSxLQUExRDtBQUNIOztBQUNELGNBQUksS0FBS0gsRUFBVCxFQUFhO0FBQ1RYLFlBQUFBLEtBQUssQ0FBQyxLQUFLVyxFQUFMLENBQVFDLEtBQVQsQ0FBTCxDQUFxQkMsRUFBckIsQ0FBd0IsQ0FBeEIsRUFBMkIsSUFBSVosS0FBSixDQUFVLEdBQVYsRUFBZSxHQUFmLEVBQW9CLEdBQXBCLEVBQXlCLENBQXpCLENBQTNCLEVBQXdEYSxLQUF4RDtBQUNIO0FBQ0osUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgU3ByaXRlQ29tcG9uZW50LCBmaW5kLCBMYWJlbENvbXBvbmVudCwgRXZlbnRUb3VjaCwgZGlyZWN0b3IsIHR3ZWVuLCBDb2xvciwgQ2FtZXJhQ29tcG9uZW50IH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9Db21tb24vR2FtZS9NeUNvbXBvbmVudCc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnTWFpblNjZW5lVUknKVxuZXhwb3J0IGNsYXNzIE1haW5TY2VuZVVJIGV4dGVuZHMgTXlDb21wb25lbnQge1xuXG4gICAgVUk6IFNwcml0ZUNvbXBvbmVudCB8IG51bGwgPSBudWxsO1xuICAgIGJnOiBTcHJpdGVDb21wb25lbnQgfCBudWxsID0gbnVsbDtcbiAgICBtYWluQ2FtZXJhOiBDYW1lcmFDb21wb25lbnQgfCBudWxsID0gbnVsbDtcblxuICAgIEluaXQoKSB7XG4gICAgICAgIHRoaXMuSW5pdEZpbmROb2RlKCk7XG4gICAgICAgIHRoaXMuU2hvd1VJKCk7XG4gICAgfVxuXG4gICAgSW5pdEZpbmROb2RlKCkge1xuICAgICAgICB0aGlzLlVJID0gKGZpbmQoXCJDYW52YXMvVUlcIikgYXMgTm9kZSkuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkgYXMgU3ByaXRlQ29tcG9uZW50O1xuICAgICAgICB0aGlzLmJnID0gKGZpbmQoXCJDYW52YXMvYmdcIikgYXMgTm9kZSkuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkgYXMgU3ByaXRlQ29tcG9uZW50O1xuICAgICAgICAvLyB0aGlzLm1haW5DYW1lcmEgPSAoZmluZChcIk5vZGUvTWFpbiBDYW1lcmFcIikgYXMgTm9kZSkuZ2V0Q29tcG9uZW50KENhbWVyYUNvbXBvbmVudCkgYXMgQ2FtZXJhQ29tcG9uZW50O1xuICAgIH1cblxuICAgIFNob3dVSSgpIHtcbiAgICAgICAgaWYgKHRoaXMuVUkpIHtcbiAgICAgICAgICAgIHRoaXMuVUkuY29sb3IgPSBuZXcgQ29sb3IoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgICAgICB0d2Vlbih0aGlzLlVJLmNvbG9yKS50bygxLCBuZXcgQ29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KSkuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5iZykge1xuICAgICAgICAgICAgdHdlZW4odGhpcy5iZy5jb2xvcikudG8oMSwgbmV3IENvbG9yKDI1NSwgMjU1LCAyNTUsIDEpKS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG5cbn1cbiJdfQ==