// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.dewmobile.kuaiya",
  "name": "快牙",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "name": "腾讯广告",
          "fastQuery": true,
          "activityIds": ".act.MainActivity",
          "matches": "FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView[childCount=0][visibleToUser=true] <<n [vid=\"sdk_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13477048"
        },
        {
          "name": "腾讯广告 (2)",
          "activityIds": "com.dewmobile.kuaiya.act.MainActivity",
          "matches": "ImageView - FrameLayout[childCount=1] > ImageView[childCount=0]",
          "snapshotUrls": "https://i.gkd.li/i/13477048"
        }
      ]
    }
  ]
});
