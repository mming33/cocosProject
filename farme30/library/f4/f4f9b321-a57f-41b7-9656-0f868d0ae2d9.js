System.register(["cce.code-quality.cr", "cc", "../../Common/Game/GameData.js", "../../Common/List/ListGenerator.js", "../../Common/Popup/Popup.js", "../../Common/StateMachine/SMManger.js", "../../Common/StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, GameData, ListGenerator, Popup, SMManger, SMName, StateType, _dec, _class, _crd, ccclass, property, LevelPopup;

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
          (_crd && SMManger === void 0 ? (_reportPossibleCrUseOfSMManger({
            error: Error()
          }), SMManger) : SMManger).GetStateMachine((_crd && SMName === void 0 ? (_reportPossibleCrUseOfSMName({
            error: Error()
          }), SMName) : SMName).GameStateMachine).ChangeState((_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL1BvcHVwcy9MZXZlbFBvcHVwLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJHYW1lRGF0YSIsIkxpc3RHZW5lcmF0b3IiLCJQb3B1cCIsIlNNTWFuZ2VyIiwiU01OYW1lIiwiU3RhdGVUeXBlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTGV2ZWxQb3B1cCIsIkluaXQiLCJhcmciLCJsaXN0R2VuZXJhdG9yIiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiQ3JlYXRlSXRlbUJ5RGF0YSIsIkdhbWVTY2VuZURhdGEiLCJjbG9zZSIsIkdldFN0YXRlTWFjaGluZSIsIkdhbWVTdGF0ZU1hY2hpbmUiLCJDaGFuZ2VTdGF0ZSIsIkNob29zZUxldmVsU3RhdGUiLCJNYWluU2NlbmVTdGFydFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7O0FBQ0FDLE1BQUFBLFEseUJBQUFBLFE7O0FBQ0FDLE1BQUFBLGEsOEJBQUFBLGE7O0FBQ0FDLE1BQUFBLEssdUJBQUFBLEs7O0FBQ0FDLE1BQUFBLFEsaUNBQUFBLFE7QUFBVUMsTUFBQUEsTSxpQ0FBQUEsTTs7QUFFVkMsTUFBQUEsUyxrQ0FBQUEsUzs7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCUCxVLENBQXRCTyxPO0FBQVNDLE1BQUFBLFEsR0FBYVIsVSxDQUFiUSxROzs0QkFHSkMsVSxXQURaRixPQUFPLENBQUMsWUFBRCxDOzs7Ozs7Ozs7ZUFFSkcsSSxHQUFBLGNBQUtDLEdBQUwsRUFBZ0I7QUFBQTs7QUFDWixjQUFJQyxhQUFhLDRCQUFHLEtBQUtDLElBQUwsQ0FBVUMsY0FBVixDQUF5QixZQUF6QixDQUFILDBEQUFHLHNCQUF3Q0MsWUFBeEM7QUFBQTtBQUFBLDZDQUFwQjs7QUFDQSxjQUFJSCxhQUFKLEVBQW1CO0FBQ2ZBLFlBQUFBLGFBQWEsQ0FBQ0YsSUFBZDtBQUNBRSxZQUFBQSxhQUFhLENBQUNJLGdCQUFkLENBQStCO0FBQUE7QUFBQSxzQ0FBU0MsYUFBeEMsRUFBdUQsT0FBdkQ7QUFDSDtBQUNKLFM7O2VBQ0RDLEssR0FBQSxpQkFBUTtBQUNKO0FBQUE7QUFBQSxvQ0FBU0MsZUFBVCxDQUF5QjtBQUFBO0FBQUEsZ0NBQU9DLGdCQUFoQyxFQUFrREMsV0FBbEQsQ0FBOEQ7QUFBQTtBQUFBLHNDQUFVQyxnQkFBeEUsRUFBMEY7QUFBQTtBQUFBLHNDQUFVQyxtQkFBcEc7QUFDSCxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBkaXJlY3RvciB9IGZyb20gJ2NjJztcbmltcG9ydCB7IEdhbWVEYXRhIH0gZnJvbSAnLi4vLi4vQ29tbW9uL0dhbWUvR2FtZURhdGEnO1xuaW1wb3J0IHsgTGlzdEdlbmVyYXRvciB9IGZyb20gJy4uLy4uL0NvbW1vbi9MaXN0L0xpc3RHZW5lcmF0b3InO1xuaW1wb3J0IHsgUG9wdXAgfSBmcm9tICcuLi8uLi9Db21tb24vUG9wdXAvUG9wdXAnO1xuaW1wb3J0IHsgU01NYW5nZXIsIFNNTmFtZSB9IGZyb20gJy4uLy4uL0NvbW1vbi9TdGF0ZU1hY2hpbmUvU01NYW5nZXInO1xuaW1wb3J0IHsgU3RhdGVNYWNoaW5lIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZU1hY2hpbmUnO1xuaW1wb3J0IHsgU3RhdGVUeXBlIH0gZnJvbSAnLi4vLi4vQ29tbW9uL1N0YXRlTWFjaGluZS9TdGF0ZVR5cGUnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0xldmVsUG9wdXAnKVxuZXhwb3J0IGNsYXNzIExldmVsUG9wdXAgZXh0ZW5kcyBQb3B1cCB7XG4gICAgSW5pdChhcmc/OiBhbnkpIHtcbiAgICAgICAgbGV0IGxpc3RHZW5lcmF0b3IgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJTY3JvbGxWaWV3XCIpPy5nZXRDb21wb25lbnQoTGlzdEdlbmVyYXRvcik7XG4gICAgICAgIGlmIChsaXN0R2VuZXJhdG9yKSB7XG4gICAgICAgICAgICBsaXN0R2VuZXJhdG9yLkluaXQoKTtcbiAgICAgICAgICAgIGxpc3RHZW5lcmF0b3IuQ3JlYXRlSXRlbUJ5RGF0YShHYW1lRGF0YS5HYW1lU2NlbmVEYXRhLCAnbGV2ZWwnKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNsb3NlKCkge1xuICAgICAgICBTTU1hbmdlci5HZXRTdGF0ZU1hY2hpbmUoU01OYW1lLkdhbWVTdGF0ZU1hY2hpbmUpLkNoYW5nZVN0YXRlKFN0YXRlVHlwZS5DaG9vc2VMZXZlbFN0YXRlLCBTdGF0ZVR5cGUuTWFpblNjZW5lU3RhcnRTdGF0ZSk7XG4gICAgfVxufVxuIl19