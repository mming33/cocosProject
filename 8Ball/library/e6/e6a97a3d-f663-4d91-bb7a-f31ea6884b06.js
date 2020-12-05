System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, game, _dec, _class, _temp, _crd, ccclass, property, SoundManager;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      game = _cc.game;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "e6a97o99mNNkbt68x6miEsG", "SoundManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SoundManager", SoundManager = (_dec = ccclass('SoundManager'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(SoundManager, _Component);

        function SoundManager() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, SoundManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SoundManager)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.audios = [];
          _this.AudioSourceVolume = 1;
          _this.BGMVolume = 1;
          return _this;
        }

        _createClass(SoundManager, [{
          key: "onLoad",
          value: function onLoad() {
            game.addPersistRootNode(this.node);
            SoundManager.i = this.node.getComponent(SoundManager);
          }
        }, {
          key: "PlayBGMusic",
          value: function PlayBGMusic() {
            var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "BGMusic";

            for (var i = 0; i < this.audios.length; i++) {
              var element = this.audios[i];

              if (element.name == name) {
                element.play();
                element.setLoop(true);
              }
            }
          }
        }, {
          key: "PlaySource",
          value: function PlaySource(name) {
            for (var i = 0; i < this.audios.length; i++) {
              var element = this.audios[i];

              if (element.name == name) {
                element.playOneShot(this.AudioSourceVolume);
              }
            }
          }
        }, {
          key: "SetSourceVolume",
          value: function SetSourceVolume(volume) {
            this.AudioSourceVolume = volume;
          }
        }, {
          key: "SetBGMusicVolume",
          value: function SetBGMusicVolume(volume) {
            var BGMusicName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "BGMusic";
            this.BGMVolume = volume;

            for (var i = 0; i < this.audios.length; i++) {
              var element = this.audios[i];

              if (element.name == BGMusicName) {
                element.setVolume(this.BGMVolume);
              }
            }
          }
        }], [{
          key: "I",

          /**单例 */
          get: function get() {
            return this.Instance;
          }
        }, {
          key: "i",
          set: function set(v) {
            this.Instance = v;
          }
        }]);

        return SoundManager;
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvOEJhbGwvYXNzZXRzL1NjcmlwdHMvQ29tbW9uL1NvdW5kL1NvdW5kTWFuYWdlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiZ2FtZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlNvdW5kTWFuYWdlciIsImF1ZGlvcyIsIkF1ZGlvU291cmNlVm9sdW1lIiwiQkdNVm9sdW1lIiwiYWRkUGVyc2lzdFJvb3ROb2RlIiwibm9kZSIsImkiLCJnZXRDb21wb25lbnQiLCJuYW1lIiwibGVuZ3RoIiwiZWxlbWVudCIsInBsYXkiLCJzZXRMb29wIiwicGxheU9uZVNob3QiLCJ2b2x1bWUiLCJCR011c2ljTmFtZSIsInNldFZvbHVtZSIsIkluc3RhbmNlIiwidiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUF5Q0MsTUFBQUEsSSxPQUFBQSxJOzs7Ozs7QUFHdERDLE1BQUFBLE8sR0FBc0JILFUsQ0FBdEJHLE87QUFBU0MsTUFBQUEsUSxHQUFhSixVLENBQWJJLFE7OzhCQUdKQyxZLFdBRFpGLE9BQU8sQ0FBQyxjQUFELEM7Ozs7Ozs7Ozs7Ozs7OztnQkFPSkcsTSxHQUFzQixFO2dCQUV0QkMsaUIsR0FBNEIsQztnQkFDNUJDLFMsR0FBb0IsQzs7Ozs7O21DQUVYO0FBQ0xOLFlBQUFBLElBQUksQ0FBQ08sa0JBQUwsQ0FBd0IsS0FBS0MsSUFBN0I7QUFDQUwsWUFBQUEsWUFBWSxDQUFDTSxDQUFiLEdBQWlCLEtBQUtELElBQUwsQ0FBVUUsWUFBVixDQUF1QlAsWUFBdkIsQ0FBakI7QUFDSDs7O3dDQUVxQztBQUFBLGdCQUExQlEsSUFBMEIsdUVBQVgsU0FBVzs7QUFDbEMsaUJBQUssSUFBSUYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLTCxNQUFMLENBQVlRLE1BQWhDLEVBQXdDSCxDQUFDLEVBQXpDLEVBQTZDO0FBQ3pDLGtCQUFNSSxPQUFPLEdBQUcsS0FBS1QsTUFBTCxDQUFZSyxDQUFaLENBQWhCOztBQUNBLGtCQUFJSSxPQUFPLENBQUNGLElBQVIsSUFBZ0JBLElBQXBCLEVBQTBCO0FBQ3RCRSxnQkFBQUEsT0FBTyxDQUFDQyxJQUFSO0FBQ0FELGdCQUFBQSxPQUFPLENBQUNFLE9BQVIsQ0FBZ0IsSUFBaEI7QUFDSDtBQUNKO0FBQ0o7OztxQ0FDVUosSSxFQUFjO0FBQ3JCLGlCQUFLLElBQUlGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0wsTUFBTCxDQUFZUSxNQUFoQyxFQUF3Q0gsQ0FBQyxFQUF6QyxFQUE2QztBQUN6QyxrQkFBTUksT0FBTyxHQUFHLEtBQUtULE1BQUwsQ0FBWUssQ0FBWixDQUFoQjs7QUFDQSxrQkFBSUksT0FBTyxDQUFDRixJQUFSLElBQWdCQSxJQUFwQixFQUEwQjtBQUN0QkUsZ0JBQUFBLE9BQU8sQ0FBQ0csV0FBUixDQUFvQixLQUFLWCxpQkFBekI7QUFDSDtBQUNKO0FBQ0o7OzswQ0FFZVksTSxFQUFnQjtBQUM1QixpQkFBS1osaUJBQUwsR0FBeUJZLE1BQXpCO0FBQ0g7OzsyQ0FDZ0JBLE0sRUFBaUQ7QUFBQSxnQkFBakNDLFdBQWlDLHVFQUFYLFNBQVc7QUFDOUQsaUJBQUtaLFNBQUwsR0FBaUJXLE1BQWpCOztBQUNBLGlCQUFLLElBQUlSLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0wsTUFBTCxDQUFZUSxNQUFoQyxFQUF3Q0gsQ0FBQyxFQUF6QyxFQUE2QztBQUN6QyxrQkFBTUksT0FBTyxHQUFHLEtBQUtULE1BQUwsQ0FBWUssQ0FBWixDQUFoQjs7QUFDQSxrQkFBSUksT0FBTyxDQUFDRixJQUFSLElBQWdCTyxXQUFwQixFQUFpQztBQUM3QkwsZ0JBQUFBLE9BQU8sQ0FBQ00sU0FBUixDQUFrQixLQUFLYixTQUF2QjtBQUNIO0FBQ0o7QUFDSjs7OztBQTVDRDs4QkFFb0M7QUFBRSxtQkFBTyxLQUFLYyxRQUFaO0FBQXVCOzs7NEJBQ3hDQyxDLEVBQWlCO0FBQUUsaUJBQUtELFFBQUwsR0FBZ0JDLENBQWhCO0FBQW9COzs7O1FBSjlCdEIsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgQXVkaW9Tb3VyY2UsIEF1ZGlvQ2xpcCwgZ2FtZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IExvYWRNYW5hZ2VyIH0gZnJvbSAnLi4vTG9hZC9Mb2FkTWFuYWdlcic7XG5pbXBvcnQgeyBNeUxpc3RDb21tb24gfSBmcm9tICcuLi9NeU1hdGgvTXlMaXN0Q29tbW9uJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdTb3VuZE1hbmFnZXInKVxuZXhwb3J0IGNsYXNzIFNvdW5kTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoq5Y2V5L6LICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgSW5zdGFuY2U6IFNvdW5kTWFuYWdlcjtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJKCk6IFNvdW5kTWFuYWdlciB7IHJldHVybiB0aGlzLkluc3RhbmNlOyB9XG4gICAgcHJpdmF0ZSBzdGF0aWMgc2V0IGkodjogU291bmRNYW5hZ2VyKSB7IHRoaXMuSW5zdGFuY2UgPSB2OyB9XG5cbiAgICBhdWRpb3M6IEF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBBdWRpb1NvdXJjZVZvbHVtZTogbnVtYmVyID0gMTtcbiAgICBCR01Wb2x1bWU6IG51bWJlciA9IDE7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XG4gICAgICAgIFNvdW5kTWFuYWdlci5pID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChTb3VuZE1hbmFnZXIpO1xuICAgIH1cblxuICAgIFBsYXlCR011c2ljKG5hbWU6IHN0cmluZyA9IFwiQkdNdXNpY1wiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hdWRpb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmF1ZGlvc1tpXTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm5hbWUgPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucGxheSgpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0TG9vcCh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBQbGF5U291cmNlKG5hbWU6IHN0cmluZykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXVkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5hdWRpb3NbaV07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5uYW1lID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBsYXlPbmVTaG90KHRoaXMuQXVkaW9Tb3VyY2VWb2x1bWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgU2V0U291cmNlVm9sdW1lKHZvbHVtZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuQXVkaW9Tb3VyY2VWb2x1bWUgPSB2b2x1bWU7XG4gICAgfVxuICAgIFNldEJHTXVzaWNWb2x1bWUodm9sdW1lOiBudW1iZXIsIEJHTXVzaWNOYW1lOiBzdHJpbmcgPSBcIkJHTXVzaWNcIikge1xuICAgICAgICB0aGlzLkJHTVZvbHVtZSA9IHZvbHVtZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmF1ZGlvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuYXVkaW9zW2ldO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PSBCR011c2ljTmFtZSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0Vm9sdW1lKHRoaXMuQkdNVm9sdW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==