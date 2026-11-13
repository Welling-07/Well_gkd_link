// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.julanling.app",
  "name": "安心记加班",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "activityIds": "com.julanling.dgq.main.view.MainFragmentActivity",
      "snapshotUrls": "https://i.gkd.li/i/13523567",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".calender.cal.CalendarActivity",
          "matches": "[vid=\"llClose\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/28912438",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.julanling.lib_ad.interstitial_ads._native.page.InterstitialNativeActivity",
          "matches": "[vid=\"ivClose\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/28907567",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.julanling.dgq.main.view.MainFragmentActivity",
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": "https://i.gkd.li/i/13523567",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]",
          "activityIds": "com.julanling.dgq.main.view.MainFragmentActivity",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-广告弹窗",
      "enable": false,
      "activityIds": "com.julanling.dgq.main.view.MainFragmentActivity",
      "snapshotUrls": "https://i.gkd.li/i/13523567",
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]",
          "activityIds": "com.julanling.dgq.main.view.MainFragmentActivity"
        }
      ]
    }
  ]
});
