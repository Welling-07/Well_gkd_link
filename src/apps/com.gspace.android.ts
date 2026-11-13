// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.gspace.android",
  "name": "Gspace",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-主页面上方广告",
      "activityIds": [
        ".ui.activity.main.MainActivity"
      ],
      "rules": [
        {
          "matches": "[vid=\"hiad_banner_close_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/12705339",
          "activityIds": [
            ".ui.activity.main.MainActivity"
          ]
        },
        {
          "matches": "@Image < View -2 View > View > View TextView[text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12910419",
            "https://i.gkd.li/i/12910935"
          ],
          "activityIds": [
            ".ui.activity.main.MainActivity"
          ]
        },
        {
          "preKeys": 1,
          "matches": "[id=\"com.byted.pangle:id/tt_item_tv\" && text= \"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12910420",
          "activityIds": [
            ".ui.activity.main.MainActivity"
          ]
        },
        {
          "matches": "[id=\"com.gspace.android:id/hiad_banner_close_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/12705339",
          "activityIds": [
            "com.gspace.android.ui.activity.main.MainActivity"
          ]
        },
        {
          "matches": "@Image < View -2 View > View > View TextView[text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12910419",
            "https://i.gkd.li/i/12910935"
          ],
          "activityIds": [
            "com.gspace.android.ui.activity.main.MainActivity"
          ]
        },
        {
          "preKeys": 4,
          "matches": "[id=\"com.byted.pangle:id/tt_item_tv\" && text= \"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12910420",
          "activityIds": [
            "com.gspace.android.ui.activity.main.MainActivity"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-Youtube播放视频跳过广告",
      "snapshotUrls": "https://i.gkd.li/i/12709006",
      "rules": [
        {
          "matches": "[id=\"com.google.android.youtube:id/skip_ad_button\"]"
        }
      ]
    }
  ]
});
