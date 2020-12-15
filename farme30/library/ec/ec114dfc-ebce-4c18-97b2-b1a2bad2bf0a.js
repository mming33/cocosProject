System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _crd, ccclass, property, MyEvent;

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
      _crd = true;

      _cclegacy._RF.push({}, "ec11438685MGJeysaK60r8K", "MyEvent", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**事件机制 注册 -> 派发 -> 注册时回调执行 */

      _export("MyEvent", MyEvent = (_dec = ccclass('MyEvent'), _dec(_class = /*#__PURE__*/function () {
        function MyEvent() {}

        /**根据名称派发事件 */
        MyEvent.event = function event(node, type, arg0, arg1, arg2, arg3, arg4) {
          node.emit(type, arg0, arg1, arg2, arg3, arg4);
        }
        /**根据名称注册事件 */
        ;

        MyEvent.on = function on(node, type, callback, target, useCapture) {
          node.on(type, callback, target, useCapture);
        }
        /**根据名称注册单次事件，相应过一次后销毁该事件 */
        ;

        MyEvent.once = function once(node, type, callback, target, useCapture) {
          node.once(type, callback, target, useCapture);
        }
        /**删除之前与同类型，回调，目标或 useCapture 注册的回调。 */
        ;

        MyEvent.off = function off(node, type, callback, target, useCapture) {
          node.off(type, callback, target, useCapture);
        }
        /** 移除目标上的所有注册事件。(目标类型的即type值相同的所有事件类型)*/
        ;

        MyEvent.offAll = function offAll(node, type) {
          node.targetOff(type);
        };

        return MyEvent;
      }()) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vRXZlbnRzL015RXZlbnQudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIk15RXZlbnQiLCJldmVudCIsIm5vZGUiLCJ0eXBlIiwiYXJnMCIsImFyZzEiLCJhcmcyIiwiYXJnMyIsImFyZzQiLCJlbWl0Iiwib24iLCJjYWxsYmFjayIsInRhcmdldCIsInVzZUNhcHR1cmUiLCJvbmNlIiwib2ZmIiwib2ZmQWxsIiwidGFyZ2V0T2ZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCRCxVLENBQXRCQyxPO0FBQVNDLE1BQUFBLFEsR0FBYUYsVSxDQUFiRSxRO0FBRWpCOzt5QkFFYUMsTyxXQURaRixPQUFPLENBQUMsU0FBRCxDOzs7QUFHSjtnQkFDT0csSyxHQUFQLGVBQWFDLElBQWIsRUFBeUJDLElBQXpCLEVBQXVDQyxJQUF2QyxFQUFtREMsSUFBbkQsRUFBK0RDLElBQS9ELEVBQTJFQyxJQUEzRSxFQUF1RkMsSUFBdkYsRUFBbUc7QUFDL0ZOLFVBQUFBLElBQUksQ0FBQ08sSUFBTCxDQUFVTixJQUFWLEVBQWdCQyxJQUFoQixFQUFzQkMsSUFBdEIsRUFBNEJDLElBQTVCLEVBQWtDQyxJQUFsQyxFQUF3Q0MsSUFBeEM7QUFDSDtBQUNEOzs7Z0JBQ09FLEUsR0FBUCxZQUFVUixJQUFWLEVBQXNCQyxJQUF0QixFQUFvQ1EsUUFBcEMsRUFBd0RDLE1BQXhELEVBQXlFQyxVQUF6RSxFQUEyRjtBQUN2RlgsVUFBQUEsSUFBSSxDQUFDUSxFQUFMLENBQVFQLElBQVIsRUFBY1EsUUFBZCxFQUF3QkMsTUFBeEIsRUFBZ0NDLFVBQWhDO0FBQ0g7QUFDRDs7O2dCQUNPQyxJLEdBQVAsY0FBWVosSUFBWixFQUF3QkMsSUFBeEIsRUFBc0NRLFFBQXRDLEVBQTBEQyxNQUExRCxFQUEyRUMsVUFBM0UsRUFBNkY7QUFDekZYLFVBQUFBLElBQUksQ0FBQ1ksSUFBTCxDQUFVWCxJQUFWLEVBQWdCUSxRQUFoQixFQUEwQkMsTUFBMUIsRUFBa0NDLFVBQWxDO0FBQ0g7QUFDRDs7O2dCQUNPRSxHLEdBQVAsYUFBV2IsSUFBWCxFQUF1QkMsSUFBdkIsRUFBcUNRLFFBQXJDLEVBQXlEQyxNQUF6RCxFQUEwRUMsVUFBMUUsRUFBNEY7QUFDeEZYLFVBQUFBLElBQUksQ0FBQ2EsR0FBTCxDQUFTWixJQUFULEVBQWVRLFFBQWYsRUFBeUJDLE1BQXpCLEVBQWlDQyxVQUFqQztBQUNIO0FBQ0Q7OztnQkFDT0csTSxHQUFQLGdCQUFjZCxJQUFkLEVBQTBCQyxJQUExQixFQUFrRDtBQUM5Q0QsVUFBQUEsSUFBSSxDQUFDZSxTQUFMLENBQWVkLElBQWY7QUFDSCxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgTm9kZSwgRXZlbnRIYW5kbGVyLCBFdmVudCB9IGZyb20gJ2NjJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbi8qKuS6i+S7tuacuuWItiDms6jlhowgLT4g5rS+5Y+RIC0+IOazqOWGjOaXtuWbnuiwg+aJp+ihjCAqL1xuQGNjY2xhc3MoJ015RXZlbnQnKVxuZXhwb3J0IGNsYXNzIE15RXZlbnQge1xuXG4gICAgLyoq5qC55o2u5ZCN56ew5rS+5Y+R5LqL5Lu2ICovXG4gICAgc3RhdGljIGV2ZW50KG5vZGU6IE5vZGUsIHR5cGU6IHN0cmluZywgYXJnMD86IGFueSwgYXJnMT86IGFueSwgYXJnMj86IGFueSwgYXJnMz86IGFueSwgYXJnND86IGFueSkge1xuICAgICAgICBub2RlLmVtaXQodHlwZSwgYXJnMCwgYXJnMSwgYXJnMiwgYXJnMywgYXJnNCk7XG4gICAgfVxuICAgIC8qKuagueaNruWQjeensOazqOWGjOS6i+S7tiAqL1xuICAgIHN0YXRpYyBvbihub2RlOiBOb2RlLCB0eXBlOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbiwgdGFyZ2V0PzogT2JqZWN0LCB1c2VDYXB0dXJlPzogYW55KSB7XG4gICAgICAgIG5vZGUub24odHlwZSwgY2FsbGJhY2ssIHRhcmdldCwgdXNlQ2FwdHVyZSk7XG4gICAgfVxuICAgIC8qKuagueaNruWQjeensOazqOWGjOWNleasoeS6i+S7tu+8jOebuOW6lOi/h+S4gOasoeWQjumUgOavgeivpeS6i+S7tiAqL1xuICAgIHN0YXRpYyBvbmNlKG5vZGU6IE5vZGUsIHR5cGU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBPYmplY3QsIHVzZUNhcHR1cmU/OiBhbnkpIHtcbiAgICAgICAgbm9kZS5vbmNlKHR5cGUsIGNhbGxiYWNrLCB0YXJnZXQsIHVzZUNhcHR1cmUpO1xuICAgIH1cbiAgICAvKirliKDpmaTkuYvliY3kuI7lkIznsbvlnovvvIzlm57osIPvvIznm67moIfmiJYgdXNlQ2FwdHVyZSDms6jlhoznmoTlm57osIPjgIIgKi9cbiAgICBzdGF0aWMgb2ZmKG5vZGU6IE5vZGUsIHR5cGU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBPYmplY3QsIHVzZUNhcHR1cmU/OiBhbnkpIHtcbiAgICAgICAgbm9kZS5vZmYodHlwZSwgY2FsbGJhY2ssIHRhcmdldCwgdXNlQ2FwdHVyZSk7XG4gICAgfVxuICAgIC8qKiDnp7vpmaTnm67moIfkuIrnmoTmiYDmnInms6jlhozkuovku7bjgIIo55uu5qCH57G75Z6L55qE5Y2zdHlwZeWAvOebuOWQjOeahOaJgOacieS6i+S7tuexu+WeiykqL1xuICAgIHN0YXRpYyBvZmZBbGwobm9kZTogTm9kZSwgdHlwZTogc3RyaW5nIHwgT2JqZWN0LCkge1xuICAgICAgICBub2RlLnRhcmdldE9mZih0eXBlKTtcbiAgICB9XG59XG4iXX0=