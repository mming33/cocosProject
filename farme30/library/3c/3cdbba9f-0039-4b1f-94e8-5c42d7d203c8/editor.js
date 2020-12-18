System.register(["cce.code-quality.cr", "cc", "../Game/MyComponent.js", "../StateMachine/StateMachine.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, find, UITransformComponent, _decorator, Label, MyComponent, StateMachine, _dec, _class, _class2, _temp, _crd, ccclass, property, LoadManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfMyComponent(extras) {
    _reporterNs.report("MyComponent", "../Game/MyComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../StateMachine/StateMachine", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      find = _cc.find;
      UITransformComponent = _cc.UITransformComponent;
      _decorator = _cc._decorator;
      Label = _cc.Label;
    }, function (_GameMyComponentJs) {
      MyComponent = _GameMyComponentJs.MyComponent;
    }, function (_StateMachineStateMachineJs) {
      StateMachine = _StateMachineStateMachineJs.StateMachine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3cdbbqfADlLH5ToXELX0gPI", "LoadManager", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoadManager", LoadManager = (_dec = ccclass('LoadManager'), _dec(_class = (_temp = _class2 = class LoadManager extends (_crd && MyComponent === void 0 ? (_reportPossibleCrUseOfMyComponent({
        error: Error()
      }), MyComponent) : MyComponent) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "sliderMask", void 0);

          _defineProperty(this, "sliderText", void 0);

          _defineProperty(this, "index", 0);
        }

        Init() {
          LoadManager.I = this.node.getComponent(LoadManager);
          this.sliderMask = find("Canvas/Slider/Mask").getComponent(UITransformComponent);
          this.sliderText = find("Canvas/Slider/Text").getComponent(Label);
          this.schedule(this.LoadSlider, 0.01);
        }

        LoadSlider() {
          if (this.sliderMask) {
            if (this.index <= LoadManager.loadIndex / LoadManager.allloadIndex) {
              this.index += 0.01;

              if (this.sliderText) {
                this.sliderText.string = Math.floor(this.index * 100) + "%";
              }
            }

            this.sliderMask.width = 517 * this.index;
          }

          if (LoadManager.loadIndex >= LoadManager.allloadIndex) {
            //---------------------------
            LoadManager.loadIndex = LoadManager.allloadIndex;

            if (this.index >= 1) {
              this.scheduleOnce(() => {
                (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
                  error: Error()
                }), StateMachine) : StateMachine).NextState();
              }, 0.5);
              this.unschedule(this.LoadSlider);
            } //---------------------------

          } else {
            console.log(LoadManager.loadIndex);
          }
        }

      }, _defineProperty(_class2, "I", void 0), _defineProperty(_class2, "loadIndex", 0), _defineProperty(_class2, "allloadIndex", 4), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vTG9hZC9Mb2FkTWFuYWdlci50cyJdLCJuYW1lcyI6WyJmaW5kIiwiVUlUcmFuc2Zvcm1Db21wb25lbnQiLCJfZGVjb3JhdG9yIiwiTGFiZWwiLCJNeUNvbXBvbmVudCIsIlN0YXRlTWFjaGluZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkxvYWRNYW5hZ2VyIiwiSW5pdCIsIkkiLCJub2RlIiwiZ2V0Q29tcG9uZW50Iiwic2xpZGVyTWFzayIsInNsaWRlclRleHQiLCJzY2hlZHVsZSIsIkxvYWRTbGlkZXIiLCJpbmRleCIsImxvYWRJbmRleCIsImFsbGxvYWRJbmRleCIsInN0cmluZyIsIk1hdGgiLCJmbG9vciIsIndpZHRoIiwic2NoZWR1bGVPbmNlIiwiTmV4dFN0YXRlIiwidW5zY2hlZHVsZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQ0EsTUFBQUEsSSxPQUFBQSxJO0FBQTZDQyxNQUFBQSxvQixPQUFBQSxvQjtBQUFzQkMsTUFBQUEsVSxPQUFBQSxVO0FBQTZCQyxNQUFBQSxLLE9BQUFBLEs7O0FBQ2pJQyxNQUFBQSxXLHNCQUFBQSxXOztBQUlBQyxNQUFBQSxZLCtCQUFBQSxZOzs7Ozs7O09BQ0g7QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE8sR0FBd0JMLFU7OzZCQUdqQk0sVyxXQURaRixPQUFPLENBQUMsYUFBRCxDLG1DQUFSLE1BQ2FFLFdBRGI7QUFBQTtBQUFBLHNDQUM2QztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEseUNBUXpCLENBUnlCO0FBQUE7O0FBVXpDQyxRQUFBQSxJQUFJLEdBQUc7QUFDSEQsVUFBQUEsV0FBVyxDQUFDRSxDQUFaLEdBQWdCLEtBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QkosV0FBdkIsQ0FBaEI7QUFDQSxlQUFLSyxVQUFMLEdBQW1CYixJQUFJLENBQUMsb0JBQUQsQ0FBTCxDQUFxQ1ksWUFBckMsQ0FBa0RYLG9CQUFsRCxDQUFsQjtBQUNBLGVBQUthLFVBQUwsR0FBbUJkLElBQUksQ0FBQyxvQkFBRCxDQUFMLENBQXFDWSxZQUFyQyxDQUFrRFQsS0FBbEQsQ0FBbEI7QUFDQSxlQUFLWSxRQUFMLENBQWMsS0FBS0MsVUFBbkIsRUFBK0IsSUFBL0I7QUFDSDs7QUFFREEsUUFBQUEsVUFBVSxHQUFHO0FBQ1QsY0FBSSxLQUFLSCxVQUFULEVBQXFCO0FBQ2pCLGdCQUFJLEtBQUtJLEtBQUwsSUFBY1QsV0FBVyxDQUFDVSxTQUFaLEdBQXdCVixXQUFXLENBQUNXLFlBQXRELEVBQW9FO0FBQ2hFLG1CQUFLRixLQUFMLElBQWMsSUFBZDs7QUFDQSxrQkFBSSxLQUFLSCxVQUFULEVBQXFCO0FBQ2pCLHFCQUFLQSxVQUFMLENBQWdCTSxNQUFoQixHQUF5QkMsSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBS0wsS0FBTCxHQUFhLEdBQXhCLElBQStCLEdBQXhEO0FBQ0g7QUFDSjs7QUFDRCxpQkFBS0osVUFBTCxDQUFnQlUsS0FBaEIsR0FBd0IsTUFBTSxLQUFLTixLQUFuQztBQUVIOztBQUNELGNBQUlULFdBQVcsQ0FBQ1UsU0FBWixJQUF5QlYsV0FBVyxDQUFDVyxZQUF6QyxFQUF1RDtBQUNuRDtBQUNBWCxZQUFBQSxXQUFXLENBQUNVLFNBQVosR0FBd0JWLFdBQVcsQ0FBQ1csWUFBcEM7O0FBQ0EsZ0JBQUksS0FBS0YsS0FBTCxJQUFjLENBQWxCLEVBQXFCO0FBQ2pCLG1CQUFLTyxZQUFMLENBQWtCLE1BQU07QUFDcEI7QUFBQTtBQUFBLGtEQUFhQyxTQUFiO0FBQ0gsZUFGRCxFQUVHLEdBRkg7QUFHQSxtQkFBS0MsVUFBTCxDQUFnQixLQUFLVixVQUFyQjtBQUNILGFBUmtELENBU25EOztBQUNILFdBVkQsTUFVTztBQUNIVyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWXBCLFdBQVcsQ0FBQ1UsU0FBeEI7QUFDSDtBQUNKOztBQXpDd0MsTywrRUFHZCxDLDRDQUNHLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW52YXNDb21wb25lbnQsIE5vZGUsIGRpcmVjdG9yLCBmaW5kLCBHRlhDbGVhckZsYWcsIGxvYWRlciwgU3ByaXRlQ29tcG9uZW50LCBVSVRyYW5zZm9ybUNvbXBvbmVudCwgX2RlY29yYXRvciwgYW5pbWF0aW9uLCBWZWMzLCBMYWJlbCB9IGZyb20gJ2NjJztcbmltcG9ydCB7IE15Q29tcG9uZW50IH0gZnJvbSAnLi4vR2FtZS9NeUNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb3B1cE1hbmFnZXIgfSBmcm9tICcuLi9Qb3B1cC9Qb3B1cE1hbmFnZXInO1xuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi4vU291bmQvU291bmRNYW5hZ2VyJztcbmltcG9ydCB7IElTdGF0ZSB9IGZyb20gJy4uL1N0YXRlTWFjaGluZS9JU3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVNYWNoaW5lIH0gZnJvbSAnLi4vU3RhdGVNYWNoaW5lL1N0YXRlTWFjaGluZSc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnTG9hZE1hbmFnZXInKVxuZXhwb3J0IGNsYXNzIExvYWRNYW5hZ2VyIGV4dGVuZHMgTXlDb21wb25lbnQge1xuICAgIHN0YXRpYyBJOiBMb2FkTWFuYWdlcjtcblxuICAgIHN0YXRpYyBsb2FkSW5kZXg6IG51bWJlciA9IDA7XG4gICAgc3RhdGljIGFsbGxvYWRJbmRleDogbnVtYmVyID0gNDtcblxuICAgIHByaXZhdGUgc2xpZGVyTWFzazogVUlUcmFuc2Zvcm1Db21wb25lbnQgfCB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBzbGlkZXJUZXh0OiBMYWJlbCB8IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIGluZGV4ID0gMDtcblxuICAgIEluaXQoKSB7XG4gICAgICAgIExvYWRNYW5hZ2VyLkkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KExvYWRNYW5hZ2VyKSBhcyBMb2FkTWFuYWdlcjtcbiAgICAgICAgdGhpcy5zbGlkZXJNYXNrID0gKGZpbmQoXCJDYW52YXMvU2xpZGVyL01hc2tcIikgYXMgTm9kZSkuZ2V0Q29tcG9uZW50KFVJVHJhbnNmb3JtQ29tcG9uZW50KSBhcyBVSVRyYW5zZm9ybUNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5zbGlkZXJUZXh0ID0gKGZpbmQoXCJDYW52YXMvU2xpZGVyL1RleHRcIikgYXMgTm9kZSkuZ2V0Q29tcG9uZW50KExhYmVsKSBhcyBMYWJlbDtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLkxvYWRTbGlkZXIsIDAuMDEpO1xuICAgIH1cblxuICAgIExvYWRTbGlkZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnNsaWRlck1hc2spIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV4IDw9IExvYWRNYW5hZ2VyLmxvYWRJbmRleCAvIExvYWRNYW5hZ2VyLmFsbGxvYWRJbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gMC4wMTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zbGlkZXJUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyVGV4dC5zdHJpbmcgPSBNYXRoLmZsb29yKHRoaXMuaW5kZXggKiAxMDApICsgXCIlXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zbGlkZXJNYXNrLndpZHRoID0gNTE3ICogdGhpcy5pbmRleDtcblxuICAgICAgICB9XG4gICAgICAgIGlmIChMb2FkTWFuYWdlci5sb2FkSW5kZXggPj0gTG9hZE1hbmFnZXIuYWxsbG9hZEluZGV4KSB7XG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgTG9hZE1hbmFnZXIubG9hZEluZGV4ID0gTG9hZE1hbmFnZXIuYWxsbG9hZEluZGV4XG4gICAgICAgICAgICBpZiAodGhpcy5pbmRleCA+PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBTdGF0ZU1hY2hpbmUuTmV4dFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgfSwgMC41KVxuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLkxvYWRTbGlkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKExvYWRNYW5hZ2VyLmxvYWRJbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=