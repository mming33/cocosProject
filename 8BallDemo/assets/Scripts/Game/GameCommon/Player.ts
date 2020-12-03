import { _decorator, Component, Node, Vec3 } from 'cc';
import { Ball } from './Ball/Ball';
import { BallType } from './Ball/BallType';
import { RoundType } from './RoundType';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {
    /**玩家类型 */
    PlayerType: RoundType;

    /**连续击球数 */
    ContinuousBattingNumber: number = 0;
    /**力的方向 */
    ForceDirection: Vec3 = new Vec3(1, 0, 0);
    /**要击打的球的类型 */
    TypeOfBallToBeHit: BallType;
    /**要击打的目标球的集合 */
    TargetBallToBeHit: Ball[] = new Array<Ball>();
    /**是否开启球杆跟随 */
    IsStartFollow: boolean = false;
    /**是否开启自由球 */
    IsFreeBall: boolean = false;
    /**是否连续击球 */
    IsContinuousBatting: boolean = false;
    /**是否犯规 */
    IsFoul: boolean = false;
    /**是否严重犯规 */
    IsSeriousFoul: boolean = false;
    /**是否隐藏球杆 */
    IsUnActiveGun: boolean = false;
    /**本回合是否结束 */
    IsRoundEnd: boolean = false;
    /**是否具有球权 */
    IsHaveBallRight: boolean = false;
    /**是否击打过球 */
    IsHitBall: boolean = false;
    /**回合开始 */
    RoundStart() {
        this.IsHitBall = false;
    }
    /**回合结束 */
    RoundEnd() {
        this.IsStartFollow = true;
        this.IsUnActiveGun = false;
        this.IsRoundEnd = true;
    }
}
