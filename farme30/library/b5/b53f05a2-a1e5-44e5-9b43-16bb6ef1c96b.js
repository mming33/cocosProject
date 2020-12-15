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

          return data;
        };

        return GetLocalData;
      }(), _defineProperty(_class2, "ThisUserData", "userData_42394jnerguhr89nskg3498u5hjn"), _defineProperty(_class2, "UserName", "userName"), _defineProperty(_class2, "UserAvatarID", 0), _defineProperty(_class2, "UserMoney", 0), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vTG9jYWxEYXRhL0dldExvY2FsRGF0YS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiRGF0YVN0b3JhZ2UiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHZXRMb2NhbERhdGEiLCJTYXZlIiwiZGF0YSIsInVzZXJOYW1lIiwiVXNlck5hbWUiLCJ1c2VyQXZhdGFySUQiLCJVc2VyQXZhdGFySUQiLCJ1c2VyTW9uZXkiLCJVc2VyTW9uZXkiLCJTYXZlSnNvbiIsIlRoaXNVc2VyRGF0YSIsIkdldCIsIkdldEpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7QUFDQUMsTUFBQUEsVyx5QkFBQUEsVzs7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCRixVLENBQXRCRSxPO0FBQVNDLE1BQUFBLFEsR0FBYUgsVSxDQUFiRyxROzs4QkFHSkMsWSxXQURaRixPQUFPLENBQUMsY0FBRCxDOzs7OztlQU1KRyxJLEdBQUEsZ0JBQU87QUFDSCxjQUFJQyxJQUFTLEdBQUc7QUFDWkMsWUFBQUEsUUFBUSxFQUFFSCxZQUFZLENBQUNJLFFBRFg7QUFFWkMsWUFBQUEsWUFBWSxFQUFFTCxZQUFZLENBQUNNLFlBRmY7QUFHWkMsWUFBQUEsU0FBUyxFQUFFUCxZQUFZLENBQUNRO0FBSFosV0FBaEI7QUFLQTtBQUFBO0FBQUEsMENBQVlDLFFBQVosQ0FBcUJULFlBQVksQ0FBQ1UsWUFBbEMsRUFBZ0RSLElBQWhEO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7OztlQUNJUyxHLEdBQUEsZUFBVztBQUNQLGNBQUlULElBQUksR0FBRztBQUFBO0FBQUEsMENBQVlVLE9BQVosQ0FBb0JaLFlBQVksQ0FBQ1UsWUFBakMsQ0FBWDs7QUFDQSxjQUFJUixJQUFKLEVBQVU7QUFDTkYsWUFBQUEsWUFBWSxDQUFDSSxRQUFiLEdBQXdCRixJQUFJLENBQUNDLFFBQTdCO0FBQ0FILFlBQUFBLFlBQVksQ0FBQ00sWUFBYixHQUE0QkosSUFBSSxDQUFDRyxZQUFqQztBQUNBTCxZQUFBQSxZQUFZLENBQUNRLFNBQWIsR0FBeUJOLElBQUksQ0FBQ0ssU0FBOUI7QUFDSDs7QUFDRCxpQkFBT0wsSUFBUDtBQUNILFM7OztvREF2Qm9DLHVDLHdDQUNYLFUsNENBQ0ksQyx5Q0FDSCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBTcHJpdGVGcmFtZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IERhdGFTdG9yYWdlIH0gZnJvbSAnLi4vU3RvcmFnZS9EYXRhU3RvcmFnZSc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnR2V0TG9jYWxEYXRhJylcbmV4cG9ydCBjbGFzcyBHZXRMb2NhbERhdGEge1xuICAgIHB1YmxpYyBzdGF0aWMgVGhpc1VzZXJEYXRhOiBzdHJpbmcgPSBcInVzZXJEYXRhXzQyMzk0am5lcmd1aHI4OW5za2czNDk4dTVoam5cIjtcbiAgICBzdGF0aWMgVXNlck5hbWU6IHN0cmluZyA9IFwidXNlck5hbWVcIjtcbiAgICBzdGF0aWMgVXNlckF2YXRhcklEOiBudW1iZXIgPSAwO1xuICAgIHN0YXRpYyBVc2VyTW9uZXk6IG51bWJlciA9IDA7XG4gICAgU2F2ZSgpIHtcbiAgICAgICAgbGV0IGRhdGE6IGFueSA9IHtcbiAgICAgICAgICAgIHVzZXJOYW1lOiBHZXRMb2NhbERhdGEuVXNlck5hbWUsXG4gICAgICAgICAgICB1c2VyQXZhdGFySUQ6IEdldExvY2FsRGF0YS5Vc2VyQXZhdGFySUQsXG4gICAgICAgICAgICB1c2VyTW9uZXk6IEdldExvY2FsRGF0YS5Vc2VyTW9uZXlcbiAgICAgICAgfTtcbiAgICAgICAgRGF0YVN0b3JhZ2UuU2F2ZUpzb24oR2V0TG9jYWxEYXRhLlRoaXNVc2VyRGF0YSwgZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHVzZXJOYW1lL3VzZXJBdmF0YXJJRC91c2VyTW9uZXlcbiAgICAgKi9cbiAgICBHZXQoKTogYW55IHtcbiAgICAgICAgbGV0IGRhdGEgPSBEYXRhU3RvcmFnZS5HZXRKc29uKEdldExvY2FsRGF0YS5UaGlzVXNlckRhdGEpO1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgR2V0TG9jYWxEYXRhLlVzZXJOYW1lID0gZGF0YS51c2VyTmFtZTtcbiAgICAgICAgICAgIEdldExvY2FsRGF0YS5Vc2VyQXZhdGFySUQgPSBkYXRhLnVzZXJBdmF0YXJJRFxuICAgICAgICAgICAgR2V0TG9jYWxEYXRhLlVzZXJNb25leSA9IGRhdGEudXNlck1vbmV5XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxufVxuIl19