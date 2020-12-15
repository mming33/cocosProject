System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, AnimationComponent, _dec, _class, _temp, _crd, ccclass, property, XiaoFei;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AnimationComponent = _cc.AnimationComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "90b4e9bvf1HganM7R1ofKL4", "XiaoFei", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("XiaoFei", XiaoFei = (_dec = ccclass('XiaoFei'), _dec(_class = (_temp = class XiaoFei extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "animationComponent", null);

          _defineProperty(this, "clips", []);
        }

        onLoad() {
          this.animationComponent = this.node.getComponent(AnimationComponent);
        }

        start() {
          if (this.animationComponent) {
            this.animationComponent.play("XiaoFeiIdel001");
            console.log("播放了 XiaoFeiIdel001");
            this.scheduleOnce(() => {
              if (this.animationComponent) this.animationComponent.crossFade('XiaoFeiTalk001', 0.3);
            }, 3);
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvcmVzL1hpYW9GZWkvWGlhb0ZlaVNjcmlwdHMvWGlhb0ZlaS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiQW5pbWF0aW9uQ29tcG9uZW50IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiWGlhb0ZlaSIsIm9uTG9hZCIsImFuaW1hdGlvbkNvbXBvbmVudCIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJzdGFydCIsInBsYXkiLCJjb25zb2xlIiwibG9nIiwic2NoZWR1bGVPbmNlIiwiY3Jvc3NGYWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBT1NBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLGtCLE9BQUFBLGtCOzs7Ozs7O09BQ2hDO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCSixVOzt5QkFHakJLLE8sV0FEWkYsT0FBTyxDQUFDLFNBQUQsQyx5QkFBUixNQUNhRSxPQURiLFNBQzZCSixTQUQ3QixDQUN1QztBQUFBO0FBQUE7O0FBQUEsc0RBRWEsSUFGYjs7QUFBQSx5Q0FJVixFQUpVO0FBQUE7O0FBS25DSyxRQUFBQSxNQUFNLEdBQUc7QUFDTCxlQUFLQyxrQkFBTCxHQUEwQixLQUFLQyxJQUFMLENBQVVDLFlBQVYsQ0FBdUJQLGtCQUF2QixDQUExQjtBQUVIOztBQUNEUSxRQUFBQSxLQUFLLEdBQUc7QUFDSixjQUFJLEtBQUtILGtCQUFULEVBQTZCO0FBQ3pCLGlCQUFLQSxrQkFBTCxDQUF3QkksSUFBeEIsQ0FBNkIsZ0JBQTdCO0FBQ0FDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBQ0EsaUJBQUtDLFlBQUwsQ0FBa0IsTUFBTTtBQUNwQixrQkFBSSxLQUFLUCxrQkFBVCxFQUNJLEtBQUtBLGtCQUFMLENBQXdCUSxTQUF4QixDQUFrQyxnQkFBbEMsRUFBb0QsR0FBcEQ7QUFDUCxhQUhELEVBR0csQ0FISDtBQUlIO0FBQ0o7O0FBbEJrQyxPIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgQW5pbWF0aW9uQ29tcG9uZW50LCBBbmltYXRpb25DbGlwIH0gZnJvbSAnY2MnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1hpYW9GZWknKVxuZXhwb3J0IGNsYXNzIFhpYW9GZWkgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgYW5pbWF0aW9uQ29tcG9uZW50OiBBbmltYXRpb25Db21wb25lbnQgfCBudWxsID0gbnVsbDtcblxuICAgIGNsaXBzOiBBbmltYXRpb25DbGlwW10gPSBbXTtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uQ29tcG9uZW50ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChBbmltYXRpb25Db21wb25lbnQpO1xuXG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAodGhpcy5hbmltYXRpb25Db21wb25lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uQ29tcG9uZW50LnBsYXkoXCJYaWFvRmVpSWRlbDAwMVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pKt5pS+5LqGIFhpYW9GZWlJZGVsMDAxXCIpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbkNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25Db21wb25lbnQuY3Jvc3NGYWRlKCdYaWFvRmVpVGFsazAwMScsIDAuMyk7XG4gICAgICAgICAgICB9LCAzKVxuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbiJdfQ==