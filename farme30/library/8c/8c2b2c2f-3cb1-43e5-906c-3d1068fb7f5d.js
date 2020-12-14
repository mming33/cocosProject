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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("DataStorage", DataStorage = (_dec = ccclass('DataStorage'), _dec(_class = /*#__PURE__*/function () {
        function DataStorage() {}

        DataStorage.SaveStr = function SaveStr(key, value) {
          localStorage.setItem(key, value);
          return value;
        };

        DataStorage.GetStr = function GetStr(key) {
          return localStorage.getItem(key);
        };

        DataStorage.SaveJson = function SaveJson(key, value) {
          var data = JSON.stringify(value);
          localStorage.setItem(key, data);
          return data;
        };

        DataStorage.GetJson = function GetJson(key) {
          var value = localStorage.getItem(key);

          if (value) {
            var data = JSON.parse(value);
            return data;
          } else {
            console.error("找不到", key, "对应的数据");
            return null;
          }
        };

        DataStorage.SaveArr = function SaveArr(key, value) {
          var data = {
            arrdata: value
          };
          var str = JSON.stringify(data);
          localStorage.setItem(key, str);
          return value;
        };

        DataStorage.GetArr = function GetArr(key) {
          var value = localStorage.getItem(key);

          if (value) {
            var data = JSON.parse(value);
            var arr = data.arrdata;
            return arr;
          } else {
            console.error("找不到", key, "对应的数据");
            return null;
          }
        };

        return DataStorage;
      }()) || _class)); // let data = { name: "hhh", id: 12341, isboy: true }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9TdG9yYWdlL0RhdGFTdG9yYWdlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJEYXRhU3RvcmFnZSIsIlNhdmVTdHIiLCJrZXkiLCJ2YWx1ZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJHZXRTdHIiLCJnZXRJdGVtIiwiU2F2ZUpzb24iLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIkdldEpzb24iLCJwYXJzZSIsImNvbnNvbGUiLCJlcnJvciIsIlNhdmVBcnIiLCJhcnJkYXRhIiwic3RyIiwiR2V0QXJyIiwiYXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCRCxVLENBQXRCQyxPO0FBQVNDLE1BQUFBLFEsR0FBYUYsVSxDQUFiRSxROzs2QkFHSkMsVyxXQURaRixPQUFPLENBQUMsYUFBRCxDOzs7b0JBSUdHLE8sR0FBUCxpQkFBZUMsR0FBZixFQUE0QkMsS0FBNUIsRUFBbUQ7QUFDL0NDLFVBQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkgsR0FBckIsRUFBMEJDLEtBQTFCO0FBQ0EsaUJBQU9BLEtBQVA7QUFDSCxTOztvQkFDTUcsTSxHQUFQLGdCQUFjSixHQUFkLEVBQTBDO0FBQ3RDLGlCQUFPRSxZQUFZLENBQUNHLE9BQWIsQ0FBcUJMLEdBQXJCLENBQVA7QUFDSCxTOztvQkFFTU0sUSxHQUFQLGtCQUFnQk4sR0FBaEIsRUFBNkJDLEtBQTdCLEVBQThDO0FBQzFDLGNBQUlNLElBQUksR0FBR0MsSUFBSSxDQUFDQyxTQUFMLENBQWVSLEtBQWYsQ0FBWDtBQUNBQyxVQUFBQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUJILEdBQXJCLEVBQTBCTyxJQUExQjtBQUNBLGlCQUFPQSxJQUFQO0FBQ0gsUzs7b0JBRU1HLE8sR0FBUCxpQkFBZVYsR0FBZixFQUFpQztBQUM3QixjQUFJQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0csT0FBYixDQUFxQkwsR0FBckIsQ0FBWjs7QUFDQSxjQUFJQyxLQUFKLEVBQVc7QUFDUCxnQkFBSU0sSUFBSSxHQUFHQyxJQUFJLENBQUNHLEtBQUwsQ0FBV1YsS0FBWCxDQUFYO0FBQ0EsbUJBQU9NLElBQVA7QUFDSCxXQUhELE1BR087QUFDSEssWUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWMsS0FBZCxFQUFxQmIsR0FBckIsRUFBMEIsT0FBMUI7QUFDQSxtQkFBTyxJQUFQO0FBQ0g7QUFDSixTOztvQkFFTWMsTyxHQUFQLGlCQUFrQmQsR0FBbEIsRUFBK0JDLEtBQS9CLEVBQTBEO0FBQ3RELGNBQUlNLElBQUksR0FBRztBQUFFUSxZQUFBQSxPQUFPLEVBQUVkO0FBQVgsV0FBWDtBQUNBLGNBQUllLEdBQUcsR0FBR1IsSUFBSSxDQUFDQyxTQUFMLENBQWVGLElBQWYsQ0FBVjtBQUNBTCxVQUFBQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUJILEdBQXJCLEVBQTBCZ0IsR0FBMUI7QUFDQSxpQkFBT2YsS0FBUDtBQUNILFM7O29CQUVNZ0IsTSxHQUFQLGdCQUFpQmpCLEdBQWpCLEVBQStDO0FBQzNDLGNBQUlDLEtBQUssR0FBR0MsWUFBWSxDQUFDRyxPQUFiLENBQXFCTCxHQUFyQixDQUFaOztBQUNBLGNBQUlDLEtBQUosRUFBVztBQUNQLGdCQUFJTSxJQUFJLEdBQUdDLElBQUksQ0FBQ0csS0FBTCxDQUFXVixLQUFYLENBQVg7QUFDQSxnQkFBSWlCLEdBQUcsR0FBR1gsSUFBSSxDQUFDUSxPQUFmO0FBQ0EsbUJBQU9HLEdBQVA7QUFDSCxXQUpELE1BSU87QUFDSE4sWUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWMsS0FBZCxFQUFxQmIsR0FBckIsRUFBMEIsT0FBMUI7QUFDQSxtQkFBTyxJQUFQO0FBQ0g7QUFDSixTOzs7d0JBTUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSAnY2MnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0RhdGFTdG9yYWdlJylcbmV4cG9ydCBjbGFzcyBEYXRhU3RvcmFnZSB7XG5cblxuICAgIHN0YXRpYyBTYXZlU3RyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIEdldFN0cihrZXk6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgU2F2ZUpzb24oa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBhbnkge1xuICAgICAgICBsZXQgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgc3RhdGljIEdldEpzb24oa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgICAgICBsZXQgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLmib7kuI3liLBcIiwga2V5LCBcIuWvueW6lOeahOaVsOaNrlwiKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIFNhdmVBcnI8VD4oa2V5OiBzdHJpbmcsIHZhbHVlOiBBcnJheTxUPik6IEFycmF5PFQ+IHtcbiAgICAgICAgbGV0IGRhdGEgPSB7IGFycmRhdGE6IHZhbHVlIH07XG4gICAgICAgIGxldCBzdHIgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBzdHIpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgc3RhdGljIEdldEFycjxUPihrZXk6IHN0cmluZyk6IEFycmF5PFQ+IHwgbnVsbCB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgIGxldCBhcnIgPSBkYXRhLmFycmRhdGE7XG4gICAgICAgICAgICByZXR1cm4gYXJyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuaJvuS4jeWIsFwiLCBrZXksIFwi5a+55bqU55qE5pWw5o2uXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG5cbi8vIGxldCBkYXRhID0geyBuYW1lOiBcImhoaFwiLCBpZDogMTIzNDEsIGlzYm95OiB0cnVlIH1cbi8vIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gbGV0IGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKVxuLy8gY29uc29sZS5sb2coYSk7XG4vLyBsZXQgYiA9IEpTT04ucGFyc2UoYSk7XG4vLyBjb25zb2xlLmxvZyhiKTsiXX0=