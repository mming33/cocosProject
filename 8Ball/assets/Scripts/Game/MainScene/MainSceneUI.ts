import { _decorator, Component, Node, SpriteComponent, find, LabelComponent, EventTouch, director, tween, Color } from 'cc';
import { MyComponent } from '../../Common/Game/MyComponent';
import { GetServerData } from '../../Common/Server/GetServerData';
import { SoundManager } from '../../Common/Sound/SoundManager';
const { ccclass, property } = _decorator;

@ccclass('MainSceneUI')
export class MainSceneUI extends MyComponent {

    MyHeadImage: SpriteComponent;
    Player1HeadImage: SpriteComponent;
    Player2HeadImage: SpriteComponent;
    UserName: LabelComponent;
    GloadNumber: LabelComponent;
    Time: LabelComponent;
    Player1Name: LabelComponent;
    Player2Name: LabelComponent;
    BreakGame: Node;
    Init() {
        this.StartAnimation()
        this.InitNode();
        this.SetNodeValue();
        this.AddFunction();
        this.SetJoinValue();
        // this.LoadScene();
        SoundManager.I.PlayBGMusic();
    }
    StartAnimation() {
        let allUI = find("Canvas/UI").getComponent(SpriteComponent);
        allUI.color = new Color(255, 255, 255, 0);
        tween(allUI.color).to(1, new Color(255, 255, 255, 255)).start();

    }
    InitNode() {

        this.MyHeadImage = find("Canvas/UI/UserMask/HeadImage").getComponent(SpriteComponent);
        this.Player1HeadImage = find("Canvas/UI/Player1Mask/HeadImage").getComponent(SpriteComponent);
        this.Player2HeadImage = find("Canvas/UI/Player2Mask/HeadImage").getComponent(SpriteComponent);
        this.UserName = find("Canvas/UI/UserName").getComponent(LabelComponent);
        this.GloadNumber = find("Canvas/UI/GloadNumber").getComponent(LabelComponent);
        this.Time = find("Canvas/UI/Time").getComponent(LabelComponent);
        this.Player1Name = find("Canvas/UI/Player1Name").getComponent(LabelComponent);
        this.Player2Name = find("Canvas/UI/Player2Name").getComponent(LabelComponent);
        this.BreakGame = find("Canvas/UI/BreakGame");
    }
    SetNodeValue() {
        this.MyHeadImage.spriteFrame = GetServerData.UserHeadImage;
        this.Player1HeadImage.spriteFrame = GetServerData.UserHeadImage;
        this.UserName.string = GetServerData.UserName;
        this.Player1Name.string = GetServerData.UserName;
        this.GloadNumber.string = GetServerData.UserMoney + "";
    }
    SetJoinValue() {
        this.Player2HeadImage.spriteFrame = GetServerData.OtherHeadImage;
        this.Player2Name.string = GetServerData.OtherName;
    }

    AddFunction() {
        this.BreakGame.on(Node.EventType.TOUCH_END, GetServerData.LeaveGame);
    }
    OffFunction() {
        this.BreakGame.targetOff(Node.EventType.TOUCH_END);
    }




    LoadScene() {
        director.loadScene("GameScene");
    }




    myDisable() {
        this.OffFunction();
    }


}
