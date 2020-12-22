System.register(["cce.code-quality.cr", "cc", "../../../Common/Game/MyComponent.js", "./DoorType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Enum, _decorator, MyComponent, DoorType, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, Door;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

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
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_ref) {
        _inheritsLoose(Door, _ref);

        function Door() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _ref.call.apply(_ref, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "ID", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "doorType", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "canPassMinScaleX", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "canPassMaxScaleX", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Door.prototype;

        _proto.Init = function Init() {};

        return Door;
      }(_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ID", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10001;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "doorType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && DoorType === void 0 ? (_reportPossibleCrUseOfDoorType({
            error: Error()
          }), DoorType) : DoorType).ScaleDoor;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "canPassMinScaleX", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "canPassMaxScaleX", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL0dhbWUvRG9vci9Eb29yLnRzIl0sIm5hbWVzIjpbIkVudW0iLCJfZGVjb3JhdG9yIiwiTXlDb21wb25lbnQiLCJEb29yVHlwZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkRvb3IiLCJyZWFkb25seSIsInR5cGUiLCJzbGlkZSIsInJhbmdlIiwiSW5pdCIsIlNjYWxlRG9vciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtCQSxNQUFBQSxJLE9BQUFBLEk7QUFBb0JDLE1BQUFBLFUsT0FBQUEsVTs7QUFDN0JDLE1BQUFBLFcsNEJBQUFBLFc7O0FBQ0FDLE1BQUFBLFEsZUFBQUEsUTs7Ozs7OztBQUVEQyxNQUFBQSxPLEdBQXNCSCxVLENBQXRCRyxPO0FBQVNDLE1BQUFBLFEsR0FBYUosVSxDQUFiSSxROztzQkFHSkMsSSxXQURaRixPQUFPLENBQUMsTUFBRCxDLFVBRUhDLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxRQUFRLEVBQUU7QUFBWixPQUFELEMsVUFFUkYsUUFBUSxDQUFDO0FBQUVHLFFBQUFBLElBQUksRUFBRVIsSUFBSTtBQUFBO0FBQUE7QUFBWixPQUFELEMsVUFFUkssUUFBUSxDQUFDO0FBQUVJLFFBQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLFFBQUFBLEtBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sS0FBUDtBQUF0QixPQUFELEMsVUFFUkwsUUFBUSxDQUFDO0FBQUVJLFFBQUFBLEtBQUssRUFBRSxJQUFUO0FBQWVDLFFBQUFBLEtBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sS0FBUDtBQUF0QixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFJVEMsSSxHQUFBLGdCQUFPLENBRU4sQzs7Ozs7Ozs7OztpQkFYcUIsSzs7Ozs7OztpQkFFRDtBQUFBO0FBQUEsb0NBQVNDLFM7Ozs7Ozs7aUJBRUgsRzs7Ozs7OztpQkFFQSxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ0NDbGFzcywgRW51bSwgTm9kZSwgUHJlZmFiLCBfZGVjb3JhdG9yIH0gZnJvbSBcImNjXCI7XG5pbXBvcnQgeyBNeUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi8uLi9Db21tb24vR2FtZS9NeUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRG9vclR5cGUgfSBmcm9tIFwiLi9Eb29yVHlwZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnRG9vcicpXG5leHBvcnQgY2xhc3MgRG9vciBleHRlbmRzIE15Q29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoeyByZWFkb25seTogdHJ1ZSB9KVxuICAgIHJlYWRvbmx5IElEOiBudW1iZXIgPSAxMDAwMTtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBFbnVtKERvb3JUeXBlKSB9KVxuICAgIGRvb3JUeXBlOiBEb29yVHlwZSA9IERvb3JUeXBlLlNjYWxlRG9vcjtcbiAgICBAcHJvcGVydHkoeyBzbGlkZTogdHJ1ZSwgcmFuZ2U6IFswLCAxLCAwLjAwMV0gfSlcbiAgICBjYW5QYXNzTWluU2NhbGVYOiBudW1iZXIgPSAwLjI7XG4gICAgQHByb3BlcnR5KHsgc2xpZGU6IHRydWUsIHJhbmdlOiBbMCwgMSwgMC4wMDFdIH0pXG4gICAgY2FuUGFzc01heFNjYWxlWDogbnVtYmVyID0gMC4yO1xuXG5cbiAgICBJbml0KCkge1xuXG4gICAgfVxuXG59Il19