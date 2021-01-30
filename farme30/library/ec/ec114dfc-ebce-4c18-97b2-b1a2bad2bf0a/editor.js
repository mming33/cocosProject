System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, EventType, _decorator, isValid, _dec, _class, _class2, _temp, _crd, ccclass, property, MyEvent;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export({
    EventType: void 0,
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

      _export("EventType", EventType = class EventType {});

      _defineProperty(EventType, "TestEvent", "TestEvent");

      _defineProperty(EventType, "LoadResOver", "LoadResOver");

      _defineProperty(EventType, "LoadStates", "LoadStates");

      ({
        ccclass,
        property
      } = _decorator);
      /**事件机制 注册 -> 派发 -> 注册时回调执行 */

      _export("MyEvent", MyEvent = (_dec = ccclass('MyEvent'), _dec(_class = (_temp = _class2 = class MyEvent {
        constructor() {
          _defineProperty(this, "list", {});
        }

        /**
         *  注册消息
         * @param key key
         * @param func 回调
         * @param type 区别其他key值相同的注册
         */
        on(key, func, type) {
          if (this.list[key] == null) {
            this.list[key] = [];
          }

          let d = {};
          d.func = func;
          d.type = type;
          this.list[key].push(d);
        }
        /**
         * 移除一个消息
         */


        remove(key, type) {
          if (this.list[key]) {
            let data = this.list[key];

            for (let i = 0; i < data.length; i++) {
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


        removeByNode(type) {
          for (let p in this.list) {
            let data = this.list[p];

            for (let i = 0; i < data.length; i++) {
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


        removeByKey(key) {
          delete this.list[key];
        }
        /**
         * 派发消息
         */


        emit(key, arg) {
          if (this.list[key]) {
            let funcs = this.list[key].concat();

            for (let i = 0; i < funcs.length; i++) {
              if (funcs[i].type && isValid(funcs[i].type)) {
                funcs[i].func(arg, funcs[i].type);
              }
            }
          }
        }

        static get I() {
          if (!this.singleton) {
            this.singleton = new MyEvent();
          }

          return this.singleton;
        }

      }, _defineProperty(_class2, "singleton", void 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vRXZlbnRzL015RXZlbnQudHMiXSwibmFtZXMiOlsiRXZlbnRUeXBlIiwiX2RlY29yYXRvciIsImlzVmFsaWQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJNeUV2ZW50Iiwib24iLCJrZXkiLCJmdW5jIiwidHlwZSIsImxpc3QiLCJkIiwicHVzaCIsInJlbW92ZSIsImRhdGEiLCJpIiwibGVuZ3RoIiwic3BsaWNlIiwicmVtb3ZlQnlOb2RlIiwicCIsInJlbW92ZUJ5S2V5IiwiZW1pdCIsImFyZyIsImZ1bmNzIiwiY29uY2F0IiwiSSIsInNpbmdsZXRvbiJdLCJtYXBwaW5ncyI6Ijs7O2lCQUFhQSxTOzs7Ozs7Ozs7Ozs7Ozs7QUFRSkMsTUFBQUEsVSxPQUFBQSxVO0FBQXVDQyxNQUFBQSxPLE9BQUFBLE87Ozs7Ozs7MkJBUm5DRixTLEdBQU4sTUFBTUEsU0FBTixDQUFnQixFOztzQkFBVkEsUyxlQUNrQyxXOztzQkFEbENBLFMsaUJBR29DLGE7O3NCQUhwQ0EsUyxnQkFLbUMsWTs7T0FJMUM7QUFBRUcsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE8sR0FBd0JILFU7QUFHOUI7O3lCQUVhSSxPLFdBRFpGLE9BQU8sQ0FBQyxTQUFELEMsbUNBQVIsTUFDYUUsT0FEYixDQUNxQjtBQUFBO0FBQUEsd0NBRUwsRUFGSztBQUFBOztBQUdqQjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSUMsUUFBQUEsRUFBRSxDQUFDQyxHQUFELEVBQWNDLElBQWQsRUFBOEJDLElBQTlCLEVBQTRDO0FBQzFDLGNBQUksS0FBS0MsSUFBTCxDQUFVSCxHQUFWLEtBQWtCLElBQXRCLEVBQTRCO0FBQ3hCLGlCQUFLRyxJQUFMLENBQVVILEdBQVYsSUFBaUIsRUFBakI7QUFDSDs7QUFDRCxjQUFJSSxDQUFNLEdBQUcsRUFBYjtBQUNBQSxVQUFBQSxDQUFDLENBQUNILElBQUYsR0FBU0EsSUFBVDtBQUNBRyxVQUFBQSxDQUFDLENBQUNGLElBQUYsR0FBU0EsSUFBVDtBQUNDLGVBQUtDLElBQUwsQ0FBVUgsR0FBVixDQUFELENBQWlCSyxJQUFqQixDQUFzQkQsQ0FBdEI7QUFDSDtBQUNEO0FBQ0o7QUFDQTs7O0FBQ0lFLFFBQUFBLE1BQU0sQ0FBQ04sR0FBRCxFQUFjRSxJQUFkLEVBQTRCO0FBQzlCLGNBQUksS0FBS0MsSUFBTCxDQUFVSCxHQUFWLENBQUosRUFBb0I7QUFDaEIsZ0JBQUlPLElBQUksR0FBRyxLQUFLSixJQUFMLENBQVVILEdBQVYsQ0FBWDs7QUFDQSxpQkFBSyxJQUFJUSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxJQUFJLENBQUNFLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLGtCQUFJRCxJQUFJLENBQUNDLENBQUQsQ0FBSixDQUFRTixJQUFSLElBQWdCQSxJQUFwQixFQUEwQjtBQUN0QkssZ0JBQUFBLElBQUksQ0FBQ0csTUFBTCxDQUFZRixDQUFaLEVBQWUsQ0FBZjtBQUNBLGtCQUFFQSxDQUFGO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7QUFDRDtBQUNKO0FBQ0E7OztBQUNJRyxRQUFBQSxZQUFZLENBQUNULElBQUQsRUFBZTtBQUN2QixlQUFLLElBQUlVLENBQVQsSUFBYyxLQUFLVCxJQUFuQixFQUF5QjtBQUNyQixnQkFBSUksSUFBSSxHQUFHLEtBQUtKLElBQUwsQ0FBVVMsQ0FBVixDQUFYOztBQUNBLGlCQUFLLElBQUlKLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELElBQUksQ0FBQ0UsTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7QUFDbEMsa0JBQUlELElBQUksQ0FBQ0MsQ0FBRCxDQUFKLENBQVFOLElBQVIsSUFBZ0JBLElBQXBCLEVBQTBCO0FBQ3RCSyxnQkFBQUEsSUFBSSxDQUFDRyxNQUFMLENBQVlGLENBQVosRUFBZSxDQUFmO0FBQ0Esa0JBQUVBLENBQUY7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQUNEO0FBQ0o7QUFDQTs7O0FBQ0lLLFFBQUFBLFdBQVcsQ0FBQ2IsR0FBRCxFQUFjO0FBQ3JCLGlCQUFPLEtBQUtHLElBQUwsQ0FBVUgsR0FBVixDQUFQO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7OztBQUNJYyxRQUFBQSxJQUFJLENBQUNkLEdBQUQsRUFBY2UsR0FBZCxFQUF5QjtBQUN6QixjQUFJLEtBQUtaLElBQUwsQ0FBVUgsR0FBVixDQUFKLEVBQW9CO0FBQ2hCLGdCQUFJZ0IsS0FBSyxHQUFHLEtBQUtiLElBQUwsQ0FBVUgsR0FBVixFQUFlaUIsTUFBZixFQUFaOztBQUNBLGlCQUFLLElBQUlULENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdRLEtBQUssQ0FBQ1AsTUFBMUIsRUFBa0NELENBQUMsRUFBbkMsRUFBdUM7QUFDbkMsa0JBQUlRLEtBQUssQ0FBQ1IsQ0FBRCxDQUFMLENBQVNOLElBQVQsSUFBaUJQLE9BQU8sQ0FBQ3FCLEtBQUssQ0FBQ1IsQ0FBRCxDQUFMLENBQVNOLElBQVYsQ0FBNUIsRUFBNkM7QUFDekNjLGdCQUFBQSxLQUFLLENBQUNSLENBQUQsQ0FBTCxDQUFTUCxJQUFULENBQWNjLEdBQWQsRUFBbUJDLEtBQUssQ0FBQ1IsQ0FBRCxDQUFMLENBQVNOLElBQTVCO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7O0FBR0QsbUJBQWtCZ0IsQ0FBbEIsR0FBK0I7QUFDM0IsY0FBSSxDQUFDLEtBQUtDLFNBQVYsRUFBcUI7QUFDakIsaUJBQUtBLFNBQUwsR0FBaUIsSUFBSXJCLE9BQUosRUFBakI7QUFDSDs7QUFDRCxpQkFBTyxLQUFLcUIsU0FBWjtBQUNIOztBQXhFZ0IsTyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBFdmVudFR5cGUge1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVGVzdEV2ZW50OiBzdHJpbmcgPSBcIlRlc3RFdmVudFwiO1xuICAgIC8qKuWKoOi9vei1hOa6kOe7k+adnyAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTG9hZFJlc092ZXI6IHN0cmluZyA9IFwiTG9hZFJlc092ZXJcIjtcbiAgICAvKirliqDovb3nirbmgIEgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IExvYWRTdGF0ZXM6IHN0cmluZyA9IFwiTG9hZFN0YXRlc1wiO1xufVxuXG5pbXBvcnQgeyBfZGVjb3JhdG9yLCBOb2RlLCBFdmVudEhhbmRsZXIsIEV2ZW50LCBpc1ZhbGlkLCBhbmltYXRpb24gfSBmcm9tICdjYyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5cbi8qKuS6i+S7tuacuuWItiDms6jlhowgLT4g5rS+5Y+RIC0+IOazqOWGjOaXtuWbnuiwg+aJp+ihjCAqL1xuQGNjY2xhc3MoJ015RXZlbnQnKVxuZXhwb3J0IGNsYXNzIE15RXZlbnQge1xuICAgIC8qKuWtmOWCqCAqL1xuICAgIGxpc3Q6IGFueSA9IHt9O1xuICAgIC8qKlxuICAgICAqICDms6jlhozmtojmga9cbiAgICAgKiBAcGFyYW0ga2V5IGtleVxuICAgICAqIEBwYXJhbSBmdW5jIOWbnuiwg1xuICAgICAqIEBwYXJhbSB0eXBlIOWMuuWIq+WFtuS7lmtleeWAvOebuOWQjOeahOazqOWGjFxuICAgICAqL1xuICAgIG9uKGtleTogc3RyaW5nLCBmdW5jOiBGdW5jdGlvbiwgdHlwZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLmxpc3Rba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3Rba2V5XSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGxldCBkOiBhbnkgPSB7fTtcbiAgICAgICAgZC5mdW5jID0gZnVuYztcbiAgICAgICAgZC50eXBlID0gdHlwZTtcbiAgICAgICAgKHRoaXMubGlzdFtrZXldKS5wdXNoKGQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDnp7vpmaTkuIDkuKrmtojmga9cbiAgICAgKi9cbiAgICByZW1vdmUoa2V5OiBzdHJpbmcsIHR5cGU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5saXN0W2tleV0pIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5saXN0W2tleV07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVtpXS50eXBlID09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIC0taTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog56e76ZmkdHlwZeebuOWQjOeahOaJgOaciea2iOaBr1xuICAgICAqL1xuICAgIHJlbW92ZUJ5Tm9kZSh0eXBlOiBzdHJpbmcpIHtcbiAgICAgICAgZm9yIChsZXQgcCBpbiB0aGlzLmxpc3QpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5saXN0W3BdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFbaV0udHlwZSA9PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAtLWk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICog56e76Zmka2V55rOo5YaM55qE5omA5pyJ5raI5oGvXG4gICAgKi9cbiAgICByZW1vdmVCeUtleShrZXk6IHN0cmluZykge1xuICAgICAgICBkZWxldGUgdGhpcy5saXN0W2tleV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOa0vuWPkea2iOaBr1xuICAgICAqL1xuICAgIGVtaXQoa2V5OiBzdHJpbmcsIGFyZz86IGFueSkge1xuICAgICAgICBpZiAodGhpcy5saXN0W2tleV0pIHtcbiAgICAgICAgICAgIGxldCBmdW5jcyA9IHRoaXMubGlzdFtrZXldLmNvbmNhdCgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmdW5jcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChmdW5jc1tpXS50eXBlICYmIGlzVmFsaWQoZnVuY3NbaV0udHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3NbaV0uZnVuYyhhcmcsIGZ1bmNzW2ldLnR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIHNpbmdsZXRvbjogTXlFdmVudDtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBJKCk6IE15RXZlbnQge1xuICAgICAgICBpZiAoIXRoaXMuc2luZ2xldG9uKSB7XG4gICAgICAgICAgICB0aGlzLnNpbmdsZXRvbiA9IG5ldyBNeUV2ZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2luZ2xldG9uO1xuICAgIH1cbn0iXX0=