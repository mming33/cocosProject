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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9TdG9yYWdlL0RhdGFTdG9yYWdlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJEYXRhU3RvcmFnZSIsImtleSIsInZhbHVlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEl0ZW0iLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwiYXJyZGF0YSIsInN0ciIsImFyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCRCxVLENBQXRCQyxPO0FBQVNDLE1BQUFBLFEsR0FBYUYsVSxDQUFiRSxROzs2QkFHSkMsVyxXQURaRixPQUFPLENBQUMsYUFBRCxDOzs7Ozs7O2tDQUlXRyxHLEVBQWFDLEssRUFBdUI7QUFDL0NDLFlBQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkgsR0FBckIsRUFBMEJDLEtBQTFCO0FBQ0EsbUJBQU9BLEtBQVA7QUFDSDs7O2lDQUNhRCxHLEVBQXFCO0FBQy9CLG1CQUFPRSxZQUFZLENBQUNFLE9BQWIsQ0FBcUJKLEdBQXJCLENBQVA7QUFDSDs7O21DQUVlQSxHLEVBQWFDLEssRUFBaUI7QUFDMUMsZ0JBQUlJLElBQUksR0FBR0MsSUFBSSxDQUFDQyxTQUFMLENBQWVOLEtBQWYsQ0FBWDtBQUNBQyxZQUFBQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUJILEdBQXJCLEVBQTBCSyxJQUExQjtBQUNBLG1CQUFPQSxJQUFQO0FBQ0g7OztrQ0FFY0wsRyxFQUFrQjtBQUM3QixnQkFBSUMsS0FBSyxHQUFHQyxZQUFZLENBQUNFLE9BQWIsQ0FBcUJKLEdBQXJCLENBQVo7QUFDQSxnQkFBSUssSUFBSSxHQUFHQyxJQUFJLENBQUNFLEtBQUwsQ0FBV1AsS0FBWCxDQUFYO0FBQ0EsbUJBQU9JLElBQVA7QUFDSDs7O2tDQUVpQkwsRyxFQUFhQyxLLEVBQTJCO0FBQ3RELGdCQUFJSSxJQUFJLEdBQUc7QUFBRUksY0FBQUEsT0FBTyxFQUFFUjtBQUFYLGFBQVg7QUFDQSxnQkFBSVMsR0FBRyxHQUFHSixJQUFJLENBQUNDLFNBQUwsQ0FBZUYsSUFBZixDQUFWO0FBQ0FILFlBQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkgsR0FBckIsRUFBMEJVLEdBQTFCO0FBQ0EsbUJBQU9ULEtBQVA7QUFDSDs7O2lDQUVnQkQsRyxFQUF1QjtBQUNwQyxnQkFBSUMsS0FBSyxHQUFHQyxZQUFZLENBQUNFLE9BQWIsQ0FBcUJKLEdBQXJCLENBQVo7QUFDQSxnQkFBSUssSUFBSSxHQUFHQyxJQUFJLENBQUNFLEtBQUwsQ0FBV1AsS0FBWCxDQUFYO0FBQ0EsZ0JBQUlVLEdBQUcsR0FBR04sSUFBSSxDQUFDSSxPQUFmO0FBQ0EsbUJBQU9FLEdBQVA7QUFDSDs7Ozt3QkFNTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tICdjYyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnRGF0YVN0b3JhZ2UnKVxuZXhwb3J0IGNsYXNzIERhdGFTdG9yYWdlIHtcblxuXG4gICAgc3RhdGljIFNhdmVTdHIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBzdGF0aWMgR2V0U3RyKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgfVxuXG4gICAgc3RhdGljIFNhdmVKc29uKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogYW55IHtcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgZGF0YSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHN0YXRpYyBHZXRKc29uKGtleTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgbGV0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgc3RhdGljIFNhdmVBcnI8VD4oa2V5OiBzdHJpbmcsIHZhbHVlOiBBcnJheTxUPik6IEFycmF5PFQ+IHtcbiAgICAgICAgbGV0IGRhdGEgPSB7IGFycmRhdGE6IHZhbHVlIH07XG4gICAgICAgIGxldCBzdHIgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBzdHIpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgc3RhdGljIEdldEFycjxUPihrZXk6IHN0cmluZyk6IEFycmF5PFQ+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgbGV0IGFyciA9IGRhdGEuYXJyZGF0YTtcbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbn1cblxuXG5cbi8vIGxldCBkYXRhID0geyBuYW1lOiBcImhoaFwiLCBpZDogMTIzNDEsIGlzYm95OiB0cnVlIH1cbi8vIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gbGV0IGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKVxuLy8gY29uc29sZS5sb2coYSk7XG4vLyBsZXQgYiA9IEpTT04ucGFyc2UoYSk7XG4vLyBjb25zb2xlLmxvZyhiKTsiXX0=