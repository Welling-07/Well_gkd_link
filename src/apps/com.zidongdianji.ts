// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.zidongdianji",
  "name": "自动点击器",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-卡片广告",
      "activityIds": "com.autoclicker.clicker.MainActivity",
      "fastQuery": true,
      "matchRoot": true,
      "forcedTime": 10000,
      "rules": [
        {
          "matches": "WebView >3 View[childCount=2] > View[childCount=4] > View[childCount=1] > @Image[childCount=0][visibleToUser=true][text=\"\"] <<n [vid=\"native_ad_container_top\" || vid=\"rv_record\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14782886",
            "https://i.gkd.li/i/16646833"
          ],
          "fastQuery": true,
          "matchRoot": true,
          "forcedTime": 10000,
          "activityIds": "com.autoclicker.clicker.MainActivity"
        },
        {
          "position": {
            "left": "width * 0.9481",
            "top": "width * 0.0778"
          },
          "matches": "WebView > View[childCount=2] > TextView[text!=null][visibleToUser=false] + @View[visibleToUser=true][childCount=0] <<n [vid=\"rv_record\"]",
          "exampleUrls": "https://e.gkd.li/ab8308a9-a237-49ee-8ed5-38e6d543acf0",
          "snapshotUrls": "https://i.gkd.li/i/16742931",
          "fastQuery": true,
          "matchRoot": true,
          "forcedTime": 10000,
          "activityIds": "com.autoclicker.clicker.MainActivity"
        },
        {
          "fastQuery": true,
          "matches": "@ImageView[clickable=true][width<80 && height<80] <2 LinearLayout +2 LinearLayout > [text=\"详情点击\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/029e9494-fb0a-4752-8711-1f6e68684ef5",
          "snapshotUrls": "https://i.gkd.li/i/24336331",
          "matchRoot": true,
          "forcedTime": 10000,
          "activityIds": "com.autoclicker.clicker.MainActivity"
        },
        {
          "preKeys": [
            0,
            1,
            2
          ],
          "matches": "@[clickable=true] >n [text=\"不感兴趣\"]",
          "exampleUrls": "https://e.gkd.li/560a7da4-64f5-4dc7-899c-60856241662f",
          "snapshotUrls": [
            "https://i.gkd.li/i/14783475",
            "https://i.gkd.li/i/24336327"
          ],
          "fastQuery": true,
          "matchRoot": true,
          "forcedTime": 10000,
          "activityIds": "com.autoclicker.clicker.MainActivity"
        },
        {
          "preKeys": [
            0,
            1
          ],
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/14783475",
          "fastQuery": true,
          "matchRoot": true,
          "forcedTime": 10000,
          "activityIds": "com.autoclicker.clicker.MainActivity"
        },
        {
          "matches": "Image < @View[visibleToUser=true] + View > View > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/14782886",
          "activityIds": "com.autoclicker.clicker.MainActivity",
          "fastQuery": true,
          "matchRoot": true,
          "forcedTime": 10000
        },
        {
          "preKeys": 5,
          "fastQuery": true,
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/14783475",
          "activityIds": "com.autoclicker.clicker.MainActivity",
          "matchRoot": true,
          "forcedTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.autoclicker.clicker.MainActivity",
          "matches": "[vid=\"img_native_ad_default_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/e6b14a8f-6533-4601-92b8-f5032fc18234",
          "snapshotUrls": "https://i.gkd.li/i/19381476",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
