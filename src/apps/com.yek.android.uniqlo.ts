// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.yek.android.uniqlo",
  "name": "优衣库",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "activityIds": "com.yek.android.uniqlo.uiux.Home.activity.HomeActivity",
      "snapshotUrls": "https://i.gkd.li/i/13212320",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".uiux.Home.activity.HomeActivity",
          "matches": "ImageView[vid=\"pop_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13212320",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "ImageView[id=\"com.yek.android.uniqlo:id/pop_close\"]",
          "fastQuery": true,
          "activityIds": "com.yek.android.uniqlo.uiux.Home.activity.HomeActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "desc": "点击取消",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.WelcomeActivity",
          "matches": "@TextView[text=\"取消\"] + TextView[text=\"确定\"]",
          "snapshotUrls": "https://i.gkd.li/i/13446421",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@TextView[text=\"取消\"] + TextView[text=\"确定\"]",
          "snapshotUrls": "https://i.gkd.li/i/13446421",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "未分类-新版本弹窗",
      "desc": "点击取消",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.yek.android.uniqlo.activity.WelcomeActivity",
          "matches": "@TextView[text=\"取消\"] + TextView[text=\"确定\"]",
          "snapshotUrls": "https://i.gkd.li/i/13446421",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
