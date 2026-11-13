// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xifeng.fun",
  "name": "OmoFun",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14050836",
            "https://i.gkd.li/i/14235476",
            "https://i.gkd.li/i/14235479"
          ],
          "fastQuery": true
        },
        {
          "activityIds": ".MainActivity",
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": "https://i.gkd.li/i/14235478",
          "fastQuery": true
        },
        {
          "activityIds": "com.xifeng.fun.MainActivity",
          "matches": "[id=\"android:id/content\"] >2 FrameLayout[childCount>2] >(1,2) FrameLayout[childCount>4] >2 ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/i/14050836",
            "https://i.gkd.li/i/14235476",
            "https://i.gkd.li/i/14235478",
            "https://i.gkd.li/i/14235479"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "通知提示-公告弹窗",
      "desc": "点击\"我知道了\"",
      "actionMaximum": 1,
      "resetMatch": "app",
      "matchTime": 10000,
      "rules": [
        {
          "matches": "[desc=\"我知道了\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/971c3631-a9cc-4aec-992e-6cf1166eea1b",
          "snapshotUrls": "https://i.gkd.li/i/14235411",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-广告弹窗",
      "desc": "点击X",
      "enable": false,
      "rules": [
        {
          "activityIds": "com.xifeng.fun.MainActivity",
          "matches": "[id=\"android:id/content\"] >2 FrameLayout[childCount>2] >(1,2) FrameLayout[childCount>4] >2 ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/i/14050836",
            "https://i.gkd.li/i/14235476",
            "https://i.gkd.li/i/14235478",
            "https://i.gkd.li/i/14235479"
          ]
        }
      ]
    }
  ]
});
