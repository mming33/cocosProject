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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9VdGlscy9zdG9wUHJvcGFnYXRpb24udHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJzdG9wUHJvcGFnYXRpb24iLCJzdGFydCIsIm5vZGUiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiZXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7Ozs7Ozs7T0FFMUI7QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE8sR0FBd0JKLFU7O3lCQUdUSyxlLEdBRHBCRixPLFVBQUQsTUFDcUJFLGVBRHJCLFNBQzZDSixTQUQ3QyxDQUN1RDtBQUVuREssUUFBQUEsS0FBSyxHQUFHO0FBQ0osZUFBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFOLElBQUksQ0FBQ08sU0FBTCxDQUFlQyxXQUE1QixFQUEwQ0MsS0FBRCxJQUFnQjtBQUFFQSxZQUFBQSxLQUFLLENBQUNOLGVBQU47QUFBeUIsV0FBcEYsRUFBc0YsSUFBdEY7QUFDSDs7QUFKa0QsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gXCJjY1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3RvcFByb3BhZ2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLm5vZGUub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudDogYW55KSA9PiB7IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpIH0sIHRoaXMpO1xuICAgIH1cbn1cbiJdfQ==