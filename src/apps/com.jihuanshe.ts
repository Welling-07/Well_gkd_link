// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jihuanshe",
  "name": "集换社",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "desc": "点击【跳过】",
      "order": -10,
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/14303879",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "exampleUrls": "https://m.gkd.li/57941037/44193959-0c19-44ff-9549-5e69d2d69013",
          "snapshotUrls": "https://i.gkd.li/i/14303879",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "fastQuery": true
        },
        {
          "matches": "@View <2 FrameLayout <2 FrameLayout < [vid=\"adContainer\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    }
  ]
});
