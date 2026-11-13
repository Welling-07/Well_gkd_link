// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "dxwt.questionnaire.ui",
  "name": "10000社区",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": [
        "https://i.gkd.li/i/13255491",
        "https://i.gkd.li/i/13259475"
      ],
      "priorityTime": 10000,
      "fastQuery": true,
      "rules": [
        {
          "matches": "@View[desc^=\"关闭\"][visibleToUser=true] <3 FrameLayout < FrameLayout < FrameLayout < [vid=\"container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13255491",
          "excludeSnapshotUrls": "https://i.gkd.li/i/13259475",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[desc^=\"关闭\"][desc.length<=10][visibleToUser=true]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "fastQuery": true
        }
      ]
    }
  ]
});
