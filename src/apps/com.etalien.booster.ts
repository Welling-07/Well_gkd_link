// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.etalien.booster",
  "name": "外星人加速器",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "position": {
            "left": "width * 0.9037",
            "top": "width * 0.2976"
          },
          "activityIds": ".mobile.MainActivity",
          "matches": "View[childCount=3] > @View[childCount=1] >2 FrameLayout[childCount=4]",
          "exampleUrls": "https://m.gkd.li/57941037/33c6f9e3-25d7-4a5c-868a-35726ea9554e",
          "snapshotUrls": "https://i.gkd.li/i/15142013"
        },
        {
          "position": {
            "left": "width * 0.9037",
            "top": "width * 0.2976"
          },
          "activityIds": "com.etalien.booster.mobile.MainActivity",
          "matches": "View[childCount=3] > @View[childCount=1] >2 FrameLayout[childCount=4]",
          "exampleUrls": "https://m.gkd.li/57941037/33c6f9e3-25d7-4a5c-868a-35726ea9554e",
          "snapshotUrls": "https://i.gkd.li/i/15142013"
        }
      ]
    }
  ]
});
