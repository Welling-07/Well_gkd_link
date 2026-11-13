// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.onethingcloud.android",
  "name": "网心云",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "action": "clickCenter",
          "matches": "@View[desc*=\"跳过\"][desc.length<10][visibleToUser=true] < View < View < View < View < FrameLayout < [id=\"android:id/content\"]",
          "exampleUrls": "https://e.gkd.li/0d0560e5-2b7d-4599-8336-a5254d5e13ea",
          "snapshotUrls": "https://i.gkd.li/i/18094505",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true][index=parent.childCount.minus(1)] <(2,3) View[getChild(0).text=null] < View < View[childCount=2] < View < FrameLayout < [id=\"android:id/content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14766665",
            "https://i.gkd.li/i/16438609"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/18094505",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.onethingcloud.android.MainActivity",
          "matches": "[id=\"android:id/content\"] >(3,4) View[childCount=2] >2 View[childCount=2 || childCount=3] > ImageView[index=parent.childCount.minus(1)][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12841171",
            "https://i.gkd.li/i/14035418",
            "https://i.gkd.li/i/14766665",
            "https://i.gkd.li/i/16438609"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "activityIds": "com.onethingcloud.android.MainActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/12841171",
        "https://i.gkd.li/i/14035418",
        "https://i.gkd.li/i/14766665"
      ],
      "rules": [
        {
          "matches": "[id=\"android:id/content\"] >(3,4) View[childCount=2] >2 View[childCount=3] > ImageView[index=2][clickable=true]",
          "activityIds": "com.onethingcloud.android.MainActivity"
        }
      ]
    }
  ]
});
