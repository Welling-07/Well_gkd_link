// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.nowcasting.activity",
  "name": "彩云天气",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-VIP弹窗广告",
      "fastQuery": true,
      "activityIds": "com.nowcasting.activity.WeatherActivity",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".WeatherActivity",
          "matches": "[vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13405130",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"开心收下\"] + [id=\"com.nowcasting.activity:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13405130",
          "fastQuery": true,
          "activityIds": "com.nowcasting.activity.WeatherActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "activityIds": ".WeatherActivity",
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13405131",
            "https://i.gkd.li/i/14814345"
          ],
          "fastQuery": true,
          "activityIds": ".WeatherActivity"
        },
        {
          "matches": "ImageView[childCount=0] < @ViewGroup[clickable=true][childCount=1] < ViewGroup <5 ViewGroup + ViewGroup [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/14814374",
          "fastQuery": true,
          "activityIds": ".WeatherActivity"
        },
        {
          "matches": "[vid=\"entrance_image\"] + [vid=\"close\"]",
          "exampleUrls": "https://e.gkd.li/bd53a023-f83a-45ae-b58e-c7369f29bb2e",
          "snapshotUrls": "https://i.gkd.li/i/16965108",
          "fastQuery": true,
          "activityIds": ".WeatherActivity"
        },
        {
          "matches": "[id=\"android:id/content\"] >n FrameLayout[childCount>5] > FrameLayout[childCount=1] > ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/i/13405131",
            "https://i.gkd.li/i/14814345"
          ],
          "fastQuery": true,
          "activityIds": "com.nowcasting.activity.WeatherActivity"
        },
        {
          "fastQuery": true,
          "matches": "ImageView[childCount=0] < @ViewGroup[clickable=true][childCount=1] < ViewGroup <5 ViewGroup + ViewGroup [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/14814374",
          "activityIds": "com.nowcasting.activity.WeatherActivity"
        },
        {
          "fastQuery": true,
          "matches": "[vid=\"entrance_image\"] + [vid=\"close\"]",
          "exampleUrls": "https://e.gkd.li/bd53a023-f83a-45ae-b58e-c7369f29bb2e",
          "snapshotUrls": "https://i.gkd.li/i/16965108",
          "activityIds": "com.nowcasting.activity.WeatherActivity"
        },
        {
          "fastQuery": true,
          "matches": "ImageView < @ViewGroup[clickable=true] <<n ViewGroup +n ViewGroup [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/14814374",
          "activityIds": "com.nowcasting.activity.WeatherActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "分段广告-卡片广告",
      "fastQuery": true,
      "activityIds": ".WeatherActivity",
      "rules": [
        {
          "matches": "[vid=\"ll_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13690822",
          "fastQuery": true,
          "activityIds": ".WeatherActivity"
        },
        {
          "preKeys": 0,
          "matches": "[vid=\"ll_uninterested\"]",
          "snapshotUrls": "https://i.gkd.li/i/13690830",
          "fastQuery": true,
          "activityIds": ".WeatherActivity"
        },
        {
          "matches": "[id=\"com.nowcasting.activity:id/ll_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13690822",
          "fastQuery": true,
          "activityIds": "com.nowcasting.activity.WeatherActivity"
        },
        {
          "preKeys": 2,
          "matches": "[id=\"com.nowcasting.activity:id/ll_uninterested\"]",
          "snapshotUrls": "https://i.gkd.li/i/13690830",
          "fastQuery": true,
          "activityIds": "com.nowcasting.activity.WeatherActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "activityIds": ".WeatherActivity",
      "rules": [
        {
          "matches": "[vid=\"jad_feed_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13690826",
          "fastQuery": true,
          "activityIds": ".WeatherActivity"
        },
        {
          "matches": "@FrameLayout[visibleToUser=true] +2 * > [text=\"广告\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/14814348",
          "fastQuery": true,
          "activityIds": ".WeatherActivity"
        },
        {
          "matches": "[id=\"com.nowcasting.activity:id/jad_feed_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13690826",
          "fastQuery": true,
          "activityIds": "com.nowcasting.activity.WeatherActivity"
        },
        {
          "matches": "@FrameLayout[visibleToUser=true] +2 * > [text=\"广告\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/14814348",
          "fastQuery": true,
          "activityIds": "com.nowcasting.activity.WeatherActivity"
        }
      ]
    },
    {
      "key": 5,
      "name": "综合广告-卡片广告",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.nowcasting.activity.WeatherActivity",
      "rules": [
        {
          "matches": "[id=\"com.nowcasting.activity:id/ll_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13690822",
          "fastQuery": true,
          "activityIds": "com.nowcasting.activity.WeatherActivity"
        },
        {
          "preKeys": 0,
          "matches": "[id=\"com.nowcasting.activity:id/ll_uninterested\"]",
          "snapshotUrls": "https://i.gkd.li/i/13690830",
          "fastQuery": true,
          "activityIds": "com.nowcasting.activity.WeatherActivity"
        }
      ]
    }
  ]
});
