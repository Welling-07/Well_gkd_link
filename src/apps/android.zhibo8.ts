// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "android.zhibo8",
  "name": "直播吧",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-信息流广告",
      "desc": "点击[关闭]-点击[不感兴趣]",
      "fastQuery": true,
      "activityIds": [
        ".ui.contollers.main.MainActivity",
        ".ui.contollers.detail.DetailActivity"
      ],
      "rules": [
        {
          "name": "点击关闭",
          "matches": "[vid=\"iv_tip\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13786148",
            "https://i.gkd.li/i/14428863",
            "https://i.gkd.li/i/15443198"
          ],
          "fastQuery": true,
          "activityIds": [
            ".ui.contollers.main.MainActivity",
            ".ui.contollers.detail.DetailActivity"
          ]
        },
        {
          "preKeys": 0,
          "name": "点击不感兴趣",
          "matches": "@[clickable=true] >3 [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/14428912",
          "fastQuery": true,
          "activityIds": [
            ".ui.contollers.main.MainActivity",
            ".ui.contollers.detail.DetailActivity"
          ]
        },
        {
          "name": "点击关闭 (2)",
          "matches": "[vid=\"iv_tip\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13786148",
            "https://i.gkd.li/i/14428863",
            "https://i.gkd.li/i/15443198"
          ],
          "fastQuery": true,
          "activityIds": [
            "android.zhibo8.ui.contollers.main.MainActivity",
            "android.zhibo8.ui.contollers.detail.DetailActivity"
          ]
        },
        {
          "name": "点击不感兴趣 (2)",
          "matches": "@[clickable=true] >3 [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/14428912",
          "fastQuery": true,
          "activityIds": [
            "android.zhibo8.ui.contollers.main.MainActivity",
            "android.zhibo8.ui.contollers.detail.DetailActivity"
          ]
        },
        {
          "name": "点击[查看详情]右侧x",
          "matches": "@[id=\"android.zhibo8:id/iv_tip\"] - [id=\"android.zhibo8:id/tv_app_download_2\"]",
          "snapshotUrls": "https://i.gkd.li/i/12841134",
          "fastQuery": true,
          "activityIds": "android.zhibo8.ui.contollers.main.MainActivity"
        },
        {
          "name": "点击[不感兴趣]",
          "matches": "@LinearLayout > [id=\"android.zhibo8:id/tv_title\"][text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12841135",
          "fastQuery": true,
          "activityIds": "android.zhibo8.ui.contollers.main.MainActivity"
        },
        {
          "name": "点击【广告】右侧的x",
          "matches": "[text=\"广告\"] <3 LinearLayout +2 [visibleToUser=true][id=\"android.zhibo8:id/iv_tip\"]",
          "snapshotUrls": "https://i.gkd.li/i/13786148",
          "fastQuery": true,
          "activityIds": "android.zhibo8.ui.contollers.main.MainActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ui.contollers.main.MainActivity",
          "matches": [
            "[text=\"发现新版本\"]",
            "[text$=\"不再提醒\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/14395465",
            "https://i.gkd.li/i/17825255"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": [
            "[text=\"发现新版本\"]",
            "[vid=\"iv_cancel\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/14395465",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "matches": "[vid=\"pushsetting_close_iv\"]",
          "exampleUrls": "https://e.gkd.li/e28aa1f2-8088-4f78-bee9-2d5832637671",
          "snapshotUrls": "https://i.gkd.li/i/17825298",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
