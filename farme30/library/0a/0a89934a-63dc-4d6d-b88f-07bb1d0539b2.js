System.register(["cce.code-quality.cr", "cc", "./StateMachine.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, StateMachine, _dec, _class, _class2, _temp, _crd, SMName, ccclass, property, SMManger;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "./StateMachine", _context.meta, extras);
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
      _decorator = _cc._decorator;
    }, function (_StateMachineJs) {
      StateMachine = _StateMachineJs.StateMachine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0a899NKY9xNbbiPB7sdBTmy", "SMManger", _context.meta);

      _export("SMName", SMName = function SMName() {});

      _defineProperty(SMName, "GameStateMachine", "GameStateMachine");

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SMManger", SMManger = (_dec = ccclass('SMManger'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        function SMManger() {}

        /**创建状态机 */
        SMManger.CreateStateMachine = function CreateStateMachine(name) {
          var sm = this.smMap.get(name);

          if (sm) {
            console.error("要添加的StateMachine: " + name + "已存在");
          } else {
            var value = new (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
              error: Error()
            }), StateMachine) : StateMachine)();
            value.AddState;
            this.smMap.set(name, value);
          }
        }
        /**获取状态机 $$若获取不到，会自动创建一个同名状态机，并返回一个错误警告$$*/
        ;

        SMManger.GetStateMachine = function GetStateMachine(name) {
          var sm = this.smMap.get(name);

          if (sm) {
            return sm;
          } else {
            console.error("获取的StateMachine: " + name + "不存在");
            var value = new (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
              error: Error()
            }), StateMachine) : StateMachine)();
            this.smMap.set(name, value);
            sm = value;
            return sm;
          }
        }
        /**向状态机中添加状态 */
        ;

        SMManger.AddStateToStateMachine = function AddStateToStateMachine(state) {
          this.GetStateMachine(state.stateMachineName).AddState(state.stateName, state);
        }
        /**删除状态机中的状态 */
        ;

        SMManger.RemoveStateToStateMachine = function RemoveStateToStateMachine(stateName, state, stateMachineName) {
          this.GetStateMachine(stateMachineName).RemoveState(stateName);
        };

        return SMManger;
      }(), _defineProperty(_class2, "smMap", new Map()), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vU3RhdGVNYWNoaW5lL1NNTWFuZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJTdGF0ZU1hY2hpbmUiLCJTTU5hbWUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJTTU1hbmdlciIsIkNyZWF0ZVN0YXRlTWFjaGluZSIsIm5hbWUiLCJzbSIsInNtTWFwIiwiZ2V0IiwiY29uc29sZSIsImVycm9yIiwidmFsdWUiLCJBZGRTdGF0ZSIsInNldCIsIkdldFN0YXRlTWFjaGluZSIsIkFkZFN0YXRlVG9TdGF0ZU1hY2hpbmUiLCJzdGF0ZSIsInN0YXRlTWFjaGluZU5hbWUiLCJzdGF0ZU5hbWUiLCJSZW1vdmVTdGF0ZVRvU3RhdGVNYWNoaW5lIiwiUmVtb3ZlU3RhdGUiLCJNYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ1NBLE1BQUFBLFUsT0FBQUEsVTs7QUFFQUMsTUFBQUEsWSxtQkFBQUEsWTs7Ozs7Ozt3QkFHSUMsTTs7c0JBQUFBLE0sc0JBQ2lDLGtCOztBQUd0Q0MsTUFBQUEsTyxHQUFzQkgsVSxDQUF0QkcsTztBQUFTQyxNQUFBQSxRLEdBQWFKLFUsQ0FBYkksUTs7MEJBR0pDLFEsV0FEWkYsT0FBTyxDQUFDLFVBQUQsQzs7O0FBR0o7aUJBQ09HLGtCLEdBQVAsNEJBQTBCQyxJQUExQixFQUE4QztBQUMxQyxjQUFJQyxFQUFFLEdBQUcsS0FBS0MsS0FBTCxDQUFXQyxHQUFYLENBQWVILElBQWYsQ0FBVDs7QUFDQSxjQUFJQyxFQUFKLEVBQVE7QUFDSkcsWUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWMsdUJBQXVCTCxJQUF2QixHQUE4QixLQUE1QztBQUNILFdBRkQsTUFFTztBQUNILGdCQUFJTSxLQUFLLEdBQUc7QUFBQTtBQUFBLCtDQUFaO0FBQ0FBLFlBQUFBLEtBQUssQ0FBQ0MsUUFBTjtBQUNBLGlCQUFLTCxLQUFMLENBQVdNLEdBQVgsQ0FBZVIsSUFBZixFQUFxQk0sS0FBckI7QUFDSDtBQUNKO0FBRUQ7OztpQkFDT0csZSxHQUFQLHlCQUF1QlQsSUFBdkIsRUFBbUQ7QUFDL0MsY0FBSUMsRUFBRSxHQUFHLEtBQUtDLEtBQUwsQ0FBV0MsR0FBWCxDQUFlSCxJQUFmLENBQVQ7O0FBQ0EsY0FBSUMsRUFBSixFQUFRO0FBQ0osbUJBQU9BLEVBQVA7QUFDSCxXQUZELE1BRU87QUFDSEcsWUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWMsc0JBQXNCTCxJQUF0QixHQUE2QixLQUEzQztBQUNBLGdCQUFJTSxLQUFLLEdBQUc7QUFBQTtBQUFBLCtDQUFaO0FBQ0EsaUJBQUtKLEtBQUwsQ0FBV00sR0FBWCxDQUFlUixJQUFmLEVBQXFCTSxLQUFyQjtBQUNBTCxZQUFBQSxFQUFFLEdBQUdLLEtBQUw7QUFDQSxtQkFBT0wsRUFBUDtBQUNIO0FBQ0o7QUFFRDs7O2lCQUNPUyxzQixHQUFQLGdDQUE4QkMsS0FBOUIsRUFBbUQ7QUFDL0MsZUFBS0YsZUFBTCxDQUFxQkUsS0FBSyxDQUFDQyxnQkFBM0IsRUFBNkNMLFFBQTdDLENBQXNESSxLQUFLLENBQUNFLFNBQTVELEVBQXVFRixLQUF2RTtBQUNIO0FBRUQ7OztpQkFDT0cseUIsR0FBUCxtQ0FBaUNELFNBQWpDLEVBQW9ERixLQUFwRCxFQUFtRUMsZ0JBQW5FLEVBQW1HO0FBQy9GLGVBQUtILGVBQUwsQ0FBcUJHLGdCQUFyQixFQUF1Q0csV0FBdkMsQ0FBbURGLFNBQW5EO0FBQ0gsUzs7OzZDQW5DaUQsSUFBSUcsR0FBSixFIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBJU3RhdGUgfSBmcm9tICcuL0lTdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZU1hY2hpbmUgfSBmcm9tICcuL1N0YXRlTWFjaGluZSc7XG5pbXBvcnQgeyBTdGF0ZVR5cGUgfSBmcm9tICcuL1N0YXRlVHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBTTU5hbWUge1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgR2FtZVN0YXRlTWFjaGluZSA9IFwiR2FtZVN0YXRlTWFjaGluZVwiO1xufVxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnU01NYW5nZXInKVxuZXhwb3J0IGNsYXNzIFNNTWFuZ2VyIHtcbiAgICBwcml2YXRlIHN0YXRpYyBzbU1hcDogTWFwPHN0cmluZywgU3RhdGVNYWNoaW5lPiA9IG5ldyBNYXA8c3RyaW5nLCBTdGF0ZU1hY2hpbmU+KCk7XG4gICAgLyoq5Yib5bu654q25oCB5py6ICovXG4gICAgc3RhdGljIENyZWF0ZVN0YXRlTWFjaGluZShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgbGV0IHNtID0gdGhpcy5zbU1hcC5nZXQobmFtZSk7XG4gICAgICAgIGlmIChzbSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuimgea3u+WKoOeahFN0YXRlTWFjaGluZTogXCIgKyBuYW1lICsgXCLlt7LlrZjlnKhcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBuZXcgU3RhdGVNYWNoaW5lKCk7XG4gICAgICAgICAgICB2YWx1ZS5BZGRTdGF0ZVxuICAgICAgICAgICAgdGhpcy5zbU1hcC5zZXQobmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq6I635Y+W54q25oCB5py6ICQk6Iul6I635Y+W5LiN5Yiw77yM5Lya6Ieq5Yqo5Yib5bu65LiA5Liq5ZCM5ZCN54q25oCB5py677yM5bm26L+U5Zue5LiA5Liq6ZSZ6K+v6K2m5ZGKJCQqL1xuICAgIHN0YXRpYyBHZXRTdGF0ZU1hY2hpbmUobmFtZTogc3RyaW5nKTogU3RhdGVNYWNoaW5lIHtcbiAgICAgICAgbGV0IHNtID0gdGhpcy5zbU1hcC5nZXQobmFtZSk7XG4gICAgICAgIGlmIChzbSkge1xuICAgICAgICAgICAgcmV0dXJuIHNtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuiOt+WPlueahFN0YXRlTWFjaGluZTogXCIgKyBuYW1lICsgXCLkuI3lrZjlnKhcIik7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBuZXcgU3RhdGVNYWNoaW5lKCk7XG4gICAgICAgICAgICB0aGlzLnNtTWFwLnNldChuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICBzbSA9IHZhbHVlXG4gICAgICAgICAgICByZXR1cm4gc207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirlkJHnirbmgIHmnLrkuK3mt7vliqDnirbmgIEgKi9cbiAgICBzdGF0aWMgQWRkU3RhdGVUb1N0YXRlTWFjaGluZShzdGF0ZTogSVN0YXRlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuR2V0U3RhdGVNYWNoaW5lKHN0YXRlLnN0YXRlTWFjaGluZU5hbWUpLkFkZFN0YXRlKHN0YXRlLnN0YXRlTmFtZSwgc3RhdGUpO1xuICAgIH1cblxuICAgIC8qKuWIoOmZpOeKtuaAgeacuuS4reeahOeKtuaAgSAqL1xuICAgIHN0YXRpYyBSZW1vdmVTdGF0ZVRvU3RhdGVNYWNoaW5lKHN0YXRlTmFtZTogc3RyaW5nLCBzdGF0ZTogSVN0YXRlLCBzdGF0ZU1hY2hpbmVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5HZXRTdGF0ZU1hY2hpbmUoc3RhdGVNYWNoaW5lTmFtZSkuUmVtb3ZlU3RhdGUoc3RhdGVOYW1lKTtcbiAgICB9XG59XG4iXX0=