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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vU291bmQvU291bmRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJnYW1lIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiU291bmRNYW5hZ2VyIiwiSSIsIkluc3RhbmNlIiwiaSIsInYiLCJvbkxvYWQiLCJhZGRQZXJzaXN0Um9vdE5vZGUiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiUGxheUJHTXVzaWMiLCJuYW1lIiwiYXVkaW9zIiwibGVuZ3RoIiwiZWxlbWVudCIsInBsYXkiLCJzZXRMb29wIiwiUGxheVNvdXJjZSIsInBsYXlPbmVTaG90IiwiQXVkaW9Tb3VyY2VWb2x1bWUiLCJTZXRTb3VyY2VWb2x1bWUiLCJ2b2x1bWUiLCJTZXRCR011c2ljVm9sdW1lIiwiQkdNdXNpY05hbWUiLCJCR01Wb2x1bWUiLCJzZXRWb2x1bWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBeUNDLE1BQUFBLEksT0FBQUEsSTs7Ozs7OztPQUV4RDtBQUFFQyxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsTyxHQUF3QkosVTs7OEJBR2pCSyxZLFdBRFpGLE9BQU8sQ0FBQyxjQUFELEMsbUNBQVIsTUFDYUUsWUFEYixTQUNrQ0osU0FEbEMsQ0FDNEM7QUFBQTtBQUFBOztBQUFBLDBDQU1sQixFQU5rQjs7QUFBQSxxREFRWixDQVJZOztBQUFBLDZDQVNwQixDQVRvQjtBQUFBOztBQUd4QyxtQkFBa0JLLENBQWxCLEdBQW9DO0FBQUUsaUJBQU8sS0FBS0MsUUFBWjtBQUF1Qjs7QUFDN0QsbUJBQW1CQyxDQUFuQixDQUFxQkMsQ0FBckIsRUFBc0M7QUFBRSxlQUFLRixRQUFMLEdBQWdCRSxDQUFoQjtBQUFvQjs7QUFPNURDLFFBQUFBLE1BQU0sR0FBRztBQUNMUixVQUFBQSxJQUFJLENBQUNTLGtCQUFMLENBQXdCLEtBQUtDLElBQTdCO0FBQ0FQLFVBQUFBLFlBQVksQ0FBQ0csQ0FBYixHQUFpQixLQUFLSSxJQUFMLENBQVVDLFlBQVYsQ0FBdUJSLFlBQXZCLENBQWpCO0FBQ0g7O0FBRURTLFFBQUFBLFdBQVcsQ0FBQ0MsSUFBWSxHQUFHLFNBQWhCLEVBQTJCO0FBQ2xDLGVBQUssSUFBSVAsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLUSxNQUFMLENBQVlDLE1BQWhDLEVBQXdDVCxDQUFDLEVBQXpDLEVBQTZDO0FBQ3pDLGtCQUFNVSxPQUFPLEdBQUcsS0FBS0YsTUFBTCxDQUFZUixDQUFaLENBQWhCOztBQUNBLGdCQUFJVSxPQUFPLENBQUNILElBQVIsSUFBZ0JBLElBQXBCLEVBQTBCO0FBQ3RCRyxjQUFBQSxPQUFPLENBQUNDLElBQVI7QUFDQUQsY0FBQUEsT0FBTyxDQUFDRSxPQUFSLENBQWdCLElBQWhCO0FBQ0g7QUFDSjtBQUNKOztBQUNEQyxRQUFBQSxVQUFVLENBQUNOLElBQUQsRUFBZTtBQUNyQixlQUFLLElBQUlQLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS1EsTUFBTCxDQUFZQyxNQUFoQyxFQUF3Q1QsQ0FBQyxFQUF6QyxFQUE2QztBQUN6QyxrQkFBTVUsT0FBTyxHQUFHLEtBQUtGLE1BQUwsQ0FBWVIsQ0FBWixDQUFoQjs7QUFDQSxnQkFBSVUsT0FBTyxDQUFDSCxJQUFSLElBQWdCQSxJQUFwQixFQUEwQjtBQUN0QkcsY0FBQUEsT0FBTyxDQUFDSSxXQUFSLENBQW9CLEtBQUtDLGlCQUF6QjtBQUNIO0FBQ0o7QUFDSjs7QUFFREMsUUFBQUEsZUFBZSxDQUFDQyxNQUFELEVBQWlCO0FBQzVCLGVBQUtGLGlCQUFMLEdBQXlCRSxNQUF6QjtBQUNIOztBQUNEQyxRQUFBQSxnQkFBZ0IsQ0FBQ0QsTUFBRCxFQUFpQkUsV0FBbUIsR0FBRyxTQUF2QyxFQUFrRDtBQUM5RCxlQUFLQyxTQUFMLEdBQWlCSCxNQUFqQjs7QUFDQSxlQUFLLElBQUlqQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtRLE1BQUwsQ0FBWUMsTUFBaEMsRUFBd0NULENBQUMsRUFBekMsRUFBNkM7QUFDekMsa0JBQU1VLE9BQU8sR0FBRyxLQUFLRixNQUFMLENBQVlSLENBQVosQ0FBaEI7O0FBQ0EsZ0JBQUlVLE9BQU8sQ0FBQ0gsSUFBUixJQUFnQlksV0FBcEIsRUFBaUM7QUFDN0JULGNBQUFBLE9BQU8sQ0FBQ1csU0FBUixDQUFrQixLQUFLRCxTQUF2QjtBQUNIO0FBQ0o7QUFDSjs7QUE3Q3VDLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIEF1ZGlvU291cmNlLCBBdWRpb0NsaXAsIGdhbWUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBNeUxpc3RDb21tb24gfSBmcm9tICcuLi9NeU1hdGgvTXlMaXN0Q29tbW9uJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdTb3VuZE1hbmFnZXInKVxuZXhwb3J0IGNsYXNzIFNvdW5kTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoq5Y2V5L6LICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgSW5zdGFuY2U6IFNvdW5kTWFuYWdlcjtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJKCk6IFNvdW5kTWFuYWdlciB7IHJldHVybiB0aGlzLkluc3RhbmNlOyB9XG4gICAgcHJpdmF0ZSBzdGF0aWMgc2V0IGkodjogU291bmRNYW5hZ2VyKSB7IHRoaXMuSW5zdGFuY2UgPSB2OyB9XG5cbiAgICBhdWRpb3M6IEF1ZGlvQ2xpcFtdID0gW107XG5cbiAgICBBdWRpb1NvdXJjZVZvbHVtZTogbnVtYmVyID0gMTtcbiAgICBCR01Wb2x1bWU6IG51bWJlciA9IDE7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XG4gICAgICAgIFNvdW5kTWFuYWdlci5pID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChTb3VuZE1hbmFnZXIpIGFzIFNvdW5kTWFuYWdlcjtcbiAgICB9XG5cbiAgICBQbGF5QkdNdXNpYyhuYW1lOiBzdHJpbmcgPSBcIkJHTXVzaWNcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXVkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5hdWRpb3NbaV07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5uYW1lID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBsYXkoKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldExvb3AodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgUGxheVNvdXJjZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmF1ZGlvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuYXVkaW9zW2ldO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5wbGF5T25lU2hvdCh0aGlzLkF1ZGlvU291cmNlVm9sdW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIFNldFNvdXJjZVZvbHVtZSh2b2x1bWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLkF1ZGlvU291cmNlVm9sdW1lID0gdm9sdW1lO1xuICAgIH1cbiAgICBTZXRCR011c2ljVm9sdW1lKHZvbHVtZTogbnVtYmVyLCBCR011c2ljTmFtZTogc3RyaW5nID0gXCJCR011c2ljXCIpIHtcbiAgICAgICAgdGhpcy5CR01Wb2x1bWUgPSB2b2x1bWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hdWRpb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmF1ZGlvc1tpXTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm5hbWUgPT0gQkdNdXNpY05hbWUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldFZvbHVtZSh0aGlzLkJHTVZvbHVtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=