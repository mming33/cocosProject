System.register(["cc", "code-quality:cr", "../Game/GameData.js", "../Game/Popup/PopupManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, tween, Vec3, SpriteComponent, Color, find, CCString, GameData, PopupManager, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, LoadAnimation;

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

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../Game/GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopupManager(extras) {
    _reporterNs.report("PopupManager", "../Game/Popup/PopupManager", _context.meta, extras);
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
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      SpriteComponent = _cc.SpriteComponent;
      Color = _cc.Color;
      find = _cc.find;
      CCString = _cc.CCString;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GameGameDataJs) {
      GameData = _GameGameDataJs.GameData;
    }, function (_GamePopupPopupManagerJs) {
      PopupManager = _GamePopupPopupManagerJs.PopupManager;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "e22a9tdP0pM1IPGpqdoldK6", "LoadAnimation", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("LoadAnimation", LoadAnimation = (_dec = ccclass('LoadAnimation'), _dec2 = property(CCString), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(LoadAnimation, _Component);

        function LoadAnimation() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, LoadAnimation);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LoadAnimation)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "type", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(LoadAnimation, [{
          key: "start",
          value: function start() {
            switch (this.type) {
              case "MatchingPopup":
                this.MatchingPopupAnimation(this.node);
                break;

              case "Win":
                this.WinAnimation(this.node);
                break;

              case "Lose":
                this.LoseAnimation(this.node);
                break;

              default:
                break;
            }
          }
        }, {
          key: "MainSceneTitleAnimation",
          value: function MainSceneTitleAnimation(node) {}
        }, {
          key: "MatchingPopupAnimation",
          value: function MatchingPopupAnimation(node) {
            var redstartX;
            var bluestartX;
            var redEndX;
            var blueEndX; // let anima = this.node.getChildByName("Animation");

            var BGcolor = this.node.getChildByName("BG").getComponent(SpriteComponent).color;
            var GloadBGcolor = this.node.getChildByName("GloadBG").getComponent(SpriteComponent).color;
            var Top1Color = this.node.getChildByName("Top1").getComponent(SpriteComponent).color;
            var Top2Color = this.node.getChildByName("Top2").getComponent(SpriteComponent).color;
            var red = this.node.getChildByName("red");
            var redcolor = red.getComponent(SpriteComponent).color;
            var blue = this.node.getChildByName("blue");
            var bluecolor = blue.getComponent(SpriteComponent).color;
            var rectangle1 = this.node.getChildByName("Rectangle1");
            var rectangle2 = this.node.getChildByName("Rectangle2");
            var rectangle3 = this.node.getChildByName("Rectangle3"); // let light: Node = this.node.getChildByName("light");
            // let lightColor: Color = light.getComponent(SpriteComponent).color;

            var vs = this.node.getChildByName("vs");
            var vscolor = vs.getComponent(SpriteComponent).color;
            var redlight = red.getChildByName("redlight");
            var redlightcolor = red.getChildByName("redlight").getComponent(SpriteComponent).color;
            var bluelight = blue.getChildByName("bluelight");
            var bluelightcolor = blue.getChildByName("bluelight").getComponent(SpriteComponent).color;

            if ((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).I.loadData.thisPlayer == 0) {
              red.scale = new Vec3(1, 1, 1);
              blue.scale = new Vec3(1, 1, 1);
              redstartX = -1300;
              bluestartX = 1300;
              redEndX = -280;
              blueEndX = 280;
            } else {
              red.scale = new Vec3(-1, -1, 1);
              blue.scale = new Vec3(-1, -1, 1);
              redstartX = 1300;
              bluestartX = -1300;
              redEndX = 280;
              blueEndX = -280;
            }

            red.position = new Vec3(redstartX, 16, 0);
            blue.position = new Vec3(bluestartX, 16, 0);
            tween(red).to(0.3, {
              position: new Vec3(redEndX, 16, 0)
            }, {
              easing: "sineIn"
            }).start();
            tween(blue).to(0.3, {
              position: new Vec3(blueEndX, 16, 0)
            }, {
              easing: "sineIn"
            }).start();
            tween(redlightcolor).delay(0.3).to(0.3, new Color(255, 255, 255, 255)).union().start();
            tween(bluelightcolor).delay(0.3).to(0.3, new Color(255, 255, 255, 255)).union().start();
            tween(rectangle1).delay(0.3).to(0.5, {
              scale: new Vec3(12, 12, 12)
            }, {
              easing: "sineIn"
            }).union().start();
            tween(rectangle2).delay(0.4).to(0.54, {
              scale: new Vec3(12, 12, 12)
            }, {
              easing: "sineIn"
            }).union().start();
            tween(rectangle3).delay(0.5).to(0.6, {
              scale: new Vec3(12, 12, 12)
            }, {
              easing: "sineIn"
            }).union().start(); // tween(light).delay(0.25).to(0.3, { scale: new Vec3(1, 1, 1) }, { easing: "sineIn" }).union().start();

            tween(vs).delay(0.25).to(0.3, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: "sineIn"
            }).union().start();
            tween(vscolor).delay(0.25).to(0.25, new Color(255, 255, 255, 255), {
              easing: "sineIn"
            }).union().start();
            tween(vs).delay(0.5).to(0.05, {
              position: new Vec3(3, 20, 0)
            }).to(0.05, {
              position: new Vec3(-4, 20, 0)
            }).to(0.05, {
              position: new Vec3(3, 18, 0)
            }).to(0.05, {
              position: new Vec3(-3, 11, 0)
            }).to(0.05, {
              position: new Vec3(2, 18, 0)
            }).to(0.05, {
              position: new Vec3(-2, 14, 0)
            }).to(0.05, {
              position: new Vec3(1, 17, 0)
            }).to(0.05, {
              position: new Vec3(-1, 17, 0)
            }).to(0.05, {
              position: new Vec3(-1, 18, 0)
            }).to(0.05, {
              position: new Vec3(0, 16, 0)
            }).union().start();
            tween(BGcolor).delay(3.5).to(0.5, new Color(255, 255, 255, 0)).start();
            tween(GloadBGcolor).delay(2.5).to(0.5, new Color(255, 255, 255, 0)).start();
            tween(Top1Color).delay(2.5).to(0.5, new Color(255, 255, 255, 0)).start();
            tween(Top2Color).delay(2.5).to(0.5, new Color(255, 255, 255, 0)).start();
            tween(redlight).delay(3).to(0.3, {
              position: new Vec3(redstartX, 16, 0)
            }).start();
            tween(bluelight).delay(3).to(0.3, {
              position: new Vec3(bluestartX, 16, 0)
            }).start();
            tween(vs).delay(2.5).to(0.5, {
              scale: new Vec3(12, 12, 0)
            }, {
              easing: "backIn"
            }).start();
            tween(redcolor).delay(3).to(0.3, new Color(255, 255, 255, 0)).start();
            tween(bluecolor).delay(3).to(0.3, new Color(255, 255, 255, 0)).start();
            tween(redlightcolor).delay(3).to(0.3, new Color(255, 255, 255, 0)).start();
            tween(bluelightcolor).delay(3).to(0.3, new Color(255, 255, 255, 0)).start(); // tween(lightColor).delay(3).to(0.3, new Color(255, 255, 255, 0)).start();

            tween(vscolor).delay(2.5).to(0.5, new Color(255, 255, 255, 0)).start();
            this.scheduleOnce(function () {
              (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
                error: Error()
              }), PopupManager) : PopupManager).I.ClosePopup(find("Canvas"));
              (_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
                error: Error()
              }), GameData) : GameData).I.gameStop = false;
            }, 6);
          }
        }, {
          key: "WinAnimation",
          value: function WinAnimation(node) {}
        }, {
          key: "LoseAnimation",
          value: function LoseAnimation(node) {// let guang = node.getChildByName("guang");
            // let xian = node.getChildByName("xian");
            // let lose = node.getChildByName("lose");
            // console.log(lose.rotation);
            // // let loserotation = node.getChildByName("lose").rotation;
            // let losecolor = node.getChildByName("lose").getComponent(SpriteComponent).color;
            // let Smoke1 = node.getChildByName("Smoke1");
            // let Smoke2 = node.getChildByName("Smoke2");
            // tween(guang).to(0.5, { scale: new Vec3(1, 1, 1) }, { easing: "smooth" }).start();
            // tween(lose).delay(0.1)
            //     .to(0.4, { scale: new Vec3(1, 1, 1) }, { easing: "bounceOut" })
            //     .union().start();
            // // tween(loserotation).delay(1).to(0.5, n, { easing: "backOut" }).start();
            // tween(lose).delay(0.25)
            //     .to(0.2, { rotation: new Quat(0, 0, 0.13, 0.99) })
            //     .to(0.2, { rotation: new Quat(0, 0, -0.13, 0.99) })
            //     .to(0.1, { rotation: new Quat(0, 0, -0.03, 0.99) })
            //     .to(0.1, { rotation: new Quat(0, 0, 0.03, 0.99) })
            //     .to(0.1, { rotation: new Quat(0, 0, -0.03, 0.99) })
            //     .to(0.2, { rotation: new Quat(0, 0, 0, 0) },)
            //     .union().start();
            // this.scheduleOnce(() => {
            //     Smoke1.active = true;
            //     Smoke2.active = true;
            // }, 0.3)
            // tween(losecolor).delay(0.1).to(0.4, new Color(255, 255, 255, 255)).start();
          }
        }]);

        return LoadAnimation;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class)); //backOut 超过然后回弹
      //bounceOut 弹力
      //cubicOut 快到慢
      //circOut 快到慢
      //elasticOut 慢到快
      //expoOut 快到慢
      //fade 慢到快
      //linear 匀速
      //sineOut 超过然后回弹


      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9Mb2FkQW5pbWF0aW9uLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJ0d2VlbiIsIlZlYzMiLCJTcHJpdGVDb21wb25lbnQiLCJDb2xvciIsImZpbmQiLCJDQ1N0cmluZyIsIkdhbWVEYXRhIiwiUG9wdXBNYW5hZ2VyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTG9hZEFuaW1hdGlvbiIsInR5cGUiLCJNYXRjaGluZ1BvcHVwQW5pbWF0aW9uIiwibm9kZSIsIldpbkFuaW1hdGlvbiIsIkxvc2VBbmltYXRpb24iLCJyZWRzdGFydFgiLCJibHVlc3RhcnRYIiwicmVkRW5kWCIsImJsdWVFbmRYIiwiQkdjb2xvciIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiY29sb3IiLCJHbG9hZEJHY29sb3IiLCJUb3AxQ29sb3IiLCJUb3AyQ29sb3IiLCJyZWQiLCJyZWRjb2xvciIsImJsdWUiLCJibHVlY29sb3IiLCJyZWN0YW5nbGUxIiwicmVjdGFuZ2xlMiIsInJlY3RhbmdsZTMiLCJ2cyIsInZzY29sb3IiLCJyZWRsaWdodCIsInJlZGxpZ2h0Y29sb3IiLCJibHVlbGlnaHQiLCJibHVlbGlnaHRjb2xvciIsIkkiLCJsb2FkRGF0YSIsInRoaXNQbGF5ZXIiLCJzY2FsZSIsInBvc2l0aW9uIiwidG8iLCJlYXNpbmciLCJzdGFydCIsImRlbGF5IiwidW5pb24iLCJzY2hlZHVsZU9uY2UiLCJDbG9zZVBvcHVwIiwiZ2FtZVN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFnQ0MsTUFBQUEsSyxPQUFBQSxLO0FBQU9DLE1BQUFBLEks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O0FBQ0gsYUFIRCxFQUdHLENBSEg7QUFJSDs7O3VDQUNZdkMsSSxFQUFZLENBRXhCOzs7d0NBQ2FBLEksRUFBWSxDQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7Ozs7UUF6SThCZCxTOzs7OztpQkFFaEIsRTs7a0NBeUluQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIGxvYWRlciwgQXNzZXQsIHR3ZWVuLCBWZWMzLCBJVHdlZW5PcHRpb24sIGdhbWUsIHYzLCBTcHJpdGUsIFNwcml0ZUNvbXBvbmVudCwgQ29sb3IsIGZpbmQsIENDU3RyaW5nLCBRdWF0IH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgR2FtZVNjZW5lTWFuYWdlciB9IGZyb20gJy4uL0dhbWUvR2FtZUNvbW1vbi9HYW1lU2NlbmVNYW5hZ2VyJztcbmltcG9ydCB7IEdhbWVEYXRhIH0gZnJvbSAnLi4vR2FtZS9HYW1lRGF0YSc7XG5pbXBvcnQgeyBQb3B1cE1hbmFnZXIgfSBmcm9tICcuLi9HYW1lL1BvcHVwL1BvcHVwTWFuYWdlcic7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnTG9hZEFuaW1hdGlvbicpXG5leHBvcnQgY2xhc3MgTG9hZEFuaW1hdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KENDU3RyaW5nKVxuICAgIHR5cGU6IHN0cmluZyA9IFwiXCI7XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwiTWF0Y2hpbmdQb3B1cFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuTWF0Y2hpbmdQb3B1cEFuaW1hdGlvbih0aGlzLm5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIldpblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuV2luQW5pbWF0aW9uKHRoaXMubm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiTG9zZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuTG9zZUFuaW1hdGlvbih0aGlzLm5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBNYWluU2NlbmVUaXRsZUFuaW1hdGlvbihub2RlOiBOb2RlKSB7XG5cbiAgICB9XG4gICAgTWF0Y2hpbmdQb3B1cEFuaW1hdGlvbihub2RlOiBOb2RlKSB7XG5cbiAgICAgICAgbGV0IHJlZHN0YXJ0WDtcbiAgICAgICAgbGV0IGJsdWVzdGFydFg7XG4gICAgICAgIGxldCByZWRFbmRYO1xuICAgICAgICBsZXQgYmx1ZUVuZFg7XG4gICAgICAgIC8vIGxldCBhbmltYSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkFuaW1hdGlvblwiKTtcbiAgICAgICAgbGV0IEJHY29sb3IgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCR1wiKS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5jb2xvcjtcbiAgICAgICAgbGV0IEdsb2FkQkdjb2xvciA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkdsb2FkQkdcIikuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuY29sb3I7XG4gICAgICAgIGxldCBUb3AxQ29sb3IgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUb3AxXCIpLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLmNvbG9yO1xuICAgICAgICBsZXQgVG9wMkNvbG9yID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVG9wMlwiKS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5jb2xvcjtcbiAgICAgICAgbGV0IHJlZDogTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInJlZFwiKTtcbiAgICAgICAgbGV0IHJlZGNvbG9yOiBDb2xvciA9IHJlZC5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5jb2xvcjtcbiAgICAgICAgbGV0IGJsdWU6IE5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJibHVlXCIpO1xuICAgICAgICBsZXQgYmx1ZWNvbG9yOiBDb2xvciA9IGJsdWUuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuY29sb3I7XG4gICAgICAgIGxldCByZWN0YW5nbGUxOiBOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUmVjdGFuZ2xlMVwiKTtcbiAgICAgICAgbGV0IHJlY3RhbmdsZTI6IE5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJSZWN0YW5nbGUyXCIpO1xuICAgICAgICBsZXQgcmVjdGFuZ2xlMzogTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlJlY3RhbmdsZTNcIik7XG4gICAgICAgIC8vIGxldCBsaWdodDogTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImxpZ2h0XCIpO1xuICAgICAgICAvLyBsZXQgbGlnaHRDb2xvcjogQ29sb3IgPSBsaWdodC5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5jb2xvcjtcbiAgICAgICAgbGV0IHZzOiBOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidnNcIik7XG4gICAgICAgIGxldCB2c2NvbG9yOiBDb2xvciA9IHZzLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLmNvbG9yO1xuICAgICAgICBsZXQgcmVkbGlnaHQ6IE5vZGUgPSByZWQuZ2V0Q2hpbGRCeU5hbWUoXCJyZWRsaWdodFwiKTtcbiAgICAgICAgbGV0IHJlZGxpZ2h0Y29sb3I6IENvbG9yID0gcmVkLmdldENoaWxkQnlOYW1lKFwicmVkbGlnaHRcIikuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuY29sb3I7XG4gICAgICAgIGxldCBibHVlbGlnaHQ6IE5vZGUgPSBibHVlLmdldENoaWxkQnlOYW1lKFwiYmx1ZWxpZ2h0XCIpO1xuICAgICAgICBsZXQgYmx1ZWxpZ2h0Y29sb3I6IENvbG9yID0gYmx1ZS5nZXRDaGlsZEJ5TmFtZShcImJsdWVsaWdodFwiKS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5jb2xvcjtcbiAgICAgICAgaWYgKEdhbWVEYXRhLkkubG9hZERhdGEudGhpc1BsYXllciA9PSAwKSB7XG4gICAgICAgICAgICByZWQuc2NhbGUgPSBuZXcgVmVjMygxLCAxLCAxKTtcbiAgICAgICAgICAgIGJsdWUuc2NhbGUgPSBuZXcgVmVjMygxLCAxLCAxKTtcbiAgICAgICAgICAgIHJlZHN0YXJ0WCA9IC0xMzAwXG4gICAgICAgICAgICBibHVlc3RhcnRYID0gMTMwMFxuICAgICAgICAgICAgcmVkRW5kWCA9IC0yODA7XG4gICAgICAgICAgICBibHVlRW5kWCA9IDI4MDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlZC5zY2FsZSA9IG5ldyBWZWMzKC0xLCAtMSwgMSk7XG4gICAgICAgICAgICBibHVlLnNjYWxlID0gbmV3IFZlYzMoLTEsIC0xLCAxKTtcbiAgICAgICAgICAgIHJlZHN0YXJ0WCA9IDEzMDBcbiAgICAgICAgICAgIGJsdWVzdGFydFggPSAtMTMwMFxuICAgICAgICAgICAgcmVkRW5kWCA9IDI4MDtcbiAgICAgICAgICAgIGJsdWVFbmRYID0gLTI4MDtcbiAgICAgICAgfVxuICAgICAgICByZWQucG9zaXRpb24gPSBuZXcgVmVjMyhyZWRzdGFydFgsIDE2LCAwKTtcbiAgICAgICAgYmx1ZS5wb3NpdGlvbiA9IG5ldyBWZWMzKGJsdWVzdGFydFgsIDE2LCAwKTtcbiAgICAgICAgdHdlZW4ocmVkKS50bygwLjMsIHsgcG9zaXRpb246IG5ldyBWZWMzKHJlZEVuZFgsIDE2LCAwKSB9LCB7IGVhc2luZzogXCJzaW5lSW5cIiB9KS5zdGFydCgpO1xuICAgICAgICB0d2VlbihibHVlKS50bygwLjMsIHsgcG9zaXRpb246IG5ldyBWZWMzKGJsdWVFbmRYLCAxNiwgMCkgfSwgeyBlYXNpbmc6IFwic2luZUluXCIgfSkuc3RhcnQoKTtcbiAgICAgICAgdHdlZW4ocmVkbGlnaHRjb2xvcikuZGVsYXkoMC4zKS50bygwLjMsIG5ldyBDb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpKS51bmlvbigpLnN0YXJ0KCk7XG4gICAgICAgIHR3ZWVuKGJsdWVsaWdodGNvbG9yKS5kZWxheSgwLjMpLnRvKDAuMywgbmV3IENvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSkpLnVuaW9uKCkuc3RhcnQoKTtcbiAgICAgICAgdHdlZW4ocmVjdGFuZ2xlMSkuZGVsYXkoMC4zKS50bygwLjUsIHsgc2NhbGU6IG5ldyBWZWMzKDEyLCAxMiwgMTIpIH0sIHsgZWFzaW5nOiBcInNpbmVJblwiIH0pLnVuaW9uKCkuc3RhcnQoKTtcbiAgICAgICAgdHdlZW4ocmVjdGFuZ2xlMikuZGVsYXkoMC40KS50bygwLjU0LCB7IHNjYWxlOiBuZXcgVmVjMygxMiwgMTIsIDEyKSB9LCB7IGVhc2luZzogXCJzaW5lSW5cIiB9KS51bmlvbigpLnN0YXJ0KCk7XG4gICAgICAgIHR3ZWVuKHJlY3RhbmdsZTMpLmRlbGF5KDAuNSkudG8oMC42LCB7IHNjYWxlOiBuZXcgVmVjMygxMiwgMTIsIDEyKSB9LCB7IGVhc2luZzogXCJzaW5lSW5cIiB9KS51bmlvbigpLnN0YXJ0KCk7XG4gICAgICAgIC8vIHR3ZWVuKGxpZ2h0KS5kZWxheSgwLjI1KS50bygwLjMsIHsgc2NhbGU6IG5ldyBWZWMzKDEsIDEsIDEpIH0sIHsgZWFzaW5nOiBcInNpbmVJblwiIH0pLnVuaW9uKCkuc3RhcnQoKTtcbiAgICAgICAgdHdlZW4odnMpLmRlbGF5KDAuMjUpLnRvKDAuMywgeyBzY2FsZTogbmV3IFZlYzMoMSwgMSwgMSkgfSwgeyBlYXNpbmc6IFwic2luZUluXCIgfSkudW5pb24oKS5zdGFydCgpO1xuICAgICAgICB0d2Vlbih2c2NvbG9yKS5kZWxheSgwLjI1KS50bygwLjI1LCBuZXcgQ29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KSwgeyBlYXNpbmc6IFwic2luZUluXCIgfSkudW5pb24oKS5zdGFydCgpO1xuICAgICAgICB0d2Vlbih2cykuZGVsYXkoMC41KVxuICAgICAgICAgICAgLnRvKDAuMDUsIHsgcG9zaXRpb246IG5ldyBWZWMzKDMsIDIwLCAwKSB9KVxuICAgICAgICAgICAgLnRvKDAuMDUsIHsgcG9zaXRpb246IG5ldyBWZWMzKC00LCAyMCwgMCkgfSlcbiAgICAgICAgICAgIC50bygwLjA1LCB7IHBvc2l0aW9uOiBuZXcgVmVjMygzLCAxOCwgMCkgfSlcbiAgICAgICAgICAgIC50bygwLjA1LCB7IHBvc2l0aW9uOiBuZXcgVmVjMygtMywgMTEsIDApIH0pXG4gICAgICAgICAgICAudG8oMC4wNSwgeyBwb3NpdGlvbjogbmV3IFZlYzMoMiwgMTgsIDApIH0pXG4gICAgICAgICAgICAudG8oMC4wNSwgeyBwb3NpdGlvbjogbmV3IFZlYzMoLTIsIDE0LCAwKSB9KVxuICAgICAgICAgICAgLnRvKDAuMDUsIHsgcG9zaXRpb246IG5ldyBWZWMzKDEsIDE3LCAwKSB9KVxuICAgICAgICAgICAgLnRvKDAuMDUsIHsgcG9zaXRpb246IG5ldyBWZWMzKC0xLCAxNywgMCkgfSlcbiAgICAgICAgICAgIC50bygwLjA1LCB7IHBvc2l0aW9uOiBuZXcgVmVjMygtMSwgMTgsIDApIH0pXG4gICAgICAgICAgICAudG8oMC4wNSwgeyBwb3NpdGlvbjogbmV3IFZlYzMoMCwgMTYsIDApIH0pLnVuaW9uKCkuc3RhcnQoKTtcblxuXG4gICAgICAgIHR3ZWVuKEJHY29sb3IpLmRlbGF5KDMuNSkudG8oMC41LCBuZXcgQ29sb3IoMjU1LCAyNTUsIDI1NSwgMCkpLnN0YXJ0KCk7XG4gICAgICAgIHR3ZWVuKEdsb2FkQkdjb2xvcikuZGVsYXkoMi41KS50bygwLjUsIG5ldyBDb2xvcigyNTUsIDI1NSwgMjU1LCAwKSkuc3RhcnQoKTtcbiAgICAgICAgdHdlZW4oVG9wMUNvbG9yKS5kZWxheSgyLjUpLnRvKDAuNSwgbmV3IENvbG9yKDI1NSwgMjU1LCAyNTUsIDApKS5zdGFydCgpO1xuICAgICAgICB0d2VlbihUb3AyQ29sb3IpLmRlbGF5KDIuNSkudG8oMC41LCBuZXcgQ29sb3IoMjU1LCAyNTUsIDI1NSwgMCkpLnN0YXJ0KCk7XG4gICAgICAgIHR3ZWVuKHJlZGxpZ2h0KS5kZWxheSgzKS50bygwLjMsIHsgcG9zaXRpb246IG5ldyBWZWMzKHJlZHN0YXJ0WCwgMTYsIDApIH0pLnN0YXJ0KCk7XG4gICAgICAgIHR3ZWVuKGJsdWVsaWdodCkuZGVsYXkoMykudG8oMC4zLCB7IHBvc2l0aW9uOiBuZXcgVmVjMyhibHVlc3RhcnRYLCAxNiwgMCkgfSkuc3RhcnQoKTtcbiAgICAgICAgdHdlZW4odnMpLmRlbGF5KDIuNSkudG8oMC41LCB7IHNjYWxlOiBuZXcgVmVjMygxMiwgMTIsIDApIH0sIHsgZWFzaW5nOiBcImJhY2tJblwiIH0pLnN0YXJ0KCk7XG5cbiAgICAgICAgdHdlZW4ocmVkY29sb3IpLmRlbGF5KDMpLnRvKDAuMywgbmV3IENvbG9yKDI1NSwgMjU1LCAyNTUsIDApKS5zdGFydCgpO1xuICAgICAgICB0d2VlbihibHVlY29sb3IpLmRlbGF5KDMpLnRvKDAuMywgbmV3IENvbG9yKDI1NSwgMjU1LCAyNTUsIDApKS5zdGFydCgpO1xuICAgICAgICB0d2VlbihyZWRsaWdodGNvbG9yKS5kZWxheSgzKS50bygwLjMsIG5ldyBDb2xvcigyNTUsIDI1NSwgMjU1LCAwKSkuc3RhcnQoKTtcbiAgICAgICAgdHdlZW4oYmx1ZWxpZ2h0Y29sb3IpLmRlbGF5KDMpLnRvKDAuMywgbmV3IENvbG9yKDI1NSwgMjU1LCAyNTUsIDApKS5zdGFydCgpO1xuICAgICAgICAvLyB0d2VlbihsaWdodENvbG9yKS5kZWxheSgzKS50bygwLjMsIG5ldyBDb2xvcigyNTUsIDI1NSwgMjU1LCAwKSkuc3RhcnQoKTtcbiAgICAgICAgdHdlZW4odnNjb2xvcikuZGVsYXkoMi41KS50bygwLjUsIG5ldyBDb2xvcigyNTUsIDI1NSwgMjU1LCAwKSkuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgUG9wdXBNYW5hZ2VyLkkuQ2xvc2VQb3B1cChmaW5kKFwiQ2FudmFzXCIpKTtcbiAgICAgICAgICAgIEdhbWVEYXRhLkkuZ2FtZVN0b3AgPSBmYWxzZTtcbiAgICAgICAgfSwgNik7XG4gICAgfVxuICAgIFdpbkFuaW1hdGlvbihub2RlOiBOb2RlKSB7XG5cbiAgICB9XG4gICAgTG9zZUFuaW1hdGlvbihub2RlOiBOb2RlKSB7XG4gICAgICAgIC8vIGxldCBndWFuZyA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWFuZ1wiKTtcbiAgICAgICAgLy8gbGV0IHhpYW4gPSBub2RlLmdldENoaWxkQnlOYW1lKFwieGlhblwiKTtcbiAgICAgICAgLy8gbGV0IGxvc2UgPSBub2RlLmdldENoaWxkQnlOYW1lKFwibG9zZVwiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobG9zZS5yb3RhdGlvbik7XG5cbiAgICAgICAgLy8gLy8gbGV0IGxvc2Vyb3RhdGlvbiA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsb3NlXCIpLnJvdGF0aW9uO1xuICAgICAgICAvLyBsZXQgbG9zZWNvbG9yID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcImxvc2VcIikuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCkuY29sb3I7XG4gICAgICAgIC8vIGxldCBTbW9rZTEgPSBub2RlLmdldENoaWxkQnlOYW1lKFwiU21va2UxXCIpO1xuICAgICAgICAvLyBsZXQgU21va2UyID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcIlNtb2tlMlwiKTtcbiAgICAgICAgLy8gdHdlZW4oZ3VhbmcpLnRvKDAuNSwgeyBzY2FsZTogbmV3IFZlYzMoMSwgMSwgMSkgfSwgeyBlYXNpbmc6IFwic21vb3RoXCIgfSkuc3RhcnQoKTtcbiAgICAgICAgLy8gdHdlZW4obG9zZSkuZGVsYXkoMC4xKVxuICAgICAgICAvLyAgICAgLnRvKDAuNCwgeyBzY2FsZTogbmV3IFZlYzMoMSwgMSwgMSkgfSwgeyBlYXNpbmc6IFwiYm91bmNlT3V0XCIgfSlcbiAgICAgICAgLy8gICAgIC51bmlvbigpLnN0YXJ0KCk7XG4gICAgICAgIC8vIC8vIHR3ZWVuKGxvc2Vyb3RhdGlvbikuZGVsYXkoMSkudG8oMC41LCBuLCB7IGVhc2luZzogXCJiYWNrT3V0XCIgfSkuc3RhcnQoKTtcbiAgICAgICAgLy8gdHdlZW4obG9zZSkuZGVsYXkoMC4yNSlcbiAgICAgICAgLy8gICAgIC50bygwLjIsIHsgcm90YXRpb246IG5ldyBRdWF0KDAsIDAsIDAuMTMsIDAuOTkpIH0pXG4gICAgICAgIC8vICAgICAudG8oMC4yLCB7IHJvdGF0aW9uOiBuZXcgUXVhdCgwLCAwLCAtMC4xMywgMC45OSkgfSlcbiAgICAgICAgLy8gICAgIC50bygwLjEsIHsgcm90YXRpb246IG5ldyBRdWF0KDAsIDAsIC0wLjAzLCAwLjk5KSB9KVxuICAgICAgICAvLyAgICAgLnRvKDAuMSwgeyByb3RhdGlvbjogbmV3IFF1YXQoMCwgMCwgMC4wMywgMC45OSkgfSlcbiAgICAgICAgLy8gICAgIC50bygwLjEsIHsgcm90YXRpb246IG5ldyBRdWF0KDAsIDAsIC0wLjAzLCAwLjk5KSB9KVxuICAgICAgICAvLyAgICAgLnRvKDAuMiwgeyByb3RhdGlvbjogbmV3IFF1YXQoMCwgMCwgMCwgMCkgfSwpXG4gICAgICAgIC8vICAgICAudW5pb24oKS5zdGFydCgpO1xuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgIC8vICAgICBTbW9rZTEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgIFNtb2tlMi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyB9LCAwLjMpXG4gICAgICAgIC8vIHR3ZWVuKGxvc2Vjb2xvcikuZGVsYXkoMC4xKS50bygwLjQsIG5ldyBDb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpKS5zdGFydCgpO1xuICAgIH1cbn1cbi8vYmFja091dCDotoXov4fnhLblkI7lm57lvLlcbi8vYm91bmNlT3V0IOW8ueWKm1xuLy9jdWJpY091dCDlv6vliLDmhaJcbi8vY2lyY091dCDlv6vliLDmhaJcbi8vZWxhc3RpY091dCDmhaLliLDlv6tcbi8vZXhwb091dCDlv6vliLDmhaJcbi8vZmFkZSDmhaLliLDlv6tcbi8vbGluZWFyIOWMgOmAn1xuLy9zaW5lT3V0IOi2hei/h+eEtuWQjuWbnuW8uVxuIl19