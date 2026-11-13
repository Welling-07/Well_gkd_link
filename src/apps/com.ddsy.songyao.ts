// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ddsy.songyao",
  "name": "叮当快药",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-优惠卷提示",
      "fastQuery": true,
      "activityIds": "com.ddsy.songyao.activity.SplashActivity",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.SplashActivity",
          "matches": "[vid=\"iv_coupon_bottom\"] + [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13048720",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.ddsy.songyao:id/iv_coupon_bottom\"] + [id=\"com.ddsy.songyao:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13048720",
          "fastQuery": true,
          "activityIds": "com.ddsy.songyao.activity.SplashActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
