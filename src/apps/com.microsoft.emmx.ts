// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.microsoft.emmx",
  "name": "Edge",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13646187",
      "rules": [
        {
          "activityIds": "org.chromium.chrome.browser.ChromeTabbedActivity",
          "matches": "[text=\"允许通知\"] + [text=\"不，谢谢\"]",
          "snapshotUrls": "https://i.gkd.li/i/13646187",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        },
        {
          "matches": "[text=\"允许通知\"] + [text=\"不，谢谢\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    }
  ]
});
