// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wedobest.shudu",
  "name": "数独",
  "groups": [
    {
      "key": 0,
      "name": "局部广告",
      "desc": "x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".GameAct",
          "matches": "@Button[clickable=true] +2 [text=\"广告\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/24967577"
        }
      ]
    }
  ]
});
