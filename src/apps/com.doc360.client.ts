// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.doc360.client",
  "name": "个人图书馆",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-信息流广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "activityIds": "com.doc360.client.activity.ReadRoomActivity",
      "snapshotUrls": "https://i.gkd.li/i/13485051",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.ReadRoomActivity",
          "matches": "@View[clickable=true] < FrameLayout[desc^=\"dislike\"] -2 FrameLayout >2 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13485051"
        },
        {
          "matches": "@FrameLayout[desc^=\"dislike\"] <<n [id=\"com.doc360.client:id/fl_ad_container\"]",
          "fastQuery": true,
          "activityIds": "com.doc360.client.activity.ReadRoomActivity"
        }
      ]
    }
  ]
});
