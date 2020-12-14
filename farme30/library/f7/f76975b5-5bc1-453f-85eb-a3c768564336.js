System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, isValid, _crd, MKEventDispatch;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      isValid = _cc.isValid;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f7697W1W8FFP4Xro8doVkM2", "MKEventDispatch", _context.meta);

      //消息处理类
      _export("default", MKEventDispatch = /*#__PURE__*/function () {
        function MKEventDispatch() {
          _defineProperty(this, "list", {});
        }

        var _proto = MKEventDispatch.prototype;

        //注册消息
        _proto.on = function on(key, func, node) {
          if (this.list[key] == null) {
            this.list[key] = [];
          }

          var d = {};
          d.func = func;
          d.node = node;
          this.list[key].push(d);
        } //移除一个消息
        ;

        _proto.remove = function remove(key, node) {
          if (this.list[key]) {
            var data = this.list[key];

            for (var i = 0; i < data.length; i++) {
              if (data[i].node == node) {
                data.splice(i, 1);
                --i;
              }
            }
          }
        } //移除node所有消息
        ;

        _proto.removeByNode = function removeByNode(node) {
          for (var p in this.list) {
            var data = this.list[p];

            for (var i = 0; i < data.length; i++) {
              if (data[i].node == node) {
                data.splice(i, 1);
                --i;
              }
            }
          }
        } //移除key注册的所以消息
        ;

        _proto.removeByKey = function removeByKey(key) {
          delete this.list[key];
        } //遍历通知消息
        ;

        _proto.emit = function emit(key, arg) {
          if (arg === void 0) {
            arg = null;
          }

          // cc.log('遍历通知消息 key:::',key);
          //cc.log('遍历通知消息',this.list);
          if (this.list[key]) {
            var funcs = this.list[key].concat();

            for (var i = 0; i < funcs.length; i++) {
              if (funcs[i].node && isValid(funcs[i].node)) {
                funcs[i].func(arg, funcs[i].node);
              }
            }
          }
        };

        _createClass(MKEventDispatch, null, [{
          key: "I",
          get: function get() {
            if (!this.singleton) {
              this.singleton = new MKEventDispatch();
            }

            return this.singleton;
          }
        }]);

        return MKEventDispatch;
      }()); // window.MKEventDispatch = window.MKEventDispatch || MKEventDispatch;


      _defineProperty(MKEventDispatch, "nowShowLayer", {
        NONE: 0,
        HALL: 1,
        HALLQUIT: 2,
        GAMEQUIT: 3,
        TUTORIAL: 4,
        MATCH: 5,
        GAME: 6
      });

      _defineProperty(MKEventDispatch, "eventType", MKEventDispatch.nowShowLayer.NONE);

      _defineProperty(MKEventDispatch, "singleton", void 0);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9VdGlscy9NS0V2ZW50RGlzcGF0Y2gudHMiXSwibmFtZXMiOlsiaXNWYWxpZCIsIk1LRXZlbnREaXNwYXRjaCIsIm9uIiwia2V5IiwiZnVuYyIsIm5vZGUiLCJsaXN0IiwiZCIsInB1c2giLCJyZW1vdmUiLCJkYXRhIiwiaSIsImxlbmd0aCIsInNwbGljZSIsInJlbW92ZUJ5Tm9kZSIsInAiLCJyZW1vdmVCeUtleSIsImVtaXQiLCJhcmciLCJmdW5jcyIsImNvbmNhdCIsInNpbmdsZXRvbiIsIk5PTkUiLCJIQUxMIiwiSEFMTFFVSVQiLCJHQU1FUVVJVCIsIlRVVE9SSUFMIiwiTUFUQ0giLCJHQU1FIiwibm93U2hvd0xheWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxPLE9BQUFBLE87Ozs7Ozs7QUFFVDt5QkFDcUJDLGU7O3dDQVlQLEU7Ozs7O0FBQ047ZUFDQUMsRSxHQUFBLFlBQUdDLEdBQUgsRUFBV0MsSUFBWCxFQUFvQkMsSUFBcEIsRUFBOEI7QUFDMUIsY0FBRyxLQUFLQyxJQUFMLENBQVVILEdBQVYsS0FBa0IsSUFBckIsRUFBMEI7QUFDdEIsaUJBQUtHLElBQUwsQ0FBVUgsR0FBVixJQUFnQixFQUFoQjtBQUNIOztBQUNELGNBQUlJLENBQUssR0FBRyxFQUFaO0FBQ0FBLFVBQUFBLENBQUMsQ0FBQ0gsSUFBRixHQUFRQSxJQUFSO0FBQ0FHLFVBQUFBLENBQUMsQ0FBQ0YsSUFBRixHQUFTQSxJQUFUO0FBQ0EsZUFBS0MsSUFBTCxDQUFVSCxHQUFWLEVBQWVLLElBQWYsQ0FBb0JELENBQXBCO0FBQ0gsUyxDQUNEOzs7ZUFDQUUsTSxHQUFBLGdCQUFPTixHQUFQLEVBQWVFLElBQWYsRUFBeUI7QUFDckIsY0FBRyxLQUFLQyxJQUFMLENBQVVILEdBQVYsQ0FBSCxFQUFrQjtBQUNkLGdCQUFJTyxJQUFJLEdBQUcsS0FBS0osSUFBTCxDQUFVSCxHQUFWLENBQVg7O0FBQ0EsaUJBQUksSUFBSVEsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDRCxJQUFJLENBQUNFLE1BQXBCLEVBQTJCRCxDQUFDLEVBQTVCLEVBQStCO0FBQzNCLGtCQUFHRCxJQUFJLENBQUNDLENBQUQsQ0FBSixDQUFRTixJQUFSLElBQWdCQSxJQUFuQixFQUNBO0FBQ1FLLGdCQUFBQSxJQUFJLENBQUNHLE1BQUwsQ0FBWUYsQ0FBWixFQUFjLENBQWQ7QUFDQSxrQkFBRUEsQ0FBRjtBQUNQO0FBQ0o7QUFDSjtBQUNKLFMsQ0FDRDs7O2VBQ0FHLFksR0FBQSxzQkFBYVQsSUFBYixFQUF1QjtBQUNuQixlQUFNLElBQUlVLENBQVYsSUFBZSxLQUFLVCxJQUFwQixFQUEwQjtBQUN0QixnQkFBSUksSUFBSSxHQUFHLEtBQUtKLElBQUwsQ0FBVVMsQ0FBVixDQUFYOztBQUNBLGlCQUFJLElBQUlKLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQ0QsSUFBSSxDQUFDRSxNQUFwQixFQUEyQkQsQ0FBQyxFQUE1QixFQUErQjtBQUMzQixrQkFBR0QsSUFBSSxDQUFDQyxDQUFELENBQUosQ0FBUU4sSUFBUixJQUFnQkEsSUFBbkIsRUFDQTtBQUNJSyxnQkFBQUEsSUFBSSxDQUFDRyxNQUFMLENBQVlGLENBQVosRUFBYyxDQUFkO0FBQ0Esa0JBQUVBLENBQUY7QUFDSDtBQUNKO0FBQ0o7QUFDSixTLENBQ0Q7OztlQUNBSyxXLEdBQUEscUJBQVliLEdBQVosRUFBcUI7QUFDakIsaUJBQVEsS0FBS0csSUFBTCxDQUFVSCxHQUFWLENBQVI7QUFDSCxTLENBQ0Q7OztlQUNBYyxJLEdBQUEsY0FBTWQsR0FBTixFQUFtQmUsR0FBbkIsRUFBbUM7QUFBQSxjQUFoQkEsR0FBZ0I7QUFBaEJBLFlBQUFBLEdBQWdCLEdBQU4sSUFBTTtBQUFBOztBQUMvQjtBQUNBO0FBQ0EsY0FBRyxLQUFLWixJQUFMLENBQVVILEdBQVYsQ0FBSCxFQUFrQjtBQUNkLGdCQUFJZ0IsS0FBSyxHQUFHLEtBQUtiLElBQUwsQ0FBVUgsR0FBVixFQUFlaUIsTUFBZixFQUFaOztBQUNBLGlCQUFJLElBQUlULENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ1EsS0FBSyxDQUFDUCxNQUFwQixFQUEyQkQsQ0FBQyxFQUE1QixFQUErQjtBQUMzQixrQkFBSVEsS0FBSyxDQUFDUixDQUFELENBQUwsQ0FBU04sSUFBVCxJQUFpQkwsT0FBTyxDQUFFbUIsS0FBSyxDQUFDUixDQUFELENBQUwsQ0FBU04sSUFBWCxDQUE1QixFQUE4QztBQUMxQ2MsZ0JBQUFBLEtBQUssQ0FBQ1IsQ0FBRCxDQUFMLENBQVNQLElBQVQsQ0FBY2MsR0FBZCxFQUFrQkMsS0FBSyxDQUFDUixDQUFELENBQUwsQ0FBU04sSUFBM0I7QUFDSDtBQUNKO0FBQ0o7QUFDSixTOzs7OzhCQUdxQztBQUNsQyxnQkFBRyxDQUFDLEtBQUtnQixTQUFULEVBQW1CO0FBQ2YsbUJBQUtBLFNBQUwsR0FBaUIsSUFBSXBCLGVBQUosRUFBakI7QUFDSDs7QUFDRCxtQkFBTyxLQUFLb0IsU0FBWjtBQUNIOzs7O1lBR1Q7OztzQkE1RXFCcEIsZSxrQkFFZ0I7QUFDekJxQixRQUFBQSxJQUFJLEVBQUMsQ0FEb0I7QUFFekJDLFFBQUFBLElBQUksRUFBQyxDQUZvQjtBQUd6QkMsUUFBQUEsUUFBUSxFQUFDLENBSGdCO0FBSXpCQyxRQUFBQSxRQUFRLEVBQUMsQ0FKZ0I7QUFLekJDLFFBQUFBLFFBQVEsRUFBQyxDQUxnQjtBQU16QkMsUUFBQUEsS0FBSyxFQUFDLENBTm1CO0FBT3pCQyxRQUFBQSxJQUFJLEVBQUM7QUFQb0IsTzs7c0JBRmhCM0IsZSxlQVdhQSxlQUFlLENBQUM0QixZQUFoQixDQUE2QlAsSTs7c0JBWDFDckIsZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzVmFsaWQgfSBmcm9tIFwiY2NcIjtcblxuLy/mtojmga/lpITnkIbnsbtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1LRXZlbnREaXNwYXRjaCB7XG4gICAgICAgIC8v55WM6Z2i57G75Z6LO1xuICAgICAgICBwdWJsaWMgc3RhdGljIG5vd1Nob3dMYXllciA9IHtcbiAgICAgICAgICAgIE5PTkU6MCxcbiAgICAgICAgICAgIEhBTEw6MSxcbiAgICAgICAgICAgIEhBTExRVUlUOjIsXG4gICAgICAgICAgICBHQU1FUVVJVDozLFxuICAgICAgICAgICAgVFVUT1JJQUw6NCxcbiAgICAgICAgICAgIE1BVENIOjUsXG4gICAgICAgICAgICBHQU1FOjZcbiAgICAgICAgfTtcbiAgICAgICAgcHVibGljIHN0YXRpYyBldmVudFR5cGUgPSBNS0V2ZW50RGlzcGF0Y2gubm93U2hvd0xheWVyLk5PTkU7XG4gICAgICAgIGxpc3QgPXt9O1xuICAgICAgICAvL+azqOWGjOa2iOaBr1xuICAgICAgICBvbihrZXk6YW55LGZ1bmM6YW55LG5vZGU6YW55KSB7XG4gICAgICAgICAgICBpZih0aGlzLmxpc3Rba2V5XSA9PSBudWxsKXtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3Rba2V5XSA9W107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZDphbnkgPSB7fTtcbiAgICAgICAgICAgIGQuZnVuYyA9ZnVuYztcbiAgICAgICAgICAgIGQubm9kZSA9IG5vZGU7XG4gICAgICAgICAgICB0aGlzLmxpc3Rba2V5XS5wdXNoKGQpO1xuICAgICAgICB9XG4gICAgICAgIC8v56e76Zmk5LiA5Liq5raI5oGvXG4gICAgICAgIHJlbW92ZShrZXk6YW55LG5vZGU6YW55KSB7XG4gICAgICAgICAgICBpZih0aGlzLmxpc3Rba2V5XSl7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmxpc3Rba2V5XTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxkYXRhLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZihkYXRhW2ldLm5vZGUgPT0gbm9kZSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLS1pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v56e76Zmkbm9kZeaJgOaciea2iOaBr1xuICAgICAgICByZW1vdmVCeU5vZGUobm9kZTphbnkpIHtcbiAgICAgICAgICAgIGZvciAoIGxldCBwIGluIHRoaXMubGlzdCApeyBcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMubGlzdFtwXTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxkYXRhLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZihkYXRhW2ldLm5vZGUgPT0gbm9kZSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC0taTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgICAgLy/np7vpmaRrZXnms6jlhoznmoTmiYDku6Xmtojmga9cbiAgICAgICAgcmVtb3ZlQnlLZXkoa2V5OmFueSkge1xuICAgICAgICAgICAgZGVsZXRlICB0aGlzLmxpc3Rba2V5XTtcbiAgICAgICAgfVxuICAgICAgICAvL+mBjeWOhumAmuefpea2iOaBr1xuICAgICAgICBlbWl0IChrZXk6IHN0cmluZywgYXJnOmFueSA9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIGNjLmxvZygn6YGN5Y6G6YCa55+l5raI5oGvIGtleTo6Oicsa2V5KTtcbiAgICAgICAgICAgIC8vY2MubG9nKCfpgY3ljobpgJrnn6Xmtojmga8nLHRoaXMubGlzdCk7XG4gICAgICAgICAgICBpZih0aGlzLmxpc3Rba2V5XSl7XG4gICAgICAgICAgICAgICAgbGV0IGZ1bmNzID0gdGhpcy5saXN0W2tleV0uY29uY2F0KCk7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7aTxmdW5jcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZ1bmNzW2ldLm5vZGUgJiYgaXNWYWxpZCAoZnVuY3NbaV0ubm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmNzW2ldLmZ1bmMoYXJnLGZ1bmNzW2ldLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIHN0YXRpYyBzaW5nbGV0b246TUtFdmVudERpc3BhdGNoO1xuICAgICAgICBwdWJsaWMgc3RhdGljIGdldCBJKCk6IE1LRXZlbnREaXNwYXRjaHtcbiAgICAgICAgICAgIGlmKCF0aGlzLnNpbmdsZXRvbil7XG4gICAgICAgICAgICAgICAgdGhpcy5zaW5nbGV0b24gPSBuZXcgTUtFdmVudERpc3BhdGNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaW5nbGV0b247XG4gICAgICAgIH1cbn1cblxuLy8gd2luZG93Lk1LRXZlbnREaXNwYXRjaCA9IHdpbmRvdy5NS0V2ZW50RGlzcGF0Y2ggfHwgTUtFdmVudERpc3BhdGNoO1xuXG4iXX0=