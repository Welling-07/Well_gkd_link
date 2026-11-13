// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.dmzjsq.manhua",
  "name": "动漫之家社区",
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
          "fastQuery": true,
          "activityIds": "com.dmzj.manhua.ui.home.HomeTabsActivitys",
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12885087",
            "https://i.gkd.li/i/12893731"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/12885087",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.dmzj.manhua.ui.home.HomeTabsActivitys",
          "matches": "ImageView < FrameLayout - FrameLayout > FrameLayout[childCount=1] > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/12893731",
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
      "fastQuery": true,
      "rules": [
        {
          "matches": "ImageView - FrameLayout > FrameLayout > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/12885087",
          "fastQuery": true
        },
        {
          "activityIds": "com.dmzj.manhua.ui.home.HomeTabsActivitys",
          "matches": "ImageView < FrameLayout - FrameLayout > FrameLayout[childCount=1] > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/12893731",
          "fastQuery": true
        }
      ]
    }
  ]
});
