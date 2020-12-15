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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vVXRpbHMvTUtSZXNvdXJjZXNNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIk1LUmVzb3VyY2VzTWFuYWdlciIsImluc3RhbnRpYXRlIiwibG9hZGVyIiwiUHJlZmFiIiwibG9hZFByZWZhYiIsInVybCIsImNhbGxCYWNrIiwibG9hZFJlcyIsImVyciIsInByZWIiLCJwcmViTm9kZSIsImxvYWRIZWFkSW1hZyIsIm5ldFVybCIsInVzZXJJZCIsIm51bWJlciIsImNhbGxiYWNrIiwibG9hZCIsInR5cGUiLCJyZXMiLCJjb25zb2xlIiwiZXJyb3IiLCJ1c2VySGVhZE1hcCIsIndhcm4iLCJNYXAiXSwibWFwcGluZ3MiOiI7Ozs4Q0FPcUJBLGtCOzs7Ozs7Ozs7QUFGWkMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxNLE9BQUFBLE07Ozs7Ozs7eUJBRVRILGtCLEdBQU4sTUFBTUEsa0JBQU4sQ0FBeUI7QUFFb0I7QUFFeEQ7QUFDQSxlQUFjSSxVQUFkLENBQXlCQyxHQUF6QixFQUFtQ0MsUUFBbkMsRUFBa0Q7QUFDOUNKLFVBQUFBLE1BQU0sQ0FBQ0ssT0FBUCxDQUFlRixHQUFmLEVBQW9CRixNQUFwQixFQUE0QixDQUFDSyxHQUFELEVBQU1DLElBQU4sS0FBZTtBQUN2QyxnQkFBSUQsR0FBSixFQUFTO0FBQ0w7QUFDSDs7QUFDRCxnQkFBSUUsUUFBUSxHQUFHVCxXQUFXLENBQUNRLElBQUQsQ0FBMUI7QUFDQUgsWUFBQUEsUUFBUSxJQUFJQSxRQUFRLENBQUNJLFFBQUQsQ0FBcEI7QUFDSCxXQU5EO0FBT0gsU0FibUMsQ0FlcEM7OztBQUNBLGVBQWNDLFlBQWQsQ0FBMkJDLE1BQTNCLEVBQXdDQyxNQUF4QyxFQUFxREMsTUFBckQsRUFBa0VDLFFBQWxFLEVBQWlGO0FBRTdFYixVQUFBQSxNQUFNLENBQUNjLElBQVAsQ0FBWTtBQUFFWCxZQUFBQSxHQUFHLEVBQUVPLE1BQVA7QUFBZUssWUFBQUEsSUFBSSxFQUFFO0FBQXJCLFdBQVosRUFBMEMsQ0FBQ1QsR0FBRCxFQUFXVSxHQUFYLEtBQXdCO0FBQzlELGdCQUFJVixHQUFKLEVBQVM7QUFDTCxrQkFBSU0sTUFBTSxHQUFHLENBQWIsRUFBZ0I7QUFDWixxQkFBS0gsWUFBTCxDQUFrQkMsTUFBbEIsRUFBMEJDLE1BQTFCLEVBQWtDLEVBQUVDLE1BQXBDLEVBQTRDQyxRQUE1QztBQUNBSSxnQkFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWMsa0JBQWQsRUFBa0NOLE1BQWxDLEVBQXlDTixHQUF6QztBQUVIOztBQUNEO0FBQ0g7O0FBQ0QsaUJBQUthLFdBQUwsQ0FBaUJSLE1BQWpCLElBQTJCSyxHQUEzQjtBQUNBQyxZQUFBQSxPQUFPLENBQUNHLElBQVIsQ0FBYSx1QkFBYixFQUFzQ0osR0FBdEM7QUFDQUgsWUFBQUEsUUFBUSxJQUFJQSxRQUFRLENBQUNHLEdBQUQsQ0FBcEI7QUFFSCxXQWJEO0FBY0g7O0FBaENtQyxPOztzQkFBbkJsQixrQixpQkFFVyxJQUFJdUIsR0FBSixFIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKlxuICAgICog6LWE5rqQ5Yqg6L29566h55CGXG4qL1xuXG5pbXBvcnQgeyBpbnN0YW50aWF0ZSwgbG9hZGVyLCBQcmVmYWIsIF9kZWNvcmF0b3IsIH0gZnJvbSAnY2MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNS1Jlc291cmNlc01hbmFnZXIge1xuXG4gICAgcHVibGljIHN0YXRpYyB1c2VySGVhZE1hcCA9IG5ldyBNYXAoKTsgICAgICAgICAgICAgICAgICAvL+WwhueUqOaIt+WktOWDj+WBmuS4gOS4que8k+WtmDtcblxuICAgIC8v5Yqg6L296aKE5Yi25L2TO1xuICAgIHB1YmxpYyBzdGF0aWMgbG9hZFByZWZhYih1cmw6IGFueSwgY2FsbEJhY2s6IGFueSkge1xuICAgICAgICBsb2FkZXIubG9hZFJlcyh1cmwsIFByZWZhYiwgKGVyciwgcHJlYikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBwcmViTm9kZSA9IGluc3RhbnRpYXRlKHByZWIpO1xuICAgICAgICAgICAgY2FsbEJhY2sgJiYgY2FsbEJhY2socHJlYk5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvL+WKoOi9vee9kee7nOWbvueJhyDlpLTlg4/nrYk7XG4gICAgcHVibGljIHN0YXRpYyBsb2FkSGVhZEltYWcobmV0VXJsOiBhbnksIHVzZXJJZDogYW55LCBudW1iZXI6IGFueSwgY2FsbGJhY2s6IGFueSkge1xuXG4gICAgICAgIGxvYWRlci5sb2FkKHsgdXJsOiBuZXRVcmwsIHR5cGU6ICdwbmcnIH0sIChlcnI6IGFueSwgcmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAobnVtYmVyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRIZWFkSW1hZyhuZXRVcmwsIHVzZXJJZCwgLS1udW1iZXIsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImxvYWRIZWFkSW1hZ2VFcnJcIiwgbnVtYmVyLGVycik7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51c2VySGVhZE1hcFt1c2VySWRdID0gcmVzO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwibG9hZEhlYWRJbWFnZVN1Y2NlcnNzXCIsIHJlcyk7XG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXMpO1xuXG4gICAgICAgIH0pO1xuICAgIH1cblxufSJdfQ==