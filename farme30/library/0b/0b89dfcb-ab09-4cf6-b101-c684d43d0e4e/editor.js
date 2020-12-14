System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, AtlasNumberComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0b89d/LqwlM9rEBxoTUPQ5O", "AtlasNumberComponent", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AtlasNumberComponent", AtlasNumberComponent = (_dec = ccclass('AtlasNumberComponent'), _dec2 = property(Number), _dec(_class = (_class2 = (_temp = class AtlasNumberComponent extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "num", _descriptor, this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "num", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9BdGxhc051bWJlci9BdGxhc051bWJlckNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQXRsYXNOdW1iZXJDb21wb25lbnQiLCJOdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUzs7Ozs7OztPQUNmO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCSCxVOztzQ0FHakJJLG9CLFdBRFpGLE9BQU8sQ0FBQyxzQkFBRCxDLFVBR0hDLFFBQVEsQ0FBQ0UsTUFBRCxDLG9DQUhiLE1BQ2FELG9CQURiLFNBQzBDSCxTQUQxQyxDQUNvRDtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxPOzs7OztpQkFHbEMsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tICdjYyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnQXRsYXNOdW1iZXJDb21wb25lbnQnKVxuZXhwb3J0IGNsYXNzIEF0bGFzTnVtYmVyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShOdW1iZXIpXG4gICAgbnVtOiBudW1iZXIgPSAwO1xuXG59XG4iXX0=