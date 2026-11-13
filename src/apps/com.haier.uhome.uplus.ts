// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.haier.uhome.uplus",
  "name": "海尔智家",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "activityIds": [
        "com.haier.uhome.uplus.upgradeui.ui.UpgradeDialogActivity",
        "com.huawei.android.launcher.unihome.UniHomeLauncher"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12726844",
        "https://i.gkd.li/i/12726801"
      ],
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".upgradeui.ui.UpgradeDialogActivity",
          "matches": "@[text=\"取消\"] + [text=\"立即更新\"||text=\"立即安装\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12726844",
            "https://i.gkd.li/i/12726801"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[text=\"取消\"] + [text=\"立即更新\"||text=\"立即安装\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.haier.uhome.uplus.upgradeui.ui.UpgradeDialogActivity",
            "com.huawei.android.launcher.unihome.UniHomeLauncher"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12726829",
      "activityIds": ".ui.widget.MPermissionCheckDialog",
      "rules": [
        {
          "matches": "@[checked=false] + [text=\"禁止后不在询问\"]",
          "exampleUrls": "https://e.gkd.li/e1c6f008-4eba-4370-b7a1-054d0279956a",
          "snapshotUrls": "https://i.gkd.li/i/12726829",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".ui.widget.MPermissionCheckDialog"
        },
        {
          "preKeys": 0,
          "matches": "[text=\"取消\"]",
          "exampleUrls": "https://e.gkd.li/e1c6f008-4eba-4370-b7a1-054d0279956a",
          "snapshotUrls": "https://i.gkd.li/i/12726829",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".ui.widget.MPermissionCheckDialog"
        },
        {
          "matches": "[text*=\"通知栏权限\"] +n LinearLayout > [text=\"取消\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".ui.widget.MPermissionCheckDialog"
        }
      ]
    },
    {
      "key": 2,
      "name": "未分类-请求通知权限弹窗",
      "enable": false,
      "activityIds": "com.haier.uhome.uplus.ui.widget.MPermissionCheckDialog",
      "snapshotUrls": "https://i.gkd.li/i/12726829",
      "rules": [
        {
          "matches": "[text*=\"通知栏权限\"] +n LinearLayout > [text=\"取消\"]",
          "activityIds": "com.haier.uhome.uplus.ui.widget.MPermissionCheckDialog"
        }
      ]
    }
  ]
});
