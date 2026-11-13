// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tencent.qt.sns",
  "name": "掌上穿越火线",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-首页活动弹窗",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "matchTime": 10000,
      "snapshotUrls": "https://i.gkd.li/i/13497978",
      "rules": [
        {
          "matches": "[vid=\"closebtn\"]",
          "snapshotUrls": "https://i.gkd.li/i/13497978",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.tencent.qt.sns:id/closebtn\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "matchTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": [
        "https://i.gkd.li/i/13497984",
        "https://i.gkd.li/i/13713478"
      ],
      "rules": [
        {
          "activityIds": "com.tencent.gamehelper.ui.main.MainActivity",
          "matches": [
            "[text=\"版本更新\" || text=\"现在升级\"][visibleToUser=true]",
            "[text=\"取消\"][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13713478",
            "https://i.gkd.li/i/20851162"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"版本更新\"] +4 LinearLayout > [text=\"取消\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    }
  ]
});
