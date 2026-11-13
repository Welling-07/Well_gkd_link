// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.vmos.pro",
  "name": "VMOS Pro",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "activityIds": "com.vmos.pro.activities.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13536416",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activities.main.MainActivity",
          "matches": "[text=\"不再显示本活动\"]",
          "snapshotUrls": "https://i.gkd.li/i/13536416",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.vmos.pro:id/iv_dismiss\"] ",
          "fastQuery": true,
          "activityIds": "com.vmos.pro.activities.main.MainActivity",
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
      "activityIds": "com.vmos.pro.activities.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13536416",
      "rules": [
        {
          "matches": "[id=\"com.vmos.pro:id/iv_dismiss\"] ",
          "fastQuery": true,
          "activityIds": "com.vmos.pro.activities.main.MainActivity"
        }
      ]
    }
  ]
});
