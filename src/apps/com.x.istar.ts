// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.x.istar",
  "name": "观星",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "activityIds": "com.x.istar.view.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13974606",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".view.main.MainActivity",
          "matches": "[text=\"关闭广告\"][vid=\"btn_negative\"]",
          "snapshotUrls": "https://i.gkd.li/i/13974606",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"关闭广告\"][vid=\"btn_negative\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "resetMatch": "app",
          "actionMaximum": 1,
          "activityIds": "com.x.istar.view.main.MainActivity"
        }
      ]
    }
  ]
});
