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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvOEJhbGwvYXNzZXRzL1NjcmlwdHMvQ29tbW9uL0V2ZW50cy9NeUV2ZW50LnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJNeUV2ZW50Iiwibm9kZSIsInR5cGUiLCJhcmcwIiwiYXJnMSIsImFyZzIiLCJhcmczIiwiYXJnNCIsImVtaXQiLCJjYWxsYmFjayIsInRhcmdldCIsInVzZUNhcHR1cmUiLCJvbiIsIm9uY2UiLCJvZmYiLCJ0YXJnZXRPZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQkQsVSxDQUF0QkMsTztBQUFTQyxNQUFBQSxRLEdBQWFGLFUsQ0FBYkUsUTtBQUVqQjs7eUJBRWFDLE8sV0FEWkYsT0FBTyxDQUFDLFNBQUQsQzs7Ozs7Ozs7QUFHSjtnQ0FDYUcsSSxFQUFZQyxJLEVBQWNDLEksRUFBWUMsSSxFQUFZQyxJLEVBQVlDLEksRUFBWUMsSSxFQUFZO0FBQy9GTixZQUFBQSxJQUFJLENBQUNPLElBQUwsQ0FBVU4sSUFBVixFQUFnQkMsSUFBaEIsRUFBc0JDLElBQXRCLEVBQTRCQyxJQUE1QixFQUFrQ0MsSUFBbEMsRUFBd0NDLElBQXhDO0FBQ0g7QUFDRDs7Ozs2QkFDVU4sSSxFQUFZQyxJLEVBQWNPLFEsRUFBb0JDLE0sRUFBaUJDLFUsRUFBa0I7QUFDdkZWLFlBQUFBLElBQUksQ0FBQ1csRUFBTCxDQUFRVixJQUFSLEVBQWNPLFFBQWQsRUFBd0JDLE1BQXhCLEVBQWdDQyxVQUFoQztBQUNIO0FBQ0Q7Ozs7K0JBQ1lWLEksRUFBWUMsSSxFQUFjTyxRLEVBQW9CQyxNLEVBQWlCQyxVLEVBQWtCO0FBQ3pGVixZQUFBQSxJQUFJLENBQUNZLElBQUwsQ0FBVVgsSUFBVixFQUFnQk8sUUFBaEIsRUFBMEJDLE1BQTFCLEVBQWtDQyxVQUFsQztBQUNIO0FBQ0Q7Ozs7OEJBQ1dWLEksRUFBWUMsSSxFQUFjTyxRLEVBQW9CQyxNLEVBQWlCQyxVLEVBQWtCO0FBQ3hGVixZQUFBQSxJQUFJLENBQUNhLEdBQUwsQ0FBU1osSUFBVCxFQUFlTyxRQUFmLEVBQXlCQyxNQUF6QixFQUFpQ0MsVUFBakM7QUFDSDtBQUNEOzs7O2lDQUNjVixJLEVBQVlDLEksRUFBd0I7QUFDOUNELFlBQUFBLElBQUksQ0FBQ2MsU0FBTCxDQUFlYixJQUFmO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBOb2RlLCBFdmVudEhhbmRsZXIsIEV2ZW50IH0gZnJvbSAnY2MnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuLyoq5LqL5Lu25py65Yi2IOazqOWGjCAtPiDmtL7lj5EgLT4g5rOo5YaM5pe25Zue6LCD5omn6KGMICovXG5AY2NjbGFzcygnTXlFdmVudCcpXG5leHBvcnQgY2xhc3MgTXlFdmVudCB7XG5cbiAgICAvKirmoLnmja7lkI3np7DmtL7lj5Hkuovku7YgKi9cbiAgICBzdGF0aWMgZXZlbnQobm9kZTogTm9kZSwgdHlwZTogc3RyaW5nLCBhcmcwPzogYW55LCBhcmcxPzogYW55LCBhcmcyPzogYW55LCBhcmczPzogYW55LCBhcmc0PzogYW55KSB7XG4gICAgICAgIG5vZGUuZW1pdCh0eXBlLCBhcmcwLCBhcmcxLCBhcmcyLCBhcmczLCBhcmc0KTtcbiAgICB9XG4gICAgLyoq5qC55o2u5ZCN56ew5rOo5YaM5LqL5Lu2ICovXG4gICAgc3RhdGljIG9uKG5vZGU6IE5vZGUsIHR5cGU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBPYmplY3QsIHVzZUNhcHR1cmU/OiBhbnkpIHtcbiAgICAgICAgbm9kZS5vbih0eXBlLCBjYWxsYmFjaywgdGFyZ2V0LCB1c2VDYXB0dXJlKTtcbiAgICB9XG4gICAgLyoq5qC55o2u5ZCN56ew5rOo5YaM5Y2V5qyh5LqL5Lu277yM55u45bqU6L+H5LiA5qyh5ZCO6ZSA5q+B6K+l5LqL5Lu2ICovXG4gICAgc3RhdGljIG9uY2Uobm9kZTogTm9kZSwgdHlwZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24sIHRhcmdldD86IE9iamVjdCwgdXNlQ2FwdHVyZT86IGFueSkge1xuICAgICAgICBub2RlLm9uY2UodHlwZSwgY2FsbGJhY2ssIHRhcmdldCwgdXNlQ2FwdHVyZSk7XG4gICAgfVxuICAgIC8qKuWIoOmZpOS5i+WJjeS4juWQjOexu+Wei++8jOWbnuiwg++8jOebruagh+aIliB1c2VDYXB0dXJlIOazqOWGjOeahOWbnuiwg+OAgiAqL1xuICAgIHN0YXRpYyBvZmYobm9kZTogTm9kZSwgdHlwZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24sIHRhcmdldD86IE9iamVjdCwgdXNlQ2FwdHVyZT86IGFueSkge1xuICAgICAgICBub2RlLm9mZih0eXBlLCBjYWxsYmFjaywgdGFyZ2V0LCB1c2VDYXB0dXJlKTtcbiAgICB9XG4gICAgLyoqIOenu+mZpOebruagh+S4iueahOaJgOacieazqOWGjOS6i+S7tuOAgijnm67moIfnsbvlnovnmoTljbN0eXBl5YC855u45ZCM55qE5omA5pyJ5LqL5Lu257G75Z6LKSovXG4gICAgc3RhdGljIG9mZkFsbChub2RlOiBOb2RlLCB0eXBlOiBzdHJpbmcgfCBPYmplY3QsKSB7XG4gICAgICAgIG5vZGUudGFyZ2V0T2ZmKHR5cGUpO1xuICAgIH1cbn1cbiJdfQ==