System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, isValid, _crd, MKEventDispatch;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      isValid = _cc.isValid;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "43f76L2udxHEZUrsx/sRRAS", "MKEventDispatch", _context.meta);

      _crd = true;

      //消息处理类
      _export("default", MKEventDispatch = /*#__PURE__*/function () {
        function MKEventDispatch() {
          _classCallCheck(this, MKEventDispatch);

          this.list = {};
        }

        _createClass(MKEventDispatch, [{
          key: "on",
          //注册消息
          value: function on(key, func, node) {
            if (this.list[key] == null) {
              this.list[key] = [];
            }

            var d = {};
            d.func = func;
            d.node = node;
            this.list[key].push(d);
          } //移除一个消息

        }, {
          key: "remove",
          value: function remove(key, node) {
            if (this.list[key]) {
              var data = this.list[key];

              for (var i = 0; i < data.length; i++) {
                if (data[i].node == node) {
                  data.splice(i, 1);
                  --i;
                }
              }
            }
          } //移除node所有消息

        }, {
          key: "removeByNode",
          value: function removeByNode(node) {
            for (var p in this.list) {
              var data = this.list[p];

              for (var i = 0; i < data.length; i++) {
                if (data[i].node == node) {
                  data.splice(i, 1);
                  --i;
                }
              }
            }
          } //移除key注册的所以消息

        }, {
          key: "removeByKey",
          value: function removeByKey(key) {
            delete this.list[key];
          } //遍历通知消息

        }, {
          key: "emit",
          value: function emit(key) {
            var arg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            // cc.log('遍历通知消息 key:::',key);
            //cc.log('遍历通知消息',this.list);
            if (this.list[key]) {
              var funcs = this.list[key].concat();

              for (var i = 0; i < funcs.length; i++) {
                if (funcs[i].node && isValid(funcs[i].node)) {
                  funcs[i].func(arg, funcs[i].node);
                }
              }
            }
          }
        }], [{
          key: "I",
          get: function get() {
            if (!this.singleton) {
              this.singleton = new MKEventDispatch();
            }

            return this.singleton;
          }
        }]);

        return MKEventDispatch;
      }()); // window.MKEventDispatch = window.MKEventDispatch || MKEventDispatch;


      MKEventDispatch.nowShowLayer = {
        NONE: 0,
        HALL: 1,
        HALLQUIT: 2,
        GAMEQUIT: 3,
        TUTORIAL: 4,
        MATCH: 5,
        GAME: 6
      };
      MKEventDispatch.eventType = MKEventDispatch.nowShowLayer.NONE;
      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvOEJhbGwvYXNzZXRzL1NjcmlwdHMvQ29tbW9uL1V0aWxzL01LRXZlbnREaXNwYXRjaC50cyJdLCJuYW1lcyI6WyJpc1ZhbGlkIiwiTUtFdmVudERpc3BhdGNoIiwibGlzdCIsImtleSIsImZ1bmMiLCJub2RlIiwiZCIsInB1c2giLCJkYXRhIiwiaSIsImxlbmd0aCIsInNwbGljZSIsInAiLCJhcmciLCJmdW5jcyIsImNvbmNhdCIsInNpbmdsZXRvbiIsIm5vd1Nob3dMYXllciIsIk5PTkUiLCJIQUxMIiwiSEFMTFFVSVQiLCJHQU1FUVVJVCIsIlRVVE9SSUFMIiwiTUFUQ0giLCJHQU1FIiwiZXZlbnRUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxPLE9BQUFBLE87Ozs7Ozs7QUFFVDt5QkFDcUJDLGU7Ozs7ZUFZYkMsSSxHQUFNLEU7Ozs7O0FBQ047NkJBQ0dDLEcsRUFBSUMsSSxFQUFLQyxJLEVBQU07QUFDZCxnQkFBRyxLQUFLSCxJQUFMLENBQVVDLEdBQVYsS0FBa0IsSUFBckIsRUFBMEI7QUFDdEIsbUJBQUtELElBQUwsQ0FBVUMsR0FBVixJQUFnQixFQUFoQjtBQUNIOztBQUNELGdCQUFJRyxDQUFLLEdBQUcsRUFBWjtBQUNBQSxZQUFBQSxDQUFDLENBQUNGLElBQUYsR0FBUUEsSUFBUjtBQUNBRSxZQUFBQSxDQUFDLENBQUNELElBQUYsR0FBU0EsSUFBVDtBQUNBLGlCQUFLSCxJQUFMLENBQVVDLEdBQVYsRUFBZUksSUFBZixDQUFvQkQsQ0FBcEI7QUFDSCxXLENBQ0Q7Ozs7aUNBQ09ILEcsRUFBSUUsSSxFQUFNO0FBQ2IsZ0JBQUcsS0FBS0gsSUFBTCxDQUFVQyxHQUFWLENBQUgsRUFBa0I7QUFDZCxrQkFBSUssSUFBSSxHQUFHLEtBQUtOLElBQUwsQ0FBVUMsR0FBVixDQUFYOztBQUNBLG1CQUFJLElBQUlNLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQ0QsSUFBSSxDQUFDRSxNQUFwQixFQUEyQkQsQ0FBQyxFQUE1QixFQUErQjtBQUMzQixvQkFBR0QsSUFBSSxDQUFDQyxDQUFELENBQUosQ0FBUUosSUFBUixJQUFnQkEsSUFBbkIsRUFDQTtBQUNRRyxrQkFBQUEsSUFBSSxDQUFDRyxNQUFMLENBQVlGLENBQVosRUFBYyxDQUFkO0FBQ0Esb0JBQUVBLENBQUY7QUFDUDtBQUNKO0FBQ0o7QUFDSixXLENBQ0Q7Ozs7dUNBQ2FKLEksRUFBTTtBQUNmLGlCQUFNLElBQUlPLENBQVYsSUFBZSxLQUFLVixJQUFwQixFQUEwQjtBQUN0QixrQkFBSU0sSUFBSSxHQUFHLEtBQUtOLElBQUwsQ0FBVVUsQ0FBVixDQUFYOztBQUNBLG1CQUFJLElBQUlILENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQ0QsSUFBSSxDQUFDRSxNQUFwQixFQUEyQkQsQ0FBQyxFQUE1QixFQUErQjtBQUMzQixvQkFBR0QsSUFBSSxDQUFDQyxDQUFELENBQUosQ0FBUUosSUFBUixJQUFnQkEsSUFBbkIsRUFDQTtBQUNJRyxrQkFBQUEsSUFBSSxDQUFDRyxNQUFMLENBQVlGLENBQVosRUFBYyxDQUFkO0FBQ0Esb0JBQUVBLENBQUY7QUFDSDtBQUNKO0FBQ0o7QUFDSixXLENBQ0Q7Ozs7c0NBQ1lOLEcsRUFBSztBQUNiLG1CQUFRLEtBQUtELElBQUwsQ0FBVUMsR0FBVixDQUFSO0FBQ0gsVyxDQUNEOzs7OytCQUNNQSxHLEVBQTZCO0FBQUEsZ0JBQWhCVSxHQUFnQix1RUFBTixJQUFNOztBQUMvQjtBQUNBO0FBQ0EsZ0JBQUcsS0FBS1gsSUFBTCxDQUFVQyxHQUFWLENBQUgsRUFBa0I7QUFDZCxrQkFBSVcsS0FBSyxHQUFHLEtBQUtaLElBQUwsQ0FBVUMsR0FBVixFQUFlWSxNQUFmLEVBQVo7O0FBQ0EsbUJBQUksSUFBSU4sQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDSyxLQUFLLENBQUNKLE1BQXBCLEVBQTJCRCxDQUFDLEVBQTVCLEVBQStCO0FBQzNCLG9CQUFJSyxLQUFLLENBQUNMLENBQUQsQ0FBTCxDQUFTSixJQUFULElBQWlCTCxPQUFPLENBQUVjLEtBQUssQ0FBQ0wsQ0FBRCxDQUFMLENBQVNKLElBQVgsQ0FBNUIsRUFBOEM7QUFDMUNTLGtCQUFBQSxLQUFLLENBQUNMLENBQUQsQ0FBTCxDQUFTTCxJQUFULENBQWNTLEdBQWQsRUFBa0JDLEtBQUssQ0FBQ0wsQ0FBRCxDQUFMLENBQVNKLElBQTNCO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7Ozs4QkFHcUM7QUFDbEMsZ0JBQUcsQ0FBQyxLQUFLVyxTQUFULEVBQW1CO0FBQ2YsbUJBQUtBLFNBQUwsR0FBaUIsSUFBSWYsZUFBSixFQUFqQjtBQUNIOztBQUNELG1CQUFPLEtBQUtlLFNBQVo7QUFDSDs7OztZQUdUOzs7QUE1RXFCZixNQUFBQSxlLENBRUNnQixZLEdBQWU7QUFDekJDLFFBQUFBLElBQUksRUFBQyxDQURvQjtBQUV6QkMsUUFBQUEsSUFBSSxFQUFDLENBRm9CO0FBR3pCQyxRQUFBQSxRQUFRLEVBQUMsQ0FIZ0I7QUFJekJDLFFBQUFBLFFBQVEsRUFBQyxDQUpnQjtBQUt6QkMsUUFBQUEsUUFBUSxFQUFDLENBTGdCO0FBTXpCQyxRQUFBQSxLQUFLLEVBQUMsQ0FObUI7QUFPekJDLFFBQUFBLElBQUksRUFBQztBQVBvQixPO0FBRmhCdkIsTUFBQUEsZSxDQVdDd0IsUyxHQUFZeEIsZUFBZSxDQUFDZ0IsWUFBaEIsQ0FBNkJDLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1ZhbGlkIH0gZnJvbSBcImNjXCI7XG5cbi8v5raI5oGv5aSE55CG57G7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNS0V2ZW50RGlzcGF0Y2gge1xuICAgICAgICAvL+eVjOmdouexu+WeiztcbiAgICAgICAgcHVibGljIHN0YXRpYyBub3dTaG93TGF5ZXIgPSB7XG4gICAgICAgICAgICBOT05FOjAsXG4gICAgICAgICAgICBIQUxMOjEsXG4gICAgICAgICAgICBIQUxMUVVJVDoyLFxuICAgICAgICAgICAgR0FNRVFVSVQ6MyxcbiAgICAgICAgICAgIFRVVE9SSUFMOjQsXG4gICAgICAgICAgICBNQVRDSDo1LFxuICAgICAgICAgICAgR0FNRTo2XG4gICAgICAgIH07XG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZXZlbnRUeXBlID0gTUtFdmVudERpc3BhdGNoLm5vd1Nob3dMYXllci5OT05FO1xuICAgICAgICBsaXN0ID17fTtcbiAgICAgICAgLy/ms6jlhozmtojmga9cbiAgICAgICAgb24oa2V5LGZ1bmMsbm9kZSkge1xuICAgICAgICAgICAgaWYodGhpcy5saXN0W2tleV0gPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0W2tleV0gPVtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGQ6YW55ID0ge307XG4gICAgICAgICAgICBkLmZ1bmMgPWZ1bmM7XG4gICAgICAgICAgICBkLm5vZGUgPSBub2RlO1xuICAgICAgICAgICAgdGhpcy5saXN0W2tleV0ucHVzaChkKTtcbiAgICAgICAgfVxuICAgICAgICAvL+enu+mZpOS4gOS4qua2iOaBr1xuICAgICAgICByZW1vdmUoa2V5LG5vZGUpIHtcbiAgICAgICAgICAgIGlmKHRoaXMubGlzdFtrZXldKXtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMubGlzdFtrZXldO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGRhdGEubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGFbaV0ubm9kZSA9PSBub2RlKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLWk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy/np7vpmaRub2Rl5omA5pyJ5raI5oGvXG4gICAgICAgIHJlbW92ZUJ5Tm9kZShub2RlKSB7XG4gICAgICAgICAgICBmb3IgKCBsZXQgcCBpbiB0aGlzLmxpc3QgKXsgXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmxpc3RbcF07XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8ZGF0YS5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YVtpXS5ub2RlID09IG5vZGUpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAtLWk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgICAgIC8v56e76Zmka2V55rOo5YaM55qE5omA5Lul5raI5oGvXG4gICAgICAgIHJlbW92ZUJ5S2V5KGtleSkge1xuICAgICAgICAgICAgZGVsZXRlICB0aGlzLmxpc3Rba2V5XTtcbiAgICAgICAgfVxuICAgICAgICAvL+mBjeWOhumAmuefpea2iOaBr1xuICAgICAgICBlbWl0IChrZXk6IHN0cmluZywgYXJnOmFueSA9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIGNjLmxvZygn6YGN5Y6G6YCa55+l5raI5oGvIGtleTo6Oicsa2V5KTtcbiAgICAgICAgICAgIC8vY2MubG9nKCfpgY3ljobpgJrnn6Xmtojmga8nLHRoaXMubGlzdCk7XG4gICAgICAgICAgICBpZih0aGlzLmxpc3Rba2V5XSl7XG4gICAgICAgICAgICAgICAgbGV0IGZ1bmNzID0gdGhpcy5saXN0W2tleV0uY29uY2F0KCk7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7aTxmdW5jcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZ1bmNzW2ldLm5vZGUgJiYgaXNWYWxpZCAoZnVuY3NbaV0ubm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmNzW2ldLmZ1bmMoYXJnLGZ1bmNzW2ldLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIHN0YXRpYyBzaW5nbGV0b246TUtFdmVudERpc3BhdGNoO1xuICAgICAgICBwdWJsaWMgc3RhdGljIGdldCBJKCk6IE1LRXZlbnREaXNwYXRjaHtcbiAgICAgICAgICAgIGlmKCF0aGlzLnNpbmdsZXRvbil7XG4gICAgICAgICAgICAgICAgdGhpcy5zaW5nbGV0b24gPSBuZXcgTUtFdmVudERpc3BhdGNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaW5nbGV0b247XG4gICAgICAgIH1cbn1cblxuLy8gd2luZG93Lk1LRXZlbnREaXNwYXRjaCA9IHdpbmRvdy5NS0V2ZW50RGlzcGF0Y2ggfHwgTUtFdmVudERpc3BhdGNoO1xuXG4iXX0=