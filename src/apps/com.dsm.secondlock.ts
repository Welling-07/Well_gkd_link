// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.dsm.secondlock",
  "name": "德施曼智能",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".main.MainActivity",
            "com.dsm.message.activity.MessageActivity"
          ],
          "matches": "[vid=\"ivCancel\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/29934451",
            "https://i.gkd.li/i/29934452"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".main.MainActivity",
          "matches": "[vid=\"ivCloseBanner\"]",
          "snapshotUrls": "https://i.gkd.li/i/29934453"
        }
      ]
    }
  ]
});
