import { _decorator, Component, Node, Vec3, v3, PhysicsSystem, Camera, geometry, PhysicsRayResult, Mask, WorldNode3DToLocalNodeUI, log, Collider, sampleAnimationCurve, randomRange } from 'cc';
import { MathAlgorithm } from '../../Algorithm/MathAlgorithm';
import { GameSceneManager } from '../GameSceneManager';
import { BallManager } from './BallManager';
import { MyLine } from './MyLine';
const { ccclass, property } = _decorator;
const { ray: Ray } = geometry;

@ccclass('PosFlower')
export class PosFlower extends Component {
    @property(Node)
    private gan: Node = null;
    @property(Node)
    private TargetBall: Node = null;
    private TargetBallCenter: Node = null;
    private TargetBallLeft: Node = null;
    private TargetBallRight: Node = null;
    private TargetBallFront: Node = null;

    private ganPos: Node = null;
    private center: Node = null;

    private left: Node = null;
    private right: Node = null;

    private r: number = 11.42;

    private istable: boolean = false;

    start() {
        this.ganPos = this.node.getChildByName("ganPos") as Node;
        this.center = this.node.getChildByName("Center") as Node;
        this.left = this.node.getChildByName("Left") as Node;
        this.right = this.node.getChildByName("Right") as Node;
        this.TargetBallLeft = this.TargetBall.getChildByName("left");
        this.TargetBallRight = this.TargetBall.getChildByName("right");
        this.TargetBallFront = this.TargetBall.getChildByName("front");
        this.TargetBallCenter = this.TargetBall.getChildByName("center");

    }

