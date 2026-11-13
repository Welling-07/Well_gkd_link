// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.fcbox.hivebox",
  "name": "丰巢管家",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "name": "首页弹窗广告",
          "fastQuery": true,
          "activityIds": ".business.main.MainActivity",
          "matches": "[vid=\"fl_content_container\"] + [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13459000",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "name": "首页弹窗广告 (2)",
          "activityIds": "com.fcbox.hivebox.business.main.MainActivity",
          "fastQuery": true,
          "matches": "[id=\"com.fcbox.hivebox:id/fl_content_container\"] + [id=\"com.fcbox.hivebox:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13459000",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
