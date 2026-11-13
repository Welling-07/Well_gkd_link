// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ky.medical.reference",
  "name": "用药参考",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12918049",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[vid=\"btn_go\"][text^=\"关闭\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[id=\"com.ky.medical.reference:id/btn_go\"][text^=\"关闭\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "activityIds": "com.ky.medical.reference.promotion.AdDialogActivity",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".promotion.AdDialogActivity",
          "matches": "[vid=\"icClose\"]",
          "snapshotUrls": "https://i.gkd.li/i/12840924",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.ky.medical.reference:id/icClose\"]",
          "snapshotUrls": "https://i.gkd.li/i/12840924",
          "activityIds": "com.ky.medical.reference.promotion.AdDialogActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
