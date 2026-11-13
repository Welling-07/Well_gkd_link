// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.example.maintenancemaster",
  "name": "维护大师",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "actionMaximum": 1,
      "matchTime": 10000,
      "fastQuery": true,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[vid=\"advertisement_countdown_ccd\"]",
          "snapshotUrls": "https://i.gkd.li/i/12903877",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[id=\"com.example.maintenancemaster:id/advertisement_countdown_ccd\"]",
          "snapshotUrls": "https://i.gkd.li/i/12903877",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    }
  ]
});
