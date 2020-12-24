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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vU3RhdGVNYWNoaW5lL1N0YXRlTWFjaGluZS50cyJdLCJuYW1lcyI6WyJTdGF0ZU1hY2hpbmUiLCJJbml0IiwibmFtZSIsImFyZyIsIk9wZW5TdGF0ZSIsIkFkZFN0YXRlIiwic3RhdGVOYW1lIiwic3RhdGUiLCJzdGF0ZU1hcCIsInNldCIsIlJlbW92ZVN0YXRlIiwiY29uc29sZSIsImxvZyIsIndhcm4iLCJDaGFuZ2VTdGF0ZSIsImZyb20iLCJ0byIsImFyZzEiLCJhcmcyIiwiZm9ybVN0YXRlIiwiZ2V0IiwidG9TdGF0ZSIsImNhbkZyb21TdGF0ZU5hbWUiLCJpbmRleE9mIiwiY2FuVG9TdGF0ZU5hbWUiLCJFbmQiLCJTdGFydCIsIm5vd1N0YXRlIiwiZXJyb3IiLCJUb1N0YXRlIiwiTmV4dFN0YXRlIiwibGVuZ3RoIiwiR2V0Tm93U3RhdGUiLCJDbG9zZVN0YXRlIiwiTWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUNhQSxZOzs7QUFNVDtBQUNKO0FBQ0E7QUFDQTtxQkFDV0MsSSxHQUFQLGNBQVlDLElBQVosRUFBMEJDLEdBQTFCLEVBQXFDO0FBQ2pDLGVBQUtDLFNBQUwsQ0FBZUYsSUFBZixFQUFxQkMsR0FBckI7QUFDSCxTOztxQkFFTUUsUSxHQUFQLGtCQUFnQkMsU0FBaEIsRUFBbUNDLEtBQW5DLEVBQXdEO0FBQ3BELGVBQUtDLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQkgsU0FBbEIsRUFBNkJDLEtBQTdCO0FBQ0gsUzs7cUJBQ01HLFcsR0FBUCxxQkFBbUJKLFNBQW5CLEVBQTRDO0FBQ3hDLGNBQUksS0FBS0UsUUFBTCxXQUFxQkYsU0FBckIsQ0FBSixFQUFxQztBQUNqQ0ssWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWixFQUFrQk4sU0FBbEIsRUFBNkIsTUFBN0I7QUFDSCxXQUZELE1B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LEtBQWxELGVBQXlEZSxPQUF6RCw4Q0FBeUQsVUFBU2YsU0FBbEU7QUFDQSxtQkFBTyxLQUFQO0FBQ0g7QUFDSjtBQUVEOzs7cUJBQ08wQixXLEdBQVAsdUJBQTZCO0FBQ3pCLGlCQUFPLEtBQUtMLFFBQVo7QUFDSDtBQUVEO0FBQ0o7QUFDQTtBQUNBOzs7cUJBQ1d2QixTLEdBQVAsbUJBQWlCRixJQUFqQixFQUErQkMsR0FBL0IsRUFBeUQ7QUFDckQsY0FBSUksS0FBSyxHQUFHLEtBQUtDLFFBQUwsQ0FBY1ksR0FBZCxDQUFrQmxCLElBQWxCLENBQVo7O0FBQ0EsY0FBSUssS0FBSixFQUFXO0FBQ1BBLFlBQUFBLEtBQUssQ0FBQ21CLEtBQU4sQ0FBWXZCLEdBQVo7QUFDQSxpQkFBS3dCLFFBQUwsR0FBZ0JwQixLQUFoQjtBQUNBLG1CQUFPQSxLQUFQO0FBQ0gsV0FKRCxNQUlPO0FBQ0hJLFlBQUFBLE9BQU8sQ0FBQ2lCLEtBQVIsQ0FBYyxPQUFkLEVBQXVCMUIsSUFBdkIsRUFBNkIsS0FBN0I7QUFDQSxtQkFBTyxJQUFQO0FBQ0g7QUFDSjtBQUNEOzs7cUJBQ08rQixVLEdBQVAsb0JBQWtCOUIsR0FBbEIsRUFBbUM7QUFDL0IsY0FBSUksS0FBSyxHQUFHLEtBQUtvQixRQUFqQjs7QUFDQSxjQUFJcEIsS0FBSixFQUFXO0FBQ1BBLFlBQUFBLEtBQUssQ0FBQ2tCLEdBQU4sQ0FBVXRCLEdBQVY7QUFDSCxXQUZELE1BRU87QUFDSFEsWUFBQUEsT0FBTyxDQUFDaUIsS0FBUixDQUFjLE9BQWQsRUFBdUIxQixJQUF2QixFQUE2QixLQUE3QjtBQUNIO0FBQ0osUzs7Ozs7c0JBbklRRixZLGNBQ3NDLElBQUlrQyxHQUFKLEU7O3NCQUR0Q2xDLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU3RhdGUgfSBmcm9tIFwiLi9JU3RhdGVcIjtcbmV4cG9ydCBjbGFzcyBTdGF0ZU1hY2hpbmUge1xuICAgIHByaXZhdGUgc3RhdGljIHN0YXRlTWFwOiBNYXA8c3RyaW5nLCBJU3RhdGU+ID0gbmV3IE1hcDxzdHJpbmcsIElTdGF0ZT4oKTtcbiAgICBwcml2YXRlIHN0YXRpYyBub3dTdGF0ZTogSVN0YXRlO1xuXG5cblxuICAgIC8qKiDliJ3lp4vljJbnirbmgIHmnLog6K6+572u5ZCv5Yqo54q25oCBXG4gICAgICogQHBhcmFtIG5hbWUg5ZCv5Yqo54q25oCB5ZCNXG4gICAgICogQHBhcmFtIGFyZyDlj4LmlbBcbiAgICAgKi9cbiAgICBzdGF0aWMgSW5pdChuYW1lOiBzdHJpbmcsIGFyZz86IGFueSkge1xuICAgICAgICB0aGlzLk9wZW5TdGF0ZShuYW1lLCBhcmcpO1xuICAgIH1cblxuICAgIHN0YXRpYyBBZGRTdGF0ZShzdGF0ZU5hbWU6IHN0cmluZywgc3RhdGU6IElTdGF0ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlTWFwLnNldChzdGF0ZU5hbWUsIHN0YXRlKTtcbiAgICB9XG4gICAgc3RhdGljIFJlbW92ZVN0YXRlKHN0YXRlTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlTWFwLmRlbGV0ZShzdGF0ZU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIueKtuaAgVwiLCBzdGF0ZU5hbWUsIFwi56e76Zmk5oiQ5YqfXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwi54q25oCBXCIsIHN0YXRlTmFtZSwgXCLnp7vpmaTlpLHotKVcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOWIh+aNoueKtuaAgVxuICAgICAqIEBwYXJhbSBmcm9tIOS7jumCo+S4queKtuaAgVxuICAgICAqIEBwYXJhbSB0byDliIfmjaLliLDpgqPkuKrnirbmgIFcbiAgICAgKiBAcGFyYW0gYXJnMSBmcm9t5Y+C5pWwXG4gICAgICogQHBhcmFtIGFyZzIgdG/lj4LmlbBcbiAgICAgKi9cbiAgICBzdGF0aWMgQ2hhbmdlU3RhdGUoZnJvbTogc3RyaW5nLCB0bzogc3RyaW5nLCBhcmcxPzogYW55LCBhcmcyPzogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBmb3JtU3RhdGUgPSB0aGlzLnN0YXRlTWFwLmdldChmcm9tKTtcbiAgICAgICAgbGV0IHRvU3RhdGUgPSB0aGlzLnN0YXRlTWFwLmdldCh0byk7XG4gICAgICAgIGlmIChmb3JtU3RhdGUgJiYgdG9TdGF0ZSkge1xuICAgICAgICAgICAgaWYgKHRvU3RhdGUuY2FuRnJvbVN0YXRlTmFtZS5pbmRleE9mKGZyb20pICE9IC0xICYmIGZvcm1TdGF0ZS5jYW5Ub1N0YXRlTmFtZS5pbmRleE9mKHRvKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIGZvcm1TdGF0ZS5FbmQoYXJnMSk7XG4gICAgICAgICAgICAgICAgdG9TdGF0ZS5TdGFydChhcmcyKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vd1N0YXRlID0gdG9TdGF0ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLliIfmjaLnirbmgIHmiJDlip86XCIsIGZyb20sIFwiLS0+XCIsIHRvKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuWIh+aNoueKtuaAgeWksei0pTpcIiwgZnJvbSwgXCItLT5cIiwgdG8pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuWIh+aNoueKtuaAgeWksei0pTpcIiwgZnJvbSwgXCItLT5cIiwgdG8pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq5LuO5b2T5YmN54q25oCB6L2s5Yiw5p+Q5Liq54q25oCBXG4gICAgICogQHBhcmFtIHRvIFxuICAgICAqIEBwYXJhbSBhcmcxIFxuICAgICAqIEBwYXJhbSBhcmcyIFxuICAgICAqL1xuICAgIHN0YXRpYyBUb1N0YXRlKHRvOiBzdHJpbmcsIGFyZzE/OiBhbnksIGFyZzI/OiBhbnkpIHtcbiAgICAgICAgbGV0IGZvcm1TdGF0ZSA9IHRoaXMubm93U3RhdGU7XG4gICAgICAgIGxldCB0b1N0YXRlID0gdGhpcy5zdGF0ZU1hcC5nZXQodG8pO1xuICAgICAgICBpZiAoZm9ybVN0YXRlICYmIHRvU3RhdGUpIHtcbiAgICAgICAgICAgIGlmICh0b1N0YXRlLmNhbkZyb21TdGF0ZU5hbWUuaW5kZXhPZih0aGlzLm5vd1N0YXRlLnN0YXRlTmFtZSkgIT0gLTEgJiYgZm9ybVN0YXRlLmNhblRvU3RhdGVOYW1lLmluZGV4T2YodG8pICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgZm9ybVN0YXRlLkVuZChhcmcxKTtcbiAgICAgICAgICAgICAgICB0b1N0YXRlLlN0YXJ0KGFyZzIpO1xuICAgICAgICAgICAgICAgIHRoaXMubm93U3RhdGUgPSB0b1N0YXRlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5YiH5o2i54q25oCB5oiQ5YqfXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5YiH5o2i54q25oCB5aSx6LSlOlwiLCB0aGlzLm5vd1N0YXRlLnN0YXRlTmFtZSwgXCItLT5cIiwgdG8pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuWIh+aNoueKtuaAgeWksei0pTpcIiwgdGhpcy5ub3dTdGF0ZS5zdGF0ZU5hbWUsIFwiLS0+XCIsIHRvKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKui3s+i9rOWIsOS4i+S4queKtuaAgSAoY2FuVG9TdGF0ZU5hbWXkuK3nmoTnrKzkuIDkuKrnirbmgIEpICovXG4gICAgc3RhdGljIE5leHRTdGF0ZShhcmcxPzogYW55LCBhcmcyPzogYW55KSB7XG4gICAgICAgIGxldCBmb3JtU3RhdGUgPSB0aGlzLm5vd1N0YXRlO1xuICAgICAgICBsZXQgdG9TdGF0ZTtcbiAgICAgICAgaWYgKGZvcm1TdGF0ZS5jYW5Ub1N0YXRlTmFtZS5sZW5ndGggPj0gMSkge1xuICAgICAgICAgICAgdG9TdGF0ZSA9IHRoaXMuc3RhdGVNYXAuZ2V0KGZvcm1TdGF0ZS5jYW5Ub1N0YXRlTmFtZVswXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1TdGF0ZSAmJiB0b1N0YXRlKSB7XG4gICAgICAgICAgICBpZiAodG9TdGF0ZS5jYW5Gcm9tU3RhdGVOYW1lLmluZGV4T2YodGhpcy5ub3dTdGF0ZS5zdGF0ZU5hbWUpICE9IC0xICYmIGZvcm1TdGF0ZS5jYW5Ub1N0YXRlTmFtZS5pbmRleE9mKHRvU3RhdGUuc3RhdGVOYW1lKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIGZvcm1TdGF0ZS5FbmQoYXJnMSk7XG4gICAgICAgICAgICAgICAgdG9TdGF0ZS5TdGFydChhcmcyKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vd1N0YXRlID0gdG9TdGF0ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWIh+aNoueKtuaAgeaIkOWKn1wiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWIh+aNoueKtuaAgeaIkOWKnzpcIiwgZm9ybVN0YXRlLnN0YXRlTmFtZSwgXCItLT5cIiwgdG9TdGF0ZS5zdGF0ZU5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5YiH5o2i54q25oCB5aSx6LSlOlwiLCB0aGlzLm5vd1N0YXRlLnN0YXRlTmFtZSwgXCItLT5cIiwgdG9TdGF0ZT8uc3RhdGVOYW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLliIfmjaLnirbmgIHlpLHotKU6XCIsIHRoaXMubm93U3RhdGUuc3RhdGVOYW1lLCBcIi0tPlwiLCB0b1N0YXRlPy5zdGF0ZU5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq6I635Y+W5b2T5YmN54q25oCBICovXG4gICAgc3RhdGljIEdldE5vd1N0YXRlKCk6IElTdGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vd1N0YXRlO1xuICAgIH1cblxuICAgIC8qKuW8gOWQr+eKtuaAgVxuICAgICAqIEBwYXJhbSBuYW1lIFxuICAgICAqIEBwYXJhbSBhcmcgXG4gICAgICovXG4gICAgc3RhdGljIE9wZW5TdGF0ZShuYW1lOiBzdHJpbmcsIGFyZz86IGFueSk6IElTdGF0ZSB8IG51bGwge1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlTWFwLmdldChuYW1lKTtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZS5TdGFydChhcmcpO1xuICAgICAgICAgICAgdGhpcy5ub3dTdGF0ZSA9IHN0YXRlO1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuW8gOWQr+eKtuaAgSBcIiwgbmFtZSwgXCIg5aSx6LSlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoq5YWz6Zet5b2T5YmN54q25oCBICovXG4gICAgc3RhdGljIENsb3NlU3RhdGUoYXJnPzogYW55KTogdm9pZCB7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMubm93U3RhdGU7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgc3RhdGUuRW5kKGFyZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5byA5ZCv54q25oCBIFwiLCBuYW1lLCBcIiDlpLHotKVcIik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=