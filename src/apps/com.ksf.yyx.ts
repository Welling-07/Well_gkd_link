// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ksf.yyx",
  "name": "OMOFUN",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "activityIds": [
        "com.ksf.yyx.MainActivity"
      ],
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[vid=\"ksad_splash_circle_skip_view\"]",
          "snapshotUrls": "https://i.gkd.li/i/12775918",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "activityIds": [
            "com.ksf.yyx.MainActivity"
          ]
        },
        {
          "matches": "[vid=\"ksad_splash_root_container\"] [childCount=3] > @ImageView[clickable=true] - [text=\"|\"]",
          "snapshotUrls": "https://i.gkd.li/i/12775919",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000,
          "activityIds": [
            "com.ksf.yyx.MainActivity"
          ]
        },
        {
          "matches": "[text^=\"跳过 \"][text.length<=4][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12775926",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000,
          "activityIds": [
            "com.ksf.yyx.MainActivity"
          ]
        },
        {
          "matches": "[id=\"com.ksf.yyx:id/ksad_splash_circle_skip_view\"]",
          "snapshotUrls": "https://i.gkd.li/i/12775918",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0,
          "activityIds": [
            "com.ksf.yyx.MainActivity"
          ]
        },
        {
          "matches": "[id=\"com.ksf.yyx:id/ksad_splash_root_container\"] [childCount=3] > @ImageView[clickable=true] - [text=\"|\"]",
          "snapshotUrls": "https://i.gkd.li/i/12775919",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 3,
          "priorityTime": 10000,
          "activityIds": [
            "com.ksf.yyx.MainActivity"
          ]
        },
        {
          "matches": "FrameLayout > FrameLayout > [text^=\"跳过 \"][text.length<=4][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12775926",
          "activityIds": [
            "com.ksf.yyx.MainActivity"
          ],
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
      "name": "通知提示-公告弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[desc=\"了解更多\"] - [desc=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/12775920",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-插屏广告",
      "desc": "点击关闭",
      "activityIds": [
        "com.ksf.yyx.MainActivity",
        "com.sigmob.sdk.base.common.TransparentAdActivity"
      ],
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "[vid=\"ksad_container\"] [text=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/12775922"
        },
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12775923"
        },
        {
          "activityIds": "com.sigmob.sdk.base.common.TransparentAdActivity",
          "matches": "[id=\"ad_area\"] [id=\"close_btn\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775925",
            "https://i.gkd.li/i/12775924"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775921",
            "https://i.gkd.li/i/12776903"
          ]
        },
        {
          "matches": "[id=\"com.ksf.yyx:id/ksad_container\"] [text=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/12775922",
          "activityIds": [
            "com.ksf.yyx.MainActivity",
            "com.sigmob.sdk.base.common.TransparentAdActivity"
          ]
        },
        {
          "matches": "[id=\"com.ksf.yyx:id/ksad_container\"] TextView[text=\"广告\"] <2 ViewGroup -n ViewGroup[childCount=1] > @ViewGroup[childCount=1 && clickable=true] > ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775923",
            "https://i.gkd.li/i/12998899"
          ],
          "activityIds": [
            "com.ksf.yyx.MainActivity",
            "com.sigmob.sdk.base.common.TransparentAdActivity"
          ]
        },
        {
          "matches": "[id=\"ad_area\"] [id=\"close_btn\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775925",
            "https://i.gkd.li/i/12775924"
          ],
          "activityIds": [
            "com.ksf.yyx.MainActivity",
            "com.sigmob.sdk.base.common.TransparentAdActivity"
          ]
        },
        {
          "action": "clickCenter",
          "matches": "[text^=\"去\"][text$=\"看看\"] < FrameLayout <2 FrameLayout[childCount=2] -n FrameLayout[childCount=1] > ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775921",
            "https://i.gkd.li/i/12776903"
          ],
          "activityIds": [
            "com.ksf.yyx.MainActivity",
            "com.sigmob.sdk.base.common.TransparentAdActivity"
          ]
        },
        {
          "action": "clickCenter",
          "matches": "TextView[text=\"查看详情\"] < FrameLayout <2 FrameLayout[childCount=2] -n FrameLayout > FrameLayout > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/12789196",
          "activityIds": [
            "com.ksf.yyx.MainActivity",
            "com.sigmob.sdk.base.common.TransparentAdActivity"
          ]
        },
        {
          "action": "clickCenter",
          "matches": "TextView[text=\"立即下载\"] < FrameLayout <2 FrameLayout[childCount=2] -n FrameLayout[childCount=1] > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/12789928",
          "activityIds": [
            "com.ksf.yyx.MainActivity",
            "com.sigmob.sdk.base.common.TransparentAdActivity"
          ]
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-首页通知",
      "enable": false,
      "activityIds": [
        "com.ksf.yyx.MainActivity"
      ],
      "rules": [
        {
          "matches": "[desc=\"了解更多\"] - [desc=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/12775920",
          "activityIds": [
            "com.ksf.yyx.MainActivity"
          ]
        }
      ]
    }
  ]
});
