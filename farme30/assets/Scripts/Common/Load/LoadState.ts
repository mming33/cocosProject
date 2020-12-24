// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Node, loader, director, computeRatioByType, find, Label, UITransformComponent, game, resources, JsonAsset } from 'cc';
import { GameData } from '../Game/GameData';
import { MyComponent } from '../Game/MyComponent';
import { PopupManager } from '../Popup/PopupManager';
import { SoundManager } from '../Sound/SoundManager';
import { IState } from '../StateMachine/IState';
import { StateMachine } from '../StateMachine/StateMachine';
import { StateType } from '../StateMachine/StateType';
import { LoadManager } from './LoadManager';

const { ccclass, property } = _decorator;

@ccclass('LoadState')
export class LoadState extends MyComponent implements IState {
    stateName: string = StateType.LoadState;
    canToStateName: string[] = [StateType.MainSceneStartState];
    canFromStateName: string[] = [];
    onLoad() {
        game.addPersistRootNode(this.node);
        this.addSelf2StateMap();
        StateMachine.Init("LoadState");
    }

    Start(arg?: any): void {
        LoadManager.loadIndex = 0;
        this.CreateSoundManager()
        this.LoadPopupsPrefab();
        this.LoadSoundPrefab();
        this.LoadScenes();
        this.LoadJson();
    }

    End(arg?: any): void {
        // director.loadScene("MainScene");
    }
    addSelf2StateMap(): void {
        console.log("注册状态成功，name: ", this.stateName);
        StateMachine.AddState(this.stateName, this.node.getComponent(LoadState) as LoadState)
    }


    private CreateSoundManager() {
        let soundManager = new Node("SoundManager");
        soundManager.addComponent(SoundManager);
        if (this.node.parent)
            this.node.parent.addChild(soundManager);
    }
    /**
     * 加载弹窗的预制体，并初始化PopupManager中的popups数组
     */
    private LoadPopupsPrefab() {
        // this.CreatePopupParent();
        resources.loadDir("PopupsPrefab", function (err: any, assets: any) {
            if (err) {
                console.error(err);
                return;
            }
            for (let i = 0; i < assets.length; i++) {
                const element = assets[i];
                PopupManager.I.popups.push(element);
            }
            LoadManager.loadIndex++;
            console.log(PopupManager.I.popups);
        });
    }
    /**
     * 加载音效，并初始化SoundManager.I.audios
     */
    private LoadSoundPrefab() {
        resources.loadDir("Sounds", function (err: any, assets: any) {
            if (err) {
                console.error(err);
                return;
            }
            for (let i = 0; i < assets.length; i++) {
                const element = assets[i];
                SoundManager.I.audios.push(element);
            }
            LoadManager.loadIndex++;
            console.log(SoundManager.I.audios);
        });
    }
    private LoadScenes() {
        director.preloadScene("MainScene", () => {
            LoadManager.loadIndex++;
        });
        director.preloadScene("GameScene", () => {
            LoadManager.loadIndex++;
        });
    }
    private LoadJson() {
        resources.load("JsonDatas/LevelData", function (err: any, assets: any) {
            if (err) {
                console.error(err);
                return;
            }
            GameData.GameSceneData = assets.json.Level;
            LoadManager.loadIndex++;
            console.log(GameData.GameSceneData);
        });
    }

}
