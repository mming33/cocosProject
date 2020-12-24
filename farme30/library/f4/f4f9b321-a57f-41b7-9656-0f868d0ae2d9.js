System.register(["cce.code-quality.cr", "cc", "../../Common/Game/GameData.js", "../../Common/List/ListGenerator.js", "../../Common/Popup/Popup.js", "../../Common/StateMachine/StateMachine.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, GameData, ListGenerator, Popup, StateMachine, StateType, _dec, _class, _crd, ccclass, property, LevelPopup;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../../Common/Game/GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListGenerator(extras) {
    _reporterNs.report("ListGenerator", "../../Common/List/ListGenerator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopup(extras) {
    _reporterNs.report("Popup", "../../Common/Popup/Popup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../../Common/StateMachine/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../../Common/StateMachine/StateType", _context.meta, extras);
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
    }, function (_CommonGameGameDataJs) {
      GameData = _CommonGameGameDataJs.GameData;
    }, function (_CommonListListGeneratorJs) {
      ListGenerator = _CommonListListGeneratorJs.ListGenerator;
    }, function (_CommonPopupPopupJs) {
      Popup = _CommonPopupPopupJs.Popup;
    }, function (_CommonStateMachineStateMachineJs) {
      StateMachine = _CommonStateMachineStateMachineJs.StateMachine;
    }, function (_CommonStateMachineStateTypeJs) {
      StateType = _CommonStateMachineStateTypeJs.StateType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f4f9bMhpX9Bt5ZWD4aNCuLZ", "LevelPopup", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("LevelPopup", LevelPopup = (_dec = ccclass('LevelPopup'), _dec(_class = /*#__PURE__*/function (_ref) {
        _inheritsLoose(LevelPopup, _ref);

        function LevelPopup() {
          return _ref.apply(this, arguments) || this;
        }

        var _proto = LevelPopup.prototype;

        _proto.Init = function Init(arg) {
          var _this$node$getChildBy;

          var listGenerator = (_this$node$getChildBy = this.node.getChildByName("ScrollView")) === null || _this$node$getChildBy === void 0 ? void 0 : _this$node$getChildBy.getComponent(_crd && ListGenerator === void 0 ? (_reportPossibleCrUseOfListGenerator({
            error: Error()
          }), ListGenerator) : ListGenerator);

          if (listGenerator) {
            listGenerator.Init();
            listGenerator.CreateItemByData((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).GameSceneData, 'level');
          }
        };

        _proto.close = function close() {
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).ChangeState((_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).ChooseLevelState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).MainSceneStartState);
        };

        return LevelPopup;
      }(_crd && Popup === void 0 ? (_reportPossibleCrUseOfPopup({
        error: Error()
      }), Popup) : Popup)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1BvcHVwcy9MZXZlbFBvcHVwLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJHYW1lRGF0YSIsIkxpc3RHZW5lcmF0b3IiLCJQb3B1cCIsIlN0YXRlTWFjaGluZSIsIlN0YXRlVHlwZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkxldmVsUG9wdXAiLCJJbml0IiwiYXJnIiwibGlzdEdlbmVyYXRvciIsIm5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsIkNyZWF0ZUl0ZW1CeURhdGEiLCJHYW1lU2NlbmVEYXRhIiwiY2xvc2UiLCJDaGFuZ2VTdGF0ZSIsIkNob29zZUxldmVsU3RhdGUiLCJNYWluU2NlbmVTdGFydFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7QUFDQUMsTUFBQUEsUSx5QkFBQUEsUTs7QUFDQUMsTUFBQUEsYSw4QkFBQUEsYTs7QUFDQUMsTUFBQUEsSyx1QkFBQUEsSzs7QUFDQUMsTUFBQUEsWSxxQ0FBQUEsWTs7QUFDQUMsTUFBQUEsUyxrQ0FBQUEsUzs7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCTixVLENBQXRCTSxPO0FBQVNDLE1BQUFBLFEsR0FBYVAsVSxDQUFiTyxROzs0QkFHSkMsVSxXQURaRixPQUFPLENBQUMsWUFBRCxDOzs7Ozs7Ozs7ZUFFSkcsSSxHQUFBLGNBQUtDLEdBQUwsRUFBZ0I7QUFBQTs7QUFDWixjQUFJQyxhQUFhLDRCQUFHLEtBQUtDLElBQUwsQ0FBVUMsY0FBVixDQUF5QixZQUF6QixDQUFILDBEQUFHLHNCQUF3Q0MsWUFBeEM7QUFBQTtBQUFBLDZDQUFwQjs7QUFDQSxjQUFJSCxhQUFKLEVBQW1CO0FBQ2ZBLFlBQUFBLGFBQWEsQ0FBQ0YsSUFBZDtBQUNBRSxZQUFBQSxhQUFhLENBQUNJLGdCQUFkLENBQStCO0FBQUE7QUFBQSxzQ0FBU0MsYUFBeEMsRUFBc0QsT0FBdEQ7QUFDSDtBQUNKLFM7O2VBQ0RDLEssR0FBQSxpQkFBUTtBQUNKO0FBQUE7QUFBQSw0Q0FBYUMsV0FBYixDQUF5QjtBQUFBO0FBQUEsc0NBQVVDLGdCQUFuQyxFQUFxRDtBQUFBO0FBQUEsc0NBQVVDLG1CQUEvRDtBQUNILFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIGRpcmVjdG9yIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgR2FtZURhdGEgfSBmcm9tICcuLi8uLi9Db21tb24vR2FtZS9HYW1lRGF0YSc7XG5pbXBvcnQgeyBMaXN0R2VuZXJhdG9yIH0gZnJvbSAnLi4vLi4vQ29tbW9uL0xpc3QvTGlzdEdlbmVyYXRvcic7XG5pbXBvcnQgeyBQb3B1cCB9IGZyb20gJy4uLy4uL0NvbW1vbi9Qb3B1cC9Qb3B1cCc7XG5pbXBvcnQgeyBTdGF0ZU1hY2hpbmUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1N0YXRlTWFjaGluZSc7XG5pbXBvcnQgeyBTdGF0ZVR5cGUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1N0YXRlVHlwZSc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnTGV2ZWxQb3B1cCcpXG5leHBvcnQgY2xhc3MgTGV2ZWxQb3B1cCBleHRlbmRzIFBvcHVwIHtcbiAgICBJbml0KGFyZz86IGFueSkge1xuICAgICAgICBsZXQgbGlzdEdlbmVyYXRvciA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlNjcm9sbFZpZXdcIik/LmdldENvbXBvbmVudChMaXN0R2VuZXJhdG9yKTtcbiAgICAgICAgaWYgKGxpc3RHZW5lcmF0b3IpIHtcbiAgICAgICAgICAgIGxpc3RHZW5lcmF0b3IuSW5pdCgpO1xuICAgICAgICAgICAgbGlzdEdlbmVyYXRvci5DcmVhdGVJdGVtQnlEYXRhKEdhbWVEYXRhLkdhbWVTY2VuZURhdGEsJ2xldmVsJylcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgU3RhdGVNYWNoaW5lLkNoYW5nZVN0YXRlKFN0YXRlVHlwZS5DaG9vc2VMZXZlbFN0YXRlLCBTdGF0ZVR5cGUuTWFpblNjZW5lU3RhcnRTdGF0ZSk7XG4gICAgfVxufVxuIl19