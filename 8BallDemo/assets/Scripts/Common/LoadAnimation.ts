import { _decorator, Component, Node, loader, Asset, tween, Vec3, ITweenOption, game, v3, Sprite, SpriteComponent, Color, find, CCString, Quat } from 'cc';
import { GameSceneManager } from '../Game/GameCommon/GameSceneManager';
import { GameData } from '../Game/GameData';
import { PopupManager } from '../Game/Popup/PopupManager';
const { ccclass, property } = _decorator;

@ccclass('LoadAnimation')
export class LoadAnimation extends Component {
    @property(CCString)
    type: string = "";
    start() {
        switch (this.type) {
            case "MatchingPopup":
                this.MatchingPopupAnimation(this.node);
                break;
            case "Win":
                this.WinAnimation(this.node);
                break;
            case "Lose":
                this.LoseAnimation(this.node);
                break;
            default:
                break;
        }
    }
    MainSceneTitleAnimation(node: Node) {

    }
    MatchingPopupAnimation(node: Node) {

        let redstartX;
        let bluestartX;
        let redEndX;
        let blueEndX;
        // let anima = this.node.getChildByName("Animation");
        let BGcolor = this.node.getChildByName("BG").getComponent(SpriteComponent).color;
        let GloadBGcolor = this.node.getChildByName("GloadBG").getComponent(SpriteComponent).color;
        let Top1Color = this.node.getChildByName("Top1").getComponent(SpriteComponent).color;
        let Top2Color = this.node.getChildByName("Top2").getComponent(SpriteComponent).color;
        let red: Node = this.node.getChildByName("red");
        let redcolor: Color = red.getComponent(SpriteComponent).color;
        let blue: Node = this.node.getChildByName("blue");
        let bluecolor: Color = blue.getComponent(SpriteComponent).color;
        let rectangle1: Node = this.node.getChildByName("Rectangle1");
        let rectangle2: Node = this.node.getChildByName("Rectangle2");
        let rectangle3: Node = this.node.getChildByName("Rectangle3");
        // let light: Node = this.node.getChildByName("light");
        // let lightColor: Color = light.getComponent(SpriteComponent).color;
        let vs: Node = this.node.getChildByName("vs");
        let vscolor: Color = vs.getComponent(SpriteComponent).color;
        let redlight: Node = red.getChildByName("redlight");
        let redlightcolor: Color = red.getChildByName("redlight").getComponent(SpriteComponent).color;
        let bluelight: Node = blue.getChildByName("bluelight");
        let bluelightcolor: Color = blue.getChildByName("bluelight").getComponent(SpriteComponent).color;
        if (GameData.I.loadData.thisPlayer == 0) {
            red.scale = new Vec3(1, 1, 1);
            blue.scale = new Vec3(1, 1, 1);
            redstartX = -1300
            bluestartX = 1300
            redEndX = -280;
            blueEndX = 280;
        } else {
            red.scale = new Vec3(-1, -1, 1);
            blue.scale = new Vec3(-1, -1, 1);
            redstartX = 1300
            bluestartX = -1300
            redEndX = 280;
            blueEndX = -280;
        }
        red.position = new Vec3(redstartX, 16, 0);
        blue.position = new Vec3(bluestartX, 16, 0);
        tween(red).to(0.3, { position: new Vec3(redEndX, 16, 0) }, { easing: "sineIn" }).start();
        tween(blue).to(0.3, { position: new Vec3(blueEndX, 16, 0) }, { easing: "sineIn" }).start();
        tween(redlightcolor).delay(0.3).to(0.3, new Color(255, 255, 255, 255)).union().start();
        tween(bluelightcolor).delay(0.3).to(0.3, new Color(255, 255, 255, 255)).union().start();
        tween(rectangle1).delay(0.3).to(0.5, { scale: new Vec3(12, 12, 12) }, { easing: "sineIn" }).union().start();
        tween(rectangle2).delay(0.4).to(0.54, { scale: new Vec3(12, 12, 12) }, { easing: "sineIn" }).union().start();
        tween(rectangle3).delay(0.5).to(0.6, { scale: new Vec3(12, 12, 12) }, { easing: "sineIn" }).union().start();
        // tween(light).delay(0.25).to(0.3, { scale: new Vec3(1, 1, 1) }, { easing: "sineIn" }).union().start();
        tween(vs).delay(0.25).to(0.3, { scale: new Vec3(1, 1, 1) }, { easing: "sineIn" }).union().start();
        tween(vscolor).delay(0.25).to(0.25, new Color(255, 255, 255, 255), { easing: "sineIn" }).union().start();
        tween(vs).delay(0.5)
            .to(0.05, { position: new Vec3(3, 20, 0) })
            .to(0.05, { position: new Vec3(-4, 20, 0) })
            .to(0.05, { position: new Vec3(3, 18, 0) })
            .to(0.05, { position: new Vec3(-3, 11, 0) })
            .to(0.05, { position: new Vec3(2, 18, 0) })
            .to(0.05, { position: new Vec3(-2, 14, 0) })
            .to(0.05, { position: new Vec3(1, 17, 0) })
            .to(0.05, { position: new Vec3(-1, 17, 0) })
            .to(0.05, { position: new Vec3(-1, 18, 0) })
            .to(0.05, { position: new Vec3(0, 16, 0) }).union().start();


        tween(BGcolor).delay(3.5).to(0.5, new Color(255, 255, 255, 0)).start();
        tween(GloadBGcolor).delay(2.5).to(0.5, new Color(255, 255, 255, 0)).start();
        tween(Top1Color).delay(2.5).to(0.5, new Color(255, 255, 255, 0)).start();
        tween(Top2Color).delay(2.5).to(0.5, new Color(255, 255, 255, 0)).start();
        tween(redlight).delay(3).to(0.3, { position: new Vec3(redstartX, 16, 0) }).start();
        tween(bluelight).delay(3).to(0.3, { position: new Vec3(bluestartX, 16, 0) }).start();
        tween(vs).delay(2.5).to(0.5, { scale: new Vec3(12, 12, 0) }, { easing: "backIn" }).start();

        tween(redcolor).delay(3).to(0.3, new Color(255, 255, 255, 0)).start();
        tween(bluecolor).delay(3).to(0.3, new Color(255, 255, 255, 0)).start();
        tween(redlightcolor).delay(3).to(0.3, new Color(255, 255, 255, 0)).start();
        tween(bluelightcolor).delay(3).to(0.3, new Color(255, 255, 255, 0)).start();
        // tween(lightColor).delay(3).to(0.3, new Color(255, 255, 255, 0)).start();
        tween(vscolor).delay(2.5).to(0.5, new Color(255, 255, 255, 0)).start();
        this.scheduleOnce(() => {
            PopupManager.I.ClosePopup(find("Canvas"));
            GameData.I.gameStop = false;
        }, 6);
    }
    WinAnimation(node: Node) {

    }
    LoseAnimation(node: Node) {
        // let guang = node.getChildByName("guang");
        // let xian = node.getChildByName("xian");
        // let lose = node.getChildByName("lose");
        // console.log(lose.rotation);

        // // let loserotation = node.getChildByName("lose").rotation;
        // let losecolor = node.getChildByName("lose").getComponent(SpriteComponent).color;
        // let Smoke1 = node.getChildByName("Smoke1");
        // let Smoke2 = node.getChildByName("Smoke2");
        // tween(guang).to(0.5, { scale: new Vec3(1, 1, 1) }, { easing: "smooth" }).start();
        // tween(lose).delay(0.1)
        //     .to(0.4, { scale: new Vec3(1, 1, 1) }, { easing: "bounceOut" })
        //     .union().start();
        // // tween(loserotation).delay(1).to(0.5, n, { easing: "backOut" }).start();
        // tween(lose).delay(0.25)
        //     .to(0.2, { rotation: new Quat(0, 0, 0.13, 0.99) })
        //     .to(0.2, { rotation: new Quat(0, 0, -0.13, 0.99) })
        //     .to(0.1, { rotation: new Quat(0, 0, -0.03, 0.99) })
        //     .to(0.1, { rotation: new Quat(0, 0, 0.03, 0.99) })
        //     .to(0.1, { rotation: new Quat(0, 0, -0.03, 0.99) })
        //     .to(0.2, { rotation: new Quat(0, 0, 0, 0) },)
        //     .union().start();
        // this.scheduleOnce(() => {
        //     Smoke1.active = true;
        //     Smoke2.active = true;
        // }, 0.3)
        // tween(losecolor).delay(0.1).to(0.4, new Color(255, 255, 255, 255)).start();
    }
}
//backOut 超过然后回弹
//bounceOut 弹力
//cubicOut 快到慢
//circOut 快到慢
//elasticOut 慢到快
//expoOut 快到慢
//fade 慢到快
//linear 匀速
//sineOut 超过然后回弹
