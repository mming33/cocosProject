System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, MKMessageType, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "10ad3NApkZF0qCXbZ/j3Wpw", "MKMessageType", _context.meta);

      /*
          消息号管理
      */
      _export("default", MKMessageType = class MKMessageType {});

      _defineProperty(MKMessageType, "REQUEST_WS_STATUS", 'request_ws_status');

      _defineProperty(MKMessageType, "GETUSERINFO", 'v1/slots/user/mine/');

      _defineProperty(MKMessageType, "JOIN", 'v1/ball8/join/');

      _defineProperty(MKMessageType, "LEAVE", 'v1/ball8/leave/');

      _defineProperty(MKMessageType, "ASSETS", 'v1/ball8/mine/diamond/');

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vVXRpbHMvTUtNZXNzYWdlVHlwZS50cyJdLCJuYW1lcyI6WyJNS01lc3NhZ2VUeXBlIl0sIm1hcHBpbmdzIjoiOzs7aUJBS3FCQSxhOzs7Ozs7Ozs7Ozs7Ozs7QUFKckI7QUFDQTtBQUNBO3lCQUVxQkEsYSxHQUFOLE1BQU1BLGFBQU4sQ0FBb0IsRTs7c0JBQWRBLGEsdUJBQ2lCLG1COztzQkFEakJBLGEsaUJBRVcscUI7O3NCQUZYQSxhLFVBR0ksZ0I7O3NCQUhKQSxhLFdBSUssaUI7O3NCQUpMQSxhLFlBS00sd0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qXG4gICAg5raI5oGv5Y+3566h55CGXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNS01lc3NhZ2VUeXBlIHtcbiAgICBwdWJsaWMgc3RhdGljIFJFUVVFU1RfV1NfU1RBVFVTID0gJ3JlcXVlc3Rfd3Nfc3RhdHVzJzsgICAgICAgICAgICAgICAgICAgICAgLy/ojrflj5ZhcHDkuI7mnI3liqHlmah3ZWJzb2NrZXTnirbmgIE7XG4gICAgcHVibGljIHN0YXRpYyBHRVRVU0VSSU5GTyA9ICd2MS9zbG90cy91c2VyL21pbmUvJzsgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6I635Y+W5Liq5Lq65L+h5oGvOyBcbiAgICBwdWJsaWMgc3RhdGljIEpPSU4gPSAndjEvYmFsbDgvam9pbi8nOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WKoOWFpea4uOaIj++8m1xuICAgIHB1YmxpYyBzdGF0aWMgTEVBVkUgPSAndjEvYmFsbDgvbGVhdmUvJzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+emu+W8gOa4uOaIj++8m1xuICAgIHB1YmxpYyBzdGF0aWMgQVNTRVRTID0gJ3YxL2JhbGw4L21pbmUvZGlhbW9uZC8nOyAgICAgICAgICAgICAgLy/ojrflj5botYTkuqfvvIjph5HluIHjgIHpkrvnn7PjgIHmuLjmiI/luIHvvInvvJtcbn0iXX0=