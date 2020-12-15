System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, _class, _crd, ccclass, property, stopPropagation;

  _export("_class", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa1e8SyCOVMToHnUGEiDV0I", "stopPropagation", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", stopPropagation = ccclass(_class = class stopPropagation extends Component {
        start() {
          this.node.on(Node.EventType.TOUCH_START, event => {
            event.stopPropagation();
          }, this);
        }

      }) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vVXRpbHMvc3RvcFByb3BhZ2F0aW9uLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiY2NjbGFzcyIsInByb3BlcnR5Iiwic3RvcFByb3BhZ2F0aW9uIiwic3RhcnQiLCJub2RlIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsImV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJOzs7Ozs7O09BRTFCO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCSixVOzt5QkFHVEssZSxHQURwQkYsTyxVQUFELE1BQ3FCRSxlQURyQixTQUM2Q0osU0FEN0MsQ0FDdUQ7QUFFbkRLLFFBQUFBLEtBQUssR0FBRztBQUNKLGVBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhTixJQUFJLENBQUNPLFNBQUwsQ0FBZUMsV0FBNUIsRUFBMENDLEtBQUQsSUFBZ0I7QUFBRUEsWUFBQUEsS0FBSyxDQUFDTixlQUFOO0FBQXlCLFdBQXBGLEVBQXNGLElBQXRGO0FBQ0g7O0FBSmtELE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tIFwiY2NcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHN0b3BQcm9wYWdhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQ6IGFueSkgPT4geyBldmVudC5zdG9wUHJvcGFnYXRpb24oKSB9LCB0aGlzKTtcbiAgICB9XG59XG4iXX0=