// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jd.pingou",
  "name": "京喜",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-定位权限",
      "activityIds": "com.jd.jdlite.MainFrameActivity",
      "snapshotUrls": "https://i.gkd.li/i/13804515",
      "actionMaximum": 1,
      "resetMatch": "app",
      "matchTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.jd.jdlite.MainFrameActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true] -2 [text^=\"开启定位授权\"]",
          "exampleUrls": "https://e.gkd.li/311e64ee-e775-41fb-b981-ceead0280ac7",
          "snapshotUrls": "https://i.gkd.li/i/13804515",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text*=\"开启定位授权\"] +2 ImageView",
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.jd.jdlite.MainFrameActivity",
          "matchTime": 10000
        }
      ]
    }
  ]
});
