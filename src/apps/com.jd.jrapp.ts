// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jd.jrapp",
  "name": "京东金融",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "rules": [
        {
          "activityIds": ".bm.mainbox.main.MainActivity",
          "matches": "TextView[text^=\"打开通知\"] +2 [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13249998",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": ".bm.common.web.ui.WebActivity",
          "matches": "@View - * > [visibleToUser=true][text=\"开启并订阅通知\"] <<n [vid=\"webview\"]",
          "snapshotUrls": "https://i.gkd.li/i/13255656",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0
        },
        {
          "matches": "TextView[text^=\"打开通知\"] +2 [id=\"com.jd.jrapp:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13249998",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0
        },
        {
          "matches": "@View - * > [visibleToUser=true][text=\"开启并订阅通知\"] <<n [id=\"com.jd.jrapp:id/webview\"]",
          "snapshotUrls": "https://i.gkd.li/i/13255656",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 2
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13628364",
      "rules": [
        {
          "activityIds": ".bm.mainbox.main.MainActivity",
          "matches": "@ImageButton[vid=\"ib_close\"] + RelativeLayout [text^=\"发现新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/13628364",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@ImageButton[id=\"com.jd.jrapp:id/ib_close\"] + RelativeLayout [text^=\"发现新版本\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "评价提示-满意度打分弹窗",
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13804561",
      "fastQuery": true,
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": ".dy.api.JRDynamicPickerActivity",
          "matches": "@ImageView[clickable=true] - [text$=\"满意度打几分？\"]",
          "snapshotUrls": "https://i.gkd.li/i/13804561",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@ImageView[clickable=true] - [text$=\"满意度打几分？\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text*=\"满意度打几分\"] + ImageView",
          "actionMaximum": 1,
          "resetMatch": "activity",
          "fastQuery": true,
          "matchTime": 10000
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-通知提醒",
      "enable": false,
      "fastQuery": true,
      "actionMaximum": 1,
      "activityIds": [
        "com.jd.jrapp.bm.mainbox.main.MainActivity",
        "com.jd.jrapp.bm.common.web.ui.WebActivity"
      ],
      "rules": [
        {
          "activityIds": "com.jd.jrapp.bm.mainbox.main.MainActivity",
          "matches": "TextView[text^=\"打开通知\"] +2 [id=\"com.jd.jrapp:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13249998",
          "fastQuery": true,
          "actionMaximum": 1
        },
        {
          "activityIds": "com.jd.jrapp.bm.common.web.ui.WebActivity",
          "matches": "View[text=\"开启并订阅通知\"] < View + View[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13255656",
          "fastQuery": true,
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 4,
      "name": "未分类-版本更新",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.jd.jrapp.bm.mainbox.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13628364",
      "rules": [
        {
          "matches": "@ImageButton[id=\"com.jd.jrapp:id/ib_close\"] + RelativeLayout [text^=\"发现新版本\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.jd.jrapp.bm.mainbox.main.MainActivity"
        }
      ]
    }
  ]
});