    update() {
        this.GunFollowAndRotat()
        this.TargetBall.active = this.gan.children[0].active;
        this.DrawLine();
    }
    /**
    * 球杆跟随球及旋转运动
    */
    GunFollowAndRotat() {
        // if (!GameSceneManager.IsStartFollow) return
        let outpos: Vec3 = new Vec3(0, 0, 0);
        Vec3.lerp(outpos, this.node.worldPosition, BallManager.I.WhiteBall.worldPosition, 0.1);
        this.node.worldPosition = outpos;
        let GunOutPos: Vec3 = new Vec3(0, 0, 0);
        Vec3.lerp(GunOutPos, this.gan.worldPosition, this.ganPos.worldPosition, 0.1);
        this.gan.worldPosition = GunOutPos;
        this.gan.lookAt(this.center.worldPosition);
        GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].ForceDirection = MathAlgorithm.DirectionOfForce(this.ganPos.worldPosition, this.node.worldPosition);
    }
    target: Node;
    /**画辅助线 */
    DrawLine() {
        let point0 = this.CreateRayJudgeNearestBall();
        this.TargetBall.lookAt(point0);
        let targetPos: Vec3 = this.CreateTargetPos(point0);
        if (!targetPos) return;
        this.TargetBall.worldPosition = new Vec3(targetPos.x, 5.71, targetPos.z);
        if (!this.istable) {
            if (this.target) {
                let d1 = new Vec3(this.TargetBallLeft.worldPosition.x - this.TargetBall.worldPosition.x, 0, this.TargetBallLeft.worldPosition.z - this.TargetBall.worldPosition.z);
                let d2 = new Vec3(this.TargetBallRight.worldPosition.x - this.TargetBall.worldPosition.x, 0, this.TargetBallRight.worldPosition.z - this.TargetBall.worldPosition.z);
                let d3 = new Vec3(BallManager.I.WhiteBall.worldPosition.x - this.TargetBallCenter.worldPosition.x, 0, BallManager.I.WhiteBall.worldPosition.z - this.TargetBallCenter.worldPosition.z);
                let langle = 180 / Math.PI * Vec3.angle(d1, d3);
                let rangle = 180 / Math.PI * Vec3.angle(d2, d3);
                let lerp1 = 1 - langle / 180;
                let lerp2 = 1 - rangle / 180;
                if (langle > rangle) {
                    this.TargetBallLeft.active = true;
                    this.TargetBallRight.active = false;
                    this.TargetBallFront.setScale(1, 1, 0.5 + lerp1);
                } else {
                    this.TargetBallLeft.active = false;
                    this.TargetBallRight.active = true;
                    this.TargetBallFront.setScale(1, 1, 0.5 + lerp2);
                }

                this.TargetBallLeft.setScale(0.5 - lerp1, 1, 1);
                this.TargetBallRight.setScale(0.5 - lerp2, 1, 1);
                // console.log("左:", lerp1, "\t右:", lerp2);
            }
        }
        MyLine.I.DrawLine(BallManager.I.WhiteBall.worldPosition, targetPos);
    }
    /**创建射线 判断那个球是距离白球最近的球（白球会优先碰到哪个球） */
    CreateRayJudgeNearestBall() {
        this.target = null;
        let dir = new Vec3(this.center.worldPosition.x - this.ganPos.worldPosition.x, 0, this.center.worldPosition.z - this.ganPos.worldPosition.z);
        // console.log("方向为", dir);
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
            // console.log(PhysicsSystem.instance.raycastClosestResult.hitPoint);
            let name = centercollider.node.name;
            // console.log("中心射线所照射到的物体名称为：", name);
        }
        if (PhysicsSystem.instance.raycastClosest(rayLeft, 1)) {
            leftcollider = PhysicsSystem.instance.raycastClosestResult.collider;
            lefthitPoint = new Vec3(PhysicsSystem.instance.raycastClosestResult.hitPoint.x, PhysicsSystem.instance.raycastClosestResult.hitPoint.y, PhysicsSystem.instance.raycastClosestResult.hitPoint.z);
            // console.log(PhysicsSystem.instance.raycastClosestResult.hitPoint);
            let name = leftcollider.node.name;
            // console.log("左侧射线所照射到的物体名称为：", name);
        }
        if (PhysicsSystem.instance.raycastClosest(rayRight, 1)) {
            rightcollider = PhysicsSystem.instance.raycastClosestResult.collider;
            righthitPoint = new Vec3(PhysicsSystem.instance.raycastClosestResult.hitPoint.x, PhysicsSystem.instance.raycastClosestResult.hitPoint.y, PhysicsSystem.instance.raycastClosestResult.hitPoint.z);
            // console.log(PhysicsSystem.instance.raycastClosestResult.hitPoint);
            // let name = rightcollider.node.name;
            // console.log("右侧射线所照射到的物体名称为：", name);
        }
        if (!centerhitPoint || !lefthitPoint || !righthitPoint) return;
        centerd = Vec3.distance(this.center.worldPosition, centerhitPoint);
        leftd = Vec3.distance(this.left.worldPosition, lefthitPoint);
        rightd = Vec3.distance(this.right.worldPosition, righthitPoint);
        // console.log(centerhitPoint, lefthitPoint, righthitPoint);

        let min = Math.min(centerd, leftd, rightd);
        // console.log(centerd, leftd, rightd);

        if (min == centerd) {
            // console.log("最小的是中心射线照射到的物体");
            let name = centercollider.node.name;
            this.target = rightcollider.node;
            // console.log("中心射线所照射到的物体名称为：", name);
            if (name == "Table" || name == "dong" || name == "well") {
                this.r = 2.852;
                this.istable = true;
                this.TargetBallFront.active = false;
                this.TargetBallLeft.active = false;
                this.TargetBallRight.active = false;
                return centerhitPoint;
            } else {
                this.r = 11.42;
                this.istable = false;
                this.TargetBallFront.active = true;
                this.TargetBallLeft.active = true;
                this.TargetBallRight.active = true;
                return centercollider.node.worldPosition;
            }
        } else if (min == leftd) {
            // console.log("最小的是左侧射线照射到的物体");
            let name = leftcollider.node.name;
            this.target = rightcollider.node;
            // console.log("左侧射线所照射到的物体名称为：", name);
            if (name == "Table" || name == "dong" || name == "well") {
                this.r = 2.852;
                this.istable = true;
                this.TargetBallFront.active = false;
                this.TargetBallLeft.active = false;
                this.TargetBallRight.active = false;
                return lefthitPoint;
            } else {
                this.r = 11.42;
                this.istable = false;
                this.TargetBallFront.active = true;
                this.TargetBallLeft.active = true;
                this.TargetBallRight.active = true;
                return leftcollider.node.worldPosition;
            }
        } else if (min == rightd) {
            // console.log("最小的是右侧射线照射到的物体");
            let name = rightcollider.node.name;
            this.target = rightcollider.node;
            // console.log("右侧射线所照射到的物体名称为：", name);
            if (name == "Table" || name == "dong" || name == "well") {
                this.r = 5.71;
                this.istable = true;
                this.TargetBallFront.active = false;
                this.TargetBallLeft.active = false;
                this.TargetBallRight.active = false;
                return righthitPoint;
            } else {
                this.r = 11.42;
                this.istable = false;
                this.TargetBallFront.active = true;
                this.TargetBallLeft.active = true;
                this.TargetBallRight.active = true;
                return rightcollider.node.worldPosition;
            }
        }
    }
    CreateTargetPos(point0: Vec3) {

        //圆方程
        // (x-x0)^2 + (y-y0)^2 = r^2
        if (!point0) return;

        let x0 = point0.x;
        let y0 = point0.z;
        let r = 11.42;
        //直线方程
        let point1: Vec3 = this.center.worldPosition;
        let point2: Vec3 = this.ganPos.worldPosition;
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


        if (Vec3.distance(this.center.worldPosition, target1) < Vec3.distance(this.center.worldPosition, target2)) {
            return target1;
        } else {
            return target2;
        }



    }


    // /**计算击球点对于目标球的位置 */
    // CalculateTheLocationOfTheTarget(target: Vec3, r: number): Vec3 {
    //     //直线方程 y = kx + j;
    //     //圆方程 (x-a)^2 +(y-b)^2 = r^2
    //     //圆方程 (x^2+a^2-2ax) +(y^2+b^2-2by) = r^2
    //     //圆方程 x^2 + y^2 -2ax - 2by + b^2 + a^2 -r^2 =0 
    //     //圆方程 x^2+y^2+Ax+By+C = 0;
    //     //方程联立得： x^2+(kx+j)^2+Ax+kBx+Bj+C=0
    //     //方程联立得： x^2+(kx^2+j^2+kjx)+Ax+kBx+Bj+C=0
    //     //方程联立得： (k+1)x^2+j^2+(kj+kB+A)x+Bj+C=0
    //     //方程联立得： (k+1)x^2+(kj+kB+A)x+j^2+Bj+C=0
    //     // ganPos
    //     // center
    //     // Ax+BY+C = 
    //     // Y = -A/B x - C/B

    //     if ((this.ganPos.worldPosition.x - this.center.worldPosition.x) == 0) {
    //         //(y-b)^2 = r^2 - (x-a)^2
    //         let y1 = Math.sqrt(r * r - (this.ganPos.worldPosition.x - target.x) * (this.ganPos.worldPosition.x - target.x)) + target.z;
    //         let y2 = -Math.sqrt(r * r - (this.ganPos.worldPosition.x - target.x) * (this.ganPos.worldPosition.x - target.x)) + target.z;
    //         let target1 = new Vec3(this.ganPos.worldPosition.x, 0, y1)
    //         let target2 = new Vec3(this.ganPos.worldPosition.x, 0, y2)
    //         if (Vec3.distance(target1, this.whiteBall.worldPosition) < Vec3.distance(target2, this.whiteBall.worldPosition)) {
    //             console.log("target1:", target1);

    //             return target1;
    //         }
    //         console.log("target2:", target2);
    //         return target2;
    //     }

    //     let k = -(this.center.worldPosition.z - this.ganPos.worldPosition.z) / (this.ganPos.worldPosition.x - this.center.worldPosition.x)
    //     let j = - (this.center.worldPosition.x * this.ganPos.worldPosition.z - this.ganPos.worldPosition.x * this.center.worldPosition.z) / (this.ganPos.worldPosition.x - this.center.worldPosition.x)
    //     let A = -2 * (target.x);
    //     let B = -2 * (target.z);
    //     let C = (target.x) * (target.x) + (target.z) * (target.z) - r * r;
    //     let a = (k + 1);
    //     let b = (k * j + k * B + A);
    //     let c = j * j + B * j + C;
    //     let x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / 2 * a;
    //     let x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / 2 * a;
    //     let target1 = new Vec3(x1, 0, k * x1 + j)
    //     let target2 = new Vec3(x2, 0, k * x1 + j)
    //     if (Vec3.distance(target1, this.whiteBall.worldPosition) < Vec3.distance(target2, this.whiteBall.worldPosition)) {
    //         console.log("target3:", target1);
    //         return target1;
    //     }
    //     console.log("target4:", target2);
    //     return target2;

    // }

    // Test(startpos: Vec3, lineTarget1: Vec3, lineTarget2: Vec3, circularTarget: Vec3, r: number) {
    //     let outTarget1: Vec3;
    //     let outTarget2: Vec3;
    //     lineTarget1 = this.ganPos.worldPosition;
    //     lineTarget2 = this.center.worldPosition;
    //     let x1 = lineTarget1.x;
    //     let y1 = lineTarget1.z;
    //     let x2 = lineTarget2.x;
    //     let y2 = lineTarget2.z;
    //     if (x2 - x1 != 0 && y2 - y1 != 0) {
    //         let lineA = (x2 - x1);
    //         let lineB = (y1 - y2);
    //         let lineC = (x1 * y2 - y1 * x2);
    //         let linek = -lineB / lineA;
    //         let lineb = startpos.z - startpos.x * linek;
    //         let circularA = -2 * circularTarget.x;
    //         let circularB = -2 * circularTarget.z;
    //         let circularC = circularTarget.x * circularTarget.x + circularTarget.z * circularTarget.z - r * r;
    //         let a = (linek * linek + 1);
    //         let b = (2 * linek * lineb + circularA + circularB * linek);
    //         let c = (lineb * lineb + circularB * lineb + circularC);
    //         let outx1 = (-b + Math.sqrt(b * b - 4 * a * c)) / 2 * a;
    //         let outx2 = (-b - Math.sqrt(b * b - 4 * a * c)) / 2 * a;
    //         let outy1 = linek * x1 + lineb;
    //         let outy2 = linek * x2 + lineb;
    //         outTarget1 = new Vec3(outx1, 5.71, outy1);
    //         outTarget2 = new Vec3(outx2, 5.71, outy2);
    //     } else if (x2 == x1) {
    //         let outy1 = circularTarget.z + Math.sqrt((r * r) - ((x1 - circularTarget.x) * (x1 - circularTarget.x)))
    //         let outy2 = circularTarget.z - Math.sqrt((r * r) - ((x1 - circularTarget.x) * (x1 - circularTarget.x)))
    //         outTarget1 = new Vec3(x1, 5.71, outy1);
    //         outTarget2 = new Vec3(x1, 5.71, outy2);
    //     } else if (y1 == y2) {
    //         let outx1 = circularTarget.x + Math.sqrt((r * r) - ((y1 - circularTarget.z) * (y1 - circularTarget.z)))
    //         let outx2 = circularTarget.x - Math.sqrt((r * r) - ((y1 - circularTarget.z) * (y1 - circularTarget.z)))
    //         outTarget1 = new Vec3(outx1, 5.71, y1);
    //         outTarget2 = new Vec3(outx2, 5.71, y1);
    //     }
    //     if (Vec3.distance(outTarget1, this.whiteBall.worldPosition) < Vec3.distance(outTarget2, this.whiteBall.worldPosition)) {
    //         return outTarget1;
    //     }
    //     return outTarget2;
    // }
    // Test2(startpos: Vec3, target: Vec3, r: number) {
    //     let k;
    //     if (this.ganPos.worldPosition.x == this.center.worldPosition.x) {
    //         console.log("斜率不存在");
    //     } else {
    //         k = (this.ganPos.worldPosition.z - this.center.worldPosition.z) / (this.ganPos.worldPosition.x - this.center.worldPosition.x);
    //     }
    //     let lineb = startpos.z - k * startpos.x;
    //     let a = k * k + 1;
    //     let b = -2 * target.x - 2 * k * (lineb - target.z);
    //     let c = (target.x * target.x + (lineb - target.z) * (lineb - target.z) - r * r);

    //     let x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    //     let x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    //     let y1 = k * x1 + lineb;
    //     let y2 = k * x2 + lineb;
    //     let out1 = new Vec3(x1, 5.71, y1);
    //     let out2 = new Vec3(x2, 5.71, y2);
    //     let out = Vec3.distance(out1, this.whiteBall.worldPosition) < Vec3.distance(out2, this.whiteBall.worldPosition) ? out1 : out2;
    //     return out;
    // }

}










