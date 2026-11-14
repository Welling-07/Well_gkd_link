// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.phoenix.read",
  "name": "红果免费短剧",
  "groups": [
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "desc": "点击[取消]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "matches": [
            "[text*=\"开启\"][text*=\"提醒\" || text*=\"通知\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/33926663",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
