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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vU3RvcmFnZS9EYXRhU3RvcmFnZS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiRGF0YVN0b3JhZ2UiLCJTYXZlU3RyIiwia2V5IiwidmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiR2V0U3RyIiwiZ2V0SXRlbSIsIlNhdmVKc29uIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJHZXRKc29uIiwicGFyc2UiLCJjb25zb2xlIiwiZXJyb3IiLCJTYXZlQXJyIiwiYXJyZGF0YSIsInN0ciIsIkdldEFyciIsImFyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7Ozs7Ozs7T0FDSDtBQUFFQyxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsTyxHQUF3QkYsVTs7NkJBR2pCRyxXLFdBRFpGLE9BQU8sQ0FBQyxhQUFELEMsZ0JBQVIsTUFDYUUsV0FEYixDQUN5QjtBQUdyQixlQUFPQyxPQUFQLENBQWVDLEdBQWYsRUFBNEJDLEtBQTVCLEVBQW1EO0FBQy9DQyxVQUFBQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUJILEdBQXJCLEVBQTBCQyxLQUExQjtBQUNBLGlCQUFPQSxLQUFQO0FBQ0g7O0FBQ0QsZUFBT0csTUFBUCxDQUFjSixHQUFkLEVBQTBDO0FBQ3RDLGlCQUFPRSxZQUFZLENBQUNHLE9BQWIsQ0FBcUJMLEdBQXJCLENBQVA7QUFDSDs7QUFFRCxlQUFPTSxRQUFQLENBQWdCTixHQUFoQixFQUE2QkMsS0FBN0IsRUFBOEM7QUFDMUMsY0FBSU0sSUFBSSxHQUFHQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVIsS0FBZixDQUFYO0FBQ0FDLFVBQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkgsR0FBckIsRUFBMEJPLElBQTFCO0FBQ0EsaUJBQU9BLElBQVA7QUFDSDs7QUFFRCxlQUFPRyxPQUFQLENBQWVWLEdBQWYsRUFBaUM7QUFDN0IsY0FBSUMsS0FBSyxHQUFHQyxZQUFZLENBQUNHLE9BQWIsQ0FBcUJMLEdBQXJCLENBQVo7O0FBQ0EsY0FBSUMsS0FBSixFQUFXO0FBQ1AsZ0JBQUlNLElBQUksR0FBR0MsSUFBSSxDQUFDRyxLQUFMLENBQVdWLEtBQVgsQ0FBWDtBQUNBLG1CQUFPTSxJQUFQO0FBQ0gsV0FIRCxNQUdPO0FBQ0hLLFlBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLEtBQWQsRUFBcUJiLEdBQXJCLEVBQTBCLE9BQTFCO0FBQ0EsbUJBQU8sSUFBUDtBQUNIO0FBQ0o7O0FBRUQsZUFBT2MsT0FBUCxDQUFrQmQsR0FBbEIsRUFBK0JDLEtBQS9CLEVBQTBEO0FBQ3RELGNBQUlNLElBQUksR0FBRztBQUFFUSxZQUFBQSxPQUFPLEVBQUVkO0FBQVgsV0FBWDtBQUNBLGNBQUllLEdBQUcsR0FBR1IsSUFBSSxDQUFDQyxTQUFMLENBQWVGLElBQWYsQ0FBVjtBQUNBTCxVQUFBQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUJILEdBQXJCLEVBQTBCZ0IsR0FBMUI7QUFDQSxpQkFBT2YsS0FBUDtBQUNIOztBQUVELGVBQU9nQixNQUFQLENBQWlCakIsR0FBakIsRUFBK0M7QUFDM0MsY0FBSUMsS0FBSyxHQUFHQyxZQUFZLENBQUNHLE9BQWIsQ0FBcUJMLEdBQXJCLENBQVo7O0FBQ0EsY0FBSUMsS0FBSixFQUFXO0FBQ1AsZ0JBQUlNLElBQUksR0FBR0MsSUFBSSxDQUFDRyxLQUFMLENBQVdWLEtBQVgsQ0FBWDtBQUNBLGdCQUFJaUIsR0FBRyxHQUFHWCxJQUFJLENBQUNRLE9BQWY7QUFDQSxtQkFBT0csR0FBUDtBQUNILFdBSkQsTUFJTztBQUNITixZQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyxLQUFkLEVBQXFCYixHQUFyQixFQUEwQixPQUExQjtBQUNBLG1CQUFPLElBQVA7QUFDSDtBQUNKOztBQTdDb0IsTyxlQW1EekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSAnY2MnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0RhdGFTdG9yYWdlJylcbmV4cG9ydCBjbGFzcyBEYXRhU3RvcmFnZSB7XG5cblxuICAgIHN0YXRpYyBTYXZlU3RyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIEdldFN0cihrZXk6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgU2F2ZUpzb24oa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBhbnkge1xuICAgICAgICBsZXQgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgc3RhdGljIEdldEpzb24oa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgICAgICBsZXQgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLmib7kuI3liLBcIiwga2V5LCBcIuWvueW6lOeahOaVsOaNrlwiKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIFNhdmVBcnI8VD4oa2V5OiBzdHJpbmcsIHZhbHVlOiBBcnJheTxUPik6IEFycmF5PFQ+IHtcbiAgICAgICAgbGV0IGRhdGEgPSB7IGFycmRhdGE6IHZhbHVlIH07XG4gICAgICAgIGxldCBzdHIgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBzdHIpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgc3RhdGljIEdldEFycjxUPihrZXk6IHN0cmluZyk6IEFycmF5PFQ+IHwgbnVsbCB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgIGxldCBhcnIgPSBkYXRhLmFycmRhdGE7XG4gICAgICAgICAgICByZXR1cm4gYXJyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuaJvuS4jeWIsFwiLCBrZXksIFwi5a+55bqU55qE5pWw5o2uXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG5cbi8vIGxldCBkYXRhID0geyBuYW1lOiBcImhoaFwiLCBpZDogMTIzNDEsIGlzYm95OiB0cnVlIH1cbi8vIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gbGV0IGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKVxuLy8gY29uc29sZS5sb2coYSk7XG4vLyBsZXQgYiA9IEpTT04ucGFyc2UoYSk7XG4vLyBjb25zb2xlLmxvZyhiKTsiXX0=