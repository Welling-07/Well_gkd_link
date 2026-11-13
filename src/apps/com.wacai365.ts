// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wacai365",
  "name": "挖财记账",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "fastQuery": true,
      "actionMaximum": 1,
      "activityIds": [
        "com.wacai365.HomeActivity",
        "com.wacai.android.wind.splash.WindDialogActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/13249620",
        "https://i.gkd.li/i/13772291"
      ],
      "matchTime": 10000,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            ".HomeActivity",
            "com.wacai.android.wind.splash.WindDialogActivity"
          ],
          "matches": "@ImageView[vid=\"tv_cancel\"] - TextView[text^=\"新版本\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13249620",
            "https://i.gkd.li/i/13772291"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@ImageView[id=\"com.wacai365:id/tv_cancel\"] - TextView[text^=\"新版本\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.wacai365.HomeActivity",
            "com.wacai.android.wind.splash.WindDialogActivity"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "actionMaximum": 1,
      "activityIds": "com.wacai365.HomeActivity",
      "snapshotUrls": "https://i.gkd.li/i/13249666",
      "matchTime": 10000,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".HomeActivity",
          "matches": "[id^=\"com.wacai365:id/promote_banner_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13249666",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id^=\"com.wacai365:id/promote_banner_close\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "activityIds": "com.wacai365.HomeActivity",
          "matchTime": 10000,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "@View[clickable=true] <2 * <2 * < [vid=\"flTTContainer\"]",
          "snapshotUrls": "https://i.gkd.li/i/14021540",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[text^=\"跳过\"][text.length<=6]",
          "snapshotUrls": "https://i.gkd.li/i/13399124",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        }
      ]
    }
  ]
});
