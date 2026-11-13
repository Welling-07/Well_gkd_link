// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xiangzi.dislikecn",
  "name": "Dislike",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/15196702",
      "rules": [
        {
          "matches": "@View <2 FrameLayout[childCount=3] <2 FrameLayout[childCount=2] < [vid=\"csj_ad_container\"]",
          "matchTime": 10000,
          "resetMatch": "app",
          "actionMaximum": 1,
          "fastQuery": true
        }
      ]
    }
  ]
});
