System.register(["cce.code-quality.cr", "cc", "../Load/LoadManager.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, resources, LoadManager, _dec, _class, _class2, _temp, _crd, ccclass, property, SoundManager;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SoundManager", SoundManager = (_dec = ccclass('SoundManager'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        function SoundManager() {}

        /**
           * 加载音效，并初始化SoundManager.I.audios
           */
        SoundManager.LoadSound = function LoadSound() {
          resources.loadDir("Sounds", function (err, assets) {
            if (err) {
              console.error(err);
              return;
            }

            for (var i = 0; i < assets.length; i++) {
              var element = assets[i];
              SoundManager.audios.push(element);
            }

            (_crd && LoadManager === void 0 ? (_reportPossibleCrUseOfLoadManager({
              error: Error()
            }), LoadManager) : LoadManager).loadIndex++;
          });
        };

        SoundManager.PlayBGMusic = function PlayBGMusic(name) {
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

        SoundManager.PlaySource = function PlaySource(name) {
          for (var i = 0; i < this.audios.length; i++) {
            var element = this.audios[i];

            if (element.name == name) {
              element.playOneShot(this.AudioSourceVolume);
            }
          }
        };

        SoundManager.SetSourceVolume = function SetSourceVolume(volume) {
          this.AudioSourceVolume = volume;
        };

        SoundManager.SetBGMusicVolume = function SetBGMusicVolume(volume, BGMusicName) {
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
            if (!this.singleton) {
              this.singleton = new SoundManager();
            }

            return this.singleton;
          }
        }]);

        return SoundManager;
      }(), _defineProperty(_class2, "singleton", void 0), _defineProperty(_class2, "audios", []), _defineProperty(_class2, "AudioSourceVolume", 1), _defineProperty(_class2, "BGMVolume", 1), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vU291bmQvU291bmRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJyZXNvdXJjZXMiLCJMb2FkTWFuYWdlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlNvdW5kTWFuYWdlciIsIkxvYWRTb3VuZCIsImxvYWREaXIiLCJlcnIiLCJhc3NldHMiLCJjb25zb2xlIiwiZXJyb3IiLCJpIiwibGVuZ3RoIiwiZWxlbWVudCIsImF1ZGlvcyIsInB1c2giLCJsb2FkSW5kZXgiLCJQbGF5QkdNdXNpYyIsIm5hbWUiLCJwbGF5Iiwic2V0TG9vcCIsIlBsYXlTb3VyY2UiLCJwbGF5T25lU2hvdCIsIkF1ZGlvU291cmNlVm9sdW1lIiwiU2V0U291cmNlVm9sdW1lIiwidm9sdW1lIiwiU2V0QkdNdXNpY1ZvbHVtZSIsIkJHTXVzaWNOYW1lIiwiQkdNVm9sdW1lIiwic2V0Vm9sdW1lIiwic2luZ2xldG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQTJEQyxNQUFBQSxTLE9BQUFBLFM7O0FBQzNEQyxNQUFBQSxXLHNCQUFBQSxXOzs7Ozs7O0FBRURDLE1BQUFBLE8sR0FBc0JILFUsQ0FBdEJHLE87QUFBU0MsTUFBQUEsUSxHQUFhSixVLENBQWJJLFE7OzhCQUdKQyxZLFdBRFpGLE9BQU8sQ0FBQyxjQUFELEM7OztBQWdCSjtBQUNKO0FBQ0E7cUJBQ1dHLFMsR0FBUCxxQkFBbUI7QUFDZkwsVUFBQUEsU0FBUyxDQUFDTSxPQUFWLENBQWtCLFFBQWxCLEVBQTRCLFVBQVVDLEdBQVYsRUFBb0JDLE1BQXBCLEVBQWlDO0FBQ3pELGdCQUFJRCxHQUFKLEVBQVM7QUFDTEUsY0FBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWNILEdBQWQ7QUFDQTtBQUNIOztBQUNELGlCQUFLLElBQUlJLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILE1BQU0sQ0FBQ0ksTUFBM0IsRUFBbUNELENBQUMsRUFBcEMsRUFBd0M7QUFDcEMsa0JBQU1FLE9BQU8sR0FBR0wsTUFBTSxDQUFDRyxDQUFELENBQXRCO0FBQ0FQLGNBQUFBLFlBQVksQ0FBQ1UsTUFBYixDQUFvQkMsSUFBcEIsQ0FBeUJGLE9BQXpCO0FBQ0g7O0FBQ0Q7QUFBQTtBQUFBLDRDQUFZRyxTQUFaO0FBQ0gsV0FWRDtBQVdILFM7O3FCQUNNQyxXLEdBQVAscUJBQW1CQyxJQUFuQixFQUE2QztBQUFBLGNBQTFCQSxJQUEwQjtBQUExQkEsWUFBQUEsSUFBMEIsR0FBWCxTQUFXO0FBQUE7O0FBQ3pDLGVBQUssSUFBSVAsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLRyxNQUFMLENBQVlGLE1BQWhDLEVBQXdDRCxDQUFDLEVBQXpDLEVBQTZDO0FBQ3pDLGdCQUFNRSxPQUFPLEdBQUcsS0FBS0MsTUFBTCxDQUFZSCxDQUFaLENBQWhCOztBQUNBLGdCQUFJRSxPQUFPLENBQUNLLElBQVIsSUFBZ0JBLElBQXBCLEVBQTBCO0FBQ3RCTCxjQUFBQSxPQUFPLENBQUNNLElBQVI7QUFDQU4sY0FBQUEsT0FBTyxDQUFDTyxPQUFSLENBQWdCLElBQWhCO0FBQ0g7QUFDSjtBQUNKLFM7O3FCQUNNQyxVLEdBQVAsb0JBQWtCSCxJQUFsQixFQUFnQztBQUM1QixlQUFLLElBQUlQLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0csTUFBTCxDQUFZRixNQUFoQyxFQUF3Q0QsQ0FBQyxFQUF6QyxFQUE2QztBQUN6QyxnQkFBTUUsT0FBTyxHQUFHLEtBQUtDLE1BQUwsQ0FBWUgsQ0FBWixDQUFoQjs7QUFDQSxnQkFBSUUsT0FBTyxDQUFDSyxJQUFSLElBQWdCQSxJQUFwQixFQUEwQjtBQUN0QkwsY0FBQUEsT0FBTyxDQUFDUyxXQUFSLENBQW9CLEtBQUtDLGlCQUF6QjtBQUNIO0FBQ0o7QUFDSixTOztxQkFFTUMsZSxHQUFQLHlCQUF1QkMsTUFBdkIsRUFBdUM7QUFDbkMsZUFBS0YsaUJBQUwsR0FBeUJFLE1BQXpCO0FBQ0gsUzs7cUJBQ01DLGdCLEdBQVAsMEJBQXdCRCxNQUF4QixFQUF3Q0UsV0FBeEMsRUFBeUU7QUFBQSxjQUFqQ0EsV0FBaUM7QUFBakNBLFlBQUFBLFdBQWlDLEdBQVgsU0FBVztBQUFBOztBQUNyRSxlQUFLQyxTQUFMLEdBQWlCSCxNQUFqQjs7QUFDQSxlQUFLLElBQUlkLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0csTUFBTCxDQUFZRixNQUFoQyxFQUF3Q0QsQ0FBQyxFQUF6QyxFQUE2QztBQUN6QyxnQkFBTUUsT0FBTyxHQUFHLEtBQUtDLE1BQUwsQ0FBWUgsQ0FBWixDQUFoQjs7QUFDQSxnQkFBSUUsT0FBTyxDQUFDSyxJQUFSLElBQWdCUyxXQUFwQixFQUFpQztBQUM3QmQsY0FBQUEsT0FBTyxDQUFDZ0IsU0FBUixDQUFrQixLQUFLRCxTQUF2QjtBQUNIO0FBQ0o7QUFDSixTOzs7OzhCQXpEbUM7QUFDaEMsZ0JBQUksQ0FBQyxLQUFLRSxTQUFWLEVBQXFCO0FBQ2pCLG1CQUFLQSxTQUFMLEdBQWlCLElBQUkxQixZQUFKLEVBQWpCO0FBQ0g7O0FBQ0QsbUJBQU8sS0FBSzBCLFNBQVo7QUFDSDs7Ozs2RkFFNEIsRSxpREFFTSxDLHlDQUNSLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIEF1ZGlvU291cmNlLCBBdWRpb0NsaXAsIGdhbWUsIHJlc291cmNlcyB9IGZyb20gJ2NjJztcbmltcG9ydCB7IExvYWRNYW5hZ2VyIH0gZnJvbSAnLi4vTG9hZC9Mb2FkTWFuYWdlcic7XG5pbXBvcnQgeyBNeUxpc3RDb21tb24gfSBmcm9tICcuLi9NeU1hdGgvTXlMaXN0Q29tbW9uJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdTb3VuZE1hbmFnZXInKVxuZXhwb3J0IGNsYXNzIFNvdW5kTWFuYWdlciB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBzaW5nbGV0b246IFNvdW5kTWFuYWdlcjtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJKCk6IFNvdW5kTWFuYWdlciB7XG4gICAgICAgIGlmICghdGhpcy5zaW5nbGV0b24pIHtcbiAgICAgICAgICAgIHRoaXMuc2luZ2xldG9uID0gbmV3IFNvdW5kTWFuYWdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNpbmdsZXRvbjtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXVkaW9zOiBBdWRpb0NsaXBbXSA9IFtdO1xuXG4gICAgc3RhdGljIEF1ZGlvU291cmNlVm9sdW1lOiBudW1iZXIgPSAxO1xuICAgIHN0YXRpYyBCR01Wb2x1bWU6IG51bWJlciA9IDE7XG5cbiAgICAvKipcbiAgICAgICAqIOWKoOi9vemfs+aViO+8jOW5tuWIneWni+WMllNvdW5kTWFuYWdlci5JLmF1ZGlvc1xuICAgICAgICovXG4gICAgc3RhdGljIExvYWRTb3VuZCgpIHtcbiAgICAgICAgcmVzb3VyY2VzLmxvYWREaXIoXCJTb3VuZHNcIiwgZnVuY3Rpb24gKGVycjogYW55LCBhc3NldHM6IGFueSkge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBhc3NldHNbaV07XG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLmF1ZGlvcy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgTG9hZE1hbmFnZXIubG9hZEluZGV4Kys7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgUGxheUJHTXVzaWMobmFtZTogc3RyaW5nID0gXCJCR011c2ljXCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmF1ZGlvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuYXVkaW9zW2ldO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubmFtZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRMb29wKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBQbGF5U291cmNlKG5hbWU6IHN0cmluZykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXVkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5hdWRpb3NbaV07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5uYW1lID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBsYXlPbmVTaG90KHRoaXMuQXVkaW9Tb3VyY2VWb2x1bWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIFNldFNvdXJjZVZvbHVtZSh2b2x1bWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLkF1ZGlvU291cmNlVm9sdW1lID0gdm9sdW1lO1xuICAgIH1cbiAgICBzdGF0aWMgU2V0QkdNdXNpY1ZvbHVtZSh2b2x1bWU6IG51bWJlciwgQkdNdXNpY05hbWU6IHN0cmluZyA9IFwiQkdNdXNpY1wiKSB7XG4gICAgICAgIHRoaXMuQkdNVm9sdW1lID0gdm9sdW1lO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXVkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5hdWRpb3NbaV07XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5uYW1lID09IEJHTXVzaWNOYW1lKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRWb2x1bWUodGhpcy5CR01Wb2x1bWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19