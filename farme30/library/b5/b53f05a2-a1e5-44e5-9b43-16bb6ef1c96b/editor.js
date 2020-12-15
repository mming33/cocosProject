System.register(["cce.code-quality.cr", "cc", "../Storage/DataStorage.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, DataStorage, _dec, _class, _class2, _temp, _crd, ccclass, property, GetLocalData;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfDataStorage(extras) {
    _reporterNs.report("DataStorage", "../Storage/DataStorage", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_StorageDataStorageJs) {
      DataStorage = _StorageDataStorageJs.DataStorage;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b53f0WioeVE5ZtDFrtu8clr", "GetLocalData", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GetLocalData", GetLocalData = (_dec = ccclass('GetLocalData'), _dec(_class = (_temp = _class2 = class GetLocalData {
        Save() {
          let data = {
            userName: GetLocalData.UserName,
            userAvatarID: GetLocalData.UserAvatarID,
            userMoney: GetLocalData.UserMoney
          };
          (_crd && DataStorage === void 0 ? (_reportPossibleCrUseOfDataStorage({
            error: Error()
          }), DataStorage) : DataStorage).SaveJson(GetLocalData.ThisUserData, data);
        }
        /**
         * userName/userAvatarID/userMoney
         */


        Get() {
          let data = (_crd && DataStorage === void 0 ? (_reportPossibleCrUseOfDataStorage({
            error: Error()
          }), DataStorage) : DataStorage).GetJson(GetLocalData.ThisUserData);

          if (data) {
            GetLocalData.UserName = data.userName;
            GetLocalData.UserAvatarID = data.userAvatarID;
            GetLocalData.UserMoney = data.userMoney;
          }

          return data;
        }

      }, _defineProperty(_class2, "ThisUserData", "userData_42394jnerguhr89nskg3498u5hjn"), _defineProperty(_class2, "UserName", "userName"), _defineProperty(_class2, "UserAvatarID", 0), _defineProperty(_class2, "UserMoney", 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vTG9jYWxEYXRhL0dldExvY2FsRGF0YS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiRGF0YVN0b3JhZ2UiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHZXRMb2NhbERhdGEiLCJTYXZlIiwiZGF0YSIsInVzZXJOYW1lIiwiVXNlck5hbWUiLCJ1c2VyQXZhdGFySUQiLCJVc2VyQXZhdGFySUQiLCJ1c2VyTW9uZXkiLCJVc2VyTW9uZXkiLCJTYXZlSnNvbiIsIlRoaXNVc2VyRGF0YSIsIkdldCIsIkdldEpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7QUFDQUMsTUFBQUEsVyx5QkFBQUEsVzs7Ozs7OztPQUNIO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCSCxVOzs4QkFHakJJLFksV0FEWkYsT0FBTyxDQUFDLGNBQUQsQyxtQ0FBUixNQUNhRSxZQURiLENBQzBCO0FBS3RCQyxRQUFBQSxJQUFJLEdBQUc7QUFDSCxjQUFJQyxJQUFTLEdBQUc7QUFDWkMsWUFBQUEsUUFBUSxFQUFFSCxZQUFZLENBQUNJLFFBRFg7QUFFWkMsWUFBQUEsWUFBWSxFQUFFTCxZQUFZLENBQUNNLFlBRmY7QUFHWkMsWUFBQUEsU0FBUyxFQUFFUCxZQUFZLENBQUNRO0FBSFosV0FBaEI7QUFLQTtBQUFBO0FBQUEsMENBQVlDLFFBQVosQ0FBcUJULFlBQVksQ0FBQ1UsWUFBbEMsRUFBZ0RSLElBQWhEO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7OztBQUNJUyxRQUFBQSxHQUFHLEdBQVE7QUFDUCxjQUFJVCxJQUFJLEdBQUc7QUFBQTtBQUFBLDBDQUFZVSxPQUFaLENBQW9CWixZQUFZLENBQUNVLFlBQWpDLENBQVg7O0FBQ0EsY0FBSVIsSUFBSixFQUFVO0FBQ05GLFlBQUFBLFlBQVksQ0FBQ0ksUUFBYixHQUF3QkYsSUFBSSxDQUFDQyxRQUE3QjtBQUNBSCxZQUFBQSxZQUFZLENBQUNNLFlBQWIsR0FBNEJKLElBQUksQ0FBQ0csWUFBakM7QUFDQUwsWUFBQUEsWUFBWSxDQUFDUSxTQUFiLEdBQXlCTixJQUFJLENBQUNLLFNBQTlCO0FBQ0g7O0FBQ0QsaUJBQU9MLElBQVA7QUFDSDs7QUF4QnFCLE8sMkNBQ2UsdUMsd0NBQ1gsVSw0Q0FDSSxDLHlDQUNILEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFNwcml0ZUZyYW1lIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgRGF0YVN0b3JhZ2UgfSBmcm9tICcuLi9TdG9yYWdlL0RhdGFTdG9yYWdlJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdHZXRMb2NhbERhdGEnKVxuZXhwb3J0IGNsYXNzIEdldExvY2FsRGF0YSB7XG4gICAgcHVibGljIHN0YXRpYyBUaGlzVXNlckRhdGE6IHN0cmluZyA9IFwidXNlckRhdGFfNDIzOTRqbmVyZ3Vocjg5bnNrZzM0OTh1NWhqblwiO1xuICAgIHN0YXRpYyBVc2VyTmFtZTogc3RyaW5nID0gXCJ1c2VyTmFtZVwiO1xuICAgIHN0YXRpYyBVc2VyQXZhdGFySUQ6IG51bWJlciA9IDA7XG4gICAgc3RhdGljIFVzZXJNb25leTogbnVtYmVyID0gMDtcbiAgICBTYXZlKCkge1xuICAgICAgICBsZXQgZGF0YTogYW55ID0ge1xuICAgICAgICAgICAgdXNlck5hbWU6IEdldExvY2FsRGF0YS5Vc2VyTmFtZSxcbiAgICAgICAgICAgIHVzZXJBdmF0YXJJRDogR2V0TG9jYWxEYXRhLlVzZXJBdmF0YXJJRCxcbiAgICAgICAgICAgIHVzZXJNb25leTogR2V0TG9jYWxEYXRhLlVzZXJNb25leVxuICAgICAgICB9O1xuICAgICAgICBEYXRhU3RvcmFnZS5TYXZlSnNvbihHZXRMb2NhbERhdGEuVGhpc1VzZXJEYXRhLCBkYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogdXNlck5hbWUvdXNlckF2YXRhcklEL3VzZXJNb25leVxuICAgICAqL1xuICAgIEdldCgpOiBhbnkge1xuICAgICAgICBsZXQgZGF0YSA9IERhdGFTdG9yYWdlLkdldEpzb24oR2V0TG9jYWxEYXRhLlRoaXNVc2VyRGF0YSk7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBHZXRMb2NhbERhdGEuVXNlck5hbWUgPSBkYXRhLnVzZXJOYW1lO1xuICAgICAgICAgICAgR2V0TG9jYWxEYXRhLlVzZXJBdmF0YXJJRCA9IGRhdGEudXNlckF2YXRhcklEXG4gICAgICAgICAgICBHZXRMb2NhbERhdGEuVXNlck1vbmV5ID0gZGF0YS51c2VyTW9uZXlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG59XG4iXX0=