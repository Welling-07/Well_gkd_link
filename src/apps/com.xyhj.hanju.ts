// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xyhj.hanju",
  "name": "韩剧TV",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-播放页下方广告",
      "desc": "点击x",
      "enable": false,
      "fastQuery": true,
      "activityIds": ".ui.activity.ZtvSeriesActivity",
      "exampleUrls": "https://e.gkd.li/b94e7ce3-16ba-42e0-9e93-882ceb5e6ab0",
      "snapshotUrls": "https://i.gkd.li/i/17265226",
      "rules": [
        {
          "matches": "[vid=\"unified_ad_close\"]",
          "fastQuery": true,
          "activityIds": ".ui.activity.ZtvSeriesActivity"
        }
      ]
    }
  ]
});
