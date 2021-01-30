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
        function StateMachine() {
          _defineProperty(this, "stateMap", new Map());
        }

        var _proto = StateMachine.prototype;

        /** 初始化状态机 设置启动状态
         * @param name 启动状态名
         * @param arg 参数
         */
        _proto.Init = function Init(name, arg) {
          var state = this.stateMap.get(name);

          if (state) {
            state.Start(arg);
            this.nowState = state;
          } else {
            console.error("开启状态 ", name, " 失败");
          }
        }
        /**添加状态到状态机中 */
        ;

        _proto.AddState = function AddState(stateName, state) {
          this.stateMap.set(stateName, state);
        }
        /**从状态机中移除状态 */
        ;

        _proto.RemoveState = function RemoveState(stateName) {
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

        _proto.ChangeState = function ChangeState(from, to, arg1, arg2) {
          var formState = this.stateMap.get(from);
          var toState = this.stateMap.get(to);

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
        ;

        _proto.ToState = function ToState(to, arg1, arg2) {
          var formState = this.nowState;
          var toState = this.stateMap.get(to);

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
        };

        return StateMachine;
      }());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vU3RhdGVNYWNoaW5lL1N0YXRlTWFjaGluZS50cyJdLCJuYW1lcyI6WyJTdGF0ZU1hY2hpbmUiLCJNYXAiLCJJbml0IiwibmFtZSIsImFyZyIsInN0YXRlIiwic3RhdGVNYXAiLCJnZXQiLCJTdGFydCIsIm5vd1N0YXRlIiwiY29uc29sZSIsImVycm9yIiwiQWRkU3RhdGUiLCJzdGF0ZU5hbWUiLCJzZXQiLCJSZW1vdmVTdGF0ZSIsImxvZyIsIndhcm4iLCJDaGFuZ2VTdGF0ZSIsImZyb20iLCJ0byIsImFyZzEiLCJhcmcyIiwiZm9ybVN0YXRlIiwidG9TdGF0ZSIsImNhbkZyb21TdGF0ZU5hbWUiLCJpbmRleE9mIiwiY2FuVG9TdGF0ZU5hbWUiLCJFbmQiLCJUb1N0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUVhQSxZOzs0Q0FDK0IsSUFBSUMsR0FBSixFOzs7OztBQUd4QztBQUNKO0FBQ0E7QUFDQTtlQUNJQyxJLEdBQUEsY0FBS0MsSUFBTCxFQUFtQkMsR0FBbkIsRUFBb0M7QUFDaEMsY0FBSUMsS0FBSyxHQUFHLEtBQUtDLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQkosSUFBbEIsQ0FBWjs7QUFDQSxjQUFJRSxLQUFKLEVBQVc7QUFDUEEsWUFBQUEsS0FBSyxDQUFDRyxLQUFOLENBQVlKLEdBQVo7QUFDQSxpQkFBS0ssUUFBTCxHQUFnQkosS0FBaEI7QUFDSCxXQUhELE1BR087QUFDSEssWUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWMsT0FBZCxFQUF1QlIsSUFBdkIsRUFBNkIsS0FBN0I7QUFDSDtBQUNKO0FBRUQ7OztlQUNBUyxRLEdBQUEsa0JBQVNDLFNBQVQsRUFBNEJSLEtBQTVCLEVBQWlEO0FBQzdDLGVBQUtDLFFBQUwsQ0FBY1EsR0FBZCxDQUFrQkQsU0FBbEIsRUFBNkJSLEtBQTdCO0FBQ0g7QUFDRDs7O2VBQ0FVLFcsR0FBQSxxQkFBWUYsU0FBWixFQUFxQztBQUNqQyxjQUFJLEtBQUtQLFFBQUwsV0FBcUJPLFNBQXJCLENBQUosRUFBcUM7QUFDakNILFlBQUFBLE9BQU8sQ0FBQ00sR0FBUixDQUFZLElBQVosRUFBa0JILFNBQWxCLEVBQTZCLE1BQTdCO0FBQ0gsV0FGRCxNQUVPO0FBQ0hILFlBQUFBLE9BQU8sQ0FBQ08sSUFBUixDQUFhLElBQWIsRUFBbUJKLFNBQW5CLEVBQThCLE1BQTlCO0FBQ0g7QUFDSjtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O2VBQ0lLLFcsR0FBQSxxQkFBWUMsSUFBWixFQUEwQkMsRUFBMUIsRUFBc0NDLElBQXRDLEVBQWtEQyxJQUFsRCxFQUF1RTtBQUNuRSxjQUFJQyxTQUFTLEdBQUcsS0FBS2pCLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQlksSUFBbEIsQ0FBaEI7QUFDQSxjQUFJSyxPQUFPLEdBQUcsS0FBS2xCLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQmEsRUFBbEIsQ0FBZDs7QUFDQSxjQUFJRyxTQUFTLElBQUlDLE9BQWpCLEVBQTBCO0FBQ3RCLGdCQUFJQSxPQUFPLENBQUNDLGdCQUFSLENBQXlCQyxPQUF6QixDQUFpQ1AsSUFBakMsS0FBMEMsQ0FBQyxDQUEzQyxJQUFnREksU0FBUyxDQUFDSSxjQUFWLENBQXlCRCxPQUF6QixDQUFpQ04sRUFBakMsS0FBd0MsQ0FBQyxDQUE3RixFQUFnRztBQUM1RkcsY0FBQUEsU0FBUyxDQUFDSyxHQUFWLENBQWNQLElBQWQ7QUFDQSxtQkFBS1osUUFBTCxHQUFnQmUsT0FBaEI7QUFDQUEsY0FBQUEsT0FBTyxDQUFDaEIsS0FBUixDQUFjYyxJQUFkO0FBQ0FaLGNBQUFBLE9BQU8sQ0FBQ08sSUFBUixDQUFhLFNBQWIsRUFBd0JFLElBQXhCLEVBQThCLEtBQTlCLEVBQXFDQyxFQUFyQztBQUNBLHFCQUFPLElBQVA7QUFDSCxhQU5ELE1BTU87QUFDSFYsY0FBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWMsU0FBZCxFQUF5QlEsSUFBekIsRUFBK0IsS0FBL0IsRUFBc0NDLEVBQXRDO0FBQ0EscUJBQU8sS0FBUDtBQUNIO0FBRUosV0FaRCxNQVlPO0FBQ0hWLFlBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLFNBQWQsRUFBeUJRLElBQXpCLEVBQStCLEtBQS9CLEVBQXNDQyxFQUF0QztBQUNBLG1CQUFPLEtBQVA7QUFDSDtBQUNKO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7O2VBQ0lTLE8sR0FBQSxpQkFBUVQsRUFBUixFQUFvQkMsSUFBcEIsRUFBZ0NDLElBQWhDLEVBQXFEO0FBQ2pELGNBQUlDLFNBQVMsR0FBRyxLQUFLZCxRQUFyQjtBQUNBLGNBQUllLE9BQU8sR0FBRyxLQUFLbEIsUUFBTCxDQUFjQyxHQUFkLENBQWtCYSxFQUFsQixDQUFkOztBQUNBLGNBQUlHLFNBQVMsSUFBSUMsT0FBakIsRUFBMEI7QUFDdEJELFlBQUFBLFNBQVMsQ0FBQ0ssR0FBVixDQUFjUCxJQUFkO0FBQ0EsaUJBQUtaLFFBQUwsR0FBZ0JlLE9BQWhCO0FBQ0FBLFlBQUFBLE9BQU8sQ0FBQ2hCLEtBQVIsQ0FBY2MsSUFBZDtBQUNBWixZQUFBQSxPQUFPLENBQUNNLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsbUJBQU8sSUFBUDtBQUNILFdBTkQsTUFNTztBQUNITixZQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyxTQUFkLEVBQXlCWSxTQUFTLENBQUNWLFNBQW5DLEVBQThDLEtBQTlDLEVBQXFETyxFQUFyRDtBQUNBLG1CQUFPLEtBQVA7QUFDSDtBQUNKLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU3RhdGUgfSBmcm9tIFwiLi9JU3RhdGVcIjtcblxuZXhwb3J0IGNsYXNzIFN0YXRlTWFjaGluZSB7XG4gICAgcHJpdmF0ZSBzdGF0ZU1hcDogTWFwPHN0cmluZywgSVN0YXRlPiA9IG5ldyBNYXA8c3RyaW5nLCBJU3RhdGU+KCk7XG4gICAgcHJpdmF0ZSBub3dTdGF0ZSE6IElTdGF0ZTtcblxuICAgIC8qKiDliJ3lp4vljJbnirbmgIHmnLog6K6+572u5ZCv5Yqo54q25oCBXG4gICAgICogQHBhcmFtIG5hbWUg5ZCv5Yqo54q25oCB5ZCNXG4gICAgICogQHBhcmFtIGFyZyDlj4LmlbBcbiAgICAgKi9cbiAgICBJbml0KG5hbWU6IHN0cmluZywgYXJnPzogYW55KTogdm9pZCB7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVNYXAuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgIHN0YXRlLlN0YXJ0KGFyZyk7XG4gICAgICAgICAgICB0aGlzLm5vd1N0YXRlID0gc3RhdGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5byA5ZCv54q25oCBIFwiLCBuYW1lLCBcIiDlpLHotKVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirmt7vliqDnirbmgIHliLDnirbmgIHmnLrkuK0gKi9cbiAgICBBZGRTdGF0ZShzdGF0ZU5hbWU6IHN0cmluZywgc3RhdGU6IElTdGF0ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlTWFwLnNldChzdGF0ZU5hbWUsIHN0YXRlKTtcbiAgICB9XG4gICAgLyoq5LuO54q25oCB5py65Lit56e76Zmk54q25oCBICovXG4gICAgUmVtb3ZlU3RhdGUoc3RhdGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGVNYXAuZGVsZXRlKHN0YXRlTmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi54q25oCBXCIsIHN0YXRlTmFtZSwgXCLnp7vpmaTmiJDlip9cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCLnirbmgIFcIiwgc3RhdGVOYW1lLCBcIuenu+mZpOWksei0pVwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiog5YiH5o2i54q25oCBXG4gICAgICogQHBhcmFtIGZyb20g5LuO6YKj5Liq54q25oCBXG4gICAgICogQHBhcmFtIHRvIOWIh+aNouWIsOmCo+S4queKtuaAgVxuICAgICAqIEBwYXJhbSBhcmcxIGZyb23lj4LmlbBcbiAgICAgKiBAcGFyYW0gYXJnMiB0b+WPguaVsFxuICAgICAqL1xuICAgIENoYW5nZVN0YXRlKGZyb206IHN0cmluZywgdG86IHN0cmluZywgYXJnMT86IGFueSwgYXJnMj86IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgZm9ybVN0YXRlID0gdGhpcy5zdGF0ZU1hcC5nZXQoZnJvbSk7XG4gICAgICAgIGxldCB0b1N0YXRlID0gdGhpcy5zdGF0ZU1hcC5nZXQodG8pO1xuICAgICAgICBpZiAoZm9ybVN0YXRlICYmIHRvU3RhdGUpIHtcbiAgICAgICAgICAgIGlmICh0b1N0YXRlLmNhbkZyb21TdGF0ZU5hbWUuaW5kZXhPZihmcm9tKSAhPSAtMSAmJiBmb3JtU3RhdGUuY2FuVG9TdGF0ZU5hbWUuaW5kZXhPZih0bykgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBmb3JtU3RhdGUuRW5kKGFyZzEpO1xuICAgICAgICAgICAgICAgIHRoaXMubm93U3RhdGUgPSB0b1N0YXRlO1xuICAgICAgICAgICAgICAgIHRvU3RhdGUuU3RhcnQoYXJnMik7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi5YiH5o2i54q25oCB5oiQ5YqfOlwiLCBmcm9tLCBcIi0tPlwiLCB0byk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLliIfmjaLnirbmgIHlpLHotKU6XCIsIGZyb20sIFwiLS0+XCIsIHRvKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLliIfmjaLnirbmgIHlpLHotKU6XCIsIGZyb20sIFwiLS0+XCIsIHRvKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKirku47lvZPliY3nirbmgIHlvLrliLbovazliLDmn5DkuKrnirbmgIFcbiAgICAgKiBAcGFyYW0gdG8gXG4gICAgICogQHBhcmFtIGFyZzEgXG4gICAgICogQHBhcmFtIGFyZzIgXG4gICAgICovXG4gICAgVG9TdGF0ZSh0bzogc3RyaW5nLCBhcmcxPzogYW55LCBhcmcyPzogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBmb3JtU3RhdGUgPSB0aGlzLm5vd1N0YXRlO1xuICAgICAgICBsZXQgdG9TdGF0ZSA9IHRoaXMuc3RhdGVNYXAuZ2V0KHRvKTtcbiAgICAgICAgaWYgKGZvcm1TdGF0ZSAmJiB0b1N0YXRlKSB7XG4gICAgICAgICAgICBmb3JtU3RhdGUuRW5kKGFyZzEpO1xuICAgICAgICAgICAgdGhpcy5ub3dTdGF0ZSA9IHRvU3RhdGU7XG4gICAgICAgICAgICB0b1N0YXRlLlN0YXJ0KGFyZzIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLliIfmjaLnirbmgIHmiJDlip9cIik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLliIfmjaLnirbmgIHlpLHotKU6XCIsIGZvcm1TdGF0ZS5zdGF0ZU5hbWUsIFwiLS0+XCIsIHRvKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==