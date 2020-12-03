System.register(["cc", "code-quality:cr", "../../../Utils/MKMessageManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, MKMessageManager, _dec, _class, _crd, ccclass, property, ExitBtn;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfMKMessageManager(extras) {
    _reporterNs.report("MKMessageManager", "../../../Utils/MKMessageManager", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_UtilsMKMessageManagerJs) {
      MKMessageManager = _UtilsMKMessageManagerJs.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "cb38cNpiKtJp6AcHkVD01zP", "ExitBtn", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ExitBtn", ExitBtn = (_dec = ccclass('ExitBtn'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(ExitBtn, _Component);

        function ExitBtn() {
          _classCallCheck(this, ExitBtn);

          return _possibleConstructorReturn(this, _getPrototypeOf(ExitBtn).apply(this, arguments));
        }

        _createClass(ExitBtn, [{
          key: "ExitGame",
          value: function ExitGame() {
            (_crd && MKMessageManager === void 0 ? (_reportPossibleCrUseOfMKMessageManager({
              error: Error()
            }), MKMessageManager) : MKMessageManager).exitGame();
          }
        }]);

        return ExitBtn;
      }(Component)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL0dhbWUvR2FtZUNvbW1vbi9VSS9FeGl0QnRuLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJNS01lc3NhZ2VNYW5hZ2VyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiRXhpdEJ0biIsImV4aXRHYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTOzs7O0FBQ2RDLE1BQUFBLGdCOzs7Ozs7QUFDQ0MsTUFBQUEsTyxHQUFzQkgsVSxDQUF0QkcsTztBQUFTQyxNQUFBQSxRLEdBQWFKLFUsQ0FBYkksUTs7eUJBR0pDLE8sV0FEWkYsT0FBTyxDQUFDLFNBQUQsQzs7Ozs7Ozs7Ozs7cUNBRU87QUFDUDtBQUFBO0FBQUEsc0RBQWlCRyxRQUFqQjtBQUNIOzs7O1FBSHdCTCxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSAnY2MnO1xuaW1wb3J0IE1LTWVzc2FnZU1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vVXRpbHMvTUtNZXNzYWdlTWFuYWdlcic7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnRXhpdEJ0bicpXG5leHBvcnQgY2xhc3MgRXhpdEJ0biBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgRXhpdEdhbWUoKSB7XG4gICAgICAgIE1LTWVzc2FnZU1hbmFnZXIuZXhpdEdhbWUoKTtcbiAgICB9XG59XG4iXX0=