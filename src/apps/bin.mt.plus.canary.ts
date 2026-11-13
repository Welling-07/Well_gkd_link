// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "bin.mt.plus.canary",
  "name": "MT管理器Pro",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13561226",
      "rules": [
        {
          "activityIds": "bin.mt.plus.Main",
          "matches": "@[text=\"取消\"] + [text=\"更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/13561226",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "LinearLayoutCompat @[text=\"取消\"] + [text=\"更新\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-版本更新",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "bin.mt.plus.Main",
      "snapshotUrls": "https://i.gkd.li/i/13561226",
      "rules": [
        {
          "matches": "LinearLayoutCompat @[text=\"取消\"] + [text=\"更新\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "bin.mt.plus.Main"
        }
      ]
    }
  ]
});
