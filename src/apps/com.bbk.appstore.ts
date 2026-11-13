// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.bbk.appstore",
  "name": "vivo应用商店",
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
          "activityIds": ".ui.AppStoreTabActivity",
          "matches": [
            "[text*=\"通知\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13198234",
            "https://i.gkd.li/i/13246971",
            "https://i.gkd.li/i/13884356"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.bbk.appstore:id/upgrade_necessary_btn_high_new\"]",
          "snapshotUrls": "https://i.gkd.li/i/13198101",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": [
            "[text*=\"通知\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13198234",
            "https://i.gkd.li/i/13246971",
            "https://i.gkd.li/i/13884356"
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
      "name": "全屏广告-热门应用推荐",
      "desc": "点击[进入首页]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "activityIds": ".upgrade.UpgradeNecessaryActivity",
      "rules": [
        {
          "matches": "[text*=\"进入首页\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13198101",
          "exampleUrls": "https://e.gkd.li/eb96ca80-2e68-4f41-ac0f-3c82092034d7",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": ".upgrade.UpgradeNecessaryActivity"
        },
        {
          "matches": "@Button[clickable=true] >2 [text*=\"进入首页\"]",
          "snapshotUrls": "https://i.gkd.li/i/28419903",
          "exampleUrls": "https://e.gkd.li/d28ac0e6-a03e-4e46-8600-550f22b35a85",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": ".upgrade.UpgradeNecessaryActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "通知提示",
      "enable": false,
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": [
        "com.bbk.appstore.upgrade.UpgradeNecessaryActivity",
        "com.bbk.appstore.ui.AppStoreTabActivity"
      ],
      "rules": [
        {
          "activityIds": "com.bbk.appstore.upgrade.UpgradeNecessaryActivity",
          "matches": "[id=\"com.bbk.appstore:id/upgrade_necessary_btn_high_new\"]",
          "snapshotUrls": "https://i.gkd.li/i/13198101",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "actionMaximumKey": 0,
          "activityIds": "com.bbk.appstore.ui.AppStoreTabActivity",
          "matches": [
            "[text*=\"通知\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13198234",
            "https://i.gkd.li/i/13246971",
            "https://i.gkd.li/i/13884356"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
