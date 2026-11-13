// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.byfen.market",
  "name": "百分网游戏盒子",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13801613",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ui.activity.MainActivity",
          "matches": "[vid=\"idIvClose\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/35d2a562-fe30-4bff-b739-96b37dccd05c",
          "snapshotUrls": "https://i.gkd.li/i/13801613",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "activityIds": "com.byfen.market.ui.activity.MainActivity",
          "matches": "[vid=\"idIvClose\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/35d2a562-fe30-4bff-b739-96b37dccd05c",
          "snapshotUrls": "https://i.gkd.li/i/13801613",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.byfen.market:id/idIvClose\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "desc": "点击[忽略更新]",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".ui.activity.MainActivity",
          "matches": "[text=\"忽略更新\"][clickable=true][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/e92b10b8-b0f8-4dc3-95bf-172829996600",
          "snapshotUrls": "https://i.gkd.li/i/14322280",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"忽略更新\"][clickable=true][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/e92b10b8-b0f8-4dc3-95bf-172829996600",
          "snapshotUrls": "https://i.gkd.li/i/14322280",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 2,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13298944",
            "https://i.gkd.li/i/13800021"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_splash_skip_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/13298944",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[id=\"com.byfen.market:id/ad_view\"] >3 View[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13800021",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 3,
      "name": "分段广告-下载管理页广告卡片",
      "enable": false,
      "activityIds": "com.byfen.market.ui.activity.personalcenter.DownloadManagerActivity",
      "rules": [
        {
          "name": "穿山甲SDK-点击【反馈】",
          "matches": "[id=\"com.byfen.market:id/idAd\"] >n [text=\"反馈\"]",
          "snapshotUrls": "https://i.gkd.li/i/13771711",
          "activityIds": "com.byfen.market.ui.activity.personalcenter.DownloadManagerActivity"
        },
        {
          "preKeys": 0,
          "name": "穿山甲SDK-点击【不感兴趣】",
          "fastQuery": true,
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13771773",
          "activityIds": "com.byfen.market.ui.activity.personalcenter.DownloadManagerActivity"
        }
      ]
    }
  ]
});
