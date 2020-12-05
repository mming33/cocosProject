import { _decorator, Component, Node } from "cc";

const { ccclass, property } = _decorator;

@ccclass
export default class stopPropagation extends Component {

    start() {
        this.node.on(Node.EventType.TOUCH_START, (event) => { event.stopPropagation() }, this);
    }
}
