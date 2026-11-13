// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.gvsoft.gofun",
  "name": "GoFun出行",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.gvsoft.gofun.module.home.activity.HomeActivity",
      "snapshotUrls": "https://i.gkd.li/i/13497777",
      "rules": [
        {
          "activityIds": ".module.home.activity.HomeActivity",
          "matches": "[vid=\"cardView\"] + [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13497777",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "action": "clickCenter",
          "matches": "[id=\"com.gvsoft.gofun:id/cardView\"] + [id=\"com.gvsoft.gofun:id/iv_close\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.gvsoft.gofun.module.home.activity.HomeActivity"
        }
      ]
    }
  ]
});
