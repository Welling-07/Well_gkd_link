// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.citiccard.mobilebank",
  "name": "动卡空间",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "activityIds": [
        "com.citiccard.mobilebankapp.WelcomeActivity"
      ],
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[vid=\"btn_skip\"]",
          "snapshotUrls": "https://i.gkd.li/i/12684908",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "activityIds": [
            "com.citiccard.mobilebankapp.WelcomeActivity"
          ]
        },
        {
          "matches": "[vid=\"jump\"]",
          "snapshotUrls": "https://i.gkd.li/i/13049013",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000,
          "activityIds": [
            "com.citiccard.mobilebankapp.WelcomeActivity"
          ]
        },
        {
          "matches": "[id=\"com.citiccard.mobilebank:id/btn_skip\"]",
          "snapshotUrls": "https://i.gkd.li/i/12684908",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0,
          "activityIds": [
            "com.citiccard.mobilebankapp.WelcomeActivity"
          ]
        },
        {
          "matches": "[id=\"com.citiccard.mobilebank:id/jump\"]",
          "snapshotUrls": "https://i.gkd.li/i/13049013",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 2,
          "priorityTime": 10000,
          "activityIds": [
            "com.citiccard.mobilebankapp.WelcomeActivity"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".card.activity.BillDetailHomeActivity",
          "matches": "[vid=\"iv_bill_home_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13049284",
          "fastQuery": true
        },
        {
          "activityIds": "com.citiccard.mobilebank.card.activity.BillDetailHomeActivity",
          "matches": "[id=\"com.citiccard.mobilebank:id/iv_bill_home_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13049284",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "matches": "[vid=\"ll_app_upgrade_content\"] + [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13049283",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        },
        {
          "matches": "[id=\"com.citiccard.mobilebank:id/ll_app_upgrade_content\"] + [id=\"com.citiccard.mobilebank:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13049283",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-广告弹窗",
      "enable": false,
      "activityIds": [
        "com.citiccard.mobilebank.card.activity.BillDetailHomeActivity"
      ],
      "fastQuery": true,
      "rules": [
        {
          "matches": "[id=\"com.citiccard.mobilebank:id/iv_bill_home_cancel\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13049284"
          ],
          "activityIds": [
            "com.citiccard.mobilebank.card.activity.BillDetailHomeActivity"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 4,
      "name": "未分类-通知权限弹窗",
      "enable": false,
      "activityIds": [
        "com.citiccard.mobilebank.card.activity.BillDetailHomeActivity"
      ],
      "fastQuery": true,
      "rules": [
        {
          "matches": "[id=\"com.citiccard.mobilebank:id/ll_app_upgrade_content\"] + [id=\"com.citiccard.mobilebank:id/iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13049283"
          ],
          "activityIds": [
            "com.citiccard.mobilebank.card.activity.BillDetailHomeActivity"
          ],
          "fastQuery": true
        }
      ]
    }
  ]
});
