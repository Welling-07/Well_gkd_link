// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.lcworld.haiwainet",
  "name": "人民日报海外版",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".ui.main.MainActivity",
          "matches": "[vid=\"iv_paper_close\"]",
          "exampleUrls": "https://e.gkd.li/021a457e-6c55-4ec6-b2f2-85b33a93c5b6",
          "snapshotUrls": "https://i.gkd.li/i/17089256"
        }
      ]
    }
  ]
});
