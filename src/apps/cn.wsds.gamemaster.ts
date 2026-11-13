// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.wsds.gamemaster",
  "name": "迅游手游加速器",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-卡片广告",
      "desc": "点击关闭-点击不感兴趣",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".ui.gamedetails.ActivityGameDetails",
          "matches": "ViewGroup[childCount=2] > @ImageView[childCount=0][index=1][clickable=true][visibleToUser=true] - [text=\"立即下载\"]",
          "snapshotUrls": "https://i.gkd.li/i/13930398",
          "fastQuery": true
        },
        {
          "preKeys": 0,
          "activityIds": ".ui.gamedetails.ActivityGameDetails",
          "matches": "[text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13930399",
          "fastQuery": true
        },
        {
          "activityIds": "cn.wsds.gamemaster.ui.gamedetails.ActivityGameDetails",
          "matches": "[id=\"cn.wsds.gamemaster:id/feed_ad\"] [text=\"立即下载\"] + ImageView[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13930398",
          "fastQuery": true
        },
        {
          "preKeys": 2,
          "fastQuery": true,
          "activityIds": "cn.wsds.gamemaster.ui.gamedetails.ActivityGameDetails",
          "matches": "[text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13930399"
        },
        {
          "activityIds": "cn.wsds.gamemaster.ui.gamedetails.ActivityGameDetails",
          "matches": "[id=\"cn.wsds.gamemaster:id/feed_ad\"] [text=\"立即下载\"] + ImageView[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13930398",
          "fastQuery": true
        },
        {
          "preKeys": 4,
          "fastQuery": true,
          "activityIds": "cn.wsds.gamemaster.ui.gamedetails.ActivityGameDetails",
          "matches": "[text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13930399"
        }
      ]
    },
    {
      "key": 1,
      "name": "开屏广告",
      "desc": "点击跳过",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "snapshotUrls": "https://i.gkd.li/i/13930391",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "@View <2 FrameLayout[childCount=3] <2 FrameLayout[childCount=2] < [vid=\"splash_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13930391",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    }
  ]
});
