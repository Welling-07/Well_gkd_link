// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.mm.android.lc",
  "name": "乐橙",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "ignoreGlobalGroupMatch": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "matchTime": 10000,
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/14586621",
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "matches": "[vid=\"advert_countdown_view\"]",
          "exampleUrls": "https://m.gkd.li/57941037/b30750e1-92ca-452b-8467-a0074989ec92",
          "snapshotUrls": "https://i.gkd.li/i/14586621",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    }
  ]
});
