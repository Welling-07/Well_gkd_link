// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jv.samsungeshop",
  "name": "三星商城",
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
          "matches": "[desc=\"跳过\"][desc.length<10][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/65cbe48e-843e-4dba-a53b-5f6598a2b409",
          "snapshotUrls": "https://i.gkd.li/i/23288756",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    }
  ]
});
