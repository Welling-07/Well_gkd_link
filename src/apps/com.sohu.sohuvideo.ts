// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sohu.sohuvideo",
  "name": "搜狐视频",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13435504",
      "rules": [
        {
          "activityIds": ".ui.homepage.MainActivity",
          "matches": "@[vid=\"ivClose\"] + LinearLayout [text=\"新版本上线啦\"]",
          "snapshotUrls": "https://i.gkd.li/i/13435504",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[id=\"com.sohu.sohuvideo:id/ivClose\"] + LinearLayout [text=\"新版本上线啦\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "青少年模式",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13448876",
      "rules": [
        {
          "matches": "@[id=\"com.sohu.sohuvideo:id/tv_ok\"] -2 LinearLayout > [text=\"设置青少年模式\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "未分类-版本更新",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.sohu.sohuvideo.ui.homepage.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13435504",
      "rules": [
        {
          "matches": "@[id=\"com.sohu.sohuvideo:id/ivClose\"] + LinearLayout [text=\"新版本上线啦\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.sohu.sohuvideo.ui.homepage.MainActivity"
        }
      ]
    }
  ]
});
