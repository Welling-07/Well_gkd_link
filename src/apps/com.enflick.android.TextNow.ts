// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.enflick.android.TextNow",
  "name": "TextNow",
  "groups": [
    {
      "key": 0,
      "name": "其他-设为默认应用提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": ".activities.MainActivity",
      "rules": [
        {
          "matches": "[vid=\"btn_dismiss\"][text=\"Not Now\"]",
          "snapshotUrls": "https://i.gkd.li/i/13630460",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".activities.MainActivity"
        },
        {
          "preKeys": 0,
          "matches": "[id=\"android:id/button2\"][text=\"SKIP\"]",
          "snapshotUrls": "https://i.gkd.li/i/13630463",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".activities.MainActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-通知/链接蓝牙附件设备",
      "fastQuery": true,
      "activityIds": "com.enflick.android.TextNow.activities.MainActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/13657279",
        "https://i.gkd.li/i/13657280"
      ],
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activities.MainActivity",
          "matches": "@ImageView[clickable=true] <2 [vid=\"calling_banner\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13657279",
            "https://i.gkd.li/i/13657280"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@ImageView[clickable=true] <2 [id=\"com.enflick.android.TextNow:id/calling_banner\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.enflick.android.TextNow.activities.MainActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "功能类-设为默认应用提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "matches": "[id=\"com.enflick.android.TextNow:id/btn_dismiss\"][text=\"Not Now\"]",
          "snapshotUrls": "https://i.gkd.li/i/13630460",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        },
        {
          "preKeys": 0,
          "matches": "[id=\"android:id/button2\"][text=\"SKIP\"]",
          "snapshotUrls": "https://i.gkd.li/i/13630463",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    }
  ]
});
