import { _decorator, Component, Node, find, RigidBody, Vec3, v3, geometry, Collider, PhysicsSystem, macro, PhysicsRayResult } from 'cc';
import { SourceManager } from '../../Common/SourceManager';
import { MathAlgorithm } from '../Algorithm/MathAlgorithm';
import { GameData } from '../GameData';
import { BallManager } from './Ball/BallManager';
import { BallType } from './Ball/BallType';
import { GameSceneManager } from './GameSceneManager';
import { RoundType } from './RoundType';
import { GameSceneUI } from './UI/GameSceneUI';
import { PlayerController } from './UI/PlayerController';
const { ccclass, property } = _decorator;
const { ray: Ray } = geometry;

@ccclass('RobotController')
export class RobotController extends Component {
    static I: RobotController;
    playerType: RoundType;
    holes: Node[] = new Array<Node>(6);


    private whiteBallPos2: Node = null;
    private ganPos: Node = null;
    private center: Node = null;
    private left: Node = null;
    private right: Node = null;

    private Sphere: Node = null;
    private Sphere2: Node = null;

    onLoad() {
        RobotController.I = this.node.getComponent(RobotController);
    }
    start() {
        this.scheduleOnce(() => {
            this.Init();
            this.ChooseBallLogic();
        }, 5)
    }
    // Robot() {
    //     this.schedule(() => {
    //         if (GameData.I.gameStop) return;
    //         if (GameSceneManager.I.nowPlayerType != GameSceneManager.I.thisPlayer) {
    //             if (GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsHitBall) {
    //                 console.log("本回合玩家", GameSceneManager.I.nowPlayerType, "已经击打过球了，请等待下一回合");
    //                 console.log("我是机器人2 我要这回合打过球了，我在等待球停止运动");
    //                 return;
    //             } else {
    //                 this.slider.progress = 0.5 + 0.5 * Math.random();
    //             }
    //             if (this.slider.progress > 0.06) {
    //                 //停止计时
    //                 GameSceneUI.I.EndReckonTime();
    //                 if (GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsFreeBall) {
    //                     console.log("本回合玩家", GameSceneManager.I.nowPlayerType, "有自由球权，现已经打过球了，重置自由球权，并关闭自由球移动规定");
    //                     find("Canvas/BallDrag").active = false;
    //                     BallManager.I.CloseFreeBall();
    //                     GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsFreeBall = false;
    //                 }
    //                 find("Gun/Cylinder").active = false;
    //                 find("Line").active = false;
    //                 find("Canvas/GunDrag2").active = false;
    //                 let force = this.slider.progress * 300;
    //                 console.log("我是机器人2 我要开始打球了");
    //                 BallManager.I.WhiteBall.getComponent(RigidBody).applyImpulse(new Vec3(GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].ForceDirection.x * force, 0, GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].ForceDirection.z * force));
    //                 GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsStartFollow = false;
    //                 BallManager.I.isAllBallStop = false;
    //                 GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsHitBall = true;
    //                 //重置白球第一个碰到的球的信息
    //                 BallManager.I.ResetWhiteBallFirstTouchBallValue()
    //             }
    //             this.slider.progress = 0;
    //         }
    //         // if (GameSceneManager.I.nowPlayerType == RoundType.Play2) {
    //         //     if (GameSceneManager.I.Players[RoundType.Play2].IsHitBall == true) {
    //         //         console.log("我是机器人2 我要这回合打过球了，我在等待球停止运动");
    //         //         return;
    //         //     }
    //         //     console.log("我是机器人2 我要开始打球了");
    //         //     this.slider.progress = 1 * Math.random()
    //         //     let force = this.slider.progress * 400;
    //         //     BallManager.I.WhiteBall.getComponent(RigidBody).applyImpulse(new Vec3((Math.random() < 0.5 ? 1 : -1) * force * Math.random(), 0, (Math.random() < 0.5 ? 1 : -1) * force * Math.random()));
    //         //     GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsStartFollow = false;
    //         //     BallManager.I.isAllBallStop = false;
    //         //     GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsHitBall = true;
    //         //     //重置白球第一个碰到的球的信息
    //         //     BallManager.I.ResetWhiteBallFirstTouchBallValue()

