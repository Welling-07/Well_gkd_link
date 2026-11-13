// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.baseus.intelligent",
  "name": "倍思",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-定位请求",
      "desc": "点击取消-点击取消",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": ".view.home.MainActivity",
      "rules": [
        {
          "matches": "@[text=\"取消\"] + [text=\"前往设置\"]",
          "snapshotUrls": "https://i.gkd.li/i/13827653",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".view.home.MainActivity"
        },
        {
          "preKeys": 0,
          "matches": "@[text=\"取消\"] + [text=\"授权\"]",
          "snapshotUrls": "https://i.gkd.li/i/13827986",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".view.home.MainActivity"
        },
        {
          "matches": "@[text=\"取消\"] + [text=\"前往设置\"]",
          "snapshotUrls": "https://i.gkd.li/i/13827653",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.baseus.intelligent.view.home.MainActivity"
        },
        {
          "preKeys": 2,
          "matches": "@[text=\"取消\"] + [text=\"授权\"]",
          "snapshotUrls": "https://i.gkd.li/i/13827986",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.baseus.intelligent.view.home.MainActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-定位权限",
      "desc": "点击取消-点击取消",
      "enable": false,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.baseus.intelligent.view.home.MainActivity",
          "matches": "@[text=\"取消\"] + [text=\"前往设置\"]",
          "snapshotUrls": "https://i.gkd.li/i/13827653"
        },
        {
          "preKeys": 0,
          "fastQuery": true,
          "activityIds": "com.baseus.intelligent.view.home.MainActivity",
          "matches": "@[text=\"取消\"] + [text=\"授权\"]",
          "snapshotUrls": "https://i.gkd.li/i/13827986"
        }
      ]
    }
  ]
});
