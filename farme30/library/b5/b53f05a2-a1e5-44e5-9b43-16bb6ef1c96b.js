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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GetLocalData", GetLocalData = (_dec = ccclass('GetLocalData'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        function GetLocalData() {}

        var _proto = GetLocalData.prototype;

        _proto.Save = function Save() {
          var data = {
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
        ;

        _proto.Get = function Get() {
          var data = (_crd && DataStorage === void 0 ? (_reportPossibleCrUseOfDataStorage({
            error: Error()
          }), DataStorage) : DataStorage).GetJson(GetLocalData.ThisUserData);

          if (data) {
            GetLocalData.UserName = data.userName;
            GetLocalData.UserAvatarID = data.userAvatarID;
            GetLocalData.UserMoney = data.userMoney;
          }

          var outdata = {
            userName: GetLocalData.UserName,
            userAvatarID: GetLocalData.UserAvatarID,
            userMoney: GetLocalData.UserMoney
          };
          return outdata;
        };

        return GetLocalData;
      }(), _defineProperty(_class2, "ThisUserData", "userData_42394jnerguhr89nskg3498u5hjn"), _defineProperty(_class2, "UserName", "userName"), _defineProperty(_class2, "UserAvatarID", 0), _defineProperty(_class2, "UserMoney", 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vTG9jYWxEYXRhL0dldExvY2FsRGF0YS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiRGF0YVN0b3JhZ2UiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHZXRMb2NhbERhdGEiLCJTYXZlIiwiZGF0YSIsInVzZXJOYW1lIiwiVXNlck5hbWUiLCJ1c2VyQXZhdGFySUQiLCJVc2VyQXZhdGFySUQiLCJ1c2VyTW9uZXkiLCJVc2VyTW9uZXkiLCJTYXZlSnNvbiIsIlRoaXNVc2VyRGF0YSIsIkdldCIsIkdldEpzb24iLCJvdXRkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7O0FBQ0FDLE1BQUFBLFcseUJBQUFBLFc7Ozs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQkYsVSxDQUF0QkUsTztBQUFTQyxNQUFBQSxRLEdBQWFILFUsQ0FBYkcsUTs7OEJBR0pDLFksV0FEWkYsT0FBTyxDQUFDLGNBQUQsQzs7Ozs7ZUFNSkcsSSxHQUFBLGdCQUFPO0FBQ0gsY0FBSUMsSUFBUyxHQUFHO0FBQ1pDLFlBQUFBLFFBQVEsRUFBRUgsWUFBWSxDQUFDSSxRQURYO0FBRVpDLFlBQUFBLFlBQVksRUFBRUwsWUFBWSxDQUFDTSxZQUZmO0FBR1pDLFlBQUFBLFNBQVMsRUFBRVAsWUFBWSxDQUFDUTtBQUhaLFdBQWhCO0FBS0E7QUFBQTtBQUFBLDBDQUFZQyxRQUFaLENBQXFCVCxZQUFZLENBQUNVLFlBQWxDLEVBQWdEUixJQUFoRDtBQUNIO0FBQ0Q7QUFDSjtBQUNBOzs7ZUFDSVMsRyxHQUFBLGVBQUs7QUFDRCxjQUFJVCxJQUFJLEdBQUc7QUFBQTtBQUFBLDBDQUFZVSxPQUFaLENBQW9CWixZQUFZLENBQUNVLFlBQWpDLENBQVg7O0FBQ0EsY0FBSVIsSUFBSixFQUFVO0FBQ05GLFlBQUFBLFlBQVksQ0FBQ0ksUUFBYixHQUF3QkYsSUFBSSxDQUFDQyxRQUE3QjtBQUNBSCxZQUFBQSxZQUFZLENBQUNNLFlBQWIsR0FBNEJKLElBQUksQ0FBQ0csWUFBakM7QUFDQUwsWUFBQUEsWUFBWSxDQUFDUSxTQUFiLEdBQXlCTixJQUFJLENBQUNLLFNBQTlCO0FBQ0g7O0FBQ0QsY0FBSU0sT0FBTyxHQUFHO0FBQ1ZWLFlBQUFBLFFBQVEsRUFBRUgsWUFBWSxDQUFDSSxRQURiO0FBRVZDLFlBQUFBLFlBQVksRUFBRUwsWUFBWSxDQUFDTSxZQUZqQjtBQUdWQyxZQUFBQSxTQUFTLEVBQUVQLFlBQVksQ0FBQ1E7QUFIZCxXQUFkO0FBS0EsaUJBQU9LLE9BQVA7QUFDSCxTOzs7b0RBNUJvQyx1Qyx3Q0FDWCxVLDRDQUNJLEMseUNBQ0gsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgU3ByaXRlRnJhbWUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBEYXRhU3RvcmFnZSB9IGZyb20gJy4uL1N0b3JhZ2UvRGF0YVN0b3JhZ2UnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0dldExvY2FsRGF0YScpXG5leHBvcnQgY2xhc3MgR2V0TG9jYWxEYXRhIHtcbiAgICBwdWJsaWMgc3RhdGljIFRoaXNVc2VyRGF0YTogc3RyaW5nID0gXCJ1c2VyRGF0YV80MjM5NGpuZXJndWhyODluc2tnMzQ5OHU1aGpuXCI7XG4gICAgc3RhdGljIFVzZXJOYW1lOiBzdHJpbmcgPSBcInVzZXJOYW1lXCI7XG4gICAgc3RhdGljIFVzZXJBdmF0YXJJRDogbnVtYmVyID0gMDtcbiAgICBzdGF0aWMgVXNlck1vbmV5OiBudW1iZXIgPSAwO1xuICAgIFNhdmUoKSB7XG4gICAgICAgIGxldCBkYXRhOiBhbnkgPSB7XG4gICAgICAgICAgICB1c2VyTmFtZTogR2V0TG9jYWxEYXRhLlVzZXJOYW1lLFxuICAgICAgICAgICAgdXNlckF2YXRhcklEOiBHZXRMb2NhbERhdGEuVXNlckF2YXRhcklELFxuICAgICAgICAgICAgdXNlck1vbmV5OiBHZXRMb2NhbERhdGEuVXNlck1vbmV5XG4gICAgICAgIH07XG4gICAgICAgIERhdGFTdG9yYWdlLlNhdmVKc29uKEdldExvY2FsRGF0YS5UaGlzVXNlckRhdGEsIGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB1c2VyTmFtZS91c2VyQXZhdGFySUQvdXNlck1vbmV5XG4gICAgICovXG4gICAgR2V0KCl7XG4gICAgICAgIGxldCBkYXRhID0gRGF0YVN0b3JhZ2UuR2V0SnNvbihHZXRMb2NhbERhdGEuVGhpc1VzZXJEYXRhKTtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIEdldExvY2FsRGF0YS5Vc2VyTmFtZSA9IGRhdGEudXNlck5hbWU7XG4gICAgICAgICAgICBHZXRMb2NhbERhdGEuVXNlckF2YXRhcklEID0gZGF0YS51c2VyQXZhdGFySURcbiAgICAgICAgICAgIEdldExvY2FsRGF0YS5Vc2VyTW9uZXkgPSBkYXRhLnVzZXJNb25leVxuICAgICAgICB9XG4gICAgICAgIGxldCBvdXRkYXRhID0ge1xuICAgICAgICAgICAgdXNlck5hbWU6IEdldExvY2FsRGF0YS5Vc2VyTmFtZSxcbiAgICAgICAgICAgIHVzZXJBdmF0YXJJRDogR2V0TG9jYWxEYXRhLlVzZXJBdmF0YXJJRCxcbiAgICAgICAgICAgIHVzZXJNb25leTogR2V0TG9jYWxEYXRhLlVzZXJNb25leVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRkYXRhO1xuICAgIH1cbn1cbiJdfQ==