System.register(["cce.code-quality.cr", "cc", "../../Common/Game/GameData.js", "../../Common/List/ListGenerator.js", "../../Common/Popup/Popup.js", "../../Common/StateMachine/StateMachine.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, GameData, ListGenerator, Popup, StateMachine, StateType, _dec, _class, _crd, ccclass, property, LevelPopup;

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("LevelPopup", LevelPopup = (_dec = ccclass('LevelPopup'), _dec(_class = class LevelPopup extends (_crd && Popup === void 0 ? (_reportPossibleCrUseOfPopup({
        error: Error()
      }), Popup) : Popup) {
        Init(arg) {
          var _this$node$getChildBy;

          let listGenerator = (_this$node$getChildBy = this.node.getChildByName("ScrollView")) === null || _this$node$getChildBy === void 0 ? void 0 : _this$node$getChildBy.getComponent(_crd && ListGenerator === void 0 ? (_reportPossibleCrUseOfListGenerator({
            error: Error()
          }), ListGenerator) : ListGenerator);

          if (listGenerator) {
            listGenerator.Init();
            listGenerator.CreateItemByData((_crd && GameData === void 0 ? (_reportPossibleCrUseOfGameData({
              error: Error()
            }), GameData) : GameData).GameSceneData, 'level');
          }
        }

        close() {
          (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
            error: Error()
          }), StateMachine) : StateMachine).ChangeState((_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).ChooseLevelState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
            error: Error()
          }), StateType) : StateType).MainSceneStartState);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1BvcHVwcy9MZXZlbFBvcHVwLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJHYW1lRGF0YSIsIkxpc3RHZW5lcmF0b3IiLCJQb3B1cCIsIlN0YXRlTWFjaGluZSIsIlN0YXRlVHlwZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkxldmVsUG9wdXAiLCJJbml0IiwiYXJnIiwibGlzdEdlbmVyYXRvciIsIm5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsIkNyZWF0ZUl0ZW1CeURhdGEiLCJHYW1lU2NlbmVEYXRhIiwiY2xvc2UiLCJDaGFuZ2VTdGF0ZSIsIkNob29zZUxldmVsU3RhdGUiLCJNYWluU2NlbmVTdGFydFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7O0FBQ0FDLE1BQUFBLFEseUJBQUFBLFE7O0FBQ0FDLE1BQUFBLGEsOEJBQUFBLGE7O0FBQ0FDLE1BQUFBLEssdUJBQUFBLEs7O0FBQ0FDLE1BQUFBLFkscUNBQUFBLFk7O0FBQ0FDLE1BQUFBLFMsa0NBQUFBLFM7Ozs7Ozs7T0FDSDtBQUFFQyxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsTyxHQUF3QlAsVTs7NEJBR2pCUSxVLFdBRFpGLE9BQU8sQ0FBQyxZQUFELEMsZ0JBQVIsTUFDYUUsVUFEYjtBQUFBO0FBQUEsMEJBQ3NDO0FBQ2xDQyxRQUFBQSxJQUFJLENBQUNDLEdBQUQsRUFBWTtBQUFBOztBQUNaLGNBQUlDLGFBQWEsNEJBQUcsS0FBS0MsSUFBTCxDQUFVQyxjQUFWLENBQXlCLFlBQXpCLENBQUgsMERBQUcsc0JBQXdDQyxZQUF4QztBQUFBO0FBQUEsNkNBQXBCOztBQUNBLGNBQUlILGFBQUosRUFBbUI7QUFDZkEsWUFBQUEsYUFBYSxDQUFDRixJQUFkO0FBQ0FFLFlBQUFBLGFBQWEsQ0FBQ0ksZ0JBQWQsQ0FBK0I7QUFBQTtBQUFBLHNDQUFTQyxhQUF4QyxFQUFzRCxPQUF0RDtBQUNIO0FBQ0o7O0FBQ0RDLFFBQUFBLEtBQUssR0FBRztBQUNKO0FBQUE7QUFBQSw0Q0FBYUMsV0FBYixDQUF5QjtBQUFBO0FBQUEsc0NBQVVDLGdCQUFuQyxFQUFxRDtBQUFBO0FBQUEsc0NBQVVDLG1CQUEvRDtBQUNIOztBQVZpQyxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBkaXJlY3RvciB9IGZyb20gJ2NjJztcbmltcG9ydCB7IEdhbWVEYXRhIH0gZnJvbSAnLi4vLi4vQ29tbW9uL0dhbWUvR2FtZURhdGEnO1xuaW1wb3J0IHsgTGlzdEdlbmVyYXRvciB9IGZyb20gJy4uLy4uL0NvbW1vbi9MaXN0L0xpc3RHZW5lcmF0b3InO1xuaW1wb3J0IHsgUG9wdXAgfSBmcm9tICcuLi8uLi9Db21tb24vUG9wdXAvUG9wdXAnO1xuaW1wb3J0IHsgU3RhdGVNYWNoaW5lIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZU1hY2hpbmUnO1xuaW1wb3J0IHsgU3RhdGVUeXBlIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZVR5cGUnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0xldmVsUG9wdXAnKVxuZXhwb3J0IGNsYXNzIExldmVsUG9wdXAgZXh0ZW5kcyBQb3B1cCB7XG4gICAgSW5pdChhcmc/OiBhbnkpIHtcbiAgICAgICAgbGV0IGxpc3RHZW5lcmF0b3IgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJTY3JvbGxWaWV3XCIpPy5nZXRDb21wb25lbnQoTGlzdEdlbmVyYXRvcik7XG4gICAgICAgIGlmIChsaXN0R2VuZXJhdG9yKSB7XG4gICAgICAgICAgICBsaXN0R2VuZXJhdG9yLkluaXQoKTtcbiAgICAgICAgICAgIGxpc3RHZW5lcmF0b3IuQ3JlYXRlSXRlbUJ5RGF0YShHYW1lRGF0YS5HYW1lU2NlbmVEYXRhLCdsZXZlbCcpXG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xvc2UoKSB7XG4gICAgICAgIFN0YXRlTWFjaGluZS5DaGFuZ2VTdGF0ZShTdGF0ZVR5cGUuQ2hvb3NlTGV2ZWxTdGF0ZSwgU3RhdGVUeXBlLk1haW5TY2VuZVN0YXJ0U3RhdGUpO1xuICAgIH1cbn1cbiJdfQ==