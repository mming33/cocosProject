import { _decorator, Component, Node, instantiate, Prefab, game, loader, resources, find } from 'cc';
import { LoadManager } from '../Load/LoadManager';
import { MyListCommon } from '../MyMath/MyListCommon';
import { Popup } from './Popup';
const { ccclass, property } = _decorator;

@ccclass('PopupManager')
export class PopupManager {

    /**所有弹窗的Prefab的集合 */
    static popups: Prefab[] = [];

    /**1级弹窗的集合 */
    static OnePopups: Popup[] = [];
    static OnePopupsNode: Node[] = [];
    static OnePopupsArg: any[] = [];
    /**2级弹窗的集合 */
    static TwoPopups: Popup[] = [];
    static TwoPopupsNode: Node[] = [];
    static TwoPopupsArg: any[] = [];


    /**加载弹窗的预制体，并初始化PopupManager中的popups数组*/
    public static LoadPopups(func?: Function) {
        // this.CreatePopupParent();
        resources.loadDir("PopupsPrefab", function (err: any, assets: any) {
            if (err) {
                console.error(err);
                return;
            }
            for (let i = 0; i < assets.length; i++) {
                const element = assets[i];
                PopupManager.popups.push(element);
            }
            if (func)
                func();
            console.log(PopupManager.popups);
        });
    }
    /**展示弹窗 */
    public static ShowPopup(popupName: string, arg?: any, isLevel2Popup: boolean = false) {
        this.AddPopup(popupName, arg, isLevel2Popup);
        let popups = isLevel2Popup ? this.TwoPopups : this.OnePopups;
        let popupsNode = isLevel2Popup ? this.TwoPopupsNode : this.OnePopupsNode;
        let popupsArg = isLevel2Popup ? this.TwoPopupsArg : this.OnePopupsArg;
        let parentnode = ((find("Canvas/Popup") as Node).getChildByName(isLevel2Popup ? "two" : "one") as Node)
        if (parentnode.children.indexOf(popupsNode[0]) != -1) {
            return popups[0];
        } else {
            let node = popupsNode[0];
            parentnode.addChild(node);
            console.log("打开了弹窗", popups[0].name, "!", popups[0]);
            popups[0].Init(popupsArg[0]);
            return popups[0];
        }
    }
    /**关闭当前弹窗或指定弹窗 */
    public static ClosePopup(isLevel2Popup: boolean = false, popupName: string = "NULL_POPUP_NAME", arg?: any) {
        this.RemovePopup(popupName, isLevel2Popup);
        let popups = isLevel2Popup ? this.TwoPopups : this.OnePopups;
        let popupsArg = isLevel2Popup ? this.TwoPopupsArg : this.OnePopupsArg;
        if (popups.length <= 0) {
            console.log("所有", isLevel2Popup, "弹窗已经播放完毕");
            return;
        }
        let parentnode = ((find("Canvas/Popup") as Node).getChildByName(isLevel2Popup ? "two" : "one") as Node);
        parentnode.addChild(popups[0].node);
        popups[0].Init(popupsArg[0]);
    }
    /**关闭所有弹窗 */
    public static CloseAllPopup() {
        this.OnePopups.length = 0;
        this.OnePopupsNode.length = 0;
        this.OnePopupsArg.length = 0;
        this.TwoPopups.length = 0;
        this.TwoPopupsNode.length = 0;
        this.TwoPopupsArg.length = 0;
    }
    /**添加预制体到popups数组中 */
    public static PushPopup(popup: Prefab) {
        PopupManager.popups.push(popup);
    }
    private static AddPopup(popupName: string, arg?: any, isLevel2Popup: boolean = false) {
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
            this.OnePopupsNode.push(popupNode);
            this.OnePopupsArg.push(arg);
        } else {
            if (this.TwoPopups.indexOf(popup) != -1) {
                console.log("弹窗已存在");
                return;
            }
            popup.isLevel2Popup = isLevel2Popup;
            this.TwoPopups.push(popup);
            this.TwoPopupsNode.push(popupNode);
            this.TwoPopupsArg.push(arg);
        }

    }
    private static RemovePopup(popupName: string, isLevel2Popup: boolean = false) {
        let popups = (isLevel2Popup ? this.TwoPopups : this.OnePopups);
        let popupsNode = (isLevel2Popup ? this.TwoPopupsNode : this.OnePopupsNode);
        let popupsArg = (isLevel2Popup ? this.TwoPopupsArg : this.OnePopupsArg)
        if (popupName == "NULL_POPUP_NAME") {
            popups[0].node.destroy();
            popups.splice(0, 1);
            popupsNode.splice(0, 1);
            popupsArg.splice(0, 1);
        } else {
            for (let i = 0; i < popups.length; i++) {
                const element = popups[i];
                if (element.node.name == popupName) {
                    popups[i].node.destroy();
                    popups.splice(i, 1);
                    popupsNode.splice(i, 1);
                    popupsArg.splice(i, 1);
                    return;
                }
            }
        }

    }
    private static ChoosePopup(popupName: string): Prefab | null {
        for (let i = 0; i < this.popups.length; i++) {
            const element = this.popups[i];
            if (element.data.name == popupName) {
                return element;
            }
        }
        return null;
    }
}