// let dir = new Vec3(this.center.worldPosition.x - this.ganPos.worldPosition.x, this.center.worldPosition.y - this.ganPos.worldPosition.y, this.center.worldPosition.z - this.ganPos.worldPosition.z);
        // let rayCenter = new Ray(this.center.worldPosition.x, this.center.worldPosition.y, this.center.worldPosition.z, dir.x, 0, dir.z);
        // let rayLeft = new Ray(this.left.worldPosition.x, this.left.worldPosition.y, this.left.worldPosition.z, dir.x, 0, dir.z);
        // let rayRight = new Ray(this.right.worldPosition.x, this.right.worldPosition.y, this.right.worldPosition.z, dir.x, 0, dir.z);
        // let targetCenter: Vec3;
        // let targetLeft: Vec3;
        // let targetRight: Vec3;
        // let start: Node;
        // let target: Vec3;
        // let discenter = 999;
        // let disleft = 999;
        // let disright = 999;
        // if (PhysicsSystem.instance.raycastClosest(rayCenter)) {
        //     targetCenter = PhysicsSystem.instance.raycastClosestResult.hitPoint;
        //     discenter = Vec3.distance(this.center.worldPosition, PhysicsSystem.instance.raycastClosestResult.hitPoint);
        // }
        // if (PhysicsSystem.instance.raycastClosest(rayLeft)) {
        //     targetLeft = PhysicsSystem.instance.raycastClosestResult.hitPoint;
        //     disleft = Vec3.distance(this.left.worldPosition, PhysicsSystem.instance.raycastClosestResult.hitPoint)
        // }
        // if (PhysicsSystem.instance.raycastClosest(rayRight)) {
        //      targetRight = PhysicsSystem.instance.raycastClosestResult.hitPoint;
        //     disright = Vec3.distance(this.right.worldPosition, PhysicsSystem.instance.raycastClosestResult.hitPoint)
        // }
        // if (disright < disleft && disright < discenter) {
        //     start = this.right;
        //     target = targetRight;
        // } else if (disleft < discenter && disleft < disright) {
        //     start = this.left;
        //     target = targetLeft;
        // } else if (discenter < disleft && discenter < disright) {
        //     start = this.center;
        //     target = targetCenter;
        // } else {
        //     target = null;
        // }
        // if (target) {
        //     // if (target.layer == 1) {
        //     //     targetpos = PhysicsSystem.instance.raycastClosestResult.hitPoint;
        //     // } else
        //     //     if (target.layer == 2) {
        //     // targetpos = this.Test(start.worldPosition, this.ganPos.worldPosition, this.center.worldPosition, target.worldPosition, 11.42)
        //     // let targetpos = this.Test2(start.worldPosition, target.worldPosition, 11.42);
        //     // }
        //     MyLine.I.DrawLine(BallManager.I.WhiteBall.worldPosition, target);
        // }
