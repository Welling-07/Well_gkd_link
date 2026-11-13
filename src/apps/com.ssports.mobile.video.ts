// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ssports.mobile.video",
  "name": "爱奇艺体育",
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
          "matches": "[vid=\"tv_jump_start_ad\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/6a6a6c4f-4a16-4a10-bb5c-2ce53ebe5e81",
          "snapshotUrls": "https://i.gkd.li/i/17901123",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    }
  ]
});
