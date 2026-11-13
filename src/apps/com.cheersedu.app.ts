// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cheersedu.app",
  "name": "湛庐阅读",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13315712",
      "rules": [
        {
          "activityIds": ".main.MainActivity",
          "matches": "[vid=\"iv_version_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13315712",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.cheersedu.app:id/iv_version_close\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-版本更新",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.cheersedu.app.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13315712",
      "rules": [
        {
          "matches": "[id=\"com.cheersedu.app:id/iv_version_close\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.cheersedu.app.main.MainActivity"
        }
      ]
    }
  ]
});
