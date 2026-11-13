// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.maertsno.m",
  "name": "OnStream",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告",
      "fastQuery": true,
      "activityIds": "co.notix.interstitial.InterstitialActivity",
      "snapshotUrls": "https://i.gkd.li/i/13842558",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "co.notix.interstitial.InterstitialActivity",
          "matches": "[vid=\"tv_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/13842558"
        }
      ]
    }
  ]
});
