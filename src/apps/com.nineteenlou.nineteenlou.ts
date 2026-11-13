// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.nineteenlou.nineteenlou",
  "name": "19楼",
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
          "fastQuery": true,
          "matches": [
            "[vid=\"adv_layout\"][visibleToUser=true]",
            "[vid=\"jump\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/3c41a2ae-a470-4dc5-974b-4157c77b6efb",
          "snapshotUrls": "https://i.gkd.li/i/20438918",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    }
  ]
});
