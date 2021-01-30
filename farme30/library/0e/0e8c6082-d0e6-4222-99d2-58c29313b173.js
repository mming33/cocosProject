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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MyMath", MyMath = (_dec = ccclass('MyMath'), _dec(_class = /*#__PURE__*/function () {
        function MyMath() {}

        MyMath.Merge = function Merge(left, right) {
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
        };

        MyMath.MergeSort = function MergeSort(items) {
          if (items.length == 1) {
            return items;
          }

          var middle = Math.floor(items.length / 2);
          var left = items.slice(0, middle);
          var right = items.slice(middle);
          return this.Merge(this.MergeSort(left), this.MergeSort(right));
        };

        return MyMath;
      }()) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vTXlNYXRoL015TWF0aC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTXlNYXRoIiwiTWVyZ2UiLCJsZWZ0IiwicmlnaHQiLCJyZXN1bHQiLCJsZW5ndGgiLCJwdXNoIiwic2hpZnQiLCJjb25jYXQiLCJNZXJnZVNvcnQiLCJpdGVtcyIsIm1pZGRsZSIsIk1hdGgiLCJmbG9vciIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCRCxVLENBQXRCQyxPO0FBQVNDLE1BQUFBLFEsR0FBYUYsVSxDQUFiRSxROzt3QkFHSkMsTSxXQURaRixPQUFPLENBQUMsUUFBRCxDOzs7ZUFFR0csSyxHQUFQLGVBQWFDLElBQWIsRUFBMEJDLEtBQTFCLEVBQStDO0FBQzNDLGNBQUlDLE1BQU0sR0FBRyxFQUFiOztBQUNBLGlCQUFPRixJQUFJLENBQUNHLE1BQUwsR0FBYyxDQUFkLElBQW1CRixLQUFLLENBQUNFLE1BQU4sR0FBZSxDQUF6QyxFQUE0QztBQUN4QyxnQkFBSUgsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVQyxLQUFLLENBQUMsQ0FBRCxDQUFuQixFQUF3QjtBQUNwQjtBQUNBQyxjQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWUosSUFBSSxDQUFDSyxLQUFMLEVBQVo7QUFDSCxhQUhELE1BR087QUFDSEgsY0FBQUEsTUFBTSxDQUFDRSxJQUFQLENBQVlILEtBQUssQ0FBQ0ksS0FBTixFQUFaO0FBQ0g7QUFDSjs7QUFDRCxpQkFBT0gsTUFBTSxDQUFDSSxNQUFQLENBQWNOLElBQWQsRUFBb0JNLE1BQXBCLENBQTJCTCxLQUEzQixDQUFQO0FBQ0gsUzs7ZUFDTU0sUyxHQUFQLG1CQUFpQkMsS0FBakIsRUFBc0M7QUFDbEMsY0FBSUEsS0FBSyxDQUFDTCxNQUFOLElBQWdCLENBQXBCLEVBQXVCO0FBQ25CLG1CQUFPSyxLQUFQO0FBQ0g7O0FBQ0QsY0FBSUMsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsS0FBSyxDQUFDTCxNQUFOLEdBQWUsQ0FBMUIsQ0FBYjtBQUNBLGNBQUlILElBQUksR0FBR1EsS0FBSyxDQUFDSSxLQUFOLENBQVksQ0FBWixFQUFlSCxNQUFmLENBQVg7QUFDQSxjQUFJUixLQUFLLEdBQUdPLEtBQUssQ0FBQ0ksS0FBTixDQUFZSCxNQUFaLENBQVo7QUFDQSxpQkFBTyxLQUFLVixLQUFMLENBQVcsS0FBS1EsU0FBTCxDQUFlUCxJQUFmLENBQVgsRUFBaUMsS0FBS08sU0FBTCxDQUFlTixLQUFmLENBQWpDLENBQVA7QUFDSCxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSAnY2MnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ015TWF0aCcpXG5leHBvcnQgY2xhc3MgTXlNYXRoIHtcbiAgICBzdGF0aWMgTWVyZ2UobGVmdDogYW55W10sIHJpZ2h0OiBhbnlbXSk6IGFueVtdIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICB3aGlsZSAobGVmdC5sZW5ndGggPiAwICYmIHJpZ2h0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChsZWZ0WzBdIDwgcmlnaHRbMF0pIHtcbiAgICAgICAgICAgICAgICAvKnNoaWZ0KCnmlrnms5XnlKjkuo7miormlbDnu4TnmoTnrKzkuIDkuKrlhYPntKDku47lhbbkuK3liKDpmaTvvIzlubbov5Tlm57nrKzkuIDkuKrlhYPntKDnmoTlgLzjgIIqL1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGxlZnQuc2hpZnQoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHJpZ2h0LnNoaWZ0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQuY29uY2F0KGxlZnQpLmNvbmNhdChyaWdodCk7XG4gICAgfVxuICAgIHN0YXRpYyBNZXJnZVNvcnQoaXRlbXM6IGFueVtdKTogYW55W10ge1xuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtcztcbiAgICAgICAgfVxuICAgICAgICBsZXQgbWlkZGxlID0gTWF0aC5mbG9vcihpdGVtcy5sZW5ndGggLyAyKTtcbiAgICAgICAgbGV0IGxlZnQgPSBpdGVtcy5zbGljZSgwLCBtaWRkbGUpO1xuICAgICAgICBsZXQgcmlnaHQgPSBpdGVtcy5zbGljZShtaWRkbGUpO1xuICAgICAgICByZXR1cm4gdGhpcy5NZXJnZSh0aGlzLk1lcmdlU29ydChsZWZ0KSwgdGhpcy5NZXJnZVNvcnQocmlnaHQpKTtcbiAgICB9XG59XG4iXX0=