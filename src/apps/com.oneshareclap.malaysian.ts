// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.oneshareclap.malaysian",
  "name": "水果派",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "snapshotUrls": "https://i.gkd.li/i/14275367",
      "fastQuery": true,
      "rules": [
        {
          "matches": "[text=\"关闭广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/14275367",
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
