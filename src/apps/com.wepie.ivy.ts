// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wepie.ivy",
  "name": "青藤之恋",
  "groups": [
    {
      "key": 0,
      "name": "评价提示-好评弹窗",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "matchTime": 10000,
      "rules": [
        {
          "action": "back",
          "activityIds": ".module.start.MainActivity",
          "matches": "[text=\"我要吐槽\"] + [text=\"五星好评\"]",
          "snapshotUrls": "https://i.gkd.li/i/14602933",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"我要吐槽\"] + [text=\"五星好评\"]",
          "action": "back",
          "snapshotUrls": "https://i.gkd.li/i/14602933",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "matchTime": 10000
        }
      ]
    }
  ]
});
