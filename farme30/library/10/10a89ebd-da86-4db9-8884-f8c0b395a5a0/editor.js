System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, StateMachine, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("StateMachine", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "10a89692oZNuYiE+MCzlaWg", "StateMachine", _context.meta);

      _export("StateMachine", StateMachine = class StateMachine {
        constructor() {
          _defineProperty(this, "stateMap", new Map());
        }

        /** 初始化状态机 设置启动状态
         * @param name 启动状态名
         * @param arg 参数
         */
        Init(name, arg) {
          let state = this.stateMap.get(name);

          if (state) {
            state.Start(arg);
            this.nowState = state;
          } else {
            console.error("开启状态 ", name, " 失败");
          }
        }
        /**添加状态到状态机中 */


        AddState(stateName, state) {
          this.stateMap.set(stateName, state);
        }
        /**从状态机中移除状态 */


        RemoveState(stateName) {
          if (this.stateMap.delete(stateName)) {
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


        ChangeState(from, to, arg1, arg2) {
          let formState = this.stateMap.get(from);
          let toState = this.stateMap.get(to);

          if (formState && toState) {
            if (toState.canFromStateName.indexOf(from) != -1 && formState.canToStateName.indexOf(to) != -1) {
              formState.End(arg1);
              this.nowState = toState;
              toState.Start(arg2);
              console.warn("切换状态成功:", from, "-->", to);
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
        /**从当前状态强制转到某个状态
         * @param to 
         * @param arg1 
         * @param arg2 
         */


        ToState(to, arg1, arg2) {
          let formState = this.nowState;
          let toState = this.stateMap.get(to);

          if (formState && toState) {
            formState.End(arg1);
            this.nowState = toState;
            toState.Start(arg2);
            console.log("切换状态成功");
            return true;
          } else {
            console.error("切换状态失败:", formState.stateName, "-->", to);
            return false;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vU3RhdGVNYWNoaW5lL1N0YXRlTWFjaGluZS50cyJdLCJuYW1lcyI6WyJTdGF0ZU1hY2hpbmUiLCJNYXAiLCJJbml0IiwibmFtZSIsImFyZyIsInN0YXRlIiwic3RhdGVNYXAiLCJnZXQiLCJTdGFydCIsIm5vd1N0YXRlIiwiY29uc29sZSIsImVycm9yIiwiQWRkU3RhdGUiLCJzdGF0ZU5hbWUiLCJzZXQiLCJSZW1vdmVTdGF0ZSIsImRlbGV0ZSIsImxvZyIsIndhcm4iLCJDaGFuZ2VTdGF0ZSIsImZyb20iLCJ0byIsImFyZzEiLCJhcmcyIiwiZm9ybVN0YXRlIiwidG9TdGF0ZSIsImNhbkZyb21TdGF0ZU5hbWUiLCJpbmRleE9mIiwiY2FuVG9TdGF0ZU5hbWUiLCJFbmQiLCJUb1N0YXRlIl0sIm1hcHBpbmdzIjoiOzs7aUJBRWFBLFk7Ozs7Ozs7Ozs7Ozs7Ozs4QkFBQUEsWSxHQUFOLE1BQU1BLFlBQU4sQ0FBbUI7QUFBQTtBQUFBLDRDQUNrQixJQUFJQyxHQUFKLEVBRGxCO0FBQUE7O0FBSXRCO0FBQ0o7QUFDQTtBQUNBO0FBQ0lDLFFBQUFBLElBQUksQ0FBQ0MsSUFBRCxFQUFlQyxHQUFmLEVBQWdDO0FBQ2hDLGNBQUlDLEtBQUssR0FBRyxLQUFLQyxRQUFMLENBQWNDLEdBQWQsQ0FBa0JKLElBQWxCLENBQVo7O0FBQ0EsY0FBSUUsS0FBSixFQUFXO0FBQ1BBLFlBQUFBLEtBQUssQ0FBQ0csS0FBTixDQUFZSixHQUFaO0FBQ0EsaUJBQUtLLFFBQUwsR0FBZ0JKLEtBQWhCO0FBQ0gsV0FIRCxNQUdPO0FBQ0hLLFlBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLE9BQWQsRUFBdUJSLElBQXZCLEVBQTZCLEtBQTdCO0FBQ0g7QUFDSjtBQUVEOzs7QUFDQVMsUUFBQUEsUUFBUSxDQUFDQyxTQUFELEVBQW9CUixLQUFwQixFQUF5QztBQUM3QyxlQUFLQyxRQUFMLENBQWNRLEdBQWQsQ0FBa0JELFNBQWxCLEVBQTZCUixLQUE3QjtBQUNIO0FBQ0Q7OztBQUNBVSxRQUFBQSxXQUFXLENBQUNGLFNBQUQsRUFBMEI7QUFDakMsY0FBSSxLQUFLUCxRQUFMLENBQWNVLE1BQWQsQ0FBcUJILFNBQXJCLENBQUosRUFBcUM7QUFDakNILFlBQUFBLE9BQU8sQ0FBQ08sR0FBUixDQUFZLElBQVosRUFBa0JKLFNBQWxCLEVBQTZCLE1BQTdCO0FBQ0gsV0FGRCxNQUVPO0FBQ0hILFlBQUFBLE9BQU8sQ0FBQ1EsSUFBUixDQUFhLElBQWIsRUFBbUJMLFNBQW5CLEVBQThCLE1BQTlCO0FBQ0g7QUFDSjtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0lNLFFBQUFBLFdBQVcsQ0FBQ0MsSUFBRCxFQUFlQyxFQUFmLEVBQTJCQyxJQUEzQixFQUF1Q0MsSUFBdkMsRUFBNEQ7QUFDbkUsY0FBSUMsU0FBUyxHQUFHLEtBQUtsQixRQUFMLENBQWNDLEdBQWQsQ0FBa0JhLElBQWxCLENBQWhCO0FBQ0EsY0FBSUssT0FBTyxHQUFHLEtBQUtuQixRQUFMLENBQWNDLEdBQWQsQ0FBa0JjLEVBQWxCLENBQWQ7O0FBQ0EsY0FBSUcsU0FBUyxJQUFJQyxPQUFqQixFQUEwQjtBQUN0QixnQkFBSUEsT0FBTyxDQUFDQyxnQkFBUixDQUF5QkMsT0FBekIsQ0FBaUNQLElBQWpDLEtBQTBDLENBQUMsQ0FBM0MsSUFBZ0RJLFNBQVMsQ0FBQ0ksY0FBVixDQUF5QkQsT0FBekIsQ0FBaUNOLEVBQWpDLEtBQXdDLENBQUMsQ0FBN0YsRUFBZ0c7QUFDNUZHLGNBQUFBLFNBQVMsQ0FBQ0ssR0FBVixDQUFjUCxJQUFkO0FBQ0EsbUJBQUtiLFFBQUwsR0FBZ0JnQixPQUFoQjtBQUNBQSxjQUFBQSxPQUFPLENBQUNqQixLQUFSLENBQWNlLElBQWQ7QUFDQWIsY0FBQUEsT0FBTyxDQUFDUSxJQUFSLENBQWEsU0FBYixFQUF3QkUsSUFBeEIsRUFBOEIsS0FBOUIsRUFBcUNDLEVBQXJDO0FBQ0EscUJBQU8sSUFBUDtBQUNILGFBTkQsTUFNTztBQUNIWCxjQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyxTQUFkLEVBQXlCUyxJQUF6QixFQUErQixLQUEvQixFQUFzQ0MsRUFBdEM7QUFDQSxxQkFBTyxLQUFQO0FBQ0g7QUFFSixXQVpELE1BWU87QUFDSFgsWUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWMsU0FBZCxFQUF5QlMsSUFBekIsRUFBK0IsS0FBL0IsRUFBc0NDLEVBQXRDO0FBQ0EsbUJBQU8sS0FBUDtBQUNIO0FBQ0o7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7QUFDSVMsUUFBQUEsT0FBTyxDQUFDVCxFQUFELEVBQWFDLElBQWIsRUFBeUJDLElBQXpCLEVBQThDO0FBQ2pELGNBQUlDLFNBQVMsR0FBRyxLQUFLZixRQUFyQjtBQUNBLGNBQUlnQixPQUFPLEdBQUcsS0FBS25CLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQmMsRUFBbEIsQ0FBZDs7QUFDQSxjQUFJRyxTQUFTLElBQUlDLE9BQWpCLEVBQTBCO0FBQ3RCRCxZQUFBQSxTQUFTLENBQUNLLEdBQVYsQ0FBY1AsSUFBZDtBQUNBLGlCQUFLYixRQUFMLEdBQWdCZ0IsT0FBaEI7QUFDQUEsWUFBQUEsT0FBTyxDQUFDakIsS0FBUixDQUFjZSxJQUFkO0FBQ0FiLFlBQUFBLE9BQU8sQ0FBQ08sR0FBUixDQUFZLFFBQVo7QUFDQSxtQkFBTyxJQUFQO0FBQ0gsV0FORCxNQU1PO0FBQ0hQLFlBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLFNBQWQsRUFBeUJhLFNBQVMsQ0FBQ1gsU0FBbkMsRUFBOEMsS0FBOUMsRUFBcURRLEVBQXJEO0FBQ0EsbUJBQU8sS0FBUDtBQUNIO0FBQ0o7O0FBMUVxQixPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVN0YXRlIH0gZnJvbSBcIi4vSVN0YXRlXCI7XG5cbmV4cG9ydCBjbGFzcyBTdGF0ZU1hY2hpbmUge1xuICAgIHByaXZhdGUgc3RhdGVNYXA6IE1hcDxzdHJpbmcsIElTdGF0ZT4gPSBuZXcgTWFwPHN0cmluZywgSVN0YXRlPigpO1xuICAgIHByaXZhdGUgbm93U3RhdGUhOiBJU3RhdGU7XG5cbiAgICAvKiog5Yid5aeL5YyW54q25oCB5py6IOiuvue9ruWQr+WKqOeKtuaAgVxuICAgICAqIEBwYXJhbSBuYW1lIOWQr+WKqOeKtuaAgeWQjVxuICAgICAqIEBwYXJhbSBhcmcg5Y+C5pWwXG4gICAgICovXG4gICAgSW5pdChuYW1lOiBzdHJpbmcsIGFyZz86IGFueSk6IHZvaWQge1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlTWFwLmdldChuYW1lKTtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5TdGFydChhcmcpO1xuICAgICAgICAgICAgdGhpcy5ub3dTdGF0ZSA9IHN0YXRlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuW8gOWQr+eKtuaAgSBcIiwgbmFtZSwgXCIg5aSx6LSlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq5re75Yqg54q25oCB5Yiw54q25oCB5py65LitICovXG4gICAgQWRkU3RhdGUoc3RhdGVOYW1lOiBzdHJpbmcsIHN0YXRlOiBJU3RhdGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZU1hcC5zZXQoc3RhdGVOYW1lLCBzdGF0ZSk7XG4gICAgfVxuICAgIC8qKuS7jueKtuaAgeacuuS4reenu+mZpOeKtuaAgSAqL1xuICAgIFJlbW92ZVN0YXRlKHN0YXRlTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlTWFwLmRlbGV0ZShzdGF0ZU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIueKtuaAgVwiLCBzdGF0ZU5hbWUsIFwi56e76Zmk5oiQ5YqfXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwi54q25oCBXCIsIHN0YXRlTmFtZSwgXCLnp7vpmaTlpLHotKVcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOWIh+aNoueKtuaAgVxuICAgICAqIEBwYXJhbSBmcm9tIOS7jumCo+S4queKtuaAgVxuICAgICAqIEBwYXJhbSB0byDliIfmjaLliLDpgqPkuKrnirbmgIFcbiAgICAgKiBAcGFyYW0gYXJnMSBmcm9t5Y+C5pWwXG4gICAgICogQHBhcmFtIGFyZzIgdG/lj4LmlbBcbiAgICAgKi9cbiAgICBDaGFuZ2VTdGF0ZShmcm9tOiBzdHJpbmcsIHRvOiBzdHJpbmcsIGFyZzE/OiBhbnksIGFyZzI/OiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGZvcm1TdGF0ZSA9IHRoaXMuc3RhdGVNYXAuZ2V0KGZyb20pO1xuICAgICAgICBsZXQgdG9TdGF0ZSA9IHRoaXMuc3RhdGVNYXAuZ2V0KHRvKTtcbiAgICAgICAgaWYgKGZvcm1TdGF0ZSAmJiB0b1N0YXRlKSB7XG4gICAgICAgICAgICBpZiAodG9TdGF0ZS5jYW5Gcm9tU3RhdGVOYW1lLmluZGV4T2YoZnJvbSkgIT0gLTEgJiYgZm9ybVN0YXRlLmNhblRvU3RhdGVOYW1lLmluZGV4T2YodG8pICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgZm9ybVN0YXRlLkVuZChhcmcxKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vd1N0YXRlID0gdG9TdGF0ZTtcbiAgICAgICAgICAgICAgICB0b1N0YXRlLlN0YXJ0KGFyZzIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIuWIh+aNoueKtuaAgeaIkOWKnzpcIiwgZnJvbSwgXCItLT5cIiwgdG8pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5YiH5o2i54q25oCB5aSx6LSlOlwiLCBmcm9tLCBcIi0tPlwiLCB0byk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5YiH5o2i54q25oCB5aSx6LSlOlwiLCBmcm9tLCBcIi0tPlwiLCB0byk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoq5LuO5b2T5YmN54q25oCB5by65Yi26L2s5Yiw5p+Q5Liq54q25oCBXG4gICAgICogQHBhcmFtIHRvIFxuICAgICAqIEBwYXJhbSBhcmcxIFxuICAgICAqIEBwYXJhbSBhcmcyIFxuICAgICAqL1xuICAgIFRvU3RhdGUodG86IHN0cmluZywgYXJnMT86IGFueSwgYXJnMj86IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgZm9ybVN0YXRlID0gdGhpcy5ub3dTdGF0ZTtcbiAgICAgICAgbGV0IHRvU3RhdGUgPSB0aGlzLnN0YXRlTWFwLmdldCh0byk7XG4gICAgICAgIGlmIChmb3JtU3RhdGUgJiYgdG9TdGF0ZSkge1xuICAgICAgICAgICAgZm9ybVN0YXRlLkVuZChhcmcxKTtcbiAgICAgICAgICAgIHRoaXMubm93U3RhdGUgPSB0b1N0YXRlO1xuICAgICAgICAgICAgdG9TdGF0ZS5TdGFydChhcmcyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5YiH5o2i54q25oCB5oiQ5YqfXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5YiH5o2i54q25oCB5aSx6LSlOlwiLCBmb3JtU3RhdGUuc3RhdGVOYW1lLCBcIi0tPlwiLCB0byk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=