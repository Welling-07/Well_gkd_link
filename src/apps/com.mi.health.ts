// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.mi.health",
  "name": "小米运动健康",
  "groups": [
    {
      "key": 0,
      "name": "评价提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.xiaomi.fitness.baseui.common.CommonBaseActivity",
          "matches": [
            "[text=\"评分\"][visibleToUser=true]",
            "[text=\"下次再说\"][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13258813",
            "https://i.gkd.li/i/21979253"
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
      "name": "权限提示-后台运行",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.xiaomi.fitness.main.MainActivity",
          "matches": "[text=\"开启后台无限制\"] + [vid=\"close_icon\"]",
          "snapshotUrls": "https://i.gkd.li/i/13495035",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "name": "活动弹窗",
          "activityIds": "com.xiaomi.fitness.main.MainActivity",
          "matches": "[vid=\"cardview\"] + [vid=\"dialog_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13537836",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "name": "表盘广告",
          "activityIds": "com.xiaomi.wearable.yrn.views.WearableRNActivity",
          "matches": "@[clickable=true] > [desc=\"Close\"]",
          "snapshotUrls": "https://i.gkd.li/i/23923968",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "matches": [
            "[text=\"下载并安装\" || text=\"立即更新\"]",
            "[text=\"放弃更新\" || text=\"取消\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13537840",
            "https://i.gkd.li/i/13626328"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text^=\"发现新版本\"] < * + * >n [text=\"放弃更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/13537840",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        },
        {
          "matches": "[text=\"立即更新\"] + [id=\"com.mi.health:id/tv_negative\"][text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/13626328",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 4,
      "name": "通知提示-公告栏",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.xiaomi.fitness.main.MainActivity",
          "matches": "[vid=\"bannerAnnouncementView\"] [vid=\"iv_close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/24099864"
        }
      ]
    },
    {
      "key": 5,
      "name": "权限提示-麦克风",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.xiaomi.fitness.baseui.common.CommonBaseActivity",
          "matches": "@[vid=\"close_instruction\"][clickable=true] - [text^=\"鼾声梦话监测开关因麦克风未授权而关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/24229351"
        }
      ]
    },
    {
      "key": 6,
      "name": "评价提示-好评弹窗",
      "enable": false,
      "activityIds": "com.xiaomi.fitness.baseui.common.CommonBaseActivity",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13258813",
      "matchTime": 10000,
      "rules": [
        {
          "matches": "[id=\"com.mi.health:id/nextView\"][text=\"下次再说\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": "com.xiaomi.fitness.baseui.common.CommonBaseActivity"
        }
      ]
    },
    {
      "key": 7,
      "name": "权限提示-权限提醒",
      "enable": false,
      "activityIds": "com.xiaomi.fitness.main.MainActivity",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13495035",
      "rules": [
        {
          "matches": "[text=\"开启后台无限制\"] + [id=\"com.mi.health:id/close_icon\"]",
          "activityIds": "com.xiaomi.fitness.main.MainActivity",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 8,
      "name": "全屏广告-活动弹窗",
      "enable": false,
      "rules": [
        {
          "activityIds": "com.xiaomi.fitness.main.MainActivity",
          "fastQuery": true,
          "matches": "[id=\"com.mi.health:id/cardview\"] + [id=\"com.mi.health:id/dialog_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13537836"
        }
      ]
    },
    {
      "key": 9,
      "name": "未分类-版本更新",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.xiaomi.fitness.main.MainActivity",
          "matches": "[text^=\"发现新版本\"] < * + * >n [text=\"放弃更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/13537840",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        },
        {
          "activityIds": "com.mi.health.home.HomeActivity",
          "matches": "[text=\"立即更新\"] + [id=\"com.mi.health:id/tv_negative\"][text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/13626328",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    }
  ]
});
