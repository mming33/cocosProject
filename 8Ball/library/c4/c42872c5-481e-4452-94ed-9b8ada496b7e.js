System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _crd, ccclass, property, DataStorage;

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
      _cclegacy._RF.push({}, "c4287LFSB5EUpTtm4raSWt+", "DataStorage", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("DataStorage", DataStorage = (_dec = ccclass('DataStorage'), _dec(_class = /*#__PURE__*/function () {
        function DataStorage() {
          _classCallCheck(this, DataStorage);
        }

        _createClass(DataStorage, null, [{
          key: "SaveStr",
          value: function SaveStr(key, value) {
            localStorage.setItem(key, value);
            return value;
          }
        }, {
          key: "GetStr",
          value: function GetStr(key) {
            return localStorage.getItem(key);
          }
        }, {
          key: "SaveJson",
          value: function SaveJson(key, value) {
            var data = JSON.stringify(value);
            localStorage.setItem(key, data);
            return data;
          }
        }, {
          key: "GetJson",
          value: function GetJson(key) {
            var value = localStorage.getItem(key);
            var data = JSON.parse(value);
            return data;
          }
        }, {
          key: "SaveArr",
          value: function SaveArr(key, value) {
            var data = {
              arrdata: value
            };
            var str = JSON.stringify(data);
            localStorage.setItem(key, str);
            return value;
          }
        }, {
          key: "GetArr",
          value: function GetArr(key) {
            var value = localStorage.getItem(key);
            var data = JSON.parse(value);
            var arr = data.arrdata;
            return arr;
          }
        }]);

        return DataStorage;
      }()) || _class)); // let data = { name: "hhh", id: 12341, isboy: true }
      // console.log(data);
      // let a = JSON.stringify(data)
      // console.log(a);
      // let b = JSON.parse(a);
      // console.log(b);


      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvOEJhbGwvYXNzZXRzL1NjcmlwdHMvQ29tbW9uL1N0b3JhZ2UvRGF0YVN0b3JhZ2UudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkRhdGFTdG9yYWdlIiwia2V5IiwidmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJhcnJkYXRhIiwic3RyIiwiYXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JELFUsQ0FBdEJDLE87QUFBU0MsTUFBQUEsUSxHQUFhRixVLENBQWJFLFE7OzZCQUdKQyxXLFdBRFpGLE9BQU8sQ0FBQyxhQUFELEM7Ozs7Ozs7a0NBSVdHLEcsRUFBYUMsSyxFQUF1QjtBQUMvQ0MsWUFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCSCxHQUFyQixFQUEwQkMsS0FBMUI7QUFDQSxtQkFBT0EsS0FBUDtBQUNIOzs7aUNBQ2FELEcsRUFBcUI7QUFDL0IsbUJBQU9FLFlBQVksQ0FBQ0UsT0FBYixDQUFxQkosR0FBckIsQ0FBUDtBQUNIOzs7bUNBRWVBLEcsRUFBYUMsSyxFQUFpQjtBQUMxQyxnQkFBSUksSUFBSSxHQUFHQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sS0FBZixDQUFYO0FBQ0FDLFlBQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkgsR0FBckIsRUFBMEJLLElBQTFCO0FBQ0EsbUJBQU9BLElBQVA7QUFDSDs7O2tDQUVjTCxHLEVBQWtCO0FBQzdCLGdCQUFJQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0UsT0FBYixDQUFxQkosR0FBckIsQ0FBWjtBQUNBLGdCQUFJSyxJQUFJLEdBQUdDLElBQUksQ0FBQ0UsS0FBTCxDQUFXUCxLQUFYLENBQVg7QUFDQSxtQkFBT0ksSUFBUDtBQUNIOzs7a0NBRWlCTCxHLEVBQWFDLEssRUFBMkI7QUFDdEQsZ0JBQUlJLElBQUksR0FBRztBQUFFSSxjQUFBQSxPQUFPLEVBQUVSO0FBQVgsYUFBWDtBQUNBLGdCQUFJUyxHQUFHLEdBQUdKLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixJQUFmLENBQVY7QUFDQUgsWUFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCSCxHQUFyQixFQUEwQlUsR0FBMUI7QUFDQSxtQkFBT1QsS0FBUDtBQUNIOzs7aUNBRWdCRCxHLEVBQXVCO0FBQ3BDLGdCQUFJQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0UsT0FBYixDQUFxQkosR0FBckIsQ0FBWjtBQUNBLGdCQUFJSyxJQUFJLEdBQUdDLElBQUksQ0FBQ0UsS0FBTCxDQUFXUCxLQUFYLENBQVg7QUFDQSxnQkFBSVUsR0FBRyxHQUFHTixJQUFJLENBQUNJLE9BQWY7QUFDQSxtQkFBT0UsR0FBUDtBQUNIOzs7O3dCQU1MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gJ2NjJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdEYXRhU3RvcmFnZScpXG5leHBvcnQgY2xhc3MgRGF0YVN0b3JhZ2Uge1xuXG5cbiAgICBzdGF0aWMgU2F2ZVN0cihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRTdHIoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgU2F2ZUpzb24oa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBhbnkge1xuICAgICAgICBsZXQgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgc3RhdGljIEdldEpzb24oa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgICAgICBsZXQgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBzdGF0aWMgU2F2ZUFycjxUPihrZXk6IHN0cmluZywgdmFsdWU6IEFycmF5PFQ+KTogQXJyYXk8VD4ge1xuICAgICAgICBsZXQgZGF0YSA9IHsgYXJyZGF0YTogdmFsdWUgfTtcbiAgICAgICAgbGV0IHN0ciA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHN0cik7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgR2V0QXJyPFQ+KGtleTogc3RyaW5nKTogQXJyYXk8VD4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICBsZXQgYXJyID0gZGF0YS5hcnJkYXRhO1xuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxufVxuXG5cblxuLy8gbGV0IGRhdGEgPSB7IG5hbWU6IFwiaGhoXCIsIGlkOiAxMjM0MSwgaXNib3k6IHRydWUgfVxuLy8gY29uc29sZS5sb2coZGF0YSk7XG4vLyBsZXQgYSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4vLyBjb25zb2xlLmxvZyhhKTtcbi8vIGxldCBiID0gSlNPTi5wYXJzZShhKTtcbi8vIGNvbnNvbGUubG9nKGIpOyJdfQ==