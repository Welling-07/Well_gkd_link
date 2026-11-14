// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xiaomi.market",
  "name": "小米应用商店",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchRoot": true,
      "actionMaximum": 1,
      "matchTime": 10000,
      "resetMatch": "app",
      "rules": [
        {
          "matchRoot": true,
          "action": "clickCenter",
          "activityIds": [
            ".ui.FloatWebActivity",
            ".ui.HomeFloatWebActivity"
          ],
          "matches": "@Button[text=\"关闭\" || desc=\"关闭\"][clickable=true][visibleToUser=true] <<n [vid=\"webview\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/16323123",
            "https://i.gkd.li/i/20946336",
            "https://i.gkd.li/i/23249365"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": ".business_ui.main.MarketTabActivity",
          "matches": "[vid=\"iv_ad\"] + [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/28141509",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchRoot": true
        },
        {
          "activityIds": "com.xiaomi.market.ui.FloatWebActivity",
          "matches": "@Button[clickable=true][text=\"关闭\"] <<n [vid=\"webview\"]",
          "snapshotUrls": "https://i.gkd.li/i/16323123",
          "fastQuery": true,
          "matchRoot": true,
          "actionMaximum": 1,
          "matchTime": 10000,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "activityIds": "com.xiaomi.market.ui.FloatWebActivity",
          "matches": "@Button[text=\"关闭\"] <<n [id=\"com.xiaomi.market:id/webview\"]",
          "snapshotUrls": "https://i.gkd.li/i/13248808",
          "matchRoot": true,
          "actionMaximum": 1,
          "matchTime": 10000,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "fastQuery": true,
      "activityIds": "com.xiaomi.market.ui.UpdateListActivity",
      "snapshotUrls": "https://i.gkd.li/i/13197334",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.UpdateListActivity",
          "matches": "[vid=\"iv_close_tip\" || vid=\"orchard_banner_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13197334",
            "https://i.gkd.li/i/30699398"
          ]
        },
        {
          "matches": "[id=\"com.xiaomi.market:id/iv_close_tip\"]",
          "fastQuery": true,
          "activityIds": "com.xiaomi.market.ui.UpdateListActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "权限提示-通知权限",
      "desc": "自动点击关闭按钮",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "name": "升级软件后的\"开启推送\"弹窗",
          "activityIds": ".ui.UpdateListActivity",
          "matches": "[vid=\"dialog_cancel\" || text=\"不再提醒\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14814456",
            "https://i.gkd.li/i/19643114"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "name": "开启通知栏提醒",
          "matchTime": 10000,
          "activityIds": ".business_ui.main.MarketTabActivity",
          "matches": [
            "[text=\"开启通知栏提醒\"]",
            "[text=\"不了，谢谢\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13691701",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "name": "升级软件后的\"开启推送\"弹窗 (2)",
          "activityIds": "com.xiaomi.market.ui.UpdateListActivity",
          "matches": "[vid=\"dialog_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/14814456",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "name": "开启通知栏提醒 (2)",
          "matchTime": 10000,
          "matches": [
            "[text=\"开启通知栏提醒\"]",
            "[text=\"不了，谢谢\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13197306",
            "https://i.gkd.li/i/13691701"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 4,
      "name": "局部广告-个性化推荐卡片",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.xiaomi.market.business_ui.main.MarketTabActivity",
      "snapshotUrls": "https://i.gkd.li/i/13624971",
      "rules": [
        {
          "activityIds": ".business_ui.main.MarketTabActivity",
          "matches": "[vid=\"close_float_recommend\"]",
          "snapshotUrls": "https://i.gkd.li/i/13624971",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.xiaomi.market:id/close_float_recommend\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.xiaomi.market.business_ui.main.MarketTabActivity"
        }
      ]
    }
  ]
});
