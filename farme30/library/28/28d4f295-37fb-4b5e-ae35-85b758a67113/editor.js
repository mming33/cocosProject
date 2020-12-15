System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, MKSound, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("default", void 0);

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
      _export("default", MKSound = class MKSound {
        //音乐开关，默认打开的;
        //背景音乐ID;
        static playBGEngine(url) {// if(this.audioEngineOn){
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

        static updateMusic() {// if(this.audioEngineOn){
          //      audioEngine.resumeMusic();
          // }else{
          //      audioEngine.pauseMusic();
          // }
        }

        static playEffect(url) {// if(this.audioEngineOn){
          //      loader.loadRes(url, AudioClip,(err,clip)=>{
          //         if(err){
          //             console.log(`load ${url} err ${err}`);
          //             return;
          //         }
          //          audioEngine.playEffect(clip,false);
          //     });
          // }
        }

        static stopAllEngine() {// this.audioEngineOn = false;
          //  audioEngine.stopAll();
        } //播放已经下载好的音效;


        static playLoadEffect(clip) {// if(this.audioEngineOn){
          //      audioEngine.playEffect(clip,false);
          // }
        }

      }); // window.MKSound = window.MKSound||MKSound;


      _defineProperty(MKSound, "audioEngineOn", true);

      _defineProperty(MKSound, "bgAudioId", -1);

      _defineProperty(MKSound, "audioIsOn", false);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rlc2t0b3AvTXlQcm9qZWN0L015Q29jb3MvZmFybWUzMC9hc3NldHMvU2NyaXB0cy9Db21tb24vVXRpbHMvTUtTb3VuZC50cyJdLCJuYW1lcyI6WyJNS1NvdW5kIiwicGxheUJHRW5naW5lIiwidXJsIiwidXBkYXRlTXVzaWMiLCJwbGF5RWZmZWN0Iiwic3RvcEFsbEVuZ2luZSIsInBsYXlMb2FkRWZmZWN0IiwiY2xpcCJdLCJtYXBwaW5ncyI6Ijs7O2lCQU9xQkEsTzs7Ozs7Ozs7Ozs7Ozs7O0FBTHJCO0FBQ0E7QUFDQTtBQUNBO3lCQUVxQkEsTyxHQUFOLE1BQU1BLE9BQU4sQ0FBYztBQUNtQztBQUNBO0FBRzVELGVBQWNDLFlBQWQsQ0FBMkJDLEdBQTNCLEVBQW9DLENBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVELGVBQWNDLFdBQWQsR0FBMkIsQ0FDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVELGVBQWNDLFVBQWQsQ0FBeUJGLEdBQXpCLEVBQWtDLENBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVELGVBQWNHLGFBQWQsR0FBNkIsQ0FDekI7QUFDQTtBQUNILFNBM0N3QixDQTZDekI7OztBQUNBLGVBQWNDLGNBQWQsQ0FBNkJDLElBQTdCLEVBQXVDLENBQ25DO0FBQ0E7QUFDQTtBQUNIOztBQWxEd0IsTyxHQXFEN0I7OztzQkFyRHFCUCxPLG1CQUNxQixJOztzQkFEckJBLE8sZUFFZ0IsQ0FBQyxDOztzQkFGakJBLE8sZUFHaUIsSyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgaW5zdGFudGlhdGUsIGxvYWRlciwgUHJlZmFiLCBfZGVjb3JhdG9yLH0gZnJvbSAnY2MnO1xuLyoqXG4gKiBDb3B5UmlnaHQ6XG4gKiDpn7PmlYjnrqHnkIbnsbtcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNS1NvdW5kIHtcbiAgICBwdWJsaWMgc3RhdGljIGF1ZGlvRW5naW5lT246Ym9vbGVhbiA9IHRydWU7ICAgICAgICAgICAgICAgICAvL+mfs+S5kOW8gOWFs++8jOm7mOiupOaJk+W8gOeahDtcbiAgICBwdWJsaWMgc3RhdGljIGJnQXVkaW9JZDpudW1iZXIgPSAtMTsgICAgICAgICAgICAgICAgICAgICAgICAvL+iDjOaZr+mfs+S5kElEO1xuICAgIHB1YmxpYyBzdGF0aWMgYXVkaW9Jc09uOmJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHB1YmxpYyBzdGF0aWMgcGxheUJHRW5naW5lKHVybDogYW55KXtcbiAgICAgICAgLy8gaWYodGhpcy5hdWRpb0VuZ2luZU9uKXtcbiAgICAgICAgLy8gICAgICBsb2FkZXIubG9hZFJlcyh1cmwsIEF1ZGlvQ2xpcCwoZXJyLGNsaXApPT57XG4gICAgICAgIC8vICAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coYGxvYWQgJHt1cmx9IGVyciAke2Vycn1gKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICAvL+WPjOmHjemqjOivgTtcbiAgICAgICAgLy8gICAgICAgICBpZih0aGlzLmF1ZGlvRW5naW5lT24pe1xuICAgICAgICAvLyAgICAgICAgICAgICAgYXVkaW9FbmdpbmUucGxheU11c2ljKGNsaXAsdHJ1ZSk7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgXG4gICAgcHVibGljIHN0YXRpYyB1cGRhdGVNdXNpYygpe1xuICAgICAgICAvLyBpZih0aGlzLmF1ZGlvRW5naW5lT24pe1xuICAgICAgICAvLyAgICAgIGF1ZGlvRW5naW5lLnJlc3VtZU11c2ljKCk7XG4gICAgICAgIC8vIH1lbHNle1xuICAgICAgICAvLyAgICAgIGF1ZGlvRW5naW5lLnBhdXNlTXVzaWMoKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcGxheUVmZmVjdCh1cmw6IGFueSl7XG4gICAgICAgIC8vIGlmKHRoaXMuYXVkaW9FbmdpbmVPbil7XG4gICAgICAgIC8vICAgICAgbG9hZGVyLmxvYWRSZXModXJsLCBBdWRpb0NsaXAsKGVycixjbGlwKT0+e1xuICAgICAgICAvLyAgICAgICAgIGlmKGVycil7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBsb2FkICR7dXJsfSBlcnIgJHtlcnJ9YCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgIGF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoY2xpcCxmYWxzZSk7XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc3RvcEFsbEVuZ2luZSgpe1xuICAgICAgICAvLyB0aGlzLmF1ZGlvRW5naW5lT24gPSBmYWxzZTtcbiAgICAgICAgLy8gIGF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcbiAgICB9XG5cbiAgICAvL+aSreaUvuW3sue7j+S4i+i9veWlveeahOmfs+aViDtcbiAgICBwdWJsaWMgc3RhdGljIHBsYXlMb2FkRWZmZWN0KGNsaXA6IGFueSl7XG4gICAgICAgIC8vIGlmKHRoaXMuYXVkaW9FbmdpbmVPbil7XG4gICAgICAgIC8vICAgICAgYXVkaW9FbmdpbmUucGxheUVmZmVjdChjbGlwLGZhbHNlKTtcbiAgICAgICAgLy8gfVxuICAgIH1cbn1cblxuLy8gd2luZG93Lk1LU291bmQgPSB3aW5kb3cuTUtTb3VuZHx8TUtTb3VuZDsiXX0=