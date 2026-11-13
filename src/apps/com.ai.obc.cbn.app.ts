// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ai.obc.cbn.app",
  "name": "中国广电",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            ".ui.other.activity.MainActivity",
            ".ui.main.fragment.MainFragment$7$1"
          ],
          "matches": "[id$=\"/ivDis\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12617201",
            "https://i.gkd.li/i/12655061"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id$=\"/ivDis\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12617201",
            "https://i.gkd.li/i/12655061"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-版本弹窗",
      "enable": false,
      "activityIds": [
        "com.ai.obc.cbn.app.ui.other.activity.MainActivity",
        "com.ai.obc.cbn.app.ui.main.fragment.MainFragment"
      ],
      "rules": [
        {
          "matches": "[id$=\"/ivDis\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12617201",
            "https://i.gkd.li/i/12655061"
          ],
          "activityIds": [
            "com.ai.obc.cbn.app.ui.other.activity.MainActivity",
            "com.ai.obc.cbn.app.ui.main.fragment.MainFragment"
          ]
        }
      ]
    }
  ]
});
