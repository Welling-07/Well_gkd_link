// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wzwh.bzpaipan",
  "name": "问真八字排盘",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告",
      "fastQuery": true,
      "activityIds": "com.qq.e.ads.PortraitADActivity",
      "snapshotUrls": "https://i.gkd.li/i/13162912",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.qq.e.ads.PortraitADActivity",
          "matches": "@ImageView[clickable=true] < LinearLayout[childCount=1] <2 FrameLayout[childCount=2] < [id=\"android:id/content\"][childCount=1]",
          "snapshotUrls": "https://i.gkd.li/i/13162912"
        }
      ]
    }
  ]
});
