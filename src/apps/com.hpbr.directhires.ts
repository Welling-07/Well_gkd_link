// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hpbr.directhires",
  "name": "店长直聘",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[id=\"com.hpbr.directhires:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13774242",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
