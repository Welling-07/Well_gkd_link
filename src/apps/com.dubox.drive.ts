// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.dubox.drive",
  "name": "TeraBox",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "TextView[vid=\"tv_skip\"]",
          "snapshotUrls": "https://i.gkd.li/i/13200574",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "@[vid=\"ivClose\"] - * >2 [id=\"inmobi-ad\"]",
          "snapshotUrls": "https://i.gkd.li/i/13688384",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "TextView[id=\"com.dubox.drive:id/tv_skip\"]",
          "snapshotUrls": "https://i.gkd.li/i/13200574",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0
        },
        {
          "matches": "@[id=\"com.dubox.drive:id/ivClose\"] - * >2 [id=\"inmobi-ad\"]",
          "snapshotUrls": "https://i.gkd.li/i/13688384",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 2,
          "priorityTime": 10000
        },
        {
          "matches": [
            "[id=\"inmobi-ad\"]",
            "[id=\"com.dubox.drive:id/ivClose\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13688384",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "activityIds": "com.dubox.drive.ui.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13200577",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ui.MainActivity",
          "matches": "ImageView[vid=\"ivClose\"]",
          "snapshotUrls": "https://i.gkd.li/i/13200577",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "ImageView[id=\"com.dubox.drive:id/ivClose\"]",
          "fastQuery": true,
          "activityIds": "com.dubox.drive.ui.MainActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "activityIds": "com.dubox.drive.permission.view.PermissionDialogActivity",
      "snapshotUrls": "https://i.gkd.li/i/13688406",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".permission.view.PermissionDialogActivity",
          "matches": "[text=\"Authorize\"] - [vid=\"dialog_button_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13688406",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"Authorize\"] - [id=\"com.dubox.drive:id/dialog_button_cancel\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.dubox.drive.permission.view.PermissionDialogActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.dubox.drive.ui.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13200577",
      "rules": [
        {
          "matches": "ImageView[id=\"com.dubox.drive:id/ivClose\"]",
          "fastQuery": true,
          "activityIds": "com.dubox.drive.ui.MainActivity"
        }
      ]
    }
  ]
});
