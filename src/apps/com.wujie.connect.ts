// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wujie.connect",
  "name": "无界趣连",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/14296122",
      "fastQuery": true,
      "matchTime": 10000,
      "rules": [
        {
          "matches": "[vid=\"no_update_tv\"]",
          "snapshotUrls": "https://i.gkd.li/i/14296122",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
