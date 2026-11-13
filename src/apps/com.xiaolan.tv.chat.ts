// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xiaolan.tv.chat",
  "name": "真不卡",
  "groups": [
    {
      "key": 0,
      "name": "通知提示-温馨提示弹窗",
      "desc": "点击[确定]",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[desc=\"确定\"][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/884dc3b4-e60d-4b21-90c9-a68b96632070",
          "snapshotUrls": "https://i.gkd.li/i/15484133"
        },
        {
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".MainActivity",
          "matches": "[desc=\"我知道了\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/fe0403ee-0ffb-4921-a06a-ccefa5c26bcc",
          "snapshotUrls": "https://i.gkd.li/i/16476930"
        },
        {
          "activityIds": "com.xiaolan.tv.chat.MainActivity",
          "matches": "[desc=\"确定\"][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/884dc3b4-e60d-4b21-90c9-a68b96632070",
          "snapshotUrls": "https://i.gkd.li/i/15484133"
        },
        {
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.xiaolan.tv.chat.MainActivity",
          "matches": "[desc=\"我知道了\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/fe0403ee-0ffb-4921-a06a-ccefa5c26bcc",
          "snapshotUrls": "https://i.gkd.li/i/16476930"
        }
      ]
    },
    {
      "key": 1,
      "name": "分段广告-看视频领奖励广告",
      "desc": "点击关闭-点击[放弃奖励离开]",
      "fastQuery": true,
      "activityIds": "com.qq.e.ads.PortraitADActivity",
      "rules": [
        {
          "matches": "@ImageView[visibleToUser=true] < FrameLayout -2 * > [text*=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/15484070",
          "fastQuery": true,
          "activityIds": "com.qq.e.ads.PortraitADActivity"
        },
        {
          "preKeys": 0,
          "matches": "[text=\"放弃奖励离开\"]",
          "snapshotUrls": "https://i.gkd.li/i/15484521",
          "fastQuery": true,
          "activityIds": "com.qq.e.ads.PortraitADActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@[desc$=\"dislike\"][clickable=true] <2 FrameLayout +4 [text=\"立即下载\"]",
          "exampleUrls": "https://e.gkd.li/ff11b8f3-16d8-4613-a113-827f6389c30e",
          "snapshotUrls": "https://i.gkd.li/i/16476931"
        },
        {
          "fastQuery": true,
          "activityIds": "com.xiaolan.tv.chat.MainActivity",
          "matches": "@[desc$=\"dislike\"][clickable=true] <2 FrameLayout +4 [text=\"立即下载\"]",
          "exampleUrls": "https://e.gkd.li/ff11b8f3-16d8-4613-a113-827f6389c30e",
          "snapshotUrls": "https://i.gkd.li/i/16476931"
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "rules": [
        {
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "[text=\"反馈\"] + @View[childCount=1] > Image[childCount=0][text=\"\"]",
          "exampleUrls": "https://e.gkd.li/bbb19188-567d-4e5c-8ffd-f9576b5e1188",
          "snapshotUrls": "https://i.gkd.li/i/16476933"
        }
      ]
    }
  ]
});
