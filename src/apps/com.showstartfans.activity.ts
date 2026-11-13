// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.showstartfans.activity",
  "name": "秀动",
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
          "activityIds": ".activitys.maintab.newmain.MainNewActivity",
          "matches": "[vid=\"img_close_coupon\"]",
          "snapshotUrls": "https://i.gkd.li/i/13670432",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.showstartfans.activity.activitys.maintab.newmain.MainNewActivity",
          "fastQuery": true,
          "matches": "[id=\"com.showstartfans.activity:id/img_close_coupon\"]",
          "snapshotUrls": "https://i.gkd.li/i/13670432",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
