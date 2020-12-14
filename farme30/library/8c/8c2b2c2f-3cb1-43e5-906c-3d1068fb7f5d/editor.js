System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _crd, ccclass, property, DataStorage;

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

      _cclegacy._RF.push({}, "8c2b2wvPLFD5ZBsPRBo+39d", "DataStorage", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DataStorage", DataStorage = (_dec = ccclass('DataStorage'), _dec(_class = class DataStorage {
        static SaveStr(key, value) {
          localStorage.setItem(key, value);
          return value;
        }

        static GetStr(key) {
          return localStorage.getItem(key);
        }

        static SaveJson(key, value) {
          let data = JSON.stringify(value);
          localStorage.setItem(key, data);
          return data;
        }

        static GetJson(key) {
          let value = localStorage.getItem(key);

          if (value) {
            let data = JSON.parse(value);
            return data;
          } else {
            console.error("找不到", key, "对应的数据");
            return null;
          }
        }

        static SaveArr(key, value) {
          let data = {
            arrdata: value
          };
          let str = JSON.stringify(data);
          localStorage.setItem(key, str);
          return value;
        }

        static GetArr(key) {
          let value = localStorage.getItem(key);

          if (value) {
            let data = JSON.parse(value);
            let arr = data.arrdata;
            return arr;
          } else {
            console.error("找不到", key, "对应的数据");
            return null;
          }
        }

      }) || _class)); // let data = { name: "hhh", id: 12341, isboy: true }
      // console.log(data);
      // let a = JSON.stringify(data)
      // console.log(a);
      // let b = JSON.parse(a);
      // console.log(b);


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9TdG9yYWdlL0RhdGFTdG9yYWdlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJEYXRhU3RvcmFnZSIsIlNhdmVTdHIiLCJrZXkiLCJ2YWx1ZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJHZXRTdHIiLCJnZXRJdGVtIiwiU2F2ZUpzb24iLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIkdldEpzb24iLCJwYXJzZSIsImNvbnNvbGUiLCJlcnJvciIsIlNhdmVBcnIiLCJhcnJkYXRhIiwic3RyIiwiR2V0QXJyIiwiYXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7Ozs7OztPQUNIO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCRixVOzs2QkFHakJHLFcsV0FEWkYsT0FBTyxDQUFDLGFBQUQsQyxnQkFBUixNQUNhRSxXQURiLENBQ3lCO0FBR3JCLGVBQU9DLE9BQVAsQ0FBZUMsR0FBZixFQUE0QkMsS0FBNUIsRUFBbUQ7QUFDL0NDLFVBQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkgsR0FBckIsRUFBMEJDLEtBQTFCO0FBQ0EsaUJBQU9BLEtBQVA7QUFDSDs7QUFDRCxlQUFPRyxNQUFQLENBQWNKLEdBQWQsRUFBMEM7QUFDdEMsaUJBQU9FLFlBQVksQ0FBQ0csT0FBYixDQUFxQkwsR0FBckIsQ0FBUDtBQUNIOztBQUVELGVBQU9NLFFBQVAsQ0FBZ0JOLEdBQWhCLEVBQTZCQyxLQUE3QixFQUE4QztBQUMxQyxjQUFJTSxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUixLQUFmLENBQVg7QUFDQUMsVUFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCSCxHQUFyQixFQUEwQk8sSUFBMUI7QUFDQSxpQkFBT0EsSUFBUDtBQUNIOztBQUVELGVBQU9HLE9BQVAsQ0FBZVYsR0FBZixFQUFpQztBQUM3QixjQUFJQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0csT0FBYixDQUFxQkwsR0FBckIsQ0FBWjs7QUFDQSxjQUFJQyxLQUFKLEVBQVc7QUFDUCxnQkFBSU0sSUFBSSxHQUFHQyxJQUFJLENBQUNHLEtBQUwsQ0FBV1YsS0FBWCxDQUFYO0FBQ0EsbUJBQU9NLElBQVA7QUFDSCxXQUhELE1BR087QUFDSEssWUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWMsS0FBZCxFQUFxQmIsR0FBckIsRUFBMEIsT0FBMUI7QUFDQSxtQkFBTyxJQUFQO0FBQ0g7QUFDSjs7QUFFRCxlQUFPYyxPQUFQLENBQWtCZCxHQUFsQixFQUErQkMsS0FBL0IsRUFBMEQ7QUFDdEQsY0FBSU0sSUFBSSxHQUFHO0FBQUVRLFlBQUFBLE9BQU8sRUFBRWQ7QUFBWCxXQUFYO0FBQ0EsY0FBSWUsR0FBRyxHQUFHUixJQUFJLENBQUNDLFNBQUwsQ0FBZUYsSUFBZixDQUFWO0FBQ0FMLFVBQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkgsR0FBckIsRUFBMEJnQixHQUExQjtBQUNBLGlCQUFPZixLQUFQO0FBQ0g7O0FBRUQsZUFBT2dCLE1BQVAsQ0FBaUJqQixHQUFqQixFQUErQztBQUMzQyxjQUFJQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0csT0FBYixDQUFxQkwsR0FBckIsQ0FBWjs7QUFDQSxjQUFJQyxLQUFKLEVBQVc7QUFDUCxnQkFBSU0sSUFBSSxHQUFHQyxJQUFJLENBQUNHLEtBQUwsQ0FBV1YsS0FBWCxDQUFYO0FBQ0EsZ0JBQUlpQixHQUFHLEdBQUdYLElBQUksQ0FBQ1EsT0FBZjtBQUNBLG1CQUFPRyxHQUFQO0FBQ0gsV0FKRCxNQUlPO0FBQ0hOLFlBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLEtBQWQsRUFBcUJiLEdBQXJCLEVBQTBCLE9BQTFCO0FBQ0EsbUJBQU8sSUFBUDtBQUNIO0FBQ0o7O0FBN0NvQixPLGVBbUR6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tICdjYyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnRGF0YVN0b3JhZ2UnKVxuZXhwb3J0IGNsYXNzIERhdGFTdG9yYWdlIHtcblxuXG4gICAgc3RhdGljIFNhdmVTdHIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBzdGF0aWMgR2V0U3RyKGtleTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBTYXZlSnNvbihrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IGFueSB7XG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGEpO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBzdGF0aWMgR2V0SnNvbihrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuaJvuS4jeWIsFwiLCBrZXksIFwi5a+55bqU55qE5pWw5o2uXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgU2F2ZUFycjxUPihrZXk6IHN0cmluZywgdmFsdWU6IEFycmF5PFQ+KTogQXJyYXk8VD4ge1xuICAgICAgICBsZXQgZGF0YSA9IHsgYXJyZGF0YTogdmFsdWUgfTtcbiAgICAgICAgbGV0IHN0ciA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHN0cik7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgR2V0QXJyPFQ+KGtleTogc3RyaW5nKTogQXJyYXk8VD4gfCBudWxsIHtcbiAgICAgICAgbGV0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICAgICAgbGV0IGFyciA9IGRhdGEuYXJyZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBhcnI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5om+5LiN5YiwXCIsIGtleSwgXCLlr7nlupTnmoTmlbDmja5cIik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cblxuLy8gbGV0IGRhdGEgPSB7IG5hbWU6IFwiaGhoXCIsIGlkOiAxMjM0MSwgaXNib3k6IHRydWUgfVxuLy8gY29uc29sZS5sb2coZGF0YSk7XG4vLyBsZXQgYSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4vLyBjb25zb2xlLmxvZyhhKTtcbi8vIGxldCBiID0gSlNPTi5wYXJzZShhKTtcbi8vIGNvbnNvbGUubG9nKGIpOyJdfQ==