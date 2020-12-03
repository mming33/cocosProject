System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, AudioClip, AudioSource, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, SourceManager;

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

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "77927pxGQJCLqrabTdlaVwm", "SourceManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SourceManager", SourceManager = (_dec = ccclass('SourceManager'), _dec2 = property(AudioSource), _dec3 = property(AudioClip), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(SourceManager, _Component);

        function SourceManager() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, SourceManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SourceManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "audioSource", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "audios", _descriptor2, _assertThisInitialized(_this));

          _this.volume = 1;
          return _this;
        }

        _createClass(SourceManager, [{
          key: "onLoad",
          value: function onLoad() {
            SourceManager.I = this.node.getComponent(SourceManager);
          }
        }, {
          key: "Ball2Ball",
          value: function Ball2Ball() {
            // if (Math.random() > 0.5) {
            this.audios[0].playOneShot(this.volume); // } else {
            //     this.audios[0].playOneShot(1);
            // }
          }
        }, {
          key: "Ball2Table",
          value: function Ball2Table() {
            this.audios[2].playOneShot(this.volume);
          }
        }, {
          key: "Gun2Ball",
          value: function Gun2Ball() {
            this.audios[3].playOneShot(this.volume);
          }
        }, {
          key: "InHole",
          value: function InHole() {
            this.audios[4].playOneShot(this.volume);
          }
        }, {
          key: "Win",
          value: function Win() {
            this.audios[5].playOneShot(this.volume);
          }
        }, {
          key: "Lose",
          value: function Lose() {
            this.audios[6].playOneShot(this.volume);
          }
        }, {
          key: "Join",
          value: function Join() {
            this.audios[7].playOneShot(this.volume);
          }
        }, {
          key: "Settlemeny",
          value: function Settlemeny() {
            this.audios[8].playOneShot(this.volume);
          }
        }, {
          key: "StartGame",
          value: function StartGame() {
            this.audios[10].playOneShot(this.volume);
          }
        }, {
          key: "BGMusic",
          value: function BGMusic() {
            this.audios[9].play();
            this.audios[9].setLoop(true);
          }
        }]);

        return SourceManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "audioSource", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "audios", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9Tb3VyY2VNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJBdWRpb0NsaXAiLCJBdWRpb1NvdXJjZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlNvdXJjZU1hbmFnZXIiLCJ2b2x1bWUiLCJJIiwibm9kZSIsImdldENvbXBvbmVudCIsImF1ZGlvcyIsInBsYXlPbmVTaG90IiwicGxheSIsInNldExvb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLFcsT0FBQUEsVzs7Ozs7O0FBQ3pDQyxNQUFBQSxPLEdBQXNCSixVLENBQXRCSSxPO0FBQVNDLE1BQUFBLFEsR0FBYUwsVSxDQUFiSyxROzsrQkFHSkMsYSxXQURaRixPQUFPLENBQUMsZUFBRCxDLFVBR0hDLFFBQVEsQ0FBQ0YsV0FBRCxDLFVBRVJFLFFBQVEsQ0FBQ0gsU0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFHVEssTSxHQUFpQixDOzs7Ozs7bUNBQ1I7QUFDTEQsWUFBQUEsYUFBYSxDQUFDRSxDQUFkLEdBQWtCLEtBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QkosYUFBdkIsQ0FBbEI7QUFDSDs7O3NDQUNXO0FBQ1I7QUFDQSxpQkFBS0ssTUFBTCxDQUFZLENBQVosRUFBZUMsV0FBZixDQUEyQixLQUFLTCxNQUFoQyxFQUZRLENBR1I7QUFDQTtBQUNBO0FBQ0g7Ozt1Q0FDWTtBQUNULGlCQUFLSSxNQUFMLENBQVksQ0FBWixFQUFlQyxXQUFmLENBQTJCLEtBQUtMLE1BQWhDO0FBQ0g7OztxQ0FDVTtBQUNQLGlCQUFLSSxNQUFMLENBQVksQ0FBWixFQUFlQyxXQUFmLENBQTJCLEtBQUtMLE1BQWhDO0FBQ0g7OzttQ0FDUTtBQUNMLGlCQUFLSSxNQUFMLENBQVksQ0FBWixFQUFlQyxXQUFmLENBQTJCLEtBQUtMLE1BQWhDO0FBQ0g7OztnQ0FDSztBQUNGLGlCQUFLSSxNQUFMLENBQVksQ0FBWixFQUFlQyxXQUFmLENBQTJCLEtBQUtMLE1BQWhDO0FBQ0g7OztpQ0FDTTtBQUNILGlCQUFLSSxNQUFMLENBQVksQ0FBWixFQUFlQyxXQUFmLENBQTJCLEtBQUtMLE1BQWhDO0FBQ0g7OztpQ0FDTTtBQUNILGlCQUFLSSxNQUFMLENBQVksQ0FBWixFQUFlQyxXQUFmLENBQTJCLEtBQUtMLE1BQWhDO0FBQ0g7Ozt1Q0FDWTtBQUNULGlCQUFLSSxNQUFMLENBQVksQ0FBWixFQUFlQyxXQUFmLENBQTJCLEtBQUtMLE1BQWhDO0FBQ0g7OztzQ0FDVztBQUNSLGlCQUFLSSxNQUFMLENBQVksRUFBWixFQUFnQkMsV0FBaEIsQ0FBNEIsS0FBS0wsTUFBakM7QUFDSDs7O29DQUNTO0FBQ04saUJBQUtJLE1BQUwsQ0FBWSxDQUFaLEVBQWVFLElBQWY7QUFDQSxpQkFBS0YsTUFBTCxDQUFZLENBQVosRUFBZUcsT0FBZixDQUF1QixJQUF2QjtBQUNIOzs7O1FBN0M4QmIsUzs7Ozs7aUJBR0osSTs7Ozs7OztpQkFFTCxFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBBdWRpb0NsaXAsIEF1ZGlvU291cmNlLCB0d2VlbiB9IGZyb20gJ2NjJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdTb3VyY2VNYW5hZ2VyJylcbmV4cG9ydCBjbGFzcyBTb3VyY2VNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgSTogU291cmNlTWFuYWdlcjtcbiAgICBAcHJvcGVydHkoQXVkaW9Tb3VyY2UpXG4gICAgYXVkaW9Tb3VyY2U6IEF1ZGlvU291cmNlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShBdWRpb0NsaXApXG4gICAgYXVkaW9zOiBBdWRpb0NsaXBbXSA9IFtdO1xuXG4gICAgdm9sdW1lOiBudW1iZXIgPSAxO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgU291cmNlTWFuYWdlci5JID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChTb3VyY2VNYW5hZ2VyKTtcbiAgICB9XG4gICAgQmFsbDJCYWxsKCkge1xuICAgICAgICAvLyBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xuICAgICAgICB0aGlzLmF1ZGlvc1swXS5wbGF5T25lU2hvdCh0aGlzLnZvbHVtZSk7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICB0aGlzLmF1ZGlvc1swXS5wbGF5T25lU2hvdCgxKTtcbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICBCYWxsMlRhYmxlKCkge1xuICAgICAgICB0aGlzLmF1ZGlvc1syXS5wbGF5T25lU2hvdCh0aGlzLnZvbHVtZSk7XG4gICAgfVxuICAgIEd1bjJCYWxsKCkge1xuICAgICAgICB0aGlzLmF1ZGlvc1szXS5wbGF5T25lU2hvdCh0aGlzLnZvbHVtZSk7XG4gICAgfVxuICAgIEluSG9sZSgpIHtcbiAgICAgICAgdGhpcy5hdWRpb3NbNF0ucGxheU9uZVNob3QodGhpcy52b2x1bWUpO1xuICAgIH1cbiAgICBXaW4oKSB7XG4gICAgICAgIHRoaXMuYXVkaW9zWzVdLnBsYXlPbmVTaG90KHRoaXMudm9sdW1lKTtcbiAgICB9XG4gICAgTG9zZSgpIHtcbiAgICAgICAgdGhpcy5hdWRpb3NbNl0ucGxheU9uZVNob3QodGhpcy52b2x1bWUpO1xuICAgIH1cbiAgICBKb2luKCkge1xuICAgICAgICB0aGlzLmF1ZGlvc1s3XS5wbGF5T25lU2hvdCh0aGlzLnZvbHVtZSk7XG4gICAgfVxuICAgIFNldHRsZW1lbnkoKSB7XG4gICAgICAgIHRoaXMuYXVkaW9zWzhdLnBsYXlPbmVTaG90KHRoaXMudm9sdW1lKTtcbiAgICB9XG4gICAgU3RhcnRHYW1lKCkge1xuICAgICAgICB0aGlzLmF1ZGlvc1sxMF0ucGxheU9uZVNob3QodGhpcy52b2x1bWUpO1xuICAgIH1cbiAgICBCR011c2ljKCkge1xuICAgICAgICB0aGlzLmF1ZGlvc1s5XS5wbGF5KCk7XG4gICAgICAgIHRoaXMuYXVkaW9zWzldLnNldExvb3AodHJ1ZSk7XG4gICAgfVxufVxuIl19