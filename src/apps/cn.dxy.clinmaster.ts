// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.dxy.clinmaster",
  "name": "临床决策",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".home.MainActivity",
          "matches": "@[vid=\"iv_close\"][clickable=true][visibleToUser=true] -2 [text=\"立即更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/25459821",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "评价提示",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".home.MainActivity",
          "matches": "[text=\"以后\"][visibleToUser=true] < @View[clickable=true] <3 View[childCount=4] <<6 [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/26181264",
          "exampleUrls": "https://e.gkd.li/3bc23861-5be3-4efe-a7c0-386d91ef7de7"
        }
      ]
    }
  ]
});
