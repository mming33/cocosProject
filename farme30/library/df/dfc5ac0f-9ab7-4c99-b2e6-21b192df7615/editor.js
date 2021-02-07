System.register(["cce.code-quality.cr", "cc", "../../Game/State/ChooseEndlessModeState.js", "../../Game/State/ChooseLevelState.js", "../../Game/State/DeathState.js", "../../Game/State/GameOverState.js", "../../Game/State/GameSceneStartState.js", "../../Game/State/GameSettlementState.js", "../../Game/State/GamingState.js", "../../Game/State/GamingStopState.js", "../../Game/State/MainSceneStartState.js", "../../Game/State/ShopPopupState.js", "../../Game/State/StartGameState.js", "../CommonState/LoadState.js", "./SMManger.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, ChooseEndlessModeState, ChooseLevelState, DeathState, GameOverState, GameSceneStartState, GameSettlementState, GamingState, GamingStopState, MainSceneStartState, ShopPopupState, StartGameState, LoadState, SMManger, _dec, _class, _crd, ccclass, property, AddState;

  function _reportPossibleCrUseOfChooseEndlessModeState(extras) {
    _reporterNs.report("ChooseEndlessModeState", "../../Game/State/ChooseEndlessModeState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChooseLevelState(extras) {
    _reporterNs.report("ChooseLevelState", "../../Game/State/ChooseLevelState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeathState(extras) {
    _reporterNs.report("DeathState", "../../Game/State/DeathState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameOverState(extras) {
    _reporterNs.report("GameOverState", "../../Game/State/GameOverState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSceneStartState(extras) {
    _reporterNs.report("GameSceneStartState", "../../Game/State/GameSceneStartState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSettlementState(extras) {
    _reporterNs.report("GameSettlementState", "../../Game/State/GameSettlementState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGamingState(extras) {
    _reporterNs.report("GamingState", "../../Game/State/GamingState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGamingStopState(extras) {
    _reporterNs.report("GamingStopState", "../../Game/State/GamingStopState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainSceneStartState(extras) {
    _reporterNs.report("MainSceneStartState", "../../Game/State/MainSceneStartState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopPopupState(extras) {
    _reporterNs.report("ShopPopupState", "../../Game/State/ShopPopupState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStartGameState(extras) {
    _reporterNs.report("StartGameState", "../../Game/State/StartGameState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadState(extras) {
    _reporterNs.report("LoadState", "../CommonState/LoadState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSMManger(extras) {
    _reporterNs.report("SMManger", "./SMManger", _context.meta, extras);
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
    }, function (_GameStateChooseEndlessModeStateJs) {
      ChooseEndlessModeState = _GameStateChooseEndlessModeStateJs.ChooseEndlessModeState;
    }, function (_GameStateChooseLevelStateJs) {
      ChooseLevelState = _GameStateChooseLevelStateJs.ChooseLevelState;
    }, function (_GameStateDeathStateJs) {
      DeathState = _GameStateDeathStateJs.DeathState;
    }, function (_GameStateGameOverStateJs) {
      GameOverState = _GameStateGameOverStateJs.GameOverState;
    }, function (_GameStateGameSceneStartStateJs) {
      GameSceneStartState = _GameStateGameSceneStartStateJs.GameSceneStartState;
    }, function (_GameStateGameSettlementStateJs) {
      GameSettlementState = _GameStateGameSettlementStateJs.GameSettlementState;
    }, function (_GameStateGamingStateJs) {
      GamingState = _GameStateGamingStateJs.GamingState;
    }, function (_GameStateGamingStopStateJs) {
      GamingStopState = _GameStateGamingStopStateJs.GamingStopState;
    }, function (_GameStateMainSceneStartStateJs) {
      MainSceneStartState = _GameStateMainSceneStartStateJs.MainSceneStartState;
    }, function (_GameStateShopPopupStateJs) {
      ShopPopupState = _GameStateShopPopupStateJs.ShopPopupState;
    }, function (_GameStateStartGameStateJs) {
      StartGameState = _GameStateStartGameStateJs.StartGameState;
    }, function (_CommonStateLoadStateJs) {
      LoadState = _CommonStateLoadStateJs.LoadState;
    }, function (_SMMangerJs) {
      SMManger = _SMMangerJs.SMManger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dfc5awPmrdMmbLmIbGS33YV", "AddState", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AddState", AddState = (_dec = ccclass('AddState'), _dec(_class = class AddState {
        static AddAllState() {
          (_crd && SMManger === void 0 ? (_reportPossibleCrUseOfSMManger({
            error: Error()
          }), SMManger) : SMManger).AddStateToStateMachine(new (_crd && LoadState === void 0 ? (_reportPossibleCrUseOfLoadState({
            error: Error()
          }), LoadState) : LoadState)());
          (_crd && SMManger === void 0 ? (_reportPossibleCrUseOfSMManger({
            error: Error()
          }), SMManger) : SMManger).AddStateToStateMachine(new (_crd && DeathState === void 0 ? (_reportPossibleCrUseOfDeathState({
            error: Error()
          }), DeathState) : DeathState)());
          (_crd && SMManger === void 0 ? (_reportPossibleCrUseOfSMManger({
            error: Error()
          }), SMManger) : SMManger).AddStateToStateMachine(new (_crd && GameOverState === void 0 ? (_reportPossibleCrUseOfGameOverState({
            error: Error()
          }), GameOverState) : GameOverState)());
          (_crd && SMManger === void 0 ? (_reportPossibleCrUseOfSMManger({
            error: Error()
          }), SMManger) : SMManger).AddStateToStateMachine(new (_crd && GameSceneStartState === void 0 ? (_reportPossibleCrUseOfGameSceneStartState({
            error: Error()
          }), GameSceneStartState) : GameSceneStartState)());
          (_crd && SMManger === void 0 ? (_reportPossibleCrUseOfSMManger({
            error: Error()
          }), SMManger) : SMManger).AddStateToStateMachine(new (_crd && ChooseEndlessModeState === void 0 ? (_reportPossibleCrUseOfChooseEndlessModeState({
            error: Error()
          }), ChooseEndlessModeState) : ChooseEndlessModeState)());
          (_crd && SMManger === void 0 ? (_reportPossibleCrUseOfSMManger({
            error: Error()
          }), SMManger) : SMManger).AddStateToStateMachine(new (_crd && ChooseLevelState === void 0 ? (_reportPossibleCrUseOfChooseLevelState({
            error: Error()
          }), ChooseLevelState) : ChooseLevelState)());
          (_crd && SMManger === void 0 ? (_reportPossibleCrUseOfSMManger({
            error: Error()
          }), SMManger) : SMManger).AddStateToStateMachine(new (_crd && GameSettlementState === void 0 ? (_reportPossibleCrUseOfGameSettlementState({
            error: Error()
          }), GameSettlementState) : GameSettlementState)());
          (_crd && SMManger === void 0 ? (_reportPossibleCrUseOfSMManger({
            error: Error()
          }), SMManger) : SMManger).AddStateToStateMachine(new (_crd && GamingState === void 0 ? (_reportPossibleCrUseOfGamingState({
            error: Error()
          }), GamingState) : GamingState)());
          (_crd && SMManger === void 0 ? (_reportPossibleCrUseOfSMManger({
            error: Error()
          }), SMManger) : SMManger).AddStateToStateMachine(new (_crd && GamingStopState === void 0 ? (_reportPossibleCrUseOfGamingStopState({
            error: Error()
          }), GamingStopState) : GamingStopState)());
          (_crd && SMManger === void 0 ? (_reportPossibleCrUseOfSMManger({
            error: Error()
          }), SMManger) : SMManger).AddStateToStateMachine(new (_crd && MainSceneStartState === void 0 ? (_reportPossibleCrUseOfMainSceneStartState({
            error: Error()
          }), MainSceneStartState) : MainSceneStartState)());
          (_crd && SMManger === void 0 ? (_reportPossibleCrUseOfSMManger({
            error: Error()
          }), SMManger) : SMManger).AddStateToStateMachine(new (_crd && ShopPopupState === void 0 ? (_reportPossibleCrUseOfShopPopupState({
            error: Error()
          }), ShopPopupState) : ShopPopupState)());
          (_crd && SMManger === void 0 ? (_reportPossibleCrUseOfSMManger({
            error: Error()
          }), SMManger) : SMManger).AddStateToStateMachine(new (_crd && StartGameState === void 0 ? (_reportPossibleCrUseOfStartGameState({
            error: Error()
          }), StartGameState) : StartGameState)());
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vU3RhdGVNYWNoaW5lL0FkZFN0YXRlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDaG9vc2VFbmRsZXNzTW9kZVN0YXRlIiwiQ2hvb3NlTGV2ZWxTdGF0ZSIsIkRlYXRoU3RhdGUiLCJHYW1lT3ZlclN0YXRlIiwiR2FtZVNjZW5lU3RhcnRTdGF0ZSIsIkdhbWVTZXR0bGVtZW50U3RhdGUiLCJHYW1pbmdTdGF0ZSIsIkdhbWluZ1N0b3BTdGF0ZSIsIk1haW5TY2VuZVN0YXJ0U3RhdGUiLCJTaG9wUG9wdXBTdGF0ZSIsIlN0YXJ0R2FtZVN0YXRlIiwiTG9hZFN0YXRlIiwiU01NYW5nZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJBZGRTdGF0ZSIsIkFkZEFsbFN0YXRlIiwiQWRkU3RhdGVUb1N0YXRlTWFjaGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7O0FBQ0FDLE1BQUFBLHNCLHNDQUFBQSxzQjs7QUFDQUMsTUFBQUEsZ0IsZ0NBQUFBLGdCOztBQUNBQyxNQUFBQSxVLDBCQUFBQSxVOztBQUNBQyxNQUFBQSxhLDZCQUFBQSxhOztBQUNBQyxNQUFBQSxtQixtQ0FBQUEsbUI7O0FBQ0FDLE1BQUFBLG1CLG1DQUFBQSxtQjs7QUFDQUMsTUFBQUEsVywyQkFBQUEsVzs7QUFDQUMsTUFBQUEsZSwrQkFBQUEsZTs7QUFDQUMsTUFBQUEsbUIsbUNBQUFBLG1COztBQUNBQyxNQUFBQSxjLDhCQUFBQSxjOztBQUNBQyxNQUFBQSxjLDhCQUFBQSxjOztBQUNBQyxNQUFBQSxTLDJCQUFBQSxTOztBQUVBQyxNQUFBQSxRLGVBQUFBLFE7Ozs7Ozs7T0FDSDtBQUFFQyxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsTyxHQUF3QmYsVTs7MEJBR2pCZ0IsUSxXQURaRixPQUFPLENBQUMsVUFBRCxDLGdCQUFSLE1BQ2FFLFFBRGIsQ0FDc0I7QUFDbEIsZUFBT0MsV0FBUCxHQUFxQjtBQUNqQjtBQUFBO0FBQUEsb0NBQVNDLHNCQUFULENBQWdDO0FBQUE7QUFBQSx1Q0FBaEM7QUFDQTtBQUFBO0FBQUEsb0NBQVNBLHNCQUFULENBQWdDO0FBQUE7QUFBQSx5Q0FBaEM7QUFDQTtBQUFBO0FBQUEsb0NBQVNBLHNCQUFULENBQWdDO0FBQUE7QUFBQSwrQ0FBaEM7QUFDQTtBQUFBO0FBQUEsb0NBQVNBLHNCQUFULENBQWdDO0FBQUE7QUFBQSwyREFBaEM7QUFDQTtBQUFBO0FBQUEsb0NBQVNBLHNCQUFULENBQWdDO0FBQUE7QUFBQSxpRUFBaEM7QUFDQTtBQUFBO0FBQUEsb0NBQVNBLHNCQUFULENBQWdDO0FBQUE7QUFBQSxxREFBaEM7QUFDQTtBQUFBO0FBQUEsb0NBQVNBLHNCQUFULENBQWdDO0FBQUE7QUFBQSwyREFBaEM7QUFDQTtBQUFBO0FBQUEsb0NBQVNBLHNCQUFULENBQWdDO0FBQUE7QUFBQSwyQ0FBaEM7QUFDQTtBQUFBO0FBQUEsb0NBQVNBLHNCQUFULENBQWdDO0FBQUE7QUFBQSxtREFBaEM7QUFDQTtBQUFBO0FBQUEsb0NBQVNBLHNCQUFULENBQWdDO0FBQUE7QUFBQSwyREFBaEM7QUFDQTtBQUFBO0FBQUEsb0NBQVNBLHNCQUFULENBQWdDO0FBQUE7QUFBQSxpREFBaEM7QUFDQTtBQUFBO0FBQUEsb0NBQVNBLHNCQUFULENBQWdDO0FBQUE7QUFBQSxpREFBaEM7QUFDSDs7QUFkaUIsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IgfSBmcm9tIFwiY2NcIjtcbmltcG9ydCB7IENob29zZUVuZGxlc3NNb2RlU3RhdGUgfSBmcm9tIFwiLi4vLi4vR2FtZS9TdGF0ZS9DaG9vc2VFbmRsZXNzTW9kZVN0YXRlXCI7XG5pbXBvcnQgeyBDaG9vc2VMZXZlbFN0YXRlIH0gZnJvbSBcIi4uLy4uL0dhbWUvU3RhdGUvQ2hvb3NlTGV2ZWxTdGF0ZVwiO1xuaW1wb3J0IHsgRGVhdGhTdGF0ZSB9IGZyb20gXCIuLi8uLi9HYW1lL1N0YXRlL0RlYXRoU3RhdGVcIjtcbmltcG9ydCB7IEdhbWVPdmVyU3RhdGUgfSBmcm9tIFwiLi4vLi4vR2FtZS9TdGF0ZS9HYW1lT3ZlclN0YXRlXCI7XG5pbXBvcnQgeyBHYW1lU2NlbmVTdGFydFN0YXRlIH0gZnJvbSBcIi4uLy4uL0dhbWUvU3RhdGUvR2FtZVNjZW5lU3RhcnRTdGF0ZVwiO1xuaW1wb3J0IHsgR2FtZVNldHRsZW1lbnRTdGF0ZSB9IGZyb20gXCIuLi8uLi9HYW1lL1N0YXRlL0dhbWVTZXR0bGVtZW50U3RhdGVcIjtcbmltcG9ydCB7IEdhbWluZ1N0YXRlIH0gZnJvbSBcIi4uLy4uL0dhbWUvU3RhdGUvR2FtaW5nU3RhdGVcIjtcbmltcG9ydCB7IEdhbWluZ1N0b3BTdGF0ZSB9IGZyb20gXCIuLi8uLi9HYW1lL1N0YXRlL0dhbWluZ1N0b3BTdGF0ZVwiO1xuaW1wb3J0IHsgTWFpblNjZW5lU3RhcnRTdGF0ZSB9IGZyb20gXCIuLi8uLi9HYW1lL1N0YXRlL01haW5TY2VuZVN0YXJ0U3RhdGVcIjtcbmltcG9ydCB7IFNob3BQb3B1cFN0YXRlIH0gZnJvbSBcIi4uLy4uL0dhbWUvU3RhdGUvU2hvcFBvcHVwU3RhdGVcIjtcbmltcG9ydCB7IFN0YXJ0R2FtZVN0YXRlIH0gZnJvbSBcIi4uLy4uL0dhbWUvU3RhdGUvU3RhcnRHYW1lU3RhdGVcIjtcbmltcG9ydCB7IExvYWRTdGF0ZSB9IGZyb20gXCIuLi9Db21tb25TdGF0ZS9Mb2FkU3RhdGVcIjtcbmltcG9ydCB7IElTdGF0ZSB9IGZyb20gXCIuL0lTdGF0ZVwiO1xuaW1wb3J0IHsgU01NYW5nZXIgfSBmcm9tIFwiLi9TTU1hbmdlclwiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0FkZFN0YXRlJylcbmV4cG9ydCBjbGFzcyBBZGRTdGF0ZSB7XG4gICAgc3RhdGljIEFkZEFsbFN0YXRlKCkge1xuICAgICAgICBTTU1hbmdlci5BZGRTdGF0ZVRvU3RhdGVNYWNoaW5lKG5ldyBMb2FkU3RhdGUoKSk7XG4gICAgICAgIFNNTWFuZ2VyLkFkZFN0YXRlVG9TdGF0ZU1hY2hpbmUobmV3IERlYXRoU3RhdGUoKSk7XG4gICAgICAgIFNNTWFuZ2VyLkFkZFN0YXRlVG9TdGF0ZU1hY2hpbmUobmV3IEdhbWVPdmVyU3RhdGUoKSk7XG4gICAgICAgIFNNTWFuZ2VyLkFkZFN0YXRlVG9TdGF0ZU1hY2hpbmUobmV3IEdhbWVTY2VuZVN0YXJ0U3RhdGUoKSk7XG4gICAgICAgIFNNTWFuZ2VyLkFkZFN0YXRlVG9TdGF0ZU1hY2hpbmUobmV3IENob29zZUVuZGxlc3NNb2RlU3RhdGUoKSk7XG4gICAgICAgIFNNTWFuZ2VyLkFkZFN0YXRlVG9TdGF0ZU1hY2hpbmUobmV3IENob29zZUxldmVsU3RhdGUoKSk7XG4gICAgICAgIFNNTWFuZ2VyLkFkZFN0YXRlVG9TdGF0ZU1hY2hpbmUobmV3IEdhbWVTZXR0bGVtZW50U3RhdGUoKSk7XG4gICAgICAgIFNNTWFuZ2VyLkFkZFN0YXRlVG9TdGF0ZU1hY2hpbmUobmV3IEdhbWluZ1N0YXRlKCkpO1xuICAgICAgICBTTU1hbmdlci5BZGRTdGF0ZVRvU3RhdGVNYWNoaW5lKG5ldyBHYW1pbmdTdG9wU3RhdGUoKSk7XG4gICAgICAgIFNNTWFuZ2VyLkFkZFN0YXRlVG9TdGF0ZU1hY2hpbmUobmV3IE1haW5TY2VuZVN0YXJ0U3RhdGUoKSk7XG4gICAgICAgIFNNTWFuZ2VyLkFkZFN0YXRlVG9TdGF0ZU1hY2hpbmUobmV3IFNob3BQb3B1cFN0YXRlKCkpO1xuICAgICAgICBTTU1hbmdlci5BZGRTdGF0ZVRvU3RhdGVNYWNoaW5lKG5ldyBTdGFydEdhbWVTdGF0ZSgpKTtcbiAgICB9XG59Il19