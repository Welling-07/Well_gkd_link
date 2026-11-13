// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jisu.manhua",
  "name": "漫画人极速版",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "activityIds": "com.ilike.cartoon.activities.HomeActivity",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.ilike.cartoon.activities.HomeActivity",
          "matches": "[vid=\"iv_promotion\"] + [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13688186",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.jisu.manhua:id/iv_promotion\"] + [id=\"com.jisu.manhua:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13688186",
          "fastQuery": true,
          "activityIds": "com.ilike.cartoon.activities.HomeActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
