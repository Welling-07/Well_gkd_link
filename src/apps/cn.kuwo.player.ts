// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.kuwo.player",
  "name": "酷我音乐",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-酷我会员日弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activities.MainActivity",
          "matches": "[vid=\"iv_business_personal_dia_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13974483",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "cn.kuwo.player.activities.MainActivity",
          "matches": "[id=\"cn.kuwo.player:id/iv_business_personal_dia_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13974483",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
