import { _decorator, Component, Node, director } from 'cc';
import { MyEvent } from './Common/Events/MyEvent';
import { MyListCommon } from './Common/MyMath/MyListCommon';
import { PopupManager } from './Common/Popup/PopupManager';
import { AdvManager } from './Common/Server/AdvManager';
import { SoundManager } from './Common/Sound/SoundManager';
import { StateMachine } from './Common/StateMachine/StateMachine';
import { StateType } from './Common/StateMachine/StateType';
import { DataStorage } from './Common/Storage/DataStorage';
const { ccclass, property } = _decorator;

@ccclass('TESTSCRIPT')
export class TESTSCRIPT extends Component {
    // key = [
    //     'name1',
    //     'name2',
    //     'name3',
    //     'name4',
    //     'name5',
    //     'name6',
    //     'name7',
    //     'name8',
    //     'name9',
    //     'name10',
    // ]
    data: any = {
        'name1': 'user_name1',
        'name2': 'user_name2',
        'name3': 'user_name3',
        'name4': 'user_name4',
        'name5': 'user_name5',
        'name6': 'user_name6',
        'name7': 'user_name7',
        'name8': 'user_name8',
        'name9': 'user_name9',
        'name10': 'user_name10',
    }
    button1() {
        for (let i = 0; i < this.data.length; i++) {
            const k: string = this.data[i];
            // this.data[k] = 'user_' + k;
            console.log(k);
        }
        // AdvManager.ShowBannerAd();
    }

    button2() {
        // AdvManager.HideBannerAd();
        // let newClass = new (<any>state)['LoadState'];
        // console.log(newClass);
    }
}
