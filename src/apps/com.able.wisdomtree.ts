// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.able.wisdomtree",
  "name": "知到",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-通知权限",
      "desc": "点击[暂不开启]",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": [
        "https://i.gkd.li/i/13458779",
        "https://i.gkd.li/i/13623441",
        "https://i.gkd.li/i/13695447"
      ],
      "rules": [
        {
          "activityIds": [
            ".widget.MyAlertDialog",
            ".login.MainGroupActivity",
            "com.example.advertisement_business.advertisement.AdvertisementActivity"
          ],
          "matches": [
            "[text=\"开启消息推送通知\"][visibleToUser=true]",
            "[text=\"暂不开启\"][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13458779",
            "https://i.gkd.li/i/13623441",
            "https://i.gkd.li/i/13695447"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "TextView[id=\"com.able.wisdomtree:id/negativeButton\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "desc": "点击[忽略]",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": [
        "https://i.gkd.li/i/13458796",
        "https://i.gkd.li/i/13797285"
      ],
      "rules": [
        {
          "activityIds": [
            ".login.StartActivity",
            "com.example.advertisement_business.advertisement.AdvertisementActivity"
          ],
          "matches": [
            "[text=\"更新\"] ",
            " [text=\"忽略\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13458796",
            "https://i.gkd.li/i/13797285"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"更新\"] -n [text=\"忽略\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "通知提示-课程提醒",
      "desc": "点击[已绑定，不再提示]",
      "rules": [
        {
          "fastQuery": true,
          "matches": [
            "[text=\"课程提醒\"][visibleToUser=true]",
            "[text=\"已绑定，不再提示\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/cceb9974-935d-496b-9b26-431864364433",
          "snapshotUrls": "https://i.gkd.li/i/23122012"
        }
      ]
    },
    {
      "key": 3,
      "name": "通知提示-AI分析",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".course.course.studycourse.activity.StudyCourseVideoActivity",
          "matches": "@[vid=\"im_close\"][clickable=true] - [text$=\"同学\"]",
          "snapshotUrls": "https://i.gkd.li/i/24230330"
        }
      ]
    }
  ]
});
