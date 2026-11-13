// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wuba",
  "name": "58同城",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "fastQuery": true,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            ".activity.more.MoreMainActivity",
            ".home.activity.HomeActivity"
          ],
          "matches": "Button[text*=\"立即更新\"] <n LinearLayout + ImageView[vid=\"close_btn\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/25789427"
          ],
          "fastQuery": true,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "评价提示",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".home.activity.HomeActivity",
          "matches": "[text=\"去评价\"] - [text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/25789452",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});
