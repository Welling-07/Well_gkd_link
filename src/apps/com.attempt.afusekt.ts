// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.attempt.afusekt",
  "name": "AfuseKt",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "[text=\"下次一定\"]",
          "exampleUrls": "https://e.gkd.li/7c513592-123b-4dde-92cd-54fad5d14dee",
          "snapshotUrls": "https://i.gkd.li/i/16938883",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "activityIds": "com.attempt.afusekt.MainActivity",
          "matches": "[text=\"下次一定\"]",
          "exampleUrls": "https://e.gkd.li/7c513592-123b-4dde-92cd-54fad5d14dee",
          "snapshotUrls": "https://i.gkd.li/i/16938883",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
