// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hpbr.bosszhipin",
  "name": "BOSS直聘",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            ".module.main.activity.MainActivity",
            ".module.launcher.WelcomeActivity"
          ],
          "matches": "@ImageView[vid=\"iv_cancle\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13440781",
            "https://i.gkd.li/i/13623476"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@ImageView[id=\"com.hpbr.bosszhipin:id/iv_cancle\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13440781",
            "https://i.gkd.li/i/13623476"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-通知权限授权弹窗",
      "enable": false,
      "activityIds": [
        "com.hpbr.bosszhipin.module.main.activity.MainActivity",
        "com.hpbr.bosszhipin.module.launcher.WelcomeActivity"
      ],
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "rules": [
        {
          "matches": "@ImageView[id=\"com.hpbr.bosszhipin:id/iv_cancle\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13440781",
            "https://i.gkd.li/i/13623476"
          ],
          "activityIds": [
            "com.hpbr.bosszhipin.module.main.activity.MainActivity",
            "com.hpbr.bosszhipin.module.launcher.WelcomeActivity"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "activity"
        }
      ]
    }
  ]
});
