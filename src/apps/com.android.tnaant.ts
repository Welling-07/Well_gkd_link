// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.android.tnaant",
  "name": "蚂蚁加速器",
  "groups": [
    {
      "key": 0,
      "name": "通知提示-公告弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13713449",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.dd.antss.ui.activity.LaunchActivity",
          "matches": "[text=\"公告\"] +2 [text=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/13713449",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"公告\"] +2 [text=\"我知道了\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    }
  ]
});