    //         // }
    //         // if (GameSceneManager.I.nowPlayerType == RoundType.Play1) {
    //         // if (GameSceneManager.I.Players[RoundType.Play1].IsHitBall == true) {
    //         //     console.log("我是机器人1 我要这回合打过球了，我在等待球停止运动");
    //         //     return;
    //         // }
    //         // console.log("我是机器人1 我要开始打球了");
    //         // this.slider.progress = 1 * Math.random();
    //         // let force = this.slider.progress * 400;
    //         // BallManager.I.WhiteBall.getComponent(RigidBody).applyImpulse(new Vec3((Math.random() < 0.5 ? 1 : -1) * force * Math.random(), 0, (Math.random() < 0.5 ? 1 : -1) * force * Math.random()));
    //         // GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsStartFollow = false;
    //         // BallManager.I.isAllBallStop = false;
    //         // GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsHitBall = true;
    //         // // 重置白球第一个碰到的球的信息
    //         // BallManager.I.ResetWhiteBallFirstTouchBallValue()
    //         //     }
    //     }, 5, macro.REPEAT_FOREVER, 1);
    // }
    Init() {
        //查找所有的球洞结点
        for (let i = 0; i < this.holes.length; i++) {
            this.holes[i] = find("Table/hole" + i);
        }
        //模拟瞄准
        this.whiteBallPos2 = find("whiteBallPos2");
        this.ganPos = this.whiteBallPos2.getChildByName("ganPos") as Node;
        this.center = this.whiteBallPos2.getChildByName("Center") as Node;
        this.left = this.whiteBallPos2.getChildByName("Left") as Node;
        this.right = this.whiteBallPos2.getChildByName("Right") as Node;
        this.Sphere = find("Sphere");
        this.Sphere2 = find("Sphere2");
        this.schedule(() => {
            this.TurnLogicPart();
        }, 5, macro.REPEAT_FOREVER, 10);
    }
    IsUseFreeBall: boolean = false;
    /**判断回合逻辑部分 */
    TurnLogicPart() {
        //游戏暂停时
        if (GameData.I.gameStop) return;
        //不是机器人回合时
        if (GameSceneManager.I.nowPlayerType != this.playerType) return;
        //机器人已经打过球时
        if (GameSceneManager.I.Players[this.playerType].IsHitBall) return;
        if (GameSceneManager.I.Players[this.playerType].IsFreeBall && !this.IsUseFreeBall) {
            BallManager.I.OpenFreeBall();
            if (GameSceneManager.I.IsFirstRound) {
                if (Math.random() > 0.8) {
                    // console.log("开局懒得摆球");
                } else {
                    BallManager.I.WhiteBall.worldPosition = MathAlgorithm.ResetBallPos(BallType.SOLIDBALL, new Vec3(-130 + ((Math.random() > 0.5 ? 1 : -1) * Math.random() * 30), 5.71, (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 70)));
                }
            }
            else {
                find("Canvas/BallDrag/hand").active = false;
                BallManager.I.WhiteBall.worldPosition = MathAlgorithm.ResetBallPos(BallType.SOLIDBALL, new Vec3((Math.random() > 0.5 ? 1 : -1) * (Math.random() * 130), 5.71, (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 70)));
            }
            this.IsUseFreeBall = true;
            // this.scheduleOnce(this.ChooseBallLogic, 2);
            return;
        }
        PlayerController.I.slider.enabled = false;
        this.ChooseBallLogic();
    }
    /**选球逻辑 */
    ChooseBallLogic() {
        if (GameSceneManager.I.IsFirstRound) {
            this.scheduleOnce(this.Hit, 2);
            return;
        }
        //普通球指向白球的向量集合
        let whiteballToOrdinaryBall: Vec3[] = new Array<Vec3>();
        //普通球指向每个球洞的向量集合
        let OrdinaryBallToHoles: Array<Array<Vec3>> = new Array<Array<Vec3>>();
        //遍历所有的球 计算每个球指向白球的向量 和每个球指向球洞的向量
        for (let i = 0; i < BallManager.I.AllBalls.length; i++) {
            OrdinaryBallToHoles.push(new Array<Vec3>(6));
            for (let j = 0; j < this.holes.length; j++) {
                let out = new Vec3(this.holes[j].worldPosition.x - BallManager.I.AllBalls[i].node.worldPosition.x, 0, this.holes[j].worldPosition.z - BallManager.I.AllBalls[i].node.worldPosition.z);
                OrdinaryBallToHoles[i][j] = out;
            }
            let out2 = new Vec3(BallManager.I.WhiteBall.worldPosition.x - BallManager.I.AllBalls[i].node.worldPosition.x, 0, BallManager.I.WhiteBall.worldPosition.z - BallManager.I.AllBalls[i].node.worldPosition.z);
            whiteballToOrdinaryBall.push(out2);
            // console.log(i, BallManager.I.AllBalls[i].ballNumber);
        }
        //求出两向量的夹角弧度值
        let datas: Array<any> = new Array<any>();
        for (let i = 0; i < OrdinaryBallToHoles.length; i++) {
            const o2h = OrdinaryBallToHoles[i];
            for (let j = 0; j < o2h.length; j++) {
                let angle = Vec3.angle(whiteballToOrdinaryBall[i], o2h[j]);
                let data: any = {};
                data.angle = angle;
                data.ballNumber = i + 1;
                data.holeNumber = j;
                data.ballName = BallManager.I.AllBalls[i].ballNumber;
                datas.push(data);
            }
        }

        if (GameSceneManager.I.Players[this.playerType].TypeOfBallToBeHit != 0 && GameSceneManager.I.Players[this.playerType].TypeOfBallToBeHit != 1 && GameSceneManager.I.Players[this.playerType].TypeOfBallToBeHit != 3) {
            //如果击打球的类型还未指定 则删除所有的黑八
            for (let i = datas.length - 1; i >= 0; i--) {
                if (datas[i].ballName == 8) {
                    console.log(datas[i]);
                    datas.splice(i, 1);
                }
            }
        } else if (GameSceneManager.I.Players[this.playerType].TypeOfBallToBeHit == 0) {
            //如果击打球的类型为实色球 则删除所有的花色球和黑八
            for (let i = datas.length - 1; i >= 0; i--) {
                if (datas[i].ballName >= 8) {
                    datas.splice(i, 1);
                }
            }
        } else if (GameSceneManager.I.Players[this.playerType].TypeOfBallToBeHit == 1) {
            //如果击打球的类型为花色球 则删除所有的实色球和黑八
            for (let i = datas.length - 1; i >= 0; i--) {
                if (datas[i].ballName <= 8) {
                    datas.splice(i, 1);
                }
            }
        } else if (GameSceneManager.I.Players[this.playerType].TypeOfBallToBeHit == 3) {
            //如果击打球的类型为黑八 则删除所有的实色球和花色球
            for (let i = datas.length - 1; i >= 0; i--) {
                if (datas[i].ballName != 8) {
                    datas.splice(i, 1);
                }
            }
        }

        //根据弧值制进行排序 弧度值越大说明角度越大 越容易打进
        for (let i = 0; i < datas.length - 1; i++) {
            for (let j = i + 1; j < datas.length; j++) {
                if (datas[j].angle > datas[i].angle) {
                    let data = datas[i]
                    datas[i] = datas[j];
                    datas[j] = data;
                }
            }
        }
        // console.log(datas);
        // console.log(BallManager.I.AllBalls);
        //优先选择白球到球，球到洞口都没有遮挡的
        // console.log("优先选择!!!!");
        for (let i = 0; i < datas.length; i++) {
            const data = datas[i];
            const ball = BallManager.I.AllBalls[data.ballNumber - 1].node;
            const hole = this.holes[data.holeNumber];
            let targetpos = this.CreateTargetPos(ball.worldPosition, ball.worldPosition, hole.worldPosition);
            this.whiteBallPos2.setWorldPosition(BallManager.I.WhiteBall.worldPosition);
            this.whiteBallPos2.lookAt(targetpos == 1 ? this.Sphere.position : this.Sphere2.position);
            //console.log(data.ballName, ball.name);
            let firstball = this.CreateRayJudgeNearestBall();
            if (firstball.name != ball.name) {
                continue;
            }
            else {
                if (this.CreateRay(ball.worldPosition, hole.worldPosition)) {
                    // console.log("白球到球，球到洞口都没有遮挡的");
                    BallManager.I.whiteBallPos.lookAt(targetpos == 1 ? this.Sphere.position : this.Sphere2.position);
                    this.scheduleOnce(this.Hit, 2);
                    return;
                }
            }
        }
        //选择白球到球没有遮挡的
        for (let i = 0; i < datas.length; i++) {
            const data = datas[i];
            const ball = BallManager.I.AllBalls[data.ballNumber - 1].node;
            const hole = this.holes[data.holeNumber];
            let targetpos = this.CreateTargetPos(ball.worldPosition, ball.worldPosition, hole.worldPosition);
            this.whiteBallPos2.setWorldPosition(BallManager.I.WhiteBall.worldPosition);
            this.whiteBallPos2.lookAt(targetpos == 1 ? this.Sphere.position : this.Sphere2.position);
            // console.log(data.ballName, ball.name);
            let firstball = this.CreateRayJudgeNearestBall();
            if (firstball.name != ball.name) {
                // console.log("---------");
                continue;
            }
            else {
                // console.log("++++++++++++++");
                // console.log("选择白球到球没有遮挡的");
                BallManager.I.whiteBallPos.lookAt(targetpos == 1 ? this.Sphere.position : this.Sphere2.position);
                this.scheduleOnce(this.Hit, 2);
                return;
            }
        }
        console.log("没有可以打的球", datas[0]);
        let data = datas[0];
        let ball = BallManager.I.AllBalls[data.ballNumber - 1].node;
        let hole = this.holes[data.holeNumber];
        let targetpos = this.CreateTargetPos(ball.worldPosition, ball.worldPosition, hole.worldPosition);
        this.whiteBallPos2.setWorldPosition(BallManager.I.WhiteBall.worldPosition);
        this.whiteBallPos2.lookAt(targetpos == 1 ? this.Sphere.position : this.Sphere2.position);
        BallManager.I.whiteBallPos.lookAt(targetpos == 1 ? this.Sphere.position : this.Sphere2.position);
        this.scheduleOnce(this.Hit, 2);
    }

