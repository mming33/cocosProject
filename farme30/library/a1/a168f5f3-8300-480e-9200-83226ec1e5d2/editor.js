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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vU291bmQvU291bmRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJnYW1lIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiU291bmRNYW5hZ2VyIiwiSSIsIkluc3RhbmNlIiwiaSIsInYiLCJvbkxvYWQiLCJhZGRQZXJzaXN0Um9vdE5vZGUiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiUGxheUJHTXVzaWMiLCJuYW1lIiwiYXVkaW9zIiwibGVuZ3RoIiwiZWxlbWVudCIsInBsYXkiLCJzZXRMb29wIiwiUGxheVNvdXJjZSIsInBsYXlPbmVTaG90IiwiQXVkaW9Tb3VyY2VWb2x1bWUiLCJTZXRTb3VyY2VWb2x1bWUiLCJ2b2x1bWUiLCJTZXRCR011c2ljVm9sdW1lIiwiQkdNdXNpY05hbWUiLCJCR01Wb2x1bWUiLCJzZXRWb2x1bWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBeUNDLE1BQUFBLEksT0FBQUEsSTs7Ozs7OztPQUd4RDtBQUFFQyxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsTyxHQUF3QkosVTs7OEJBR2pCSyxZLFdBRFpGLE9BQU8sQ0FBQyxjQUFELEMsbUNBQVIsTUFDYUUsWUFEYixTQUNrQ0osU0FEbEMsQ0FDNEM7QUFBQTtBQUFBOztBQUFBLDBDQU1sQixFQU5rQjs7QUFBQSxxREFRWixDQVJZOztBQUFBLDZDQVNwQixDQVRvQjtBQUFBOztBQUd4QyxtQkFBa0JLLENBQWxCLEdBQW9DO0FBQUUsaUJBQU8sS0FBS0MsUUFBWjtBQUF1Qjs7QUFDN0QsbUJBQW1CQyxDQUFuQixDQUFxQkMsQ0FBckIsRUFBc0M7QUFBRSxlQUFLRixRQUFMLEdBQWdCRSxDQUFoQjtBQUFvQjs7QUFPNURDLFFBQUFBLE1BQU0sR0FBRztBQUNMUixVQUFBQSxJQUFJLENBQUNTLGtCQUFMLENBQXdCLEtBQUtDLElBQTdCO0FBQ0FQLFVBQUFBLFlBQVksQ0FBQ0csQ0FBYixHQUFpQixLQUFLSSxJQUFMLENBQVVDLFlBQVYsQ0FBdUJSLFlBQXZCLENBQWpCO0FBQ0g7O0FBRURTLFFBQUFBLFdBQVcsQ0FBQ0MsSUFBWSxHQUFHLFNBQWhCLEVBQTJCO0FBQ2xDLGVBQUssSUFBSVAsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLUSxNQUFMLENBQVlDLE1BQWhDLEVBQXdDVCxDQUFDLEVBQXpDLEVBQTZDO0FBQ3pDLGtCQUFNVSxPQUFPLEdBQUcsS0FBS0YsTUFBTCxDQUFZUixDQUFaLENBQWhCOztBQUNBLGdCQUFJVSxPQUFPLENBQUNILElBQVIsSUFBZ0JBLElBQXBCLEVBQTBCO0FBQ3RCRyxjQUFBQSxPQUFPLENBQUNDLElBQVI7QUFDQUQsY0FBQUEsT0FBTyxDQUFDRSxPQUFSLENBQWdCLElBQWhCO0FBQ0g7QUFDSjtBQUNKOztBQUNEQyxRQUFBQSxVQUFVLENBQUNOLElBQUQsRUFBZTtBQUNyQixlQUFLLElBQUlQLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS1EsTUFBTCxDQUFZQyxNQUFoQyxFQUF3Q1QsQ0FBQyxFQUF6QyxFQUE2QztBQUN6QyxrQkFBTVUsT0FBTyxHQUFHLEtBQUtGLE1BQUwsQ0FBWVIsQ0FBWixDQUFoQjs7QUFDQSxnQkFBSVUsT0FBTyxDQUFDSCxJQUFSLElBQWdCQSxJQUFwQixFQUEwQjtBQUN0QkcsY0FBQUEsT0FBTyxDQUFDSSxXQUFSLENBQW9CLEtBQUtDLGlCQUF6QjtBQUNIO0FBQ0o7QUFDSjs7QUFFREMsUUFBQUEsZUFBZSxDQUFDQyxNQUFELEVBQWlCO0FBQzVCLGVBQUtGLGlCQUFMLEdBQXlCRSxNQUF6QjtBQUNIOztBQUNEQyxRQUFBQSxnQkFBZ0IsQ0FBQ0QsTUFBRCxFQUFpQkUsV0FBbUIsR0FBRyxTQUF2QyxFQUFrRDtBQUM5RCxlQUFLQyxTQUFMLEdBQWlCSCxNQUFqQjs7QUFDQSxlQUFLLElBQUlqQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtRLE1BQUwsQ0FBWUMsTUFBaEMsRUFBd0NULENBQUMsRUFBekMsRUFBNkM7QUFDekMsa0JBQU1VLE9BQU8sR0FBRyxLQUFLRixNQUFMLENBQVlSLENBQVosQ0FBaEI7O0FBQ0EsZ0JBQUlVLE9BQU8sQ0FBQ0gsSUFBUixJQUFnQlksV0FBcEIsRUFBaUM7QUFDN0JULGNBQUFBLE9BQU8sQ0FBQ1csU0FBUixDQUFrQixLQUFLRCxTQUF2QjtBQUNIO0FBQ0o7QUFDSjs7QUE3Q3VDLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIEF1ZGlvU291cmNlLCBBdWRpb0NsaXAsIGdhbWUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBMb2FkTWFuYWdlciB9IGZyb20gJy4uL0xvYWQvTG9hZE1hbmFnZXInO1xuaW1wb3J0IHsgTXlMaXN0Q29tbW9uIH0gZnJvbSAnLi4vTXlNYXRoL015TGlzdENvbW1vbic7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnU291bmRNYW5hZ2VyJylcbmV4cG9ydCBjbGFzcyBTb3VuZE1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKuWNleS+iyAqL1xuICAgIHByaXZhdGUgc3RhdGljIEluc3RhbmNlOiBTb3VuZE1hbmFnZXI7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgSSgpOiBTb3VuZE1hbmFnZXIgeyByZXR1cm4gdGhpcy5JbnN0YW5jZTsgfVxuICAgIHByaXZhdGUgc3RhdGljIHNldCBpKHY6IFNvdW5kTWFuYWdlcikgeyB0aGlzLkluc3RhbmNlID0gdjsgfVxuXG4gICAgYXVkaW9zOiBBdWRpb0NsaXBbXSA9IFtdO1xuXG4gICAgQXVkaW9Tb3VyY2VWb2x1bWU6IG51bWJlciA9IDE7XG4gICAgQkdNVm9sdW1lOiBudW1iZXIgPSAxO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBnYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xuICAgICAgICBTb3VuZE1hbmFnZXIuaSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoU291bmRNYW5hZ2VyKSBhcyBTb3VuZE1hbmFnZXI7XG4gICAgfVxuXG4gICAgUGxheUJHTXVzaWMobmFtZTogc3RyaW5nID0gXCJCR011c2ljXCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmF1ZGlvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuYXVkaW9zW2ldO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRMb29wKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFBsYXlTb3VyY2UobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hdWRpb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmF1ZGlvc1tpXTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm5hbWUgPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucGxheU9uZVNob3QodGhpcy5BdWRpb1NvdXJjZVZvbHVtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBTZXRTb3VyY2VWb2x1bWUodm9sdW1lOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5BdWRpb1NvdXJjZVZvbHVtZSA9IHZvbHVtZTtcbiAgICB9XG4gICAgU2V0QkdNdXNpY1ZvbHVtZSh2b2x1bWU6IG51bWJlciwgQkdNdXNpY05hbWU6IHN0cmluZyA9IFwiQkdNdXNpY1wiKSB7XG4gICAgICAgIHRoaXMuQkdNVm9sdW1lID0gdm9sdW1lO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXVkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5hdWRpb3NbaV07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5uYW1lID09IEJHTXVzaWNOYW1lKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRWb2x1bWUodGhpcy5CR01Wb2x1bWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19