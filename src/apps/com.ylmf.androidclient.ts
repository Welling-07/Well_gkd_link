// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ylmf.androidclient",
  "name": "115生活",
  "groups": [
    {
      "key": 1,
      "name": "更新提示",
      "desc": "点击[返回]关闭页面",
      "order": -9,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".UI.UpdateVersionActivity",
          "matches": "@[desc=\"转到上一层级\"] + [text=\"更新版本\"]",
          "exampleUrls": "https://m.gkd.li/57941037/43d4fa0c-789c-4cf7-aa12-7232e9d23e6d",
          "snapshotUrls": "https://i.gkd.li/i/14738944",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.ylmf.androidclient.UI.UpdateVersionActivity",
          "matches": "@[desc=\"转到上一层级\"] + [text=\"更新版本\"]",
          "exampleUrls": "https://m.gkd.li/57941037/43d4fa0c-789c-4cf7-aa12-7232e9d23e6d",
          "snapshotUrls": "https://i.gkd.li/i/14738944",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
