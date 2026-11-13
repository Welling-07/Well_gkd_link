// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.fan.app",
  "name": "十六番旅行",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-卡片广告",
      "fastQuery": true,
      "activityIds": "com.mvvm.view.LazyMapStrategyActivity_TengXun",
      "rules": [
        {
          "matches": "@View[clickable=true][childCount=0] < FrameLayout[desc^=\"dislike\"] + FrameLayout >2 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13258021",
          "fastQuery": true,
          "activityIds": "com.mvvm.view.LazyMapStrategyActivity_TengXun"
        },
        {
          "preKeys": 0,
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13258015",
          "fastQuery": true,
          "activityIds": "com.mvvm.view.LazyMapStrategyActivity_TengXun"
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "desc": "点击[以后再说]",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13601734",
      "rules": [
        {
          "activityIds": "com.mvc.activity.HomepageActivity2",
          "matches": "[vid=\"tv_nj_later\"]",
          "snapshotUrls": "https://i.gkd.li/i/13601734",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.fan.app:id/tv_nj_later\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "开屏广告",
      "order": -10,
      "actionMaximum": 1,
      "resetMatch": "app",
      "matchTime": 10000,
      "actionMaximumKey": 0,
      "actionCdKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "exampleUrls": "https://m.gkd.li/57941037/470c6262-62ca-45c5-908c-8435d7b0e86f",
          "snapshotUrls": [
            "https://i.gkd.li/i/14596657",
            "https://i.gkd.li/i/13258011"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 10000,
          "actionMaximumKey": 0,
          "actionCdKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "[childCount=0][visibleToUser=true][(text.length<10 && (text*=\"跳过\" || text*=\"跳過\" || text*=\"skip\" || text*=\"Skip\")) || id$=\"tt_splash_skip_btn\" || vid*=\"skip\" || vid*=\"Skip\" || desc*=\"跳过\" || desc*=\"skip\" || (vid*=\"count\" && vid*=\"down\" && vid!*=\"countdown\" && vid!*=\"load\" && vid!*=\"add\" && vid!*=\"ead\" && vid!*=\"time\")]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 10000,
          "actionMaximumKey": 1,
          "actionCdKey": 1,
          "priorityTime": 10000
        },
        {
          "matches": "[vid=\"LinearLayoutSplAd\"] >4 View[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/14548642",
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 10000,
          "actionMaximumKey": 1,
          "actionCdKey": 1,
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 3,
      "name": "局部广告-卡片广告",
      "enable": false,
      "activityIds": "com.mvvm.view.LazyMapStrategyActivity_TengXun",
      "rules": [
        {
          "matches": "[desc^=\"dislike\"] > View",
          "snapshotUrls": "https://i.gkd.li/i/13258021",
          "activityIds": "com.mvvm.view.LazyMapStrategyActivity_TengXun"
        },
        {
          "preKeys": 0,
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13258015",
          "activityIds": "com.mvvm.view.LazyMapStrategyActivity_TengXun"
        },
        {
          "matches": "@Image < View -2 View >2 View > TextView[text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13258018",
          "activityIds": "com.mvvm.view.LazyMapStrategyActivity_TengXun"
        }
      ]
    },
    {
      "key": 4,
      "name": "综合广告-广告卡片",
      "enable": false,
      "activityIds": [
        "com.mvvm.view.LazyMapStrategyActivity_TengXun",
        "com.mvc.activity.HomepageActivity2"
      ],
      "rules": [
        {
          "matches": "[desc^=\"dislike\"] > View",
          "snapshotUrls": "https://i.gkd.li/i/13258021",
          "activityIds": [
            "com.mvvm.view.LazyMapStrategyActivity_TengXun",
            "com.mvc.activity.HomepageActivity2"
          ]
        },
        {
          "preKeys": 0,
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13258015",
          "activityIds": [
            "com.mvvm.view.LazyMapStrategyActivity_TengXun",
            "com.mvc.activity.HomepageActivity2"
          ]
        },
        {
          "matches": "@Image < View -2 View >2 View > TextView[text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13258018",
          "activityIds": [
            "com.mvvm.view.LazyMapStrategyActivity_TengXun",
            "com.mvc.activity.HomepageActivity2"
          ]
        },
        {
          "matches": "[vid=\"relativeLayout3AdContainer\"] >7 [desc^=\"close-fill\"] > View[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/14548514",
          "activityIds": [
            "com.mvvm.view.LazyMapStrategyActivity_TengXun",
            "com.mvc.activity.HomepageActivity2"
          ]
        }
      ]
    },
    {
      "key": 5,
      "name": "权限提示-通知提示",
      "desc": "自动点击“以后再说”",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "snapshotUrls": "https://i.gkd.li/i/13601734",
      "rules": [
        {
          "matches": "[id=\"com.fan.app:id/tv_nj_later\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1
        }
      ]
    }
  ]
});
