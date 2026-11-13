// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wondertek.paper",
  "name": "澎湃新闻",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "activityIds": [
        "cn.thepaper.paper.ui.main.MainActivity"
      ],
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "cn.thepaper.paper.ui.main.MainActivity",
          "matches": "[vid=\"relative_layout\"] + [vid=\"close_photo\"]",
          "snapshotUrls": "https://i.gkd.li/i/12899226",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.wondertek.paper:id/second_num\"] <2 [id=\"com.wondertek.paper:id/relative_layout\"] + [id=\"com.wondertek.paper:id/close_photo\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12899226"
          ],
          "activityIds": [
            "cn.thepaper.paper.ui.main.MainActivity"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-应用内弹窗",
      "enable": false,
      "activityIds": [
        "cn.thepaper.paper.ui.main.MainActivity"
      ],
      "rules": [
        {
          "matches": "[id=\"com.wondertek.paper:id/second_num\"] <2 [id=\"com.wondertek.paper:id/relative_layout\"] + [id=\"com.wondertek.paper:id/close_photo\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12899226"
          ],
          "activityIds": [
            "cn.thepaper.paper.ui.main.MainActivity"
          ]
        }
      ]
    }
  ]
});
