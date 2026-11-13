// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "mikuclub.app",
  "name": "初音社",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-谷歌广告",
      "desc": "点击关闭",
      "forcedTime": 10000,
      "rules": [
        {
          "forcedTime": 10000,
          "activityIds": "com.google.android.gms.ads.AdActivity",
          "matches": "[text^=\"关闭广告\"] + View >2 Image[text=\"\"]",
          "exampleUrls": "https://m.gkd.li/57941037/2fa2793e-187e-44e6-91e4-6a5a355568c6",
          "snapshotUrls": "https://i.gkd.li/i/14306002"
        }
      ]
    }
  ]
});
