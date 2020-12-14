System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, instantiate, loader, Prefab, _crd, MKResourcesManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
      loader = _cc.loader;
      Prefab = _cc.Prefab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "af51cvJ/EVM664POb/B9J78", "MKResourcesManager", _context.meta);

      _export("default", MKResourcesManager = /*#__PURE__*/function () {
        function MKResourcesManager() {}

        //将用户头像做一个缓存;
        //加载预制体;
        MKResourcesManager.loadPrefab = function loadPrefab(url, callBack) {
          loader.loadRes(url, Prefab, function (err, preb) {
            if (err) {
              return;
            }

            var prebNode = instantiate(preb);
            callBack && callBack(prebNode);
          });
        } //加载网络图片 头像等;
        ;

        MKResourcesManager.loadHeadImag = function loadHeadImag(netUrl, userId, number, callback) {
          var _this = this;

          loader.load({
            url: netUrl,
            type: 'png'
          }, function (err, res) {
            if (err) {
              if (number > 0) {
                _this.loadHeadImag(netUrl, userId, --number, callback);

                console.error("loadHeadImageErr", number, err);
              }

              return;
            }

            _this.userHeadMap[userId] = res;
            console.warn("loadHeadImageSuccerss", res);
            callback && callback(res);
          });
        };

        return MKResourcesManager;
      }());

      _defineProperty(MKResourcesManager, "userHeadMap", new Map());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9VdGlscy9NS1Jlc291cmNlc01hbmFnZXIudHMiXSwibmFtZXMiOlsiaW5zdGFudGlhdGUiLCJsb2FkZXIiLCJQcmVmYWIiLCJNS1Jlc291cmNlc01hbmFnZXIiLCJsb2FkUHJlZmFiIiwidXJsIiwiY2FsbEJhY2siLCJsb2FkUmVzIiwiZXJyIiwicHJlYiIsInByZWJOb2RlIiwibG9hZEhlYWRJbWFnIiwibmV0VXJsIiwidXNlcklkIiwibnVtYmVyIiwiY2FsbGJhY2siLCJsb2FkIiwidHlwZSIsInJlcyIsImNvbnNvbGUiLCJlcnJvciIsInVzZXJIZWFkTWFwIiwid2FybiIsIk1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtTQSxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLE0sT0FBQUEsTTs7Ozs7Ozt5QkFFVEMsa0I7OztBQUV1QztBQUV4RDsyQkFDY0MsVSxHQUFkLG9CQUF5QkMsR0FBekIsRUFBbUNDLFFBQW5DLEVBQWtEO0FBQzlDTCxVQUFBQSxNQUFNLENBQUNNLE9BQVAsQ0FBZUYsR0FBZixFQUFvQkgsTUFBcEIsRUFBNEIsVUFBQ00sR0FBRCxFQUFNQyxJQUFOLEVBQWU7QUFDdkMsZ0JBQUlELEdBQUosRUFBUztBQUNMO0FBQ0g7O0FBQ0QsZ0JBQUlFLFFBQVEsR0FBR1YsV0FBVyxDQUFDUyxJQUFELENBQTFCO0FBQ0FILFlBQUFBLFFBQVEsSUFBSUEsUUFBUSxDQUFDSSxRQUFELENBQXBCO0FBQ0gsV0FORDtBQU9ILFMsQ0FFRDs7OzJCQUNjQyxZLEdBQWQsc0JBQTJCQyxNQUEzQixFQUF3Q0MsTUFBeEMsRUFBcURDLE1BQXJELEVBQWtFQyxRQUFsRSxFQUFpRjtBQUFBOztBQUU3RWQsVUFBQUEsTUFBTSxDQUFDZSxJQUFQLENBQVk7QUFBRVgsWUFBQUEsR0FBRyxFQUFFTyxNQUFQO0FBQWVLLFlBQUFBLElBQUksRUFBRTtBQUFyQixXQUFaLEVBQTBDLFVBQUNULEdBQUQsRUFBV1UsR0FBWCxFQUF3QjtBQUM5RCxnQkFBSVYsR0FBSixFQUFTO0FBQ0wsa0JBQUlNLE1BQU0sR0FBRyxDQUFiLEVBQWdCO0FBQ1osZ0JBQUEsS0FBSSxDQUFDSCxZQUFMLENBQWtCQyxNQUFsQixFQUEwQkMsTUFBMUIsRUFBa0MsRUFBRUMsTUFBcEMsRUFBNENDLFFBQTVDOztBQUNBSSxnQkFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWMsa0JBQWQsRUFBa0NOLE1BQWxDLEVBQXlDTixHQUF6QztBQUVIOztBQUNEO0FBQ0g7O0FBQ0QsWUFBQSxLQUFJLENBQUNhLFdBQUwsQ0FBaUJSLE1BQWpCLElBQTJCSyxHQUEzQjtBQUNBQyxZQUFBQSxPQUFPLENBQUNHLElBQVIsQ0FBYSx1QkFBYixFQUFzQ0osR0FBdEM7QUFDQUgsWUFBQUEsUUFBUSxJQUFJQSxRQUFRLENBQUNHLEdBQUQsQ0FBcEI7QUFFSCxXQWJEO0FBY0gsUzs7Ozs7c0JBaENnQmYsa0IsaUJBRVcsSUFBSW9CLEdBQUosRSIsInNvdXJjZXNDb250ZW50IjpbIlxuLypcbiAgICAqIOi1hOa6kOWKoOi9veeuoeeQhlxuKi9cblxuaW1wb3J0IHsgaW5zdGFudGlhdGUsIGxvYWRlciwgUHJlZmFiLCBfZGVjb3JhdG9yLCB9IGZyb20gJ2NjJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTUtSZXNvdXJjZXNNYW5hZ2VyIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgdXNlckhlYWRNYXAgPSBuZXcgTWFwKCk7ICAgICAgICAgICAgICAgICAgLy/lsIbnlKjmiLflpLTlg4/lgZrkuIDkuKrnvJPlrZg7XG5cbiAgICAvL+WKoOi9vemihOWItuS9kztcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRQcmVmYWIodXJsOiBhbnksIGNhbGxCYWNrOiBhbnkpIHtcbiAgICAgICAgbG9hZGVyLmxvYWRSZXModXJsLCBQcmVmYWIsIChlcnIsIHByZWIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcHJlYk5vZGUgPSBpbnN0YW50aWF0ZShwcmViKTtcbiAgICAgICAgICAgIGNhbGxCYWNrICYmIGNhbGxCYWNrKHByZWJOb2RlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy/liqDovb3nvZHnu5zlm77niYcg5aS05YOP562JO1xuICAgIHB1YmxpYyBzdGF0aWMgbG9hZEhlYWRJbWFnKG5ldFVybDogYW55LCB1c2VySWQ6IGFueSwgbnVtYmVyOiBhbnksIGNhbGxiYWNrOiBhbnkpIHtcblxuICAgICAgICBsb2FkZXIubG9hZCh7IHVybDogbmV0VXJsLCB0eXBlOiAncG5nJyB9LCAoZXJyOiBhbnksIHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKG51bWJlciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkSGVhZEltYWcobmV0VXJsLCB1c2VySWQsIC0tbnVtYmVyLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJsb2FkSGVhZEltYWdlRXJyXCIsIG51bWJlcixlcnIpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXNlckhlYWRNYXBbdXNlcklkXSA9IHJlcztcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcImxvYWRIZWFkSW1hZ2VTdWNjZXJzc1wiLCByZXMpO1xuICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2socmVzKTtcblxuICAgICAgICB9KTtcbiAgICB9XG5cbn0iXX0=