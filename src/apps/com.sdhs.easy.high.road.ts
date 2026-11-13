// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sdhs.easy.high.road",
  "name": "e高速",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "name": "腾讯广告",
          "fastQuery": true,
          "activityIds": "com.sdhs.easy.main.activity.MainActivity",
          "matches": "@View[clickable=true][childCount=0][visibleToUser=true] < FrameLayout[desc^=\"dislike\"] -2 FrameLayout >3 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13670340"
        },
        {
          "name": "腾讯广告 (2)",
          "activityIds": "com.sdhs.easy.main.activity.MainActivity",
          "matches": [
            "[desc^=\"logoad\"]",
            "[desc^=\"dislike\"] > View[clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13670340"
        }
      ]
    }
  ]
});
