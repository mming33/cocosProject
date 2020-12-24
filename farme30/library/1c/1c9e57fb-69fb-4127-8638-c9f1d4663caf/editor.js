System.register(["cce.code-quality.cr", "cc", "./ListItem.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Prefab, UITransformComponent, instantiate, Vec3, ListItem, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _temp, _crd, ccclass, property, ListGenerator;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfListItem(extras) {
    _reporterNs.report("ListItem", "./ListItem", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _dec8: void 0,
    _dec9: void 0,
    _dec10: void 0,
    _dec11: void 0,
    _dec12: void 0,
    _dec13: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _descriptor7: void 0,
    _descriptor8: void 0,
    _descriptor9: void 0,
    _descriptor10: void 0,
    _descriptor11: void 0,
    _descriptor12: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      UITransformComponent = _cc.UITransformComponent;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
    }, function (_ListItemJs) {
      ListItem = _ListItemJs.ListItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1c9e5f7aftBJ4Y4yfHUZjyv", "ListGenerator", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ListGenerator", ListGenerator = (_dec = ccclass('ListGenerator'), _dec2 = property({
        displayName: "面板宽度"
      }), _dec3 = property({
        displayName: "面板高度"
      }), _dec4 = property({
        displayName: "元素宽度"
      }), _dec5 = property({
        displayName: "元素高度"
      }), _dec6 = property({
        displayName: "元素X方向个数"
      }), _dec7 = property({
        displayName: "元素间隔y方向"
      }), _dec8 = property({
        displayName: "总个数"
      }), _dec9 = property({
        displayName: "左边距"
      }), _dec10 = property({
        displayName: "右边距"
      }), _dec11 = property({
        displayName: "上边距"
      }), _dec12 = property({
        displayName: "下边距"
      }), _dec13 = property(Prefab), _dec(_class = (_class2 = (_temp = class ListGenerator extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "panelWide", _descriptor, this);

          _initializerDefineProperty(this, "panelHight", _descriptor2, this);

          _initializerDefineProperty(this, "itemWide", _descriptor3, this);

          _initializerDefineProperty(this, "itemHight", _descriptor4, this);

          _initializerDefineProperty(this, "XNumber", _descriptor5, this);

          _defineProperty(this, "YNumber", 5);

          _defineProperty(this, "intervalX", 20);

          _initializerDefineProperty(this, "intervalY", _descriptor6, this);

          _initializerDefineProperty(this, "totalNumber", _descriptor7, this);

          _initializerDefineProperty(this, "left", _descriptor8, this);

          _initializerDefineProperty(this, "right", _descriptor9, this);

          _initializerDefineProperty(this, "top", _descriptor10, this);

          _initializerDefineProperty(this, "bottom", _descriptor11, this);

          _defineProperty(this, "totalx", 1);

          _defineProperty(this, "totaly", 1);

          _initializerDefineProperty(this, "Item", _descriptor12, this);

          _defineProperty(this, "content", null);
        }

        Init() {
          this.intervalX = (this.panelWide - this.left - this.right - this.XNumber * this.itemWide) / (this.XNumber - 1);
          this.YNumber = Math.ceil(this.totalNumber / this.XNumber);
          this.totalx = this.panelWide;
          this.totaly = this.top + this.bottom + this.YNumber * (this.itemHight + this.intervalY) - this.intervalY;
          this.content = this.node.getChildByName("view").getChildByName("content");
          let contentUITransform = this.content.getComponent(UITransformComponent);
          contentUITransform.setContentSize(this.totalx, this.totaly);
        }

        CreateItemByData(data, scenetype) {
          let indexX = 0;
          let indexY = 0;

          for (let i = 0; i < this.totalNumber; i++) {
            var _this$content;

            const element = data[i];
            let x = 0;
            let y = 0;
            let node = this.CreateItem();
            x = this.left + this.itemWide / 2 + indexX * this.intervalX + indexX * this.itemWide;
            y = this.top + this.itemHight / 2 + indexY * this.intervalY + indexY * this.itemHight;
            ;
            node.addComponent(_crd && ListItem === void 0 ? (_reportPossibleCrUseOfListItem({
              error: Error()
            }), ListItem) : ListItem).data = {
              id: i,
              data: data[i],
              type: scenetype
            };
            (_this$content = this.content) === null || _this$content === void 0 ? void 0 : _this$content.addChild(node);
            node.setPosition(new Vec3(x, -y, 0));
            indexX++;

            if (indexX == this.XNumber) {
              indexX = 0;
              indexY++;
            }
          }
        }

        CreateItem() {
          if (this.Item[0]) {
            return instantiate(this.Item[0]);
          }

          return null;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "panelWide", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 500;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "panelHight", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 800;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "itemWide", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 100;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "itemHight", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 60;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "XNumber", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 5;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "intervalY", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 20;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "totalNumber", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 3;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "left", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 10;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "right", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 10;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "top", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 10;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "bottom", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 10;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Item", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vTGlzdC9MaXN0R2VuZXJhdG9yLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJQcmVmYWIiLCJVSVRyYW5zZm9ybUNvbXBvbmVudCIsImluc3RhbnRpYXRlIiwiVmVjMyIsIkxpc3RJdGVtIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTGlzdEdlbmVyYXRvciIsImRpc3BsYXlOYW1lIiwiSW5pdCIsImludGVydmFsWCIsInBhbmVsV2lkZSIsImxlZnQiLCJyaWdodCIsIlhOdW1iZXIiLCJpdGVtV2lkZSIsIllOdW1iZXIiLCJNYXRoIiwiY2VpbCIsInRvdGFsTnVtYmVyIiwidG90YWx4IiwidG90YWx5IiwidG9wIiwiYm90dG9tIiwiaXRlbUhpZ2h0IiwiaW50ZXJ2YWxZIiwiY29udGVudCIsIm5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImNvbnRlbnRVSVRyYW5zZm9ybSIsImdldENvbXBvbmVudCIsInNldENvbnRlbnRTaXplIiwiQ3JlYXRlSXRlbUJ5RGF0YSIsImRhdGEiLCJzY2VuZXR5cGUiLCJpbmRleFgiLCJpbmRleFkiLCJpIiwiZWxlbWVudCIsIngiLCJ5IiwiQ3JlYXRlSXRlbSIsImFkZENvbXBvbmVudCIsImlkIiwidHlwZSIsImFkZENoaWxkIiwic2V0UG9zaXRpb24iLCJJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQThCQyxNQUFBQSxNLE9BQUFBLE07QUFBcUJDLE1BQUFBLG9CLE9BQUFBLG9CO0FBQXNCQyxNQUFBQSxXLE9BQUFBLFc7QUFBbUJDLE1BQUFBLEksT0FBQUEsSTs7QUFFeEdDLE1BQUFBLFEsZUFBQUEsUTs7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Ozs7Ozs7O2lCQUVDLEc7Ozs7Ozs7aUJBR0YsRzs7Ozs7OztpQkFFQyxFOzs7Ozs7O2lCQUdGLEM7Ozs7Ozs7aUJBSUUsRTs7Ozs7OztpQkFHRSxDOzs7Ozs7O2lCQUdQLEU7Ozs7Ozs7aUJBRUMsRTs7Ozs7OztpQkFFRixFOzs7Ozs7O2lCQUVHLEU7Ozs7Ozs7aUJBTVQsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgU3ByaXRlRnJhbWUsIFByZWZhYiwgVUlUcmFuc2Zvcm0sIFVJVHJhbnNmb3JtQ29tcG9uZW50LCBpbnN0YW50aWF0ZSwgVmVjNCwgVmVjMyB9IGZyb20gJ2NjJztcbmltcG9ydCB7IEdhbWVEYXRhIH0gZnJvbSAnLi4vR2FtZS9HYW1lRGF0YSc7XG5pbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gJy4vTGlzdEl0ZW0nO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0xpc3RHZW5lcmF0b3InKVxuZXhwb3J0IGNsYXNzIExpc3RHZW5lcmF0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIumdouadv+WuveW6plwiIH0pXG4gICAgcHJpdmF0ZSByZWFkb25seSBwYW5lbFdpZGU6IG51bWJlciA9IDUwMDtcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLpnaLmnb/pq5jluqZcIiB9KVxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGFuZWxIaWdodDogbnVtYmVyID0gODAwO1xuXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5YWD57Sg5a695bqmXCIgfSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IGl0ZW1XaWRlOiBudW1iZXIgPSAxMDA7XG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5YWD57Sg6auY5bqmXCIgfSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IGl0ZW1IaWdodDogbnVtYmVyID0gNjA7XG5cbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLlhYPntKBY5pa55ZCR5Liq5pWwXCIgfSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IFhOdW1iZXI6IG51bWJlciA9IDU7XG4gICAgcHJpdmF0ZSBZTnVtYmVyOiBudW1iZXIgPSA1O1xuICAgIHByaXZhdGUgaW50ZXJ2YWxYOiBudW1iZXIgPSAyMDtcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLlhYPntKDpl7TpmpR55pa55ZCRXCIgfSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IGludGVydmFsWTogbnVtYmVyID0gMjA7XG5cbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLmgLvkuKrmlbBcIiB9KVxuICAgIHByaXZhdGUgcmVhZG9ubHkgdG90YWxOdW1iZXI6IG51bWJlciA9IDM7XG5cbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLlt6bovrnot51cIiB9KVxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGVmdDogbnVtYmVyID0gMTA7XG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5Y+z6L656LedXCIgfSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJpZ2h0OiBudW1iZXIgPSAxMDtcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLkuIrovrnot51cIiB9KVxuICAgIHByaXZhdGUgcmVhZG9ubHkgdG9wOiBudW1iZXIgPSAxMDtcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLkuIvovrnot51cIiB9KVxuICAgIHByaXZhdGUgcmVhZG9ubHkgYm90dG9tOiBudW1iZXIgPSAxMDtcblxuICAgIHByaXZhdGUgdG90YWx4OiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgdG90YWx5OiBudW1iZXIgPSAxO1xuXG4gICAgQHByb3BlcnR5KFByZWZhYilcbiAgICBwcml2YXRlIEl0ZW06IFByZWZhYltdID0gW107XG5cbiAgICBjb250ZW50OiBOb2RlIHwgbnVsbCA9IG51bGw7XG5cblxuICAgIEluaXQoKSB7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxYID0gKHRoaXMucGFuZWxXaWRlIC0gdGhpcy5sZWZ0IC0gdGhpcy5yaWdodCAtIHRoaXMuWE51bWJlciAqIHRoaXMuaXRlbVdpZGUpIC8gKHRoaXMuWE51bWJlciAtIDEpO1xuICAgICAgICB0aGlzLllOdW1iZXIgPSBNYXRoLmNlaWwodGhpcy50b3RhbE51bWJlciAvIHRoaXMuWE51bWJlcik7XG4gICAgICAgIHRoaXMudG90YWx4ID0gdGhpcy5wYW5lbFdpZGU7XG4gICAgICAgIHRoaXMudG90YWx5ID0gdGhpcy50b3AgKyB0aGlzLmJvdHRvbSArIHRoaXMuWU51bWJlciAqICh0aGlzLml0ZW1IaWdodCArIHRoaXMuaW50ZXJ2YWxZKSAtIHRoaXMuaW50ZXJ2YWxZO1xuXG4gICAgICAgIHRoaXMuY29udGVudCA9ICh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWV3XCIpIGFzIE5vZGUpLmdldENoaWxkQnlOYW1lKFwiY29udGVudFwiKSBhcyBOb2RlO1xuICAgICAgICBsZXQgY29udGVudFVJVHJhbnNmb3JtID0gdGhpcy5jb250ZW50LmdldENvbXBvbmVudChVSVRyYW5zZm9ybUNvbXBvbmVudCkgYXMgVUlUcmFuc2Zvcm1Db21wb25lbnQ7XG4gICAgICAgIGNvbnRlbnRVSVRyYW5zZm9ybS5zZXRDb250ZW50U2l6ZSh0aGlzLnRvdGFseCwgdGhpcy50b3RhbHkpO1xuXG4gICAgfVxuXG4gICAgQ3JlYXRlSXRlbUJ5RGF0YShkYXRhOiBBcnJheTxhbnk+LCBzY2VuZXR5cGU/OiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGluZGV4WCA9IDA7XG4gICAgICAgIGxldCBpbmRleFkgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG90YWxOdW1iZXI7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRhdGFbaV07XG4gICAgICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgICAgICBsZXQgeSA9IDA7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuQ3JlYXRlSXRlbSgpIGFzIE5vZGU7XG4gICAgICAgICAgICB4ID0gdGhpcy5sZWZ0ICsgdGhpcy5pdGVtV2lkZSAvIDIgKyBpbmRleFggKiB0aGlzLmludGVydmFsWCArIGluZGV4WCAqIHRoaXMuaXRlbVdpZGU7XG4gICAgICAgICAgICB5ID0gdGhpcy50b3AgKyB0aGlzLml0ZW1IaWdodCAvIDIgKyBpbmRleFkgKiB0aGlzLmludGVydmFsWSArIGluZGV4WSAqIHRoaXMuaXRlbUhpZ2h0OztcbiAgICAgICAgICAgIG5vZGUuYWRkQ29tcG9uZW50KExpc3RJdGVtKS5kYXRhID0ge1xuICAgICAgICAgICAgICAgIGlkOiBpLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFbaV0sXG4gICAgICAgICAgICAgICAgdHlwZTogc2NlbmV0eXBlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5jb250ZW50Py5hZGRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24obmV3IFZlYzMoeCwgLXksIDApKTtcbiAgICAgICAgICAgIGluZGV4WCsrO1xuICAgICAgICAgICAgaWYgKGluZGV4WCA9PSB0aGlzLlhOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBpbmRleFggPSAwO1xuICAgICAgICAgICAgICAgIGluZGV4WSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBDcmVhdGVJdGVtKCk6IE5vZGUgfCBudWxsIHtcbiAgICAgICAgaWYgKHRoaXMuSXRlbVswXSkge1xuICAgICAgICAgICAgcmV0dXJuIGluc3RhbnRpYXRlKHRoaXMuSXRlbVswXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIl19