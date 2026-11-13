// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.wps.yun",
  "name": "金山文档",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-列表卡片广告",
      "desc": "点击右侧x",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.IndexActivity",
          "matches": "[vid=\"rootGroup\"][childCount=5] >  [text^=\"实用技巧\"] +3 [vid=\"moreIconRight\"]",
          "exampleUrls": "https://m.gkd.li/47232102/bc97cb52-aad0-4114-a548-5831edbe342d",
          "snapshotUrls": "https://i.gkd.li/i/13495062",
          "excludeSnapshotUrls": "https://i.gkd.li/i/14333322"
        },
        {
          "activityIds": "cn.wps.yun.ui.IndexActivity",
          "fastQuery": true,
          "matches": "[id=\"cn.wps.yun:id/rootGroup\"][childCount=5] >  [text^=\"实用技巧\"] +3 [id=\"cn.wps.yun:id/moreIconRight\"]",
          "exampleUrls": "https://m.gkd.li/47232102/bc97cb52-aad0-4114-a548-5831edbe342d",
          "snapshotUrls": [
            "https://i.gkd.li/i/13495062",
            "https://i.gkd.li/i/14333322"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/14333103",
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": ".ui.IndexActivity",
          "matches": "[text=\"发现新版本\"] +3 [text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/14333103",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"发现新版本\"] +3 [text=\"取消\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "matchTime": 10000
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-通知权限",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/14333362",
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": ".ui.IndexActivity",
          "matches": "[text=\"开启推送通知\"] +2 * > [text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/14333362",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"开启推送通知\"] +2 * > [text=\"取消\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "matchTime": 10000
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-列表广告",
      "desc": "点击右侧x",
      "enable": false,
      "rules": [
        {
          "activityIds": "cn.wps.yun.ui.IndexActivity",
          "fastQuery": true,
          "matches": "[id=\"cn.wps.yun:id/rootGroup\"][childCount=5] >  [id=\"cn.wps.yun:id/moreIconRight\"]",
          "exampleUrls": "https://m.gkd.li/47232102/bc97cb52-aad0-4114-a548-5831edbe342d",
          "snapshotUrls": "https://i.gkd.li/i/13495062"
        }
      ]
    }
  ]
});
