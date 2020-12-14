System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, instantiate, loader, Prefab, MKResourcesManager, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("default", void 0);

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

      _export("default", MKResourcesManager = class MKResourcesManager {
        //将用户头像做一个缓存;
        //加载预制体;
        static loadPrefab(url, callBack) {
          loader.loadRes(url, Prefab, (err, preb) => {
            if (err) {
              return;
            }

            let prebNode = instantiate(preb);
            callBack && callBack(prebNode);
          });
        } //加载网络图片 头像等;


        static loadHeadImag(netUrl, userId, number, callback) {
          loader.load({
            url: netUrl,
            type: 'png'
          }, (err, res) => {
            if (err) {
              if (number > 0) {
                this.loadHeadImag(netUrl, userId, --number, callback);
                console.error("loadHeadImageErr", number, err);
              }

              return;
            }

            this.userHeadMap[userId] = res;
            console.warn("loadHeadImageSuccerss", res);
            callback && callback(res);
          });
        }

      });

      _defineProperty(MKResourcesManager, "userHeadMap", new Map());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9VdGlscy9NS1Jlc291cmNlc01hbmFnZXIudHMiXSwibmFtZXMiOlsiTUtSZXNvdXJjZXNNYW5hZ2VyIiwiaW5zdGFudGlhdGUiLCJsb2FkZXIiLCJQcmVmYWIiLCJsb2FkUHJlZmFiIiwidXJsIiwiY2FsbEJhY2siLCJsb2FkUmVzIiwiZXJyIiwicHJlYiIsInByZWJOb2RlIiwibG9hZEhlYWRJbWFnIiwibmV0VXJsIiwidXNlcklkIiwibnVtYmVyIiwiY2FsbGJhY2siLCJsb2FkIiwidHlwZSIsInJlcyIsImNvbnNvbGUiLCJlcnJvciIsInVzZXJIZWFkTWFwIiwid2FybiIsIk1hcCJdLCJtYXBwaW5ncyI6Ijs7OzhDQU9xQkEsa0I7Ozs7Ozs7OztBQUZaQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLE0sT0FBQUEsTTs7Ozs7Ozt5QkFFVEgsa0IsR0FBTixNQUFNQSxrQkFBTixDQUF5QjtBQUVvQjtBQUV4RDtBQUNBLGVBQWNJLFVBQWQsQ0FBeUJDLEdBQXpCLEVBQW1DQyxRQUFuQyxFQUFrRDtBQUM5Q0osVUFBQUEsTUFBTSxDQUFDSyxPQUFQLENBQWVGLEdBQWYsRUFBb0JGLE1BQXBCLEVBQTRCLENBQUNLLEdBQUQsRUFBTUMsSUFBTixLQUFlO0FBQ3ZDLGdCQUFJRCxHQUFKLEVBQVM7QUFDTDtBQUNIOztBQUNELGdCQUFJRSxRQUFRLEdBQUdULFdBQVcsQ0FBQ1EsSUFBRCxDQUExQjtBQUNBSCxZQUFBQSxRQUFRLElBQUlBLFFBQVEsQ0FBQ0ksUUFBRCxDQUFwQjtBQUNILFdBTkQ7QUFPSCxTQWJtQyxDQWVwQzs7O0FBQ0EsZUFBY0MsWUFBZCxDQUEyQkMsTUFBM0IsRUFBd0NDLE1BQXhDLEVBQXFEQyxNQUFyRCxFQUFrRUMsUUFBbEUsRUFBaUY7QUFFN0ViLFVBQUFBLE1BQU0sQ0FBQ2MsSUFBUCxDQUFZO0FBQUVYLFlBQUFBLEdBQUcsRUFBRU8sTUFBUDtBQUFlSyxZQUFBQSxJQUFJLEVBQUU7QUFBckIsV0FBWixFQUEwQyxDQUFDVCxHQUFELEVBQVdVLEdBQVgsS0FBd0I7QUFDOUQsZ0JBQUlWLEdBQUosRUFBUztBQUNMLGtCQUFJTSxNQUFNLEdBQUcsQ0FBYixFQUFnQjtBQUNaLHFCQUFLSCxZQUFMLENBQWtCQyxNQUFsQixFQUEwQkMsTUFBMUIsRUFBa0MsRUFBRUMsTUFBcEMsRUFBNENDLFFBQTVDO0FBQ0FJLGdCQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyxrQkFBZCxFQUFrQ04sTUFBbEMsRUFBeUNOLEdBQXpDO0FBRUg7O0FBQ0Q7QUFDSDs7QUFDRCxpQkFBS2EsV0FBTCxDQUFpQlIsTUFBakIsSUFBMkJLLEdBQTNCO0FBQ0FDLFlBQUFBLE9BQU8sQ0FBQ0csSUFBUixDQUFhLHVCQUFiLEVBQXNDSixHQUF0QztBQUNBSCxZQUFBQSxRQUFRLElBQUlBLFFBQVEsQ0FBQ0csR0FBRCxDQUFwQjtBQUVILFdBYkQ7QUFjSDs7QUFoQ21DLE87O3NCQUFuQmxCLGtCLGlCQUVXLElBQUl1QixHQUFKLEUiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qXG4gICAgKiDotYTmupDliqDovb3nrqHnkIZcbiovXG5cbmltcG9ydCB7IGluc3RhbnRpYXRlLCBsb2FkZXIsIFByZWZhYiwgX2RlY29yYXRvciwgfSBmcm9tICdjYyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1LUmVzb3VyY2VzTWFuYWdlciB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHVzZXJIZWFkTWFwID0gbmV3IE1hcCgpOyAgICAgICAgICAgICAgICAgIC8v5bCG55So5oi35aS05YOP5YGa5LiA5Liq57yT5a2YO1xuXG4gICAgLy/liqDovb3pooTliLbkvZM7XG4gICAgcHVibGljIHN0YXRpYyBsb2FkUHJlZmFiKHVybDogYW55LCBjYWxsQmFjazogYW55KSB7XG4gICAgICAgIGxvYWRlci5sb2FkUmVzKHVybCwgUHJlZmFiLCAoZXJyLCBwcmViKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHByZWJOb2RlID0gaW5zdGFudGlhdGUocHJlYik7XG4gICAgICAgICAgICBjYWxsQmFjayAmJiBjYWxsQmFjayhwcmViTm9kZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8v5Yqg6L29572R57uc5Zu+54mHIOWktOWDj+etiTtcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRIZWFkSW1hZyhuZXRVcmw6IGFueSwgdXNlcklkOiBhbnksIG51bWJlcjogYW55LCBjYWxsYmFjazogYW55KSB7XG5cbiAgICAgICAgbG9hZGVyLmxvYWQoeyB1cmw6IG5ldFVybCwgdHlwZTogJ3BuZycgfSwgKGVycjogYW55LCByZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChudW1iZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEhlYWRJbWFnKG5ldFVybCwgdXNlcklkLCAtLW51bWJlciwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwibG9hZEhlYWRJbWFnZUVyclwiLCBudW1iZXIsZXJyKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVzZXJIZWFkTWFwW3VzZXJJZF0gPSByZXM7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJsb2FkSGVhZEltYWdlU3VjY2Vyc3NcIiwgcmVzKTtcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHJlcyk7XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG59Il19