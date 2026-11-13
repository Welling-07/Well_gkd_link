// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.m17qcc.mm",
  "name": "青创网",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12642297",
      "rules": [
        {
          "activityIds": "miuix.appcompat.app.m",
          "matches": "[text*=\"新版本\"] +(n) LinearLayout > TextView[text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/12642297",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text*=\"新版本\"] +(n) LinearLayout > TextView[text=\"取消\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
