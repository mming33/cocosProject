import { _decorator, Component, Node, Vec3, v3, LineComponent, v2, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MyLine')
export class MyLine extends Component {

    static I: MyLine

    line: LineComponent;
    start() {
        MyLine.I = this.node.getComponent(MyLine);
        this.line = this.node.getComponent(LineComponent);

    }
    private index = 0
    DrawLine(startPos, targetPos) {
        let arr: Array<Vec3> = new Array<Vec3>(2);
        arr[0] = startPos;
        arr[1] = targetPos;
        //这个没有错！！
        this.line.positions = arr;
        let d = Vec3.distance(arr[0], arr[1]) / 10;

        this.line.tile = new Vec2(d, 1);
        // console.log(this.line.tile.x);
        this.index -= 0.01
        this.line.offset = new Vec2(this.index, 0)
        // console.log(this.line.positions);
    }

}
