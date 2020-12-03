import { _decorator, Component, Node, RigidBody, Vec3, Quat, Material } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BallPhysics')
export class BallPhysics extends Component {
    private rig: RigidBody;
    start() {
        this.rig = this.node.getComponent(RigidBody);
    }
    update(deltaTime: number) {
        this.MyPhysicRotate(deltaTime);
    }
    MyPhysicRotate(deltaTime: number) {
        let outLinearVelocity: Vec3 = new Vec3(0, 0, 0);
        this.rig.getLinearVelocity(outLinearVelocity);
        // if (Math.abs(outLinearVelocity.x * outLinearVelocity.z) < 0.01) {
        //     outLinearVelocity = new Vec3(0, 0, 0);
        //     this.rig.setLinearVelocity(outLinearVelocity);
        // }

        let rot: Quat = new Quat()
        Quat.fromEuler(rot, (outLinearVelocity.z / 5.71), 0, (-(outLinearVelocity.x / 5.71)))
        this.node.children[0].rotate(rot, 1);
    }
}
