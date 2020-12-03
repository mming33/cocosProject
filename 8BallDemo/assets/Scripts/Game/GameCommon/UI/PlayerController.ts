import { _decorator, Component, Node, Touch, Slider, SliderComponent, SystemEventType, RigidBody, Vec3, geometry, Camera, CameraComponent, PhysicsSystem, v3, macro, CanvasComponent, systemEvent, find, loader, Scene, SceneAsset, director, Sprite, SpriteComponent, lerp, Color, UITransform } from 'cc';
import { SourceManager } from '../../../Common/SourceManager';
import { GameData } from '../../GameData';
import { BallManager } from '../Ball/BallManager';
import { GameSceneManager } from '../GameSceneManager';
import { RobotController } from '../RobotController';
import { RoundType } from '../RoundType';
import { GameSceneUI } from './GameSceneUI';
const { ccclass, property } = _decorator;
const { ray: Ray } = geometry;

@ccclass('PlayerController')
/**玩家操作控制器 */
export class PlayerController extends Component {
    static I: PlayerController;
    @property(CameraComponent)
    camera: CameraComponent = null;

    //瞄准参数
    private aimstartX: number = 0;
    private aimstartY: number = 0;
    private aimnowX: number = 0;
    private aimnowY: number = 0;
    private colorNode: Sprite;

    //打球参数
    public slider: SliderComponent;

    //自由球参数
    private freeBallstartX: number = 0;
    private freeBallstartY: number = 0;
    private freeBallnowX: number = 0;
    private freeBallnowY: number = 0;

    //瞄准数据
    private lerpnumber: number = 7;

    private whiteballUIpos: Node;
    gun: Node;
    line: Node;
    onEnable() {
        PlayerController.I = this.node.getComponent(PlayerController);
    }
    start() {
        let GunDrag: Node = this.node.getChildByName("GunDrag");
        let GunDrag2: Node = this.node.getChildByName("GunDrag2");
        let ballDrag: Node = this.node.getChildByName("BallDrag");
        this.whiteballUIpos = this.node.getChildByName("whiteballUIpos");
        this.gun = find("Gun/Cylinder");
        this.line = find("Line");
        GunDrag.on(Node.EventType.TOUCH_START, this.Aim_Touch_Start, this);
        GunDrag.on(Node.EventType.TOUCH_MOVE, this.Aim_Touch_Move, this);
        GunDrag.on(Node.EventType.TOUCH_END, this.Aim_Touch_End, this);

        GunDrag2.on(Node.EventType.TOUCH_START, this.Aim_Touch_Start2, this);
        GunDrag2.on(Node.EventType.TOUCH_MOVE, this.Aim_Touch_Move, this);
        GunDrag2.on(Node.EventType.TOUCH_END, this.Aim_Touch_End, this);

        ballDrag.on(Node.EventType.TOUCH_START, this.FreeBall_Touch_Start, this);
        ballDrag.on(Node.EventType.TOUCH_MOVE, this.FreeBall_Touch_Move, this);
        ballDrag.on(Node.EventType.TOUCH_END, this.FreeBall_Touch_End, this);
        ballDrag.on(Node.EventType.TOUCH_CANCEL, this.FreeBall_Touch_End, this);

        this.slider = this.node.getChildByName("Slider").getComponent(SliderComponent);
        this.colorNode = this.slider.node.getChildByName("Color").getComponent(Sprite);
        // this.node.getChildByName("HitBall")
        this.slider.node.on(Node.EventType.TOUCH_END, this.SliderMouseUp, this);
        this.slider.node.on(Node.EventType.TOUCH_CANCEL, this.SliderMouseUp, this);

        this.schedule(() => {
            let out: Vec3 = new Vec3();
            this.camera.convertToUINode(BallManager.I.WhiteBall.worldPosition, this.node, out)
            if (GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsFreeBall) {
                ballDrag.position = out;
            }
            this.whiteballUIpos.position = out;
        }, 0.02, macro.REPEAT_FOREVER);
    }

