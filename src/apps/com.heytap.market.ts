// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.heytap.market",
  "name": "OPPO软件商店",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "desc": "全局规则不生效",
      "order": -10,
      "actionMaximum": 1,
      "resetMatch": "app",
      "matchTime": 10000,
      "fastQuery": true,
      "exampleUrls": "https://m.gkd.li/101449500/4c1e3df4-e0e8-49ec-a260-ed406b46168e",
      "snapshotUrls": "https://i.gkd.li/i/14120100",
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "matches": "@[clickable=true] > [text=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/14668997",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[text*=\"跳过\"][text.length<=5]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 10000,
          "fastQuery": true,
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "order": -9,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": [
        "com.heytap.cdo.client.cards.page.main.maintab.MainTabActivity",
        "com.heytap.upgrade.ui.UpgradeActivity"
      ],
      "rules": [
        {
          "action": "back",
          "activityIds": [
            "com.heytap.upgrade.ui.UpgradeActivity",
            "com.heytap.cdo.client.cards.page.main.maintab.MainTabActivity"
          ],
          "matches": "[text=\"发现软件商店新版本\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13455965",
            "https://i.gkd.li/i/23688317"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "action": "back",
          "matches": "[id=\"com.heytap.market:id/tv_titile\"][text=\"发现软件商店新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/13455965",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.heytap.cdo.client.cards.page.main.maintab.MainTabActivity",
            "com.heytap.upgrade.ui.UpgradeActivity"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-右下角广告悬浮卡片",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.heytap.cdo.client.cards.page.main.maintab.MainTabActivity",
          "matches": "@[desc=\"关闭\"] <2 [vid=\"view_id_float_ad\"]",
          "exampleUrls": "https://m.gkd.li/57941037/51493144-2758-4bc7-b2b7-cc85c04c6cc1",
          "snapshotUrls": "https://i.gkd.li/i/14469932"
        }
      ]
    },
    {
      "key": 3,
      "name": "局部广告-首页-右下角浮窗",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.heytap.cdo.client.cards.page.main.maintab.MainTabActivity",
      "snapshotUrls": "https://i.gkd.li/i/14469932",
      "rules": [
        {
          "matches": "@[desc=\"关闭\"][clickable=true] <2 [vid=\"view_id_float_ad\"]",
          "fastQuery": true,
          "activityIds": "com.heytap.cdo.client.cards.page.main.maintab.MainTabActivity"
        }
      ]
    }
  ]
});
