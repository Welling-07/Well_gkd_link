// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cnki.client",
  "name": "手机知网",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "activityIds": [
        "com.cnki.client.core.navigator.main.HomeActivity"
      ],
      "snapshotUrls": "https://i.gkd.li/i/12854857",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".core.tramp.SplashActivity",
          "matches": "[vid=\"update_undo\"]",
          "snapshotUrls": "https://i.gkd.li/i/12854857",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.cnki.client:id/update_undo\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.cnki.client.core.navigator.main.HomeActivity"
          ]
        }
      ]
    }
  ]
});
