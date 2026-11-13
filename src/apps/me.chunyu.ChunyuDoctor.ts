// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "me.chunyu.ChunyuDoctor",
  "name": "春雨医生",
  "groups": [
    {
      "key": 0,
      "name": "评价提示-应用评分弹窗",
      "activityIds": [
        "me.chunyu.ChunyuDoctor.Activities.WelcomeActivity",
        "me.chunyu.ChunyuDoctor.Activities.MainActivity"
      ],
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            ".Activities.MainActivity",
            ".Activities.WelcomeActivity"
          ],
          "matches": "[text=\"给应用评分\"] +(2) RelativeLayout > [text=\"下次再说\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12661907",
            "https://i.gkd.li/i/12661924"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"给应用评分\"] +(2) RelativeLayout > [text=\"下次再说\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12661907",
            "https://i.gkd.li/i/12661924"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "me.chunyu.ChunyuDoctor.Activities.WelcomeActivity",
            "me.chunyu.ChunyuDoctor.Activities.MainActivity"
          ]
        }
      ]
    }
  ]
});
