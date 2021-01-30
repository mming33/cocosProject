System.register(["cce.code-quality.cr", "cc", "./StateMachine.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, StateMachine, SMName, _dec, _class, _class2, _temp, _crd, ccclass, property, SMManger;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "./StateMachine", _context.meta, extras);
  }

  _export({
    SMName: void 0,
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
      _decorator = _cc._decorator;
    }, function (_StateMachineJs) {
      StateMachine = _StateMachineJs.StateMachine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0a899NKY9xNbbiPB7sdBTmy", "SMManger", _context.meta);

      _export("SMName", SMName = class SMName {});

      _defineProperty(SMName, "GameStateMachine", "GameStateMachine");

      ({
        ccclass,
        property
      } = _decorator);

      _export("SMManger", SMManger = (_dec = ccclass('SMManger'), _dec(_class = (_temp = _class2 = class SMManger {
        /**创建状态机 */
        static CreateStateMachine(name) {
          let sm = this.smMap.get(name);

          if (sm) {
            console.error("要添加的StateMachine: " + name + "已存在");
          } else {
            let value = new (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
              error: Error()
            }), StateMachine) : StateMachine)();
            value.AddState;
            this.smMap.set(name, value);
          }
        }
        /**获取状态机 $$若获取不到，会自动创建一个同名状态机，并返回一个错误警告$$*/


        static GetStateMachine(name) {
          let sm = this.smMap.get(name);

          if (sm) {
            return sm;
          } else {
            console.error("获取的StateMachine: " + name + "不存在");
            let value = new (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
              error: Error()
            }), StateMachine) : StateMachine)();
            this.smMap.set(name, value);
            sm = value;
            return sm;
          }
        }
        /**向状态机中添加状态 */


        static AddStateToStateMachine(state) {
          this.GetStateMachine(state.stateMachineName).AddState(state.stateName, state);
        }
        /**删除状态机中的状态 */


        static RemoveStateToStateMachine(stateName, state, stateMachineName) {
          this.GetStateMachine(stateMachineName).RemoveState(stateName);
        }

      }, _defineProperty(_class2, "smMap", new Map()), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vU3RhdGVNYWNoaW5lL1NNTWFuZ2VyLnRzIl0sIm5hbWVzIjpbIlNNTmFtZSIsIl9kZWNvcmF0b3IiLCJTdGF0ZU1hY2hpbmUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJTTU1hbmdlciIsIkNyZWF0ZVN0YXRlTWFjaGluZSIsIm5hbWUiLCJzbSIsInNtTWFwIiwiZ2V0IiwiY29uc29sZSIsImVycm9yIiwidmFsdWUiLCJBZGRTdGF0ZSIsInNldCIsIkdldFN0YXRlTWFjaGluZSIsIkFkZFN0YXRlVG9TdGF0ZU1hY2hpbmUiLCJzdGF0ZSIsInN0YXRlTWFjaGluZU5hbWUiLCJzdGF0ZU5hbWUiLCJSZW1vdmVTdGF0ZVRvU3RhdGVNYWNoaW5lIiwiUmVtb3ZlU3RhdGUiLCJNYXAiXSwibWFwcGluZ3MiOiI7Ozt3REFNYUEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTEpDLE1BQUFBLFUsT0FBQUEsVTs7QUFFQUMsTUFBQUEsWSxtQkFBQUEsWTs7Ozs7Ozt3QkFHSUYsTSxHQUFOLE1BQU1BLE1BQU4sQ0FBYSxFOztzQkFBUEEsTSxzQkFDaUMsa0I7O09BR3hDO0FBQUVHLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCSCxVOzswQkFHakJJLFEsV0FEWkYsT0FBTyxDQUFDLFVBQUQsQyxtQ0FBUixNQUNhRSxRQURiLENBQ3NCO0FBRWxCO0FBQ0EsZUFBT0Msa0JBQVAsQ0FBMEJDLElBQTFCLEVBQThDO0FBQzFDLGNBQUlDLEVBQUUsR0FBRyxLQUFLQyxLQUFMLENBQVdDLEdBQVgsQ0FBZUgsSUFBZixDQUFUOztBQUNBLGNBQUlDLEVBQUosRUFBUTtBQUNKRyxZQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyx1QkFBdUJMLElBQXZCLEdBQThCLEtBQTVDO0FBQ0gsV0FGRCxNQUVPO0FBQ0gsZ0JBQUlNLEtBQUssR0FBRztBQUFBO0FBQUEsK0NBQVo7QUFDQUEsWUFBQUEsS0FBSyxDQUFDQyxRQUFOO0FBQ0EsaUJBQUtMLEtBQUwsQ0FBV00sR0FBWCxDQUFlUixJQUFmLEVBQXFCTSxLQUFyQjtBQUNIO0FBQ0o7QUFFRDs7O0FBQ0EsZUFBT0csZUFBUCxDQUF1QlQsSUFBdkIsRUFBbUQ7QUFDL0MsY0FBSUMsRUFBRSxHQUFHLEtBQUtDLEtBQUwsQ0FBV0MsR0FBWCxDQUFlSCxJQUFmLENBQVQ7O0FBQ0EsY0FBSUMsRUFBSixFQUFRO0FBQ0osbUJBQU9BLEVBQVA7QUFDSCxXQUZELE1BRU87QUFDSEcsWUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWMsc0JBQXNCTCxJQUF0QixHQUE2QixLQUEzQztBQUNBLGdCQUFJTSxLQUFLLEdBQUc7QUFBQTtBQUFBLCtDQUFaO0FBQ0EsaUJBQUtKLEtBQUwsQ0FBV00sR0FBWCxDQUFlUixJQUFmLEVBQXFCTSxLQUFyQjtBQUNBTCxZQUFBQSxFQUFFLEdBQUdLLEtBQUw7QUFDQSxtQkFBT0wsRUFBUDtBQUNIO0FBQ0o7QUFFRDs7O0FBQ0EsZUFBT1Msc0JBQVAsQ0FBOEJDLEtBQTlCLEVBQW1EO0FBQy9DLGVBQUtGLGVBQUwsQ0FBcUJFLEtBQUssQ0FBQ0MsZ0JBQTNCLEVBQTZDTCxRQUE3QyxDQUFzREksS0FBSyxDQUFDRSxTQUE1RCxFQUF1RUYsS0FBdkU7QUFDSDtBQUVEOzs7QUFDQSxlQUFPRyx5QkFBUCxDQUFpQ0QsU0FBakMsRUFBb0RGLEtBQXBELEVBQW1FQyxnQkFBbkUsRUFBbUc7QUFDL0YsZUFBS0gsZUFBTCxDQUFxQkcsZ0JBQXJCLEVBQXVDRyxXQUF2QyxDQUFtREYsU0FBbkQ7QUFDSDs7QUFwQ2lCLE8sb0NBQ2dDLElBQUlHLEdBQUosRSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgSVN0YXRlIH0gZnJvbSAnLi9JU3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVNYWNoaW5lIH0gZnJvbSAnLi9TdGF0ZU1hY2hpbmUnO1xuaW1wb3J0IHsgU3RhdGVUeXBlIH0gZnJvbSAnLi9TdGF0ZVR5cGUnO1xuXG5leHBvcnQgY2xhc3MgU01OYW1lIHtcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEdhbWVTdGF0ZU1hY2hpbmUgPSBcIkdhbWVTdGF0ZU1hY2hpbmVcIjtcbn1cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1NNTWFuZ2VyJylcbmV4cG9ydCBjbGFzcyBTTU1hbmdlciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgc21NYXA6IE1hcDxzdHJpbmcsIFN0YXRlTWFjaGluZT4gPSBuZXcgTWFwPHN0cmluZywgU3RhdGVNYWNoaW5lPigpO1xuICAgIC8qKuWIm+W7uueKtuaAgeacuiAqL1xuICAgIHN0YXRpYyBDcmVhdGVTdGF0ZU1hY2hpbmUobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGxldCBzbSA9IHRoaXMuc21NYXAuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAoc20pIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLopoHmt7vliqDnmoRTdGF0ZU1hY2hpbmU6IFwiICsgbmFtZSArIFwi5bey5a2Y5ZyoXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gbmV3IFN0YXRlTWFjaGluZSgpO1xuICAgICAgICAgICAgdmFsdWUuQWRkU3RhdGVcbiAgICAgICAgICAgIHRoaXMuc21NYXAuc2V0KG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKuiOt+WPlueKtuaAgeacuiAkJOiLpeiOt+WPluS4jeWIsO+8jOS8muiHquWKqOWIm+W7uuS4gOS4quWQjOWQjeeKtuaAgeacuu+8jOW5tui/lOWbnuS4gOS4qumUmeivr+itpuWRiiQkKi9cbiAgICBzdGF0aWMgR2V0U3RhdGVNYWNoaW5lKG5hbWU6IHN0cmluZyk6IFN0YXRlTWFjaGluZSB7XG4gICAgICAgIGxldCBzbSA9IHRoaXMuc21NYXAuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAoc20pIHtcbiAgICAgICAgICAgIHJldHVybiBzbTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLojrflj5bnmoRTdGF0ZU1hY2hpbmU6IFwiICsgbmFtZSArIFwi5LiN5a2Y5ZyoXCIpO1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gbmV3IFN0YXRlTWFjaGluZSgpO1xuICAgICAgICAgICAgdGhpcy5zbU1hcC5zZXQobmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgc20gPSB2YWx1ZVxuICAgICAgICAgICAgcmV0dXJuIHNtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq5ZCR54q25oCB5py65Lit5re75Yqg54q25oCBICovXG4gICAgc3RhdGljIEFkZFN0YXRlVG9TdGF0ZU1hY2hpbmUoc3RhdGU6IElTdGF0ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLkdldFN0YXRlTWFjaGluZShzdGF0ZS5zdGF0ZU1hY2hpbmVOYW1lKS5BZGRTdGF0ZShzdGF0ZS5zdGF0ZU5hbWUsIHN0YXRlKTtcbiAgICB9XG5cbiAgICAvKirliKDpmaTnirbmgIHmnLrkuK3nmoTnirbmgIEgKi9cbiAgICBzdGF0aWMgUmVtb3ZlU3RhdGVUb1N0YXRlTWFjaGluZShzdGF0ZU5hbWU6IHN0cmluZywgc3RhdGU6IElTdGF0ZSwgc3RhdGVNYWNoaW5lTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuR2V0U3RhdGVNYWNoaW5lKHN0YXRlTWFjaGluZU5hbWUpLlJlbW92ZVN0YXRlKHN0YXRlTmFtZSk7XG4gICAgfVxufVxuIl19