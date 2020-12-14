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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9Mb2NhbERhdGEvR2V0TG9jYWxEYXRhLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJEYXRhU3RvcmFnZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdldExvY2FsRGF0YSIsIlNhdmUiLCJkYXRhIiwidXNlck5hbWUiLCJVc2VyTmFtZSIsInVzZXJBdmF0YXJJRCIsIlVzZXJBdmF0YXJJRCIsInVzZXJNb25leSIsIlVzZXJNb25leSIsIlNhdmVKc29uIiwiVGhpc1VzZXJEYXRhIiwiR2V0IiwiR2V0SnNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOztBQUNBQyxNQUFBQSxXLHlCQUFBQSxXOzs7Ozs7O09BQ0g7QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE8sR0FBd0JILFU7OzhCQUdqQkksWSxXQURaRixPQUFPLENBQUMsY0FBRCxDLG1DQUFSLE1BQ2FFLFlBRGIsQ0FDMEI7QUFLdEJDLFFBQUFBLElBQUksR0FBRztBQUNILGNBQUlDLElBQVMsR0FBRztBQUNaQyxZQUFBQSxRQUFRLEVBQUVILFlBQVksQ0FBQ0ksUUFEWDtBQUVaQyxZQUFBQSxZQUFZLEVBQUVMLFlBQVksQ0FBQ00sWUFGZjtBQUdaQyxZQUFBQSxTQUFTLEVBQUVQLFlBQVksQ0FBQ1E7QUFIWixXQUFoQjtBQUtBO0FBQUE7QUFBQSwwQ0FBWUMsUUFBWixDQUFxQlQsWUFBWSxDQUFDVSxZQUFsQyxFQUFnRFIsSUFBaEQ7QUFDSDtBQUNEO0FBQ0o7QUFDQTs7O0FBQ0lTLFFBQUFBLEdBQUcsR0FBUTtBQUNQLGNBQUlULElBQUksR0FBRztBQUFBO0FBQUEsMENBQVlVLE9BQVosQ0FBb0JaLFlBQVksQ0FBQ1UsWUFBakMsQ0FBWDs7QUFDQSxjQUFJUixJQUFKLEVBQVU7QUFDTkYsWUFBQUEsWUFBWSxDQUFDSSxRQUFiLEdBQXdCRixJQUFJLENBQUNDLFFBQTdCO0FBQ0FILFlBQUFBLFlBQVksQ0FBQ00sWUFBYixHQUE0QkosSUFBSSxDQUFDRyxZQUFqQztBQUNBTCxZQUFBQSxZQUFZLENBQUNRLFNBQWIsR0FBeUJOLElBQUksQ0FBQ0ssU0FBOUI7QUFDSDs7QUFDRCxpQkFBT0wsSUFBUDtBQUNIOztBQXhCcUIsTywyQ0FDZSx1Qyx3Q0FDWCxVLDRDQUNJLEMseUNBQ0gsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgU3ByaXRlRnJhbWUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBEYXRhU3RvcmFnZSB9IGZyb20gJy4uL1N0b3JhZ2UvRGF0YVN0b3JhZ2UnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0dldExvY2FsRGF0YScpXG5leHBvcnQgY2xhc3MgR2V0TG9jYWxEYXRhIHtcbiAgICBwdWJsaWMgc3RhdGljIFRoaXNVc2VyRGF0YTogc3RyaW5nID0gXCJ1c2VyRGF0YV80MjM5NGpuZXJndWhyODluc2tnMzQ5OHU1aGpuXCI7XG4gICAgc3RhdGljIFVzZXJOYW1lOiBzdHJpbmcgPSBcInVzZXJOYW1lXCI7XG4gICAgc3RhdGljIFVzZXJBdmF0YXJJRDogbnVtYmVyID0gMDtcbiAgICBzdGF0aWMgVXNlck1vbmV5OiBudW1iZXIgPSAwO1xuICAgIFNhdmUoKSB7XG4gICAgICAgIGxldCBkYXRhOiBhbnkgPSB7XG4gICAgICAgICAgICB1c2VyTmFtZTogR2V0TG9jYWxEYXRhLlVzZXJOYW1lLFxuICAgICAgICAgICAgdXNlckF2YXRhcklEOiBHZXRMb2NhbERhdGEuVXNlckF2YXRhcklELFxuICAgICAgICAgICAgdXNlck1vbmV5OiBHZXRMb2NhbERhdGEuVXNlck1vbmV5XG4gICAgICAgIH07XG4gICAgICAgIERhdGFTdG9yYWdlLlNhdmVKc29uKEdldExvY2FsRGF0YS5UaGlzVXNlckRhdGEsIGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB1c2VyTmFtZS91c2VyQXZhdGFySUQvdXNlck1vbmV5XG4gICAgICovXG4gICAgR2V0KCk6IGFueSB7XG4gICAgICAgIGxldCBkYXRhID0gRGF0YVN0b3JhZ2UuR2V0SnNvbihHZXRMb2NhbERhdGEuVGhpc1VzZXJEYXRhKTtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIEdldExvY2FsRGF0YS5Vc2VyTmFtZSA9IGRhdGEudXNlck5hbWU7XG4gICAgICAgICAgICBHZXRMb2NhbERhdGEuVXNlckF2YXRhcklEID0gZGF0YS51c2VyQXZhdGFySURcbiAgICAgICAgICAgIEdldExvY2FsRGF0YS5Vc2VyTW9uZXkgPSBkYXRhLnVzZXJNb25leVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbn1cbiJdfQ==