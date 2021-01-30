import { CanvasComponent, Node, director, find, GFXClearFlag, loader, SpriteComponent, UITransformComponent, _decorator, animation, Vec3, Label, resources } from 'cc';
import { EventType, MyEvent } from '../Events/MyEvent';
import { GameData } from '../Game/GameData';
import { MyComponent } from '../Game/MyComponent';
import { PopupManager } from '../Popup/PopupManager';
import { SoundManager } from '../Sound/SoundManager';
import { State } from '../StateMachine/AddState';
import { SMManger, SMName } from '../StateMachine/SMManger';
import { StateType } from '../StateMachine/StateType';
const { ccclass, property } = _decorator;

@ccclass('LoadManager')
export class LoadManager extends MyComponent {

    private readonly JsonDataPath = "JsonDatas/LevelData";
    private readonly MainScenePath = "MainScene";
    private readonly GameScenePath = "GameScene";
    public static readonly allloadIndex: number = 5;

    Init() {
        SMManger.AutoAndAllStateAndCreateSM();
        this.InitNode()
        if (LoadManager.isLoadOver == true) {
            MyEvent.I.emit(EventType.LoadResOver);
        } else {
            this.LoadRes();
        };
        State.AddState();
    }
    /**初始化结点信息 */
    private InitNode(): void {
        this.sliderMask = (find("Canvas/Slider/Mask") as Node).getComponent(UITransformComponent) as UITransformComponent;
        this.sliderText = (find("Canvas/Slider/Text") as Node).getComponent(Label) as Label;
    }
    /**启动加载资源 */
    private LoadRes() {
        MyEvent.I.emit(EventType.LoadStates);
        this.schedule(this.LoadSlider, 0.015);
        this.LoadScenes();
        this.LoadJson();
        PopupManager.LoadPopups();
        SoundManager.LoadSound();
    }
    /**加载界面的滑动条结束事件 结束时派发EventType.LoadResOver的消息 */
    private LoadSlider(): void {
        if (this.LoadOver()) {
            LoadManager.isLoadOver = true;
            MyEvent.I.emit(EventType.LoadResOver);
            this.unschedule(this.LoadSlider);
        }

    }
    /**判断是否加载完毕，并改变进度条的长度 */
    private LoadOver(): boolean {
        if (this.sliderMask) {
            if (this.index <= LoadManager.loadIndex / LoadManager.allloadIndex) {
                this.index += 0.01;
                if (this.sliderText) {
                    this.sliderText.string = Math.floor(this.index * 100) + "%";
                }
            }
            this.sliderMask.width = 517 * this.index;
        }
        if (LoadManager.loadIndex >= LoadManager.allloadIndex) {
            LoadManager.loadIndex = LoadManager.allloadIndex;
        }

        if (this.index >= 1) {
            return true;
        } else {
            return false;
        }
    }
    /**预加载场景 */
    private LoadScenes() {
        director.preloadScene(this.MainScenePath, () => {
            LoadManager.loadIndex++;
        });
        director.preloadScene(this.GameScenePath, () => {
            LoadManager.loadIndex++;
        });
    }
    /**加载json文件 */
    private LoadJson() {
        resources.load(this.JsonDataPath, function (err: any, assets: any) {
            if (err) {
                console.error(err);
                return;
            }
            GameData.GameSceneData = assets.json.Level;
            LoadManager.loadIndex++;
            console.log(GameData.GameSceneData);
        });
    }

    static isLoadOver: boolean = false;
    static loadIndex: number = 0;
    private sliderMask: UITransformComponent | undefined;
    private sliderText: Label | undefined;
    private index = 0;
}
