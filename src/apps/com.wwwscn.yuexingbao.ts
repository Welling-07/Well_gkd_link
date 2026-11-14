// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wwwscn.yuexingbao",
  "name": "悦通行",
  "groups": [
    {
      "key": 1,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "exampleUrls": "https://m.gkd.li/57941037/5f7651a1-de68-4ca2-bbb6-b42b6b7e73f1",
          "snapshotUrls": [
            "https://i.gkd.li/i/13239194",
            "https://i.gkd.li/i/13723967"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    }
  ]
});
