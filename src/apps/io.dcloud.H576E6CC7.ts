// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "io.dcloud.H576E6CC7",
  "name": "鱼泡网",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.yupao.entry.MainActivity",
          "matches": "[vid=\"ad_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/42273686-b44a-4964-80a5-84b55e6ad75c",
          "snapshotUrls": "https://i.gkd.li/i/14731764"
        },
        {
          "activityIds": "com.yupao.entry.MainActivity",
          "matches": "[text=\"广告\"] <2 View +3 View > TextView[clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/123997dd-4783-4aac-a787-e02daccd43da",
          "snapshotUrls": "https://i.gkd.li/i/14732000"
        },
        {
          "fastQuery": true,
          "activityIds": "com.yupao.entry.MainActivity",
          "matches": "ImageView < @FrameLayout <3 FrameLayout <2 FrameLayout - FrameLayout >2 [text=\"摇动或点击了解更多\"]",
          "exampleUrls": "https://m.gkd.li/57941037/c79e700b-74ef-40bf-93e5-222d5e2a8a26",
          "snapshotUrls": "https://i.gkd.li/i/14743452"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "matchTime": 10000,
          "activityIds": "com.yupao.entry.MainActivity",
          "matches": "@[vid=\"close\"][visibleToUser=true] - [vid=\"flItemContent\"]",
          "exampleUrls": "https://m.gkd.li/57941037/42273686-b44a-4964-80a5-84b55e6ad75c",
          "snapshotUrls": "https://i.gkd.li/i/14731764"
        },
        {
          "fastQuery": true,
          "activityIds": "com.yupao.entry.MainActivity",
          "matches": "[vid=\"close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/42273686-b44a-4964-80a5-84b55e6ad75c",
          "snapshotUrls": "https://i.gkd.li/i/14731764"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-右侧浮窗广告",
      "enable": false,
      "resetMatch": "app",
      "fastQuery": true,
      "activityIds": "com.yupao.entry.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/14731762",
      "rules": [
        {
          "matches": "[vid=\"close\"]",
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": "com.yupao.entry.MainActivity"
        }
      ]
    }
  ]
});
