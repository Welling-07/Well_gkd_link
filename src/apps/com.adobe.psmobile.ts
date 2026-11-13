// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.adobe.psmobile",
  "name": "Photoshop Express",
  "groups": [
    {
      "key": 0,
      "name": "评价提示",
      "desc": "点击[不,谢谢]",
      "rules": [
        {
          "fastQuery": true,
          "action": "clickCenter",
          "activityIds": ".MainActivity",
          "matches": "@[desc=\"不，谢谢\"] < [childCount=2] <4 View[childCount=4] < View < WebView < * < * < [id=\"android:id/custom\"]",
          "snapshotUrls": "https://i.gkd.li/i/26115696"
        }
      ]
    }
  ]
});
