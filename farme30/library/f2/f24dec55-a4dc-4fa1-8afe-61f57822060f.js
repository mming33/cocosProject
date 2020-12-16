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

      _cclegacy._RF.push({}, "f24dexVpNxPoYr+YfV4IgYP", "IState", _context.meta);

      _export("StateMachine", StateMachine = /*#__PURE__*/function () {
        function StateMachine() {}

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
        /**
         * 切换状态
         * @param from 从那个状态
         * @param to 切换到那个状态
         */
        ;

        var _proto = StateMachine.prototype;

        _proto.ChangeState = function ChangeState(from, to) {};

        return StateMachine;
      }());

      _defineProperty(StateMachine, "stateMap", new Map());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vU3RhdGVNYWNoaW5lL0lTdGF0ZS50cyJdLCJuYW1lcyI6WyJTdGF0ZU1hY2hpbmUiLCJBZGRTdGF0ZSIsInN0YXRlTmFtZSIsInN0YXRlIiwic3RhdGVNYXAiLCJzZXQiLCJSZW1vdmVTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJ3YXJuIiwiQ2hhbmdlU3RhdGUiLCJmcm9tIiwidG8iLCJNYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBVWFBLFk7OztxQkFFRkMsUSxHQUFQLGtCQUFnQkMsU0FBaEIsRUFBbUNDLEtBQW5DLEVBQXdEO0FBQ3BELGVBQUtDLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQkgsU0FBbEIsRUFBNkJDLEtBQTdCO0FBQ0gsUzs7cUJBQ01HLFcsR0FBUCxxQkFBbUJKLFNBQW5CLEVBQTRDO0FBQ3hDLGNBQUksS0FBS0UsUUFBTCxXQUFxQkYsU0FBckIsQ0FBSixFQUFxQztBQUNqQ0ssWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWixFQUFrQk4sU0FBbEIsRUFBNkIsTUFBN0I7QUFDSCxXQUZELE1BRU87QUFDSEssWUFBQUEsT0FBTyxDQUFDRSxJQUFSLENBQWEsSUFBYixFQUFtQlAsU0FBbkIsRUFBOEIsTUFBOUI7QUFDSDtBQUNKO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7Ozs7ZUFDSVEsVyxHQUFBLHFCQUFZQyxJQUFaLEVBQTBCQyxFQUExQixFQUFzQyxDQUVyQyxDOzs7OztzQkFuQlFaLFksY0FDc0MsSUFBSWEsR0FBSixFIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xuICAgIC8qKueKtuaAgeWQjSAqL1xuICAgIHN0YXRlTmFtZTogc3RyaW5nO1xuICAgIC8qKueKtuaAgeW8gOWniyAqL1xuICAgIFN0YXJ0KGFyZzogc3RyaW5nKTogdm9pZDtcbiAgICAvKirnirbmgIHnu5PmnZ8gKi9cbiAgICBFbmQoYXJnOiBzdHJpbmcpOiB2b2lkO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBTdGF0ZU1hY2hpbmUge1xuICAgIHByaXZhdGUgc3RhdGljIHN0YXRlTWFwOiBNYXA8c3RyaW5nLCBJU3RhdGU+ID0gbmV3IE1hcDxzdHJpbmcsIElTdGF0ZT4oKTtcbiAgICBzdGF0aWMgQWRkU3RhdGUoc3RhdGVOYW1lOiBzdHJpbmcsIHN0YXRlOiBJU3RhdGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZU1hcC5zZXQoc3RhdGVOYW1lLCBzdGF0ZSk7XG4gICAgfVxuICAgIHN0YXRpYyBSZW1vdmVTdGF0ZShzdGF0ZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZU1hcC5kZWxldGUoc3RhdGVOYW1lKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLnirbmgIFcIiwgc3RhdGVOYW1lLCBcIuenu+mZpOaIkOWKn1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIueKtuaAgVwiLCBzdGF0ZU5hbWUsIFwi56e76Zmk5aSx6LSlXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWIh+aNoueKtuaAgVxuICAgICAqIEBwYXJhbSBmcm9tIOS7jumCo+S4queKtuaAgVxuICAgICAqIEBwYXJhbSB0byDliIfmjaLliLDpgqPkuKrnirbmgIFcbiAgICAgKi9cbiAgICBDaGFuZ2VTdGF0ZShmcm9tOiBzdHJpbmcsIHRvOiBzdHJpbmcpIHtcbiAgICAgICAgXG4gICAgfVxufSJdfQ==