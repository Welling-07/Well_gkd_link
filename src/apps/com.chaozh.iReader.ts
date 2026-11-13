// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.chaozh.iReader",
  "name": "VIVO 电子书",
  "groups": [
    {
      "key": 0,
      "name": "权限提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT",
          "matches": "Button[text=\"前往开启\"] - Button[text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/13627649",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "Button[text=\"前往开启\"] - Button[text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/13627649",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "excludeActivityIds": "com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT",
      "rules": [
        {
          "activityIds": "com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf",
          "matches": "@ImageView[clickable=true] + TextView[text=\"开启推送通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/13837961",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "excludeActivityIds": "com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT"
        },
        {
          "matches": "@ImageView[clickable=true] +(1,2) TextView[text=\"开启推送通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/13837961",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "excludeActivityIds": "com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT"
        }
      ]
    },
    {
      "key": 2,
      "name": "通知提示",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "activityIds": "com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf",
      "excludeActivityIds": "com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT",
      "rules": [
        {
          "matches": "@ImageView[clickable=true] +(1,2) TextView[text=\"开启推送通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/13837961",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "activityIds": "com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf",
          "excludeActivityIds": "com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT"
        }
      ]
    }
  ]
});
