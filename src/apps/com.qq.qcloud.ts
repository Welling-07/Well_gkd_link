// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.qq.qcloud",
  "name": "腾讯微云",
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
          "fastQuery": true,
          "activityIds": ".activity.WeiyunRootActivity",
          "matches": "@LinearLayout -(1,2) [text=\"互动广告\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/19752123",
            "https://i.gkd.li/i/19752144"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[id=\"com.qq.qcloud:id/gdt_ad_text\"] + ImageView",
          "snapshotUrls": "https://i.gkd.li/i/12755789",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0
        },
        {
          "matches": "[text^=\"互动广告\"] + @LinearLayout[clickable=true] > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/12755799",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 1,
          "priorityTime": 10000
        },
        {
          "matches": "[id=\"android:id/content\"] >2 FrameLayout[childCount=4] > @LinearLayout[clickable=true] > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/14735621",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 1,
          "priorityTime": 10000
        }
      ]
    }
  ]
});
