// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.fileunzip.zxwknight",
  "name": "解压专家",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "name": "字节广告",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "Image < @View[visibleToUser=true] +4 [text=\"反馈\"]",
          "snapshotUrls": "https://i.gkd.li/i/13328194",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "name": "腾讯广告",
          "fastQuery": true,
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": "https://i.gkd.li/i/13391833",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "name": "腾讯广告 (2)",
          "matches": "[id=\"android:id/content\"] >(3,4) FrameLayout[childCount>4] > FrameLayout[childCount=1] > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/13391833",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-升级专业版弹窗",
      "fastQuery": true,
      "activityIds": [
        "com.fileunzip.zxwknight.activity.MainActivity",
        "com.fileunzip.zxwknight.activity.VideoPlayActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/13328212",
        "https://i.gkd.li/i/14885336"
      ],
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".activity.MainActivity",
            ".activity.VideoPlayActivity"
          ],
          "matches": "@[vid=\"ziputil_dialog_imageview\"] < * > [text=\"升级到专业版\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13328212",
            "https://i.gkd.li/i/14885336"
          ]
        },
        {
          "matches": "@[vid=\"ziputil_dialog_imageview\"] < * > [text=\"升级到专业版\"]",
          "fastQuery": true,
          "activityIds": [
            "com.fileunzip.zxwknight.activity.MainActivity",
            "com.fileunzip.zxwknight.activity.VideoPlayActivity"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-软件推广",
      "desc": "全能保险箱",
      "fastQuery": true,
      "rules": [
        {
          "matches": "[vid=\"dialog_recommend_back\"]",
          "exampleUrls": "https://m.gkd.li/57941037/de127f4b-5de6-41ab-a1ea-5a98f7eeab58",
          "snapshotUrls": "https://i.gkd.li/i/14472568",
          "fastQuery": true
        },
        {
          "activityIds": ".activity.MainActivity",
          "matches": "@[text=\"本次启动不再提示\"][checked=false]",
          "exampleUrls": "https://m.gkd.li/57941037/57e29faf-2806-4166-a21d-839f1479960d",
          "snapshotUrls": "https://i.gkd.li/i/14885425",
          "fastQuery": true
        },
        {
          "preKeys": 1,
          "activityIds": ".activity.MainActivity",
          "matches": "[vid=\"promote_vault_full_screen_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/57e29faf-2806-4166-a21d-839f1479960d",
          "snapshotUrls": "https://i.gkd.li/i/14885425",
          "fastQuery": true
        },
        {
          "activityIds": "com.fileunzip.zxwknight.activity.MainActivity",
          "matches": "@[text=\"本次启动不再提示\"][checked=false]",
          "exampleUrls": "https://m.gkd.li/57941037/57e29faf-2806-4166-a21d-839f1479960d",
          "snapshotUrls": "https://i.gkd.li/i/14885425",
          "fastQuery": true
        },
        {
          "preKeys": 3,
          "activityIds": "com.fileunzip.zxwknight.activity.MainActivity",
          "matches": "[vid=\"promote_vault_full_screen_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/57e29faf-2806-4166-a21d-839f1479960d",
          "snapshotUrls": "https://i.gkd.li/i/14885425",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 3,
      "name": "更新提示",
      "order": -9,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "@[vid=\"ziputil_dialog_imageview\"] + [text=\"有新版本啦\"]",
          "exampleUrls": "https://m.gkd.li/57941037/a428a59c-5cdd-47e9-bfc5-492b43ed169a",
          "snapshotUrls": "https://i.gkd.li/i/14900121",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 4,
      "name": "全屏广告-应用推荐广告",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.fileunzip.zxwknight.activity.MainActivity",
          "matches": "@[text=\"本次启动不再提示\"][checked=false]",
          "exampleUrls": "https://m.gkd.li/57941037/57e29faf-2806-4166-a21d-839f1479960d",
          "snapshotUrls": "https://i.gkd.li/i/14885425",
          "fastQuery": true
        },
        {
          "preKeys": 0,
          "activityIds": "com.fileunzip.zxwknight.activity.MainActivity",
          "matches": "[vid=\"promote_vault_full_screen_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/57e29faf-2806-4166-a21d-839f1479960d",
          "snapshotUrls": "https://i.gkd.li/i/14885425",
          "fastQuery": true
        }
      ]
    }
  ]
});
