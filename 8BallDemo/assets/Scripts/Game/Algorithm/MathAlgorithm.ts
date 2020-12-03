import { CameraComponent, v3, Vec3, _decorator } from 'cc';
import { BallManager } from '../GameCommon/Ball/BallManager';
import { BallType } from '../GameCommon/Ball/BallType';
const { ccclass } = _decorator;

@ccclass('MathAlgorithm')
export class MathAlgorithm {

    /**8球排列算法
     * （以下1代表实色，2代表花色，0代表黑色）
     *      1
     *     2 1
     *    1 0 2
     *   2 1 2 1
     *  1 2 2 1 2
     * 
     * @param startPos 第一个球的位置
     * @param ballRadius 球的半径
    */
    static Ball_8_Permutation(startPos: Vec3 = new Vec3(90, 5.71, 0), ballRadius: number = 5.71): Array<Vec3> {
        let outarray: Array<Vec3> = new Array<Vec3>(15);
        outarray[0] = startPos;
        let lerpx = Math.sqrt(ballRadius * ballRadius * 4 - ballRadius * ballRadius);
        let lerpz = ballRadius;

        outarray[1] = new Vec3(startPos.x + lerpx, startPos.y, startPos.z + lerpz);
        outarray[2] = new Vec3(startPos.x + lerpx, startPos.y, startPos.z - lerpz);

        outarray[3] = new Vec3(startPos.x + 2 * lerpx, startPos.y, startPos.z - 2 * ballRadius);
        outarray[4] = new Vec3(startPos.x + 2 * lerpx, startPos.y, startPos.z);
        outarray[5] = new Vec3(startPos.x + 2 * lerpx, startPos.y, startPos.z + 2 * ballRadius);

        outarray[6] = new Vec3(startPos.x + 3 * lerpx, startPos.y, startPos.z + lerpz + 2 * ballRadius);
        outarray[7] = new Vec3(startPos.x + 3 * lerpx, startPos.y, startPos.z + lerpz);
        outarray[8] = new Vec3(startPos.x + 3 * lerpx, startPos.y, startPos.z - lerpz);
        outarray[9] = new Vec3(startPos.x + 3 * lerpx, startPos.y, startPos.z - lerpz - 2 * ballRadius);

        outarray[10] = new Vec3(startPos.x + 4 * lerpx, startPos.y, startPos.z - 4 * ballRadius);
        outarray[11] = new Vec3(startPos.x + 4 * lerpx, startPos.y, startPos.z - 2 * ballRadius);
        outarray[12] = new Vec3(startPos.x + 4 * lerpx, startPos.y, startPos.z);
        outarray[13] = new Vec3(startPos.x + 4 * lerpx, startPos.y, startPos.z + 4 * ballRadius);
        outarray[14] = new Vec3(startPos.x + 4 * lerpx, startPos.y, startPos.z + 2 * ballRadius);
        return outarray;
    }
    /**
     * 计算添加的力的方向(单位向量)
     * @param V1 起始点
     * @param V2 目标点
     */
    static DirectionOfForce(V1: Vec3, V2: Vec3): Vec3 {
        let outvec3: Vec3 = new Vec3(0, 0, 0);
        Vec3.normalize(outvec3, new Vec3(V2.x - V1.x, 0, V2.z - V1.z))
        return outvec3;
    }
    /**重置某个球的位置*/
    static ResetBallPos(ballType: BallType, oldPos: Vec3 = new Vec3(0, 0, 0)): Vec3 {
        if (ballType == BallType.WHITEBALL) {
            let pos: Vec3 = new Vec3(-120, 5.71, 0);
            return this.panduan2(pos);
        } else if (ballType == BallType.BLACKBALL) {
            let pos: Vec3 = new Vec3(90, 5.71, 0);
            return this.panduan2(pos);
        } else {
            return this.panduan2(oldPos);
        }

    }
   








    /**判断pos这个位置有没有其他球的存在 返回bool值 若没有返回true；*/
    private static panduan(pos: Vec3): boolean {
        for (let i = 0; i < BallManager.I.AllBallsofNode.length; i++) {
            const element = BallManager.I.AllBallsofNode[i];
            if (element.worldPosition.x < pos.x + 12 && element.worldPosition.x > pos.x - 12 && element.worldPosition.z < pos.z + 12 && element.worldPosition.z > pos.z - 12) {
                console.log("该位置有其他球存在");
                return false;
            }
        }
        return true;
    }
    /**判断pos这个位置有没有其他球的存在 若有则改变pos的值 向上下左右四个方向延伸*/
    private static panduan2(pos): Vec3 {
        let j = 0;
        let index = 1;
        while (true) {
            if (this.panduan(pos)) {
                break;
            } else {
                switch (j % 4) {
                    case 0:
                        let newpos0 = new Vec3(pos.x + index * 5, 5.71, pos.z);
                        pos = newpos0;
                        break;
                    case 1:
                        let newpos1 = new Vec3(pos.x - index * 10, 5.71, pos.z);
                        pos = newpos1;
                        break;
                    case 2:
                        let newpos2 = new Vec3(pos.x + index * 5, 5.71, pos.z + index * 5);
                        pos = newpos2;
                        break;
                    case 4:
                        let newpos3 = new Vec3(pos.x, 5.71, pos.z - index * 10);
                        pos = newpos3;
                        break;
                    default:
                        break;
                }
                index++;
            }
        }
        console.log("球位置应为:", pos);
        return pos;
    }

}