System.register(["cce.code-quality.cr", "cc", "../Load/LoadState.js", "./StateMachine.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, LoadState, StateMachine, _dec, _class, _crd, ccclass, property, StateController;

  function _reportPossibleCrUseOfLoadState(extras) {
    _reporterNs.report("LoadState", "../Load/LoadState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "./StateMachine", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_LoadLoadStateJs) {
      LoadState = _LoadLoadStateJs.LoadState;
    }, function (_StateMachineJs) {
      StateMachine = _StateMachineJs.StateMachine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "702fcYyTRBNLJE0HFJ1b+eo", "StateController", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StateController", StateController = (_dec = ccclass('StateController'), _dec(_class = class StateController {
        constructor() {
          this.Init();
        }

        Init() {
          let loadState = new (_crd && LoadState === void 0 ? (_reportPossibleCrUseOfLoadState({
            error: Error()
          }), LoadState) : LoadState)();
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).AddState(loadState.stateName, loadState);
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).Init("LoadState");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vU3RhdGVNYWNoaW5lL1N0YXRlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiTG9hZFN0YXRlIiwiU3RhdGVNYWNoaW5lIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiU3RhdGVDb250cm9sbGVyIiwiY29uc3RydWN0b3IiLCJJbml0IiwibG9hZFN0YXRlIiwiQWRkU3RhdGUiLCJzdGF0ZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1NBLE1BQUFBLFUsT0FBQUEsVTs7QUFDQUMsTUFBQUEsUyxvQkFBQUEsUzs7QUFDQUMsTUFBQUEsWSxtQkFBQUEsWTs7Ozs7OztPQUNIO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCSixVOztpQ0FHakJLLGUsV0FEWkYsT0FBTyxDQUFDLGlCQUFELEMsZ0JBQVIsTUFDYUUsZUFEYixDQUM2QjtBQUV6QkMsUUFBQUEsV0FBVyxHQUFHO0FBQ1YsZUFBS0MsSUFBTDtBQUNIOztBQUNEQSxRQUFBQSxJQUFJLEdBQUc7QUFDSCxjQUFJQyxTQUFTLEdBQUc7QUFBQTtBQUFBLHVDQUFoQjtBQUNBO0FBQUE7QUFBQSw0Q0FBYUMsUUFBYixDQUFzQkQsU0FBUyxDQUFDRSxTQUFoQyxFQUEyQ0YsU0FBM0M7QUFDQTtBQUFBO0FBQUEsNENBQWFELElBQWIsQ0FBa0IsV0FBbEI7QUFDSDs7QUFUd0IsTyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBMb2FkU3RhdGUgfSBmcm9tICcuLi9Mb2FkL0xvYWRTdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZU1hY2hpbmUgfSBmcm9tICcuL1N0YXRlTWFjaGluZSc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnU3RhdGVDb250cm9sbGVyJylcbmV4cG9ydCBjbGFzcyBTdGF0ZUNvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuSW5pdCgpXG4gICAgfVxuICAgIEluaXQoKSB7XG4gICAgICAgIGxldCBsb2FkU3RhdGUgPSBuZXcgTG9hZFN0YXRlKCk7XG4gICAgICAgIFN0YXRlTWFjaGluZS5BZGRTdGF0ZShsb2FkU3RhdGUuc3RhdGVOYW1lLCBsb2FkU3RhdGUpO1xuICAgICAgICBTdGF0ZU1hY2hpbmUuSW5pdChcIkxvYWRTdGF0ZVwiKTtcbiAgICB9XG5cbn1cbiJdfQ==