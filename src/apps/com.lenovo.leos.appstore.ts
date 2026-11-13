// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.lenovo.leos.appstore",
  "name": "联想应用中心",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13401992",
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": "com.zui.launcher.drawer.NormalLauncher",
          "matches": "@[vid=\"dialog_cancel\"] + [text$=\"版本更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/13401992",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        },
        {
          "matches": "@[id=\"com.lenovo.leos.appstore:id/dialog_cancel\"] + [text$=\"版本更新\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activities.NotificationGuideActivity",
          "matches": [
            "[text$=\"打开应用中心通知\"]",
            "[text=\"知道了\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13401991",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": [
            "[text$=\"打开应用中心通知\"]",
            "[text=\"知道了\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13401991",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "未分类-请求通知权限弹窗",
      "enable": false,
      "activityIds": "com.lenovo.leos.appstore.activities.NotificationGuideActivity",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13401991",
      "rules": [
        {
          "matches": "[text$=\"打开应用中心通知\"] +n [text=\"知道了\"]",
          "activityIds": "com.lenovo.leos.appstore.activities.NotificationGuideActivity",
          "fastQuery": true
        }
      ]
    }
  ]
});
