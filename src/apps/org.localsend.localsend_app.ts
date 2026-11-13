// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "org.localsend.localsend_app",
  "name": "LocalSend",
  "groups": [
    {
      "key": 0,
      "name": "功能类-文件传输时自动点击[高级]",
      "rules": [
        {
          "fastQuery": true,
          "matchRoot": true,
          "actionCd": 3500,
          "forcedTime": 100000,
          "activityIds": ".MainActivity",
          "matches": "@[desc=\"高级\"] < View <2 View[childCount=2] < View < View < FrameLayout < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/26321028",
          "excludeSnapshotUrls": "https://i.gkd.li/i/26314724",
          "exampleUrls": "https://e.gkd.li/54a7208c-03b2-4e74-a8ed-99829d72c8c5"
        }
      ]
    }
  ]
});
