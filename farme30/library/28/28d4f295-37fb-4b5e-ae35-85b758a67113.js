System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, MKSound;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "28d4fKVN/tLXq41hbdYpnET", "MKSound", _context.meta);

      /**
       * CopyRight:
       * 音效管理类
       */
      _export("default", MKSound = /*#__PURE__*/function () {
        function MKSound() {}

        //音乐开关，默认打开的;
        //背景音乐ID;
        MKSound.playBGEngine = function playBGEngine(url) {// if(this.audioEngineOn){
          //      loader.loadRes(url, AudioClip,(err,clip)=>{
          //         if(err){
          //             console.log(`load ${url} err ${err}`);
          //             return;
          //         }
          //         //双重验证;
          //         if(this.audioEngineOn){
          //              audioEngine.playMusic(clip,true);
          //         }
          //     });
          // }
        };

        MKSound.updateMusic = function updateMusic() {// if(this.audioEngineOn){
          //      audioEngine.resumeMusic();
          // }else{
          //      audioEngine.pauseMusic();
          // }
        };

        MKSound.playEffect = function playEffect(url) {// if(this.audioEngineOn){
          //      loader.loadRes(url, AudioClip,(err,clip)=>{
          //         if(err){
          //             console.log(`load ${url} err ${err}`);
          //             return;
          //         }
          //          audioEngine.playEffect(clip,false);
          //     });
          // }
        };

        MKSound.stopAllEngine = function stopAllEngine() {// this.audioEngineOn = false;
          //  audioEngine.stopAll();
        } //播放已经下载好的音效;
        ;

        MKSound.playLoadEffect = function playLoadEffect(clip) {// if(this.audioEngineOn){
          //      audioEngine.playEffect(clip,false);
          // }
        };

        return MKSound;
      }()); // window.MKSound = window.MKSound||MKSound;


      _defineProperty(MKSound, "audioEngineOn", true);

      _defineProperty(MKSound, "bgAudioId", -1);

      _defineProperty(MKSound, "audioIsOn", false);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvRmFybWVXb3JrM18wL2Fzc2V0cy9TY3JpcHRzL0NvbW1vbi9VdGlscy9NS1NvdW5kLnRzIl0sIm5hbWVzIjpbIk1LU291bmQiLCJwbGF5QkdFbmdpbmUiLCJ1cmwiLCJ1cGRhdGVNdXNpYyIsInBsYXlFZmZlY3QiLCJzdG9wQWxsRW5naW5lIiwicGxheUxvYWRFZmZlY3QiLCJjbGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7eUJBRXFCQSxPOzs7QUFDMkM7QUFDQTtnQkFHOUNDLFksR0FBZCxzQkFBMkJDLEdBQTNCLEVBQW9DLENBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILFM7O2dCQUVhQyxXLEdBQWQsdUJBQTJCLENBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxTOztnQkFFYUMsVSxHQUFkLG9CQUF5QkYsR0FBekIsRUFBa0MsQ0FDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsUzs7Z0JBRWFHLGEsR0FBZCx5QkFBNkIsQ0FDekI7QUFDQTtBQUNILFMsQ0FFRDs7O2dCQUNjQyxjLEdBQWQsd0JBQTZCQyxJQUE3QixFQUF1QyxDQUNuQztBQUNBO0FBQ0E7QUFDSCxTOzs7WUFHTDs7O3NCQXJEcUJQLE8sbUJBQ3FCLEk7O3NCQURyQkEsTyxlQUVnQixDQUFDLEM7O3NCQUZqQkEsTyxlQUdpQixLIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBpbnN0YW50aWF0ZSwgbG9hZGVyLCBQcmVmYWIsIF9kZWNvcmF0b3IsfSBmcm9tICdjYyc7XG4vKipcbiAqIENvcHlSaWdodDpcbiAqIOmfs+aViOeuoeeQhuexu1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1LU291bmQge1xuICAgIHB1YmxpYyBzdGF0aWMgYXVkaW9FbmdpbmVPbjpib29sZWFuID0gdHJ1ZTsgICAgICAgICAgICAgICAgIC8v6Z+z5LmQ5byA5YWz77yM6buY6K6k5omT5byA55qEO1xuICAgIHB1YmxpYyBzdGF0aWMgYmdBdWRpb0lkOm51bWJlciA9IC0xOyAgICAgICAgICAgICAgICAgICAgICAgIC8v6IOM5pmv6Z+z5LmQSUQ7XG4gICAgcHVibGljIHN0YXRpYyBhdWRpb0lzT246Ym9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIHN0YXRpYyBwbGF5QkdFbmdpbmUodXJsOiBhbnkpe1xuICAgICAgICAvLyBpZih0aGlzLmF1ZGlvRW5naW5lT24pe1xuICAgICAgICAvLyAgICAgIGxvYWRlci5sb2FkUmVzKHVybCwgQXVkaW9DbGlwLChlcnIsY2xpcCk9PntcbiAgICAgICAgLy8gICAgICAgICBpZihlcnIpe1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhgbG9hZCAke3VybH0gZXJyICR7ZXJyfWApO1xuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIC8v5Y+M6YeN6aqM6K+BO1xuICAgICAgICAvLyAgICAgICAgIGlmKHRoaXMuYXVkaW9FbmdpbmVPbil7XG4gICAgICAgIC8vICAgICAgICAgICAgICBhdWRpb0VuZ2luZS5wbGF5TXVzaWMoY2xpcCx0cnVlKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgc3RhdGljIHVwZGF0ZU11c2ljKCl7XG4gICAgICAgIC8vIGlmKHRoaXMuYXVkaW9FbmdpbmVPbil7XG4gICAgICAgIC8vICAgICAgYXVkaW9FbmdpbmUucmVzdW1lTXVzaWMoKTtcbiAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgIC8vICAgICAgYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBwbGF5RWZmZWN0KHVybDogYW55KXtcbiAgICAgICAgLy8gaWYodGhpcy5hdWRpb0VuZ2luZU9uKXtcbiAgICAgICAgLy8gICAgICBsb2FkZXIubG9hZFJlcyh1cmwsIEF1ZGlvQ2xpcCwoZXJyLGNsaXApPT57XG4gICAgICAgIC8vICAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coYGxvYWQgJHt1cmx9IGVyciAke2Vycn1gKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICAgYXVkaW9FbmdpbmUucGxheUVmZmVjdChjbGlwLGZhbHNlKTtcbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzdG9wQWxsRW5naW5lKCl7XG4gICAgICAgIC8vIHRoaXMuYXVkaW9FbmdpbmVPbiA9IGZhbHNlO1xuICAgICAgICAvLyAgYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xuICAgIH1cblxuICAgIC8v5pKt5pS+5bey57uP5LiL6L295aW955qE6Z+z5pWIO1xuICAgIHB1YmxpYyBzdGF0aWMgcGxheUxvYWRFZmZlY3QoY2xpcDogYW55KXtcbiAgICAgICAgLy8gaWYodGhpcy5hdWRpb0VuZ2luZU9uKXtcbiAgICAgICAgLy8gICAgICBhdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsZmFsc2UpO1xuICAgICAgICAvLyB9XG4gICAgfVxufVxuXG4vLyB3aW5kb3cuTUtTb3VuZCA9IHdpbmRvdy5NS1NvdW5kfHxNS1NvdW5kOyJdfQ==