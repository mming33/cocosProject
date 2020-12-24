import { _decorator, Component, Node, SpriteFrame, Prefab, UITransform, UITransformComponent, instantiate, Vec4, Vec3 } from 'cc';
import { GameData } from '../Game/GameData';
import { ListItem } from './ListItem';
const { ccclass, property } = _decorator;

@ccclass('ListGenerator')
export class ListGenerator extends Component {
    @property({ displayName: "面板宽度" })
    private readonly panelWide: number = 500;
    @property({ displayName: "面板高度" })
    private readonly panelHight: number = 800;

    @property({ displayName: "元素宽度" })
    private readonly itemWide: number = 100;
    @property({ displayName: "元素高度" })
    private readonly itemHight: number = 60;

    @property({ displayName: "元素X方向个数" })
    private readonly XNumber: number = 5;
    private YNumber: number = 5;
    private intervalX: number = 20;
    @property({ displayName: "元素间隔y方向" })
    private readonly intervalY: number = 20;

    @property({ displayName: "总个数" })
    private readonly totalNumber: number = 3;

    @property({ displayName: "左边距" })
    private readonly left: number = 10;
    @property({ displayName: "右边距" })
    private readonly right: number = 10;
    @property({ displayName: "上边距" })
    private readonly top: number = 10;
    @property({ displayName: "下边距" })
    private readonly bottom: number = 10;

    private totalx: number = 1;
    private totaly: number = 1;

    @property(Prefab)
    private Item: Prefab[] = [];

    content: Node | null = null;


    Init() {
        this.intervalX = (this.panelWide - this.left - this.right - this.XNumber * this.itemWide) / (this.XNumber - 1);
        this.YNumber = Math.ceil(this.totalNumber / this.XNumber);
        this.totalx = this.panelWide;
        this.totaly = this.top + this.bottom + this.YNumber * (this.itemHight + this.intervalY) - this.intervalY;

        this.content = (this.node.getChildByName("view") as Node).getChildByName("content") as Node;
        let contentUITransform = this.content.getComponent(UITransformComponent) as UITransformComponent;
        contentUITransform.setContentSize(this.totalx, this.totaly);

    }

    CreateItemByData(data: Array<any>, scenetype?: string) {
        let indexX = 0;
        let indexY = 0;
        for (let i = 0; i < this.totalNumber; i++) {
            const element = data[i];
            let x = 0;
            let y = 0;
            let node = this.CreateItem() as Node;
            x = this.left + this.itemWide / 2 + indexX * this.intervalX + indexX * this.itemWide;
            y = this.top + this.itemHight / 2 + indexY * this.intervalY + indexY * this.itemHight;;
            node.addComponent(ListItem).data = {
                id: i,
                data: data[i],
                type: scenetype
            };
            this.content?.addChild(node);
            node.setPosition(new Vec3(x, -y, 0));
            indexX++;
            if (indexX == this.XNumber) {
                indexX = 0;
                indexY++;
            }
        }
    }


    CreateItem(): Node | null {
        if (this.Item[0]) {
            return instantiate(this.Item[0]);
        }
        return null;
    }
}
