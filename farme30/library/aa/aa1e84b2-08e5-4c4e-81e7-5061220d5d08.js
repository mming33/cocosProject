System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, _class, _crd, ccclass, property, stopPropagation;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("default", stopPropagation = ccclass(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(stopPropagation, _Component);

        function stopPropagation() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = stopPropagation.prototype;

        _proto.start = function start() {
          this.node.on(Node.EventType.TOUCH_START, function (event) {
            event.stopPropagation();
          }, this);
        };

        return stopPropagation;
      }(Component)) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9VdGlscy9zdG9wUHJvcGFnYXRpb24udHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJzdG9wUHJvcGFnYXRpb24iLCJzdGFydCIsIm5vZGUiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiZXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTs7Ozs7OztBQUV4QkMsTUFBQUEsTyxHQUFzQkgsVSxDQUF0QkcsTztBQUFTQyxNQUFBQSxRLEdBQWFKLFUsQ0FBYkksUTs7eUJBR0lDLGUsR0FEcEJGLE87Ozs7Ozs7OztlQUdHRyxLLEdBQUEsaUJBQVE7QUFDSixlQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYU4sSUFBSSxDQUFDTyxTQUFMLENBQWVDLFdBQTVCLEVBQXlDLFVBQUNDLEtBQUQsRUFBZ0I7QUFBRUEsWUFBQUEsS0FBSyxDQUFDTixlQUFOO0FBQXlCLFdBQXBGLEVBQXNGLElBQXRGO0FBQ0gsUzs7O1FBSndDSixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSBcImNjXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzdG9wUHJvcGFnYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50OiBhbnkpID0+IHsgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkgfSwgdGhpcyk7XG4gICAgfVxufVxuIl19