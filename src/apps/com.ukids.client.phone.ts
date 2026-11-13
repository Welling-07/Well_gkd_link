// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ukids.client.phone",
  "name": "小小优趣",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "activityIds": [
        "com.ukids.client.phone.parent.ParentClientHomeActivity"
      ],
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".parent.ParentClientHomeActivity",
          "matches": "[vid=\"dialog_dismiss_btn_two\"]",
          "snapshotUrls": "https://i.gkd.li/i/13400238",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "matches": "[id=\"com.ukids.client.phone:id/dialog_dismiss_btn_two\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13400238"
          ],
          "activityIds": [
            "com.ukids.client.phone.parent.ParentClientHomeActivity"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
