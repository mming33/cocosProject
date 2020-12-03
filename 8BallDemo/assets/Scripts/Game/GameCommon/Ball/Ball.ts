import { _decorator, Component, Node, RigidBody, Vec3, Quat, v3, __private, BoxCollider, SphereCollider, Enum, randomRange, Collider, PhysicMaterial, PhysicsSystem, SphereColliderComponent } from 'cc';
import { SourceManager } from '../../../Common/SourceManager';
import { GameSceneManager } from '../GameSceneManager';
import { BallType } from './BallType';
const { ccclass, property } = _decorator;

@ccclass('Ball')
export class Ball extends Component {

    /**球的类型 */
    @property({ type: Enum(BallType) })
    public ballTpye: BallType = BallType.WHITEBALL;
    /**球的号码 */
    @property(Number)
    public ballNumber: number = 0;
    /**是否进球了（是否在洞里） */
    public isGoal: boolean = false;
    /**是否停止运动 */
    public isStop: boolean = true;

    public rig: RigidBody;
    public owner: Ball;

    protected start() {
        this.node.getComponent(SphereCollider).on("onCollisionEnter", this.onCollisionEnter, this);
        this.node.getComponent(SphereCollider).on("onTriggerEnter", this.onTriggerEnter, this);
        this.rig = this.node.getComponent(RigidBody);
        this.owner = this.node.getComponent(Ball);
        this.Init();
    }
    isPlaySource: boolean = false;
    /**初始化 */
    protected Init() {
        this.isPlaySource = false;
        this.scheduleOnce(() => {
            this.isPlaySource = true;
        }, 4);
    }
    playSource(other: Collider) {
        if (GameSceneManager.I.Players[GameSceneManager.I.nowPlayerType].IsFreeBall) return;
        if (this.isPlaySource) {
            if (other.node.name == "Table") {
                SourceManager.I.Ball2Table();
            } else if (other.node.name == "dong") {
                SourceManager.I.InHole();
            } else {
                SourceManager.I.Ball2Ball();
            }
        }
    }
    /**
     * 进入碰撞
     * @param obj obj.otherCollider  obj.selfCollider
     */
    protected onCollisionEnter(obj) {
        let other: Collider = obj.otherCollider;
        this.playSource(other);
    }
    /**
    * 进入触发器
    * @param obj obj.otherCollider  obj.selfCollider
    */
    protected onTriggerEnter(obj) {
    }
    protected update() {
        this.JudgeIsStop();
    }
    /**判断球是否停止运动 */
    protected JudgeIsStop() {
        let linearVeloctiy: Vec3 = new Vec3(0, 0, 0);
        this.rig.getLinearVelocity(linearVeloctiy);
        if (Math.abs(linearVeloctiy.x) <= 0.8 && Math.abs(linearVeloctiy.z) <= 0.8) {
            // this.rig.setLinearVelocity(new Vec3(0, 0, 0));
            this.rig.clearVelocity();
            this.isStop = true;
        } else {
            this.isStop = false;
        }
    }
    protected Rest() {
        this.isGoal = false;
        this.isStop = true;
        this.node.children[0].scale = new Vec3(11.42, 11.42, 11.42);
        this.node.children[0].scale = new Vec3(11.42, 11.42, 11.42);
        this.rig.clearState();
    }

    protected animation() {
        if (this.isGoal)
            this.rig.clearState();
        this.node.children[0].scale = new Vec3(5.71, 5.71, 5.71);
    }
    startinHoleAnimation: boolean = false;
    /**进球动画 */
    inHoleAnimation(targetpos: Vec3) {
        let index = 0;
        if (this.startinHoleAnimation) return;
        this.schedule((target = targetpos) => {
            this.startinHoleAnimation = true;
            this.rig.isKinematic = true;
            //this.node.getComponent(SphereColliderComponent).isTrigger = true;
            this.owner.isStop = true;
            if (Vec3.distance(targetpos, this.node.worldPosition) > 3) {
                let outpos1 = new Vec3();
                Vec3.lerp(outpos1, this.node.worldPosition, targetpos, 0.4);
                this.node.setWorldPosition(outpos1);
            } else if (index <= 1) {
                index++;
            } else {
                let outpos2 = new Vec3();
                Vec3.lerp(outpos2, this.node.worldScale, new Vec3(0, 0, 0), 0.4);
                this.node.setWorldScale(outpos2);
                if (Vec3.distance(new Vec3(0, 0, 0), this.node.worldScale) < 0.45) {
                    this.node.active = false;
                    this.unschedule(this.inHoleAnimation);
                }
            }
        }, 0.02);
    }
}
