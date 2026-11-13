// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ecitic.bank.mobile",
  "name": "中信银行",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": [
        "https://i.gkd.li/i/12701217",
        "https://i.gkd.li/i/12701250"
      ],
      "rules": [
        {
          "activityIds": ".ui.MainActivity",
          "matches": "@[text=\"暂不更新\"] + [text=\"立即更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/12701217",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[text=\"暂不更新\"] + [text=\"立即更新\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "activityIds": [
        "com.ecitic.bank.mobile.ui.MainActivity",
        "com.ecitic.bank.mobile.ui.webview.CordovaWebViewActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/13402746",
        "https://i.gkd.li/i/12701230"
      ],
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".ui.MainActivity",
            ".ui.webview.CordovaWebViewActivity"
          ],
          "matches": "[vid=\"close_product_send\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12701230",
            "https://i.gkd.li/i/13402746"
          ]
        },
        {
          "matches": "[id=\"com.ecitic.bank.mobile:id/id_cordova_view\"] + [id=\"com.ecitic.bank.mobile:id/close_product_send\"]",
          "activityIds": [
            "com.ecitic.bank.mobile.ui.MainActivity",
            "com.ecitic.bank.mobile.ui.webview.CordovaWebViewActivity"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13399102",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".ui.MainActivity",
          "matches": "@[text=\"取消\"] + [text=\"立即开启\"]",
          "snapshotUrls": "https://i.gkd.li/i/13399102",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[text=\"取消\"] + [text=\"立即开启\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 3,
      "name": "局部广告-理财产品悬浮广告",
      "activityIds": "com.ecitic.bank.mobile.ui.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/14208637",
      "rules": [
        {
          "activityIds": ".ui.MainActivity",
          "matches": "@[clickable=true] +2 [visibleToUser=true][text=\"恭喜您关注到宝藏基金\"] <<n [vid=\"cordova_view\"]",
          "snapshotUrls": "https://i.gkd.li/i/14208637"
        },
        {
          "matches": "@[clickable=true] +2 [text=\"恭喜您关注到宝藏基金\"]",
          "activityIds": "com.ecitic.bank.mobile.ui.MainActivity"
        }
      ]
    },
    {
      "key": 4,
      "name": "未分类-请求开通知权限弹窗",
      "enable": false,
      "activityIds": "com.ecitic.bank.mobile.ui.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13399102",
      "rules": [
        {
          "matches": "@[text=\"取消\"] + [text=\"立即开启\"]",
          "activityIds": "com.ecitic.bank.mobile.ui.MainActivity"
        }
      ]
    }
  ]
});
