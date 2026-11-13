// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.ccspeed",
  "name": "CC加速器",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-加速页分享抽奖浮窗",
      "activityIds": "cn.ccspeed.app.MainActivity",
      "fastQuery": true,
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "rules": [
        {
          "activityIds": ".app.MainActivity",
          "matches": "@ImageView[visibleToUser=true] + [vid=\"iv_float\"]",
          "snapshotUrls": "https://i.gkd.li/i/13539299",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "FrameLayout[id=\"cn.ccspeed:id/float_layout\"] > ImageView - ImageView",
          "snapshotUrls": "https://i.gkd.li/i/13539299",
          "activityIds": "cn.ccspeed.app.MainActivity",
          "fastQuery": true,
          "matchTime": 10000,
          "resetMatch": "activity",
          "actionMaximum": 1
        }
      ]
    }
  ]
});
