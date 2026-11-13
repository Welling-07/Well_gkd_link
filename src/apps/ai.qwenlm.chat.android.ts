// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "ai.qwenlm.chat.android",
  "name": "Qwen Studio",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "desc": "x掉",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[desc=\"cancel\"] < @[clickable=true] + [visibleToUser=true][text=\"立即升级 Qwen\"]",
          "snapshotUrls": "https://i.gkd.li/i/34112907",
          "exampleUrls": "https://e.gkd.li/c60a3f3b-15bb-4d2f-95b8-4723d0b9f57e",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
