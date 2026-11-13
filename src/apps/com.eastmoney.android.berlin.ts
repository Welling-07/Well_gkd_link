// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.eastmoney.android.berlin",
  "name": "东方财富",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "activityIds": [
        "com.eastmoney.android.module.launcher.internal.home.HomeActivity",
        "com.bbk.launcher2.Launcher"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12706070",
        "https://i.gkd.li/i/13399156"
      ],
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.eastmoney.android.module.launcher.internal.home.HomeActivity",
          "matches": "[vid=\"tv_update_next_time\"]",
          "snapshotUrls": "https://i.gkd.li/i/12706070",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[id=\"com.eastmoney.android.berlin:id/tv_update_next_time\"] + [id=\"com.eastmoney.android.berlin:id/tv_update_now\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.eastmoney.android.module.launcher.internal.home.HomeActivity",
            "com.bbk.launcher2.Launcher"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.eastmoney.android.module.launcher.internal.home.HomeActivity",
          "matches": "[vid=\"iv_single_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/286da57c-7a7f-4668-aea8-7cbff63e8499",
          "snapshotUrls": "https://i.gkd.li/i/23281792",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12706065",
      "rules": [
        {
          "activityIds": "com.eastmoney.android.module.launcher.internal.home.HomeActivity",
          "matches": "[vid=\"push_on_notify_delete\"]",
          "snapshotUrls": "https://i.gkd.li/i/12706065",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.eastmoney.android.berlin:id/push_on_notify_on\"] + [id=\"com.eastmoney.android.berlin:id/push_on_notify_delete\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-请求通知权限提示信息",
      "enable": false,
      "activityIds": [
        "com.eastmoney.android.module.launcher.internal.home.HomeActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12706065"
      ],
      "rules": [
        {
          "matches": "[id=\"com.eastmoney.android.berlin:id/push_on_notify_on\"] + [id=\"com.eastmoney.android.berlin:id/push_on_notify_delete\"]",
          "activityIds": [
            "com.eastmoney.android.module.launcher.internal.home.HomeActivity"
          ]
        }
      ]
    }
  ]
});
