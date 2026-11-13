// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.mushroomcloud.app",
  "name": "蘑菇云手机",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "@View[clickable=true][width<150 && height<150] - FrameLayout[childCount=3][getChild(2).name$=\"TextView\"] >(n+5) [text*=\"三方应用\" || text*=\"扭动手机\" || text*=\"上滑\" || text*=\"扭一扭\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/34136348",
            "https://i.gkd.li/i/34367435"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.SplashActivity",
          "matches": "[vid=\"content_image\"] + [vid=\"close_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/34140126",
          "exampleUrls": "https://e.gkd.li/ce650c5f-4629-40d7-b846-0d201900392a"
        }
      ]
    }
  ]
});
