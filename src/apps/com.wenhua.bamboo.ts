// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wenhua.bamboo",
  "name": "随身行",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-通知权限",
      "desc": "点击稍后再说",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".screen.activity.MarketOptionActivity",
          "matches": "@Button[text=\"稍后再说\"] +2 Button[text=\"马上开启\"]",
          "snapshotUrls": "https://i.gkd.li/i/13407555",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@Button[text=\"稍后再说\"] +2 Button[text=\"马上开启\"]",
          "snapshotUrls": "https://i.gkd.li/i/13407555",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-通知弹窗",
      "desc": "点击稍后再说",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.wenhua.bamboo.screen.activity.MarketOptionActivity",
          "matches": "@Button[text=\"稍后再说\"] +2 Button[text=\"马上开启\"]",
          "snapshotUrls": "https://i.gkd.li/i/13407555",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
