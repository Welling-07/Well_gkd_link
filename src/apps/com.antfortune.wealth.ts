// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.antfortune.wealth",
  "name": "蚂蚁财富",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "resetMatch": "app",
      "actionMaximum": 1,
      "matchTime": 10000,
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/12776577",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "@View[clickable=true] <2 [id=\"com.antfortune.wealth:id/welcome_page\"]",
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
