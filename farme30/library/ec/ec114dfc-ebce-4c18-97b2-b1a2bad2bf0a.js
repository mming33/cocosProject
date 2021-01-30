System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, isValid, _dec, _class, _class2, _temp, _crd, EventType, ccclass, property, MyEvent;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      isValid = _cc.isValid;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ec11438685MGJeysaK60r8K", "MyEvent", _context.meta);

      _export("EventType", EventType = function EventType() {});

      _defineProperty(EventType, "TestEvent", "TestEvent");

      _defineProperty(EventType, "LoadResOver", "LoadResOver");

      _defineProperty(EventType, "LoadStates", "LoadStates");

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**事件机制 注册 -> 派发 -> 注册时回调执行 */

      _export("MyEvent", MyEvent = (_dec = ccclass('MyEvent'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        function MyEvent() {
          _defineProperty(this, "list", {});
        }

        var _proto = MyEvent.prototype;

        /**
         *  注册消息
         * @param key key
         * @param func 回调
         * @param type 区别其他key值相同的注册
         */
        _proto.on = function on(key, func, type) {
          if (this.list[key] == null) {
            this.list[key] = [];
          }

          var d = {};
          d.func = func;
          d.type = type;
          this.list[key].push(d);
        }
        /**
         * 移除一个消息
         */
        ;

        _proto.remove = function remove(key, type) {
          if (this.list[key]) {
            var data = this.list[key];

            for (var i = 0; i < data.length; i++) {
              if (data[i].type == type) {
                data.splice(i, 1);
                --i;
              }
            }
          }
        }
        /**
         * 移除type相同的所有消息
         */
        ;

        _proto.removeByNode = function removeByNode(type) {
          for (var p in this.list) {
            var data = this.list[p];

            for (var i = 0; i < data.length; i++) {
              if (data[i].type == type) {
                data.splice(i, 1);
                --i;
              }
            }
          }
        }
        /**
        * 移除key注册的所有消息
        */
        ;

        _proto.removeByKey = function removeByKey(key) {
          delete this.list[key];
        }
        /**
         * 派发消息
         */
        ;

        _proto.emit = function emit(key, arg) {
          if (this.list[key]) {
            var funcs = this.list[key].concat();

            for (var i = 0; i < funcs.length; i++) {
              if (funcs[i].type && isValid(funcs[i].type)) {
                funcs[i].func(arg, funcs[i].type);
              }
            }
          }
        };

        _createClass(MyEvent, null, [{
          key: "I",
          get: function get() {
            if (!this.singleton) {
              this.singleton = new MyEvent();
            }

            return this.singleton;
          }
        }]);

        return MyEvent;
      }(), _defineProperty(_class2, "singleton", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vRXZlbnRzL015RXZlbnQudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsImlzVmFsaWQiLCJFdmVudFR5cGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJNeUV2ZW50Iiwib24iLCJrZXkiLCJmdW5jIiwidHlwZSIsImxpc3QiLCJkIiwicHVzaCIsInJlbW92ZSIsImRhdGEiLCJpIiwibGVuZ3RoIiwic3BsaWNlIiwicmVtb3ZlQnlOb2RlIiwicCIsInJlbW92ZUJ5S2V5IiwiZW1pdCIsImFyZyIsImZ1bmNzIiwiY29uY2F0Iiwic2luZ2xldG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRU0EsTUFBQUEsVSxPQUFBQSxVO0FBQXVDQyxNQUFBQSxPLE9BQUFBLE87Ozs7Ozs7MkJBUm5DQyxTOztzQkFBQUEsUyxlQUNrQyxXOztzQkFEbENBLFMsaUJBR29DLGE7O3NCQUhwQ0EsUyxnQkFLbUMsWTs7QUFJeENDLE1BQUFBLE8sR0FBc0JILFUsQ0FBdEJHLE87QUFBU0MsTUFBQUEsUSxHQUFhSixVLENBQWJJLFE7QUFHakI7O3lCQUVhQyxPLFdBRFpGLE9BQU8sQ0FBQyxTQUFELEM7O3dDQUdRLEU7Ozs7O0FBQ1o7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBQ0lHLEUsR0FBQSxZQUFHQyxHQUFILEVBQWdCQyxJQUFoQixFQUFnQ0MsSUFBaEMsRUFBOEM7QUFDMUMsY0FBSSxLQUFLQyxJQUFMLENBQVVILEdBQVYsS0FBa0IsSUFBdEIsRUFBNEI7QUFDeEIsaUJBQUtHLElBQUwsQ0FBVUgsR0FBVixJQUFpQixFQUFqQjtBQUNIOztBQUNELGNBQUlJLENBQU0sR0FBRyxFQUFiO0FBQ0FBLFVBQUFBLENBQUMsQ0FBQ0gsSUFBRixHQUFTQSxJQUFUO0FBQ0FHLFVBQUFBLENBQUMsQ0FBQ0YsSUFBRixHQUFTQSxJQUFUO0FBQ0MsZUFBS0MsSUFBTCxDQUFVSCxHQUFWLENBQUQsQ0FBaUJLLElBQWpCLENBQXNCRCxDQUF0QjtBQUNIO0FBQ0Q7QUFDSjtBQUNBOzs7ZUFDSUUsTSxHQUFBLGdCQUFPTixHQUFQLEVBQW9CRSxJQUFwQixFQUFrQztBQUM5QixjQUFJLEtBQUtDLElBQUwsQ0FBVUgsR0FBVixDQUFKLEVBQW9CO0FBQ2hCLGdCQUFJTyxJQUFJLEdBQUcsS0FBS0osSUFBTCxDQUFVSCxHQUFWLENBQVg7O0FBQ0EsaUJBQUssSUFBSVEsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsSUFBSSxDQUFDRSxNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxrQkFBSUQsSUFBSSxDQUFDQyxDQUFELENBQUosQ0FBUU4sSUFBUixJQUFnQkEsSUFBcEIsRUFBMEI7QUFDdEJLLGdCQUFBQSxJQUFJLENBQUNHLE1BQUwsQ0FBWUYsQ0FBWixFQUFlLENBQWY7QUFDQSxrQkFBRUEsQ0FBRjtBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBQ0Q7QUFDSjtBQUNBOzs7ZUFDSUcsWSxHQUFBLHNCQUFhVCxJQUFiLEVBQTJCO0FBQ3ZCLGVBQUssSUFBSVUsQ0FBVCxJQUFjLEtBQUtULElBQW5CLEVBQXlCO0FBQ3JCLGdCQUFJSSxJQUFJLEdBQUcsS0FBS0osSUFBTCxDQUFVUyxDQUFWLENBQVg7O0FBQ0EsaUJBQUssSUFBSUosQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsSUFBSSxDQUFDRSxNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztBQUNsQyxrQkFBSUQsSUFBSSxDQUFDQyxDQUFELENBQUosQ0FBUU4sSUFBUixJQUFnQkEsSUFBcEIsRUFBMEI7QUFDdEJLLGdCQUFBQSxJQUFJLENBQUNHLE1BQUwsQ0FBWUYsQ0FBWixFQUFlLENBQWY7QUFDQSxrQkFBRUEsQ0FBRjtBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBQ0Q7QUFDSjtBQUNBOzs7ZUFDSUssVyxHQUFBLHFCQUFZYixHQUFaLEVBQXlCO0FBQ3JCLGlCQUFPLEtBQUtHLElBQUwsQ0FBVUgsR0FBVixDQUFQO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7OztlQUNJYyxJLEdBQUEsY0FBS2QsR0FBTCxFQUFrQmUsR0FBbEIsRUFBNkI7QUFDekIsY0FBSSxLQUFLWixJQUFMLENBQVVILEdBQVYsQ0FBSixFQUFvQjtBQUNoQixnQkFBSWdCLEtBQUssR0FBRyxLQUFLYixJQUFMLENBQVVILEdBQVYsRUFBZWlCLE1BQWYsRUFBWjs7QUFDQSxpQkFBSyxJQUFJVCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHUSxLQUFLLENBQUNQLE1BQTFCLEVBQWtDRCxDQUFDLEVBQW5DLEVBQXVDO0FBQ25DLGtCQUFJUSxLQUFLLENBQUNSLENBQUQsQ0FBTCxDQUFTTixJQUFULElBQWlCUixPQUFPLENBQUNzQixLQUFLLENBQUNSLENBQUQsQ0FBTCxDQUFTTixJQUFWLENBQTVCLEVBQTZDO0FBQ3pDYyxnQkFBQUEsS0FBSyxDQUFDUixDQUFELENBQUwsQ0FBU1AsSUFBVCxDQUFjYyxHQUFkLEVBQW1CQyxLQUFLLENBQUNSLENBQUQsQ0FBTCxDQUFTTixJQUE1QjtBQUNIO0FBQ0o7QUFDSjtBQUNKLFM7Ozs7OEJBRzhCO0FBQzNCLGdCQUFJLENBQUMsS0FBS2dCLFNBQVYsRUFBcUI7QUFDakIsbUJBQUtBLFNBQUwsR0FBaUIsSUFBSXBCLE9BQUosRUFBakI7QUFDSDs7QUFDRCxtQkFBTyxLQUFLb0IsU0FBWjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEV2ZW50VHlwZSB7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUZXN0RXZlbnQ6IHN0cmluZyA9IFwiVGVzdEV2ZW50XCI7XG4gICAgLyoq5Yqg6L296LWE5rqQ57uT5p2fICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBMb2FkUmVzT3Zlcjogc3RyaW5nID0gXCJMb2FkUmVzT3ZlclwiO1xuICAgIC8qKuWKoOi9veeKtuaAgSAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTG9hZFN0YXRlczogc3RyaW5nID0gXCJMb2FkU3RhdGVzXCI7XG59XG5cbmltcG9ydCB7IF9kZWNvcmF0b3IsIE5vZGUsIEV2ZW50SGFuZGxlciwgRXZlbnQsIGlzVmFsaWQsIGFuaW1hdGlvbiB9IGZyb20gJ2NjJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cblxuLyoq5LqL5Lu25py65Yi2IOazqOWGjCAtPiDmtL7lj5EgLT4g5rOo5YaM5pe25Zue6LCD5omn6KGMICovXG5AY2NjbGFzcygnTXlFdmVudCcpXG5leHBvcnQgY2xhc3MgTXlFdmVudCB7XG4gICAgLyoq5a2Y5YKoICovXG4gICAgbGlzdDogYW55ID0ge307XG4gICAgLyoqXG4gICAgICogIOazqOWGjOa2iOaBr1xuICAgICAqIEBwYXJhbSBrZXkga2V5XG4gICAgICogQHBhcmFtIGZ1bmMg5Zue6LCDXG4gICAgICogQHBhcmFtIHR5cGUg5Yy65Yir5YW25LuWa2V55YC855u45ZCM55qE5rOo5YaMXG4gICAgICovXG4gICAgb24oa2V5OiBzdHJpbmcsIGZ1bmM6IEZ1bmN0aW9uLCB0eXBlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMubGlzdFtrZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdFtrZXldID0gW107XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGQ6IGFueSA9IHt9O1xuICAgICAgICBkLmZ1bmMgPSBmdW5jO1xuICAgICAgICBkLnR5cGUgPSB0eXBlO1xuICAgICAgICAodGhpcy5saXN0W2tleV0pLnB1c2goZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOenu+mZpOS4gOS4qua2iOaBr1xuICAgICAqL1xuICAgIHJlbW92ZShrZXk6IHN0cmluZywgdHlwZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLmxpc3Rba2V5XSkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmxpc3Rba2V5XTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhW2ldLnR5cGUgPT0gdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgLS1pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDnp7vpmaR0eXBl55u45ZCM55qE5omA5pyJ5raI5oGvXG4gICAgICovXG4gICAgcmVtb3ZlQnlOb2RlKHR5cGU6IHN0cmluZykge1xuICAgICAgICBmb3IgKGxldCBwIGluIHRoaXMubGlzdCkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmxpc3RbcF07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVtpXS50eXBlID09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIC0taTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgKiDnp7vpmaRrZXnms6jlhoznmoTmiYDmnInmtojmga9cbiAgICAqL1xuICAgIHJlbW92ZUJ5S2V5KGtleTogc3RyaW5nKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmxpc3Rba2V5XTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5rS+5Y+R5raI5oGvXG4gICAgICovXG4gICAgZW1pdChrZXk6IHN0cmluZywgYXJnPzogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLmxpc3Rba2V5XSkge1xuICAgICAgICAgICAgbGV0IGZ1bmNzID0gdGhpcy5saXN0W2tleV0uY29uY2F0KCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZ1bmNzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZ1bmNzW2ldLnR5cGUgJiYgaXNWYWxpZChmdW5jc1tpXS50eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jc1tpXS5mdW5jKGFyZywgZnVuY3NbaV0udHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgc2luZ2xldG9uOiBNeUV2ZW50O1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEkoKTogTXlFdmVudCB7XG4gICAgICAgIGlmICghdGhpcy5zaW5nbGV0b24pIHtcbiAgICAgICAgICAgIHRoaXMuc2luZ2xldG9uID0gbmV3IE15RXZlbnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zaW5nbGV0b247XG4gICAgfVxufSJdfQ==