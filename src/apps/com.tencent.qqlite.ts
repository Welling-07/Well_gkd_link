// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tencent.qqlite",
  "name": "QQ极速版",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "enable": false,
      "activityIds": [
        "com.tencent.mobileqq.activity.SplashActivity"
      ],
      "rules": [
        {
          "matches": "[id=\"com.tencent.qqlite:id/close_top_bar\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14428054"
          ],
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity"
          ]
        }
      ]
    }
  ]
});
