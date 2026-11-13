// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.taobao.litetao",
  "name": "淘特",
  "groups": [
    {
      "key": 0,
      "name": "更新提示-版本升级弹窗",
      "activityIds": [
        "com.taobao.ltao.maintab.MainFrameActivity",
        "com.taobao.litetao.launcher.ALiFlutterActivityCompat"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12843615",
        "https://i.gkd.li/i/12843614"
      ],
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            "com.taobao.ltao.maintab.MainFrameActivity",
            ".launcher.ALiFlutterActivityCompat"
          ],
          "matches": "[id = \"com.taobao.litetao:id/update_imageview_cancel_v2\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12843615",
            "https://i.gkd.li/i/12843614"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id = \"com.taobao.litetao:id/update_imageview_cancel_v2\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.taobao.ltao.maintab.MainFrameActivity",
            "com.taobao.litetao.launcher.ALiFlutterActivityCompat"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "开屏广告",
      "order": -10,
      "activityIds": "com.taobao.ltao.maintab.MainFrameActivity",
      "snapshotUrls": "https://i.gkd.li/i/12774851",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[id=\"com.taobao.litetao:id/root_layout\"] > TextView[text^=\"还剩\"&&text$=\"秒\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "activityIds": "com.taobao.ltao.maintab.MainFrameActivity"
        }
      ]
    }
  ]
});
