
import { instantiate, loader, Prefab, _decorator,} from 'cc';
/**
 * CopyRight:
 * 音效管理类
 */

export default class MKSound {
    public static audioEngineOn:boolean = true;                 //音乐开关，默认打开的;
    public static bgAudioId:number = -1;                        //背景音乐ID;
    public static audioIsOn:boolean = false;

    public static playBGEngine(url: any){
        // if(this.audioEngineOn){
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
    
    public static updateMusic(){
        // if(this.audioEngineOn){
        //      audioEngine.resumeMusic();
        // }else{
        //      audioEngine.pauseMusic();
        // }
    }

    public static playEffect(url: any){
        // if(this.audioEngineOn){
        //      loader.loadRes(url, AudioClip,(err,clip)=>{
        //         if(err){
        //             console.log(`load ${url} err ${err}`);
        //             return;
        //         }
        //          audioEngine.playEffect(clip,false);
        //     });
        // }
    }

    public static stopAllEngine(){
        // this.audioEngineOn = false;
        //  audioEngine.stopAll();
    }

    //播放已经下载好的音效;
    public static playLoadEffect(clip: any){
        // if(this.audioEngineOn){
        //      audioEngine.playEffect(clip,false);
        // }
    }
}

// window.MKSound = window.MKSound||MKSound;