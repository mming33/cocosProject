System.register(["cce.code-quality.cr", "cc", "./Common/Sound/SoundManager.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, SoundManager, _dec, _class, _temp, _crd, ccclass, property, TESTSCRIPT;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSoundManager(extras) {
    _reporterNs.report("SoundManager", "./Common/Sound/SoundManager", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_CommonSoundSoundManagerJs) {
      SoundManager = _CommonSoundSoundManagerJs.SoundManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c4e77ePt3ROfa7o3X3e4uIO", "TESTSCRIPT", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TESTSCRIPT", TESTSCRIPT = (_dec = ccclass('TESTSCRIPT'), _dec(_class = (_temp = class TESTSCRIPT extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "bool", true);
        }

        onLoad() {
          (_crd && SoundManager === void 0 ? (_reportPossibleCrUseOfSoundManager({
            error: Error()
          }), SoundManager) : SoundManager).I.PlayBGMusic();
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9URVNUU0NSSVBULnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJTb3VuZE1hbmFnZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJURVNUU0NSSVBUIiwib25Mb2FkIiwiSSIsIlBsYXlCR011c2ljIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7O0FBS1pDLE1BQUFBLFksOEJBQUFBLFk7Ozs7Ozs7T0FHSDtBQUFFQyxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsTyxHQUF3QkosVTs7NEJBR2pCSyxVLFdBRFpGLE9BQU8sQ0FBQyxZQUFELEMseUJBQVIsTUFDYUUsVUFEYixTQUNnQ0osU0FEaEMsQ0FDMEM7QUFBQTtBQUFBOztBQUFBLHdDQUsvQixJQUwrQjtBQUFBOztBQUV0Q0ssUUFBQUEsTUFBTSxHQUFHO0FBQ0w7QUFBQTtBQUFBLDRDQUFhQyxDQUFiLENBQWVDLFdBQWY7QUFDSDs7QUFKcUMsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IEV2ZW50VHB5ZSB9IGZyb20gJy4vQ29tbW9uL0V2ZW50cy9FdmVudFRweWUnO1xuaW1wb3J0IHsgTXlFdmVudCB9IGZyb20gJy4vQ29tbW9uL0V2ZW50cy9NeUV2ZW50JztcbmltcG9ydCB7IE15TGlzdENvbW1vbiB9IGZyb20gJy4vQ29tbW9uL015TWF0aC9NeUxpc3RDb21tb24nO1xuaW1wb3J0IHsgUG9wdXBNYW5hZ2VyIH0gZnJvbSAnLi9Db21tb24vUG9wdXAvUG9wdXBNYW5hZ2VyJztcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gJy4vQ29tbW9uL1NvdW5kL1NvdW5kTWFuYWdlcic7XG5pbXBvcnQgeyBTdGF0ZU1hY2hpbmUgfSBmcm9tICcuL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVNYWNoaW5lJztcbmltcG9ydCB7IERhdGFTdG9yYWdlIH0gZnJvbSAnLi9Db21tb24vU3RvcmFnZS9EYXRhU3RvcmFnZSc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnVEVTVFNDUklQVCcpXG5leHBvcnQgY2xhc3MgVEVTVFNDUklQVCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIFNvdW5kTWFuYWdlci5JLlBsYXlCR011c2ljKCk7XG4gICAgfVxuICAgIGJvb2wgPSB0cnVlO1xuICAgXG5cblxufVxuIl19