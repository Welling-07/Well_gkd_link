// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.phoenix.read.oversea.gp",
  "name": "红果短剧",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-通知权限",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.dragon.read.pages.main.MainFragmentActivity",
            "com.dragon.read.component.shortvideo.impl.ShortSeriesActivity"
          ],
          "matches": "@[clickable=true] > [visibleToUser=true][text=\"暂不开启\"] <<n [vid=\"push_permission_bottom_v2_compose_view\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/34212912",
            "https://i.gkd.li/i/34348017"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告",
      "rules": [
        {
          "fastQuery": true,
          "swipeArg": {
            "start": {
              "x": "screenWidth * 0.5",
              "y": "screenHeight * 0.7"
            },
            "end": {
              "x": "screenWidth * 0.5",
              "y": "screenHeight * 0.3"
            },
            "duration": 300
          },
          "activityIds": "com.dragon.read.pages.main.MainFragmentActivity",
          "matches": "[vid=\"ad_source\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/34213154"
        }
      ]
    }
  ]
});
