// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.dianxinai.mobile",
  "name": "点心云",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "activityIds": [
        "com.dianxinai.mobile.MainActivity"
      ],
      "snapshotUrls": "https://i.gkd.li/i/12847518",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[text$=\"s\"][text.length=2]",
          "snapshotUrls": "https://i.gkd.li/i/16115075",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "activityIds": [
            "com.dianxinai.mobile.MainActivity"
          ]
        },
        {
          "matches": "@ViewGroup[clickable = true] > TextView[text $=\"s\" && text.length=2]",
          "activityIds": [
            "com.dianxinai.mobile.MainActivity"
          ],
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
