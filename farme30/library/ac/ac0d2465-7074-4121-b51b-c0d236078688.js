System.register(["cce.code-quality.cr", "cc", "../StateMachine/StateMachine.js", "../StateMachine/StateType.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, director, Label, StateMachine, StateType, _dec, _class, _temp, _crd, ccclass, property, ListItem;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ListItem", ListItem = (_dec = ccclass('ListItem'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ListItem, _Component);

        function ListItem() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "data", {});

          return _this;
        }

        var _proto = ListItem.prototype;

        _proto.onEnable = function onEnable() {
          var _this$node$getChildBy;

          var label = (_this$node$getChildBy = this.node.getChildByName("Text")) === null || _this$node$getChildBy === void 0 ? void 0 : _this$node$getChildBy.getComponent(Label);
          if (label) label.string = this.data.id + "";
          var self = this;
          this.node.on(Node.EventType.TOUCH_END, function () {
            director.loadScene("GameScene"); // PopupManager.I.ClosePopup();

            var data = {
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
        };

        return ListItem;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vTGlzdC9MaXN0SXRlbS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsImRpcmVjdG9yIiwiTGFiZWwiLCJTdGF0ZU1hY2hpbmUiLCJTdGF0ZVR5cGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJMaXN0SXRlbSIsIm9uRW5hYmxlIiwibGFiZWwiLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJzdHJpbmciLCJkYXRhIiwiaWQiLCJzZWxmIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJsb2FkU2NlbmUiLCJ0eXBlIiwiQ2hhbmdlU3RhdGUiLCJDaG9vc2VMZXZlbFN0YXRlIiwiU3RhcnRHYW1lU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxRLE9BQUFBLFE7QUFBVUMsTUFBQUEsSyxPQUFBQSxLOztBQUV2Q0MsTUFBQUEsWSwrQkFBQUEsWTs7QUFDQUMsTUFBQUEsUyw0QkFBQUEsUzs7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCUCxVLENBQXRCTyxPO0FBQVNDLE1BQUFBLFEsR0FBYVIsVSxDQUFiUSxROzswQkFHSkMsUSxXQURaRixPQUFPLENBQUMsVUFBRCxDOzs7Ozs7Ozs7Ozs7aUVBRVEsRTs7Ozs7OztlQUNaRyxRLEdBQUEsb0JBQVc7QUFBQTs7QUFDUCxjQUFJQyxLQUFLLDRCQUFHLEtBQUtDLElBQUwsQ0FBVUMsY0FBVixDQUF5QixNQUF6QixDQUFILDBEQUFHLHNCQUFrQ0MsWUFBbEMsQ0FBK0NWLEtBQS9DLENBQVo7QUFDQSxjQUFJTyxLQUFKLEVBQ0lBLEtBQUssQ0FBQ0ksTUFBTixHQUFlLEtBQUtDLElBQUwsQ0FBVUMsRUFBVixHQUFlLEVBQTlCO0FBRUosY0FBSUMsSUFBSSxHQUFHLElBQVg7QUFDQSxlQUFLTixJQUFMLENBQVVPLEVBQVYsQ0FBYWpCLElBQUksQ0FBQ2tCLFNBQUwsQ0FBZUMsU0FBNUIsRUFBdUMsWUFBTTtBQUN6Q2xCLFlBQUFBLFFBQVEsQ0FBQ21CLFNBQVQsQ0FBbUIsV0FBbkIsRUFEeUMsQ0FFekM7O0FBQ0EsZ0JBQUlOLElBQUksR0FBRztBQUNQQSxjQUFBQSxJQUFJLEVBQUVFLElBQUksQ0FBQ0YsSUFBTCxDQUFVQSxJQURUO0FBRVBPLGNBQUFBLElBQUksRUFBRUwsSUFBSSxDQUFDRixJQUFMLENBQVVPO0FBRlQsYUFBWDtBQUlBO0FBQUE7QUFBQSw4Q0FBYUMsV0FBYixDQUF5QjtBQUFBO0FBQUEsd0NBQVVDLGdCQUFuQyxFQUFxRDtBQUFBO0FBQUEsd0NBQVVDLGNBQS9ELEVBQStFLElBQS9FLEVBQXFGVixJQUFyRjtBQUNILFdBUkQ7QUFTSCxTOzs7UUFqQnlCZixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBkaXJlY3RvciwgTGFiZWwgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBQb3B1cE1hbmFnZXIgfSBmcm9tICcuLi9Qb3B1cC9Qb3B1cE1hbmFnZXInO1xuaW1wb3J0IHsgU3RhdGVNYWNoaW5lIH0gZnJvbSAnLi4vU3RhdGVNYWNoaW5lL1N0YXRlTWFjaGluZSc7XG5pbXBvcnQgeyBTdGF0ZVR5cGUgfSBmcm9tICcuLi9TdGF0ZU1hY2hpbmUvU3RhdGVUeXBlJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdMaXN0SXRlbScpXG5leHBvcnQgY2xhc3MgTGlzdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGRhdGE6IGFueSA9IHt9O1xuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICBsZXQgbGFiZWwgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUZXh0XCIpPy5nZXRDb21wb25lbnQoTGFiZWwpO1xuICAgICAgICBpZiAobGFiZWwpXG4gICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSB0aGlzLmRhdGEuaWQgKyBcIlwiO1xuXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5ub2RlLm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKCkgPT4ge1xuICAgICAgICAgICAgZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZVNjZW5lXCIpO1xuICAgICAgICAgICAgLy8gUG9wdXBNYW5hZ2VyLkkuQ2xvc2VQb3B1cCgpO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgZGF0YTogc2VsZi5kYXRhLmRhdGEsXG4gICAgICAgICAgICAgICAgdHlwZTogc2VsZi5kYXRhLnR5cGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFN0YXRlTWFjaGluZS5DaGFuZ2VTdGF0ZShTdGF0ZVR5cGUuQ2hvb3NlTGV2ZWxTdGF0ZSwgU3RhdGVUeXBlLlN0YXJ0R2FtZVN0YXRlLCBudWxsLCBkYXRhKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG4iXX0=