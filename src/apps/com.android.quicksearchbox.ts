// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.android.quicksearchbox",
  "name": "搜索",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "fastQuery": true,
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "snapshotUrls": "https://i.gkd.li/i/13897834",
      "rules": [
        {
          "activityIds": ".SearchActivityTransparent",
          "matches": "[vid=\"ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13897834",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[vid=\"ad_close\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "resetMatch": "app",
          "actionMaximum": 1
        }
      ]
    }
  ]
});
