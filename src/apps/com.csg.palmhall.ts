// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.csg.palmhall",
  "name": "南网在线",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "activityIds": [
        "com.csg.palmhall.MainActivity"
      ],
      "snapshotUrls": "https://i.gkd.li/i/12700060",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "@[text=\"关闭\"] + [text=\"升级\"]",
          "snapshotUrls": "https://i.gkd.li/i/12700060",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[text=\"关闭\"] + [text=\"升级\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.csg.palmhall.MainActivity"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-首页弹窗广告",
      "activityIds": "com.csg.palmhall.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12700075",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "View > Image +(3) [text=\"不再显示\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12700075",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "View > Image +(3) [text=\"不再显示\"][clickable=true]",
          "activityIds": "com.csg.palmhall.MainActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "通知提示-公告弹窗",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[text$=\"公告\"] - View[childCount=2] > Image[childCount=0][text=\"\"]",
          "exampleUrls": "https://e.gkd.li/0ecc2a4e-6ab9-4c00-80fe-bbd23d181be8",
          "snapshotUrls": "https://i.gkd.li/i/16478559",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.csg.palmhall.MainActivity",
          "matches": "[text$=\"公告\"] - View[childCount=2] > Image[childCount=0][text=\"\"]",
          "exampleUrls": "https://e.gkd.li/0ecc2a4e-6ab9-4c00-80fe-bbd23d181be8",
          "snapshotUrls": "https://i.gkd.li/i/16478559",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-首页广告弹窗",
      "enable": false,
      "activityIds": [
        "com.csg.palmhall.MainActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12700075"
      ],
      "rules": [
        {
          "matches": "View > Image +(3) [text=\"不再显示\"][clickable=true]",
          "activityIds": [
            "com.csg.palmhall.MainActivity"
          ]
        }
      ]
    }
  ]
});