    /**松开滑动条 打球 */
    SliderMouseUp(event) {
        if (GameSceneManager.I.IsOwnerRound()) {
            if (this.slider.progress > 0.06) {
                SourceManager.I.Gun2Ball();
                //停止计时
                GameSceneUI.I.EndReckonTime();
                if (GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsHitBall) {
                    console.log("本回合玩家", GameSceneManager.I.nowPlayerType, "已经击打过球了，请等待下一回合");
                    return;
                }
                if (GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsFreeBall) {
                    console.log("本回合玩家", GameSceneManager.I.nowPlayerType, "有自由球权，现已经打过球了，重置自由球权，并关闭自由球移动规定");
                    find("Canvas/BallDrag").active = false;
                    BallManager.I.CloseFreeBall();
                    GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsFreeBall = false;
                }
                find("Gun/Cylinder").active = false;
                find("Line").active = false;
                find("Canvas/GunDrag2").active = false;
                GameSceneManager.I.CloseBallLight();

                let force = this.slider.progress * 300;
                BallManager.I.WhiteBall.getComponent(RigidBody).applyImpulse(new Vec3(GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].ForceDirection.x * force, 0, GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].ForceDirection.z * force));
                GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsStartFollow = false;
                BallManager.I.isAllBallStop = false;
                GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsHitBall = true;
                //重置白球第一个碰到的球的信息
                BallManager.I.ResetWhiteBallFirstTouchBallValue()
                this.slider.enabled = false;
            }
        }
        this.slider.progress = 0;
    }

    //瞄准的方法
    startTouch: boolean = false;
    touchtime: number = 0;
    Aim_Touch_Start(event: Touch) {
        if (!GameSceneManager.I.IsOwnerRound()) return;
        this.aimstartX = event.getLocationX();
        this.aimstartY = event.getLocationY();
        this.lerpnumber = 7;
        this.startTouch = true;
        this.touchtime = 0;
    }
    //微调
    Aim_Touch_Start2(event: Touch) {
        if (!GameSceneManager.I.IsOwnerRound()) return;
        this.aimstartX = event.getLocationX();
        this.aimstartY = event.getLocationY();
        this.lerpnumber = 80;
    }

    Aim_Touch_Move(event: Touch) {
        if (!GameSceneManager.I.IsOwnerRound()) return;
        this.aimnowX = event.getLocationX();
        this.aimnowY = event.getLocationY();
        let lerpx = this.aimstartX - this.aimnowX;
        let lerpy = this.aimstartY - this.aimnowY;
        let uipos = event.getUILocation();

        if (Math.abs(lerpx) > Math.abs(lerpy)) {
            if (uipos.y > this.whiteballUIpos.worldPosition.y) {
                var anglue = BallManager.I.whiteBallPos.eulerAngles.y + lerpx / this.lerpnumber;
            } else {
                var anglue = BallManager.I.whiteBallPos.eulerAngles.y - lerpx / this.lerpnumber;
            }
        }
        else {
            if (uipos.x > this.whiteballUIpos.worldPosition.x) {
                var anglue = BallManager.I.whiteBallPos.eulerAngles.y - lerpy / this.lerpnumber;
            } else {
                var anglue = BallManager.I.whiteBallPos.eulerAngles.y + lerpy / this.lerpnumber;
            }
        }
        BallManager.I.whiteBallPos.setRotationFromEuler(0, anglue, 0)
        this.aimstartX = event.getLocationX();
        this.aimstartY = event.getLocationY();
        if (this.lerpnumber == 80) {
            GameSceneUI.I.GunDrag2ScaleNumberMove(lerpy);
        }
    }
    //判断是点击还是拖拽。touchtime<10为点击否则为拖拽
    Aim_Touch_End(event: Touch) {
        if (!GameSceneManager.I.IsOwnerRound()) return;
        this.aimstartX = 0;
        this.aimnowX = 0;
        this.aimstartY = 0;
        this.aimnowY = 0;
        this.startTouch = false;
        if (this.touchtime < 10) {
            console.log("改变角度");
            let out = new Ray()
            this.camera.screenPointToRay(event.getLocationX(), event.getLocationY(), out);
            if (PhysicsSystem.instance.raycastClosest(out)) {
                let point = PhysicsSystem.instance.raycastClosestResult.hitPoint;
                let v3 = new Vec3(point.x, 5.71, point.z);
                BallManager.I.whiteBallPos.lookAt(v3);
                console.log(out);
            }

        }

    }
    // isDrawing: boolean = false;
    // isDrawing1: number = 0;
    // isDrawing2: number = 0;
    //计算点击时间 判断是否使用点击还是拖拽的瞄准办法
    update() {
        // if (GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsFreeBall) {
        //     if (this.isDrawing1 == this.isDrawing2) {
        //         if (this.isDrawing) {
        //             console.log("拖拽结束");
        //             this.isDrawing = false;
        //             this.gun.active = true;
        //             this.line.active = true;
        //         }
        //     } else {
        //         this.isDrawing1 = this.isDrawing2;
        //         this.isDrawing = true;
        //         this.gun.active = false;
        //         this.line.active = false;
        //         console.log("拖拽中");
        //     }
        // }
        if (this.startTouch) {
            this.touchtime++;
        }
        // if (this.slider.progress == 0) this.colorNode.fillRange = 0;
        else this.colorNode.color = new Color(255, 255, 255, 255 * this.slider.progress)
        if (GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsFreeBall) {
            BallManager.I.whiteBallComponent.rig.clearState();
        }

    }


    //自由球拖拽的方法
    FreeBall_Touch_Start(event: Touch) {
        if (!GameSceneManager.I.IsOwnerRound()) return;
        find("Canvas/BallDrag/hand").active = false;
        this.gun.active = false;
        this.line.active = false;
        this.freeBallstartX = event.getLocationX();
        this.freeBallstartY = event.getLocationY();
    }
    FreeBall_Touch_Move(event: Touch) {
        if (!GameSceneManager.I.IsOwnerRound()) return;
        BallManager.I.OpenFreeBall();
        this.freeBallnowX = event.getLocationX();
        this.freeBallnowY = event.getLocationY();
        let lerpx = this.freeBallstartX - this.freeBallnowX;
        let lerpy = this.freeBallstartY - this.freeBallnowY;
        let xmove = BallManager.I.WhiteBall.worldPosition.x - lerpx / 2.2;
        let ymove = BallManager.I.WhiteBall.worldPosition.z + lerpy / 2.2;
        if (xmove < -176) xmove = -170;
        if (xmove > 176) xmove = 170;
        if (ymove < -84) ymove = -77;
        if (ymove > 84) ymove = 77;
        if (GameSceneManager.I.IsFirstRound) {
            if (xmove > -92) xmove = -92;
        }
        BallManager.I.WhiteBall.worldPosition = new Vec3(xmove, 5.71, ymove);
        this.freeBallstartX = event.getLocationX();
        this.freeBallstartY = event.getLocationY();
        // this.isDrawing2++;

    }
    FreeBall_Touch_End(event: Touch) {
        if (!GameSceneManager.I.IsOwnerRound()) return;
        // BallManager.I.CloseFreeBall();
        this.freeBallstartX = 0;
        this.freeBallnowX = 0;
        this.freeBallstartY = 0;
        this.freeBallnowY = 0;
        this.gun.active = true;
        this.line.active = true;
    }


}


















 // this.schedule(() => {
        // if (GameSceneManager.I.nowPlayerType == RoundType.Play2) {
        // if (GameSceneManager.I.Players[RoundType.Play2].IsHitBall == true) {
        //     console.log("我是机器人2 我要这回合打过球了，我在等待球停止运动");
        //     return;
        // }
        // console.log("我是机器人2 我要开始打球了");
        // this.slider.progress = 1 * Math.random()
        // let force = this.slider.progress * 400;
        // BallManager.I.WhiteBall.getComponent(RigidBody).applyImpulse(new Vec3((Math.random() < 0.5 ? 1 : -1) * force * Math.random(), 0, (Math.random() < 0.5 ? 1 : -1) * force * Math.random()));
        // GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsStartFollow = false;
        // BallManager.I.isAllBallStop = false;
        // GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsHitBall = true;
        // //重置白球第一个碰到的球的信息
        // BallManager.I.ResetWhiteBallFirstTouchBallValue()

        // }
        // if (GameSceneManager.I.nowPlayerType == RoundType.Play1) {
        // if (GameSceneManager.I.Players[RoundType.Play1].IsHitBall == true) {
        //     console.log("我是机器人1 我要这回合打过球了，我在等待球停止运动");
        //     return;
        // }
        // console.log("我是机器人1 我要开始打球了");
        // this.slider.progress = 1 * Math.random();
        // let force = this.slider.progress * 400;
        // BallManager.I.WhiteBall.getComponent(RigidBody).applyImpulse(new Vec3((Math.random() < 0.5 ? 1 : -1) * force * Math.random(), 0, (Math.random() < 0.5 ? 1 : -1) * force * Math.random()));
        // GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsStartFollow = false;
        // BallManager.I.isAllBallStop = false;
        // GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsHitBall = true;
        //重置白球第一个碰到的球的信息
        // BallManager.I.ResetWhiteBallFirstTouchBallValue()
        //     }
        // }, 5, macro.REPEAT_FOREVER, 1);