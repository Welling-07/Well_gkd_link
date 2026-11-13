// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.unionpay",
  "name": "云闪付",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-支付完成界面卡片广告",
      "fastQuery": true,
      "activityIds": ".activity.react.UPActivityReactNative",
      "rules": [
        {
          "matches": "[id=\"bannerBox\"] > @View[clickable=true] > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13070564",
          "fastQuery": true,
          "activityIds": ".activity.react.UPActivityReactNative"
        },
        {
          "preKeys": 0,
          "matches": "[text=\"关闭广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13070974",
          "fastQuery": true,
          "activityIds": ".activity.react.UPActivityReactNative"
        },
        {
          "matches": "[id=\"bannerBox\"] > @View[clickable=true] > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13070564",
          "fastQuery": true,
          "activityIds": "com.unionpay.activity.react.UPActivityReactNative"
        },
        {
          "preKeys": 2,
          "matches": "[text=\"关闭广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13070974",
          "fastQuery": true,
          "activityIds": "com.unionpay.activity.react.UPActivityReactNative"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-右侧悬浮广告",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.UPActivityMain",
          "matches": "[vid=\"frog_float\"] >2 [vid=\"close_view\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14586427",
            "https://i.gkd.li/i/31259720"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/0f4f6a7f-55ce-4f87-a4cb-97e9c7107359",
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "position": {
            "left": "width * 0.8893",
            "top": "width * 0.4607"
          },
          "activityIds": "com.unionpay.activity.UPActivityMain",
          "matches": "@[vid=\"frog_float\"][visibleToUser=true] >2 [vid=\"close_view\"]",
          "exampleUrls": "https://m.gkd.li/57941037/0f4f6a7f-55ce-4f87-a4cb-97e9c7107359",
          "snapshotUrls": "https://i.gkd.li/i/14586427",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-定位权限",
      "desc": "自动点击\"不允许\"",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": ".activity.UPActivityMain",
          "matches": "@[clickable=true] > [vid=\"locate_iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13634882",
            "https://i.gkd.li/i/31263858"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": [
            ".activity.UPActivityMain",
            ".base.UPDialog"
          ],
          "matches": [
            "[text*=\"访问您的位置信息\"]",
            "[text=\"不允许\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12695773",
            "https://i.gkd.li/i/14209001"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.unionpay:id/view_locate_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13634882",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": [
            "[text*=\"访问您的位置信息\"]",
            "[text=\"不允许\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12695773",
            "https://i.gkd.li/i/14209001"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text*=\"访问您的位置信息\"] < * +n * > [text=\"不允许\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12695773",
            "https://i.gkd.li/i/14209001"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 10000
        }
      ]
    },
    {
      "key": 3,
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "fastQuery": true,
      "activityIds": [
        "com.unionpay.base.UPDialog"
      ],
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".base.UPDialog",
          "matches": "[text=\"开启消息通知\"] < * + [vid=\"view_alert_cancel\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/12695736",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"开启消息通知\"] < * + [id=\"com.unionpay:id/view_alert_cancel\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/12695736",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.unionpay.base.UPDialog"
          ]
        }
      ]
    },
    {
      "key": 4,
      "name": "全屏广告-天天签到-获得新勋章提示",
      "desc": "点击左上角返回",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".cordova.UPActivityCordovaWeb",
          "matches": "WebView[text=\"天天签到\"] TextView[text=\"炫耀一下\"] + TextView[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13440341",
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.unionpay.cordova.UPActivityCordovaWeb",
          "matches": "WebView[text=\"天天签到\"] TextView[text=\"炫耀一下\"] + TextView[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13440341",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 5,
      "name": "全屏广告-领取优惠弹窗",
      "desc": "点击关闭",
      "fastQuery": true,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".cordova.UPActivityCordovaWeb",
          "matches": "@View[clickable=true][text=\"关闭按钮\"] <<n [vid=\"view_content_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13848688"
        },
        {
          "activityIds": "com.unionpay.cordova.UPActivityCordovaWeb",
          "matches": "[id=\"com.unionpay:id/view_content_container\"] View[text=\"关闭按钮\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13848688",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 6,
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "matches": "@[text=\"稍候再说\"] + [text=\"立即更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/12727278",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 7,
      "name": "全屏广告-我的页面-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "activityIds": "com.unionpay.activity.UPActivityMain",
      "snapshotUrls": "https://i.gkd.li/i/13440341",
      "rules": [
        {
          "matches": "[id=\"com.unionpay:id/container\"] + [id=\"com.unionpay:id/image\"][clickable=true]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "activityIds": "com.unionpay.activity.UPActivityMain"
        }
      ]
    },
    {
      "key": 8,
      "name": "未分类-支付完成界面广告卡片",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.unionpay.activity.react.UPActivityReactNative",
      "rules": [
        {
          "matches": "[id=\"bannerBox\"] > @View[clickable=true] > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13070564",
          "fastQuery": true,
          "activityIds": "com.unionpay.activity.react.UPActivityReactNative"
        },
        {
          "preKeys": 0,
          "matches": "[text=\"关闭广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13070974",
          "fastQuery": true,
          "activityIds": "com.unionpay.activity.react.UPActivityReactNative"
        }
      ]
    }
  ]
});
