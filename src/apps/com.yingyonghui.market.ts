// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.yingyonghui.market",
  "name": "应用汇",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[vid=\"splashAdvert_skipLayout\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/32155585",
          "fastQuery": true,
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
      "rules": [
        {
          "name": "快手广告",
          "fastQuery": true,
          "activityIds": ".ui.MainActivity",
          "matches": [
            "[text=\"广告\"]",
            "@ImageView[clickable=true] - [text=\"|\"] - [text$=\"s\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13538316"
        },
        {
          "name": "快手广告 (2)",
          "activityIds": "com.yingyonghui.market.ui.MainActivity",
          "matches": [
            "ViewGroup[childCount=2] > ImageView + [text=\"广告\"]",
            "ViewGroup[childCount=3] > TextView + TextView + ImageView"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13538316"
        }
      ]
    }
  ]
});
