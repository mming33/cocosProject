import { _decorator, Component, Node, instantiate, Prefab, game, loader } from 'cc';
import { LoadManager } from '../Load/LoadManager';
import { MyListCommon } from '../MyMath/MyListCommon';
import { Popup } from './Popup';
const { ccclass, property } = _decorator;

@ccclass('PopupManager')
export class PopupManager extends Component {
    /**单例 */
    private static Instance: PopupManager;
    public static get I(): PopupManager { return this.Instance; }
    private static set i(v: PopupManager) { this.Instance = v; }

    /**所有弹窗的Prefab的集合 */
    popups: Prefab[] = [];

    /**1级弹窗的集合 */
    OnePopups: Popup[] = [];
    OnePopupsArg: any[] = [];
    /**2级弹窗的集合 */
    TwoPopups: Popup[] = [];
    TwoPopupsArg: any[] = [];

    onLoad() {
        game.addPersistRootNode(this.node);
        PopupManager.i = this.node.getComponent(PopupManager) as PopupManager;
    }

    ShowPopup(popupName: string, arg?: any, isLevel2Popup: boolean = false) {
        this.AddPopup(popupName, arg, isLevel2Popup);
        let popups = isLevel2Popup ? this.TwoPopups : this.OnePopups;
        let popupsArg = isLevel2Popup ? this.TwoPopupsArg : this.OnePopupsArg;
        if ((this.node.getChildByName(isLevel2Popup ? "two" : "one") as Node).children.indexOf(popups[0].node) != -1) {
            return;
        } else {
            (this.node.getChildByName(isLevel2Popup ? "two" : "one") as Node).addChild(popups[0].node);
            console.log("打开了弹窗", popups[0].name, "!",popups[0]);
            popups[0].Init(popupsArg[0]);
        }
    }
    ClosePopup(isLevel2Popup: boolean = false, popupName: string = "NULL_POPUP_NAME", arg?: any) {
        this.RemovePopup(popupName, isLevel2Popup);
        let popups = isLevel2Popup ? this.TwoPopups : this.OnePopups;
        let popupsArg = isLevel2Popup ? this.TwoPopupsArg : this.OnePopupsArg;
        if (popups.length <= 0) {
            console.log("所有", isLevel2Popup, "弹窗已经播放完毕");
            return;
        }
        (this.node.getChildByName(isLevel2Popup ? "two" : "one") as Node).addChild(popups[0].node);
        popups[0].Init(popupsArg[0]);
    }

    private AddPopup(popupName: string, arg?: any, isLevel2Popup: boolean = false) {
        let targetPopupPrefab: Prefab | null = this.ChoosePopup(popupName);
        if (!targetPopupPrefab) {
            console.error("Can't find popupName ", popupName);
            return;
        }
        let popupNode = instantiate(targetPopupPrefab);
        let popup = popupNode.getComponent(Popup);
        if (!popup) {
            console.error("Can't find PopupClass by popupName ", popupName);
            return;
        }
        if (!isLevel2Popup) {
            if (this.OnePopups.indexOf(popup) != -1) {
                console.log("弹窗已存在");
                return;
            }
            this.OnePopups.push(popup);
            this.OnePopupsArg.push(arg);
        } else {
            if (this.TwoPopups.indexOf(popup) != -1) {
                console.log("弹窗已存在");
                return;
            }
            popup.isLevel2Popup = isLevel2Popup;
            this.TwoPopups.push(popup);
            this.TwoPopupsArg.push(arg);
        }

    }
    private RemovePopup(popupName: string = "NULL_POPUP_NAME", isLevel2Popup: boolean = false) {
        let popups = (isLevel2Popup ? this.TwoPopups : this.OnePopups);
        let popupsArg = (isLevel2Popup ? this.TwoPopupsArg : this.OnePopupsArg)
        if (popupName == "NULL_POPUP_NAME") {
            popups[0].node.destroy();
            popups.splice(0, 1);
            popupsArg.splice(0, 1);
        } else {
            for (let i = 0; i < popups.length; i++) {
                const element = popups[i];
                if (element.node.name == popupName) {
                    popups[i].node.destroy();
                    popups.splice(i, 1);
                    popupsArg.splice(i, 1);
                    return;
                }
            }
        }

    }

    private ChoosePopup(popupName: string): Prefab | null {
        for (let i = 0; i < this.popups.length; i++) {
            const element = this.popups[i];
            if (element.data._name == popupName) {
                return element;
            }
        }
        return null;
    }


}
