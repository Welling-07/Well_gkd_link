// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.danlan.xiaolan",
  "name": "Blued极速版",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-卡片广告",
      "fastQuery": true,
      "activityIds": [
        "com.blued.android.core.ui.TerminalActivity",
        "com.soft.blued.ui.home.HomeActivity"
      ],
      "rules": [
        {
          "matches": "[vid=\"img_close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13421613",
            "https://i.gkd.li/i/13421923"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.blued.android.core.ui.TerminalActivity",
            "com.soft.blued.ui.home.HomeActivity"
          ]
        },
        {
          "preKeys": 0,
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13421622",
            "https://i.gkd.li/i/13422170"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.blued.android.core.ui.TerminalActivity",
            "com.soft.blued.ui.home.HomeActivity"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "分段广告-\"附近的人\"页面卡片广告",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.soft.blued.ui.home.HomeActivity",
      "rules": [
        {
          "matches": "[id=\"com.danlan.xiaolan:id/ad_container\"] >n [id=\"com.danlan.xiaolan:id/img_close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13421613",
          "fastQuery": true,
          "activityIds": "com.soft.blued.ui.home.HomeActivity"
        },
        {
          "preKeys": 0,
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13421622",
          "fastQuery": true,
          "activityIds": "com.soft.blued.ui.home.HomeActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "分段广告-\"来访\"页面卡片广告",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.blued.android.core.ui.TerminalActivity",
      "rules": [
        {
          "matches": "[id=\"com.danlan.xiaolan:id/img_close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13421923",
          "fastQuery": true,
          "activityIds": "com.blued.android.core.ui.TerminalActivity"
        },
        {
          "preKeys": 0,
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13422170",
          "fastQuery": true,
          "activityIds": "com.blued.android.core.ui.TerminalActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-附近的人-广告卡片",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.soft.blued.ui.home.HomeActivity",
      "rules": [
        {
          "matches": "[id=\"com.danlan.xiaolan:id/ad_container\"] >n [id=\"com.danlan.xiaolan:id/img_close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13421613",
          "fastQuery": true,
          "activityIds": "com.soft.blued.ui.home.HomeActivity"
        },
        {
          "preKeys": 0,
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13421622",
          "fastQuery": true,
          "activityIds": "com.soft.blued.ui.home.HomeActivity"
        }
      ]
    },
    {
      "key": 4,
      "name": "未分类-来访-广告卡片",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.blued.android.core.ui.TerminalActivity",
      "rules": [
        {
          "matches": "[id=\"com.danlan.xiaolan:id/img_close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13421923",
          "fastQuery": true,
          "activityIds": "com.blued.android.core.ui.TerminalActivity"
        },
        {
          "preKeys": 0,
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13422170",
          "fastQuery": true,
          "activityIds": "com.blued.android.core.ui.TerminalActivity"
        }
      ]
    }
  ]
});
