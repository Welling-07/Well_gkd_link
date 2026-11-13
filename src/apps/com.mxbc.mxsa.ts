// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.mxbc.mxsa",
  "name": "蜜雪冰城",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-主界面弹窗广告",
      "activityIds": [
        "com.mxbc.mxsa.modules.main.MainActivity"
      ],
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".modules.main.MainActivity",
          "matches": "[vid=\"close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12929345",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.mxbc.mxsa:id/close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12929345",
          "activityIds": [
            "com.mxbc.mxsa.modules.main.MainActivity"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
