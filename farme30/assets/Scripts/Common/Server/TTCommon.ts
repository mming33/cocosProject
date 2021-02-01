import { _decorator, Component, Node, resources } from 'cc';
import { MyEvent } from '../Events/MyEvent';
import { Adv, AdvManager, AdvType } from './AdvManager';
import { IAdv } from './IAdv';
const { ccclass, property } = _decorator;
@ccclass('TTCommon')
export class TTCommon implements IAdv {
    private videoAd: any = null;
    private bannerAd: any = null;
    private interstitialAd: any = null;
    private gameRecorderManager: any = null;

    constructor() {
        this.Init();
        this.InitAddEvent();
        this.InitTTCommon()
    }


    EventType: string = 'TTAdvEventType'
    closevideoListener: Function = () => { };
    /**初始化 创建各种广告 */
    Init(): void {
        this.videoAd = this.CreateRewardedVideoAd();
        this.bannerAd = this.CreateBannerAd();
        this.interstitialAd = this.CreateInterstitialAd();
    }
    /**初始化注册事件 */
    InitAddEvent() {
        MyEvent.I.on(AdvType.SHOWBANNER, this.ShowBannerAd, this.EventType);
        MyEvent.I.on(AdvType.HIDEBANNER, this.HideBannerAd, this.EventType);
        MyEvent.I.on(AdvType.SHOWVIDEOAD, this.ShowVideoAd, this.EventType);
        MyEvent.I.on(AdvType.ONCLOSEVIDEOAD, this.onCloseVideoAd, this.EventType);
        MyEvent.I.on(AdvType.OFFCLOSEVIDEOAD, this.offCloseVideoAd, this.EventType);
        MyEvent.I.on(AdvType.SHOWINTERSTITIALAD, this.ShowInterstitialAd, this.EventType);
        MyEvent.I.on(AdvType.VIBRATELONG, this.VibrateLong, this.EventType);
        MyEvent.I.on(AdvType.VIBRATESHORT, this.VibrateShort, this.EventType);
        MyEvent.I.on(AdvType.STARTRECORDER, this.StartRecorder, this.EventType);
        MyEvent.I.on(AdvType.STOPRECORDER, this.StopRecorder, this.EventType);

    }
    InitTTCommon() {
        this.CreateGameRecorderManager();
    }
    CreateBannerAd() {
        Adv.adv.createBannerAd({
            adUnitId: AdvManager.bannerAdId,
            adIntervals: 60,
            style: {
                left: 0,
                top: 0,
                width: 300,
            }
        })
    }
    CreateRewardedVideoAd() {
        return Adv.adv.createRewardedVideoAd({
            adUnitId: AdvManager.videoAdId
        })
    }
    CreateInterstitialAd() {
        return Adv.adv.createInterstitialAd({
            adUnitId: AdvManager.interstitialAdId
        })
    }
    CreateGameRecorderManager() {
        this.gameRecorderManager = Adv.adv.getGameRecorderManager();
    }
    /**开始录屏 */
    StartRecorder(arg?: any) {
        if (Adv.advtype != 'tt') {
            return;
        }
        this.gameRecorderManager.onStart((res: any) => {
            // do something;
            arg && arg.success && arg.success();
        });
        this.gameRecorderManager.start({
            duration: 60
        });
    }
    /**停止录屏 */
    StopRecorder(arg?: any) {
        if (Adv.advtype != 'tt') {
            return;
        }
        let options = Adv.adv.shareAppMessage({
            channel: "video",
            success: arg && arg.success,
            fail: arg && arg.error
        });
        this.gameRecorderManager.onStop((res: any) => {
            console.log(res.videoPath);
            // do somethine;
            Adv.adv.navigateToVideoView(options);
        });

        this.gameRecorderManager.stop();
    }



    Login() {
        Adv.adv.checkSession({
            success() {
                console.log(`session 未过期`);
            },
            fail() {
                console.log(`session 已过期，需要重新登录`);
                Adv.adv.login({
                    force: true,
                    success(res: any) {
                        console.log(`login 调用成功${res.code} ${res.anonymousCode}`);
                    },
                    fail(res: any) {
                        console.log(`login 调用失败`);
                    },
                });
            },
        });
    }
    GetUserInfo() {
        Adv.adv.getUserInfo({
            withCredentials: true,
            success(res: any) {
                console.log(`getUserInfo 调用成功 ${res.userInfo}`);
            },
            fail(res: any) {
                console.log(`getUserInfo 调用失败`);
            },
        });
    }
    ShowBannerAd(arg?: any) {
        this.bannerAd.onLoad(() => {
            this.bannerAd
                .show()
                .then(() => {
                    arg && arg.success && arg.success();
                    console.log("广告显示成功");
                })
                .catch((err: any) => {
                    arg && arg.error && arg.error()
                    console.log("广告组件出现问题", err);
                });
        });
    }
    HideBannerAd(arg?: any) {
        arg && arg.success && arg.success();
        this.bannerAd.hide()
            .catch((err: any) => {
                console.error(err);
                arg && arg.error && arg.error();
            });
        console.log("广告隐藏");
    }
    ShowVideoAd(arg?: any) {
        this.videoAd.show().then(() => {
            console.log("视频广告展示");
            arg && arg.success && arg.success();
        }).catch((err: any) => {
            console.error(err);
            arg && arg.error && arg.error();
        });
    }
    onCloseVideoAd(arg?: any): Function {
        this.closevideoListener = (res: any) => {
            if (res.isEnded) {
                arg && arg.success && arg.success();
            } else {
                arg && arg.error && arg.error();
            }
        }
        this.videoAd.onClose(this.closevideoListener)
            .catch((err: any) => {
                console.error(err);
            });;
        return this.closevideoListener;
    }
    offCloseVideoAd(arg?: any) {
        this.videoAd.offClose(this.closevideoListener)
            .catch((err: any) => {
                console.error(err);
                arg && arg.error && arg.error();
            });
    }
    ShowInterstitialAd(arg?: any): void {
        this.interstitialAd
            .load()
            .then(() => {
                this.interstitialAd.show().then(() => {
                    console.log("插屏广告展示成功");
                    arg && arg.success && arg.success();
                });
            })
            .catch((err: any) => {
                console.error(err);
                arg && arg.error && arg.error();
            });
    }
    VibrateLong(arg?: any) {
        let options = {
            success: arg && arg.success, //&& arg.success(),
            fail: arg && arg.error, //&& arg.error(),
            complete: arg && arg.complete,// && arg.complete(),
        }
        Adv.adv.vibrateLong(options)
    }
    VibrateShort(arg?: any) {
        let options = {
            success: arg && arg.success, //&& arg.success(),
            fail: arg && arg.error, //&& arg.error(),
            complete: arg && arg.complete,// && arg.complete(),
        }
        Adv.adv.vibrateShort(options)
    }

}
