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

      _cclegacy._RF.push({}, "f24dexVpNxPoYr+YfV4IgYP", "IState", _context.meta);

      _export("StateMachine", StateMachine = class StateMachine {
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
        /**
         * 切换状态
         * @param from 从那个状态
         * @param to 切换到那个状态
         */


        ChangeState(from, to) {}

      });

      _defineProperty(StateMachine, "stateMap", new Map());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vU3RhdGVNYWNoaW5lL0lTdGF0ZS50cyJdLCJuYW1lcyI6WyJTdGF0ZU1hY2hpbmUiLCJBZGRTdGF0ZSIsInN0YXRlTmFtZSIsInN0YXRlIiwic3RhdGVNYXAiLCJzZXQiLCJSZW1vdmVTdGF0ZSIsImRlbGV0ZSIsImNvbnNvbGUiLCJsb2ciLCJ3YXJuIiwiQ2hhbmdlU3RhdGUiLCJmcm9tIiwidG8iLCJNYXAiXSwibWFwcGluZ3MiOiI7OztpQkFVYUEsWTs7Ozs7Ozs7Ozs7Ozs7OzhCQUFBQSxZLEdBQU4sTUFBTUEsWUFBTixDQUFtQjtBQUV0QixlQUFPQyxRQUFQLENBQWdCQyxTQUFoQixFQUFtQ0MsS0FBbkMsRUFBd0Q7QUFDcEQsZUFBS0MsUUFBTCxDQUFjQyxHQUFkLENBQWtCSCxTQUFsQixFQUE2QkMsS0FBN0I7QUFDSDs7QUFDRCxlQUFPRyxXQUFQLENBQW1CSixTQUFuQixFQUE0QztBQUN4QyxjQUFJLEtBQUtFLFFBQUwsQ0FBY0csTUFBZCxDQUFxQkwsU0FBckIsQ0FBSixFQUFxQztBQUNqQ00sWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWixFQUFrQlAsU0FBbEIsRUFBNkIsTUFBN0I7QUFDSCxXQUZELE1BRU87QUFDSE0sWUFBQUEsT0FBTyxDQUFDRSxJQUFSLENBQWEsSUFBYixFQUFtQlIsU0FBbkIsRUFBOEIsTUFBOUI7QUFDSDtBQUNKO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0lTLFFBQUFBLFdBQVcsQ0FBQ0MsSUFBRCxFQUFlQyxFQUFmLEVBQTJCLENBRXJDOztBQW5CcUIsTzs7c0JBQWJiLFksY0FDc0MsSUFBSWMsR0FBSixFIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xuICAgIC8qKueKtuaAgeWQjSAqL1xuICAgIHN0YXRlTmFtZTogc3RyaW5nO1xuICAgIC8qKueKtuaAgeW8gOWniyAqL1xuICAgIFN0YXJ0KGFyZzogc3RyaW5nKTogdm9pZDtcbiAgICAvKirnirbmgIHnu5PmnZ8gKi9cbiAgICBFbmQoYXJnOiBzdHJpbmcpOiB2b2lkO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBTdGF0ZU1hY2hpbmUge1xuICAgIHByaXZhdGUgc3RhdGljIHN0YXRlTWFwOiBNYXA8c3RyaW5nLCBJU3RhdGU+ID0gbmV3IE1hcDxzdHJpbmcsIElTdGF0ZT4oKTtcbiAgICBzdGF0aWMgQWRkU3RhdGUoc3RhdGVOYW1lOiBzdHJpbmcsIHN0YXRlOiBJU3RhdGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZU1hcC5zZXQoc3RhdGVOYW1lLCBzdGF0ZSk7XG4gICAgfVxuICAgIHN0YXRpYyBSZW1vdmVTdGF0ZShzdGF0ZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZU1hcC5kZWxldGUoc3RhdGVOYW1lKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLnirbmgIFcIiwgc3RhdGVOYW1lLCBcIuenu+mZpOaIkOWKn1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIueKtuaAgVwiLCBzdGF0ZU5hbWUsIFwi56e76Zmk5aSx6LSlXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWIh+aNoueKtuaAgVxuICAgICAqIEBwYXJhbSBmcm9tIOS7jumCo+S4queKtuaAgVxuICAgICAqIEBwYXJhbSB0byDliIfmjaLliLDpgqPkuKrnirbmgIFcbiAgICAgKi9cbiAgICBDaGFuZ2VTdGF0ZShmcm9tOiBzdHJpbmcsIHRvOiBzdHJpbmcpIHtcbiAgICAgICAgXG4gICAgfVxufSJdfQ==