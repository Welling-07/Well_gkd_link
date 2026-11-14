// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.eastmoney.android.fund",
  "name": "天天基金",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-自选页面广告",
      "activityIds": "com.eastmoney.android.fund.centralis.activity.FundRootActivity",
      "snapshotUrls": "https://i.gkd.li/i/12642387",
      "rules": [
        {
          "activityIds": ".centralis.activity.FundRootActivity",
          "matches": "FrameLayout > FrameLayout > ImageView + FrameLayout[childCount=1] > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/12642387"
        },
        {
          "matches": "FrameLayout > FrameLayout > ImageView + FrameLayout[childCount=1] > ImageView",
          "activityIds": "com.eastmoney.android.fund.centralis.activity.FundRootActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "其他-自选页面缩写提示信息",
      "rules": [
        {
          "activityIds": ".centralis.activity.FundRootActivity",
          "matches": "[desc=\"表示场内基金的最新价和折价率\"] -(2) FrameLayout < FrameLayout + ImageView",
          "snapshotUrls": "https://i.gkd.li/i/12642387"
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示",
      "order": -9,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13546927",
      "matchTime": 10000,
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".centralis.activity.FundRootActivity",
          "matches": "@FrameLayout[clickable=true] - * >2 [desc=\"立即升级\"] <<n [vid=\"container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13546927",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@FrameLayout[clickable=true] - * >2 [desc=\"立即升级\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".centralis.activity.FundRootActivity",
            ".activity.FundSplashActivity"
          ],
          "matches": "ImageView[childCount=0] < @FrameLayout[clickable=true][childCount=1] <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < [vid=\"container\"]",
          "exampleUrls": "https://m.gkd.li/57941037/21743bbb-010a-410c-8ce1-57710d37722d",
          "snapshotUrls": [
            "https://i.gkd.li/i/14149452",
            "https://i.gkd.li/i/14332091"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": [
            "com.eastmoney.android.fund.centralis.activity.FundRootActivity",
            "com.eastmoney.android.fund.activity.FundSplashActivity"
          ],
          "matches": "@ImageView[visibleToUser=true] < FrameLayout - ImageView < FrameLayout <<n [vid=\"container\"]",
          "exampleUrls": "https://m.gkd.li/57941037/21743bbb-010a-410c-8ce1-57710d37722d",
          "snapshotUrls": [
            "https://i.gkd.li/i/14149452",
            "https://i.gkd.li/i/14332091"
          ]
        }
      ]
    },
    {
      "key": 4,
      "name": "评价提示-好评弹窗",
      "desc": "点击下次再说",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".centralis.activity.FundRootActivity",
          "matches": "@[desc=\"下次再说\"] <<n [vid=\"container\"]",
          "exampleUrls": "https://m.gkd.li/57941037/d791a2f9-ae86-4389-8ee7-36a87f11b60d",
          "snapshotUrls": "https://i.gkd.li/i/14179508",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.eastmoney.android.fund:id/container\"] [desc=\"下次再说\"]",
          "exampleUrls": "https://m.gkd.li/57941037/d791a2f9-ae86-4389-8ee7-36a87f11b60d",
          "snapshotUrls": "https://i.gkd.li/i/14179508",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 6,
      "name": "评价提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/14179501",
      "rules": [
        {
          "matches": "[desc=\"五星好评\"] - [desc=\"下次再说\"]",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 7,
      "name": "全屏广告-广告弹窗",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.eastmoney.android.fund.centralis.activity.FundRootActivity",
      "rules": [
        {
          "matches": "@ImageView[visibleToUser=true] < FrameLayout <2 FrameLayout[childCount=2] <<n [id=\"com.eastmoney.android.fund:id/container\"]",
          "exampleUrls": "https://m.gkd.li/57941037/21743bbb-010a-410c-8ce1-57710d37722d",
          "snapshotUrls": "https://i.gkd.li/i/14149452",
          "fastQuery": true,
          "activityIds": "com.eastmoney.android.fund.centralis.activity.FundRootActivity"
        }
      ]
    }
  ]
});
