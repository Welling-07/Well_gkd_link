// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cmstop.shaoxing",
  "name": "越牛新闻",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "actionMaximum": 1,
      "matchTime": 10000,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13611775",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[vid=\"roundProgressBar\"]",
          "snapshotUrls": "https://i.gkd.li/i/13611775",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[id=\"com.cmstop.shaoxing:id/roundProgressBar\"]",
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
