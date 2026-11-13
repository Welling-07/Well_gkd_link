// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hlg.daydaytobusiness",
  "name": "稿定设计",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "snapshotUrls": "https://i.gkd.li/i/13766557",
      "rules": [
        {
          "matches": "[text=\"现在升级\"] - TextView[text=\"以后再说\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "resetMatch": "app",
          "actionMaximum": 1
        }
      ]
    }
  ]
});
