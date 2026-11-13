// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.miui.virtualsim",
  "name": "全球上网",
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
          "activityIds": "com.mobile.businesshall.ui.common.RecommendPopupActivity",
          "matches": "[vid=\"img_close_btn\"]",
          "exampleUrls": "https://m.gkd.li/57941037/76a7cf39-06f1-4e1b-9bb6-fd8b1ad25e8e",
          "snapshotUrls": "https://i.gkd.li/i/15981731",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-广告弹窗",
      "enable": false,
      "activityIds": "com.mobile.businesshall.ui.common.RecommendPopupActivity",
      "snapshotUrls": "https://i.gkd.li/i/13238467",
      "rules": [
        {
          "matches": "[id=\"com.miui.virtualsim:id/img_close_btn\"]",
          "activityIds": "com.mobile.businesshall.ui.common.RecommendPopupActivity"
        }
      ]
    }
  ]
});
