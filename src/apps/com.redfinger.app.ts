// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.redfinger.app",
  "name": "红手指云手机",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13761821",
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": ".activity.MainActivity",
          "matches": "[vid=\"btn_update\"] + [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13761821",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        },
        {
          "matches": "[id=\"com.redfinger.app:id/btn_update\"] + [id=\"com.redfinger.app:id/iv_close\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.MainActivity",
          "matches": "[vid=\"rl_screen_ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13761825",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.redfinger.app.activity.MainActivity",
          "fastQuery": true,
          "matches": "[id=\"com.redfinger.app:id/rl_screen_ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13761825",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
