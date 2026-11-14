// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.manmanbuy.bijia",
  "name": "慢慢买",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[text^=\"关闭\"][text.length=4]",
          "snapshotUrls": "https://i.gkd.li/i/13214974",
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
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@[clickable=true] >2 TextView[text=\"\"]",
          "snapshotUrls": "https://i.gkd.li/i/28312474"
        }
      ]
    }
  ]
});
