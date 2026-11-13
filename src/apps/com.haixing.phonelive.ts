// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.haixing.phonelive",
  "name": "海星体育",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-]权限授权]弹窗",
      "desc": "点击取消",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.longya.live.activity.MainActivity",
          "matches": [
            "[text*=\"权限授权\"]",
            "[text=\"取消\"]"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/0524b810-b24f-4e5b-8a62-5b660b04255b",
          "snapshotUrls": "https://i.gkd.li/i/15369230",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
