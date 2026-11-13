// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.custom.zktimehelp",
  "name": "ZK助手",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.MainActivity",
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "exampleUrls": "https://e.gkd.li/95f17fff-486c-4cad-83c7-804b808ff800",
          "snapshotUrls": "https://i.gkd.li/i/16670372",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.qq.e.ads.PortraitADActivity",
          "matches": "FrameLayout[childCount=5] > FrameLayout[childCount=2] > FrameLayout[childCount=2] >2 @FrameLayout[childCount=1] > ImageView[childCount=0]",
          "exampleUrls": "https://e.gkd.li/cacb889d-0328-4431-af23-d267fa4eb626",
          "snapshotUrls": "https://i.gkd.li/i/16670426",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告",
      "enable": false,
      "rules": [
        {
          "activityIds": "com.custom.zktimehelp.ui.MainActivity",
          "matches": "[id=\"android:id/content\"] >(3,4) FrameLayout[childCount>3] > FrameLayout[childCount=1] > ImageView[childCount=0][text=null]",
          "exampleUrls": "https://e.gkd.li/95f17fff-486c-4cad-83c7-804b808ff800",
          "snapshotUrls": "https://i.gkd.li/i/16670372"
        },
        {
          "activityIds": "com.qq.e.ads.PortraitADActivity",
          "matches": "FrameLayout[childCount=5] > FrameLayout[childCount=2] > FrameLayout[childCount=2] >2 @FrameLayout[childCount=1] > ImageView[childCount=0]",
          "exampleUrls": "https://e.gkd.li/cacb889d-0328-4431-af23-d267fa4eb626",
          "snapshotUrls": "https://i.gkd.li/i/16670426"
        }
      ]
    }
  ]
});
