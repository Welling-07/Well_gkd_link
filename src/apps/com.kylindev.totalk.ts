// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.kylindev.totalk",
  "name": "滔滔对讲",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchRoot": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[vid=\"adgain_splash_skip_ll\"]",
          "snapshotUrls": "https://i.gkd.li/i/30350919",
          "fastQuery": true,
          "matchRoot": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "其他-开屏误触兜底",
      "desc": "误进广告页后自动退出",
      "scopeKeys": [
        0
      ],
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "name": "按[返回键]",
          "fastQuery": true,
          "action": "back",
          "activityIds": "com.adgain.sdk.base.activity.AdActivity",
          "matches": "[id=\"android:id/decor_content_parent\"]",
          "snapshotUrls": "https://i.gkd.li/i/32742369",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
