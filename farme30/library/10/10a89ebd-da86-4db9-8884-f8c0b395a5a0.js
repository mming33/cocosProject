System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, StateMachine;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "10a89692oZNuYiE+MCzlaWg", "StateMachine", _context.meta);

      _export("StateMachine", StateMachine = /*#__PURE__*/function () {
        function StateMachine() {}

        /** 初始化状态机 设置启动状态
         * @param name 启动状态名
         * @param arg 参数
         */
        StateMachine.Init = function Init(name, arg) {
          this.OpenState(name, arg);
        };

        StateMachine.AddState = function AddState(stateName, state) {
          this.stateMap.set(stateName, state);
        };

        StateMachine.RemoveState = function RemoveState(stateName) {
          if (this.stateMap["delete"](stateName)) {
            console.log("状态", stateName, "移除成功");
          } else {
            console.warn("状态", stateName, "移除失败");
          }
        }
        /** 切换状态
         * @param from 从那个状态
         * @param to 切换到那个状态
         * @param arg1 from参数
         * @param arg2 to参数
         */
        ;

        StateMachine.ChangeState = function ChangeState(from, to, arg1, arg2) {
          var formState = this.stateMap.get(from);
          var toState = this.stateMap.get(to);

          if (formState && toState) {
            if (toState.canFromStateName.indexOf(from) != -1 && formState.canToStateName.indexOf(to) != -1) {
              formState.End(arg1);
              toState.Start(arg2);
              this.nowState = toState;
              console.log("切换状态成功");
              return true;
            } else {
              console.error("切换状态失败:", from, "-->", to);
              return false;
            }
          } else {
            console.error("切换状态失败:", from, "-->", to);
            return false;
          }
        }
        /**从当前状态转到某个状态
         * @param to 
         * @param arg1 
         * @param arg2 
         */
        ;

        StateMachine.ToState = function ToState(to, arg1, arg2) {
          var formState = this.nowState;
          var toState = this.stateMap.get(to);

          if (formState && toState) {
            if (toState.canFromStateName.indexOf(this.nowState.stateName) != -1 && formState.canToStateName.indexOf(to) != -1) {
              formState.End(arg1);
              toState.Start(arg2);
              this.nowState = toState;
              console.log("切换状态成功");
              return true;
            } else {
              console.error("切换状态失败:", this.nowState.stateName, "-->", to);
              return false;
            }
          } else {
            console.error("切换状态失败:", this.nowState.stateName, "-->", to);
            return false;
          }
        }
        /**跳转到下个状态 (canToStateName中的第一个状态) */
        ;

        StateMachine.NextState = function NextState(arg1, arg2) {
          var formState = this.nowState;
          var toState;

          if (formState.canToStateName.length >= 1) {
            toState = this.stateMap.get(formState.canToStateName[0]);
          }

          if (formState && toState) {
            if (toState.canFromStateName.indexOf(this.nowState.stateName) != -1 && formState.canToStateName.indexOf(toState.stateName) != -1) {
              formState.End(arg1);
              toState.Start(arg2);
              this.nowState = toState;
              console.log("切换状态成功");
              console.log("切换状态成功:", formState.stateName, "-->", toState.stateName);
              return true;
            } else {
              var _toState;

              console.error("切换状态失败:", this.nowState.stateName, "-->", (_toState = toState) === null || _toState === void 0 ? void 0 : _toState.stateName);
              return false;
            }
          } else {
            var _toState2;

            console.error("切换状态失败:", this.nowState.stateName, "-->", (_toState2 = toState) === null || _toState2 === void 0 ? void 0 : _toState2.stateName);
            return false;
          }
        }
        /**获取当前状态 */
        ;

        StateMachine.GetNowState = function GetNowState() {
          return this.nowState;
        }
        /**开启状态
         * @param name 
         * @param arg 
         */
        ;

        StateMachine.OpenState = function OpenState(name, arg) {
          var state = this.stateMap.get(name);

          if (state) {
            state.Start(arg);
            this.nowState = state;
            return state;
          } else {
            console.error("开启状态 ", name, " 失败");
            return null;
          }
        }
        /**关闭当前状态 */
        ;

        StateMachine.CloseState = function CloseState(arg) {
          var state = this.nowState;

          if (state) {
            state.End(arg);
          } else {
            console.error("开启状态 ", name, " 失败");
          }
        };

        return StateMachine;
      }());

      _defineProperty(StateMachine, "stateMap", new Map());

      _defineProperty(StateMachine, "nowState", void 0);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vU3RhdGVNYWNoaW5lL1N0YXRlTWFjaGluZS50cyJdLCJuYW1lcyI6WyJTdGF0ZU1hY2hpbmUiLCJJbml0IiwibmFtZSIsImFyZyIsIk9wZW5TdGF0ZSIsIkFkZFN0YXRlIiwic3RhdGVOYW1lIiwic3RhdGUiLCJzdGF0ZU1hcCIsInNldCIsIlJlbW92ZVN0YXRlIiwiY29uc29sZSIsImxvZyIsIndhcm4iLCJDaGFuZ2VTdGF0ZSIsImZyb20iLCJ0byIsImFyZzEiLCJhcmcyIiwiZm9ybVN0YXRlIiwiZ2V0IiwidG9TdGF0ZSIsImNhbkZyb21TdGF0ZU5hbWUiLCJpbmRleE9mIiwiY2FuVG9TdGF0ZU5hbWUiLCJFbmQiLCJTdGFydCIsIm5vd1N0YXRlIiwiZXJyb3IiLCJUb1N0YXRlIiwiTmV4dFN0YXRlIiwibGVuZ3RoIiwiR2V0Tm93U3RhdGUiLCJDbG9zZVN0YXRlIiwiTWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUNhQSxZOzs7QUFNVDtBQUNKO0FBQ0E7QUFDQTtxQkFDV0MsSSxHQUFQLGNBQVlDLElBQVosRUFBMEJDLEdBQTFCLEVBQXFDO0FBQ2pDLGVBQUtDLFNBQUwsQ0FBZUYsSUFBZixFQUFxQkMsR0FBckI7QUFDSCxTOztxQkFFTUUsUSxHQUFQLGtCQUFnQkMsU0FBaEIsRUFBbUNDLEtBQW5DLEVBQXdEO0FBQ3BELGVBQUtDLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQkgsU0FBbEIsRUFBNkJDLEtBQTdCO0FBQ0gsUzs7cUJBQ01HLFcsR0FBUCxxQkFBbUJKLFNBQW5CLEVBQTRDO0FBQ3hDLGNBQUksS0FBS0UsUUFBTCxXQUFxQkYsU0FBckIsQ0FBSixFQUFxQztBQUNqQ0ssWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWixFQUFrQk4sU0FBbEIsRUFBNkIsTUFBN0I7QUFDSCxXQUZELE1BRU87QUFDSEssWUFBQUEsT0FBTyxDQUFDRSxJQUFSLENBQWEsSUFBYixFQUFtQlAsU0FBbkIsRUFBOEIsTUFBOUI7QUFDSDtBQUNKO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7cUJBQ1dRLFcsR0FBUCxxQkFBbUJDLElBQW5CLEVBQWlDQyxFQUFqQyxFQUE2Q0MsSUFBN0MsRUFBeURDLElBQXpELEVBQThFO0FBQzFFLGNBQUlDLFNBQVMsR0FBRyxLQUFLWCxRQUFMLENBQWNZLEdBQWQsQ0FBa0JMLElBQWxCLENBQWhCO0FBQ0EsY0FBSU0sT0FBTyxHQUFHLEtBQUtiLFFBQUwsQ0FBY1ksR0FBZCxDQUFrQkosRUFBbEIsQ0FBZDs7QUFDQSxjQUFJRyxTQUFTLElBQUlFLE9BQWpCLEVBQTBCO0FBQ3RCLGdCQUFJQSxPQUFPLENBQUNDLGdCQUFSLENBQXlCQyxPQUF6QixDQUFpQ1IsSUFBakMsS0FBMEMsQ0FBQyxDQUEzQyxJQUFnREksU0FBUyxDQUFDSyxjQUFWLENBQXlCRCxPQUF6QixDQUFpQ1AsRUFBakMsS0FBd0MsQ0FBQyxDQUE3RixFQUFnRztBQUM1RkcsY0FBQUEsU0FBUyxDQUFDTSxHQUFWLENBQWNSLElBQWQ7QUFDQUksY0FBQUEsT0FBTyxDQUFDSyxLQUFSLENBQWNSLElBQWQ7QUFDQSxtQkFBS1MsUUFBTCxHQUFnQk4sT0FBaEI7QUFDQVYsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBLHFCQUFPLElBQVA7QUFDSCxhQU5ELE1BTU87QUFDSEQsY0FBQUEsT0FBTyxDQUFDaUIsS0FBUixDQUFjLFNBQWQsRUFBeUJiLElBQXpCLEVBQStCLEtBQS9CLEVBQXNDQyxFQUF0QztBQUNBLHFCQUFPLEtBQVA7QUFDSDtBQUVKLFdBWkQsTUFZTztBQUNITCxZQUFBQSxPQUFPLENBQUNpQixLQUFSLENBQWMsU0FBZCxFQUF5QmIsSUFBekIsRUFBK0IsS0FBL0IsRUFBc0NDLEVBQXRDO0FBQ0EsbUJBQU8sS0FBUDtBQUNIO0FBQ0o7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7cUJBQ1dhLE8sR0FBUCxpQkFBZWIsRUFBZixFQUEyQkMsSUFBM0IsRUFBdUNDLElBQXZDLEVBQW1EO0FBQy9DLGNBQUlDLFNBQVMsR0FBRyxLQUFLUSxRQUFyQjtBQUNBLGNBQUlOLE9BQU8sR0FBRyxLQUFLYixRQUFMLENBQWNZLEdBQWQsQ0FBa0JKLEVBQWxCLENBQWQ7O0FBQ0EsY0FBSUcsU0FBUyxJQUFJRSxPQUFqQixFQUEwQjtBQUN0QixnQkFBSUEsT0FBTyxDQUFDQyxnQkFBUixDQUF5QkMsT0FBekIsQ0FBaUMsS0FBS0ksUUFBTCxDQUFjckIsU0FBL0MsS0FBNkQsQ0FBQyxDQUE5RCxJQUFtRWEsU0FBUyxDQUFDSyxjQUFWLENBQXlCRCxPQUF6QixDQUFpQ1AsRUFBakMsS0FBd0MsQ0FBQyxDQUFoSCxFQUFtSDtBQUMvR0csY0FBQUEsU0FBUyxDQUFDTSxHQUFWLENBQWNSLElBQWQ7QUFDQUksY0FBQUEsT0FBTyxDQUFDSyxLQUFSLENBQWNSLElBQWQ7QUFDQSxtQkFBS1MsUUFBTCxHQUFnQk4sT0FBaEI7QUFDQVYsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBLHFCQUFPLElBQVA7QUFDSCxhQU5ELE1BTU87QUFDSEQsY0FBQUEsT0FBTyxDQUFDaUIsS0FBUixDQUFjLFNBQWQsRUFBeUIsS0FBS0QsUUFBTCxDQUFjckIsU0FBdkMsRUFBa0QsS0FBbEQsRUFBeURVLEVBQXpEO0FBQ0EscUJBQU8sS0FBUDtBQUNIO0FBRUosV0FaRCxNQVlPO0FBQ0hMLFlBQUFBLE9BQU8sQ0FBQ2lCLEtBQVIsQ0FBYyxTQUFkLEVBQXlCLEtBQUtELFFBQUwsQ0FBY3JCLFNBQXZDLEVBQWtELEtBQWxELEVBQXlEVSxFQUF6RDtBQUNBLG1CQUFPLEtBQVA7QUFDSDtBQUNKO0FBRUQ7OztxQkFDT2MsUyxHQUFQLG1CQUFpQmIsSUFBakIsRUFBNkJDLElBQTdCLEVBQXlDO0FBQ3JDLGNBQUlDLFNBQVMsR0FBRyxLQUFLUSxRQUFyQjtBQUNBLGNBQUlOLE9BQUo7O0FBQ0EsY0FBSUYsU0FBUyxDQUFDSyxjQUFWLENBQXlCTyxNQUF6QixJQUFtQyxDQUF2QyxFQUEwQztBQUN0Q1YsWUFBQUEsT0FBTyxHQUFHLEtBQUtiLFFBQUwsQ0FBY1ksR0FBZCxDQUFrQkQsU0FBUyxDQUFDSyxjQUFWLENBQXlCLENBQXpCLENBQWxCLENBQVY7QUFDSDs7QUFDRCxjQUFJTCxTQUFTLElBQUlFLE9BQWpCLEVBQTBCO0FBQ3RCLGdCQUFJQSxPQUFPLENBQUNDLGdCQUFSLENBQXlCQyxPQUF6QixDQUFpQyxLQUFLSSxRQUFMLENBQWNyQixTQUEvQyxLQUE2RCxDQUFDLENBQTlELElBQW1FYSxTQUFTLENBQUNLLGNBQVYsQ0FBeUJELE9BQXpCLENBQWlDRixPQUFPLENBQUNmLFNBQXpDLEtBQXVELENBQUMsQ0FBL0gsRUFBa0k7QUFDOUhhLGNBQUFBLFNBQVMsQ0FBQ00sR0FBVixDQUFjUixJQUFkO0FBQ0FJLGNBQUFBLE9BQU8sQ0FBQ0ssS0FBUixDQUFjUixJQUFkO0FBQ0EsbUJBQUtTLFFBQUwsR0FBZ0JOLE9BQWhCO0FBQ0FWLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQUQsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1Qk8sU0FBUyxDQUFDYixTQUFqQyxFQUE0QyxLQUE1QyxFQUFtRGUsT0FBTyxDQUFDZixTQUEzRDtBQUNBLHFCQUFPLElBQVA7QUFDSCxhQVBELE1BT087QUFBQTs7QUFDSEssY0FBQUEsT0FBTyxDQUFDaUIsS0FBUixDQUFjLFNBQWQsRUFBeUIsS0FBS0QsUUFBTCxDQUFjckIsU0FBdkMsRUFBa0QsS0FBbEQsY0FBeURlLE9BQXpELDZDQUF5RCxTQUFTZixTQUFsRTtBQUNBLHFCQUFPLEtBQVA7QUFDSDtBQUVKLFdBYkQsTUFhTztBQUFBOztBQUNISyxZQUFBQSxPQUFPLENBQUNpQixLQUFSLENBQWMsU0FBZCxFQUF5QixLQUFLRCxRQUFMLENBQWNyQixTQUF2QyxFQUFrRCxLQUFsRCxlQUF5RGUsT0FBekQsOENBQXlELFVBQVNmLFNBQWxFO0FBQ0EsbUJBQU8sS0FBUDtBQUNIO0FBQ0o7QUFFRDs7O3FCQUNPMEIsVyxHQUFQLHVCQUE2QjtBQUN6QixpQkFBTyxLQUFLTCxRQUFaO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7QUFDQTs7O3FCQUNXdkIsUyxHQUFQLG1CQUFpQkYsSUFBakIsRUFBK0JDLEdBQS9CLEVBQXlEO0FBQ3JELGNBQUlJLEtBQUssR0FBRyxLQUFLQyxRQUFMLENBQWNZLEdBQWQsQ0FBa0JsQixJQUFsQixDQUFaOztBQUNBLGNBQUlLLEtBQUosRUFBVztBQUNQQSxZQUFBQSxLQUFLLENBQUNtQixLQUFOLENBQVl2QixHQUFaO0FBQ0EsaUJBQUt3QixRQUFMLEdBQWdCcEIsS0FBaEI7QUFDQSxtQkFBT0EsS0FBUDtBQUNILFdBSkQsTUFJTztBQUNISSxZQUFBQSxPQUFPLENBQUNpQixLQUFSLENBQWMsT0FBZCxFQUF1QjFCLElBQXZCLEVBQTZCLEtBQTdCO0FBQ0EsbUJBQU8sSUFBUDtBQUNIO0FBQ0o7QUFDRDs7O3FCQUNPK0IsVSxHQUFQLG9CQUFrQjlCLEdBQWxCLEVBQW1DO0FBQy9CLGNBQUlJLEtBQUssR0FBRyxLQUFLb0IsUUFBakI7O0FBQ0EsY0FBSXBCLEtBQUosRUFBVztBQUNQQSxZQUFBQSxLQUFLLENBQUNrQixHQUFOLENBQVV0QixHQUFWO0FBQ0gsV0FGRCxNQUVPO0FBQ0hRLFlBQUFBLE9BQU8sQ0FBQ2lCLEtBQVIsQ0FBYyxPQUFkLEVBQXVCMUIsSUFBdkIsRUFBNkIsS0FBN0I7QUFDSDtBQUNKLFM7Ozs7O3NCQW5JUUYsWSxjQUNzQyxJQUFJa0MsR0FBSixFOztzQkFEdENsQyxZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVN0YXRlIH0gZnJvbSBcIi4vSVN0YXRlXCI7XG5leHBvcnQgY2xhc3MgU3RhdGVNYWNoaW5lIHtcbiAgICBwcml2YXRlIHN0YXRpYyBzdGF0ZU1hcDogTWFwPHN0cmluZywgSVN0YXRlPiA9IG5ldyBNYXA8c3RyaW5nLCBJU3RhdGU+KCk7XG4gICAgcHJpdmF0ZSBzdGF0aWMgbm93U3RhdGU6IElTdGF0ZTtcblxuXG5cbiAgICAvKiog5Yid5aeL5YyW54q25oCB5py6IOiuvue9ruWQr+WKqOeKtuaAgVxuICAgICAqIEBwYXJhbSBuYW1lIOWQr+WKqOeKtuaAgeWQjVxuICAgICAqIEBwYXJhbSBhcmcg5Y+C5pWwXG4gICAgICovXG4gICAgc3RhdGljIEluaXQobmFtZTogc3RyaW5nLCBhcmc/OiBhbnkpIHtcbiAgICAgICAgdGhpcy5PcGVuU3RhdGUobmFtZSwgYXJnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgQWRkU3RhdGUoc3RhdGVOYW1lOiBzdHJpbmcsIHN0YXRlOiBJU3RhdGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZU1hcC5zZXQoc3RhdGVOYW1lLCBzdGF0ZSk7XG4gICAgfVxuICAgIHN0YXRpYyBSZW1vdmVTdGF0ZShzdGF0ZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZU1hcC5kZWxldGUoc3RhdGVOYW1lKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLnirbmgIFcIiwgc3RhdGVOYW1lLCBcIuenu+mZpOaIkOWKn1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIueKtuaAgVwiLCBzdGF0ZU5hbWUsIFwi56e76Zmk5aSx6LSlXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDliIfmjaLnirbmgIFcbiAgICAgKiBAcGFyYW0gZnJvbSDku47pgqPkuKrnirbmgIFcbiAgICAgKiBAcGFyYW0gdG8g5YiH5o2i5Yiw6YKj5Liq54q25oCBXG4gICAgICogQHBhcmFtIGFyZzEgZnJvbeWPguaVsFxuICAgICAqIEBwYXJhbSBhcmcyIHRv5Y+C5pWwXG4gICAgICovXG4gICAgc3RhdGljIENoYW5nZVN0YXRlKGZyb206IHN0cmluZywgdG86IHN0cmluZywgYXJnMT86IGFueSwgYXJnMj86IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgZm9ybVN0YXRlID0gdGhpcy5zdGF0ZU1hcC5nZXQoZnJvbSk7XG4gICAgICAgIGxldCB0b1N0YXRlID0gdGhpcy5zdGF0ZU1hcC5nZXQodG8pO1xuICAgICAgICBpZiAoZm9ybVN0YXRlICYmIHRvU3RhdGUpIHtcbiAgICAgICAgICAgIGlmICh0b1N0YXRlLmNhbkZyb21TdGF0ZU5hbWUuaW5kZXhPZihmcm9tKSAhPSAtMSAmJiBmb3JtU3RhdGUuY2FuVG9TdGF0ZU5hbWUuaW5kZXhPZih0bykgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBmb3JtU3RhdGUuRW5kKGFyZzEpO1xuICAgICAgICAgICAgICAgIHRvU3RhdGUuU3RhcnQoYXJnMik7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3dTdGF0ZSA9IHRvU3RhdGU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliIfmjaLnirbmgIHmiJDlip9cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLliIfmjaLnirbmgIHlpLHotKU6XCIsIGZyb20sIFwiLS0+XCIsIHRvKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLliIfmjaLnirbmgIHlpLHotKU6XCIsIGZyb20sIFwiLS0+XCIsIHRvKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKuS7juW9k+WJjeeKtuaAgei9rOWIsOafkOS4queKtuaAgVxuICAgICAqIEBwYXJhbSB0byBcbiAgICAgKiBAcGFyYW0gYXJnMSBcbiAgICAgKiBAcGFyYW0gYXJnMiBcbiAgICAgKi9cbiAgICBzdGF0aWMgVG9TdGF0ZSh0bzogc3RyaW5nLCBhcmcxPzogYW55LCBhcmcyPzogYW55KSB7XG4gICAgICAgIGxldCBmb3JtU3RhdGUgPSB0aGlzLm5vd1N0YXRlO1xuICAgICAgICBsZXQgdG9TdGF0ZSA9IHRoaXMuc3RhdGVNYXAuZ2V0KHRvKTtcbiAgICAgICAgaWYgKGZvcm1TdGF0ZSAmJiB0b1N0YXRlKSB7XG4gICAgICAgICAgICBpZiAodG9TdGF0ZS5jYW5Gcm9tU3RhdGVOYW1lLmluZGV4T2YodGhpcy5ub3dTdGF0ZS5zdGF0ZU5hbWUpICE9IC0xICYmIGZvcm1TdGF0ZS5jYW5Ub1N0YXRlTmFtZS5pbmRleE9mKHRvKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIGZvcm1TdGF0ZS5FbmQoYXJnMSk7XG4gICAgICAgICAgICAgICAgdG9TdGF0ZS5TdGFydChhcmcyKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vd1N0YXRlID0gdG9TdGF0ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWIh+aNoueKtuaAgeaIkOWKn1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuWIh+aNoueKtuaAgeWksei0pTpcIiwgdGhpcy5ub3dTdGF0ZS5zdGF0ZU5hbWUsIFwiLS0+XCIsIHRvKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLliIfmjaLnirbmgIHlpLHotKU6XCIsIHRoaXMubm93U3RhdGUuc3RhdGVOYW1lLCBcIi0tPlwiLCB0byk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirot7PovazliLDkuIvkuKrnirbmgIEgKGNhblRvU3RhdGVOYW1l5Lit55qE56ys5LiA5Liq54q25oCBKSAqL1xuICAgIHN0YXRpYyBOZXh0U3RhdGUoYXJnMT86IGFueSwgYXJnMj86IGFueSkge1xuICAgICAgICBsZXQgZm9ybVN0YXRlID0gdGhpcy5ub3dTdGF0ZTtcbiAgICAgICAgbGV0IHRvU3RhdGU7XG4gICAgICAgIGlmIChmb3JtU3RhdGUuY2FuVG9TdGF0ZU5hbWUubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICAgIHRvU3RhdGUgPSB0aGlzLnN0YXRlTWFwLmdldChmb3JtU3RhdGUuY2FuVG9TdGF0ZU5hbWVbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtU3RhdGUgJiYgdG9TdGF0ZSkge1xuICAgICAgICAgICAgaWYgKHRvU3RhdGUuY2FuRnJvbVN0YXRlTmFtZS5pbmRleE9mKHRoaXMubm93U3RhdGUuc3RhdGVOYW1lKSAhPSAtMSAmJiBmb3JtU3RhdGUuY2FuVG9TdGF0ZU5hbWUuaW5kZXhPZih0b1N0YXRlLnN0YXRlTmFtZSkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBmb3JtU3RhdGUuRW5kKGFyZzEpO1xuICAgICAgICAgICAgICAgIHRvU3RhdGUuU3RhcnQoYXJnMik7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3dTdGF0ZSA9IHRvU3RhdGU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliIfmjaLnirbmgIHmiJDlip9cIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliIfmjaLnirbmgIHmiJDlip86XCIsIGZvcm1TdGF0ZS5zdGF0ZU5hbWUsIFwiLS0+XCIsIHRvU3RhdGUuc3RhdGVOYW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuWIh+aNoueKtuaAgeWksei0pTpcIiwgdGhpcy5ub3dTdGF0ZS5zdGF0ZU5hbWUsIFwiLS0+XCIsIHRvU3RhdGU/LnN0YXRlTmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5YiH5o2i54q25oCB5aSx6LSlOlwiLCB0aGlzLm5vd1N0YXRlLnN0YXRlTmFtZSwgXCItLT5cIiwgdG9TdGF0ZT8uc3RhdGVOYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKuiOt+WPluW9k+WJjeeKtuaAgSAqL1xuICAgIHN0YXRpYyBHZXROb3dTdGF0ZSgpOiBJU3RhdGUge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3dTdGF0ZTtcbiAgICB9XG5cbiAgICAvKirlvIDlkK/nirbmgIFcbiAgICAgKiBAcGFyYW0gbmFtZSBcbiAgICAgKiBAcGFyYW0gYXJnIFxuICAgICAqL1xuICAgIHN0YXRpYyBPcGVuU3RhdGUobmFtZTogc3RyaW5nLCBhcmc/OiBhbnkpOiBJU3RhdGUgfCBudWxsIHtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZU1hcC5nZXQobmFtZSk7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUuU3RhcnQoYXJnKTtcbiAgICAgICAgICAgIHRoaXMubm93U3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLlvIDlkK/nirbmgIEgXCIsIG5hbWUsIFwiIOWksei0pVwiKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKuWFs+mXreW9k+WJjeeKtuaAgSAqL1xuICAgIHN0YXRpYyBDbG9zZVN0YXRlKGFyZz86IGFueSk6IHZvaWQge1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLm5vd1N0YXRlO1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLkVuZChhcmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuW8gOWQr+eKtuaAgSBcIiwgbmFtZSwgXCIg5aSx6LSlXCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19