// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.guodongbaohe.app",
  "name": "果冻宝盒",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "activityIds": "com.guodongbaohe.app.activity.AdvertisementTwoActivity",
      "snapshotUrls": "https://i.gkd.li/i/13577877",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.AdvertisementTwoActivity",
          "matches": "LinearLayout[vid=\"close_dialog_lv\"]",
          "snapshotUrls": "https://i.gkd.li/i/13577877",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "LinearLayout[id=\"com.guodongbaohe.app:id/close_dialog_lv\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": "com.guodongbaohe.app.activity.AdvertisementTwoActivity"
        }
      ]
    }
  ]
});
