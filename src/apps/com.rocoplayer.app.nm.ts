// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.rocoplayer.app.nm",
  "name": "柠檬听书",
  "groups": [
    {
      "key": 0,
      "name": "通知提示-温馨提示弹窗",
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/14304132",
      "fastQuery": true,
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": "com.e4a.runtime.android.mainActivity",
          "matches": "[text=\"温馨提示\"] +2 [text=\"确定\"]",
          "snapshotUrls": "https://i.gkd.li/i/14304132",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"温馨提示\"] +2 [text=\"确定\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "matchTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "name": "腾讯广告",
          "fastQuery": true,
          "activityIds": "com.e4a.runtime.android.mainActivity",
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": "https://i.gkd.li/i/14304134",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "name": "腾讯广告 (2)",
          "activityIds": "com.e4a.runtime.android.mainActivity",
          "matches": "ImageView - LinearLayout - FrameLayout > FrameLayout[index=2][childCount=1] > ImageView[childCount=0]",
          "snapshotUrls": "https://i.gkd.li/i/14304134",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
