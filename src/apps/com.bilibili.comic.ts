// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.bilibili.comic",
  "name": "哔哩哔哩漫画",
  "groups": [
    {
      "key": 0,
      "name": "青少年模式",
      "enable": false,
      "fastQuery": true,
      "matchTime": 15000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": [
        "https://i.gkd.li/i/13063676",
        "https://i.gkd.li/i/13262801"
      ],
      "rules": [
        {
          "matches": "[id=\"com.bilibili.comic:id/tv_know\"]",
          "fastQuery": true,
          "matchTime": 15000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
