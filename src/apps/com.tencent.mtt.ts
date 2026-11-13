// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tencent.mtt",
  "name": "QQ浏览器",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "@LinearLayout[clickable=true] > TextView[text=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/12472630",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "@View[clickable=true][childCount=0] +2 * >3 [text^=\"向上滑动\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14819586",
            "https://i.gkd.li/i/23743205"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "@View[clickable=true] +2 * >3 [text=\"向上滑动查看\"]",
          "snapshotUrls": "https://i.gkd.li/i/14819586",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "分段广告-文件界面-卡片广告",
      "desc": "①点击[广告] ②点击[不感兴趣]",
      "fastQuery": true,
      "actionCd": 5000,
      "activityIds": ".MainActivity",
      "rules": [
        {
          "name": "①点击[广告]",
          "matches": "ImageView[visibleToUser=true] < @[clickable=true] < [childCount=1] <3 [childCount=5] >6 [vid=\"video_wonder_video_view\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/31367445",
            "https://i.gkd.li/i/31367447"
          ],
          "exampleUrls": "https://e.gkd.li/a8d89cb8-fa33-4400-a4e1-e8cceb148ac5",
          "fastQuery": true,
          "actionCd": 5000,
          "activityIds": ".MainActivity"
        },
        {
          "preKeys": 0,
          "name": "②点击[不感兴趣]",
          "matches": "[desc=\"不感兴趣\"] < @[clickable=true] <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/31371556",
          "fastQuery": true,
          "actionCd": 5000,
          "activityIds": ".MainActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "分段广告-小说阅读页面-卡片广告",
      "activityIds": ".MainActivity",
      "rules": [
        {
          "actionCd": 3000,
          "name": "点击广告按钮",
          "excludeMatches": "[desc=\"屏蔽此广告\"||desc=\"不感兴趣\"]",
          "matches": "@ViewGroup[clickable=true][visibleToUser=true] > ViewGroup > [desc=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12907446",
            "https://i.gkd.li/i/12907445"
          ],
          "activityIds": ".MainActivity"
        },
        {
          "preKeys": 0,
          "name": "点击[屏蔽此广告]/[直接关闭]",
          "forcedTime": 10000,
          "matches": "@ViewGroup[childCount=1 || childCount=3] > [desc=\"屏蔽此广告\" || desc=\"直接关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12907654",
            "https://i.gkd.li/i/12907651",
            "https://i.gkd.li/i/12907655",
            "https://i.gkd.li/i/12907653"
          ],
          "activityIds": ".MainActivity"
        },
        {
          "actionCd": 3000,
          "name": "点击广告按钮 (2)",
          "excludeMatches": "[desc=\"屏蔽此广告\"||desc=\"不感兴趣\"]",
          "matches": "@ViewGroup[clickable=true][visibleToUser=true] > ViewGroup > [desc=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12907446",
            "https://i.gkd.li/i/12907445"
          ],
          "activityIds": "com.tencent.mtt.MainActivity"
        },
        {
          "preKeys": 2,
          "name": "点击[屏蔽此广告]/[直接关闭] (2)",
          "matches": "@ViewGroup[childCount=1 || childCount=3] > [desc=\"屏蔽此广告\" || desc=\"直接关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12907654",
            "https://i.gkd.li/i/12907651",
            "https://i.gkd.li/i/12907655",
            "https://i.gkd.li/i/12907653"
          ],
          "activityIds": "com.tencent.mtt.MainActivity"
        },
        {
          "preKeys": 2,
          "name": "点击[屏蔽此广告]",
          "matches": "@ViewGroup > [desc=\"屏蔽此广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12907654",
            "https://i.gkd.li/i/12907651"
          ],
          "activityIds": "com.tencent.mtt.MainActivity"
        },
        {
          "preKeys": 4,
          "name": "点击[不感兴趣]",
          "matches": "@ViewGroup > [desc=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12907655",
            "https://i.gkd.li/i/12907653"
          ],
          "activityIds": "com.tencent.mtt.MainActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "分段广告-小说阅读页面-视频广告",
      "activityIds": "com.qq.e.tg.RewardvideoPortraitADActivity",
      "rules": [
        {
          "matches": "[text=\"腾讯广告\"] >n [id^=\"button_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12909822",
          "activityIds": "com.qq.e.tg.RewardvideoPortraitADActivity"
        },
        {
          "preKeys": 0,
          "matches": "[vid=\"reward_dialog_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12908955",
          "activityIds": "com.qq.e.tg.RewardvideoPortraitADActivity"
        },
        {
          "preKeys": 0,
          "matches": "[id=\"com.tencent.mtt:id/reward_dialog_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12908955",
          "activityIds": "com.qq.e.tg.RewardvideoPortraitADActivity"
        }
      ]
    }
  ]
});
