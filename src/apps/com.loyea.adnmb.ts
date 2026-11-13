// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.loyea.adnmb",
  "name": "蓝岛",
  "groups": [
    {
      "key": 0,
      "name": "通知提示-通知弹窗",
      "fastQuery": true,
      "activityIds": ".activity.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13623450",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[text=\"不再显示该条通知\"][checked=false]",
          "exampleUrls": "https://e.gkd.li/81cc5b1b-d0a6-44e9-be99-7897cceb491a",
          "snapshotUrls": "https://i.gkd.li/i/13623450",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".activity.MainActivity"
        },
        {
          "preKeys": 0,
          "matches": "[text=\"确定\"]",
          "exampleUrls": "https://e.gkd.li/81cc5b1b-d0a6-44e9-be99-7897cceb491a",
          "snapshotUrls": "https://i.gkd.li/i/13623450",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".activity.MainActivity"
        },
        {
          "matches": "LinearLayout > Button[text=\"确定\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": ".activity.MainActivity"
        },
        {
          "matches": "LinearLayout > Button[text=\"确定\"]",
          "fastQuery": true,
          "activityIds": "com.loyea.adnmb.activity.MainActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
