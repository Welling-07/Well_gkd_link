// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "tw.com.icash.a.icashpay",
  "name": "icash Pay",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "tw.com.icash.icashpay.framework.home.HomeNavigationActivity",
          "matches": "[vid=\"img_activity_ad_close\"]",
          "exampleUrls": "https://e.gkd.li/8fefb936-558b-44d2-a6e0-457f7e59772d",
          "snapshotUrls": "https://i.gkd.li/i/17640327",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
