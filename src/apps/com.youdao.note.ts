// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.youdao.note",
  "name": "有道云笔记",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "name": "首页上方卡片广告",
          "fastQuery": true,
          "activityIds": ".activity2.MainActivity",
          "matches": "[vid=\"recycle_view\"] + [vid=\"close_ad\"]",
          "snapshotUrls": "https://i.gkd.li/i/13379524"
        },
        {
          "name": "首页上方卡片广告 (2)",
          "activityIds": "com.youdao.note.activity2.MainActivity",
          "fastQuery": true,
          "matches": "[id=\"com.youdao.note:id/recycle_view\"] + [id=\"com.youdao.note:id/close_ad\"]",
          "snapshotUrls": "https://i.gkd.li/i/13379524"
        }
      ]
    }
  ]
});
