
const {ccclass, property} = cc._decorator;

@ccclass
export default class Test extends cc.Component {
    start () {
        // let s = new WebSocketServer();
        if (typeof WebSocketServer == "undefined") {
            console.error("WebSocketServer is not enabled!");
            return;
        }
    }

    // update (dt) {}
}
