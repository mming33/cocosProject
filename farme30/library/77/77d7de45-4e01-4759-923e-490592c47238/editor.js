System.register(["cce.code-quality.cr", "cc", "../../../Common/Game/MyComponent.js", "./FloorType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Enum, _decorator, MyComponent, FloorType, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, Floor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMyComponent(extras) {
    _reporterNs.report("MyComponent", "../../../Common/Game/MyComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFloorType(extras) {
    _reporterNs.report("FloorType", "./FloorType", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
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
    }, function (_FloorTypeJs) {
      FloorType = _FloorTypeJs.FloorType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "77d7d5FTgFHWZI+SQWSxHI4", "Floor", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Floor", Floor = (_dec = ccclass('Floor'), _dec2 = property({
        tooltip: "地板ID,只读",
        readonly: true
      }), _dec3 = property({
        tooltip: "地板前进方向枚举",
        type: Enum(_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
          error: Error()
        }), FloorType) : FloorType)
      }), _dec(_class = (_class2 = (_temp = class Floor extends (_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "ID", _descriptor, this);

          _initializerDefineProperty(this, "floorType", _descriptor2, this);
        }

        IsNowFloor() {
          if (this.node.worldPosition.x <= 1.5 && this.node.worldPosition.x >= -1.5 && this.node.worldPosition.z <= 1.5 && this.node.worldPosition.z >= -1.5) {
            return true;
          } else {
            return false;
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ID", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 10001;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "floorType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
            error: Error()
          }), FloorType) : FloorType).FRONT;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL0dhbWUvRG9vci9GbG9vci50cyJdLCJuYW1lcyI6WyJFbnVtIiwiX2RlY29yYXRvciIsIk15Q29tcG9uZW50IiwiRmxvb3JUeXBlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiRmxvb3IiLCJ0b29sdGlwIiwicmVhZG9ubHkiLCJ0eXBlIiwiSXNOb3dGbG9vciIsIm5vZGUiLCJ3b3JsZFBvc2l0aW9uIiwieCIsInoiLCJGUk9OVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQkEsTUFBQUEsSSxPQUFBQSxJO0FBQW9CQyxNQUFBQSxVLE9BQUFBLFU7O0FBQzdCQyxNQUFBQSxXLDRCQUFBQSxXOztBQUNBQyxNQUFBQSxTLGdCQUFBQSxTOzs7Ozs7O09BRUg7QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE8sR0FBd0JKLFU7O3VCQUdqQkssSyxXQURaRixPQUFPLENBQUMsT0FBRCxDLFVBRUhDLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxPQUFPLEVBQUUsU0FBWDtBQUFzQkMsUUFBQUEsUUFBUSxFQUFFO0FBQWhDLE9BQUQsQyxVQUVSSCxRQUFRLENBQUM7QUFBRUUsUUFBQUEsT0FBTyxFQUFFLFVBQVg7QUFBdUJFLFFBQUFBLElBQUksRUFBRVQsSUFBSTtBQUFBO0FBQUE7QUFBakMsT0FBRCxDLG9DQUpiLE1BQ2FNLEtBRGI7QUFBQTtBQUFBLHNDQUN1QztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFNbkNJLFFBQUFBLFVBQVUsR0FBWTtBQUNsQixjQUFJLEtBQUtDLElBQUwsQ0FBVUMsYUFBVixDQUF3QkMsQ0FBeEIsSUFBNkIsR0FBN0IsSUFBb0MsS0FBS0YsSUFBTCxDQUFVQyxhQUFWLENBQXdCQyxDQUF4QixJQUE2QixDQUFDLEdBQWxFLElBQXlFLEtBQUtGLElBQUwsQ0FBVUMsYUFBVixDQUF3QkUsQ0FBeEIsSUFBNkIsR0FBdEcsSUFBNkcsS0FBS0gsSUFBTCxDQUFVQyxhQUFWLENBQXdCRSxDQUF4QixJQUE2QixDQUFDLEdBQS9JLEVBQW9KO0FBQ2hKLG1CQUFPLElBQVA7QUFDSCxXQUZELE1BRU87QUFDSCxtQkFBTyxLQUFQO0FBQ0g7QUFDSjs7QUFaa0MsTzs7Ozs7aUJBRWIsSzs7Ozs7OztpQkFFQztBQUFBO0FBQUEsc0NBQVVDLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDQ0NsYXNzLCBFbnVtLCBOb2RlLCBQcmVmYWIsIF9kZWNvcmF0b3IgfSBmcm9tIFwiY2NcIjtcbmltcG9ydCB7IE15Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uLy4uL0NvbW1vbi9HYW1lL015Q29tcG9uZW50XCI7XG5pbXBvcnQgeyBGbG9vclR5cGUgfSBmcm9tIFwiLi9GbG9vclR5cGVcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0Zsb29yJylcbmV4cG9ydCBjbGFzcyBGbG9vciBleHRlbmRzIE15Q29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIuWcsOadv0lELOWPquivu1wiLCByZWFkb25seTogdHJ1ZSB9KVxuICAgIHJlYWRvbmx5IElEOiBudW1iZXIgPSAxMDAwMTtcbiAgICBAcHJvcGVydHkoeyB0b29sdGlwOiBcIuWcsOadv+WJjei/m+aWueWQkeaemuS4vlwiLCB0eXBlOiBFbnVtKEZsb29yVHlwZSkgfSlcbiAgICBmbG9vclR5cGU6IEZsb29yVHlwZSA9IEZsb29yVHlwZS5GUk9OVDtcblxuICAgIElzTm93Rmxvb3IoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUud29ybGRQb3NpdGlvbi54IDw9IDEuNSAmJiB0aGlzLm5vZGUud29ybGRQb3NpdGlvbi54ID49IC0xLjUgJiYgdGhpcy5ub2RlLndvcmxkUG9zaXRpb24ueiA8PSAxLjUgJiYgdGhpcy5ub2RlLndvcmxkUG9zaXRpb24ueiA+PSAtMS41KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==