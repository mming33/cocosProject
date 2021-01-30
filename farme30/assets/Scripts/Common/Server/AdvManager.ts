
import { MyEvent } from '../Events/MyEvent';
import { IAdv } from './IAdv';
import { TTCommon } from './TTCommon';

export class AdvType {
    /**显示banner */
    public static readonly SHOWBANNER = 'SHOWBANNER';
    /**隐藏banner */
    public static readonly HIDEBANNER = 'HIDEBANNER';
    /**显示视频广告 */
    public static readonly SHOWVIDEOAD = "SHOWVIDEOAD";
    /**添加关闭广告事件 */
    public static readonly ONCLOSEVIDEOAD = "ONCLOSEVIDEOAD";
    /**移除关闭广告事件 */
    public static readonly OFFCLOSEVIDEOAD = "OFFCLOSEVIDEOAD";
    /**显示插屏广告 */
    public static readonly SHOWINTERSTITIALAD = "SHOWINTERSTITIALAD";




    /**TT */
    public static readonly STARTRECORDER = "STARTRECORDER";
    public static readonly STOPRECORDER = "STOPRECORDER";


}
export class Adv {
    public static readonly adv: any = (<any>window).tt;
    public static readonly advtype: string = 'tt';
}
export class AdvManager {
    static readonly bannerAdId: string = ''
    public static readonly videoAdId: string = ''
    public static readonly interstitialAdId: string = ''
    private static adv: IAdv;
    Init() {
        switch (Adv.advtype) {
            case 'tt':
                AdvManager.adv = new TTCommon();
                break;
            case 'wx':

                break;
            default:
                break;
        }
    }
    /**显示banner */
    public static ShowBannerAd(success?: Function, error?: Function) {
        let arg = {
            success: success,
            error: error,
        };
        MyEvent.I.emit(AdvType.SHOWBANNER, arg);
    }
    /**隐藏banner */
    public static HideBannerAd(success?: Function, error?: Function) {
        let arg = {
            success: success,
            error: error,
        };
        MyEvent.I.emit(AdvType.HIDEBANNER, arg);
    }
    /**显示视频广告 */
    public static ShowVideoAd(success?: Function, error?: Function) {
        let arg = {
            success: success,
            error: error,
        };
        MyEvent.I.emit(AdvType.SHOWVIDEOAD, arg);
    }
    /**注册关闭广告事件 */
    public static onCloseVideoAd(success?: Function, error?: Function) {
        let arg = {
            success: success,
            error: error,
        };
        MyEvent.I.emit(AdvType.ONCLOSEVIDEOAD, arg);
    }
    /**注销关闭广告事件 */
    public static offCloseVideoAd(success?: Function, error?: Function) {
        let arg = {
            success: success,
            error: error,
        };
        MyEvent.I.emit(AdvType.OFFCLOSEVIDEOAD, arg);
    }
    /**显示插屏广告 */
    public static ShowInterstitialAd(success?: Function, error?: Function) {
        let arg = {
            success: success,
            error: error,
        };
        MyEvent.I.emit(AdvType.SHOWINTERSTITIALAD, arg);
    }


    /**
     * 开始录屏
     * @param success 
     * @param error 
     */
    public static StartRecorder(success?: Function, error?: Function) {
        let arg = {
            success: success,
            error: error,
        };
        MyEvent.I.emit(AdvType.STARTRECORDER, arg);
    }
    /**
     * 停止录屏
     * @param success 分享成功
     * @param error 分享失败
     */
    public static StopRecorder(success?: Function, error?: Function) {
        let arg = {
            success: success,
            error: error,
        };
        MyEvent.I.emit(AdvType.STOPRECORDER, arg);
    }
}
