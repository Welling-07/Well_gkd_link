// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cnki.view",
  "name": "知网文化",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "activityIds": [
        "com.cnki.view.core.navigator.main.HomeActivity",
        "com.cnki.view.core.tramp.main.SplashActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12755689",
        "https://i.gkd.li/i/12755700"
      ],
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            ".core.navigator.main.HomeActivity",
            ".core.tramp.main.SplashActivity"
          ],
          "matches": "[vid=\"update_undo\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12755689",
            "https://i.gkd.li/i/12755700"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.cnki.view:id/update_undo\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.cnki.view.core.navigator.main.HomeActivity",
            "com.cnki.view.core.tramp.main.SplashActivity"
          ]
        }
      ]
    }
  ]
});
