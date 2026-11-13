// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hunantv.imgo.activity",
  "name": "芒果TV",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-首页推荐广告",
      "activityIds": ".MainActivity",
      "rules": [
        {
          "matches": "@[vid=\"layout_logo\"] > [vid=\"tv_ad_logo\"]",
          "snapshotUrls": "https://i.gkd.li/i/12472616",
          "activityIds": ".MainActivity"
        },
        {
          "preKeys": 0,
          "matches": "[vid=\"close_ad\"]",
          "snapshotUrls": "https://i.gkd.li/i/12472615",
          "activityIds": ".MainActivity"
        },
        {
          "matches": "@[id=\"com.hunantv.imgo.activity:id/layout_logo\"] > [id=\"com.hunantv.imgo.activity:id/tv_ad_logo\"]",
          "snapshotUrls": "https://i.gkd.li/i/12472616",
          "activityIds": "com.hunantv.imgo.activity.MainActivity"
        },
        {
          "preKeys": 2,
          "matches": "[id=\"com.hunantv.imgo.activity:id/close_ad\"]",
          "snapshotUrls": "https://i.gkd.li/i/12472615",
          "activityIds": "com.hunantv.imgo.activity.MainActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[vid=\"imgPromotion\"] + [vid=\"vClosePromotionView\"]",
          "snapshotUrls": "https://i.gkd.li/i/12818464",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": ".MainActivity",
          "matches": "@TextView[id=null][text=\"\"] - View > Image[id=\"hotGif\"]",
          "snapshotUrls": "https://i.gkd.li/i/12818528",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "matches": "[vid=\"ivPromotion\"] + [vid=\"btnClose\"]",
          "snapshotUrls": "https://i.gkd.li/i/13761169",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.hunantv.imgo.activity.MainActivity",
          "matches": "[id=\"com.hunantv.imgo.activity:id/imgPromotion\"] + [id=\"com.hunantv.imgo.activity:id/vClosePromotionView\"]",
          "snapshotUrls": "https://i.gkd.li/i/12818464",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.hunantv.imgo.activity.MainActivity",
          "matches": "@TextView[id=null][text=\"\"] - View > Image[id=\"hotGif\"]",
          "snapshotUrls": "https://i.gkd.li/i/12818528",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.hunantv.imgo.activity.MainActivity",
          "fastQuery": true,
          "matches": "[id=\"com.hunantv.imgo.activity:id/ivPromotion\"] + [id=\"com.hunantv.imgo.activity:id/btnClose\"]",
          "snapshotUrls": "https://i.gkd.li/i/13761169",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-右侧悬浮广告",
      "activityIds": ".MainActivity",
      "rules": [
        {
          "matches": "@[vid=\"apperience_close\"] + [vid=\"apperience_enter\"]",
          "snapshotUrls": "https://i.gkd.li/i/12818430",
          "activityIds": ".MainActivity"
        },
        {
          "matches": "@[vid=\"iv_float_close\"] + [vid=\"iv_float_content\"]",
          "snapshotUrls": "https://i.gkd.li/i/12818481",
          "activityIds": ".MainActivity"
        },
        {
          "matches": "@[id=\"com.hunantv.imgo.activity:id/apperience_close\"] + [id=\"com.hunantv.imgo.activity:id/apperience_enter\"]",
          "snapshotUrls": "https://i.gkd.li/i/12818430",
          "activityIds": "com.hunantv.imgo.activity.MainActivity"
        },
        {
          "matches": "@[id=\"com.hunantv.imgo.activity:id/iv_float_close\"] + [id=\"com.hunantv.imgo.activity:id/iv_float_content\"]",
          "snapshotUrls": "https://i.gkd.li/i/12818481",
          "activityIds": "com.hunantv.imgo.activity.MainActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-视频播放时的广告",
      "desc": "点击[关闭广告]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.mgtv.ui.videoplay.MGVideoPlayActivity",
          "matches": "[text=\"关闭广告\"][clickable=true][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/386d0906-f81f-43d2-af7f-adc3ab0ea5a6",
          "snapshotUrls": "https://i.gkd.li/i/14322017"
        }
      ]
    },
    {
      "key": 4,
      "name": "青少年模式",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12832447",
      "rules": [
        {
          "matches": "[id=\"com.hunantv.imgo.activity:id/llSetAgeMode\"] + [id=\"com.hunantv.imgo.activity:id/btnIknow\"]",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 5,
      "name": "未分类-首页推荐流-卡片广告",
      "enable": false,
      "activityIds": "com.hunantv.imgo.activity.MainActivity",
      "rules": [
        {
          "matches": "@[id=\"com.hunantv.imgo.activity:id/layout_logo\"] > [id=\"com.hunantv.imgo.activity:id/tv_ad_logo\"]",
          "snapshotUrls": "https://i.gkd.li/i/12472616",
          "activityIds": "com.hunantv.imgo.activity.MainActivity"
        },
        {
          "preKeys": 0,
          "matches": "[id=\"com.hunantv.imgo.activity:id/close_ad\"]",
          "snapshotUrls": "https://i.gkd.li/i/12472615",
          "activityIds": "com.hunantv.imgo.activity.MainActivity"
        }
      ]
    }
  ]
});
