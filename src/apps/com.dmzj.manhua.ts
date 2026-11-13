// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.dmzj.manhua",
  "name": "动漫之家",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "activityIds": "com.dmzj.manhua.ui.LaunchInterceptorActivity",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "matchTime": 10000,
      "snapshotUrls": "https://i.gkd.li/i/13542503",
      "rules": [
        {
          "activityIds": ".ui.LaunchInterceptorActivity",
          "matches": "[vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13542503",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.dmzj.manhua:id/iv_close\"]",
          "activityIds": "com.dmzj.manhua.ui.LaunchInterceptorActivity",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "activity",
          "matchTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-悬浮广告",
      "desc": "点击取消",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ui.home.HomeTabsActivitys",
          "matches": "[vid=\"ivAdClose\"]",
          "snapshotUrls": "https://i.gkd.li/i/13542506",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-主页\"您想运行会员系统吗\"弹窗",
      "desc": "点击取消",
      "enable": false,
      "activityIds": "com.dmzj.manhua.ui.home.HomeTabsActivitys",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "matchTime": 10000,
      "snapshotUrls": "https://i.gkd.li/i/13542506",
      "rules": [
        {
          "matches": "@[id=\"com.dmzj.manhua:id/ivAdClose\"] - [id=\"com.dmzj.manhua:id/ivFloatAd\"]",
          "activityIds": "com.dmzj.manhua.ui.home.HomeTabsActivitys",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "activity",
          "matchTime": 10000
        }
      ]
    }
  ]
});
