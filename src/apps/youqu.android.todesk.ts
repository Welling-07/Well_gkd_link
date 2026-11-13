// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "youqu.android.todesk",
  "name": "ToDesk",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "desc": "关闭卡片广告",
      "fastQuery": true,
      "activityIds": [
        "youqu.android.todesk.activity.WelcomeActivity",
        "youqu.android.todesk.activity.MainActivity"
      ],
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".activity.WelcomeActivity",
            ".activity.MainActivity"
          ],
          "matches": "[vid=\"ivAdClose\" || vid=\"llClose\"]",
          "exampleUrls": "https://m.gkd.li/57941037/7535a849-b4a7-4dd5-a6c1-4d3def042d70",
          "snapshotUrls": [
            "https://i.gkd.li/i/14175556",
            "https://i.gkd.li/i/13228546"
          ]
        },
        {
          "matches": "[id=\"youqu.android.todesk:id/ivAdClose\" || id=\"youqu.android.todesk:id/llClose\"]",
          "exampleUrls": "https://m.gkd.li/57941037/7535a849-b4a7-4dd5-a6c1-4d3def042d70",
          "snapshotUrls": [
            "https://i.gkd.li/i/14175556",
            "https://i.gkd.li/i/13228546"
          ],
          "fastQuery": true,
          "activityIds": [
            "youqu.android.todesk.activity.WelcomeActivity",
            "youqu.android.todesk.activity.MainActivity"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "通知提示-套餐到期",
      "desc": "①选[不再提示] ②点击x掉",
      "fastQuery": true,
      "activityIds": ".activity.MainActivity",
      "rules": [
        {
          "actionMaximum": 1,
          "resetMatch": "app",
          "matches": "[vid=\"tvNotNotice\"]",
          "fastQuery": true,
          "activityIds": ".activity.MainActivity"
        },
        {
          "matches": "[vid=\"ivClose\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/27383310",
          "fastQuery": true,
          "activityIds": ".activity.MainActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-广告卡片",
      "desc": "设备列表和连接界面中的广告卡片",
      "enable": false,
      "activityIds": [
        "youqu.android.todesk.activity.WelcomeActivity",
        "youqu.android.todesk.activity.MainActivity"
      ],
      "fastQuery": true,
      "snapshotUrls": [
        "https://i.gkd.li/i/13228546",
        "https://i.gkd.li/i/13256552",
        "https://i.gkd.li/i/13296380",
        "https://i.gkd.li/i/14175557"
      ],
      "rules": [
        {
          "matches": "[id=\"youqu.android.todesk:id/sivDeviceBanner\"] + [id=\"youqu.android.todesk:id/llClose\"]",
          "activityIds": [
            "youqu.android.todesk.activity.WelcomeActivity",
            "youqu.android.todesk.activity.MainActivity"
          ],
          "fastQuery": true
        },
        {
          "matches": "[vid=\"layoutMainBottomBanner\"] > [vid=\"ivAdClose\"]",
          "activityIds": [
            "youqu.android.todesk.activity.WelcomeActivity",
            "youqu.android.todesk.activity.MainActivity"
          ],
          "fastQuery": true
        }
      ]
    }
  ]
});
