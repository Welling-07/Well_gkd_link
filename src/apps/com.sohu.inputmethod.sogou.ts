// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sohu.inputmethod.sogou",
  "name": "搜狗输入法",
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
          "matches": "@[clickable=true] > [text=\"跳过\"][text.length<10][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/d310d2a0-4795-421d-82da-f3855fb7288b",
          "snapshotUrls": "https://i.gkd.li/i/20138053",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "matches": "@[clickable=true][text^=\"跳过\"] - [text=\"广告\"][text.length<10][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/aa7e78f0-0cfe-490d-8d41-f3e41b906610",
          "snapshotUrls": "https://i.gkd.li/i/25897923",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    }
  ]
});
