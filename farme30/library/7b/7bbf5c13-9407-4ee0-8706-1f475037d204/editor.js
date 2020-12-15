System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, GlobalGameData, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7bbf5wTlAdO4IcGH0dQN9IE", "GlobalGameData", _context.meta);

      /**
       * CopyRight:
       * 全局数据类
       */
      _export("default", GlobalGameData = class GlobalGameData {
        //声音开关;
        //用户ID；
        //服务器链接情况;
        //分享链接;
        //房间id;
        //执行Promise的队列动作;
        static runPromiseArray(parray) {
          let p = Promise.resolve();

          for (let promise of parray) {
            p = p.then(promise).catch(() => {
              return p;
            });
          }
        } //设置名字长度；


        static subNickName(nameStr) {
          if (nameStr.length > 8) {
            nameStr = nameStr.substring(0, 8) + '...';
          }

          return nameStr;
        }

      });

      _defineProperty(GlobalGameData, "audioEngineOn", true);

      _defineProperty(GlobalGameData, "userId", -1);

      _defineProperty(GlobalGameData, "socketStatus", false);

      _defineProperty(GlobalGameData, "shareUrl", '');

      _defineProperty(GlobalGameData, "roomId", 0);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vVXRpbHMvR2xvYmFsR2FtZURhdGEudHMiXSwibmFtZXMiOlsiR2xvYmFsR2FtZURhdGEiLCJydW5Qcm9taXNlQXJyYXkiLCJwYXJyYXkiLCJwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJwcm9taXNlIiwidGhlbiIsImNhdGNoIiwic3ViTmlja05hbWUiLCJuYW1lU3RyIiwibGVuZ3RoIiwic3Vic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7aUJBTXFCQSxjOzs7Ozs7Ozs7Ozs7Ozs7QUFMckI7QUFDQTtBQUNBO0FBQ0E7eUJBRXFCQSxjLEdBQU4sTUFBTUEsY0FBTixDQUFxQjtBQUVxQztBQUNBO0FBQ0E7QUFDQTtBQUNDO0FBSXRFO0FBQ0EsZUFBY0MsZUFBZCxDQUE4QkMsTUFBOUIsRUFBMkM7QUFDdkMsY0FBSUMsQ0FBQyxHQUFHQyxPQUFPLENBQUNDLE9BQVIsRUFBUjs7QUFDQSxlQUFLLElBQUlDLE9BQVQsSUFBb0JKLE1BQXBCLEVBQTRCO0FBQ3hCQyxZQUFBQSxDQUFDLEdBQUdBLENBQUMsQ0FBQ0ksSUFBRixDQUFPRCxPQUFQLEVBQWdCRSxLQUFoQixDQUFzQixNQUFNO0FBQzVCLHFCQUFPTCxDQUFQO0FBQ0gsYUFGRyxDQUFKO0FBR0g7QUFDSixTQWxCK0IsQ0FvQmhDOzs7QUFDQSxlQUFjTSxXQUFkLENBQTBCQyxPQUExQixFQUEyQztBQUN2QyxjQUFJQSxPQUFPLENBQUNDLE1BQVIsR0FBaUIsQ0FBckIsRUFBd0I7QUFDcEJELFlBQUFBLE9BQU8sR0FBR0EsT0FBTyxDQUFDRSxTQUFSLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLElBQTBCLEtBQXBDO0FBQ0g7O0FBQ0QsaUJBQU9GLE9BQVA7QUFDSDs7QUExQitCLE87O3NCQUFmVixjLG1CQUVzQixJOztzQkFGdEJBLGMsWUFHYyxDQUFDLEM7O3NCQUhmQSxjLGtCQUlxQixLOztzQkFKckJBLGMsY0FLZ0IsRTs7c0JBTGhCQSxjLFlBTWMsQyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBDb3B5UmlnaHQ6XG4gKiDlhajlsYDmlbDmja7nsbtcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbG9iYWxHYW1lRGF0YSB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGF1ZGlvRW5naW5lT246IGJvb2xlYW4gPSB0cnVlOyAgICAgICAgICAgICAgICAgICAgICAgICAvL+WjsOmfs+W8gOWFsztcbiAgICBwdWJsaWMgc3RhdGljIHVzZXJJZDogbnVtYmVyID0gLTE7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+eUqOaIt0lE77ybXG4gICAgcHVibGljIHN0YXRpYyBzb2NrZXRTdGF0dXM6IGJvb2xlYW4gPSBmYWxzZTsgICAgICAgICAgICAgICAgICAgICAgICAgLy/mnI3liqHlmajpk77mjqXmg4XlhrU7XG4gICAgcHVibGljIHN0YXRpYyBzaGFyZVVybDogc3RyaW5nID0gJyc7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liIbkuqvpk77mjqU7XG4gICAgcHVibGljIHN0YXRpYyByb29tSWQ6IG51bWJlciA9IDA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5oi/6Ze0aWQ7XG5cblxuXG4gICAgLy/miafooYxQcm9taXNl55qE6Zif5YiX5Yqo5L2cO1xuICAgIHB1YmxpYyBzdGF0aWMgcnVuUHJvbWlzZUFycmF5KHBhcnJheTogYW55KSB7XG4gICAgICAgIGxldCBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIGZvciAobGV0IHByb21pc2Ugb2YgcGFycmF5KSB7XG4gICAgICAgICAgICBwID0gcC50aGVuKHByb21pc2UpLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/orr7nva7lkI3lrZfplb/luqbvvJtcbiAgICBwdWJsaWMgc3RhdGljIHN1Yk5pY2tOYW1lKG5hbWVTdHI6IHN0cmluZykge1xuICAgICAgICBpZiAobmFtZVN0ci5sZW5ndGggPiA4KSB7XG4gICAgICAgICAgICBuYW1lU3RyID0gbmFtZVN0ci5zdWJzdHJpbmcoMCwgOCkgKyAnLi4uJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmFtZVN0cjtcbiAgICB9XG5cblxufSJdfQ==