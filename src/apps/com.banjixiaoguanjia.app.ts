// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.banjixiaoguanjia.app",
  "name": "班级小管家",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-卡片广告",
      "activityIds": ".MainActivity",
      "rules": [
        {
          "matches": "[id=\"com.byted.pangle:id/tt_bu_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12904612",
          "activityIds": ".MainActivity"
        },
        {
          "preKeys": 0,
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12906196",
          "activityIds": ".MainActivity"
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_bu_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12904612",
          "activityIds": "com.banjixiaoguanjia.app.MainActivity"
        },
        {
          "preKeys": 2,
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12906196",
          "activityIds": "com.banjixiaoguanjia.app.MainActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-应用内广告卡片",
      "enable": false,
      "activityIds": "com.banjixiaoguanjia.app.MainActivity",
      "rules": [
        {
          "matches": "[id=\"com.byted.pangle:id/tt_bu_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12904612",
          "activityIds": "com.banjixiaoguanjia.app.MainActivity"
        },
        {
          "preKeys": 0,
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12906196",
          "activityIds": "com.banjixiaoguanjia.app.MainActivity"
        }
      ]
    }
  ]
});
