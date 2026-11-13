// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hd.smartVillage",
  "name": "恒大智慧社区",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": [
        "https://i.gkd.li/i/13223669",
        "https://i.gkd.li/i/13293000"
      ],
      "rules": [
        {
          "activityIds": [
            ".modules.main.MainActivity",
            ".modules.h5service.H5WebActivity"
          ],
          "matches": "View[vid=\"notificationSettingCloseBtn\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13223669",
            "https://i.gkd.li/i/13293000"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "View[id=\"com.hd.smartVillage:id/notificationSettingCloseBtn\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13223642",
      "rules": [
        {
          "activityIds": ".modules.main.MainActivity",
          "matches": "TextView[vid=\"tv_upgrade_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13223642",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "TextView[id=\"com.hd.smartVillage:id/tv_upgrade_cancel\"][text=\"取消\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "未分类-关闭开启通知弹窗",
      "enable": false,
      "fastQuery": true,
      "actionMaximum": 1,
      "activityIds": [
        "com.hd.smartVillage.modules.main.MainActivity",
        "com.hd.smartVillage.modules.h5service.H5WebActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/13223669",
        "https://i.gkd.li/i/13293000"
      ],
      "rules": [
        {
          "matches": "View[id=\"com.hd.smartVillage:id/notificationSettingCloseBtn\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "activityIds": [
            "com.hd.smartVillage.modules.main.MainActivity",
            "com.hd.smartVillage.modules.h5service.H5WebActivity"
          ]
        }
      ]
    }
  ]
});
