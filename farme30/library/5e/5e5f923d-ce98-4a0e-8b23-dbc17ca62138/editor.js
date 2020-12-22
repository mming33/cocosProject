System.register(["cce.code-quality.cr", "cc", "../../../Common/Game/MyComponent.js", "./DoorType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Enum, _decorator, MyComponent, DoorType, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, Door;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMyComponent(extras) {
    _reporterNs.report("MyComponent", "../../../Common/Game/MyComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDoorType(extras) {
    _reporterNs.report("DoorType", "./DoorType", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Enum = _cc.Enum;
      _decorator = _cc._decorator;
    }, function (_CommonGameMyComponentJs) {
      MyComponent = _CommonGameMyComponentJs.MyComponent;
    }, function (_DoorTypeJs) {
      DoorType = _DoorTypeJs.DoorType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e5f9I9zphKDosj28F8piE4", "Door", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Door", Door = (_dec = ccclass('Door'), _dec2 = property({
        readonly: true
      }), _dec3 = property({
        type: Enum(_crd && DoorType === void 0 ? (_reportPossibleCrUseOfDoorType({
          error: Error()
        }), DoorType) : DoorType)
      }), _dec4 = property({
        slide: true,
        range: [0, 1, 0.001]
      }), _dec5 = property({
        slide: true,
        range: [0, 1, 0.001]
      }), _dec(_class = (_class2 = (_temp = class Door extends (_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "ID", _descriptor, this);

          _initializerDefineProperty(this, "doorType", _descriptor2, this);

          _initializerDefineProperty(this, "canPassMinScaleX", _descriptor3, this);

          _initializerDefineProperty(this, "canPassMaxScaleX", _descriptor4, this);
        }

        Init() {}

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ID", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 10001;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "doorType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && DoorType === void 0 ? (_reportPossibleCrUseOfDoorType({
            error: Error()
          }), DoorType) : DoorType).ScaleDoor;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "canPassMinScaleX", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.2;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "canPassMaxScaleX", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.2;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL0dhbWUvRG9vci9Eb29yLnRzIl0sIm5hbWVzIjpbIkVudW0iLCJfZGVjb3JhdG9yIiwiTXlDb21wb25lbnQiLCJEb29yVHlwZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkRvb3IiLCJyZWFkb25seSIsInR5cGUiLCJzbGlkZSIsInJhbmdlIiwiSW5pdCIsIlNjYWxlRG9vciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0JBLE1BQUFBLEksT0FBQUEsSTtBQUFvQkMsTUFBQUEsVSxPQUFBQSxVOztBQUM3QkMsTUFBQUEsVyw0QkFBQUEsVzs7QUFDQUMsTUFBQUEsUSxlQUFBQSxROzs7Ozs7O09BRUg7QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE8sR0FBd0JKLFU7O3NCQUdqQkssSSxXQURaRixPQUFPLENBQUMsTUFBRCxDLFVBRUhDLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxRQUFRLEVBQUU7QUFBWixPQUFELEMsVUFFUkYsUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRVIsSUFBSTtBQUFBO0FBQUE7QUFBWixPQUFELEMsVUFFUkssUUFBUSxDQUFDO0FBQUVJLFFBQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLFFBQUFBLEtBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sS0FBUDtBQUF0QixPQUFELEMsVUFFUkwsUUFBUSxDQUFDO0FBQUVJLFFBQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLFFBQUFBLEtBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sS0FBUDtBQUF0QixPQUFELEMsb0NBUmIsTUFDYUosSUFEYjtBQUFBO0FBQUEsc0NBQ3NDO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQVdsQ0ssUUFBQUEsSUFBSSxHQUFHLENBRU47O0FBYmlDLE87Ozs7O2lCQUVaLEs7Ozs7Ozs7aUJBRUQ7QUFBQTtBQUFBLG9DQUFTQyxTOzs7Ozs7O2lCQUVILEc7Ozs7Ozs7aUJBRUEsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENDQ2xhc3MsIEVudW0sIE5vZGUsIFByZWZhYiwgX2RlY29yYXRvciB9IGZyb20gXCJjY1wiO1xuaW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vLi4vQ29tbW9uL0dhbWUvTXlDb21wb25lbnRcIjtcbmltcG9ydCB7IERvb3JUeXBlIH0gZnJvbSBcIi4vRG9vclR5cGVcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0Rvb3InKVxuZXhwb3J0IGNsYXNzIERvb3IgZXh0ZW5kcyBNeUNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KHsgcmVhZG9ubHk6IHRydWUgfSlcbiAgICByZWFkb25seSBJRDogbnVtYmVyID0gMTAwMDE7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogRW51bShEb29yVHlwZSkgfSlcbiAgICBkb29yVHlwZTogRG9vclR5cGUgPSBEb29yVHlwZS5TY2FsZURvb3I7XG4gICAgQHByb3BlcnR5KHsgc2xpZGU6IHRydWUsIHJhbmdlOiBbMCwgMSwgMC4wMDFdIH0pXG4gICAgY2FuUGFzc01pblNjYWxlWDogbnVtYmVyID0gMC4yO1xuICAgIEBwcm9wZXJ0eSh7IHNsaWRlOiB0cnVlLCByYW5nZTogWzAsIDEsIDAuMDAxXSB9KVxuICAgIGNhblBhc3NNYXhTY2FsZVg6IG51bWJlciA9IDAuMjtcblxuXG4gICAgSW5pdCgpIHtcblxuICAgIH1cblxufSJdfQ==