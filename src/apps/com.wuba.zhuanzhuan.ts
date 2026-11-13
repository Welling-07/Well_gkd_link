// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wuba.zhuanzhuan",
  "name": "转转",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "rules": [
        {
          "matches": "@[text=\"下次再说\" || text=\"残忍拒绝\"] < * > [text^=\"立即\"][text.length=4]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14292849",
            "https://i.gkd.li/i/14392301"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[text=\"下次再说\"] +2 [text=\"立即升级\"]",
          "snapshotUrls": "https://i.gkd.li/i/14292849",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0
        },
        {
          "matches": "@[text=\"残忍拒绝\"] +2 [text=\"立即安装\"]",
          "snapshotUrls": "https://i.gkd.li/i/14392301",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 1
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.zhuanzhuan.module.reach.channel.impl.uicode.ReachDialogActivity",
          "matches": "[id=\"android:id/content\"] > ViewGroup[childCount=3] >2 ViewGroup[childCount>1] > ImageView[clickable=true][index=parent.childCount.minus(1)]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14927441",
            "https://i.gkd.li/i/15140820"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.zhuanzhuan.module.reach.channel.impl.uicode.ReachDialogActivity",
          "matches": "[id=\"android:id/content\"] > ViewGroup[childCount=3] >2 ViewGroup[childCount=3] > ImageView[clickable=true][index=2]",
          "snapshotUrls": "https://i.gkd.li/i/14927441",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.zhuanzhuan.module.reach.channel.impl.uicode.ReachDialogActivity",
          "matches": "[id=\"android:id/content\"] > ViewGroup[childCount=3] > FrameLayout > ViewGroup[childCount=2] > ImageView[index=1]",
          "snapshotUrls": "https://i.gkd.li/i/15140820",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "评价提示",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.MainActivity",
          "matches": "@ImageView[clickable=true] - ViewGroup > [text=\"喜欢就给个好评吧\"]",
          "snapshotUrls": "https://i.gkd.li/i/15881026",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@ImageView[clickable=true] - ViewGroup > [text=\"喜欢就给个好评吧\"]",
          "snapshotUrls": "https://i.gkd.li/i/15881026",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
