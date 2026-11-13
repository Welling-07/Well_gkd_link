// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.Qunar",
  "name": "去哪儿旅行",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "ignoreGlobalGroupMatch": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "matches": "@[text^=\"关闭\"][visibleToUser=true] - RelativeLayout > [vid=\"mery_splash_ad_resource\"]",
          "exampleUrls": "https://e.gkd.li/e5b86f58-2938-4e00-ae5b-cefe05135582",
          "snapshotUrls": "https://i.gkd.li/i/23180019",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.mqunar.atom.attemper.pupgrade.PUpgradeActivity",
          "matches": "[text=\"残忍拒绝\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/068a6e67-572f-4cd5-a4db-ba63d760cbd0",
          "snapshotUrls": "https://i.gkd.li/i/23742676",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
