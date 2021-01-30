System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _crd, ccclass, property, MyMath;

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

      _cclegacy._RF.push({}, "0e8c6CC0OZCIpnSWMKTE7Fz", "MyMath", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MyMath", MyMath = (_dec = ccclass('MyMath'), _dec(_class = class MyMath {
        static Merge(left, right) {
          var result = [];

          while (left.length > 0 && right.length > 0) {
            if (left[0] < right[0]) {
              /*shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。*/
              result.push(left.shift());
            } else {
              result.push(right.shift());
            }
          }

          return result.concat(left).concat(right);
        }

        static MergeSort(items) {
          if (items.length == 1) {
            return items;
          }

          let middle = Math.floor(items.length / 2);
          let left = items.slice(0, middle);
          let right = items.slice(middle);
          return this.Merge(this.MergeSort(left), this.MergeSort(right));
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vTXlNYXRoL015TWF0aC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTXlNYXRoIiwiTWVyZ2UiLCJsZWZ0IiwicmlnaHQiLCJyZXN1bHQiLCJsZW5ndGgiLCJwdXNoIiwic2hpZnQiLCJjb25jYXQiLCJNZXJnZVNvcnQiLCJpdGVtcyIsIm1pZGRsZSIsIk1hdGgiLCJmbG9vciIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7Ozs7OztPQUNIO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCRixVOzt3QkFHakJHLE0sV0FEWkYsT0FBTyxDQUFDLFFBQUQsQyxnQkFBUixNQUNhRSxNQURiLENBQ29CO0FBQ2hCLGVBQU9DLEtBQVAsQ0FBYUMsSUFBYixFQUEwQkMsS0FBMUIsRUFBK0M7QUFDM0MsY0FBSUMsTUFBTSxHQUFHLEVBQWI7O0FBQ0EsaUJBQU9GLElBQUksQ0FBQ0csTUFBTCxHQUFjLENBQWQsSUFBbUJGLEtBQUssQ0FBQ0UsTUFBTixHQUFlLENBQXpDLEVBQTRDO0FBQ3hDLGdCQUFJSCxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVDLEtBQUssQ0FBQyxDQUFELENBQW5CLEVBQXdCO0FBQ3BCO0FBQ0FDLGNBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZSixJQUFJLENBQUNLLEtBQUwsRUFBWjtBQUNILGFBSEQsTUFHTztBQUNISCxjQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWUgsS0FBSyxDQUFDSSxLQUFOLEVBQVo7QUFDSDtBQUNKOztBQUNELGlCQUFPSCxNQUFNLENBQUNJLE1BQVAsQ0FBY04sSUFBZCxFQUFvQk0sTUFBcEIsQ0FBMkJMLEtBQTNCLENBQVA7QUFDSDs7QUFDRCxlQUFPTSxTQUFQLENBQWlCQyxLQUFqQixFQUFzQztBQUNsQyxjQUFJQSxLQUFLLENBQUNMLE1BQU4sSUFBZ0IsQ0FBcEIsRUFBdUI7QUFDbkIsbUJBQU9LLEtBQVA7QUFDSDs7QUFDRCxjQUFJQyxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxLQUFLLENBQUNMLE1BQU4sR0FBZSxDQUExQixDQUFiO0FBQ0EsY0FBSUgsSUFBSSxHQUFHUSxLQUFLLENBQUNJLEtBQU4sQ0FBWSxDQUFaLEVBQWVILE1BQWYsQ0FBWDtBQUNBLGNBQUlSLEtBQUssR0FBR08sS0FBSyxDQUFDSSxLQUFOLENBQVlILE1BQVosQ0FBWjtBQUNBLGlCQUFPLEtBQUtWLEtBQUwsQ0FBVyxLQUFLUSxTQUFMLENBQWVQLElBQWYsQ0FBWCxFQUFpQyxLQUFLTyxTQUFMLENBQWVOLEtBQWYsQ0FBakMsQ0FBUDtBQUNIOztBQXJCZSxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSAnY2MnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ015TWF0aCcpXG5leHBvcnQgY2xhc3MgTXlNYXRoIHtcbiAgICBzdGF0aWMgTWVyZ2UobGVmdDogYW55W10sIHJpZ2h0OiBhbnlbXSk6IGFueVtdIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICB3aGlsZSAobGVmdC5sZW5ndGggPiAwICYmIHJpZ2h0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChsZWZ0WzBdIDwgcmlnaHRbMF0pIHtcbiAgICAgICAgICAgICAgICAvKnNoaWZ0KCnmlrnms5XnlKjkuo7miormlbDnu4TnmoTnrKzkuIDkuKrlhYPntKDku47lhbbkuK3liKDpmaTvvIzlubbov5Tlm57nrKzkuIDkuKrlhYPntKDnmoTlgLzjgIIqL1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGxlZnQuc2hpZnQoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHJpZ2h0LnNoaWZ0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQuY29uY2F0KGxlZnQpLmNvbmNhdChyaWdodCk7XG4gICAgfVxuICAgIHN0YXRpYyBNZXJnZVNvcnQoaXRlbXM6IGFueVtdKTogYW55W10ge1xuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtcztcbiAgICAgICAgfVxuICAgICAgICBsZXQgbWlkZGxlID0gTWF0aC5mbG9vcihpdGVtcy5sZW5ndGggLyAyKTtcbiAgICAgICAgbGV0IGxlZnQgPSBpdGVtcy5zbGljZSgwLCBtaWRkbGUpO1xuICAgICAgICBsZXQgcmlnaHQgPSBpdGVtcy5zbGljZShtaWRkbGUpO1xuICAgICAgICByZXR1cm4gdGhpcy5NZXJnZSh0aGlzLk1lcmdlU29ydChsZWZ0KSwgdGhpcy5NZXJnZVNvcnQocmlnaHQpKTtcbiAgICB9XG59XG4iXX0=