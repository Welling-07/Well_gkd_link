// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.keke.ysh1.tz08051h",
  "name": "可可影视",
  "groups": [
    {
      "key": 0,
      "name": "通知提示-公告弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "activityIds": "com.salmon.film.main.ui.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13548412",
      "rules": [
        {
          "matches": "[text=\"朕知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/13548412",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.salmon.film.main.ui.MainActivity"
        },
        {
          "matches": "[text=\"可可影视\"] +2 * > [text*=\"知道了\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": "com.salmon.film.main.ui.MainActivity"
        }
      ]
    }
  ]
});
