export interface IAdv {
    EventType: string;
    closevideoListener: Function;
    /**初始化 创建各种广告 */
    Init(): void;
    /**初始化注册事件 */
    InitAddEvent(): void;
    /**登陆 */
    Login(): void;
    /**获取用户信息 */
    GetUserInfo(): void;
    /**显示Banner */
    ShowBannerAd(arg?: any): void;
    /**隐藏Banner */
    HideBannerAd(arg?: any): void;
    /**显示视频广告 */
    ShowVideoAd(arg?: any): void;
    /**添加关闭视频广告的事件
     * @param arg arg.success 看完了视频 arg.err 没看完
     */
    onCloseVideoAd(arg?: any): Function;
    /**移除关闭视频广告的事件 */
    offCloseVideoAd(arg?: any): void;
    /**显示插屏广告 */
    ShowInterstitialAd(arg?: any): void;
    /**长震动 */
    VibrateLong(arg?: any): void;
    /**短震动 */
    VibrateShort(arg?: any): void;
}