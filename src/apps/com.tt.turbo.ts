// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tt.turbo",
  "name": "甜糖",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/14292907",
      "matchTime": 10000,
      "rules": [
        {
          "matches": "@[desc=\"取消\"] + [desc=\"更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/14292907",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
