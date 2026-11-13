// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "moc.nauxuoyoaixoaix.www",
  "name": "晓晓优选",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "actionCdKey": 0,
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13476862",
            "https://i.gkd.li/i/13820450"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "fastQuery": true
        },
        {
          "fastQuery": true,
          "matches": "[text^=\"跳过\"][text.length<=10][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13625367",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000,
          "actionCdKey": 0
        },
        {
          "matches": "[id$=\"tt_splash_skip_btn\"] <<n [vid=\"adsFl\"]",
          "snapshotUrls": "https://i.gkd.li/i/13476862",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "actionCdKey": 0,
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": [
            "[vid=\"adsFl\"]",
            "[text^=\"跳过\"][text.length<=10]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13625367",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "actionCdKey": 2,
          "actionMaximumKey": 2,
          "priorityTime": 10000
        },
        {
          "matches": "@View <3 FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < [vid=\"adsFl\"]",
          "snapshotUrls": "https://i.gkd.li/i/13820450",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "actionCdKey": 2,
          "actionMaximumKey": 2,
          "priorityTime": 10000
        }
      ]
    }
  ]
});
