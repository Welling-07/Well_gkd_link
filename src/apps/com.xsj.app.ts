// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xsj.app",
  "name": "星影视频",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "fastQuery": true,
          "name": "腾讯广告",
          "activityIds": [
            ".MainActivity",
            "com.qq.e.ads.ADActivity"
          ],
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13625504",
            "https://i.gkd.li/i/13761165"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": "com.qq.e.ads.ADActivity",
          "matches": "@ImageView[clickable=true][childCount=0] - [text*=\"送福利啦\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13670176"
        },
        {
          "name": "腾讯广告 (2)",
          "activityIds": [
            "com.xsj.app.MainActivity",
            "com.qq.e.ads.ADActivity"
          ],
          "matches": "ImageView -2 FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13625504",
            "https://i.gkd.li/i/13761165"
          ]
        },
        {
          "activityIds": "com.qq.e.ads.ADActivity",
          "matches": "FrameLayout[childCount=3] > TextView[text!=\"\"] + @ImageView[clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13670176"
        }
      ]
    },
    {
      "key": 1,
      "name": "通知提示-公告弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13875711",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[desc=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/13875711",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[desc=\"我知道了\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-公告弹窗",
      "enable": false,
      "resetMatch": "app",
      "actionMaximum": 1,
      "matchTime": 10000,
      "activityIds": "com.xsj.app.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13875711",
      "rules": [
        {
          "matches": "[desc=\"我知道了\"]",
          "resetMatch": "app",
          "actionMaximum": 1,
          "matchTime": 10000,
          "activityIds": "com.xsj.app.MainActivity"
        }
      ]
    }
  ]
});
