import { _decorator, Component, Node, Prefab, instantiate, find, Vec3 } from 'cc';
import { Popup } from './Popup';
const { ccclass, property } = _decorator;

@ccclass('PopupManager')
export class PopupManager extends Component {
    static I: PopupManager;
    @property(Prefab)
    popups: Prefab[] = [];
    willOpenPopups: Prefab[] = [];
    /**当前打开的弹窗结点 */
    nowPopup: Node = null;
    /**当前打开的弹窗的Popup组件 */
    nowPopupComponent: Popup = null;

    onLoad() {
        PopupManager.I = this.node.getComponent(PopupManager);
    }
    /**
     * 显示弹窗
     * @param canvas 弹窗要附加到的Cavans的结点
     * @param popupName 弹窗名（弹窗预制体的名字）
     * @param isLevel2Poputp 是否是2级弹窗
     */
    public ShowPopup(canvas: Node, popupName: string, isLevel2Poputp: boolean = false) {
        if (!isLevel2Poputp) {
            this.PushWillOpenPopupList(popupName)
            if (!this.nowPopup) {
                if (this.willOpenPopups.length > 0) {
                    this.nowPopup = instantiate(this.willOpenPopups[0]);
                    canvas.addChild(this.nowPopup);
                    this.nowPopupComponent = this.nowPopup.getComponent(Popup);
                    this.willOpenPopups.splice(0, 1);
                }
            }
        } else {
            let level2Popup = instantiate(this.ChoosePopup(popupName));
            canvas.addChild(level2Popup);
        }
    }
    /**
     * 关闭弹窗 关闭当前打开的1级弹窗（关闭二级弹窗需要指定弹窗结点）
     * @param isLevel2Poputp 是否是二级弹窗
     * @param level2Popup 二级弹窗的结点
     */
    public ClosePopup(canvas: Node, isLevel2Poputp: boolean = false, level2Popup: Node = null) {
        if (!isLevel2Poputp) {
            this.nowPopup.destroy();
            this.nowPopup = null;
            this.nowPopupComponent = null;
            if (this.willOpenPopups.length > 0) {
                this.nowPopup = instantiate(this.willOpenPopups[0]);
                canvas.addChild(this.nowPopup);
                this.nowPopupComponent = this.nowPopup.getComponent(Popup);
                this.willOpenPopups.splice(0, 1);
            }
        } else {
            level2Popup.destroy();
        }
    }




    private PushWillOpenPopupList(popupName: string) {
        for (let i = 0; i < this.popups.length; i++) {
            const element = this.popups[i];
            if (element.data._name == popupName) {
                let index = this.willOpenPopups.indexOf(element);
                if (index == -1) {
                    this.willOpenPopups.push(element);
                    return;
                }
            }
        }
    }
    private ChoosePopup(popupName: string): Prefab {
        for (let i = 0; i < this.popups.length; i++) {
            const element = this.popups[i];
            if (element.data._name == popupName) {
                return element;
            }
        }
    }


}
