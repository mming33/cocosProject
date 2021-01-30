System.register(["cce.code-quality.cr", "cc", "../Load/LoadManager.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, resources, LoadManager, _dec, _class, _class2, _temp, _crd, ccclass, property, SoundManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfLoadManager(extras) {
    _reporterNs.report("LoadManager", "../Load/LoadManager", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      resources = _cc.resources;
    }, function (_LoadLoadManagerJs) {
      LoadManager = _LoadLoadManagerJs.LoadManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a168fXzgwBIDpIAgyJuweXS", "SoundManager", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SoundManager", SoundManager = (_dec = ccclass('SoundManager'), _dec(_class = (_temp = _class2 = class SoundManager {
        static get I() {
          if (!this.singleton) {
            this.singleton = new SoundManager();
          }

          return this.singleton;
        }

        /**
           * 加载音效，并初始化SoundManager.I.audios
           */
        static LoadSound() {
          resources.loadDir("Sounds", function (err, assets) {
            if (err) {
              console.error(err);
              return;
            }

            for (let i = 0; i < assets.length; i++) {
              const element = assets[i];
              SoundManager.audios.push(element);
            }

            (_crd && LoadManager === void 0 ? (_reportPossibleCrUseOfLoadManager({
              error: Error()
            }), LoadManager) : LoadManager).loadIndex++;
          });
        }

        static PlayBGMusic(name = "BGMusic") {
          for (let i = 0; i < this.audios.length; i++) {
            const element = this.audios[i];

            if (element.name == name) {
              element.play();
              element.setLoop(true);
            }
          }
        }

        static PlaySource(name) {
          for (let i = 0; i < this.audios.length; i++) {
            const element = this.audios[i];

            if (element.name == name) {
              element.playOneShot(this.AudioSourceVolume);
            }
          }
        }

        static SetSourceVolume(volume) {
          this.AudioSourceVolume = volume;
        }

        static SetBGMusicVolume(volume, BGMusicName = "BGMusic") {
          this.BGMVolume = volume;

          for (let i = 0; i < this.audios.length; i++) {
            const element = this.audios[i];

            if (element.name == BGMusicName) {
              element.setVolume(this.BGMVolume);
            }
          }
        }

      }, _defineProperty(_class2, "singleton", void 0), _defineProperty(_class2, "audios", []), _defineProperty(_class2, "AudioSourceVolume", 1), _defineProperty(_class2, "BGMVolume", 1), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vU291bmQvU291bmRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJyZXNvdXJjZXMiLCJMb2FkTWFuYWdlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlNvdW5kTWFuYWdlciIsIkkiLCJzaW5nbGV0b24iLCJMb2FkU291bmQiLCJsb2FkRGlyIiwiZXJyIiwiYXNzZXRzIiwiY29uc29sZSIsImVycm9yIiwiaSIsImxlbmd0aCIsImVsZW1lbnQiLCJhdWRpb3MiLCJwdXNoIiwibG9hZEluZGV4IiwiUGxheUJHTXVzaWMiLCJuYW1lIiwicGxheSIsInNldExvb3AiLCJQbGF5U291cmNlIiwicGxheU9uZVNob3QiLCJBdWRpb1NvdXJjZVZvbHVtZSIsIlNldFNvdXJjZVZvbHVtZSIsInZvbHVtZSIsIlNldEJHTXVzaWNWb2x1bWUiLCJCR011c2ljTmFtZSIsIkJHTVZvbHVtZSIsInNldFZvbHVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQTJEQyxNQUFBQSxTLE9BQUFBLFM7O0FBQzNEQyxNQUFBQSxXLHNCQUFBQSxXOzs7Ozs7O09BRUg7QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE8sR0FBd0JKLFU7OzhCQUdqQkssWSxXQURaRixPQUFPLENBQUMsY0FBRCxDLG1DQUFSLE1BQ2FFLFlBRGIsQ0FDMEI7QUFHdEIsbUJBQWtCQyxDQUFsQixHQUFvQztBQUNoQyxjQUFJLENBQUMsS0FBS0MsU0FBVixFQUFxQjtBQUNqQixpQkFBS0EsU0FBTCxHQUFpQixJQUFJRixZQUFKLEVBQWpCO0FBQ0g7O0FBQ0QsaUJBQU8sS0FBS0UsU0FBWjtBQUNIOztBQU9EO0FBQ0o7QUFDQTtBQUNJLGVBQU9DLFNBQVAsR0FBbUI7QUFDZlAsVUFBQUEsU0FBUyxDQUFDUSxPQUFWLENBQWtCLFFBQWxCLEVBQTRCLFVBQVVDLEdBQVYsRUFBb0JDLE1BQXBCLEVBQWlDO0FBQ3pELGdCQUFJRCxHQUFKLEVBQVM7QUFDTEUsY0FBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWNILEdBQWQ7QUFDQTtBQUNIOztBQUNELGlCQUFLLElBQUlJLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILE1BQU0sQ0FBQ0ksTUFBM0IsRUFBbUNELENBQUMsRUFBcEMsRUFBd0M7QUFDcEMsb0JBQU1FLE9BQU8sR0FBR0wsTUFBTSxDQUFDRyxDQUFELENBQXRCO0FBQ0FULGNBQUFBLFlBQVksQ0FBQ1ksTUFBYixDQUFvQkMsSUFBcEIsQ0FBeUJGLE9BQXpCO0FBQ0g7O0FBQ0Q7QUFBQTtBQUFBLDRDQUFZRyxTQUFaO0FBQ0gsV0FWRDtBQVdIOztBQUNELGVBQU9DLFdBQVAsQ0FBbUJDLElBQVksR0FBRyxTQUFsQyxFQUE2QztBQUN6QyxlQUFLLElBQUlQLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0csTUFBTCxDQUFZRixNQUFoQyxFQUF3Q0QsQ0FBQyxFQUF6QyxFQUE2QztBQUN6QyxrQkFBTUUsT0FBTyxHQUFHLEtBQUtDLE1BQUwsQ0FBWUgsQ0FBWixDQUFoQjs7QUFDQSxnQkFBSUUsT0FBTyxDQUFDSyxJQUFSLElBQWdCQSxJQUFwQixFQUEwQjtBQUN0QkwsY0FBQUEsT0FBTyxDQUFDTSxJQUFSO0FBQ0FOLGNBQUFBLE9BQU8sQ0FBQ08sT0FBUixDQUFnQixJQUFoQjtBQUNIO0FBQ0o7QUFDSjs7QUFDRCxlQUFPQyxVQUFQLENBQWtCSCxJQUFsQixFQUFnQztBQUM1QixlQUFLLElBQUlQLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0csTUFBTCxDQUFZRixNQUFoQyxFQUF3Q0QsQ0FBQyxFQUF6QyxFQUE2QztBQUN6QyxrQkFBTUUsT0FBTyxHQUFHLEtBQUtDLE1BQUwsQ0FBWUgsQ0FBWixDQUFoQjs7QUFDQSxnQkFBSUUsT0FBTyxDQUFDSyxJQUFSLElBQWdCQSxJQUFwQixFQUEwQjtBQUN0QkwsY0FBQUEsT0FBTyxDQUFDUyxXQUFSLENBQW9CLEtBQUtDLGlCQUF6QjtBQUNIO0FBQ0o7QUFDSjs7QUFFRCxlQUFPQyxlQUFQLENBQXVCQyxNQUF2QixFQUF1QztBQUNuQyxlQUFLRixpQkFBTCxHQUF5QkUsTUFBekI7QUFDSDs7QUFDRCxlQUFPQyxnQkFBUCxDQUF3QkQsTUFBeEIsRUFBd0NFLFdBQW1CLEdBQUcsU0FBOUQsRUFBeUU7QUFDckUsZUFBS0MsU0FBTCxHQUFpQkgsTUFBakI7O0FBQ0EsZUFBSyxJQUFJZCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtHLE1BQUwsQ0FBWUYsTUFBaEMsRUFBd0NELENBQUMsRUFBekMsRUFBNkM7QUFDekMsa0JBQU1FLE9BQU8sR0FBRyxLQUFLQyxNQUFMLENBQVlILENBQVosQ0FBaEI7O0FBQ0EsZ0JBQUlFLE9BQU8sQ0FBQ0ssSUFBUixJQUFnQlMsV0FBcEIsRUFBaUM7QUFDN0JkLGNBQUFBLE9BQU8sQ0FBQ2dCLFNBQVIsQ0FBa0IsS0FBS0QsU0FBdkI7QUFDSDtBQUNKO0FBQ0o7O0FBNURxQixPLG9GQVVPLEUsaURBRU0sQyx5Q0FDUixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBBdWRpb1NvdXJjZSwgQXVkaW9DbGlwLCBnYW1lLCByZXNvdXJjZXMgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBMb2FkTWFuYWdlciB9IGZyb20gJy4uL0xvYWQvTG9hZE1hbmFnZXInO1xuaW1wb3J0IHsgTXlMaXN0Q29tbW9uIH0gZnJvbSAnLi4vTXlNYXRoL015TGlzdENvbW1vbic7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnU291bmRNYW5hZ2VyJylcbmV4cG9ydCBjbGFzcyBTb3VuZE1hbmFnZXIge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgc2luZ2xldG9uOiBTb3VuZE1hbmFnZXI7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgSSgpOiBTb3VuZE1hbmFnZXIge1xuICAgICAgICBpZiAoIXRoaXMuc2luZ2xldG9uKSB7XG4gICAgICAgICAgICB0aGlzLnNpbmdsZXRvbiA9IG5ldyBTb3VuZE1hbmFnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zaW5nbGV0b247XG4gICAgfVxuXG4gICAgc3RhdGljIGF1ZGlvczogQXVkaW9DbGlwW10gPSBbXTtcblxuICAgIHN0YXRpYyBBdWRpb1NvdXJjZVZvbHVtZTogbnVtYmVyID0gMTtcbiAgICBzdGF0aWMgQkdNVm9sdW1lOiBudW1iZXIgPSAxO1xuXG4gICAgLyoqXG4gICAgICAgKiDliqDovb3pn7PmlYjvvIzlubbliJ3lp4vljJZTb3VuZE1hbmFnZXIuSS5hdWRpb3NcbiAgICAgICAqL1xuICAgIHN0YXRpYyBMb2FkU291bmQoKSB7XG4gICAgICAgIHJlc291cmNlcy5sb2FkRGlyKFwiU291bmRzXCIsIGZ1bmN0aW9uIChlcnI6IGFueSwgYXNzZXRzOiBhbnkpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3NldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYXNzZXRzW2ldO1xuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5hdWRpb3MucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIExvYWRNYW5hZ2VyLmxvYWRJbmRleCsrO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIFBsYXlCR011c2ljKG5hbWU6IHN0cmluZyA9IFwiQkdNdXNpY1wiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hdWRpb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmF1ZGlvc1tpXTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm5hbWUgPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucGxheSgpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0TG9vcCh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgUGxheVNvdXJjZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmF1ZGlvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuYXVkaW9zW2ldO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5wbGF5T25lU2hvdCh0aGlzLkF1ZGlvU291cmNlVm9sdW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBTZXRTb3VyY2VWb2x1bWUodm9sdW1lOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5BdWRpb1NvdXJjZVZvbHVtZSA9IHZvbHVtZTtcbiAgICB9XG4gICAgc3RhdGljIFNldEJHTXVzaWNWb2x1bWUodm9sdW1lOiBudW1iZXIsIEJHTXVzaWNOYW1lOiBzdHJpbmcgPSBcIkJHTXVzaWNcIikge1xuICAgICAgICB0aGlzLkJHTVZvbHVtZSA9IHZvbHVtZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmF1ZGlvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuYXVkaW9zW2ldO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PSBCR011c2ljTmFtZSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0Vm9sdW1lKHRoaXMuQkdNVm9sdW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==