// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.buyanchuantong.buyanshufa",
  "name": "不厌书法",
  "groups": [
    {
      "key": 0,
      "name": "功能类-功能介绍",
      "desc": "点击跳过",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.buyanchuantong.buyanshufa.SplashActivity",
      "rules": [
        {
          "activityIds": ".SplashActivity",
          "matches": "[text^=\"点击跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/13425296",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.buyanchuantong.buyanshufa:id/next_page_imageview\"][text^=\"点击跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/13425296",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "activity",
          "activityIds": "com.buyanchuantong.buyanshufa.SplashActivity"
        }
      ]
    }
  ]
});
