// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.kmb.app1933",
  "name": "KMB . LWB",
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
          "activityIds": "com.google.android.gms.ads.AdActivity",
          "matches": "[desc=\"Interstitial close button\"]",
          "exampleUrls": "https://e.gkd.li/3b5d7bcd-4629-44af-8ee9-5c8a1001ebad",
          "snapshotUrls": "https://i.gkd.li/i/16620586",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "activityIds": "com.google.android.gms.ads.AdActivity",
          "matches": "[desc=\"打开\"] - View > [text=\"关闭\"]",
          "exampleUrls": "https://e.gkd.li/14158b1c-88f3-4e5c-bbc1-193186e77b07",
          "snapshotUrls": "https://i.gkd.li/i/16620123",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "activityIds": "com.google.android.gms.ads.AdActivity",
          "matches": "WebView >2 View[childCount=3] >2 View[childCount=2] > View[childCount=2] > View[childCount=1] > Button[clickable=true]",
          "exampleUrls": "https://e.gkd.li/0be64275-23d1-4b13-b444-6e0c67fdd8fc",
          "snapshotUrls": "https://i.gkd.li/i/16621030",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        }
      ]
    }
  ]
});
