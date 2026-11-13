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
      "key": 2,
      "name": "功能类-忽略升级",
      "desc": "应用升级界面-自动点击忽略",
      "fastQuery": true,
      "activityIds": ".ui.UpdateListActivity",
      "rules": [
        {
          "excludeMatches": "[text=\"忽略本次\"][visibleToUser=true]",
          "matches": "[vid=\"expand_button\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/14931577",
          "fastQuery": true,
          "activityIds": ".ui.UpdateListActivity"
        },
        {
          "preKeys": 0,
          "matches": "[text=\"忽略本次\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/14931578",
          "fastQuery": true,
          "activityIds": ".ui.UpdateListActivity"
        },
        {
          "excludeMatches": "[text=\"忽略本次\"][visibleToUser=true]",
          "matches": "[vid=\"expand_button\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/14931577",
          "fastQuery": true,
          "activityIds": "com.xiaomi.market.ui.UpdateListActivity"
        },
        {
          "preKeys": 2,
          "matches": "[text=\"忽略本次\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/14931578",
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
    },
    {
      "key": 5,
      "name": "功能类-自动点击[查看全部升级]",
      "desc": "应用升级页面",
      "actionMaximum": 1,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".ui.UpdateListActivity",
            ".ui.UpdateAppsActivity"
          ],
          "matches": "@[clickable=true] > [text^=\"查看全部升级\" || text^=\"查看全部更新\"]",
          "exampleUrls": [
            "https://m.gkd.li/57941037/8549db1e-17a5-44e3-b657-1d2d712efd2a",
            "https://e.gkd.li/e1a4d832-e582-4185-b93e-08ca41f46d92"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/14782814",
            "https://i.gkd.li/i/24461973"
          ],
          "actionMaximum": 1
        },
        {
          "fastQuery": true,
          "activityIds": "com.xiaomi.market.ui.UpdateListActivity",
          "matches": "@[clickable=true] > [text^=\"查看全部升级\"]",
          "exampleUrls": "https://m.gkd.li/57941037/8549db1e-17a5-44e3-b657-1d2d712efd2a",
          "snapshotUrls": "https://i.gkd.li/i/14782814",
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 6,
      "name": "功能类-移动数据更新弹窗点击继续",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.UpdateListActivity",
          "matches": "@[text=\"继续\"] <n * - * >4 [text^=\"您在使用数据网络，升级应用可能产生流量费用\"]",
          "snapshotUrls": "https://i.gkd.li/i/22927652"
        }
      ]
    },
    {
      "key": 7,
      "name": "功能类-[安装新版本需要关闭应用商店]弹窗",
      "desc": "点击[现在安装]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.TranslucentActivityInner",
          "matches": [
            "[text^=\"安装新版本需要关闭应用商店\"]",
            "[text=\"现在安装\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/25607662"
        }
      ]
    },
    {
      "key": 8,
      "name": "功能类-启动后自动打开更新页面",
      "desc": "仅开屏触发一次",
      "fastQuery": true,
      "activityIds": ".business_ui.main.MarketTabActivity",
      "rules": [
        {
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matches": "@[clickable=true] > [text=\"我的\"] <<n [vid=\"tab_container_layout\"]",
          "snapshotUrls": "https://i.gkd.li/i/26096077",
          "fastQuery": true,
          "activityIds": ".business_ui.main.MarketTabActivity"
        },
        {
          "preKeys": 0,
          "matches": "@[clickable=true] >2 [text=\"应用升级\"]",
          "snapshotUrls": "https://i.gkd.li/i/26096406",
          "fastQuery": true,
          "activityIds": ".business_ui.main.MarketTabActivity"
        }
      ]
    }
  ]
});
