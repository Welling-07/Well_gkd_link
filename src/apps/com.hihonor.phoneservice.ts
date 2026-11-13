// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hihonor.phoneservice",
  "name": "我的荣耀",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".main.MainActivity",
          "matches": "[vid=\"ads_cancel\"]",
          "exampleUrls": "https://e.gkd.li/539acb69-5c9c-4c4b-9757-d189b6852f89",
          "snapshotUrls": "https://i.gkd.li/i/16476928",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "activityIds": "com.hihonor.phoneservice.main.MainActivity",
          "matches": "[vid=\"ads_cancel\"]",
          "exampleUrls": "https://e.gkd.li/539acb69-5c9c-4c4b-9757-d189b6852f89",
          "snapshotUrls": "https://i.gkd.li/i/16476928",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-定位权限",
      "activityIds": "com.hihonor.phoneservice.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12783134",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".main.MainActivity",
          "matches": "[text^=\"开启定位权限\"] + [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12783134",
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text^=\"开启定位权限\"] + [id=\"com.hihonor.phoneservice:id/iv_close\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.hihonor.phoneservice.main.MainActivity"
        }
      ]
    }
  ]
});
