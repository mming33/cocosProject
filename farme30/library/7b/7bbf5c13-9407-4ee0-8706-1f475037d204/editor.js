System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, GlobalGameData, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7bbf5wTlAdO4IcGH0dQN9IE", "GlobalGameData", _context.meta);

      /**
       * CopyRight:
       * 全局数据类
       */
      _export("default", GlobalGameData = class GlobalGameData {
        //声音开关;
        //用户ID；
        //服务器链接情况;
        //分享链接;
        //房间id;
        //执行Promise的队列动作;
        static runPromiseArray(parray) {
          let p = Promise.resolve();

          for (let promise of parray) {
            p = p.then(promise).catch(() => {
              return p;
            });
          }
        } //设置名字长度；


        static subNickName(nameStr) {
          if (nameStr.length > 8) {
            nameStr = nameStr.substring(0, 8) + '...';
          }

          return nameStr;
        }

      });

      _defineProperty(GlobalGameData, "audioEngineOn", true);

      _defineProperty(GlobalGameData, "userId", -1);

      _defineProperty(GlobalGameData, "socketStatus", false);

      _defineProperty(GlobalGameData, "shareUrl", '');

      _defineProperty(GlobalGameData, "roomId", 0);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9VdGlscy9HbG9iYWxHYW1lRGF0YS50cyJdLCJuYW1lcyI6WyJHbG9iYWxHYW1lRGF0YSIsInJ1blByb21pc2VBcnJheSIsInBhcnJheSIsInAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInByb21pc2UiLCJ0aGVuIiwiY2F0Y2giLCJzdWJOaWNrTmFtZSIsIm5hbWVTdHIiLCJsZW5ndGgiLCJzdWJzdHJpbmciXSwibWFwcGluZ3MiOiI7OztpQkFNcUJBLGM7Ozs7Ozs7Ozs7Ozs7OztBQUxyQjtBQUNBO0FBQ0E7QUFDQTt5QkFFcUJBLGMsR0FBTixNQUFNQSxjQUFOLENBQXFCO0FBRXFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0M7QUFJdEU7QUFDQSxlQUFjQyxlQUFkLENBQThCQyxNQUE5QixFQUEyQztBQUN2QyxjQUFJQyxDQUFDLEdBQUdDLE9BQU8sQ0FBQ0MsT0FBUixFQUFSOztBQUNBLGVBQUssSUFBSUMsT0FBVCxJQUFvQkosTUFBcEIsRUFBNEI7QUFDeEJDLFlBQUFBLENBQUMsR0FBR0EsQ0FBQyxDQUFDSSxJQUFGLENBQU9ELE9BQVAsRUFBZ0JFLEtBQWhCLENBQXNCLE1BQU07QUFDNUIscUJBQU9MLENBQVA7QUFDSCxhQUZHLENBQUo7QUFHSDtBQUNKLFNBbEIrQixDQW9CaEM7OztBQUNBLGVBQWNNLFdBQWQsQ0FBMEJDLE9BQTFCLEVBQTJDO0FBQ3ZDLGNBQUlBLE9BQU8sQ0FBQ0MsTUFBUixHQUFpQixDQUFyQixFQUF3QjtBQUNwQkQsWUFBQUEsT0FBTyxHQUFHQSxPQUFPLENBQUNFLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsSUFBMEIsS0FBcEM7QUFDSDs7QUFDRCxpQkFBT0YsT0FBUDtBQUNIOztBQTFCK0IsTzs7c0JBQWZWLGMsbUJBRXNCLEk7O3NCQUZ0QkEsYyxZQUdjLENBQUMsQzs7c0JBSGZBLGMsa0JBSXFCLEs7O3NCQUpyQkEsYyxjQUtnQixFOztzQkFMaEJBLGMsWUFNYyxDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIENvcHlSaWdodDpcbiAqIOWFqOWxgOaVsOaNruexu1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb2JhbEdhbWVEYXRhIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXVkaW9FbmdpbmVPbjogYm9vbGVhbiA9IHRydWU7ICAgICAgICAgICAgICAgICAgICAgICAgIC8v5aOw6Z+z5byA5YWzO1xuICAgIHB1YmxpYyBzdGF0aWMgdXNlcklkOiBudW1iZXIgPSAtMTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v55So5oi3SUTvvJtcbiAgICBwdWJsaWMgc3RhdGljIHNvY2tldFN0YXR1czogYm9vbGVhbiA9IGZhbHNlOyAgICAgICAgICAgICAgICAgICAgICAgICAvL+acjeWKoeWZqOmTvuaOpeaDheWGtTtcbiAgICBwdWJsaWMgc3RhdGljIHNoYXJlVXJsOiBzdHJpbmcgPSAnJzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WIhuS6q+mTvuaOpTtcbiAgICBwdWJsaWMgc3RhdGljIHJvb21JZDogbnVtYmVyID0gMDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/miL/pl7RpZDtcblxuXG5cbiAgICAvL+aJp+ihjFByb21pc2XnmoTpmJ/liJfliqjkvZw7XG4gICAgcHVibGljIHN0YXRpYyBydW5Qcm9taXNlQXJyYXkocGFycmF5OiBhbnkpIHtcbiAgICAgICAgbGV0IHAgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgZm9yIChsZXQgcHJvbWlzZSBvZiBwYXJyYXkpIHtcbiAgICAgICAgICAgIHAgPSBwLnRoZW4ocHJvbWlzZSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+iuvue9ruWQjeWtl+mVv+W6pu+8m1xuICAgIHB1YmxpYyBzdGF0aWMgc3ViTmlja05hbWUobmFtZVN0cjogc3RyaW5nKSB7XG4gICAgICAgIGlmIChuYW1lU3RyLmxlbmd0aCA+IDgpIHtcbiAgICAgICAgICAgIG5hbWVTdHIgPSBuYW1lU3RyLnN1YnN0cmluZygwLCA4KSArICcuLi4nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuYW1lU3RyO1xuICAgIH1cblxuXG59Il19