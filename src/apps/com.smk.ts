// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.smk",
  "name": "杭州市民卡",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": [
        "com.smk.activity.MainActivity",
        "com.smk.activity.LaunchActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/13402584",
        "https://i.gkd.li/i/13425013"
      ],
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".activity.MainActivity",
            ".activity.LaunchActivity",
            "com.tianmu.biz.activity.InterstitialActivity"
          ],
          "matches": "[vid=\"iv_close_ad\" || vid=\"tianmu_widget_iv_close\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13402584",
            "https://i.gkd.li/i/13425013",
            "https://i.gkd.li/i/23567834"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.smk:id/iv_close_ad\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.smk.activity.MainActivity",
            "com.smk.activity.LaunchActivity"
          ]
        }
      ]
    }
  ]
});
