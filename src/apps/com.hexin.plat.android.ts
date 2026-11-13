// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hexin.plat.android",
  "name": "同花顺",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "position": {
            "left": "width * 3.6279",
            "top": "width * -6.5736"
          },
          "matches": "@[id=\"android:id/title\"][childCount=0][width<150] < LinearLayout < [parent=null]",
          "exampleUrls": "https://e.gkd.li/2750d496-8889-4aed-88b7-70692df44e8f",
          "snapshotUrls": "https://i.gkd.li/i/16505270",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "position": {
            "left": "width * 3.7",
            "top": "width * -6.9281"
          },
          "matches": "@[id=\"android:id/title\"][childCount=0][width>=150] < LinearLayout < [parent=null]",
          "exampleUrls": "https://e.gkd.li/f9c7621d-8b2b-4ca8-9904-fe0bca61c43f",
          "snapshotUrls": "https://i.gkd.li/i/17726527",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/24119631",
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
      "name": "分段广告-信息流广告",
      "desc": "信息流广告-点击x按钮-点击内容质量差",
      "activityIds": [
        ".Hexin"
      ],
      "rules": [
        {
          "matches": "@[vid=\"iv_feed_bottom_bar_dislike\"] < LinearLayout -(2) LinearLayout >(2) [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12662754"
          ],
          "activityIds": [
            ".Hexin"
          ]
        },
        {
          "preKeys": 0,
          "matches": "[vid=\"tv_negative_feedback_option\"][text=\"内容质量差\"] - ImageView < LinearLayout[clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12662781"
          ],
          "activityIds": [
            ".Hexin"
          ]
        },
        {
          "matches": "@[id=\"com.hexin.plat.android:id/iv_feed_bottom_bar_dislike\"] < LinearLayout -(2) LinearLayout >(2) [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12662754"
          ],
          "activityIds": [
            "com.hexin.plat.android.Hexin"
          ]
        },
        {
          "preKeys": 2,
          "matches": "[id=\"com.hexin.plat.android:id/tv_negative_feedback_option\"][text=\"内容质量差\"] - ImageView < LinearLayout[clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12662781"
          ],
          "activityIds": [
            "com.hexin.plat.android.Hexin"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-底部产品广告",
      "activityIds": ".Hexin",
      "rules": [
        {
          "matches": "[vid=\"prod_ad\"] + [vid=\"prod_close_image\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12662656"
          ],
          "activityIds": ".Hexin"
        },
        {
          "matches": "[id=\"com.hexin.plat.android:id/prod_ad\"] + [id=\"com.hexin.plat.android:id/prod_close_image\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12662656"
          ],
          "activityIds": [
            "com.hexin.plat.android"
          ]
        }
      ]
    }
  ]
});
