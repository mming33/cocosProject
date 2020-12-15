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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vU3RvcmFnZS9EYXRhU3RvcmFnZS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiRGF0YVN0b3JhZ2UiLCJTYXZlU3RyIiwia2V5IiwidmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiR2V0U3RyIiwiZ2V0SXRlbSIsIlNhdmVKc29uIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJHZXRKc29uIiwicGFyc2UiLCJjb25zb2xlIiwiZXJyb3IiLCJTYXZlQXJyIiwiYXJyZGF0YSIsInN0ciIsIkdldEFyciIsImFyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7Ozs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQkQsVSxDQUF0QkMsTztBQUFTQyxNQUFBQSxRLEdBQWFGLFUsQ0FBYkUsUTs7NkJBR0pDLFcsV0FEWkYsT0FBTyxDQUFDLGFBQUQsQzs7O29CQUlHRyxPLEdBQVAsaUJBQWVDLEdBQWYsRUFBNEJDLEtBQTVCLEVBQW1EO0FBQy9DQyxVQUFBQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUJILEdBQXJCLEVBQTBCQyxLQUExQjtBQUNBLGlCQUFPQSxLQUFQO0FBQ0gsUzs7b0JBQ01HLE0sR0FBUCxnQkFBY0osR0FBZCxFQUEwQztBQUN0QyxpQkFBT0UsWUFBWSxDQUFDRyxPQUFiLENBQXFCTCxHQUFyQixDQUFQO0FBQ0gsUzs7b0JBRU1NLFEsR0FBUCxrQkFBZ0JOLEdBQWhCLEVBQTZCQyxLQUE3QixFQUE4QztBQUMxQyxjQUFJTSxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUixLQUFmLENBQVg7QUFDQUMsVUFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCSCxHQUFyQixFQUEwQk8sSUFBMUI7QUFDQSxpQkFBT0EsSUFBUDtBQUNILFM7O29CQUVNRyxPLEdBQVAsaUJBQWVWLEdBQWYsRUFBaUM7QUFDN0IsY0FBSUMsS0FBSyxHQUFHQyxZQUFZLENBQUNHLE9BQWIsQ0FBcUJMLEdBQXJCLENBQVo7O0FBQ0EsY0FBSUMsS0FBSixFQUFXO0FBQ1AsZ0JBQUlNLElBQUksR0FBR0MsSUFBSSxDQUFDRyxLQUFMLENBQVdWLEtBQVgsQ0FBWDtBQUNBLG1CQUFPTSxJQUFQO0FBQ0gsV0FIRCxNQUdPO0FBQ0hLLFlBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLEtBQWQsRUFBcUJiLEdBQXJCLEVBQTBCLE9BQTFCO0FBQ0EsbUJBQU8sSUFBUDtBQUNIO0FBQ0osUzs7b0JBRU1jLE8sR0FBUCxpQkFBa0JkLEdBQWxCLEVBQStCQyxLQUEvQixFQUEwRDtBQUN0RCxjQUFJTSxJQUFJLEdBQUc7QUFBRVEsWUFBQUEsT0FBTyxFQUFFZDtBQUFYLFdBQVg7QUFDQSxjQUFJZSxHQUFHLEdBQUdSLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixJQUFmLENBQVY7QUFDQUwsVUFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCSCxHQUFyQixFQUEwQmdCLEdBQTFCO0FBQ0EsaUJBQU9mLEtBQVA7QUFDSCxTOztvQkFFTWdCLE0sR0FBUCxnQkFBaUJqQixHQUFqQixFQUErQztBQUMzQyxjQUFJQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0csT0FBYixDQUFxQkwsR0FBckIsQ0FBWjs7QUFDQSxjQUFJQyxLQUFKLEVBQVc7QUFDUCxnQkFBSU0sSUFBSSxHQUFHQyxJQUFJLENBQUNHLEtBQUwsQ0FBV1YsS0FBWCxDQUFYO0FBQ0EsZ0JBQUlpQixHQUFHLEdBQUdYLElBQUksQ0FBQ1EsT0FBZjtBQUNBLG1CQUFPRyxHQUFQO0FBQ0gsV0FKRCxNQUlPO0FBQ0hOLFlBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLEtBQWQsRUFBcUJiLEdBQXJCLEVBQTBCLE9BQTFCO0FBQ0EsbUJBQU8sSUFBUDtBQUNIO0FBQ0osUzs7O3dCQU1MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gJ2NjJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdEYXRhU3RvcmFnZScpXG5leHBvcnQgY2xhc3MgRGF0YVN0b3JhZ2Uge1xuXG5cbiAgICBzdGF0aWMgU2F2ZVN0cihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRTdHIoa2V5OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgfVxuXG4gICAgc3RhdGljIFNhdmVKc29uKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogYW55IHtcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgZGF0YSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHN0YXRpYyBHZXRKc29uKGtleTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgbGV0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5om+5LiN5YiwXCIsIGtleSwgXCLlr7nlupTnmoTmlbDmja5cIik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBTYXZlQXJyPFQ+KGtleTogc3RyaW5nLCB2YWx1ZTogQXJyYXk8VD4pOiBBcnJheTxUPiB7XG4gICAgICAgIGxldCBkYXRhID0geyBhcnJkYXRhOiB2YWx1ZSB9O1xuICAgICAgICBsZXQgc3RyID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgc3RyKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHN0YXRpYyBHZXRBcnI8VD4oa2V5OiBzdHJpbmcpOiBBcnJheTxUPiB8IG51bGwge1xuICAgICAgICBsZXQgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgICBsZXQgYXJyID0gZGF0YS5hcnJkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLmib7kuI3liLBcIiwga2V5LCBcIuWvueW6lOeahOaVsOaNrlwiKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuXG4vLyBsZXQgZGF0YSA9IHsgbmFtZTogXCJoaGhcIiwgaWQ6IDEyMzQxLCBpc2JveTogdHJ1ZSB9XG4vLyBjb25zb2xlLmxvZyhkYXRhKTtcbi8vIGxldCBhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSlcbi8vIGNvbnNvbGUubG9nKGEpO1xuLy8gbGV0IGIgPSBKU09OLnBhcnNlKGEpO1xuLy8gY29uc29sZS5sb2coYik7Il19