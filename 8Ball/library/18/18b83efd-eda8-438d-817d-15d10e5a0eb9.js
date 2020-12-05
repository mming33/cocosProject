System.register(["cc", "code-quality:cr", "../Storage/DataStorage.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, DataStorage, _dec, _class, _class2, _temp, _crd, ccclass, property, GetLocalData;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_StorageDataStorageJs) {
      DataStorage = _StorageDataStorageJs.DataStorage;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "18b83797ahDjYF9FdEOWg65", "GetLocalData", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GetLocalData", GetLocalData = (_dec = ccclass('GetLocalData'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        function GetLocalData() {
          _classCallCheck(this, GetLocalData);
        }

        _createClass(GetLocalData, [{
          key: "Save",
          value: function Save() {
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

        }, {
          key: "Get",
          value: function Get() {
            var data = (_crd && DataStorage === void 0 ? (_reportPossibleCrUseOfDataStorage({
              error: Error()
            }), DataStorage) : DataStorage).GetJson(GetLocalData.ThisUserData);

            if (data) {
              GetLocalData.UserName = data.userName;
              GetLocalData.UserAvatarID = data.userAvatarID;
              GetLocalData.UserMoney = data.userMoney;
            }

            return data;
          }
        }]);

        return GetLocalData;
      }(), _class2.ThisUserData = "userData_42394jnerguhr89nskg3498u5hjn", _class2.UserName = "userName", _class2.UserAvatarID = 0, _class2.UserMoney = 0, _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvOEJhbGwvYXNzZXRzL1NjcmlwdHMvQ29tbW9uL0xvY2FsRGF0YS9HZXRMb2NhbERhdGEudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkRhdGFTdG9yYWdlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiR2V0TG9jYWxEYXRhIiwiZGF0YSIsInVzZXJOYW1lIiwiVXNlck5hbWUiLCJ1c2VyQXZhdGFySUQiLCJVc2VyQXZhdGFySUQiLCJ1c2VyTW9uZXkiLCJVc2VyTW9uZXkiLCJTYXZlSnNvbiIsIlRoaXNVc2VyRGF0YSIsIkdldEpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOzs7O0FBQ0FDLE1BQUFBLFcseUJBQUFBLFc7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCRixVLENBQXRCRSxPO0FBQVNDLE1BQUFBLFEsR0FBYUgsVSxDQUFiRyxROzs4QkFHSkMsWSxXQURaRixPQUFPLENBQUMsY0FBRCxDOzs7Ozs7O2lDQU1HO0FBQ0gsZ0JBQUlHLElBQVMsR0FBRztBQUNaQyxjQUFBQSxRQUFRLEVBQUVGLFlBQVksQ0FBQ0csUUFEWDtBQUVaQyxjQUFBQSxZQUFZLEVBQUVKLFlBQVksQ0FBQ0ssWUFGZjtBQUdaQyxjQUFBQSxTQUFTLEVBQUVOLFlBQVksQ0FBQ087QUFIWixhQUFoQjtBQUtBO0FBQUE7QUFBQSw0Q0FBWUMsUUFBWixDQUFxQlIsWUFBWSxDQUFDUyxZQUFsQyxFQUFnRFIsSUFBaEQ7QUFDSDtBQUNEOzs7Ozs7Z0NBR1c7QUFDUCxnQkFBSUEsSUFBSSxHQUFHO0FBQUE7QUFBQSw0Q0FBWVMsT0FBWixDQUFvQlYsWUFBWSxDQUFDUyxZQUFqQyxDQUFYOztBQUNBLGdCQUFJUixJQUFKLEVBQVU7QUFDTkQsY0FBQUEsWUFBWSxDQUFDRyxRQUFiLEdBQXdCRixJQUFJLENBQUNDLFFBQTdCO0FBQ0FGLGNBQUFBLFlBQVksQ0FBQ0ssWUFBYixHQUE0QkosSUFBSSxDQUFDRyxZQUFqQztBQUNBSixjQUFBQSxZQUFZLENBQUNPLFNBQWIsR0FBeUJOLElBQUksQ0FBQ0ssU0FBOUI7QUFDSDs7QUFDRCxtQkFBT0wsSUFBUDtBQUNIOzs7O21CQXZCYVEsWSxHQUF1Qix1QyxVQUM5Qk4sUSxHQUFtQixVLFVBQ25CRSxZLEdBQXVCLEMsVUFDdkJFLFMsR0FBb0IsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgU3ByaXRlRnJhbWUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBEYXRhU3RvcmFnZSB9IGZyb20gJy4uL1N0b3JhZ2UvRGF0YVN0b3JhZ2UnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0dldExvY2FsRGF0YScpXG5leHBvcnQgY2xhc3MgR2V0TG9jYWxEYXRhIHtcbiAgICBwdWJsaWMgc3RhdGljIFRoaXNVc2VyRGF0YTogc3RyaW5nID0gXCJ1c2VyRGF0YV80MjM5NGpuZXJndWhyODluc2tnMzQ5OHU1aGpuXCI7XG4gICAgc3RhdGljIFVzZXJOYW1lOiBzdHJpbmcgPSBcInVzZXJOYW1lXCI7XG4gICAgc3RhdGljIFVzZXJBdmF0YXJJRDogbnVtYmVyID0gMDtcbiAgICBzdGF0aWMgVXNlck1vbmV5OiBudW1iZXIgPSAwO1xuICAgIFNhdmUoKSB7XG4gICAgICAgIGxldCBkYXRhOiBhbnkgPSB7XG4gICAgICAgICAgICB1c2VyTmFtZTogR2V0TG9jYWxEYXRhLlVzZXJOYW1lLFxuICAgICAgICAgICAgdXNlckF2YXRhcklEOiBHZXRMb2NhbERhdGEuVXNlckF2YXRhcklELFxuICAgICAgICAgICAgdXNlck1vbmV5OiBHZXRMb2NhbERhdGEuVXNlck1vbmV5XG4gICAgICAgIH07XG4gICAgICAgIERhdGFTdG9yYWdlLlNhdmVKc29uKEdldExvY2FsRGF0YS5UaGlzVXNlckRhdGEsIGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB1c2VyTmFtZS91c2VyQXZhdGFySUQvdXNlck1vbmV5XG4gICAgICovXG4gICAgR2V0KCk6IGFueSB7XG4gICAgICAgIGxldCBkYXRhID0gRGF0YVN0b3JhZ2UuR2V0SnNvbihHZXRMb2NhbERhdGEuVGhpc1VzZXJEYXRhKTtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIEdldExvY2FsRGF0YS5Vc2VyTmFtZSA9IGRhdGEudXNlck5hbWU7XG4gICAgICAgICAgICBHZXRMb2NhbERhdGEuVXNlckF2YXRhcklEID0gZGF0YS51c2VyQXZhdGFySURcbiAgICAgICAgICAgIEdldExvY2FsRGF0YS5Vc2VyTW9uZXkgPSBkYXRhLnVzZXJNb25leVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbn1cbiJdfQ==