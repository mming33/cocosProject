System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, MKSound;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "b0479wMbvFOl77jDDkyDLh8", "MKSound", _context.meta);

      _crd = true;

      /**
       * CopyRight:
       * 音效管理类
       */
      _export("default", MKSound = /*#__PURE__*/function () {
        function MKSound() {
          _classCallCheck(this, MKSound);
        }

        _createClass(MKSound, null, [{
          key: "playBGEngine",
          //音乐开关，默认打开的;
          //背景音乐ID;
          value: function playBGEngine(url) {// if(this.audioEngineOn){
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
          }
        }, {
          key: "updateMusic",
          value: function updateMusic() {// if(this.audioEngineOn){
            //      audioEngine.resumeMusic();
            // }else{
            //      audioEngine.pauseMusic();
            // }
          }
        }, {
          key: "playEffect",
          value: function playEffect(url) {// if(this.audioEngineOn){
            //      loader.loadRes(url, AudioClip,(err,clip)=>{
            //         if(err){
            //             console.log(`load ${url} err ${err}`);
            //             return;
            //         }
            //          audioEngine.playEffect(clip,false);
            //     });
            // }
          }
        }, {
          key: "stopAllEngine",
          value: function stopAllEngine() {} // this.audioEngineOn = false;
          //  audioEngine.stopAll();
          //播放已经下载好的音效;

        }, {
          key: "playLoadEffect",
          value: function playLoadEffect(clip) {// if(this.audioEngineOn){
            //      audioEngine.playEffect(clip,false);
            // }
          }
        }]);

        return MKSound;
      }()); // window.MKSound = window.MKSound||MKSound;


      MKSound.audioEngineOn = true;
      MKSound.bgAudioId = -1;
      MKSound.audioIsOn = false;
      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvOEJhbGwvYXNzZXRzL1NjcmlwdHMvQ29tbW9uL1V0aWxzL01LU291bmQudHMiXSwibmFtZXMiOlsiTUtTb3VuZCIsInVybCIsImNsaXAiLCJhdWRpb0VuZ2luZU9uIiwiYmdBdWRpb0lkIiwiYXVkaW9Jc09uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7O3lCQUtxQkEsTzs7Ozs7OztBQUMyQztBQUNBO3VDQUdqQ0MsRyxFQUFJLENBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOzs7d0NBRTBCLENBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7O3FDQUV3QkEsRyxFQUFJLENBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOzs7MENBRTRCLENBRzVCLEMsQ0FGRztBQUNBO0FBR0o7Ozs7eUNBQzZCQyxJLEVBQUssQ0FDOUI7QUFDQTtBQUNBO0FBQ0g7Ozs7WUFHTDs7O0FBckRxQkYsTUFBQUEsTyxDQUNIRyxhLEdBQXdCLEk7QUFEckJILE1BQUFBLE8sQ0FFSEksUyxHQUFtQixDQUFDLEM7QUFGakJKLE1BQUFBLE8sQ0FHSEssUyxHQUFvQixLIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBpbnN0YW50aWF0ZSwgbG9hZGVyLCBQcmVmYWIsIF9kZWNvcmF0b3IsfSBmcm9tICdjYyc7XG4vKipcbiAqIENvcHlSaWdodDpcbiAqIOmfs+aViOeuoeeQhuexu1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1LU291bmQge1xuICAgIHB1YmxpYyBzdGF0aWMgYXVkaW9FbmdpbmVPbjpib29sZWFuID0gdHJ1ZTsgICAgICAgICAgICAgICAgIC8v6Z+z5LmQ5byA5YWz77yM6buY6K6k5omT5byA55qEO1xuICAgIHB1YmxpYyBzdGF0aWMgYmdBdWRpb0lkOm51bWJlciA9IC0xOyAgICAgICAgICAgICAgICAgICAgICAgIC8v6IOM5pmv6Z+z5LmQSUQ7XG4gICAgcHVibGljIHN0YXRpYyBhdWRpb0lzT246Ym9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIHN0YXRpYyBwbGF5QkdFbmdpbmUodXJsKXtcbiAgICAgICAgLy8gaWYodGhpcy5hdWRpb0VuZ2luZU9uKXtcbiAgICAgICAgLy8gICAgICBsb2FkZXIubG9hZFJlcyh1cmwsIEF1ZGlvQ2xpcCwoZXJyLGNsaXApPT57XG4gICAgICAgIC8vICAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coYGxvYWQgJHt1cmx9IGVyciAke2Vycn1gKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICAvL+WPjOmHjemqjOivgTtcbiAgICAgICAgLy8gICAgICAgICBpZih0aGlzLmF1ZGlvRW5naW5lT24pe1xuICAgICAgICAvLyAgICAgICAgICAgICAgYXVkaW9FbmdpbmUucGxheU11c2ljKGNsaXAsdHJ1ZSk7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgXG4gICAgcHVibGljIHN0YXRpYyB1cGRhdGVNdXNpYygpe1xuICAgICAgICAvLyBpZih0aGlzLmF1ZGlvRW5naW5lT24pe1xuICAgICAgICAvLyAgICAgIGF1ZGlvRW5naW5lLnJlc3VtZU11c2ljKCk7XG4gICAgICAgIC8vIH1lbHNle1xuICAgICAgICAvLyAgICAgIGF1ZGlvRW5naW5lLnBhdXNlTXVzaWMoKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcGxheUVmZmVjdCh1cmwpe1xuICAgICAgICAvLyBpZih0aGlzLmF1ZGlvRW5naW5lT24pe1xuICAgICAgICAvLyAgICAgIGxvYWRlci5sb2FkUmVzKHVybCwgQXVkaW9DbGlwLChlcnIsY2xpcCk9PntcbiAgICAgICAgLy8gICAgICAgICBpZihlcnIpe1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhgbG9hZCAke3VybH0gZXJyICR7ZXJyfWApO1xuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICBhdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsZmFsc2UpO1xuICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHN0b3BBbGxFbmdpbmUoKXtcbiAgICAgICAgLy8gdGhpcy5hdWRpb0VuZ2luZU9uID0gZmFsc2U7XG4gICAgICAgIC8vICBhdWRpb0VuZ2luZS5zdG9wQWxsKCk7XG4gICAgfVxuXG4gICAgLy/mkq3mlL7lt7Lnu4/kuIvovb3lpb3nmoTpn7PmlYg7XG4gICAgcHVibGljIHN0YXRpYyBwbGF5TG9hZEVmZmVjdChjbGlwKXtcbiAgICAgICAgLy8gaWYodGhpcy5hdWRpb0VuZ2luZU9uKXtcbiAgICAgICAgLy8gICAgICBhdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsZmFsc2UpO1xuICAgICAgICAvLyB9XG4gICAgfVxufVxuXG4vLyB3aW5kb3cuTUtTb3VuZCA9IHdpbmRvdy5NS1NvdW5kfHxNS1NvdW5kOyJdfQ==