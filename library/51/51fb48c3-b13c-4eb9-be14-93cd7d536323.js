System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _crd, ccclass, property, MyEvent;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "51fb4jDsTxOub4Uk819U2Mj", "MyEvent", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**事件机制 注册 -> 派发 -> 注册时回调执行 */

      _export("MyEvent", MyEvent = (_dec = ccclass('MyEvent'), _dec(_class = /*#__PURE__*/function () {
        function MyEvent() {
          _classCallCheck(this, MyEvent);
        }

        _createClass(MyEvent, null, [{
          key: "event",

          /**根据名称派发事件 */
          value: function event(node, type, arg0, arg1, arg2, arg3, arg4) {
            node.emit(type, arg0, arg1, arg2, arg3, arg4);
          }
          /**根据名称注册事件 */

        }, {
          key: "on",
          value: function on(node, type, callback, target, useCapture) {
            node.on(type, callback, target, useCapture);
          }
          /**根据名称注册单次事件，相应过一次后销毁该事件 */

        }, {
          key: "once",
          value: function once(node, type, callback, target, useCapture) {
            node.once(type, callback, target, useCapture);
          }
          /**删除之前与同类型，回调，目标或 useCapture 注册的回调。 */

        }, {
          key: "off",
          value: function off(node, type, callback, target, useCapture) {
            node.off(type, callback, target, useCapture);
          }
          /** 移除目标上的所有注册事件。(目标类型的即type值相同的所有事件类型)*/

        }, {
          key: "offAll",
          value: function offAll(node, type) {
            node.targetOff(type);
          }
        }]);

        return MyEvent;
      }()) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvU2NyaXB0cy9GcmFtZVdvcmtlL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9FdmVudHMvTXlFdmVudC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTXlFdmVudCIsIm5vZGUiLCJ0eXBlIiwiYXJnMCIsImFyZzEiLCJhcmcyIiwiYXJnMyIsImFyZzQiLCJlbWl0IiwiY2FsbGJhY2siLCJ0YXJnZXQiLCJ1c2VDYXB0dXJlIiwib24iLCJvbmNlIiwib2ZmIiwidGFyZ2V0T2ZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JELFUsQ0FBdEJDLE87QUFBU0MsTUFBQUEsUSxHQUFhRixVLENBQWJFLFE7QUFFakI7O3lCQUVhQyxPLFdBRFpGLE9BQU8sQ0FBQyxTQUFELEM7Ozs7Ozs7O0FBR0o7Z0NBQ2FHLEksRUFBWUMsSSxFQUFjQyxJLEVBQVlDLEksRUFBWUMsSSxFQUFZQyxJLEVBQVlDLEksRUFBWTtBQUMvRk4sWUFBQUEsSUFBSSxDQUFDTyxJQUFMLENBQVVOLElBQVYsRUFBZ0JDLElBQWhCLEVBQXNCQyxJQUF0QixFQUE0QkMsSUFBNUIsRUFBa0NDLElBQWxDLEVBQXdDQyxJQUF4QztBQUNIO0FBQ0Q7Ozs7NkJBQ1VOLEksRUFBWUMsSSxFQUFjTyxRLEVBQW9CQyxNLEVBQWlCQyxVLEVBQWtCO0FBQ3ZGVixZQUFBQSxJQUFJLENBQUNXLEVBQUwsQ0FBUVYsSUFBUixFQUFjTyxRQUFkLEVBQXdCQyxNQUF4QixFQUFnQ0MsVUFBaEM7QUFDSDtBQUNEOzs7OytCQUNZVixJLEVBQVlDLEksRUFBY08sUSxFQUFvQkMsTSxFQUFpQkMsVSxFQUFrQjtBQUN6RlYsWUFBQUEsSUFBSSxDQUFDWSxJQUFMLENBQVVYLElBQVYsRUFBZ0JPLFFBQWhCLEVBQTBCQyxNQUExQixFQUFrQ0MsVUFBbEM7QUFDSDtBQUNEOzs7OzhCQUNXVixJLEVBQVlDLEksRUFBY08sUSxFQUFvQkMsTSxFQUFpQkMsVSxFQUFrQjtBQUN4RlYsWUFBQUEsSUFBSSxDQUFDYSxHQUFMLENBQVNaLElBQVQsRUFBZU8sUUFBZixFQUF5QkMsTUFBekIsRUFBaUNDLFVBQWpDO0FBQ0g7QUFDRDs7OztpQ0FDY1YsSSxFQUFZQyxJLEVBQXdCO0FBQzlDRCxZQUFBQSxJQUFJLENBQUNjLFNBQUwsQ0FBZWIsSUFBZjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgTm9kZSwgRXZlbnRIYW5kbGVyLCBFdmVudCB9IGZyb20gJ2NjJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbi8qKuS6i+S7tuacuuWItiDms6jlhowgLT4g5rS+5Y+RIC0+IOazqOWGjOaXtuWbnuiwg+aJp+ihjCAqL1xuQGNjY2xhc3MoJ015RXZlbnQnKVxuZXhwb3J0IGNsYXNzIE15RXZlbnQge1xuXG4gICAgLyoq5qC55o2u5ZCN56ew5rS+5Y+R5LqL5Lu2ICovXG4gICAgc3RhdGljIGV2ZW50KG5vZGU6IE5vZGUsIHR5cGU6IHN0cmluZywgYXJnMD86IGFueSwgYXJnMT86IGFueSwgYXJnMj86IGFueSwgYXJnMz86IGFueSwgYXJnND86IGFueSkge1xuICAgICAgICBub2RlLmVtaXQodHlwZSwgYXJnMCwgYXJnMSwgYXJnMiwgYXJnMywgYXJnNCk7XG4gICAgfVxuICAgIC8qKuagueaNruWQjeensOazqOWGjOS6i+S7tiAqL1xuICAgIHN0YXRpYyBvbihub2RlOiBOb2RlLCB0eXBlOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbiwgdGFyZ2V0PzogT2JqZWN0LCB1c2VDYXB0dXJlPzogYW55KSB7XG4gICAgICAgIG5vZGUub24odHlwZSwgY2FsbGJhY2ssIHRhcmdldCwgdXNlQ2FwdHVyZSk7XG4gICAgfVxuICAgIC8qKuagueaNruWQjeensOazqOWGjOWNleasoeS6i+S7tu+8jOebuOW6lOi/h+S4gOasoeWQjumUgOavgeivpeS6i+S7tiAqL1xuICAgIHN0YXRpYyBvbmNlKG5vZGU6IE5vZGUsIHR5cGU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBPYmplY3QsIHVzZUNhcHR1cmU/OiBhbnkpIHtcbiAgICAgICAgbm9kZS5vbmNlKHR5cGUsIGNhbGxiYWNrLCB0YXJnZXQsIHVzZUNhcHR1cmUpO1xuICAgIH1cbiAgICAvKirliKDpmaTkuYvliY3kuI7lkIznsbvlnovvvIzlm57osIPvvIznm67moIfmiJYgdXNlQ2FwdHVyZSDms6jlhoznmoTlm57osIPjgIIgKi9cbiAgICBzdGF0aWMgb2ZmKG5vZGU6IE5vZGUsIHR5cGU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBPYmplY3QsIHVzZUNhcHR1cmU/OiBhbnkpIHtcbiAgICAgICAgbm9kZS5vZmYodHlwZSwgY2FsbGJhY2ssIHRhcmdldCwgdXNlQ2FwdHVyZSk7XG4gICAgfVxuICAgIC8qKiDnp7vpmaTnm67moIfkuIrnmoTmiYDmnInms6jlhozkuovku7bjgIIo55uu5qCH57G75Z6L55qE5Y2zdHlwZeWAvOebuOWQjOeahOaJgOacieS6i+S7tuexu+WeiykqL1xuICAgIHN0YXRpYyBvZmZBbGwobm9kZTogTm9kZSwgdHlwZTogc3RyaW5nIHwgT2JqZWN0LCkge1xuICAgICAgICBub2RlLnRhcmdldE9mZih0eXBlKTtcbiAgICB9XG59XG4iXX0=