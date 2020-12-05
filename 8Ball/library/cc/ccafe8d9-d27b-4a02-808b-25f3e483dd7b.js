System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, GlobalGameData;

  function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "ccafejZ0ntKAoCLJfPkg917", "GlobalGameData", _context.meta);

      _crd = true;

      /**
       * CopyRight:
       * 全局数据类
       */
      _export("default", GlobalGameData = /*#__PURE__*/function () {
        function GlobalGameData() {
          _classCallCheck(this, GlobalGameData);
        }

        _createClass(GlobalGameData, null, [{
          key: "runPromiseArray",
          //声音开关;
          //用户ID；
          //服务器链接情况;
          //分享链接;
          //房间id;
          //执行Promise的队列动作;
          value: function runPromiseArray(parray) {
            var p = Promise.resolve();

            var _iterator = _createForOfIteratorHelper(parray),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var promise = _step.value;
                p = p.then(promise)["catch"](function () {
                  return p;
                });
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          } //设置名字长度；

        }, {
          key: "subNickName",
          value: function subNickName(nameStr) {
            if (nameStr.length > 8) {
              nameStr = nameStr.substring(0, 8) + '...';
            }

            return nameStr;
          }
        }]);

        return GlobalGameData;
      }());

      GlobalGameData.audioEngineOn = true;
      GlobalGameData.userId = -1;
      GlobalGameData.socketStatus = false;
      GlobalGameData.shareUrl = '';
      GlobalGameData.roomId = 0;
      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvOEJhbGwvYXNzZXRzL1NjcmlwdHMvQ29tbW9uL1V0aWxzL0dsb2JhbEdhbWVEYXRhLnRzIl0sIm5hbWVzIjpbIkdsb2JhbEdhbWVEYXRhIiwicGFycmF5IiwicCIsIlByb21pc2UiLCJyZXNvbHZlIiwicHJvbWlzZSIsInRoZW4iLCJuYW1lU3RyIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiYXVkaW9FbmdpbmVPbiIsInVzZXJJZCIsInNvY2tldFN0YXR1cyIsInNoYXJlVXJsIiwicm9vbUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O3lCQUtxQkEsYzs7Ozs7OztBQUVvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSXJFOzBDQUM4QkMsTSxFQUFRO0FBQ2xDLGdCQUFJQyxDQUFDLEdBQUdDLE9BQU8sQ0FBQ0MsT0FBUixFQUFSOztBQURrQyx1REFFZEgsTUFGYztBQUFBOztBQUFBO0FBRWxDLGtFQUE0QjtBQUFBLG9CQUFuQkksT0FBbUI7QUFDeEJILGdCQUFBQSxDQUFDLEdBQUdBLENBQUMsQ0FBQ0ksSUFBRixDQUFPRCxPQUFQLFdBQXNCLFlBQUk7QUFDMUIseUJBQU9ILENBQVA7QUFDSCxpQkFGRyxDQUFKO0FBR0g7QUFOaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9yQyxXLENBRUQ7Ozs7c0NBQzBCSyxPLEVBQWlCO0FBQ3ZDLGdCQUFJQSxPQUFPLENBQUNDLE1BQVIsR0FBaUIsQ0FBckIsRUFBd0I7QUFDcEJELGNBQUFBLE9BQU8sR0FBR0EsT0FBTyxDQUFDRSxTQUFSLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLElBQTBCLEtBQXBDO0FBQ0g7O0FBQ0QsbUJBQU9GLE9BQVA7QUFDSDs7Ozs7O0FBMUJnQlAsTUFBQUEsYyxDQUVIVSxhLEdBQXlCLEk7QUFGdEJWLE1BQUFBLGMsQ0FHSFcsTSxHQUFpQixDQUFDLEM7QUFIZlgsTUFBQUEsYyxDQUlIWSxZLEdBQXdCLEs7QUFKckJaLE1BQUFBLGMsQ0FLSGEsUSxHQUFtQixFO0FBTGhCYixNQUFBQSxjLENBTUhjLE0sR0FBZ0IsQyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBDb3B5UmlnaHQ6XG4gKiDlhajlsYDmlbDmja7nsbtcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbG9iYWxHYW1lRGF0YSB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGF1ZGlvRW5naW5lT246IGJvb2xlYW4gPSB0cnVlOyAgICAgICAgICAgICAgICAgICAgICAgICAvL+WjsOmfs+W8gOWFsztcbiAgICBwdWJsaWMgc3RhdGljIHVzZXJJZDogbnVtYmVyID0gLTE7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+eUqOaIt0lE77ybXG4gICAgcHVibGljIHN0YXRpYyBzb2NrZXRTdGF0dXM6IGJvb2xlYW4gPSBmYWxzZTsgICAgICAgICAgICAgICAgICAgICAgICAgLy/mnI3liqHlmajpk77mjqXmg4XlhrU7XG4gICAgcHVibGljIHN0YXRpYyBzaGFyZVVybDogc3RyaW5nID0gJyc7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liIbkuqvpk77mjqU7XG4gICAgcHVibGljIHN0YXRpYyByb29tSWQ6bnVtYmVyID0gMDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/miL/pl7RpZDtcblxuICAgIFxuXG4gICAgLy/miafooYxQcm9taXNl55qE6Zif5YiX5Yqo5L2cO1xuICAgIHB1YmxpYyBzdGF0aWMgcnVuUHJvbWlzZUFycmF5KHBhcnJheSkge1xuICAgICAgICBsZXQgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICBmb3IgKGxldCBwcm9taXNlIG9mIHBhcnJheSkge1xuICAgICAgICAgICAgcCA9IHAudGhlbihwcm9taXNlKS5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+iuvue9ruWQjeWtl+mVv+W6pu+8m1xuICAgIHB1YmxpYyBzdGF0aWMgc3ViTmlja05hbWUobmFtZVN0cjogc3RyaW5nKSB7XG4gICAgICAgIGlmIChuYW1lU3RyLmxlbmd0aCA+IDgpIHtcbiAgICAgICAgICAgIG5hbWVTdHIgPSBuYW1lU3RyLnN1YnN0cmluZygwLCA4KSArICcuLi4nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuYW1lU3RyO1xuICAgIH1cblxuXG59Il19