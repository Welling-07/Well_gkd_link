// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.diershoubing.erbing",
  "name": "二柄",
  "groups": [
    {
      "key": 0,
      "name": "分段广告",
      "fastQuery": true,
      "activityIds": ".activity.MainReActivity",
      "rules": [
        {
          "matches": "[text=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/921d559f-6535-4d54-9bb2-8bbc82a6f2e1",
          "snapshotUrls": "https://i.gkd.li/i/13868396",
          "fastQuery": true,
          "activityIds": ".activity.MainReActivity"
        },
        {
          "preKeys": 0,
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "exampleUrls": "https://e.gkd.li/e6818e93-3fab-4afa-95b9-0ba38ea7f2db",
          "snapshotUrls": "https://i.gkd.li/i/13868401",
          "fastQuery": true,
          "activityIds": ".activity.MainReActivity"
        },
        {
          "matches": "[id=\"com.diershoubing.erbing:id/mainV\"] >n [text=\"广告\"]",
          "exampleUrls": "https://m.gkd.li/47232102/5498dc61-9f29-42c6-a75b-ac8471e48328",
          "snapshotUrls": "https://i.gkd.li/i/13868396",
          "fastQuery": true,
          "activityIds": ".activity.MainReActivity"
        },
        {
          "preKeys": 2,
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13868401",
          "fastQuery": true,
          "activityIds": ".activity.MainReActivity"
        },
        {
          "matches": "[id=\"com.diershoubing.erbing:id/mainV\"] >n [text=\"广告\"]",
          "exampleUrls": "https://m.gkd.li/47232102/5498dc61-9f29-42c6-a75b-ac8471e48328",
          "snapshotUrls": "https://i.gkd.li/i/13868396",
          "fastQuery": true,
          "activityIds": ".activity.MainReActivity"
        },
        {
          "preKeys": 4,
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13868401",
          "fastQuery": true,
          "activityIds": ".activity.MainReActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13378853",
            "https://i.gkd.li/i/13546165"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "fastQuery": true
        },
        {
          "fastQuery": true,
          "matches": "[text=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/13538207",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "@[id$=\"tt_splash_skip_btn\"] <<n [vid=\"containerV\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13378853",
            "https://i.gkd.li/i/13546165"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "@View <2 FrameLayout[childCount=3] <2 FrameLayout[childCount=2] < [vid=\"containerV\"]",
          "snapshotUrls": "https://i.gkd.li/i/13857307",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "actionMaximumKey": 0,
          "priorityTime": 10000
        }
      ]
    }
  ]
});
