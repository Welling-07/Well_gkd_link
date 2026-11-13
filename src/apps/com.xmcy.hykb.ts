// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xmcy.hykb",
  "name": "好游快爆",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "fastQuery": true,
      "activityIds": "com.xmcy.hykb.app.dialog.UpdateDialog",
      "snapshotUrls": [
        "https://i.gkd.li/i/12870604",
        "https://i.gkd.li/i/13297450"
      ],
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".app.dialog.UpdateDialog",
          "matches": "@[vid=\"iv_inner_button_close\"] - RelativeLayout >n [vid=\"text_update_tip\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12870604",
            "https://i.gkd.li/i/13297450"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[id=\"com.xmcy.hykb:id/iv_inner_button_close\"] - RelativeLayout >n [id=\"com.xmcy.hykb:id/text_update_tip\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": "com.xmcy.hykb.app.dialog.UpdateDialog"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "activityIds": "com.xmcy.hykb.app.ui.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13259427",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".app.ui.main.MainActivity",
          "matches": "[vid=\"dialog_home_notice_image_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13259427",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.xmcy.hykb:id/dialog_home_notice_image_close\"]",
          "fastQuery": true,
          "activityIds": "com.xmcy.hykb.app.ui.main.MainActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "未分类-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.xmcy.hykb.app.ui.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13259427",
      "rules": [
        {
          "matches": "[id=\"com.xmcy.hykb:id/dialog_home_notice_image_close\"]",
          "fastQuery": true,
          "activityIds": "com.xmcy.hykb.app.ui.main.MainActivity"
        }
      ]
    }
  ]
});
