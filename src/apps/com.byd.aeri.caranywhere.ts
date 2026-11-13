// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.byd.aeri.caranywhere",
  "name": "比亚迪王朝",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "resetMatch": "app",
      "actionMaximum": 1,
      "activityIds": [
        "com.byd.aeri.splash.module_splash.activity.TabManager"
      ],
      "matchTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "matches": [
            "[vid=\"tv_determine\"][text=\"立即安装\"]",
            "[vid=\"tv_cancel\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13348383",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.byd.aeri.splash.module_splash.activity.TabManager"
          ]
        },
        {
          "fastQuery": true,
          "matches": [
            "[id=\"com.byd.aeri.caranywhere:id/tv_determine\"][text=\"立即安装\"]",
            "[id=\"com.byd.aeri.caranywhere:id/tv_cancel\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13348383",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.byd.aeri.splash.module_splash.activity.TabManager"
          ]
        }
      ]
    }
  ]
});
