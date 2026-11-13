// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.csmbcx.candada",
  "name": "餐大大",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "snapshotUrls": "https://i.gkd.li/i/14079762",
      "rules": [
        {
          "matches": "[vid=\"flContainer\"] >n View[clickable=true]",
          "matchTime": 10000,
          "resetMatch": "app",
          "actionMaximum": 1
        }
      ]
    }
  ]
});
