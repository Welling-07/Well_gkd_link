// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xt.retouch",
  "name": "醒图",
  "groups": [
    {
      "key": 0,
      "name": "评价提示-好评反馈",
      "activityIds": "com.xt.retouch.uilauncher.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13062637",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".uilauncher.MainActivity",
          "matches": "[vid=\"market_feedback_dialog_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13062637",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.xt.retouch:id/market_feedback_dialog_close\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.xt.retouch.uilauncher.MainActivity"
        }
      ]
    }
  ]
});
