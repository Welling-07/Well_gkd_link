// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.baidu.tieba_mini",
  "name": "贴吧极速版",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-首页信息流广告",
      "activityIds": [
        "com.baidu.tieba.tblauncher.MainTabActivity"
      ],
      "rules": [
        {
          "matches": "LinearLayout > [text=\"广告\"] + ImageView",
          "snapshotUrls": "https://i.gkd.li/i/12905039",
          "activityIds": [
            "com.baidu.tieba.tblauncher.MainTabActivity"
          ]
        },
        {
          "preKeys": 0,
          "matches": "[text=\"屏蔽广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12904633"
          ],
          "activityIds": [
            "com.baidu.tieba.tblauncher.MainTabActivity"
          ]
        }
      ]
    }
  ]
});
