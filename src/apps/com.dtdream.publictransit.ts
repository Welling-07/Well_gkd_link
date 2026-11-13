// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.dtdream.publictransit",
  "name": "杭州公共交通",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "activityIds": "com.dtchuxing.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12830113",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.dtchuxing.main.MainActivity",
          "matches": "[vid=\"ifv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12830113",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.dtdream.publictransit:id/ifv_close\"]",
          "activityIds": "com.dtchuxing.main.MainActivity",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-广告弹窗",
      "enable": false,
      "activityIds": "com.dtchuxing.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12830113",
      "rules": [
        {
          "matches": "[id=\"com.dtdream.publictransit:id/ifv_close\"]",
          "activityIds": "com.dtchuxing.main.MainActivity"
        }
      ]
    }
  ]
});
