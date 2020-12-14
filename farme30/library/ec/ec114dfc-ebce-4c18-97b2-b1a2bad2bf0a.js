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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9FdmVudHMvTXlFdmVudC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTXlFdmVudCIsImV2ZW50Iiwibm9kZSIsInR5cGUiLCJhcmcwIiwiYXJnMSIsImFyZzIiLCJhcmczIiwiYXJnNCIsImVtaXQiLCJvbiIsImNhbGxiYWNrIiwidGFyZ2V0IiwidXNlQ2FwdHVyZSIsIm9uY2UiLCJvZmYiLCJvZmZBbGwiLCJ0YXJnZXRPZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOzs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JELFUsQ0FBdEJDLE87QUFBU0MsTUFBQUEsUSxHQUFhRixVLENBQWJFLFE7QUFFakI7O3lCQUVhQyxPLFdBRFpGLE9BQU8sQ0FBQyxTQUFELEM7OztBQUdKO2dCQUNPRyxLLEdBQVAsZUFBYUMsSUFBYixFQUF5QkMsSUFBekIsRUFBdUNDLElBQXZDLEVBQW1EQyxJQUFuRCxFQUErREMsSUFBL0QsRUFBMkVDLElBQTNFLEVBQXVGQyxJQUF2RixFQUFtRztBQUMvRk4sVUFBQUEsSUFBSSxDQUFDTyxJQUFMLENBQVVOLElBQVYsRUFBZ0JDLElBQWhCLEVBQXNCQyxJQUF0QixFQUE0QkMsSUFBNUIsRUFBa0NDLElBQWxDLEVBQXdDQyxJQUF4QztBQUNIO0FBQ0Q7OztnQkFDT0UsRSxHQUFQLFlBQVVSLElBQVYsRUFBc0JDLElBQXRCLEVBQW9DUSxRQUFwQyxFQUF3REMsTUFBeEQsRUFBeUVDLFVBQXpFLEVBQTJGO0FBQ3ZGWCxVQUFBQSxJQUFJLENBQUNRLEVBQUwsQ0FBUVAsSUFBUixFQUFjUSxRQUFkLEVBQXdCQyxNQUF4QixFQUFnQ0MsVUFBaEM7QUFDSDtBQUNEOzs7Z0JBQ09DLEksR0FBUCxjQUFZWixJQUFaLEVBQXdCQyxJQUF4QixFQUFzQ1EsUUFBdEMsRUFBMERDLE1BQTFELEVBQTJFQyxVQUEzRSxFQUE2RjtBQUN6RlgsVUFBQUEsSUFBSSxDQUFDWSxJQUFMLENBQVVYLElBQVYsRUFBZ0JRLFFBQWhCLEVBQTBCQyxNQUExQixFQUFrQ0MsVUFBbEM7QUFDSDtBQUNEOzs7Z0JBQ09FLEcsR0FBUCxhQUFXYixJQUFYLEVBQXVCQyxJQUF2QixFQUFxQ1EsUUFBckMsRUFBeURDLE1BQXpELEVBQTBFQyxVQUExRSxFQUE0RjtBQUN4RlgsVUFBQUEsSUFBSSxDQUFDYSxHQUFMLENBQVNaLElBQVQsRUFBZVEsUUFBZixFQUF5QkMsTUFBekIsRUFBaUNDLFVBQWpDO0FBQ0g7QUFDRDs7O2dCQUNPRyxNLEdBQVAsZ0JBQWNkLElBQWQsRUFBMEJDLElBQTFCLEVBQWtEO0FBQzlDRCxVQUFBQSxJQUFJLENBQUNlLFNBQUwsQ0FBZWQsSUFBZjtBQUNILFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBOb2RlLCBFdmVudEhhbmRsZXIsIEV2ZW50IH0gZnJvbSAnY2MnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuLyoq5LqL5Lu25py65Yi2IOazqOWGjCAtPiDmtL7lj5EgLT4g5rOo5YaM5pe25Zue6LCD5omn6KGMICovXG5AY2NjbGFzcygnTXlFdmVudCcpXG5leHBvcnQgY2xhc3MgTXlFdmVudCB7XG5cbiAgICAvKirmoLnmja7lkI3np7DmtL7lj5Hkuovku7YgKi9cbiAgICBzdGF0aWMgZXZlbnQobm9kZTogTm9kZSwgdHlwZTogc3RyaW5nLCBhcmcwPzogYW55LCBhcmcxPzogYW55LCBhcmcyPzogYW55LCBhcmczPzogYW55LCBhcmc0PzogYW55KSB7XG4gICAgICAgIG5vZGUuZW1pdCh0eXBlLCBhcmcwLCBhcmcxLCBhcmcyLCBhcmczLCBhcmc0KTtcbiAgICB9XG4gICAgLyoq5qC55o2u5ZCN56ew5rOo5YaM5LqL5Lu2ICovXG4gICAgc3RhdGljIG9uKG5vZGU6IE5vZGUsIHR5cGU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBPYmplY3QsIHVzZUNhcHR1cmU/OiBhbnkpIHtcbiAgICAgICAgbm9kZS5vbih0eXBlLCBjYWxsYmFjaywgdGFyZ2V0LCB1c2VDYXB0dXJlKTtcbiAgICB9XG4gICAgLyoq5qC55o2u5ZCN56ew5rOo5YaM5Y2V5qyh5LqL5Lu277yM55u45bqU6L+H5LiA5qyh5ZCO6ZSA5q+B6K+l5LqL5Lu2ICovXG4gICAgc3RhdGljIG9uY2Uobm9kZTogTm9kZSwgdHlwZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24sIHRhcmdldD86IE9iamVjdCwgdXNlQ2FwdHVyZT86IGFueSkge1xuICAgICAgICBub2RlLm9uY2UodHlwZSwgY2FsbGJhY2ssIHRhcmdldCwgdXNlQ2FwdHVyZSk7XG4gICAgfVxuICAgIC8qKuWIoOmZpOS5i+WJjeS4juWQjOexu+Wei++8jOWbnuiwg++8jOebruagh+aIliB1c2VDYXB0dXJlIOazqOWGjOeahOWbnuiwg+OAgiAqL1xuICAgIHN0YXRpYyBvZmYobm9kZTogTm9kZSwgdHlwZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24sIHRhcmdldD86IE9iamVjdCwgdXNlQ2FwdHVyZT86IGFueSkge1xuICAgICAgICBub2RlLm9mZih0eXBlLCBjYWxsYmFjaywgdGFyZ2V0LCB1c2VDYXB0dXJlKTtcbiAgICB9XG4gICAgLyoqIOenu+mZpOebruagh+S4iueahOaJgOacieazqOWGjOS6i+S7tuOAgijnm67moIfnsbvlnovnmoTljbN0eXBl5YC855u45ZCM55qE5omA5pyJ5LqL5Lu257G75Z6LKSovXG4gICAgc3RhdGljIG9mZkFsbChub2RlOiBOb2RlLCB0eXBlOiBzdHJpbmcgfCBPYmplY3QsKSB7XG4gICAgICAgIG5vZGUudGFyZ2V0T2ZmKHR5cGUpO1xuICAgIH1cbn1cbiJdfQ==