// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "org.moegirl.moegirlview",
  "name": "萌娘百科",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-搜索页广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@ImageView[width<50 && height<50] < FrameLayout <3 FrameLayout[childCount>3] <<7 View - View > EditText <<7 [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/26493172"
        }
      ]
    }
  ]
});