    CreateRayJudgeNearestBall() {
        let dir = new Vec3(this.center.worldPosition.x - this.ganPos.worldPosition.x, 0, this.center.worldPosition.z - this.ganPos.worldPosition.z);
        let rayCenter = new Ray(this.center.worldPosition.x, this.center.worldPosition.y, this.center.worldPosition.z, dir.x, 0, dir.z);
        let rayLeft = new Ray(this.left.worldPosition.x, this.left.worldPosition.y, this.left.worldPosition.z, dir.x, 0, dir.z);
        let rayRight = new Ray(this.right.worldPosition.x, this.right.worldPosition.y, this.right.worldPosition.z, dir.x, 0, dir.z);

        let centerd: number;
        let leftd: number;
        let rightd: number;

        let centercollider: Collider;
        let leftcollider: Collider;
        let rightcollider: Collider;

        let centerhitPoint: Vec3;
        let lefthitPoint: Vec3;
        let righthitPoint: Vec3;

        if (PhysicsSystem.instance.raycastClosest(rayCenter, 1)) {
            centercollider = PhysicsSystem.instance.raycastClosestResult.collider;
            centerhitPoint = new Vec3(PhysicsSystem.instance.raycastClosestResult.hitPoint.x, PhysicsSystem.instance.raycastClosestResult.hitPoint.y, PhysicsSystem.instance.raycastClosestResult.hitPoint.z);
        }
        if (PhysicsSystem.instance.raycastClosest(rayLeft, 1)) {
            leftcollider = PhysicsSystem.instance.raycastClosestResult.collider;
            lefthitPoint = new Vec3(PhysicsSystem.instance.raycastClosestResult.hitPoint.x, PhysicsSystem.instance.raycastClosestResult.hitPoint.y, PhysicsSystem.instance.raycastClosestResult.hitPoint.z);
        }
        if (PhysicsSystem.instance.raycastClosest(rayRight, 1)) {
            rightcollider = PhysicsSystem.instance.raycastClosestResult.collider;
            righthitPoint = new Vec3(PhysicsSystem.instance.raycastClosestResult.hitPoint.x, PhysicsSystem.instance.raycastClosestResult.hitPoint.y, PhysicsSystem.instance.raycastClosestResult.hitPoint.z);
        }
        if (!centerhitPoint || !lefthitPoint || !righthitPoint) return;

        centerd = Vec3.distance(this.center.worldPosition, centerhitPoint);
        leftd = Vec3.distance(this.left.worldPosition, lefthitPoint);
        rightd = Vec3.distance(this.right.worldPosition, righthitPoint);
        let min = Math.min(centerd, leftd, rightd);
        if (min == centerd) {
            return centercollider.node;
        } else if (min == leftd) {
            return leftcollider.node;
        } else if (min == rightd) {
            return rightcollider.node;
        }
    }
    CreateRay(start: Vec3, end: Vec3) {
        let dir = new Vec3(end.x - start.x, 0, end.z - start.z)
        let rayCenter = new Ray(start.x, start.y, start.z, dir.x, 0, dir.z);
        let centercollider: PhysicsRayResult[] = new Array<PhysicsRayResult>();
        let centerhitPoint: Vec3;
        if (PhysicsSystem.instance.raycast(rayCenter)) {
            centercollider = PhysicsSystem.instance.raycastResults;
        }
        if (centercollider.length >= 2) {
            if (centercollider[centercollider.length - 2].collider.node.name == "dong" || centercollider[centercollider.length - 2].collider.node.name == "well") {
                return true;
            }
        }
        return false;
    }
    CreateTargetPos(point0: Vec3, point1: Vec3, point2: Vec3) {

        //圆方程
        // (x-x0)^2 + (y-y0)^2 = r^2
        if (!point0) return;
        let x0 = point0.x;
        let y0 = point0.z;
        let r = 11.42;
        //直线方程
        let x1 = point1.x;
        let y1 = point1.z;
        let x2 = point2.x;
        let y2 = point2.z;
        let target1: Vec3;
        let target2: Vec3;
        if (point1.x == point2.x) {
            //  方程为 x = point1.x;
            //联立方程的得
            let A = 1;
            let B = -2 * y0;
            let C = y0 * y0 + (x1 - x0) * (x1 - x0) - r * r;
            //方程求解
            let solutionX1 = x1;
            let solutionY1 = (-B + Math.sqrt(B * B - 4 * A * C)) / (2 * A);
            let solutionX2 = x1;
            let solutionY2 = (-B - Math.sqrt(B * B - 4 * A * C)) / (2 * A);

            target1 = new Vec3(solutionX1, 0, solutionY1);
            target2 = new Vec3(solutionX2, 0, solutionY2);
        } else if (point1.z == point2.z) {
            // 方程为 y = point1.z
            //联立方程的得
            let A = 1;
            let B = -2 * x0;
            let C = x0 * x0 + (y1 - y0) * (y1 - y0) - r * r;
            //方程求解
            let solutionX1 = (-B + Math.sqrt(B * B - 4 * A * C)) / (2 * A);
            let solutionY1 = y1;
            let solutionX2 = (-B - Math.sqrt(B * B - 4 * A * C)) / (2 * A);
            let solutionY2 = y1;

            target1 = new Vec3(solutionX1, 0, solutionY1);
            target2 = new Vec3(solutionX2, 0, solutionY2);
        } else {
            // 方程为 y = ((point2.z - point1.z) / (point2.x - point1.x)) * x + (point1.z -((pioint1.x * (point2.z - point1.z) / (point2.x - point1.x))))
            // y = kx+b;
            // y = ((y2-y1)/(x2-x1))*x+(y1-(x1*(y2-y1)/(x2-x1)))
            let k = (y2 - y1) / (x2 - x1);
            let b = (y1 - (x1 * (y2 - y1) / (x2 - x1)));

            //联立方程得
            let A = (1 + k * k);
            let B = (2 * k * b - 2 * y0 * k - 2 * x0);
            let C = (b * b - 2 * y0 * b + x0 * x0 + y0 * y0 - r * r);

            //方程求解
            let solutionX1 = (-B + Math.sqrt(B * B - 4 * A * C)) / (2 * A);
            let solutionY1 = k * solutionX1 + b;
            let solutionX2 = (-B - Math.sqrt(B * B - 4 * A * C)) / (2 * A);
            let solutionY2 = k * solutionX2 + b;

            target1 = new Vec3(solutionX1, 0, solutionY1);
            target2 = new Vec3(solutionX2, 0, solutionY2);
        }

        this.Sphere.setWorldPosition(target1);
        this.Sphere2.setWorldPosition(target2);
        if (Vec3.distance(this.center.worldPosition, target1) < Vec3.distance(this.center.worldPosition, target2)) {
            return 1;
        } else {
            return 2;
        }
    }

    Hit() {
        if (GameSceneManager.I.nowPlayerType != this.playerType) return;
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
            this.IsUseFreeBall = false;
        }
        find("Gun/Cylinder").active = false;
        find("Line").active = false;
        find("Canvas/GunDrag2").active = false;
        PlayerController.I.slider.enabled = false;

        SourceManager.I.Gun2Ball();
        let force = 100 + Math.random() * 200;
        BallManager.I.WhiteBall.getComponent(RigidBody).applyImpulse(new Vec3(GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].ForceDirection.x * force, 0, GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].ForceDirection.z * force));
        GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsStartFollow = false;
        BallManager.I.isAllBallStop = false;
        GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsHitBall = true;
        //重置白球第一个碰到的球的信息
        BallManager.I.ResetWhiteBallFirstTouchBallValue()
    }
}