System.register(["cce.code-quality.cr", "cc", "../StateMachine/StateMachine.js", "../StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, director, Label, StateMachine, StateType, _dec, _class, _temp, _crd, ccclass, property, ListItem;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../StateMachine/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateType(extras) {
    _reporterNs.report("StateType", "../StateMachine/StateType", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      director = _cc.director;
      Label = _cc.Label;
    }, function (_StateMachineStateMachineJs) {
      StateMachine = _StateMachineStateMachineJs.StateMachine;
    }, function (_StateMachineStateTypeJs) {
      StateType = _StateMachineStateTypeJs.StateType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ac0d2RlcHRBIbUbwNI2B4aI", "ListItem", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ListItem", ListItem = (_dec = ccclass('ListItem'), _dec(_class = (_temp = class ListItem extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "data", {});
        }

        onEnable() {
          var _this$node$getChildBy;

          let label = (_this$node$getChildBy = this.node.getChildByName("Text")) === null || _this$node$getChildBy === void 0 ? void 0 : _this$node$getChildBy.getComponent(Label);
          if (label) label.string = this.data.id + "";
          let self = this;
          this.node.on(Node.EventType.TOUCH_END, () => {
            director.loadScene("GameScene"); // PopupManager.I.ClosePopup();

            let data = {
              data: self.data.data,
              type: self.data.type
            };
            (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
              error: Error()
            }), StateMachine) : StateMachine).ChangeState((_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
              error: Error()
            }), StateType) : StateType).ChooseLevelState, (_crd && StateType === void 0 ? (_reportPossibleCrUseOfStateType({
              error: Error()
            }), StateType) : StateType).StartGameState, null, data);
          });
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vTGlzdC9MaXN0SXRlbS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsImRpcmVjdG9yIiwiTGFiZWwiLCJTdGF0ZU1hY2hpbmUiLCJTdGF0ZVR5cGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJMaXN0SXRlbSIsIm9uRW5hYmxlIiwibGFiZWwiLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJzdHJpbmciLCJkYXRhIiwiaWQiLCJzZWxmIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJsb2FkU2NlbmUiLCJ0eXBlIiwiQ2hhbmdlU3RhdGUiLCJDaG9vc2VMZXZlbFN0YXRlIiwiU3RhcnRHYW1lU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLFEsT0FBQUEsUTtBQUFVQyxNQUFBQSxLLE9BQUFBLEs7O0FBRXZDQyxNQUFBQSxZLCtCQUFBQSxZOztBQUNBQyxNQUFBQSxTLDRCQUFBQSxTOzs7Ozs7O09BQ0g7QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE8sR0FBd0JSLFU7OzBCQUdqQlMsUSxXQURaRixPQUFPLENBQUMsVUFBRCxDLHlCQUFSLE1BQ2FFLFFBRGIsU0FDOEJSLFNBRDlCLENBQ3dDO0FBQUE7QUFBQTs7QUFBQSx3Q0FDeEIsRUFEd0I7QUFBQTs7QUFFcENTLFFBQUFBLFFBQVEsR0FBRztBQUFBOztBQUNQLGNBQUlDLEtBQUssNEJBQUcsS0FBS0MsSUFBTCxDQUFVQyxjQUFWLENBQXlCLE1BQXpCLENBQUgsMERBQUcsc0JBQWtDQyxZQUFsQyxDQUErQ1YsS0FBL0MsQ0FBWjtBQUNBLGNBQUlPLEtBQUosRUFDSUEsS0FBSyxDQUFDSSxNQUFOLEdBQWUsS0FBS0MsSUFBTCxDQUFVQyxFQUFWLEdBQWUsRUFBOUI7QUFFSixjQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUNBLGVBQUtOLElBQUwsQ0FBVU8sRUFBVixDQUFhakIsSUFBSSxDQUFDa0IsU0FBTCxDQUFlQyxTQUE1QixFQUF1QyxNQUFNO0FBQ3pDbEIsWUFBQUEsUUFBUSxDQUFDbUIsU0FBVCxDQUFtQixXQUFuQixFQUR5QyxDQUV6Qzs7QUFDQSxnQkFBSU4sSUFBSSxHQUFHO0FBQ1BBLGNBQUFBLElBQUksRUFBRUUsSUFBSSxDQUFDRixJQUFMLENBQVVBLElBRFQ7QUFFUE8sY0FBQUEsSUFBSSxFQUFFTCxJQUFJLENBQUNGLElBQUwsQ0FBVU87QUFGVCxhQUFYO0FBSUE7QUFBQTtBQUFBLDhDQUFhQyxXQUFiLENBQXlCO0FBQUE7QUFBQSx3Q0FBVUMsZ0JBQW5DLEVBQXFEO0FBQUE7QUFBQSx3Q0FBVUMsY0FBL0QsRUFBK0UsSUFBL0UsRUFBcUZWLElBQXJGO0FBQ0gsV0FSRDtBQVNIOztBQWpCbUMsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgZGlyZWN0b3IsIExhYmVsIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgUG9wdXBNYW5hZ2VyIH0gZnJvbSAnLi4vUG9wdXAvUG9wdXBNYW5hZ2VyJztcbmltcG9ydCB7IFN0YXRlTWFjaGluZSB9IGZyb20gJy4uL1N0YXRlTWFjaGluZS9TdGF0ZU1hY2hpbmUnO1xuaW1wb3J0IHsgU3RhdGVUeXBlIH0gZnJvbSAnLi4vU3RhdGVNYWNoaW5lL1N0YXRlVHlwZSc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnTGlzdEl0ZW0nKVxuZXhwb3J0IGNsYXNzIExpc3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBkYXRhOiBhbnkgPSB7fTtcbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgbGV0IGxhYmVsID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiVGV4dFwiKT8uZ2V0Q29tcG9uZW50KExhYmVsKTtcbiAgICAgICAgaWYgKGxhYmVsKVxuICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gdGhpcy5kYXRhLmlkICsgXCJcIjtcblxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMubm9kZS5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcbiAgICAgICAgICAgIGRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVTY2VuZVwiKTtcbiAgICAgICAgICAgIC8vIFBvcHVwTWFuYWdlci5JLkNsb3NlUG9wdXAoKTtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGRhdGE6IHNlbGYuZGF0YS5kYXRhLFxuICAgICAgICAgICAgICAgIHR5cGU6IHNlbGYuZGF0YS50eXBlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBTdGF0ZU1hY2hpbmUuQ2hhbmdlU3RhdGUoU3RhdGVUeXBlLkNob29zZUxldmVsU3RhdGUsIFN0YXRlVHlwZS5TdGFydEdhbWVTdGF0ZSwgbnVsbCwgZGF0YSk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuIl19