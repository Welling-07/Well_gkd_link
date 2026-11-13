// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.alibaba.ailabs.tg",
  "name": "天猫精灵",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "fastQuery": true,
      "activityIds": "com.alibaba.ailabs.tg.activity.HomeActivity",
      "snapshotUrls": "https://i.gkd.li/i/13296332",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.HomeActivity",
          "matches": "[vid=\"ll_download\"] + [vid=\"va_dialog_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13296332",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.alibaba.ailabs.tg:id/ll_download\"] + [id=\"com.alibaba.ailabs.tg:id/va_dialog_cancel\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.alibaba.ailabs.tg.activity.HomeActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-会员弹窗",
      "desc": "点击关闭",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".oneservice.cluster.services.h5alert.MarketingPopupWebViewActivity",
          "matches": "[text*=\"会员\"] -n @View[clickable=true][getChild(0).name$=\"Image\"] < View <2 View <2 View < View < WebView < WebView < [vid=\"webview\"]",
          "snapshotUrls": "https://i.gkd.li/i/34570686",
          "fastQuery": true
        },
        {
          "position": {
            "left": "width * 0.9444",
            "top": "width * 1.0583"
          },
          "activityIds": "com.alibaba.ailabs.flutter.container.FlutterPaymentActivity",
          "matches": "FrameLayout > LinearLayout > [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/14443874",
          "exampleUrls": "https://m.gkd.li/57941037/4a823639-f400-4249-81ea-f920d09317f4",
          "fastQuery": true
        }
      ]
    }
  ]
});
