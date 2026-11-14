// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.panaceasoft.pswallpaper",
  "name": "ClrvAI",
  "groups": [
    {
      "key": 0,
      "name": "通知提示-公告弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "activityIds": ".xiao.MainActivity",
      "rules": [
        {
          "matches": "[vid=\"cb_ignore\"][checked=false]",
          "exampleUrls": "https://e.gkd.li/b92e4e94-fafc-47b1-9774-3126cfaed981",
          "snapshotUrls": "https://i.gkd.li/i/14141561",
          "fastQuery": true,
          "matchTime": 10000,
          "resetMatch": "app",
          "actionMaximum": 1,
          "activityIds": ".xiao.MainActivity"
        },
        {
          "preKeys": 0,
          "matches": "[vid=\"iv_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/b92e4e94-fafc-47b1-9774-3126cfaed981",
          "snapshotUrls": "https://i.gkd.li/i/14141561",
          "fastQuery": true,
          "matchTime": 10000,
          "resetMatch": "app",
          "actionMaximum": 1,
          "activityIds": ".xiao.MainActivity"
        },
        {
          "matches": [
            "[text=\"下一条\"]",
            "[vid=\"iv_close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/14141561",
          "fastQuery": true,
          "matchTime": 10000,
          "resetMatch": "app",
          "actionMaximum": 1,
          "activityIds": ".xiao.MainActivity"
        }
      ]
    }
  ]
});
