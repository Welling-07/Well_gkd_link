// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.craftvpn.craft",
  "name": "小牛加速器",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "desc": "点击X",
      "order": -10,
      "fastQuery": true,
      "actionMaximum": 1,
      "matchTime": 10000,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "@View < View[childCount=2] < View[childCount=1] < View[childCount=1] < FrameLayout[childCount=1] < FrameLayout[childCount=1] < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/13914788",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    }
  ]
});
