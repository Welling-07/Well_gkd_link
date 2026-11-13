// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wallstreetcn.news",
  "name": "华尔街见闻",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "matches": "@[vid=\"iv_jump_parent\" || vid=\"iv_jump\"] -2 [text=\"广告\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/94576b14-ad13-4fae-8d49-6b6d1b5096a7",
          "snapshotUrls": [
            "https://i.gkd.li/i/14525329",
            "https://i.gkd.li/i/20430632"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "matches": "[text=\"广告\"] +2 [text^=\"关闭\"]",
          "exampleUrls": "https://m.gkd.li/57941037/40e483a8-61e7-45a0-ac44-df1f472e2863",
          "snapshotUrls": "https://i.gkd.li/i/14525329",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "activityIds": [
        "com.wallstreetcn.news.ProxyMainActivity"
      ],
      "fastQuery": true,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ProxyMainActivity",
          "matches": "[text=\"广告\" || text=\"活动\"] + [vid=\"close\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13262717"
        },
        {
          "matches": "[text=\"广告\" || text=\"活动\"] + [id=\"com.wallstreetcn.news:id/close\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13262717",
          "activityIds": [
            "com.wallstreetcn.news.ProxyMainActivity"
          ],
          "fastQuery": true
        }
      ]
    }
  ]
});
