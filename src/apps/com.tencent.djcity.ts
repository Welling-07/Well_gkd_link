// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tencent.djcity",
  "name": "掌上道聚城",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "fastQuery": true,
      "priorityTime": 10000,
      "rules": [
        {
          "action": "clickCenter",
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/15137209",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "action": "clickCenter",
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/15137209",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "action": "clickCenter",
          "matches": "@LinearLayout[clickable=true] > [text=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/15137209",
          "matchTime": 10000,
          "resetMatch": "app",
          "actionMaximum": 1,
          "fastQuery": true,
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activities.homepage.MainActivity",
          "matches": "[vid=\"main_container\"] >7 View[childCount=7] > View[childCount=2] > @View[index=1][childCount=1][clickable=true] > ImageView[childCount=0] <<n [vid=\"main_container\"]",
          "exampleUrls": "https://m.gkd.li/57941037/151fd8a5-8c44-4368-a8ba-3563df44e492",
          "snapshotUrls": "https://i.gkd.li/i/14229532",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.tencent.djcity.activities.homepage.MainActivity",
          "matches": "[vid=\"main_container\"] >7 View[childCount=7] > View[childCount=2] > View[index=1] > ImageView",
          "exampleUrls": "https://m.gkd.li/57941037/151fd8a5-8c44-4368-a8ba-3563df44e492",
          "snapshotUrls": "https://i.gkd.li/i/14229532",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "功能类-[签到成功]弹窗",
      "desc": "点击[好的]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activities.homepage.MainActivity",
          "matches": "@View[clickable=true] > [desc=\"好的\"]",
          "exampleUrls": "https://m.gkd.li/57941037/22ba335b-c225-41f0-97be-a91377ebc121",
          "snapshotUrls": "https://i.gkd.li/i/14229554",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "功能类-\"签到成功\"弹窗",
      "desc": "点击\"好的\"",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.tencent.djcity.activities.homepage.MainActivity",
          "matches": "@View[clickable=true] > [desc=\"好的\"]",
          "exampleUrls": "https://m.gkd.li/57941037/22ba335b-c225-41f0-97be-a91377ebc121",
          "snapshotUrls": "https://i.gkd.li/i/14229554",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
