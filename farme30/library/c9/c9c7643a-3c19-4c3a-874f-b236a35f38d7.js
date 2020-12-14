System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _crd, ccclass, property, MyListCommon;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c9c76Q6PBlMOodPsjajXzjX", "MyListCommon", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MyListCommon", MyListCommon = (_dec = ccclass('MyListCommon'), _dec(_class = /*#__PURE__*/function () {
        function MyListCommon() {}

        MyListCommon.Clone = function Clone(newArr, oldArr) {
          newArr = new Array();

          for (var i = 0; i < oldArr.length; i++) {
            var element = oldArr[i];
            newArr.push(element);
          }

          return newArr;
        };

        return MyListCommon;
      }()) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9NeU1hdGgvTXlMaXN0Q29tbW9uLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJNeUxpc3RDb21tb24iLCJDbG9uZSIsIm5ld0FyciIsIm9sZEFyciIsIkFycmF5IiwiaSIsImxlbmd0aCIsImVsZW1lbnQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCRCxVLENBQXRCQyxPO0FBQVNDLE1BQUFBLFEsR0FBYUYsVSxDQUFiRSxROzs4QkFHSkMsWSxXQURaRixPQUFPLENBQUMsY0FBRCxDOzs7cUJBR0dHLEssR0FBUCxlQUFnQkMsTUFBaEIsRUFBa0NDLE1BQWxDLEVBQStEO0FBQzNERCxVQUFBQSxNQUFNLEdBQUcsSUFBSUUsS0FBSixFQUFUOztBQUNBLGVBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsTUFBTSxDQUFDRyxNQUEzQixFQUFtQ0QsQ0FBQyxFQUFwQyxFQUF3QztBQUNwQyxnQkFBTUUsT0FBTyxHQUFHSixNQUFNLENBQUNFLENBQUQsQ0FBdEI7QUFDQUgsWUFBQUEsTUFBTSxDQUFDTSxJQUFQLENBQVlELE9BQVo7QUFDSDs7QUFDRCxpQkFBT0wsTUFBUDtBQUNILFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFZlYzMsIElWZWMzTGlrZSB9IGZyb20gJ2NjJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdNeUxpc3RDb21tb24nKVxuZXhwb3J0IGNsYXNzIE15TGlzdENvbW1vbiB7XG5cbiAgICBzdGF0aWMgQ2xvbmU8VD4obmV3QXJyOiBBcnJheTxUPiwgb2xkQXJyOiBBcnJheTxUPiwpOiBBcnJheTxUPiB7XG4gICAgICAgIG5ld0FyciA9IG5ldyBBcnJheTxUPigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9sZEFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IG9sZEFycltpXTtcbiAgICAgICAgICAgIG5ld0Fyci5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdBcnI7XG4gICAgfVxufVxuIl19