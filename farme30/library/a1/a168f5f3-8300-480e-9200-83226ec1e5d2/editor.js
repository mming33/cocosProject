System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, game, _dec, _class, _class2, _temp, _crd, ccclass, property, SoundManager;

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("SoundManager", SoundManager = (_dec = ccclass('SoundManager'), _dec(_class = (_temp = _class2 = class SoundManager extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "audios", []);

          _defineProperty(this, "AudioSourceVolume", 1);

          _defineProperty(this, "BGMVolume", 1);
        }

        static get I() {
          return this.Instance;
        }

        static set i(v) {
          this.Instance = v;
        }

        onLoad() {
          game.addPersistRootNode(this.node);
          SoundManager.i = this.node.getComponent(SoundManager);
        }

        PlayBGMusic(name = "BGMusic") {
          for (let i = 0; i < this.audios.length; i++) {
            const element = this.audios[i];

            if (element.name == name) {
              element.play();
              element.setLoop(true);
            }
          }
        }

        PlaySource(name) {
          for (let i = 0; i < this.audios.length; i++) {
            const element = this.audios[i];

            if (element.name == name) {
              element.playOneShot(this.AudioSourceVolume);
            }
          }
        }

        SetSourceVolume(volume) {
          this.AudioSourceVolume = volume;
        }

        SetBGMusicVolume(volume, BGMusicName = "BGMusic") {
          this.BGMVolume = volume;

          for (let i = 0; i < this.audios.length; i++) {
            const element = this.audios[i];

            if (element.name == BGMusicName) {
              element.setVolume(this.BGMVolume);
            }
          }
        }

      }, _defineProperty(_class2, "Instance", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9Tb3VuZC9Tb3VuZE1hbmFnZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsImdhbWUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJTb3VuZE1hbmFnZXIiLCJJIiwiSW5zdGFuY2UiLCJpIiwidiIsIm9uTG9hZCIsImFkZFBlcnNpc3RSb290Tm9kZSIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJQbGF5QkdNdXNpYyIsIm5hbWUiLCJhdWRpb3MiLCJsZW5ndGgiLCJlbGVtZW50IiwicGxheSIsInNldExvb3AiLCJQbGF5U291cmNlIiwicGxheU9uZVNob3QiLCJBdWRpb1NvdXJjZVZvbHVtZSIsIlNldFNvdXJjZVZvbHVtZSIsInZvbHVtZSIsIlNldEJHTXVzaWNWb2x1bWUiLCJCR011c2ljTmFtZSIsIkJHTVZvbHVtZSIsInNldFZvbHVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUF5Q0MsTUFBQUEsSSxPQUFBQSxJOzs7Ozs7O09BR3hEO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCSixVOzs4QkFHakJLLFksV0FEWkYsT0FBTyxDQUFDLGNBQUQsQyxtQ0FBUixNQUNhRSxZQURiLFNBQ2tDSixTQURsQyxDQUM0QztBQUFBO0FBQUE7O0FBQUEsMENBTWxCLEVBTmtCOztBQUFBLHFEQVFaLENBUlk7O0FBQUEsNkNBU3BCLENBVG9CO0FBQUE7O0FBR3hDLG1CQUFrQkssQ0FBbEIsR0FBb0M7QUFBRSxpQkFBTyxLQUFLQyxRQUFaO0FBQXVCOztBQUM3RCxtQkFBbUJDLENBQW5CLENBQXFCQyxDQUFyQixFQUFzQztBQUFFLGVBQUtGLFFBQUwsR0FBZ0JFLENBQWhCO0FBQW9COztBQU81REMsUUFBQUEsTUFBTSxHQUFHO0FBQ0xSLFVBQUFBLElBQUksQ0FBQ1Msa0JBQUwsQ0FBd0IsS0FBS0MsSUFBN0I7QUFDQVAsVUFBQUEsWUFBWSxDQUFDRyxDQUFiLEdBQWlCLEtBQUtJLElBQUwsQ0FBVUMsWUFBVixDQUF1QlIsWUFBdkIsQ0FBakI7QUFDSDs7QUFFRFMsUUFBQUEsV0FBVyxDQUFDQyxJQUFZLEdBQUcsU0FBaEIsRUFBMkI7QUFDbEMsZUFBSyxJQUFJUCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtRLE1BQUwsQ0FBWUMsTUFBaEMsRUFBd0NULENBQUMsRUFBekMsRUFBNkM7QUFDekMsa0JBQU1VLE9BQU8sR0FBRyxLQUFLRixNQUFMLENBQVlSLENBQVosQ0FBaEI7O0FBQ0EsZ0JBQUlVLE9BQU8sQ0FBQ0gsSUFBUixJQUFnQkEsSUFBcEIsRUFBMEI7QUFDdEJHLGNBQUFBLE9BQU8sQ0FBQ0MsSUFBUjtBQUNBRCxjQUFBQSxPQUFPLENBQUNFLE9BQVIsQ0FBZ0IsSUFBaEI7QUFDSDtBQUNKO0FBQ0o7O0FBQ0RDLFFBQUFBLFVBQVUsQ0FBQ04sSUFBRCxFQUFlO0FBQ3JCLGVBQUssSUFBSVAsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLUSxNQUFMLENBQVlDLE1BQWhDLEVBQXdDVCxDQUFDLEVBQXpDLEVBQTZDO0FBQ3pDLGtCQUFNVSxPQUFPLEdBQUcsS0FBS0YsTUFBTCxDQUFZUixDQUFaLENBQWhCOztBQUNBLGdCQUFJVSxPQUFPLENBQUNILElBQVIsSUFBZ0JBLElBQXBCLEVBQTBCO0FBQ3RCRyxjQUFBQSxPQUFPLENBQUNJLFdBQVIsQ0FBb0IsS0FBS0MsaUJBQXpCO0FBQ0g7QUFDSjtBQUNKOztBQUVEQyxRQUFBQSxlQUFlLENBQUNDLE1BQUQsRUFBaUI7QUFDNUIsZUFBS0YsaUJBQUwsR0FBeUJFLE1BQXpCO0FBQ0g7O0FBQ0RDLFFBQUFBLGdCQUFnQixDQUFDRCxNQUFELEVBQWlCRSxXQUFtQixHQUFHLFNBQXZDLEVBQWtEO0FBQzlELGVBQUtDLFNBQUwsR0FBaUJILE1BQWpCOztBQUNBLGVBQUssSUFBSWpCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS1EsTUFBTCxDQUFZQyxNQUFoQyxFQUF3Q1QsQ0FBQyxFQUF6QyxFQUE2QztBQUN6QyxrQkFBTVUsT0FBTyxHQUFHLEtBQUtGLE1BQUwsQ0FBWVIsQ0FBWixDQUFoQjs7QUFDQSxnQkFBSVUsT0FBTyxDQUFDSCxJQUFSLElBQWdCWSxXQUFwQixFQUFpQztBQUM3QlQsY0FBQUEsT0FBTyxDQUFDVyxTQUFSLENBQWtCLEtBQUtELFNBQXZCO0FBQ0g7QUFDSjtBQUNKOztBQTdDdUMsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgQXVkaW9Tb3VyY2UsIEF1ZGlvQ2xpcCwgZ2FtZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IExvYWRNYW5hZ2VyIH0gZnJvbSAnLi4vTG9hZC9Mb2FkTWFuYWdlcic7XG5pbXBvcnQgeyBNeUxpc3RDb21tb24gfSBmcm9tICcuLi9NeU1hdGgvTXlMaXN0Q29tbW9uJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdTb3VuZE1hbmFnZXInKVxuZXhwb3J0IGNsYXNzIFNvdW5kTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoq5Y2V5L6LICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgSW5zdGFuY2U6IFNvdW5kTWFuYWdlcjtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJKCk6IFNvdW5kTWFuYWdlciB7IHJldHVybiB0aGlzLkluc3RhbmNlOyB9XG4gICAgcHJpdmF0ZSBzdGF0aWMgc2V0IGkodjogU291bmRNYW5hZ2VyKSB7IHRoaXMuSW5zdGFuY2UgPSB2OyB9XG5cbiAgICBhdWRpb3M6IEF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBBdWRpb1NvdXJjZVZvbHVtZTogbnVtYmVyID0gMTtcbiAgICBCR01Wb2x1bWU6IG51bWJlciA9IDE7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XG4gICAgICAgIFNvdW5kTWFuYWdlci5pID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChTb3VuZE1hbmFnZXIpIGFzIFNvdW5kTWFuYWdlcjtcbiAgICB9XG5cbiAgICBQbGF5QkdNdXNpYyhuYW1lOiBzdHJpbmcgPSBcIkJHTXVzaWNcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXVkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5hdWRpb3NbaV07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5uYW1lID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBsYXkoKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldExvb3AodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgUGxheVNvdXJjZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmF1ZGlvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuYXVkaW9zW2ldO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5wbGF5T25lU2hvdCh0aGlzLkF1ZGlvU291cmNlVm9sdW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIFNldFNvdXJjZVZvbHVtZSh2b2x1bWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLkF1ZGlvU291cmNlVm9sdW1lID0gdm9sdW1lO1xuICAgIH1cbiAgICBTZXRCR011c2ljVm9sdW1lKHZvbHVtZTogbnVtYmVyLCBCR011c2ljTmFtZTogc3RyaW5nID0gXCJCR011c2ljXCIpIHtcbiAgICAgICAgdGhpcy5CR01Wb2x1bWUgPSB2b2x1bWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hdWRpb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmF1ZGlvc1tpXTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm5hbWUgPT0gQkdNdXNpY05hbWUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldFZvbHVtZSh0aGlzLkJHTVZvbHVtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=