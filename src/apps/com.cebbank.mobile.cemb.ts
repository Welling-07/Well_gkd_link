// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cebbank.mobile.cemb",
  "name": "光大银行",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "matches": "[vid=\"tv_skip\"]",
          "exampleUrls": "https://e.gkd.li/81f951ce-39b0-4677-93a7-25b5a709b46d",
          "snapshotUrls": "https://i.gkd.li/i/17615867",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "order": -9,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.cebbank.mobile.cemb.view.CustomizedDialog",
      "snapshotUrls": "https://i.gkd.li/i/12727241",
      "rules": [
        {
          "activityIds": ".view.CustomizedDialog",
          "matches": "@[text=\"不再提示\"] +2 [text=\"立即更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/12727241",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[text=\"不再提示\"] +2 [text=\"立即更新\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.cebbank.mobile.cemb.view.CustomizedDialog"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-首页弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": [
        "com.cebbank.mobile.cemb.ui.activity.SplashActivity",
        "com.cebbank.mobile.cemb.ui.activity.HomeActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12727248",
        "https://i.gkd.li/i/13471080"
      ],
      "rules": [
        {
          "activityIds": [
            ".ui.activity.SplashActivity",
            ".ui.activity.HomeActivity"
          ],
          "matches": "[vid=\"home_advertising_iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12727248",
            "https://i.gkd.li/i/13471080"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.cebbank.mobile.cemb:id/home_advertising_iv_close\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.cebbank.mobile.cemb.ui.activity.SplashActivity",
            "com.cebbank.mobile.cemb.ui.activity.HomeActivity"
          ]
        }
      ]
    }
  ]
});
