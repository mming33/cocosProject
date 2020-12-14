System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, game, _dec, _class, _class2, _temp, _crd, ccclass, property, SoundManager;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
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
      _crd = true;

      _cclegacy._RF.push({}, "a168fXzgwBIDpIAgyJuweXS", "SoundManager", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SoundManager", SoundManager = (_dec = ccclass('SoundManager'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SoundManager, _Component);

        function SoundManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "audios", []);

          _defineProperty(_assertThisInitialized(_this), "AudioSourceVolume", 1);

          _defineProperty(_assertThisInitialized(_this), "BGMVolume", 1);

          return _this;
        }

        var _proto = SoundManager.prototype;

        _proto.onLoad = function onLoad() {
          game.addPersistRootNode(this.node);
          SoundManager.i = this.node.getComponent(SoundManager);
        };

        _proto.PlayBGMusic = function PlayBGMusic(name) {
          if (name === void 0) {
            name = "BGMusic";
          }

          for (var i = 0; i < this.audios.length; i++) {
            var element = this.audios[i];

            if (element.name == name) {
              element.play();
              element.setLoop(true);
            }
          }
        };

        _proto.PlaySource = function PlaySource(name) {
          for (var i = 0; i < this.audios.length; i++) {
            var element = this.audios[i];

            if (element.name == name) {
              element.playOneShot(this.AudioSourceVolume);
            }
          }
        };

        _proto.SetSourceVolume = function SetSourceVolume(volume) {
          this.AudioSourceVolume = volume;
        };

        _proto.SetBGMusicVolume = function SetBGMusicVolume(volume, BGMusicName) {
          if (BGMusicName === void 0) {
            BGMusicName = "BGMusic";
          }

          this.BGMVolume = volume;

          for (var i = 0; i < this.audios.length; i++) {
            var element = this.audios[i];

            if (element.name == BGMusicName) {
              element.setVolume(this.BGMVolume);
            }
          }
        };

        _createClass(SoundManager, null, [{
          key: "I",
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
      }(Component), _defineProperty(_class2, "Instance", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9Tb3VuZC9Tb3VuZE1hbmFnZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsImdhbWUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJTb3VuZE1hbmFnZXIiLCJvbkxvYWQiLCJhZGRQZXJzaXN0Um9vdE5vZGUiLCJub2RlIiwiaSIsImdldENvbXBvbmVudCIsIlBsYXlCR011c2ljIiwibmFtZSIsImF1ZGlvcyIsImxlbmd0aCIsImVsZW1lbnQiLCJwbGF5Iiwic2V0TG9vcCIsIlBsYXlTb3VyY2UiLCJwbGF5T25lU2hvdCIsIkF1ZGlvU291cmNlVm9sdW1lIiwiU2V0U291cmNlVm9sdW1lIiwidm9sdW1lIiwiU2V0QkdNdXNpY1ZvbHVtZSIsIkJHTXVzaWNOYW1lIiwiQkdNVm9sdW1lIiwic2V0Vm9sdW1lIiwiSW5zdGFuY2UiLCJ2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBeUNDLE1BQUFBLEksT0FBQUEsSTs7Ozs7OztBQUd0REMsTUFBQUEsTyxHQUFzQkgsVSxDQUF0QkcsTztBQUFTQyxNQUFBQSxRLEdBQWFKLFUsQ0FBYkksUTs7OEJBR0pDLFksV0FEWkYsT0FBTyxDQUFDLGNBQUQsQzs7Ozs7Ozs7Ozs7O21FQU9rQixFOzs4RUFFTSxDOztzRUFDUixDOzs7Ozs7O2VBRXBCRyxNLEdBQUEsa0JBQVM7QUFDTEosVUFBQUEsSUFBSSxDQUFDSyxrQkFBTCxDQUF3QixLQUFLQyxJQUE3QjtBQUNBSCxVQUFBQSxZQUFZLENBQUNJLENBQWIsR0FBaUIsS0FBS0QsSUFBTCxDQUFVRSxZQUFWLENBQXVCTCxZQUF2QixDQUFqQjtBQUNILFM7O2VBRURNLFcsR0FBQSxxQkFBWUMsSUFBWixFQUFzQztBQUFBLGNBQTFCQSxJQUEwQjtBQUExQkEsWUFBQUEsSUFBMEIsR0FBWCxTQUFXO0FBQUE7O0FBQ2xDLGVBQUssSUFBSUgsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLSSxNQUFMLENBQVlDLE1BQWhDLEVBQXdDTCxDQUFDLEVBQXpDLEVBQTZDO0FBQ3pDLGdCQUFNTSxPQUFPLEdBQUcsS0FBS0YsTUFBTCxDQUFZSixDQUFaLENBQWhCOztBQUNBLGdCQUFJTSxPQUFPLENBQUNILElBQVIsSUFBZ0JBLElBQXBCLEVBQTBCO0FBQ3RCRyxjQUFBQSxPQUFPLENBQUNDLElBQVI7QUFDQUQsY0FBQUEsT0FBTyxDQUFDRSxPQUFSLENBQWdCLElBQWhCO0FBQ0g7QUFDSjtBQUNKLFM7O2VBQ0RDLFUsR0FBQSxvQkFBV04sSUFBWCxFQUF5QjtBQUNyQixlQUFLLElBQUlILENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0ksTUFBTCxDQUFZQyxNQUFoQyxFQUF3Q0wsQ0FBQyxFQUF6QyxFQUE2QztBQUN6QyxnQkFBTU0sT0FBTyxHQUFHLEtBQUtGLE1BQUwsQ0FBWUosQ0FBWixDQUFoQjs7QUFDQSxnQkFBSU0sT0FBTyxDQUFDSCxJQUFSLElBQWdCQSxJQUFwQixFQUEwQjtBQUN0QkcsY0FBQUEsT0FBTyxDQUFDSSxXQUFSLENBQW9CLEtBQUtDLGlCQUF6QjtBQUNIO0FBQ0o7QUFDSixTOztlQUVEQyxlLEdBQUEseUJBQWdCQyxNQUFoQixFQUFnQztBQUM1QixlQUFLRixpQkFBTCxHQUF5QkUsTUFBekI7QUFDSCxTOztlQUNEQyxnQixHQUFBLDBCQUFpQkQsTUFBakIsRUFBaUNFLFdBQWpDLEVBQWtFO0FBQUEsY0FBakNBLFdBQWlDO0FBQWpDQSxZQUFBQSxXQUFpQyxHQUFYLFNBQVc7QUFBQTs7QUFDOUQsZUFBS0MsU0FBTCxHQUFpQkgsTUFBakI7O0FBQ0EsZUFBSyxJQUFJYixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtJLE1BQUwsQ0FBWUMsTUFBaEMsRUFBd0NMLENBQUMsRUFBekMsRUFBNkM7QUFDekMsZ0JBQU1NLE9BQU8sR0FBRyxLQUFLRixNQUFMLENBQVlKLENBQVosQ0FBaEI7O0FBQ0EsZ0JBQUlNLE9BQU8sQ0FBQ0gsSUFBUixJQUFnQlksV0FBcEIsRUFBaUM7QUFDN0JULGNBQUFBLE9BQU8sQ0FBQ1csU0FBUixDQUFrQixLQUFLRCxTQUF2QjtBQUNIO0FBQ0o7QUFDSixTOzs7OzhCQTFDbUM7QUFBRSxtQkFBTyxLQUFLRSxRQUFaO0FBQXVCOzs7NEJBQ3hDQyxDLEVBQWlCO0FBQUUsaUJBQUtELFFBQUwsR0FBZ0JDLENBQWhCO0FBQW9COzs7O1FBSjlCM0IsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgQXVkaW9Tb3VyY2UsIEF1ZGlvQ2xpcCwgZ2FtZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IExvYWRNYW5hZ2VyIH0gZnJvbSAnLi4vTG9hZC9Mb2FkTWFuYWdlcic7XG5pbXBvcnQgeyBNeUxpc3RDb21tb24gfSBmcm9tICcuLi9NeU1hdGgvTXlMaXN0Q29tbW9uJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdTb3VuZE1hbmFnZXInKVxuZXhwb3J0IGNsYXNzIFNvdW5kTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoq5Y2V5L6LICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgSW5zdGFuY2U6IFNvdW5kTWFuYWdlcjtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJKCk6IFNvdW5kTWFuYWdlciB7IHJldHVybiB0aGlzLkluc3RhbmNlOyB9XG4gICAgcHJpdmF0ZSBzdGF0aWMgc2V0IGkodjogU291bmRNYW5hZ2VyKSB7IHRoaXMuSW5zdGFuY2UgPSB2OyB9XG5cbiAgICBhdWRpb3M6IEF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBBdWRpb1NvdXJjZVZvbHVtZTogbnVtYmVyID0gMTtcbiAgICBCR01Wb2x1bWU6IG51bWJlciA9IDE7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XG4gICAgICAgIFNvdW5kTWFuYWdlci5pID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChTb3VuZE1hbmFnZXIpIGFzIFNvdW5kTWFuYWdlcjtcbiAgICB9XG5cbiAgICBQbGF5QkdNdXNpYyhuYW1lOiBzdHJpbmcgPSBcIkJHTXVzaWNcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXVkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5hdWRpb3NbaV07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5uYW1lID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBsYXkoKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldExvb3AodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgUGxheVNvdXJjZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmF1ZGlvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuYXVkaW9zW2ldO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5wbGF5T25lU2hvdCh0aGlzLkF1ZGlvU291cmNlVm9sdW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIFNldFNvdXJjZVZvbHVtZSh2b2x1bWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLkF1ZGlvU291cmNlVm9sdW1lID0gdm9sdW1lO1xuICAgIH1cbiAgICBTZXRCR011c2ljVm9sdW1lKHZvbHVtZTogbnVtYmVyLCBCR011c2ljTmFtZTogc3RyaW5nID0gXCJCR011c2ljXCIpIHtcbiAgICAgICAgdGhpcy5CR01Wb2x1bWUgPSB2b2x1bWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hdWRpb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmF1ZGlvc1tpXTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm5hbWUgPT0gQkdNdXNpY05hbWUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldFZvbHVtZSh0aGlzLkJHTVZvbHVtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=