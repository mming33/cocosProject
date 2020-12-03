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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9Tb3VuZC9Tb3VuZE1hbmFnZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsImdhbWUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJTb3VuZE1hbmFnZXIiLCJhdWRpb3MiLCJBdWRpb1NvdXJjZVZvbHVtZSIsIkJHTVZvbHVtZSIsImFkZFBlcnNpc3RSb290Tm9kZSIsIm5vZGUiLCJpIiwiZ2V0Q29tcG9uZW50IiwibmFtZSIsImxlbmd0aCIsImVsZW1lbnQiLCJwbGF5Iiwic2V0TG9vcCIsInBsYXlPbmVTaG90Iiwidm9sdW1lIiwiQkdNdXNpY05hbWUiLCJzZXRWb2x1bWUiLCJJbnN0YW5jZSIsInYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBeUNDLE1BQUFBLEksT0FBQUEsSTs7Ozs7O0FBR3REQyxNQUFBQSxPLEdBQXNCSCxVLENBQXRCRyxPO0FBQVNDLE1BQUFBLFEsR0FBYUosVSxDQUFiSSxROzs4QkFHSkMsWSxXQURaRixPQUFPLENBQUMsY0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Z0JBT0pHLE0sR0FBc0IsRTtnQkFFdEJDLGlCLEdBQTRCLEM7Z0JBQzVCQyxTLEdBQW9CLEM7Ozs7OzttQ0FFWDtBQUNMTixZQUFBQSxJQUFJLENBQUNPLGtCQUFMLENBQXdCLEtBQUtDLElBQTdCO0FBQ0FMLFlBQUFBLFlBQVksQ0FBQ00sQ0FBYixHQUFpQixLQUFLRCxJQUFMLENBQVVFLFlBQVYsQ0FBdUJQLFlBQXZCLENBQWpCO0FBQ0g7Ozt3Q0FFcUM7QUFBQSxnQkFBMUJRLElBQTBCLHVFQUFYLFNBQVc7O0FBQ2xDLGlCQUFLLElBQUlGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0wsTUFBTCxDQUFZUSxNQUFoQyxFQUF3Q0gsQ0FBQyxFQUF6QyxFQUE2QztBQUN6QyxrQkFBTUksT0FBTyxHQUFHLEtBQUtULE1BQUwsQ0FBWUssQ0FBWixDQUFoQjs7QUFDQSxrQkFBSUksT0FBTyxDQUFDRixJQUFSLElBQWdCQSxJQUFwQixFQUEwQjtBQUN0QkUsZ0JBQUFBLE9BQU8sQ0FBQ0MsSUFBUjtBQUNBRCxnQkFBQUEsT0FBTyxDQUFDRSxPQUFSLENBQWdCLElBQWhCO0FBQ0g7QUFDSjtBQUNKOzs7cUNBQ1VKLEksRUFBYztBQUNyQixpQkFBSyxJQUFJRixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtMLE1BQUwsQ0FBWVEsTUFBaEMsRUFBd0NILENBQUMsRUFBekMsRUFBNkM7QUFDekMsa0JBQU1JLE9BQU8sR0FBRyxLQUFLVCxNQUFMLENBQVlLLENBQVosQ0FBaEI7O0FBQ0Esa0JBQUlJLE9BQU8sQ0FBQ0YsSUFBUixJQUFnQkEsSUFBcEIsRUFBMEI7QUFDdEJFLGdCQUFBQSxPQUFPLENBQUNHLFdBQVIsQ0FBb0IsS0FBS1gsaUJBQXpCO0FBQ0g7QUFDSjtBQUNKOzs7MENBRWVZLE0sRUFBZ0I7QUFDNUIsaUJBQUtaLGlCQUFMLEdBQXlCWSxNQUF6QjtBQUNIOzs7MkNBQ2dCQSxNLEVBQWlEO0FBQUEsZ0JBQWpDQyxXQUFpQyx1RUFBWCxTQUFXO0FBQzlELGlCQUFLWixTQUFMLEdBQWlCVyxNQUFqQjs7QUFDQSxpQkFBSyxJQUFJUixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtMLE1BQUwsQ0FBWVEsTUFBaEMsRUFBd0NILENBQUMsRUFBekMsRUFBNkM7QUFDekMsa0JBQU1JLE9BQU8sR0FBRyxLQUFLVCxNQUFMLENBQVlLLENBQVosQ0FBaEI7O0FBQ0Esa0JBQUlJLE9BQU8sQ0FBQ0YsSUFBUixJQUFnQk8sV0FBcEIsRUFBaUM7QUFDN0JMLGdCQUFBQSxPQUFPLENBQUNNLFNBQVIsQ0FBa0IsS0FBS2IsU0FBdkI7QUFDSDtBQUNKO0FBQ0o7Ozs7QUE1Q0Q7OEJBRW9DO0FBQUUsbUJBQU8sS0FBS2MsUUFBWjtBQUF1Qjs7OzRCQUN4Q0MsQyxFQUFpQjtBQUFFLGlCQUFLRCxRQUFMLEdBQWdCQyxDQUFoQjtBQUFvQjs7OztRQUo5QnRCLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIEF1ZGlvU291cmNlLCBBdWRpb0NsaXAsIGdhbWUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBMb2FkTWFuYWdlciB9IGZyb20gJy4uL0xvYWQvTG9hZE1hbmFnZXInO1xuaW1wb3J0IHsgTXlMaXN0Q29tbW9uIH0gZnJvbSAnLi4vTXlNYXRoL015TGlzdENvbW1vbic7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnU291bmRNYW5hZ2VyJylcbmV4cG9ydCBjbGFzcyBTb3VuZE1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKuWNleS+iyAqL1xuICAgIHByaXZhdGUgc3RhdGljIEluc3RhbmNlOiBTb3VuZE1hbmFnZXI7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgSSgpOiBTb3VuZE1hbmFnZXIgeyByZXR1cm4gdGhpcy5JbnN0YW5jZTsgfVxuICAgIHByaXZhdGUgc3RhdGljIHNldCBpKHY6IFNvdW5kTWFuYWdlcikgeyB0aGlzLkluc3RhbmNlID0gdjsgfVxuXG4gICAgYXVkaW9zOiBBdWRpb0NsaXBbXSA9IFtdO1xuXG4gICAgQXVkaW9Tb3VyY2VWb2x1bWU6IG51bWJlciA9IDE7XG4gICAgQkdNVm9sdW1lOiBudW1iZXIgPSAxO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBnYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICBTb3VuZE1hbmFnZXIuaSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoU291bmRNYW5hZ2VyKTtcbiAgICB9XG5cbiAgICBQbGF5QkdNdXNpYyhuYW1lOiBzdHJpbmcgPSBcIkJHTXVzaWNcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXVkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5hdWRpb3NbaV07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5uYW1lID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBsYXkoKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldExvb3AodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgUGxheVNvdXJjZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmF1ZGlvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuYXVkaW9zW2ldO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5wbGF5T25lU2hvdCh0aGlzLkF1ZGlvU291cmNlVm9sdW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIFNldFNvdXJjZVZvbHVtZSh2b2x1bWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLkF1ZGlvU291cmNlVm9sdW1lID0gdm9sdW1lO1xuICAgIH1cbiAgICBTZXRCR011c2ljVm9sdW1lKHZvbHVtZTogbnVtYmVyLCBCR011c2ljTmFtZTogc3RyaW5nID0gXCJCR011c2ljXCIpIHtcbiAgICAgICAgdGhpcy5CR01Wb2x1bWUgPSB2b2x1bWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hdWRpb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmF1ZGlvc1tpXTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm5hbWUgPT0gQkdNdXNpY05hbWUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldFZvbHVtZSh0aGlzLkJHTVZvbHVtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=