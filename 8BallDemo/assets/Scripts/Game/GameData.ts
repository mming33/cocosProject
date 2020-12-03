import { _decorator, Component, Node, SpriteFrame, CCString } from 'cc';
import noSleep from '../Common/noSleep';
import NDB from '../Utils/NDBTS';
import { RoundType } from './GameCommon/RoundType';
const { ccclass, property } = _decorator;

@ccclass('GameData')
export class GameData extends Component {
    static I: GameData;

    loadData: any = {};

    SettlementData: any = {};

    @property(SpriteFrame)
    thisplayerHeadImage: SpriteFrame = null;

    @property(SpriteFrame)
    RobotHeadImage: SpriteFrame = null;

    @property(CCString)
    thisPlayerName: string = "";

    @property(CCString)
    RobotName: string = "";

    Winer: RoundType = null;

    allMoney: number = 0;

    gameStop: boolean = false;
    isFirst: boolean = true;
    onLoad() {
        GameData.I = this.node.getComponent(GameData);
        if (GameData.I.isFirst) {
            GameData.I.isFirst = false;
            let obj = {
                eventName: "game_load_complete",
                name: "8ball",
            }
            NDB.sendAutoJoinEvent(obj);
        }
        let nosleep = new noSleep();
        nosleep.enable();
        console.log("当前版本为v1.0.0.10");
        // console.error("当前版本为v1.0.0.7");
        
    }


}
