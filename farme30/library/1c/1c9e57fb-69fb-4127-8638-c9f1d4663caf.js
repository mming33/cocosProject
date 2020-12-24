System.register(["cce.code-quality.cr", "cc", "./ListItem.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Prefab, UITransformComponent, instantiate, Vec3, ListItem, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _temp, _crd, ccclass, property, ListGenerator;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

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
      }), _dec13 = property(Prefab), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ListGenerator, _Component);

        function ListGenerator() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "panelWide", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "panelHight", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "itemWide", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "itemHight", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "XNumber", _descriptor5, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "YNumber", 5);

          _defineProperty(_assertThisInitialized(_this), "intervalX", 20);

          _initializerDefineProperty(_assertThisInitialized(_this), "intervalY", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "totalNumber", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "left", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "right", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "top", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "bottom", _descriptor11, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "totalx", 1);

          _defineProperty(_assertThisInitialized(_this), "totaly", 1);

          _initializerDefineProperty(_assertThisInitialized(_this), "Item", _descriptor12, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "content", null);

          return _this;
        }

        var _proto = ListGenerator.prototype;

        _proto.Init = function Init() {
          this.intervalX = (this.panelWide - this.left - this.right - this.XNumber * this.itemWide) / (this.XNumber - 1);
          this.YNumber = Math.ceil(this.totalNumber / this.XNumber);
          this.totalx = this.panelWide;
          this.totaly = this.top + this.bottom + this.YNumber * (this.itemHight + this.intervalY) - this.intervalY;
          this.content = this.node.getChildByName("view").getChildByName("content");
          var contentUITransform = this.content.getComponent(UITransformComponent);
          contentUITransform.setContentSize(this.totalx, this.totaly);
        };

        _proto.CreateItemByData = function CreateItemByData(data, scenetype) {
          var indexX = 0;
          var indexY = 0;

          for (var i = 0; i < this.totalNumber; i++) {
            var _this$content;

            var element = data[i];
            var x = 0;
            var y = 0;
            var node = this.CreateItem();
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
        };

        _proto.CreateItem = function CreateItem() {
          if (this.Item[0]) {
            return instantiate(this.Item[0]);
          }

          return null;
        };

        return ListGenerator;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "panelWide", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 500;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "panelHight", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 800;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "itemWide", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "itemHight", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 60;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "XNumber", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "intervalY", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "totalNumber", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "left", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "right", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "top", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "bottom", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Item", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vTGlzdC9MaXN0R2VuZXJhdG9yLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJQcmVmYWIiLCJVSVRyYW5zZm9ybUNvbXBvbmVudCIsImluc3RhbnRpYXRlIiwiVmVjMyIsIkxpc3RJdGVtIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTGlzdEdlbmVyYXRvciIsImRpc3BsYXlOYW1lIiwiSW5pdCIsImludGVydmFsWCIsInBhbmVsV2lkZSIsImxlZnQiLCJyaWdodCIsIlhOdW1iZXIiLCJpdGVtV2lkZSIsIllOdW1iZXIiLCJNYXRoIiwiY2VpbCIsInRvdGFsTnVtYmVyIiwidG90YWx4IiwidG90YWx5IiwidG9wIiwiYm90dG9tIiwiaXRlbUhpZ2h0IiwiaW50ZXJ2YWxZIiwiY29udGVudCIsIm5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImNvbnRlbnRVSVRyYW5zZm9ybSIsImdldENvbXBvbmVudCIsInNldENvbnRlbnRTaXplIiwiQ3JlYXRlSXRlbUJ5RGF0YSIsImRhdGEiLCJzY2VuZXR5cGUiLCJpbmRleFgiLCJpbmRleFkiLCJpIiwiZWxlbWVudCIsIngiLCJ5IiwiQ3JlYXRlSXRlbSIsImFkZENvbXBvbmVudCIsImlkIiwidHlwZSIsImFkZENoaWxkIiwic2V0UG9zaXRpb24iLCJJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUE4QkMsTUFBQUEsTSxPQUFBQSxNO0FBQXFCQyxNQUFBQSxvQixPQUFBQSxvQjtBQUFzQkMsTUFBQUEsVyxPQUFBQSxXO0FBQW1CQyxNQUFBQSxJLE9BQUFBLEk7O0FBRXhHQyxNQUFBQSxRLGVBQUFB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aUJBRUYsRTs7Ozs7OztpQkFFRyxFOzs7Ozs7O2lCQU1ULEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFNwcml0ZUZyYW1lLCBQcmVmYWIsIFVJVHJhbnNmb3JtLCBVSVRyYW5zZm9ybUNvbXBvbmVudCwgaW5zdGFudGlhdGUsIFZlYzQsIFZlYzMgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBHYW1lRGF0YSB9IGZyb20gJy4uL0dhbWUvR2FtZURhdGEnO1xuaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tICcuL0xpc3RJdGVtJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdMaXN0R2VuZXJhdG9yJylcbmV4cG9ydCBjbGFzcyBMaXN0R2VuZXJhdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLpnaLmnb/lrr3luqZcIiB9KVxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGFuZWxXaWRlOiBudW1iZXIgPSA1MDA7XG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi6Z2i5p2/6auY5bqmXCIgfSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBhbmVsSGlnaHQ6IG51bWJlciA9IDgwMDtcblxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuWFg+e0oOWuveW6plwiIH0pXG4gICAgcHJpdmF0ZSByZWFkb25seSBpdGVtV2lkZTogbnVtYmVyID0gMTAwO1xuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuWFg+e0oOmrmOW6plwiIH0pXG4gICAgcHJpdmF0ZSByZWFkb25seSBpdGVtSGlnaHQ6IG51bWJlciA9IDYwO1xuXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5YWD57SgWOaWueWQkeS4quaVsFwiIH0pXG4gICAgcHJpdmF0ZSByZWFkb25seSBYTnVtYmVyOiBudW1iZXIgPSA1O1xuICAgIHByaXZhdGUgWU51bWJlcjogbnVtYmVyID0gNTtcbiAgICBwcml2YXRlIGludGVydmFsWDogbnVtYmVyID0gMjA7XG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5YWD57Sg6Ze06ZqUeeaWueWQkVwiIH0pXG4gICAgcHJpdmF0ZSByZWFkb25seSBpbnRlcnZhbFk6IG51bWJlciA9IDIwO1xuXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5oC75Liq5pWwXCIgfSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRvdGFsTnVtYmVyOiBudW1iZXIgPSAzO1xuXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5bem6L656LedXCIgfSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxlZnQ6IG51bWJlciA9IDEwO1xuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuWPs+i+uei3nVwiIH0pXG4gICAgcHJpdmF0ZSByZWFkb25seSByaWdodDogbnVtYmVyID0gMTA7XG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5LiK6L656LedXCIgfSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRvcDogbnVtYmVyID0gMTA7XG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5LiL6L656LedXCIgfSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IGJvdHRvbTogbnVtYmVyID0gMTA7XG5cbiAgICBwcml2YXRlIHRvdGFseDogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIHRvdGFseTogbnVtYmVyID0gMTtcblxuICAgIEBwcm9wZXJ0eShQcmVmYWIpXG4gICAgcHJpdmF0ZSBJdGVtOiBQcmVmYWJbXSA9IFtdO1xuXG4gICAgY29udGVudDogTm9kZSB8IG51bGwgPSBudWxsO1xuXG5cbiAgICBJbml0KCkge1xuICAgICAgICB0aGlzLmludGVydmFsWCA9ICh0aGlzLnBhbmVsV2lkZSAtIHRoaXMubGVmdCAtIHRoaXMucmlnaHQgLSB0aGlzLlhOdW1iZXIgKiB0aGlzLml0ZW1XaWRlKSAvICh0aGlzLlhOdW1iZXIgLSAxKTtcbiAgICAgICAgdGhpcy5ZTnVtYmVyID0gTWF0aC5jZWlsKHRoaXMudG90YWxOdW1iZXIgLyB0aGlzLlhOdW1iZXIpO1xuICAgICAgICB0aGlzLnRvdGFseCA9IHRoaXMucGFuZWxXaWRlO1xuICAgICAgICB0aGlzLnRvdGFseSA9IHRoaXMudG9wICsgdGhpcy5ib3R0b20gKyB0aGlzLllOdW1iZXIgKiAodGhpcy5pdGVtSGlnaHQgKyB0aGlzLmludGVydmFsWSkgLSB0aGlzLmludGVydmFsWTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQgPSAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidmlld1wiKSBhcyBOb2RlKS5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRcIikgYXMgTm9kZTtcbiAgICAgICAgbGV0IGNvbnRlbnRVSVRyYW5zZm9ybSA9IHRoaXMuY29udGVudC5nZXRDb21wb25lbnQoVUlUcmFuc2Zvcm1Db21wb25lbnQpIGFzIFVJVHJhbnNmb3JtQ29tcG9uZW50O1xuICAgICAgICBjb250ZW50VUlUcmFuc2Zvcm0uc2V0Q29udGVudFNpemUodGhpcy50b3RhbHgsIHRoaXMudG90YWx5KTtcblxuICAgIH1cblxuICAgIENyZWF0ZUl0ZW1CeURhdGEoZGF0YTogQXJyYXk8YW55Piwgc2NlbmV0eXBlPzogc3RyaW5nKSB7XG4gICAgICAgIGxldCBpbmRleFggPSAwO1xuICAgICAgICBsZXQgaW5kZXhZID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvdGFsTnVtYmVyOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkYXRhW2ldO1xuICAgICAgICAgICAgbGV0IHggPSAwO1xuICAgICAgICAgICAgbGV0IHkgPSAwO1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLkNyZWF0ZUl0ZW0oKSBhcyBOb2RlO1xuICAgICAgICAgICAgeCA9IHRoaXMubGVmdCArIHRoaXMuaXRlbVdpZGUgLyAyICsgaW5kZXhYICogdGhpcy5pbnRlcnZhbFggKyBpbmRleFggKiB0aGlzLml0ZW1XaWRlO1xuICAgICAgICAgICAgeSA9IHRoaXMudG9wICsgdGhpcy5pdGVtSGlnaHQgLyAyICsgaW5kZXhZICogdGhpcy5pbnRlcnZhbFkgKyBpbmRleFkgKiB0aGlzLml0ZW1IaWdodDs7XG4gICAgICAgICAgICBub2RlLmFkZENvbXBvbmVudChMaXN0SXRlbSkuZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBpZDogaSxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhW2ldLFxuICAgICAgICAgICAgICAgIHR5cGU6IHNjZW5ldHlwZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuY29udGVudD8uYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKG5ldyBWZWMzKHgsIC15LCAwKSk7XG4gICAgICAgICAgICBpbmRleFgrKztcbiAgICAgICAgICAgIGlmIChpbmRleFggPT0gdGhpcy5YTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgaW5kZXhYID0gMDtcbiAgICAgICAgICAgICAgICBpbmRleFkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgQ3JlYXRlSXRlbSgpOiBOb2RlIHwgbnVsbCB7XG4gICAgICAgIGlmICh0aGlzLkl0ZW1bMF0pIHtcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW50aWF0ZSh0aGlzLkl0ZW1bMF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiJdfQ==