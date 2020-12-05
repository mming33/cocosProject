System.register(["cc", "code-quality:cr", "../Game/MyComponent.js", "../NoSleep/noSleep.js", "../Popup/PopupManager.js", "../Server/GetServerData.js", "../Sound/SoundManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, CanvasComponent, Node, director, find, GFXClearFlag, loader, SpriteComponent, UITransformComponent, _decorator, MyComponent, noSleep, PopupManager, GetServerData, SoundManager, _dec, _class, _class2, _temp, _crd, ccclass, property, LoadManager;

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
    _reporterNs.report("MyComponent", "../Game/MyComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnoSleep(extras) {
    _reporterNs.report("noSleep", "../NoSleep/noSleep", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopupManager(extras) {
    _reporterNs.report("PopupManager", "../Popup/PopupManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetServerData(extras) {
    _reporterNs.report("GetServerData", "../Server/GetServerData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "../Sound/SoundManager", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      CanvasComponent = _cc.CanvasComponent;
      Node = _cc.Node;
      director = _cc.director;
      find = _cc.find;
      GFXClearFlag = _cc.GFXClearFlag;
      loader = _cc.loader;
      SpriteComponent = _cc.SpriteComponent;
      UITransformComponent = _cc.UITransformComponent;
      _decorator = _cc._decorator;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GameMyComponentJs) {
      MyComponent = _GameMyComponentJs.MyComponent;
    }, function (_NoSleepNoSleepJs) {
      noSleep = _NoSleepNoSleepJs.default;
    }, function (_PopupPopupManagerJs) {
      PopupManager = _PopupPopupManagerJs.PopupManager;
    }, function (_ServerGetServerDataJs) {
      GetServerData = _ServerGetServerDataJs.GetServerData;
    }, function (_SoundSoundManagerJs) {
      SoundManager = _SoundSoundManagerJs.SoundManager;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "99fa3d7EaBNvZlZB9H+FIXj", "LoadManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("LoadManager", LoadManager = (_dec = ccclass('LoadManager'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_ref) {
        _inherits(LoadManager, _ref);

        function LoadManager() {
          _classCallCheck(this, LoadManager);

          return _possibleConstructorReturn(this, _getPrototypeOf(LoadManager).apply(this, arguments));
        }

        _createClass(LoadManager, [{
          key: "Init",
          value: function Init() {
            LoadManager.I = this.node.getComponent(LoadManager);
            LoadManager.loadIndex = 0;
            this.LoadPopupsPrefab();
            this.LoadSoundPrefab();
            this.LoadScenes();
            this.NoSleep();
            this.schedule(this.LoadSlider, 0.01);
            this.sliderItem = find("Canvas/Slider/Item").getComponent(SpriteComponent);
          }
        }, {
          key: "LoadSlider",
          value: function LoadSlider() {
            if (LoadManager.loadIndex >= LoadManager.allloadIndex) {
              this.LoadServerData();
              this.unschedule(this.LoadSlider);
            } else {
              this.sliderItem.fillRange = LoadManager.loadIndex / LoadManager.allloadIndex;
              console.log(LoadManager.loadIndex);
            }
          }
          /**
           * 加载弹窗的预制体，并初始化PopupManager中的popups数组
           */

        }, {
          key: "LoadPopupsPrefab",
          value: function LoadPopupsPrefab() {
            this.CreatePopupParent();
            loader.loadResDir("PopupsPrefab", function (err, assets) {
              if (err) {
                console.error(err);
                return;
              }

              for (var i = 0; i < assets.length; i++) {
                var element = assets[i];
                (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
                  error: Error()
                }), PopupManager) : PopupManager).I.popups.push(element);
              }

              LoadManager.loadIndex++;
              console.log((_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
                error: Error()
              }), PopupManager) : PopupManager).I.popups);
            });
          }
          /**
           * 加载音效，并初始化SoundManager.I.audios
           */

        }, {
          key: "LoadSoundPrefab",
          value: function LoadSoundPrefab() {
            this.CreateSoundManager();
            loader.loadResDir("Sounds", function (err, assets) {
              if (err) {
                console.error(err);
                return;
              }

              for (var i = 0; i < assets.length; i++) {
                var element = assets[i];
                (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
                  error: Error()
                }), SoundManager) : SoundManager).I.audios.push(element);
              }

              LoadManager.loadIndex++;
              console.log((_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
                error: Error()
              }), SoundManager) : SoundManager).I.audios);
            });
          }
        }, {
          key: "LoadScenes",
          value: function LoadScenes() {
            director.preloadScene("MainScene", function () {
              LoadManager.loadIndex++;
            });
            director.preloadScene("GameScene", function () {
              LoadManager.loadIndex++;
            });
          }
        }, {
          key: "LoadServerData",
          value: function LoadServerData() {
            this.GetUserInfo();
          }
        }, {
          key: "GetUserInfo",
          value: function GetUserInfo() {
            var _this = this;

            (_crd && GetServerData === void 0 ? (_reportPossibleCrUseOfGetServerData({
              error: Error()
            }), GetServerData) : GetServerData).getUserinfo(function () {
              LoadManager.I.GetUserCoin();
            }, function () {
              LoadManager.I.LoadServerErr(_this.GetUserInfo);
            });
          }
        }, {
          key: "GetUserCoin",
          value: function GetUserCoin() {
            var _this2 = this;

            (_crd && GetServerData === void 0 ? (_reportPossibleCrUseOfGetServerData({
              error: Error()
            }), GetServerData) : GetServerData).GetCoin(function () {
              LoadManager.I.Join();
            }, function () {
              LoadManager.I.LoadServerErr(_this2.GetUserCoin);
            });
          }
        }, {
          key: "Join",
          value: function Join() {
            var _this3 = this;

            (_crd && GetServerData === void 0 ? (_reportPossibleCrUseOfGetServerData({
              error: Error()
            }), GetServerData) : GetServerData).join(function () {
              // LoadManager.I.LoadServerErr(LoadManager.I.Join);
              _this3.scheduleOnce(function () {
                _this3.sliderItem.fillRange = 1;
                director.loadScene("MainScene");
              }, 1.5);
            }, function () {
              LoadManager.I.LoadServerErr(LoadManager.I.Join);
            });
          }
        }, {
          key: "LoadServerErr",
          value: function LoadServerErr(NoBtnFunc) {
            (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
              error: Error()
            }), PopupManager) : PopupManager).I.ShowPopup("TipPopup", {
              TipString: "Network exception. Please try again!",
              YesBtnString: "OK",
              NoBtnString: "Retry",
              YesBtn: function YesBtn() {
                (_crd && GetServerData === void 0 ? (_reportPossibleCrUseOfGetServerData({
                  error: Error()
                }), GetServerData) : GetServerData).LeaveGame();
                (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
                  error: Error()
                }), PopupManager) : PopupManager).I.ClosePopup(true);
              },
              NoBtn: function NoBtn() {
                (_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
                  error: Error()
                }), PopupManager) : PopupManager).I.ClosePopup(true);
                NoBtnFunc();
              }
            }, true);
          }
        }, {
          key: "NoSleep",
          value: function NoSleep() {
            var nosleep = new (_crd && noSleep === void 0 ? (_reportPossibleCrUseOfnoSleep({
              error: Error()
            }), noSleep) : noSleep)();
            nosleep.enable();
          }
        }, {
          key: "CreatePopupParent",
          value: function CreatePopupParent() {
            var popup = new Node("Popup");
            popup.addChild(new Node("one"));
            popup.addChild(new Node("two"));
            var uiTransformComponent = popup.addComponent(UITransformComponent);
            var canvasComponent = popup.addComponent(CanvasComponent);
            var popupManager = popup.addComponent(_crd && PopupManager === void 0 ? (_reportPossibleCrUseOfPopupManager({
              error: Error()
            }), PopupManager) : PopupManager);
            canvasComponent.clearFlag = GFXClearFlag.DEPTH;
            canvasComponent.renderMode = 0;
            canvasComponent.priority = 10;
            this.node.parent.addChild(popup);
            console.log(popup);
          }
        }, {
          key: "CreateSoundManager",
          value: function CreateSoundManager() {
            var soundManager = new Node("SoundManager");
            soundManager.addComponent(_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
              error: Error()
            }), SoundManager) : SoundManager);
            this.node.parent.addChild(soundManager);
            console.log(soundManager);
          }
        }]);

        return LoadManager;
      }(_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent), _class2.loadIndex = 0, _class2.allloadIndex = 4, _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvOEJhbGwvYXNzZXRzL1NjcmlwdHMvQ29tbW9uL0xvYWQvTG9hZE1hbmFnZXIudHMiXSwibmFtZXMiOlsiQ2FudmFzQ29tcG9uZW50IiwiTm9kZSIsImRpcmVjdG9yIiwiZmluZCIsIkdGWENsZWFyRmxhZyIsImxvYWRlciIsIlNwcml0ZUNvbXBvbmVudCIsIlVJVHJhbnNmb3JtQ29tcG9uZW50IiwiX2RlY29yYXRvciIsIk15Q29tcG9uZW50Iiwibm9TbGVlcCIsIlBvcHVwTWFuYWdlciIsIkdldFNlcnZlckRhdGEiLCJTb3VuZE1hbmFnZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJMb2FkTWFuYWdlciIsIkkiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwibG9hZEluZGV4IiwiTG9hZFBvcHVwc1ByZWZhYiIsIkxvYWRTb3VuZFByZWZhYiIsIkxvYWRTY2VuZXMiLCJOb1NsZWVwIiwic2NoZWR1bGUiLCJMb2FkU2xpZGVyIiwic2xpZGVySXRlbSIsImFsbGxvYWRJbmRleCIsIkxvYWRTZXJ2ZXJEYXRhIiwidW5zY2hlZHVsZSIsImZpbGxSYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJDcmVhdGVQb3B1cFBhcmVudCIsImxvYWRSZXNEaXIiLCJlcnIiLCJhc3NldHMiLCJlcnJvciIsImkiLCJsZW5ndGgiLCJlbGVtZW50IiwicG9wdXBzIiwicHVzaCIsIkNyZWF0ZVNvdW5kTWFuYWdlciIsImF1ZGlvcyIsInByZWxvYWRTY2VuZSIsIkdldFVzZXJJbmZvIiwiZ2V0VXNlcmluZm8iLCJHZXRVc2VyQ29pbiIsIkxvYWRTZXJ2ZXJFcnIiLCJHZXRDb2luIiwiSm9pbiIsImpvaW4iLCJzY2hlZHVsZU9uY2UiLCJsb2FkU2NlbmUiLCJOb0J0bkZ1bmMiLCJTaG93UG9wdXAiLCJUaXBTdHJpbmciLCJZZXNCdG5TdHJpbmciLCJOb0J0blN0cmluZyIsIlllc0J0biIsIkxlYXZlR2FtZSIsIkNsb3NlUG9wdXAiLCJOb0J0biIsIm5vc2xlZXAiLCJlbmFibGUiLCJwb3B1cCIsImFkZENoaWxkIiwidWlUcmFuc2Zvcm1Db21wb25lbnQiLCJhZGRDb21wb25lbnQiLCJjYW52YXNDb21wb25lbnQiLCJwb3B1cE1hbmFnZXIiLCJjbGVhckZsYWciLCJERVBUSCIsInJlbmRlck1vZGUiLCJwcmlvcml0eSIsInBhcmVudCIsInNvdW5kTWFuYWdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsZSxPQUFBQSxlO0FBQWlCQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsUSxPQUFBQSxRO0FBQVVDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxZLE9BQUFBLFk7QUFBY0MsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFBQUEsb0IsT0FBQUEsb0I7QUFBc0JDLE1BQUFBLFUsT0FBQUEsVTs7OztBQUNwR0MsTUFBQUEsVyxzQkFBQUEsVzs7QUFDRkMsTUFBQUEsTzs7QUFFRUMsTUFBQUEsWSx3QkFBQUEsWTs7QUFDQUMsTUFBQUEsYSwwQkFBQUEsYTs7QUFDQUMsTUFBQUEsWSx3QkFBQUEsWTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JOLFUsQ0FBdEJNLE87QUFBU0MsTUFBQUEsUSxHQUFhUCxVLENBQWJPLFE7OzZCQUdKQyxXLFdBRFpGLE9BQU8sQ0FBQyxhQUFELEM7Ozs7Ozs7Ozs7O2lDQU9HO0FBQ0hFLFlBQUFBLFdBQVcsQ0FBQ0MsQ0FBWixHQUFnQixLQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJILFdBQXZCLENBQWhCO0FBQ0FBLFlBQUFBLFdBQVcsQ0FBQ0ksU0FBWixHQUF3QixDQUF4QjtBQUNBLGlCQUFLQyxnQkFBTDtBQUNBLGlCQUFLQyxlQUFMO0FBQ0EsaUJBQUtDLFVBQUw7QUFDQSxpQkFBS0MsT0FBTDtBQUNBLGlCQUFLQyxRQUFMLENBQWMsS0FBS0MsVUFBbkIsRUFBK0IsSUFBL0I7QUFDQSxpQkFBS0MsVUFBTCxHQUFrQnhCLElBQUksQ0FBQyxvQkFBRCxDQUFKLENBQTJCZ0IsWUFBM0IsQ0FBd0NiLGVBQXhDLENBQWxCO0FBQ0g7Ozt1Q0FFWTtBQUNULGdCQUFJVSxXQUFXLENBQUNJLFNBQVosSUFBeUJKLFdBQVcsQ0FBQ1ksWUFBekMsRUFBdUQ7QUFDbkQsbUJBQUtDLGNBQUw7QUFDQSxtQkFBS0MsVUFBTCxDQUFnQixLQUFLSixVQUFyQjtBQUNILGFBSEQsTUFHTztBQUNILG1CQUFLQyxVQUFMLENBQWdCSSxTQUFoQixHQUE0QmYsV0FBVyxDQUFDSSxTQUFaLEdBQXdCSixXQUFXLENBQUNZLFlBQWhFO0FBQ0FJLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZakIsV0FBVyxDQUFDSSxTQUF4QjtBQUNIO0FBQ0o7QUFFRDs7Ozs7OzZDQUdtQjtBQUNmLGlCQUFLYyxpQkFBTDtBQUNBN0IsWUFBQUEsTUFBTSxDQUFDOEIsVUFBUCxDQUFrQixjQUFsQixFQUFrQyxVQUFVQyxHQUFWLEVBQWVDLE1BQWYsRUFBdUI7QUFDckQsa0JBQUlELEdBQUosRUFBUztBQUNMSixnQkFBQUEsT0FBTyxDQUFDTSxLQUFSLENBQWNGLEdBQWQ7QUFDQTtBQUNIOztBQUNELG1CQUFLLElBQUlHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLE1BQU0sQ0FBQ0csTUFBM0IsRUFBbUNELENBQUMsRUFBcEMsRUFBd0M7QUFDcEMsb0JBQU1FLE9BQU8sR0FBR0osTUFBTSxDQUFDRSxDQUFELENBQXRCO0FBQ0E7QUFBQTtBQUFBLGtEQUFhdEIsQ0FBYixDQUFleUIsTUFBZixDQUFzQkMsSUFBdEIsQ0FBMkJGLE9BQTNCO0FBQ0g7O0FBQ0R6QixjQUFBQSxXQUFXLENBQUNJLFNBQVo7QUFDQVksY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBQTtBQUFBLGdEQUFhaEIsQ0FBYixDQUFleUIsTUFBM0I7QUFDSCxhQVhEO0FBWUg7QUFDRDs7Ozs7OzRDQUdrQjtBQUNkLGlCQUFLRSxrQkFBTDtBQUNBdkMsWUFBQUEsTUFBTSxDQUFDOEIsVUFBUCxDQUFrQixRQUFsQixFQUE0QixVQUFVQyxHQUFWLEVBQWVDLE1BQWYsRUFBdUI7QUFDL0Msa0JBQUlELEdBQUosRUFBUztBQUNMSixnQkFBQUEsT0FBTyxDQUFDTSxLQUFSLENBQWNGLEdBQWQ7QUFDQTtBQUNIOztBQUNELG1CQUFLLElBQUlHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLE1BQU0sQ0FBQ0csTUFBM0IsRUFBbUNELENBQUMsRUFBcEMsRUFBd0M7QUFDcEMsb0JBQU1FLE9BQU8sR0FBR0osTUFBTSxDQUFDRSxDQUFELENBQXRCO0FBQ0E7QUFBQTtBQUFBLGtEQUFhdEIsQ0FBYixDQUFlNEIsTUFBZixDQUFzQkYsSUFBdEIsQ0FBMkJGLE9BQTNCO0FBQ0g7O0FBQ0R6QixjQUFBQSxXQUFXLENBQUNJLFNBQVo7QUFDQVksY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBQTtBQUFBLGdEQUFhaEIsQ0FBYixDQUFlNEIsTUFBM0I7QUFDSCxhQVhEO0FBWUg7Ozt1Q0FDWTtBQUNUM0MsWUFBQUEsUUFBUSxDQUFDNEMsWUFBVCxDQUFzQixXQUF0QixFQUFtQyxZQUFNO0FBQ3JDOUIsY0FBQUEsV0FBVyxDQUFDSSxTQUFaO0FBQ0gsYUFGRDtBQUdBbEIsWUFBQUEsUUFBUSxDQUFDNEMsWUFBVCxDQUFzQixXQUF0QixFQUFtQyxZQUFNO0FBQ3JDOUIsY0FBQUEsV0FBVyxDQUFDSSxTQUFaO0FBQ0gsYUFGRDtBQUdIOzs7MkNBQ2dCO0FBQ2IsaUJBQUsyQixXQUFMO0FBQ0g7Ozt3Q0FDYTtBQUFBOztBQUNWO0FBQUE7QUFBQSxnREFBY0MsV0FBZCxDQUEwQixZQUFNO0FBQzVCaEMsY0FBQUEsV0FBVyxDQUFDQyxDQUFaLENBQWNnQyxXQUFkO0FBQ0gsYUFGRCxFQUVHLFlBQU07QUFDTGpDLGNBQUFBLFdBQVcsQ0FBQ0MsQ0FBWixDQUFjaUMsYUFBZCxDQUE0QixLQUFJLENBQUNILFdBQWpDO0FBQ0gsYUFKRDtBQUtIOzs7d0NBQ2E7QUFBQTs7QUFDVjtBQUFBO0FBQUEsZ0RBQWNJLE9BQWQsQ0FBc0IsWUFBTTtBQUN4Qm5DLGNBQUFBLFdBQVcsQ0FBQ0MsQ0FBWixDQUFjbUMsSUFBZDtBQUNILGFBRkQsRUFFRyxZQUFNO0FBQ0xwQyxjQUFBQSxXQUFXLENBQUNDLENBQVosQ0FBY2lDLGFBQWQsQ0FBNEIsTUFBSSxDQUFDRCxXQUFqQztBQUNILGFBSkQ7QUFLSDs7O2lDQUNNO0FBQUE7O0FBQ0g7QUFBQTtBQUFBLGdEQUFjSSxJQUFkLENBQW1CLFlBQU07QUFDckI7QUFDQSxjQUFBLE1BQUksQ0FBQ0MsWUFBTCxDQUFrQixZQUFNO0FBQ3BCLGdCQUFBLE1BQUksQ0FBQzNCLFVBQUwsQ0FBZ0JJLFNBQWhCLEdBQTRCLENBQTVCO0FBQ0E3QixnQkFBQUEsUUFBUSxDQUFDcUQsU0FBVCxDQUFtQixXQUFuQjtBQUNILGVBSEQsRUFHRyxHQUhIO0FBSUgsYUFORCxFQU1HLFlBQU07QUFDTHZDLGNBQUFBLFdBQVcsQ0FBQ0MsQ0FBWixDQUFjaUMsYUFBZCxDQUE0QmxDLFdBQVcsQ0FBQ0MsQ0FBWixDQUFjbUMsSUFBMUM7QUFDSCxhQVJEO0FBU0g7Ozt3Q0FDYUksUyxFQUFxQjtBQUMvQjtBQUFBO0FBQUEsOENBQWF2QyxDQUFiLENBQWV3QyxTQUFmLENBQXlCLFVBQXpCLEVBQ0k7QUFDSUMsY0FBQUEsU0FBUyxFQUFFLHNDQURmO0FBRUlDLGNBQUFBLFlBQVksRUFBRSxJQUZsQjtBQUdJQyxjQUFBQSxXQUFXLEVBQUUsT0FIakI7QUFJSUMsY0FBQUEsTUFBTSxFQUFFLGtCQUFNO0FBQ1Y7QUFBQTtBQUFBLG9EQUFjQyxTQUFkO0FBQ0E7QUFBQTtBQUFBLGtEQUFhN0MsQ0FBYixDQUFlOEMsVUFBZixDQUEwQixJQUExQjtBQUNILGVBUEw7QUFRSUMsY0FBQUEsS0FBSyxFQUFFLGlCQUFNO0FBQ1Q7QUFBQTtBQUFBLGtEQUFhL0MsQ0FBYixDQUFlOEMsVUFBZixDQUEwQixJQUExQjtBQUNBUCxnQkFBQUEsU0FBUztBQUNaO0FBWEwsYUFESixFQWFPLElBYlA7QUFjSDs7O29DQUNTO0FBQ04sZ0JBQUlTLE9BQU8sR0FBRztBQUFBO0FBQUEscUNBQWQ7QUFDQUEsWUFBQUEsT0FBTyxDQUFDQyxNQUFSO0FBQ0g7Ozs4Q0FDMkI7QUFDeEIsZ0JBQUlDLEtBQUssR0FBRyxJQUFJbEUsSUFBSixDQUFTLE9BQVQsQ0FBWjtBQUNBa0UsWUFBQUEsS0FBSyxDQUFDQyxRQUFOLENBQWUsSUFBSW5FLElBQUosQ0FBUyxLQUFULENBQWY7QUFDQWtFLFlBQUFBLEtBQUssQ0FBQ0MsUUFBTixDQUFlLElBQUluRSxJQUFKLENBQVMsS0FBVCxDQUFmO0FBQ0EsZ0JBQUlvRSxvQkFBb0IsR0FBR0YsS0FBSyxDQUFDRyxZQUFOLENBQW1CL0Qsb0JBQW5CLENBQTNCO0FBQ0EsZ0JBQUlnRSxlQUFlLEdBQUdKLEtBQUssQ0FBQ0csWUFBTixDQUFtQnRFLGVBQW5CLENBQXRCO0FBQ0EsZ0JBQUl3RSxZQUFZLEdBQUdMLEtBQUssQ0FBQ0csWUFBTjtBQUFBO0FBQUEsNkNBQW5CO0FBQ0FDLFlBQUFBLGVBQWUsQ0FBQ0UsU0FBaEIsR0FBNEJyRSxZQUFZLENBQUNzRSxLQUF6QztBQUNBSCxZQUFBQSxlQUFlLENBQUNJLFVBQWhCLEdBQTZCLENBQTdCO0FBQ0FKLFlBQUFBLGVBQWUsQ0FBQ0ssUUFBaEIsR0FBMkIsRUFBM0I7QUFDQSxpQkFBSzFELElBQUwsQ0FBVTJELE1BQVYsQ0FBaUJULFFBQWpCLENBQTBCRCxLQUExQjtBQUNBbkMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlrQyxLQUFaO0FBQ0g7OzsrQ0FDNEI7QUFDekIsZ0JBQUlXLFlBQVksR0FBRyxJQUFJN0UsSUFBSixDQUFTLGNBQVQsQ0FBbkI7QUFDQTZFLFlBQUFBLFlBQVksQ0FBQ1IsWUFBYjtBQUFBO0FBQUE7QUFDQSxpQkFBS3BELElBQUwsQ0FBVTJELE1BQVYsQ0FBaUJULFFBQWpCLENBQTBCVSxZQUExQjtBQUNBOUMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk2QyxZQUFaO0FBQ0g7Ozs7OzsrQ0F0SU0xRCxTLEdBQW9CLEMsVUFDcEJRLFksR0FBdUIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbnZhc0NvbXBvbmVudCwgTm9kZSwgZGlyZWN0b3IsIGZpbmQsIEdGWENsZWFyRmxhZywgbG9hZGVyLCBTcHJpdGVDb21wb25lbnQsIFVJVHJhbnNmb3JtQ29tcG9uZW50LCBfZGVjb3JhdG9yIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tICcuLi9HYW1lL015Q29tcG9uZW50JztcbmltcG9ydCBub1NsZWVwIGZyb20gJy4uL05vU2xlZXAvbm9TbGVlcCc7XG5pbXBvcnQgeyBQb3B1cCB9IGZyb20gJy4uL1BvcHVwL1BvcHVwJztcbmltcG9ydCB7IFBvcHVwTWFuYWdlciB9IGZyb20gJy4uL1BvcHVwL1BvcHVwTWFuYWdlcic7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJEYXRhIH0gZnJvbSAnLi4vU2VydmVyL0dldFNlcnZlckRhdGEnO1xuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi4vU291bmQvU291bmRNYW5hZ2VyJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdMb2FkTWFuYWdlcicpXG5leHBvcnQgY2xhc3MgTG9hZE1hbmFnZXIgZXh0ZW5kcyBNeUNvbXBvbmVudCB7XG4gICAgc3RhdGljIEk6IExvYWRNYW5hZ2VyO1xuXG4gICAgc3RhdGljIGxvYWRJbmRleDogbnVtYmVyID0gMDtcbiAgICBzdGF0aWMgYWxsbG9hZEluZGV4OiBudW1iZXIgPSA0O1xuICAgIHNsaWRlckl0ZW06IFNwcml0ZUNvbXBvbmVudDtcbiAgICBJbml0KCkge1xuICAgICAgICBMb2FkTWFuYWdlci5JID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChMb2FkTWFuYWdlcik7XG4gICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuTG9hZFBvcHVwc1ByZWZhYigpO1xuICAgICAgICB0aGlzLkxvYWRTb3VuZFByZWZhYigpO1xuICAgICAgICB0aGlzLkxvYWRTY2VuZXMoKTtcbiAgICAgICAgdGhpcy5Ob1NsZWVwKCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5Mb2FkU2xpZGVyLCAwLjAxKVxuICAgICAgICB0aGlzLnNsaWRlckl0ZW0gPSBmaW5kKFwiQ2FudmFzL1NsaWRlci9JdGVtXCIpLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpO1xuICAgIH1cblxuICAgIExvYWRTbGlkZXIoKSB7XG4gICAgICAgIGlmIChMb2FkTWFuYWdlci5sb2FkSW5kZXggPj0gTG9hZE1hbmFnZXIuYWxsbG9hZEluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLkxvYWRTZXJ2ZXJEYXRhKCk7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5Mb2FkU2xpZGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2xpZGVySXRlbS5maWxsUmFuZ2UgPSBMb2FkTWFuYWdlci5sb2FkSW5kZXggLyBMb2FkTWFuYWdlci5hbGxsb2FkSW5kZXg7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhMb2FkTWFuYWdlci5sb2FkSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yqg6L295by556qX55qE6aKE5Yi25L2T77yM5bm25Yid5aeL5YyWUG9wdXBNYW5hZ2Vy5Lit55qEcG9wdXBz5pWw57uEXG4gICAgICovXG4gICAgTG9hZFBvcHVwc1ByZWZhYigpIHtcbiAgICAgICAgdGhpcy5DcmVhdGVQb3B1cFBhcmVudCgpO1xuICAgICAgICBsb2FkZXIubG9hZFJlc0RpcihcIlBvcHVwc1ByZWZhYlwiLCBmdW5jdGlvbiAoZXJyLCBhc3NldHMpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3NldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYXNzZXRzW2ldO1xuICAgICAgICAgICAgICAgIFBvcHVwTWFuYWdlci5JLnBvcHVwcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgTG9hZE1hbmFnZXIubG9hZEluZGV4Kys7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhQb3B1cE1hbmFnZXIuSS5wb3B1cHMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5Yqg6L296Z+z5pWI77yM5bm25Yid5aeL5YyWU291bmRNYW5hZ2VyLkkuYXVkaW9zXG4gICAgICovXG4gICAgTG9hZFNvdW5kUHJlZmFiKCkge1xuICAgICAgICB0aGlzLkNyZWF0ZVNvdW5kTWFuYWdlcigpO1xuICAgICAgICBsb2FkZXIubG9hZFJlc0RpcihcIlNvdW5kc1wiLCBmdW5jdGlvbiAoZXJyLCBhc3NldHMpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3NldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYXNzZXRzW2ldO1xuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5JLmF1ZGlvcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgTG9hZE1hbmFnZXIubG9hZEluZGV4Kys7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhTb3VuZE1hbmFnZXIuSS5hdWRpb3MpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgTG9hZFNjZW5lcygpIHtcbiAgICAgICAgZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiTWFpblNjZW5lXCIsICgpID0+IHtcbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCsrO1xuICAgICAgICB9KTtcbiAgICAgICAgZGlyZWN0b3IucHJlbG9hZFNjZW5lKFwiR2FtZVNjZW5lXCIsICgpID0+IHtcbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCsrO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgTG9hZFNlcnZlckRhdGEoKSB7XG4gICAgICAgIHRoaXMuR2V0VXNlckluZm8oKVxuICAgIH1cbiAgICBHZXRVc2VySW5mbygpIHtcbiAgICAgICAgR2V0U2VydmVyRGF0YS5nZXRVc2VyaW5mbygoKSA9PiB7XG4gICAgICAgICAgICBMb2FkTWFuYWdlci5JLkdldFVzZXJDb2luKCk7XG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLkkuTG9hZFNlcnZlckVycih0aGlzLkdldFVzZXJJbmZvKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIEdldFVzZXJDb2luKCkge1xuICAgICAgICBHZXRTZXJ2ZXJEYXRhLkdldENvaW4oKCkgPT4ge1xuICAgICAgICAgICAgTG9hZE1hbmFnZXIuSS5Kb2luKCk7XG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLkkuTG9hZFNlcnZlckVycih0aGlzLkdldFVzZXJDb2luKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIEpvaW4oKSB7XG4gICAgICAgIEdldFNlcnZlckRhdGEuam9pbigoKSA9PiB7XG4gICAgICAgICAgICAvLyBMb2FkTWFuYWdlci5JLkxvYWRTZXJ2ZXJFcnIoTG9hZE1hbmFnZXIuSS5Kb2luKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlckl0ZW0uZmlsbFJhbmdlID0gMTtcbiAgICAgICAgICAgICAgICBkaXJlY3Rvci5sb2FkU2NlbmUoXCJNYWluU2NlbmVcIik7XG4gICAgICAgICAgICB9LCAxLjUpO1xuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBMb2FkTWFuYWdlci5JLkxvYWRTZXJ2ZXJFcnIoTG9hZE1hbmFnZXIuSS5Kb2luKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIExvYWRTZXJ2ZXJFcnIoTm9CdG5GdW5jOiBGdW5jdGlvbikge1xuICAgICAgICBQb3B1cE1hbmFnZXIuSS5TaG93UG9wdXAoXCJUaXBQb3B1cFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFRpcFN0cmluZzogXCJOZXR3b3JrIGV4Y2VwdGlvbi4gUGxlYXNlIHRyeSBhZ2FpbiFcIixcbiAgICAgICAgICAgICAgICBZZXNCdG5TdHJpbmc6IFwiT0tcIixcbiAgICAgICAgICAgICAgICBOb0J0blN0cmluZzogXCJSZXRyeVwiLFxuICAgICAgICAgICAgICAgIFllc0J0bjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBHZXRTZXJ2ZXJEYXRhLkxlYXZlR2FtZSgpO1xuICAgICAgICAgICAgICAgICAgICBQb3B1cE1hbmFnZXIuSS5DbG9zZVBvcHVwKHRydWUpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgTm9CdG46ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgUG9wdXBNYW5hZ2VyLkkuQ2xvc2VQb3B1cCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgTm9CdG5GdW5jKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgfVxuICAgIE5vU2xlZXAoKSB7XG4gICAgICAgIGxldCBub3NsZWVwID0gbmV3IG5vU2xlZXAoKTtcbiAgICAgICAgbm9zbGVlcC5lbmFibGUoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBDcmVhdGVQb3B1cFBhcmVudCgpIHtcbiAgICAgICAgbGV0IHBvcHVwID0gbmV3IE5vZGUoXCJQb3B1cFwiKTtcbiAgICAgICAgcG9wdXAuYWRkQ2hpbGQobmV3IE5vZGUoXCJvbmVcIikpO1xuICAgICAgICBwb3B1cC5hZGRDaGlsZChuZXcgTm9kZShcInR3b1wiKSk7XG4gICAgICAgIGxldCB1aVRyYW5zZm9ybUNvbXBvbmVudCA9IHBvcHVwLmFkZENvbXBvbmVudChVSVRyYW5zZm9ybUNvbXBvbmVudCk7XG4gICAgICAgIGxldCBjYW52YXNDb21wb25lbnQgPSBwb3B1cC5hZGRDb21wb25lbnQoQ2FudmFzQ29tcG9uZW50KTtcbiAgICAgICAgbGV0IHBvcHVwTWFuYWdlciA9IHBvcHVwLmFkZENvbXBvbmVudChQb3B1cE1hbmFnZXIpO1xuICAgICAgICBjYW52YXNDb21wb25lbnQuY2xlYXJGbGFnID0gR0ZYQ2xlYXJGbGFnLkRFUFRIO1xuICAgICAgICBjYW52YXNDb21wb25lbnQucmVuZGVyTW9kZSA9IDA7XG4gICAgICAgIGNhbnZhc0NvbXBvbmVudC5wcmlvcml0eSA9IDEwO1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKHBvcHVwKTtcbiAgICAgICAgY29uc29sZS5sb2cocG9wdXApO1xuICAgIH1cbiAgICBwcml2YXRlIENyZWF0ZVNvdW5kTWFuYWdlcigpIHtcbiAgICAgICAgbGV0IHNvdW5kTWFuYWdlciA9IG5ldyBOb2RlKFwiU291bmRNYW5hZ2VyXCIpO1xuICAgICAgICBzb3VuZE1hbmFnZXIuYWRkQ29tcG9uZW50KFNvdW5kTWFuYWdlcik7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoc291bmRNYW5hZ2VyKTtcbiAgICAgICAgY29uc29sZS5sb2coc291bmRNYW5hZ2VyKTtcbiAgICB9XG59XG4iXX0=