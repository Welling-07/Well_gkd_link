// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.overlook.android.fing",
  "name": "Fing",
  "groups": [
    {
      "key": 0,
      "name": "其他-教程弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ui.main.SplashActivity",
          "matches": "[text=\"關閉\"]",
          "snapshotUrls": "https://i.gkd.li/i/15521827",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-教程弹窗",
      "enable": false,
      "fastQuery": true,
      "actionMaximum": 1,
      "matchTime": 10000,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/15521827",
      "rules": [
        {
          "matches": "[text=\"關閉\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "matchTime": 10000,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
