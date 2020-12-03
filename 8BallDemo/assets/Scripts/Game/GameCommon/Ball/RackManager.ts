import { _decorator, Component, Node, v3, Vec3, animation, macro, Quat, Line } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RackManager')
export class RackManager extends Component {
    static I: RackManager;
    static allBall: Array<Node> = new Array<Node>();
    GoalBalls: Array<Node> = new Array<Node>();
    onEnable() {
        RackManager.I = this.node.getComponent(RackManager);
        RackManager.allBall = new Array<Node>();
        this.GoalBalls = new Array<Node>();
    }
    start() {
        // this.scheduleOnce(() => void this.GoalBallAnimation(1), 1);
        // this.scheduleOnce(() => void this.GoalBallAnimation(2), 2);
        // this.scheduleOnce(() => void this.GoalBallAnimation(3), 3);
        // this.scheduleOnce(() => void this.GoalBallAnimation(4), 4);
        // this.scheduleOnce(() => void this.GoalBallAnimation(5), 5);
        // this.scheduleOnce(() => void this.GoalBallAnimation(6), 6);
        // this.scheduleOnce(() => void this.GoalBallAnimation(7), 7);
        // this.scheduleOnce(() => void this.GoalBallAnimation(8), 8);
        // this.scheduleOnce(() => void this.GoalBallAnimation(9), 9);
        // this.scheduleOnce(() => void this.GoalBallAnimation(10), 10);
        // this.scheduleOnce(() => void this.GoalBallAnimation(11), 11);
        // this.scheduleOnce(() => void this.GoalBallAnimation(12), 12);
        // this.scheduleOnce(() => void this.GoalBallAnimation(13), 13);
        // this.scheduleOnce(() => void this.GoalBallAnimation(14), 14);
        // this.scheduleOnce(() => void this.GoalBallAnimation(15), 15);
        // this.schedule(() => {
        //     if (!this.nowBall) {
        //         if (this.ballindex != -1 && this.ballindex != this.GoalBalls.length - 1) {
        //             this.nowBall = this.GoalBalls[this.ballindex + 1];
        //             this.Play(this.nowBall);
        //         }
        //     }
        // }, 1)
    }
    GoalBallAnimation(ballnumber: number = 1) {
        if (ballnumber > RackManager.allBall.length) return
        let ball = RackManager.allBall[ballnumber - 1];
        if (this.GoalBalls.indexOf(ball) >= 0) return;
        this.GoalBalls.push(ball);
        this.node.addChild(ball);
        // console.log(ballnumber, ball);
        ball.worldPosition = new Vec3(185, -15, -67);
        if (!this.nowBall) {
            this.nowBall = ball;
            this.Play(this.nowBall);
        }
    }
    nowBall: Node = null;
    ballindex: number = 0;

    Play(ball: Node) {
        let index = 1;
        this.ballindex = this.GoalBalls.indexOf(ball);
        this.schedule(() => void this.mmm(++index, ball), 0.001, macro.REPEAT_FOREVER)

    }
    mmm(index, ball: Node) {
        let rot: Quat = new Quat()
        if (index <= 100) {
            //210 , -67
            ball.worldPosition = new Vec3(ball.worldPosition.x + 0.25, -15, -67);
            Quat.fromEuler(rot, 0, -3, 0)
            ball.children[0].rotate(rot, 1);
        } else if (index <= 125) {
            if (index == 125) {
                if (this.ballindex != -1 && this.ballindex != this.GoalBalls.length - 1) {
                    this.nowBall = this.GoalBalls[this.ballindex + 1];
                    this.Play(this.nowBall);
                } else {
                    this.nowBall = null;
                }
            }
            // 215 , -64
            ball.worldPosition = new Vec3(ball.worldPosition.x + (5 / 25), -15, ball.worldPosition.z + (3 / 25));
            Quat.fromEuler(rot, 1, -2, 0)
            ball.children[0].rotate(rot, 1);
        } else if (index <= 140) {
            // 217 , -60
            ball.worldPosition = new Vec3(ball.worldPosition.x + (2 / 15), -15, ball.worldPosition.z + (4 / 15));
            Quat.fromEuler(rot, 2, -4, 0)
            ball.children[0].rotate(rot, 1);
        } else if (index <= 240 - this.GoalBalls.indexOf(ball) * 7) {
            // 217 100
            ball.worldPosition = new Vec3(217, -15, ball.worldPosition.z + 1.6);
            Quat.fromEuler(rot, 32, 0, 0)
            ball.children[0].rotate(rot, 1);
        } else {
            this.unschedule(this.Play);
        }
    }

}
