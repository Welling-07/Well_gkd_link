// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.codium.hydrocoach",
  "name": "Hydro Coach",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-订阅推荐",
      "desc": "关闭每次开启时的订阅推荐",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.pro.subscription.SubscribeActivity",
          "matches": [
            "[text^=\"解鎖所有功能\"]",
            "[vid=\"close_button\"]"
          ],
          "exampleUrls": "https://e.gkd.li/7092a375-a9f0-4aca-b5b4-3386c71a0820",
          "snapshotUrls": "https://i.gkd.li/i/15806266",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
