// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ss.android.yumme.video",
  "name": "抖音精选",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".main.MainActivity",
          "matches": [
            "[text=\"立即升级\"]",
            "[text=\"以后再说\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12534016",
            "https://i.gkd.li/i/13328599"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": [
            "[text=\"立即升级\"]",
            "[text=\"以后再说\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12534016",
            "https://i.gkd.li/i/13328599"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "评价提示",
      "fastQuery": true,
      "actionMaximum": 1,
      "matchTime": 10000,
      "rules": [
        {
          "action": "back",
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matches": "TextView[text=\"去商店评分\"]",
          "snapshotUrls": "https://i.gkd.li/i/15858132",
          "fastQuery": true,
          "actionMaximum": 1,
          "matchTime": 10000
        },
        {
          "action": "back",
          "matches": "TextView[text=\"去商店评分\"]",
          "snapshotUrls": "https://i.gkd.li/i/15858132",
          "fastQuery": true,
          "actionMaximum": 1,
          "matchTime": 10000
        }
      ]
    },
    {
      "key": 2,
      "name": "青少年模式",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "action": "back",
          "matches": "Button[text=\"开启青少年模式\"]",
          "snapshotUrls": "https://i.gkd.li/i/15858125",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
