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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9Mb2NhbERhdGEvR2V0TG9jYWxEYXRhLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJEYXRhU3RvcmFnZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdldExvY2FsRGF0YSIsIlNhdmUiLCJkYXRhIiwidXNlck5hbWUiLCJVc2VyTmFtZSIsInVzZXJBdmF0YXJJRCIsIlVzZXJBdmF0YXJJRCIsInVzZXJNb25leSIsIlVzZXJNb25leSIsIlNhdmVKc29uIiwiVGhpc1VzZXJEYXRhIiwiR2V0IiwiR2V0SnNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVOztBQUNBQyxNQUFBQSxXLHlCQUFBQSxXOzs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JGLFUsQ0FBdEJFLE87QUFBU0MsTUFBQUEsUSxHQUFhSCxVLENBQWJHLFE7OzhCQUdKQyxZLFdBRFpGLE9BQU8sQ0FBQyxjQUFELEM7Ozs7O2VBTUpHLEksR0FBQSxnQkFBTztBQUNILGNBQUlDLElBQVMsR0FBRztBQUNaQyxZQUFBQSxRQUFRLEVBQUVILFlBQVksQ0FBQ0ksUUFEWDtBQUVaQyxZQUFBQSxZQUFZLEVBQUVMLFlBQVksQ0FBQ00sWUFGZjtBQUdaQyxZQUFBQSxTQUFTLEVBQUVQLFlBQVksQ0FBQ1E7QUFIWixXQUFoQjtBQUtBO0FBQUE7QUFBQSwwQ0FBWUMsUUFBWixDQUFxQlQsWUFBWSxDQUFDVSxZQUFsQyxFQUFnRFIsSUFBaEQ7QUFDSDtBQUNEO0FBQ0o7QUFDQTs7O2VBQ0lTLEcsR0FBQSxlQUFXO0FBQ1AsY0FBSVQsSUFBSSxHQUFHO0FBQUE7QUFBQSwwQ0FBWVUsT0FBWixDQUFvQlosWUFBWSxDQUFDVSxZQUFqQyxDQUFYOztBQUNBLGNBQUlSLElBQUosRUFBVTtBQUNORixZQUFBQSxZQUFZLENBQUNJLFFBQWIsR0FBd0JGLElBQUksQ0FBQ0MsUUFBN0I7QUFDQUgsWUFBQUEsWUFBWSxDQUFDTSxZQUFiLEdBQTRCSixJQUFJLENBQUNHLFlBQWpDO0FBQ0FMLFlBQUFBLFlBQVksQ0FBQ1EsU0FBYixHQUF5Qk4sSUFBSSxDQUFDSyxTQUE5QjtBQUNIOztBQUNELGlCQUFPTCxJQUFQO0FBQ0gsUzs7O29EQXZCb0MsdUMsd0NBQ1gsVSw0Q0FDSSxDLHlDQUNILEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFNwcml0ZUZyYW1lIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgRGF0YVN0b3JhZ2UgfSBmcm9tICcuLi9TdG9yYWdlL0RhdGFTdG9yYWdlJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdHZXRMb2NhbERhdGEnKVxuZXhwb3J0IGNsYXNzIEdldExvY2FsRGF0YSB7XG4gICAgcHVibGljIHN0YXRpYyBUaGlzVXNlckRhdGE6IHN0cmluZyA9IFwidXNlckRhdGFfNDIzOTRqbmVyZ3Vocjg5bnNrZzM0OTh1NWhqblwiO1xuICAgIHN0YXRpYyBVc2VyTmFtZTogc3RyaW5nID0gXCJ1c2VyTmFtZVwiO1xuICAgIHN0YXRpYyBVc2VyQXZhdGFySUQ6IG51bWJlciA9IDA7XG4gICAgc3RhdGljIFVzZXJNb25leTogbnVtYmVyID0gMDtcbiAgICBTYXZlKCkge1xuICAgICAgICBsZXQgZGF0YTogYW55ID0ge1xuICAgICAgICAgICAgdXNlck5hbWU6IEdldExvY2FsRGF0YS5Vc2VyTmFtZSxcbiAgICAgICAgICAgIHVzZXJBdmF0YXJJRDogR2V0TG9jYWxEYXRhLlVzZXJBdmF0YXJJRCxcbiAgICAgICAgICAgIHVzZXJNb25leTogR2V0TG9jYWxEYXRhLlVzZXJNb25leVxuICAgICAgICB9O1xuICAgICAgICBEYXRhU3RvcmFnZS5TYXZlSnNvbihHZXRMb2NhbERhdGEuVGhpc1VzZXJEYXRhLCBkYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogdXNlck5hbWUvdXNlckF2YXRhcklEL3VzZXJNb25leVxuICAgICAqL1xuICAgIEdldCgpOiBhbnkge1xuICAgICAgICBsZXQgZGF0YSA9IERhdGFTdG9yYWdlLkdldEpzb24oR2V0TG9jYWxEYXRhLlRoaXNVc2VyRGF0YSk7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBHZXRMb2NhbERhdGEuVXNlck5hbWUgPSBkYXRhLnVzZXJOYW1lO1xuICAgICAgICAgICAgR2V0TG9jYWxEYXRhLlVzZXJBdmF0YXJJRCA9IGRhdGEudXNlckF2YXRhcklEXG4gICAgICAgICAgICBHZXRMb2NhbERhdGEuVXNlck1vbmV5ID0gZGF0YS51c2VyTW9uZXlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG59XG4iXX0=