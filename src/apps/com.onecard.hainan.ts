// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.onecard.hainan",
  "name": "海南一卡通",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "@[text=\"暂不更新\"] +(2) [text=\"立即更新\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12662114",
            "https://i.gkd.li/i/12662136"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
