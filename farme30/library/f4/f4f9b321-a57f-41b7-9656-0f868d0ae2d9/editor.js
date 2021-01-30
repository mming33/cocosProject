System.register(["cce.code-quality.cr", "cc", "../../Common/Game/GameData.js", "../../Common/List/ListGenerator.js", "../../Common/Popup/Popup.js", "../../Common/StateMachine/SMManger.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, GameData, ListGenerator, Popup, SMManger, SMName, StateType, _dec, _class, _crd, ccclass, property, LevelPopup;

  function _reportPossibleCrUseOfGameData(extras) {
    _reporterNs.report("GameData", "../../Common/Game/GameData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListGenerator(extras) {
    _reporterNs.report("ListGenerator", "../../Common/List/ListGenerator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopup(extras) {
    _reporterNs.report("Popup", "../../Common/Popup/Popup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSMManger(extras) {
    _reporterNs.report("SMManger", "../../Common/StateMachine/SMManger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSMName(extras) {
    _reporterNs.report("SMName", "../../Common/StateMachine/SMManger", _context.meta, extras);
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
    }, function (_CommonStateMachineSMMangerJs) {
      SMManger = _CommonStateMachineSMMangerJs.SMManger;
      SMName = _CommonStateMachineSMMangerJs.SMName;
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
          (_crd && SMManger === void 0 ? (_reportPossibleCrUseOfSMManger({
            error: Error()
          }), SMManger) : SMManger).GetStateMachine((_crd && SMName === void 0 ? (_reportPossibleCrUseOfSMName({
            error: Error()
          }), SMName) : SMName).GameStateMachine).ChangeState((_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1BvcHVwcy9MZXZlbFBvcHVwLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJHYW1lRGF0YSIsIkxpc3RHZW5lcmF0b3IiLCJQb3B1cCIsIlNNTWFuZ2VyIiwiU01OYW1lIiwiU3RhdGVUeXBlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTGV2ZWxQb3B1cCIsIkluaXQiLCJhcmciLCJsaXN0R2VuZXJhdG9yIiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiQ3JlYXRlSXRlbUJ5RGF0YSIsIkdhbWVTY2VuZURhdGEiLCJjbG9zZSIsIkdldFN0YXRlTWFjaGluZSIsIkdhbWVTdGF0ZU1hY2hpbmUiLCJDaGFuZ2VTdGF0ZSIsIkNob29zZUxldmVsU3RhdGUiLCJNYWluU2NlbmVTdGFydFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOztBQUNBQyxNQUFBQSxRLHlCQUFBQSxROztBQUNBQyxNQUFBQSxhLDhCQUFBQSxhOztBQUNBQyxNQUFBQSxLLHVCQUFBQSxLOztBQUNBQyxNQUFBQSxRLGlDQUFBQSxRO0FBQVVDLE1BQUFBLE0saUNBQUFBLE07O0FBRVZDLE1BQUFBLFMsa0NBQUFBLFM7Ozs7Ozs7T0FDSDtBQUFFQyxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsTyxHQUF3QlIsVTs7NEJBR2pCUyxVLFdBRFpGLE9BQU8sQ0FBQyxZQUFELEMsZ0JBQVIsTUFDYUUsVUFEYjtBQUFBO0FBQUEsMEJBQ3NDO0FBQ2xDQyxRQUFBQSxJQUFJLENBQUNDLEdBQUQsRUFBWTtBQUFBOztBQUNaLGNBQUlDLGFBQWEsNEJBQUcsS0FBS0MsSUFBTCxDQUFVQyxjQUFWLENBQXlCLFlBQXpCLENBQUgsMERBQUcsc0JBQXdDQyxZQUF4QztBQUFBO0FBQUEsNkNBQXBCOztBQUNBLGNBQUlILGFBQUosRUFBbUI7QUFDZkEsWUFBQUEsYUFBYSxDQUFDRixJQUFkO0FBQ0FFLFlBQUFBLGFBQWEsQ0FBQ0ksZ0JBQWQsQ0FBK0I7QUFBQTtBQUFBLHNDQUFTQyxhQUF4QyxFQUF1RCxPQUF2RDtBQUNIO0FBQ0o7O0FBQ0RDLFFBQUFBLEtBQUssR0FBRztBQUNKO0FBQUE7QUFBQSxvQ0FBU0MsZUFBVCxDQUF5QjtBQUFBO0FBQUEsZ0NBQU9DLGdCQUFoQyxFQUFrREMsV0FBbEQsQ0FBOEQ7QUFBQTtBQUFBLHNDQUFVQyxnQkFBeEUsRUFBMEY7QUFBQTtBQUFBLHNDQUFVQyxtQkFBcEc7QUFDSDs7QUFWaUMsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgZGlyZWN0b3IgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBHYW1lRGF0YSB9IGZyb20gJy4uLy4uL0NvbW1vbi9HYW1lL0dhbWVEYXRhJztcbmltcG9ydCB7IExpc3RHZW5lcmF0b3IgfSBmcm9tICcuLi8uLi9Db21tb24vTGlzdC9MaXN0R2VuZXJhdG9yJztcbmltcG9ydCB7IFBvcHVwIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1BvcHVwL1BvcHVwJztcbmltcG9ydCB7IFNNTWFuZ2VyLCBTTU5hbWUgfSBmcm9tICcuLi8uLi9Db21tb24vU3RhdGVNYWNoaW5lL1NNTWFuZ2VyJztcbmltcG9ydCB7IFN0YXRlTWFjaGluZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVNYWNoaW5lJztcbmltcG9ydCB7IFN0YXRlVHlwZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU3RhdGVUeXBlJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdMZXZlbFBvcHVwJylcbmV4cG9ydCBjbGFzcyBMZXZlbFBvcHVwIGV4dGVuZHMgUG9wdXAge1xuICAgIEluaXQoYXJnPzogYW55KSB7XG4gICAgICAgIGxldCBsaXN0R2VuZXJhdG9yID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiU2Nyb2xsVmlld1wiKT8uZ2V0Q29tcG9uZW50KExpc3RHZW5lcmF0b3IpO1xuICAgICAgICBpZiAobGlzdEdlbmVyYXRvcikge1xuICAgICAgICAgICAgbGlzdEdlbmVyYXRvci5Jbml0KCk7XG4gICAgICAgICAgICBsaXN0R2VuZXJhdG9yLkNyZWF0ZUl0ZW1CeURhdGEoR2FtZURhdGEuR2FtZVNjZW5lRGF0YSwgJ2xldmVsJylcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgU01NYW5nZXIuR2V0U3RhdGVNYWNoaW5lKFNNTmFtZS5HYW1lU3RhdGVNYWNoaW5lKS5DaGFuZ2VTdGF0ZShTdGF0ZVR5cGUuQ2hvb3NlTGV2ZWxTdGF0ZSwgU3RhdGVUeXBlLk1haW5TY2VuZVN0YXJ0U3RhdGUpO1xuICAgIH1cbn1cbiJdfQ==