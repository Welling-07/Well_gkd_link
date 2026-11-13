// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.yfoo.listen",
  "name": "聆听音乐",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "x.activity.HomeActivity",
          "matches": "@[text=\"取消\"] < * > [text=\"下载\"]",
          "snapshotUrls": "https://i.gkd.li/i/15856014",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "activityIds": "com.yfoo.listenx.activity.HomeActivity",
          "matches": "@[text=\"取消\"] < * > [text=\"下载\"]",
          "snapshotUrls": "https://i.gkd.li/i/15856014",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
