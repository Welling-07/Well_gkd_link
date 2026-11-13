// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.baidu.newapp",
  "name": "文心一言",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".update.UpdateAlertActivity",
          "matches": "[text=\"立即更新\"] + [text=\"暂不升级\"]",
          "snapshotUrls": "https://i.gkd.li/i/13360280",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"立即更新\"] + [text=\"暂不升级\"]",
          "snapshotUrls": "https://i.gkd.li/i/13360280",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    }
  ]
});
