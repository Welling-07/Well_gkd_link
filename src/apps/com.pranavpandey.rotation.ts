// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.pranavpandey.rotation",
  "name": "Rotation",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告",
      "rules": [
        {
          "activityIds": "com.google.android.gms.ads.AdActivity",
          "matches": "[desc=\"Interstitial close button\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/23497601"
        }
      ]
    }
  ]
});
