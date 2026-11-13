// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.netease.mkey",
  "name": "网易将军令",
  "groups": [
    {
      "key": 0,
      "name": "其他-一键迁移至新版将军令",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.NtSecActivity",
          "matches": "[vid=\"tv_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13421302",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-一键迁移至新版将军令",
      "enable": false,
      "matchTime": 10000,
      "fastQuery": true,
      "activityIds": "com.netease.mkey.activity.NtSecActivity",
      "snapshotUrls": "https://i.gkd.li/i/13421302",
      "rules": [
        {
          "matches": "[id=\"com.netease.mkey:id/tv_cancel\"]",
          "matchTime": 10000,
          "fastQuery": true,
          "activityIds": "com.netease.mkey.activity.NtSecActivity"
        }
      ]
    }
  ]
});
