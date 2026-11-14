// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ct.client",
  "name": "中国电信",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/15084759",
            "https://i.gkd.li/i/15079224"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/15084759",
            "https://i.gkd.li/i/15079224"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": [
        "https://i.gkd.li/i/12819594",
        "https://i.gkd.li/i/13316168",
        "https://i.gkd.li/i/13695096"
      ],
      "rules": [
        {
          "activityIds": [
            ".activity.MainActivity",
            ".activity.SplashActivity",
            ".common.ConfirmDialogActivity"
          ],
          "matches": "LinearLayout > [text=\"取消升级\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12819594",
            "https://i.gkd.li/i/13316168",
            "https://i.gkd.li/i/13695096"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "LinearLayout > [text=\"取消升级\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-浮窗广告",
      "desc": "会出现在首页、查询办理页面",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": [
        "com.ct.client.common.ConfirmDialogActivity",
        "com.ct.client.activity.MainActivity"
      ],
      "rules": [
        {
          "activityIds": [
            ".common.ConfirmDialogActivity",
            ".activity.MainActivity"
          ],
          "matches": "[vid=\"rlActivity\"] > [vid=\"close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12819676",
            "https://i.gkd.li/i/15104434"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[vid=\"rlActivity\"] > [vid=\"close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12819676",
            "https://i.gkd.li/i/15104434"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.ct.client.common.ConfirmDialogActivity",
            "com.ct.client.activity.MainActivity"
          ]
        }
      ]
    },
    {
      "key": 4,
      "name": "全屏广告-弹窗广告",
      "activityIds": ".common.webview.OnlineBusinessWebkitActivity",
      "snapshotUrls": "https://i.gkd.li/i/12913804",
      "rules": [
        {
          "matches": "Image[text=\"tishi-close\"]",
          "activityIds": ".common.webview.OnlineBusinessWebkitActivity"
        },
        {
          "matches": "Image[text=\"tishi-close\"]",
          "activityIds": "com.ct.client.common.webview.OnlineBusinessWebkitActivity"
        }
      ]
    },
    {
      "key": 5,
      "name": "权限提示-通知权限",
      "desc": "自动点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "ImageView[vid=\"msg_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13043522",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "activityIds": ".activity.MainActivity",
          "matches": "[text^=\"开启消息通知\"] - [vid=\"ivClose\"]",
          "snapshotUrls": "https://i.gkd.li/i/15209597",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "ImageView[id=\"com.ct.client:id/msg_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13043522",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "activityIds": "com.ct.client.activity.MainActivity",
          "matches": "[text^=\"开启消息通知\"] <n * > [vid=\"ivClose\"]",
          "snapshotUrls": "https://i.gkd.li/i/15209597",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 7,
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.MainActivity",
          "matches": "[vid=\"ivFloatClose\"]",
          "exampleUrls": "https://m.gkd.li/57941037/5dd9c9e3-f290-4b73-abdd-dc5e97a99772",
          "snapshotUrls": "https://i.gkd.li/i/15137220",
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "activityIds": "com.ct.client.activity.MainActivity",
          "matches": "[vid=\"ivFloatClose\"]",
          "exampleUrls": "https://m.gkd.li/57941037/5dd9c9e3-f290-4b73-abdd-dc5e97a99772",
          "snapshotUrls": "https://i.gkd.li/i/15137220",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
