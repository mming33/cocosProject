import { _decorator } from "cc";
import { ChooseEndlessModeState } from "../../Game/State/ChooseEndlessModeState";
import { ChooseLevelState } from "../../Game/State/ChooseLevelState";
import { DeathState } from "../../Game/State/DeathState";
import { GameOverState } from "../../Game/State/GameOverState";
import { GameSceneStartState } from "../../Game/State/GameSceneStartState";
import { GameSettlementState } from "../../Game/State/GameSettlementState";
import { GamingState } from "../../Game/State/GamingState";
import { GamingStopState } from "../../Game/State/GamingStopState";
import { MainSceneStartState } from "../../Game/State/MainSceneStartState";
import { ShopPopupState } from "../../Game/State/ShopPopupState";
import { StartGameState } from "../../Game/State/StartGameState";
import { LoadState } from "../CommonState/LoadState";
import { IState } from "./IState";
import { SMManger } from "./SMManger";
const { ccclass, property } = _decorator;

@ccclass('AddState')
export class State {
    static AddState() {
        SMManger.AddStateToStateMachine(new LoadState());
        SMManger.AddStateToStateMachine(new DeathState());
        SMManger.AddStateToStateMachine(new GameOverState());
        SMManger.AddStateToStateMachine(new GameSceneStartState());
        SMManger.AddStateToStateMachine(new ChooseEndlessModeState());
        SMManger.AddStateToStateMachine(new ChooseLevelState());
        SMManger.AddStateToStateMachine(new GameSettlementState());
        SMManger.AddStateToStateMachine(new GamingState());
        SMManger.AddStateToStateMachine(new GamingStopState());
        SMManger.AddStateToStateMachine(new MainSceneStartState());
        SMManger.AddStateToStateMachine(new ShopPopupState());
        SMManger.AddStateToStateMachine(new StartGameState());
    }
}