System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, instantiate, loader, Prefab, _crd, MKResourcesManager;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
      loader = _cc.loader;
      Prefab = _cc.Prefab;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "175e1T3eMZPYLBI67iMJCGX", "MKResourcesManager", _context.meta);

      _crd = true;

      _export("default", MKResourcesManager = /*#__PURE__*/function () {
        function MKResourcesManager() {
          _classCallCheck(this, MKResourcesManager);
        }

        _createClass(MKResourcesManager, null, [{
          key: "loadPrefab",
          //将用户头像做一个缓存;
          //加载预制体;
          value: function loadPrefab(url, callBack) {
            loader.loadRes(url, Prefab, function (err, preb) {
              if (err) {
                return;
              }

              var prebNode = instantiate(preb);
              callBack && callBack(prebNode);
            });
          } //加载网络图片 头像等;

        }, {
          key: "loadHeadImag",
          value: function loadHeadImag(netUrl, userId, number, callback) {
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
          }
        }]);

        return MKResourcesManager;
      }());

      MKResourcesManager.userHeadMap = new Map();
      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvUHJvamVjdHMvZ2l0L0NvY29zR2FtZXMvOEJhbGxEZW1vL2Fzc2V0cy9TY3JpcHRzL1V0aWxzL01LUmVzb3VyY2VzTWFuYWdlci50cyJdLCJuYW1lcyI6WyJpbnN0YW50aWF0ZSIsImxvYWRlciIsIlByZWZhYiIsIk1LUmVzb3VyY2VzTWFuYWdlciIsInVybCIsImNhbGxCYWNrIiwibG9hZFJlcyIsImVyciIsInByZWIiLCJwcmViTm9kZSIsIm5ldFVybCIsInVzZXJJZCIsIm51bWJlciIsImNhbGxiYWNrIiwibG9hZCIsInR5cGUiLCJyZXMiLCJsb2FkSGVhZEltYWciLCJjb25zb2xlIiwiZXJyb3IiLCJ1c2VySGVhZE1hcCIsIndhcm4iLCJNYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBS1NBLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsTSxPQUFBQSxNOzs7Ozs7O3lCQUVUQyxrQjs7Ozs7OztBQUV1QztBQUV4RDtxQ0FDeUJDLEcsRUFBS0MsUSxFQUFVO0FBQ3BDSixZQUFBQSxNQUFNLENBQUNLLE9BQVAsQ0FBZUYsR0FBZixFQUFvQkYsTUFBcEIsRUFBNEIsVUFBQ0ssR0FBRCxFQUFNQyxJQUFOLEVBQWU7QUFDdkMsa0JBQUlELEdBQUosRUFBUztBQUNMO0FBQ0g7O0FBQ0Qsa0JBQUlFLFFBQVEsR0FBR1QsV0FBVyxDQUFDUSxJQUFELENBQTFCO0FBQ0FILGNBQUFBLFFBQVEsSUFBSUEsUUFBUSxDQUFDSSxRQUFELENBQXBCO0FBQ0gsYUFORDtBQU9ILFcsQ0FFRDs7Ozt1Q0FDMkJDLE0sRUFBUUMsTSxFQUFRQyxNLEVBQVFDLFEsRUFBVTtBQUFBOztBQUV6RFosWUFBQUEsTUFBTSxDQUFDYSxJQUFQLENBQVk7QUFBRVYsY0FBQUEsR0FBRyxFQUFFTSxNQUFQO0FBQWVLLGNBQUFBLElBQUksRUFBRTtBQUFyQixhQUFaLEVBQTBDLFVBQUNSLEdBQUQsRUFBTVMsR0FBTixFQUFjO0FBQ3BELGtCQUFJVCxHQUFKLEVBQVM7QUFDTCxvQkFBSUssTUFBTSxHQUFHLENBQWIsRUFBZ0I7QUFDWixrQkFBQSxLQUFJLENBQUNLLFlBQUwsQ0FBa0JQLE1BQWxCLEVBQTBCQyxNQUExQixFQUFrQyxFQUFFQyxNQUFwQyxFQUE0Q0MsUUFBNUM7O0FBQ0FLLGtCQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyxrQkFBZCxFQUFrQ1AsTUFBbEMsRUFBeUNMLEdBQXpDO0FBRUg7O0FBQ0Q7QUFDSDs7QUFDRCxjQUFBLEtBQUksQ0FBQ2EsV0FBTCxDQUFpQlQsTUFBakIsSUFBMkJLLEdBQTNCO0FBQ0FFLGNBQUFBLE9BQU8sQ0FBQ0csSUFBUixDQUFhLHVCQUFiLEVBQXNDTCxHQUF0QztBQUNBSCxjQUFBQSxRQUFRLElBQUlBLFFBQVEsQ0FBQ0csR0FBRCxDQUFwQjtBQUVILGFBYkQ7QUFjSDs7Ozs7O0FBaENnQmIsTUFBQUEsa0IsQ0FFSGlCLFcsR0FBYyxJQUFJRSxHQUFKLEUiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qXG4gICAgKiDotYTmupDliqDovb3nrqHnkIZcbiovXG5cbmltcG9ydCB7IGluc3RhbnRpYXRlLCBsb2FkZXIsIFByZWZhYiwgX2RlY29yYXRvciwgfSBmcm9tICdjYyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1LUmVzb3VyY2VzTWFuYWdlciB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHVzZXJIZWFkTWFwID0gbmV3IE1hcCgpOyAgICAgICAgICAgICAgICAgIC8v5bCG55So5oi35aS05YOP5YGa5LiA5Liq57yT5a2YO1xuXG4gICAgLy/liqDovb3pooTliLbkvZM7XG4gICAgcHVibGljIHN0YXRpYyBsb2FkUHJlZmFiKHVybCwgY2FsbEJhY2spIHtcbiAgICAgICAgbG9hZGVyLmxvYWRSZXModXJsLCBQcmVmYWIsIChlcnIsIHByZWIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcHJlYk5vZGUgPSBpbnN0YW50aWF0ZShwcmViKTtcbiAgICAgICAgICAgIGNhbGxCYWNrICYmIGNhbGxCYWNrKHByZWJOb2RlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy/liqDovb3nvZHnu5zlm77niYcg5aS05YOP562JO1xuICAgIHB1YmxpYyBzdGF0aWMgbG9hZEhlYWRJbWFnKG5ldFVybCwgdXNlcklkLCBudW1iZXIsIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgbG9hZGVyLmxvYWQoeyB1cmw6IG5ldFVybCwgdHlwZTogJ3BuZycgfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKG51bWJlciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkSGVhZEltYWcobmV0VXJsLCB1c2VySWQsIC0tbnVtYmVyLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJsb2FkSGVhZEltYWdlRXJyXCIsIG51bWJlcixlcnIpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXNlckhlYWRNYXBbdXNlcklkXSA9IHJlcztcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcImxvYWRIZWFkSW1hZ2VTdWNjZXJzc1wiLCByZXMpO1xuICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2socmVzKTtcblxuICAgICAgICB9KTtcbiAgICB9XG5cbn0iXX0=