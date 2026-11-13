// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cmccwm.mobilemusic",
  "name": "咪咕音乐",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "action": "back",
          "activityIds": ".ui.base.MainActivity",
          "matches": "[text=\"发现新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/13448898",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "action": "back",
          "matches": "[id=\"cmccwm.mobilemusic.libraries_feature:id/tv_title\"][text=\"发现新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/13448898",
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
      "activityIds": "cmccwm.mobilemusic.ui.base.MainActivity",
      "rules": [
        {
          "action": "back",
          "matches": "[id=\"cmccwm.mobilemusic.libraries_feature:id/tv_title\"][text=\"发现新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/13448898",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "cmccwm.mobilemusic.ui.base.MainActivity"
        }
      ]
    }
  ]
});
