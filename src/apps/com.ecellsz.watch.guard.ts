// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ecellsz.watch.guard",
  "name": "乐康守护",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/14039510",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "fastQuery": true
        },
        {
          "matches": "View[clickable=true] <<n [vid=\"splash_container\"]",
          "matchTime": 10000,
          "resetMatch": "app",
          "actionMaximum": 1,
          "fastQuery": true,
          "priorityTime": 10000
        }
      ]
    }
  ]
});
