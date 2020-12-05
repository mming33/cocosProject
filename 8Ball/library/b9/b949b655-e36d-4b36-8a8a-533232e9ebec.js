System.register(["cc", "code-quality:cr", "../../Common/Game/MyComponent.js", "../../Common/Server/GetServerData.js", "../../Common/Sound/SoundManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Node, SpriteComponent, find, LabelComponent, director, tween, Color, MyComponent, GetServerData, SoundManager, _dec, _class, _crd, ccclass, property, MainSceneUI;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfMyComponent(extras) {
    _reporterNs.report("MyComponent", "../../Common/Game/MyComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetServerData(extras) {
    _reporterNs.report("GetServerData", "../../Common/Server/GetServerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../../Common/Sound/SoundManager", _context.meta, extras);
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
      SpriteComponent = _cc.SpriteComponent;
      find = _cc.find;
      LabelComponent = _cc.LabelComponent;
      director = _cc.director;
      tween = _cc.tween;
      Color = _cc.Color;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_CommonGameMyComponentJs) {
      MyComponent = _CommonGameMyComponentJs.MyComponent;
    }, function (_CommonServerGetServerDataJs) {
      GetServerData = _CommonServerGetServerDataJs.GetServerData;
    }, function (_CommonSoundSoundManagerJs) {
      SoundManager = _CommonSoundSoundManagerJs.SoundManager;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "b949bZV421LNoqKUzIy6evs", "MainSceneUI", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MainSceneUI", MainSceneUI = (_dec = ccclass('MainSceneUI'), _dec(_class = /*#__PURE__*/function (_ref) {
        _inherits(MainSceneUI, _ref);

        function MainSceneUI() {
          _classCallCheck(this, MainSceneUI);

          return _possibleConstructorReturn(this, _getPrototypeOf(MainSceneUI).apply(this, arguments));
        }

        _createClass(MainSceneUI, [{
          key: "Init",
          value: function Init() {
            this.StartAnimation();
            this.InitNode();
            this.SetNodeValue();
            this.AddFunction();
            this.SetJoinValue(); // this.LoadScene();

            (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager).I.PlayBGMusic();
          }
        }, {
          key: "StartAnimation",
          value: function StartAnimation() {
            var allUI = find("Canvas/UI").getComponent(SpriteComponent);
            allUI.color = new Color(255, 255, 255, 0);
            tween(allUI.color).to(1, new Color(255, 255, 255, 255)).start();
          }
        }, {
          key: "InitNode",
          value: function InitNode() {
            this.MyHeadImage = find("Canvas/UI/UserMask/HeadImage").getComponent(SpriteComponent);
            this.Player1HeadImage = find("Canvas/UI/Player1Mask/HeadImage").getComponent(SpriteComponent);
            this.Player2HeadImage = find("Canvas/UI/Player2Mask/HeadImage").getComponent(SpriteComponent);
            this.UserName = find("Canvas/UI/UserName").getComponent(LabelComponent);
            this.GloadNumber = find("Canvas/UI/GloadNumber").getComponent(LabelComponent);
            this.Time = find("Canvas/UI/Time").getComponent(LabelComponent);
            this.Player1Name = find("Canvas/UI/Player1Name").getComponent(LabelComponent);
            this.Player2Name = find("Canvas/UI/Player2Name").getComponent(LabelComponent);
            this.BreakGame = find("Canvas/UI/BreakGame");
          }
        }, {
          key: "SetNodeValue",
          value: function SetNodeValue() {
            this.MyHeadImage.spriteFrame = (_crd && GetServerData === void 0 ? (_reportPossibleCrUseOfGetServerData({
              error: Error()
            }), GetServerData) : GetServerData).UserHeadImage;
            this.Player1HeadImage.spriteFrame = (_crd && GetServerData === void 0 ? (_reportPossibleCrUseOfGetServerData({
              error: Error()
            }), GetServerData) : GetServerData).UserHeadImage;
            this.UserName.string = (_crd && GetServerData === void 0 ? (_reportPossibleCrUseOfGetServerData({
              error: Error()
            }), GetServerData) : GetServerData).UserName;
            this.Player1Name.string = (_crd && GetServerData === void 0 ? (_reportPossibleCrUseOfGetServerData({
              error: Error()
            }), GetServerData) : GetServerData).UserName;
            this.GloadNumber.string = (_crd && GetServerData === void 0 ? (_reportPossibleCrUseOfGetServerData({
              error: Error()
            }), GetServerData) : GetServerData).UserMoney + "";
          }
        }, {
          key: "SetJoinValue",
          value: function SetJoinValue() {
            this.Player2HeadImage.spriteFrame = (_crd && GetServerData === void 0 ? (_reportPossibleCrUseOfGetServerData({
              error: Error()
            }), GetServerData) : GetServerData).OtherHeadImage;
            this.Player2Name.string = (_crd && GetServerData === void 0 ? (_reportPossibleCrUseOfGetServerData({
              error: Error()
            }), GetServerData) : GetServerData).OtherName;
          }
        }, {
          key: "AddFunction",
          value: function AddFunction() {
            this.BreakGame.on(Node.EventType.TOUCH_END, (_crd && GetServerData === void 0 ? (_reportPossibleCrUseOfGetServerData({
              error: Error()
            }), GetServerData) : GetServerData).LeaveGame);
          }
        }, {
          key: "OffFunction",
          value: function OffFunction() {
            this.BreakGame.targetOff(Node.EventType.TOUCH_END);
          }
        }, {
          key: "LoadScene",
          value: function LoadScene() {
            director.loadScene("GameScene");
          }
        }, {
          key: "myDisable",
          value: function myDisable() {
            this.OffFunction();
          }
        }]);

        return MainSceneUI;
      }(_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvOEJhbGwvYXNzZXRzL1NjcmlwdHMvR2FtZS9NYWluU2NlbmUvTWFpblNjZW5lVUkudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIk5vZGUiLCJTcHJpdGVDb21wb25lbnQiLCJmaW5kIiwiTGFiZWxDb21wb25lbnQiLCJkaXJlY3RvciIsInR3ZWVuIiwiQ29sb3IiLCJNeUNvbXBvbmVudCIsIkdldFNlcnZlckRhdGEiLCJTb3VuZE1hbmFnZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJNYWluU2NlbmVVSSIsIlN0YXJ0QW5pbWF0aW9uIiwiSW5pdE5vZGUiLCJTZXROb2RlVmFsdWUiLCJBZGRGdW5jdGlvbiIsIlNldEpvaW5WYWx1ZSIsIkkiLCJQbGF5QkdNdXNpYyIsImFsbFVJIiwiZ2V0Q29tcG9uZW50IiwiY29sb3IiLCJ0byIsInN0YXJ0IiwiTXlIZWFkSW1hZ2UiLCJQbGF5ZXIxSGVhZEltYWdlIiwiUGxheWVyMkhlYWRJbWFnZSIsIlVzZXJOYW1lIiwiR2xvYWROdW1iZXIiLCJUaW1lIiwiUGxheWVyMU5hbWUiLCJQbGF5ZXIyTmFtZSIsIkJyZWFrR2FtZSIsInNwcml0ZUZyYW1lIiwiVXNlckhlYWRJbWFnZSIsInN0cmluZyIsIlVzZXJNb25leSIsIk90aGVySGVhZEltYWdlIiwiT3RoZXJOYW1lIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJMZWF2ZUdhbWUiLCJ0YXJnZXRPZmYiLCJsb2FkU2NlbmUiLCJPZmZGdW5jdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBdUJDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxlLE9BQUFBLGU7QUFBaUJDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxjLE9BQUFBLGM7QUFBNEJDLE1BQUFBLFEs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LGdEQUFjSSxjQUFsRDtBQUNBLGlCQUFLTixXQUFMLENBQWlCSSxNQUFqQixHQUEwQjtBQUFBO0FBQUEsZ0RBQWNHLFNBQXhDO0FBQ0g7Ozt3Q0FFYTtBQUNWLGlCQUFLTixTQUFMLENBQWVPLEVBQWYsQ0FBa0J4QyxJQUFJLENBQUN5QyxTQUFMLENBQWVDLFNBQWpDLEVBQTRDO0FBQUE7QUFBQSxnREFBY0MsU0FBMUQ7QUFDSDs7O3dDQUNhO0FBQ1YsaUJBQUtWLFNBQUwsQ0FBZVcsU0FBZixDQUF5QjVDLElBQUksQ0FBQ3lDLFNBQUwsQ0FBZUMsU0FBeEM7QUFDSDs7O3NDQUtXO0FBQ1J0QyxZQUFBQSxRQUFRLENBQUN5QyxTQUFULENBQW1CLFdBQW5CO0FBQ0g7OztzQ0FLVztBQUNSLGlCQUFLQyxXQUFMO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFNwcml0ZUNvbXBvbmVudCwgZmluZCwgTGFiZWxDb21wb25lbnQsIEV2ZW50VG91Y2gsIGRpcmVjdG9yLCB0d2VlbiwgQ29sb3IgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL0NvbW1vbi9HYW1lL015Q29tcG9uZW50JztcbmltcG9ydCB7IEdldFNlcnZlckRhdGEgfSBmcm9tICcuLi8uLi9Db21tb24vU2VydmVyL0dldFNlcnZlckRhdGEnO1xuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1NvdW5kL1NvdW5kTWFuYWdlcic7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnTWFpblNjZW5lVUknKVxuZXhwb3J0IGNsYXNzIE1haW5TY2VuZVVJIGV4dGVuZHMgTXlDb21wb25lbnQge1xuXG4gICAgTXlIZWFkSW1hZ2U6IFNwcml0ZUNvbXBvbmVudDtcbiAgICBQbGF5ZXIxSGVhZEltYWdlOiBTcHJpdGVDb21wb25lbnQ7XG4gICAgUGxheWVyMkhlYWRJbWFnZTogU3ByaXRlQ29tcG9uZW50O1xuICAgIFVzZXJOYW1lOiBMYWJlbENvbXBvbmVudDtcbiAgICBHbG9hZE51bWJlcjogTGFiZWxDb21wb25lbnQ7XG4gICAgVGltZTogTGFiZWxDb21wb25lbnQ7XG4gICAgUGxheWVyMU5hbWU6IExhYmVsQ29tcG9uZW50O1xuICAgIFBsYXllcjJOYW1lOiBMYWJlbENvbXBvbmVudDtcbiAgICBCcmVha0dhbWU6IE5vZGU7XG4gICAgSW5pdCgpIHtcbiAgICAgICAgdGhpcy5TdGFydEFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuSW5pdE5vZGUoKTtcbiAgICAgICAgdGhpcy5TZXROb2RlVmFsdWUoKTtcbiAgICAgICAgdGhpcy5BZGRGdW5jdGlvbigpO1xuICAgICAgICB0aGlzLlNldEpvaW5WYWx1ZSgpO1xuICAgICAgICAvLyB0aGlzLkxvYWRTY2VuZSgpO1xuICAgICAgICBTb3VuZE1hbmFnZXIuSS5QbGF5QkdNdXNpYygpO1xuICAgIH1cbiAgICBTdGFydEFuaW1hdGlvbigpIHtcbiAgICAgICAgbGV0IGFsbFVJID0gZmluZChcIkNhbnZhcy9VSVwiKS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KTtcbiAgICAgICAgYWxsVUkuY29sb3IgPSBuZXcgQ29sb3IoMjU1LCAyNTUsIDI1NSwgMCk7XG4gICAgICAgIHR3ZWVuKGFsbFVJLmNvbG9yKS50bygxLCBuZXcgQ29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KSkuc3RhcnQoKTtcblxuICAgIH1cbiAgICBJbml0Tm9kZSgpIHtcblxuICAgICAgICB0aGlzLk15SGVhZEltYWdlID0gZmluZChcIkNhbnZhcy9VSS9Vc2VyTWFzay9IZWFkSW1hZ2VcIikuZ2V0Q29tcG9uZW50KFNwcml0ZUNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuUGxheWVyMUhlYWRJbWFnZSA9IGZpbmQoXCJDYW52YXMvVUkvUGxheWVyMU1hc2svSGVhZEltYWdlXCIpLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpO1xuICAgICAgICB0aGlzLlBsYXllcjJIZWFkSW1hZ2UgPSBmaW5kKFwiQ2FudmFzL1VJL1BsYXllcjJNYXNrL0hlYWRJbWFnZVwiKS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5Vc2VyTmFtZSA9IGZpbmQoXCJDYW52YXMvVUkvVXNlck5hbWVcIikuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5HbG9hZE51bWJlciA9IGZpbmQoXCJDYW52YXMvVUkvR2xvYWROdW1iZXJcIikuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5UaW1lID0gZmluZChcIkNhbnZhcy9VSS9UaW1lXCIpLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuUGxheWVyMU5hbWUgPSBmaW5kKFwiQ2FudmFzL1VJL1BsYXllcjFOYW1lXCIpLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuUGxheWVyMk5hbWUgPSBmaW5kKFwiQ2FudmFzL1VJL1BsYXllcjJOYW1lXCIpLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuQnJlYWtHYW1lID0gZmluZChcIkNhbnZhcy9VSS9CcmVha0dhbWVcIik7XG4gICAgfVxuICAgIFNldE5vZGVWYWx1ZSgpIHtcbiAgICAgICAgdGhpcy5NeUhlYWRJbWFnZS5zcHJpdGVGcmFtZSA9IEdldFNlcnZlckRhdGEuVXNlckhlYWRJbWFnZTtcbiAgICAgICAgdGhpcy5QbGF5ZXIxSGVhZEltYWdlLnNwcml0ZUZyYW1lID0gR2V0U2VydmVyRGF0YS5Vc2VySGVhZEltYWdlO1xuICAgICAgICB0aGlzLlVzZXJOYW1lLnN0cmluZyA9IEdldFNlcnZlckRhdGEuVXNlck5hbWU7XG4gICAgICAgIHRoaXMuUGxheWVyMU5hbWUuc3RyaW5nID0gR2V0U2VydmVyRGF0YS5Vc2VyTmFtZTtcbiAgICAgICAgdGhpcy5HbG9hZE51bWJlci5zdHJpbmcgPSBHZXRTZXJ2ZXJEYXRhLlVzZXJNb25leSArIFwiXCI7XG4gICAgfVxuICAgIFNldEpvaW5WYWx1ZSgpIHtcbiAgICAgICAgdGhpcy5QbGF5ZXIySGVhZEltYWdlLnNwcml0ZUZyYW1lID0gR2V0U2VydmVyRGF0YS5PdGhlckhlYWRJbWFnZTtcbiAgICAgICAgdGhpcy5QbGF5ZXIyTmFtZS5zdHJpbmcgPSBHZXRTZXJ2ZXJEYXRhLk90aGVyTmFtZTtcbiAgICB9XG5cbiAgICBBZGRGdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5CcmVha0dhbWUub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBHZXRTZXJ2ZXJEYXRhLkxlYXZlR2FtZSk7XG4gICAgfVxuICAgIE9mZkZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLkJyZWFrR2FtZS50YXJnZXRPZmYoTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKTtcbiAgICB9XG5cblxuXG5cbiAgICBMb2FkU2NlbmUoKSB7XG4gICAgICAgIGRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVTY2VuZVwiKTtcbiAgICB9XG5cblxuXG5cbiAgICBteURpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuT2ZmRnVuY3Rpb24oKTtcbiAgICB9XG5cblxufVxuIl19