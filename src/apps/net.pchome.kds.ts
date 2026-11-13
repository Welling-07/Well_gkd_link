// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "net.pchome.kds",
  "name": "kds宽带山",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-应用内卡片广告",
      "activityIds": ".View.activity.TopicActivity2",
      "rules": [
        {
          "matches": "@Image[text=\"\"] < View +2 View > View > View > TextView",
          "snapshotUrls": "https://i.gkd.li/i/13043221",
          "activityIds": ".View.activity.TopicActivity2"
        },
        {
          "preKeys": 0,
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13049609",
          "activityIds": ".View.activity.TopicActivity2"
        },
        {
          "matches": "@Image[text=\"\"] < View +2 View > View > View > TextView",
          "snapshotUrls": "https://i.gkd.li/i/13043221",
          "activityIds": "net.pchome.kds.View.activity.TopicActivity2"
        },
        {
          "preKeys": 2,
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13049609",
          "activityIds": "net.pchome.kds.View.activity.TopicActivity2"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-应用内广告卡片",
      "enable": false,
      "activityIds": "net.pchome.kds.View.activity.TopicActivity2",
      "rules": [
        {
          "matches": "@Image[text=\"\"] < View +2 View > View > View > TextView",
          "snapshotUrls": "https://i.gkd.li/i/13043221",
          "activityIds": "net.pchome.kds.View.activity.TopicActivity2"
        },
        {
          "preKeys": 0,
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13049609",
          "activityIds": "net.pchome.kds.View.activity.TopicActivity2"
        }
      ]
    }
  ]
});
