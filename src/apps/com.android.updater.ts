// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.android.updater",
  "name": "系统更新",
  "groups": [
    {
      "key": 4,
      "name": "更新提示-智能更新弹窗",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": [
            "[vid=\"alertTitle\"][text=\"开启智能更新\" || text=\"Install automatically?\"]",
            "[id=\"android:id/button2\"][text=\"暂不开启\" || text=\"No\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/15386937",
            "https://i.gkd.li/i/15386869"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 5,
      "name": "未分类-MIUI更新弹窗",
      "enable": false,
      "activityIds": [
        "com.android.updater.MainActivity",
        "com.android.settings.SubSettings"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12715712",
        "https://i.gkd.li/i/12749906"
      ],
      "rules": [
        {
          "matches": "[id=\"com.android.updater:id/alertTitle\"][text=\"开启智能更新\"] < * +2 * > Button[id=\"android:id/button2\"][text=\"暂不开启\"]",
          "activityIds": [
            "com.android.updater.MainActivity",
            "com.android.settings.SubSettings"
          ]
        }
      ]
    }
  ]
});
