// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.chowbus.branded.molly",
  "name": "Molly Tea",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "forcedTime": 10000,
      "actionMaximum": 3,
      "actionCd": 800,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.chowbus.branded.branded_app.MainActivity",
          "matches": "[desc^=\"Skip\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/29147518",
          "exampleUrls": "https://e.gkd.li/a43170a0-8196-49d8-bb4d-3554aeae1900",
          "matchTime": 10000,
          "forcedTime": 10000,
          "actionMaximum": 3,
          "actionCd": 800,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
