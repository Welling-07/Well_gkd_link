// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cimoc.haleydu",
  "name": "Cimoc",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.haleydu.cimoc.ui.activity.MainActivity",
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "exampleUrls": "https://e.gkd.li/bc2e0453-1da8-43db-ad18-ec69d72e3c75",
          "snapshotUrls": [
            "https://i.gkd.li/i/14318224",
            "https://i.gkd.li/i/14318235",
            "https://i.gkd.li/i/14318236"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.haleydu.cimoc.ui.activity.MainActivity",
          "matches": "[id=\"android:id/content\"] >3 FrameLayout[childCount>4] >2 ImageView[visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/fe71e192-83bd-4db7-aed4-a01851b6f0bd",
          "snapshotUrls": [
            "https://i.gkd.li/i/14318224",
            "https://i.gkd.li/i/14318235",
            "https://i.gkd.li/i/14318236"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "rules": [
        {
          "name": "腾讯SDK",
          "matches": "[id=\"android:id/content\"] >3 FrameLayout[childCount>=2] > FrameLayout[childCount=1] > ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/i/14093335",
            "https://i.gkd.li/i/14318885"
          ]
        }
      ]
    }
  ]
});
