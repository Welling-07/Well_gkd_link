// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.netease.newsreader.activity",
  "name": "网易新闻",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-通知权限",
      "desc": "点击暂不开启",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.netease.newsreader.common.base.activity.SingleFragmentActivity",
      "rules": [
        {
          "matches": "[text*=\"开启系统推送\"] - ImageView < * < * < FrameLayout + FrameLayout >(3) Button[text=\"暂不开启\"]",
          "snapshotUrls": "https://i.gkd.li/i/12639800",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.netease.newsreader.common.base.activity.SingleFragmentActivity"
        },
        {
          "matches": "[text^=\"打开推送\"] +(2) RelativeLayout > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/12639869",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.netease.newsreader.common.base.activity.SingleFragmentActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "分段广告-首页信息流广告",
      "desc": "点击卡片广告x关闭按钮-关闭反馈理由弹窗",
      "activityIds": "com.netease.nr.phone.main.MainActivity",
      "rules": [
        {
          "matches": "FrameLayout[childCount=1] >5 TextView[text=\"广告\"] +2 ImageView[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12639751",
          "activityIds": "com.netease.nr.phone.main.MainActivity"
        },
        {
          "name": "首页信息流广告-反馈理由",
          "matches": "[text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12639752",
          "activityIds": "com.netease.nr.phone.main.MainActivity"
        },
        {
          "preKeys": 0,
          "name": "首页信息流广告-反馈理由 (2)",
          "matches": "[text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12639752",
          "activityIds": "com.netease.nr.phone.main.MainActivity"
        },
        {
          "preKeys": 0,
          "name": "首页信息流广告-反馈理由 (3)",
          "matches": "[text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12639752",
          "activityIds": "com.netease.nr.phone.main.MainActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示",
      "order": -9,
      "enable": false,
      "activityIds": "com.netease.newsreader.common.base.activity.SingleFragmentActivity",
      "snapshotUrls": "https://i.gkd.li/i/12639884",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[text$=\"版本更新了\"] +(2) RelativeLayout > [text=\"稍后再说\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.netease.newsreader.common.base.activity.SingleFragmentActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-系统推送弹窗",
      "desc": "检测到未开启系统推送-点击暂不开启",
      "enable": false,
      "activityIds": "com.netease.newsreader.common.base.activity.SingleFragmentActivity",
      "snapshotUrls": "https://i.gkd.li/i/12639800",
      "rules": [
        {
          "matches": "[text*=\"开启系统推送\"] - ImageView < * < * < FrameLayout + FrameLayout >(3) Button[text=\"暂不开启\"]",
          "activityIds": "com.netease.newsreader.common.base.activity.SingleFragmentActivity"
        }
      ]
    },
    {
      "key": 4,
      "name": "未分类-系统推送提示信息",
      "desc": "点击顶部提醒右侧x按钮",
      "enable": false,
      "activityIds": "com.netease.newsreader.common.base.activity.SingleFragmentActivity",
      "snapshotUrls": "https://i.gkd.li/i/12639869",
      "rules": [
        {
          "matches": "[text^=\"打开推送\"] +(2) RelativeLayout > ImageView",
          "activityIds": "com.netease.newsreader.common.base.activity.SingleFragmentActivity"
        }
      ]
    }
  ]
});
