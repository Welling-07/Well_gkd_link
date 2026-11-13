// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jiongji.andriod.card",
  "name": "百词斩",
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
          "excludeActivityIds": "com.baicizhan.client.business.webview.ui.BczWebActivity",
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/8612bbae-7a50-4730-8071-1c47e35c27ca",
          "snapshotUrls": "https://i.gkd.li/i/21705324",
          "excludeSnapshotUrls": "https://i.gkd.li/i/21705338",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-活动弹窗",
      "activityIds": "com.baicizhan.main.activity.MainTabActivity",
      "snapshotUrls": "https://i.gkd.li/i/13415075",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.baicizhan.main.activity.MainTabActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true] -2 [text=\"反馈\"]",
          "snapshotUrls": "https://i.gkd.li/i/13415075",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"反馈\"] + ImageView + ImageView[childCount=0][clickable=true]",
          "activityIds": "com.baicizhan.main.activity.MainTabActivity",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13488652",
      "rules": [
        {
          "activityIds": "com.baicizhan.main.activity.MainTabActivity",
          "matches": "[text=\"抢先体验\"] - [text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/13488652",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"抢先体验\"] - [text=\"取消\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "通知提示-关闭顶栏提醒",
      "rules": [
        {
          "activityIds": "com.baicizhan.main.activity.MainTabActivity",
          "matches": "[desc=\"word_plan_tab\"] > FrameLayout[index=2] >2 TextView[text!=null] + ImageView[clickable=true][childCount=0][index=parent.childCount.minus(1)]",
          "snapshotUrls": [
            "https://i.gkd.li/i/24887224",
            "https://i.gkd.li/i/24983406"
          ]
        }
      ]
    }
  ]
});
