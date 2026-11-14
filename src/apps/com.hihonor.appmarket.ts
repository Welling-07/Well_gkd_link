// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hihonor.appmarket",
  "name": "荣耀应用市场",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[vid=\"tv_operation_skip\" || vid=\"btn_skip\"]",
          "exampleUrls": "https://e.gkd.li/549d5fc1-20a2-42aa-b249-4cc8896807e6",
          "snapshotUrls": [
            "https://i.gkd.li/i/16406381",
            "https://i.gkd.li/i/29175881"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[vid=\"tv_operation_skip\"]",
          "exampleUrls": "https://e.gkd.li/549d5fc1-20a2-42aa-b249-4cc8896807e6",
          "snapshotUrls": "https://i.gkd.li/i/16406381",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "activityIds": [
        "com.hihonor.android.launcher.unihome.UniHomeLauncher",
        "com.hihonor.appmarket.module.main.MainActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/13063815",
        "https://i.gkd.li/i/13168440"
      ],
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            "com.hihonor.android.launcher.unihome.UniHomeLauncher",
            ".module.main.MainActivity"
          ],
          "matches": "[vid=\"iv_dialog_operation_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13063815",
            "https://i.gkd.li/i/13168440"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.hihonor.appmarket:id/iv_dialog_operation_close\"]",
          "fastQuery": true,
          "activityIds": [
            "com.hihonor.android.launcher.unihome.UniHomeLauncher",
            "com.hihonor.appmarket.module.main.MainActivity"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-悬浮窗小广告",
      "fastQuery": true,
      "activityIds": "com.hihonor.appmarket.module.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13063928",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".module.main.MainActivity",
          "matches": "[vid=\"iv_floating_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13063928"
        },
        {
          "matches": "[id=\"com.hihonor.appmarket:id/iv_floating_close\"]",
          "fastQuery": true,
          "activityIds": "com.hihonor.appmarket.module.main.MainActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13073319",
      "rules": [
        {
          "activityIds": ".module.main.MainActivity",
          "matches": "TextView[text=\"接收通知\"] < LinearLayout < LinearLayout +n [id=\"android:id/buttonPanel\"] Button[text=\"否\"]",
          "snapshotUrls": "https://i.gkd.li/i/13073319",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        },
        {
          "matches": "TextView[text=\"接收通知\"] < LinearLayout < LinearLayout +n [id=\"android:id/buttonPanel\"] Button[text=\"否\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 4,
      "name": "通知提示-个性化内容推荐提示",
      "desc": "点击取消",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".module.main.MainActivity",
          "matches": [
            "[text*=\"个性化的内容推荐\"][visibleToUser=true]",
            "[text=\"取消\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/12825cd1-cd11-40eb-80e3-45d93c9ad058",
          "snapshotUrls": "https://i.gkd.li/i/21884571",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 6,
      "name": "未分类-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "activityIds": [
        "com.hihonor.android.launcher.unihome.UniHomeLauncher",
        "com.hihonor.appmarket.module.main.MainActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/13063815",
        "https://i.gkd.li/i/13168440"
      ],
      "rules": [
        {
          "matches": "[id=\"com.hihonor.appmarket:id/iv_dialog_operation_close\"]",
          "fastQuery": true,
          "activityIds": [
            "com.hihonor.android.launcher.unihome.UniHomeLauncher",
            "com.hihonor.appmarket.module.main.MainActivity"
          ]
        }
      ]
    },
    {
      "key": 7,
      "name": "未分类-推送通知",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.hihonor.appmarket.module.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13073319",
      "rules": [
        {
          "matches": "TextView[text=\"接收通知\"] < LinearLayout < LinearLayout +n [id=\"android:id/buttonPanel\"] Button[text=\"否\"]",
          "fastQuery": true,
          "activityIds": "com.hihonor.appmarket.module.main.MainActivity"
        }
      ]
    }
  ]
});
