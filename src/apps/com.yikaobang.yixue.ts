// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.yikaobang.yixue",
  "name": "医考帮",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.psychiatrygarden.activity.HomePageNewActivity",
          "matches": "ImageView[vid=\"close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13425853",
            "https://i.gkd.li/i/28434183"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告",
      "desc": "顶部轮播图广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.psychiatrygarden.activity.HomePageNewActivity",
          "matches": "[vid=\"iv_ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/28434131"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-悬浮窗广告",
      "desc": "点击x掉",
      "rules": [
        {
          "fastQuery": true,
          "actionCd": 3000,
          "activityIds": "com.psychiatrygarden.activity.HomePageNewActivity",
          "matches": "[vid=\"iv_delete\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/28434131",
          "excludeSnapshotUrls": "https://i.gkd.li/i/28434273"
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-会员活动弹窗",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.psychiatrygarden.activity.HomePageNewActivity",
      "rules": [
        {
          "matches": "@ImageView[id=\"com.yikaobang.yixue:id/close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13425853",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.psychiatrygarden.activity.HomePageNewActivity"
        }
      ]
    }
  ]
});
