System.register(["cce.code-quality.cr", "cc", "../../../Common/Game/MyComponent.js", "./FloorType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Enum, _decorator, MyComponent, FloorType, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, Floor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Floor", Floor = (_dec = ccclass('Floor'), _dec2 = property({
        tooltip: "地板ID,只读",
        readonly: true
      }), _dec3 = property({
        tooltip: "地板前进方向枚举",
        type: Enum(_crd && FloorType === void 0 ? (_reportPossibleCrUseOfFloorType({
          error: Error()
        }), FloorType) : FloorType)
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_ref) {
        _inheritsLoose(Floor, _ref);

        function Floor() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _ref.call.apply(_ref, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "ID", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "floorType", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Floor.prototype;

        _proto.IsNowFloor = function IsNowFloor() {
          if (this.node.worldPosition.x <= 1.5 && this.node.worldPosition.x >= -1.5 && this.node.worldPosition.z <= 1.5 && this.node.worldPosition.z >= -1.5) {
            return true;
          } else {
            return false;
          }
        };

        return Floor;
      }(_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ID", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10001;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "floorType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9HYW1lL0dhbWUvRG9vci9GbG9vci50cyJdLCJuYW1lcyI6WyJFbnVtIiwiX2RlY29yYXRvciIsIk15Q29tcG9uZW50IiwiRmxvb3JUeXBlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiRmxvb3IiLCJ0b29sdGlwIiwicmVhZG9ubHkiLCJ0eXBlIiwiSXNOb3dGbG9vciIsIm5vZGUiLCJ3b3JsZFBvc2l0aW9uIiwieCIsInoiLCJGUk9OVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0JBLE1BQUFBLEksT0FBQUEsSTtBQUFvQkMsTUFBQUEsVSxPQUFBQSxVOztBQUM3QkMsTUFBQUEsVyw0QkFBQUEsVzs7QUFDQUMsTUFBQUEsUyxnQkFBQUEsUzs7Ozs7OztBQUVEQyxNQUFBQSxPLEdBQXNCSCxVLENBQXRCRyxPO0FBQVNDLE1BQUFBLFEsR0FBYUosVSxDQUFiSSxROzt1QkFHSkMsSyxXQURaRixPQUFPLENBQUMsT0FBRCxDLFVBRUhDLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxPQUFPLEVBQUUsU0FBWDtBQUFzQkMsUUFBQUEsUUFBUSxFQUFFO0FBQWhDLE9BQUQsQyxVQUVSSCxRQUFRLENBQUM7QUFBRUUsUUFBQUEsT0FBTyxFQUFFLFVBQVg7QUFBdUJFLFFBQUFBLElBQUksRUFBRVQsSUFBSTtBQUFBO0FBQUE7QUFBakMsT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFHVFUsVSxHQUFBLHNCQUFzQjtBQUNsQixjQUFJLEtBQUtDLElBQUwsQ0FBVUMsYUFBVixDQUF3QkMsQ0FBeEIsSUFBNkIsR0FBN0IsSUFBb0MsS0FBS0YsSUFBTCxDQUFVQyxhQUFWLENBQXdCQyxDQUF4QixJQUE2QixDQUFDLEdBQWxFLElBQXlFLEtBQUtGLElBQUwsQ0FBVUMsYUFBVixDQUF3QkUsQ0FBeEIsSUFBNkIsR0FBdEcsSUFBNkcsS0FBS0gsSUFBTCxDQUFVQyxhQUFWLENBQXdCRSxDQUF4QixJQUE2QixDQUFDLEdBQS9JLEVBQW9KO0FBQ2hKLG1CQUFPLElBQVA7QUFDSCxXQUZELE1BRU87QUFDSCxtQkFBTyxLQUFQO0FBQ0g7QUFDSixTOzs7Ozs7Ozs7O2lCQVZxQixLOzs7Ozs7O2lCQUVDO0FBQUE7QUFBQSxzQ0FBVUMsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENDQ2xhc3MsIEVudW0sIE5vZGUsIFByZWZhYiwgX2RlY29yYXRvciB9IGZyb20gXCJjY1wiO1xuaW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vLi4vQ29tbW9uL0dhbWUvTXlDb21wb25lbnRcIjtcbmltcG9ydCB7IEZsb29yVHlwZSB9IGZyb20gXCIuL0Zsb29yVHlwZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnRmxvb3InKVxuZXhwb3J0IGNsYXNzIEZsb29yIGV4dGVuZHMgTXlDb21wb25lbnQge1xuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwi5Zyw5p2/SUQs5Y+q6K+7XCIsIHJlYWRvbmx5OiB0cnVlIH0pXG4gICAgcmVhZG9ubHkgSUQ6IG51bWJlciA9IDEwMDAxO1xuICAgIEBwcm9wZXJ0eSh7IHRvb2x0aXA6IFwi5Zyw5p2/5YmN6L+b5pa55ZCR5p6a5Li+XCIsIHR5cGU6IEVudW0oRmxvb3JUeXBlKSB9KVxuICAgIGZsb29yVHlwZTogRmxvb3JUeXBlID0gRmxvb3JUeXBlLkZST05UO1xuXG4gICAgSXNOb3dGbG9vcigpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZS53b3JsZFBvc2l0aW9uLnggPD0gMS41ICYmIHRoaXMubm9kZS53b3JsZFBvc2l0aW9uLnggPj0gLTEuNSAmJiB0aGlzLm5vZGUud29ybGRQb3NpdGlvbi56IDw9IDEuNSAmJiB0aGlzLm5vZGUud29ybGRQb3NpdGlvbi56ID49IC0xLjUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG59Il19