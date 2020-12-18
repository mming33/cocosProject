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
        /** 初始化状态机 设置启动状态
         * @param name 启动状态名
         * @param arg 参数
         */
        static Init(name, arg) {
          this.OpenState(name, arg);
        }

        static AddState(stateName, state) {
          this.stateMap.set(stateName, state);
        }

        static RemoveState(stateName) {
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


        static ChangeState(from, to, arg1, arg2) {
          let formState = this.stateMap.get(from);
          let toState = this.stateMap.get(to);

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


        static ToState(to, arg1, arg2) {
          let formState = this.nowState;
          let toState = this.stateMap.get(to);

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


        static NextState(arg1, arg2) {
          let formState = this.nowState;
          let toState;

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


        static GetNowState() {
          return this.nowState;
        }
        /**开启状态
         * @param name 
         * @param arg 
         */


        static OpenState(name, arg) {
          let state = this.stateMap.get(name);

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


        static CloseState(arg) {
          let state = this.nowState;

          if (state) {
            state.End(arg);
          } else {
            console.error("开启状态 ", name, " 失败");
          }
        }

      });

      _defineProperty(StateMachine, "stateMap", new Map());

      _defineProperty(StateMachine, "nowState", void 0);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vU3RhdGVNYWNoaW5lL1N0YXRlTWFjaGluZS50cyJdLCJuYW1lcyI6WyJTdGF0ZU1hY2hpbmUiLCJJbml0IiwibmFtZSIsImFyZyIsIk9wZW5TdGF0ZSIsIkFkZFN0YXRlIiwic3RhdGVOYW1lIiwic3RhdGUiLCJzdGF0ZU1hcCIsInNldCIsIlJlbW92ZVN0YXRlIiwiZGVsZXRlIiwiY29uc29sZSIsImxvZyIsIndhcm4iLCJDaGFuZ2VTdGF0ZSIsImZyb20iLCJ0byIsImFyZzEiLCJhcmcyIiwiZm9ybVN0YXRlIiwiZ2V0IiwidG9TdGF0ZSIsImNhbkZyb21TdGF0ZU5hbWUiLCJpbmRleE9mIiwiY2FuVG9TdGF0ZU5hbWUiLCJFbmQiLCJTdGFydCIsIm5vd1N0YXRlIiwiZXJyb3IiLCJUb1N0YXRlIiwiTmV4dFN0YXRlIiwibGVuZ3RoIiwiR2V0Tm93U3RhdGUiLCJDbG9zZVN0YXRlIiwiTWFwIl0sIm1hcHBpbmdzIjoiOzs7aUJBRWFBLFk7Ozs7Ozs7Ozs7Ozs7Ozs4QkFBQUEsWSxHQUFOLE1BQU1BLFlBQU4sQ0FBbUI7QUFNdEI7QUFDSjtBQUNBO0FBQ0E7QUFDSSxlQUFPQyxJQUFQLENBQVlDLElBQVosRUFBMEJDLEdBQTFCLEVBQXFDO0FBQ2pDLGVBQUtDLFNBQUwsQ0FBZUYsSUFBZixFQUFxQkMsR0FBckI7QUFDSDs7QUFFRCxlQUFPRSxRQUFQLENBQWdCQyxTQUFoQixFQUFtQ0MsS0FBbkMsRUFBd0Q7QUFDcEQsZUFBS0MsUUFBTCxDQUFjQyxHQUFkLENBQWtCSCxTQUFsQixFQUE2QkMsS0FBN0I7QUFDSDs7QUFDRCxlQUFPRyxXQUFQLENBQW1CSixTQUFuQixFQUE0QztBQUN4QyxjQUFJLEtBQUtFLFFBQUwsQ0FBY0csTUFBZCxDQUFxQkwsU0FBckIsQ0FBSixFQUFxQztBQUNqQ00sWUFBQUEsT0FBTyxDQUFDQyxH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QUwsQ0FBY3RCLFNBQXZDLEVBQWtELEtBQWxELGVBQXlEZ0IsT0FBekQsOENBQXlELFVBQVNoQixTQUFsRTtBQUNBLG1CQUFPLEtBQVA7QUFDSDtBQUNKO0FBRUQ7OztBQUNBLGVBQU8yQixXQUFQLEdBQTZCO0FBQ3pCLGlCQUFPLEtBQUtMLFFBQVo7QUFDSDtBQUVEO0FBQ0o7QUFDQTtBQUNBOzs7QUFDSSxlQUFPeEIsU0FBUCxDQUFpQkYsSUFBakIsRUFBK0JDLEdBQS9CLEVBQXlEO0FBQ3JELGNBQUlJLEtBQUssR0FBRyxLQUFLQyxRQUFMLENBQWNhLEdBQWQsQ0FBa0JuQixJQUFsQixDQUFaOztBQUNBLGNBQUlLLEtBQUosRUFBVztBQUNQQSxZQUFBQSxLQUFLLENBQUNvQixLQUFOLENBQVl4QixHQUFaO0FBQ0EsaUJBQUt5QixRQUFMLEdBQWdCckIsS0FBaEI7QUFDQSxtQkFBT0EsS0FBUDtBQUNILFdBSkQsTUFJTztBQUNISyxZQUFBQSxPQUFPLENBQUNpQixLQUFSLENBQWMsT0FBZCxFQUF1QjNCLElBQXZCLEVBQTZCLEtBQTdCO0FBQ0EsbUJBQU8sSUFBUDtBQUNIO0FBQ0o7QUFDRDs7O0FBQ0EsZUFBT2dDLFVBQVAsQ0FBa0IvQixHQUFsQixFQUFtQztBQUMvQixjQUFJSSxLQUFLLEdBQUcsS0FBS3FCLFFBQWpCOztBQUNBLGNBQUlyQixLQUFKLEVBQVc7QUFDUEEsWUFBQUEsS0FBSyxDQUFDbUIsR0FBTixDQUFVdkIsR0FBVjtBQUNILFdBRkQsTUFFTztBQUNIUyxZQUFBQSxPQUFPLENBQUNpQixLQUFSLENBQWMsT0FBZCxFQUF1QjNCLElBQXZCLEVBQTZCLEtBQTdCO0FBQ0g7QUFDSjs7QUFuSXFCLE87O3NCQUFiRixZLGNBQ3NDLElBQUltQyxHQUFKLEU7O3NCQUR0Q25DLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU3RhdGUgfSBmcm9tIFwiLi9JU3RhdGVcIjtcblxuZXhwb3J0IGNsYXNzIFN0YXRlTWFjaGluZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgc3RhdGVNYXA6IE1hcDxzdHJpbmcsIElTdGF0ZT4gPSBuZXcgTWFwPHN0cmluZywgSVN0YXRlPigpO1xuICAgIHByaXZhdGUgc3RhdGljIG5vd1N0YXRlOiBJU3RhdGU7XG5cblxuXG4gICAgLyoqIOWIneWni+WMlueKtuaAgeacuiDorr7nva7lkK/liqjnirbmgIFcbiAgICAgKiBAcGFyYW0gbmFtZSDlkK/liqjnirbmgIHlkI1cbiAgICAgKiBAcGFyYW0gYXJnIOWPguaVsFxuICAgICAqL1xuICAgIHN0YXRpYyBJbml0KG5hbWU6IHN0cmluZywgYXJnPzogYW55KSB7XG4gICAgICAgIHRoaXMuT3BlblN0YXRlKG5hbWUsIGFyZyk7XG4gICAgfVxuXG4gICAgc3RhdGljIEFkZFN0YXRlKHN0YXRlTmFtZTogc3RyaW5nLCBzdGF0ZTogSVN0YXRlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGVNYXAuc2V0KHN0YXRlTmFtZSwgc3RhdGUpO1xuICAgIH1cbiAgICBzdGF0aWMgUmVtb3ZlU3RhdGUoc3RhdGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGVNYXAuZGVsZXRlKHN0YXRlTmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi54q25oCBXCIsIHN0YXRlTmFtZSwgXCLnp7vpmaTmiJDlip9cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCLnirbmgIFcIiwgc3RhdGVOYW1lLCBcIuenu+mZpOWksei0pVwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiog5YiH5o2i54q25oCBXG4gICAgICogQHBhcmFtIGZyb20g5LuO6YKj5Liq54q25oCBXG4gICAgICogQHBhcmFtIHRvIOWIh+aNouWIsOmCo+S4queKtuaAgVxuICAgICAqIEBwYXJhbSBhcmcxIGZyb23lj4LmlbBcbiAgICAgKiBAcGFyYW0gYXJnMiB0b+WPguaVsFxuICAgICAqL1xuICAgIHN0YXRpYyBDaGFuZ2VTdGF0ZShmcm9tOiBzdHJpbmcsIHRvOiBzdHJpbmcsIGFyZzE/OiBhbnksIGFyZzI/OiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGZvcm1TdGF0ZSA9IHRoaXMuc3RhdGVNYXAuZ2V0KGZyb20pO1xuICAgICAgICBsZXQgdG9TdGF0ZSA9IHRoaXMuc3RhdGVNYXAuZ2V0KHRvKTtcbiAgICAgICAgaWYgKGZvcm1TdGF0ZSAmJiB0b1N0YXRlKSB7XG4gICAgICAgICAgICBpZiAodG9TdGF0ZS5jYW5Gcm9tU3RhdGVOYW1lLmluZGV4T2YoZnJvbSkgIT0gLTEgJiYgZm9ybVN0YXRlLmNhblRvU3RhdGVOYW1lLmluZGV4T2YodG8pICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgZm9ybVN0YXRlLkVuZChhcmcxKTtcbiAgICAgICAgICAgICAgICB0b1N0YXRlLlN0YXJ0KGFyZzIpO1xuICAgICAgICAgICAgICAgIHRoaXMubm93U3RhdGUgPSB0b1N0YXRlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5YiH5o2i54q25oCB5oiQ5YqfXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5YiH5o2i54q25oCB5aSx6LSlOlwiLCBmcm9tLCBcIi0tPlwiLCB0byk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5YiH5o2i54q25oCB5aSx6LSlOlwiLCBmcm9tLCBcIi0tPlwiLCB0byk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirku47lvZPliY3nirbmgIHovazliLDmn5DkuKrnirbmgIFcbiAgICAgKiBAcGFyYW0gdG8gXG4gICAgICogQHBhcmFtIGFyZzEgXG4gICAgICogQHBhcmFtIGFyZzIgXG4gICAgICovXG4gICAgc3RhdGljIFRvU3RhdGUodG86IHN0cmluZywgYXJnMT86IGFueSwgYXJnMj86IGFueSkge1xuICAgICAgICBsZXQgZm9ybVN0YXRlID0gdGhpcy5ub3dTdGF0ZTtcbiAgICAgICAgbGV0IHRvU3RhdGUgPSB0aGlzLnN0YXRlTWFwLmdldCh0byk7XG4gICAgICAgIGlmIChmb3JtU3RhdGUgJiYgdG9TdGF0ZSkge1xuICAgICAgICAgICAgaWYgKHRvU3RhdGUuY2FuRnJvbVN0YXRlTmFtZS5pbmRleE9mKHRoaXMubm93U3RhdGUuc3RhdGVOYW1lKSAhPSAtMSAmJiBmb3JtU3RhdGUuY2FuVG9TdGF0ZU5hbWUuaW5kZXhPZih0bykgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBmb3JtU3RhdGUuRW5kKGFyZzEpO1xuICAgICAgICAgICAgICAgIHRvU3RhdGUuU3RhcnQoYXJnMik7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3dTdGF0ZSA9IHRvU3RhdGU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliIfmjaLnirbmgIHmiJDlip9cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLliIfmjaLnirbmgIHlpLHotKU6XCIsIHRoaXMubm93U3RhdGUuc3RhdGVOYW1lLCBcIi0tPlwiLCB0byk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5YiH5o2i54q25oCB5aSx6LSlOlwiLCB0aGlzLm5vd1N0YXRlLnN0YXRlTmFtZSwgXCItLT5cIiwgdG8pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq6Lez6L2s5Yiw5LiL5Liq54q25oCBIChjYW5Ub1N0YXRlTmFtZeS4reeahOesrOS4gOS4queKtuaAgSkgKi9cbiAgICBzdGF0aWMgTmV4dFN0YXRlKGFyZzE/OiBhbnksIGFyZzI/OiBhbnkpIHtcbiAgICAgICAgbGV0IGZvcm1TdGF0ZSA9IHRoaXMubm93U3RhdGU7XG4gICAgICAgIGxldCB0b1N0YXRlO1xuICAgICAgICBpZiAoZm9ybVN0YXRlLmNhblRvU3RhdGVOYW1lLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICB0b1N0YXRlID0gdGhpcy5zdGF0ZU1hcC5nZXQoZm9ybVN0YXRlLmNhblRvU3RhdGVOYW1lWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybVN0YXRlICYmIHRvU3RhdGUpIHtcbiAgICAgICAgICAgIGlmICh0b1N0YXRlLmNhbkZyb21TdGF0ZU5hbWUuaW5kZXhPZih0aGlzLm5vd1N0YXRlLnN0YXRlTmFtZSkgIT0gLTEgJiYgZm9ybVN0YXRlLmNhblRvU3RhdGVOYW1lLmluZGV4T2YodG9TdGF0ZS5zdGF0ZU5hbWUpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgZm9ybVN0YXRlLkVuZChhcmcxKTtcbiAgICAgICAgICAgICAgICB0b1N0YXRlLlN0YXJ0KGFyZzIpO1xuICAgICAgICAgICAgICAgIHRoaXMubm93U3RhdGUgPSB0b1N0YXRlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5YiH5o2i54q25oCB5oiQ5YqfXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5YiH5o2i54q25oCB5oiQ5YqfOlwiLCBmb3JtU3RhdGUuc3RhdGVOYW1lLCBcIi0tPlwiLCB0b1N0YXRlLnN0YXRlTmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLliIfmjaLnirbmgIHlpLHotKU6XCIsIHRoaXMubm93U3RhdGUuc3RhdGVOYW1lLCBcIi0tPlwiLCB0b1N0YXRlPy5zdGF0ZU5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuWIh+aNoueKtuaAgeWksei0pTpcIiwgdGhpcy5ub3dTdGF0ZS5zdGF0ZU5hbWUsIFwiLS0+XCIsIHRvU3RhdGU/LnN0YXRlTmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirojrflj5blvZPliY3nirbmgIEgKi9cbiAgICBzdGF0aWMgR2V0Tm93U3RhdGUoKTogSVN0YXRlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm93U3RhdGU7XG4gICAgfVxuXG4gICAgLyoq5byA5ZCv54q25oCBXG4gICAgICogQHBhcmFtIG5hbWUgXG4gICAgICogQHBhcmFtIGFyZyBcbiAgICAgKi9cbiAgICBzdGF0aWMgT3BlblN0YXRlKG5hbWU6IHN0cmluZywgYXJnPzogYW55KTogSVN0YXRlIHwgbnVsbCB7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVNYXAuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLlN0YXJ0KGFyZyk7XG4gICAgICAgICAgICB0aGlzLm5vd1N0YXRlID0gc3RhdGU7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5byA5ZCv54q25oCBIFwiLCBuYW1lLCBcIiDlpLHotKVcIik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKirlhbPpl63lvZPliY3nirbmgIEgKi9cbiAgICBzdGF0aWMgQ2xvc2VTdGF0ZShhcmc/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5ub3dTdGF0ZTtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5FbmQoYXJnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLlvIDlkK/nirbmgIEgXCIsIG5hbWUsIFwiIOWksei0pVwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==