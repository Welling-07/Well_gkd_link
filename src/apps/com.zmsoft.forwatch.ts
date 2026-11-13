// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.zmsoft.forwatch",
  "name": "子腾园",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "name": "字节广告",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.zmapp.fwatch.activity.NativeAdActivity",
          "matches": "[vid=\"ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13545995"
        },
        {
          "name": "字节广告 (2)",
          "activityIds": "com.zmapp.fwatch.activity.NativeAdActivity",
          "fastQuery": true,
          "matches": "@[id=\"com.zmsoft.forwatch:id/ad_close\"] - * >n [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13545995"
        }
      ]
    }
  ]
});
